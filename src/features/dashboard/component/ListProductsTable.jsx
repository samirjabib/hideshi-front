export const ListProductTables = ({products}) => {
    const category = 'T-shirt'
    console.log(products)
    return(
        <div className="relative overflow-x-auto mt-14 rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-text_gray_for_span uppercase bg-[#f4f5f7] border">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( ({name, price,img,id}) => {
                        console.log(name)

                        return(
                            <tr className="border-b bg-bg_light_primary  border-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowra">
                                    {name}
                                </th>
                                <td className="px-6 py-4">
                                    {category}
                                </td>
                                <td className="px-6 py-4">
                                    {price}
                                </td>
                                <td className="px-6 py-4">
                                    <img src={img} alt='img' className="w-8 h-8"/>
                                </td>
                            </tr>
                        )
                    })}
                
                   
                </tbody>
            </table>
        </div>
    )
}