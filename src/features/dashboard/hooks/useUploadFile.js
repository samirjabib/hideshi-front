import { useState } from "react"

export const useUploadFile = () => {


    const [ files, setFiles ] = useState([])

    const onFileInputChange = ( {target }) => {

        if(target.files === 0) return 

        const fileObj = [];
        const fileArray = []

        fileObj.push(target.files)
        for(let i = 0; i < this.fileObj[0].lenght; i++){
            fileArray.push(URL.createObjectURL(fileObj[0][1]))
        }
        setFiles(fileArray)

        
    const onResetFiles = () => {
        setFiles([])
    }



    return{ 
        files,


        onFileInputChange,
        onResetFiles,
    }
}


