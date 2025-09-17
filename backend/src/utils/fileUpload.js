import path from "path"

const uploadFile = (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        if (Array.isArray(localFilePath)) {
            return localFilePath.map(filePath => (`/public/uploads/${path.basename(filePath)}`))
        } 
        
        return `/public/uploads/${path.basename(localFilePath)}`
    } catch (error) {
        console.error("Upload error:", error);
        return null
    }
}


export { uploadFile }