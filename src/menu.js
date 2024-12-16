import React, { useState, useRef, useEffect } from 'react';
// import './dropdown.css'; // Import the CSS file for styling

const AccessibleDropdown = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex + 1) % options.length);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    } else if (key === 'Enter' || key === ' ') {
      if (isOpen && focusedIndex >= 0) {
        selectOption(focusedIndex);
      } else {
        toggleDropdown();
      }
    } else if (key === 'Escape') {
      closeDropdown();
    }
  };

  const selectOption = (index) => {
    alert(`You selected: ${options[index]}`);
    closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current !== event.target) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        onBlur={closeDropdown}
      >
        Dropdown
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-activedescendant={focusedIndex >= 0 ? `option-${focusedIndex}` : undefined}
          tabIndex="-1"
        >
          {options.map((option, index) => (
            <li
              key={index}
              id={`option-${index}`}
              role="option"
              aria-selected={focusedIndex === index}
              tabIndex={focusedIndex === index ? 0 : -1}
              onKeyDown={handleKeyDown}
              onClick={() => selectOption(index)}
              className={focusedIndex === index ? 'focused' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccessibleDropdown;
