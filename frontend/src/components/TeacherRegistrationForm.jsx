import { useState } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import FileInput from './FileInput';
import InputField from './InputField';
import MultiSelectDropdown from './MultiSelectDropdown';
import Textarea from './Textarea';
import SectionHeading from './SectionHeading';
import { emailValidation, pincodeValidation, phoneValidation } from "../lib/utils.js"
import { registerTeacher } from '../services/RegistrationService.js';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';

const validateForm = (formData) => {
    const errors = {};
    const { name, email, phone, password, gender, address } = formData;

    if (!name?.trim()) {
        errors.name = "Name is required"
    }
    if (!email?.trim()) {
        errors.email = "Email is required"
    }
    else if (!emailValidation(email.trim())) {
        errors.email = "Invalid email format"
    }
    if (!phone?.trim()) {
        errors.phone = "Phone is required"
    }
    else if (!phoneValidation(phone.trim())) {
        errors.phone = "Phone number must be exactly 10 digits"
    }
    if (!password?.trim()) {
        errors.password = "Password is required"
    }
    if (!gender?.trim()) {
        errors.gender = "Gender is required"
    }
    if (address.pincode?.length > 0 && !pincodeValidation(address.pincode.trim())) {
        errors.pincode = "Pincode must be exactly 6 digits";
    }

    return errors;
}

const buildFormData = (formData) => {
    const data = new FormData();

    const normalFields = ["name", "email", "phone", "password", "gender", "bio", "experience", "schoolName", "studentsMentored"];
    normalFields.forEach((field) => data.append(field, formData[field]));

    // data.append("name", formData.name);
    // data.append("email", formData.email);
    // data.append("phone", formData.phone);
    // data.append("password", formData.password);
    // data.append("gender", formData.gender);
    // data.append("bio", formData.bio);
    // data.append("experience", formData.experience);
    // data.append("schoolName", formData.schoolName);
    // data.append("studentsMentored", formData.studentsMentored);

    
    data.append("address", JSON.stringify(formData.address));
    data.append("socialLinks", JSON.stringify(formData.socialLinks));

    
    formData.classNames.forEach(item => data.append("classNames", item));
    formData.subjects.forEach(item => data.append("subjects", item));
    formData.qualifications.forEach(item => data.append("qualifications", item));
    formData.board.forEach(item => data.append("board", item));

    // files
    if (formData.profileImageUrl) {
        data.append("profileImageUrl", formData.profileImageUrl);
    }
    if (formData.resumeFileUrl) {
        data.append("resumeFileUrl", formData.resumeFileUrl);
    }
    // if (formData.documents?.length) {
        formData.documents?.forEach((doc) => data.append("documents", doc));
    // }

    data.append("approvalStatus", "pending");
    data.append("status", "active");
    data.append("type", "Teacher");
    return data
}

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    bio: "",
    profileImageUrl: null,
    classNames: [],
    subjects: [],
    qualifications: [],
    experience: 0,
    board: [],
    schoolName: "",
    studentsMentored: "",
    resumeFileUrl: null,
    address: {
        area: "",
        street: "",
        city: "Doha",
        landmark: "",
        pincode: "",
        country: "",
    },
    socialLinks: {
        linkedIn: "",
    },
    documents: [],
}

const TeacherRegistrationForm = () => {
    const genderOptions = ["Male", "Female", "Other"];
    const subjectOptions = ["Physics", "Mathematics", "Biology", "Computer Science", "English"]
    const classNamesOptions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
    const boardOptions = ["CBSE", "ICSE", "State Board", "Other"]
    const qualificationsOptions = ["SSC", "HSC", "Bachelors", "Masters", "PhD"]


    const profileImageRef = useRef(null)
    const resumeFileRef = useRef(null)
    const documentsRef = useRef(null)
    // const classNamesRef = useRef(null)
    // const subjectsRef = useRef(null)
    // const qualificationsRef = useRef(null)
    // const boardRef = useRef(null)

    const [formData, setFormData] = useState(initialFormData)
    const [isSubmit, setIsSubmit] = useState(false)

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        pincode: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateForm(formData);
        setErrors(validationErrors)
        
        if(Object.keys(validationErrors).length === 0) {
            try {
                setIsSubmit(true)
                const data = buildFormData(formData);
                console.log("data", data)

                const response = await registerTeacher(data)
                console.log("Teacher registered successfully:", response.data)
                toast.success('Teacher registered successfully.')
                setFormData(initialFormData)

                if(profileImageRef.current) {
                    profileImageRef.current.value = null
                }
                if(resumeFileRef.current) {
                    resumeFileRef.current.value = null
                }
                if(documentsRef.current) {
                    documentsRef.current.value = null
                }
                // if(classNamesRef.current) {
                //     classNamesRef.current.value = null
                // }
                // if(subjectsRef.current) {
                //     subjectsRef.current.value = null
                // }
                // if(qualificationsRef.current) {
                //     qualificationsRef.current.value = null
                // }
                // if(boardRef.current) {
                //     boardRef.current.value = null
                // }
            } catch (error) {
                if(error.response?.status === 409) {
                    toast.error("Teacher with the email or phone already exists.")
                }
                else {
                    toast.error("Teacher registration failed.")
                }
                console.log("Teacher registration failed", error.message)
                throw error
            }
            finally {
                setIsSubmit(false)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if(name.includes("address.")) {
            const addressField = name.split(".")[1]
            console.log("addressField", addressField)
            setFormData((prev) => ({...prev, 
                address: {...prev.address, [addressField]: addressField === "pincode" ? value.replace(/[^0-9]/g, "") : value}
            }))
        }
        else if(name.includes("socialLinks.")) {
            const socialLinksField = name.split(".")[1]
            console.log("socialLinksField", socialLinksField)
            setFormData((prev) => ({...prev, 
                socialLinks: {...prev.socialLinks, [socialLinksField]: value}
            }))
        }
        else {
            setFormData((prev) => ({...prev, [name]: name === "phone" ? value.replace(/[^0-9]/g, "") : value}))
        }
        if (value.trim() !== "") {
            setErrors(prev => ({ ...prev, [name]: "" }))
        }
    }

    const handleMultiSelectChange = (field) => (e) => {
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
        // console.log("selectedValues", e.target.selectedOptions)
        setFormData((prev) => ({
            ...prev,
            [field]: selectedValues,
        }));
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target
        if(name === "documents") {
            console.log("name: ", name, "files", Array.from(files))
        }
        else {
            console.log("name: ", name, "files", files[0])
        }
        setFormData((prev) => ({...prev,
            [name]: name !== "documents" ? files[0] : Array.from(files)
        }))
    }

    return (
        <div className="h-screen flex justify-center py-5 sm:py-[60px] mx-5">
            <form className="w-3xl" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl font-medium pb-3">Teacher Registration Form</h1>
                <SectionHeading title="General Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="name" placeholder="Enter your name" name="name" isRequired={true} value={formData.name} onChange={handleChange} errors={errors.name} />
                    <InputField label="email" placeholder="Enter your email" name="email" isRequired={true} value={formData.email} onChange={handleChange} errors={errors.email} />
                    <InputField label="password" inputType="password" placeholder="Enter your password" name="password" isRequired={true} value={formData.password} onChange={handleChange} errors={errors.password} />
                    <InputField label="phone" placeholder="Enter your phone" name="phone" isRequired={true} value={formData.phone} onChange={handleChange} errors={errors.phone} maxLength={10}  />
                    <Dropdown label="gender" options={genderOptions} name="gender" isRequired={true} value={formData.gender} onChange={handleChange} errors={errors.gender} />
                    <FileInput label="profile image" ref={profileImageRef} name="profileImageUrl" onChange={handleFileChange} />
                    <Textarea label="bio" placeholder="Enter bio..." name="bio" value={formData.bio} onChange={handleChange} />
                </div>
                <SectionHeading title="Professional Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <MultiSelectDropdown label="class names" name="classNames" value={formData.classNames} options={classNamesOptions} onChange={handleMultiSelectChange("classNames")} />
                    <MultiSelectDropdown label="subjects" name="subjects" value={formData.subjects} options={subjectOptions} onChange={handleMultiSelectChange("subjects")}  />
                    <MultiSelectDropdown label="qualifications" name="qualifications" value={formData.qualifications} options={qualificationsOptions} onChange={handleMultiSelectChange("qualifications")} />
                    <InputField label="experience" inputType="number" placeholder="Enter your experience" name="experience" value={formData.experience} onChange={handleChange} />
                    <MultiSelectDropdown label="board" name="board" value={formData.board} options={boardOptions} onChange={handleMultiSelectChange("board")} />
                    <InputField label="school" name="schoolName" placeholder="Enter your school" value={formData.schoolName} onChange={handleChange} />
                    <InputField label="students mentored" inputType="number" name="studentsMentored" placeholder="Enter students mentored" value={formData.studentsMentored} onChange={handleChange} />
                    <FileInput label="resume upload" ref={resumeFileRef} name="resumeFileUrl" onChange={handleFileChange} />
                </div>
                <SectionHeading title="Address Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="area" placeholder="Enter area" name="address.area" value={formData.address?.area || ""} onChange={handleChange} />
                    <InputField label="street" placeholder="Enter street" name="address.street" value={formData.address?.street || ""} onChange={handleChange} />
                    <InputField label="city" placeholder="Enter city" name="address.city" value={formData.address?.city || ""} onChange={handleChange} />
                    <InputField label="landmark" placeholder="Enter landmark" name="address.landmark" value={formData.address?.landmark || ""} onChange={handleChange} />
                    <InputField label="pincode" placeholder="Enter pincode" name="address.pincode" value={formData.address?.pincode || ""} onChange={handleChange} maxLength={6} />
                    <InputField label="country" placeholder="Enter country" name="address.country" value={formData.address?.country || ""} onChange={handleChange} />
                </div>
                <SectionHeading title="Social Links" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="linkedin" placeholder="Enter linkedin" name="socialLinks.linkedIn" value={formData.socialLinks?.linkedIn || ""} onChange={handleChange} />
                </div>
                <SectionHeading title="Documents" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2 mb-5">
                    <FileInput label="documents upload" ref={documentsRef} name="documents" onChange={handleFileChange} multiple={true} />
                </div>
                <Button btnName={isSubmit ? "Submitting..." : "Submit"} />
                <Toaster />
            </form>
        </div>
    )
}
export default TeacherRegistrationForm