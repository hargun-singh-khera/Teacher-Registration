const Textarea = ({label, name, placeholder, onChange}) => {
    return (
        <div className="max-w">
            <label htmlFor={label} className="block text-sm font-medium mb-2">{label[0].toUpperCase() + label.slice(1)}</label>
            <textarea id={label} name={name} className="py-2 px-3 sm:py-3 sm:px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="3" placeholder={placeholder} onChange={onChange}></textarea>
        </div>
    )   
}
export default Textarea