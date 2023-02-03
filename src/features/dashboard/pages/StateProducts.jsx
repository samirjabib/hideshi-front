import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useNavigate } from "react-router-dom"
import { ErrorFallback, Loading } from "../../../components"
import { Input } from "../../auth/components"
import { DropDown, ListProductTables } from "../component"
import { useCategorySelected, useProductsStore } from "../hooks"

export const StateProducts = () => {

    const { isSelected,  listCategories, setIsSelected} = useCategorySelected()
    const { products, setProductModal } = useProductsStore();

    const openModal =(event) => {
        event.preventDefault()
        setProductModal(true)
    }

    const navigate = useNavigate()

  


    return(
        <div className="w-full container mx-auto max-w-5xl relative ">
            <h2 className="text-lg font-semibold">Products</h2>
            <form className="w-full rounded-md p-8 bg-bg_light_primary mt-6 border ">
                <div className="">
                    <Input 
                        styles={'bg-[#f4f5f7] p-2.5 rounded-md mb-4'} 
                        placeholder='Search product by name'    
                    />
                    <DropDown
                        isSelected={isSelected}
                        listCategories={listCategories}
                        setIsSelected={setIsSelected}
                    />
                    <button
                        className="bg-bg_dark_primary text-bg_light_primary w-full p-2.5 rounded-md mt-4"
                        onClick={openModal}
                    >
                        Add Product
                    </button>
                </div>
            </form>

            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate('dashboard/state-products')}
            >
                <Suspense fallback={<Loading/>}>
                    <ListProductTables products={products}/>
                </Suspense>
            </ErrorBoundary>

           
        </div>
    )
}