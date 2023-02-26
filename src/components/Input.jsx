
export const Input = ({styles, placeholder, onChange, type }) => {
  return (
    <input placeholder={placeholder} className={styles} type={type} onChange={onChange}/>
  )
}
