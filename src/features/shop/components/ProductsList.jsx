import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useNavigate } from "react-router-dom"
import { ErrorFallback } from "../../../components"
import { ProductCard } from "./ProductCard"

export const ProductsList = ({ products }) => {
    
    const navigate = useNavigate()

    return(
        <div className="container mx-auto">
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate('/')}
            >
                <Suspense>
                <div className=" grid grid-cols-2 gap-4  md:grid-cols-4 ">
                    { products.map( product => {
                        return(
                            <ProductCard key={product.id} product={product}  /> 
                        )
                    })}
                </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
    
}