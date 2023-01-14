export const InputCrud = ({placeholder, name, label, type}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 mb-6 md:mb-8">
            <label className="col-span-1 text-sm">{label}</label>
            <input 
                className="bg-[#f4f5f7] rounded px-2 py-3 w-full outline-none col-span-3 text-sm"
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
};