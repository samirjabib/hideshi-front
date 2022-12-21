import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {

    const { id } = useParams();

    console.log(id)

    return(
        <div>
            <h1>Im a product page</h1>
        </div>
    )
};