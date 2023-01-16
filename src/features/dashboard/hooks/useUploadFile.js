import { useState } from "react"

export const useUploadFile = () => {


    const [ files, setFiles ] = useState([])

    const onFileInputChange = ( {target }) => {

        if(target.files === 0) return
        const {files, name} = target
        
        const filesToUpload = [];
            
        for (const file of files){
            filesToUpload.push({file})

            setFiles({
                ...filesToUpload,
                file,                
            })
        }
      
    }


    return{ 
        files,


        onFileInputChange,
    }
}


