import React, { useState, useEffect, useRef } from 'react';
import './ThirdSlide.css';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    const handleInputClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={`dropdown-container ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <input className='dropdown-input'
                type="text"
                placeholder="Click to open dropdown"
                onClick={handleInputClick}
                value={selectedOption}
            />
            {isOpen && (
                <div className="dropdown-options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="option"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
