import { CategoryCard } from "../components";


const categoriesList = [
    {
        id:1, 
        imgUrl:" https://cdn.shopify.com/s/files/1/0087/6193/3920/files/Outerwear_21370e92-5a56-4eaf-b42f-2f3a14291e73_1080x.jpg?v=1669317122",
        title:'img-1'
    },
    {
        id:2, 
        imgUrl:"https://cdn.shopify.com/s/files/1/0087/6193/3920/files/NewArrivals_5aa86c07-cd9e-4160-9386-f13add22b5b5_1080x.jpg?v=1669317103",
        title:'img-2'
    },
    {
        id:3, 
        imgUrl:"https://cdn.shopify.com/s/files/1/0087/6193/3920/files/Bottoms_457fa149-1f8b-42bf-aac2-2303ebbadecf_1080x.jpg?v=1669317164",
        title:'img-3'
    },
    {
        id:4, 
        imgUrl:"https://cdn.shopify.com/s/files/1/0087/6193/3920/files/Knits_f9290e84-700a-4adc-9a30-84655bdd9ef5_1080x.jpg?v=1669317175",
        title:'img-4'
    },
]


export const CategoriesList = () => {
    
    return (
        <div className='bg-[#EDF2F4] h-[150vh] grid md:grid-cols-2 md:grid-row-2 shadow-2xl'>
            
            {
                categoriesList.map( category => {
                    return(
                        <CategoryCard category = {category}/>
                    )
                })
            }
        </div>
    );
};
