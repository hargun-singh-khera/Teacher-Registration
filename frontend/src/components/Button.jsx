const Button = ({ isSubmit=false }) => {
    return (  
        <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-hidden focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
            {isSubmit && <span className="animate-spin inline-block size-4 border-3 border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>}
            {isSubmit ? "Submitting" : "Submit"}
        </button>
    )
}
export default Button