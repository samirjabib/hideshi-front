export const InputCrud = ({productName, placeholder, value, name, onInputChange}) => {
    return(
        <div>
            <label htmlFor="">{productName}</label>
            <input 
                placeholder={placeholder}
                className=''
                onChange={onInputChange}
            />
        </div>
    )
}