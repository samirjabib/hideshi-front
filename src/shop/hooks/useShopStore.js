import { useSelector, useDispatch } from "react-redux";
import { setProducts, startLoadingProducts} from "../../store/slices/products/productsSlice";
import { dummieData } from '../../assets/data-shop/data';

console.log(dummieData)

export const useShopStore = () => {

    const dispatch = useDispatch();
    const { products } = useSelector( state => state.products )
    
    

    
}

