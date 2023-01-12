export const ListProductTables = ({products}) => {
    const category = 'T-shirt'
    console.log(products)
    return(
        <div class="relative overflow-x-auto mt-14 rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-text_gray_for_span uppercase bg-[#f4f5f7] border">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( ({name, price,img,id}) => {
                        console.log(name)

                        return(
                            <tr class="border-b bg-bg_light_primary  border-gray-300">
                                <th scope="row" class="px-6 py-4 font-medium whitespace-nowra">
                                    {name}
                                </th>
                                <td class="px-6 py-4">
                                    {category}
                                </td>
                                <td class="px-6 py-4">
                                    {price}
                                </td>
                                <td class="px-6 py-4">
                                    <img src={img} alt='img'/>
                                </td>
                            </tr>
                        )
                    })}
                
                   
                </tbody>
            </table>
        </div>
    )
}