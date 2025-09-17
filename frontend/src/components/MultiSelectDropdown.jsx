import { capitalizeString } from "../lib/utils.js";
import { forwardRef } from 'react';

const MultiSelectDropdown = ({label, options, value, onChange}, ref) => {
    return (
        <div className="flex flex-col text-left gap-2">
            <label htmlFor={label} className="text-sm">{capitalizeString(label)}</label>
            <select
                multiple
                data-hs-select={`{
                    "placeholder": "Select multiple options...",
                    "toggleTag": "<button type='button' aria-expanded='false'></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500",
                    "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto",
                    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg",
                    "optionTemplate": "<div class='flex justify-between items-center w-full'><span data-title></span><span class='hidden hs-selected:block'><svg class='shrink-0 size-3.5 text-blue-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg></span></div>",
                    "extraMarkup": "<div class='absolute top-1/2 end-3 -translate-y-1/2'><svg class='shrink-0 size-3.5 text-gray-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m7 15 5 5 5-5'/><path d='m7 9 5-5 5 5'/></svg></div>"
                }`}
                className="hidden"
                ref={ref}
                value={value}
                onChange={onChange}
                >
                <option defaultValue="" disabled>Choose</option>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}
export default forwardRef(MultiSelectDropdown)