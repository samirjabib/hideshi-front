import { Link } from "react-router-dom";

export const CategoryCard = ({category}) => {

    const { title, imgUrl } = category
    return (
            <div className='bg-yellow-100  flex items-center justify-center relative m-2 '>
                    
                    <Link to='/shop'
                    className="relative h-full w-full">
                    <img 
                        src={imgUrl} 
                        alt={title}
                        className='w-full h-full absolute object-cover'
                    />
                     </Link>
            </div>

    );
};

