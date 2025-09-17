import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const SelectDropdown = ({ options }) => {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("")

  const handleClickAway = () => setIsDropDownVisible(false)

  const dropdownContent = (
    <div className="absolute top-full mt-1 z-10 w-full bg-white border border-neutral-300 rounded shadow-md text-left ">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {setSelectedOption(option); setIsDropDownVisible(false)}}
          className="px-3 py-2 cursor-pointer hover:bg-neutral-100 text-neutral-800"
        >
          {option}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full flex justify-center">
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="w-full relative">
                <div
                    onClick={() => setIsDropDownVisible(!isDropdownVisible)}
                    className={`border border-neutral-300 px-5 py-2 rounded-md h-10 w-full flex items-center bg-white justify-between cursor-pointer ${selectedOption ? "" : "text-gray-500"}`}
                >
                    {selectedOption || "Select"} <FaCaretDown className={`${isDropdownVisible ? "rotate-180" : ""}`} />
                </div>
                {isDropdownVisible && dropdownContent}
            </div>
        </ClickAwayListener>
    </div>
  );
};

export default SelectDropdown;
