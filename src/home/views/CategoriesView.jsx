import { CategoryCard } from "../components";


const categoriesList = [
    {
        id:1, 
        imgUrl:" https://www.mattelsa.net/media/Home/01GraficasH21nov2022.jpg",
        title:'img-1'
    },
    {
        id:2, 
        imgUrl:"https://www.mattelsa.net/media/Home/03DenimH21nov2022.jpg",
        title:'img-2'
    },
    {
        id:3, 
        imgUrl:"https://www.mattelsa.net/media/Home/03DenimH21nov2022.jpg",
        title:'img-3'
    },
    {
        id:4, 
        imgUrl:"https://www.mattelsa.net/media/Home/01GraficasH21nov2022.jpg",
        title:'img-4'
    },
]


export const CategoriesList = () => {
    
    return (
        <div className='bg-[#ffffff] h-[150vh] grid md:grid-cols-2 md:grid-row-2 shadow-2xl  '>
            
            {
                categoriesList.map( category => {
                    return(
                        <CategoryCard category = {category} key={category.id}/>
                    )
                })
            }
        </div>
    );
};
