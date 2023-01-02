export const MaterialSpecifications = () => {

    const description = {
        material:'100% Brushed Cotton Twill',
        bush:'lorem4 zasa fumando wakon',
        label:'hideshi big stock flag label at left thigh',
        made_in:'National'

    }




    return(
        <div className=" py-4 mt-9 ">
            <h4 className="text-bg_dark_primary text-xs font-semibold mb-2 " >Specifications</h4>
            <ul className=" text-xs ">
                <li>- {description.made_in}</li>
                <li>- {description.bush}</li>
                <li>- {description.label}</li>
            </ul>

            <p className="uppercase text-sm font-bold mt-4 decoration-dotted">size chart</p>
        </div>
    )
}