export const ListProductTables = ({products}) => {
    return(
        <table className="w-full border rounded-md mt-4 table-auto overflow-scroll" >
            <thead className="">
                <tr className="flex rounded-md h-14 items-center justify-between text-center p-6">
                    <th className="w-24">Name</th>
                    <th className="w-24">Category</th>
                    <th className="w-24">Price</th>
                    <th className="w-24">Img</th>
                </tr>
            </thead>
            <tbody
                className="bg-bg_light_primary"
            >
                {products.map( ({id, img, name, price}) => {
                    const category = 'T-shirt'
                    return(
                        <tr key={id} className='flex flex-row justify-between items-center border text-center p-6'>
                            <td className="w-24">{name}</td>
                            <td className="w-24 mr-8">{category}</td>
                            <td className="w-24">COP {price}</td>
                            <img 
                                src={img} 
                                alt='img'
                                className=" h-20 w-20"
                            />
                        </tr>
                    )
                })

                }
            </tbody>
        </table>
    )
}