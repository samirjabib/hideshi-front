export const InputCrud = ({placeholder, name, label, type, onInputChange}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 mb-6 md:mb-8">
            <label className="col-span-1 text-sm">{label}</label>
            <input 
                className="bg-[#f4f5f7]  px-2 py-3 w-full outline-none col-span-3 text-sm border rounded-md"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onInputChange}
            />
        </div>
    )
};