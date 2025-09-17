import api from "../api/axiosInstance.js"

const registerTeacher = async (payload) => {
    try {
        const response = await api.post("/teacher", payload)
        console.log("Success:", response.data)
        return response
    } catch (error) {
        console.log("Error:", error.message)
        throw error    
    }
}

export {
    registerTeacher
}