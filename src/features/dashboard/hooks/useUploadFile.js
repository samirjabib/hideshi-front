import { useState } from "react"

export const useUploadFile = () => {


    const [ files, setFiles ] = useState([])
    const onFileInputChange = ( {target }) => {

        if(target.files === 0) return
        const { files } = target

        const filesToUpload = [];
            
        for (let i = 0; i < files.length; i++) {
            filesToUpload.push(URL.createObjectURL(files[i]))
        }

        setFiles(filesToUpload)
    }

    console.log(files)

        
    const onResetFiles = () => {
        setFiles([])
    }



    return{ 
        files,


        onFileInputChange,
        onResetFiles,
    }
}


