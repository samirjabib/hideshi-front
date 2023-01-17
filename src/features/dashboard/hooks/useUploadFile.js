import { useState } from "react"

export const useUploadFile = () => {


    const [ filesImg, setFiles ] = useState([])

    const onFileInputChange = ( {target }) => {

        if(target.files === 0) return
        const { files } = target
        
        const filesToUpload = [];
            
        for (const file of files){
            filesToUpload.push(file)

            setFiles(filesToUpload )
        }
      
    }

    console.log(filesImg)


    return{ 
        filesImg,


        onFileInputChange,
    }
}


