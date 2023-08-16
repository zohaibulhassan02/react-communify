import React from 'react';

const percentage = 34;

function getColorFromPercentage(percentage) {
  if (percentage >= 90) {
    return "#7C3AED";
  } else if (percentage <= 89 && percentage >= 80) {
    return "#814095";
  } else if (percentage <= 79 && percentage >= 70) {
    return "#5D3FD3	";
  } else if (percentage <= 69 && percentage >= 60) {
    return "#E5422C";
  } else {
    return "red";
  }
}

function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(`${(R * (100 + percent)) / 100}`, 10);
    G = parseInt(`${(G * (100 + percent)) / 100}`, 10);
    B = parseInt(`${(B * (100 + percent)) / 100}`, 10);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    const RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
    const GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
    const BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

    return `#${RR}${GG}${BB}`;
}

const DEFAULT_RADIUS = 100;
const MAX_VALUE = 10;

const Direction = {
    CLOCKWISE: -1,
    ANTI_CLOCKWISE: 1,
};

const CircularProgressBar = ({
    text,
    maxValue,
    selectedValue,
    radius,
    dashCount,
    strokeWidth,
    dashWidth,
    dashSpacing,
    label,
    activeStrokeColor,
    inactiveStrokeColor,
    backgroundColor,
    textColor,
    labelFontSize,
    valueFontSize,
    withGradient,
    anticlockwise,
    initialAngularDisplacement,
}) => {
    // ----  PIE calculation function --------
    const renderDashedSegments = () => {
        const dashedSegments = [];
        const anglePerSegment = (2 * Math.PI) / dashCount;
        const dashLength = dashWidth + dashSpacing;

        for (let i = 0; i < dashCount; i++) {
            const startAngle = initialAngularDisplacement * (Math.PI / 180) + i * anglePerSegment;
            const endAngle = startAngle + (dashWidth / radius) * anglePerSegment;

            const activeColor = withGradient
                ? shadeColor(activeStrokeColor, ((i + 1) * maxValue) / 50)
                : activeStrokeColor;

            const strokeColor =
                selectedValue > 0 && i <= selectedValue ? activeColor : inactiveStrokeColor;

            const dashPath = describeArc(radius, radius, radius - strokeWidth / 2, startAngle, endAngle);

            dashedSegments.push(
                <path
                    key={i}
                    d={dashPath}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    style={{
                        backgroundColor:'red'
                    }}
                />
            );
        }

        return dashedSegments;
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);

        const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

        const d = [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(' ');

        return d;
    };

    const polarToCartesian = (centerX, centerY, radius, angleInRadians) => {
        const x = centerX + radius * Math.cos(angleInRadians);
        const y = centerY + radius * Math.sin(angleInRadians);
        return { x, y };
    };

    const labelView = (
        <text
            fill={textColor}
            fontSize={labelFontSize}
            x={radius}
            y={radius + labelFontSize}
            textAnchor="middle"
        >
            {label}
        </text>
    );

    const textValueY = label ? radius : radius + valueFontSize / 3;

    return (
        <svg width={radius * 2} height={radius * 2} >
            <defs>
                <filter id="circle-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="23.259906768798828"
                        dy="23.259906768798828"
                        stdDeviation="31.013208389282225"
                        floodColor="#000000"
                        floodOpacity="0.08"
                    />
                </filter>
            </defs>
            {renderDashedSegments()}
    
            {/* This is the overlay circle */}
            <circle
                r={radius - strokeWidth / 2}
                cx={radius}
                cy={radius}
                fill={backgroundColor}
            />
    
            {/* Inner circle with shadow */}
            <circle
                r={70}
                cx={radius}
                cy={radius}
                fill={backgroundColor}
                filter="url(#circle-shadow)"
            />
    
            <text
                fill={getColorFromPercentage(percentage)}
                fontSize={valueFontSize}
                fontWeight="bold"
                x={radius}
                y={textValueY}
                textAnchor="middle"
            >
                {percentage}%
            </text>
    
            {!!label.length && labelView}
        </svg>
    );
    
};

CircularProgressBar.defaultProps = {
    maxValue: MAX_VALUE,
    selectedValue: 0,
    radius: DEFAULT_RADIUS,
    dashCount: 26, // Number of dashes
    strokeWidth: 20, // Adjust this value for the desired segment thickness
    dashWidth: 7, // Width of each dash
    dashSpacing: 5, // Space between dashes
    label: '',
    activeStrokeColor: '#7C3AEC',
    inactiveStrokeColor: '#ddd',
    backgroundColor: '#fff',
    textColor: '#000',
    labelFontSize: Math.floor(DEFAULT_RADIUS / 3),
    valueFontSize: Math.floor(DEFAULT_RADIUS / 2.5),
    withGradient: false,
    anticlockwise: false,
    initialAngularDisplacement: 0,
};

export default CircularProgressBar;
