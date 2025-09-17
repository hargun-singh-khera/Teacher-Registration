import { Teacher } from "../models/teacher.models.js"
import { uploadFile } from "../utils/fileUpload.js"

const registerTeacher = async (req, res) => {
    try {
        const { name, email, password, phone, gender, bio, classNames, subjects, qualifications, experience, board, schoolName, studentsMentored, address, socialLinks } = req.body

        if([name, email, password, phone, gender].some((field) => !field || field?.trim() === "")) {
            return res.status(400).json({message: "All fields are required."})
        }
        console.log("password:", password)

        const existedTeacher = await Teacher.findOne({
            $or: [{email}, {phone}]
        })
        
        if(existedTeacher) {
            return res.status(409).json({message: "Teacher with this email or phone number already exists."})
        }
        console.log("req.files: ", req.files)

        const profileImageLocalPath = req.files?.profileImageUrl?.[0]?.path || null
        const resumeFileLocalPath = req.files?.resumeFileUrl?.[0]?.path || null
        const documentsLocalPath = req.files?.documents?.map(file => file.path) || null
 
        const profileImageUrl = uploadFile(profileImageLocalPath)
        const resumeFileUrl = uploadFile(resumeFileLocalPath)
        const documents = uploadFile(documentsLocalPath)

        const teacher = new Teacher({
            name,
            email,
            password,
            phone,
            gender,
            bio,
            profileImageUrl,
            classNames,
            subjects,
            qualifications,
            experience,
            board,
            schoolName,
            studentsMentored,
            resumeFileUrl,
            address: {
                area: address?.area || "",
                street: address?.street || "",
                city: address?.city || "Doha",
                landmark: address?.landmark || "",
                pincode: address?.pincode || "",
                country: address?.country || "",
            },
            socialLinks: {
                linkedIn: socialLinks?.linkedIn || "",
            },
            documents,
        })
        await teacher.save()

        return res.status(201).json({message: "Teacher registered successfully.", teacher})
    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message})    
    }
}

export { registerTeacher }