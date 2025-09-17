import { capitalizeString } from "../lib/utils.js";

const FileInput = ({label, name, ref, onChange, ...props}) => {
    return (
        <div className="flex flex-col text-left gap-2">
            <label htmlFor={label} className="text-sm text-gray-900">{capitalizeString(label)}</label>
            <div className="max-w space-y-3">
                <label htmlFor="file-input-medium" className="sr-only">Choose file</label>
                <input 
                    type="file" 
                    name={name} 
                    ref={ref}
                    accept=".pdf, image/*"
                    id={name} 
                    onChange={onChange}
                    {...props}
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-3 file:px-4" 
                />
            </div>
        </div>
    )
}
export default FileInput