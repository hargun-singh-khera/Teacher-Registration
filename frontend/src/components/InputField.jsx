import { capitalizeString } from "../lib/utils.js";

const InputField = ({ label, name, inputType="text", placeholder, value, onChange, isRequired = false, errors="", ...props }) => {

    return (
        <div className="max-w space-y-4">
            {errors && errors !== "" ? (
                <div>
                    <label htmlFor={`hs-validation-${name}-error`} className="block text-sm font-medium mb-2">{capitalizeString(label)} {isRequired ? "*" : ""}</label>
                    <div className="relative">
                        <input 
                            type={inputType} 
                            id={`hs-validation-${name}-error`} 
                            name={name}
                            value={value} 
                            placeholder={placeholder} 
                            onChange={onChange}
                            {...props}
                            className="py-2.5 sm:py-3 px-4 block w-full border-red-500 rounded-lg sm:text-sm focus:border-red-500 focus:ring-red-500" required="" 
                            aria-describedby={`hs-validation-${name}-error-helper`} />
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="shrink-0 size-4 text-red-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" x2="12" y1="8" y2="12"></line>
                                <line x1="12" x2="12.01" y1="16" y2="16"></line>
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm text-red-600 mt-2" id={`hs-validation-${name}-error-helper`}>{errors}.</p>
                </div>
            ) : (
                <div>
                    <label htmlFor={`hs-validation-${name}-success`} className="block text-sm font-medium mb-2">{capitalizeString(label)} {isRequired ? "*" : ""}</label>
                    <div className="relative">
                        <input 
                            type={inputType} 
                            id={`hs-validation-${name}-success`} 
                            name={name}
                            value={value} 
                            placeholder={placeholder} 
                            onChange={onChange}
                            className={`py-2.5 sm:py-3 px-4 block w-full ${value !== "" && value !== null ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500" : ""}  rounded-lg sm:text-sm`} 
                            required=""
                            {...props}
                            aria-describedby={`hs-validation-${name}-success-helper`} />
                            {value !== 0 && value !== "" && value !== null && (<div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                <svg className="shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>)}
                    </div>
                    {value !== 0 && value !== "" && value !== null && <p className="text-sm text-teal-600 mt-2" id={`hs-validation-${name}-success-helper`}>Looks good!</p>}
                </div>
            )}

        </div>
    )
}
export default InputField