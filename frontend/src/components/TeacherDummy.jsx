import { useState } from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import FileInput from './FileInput';
import InputField from './InputField';
import MultiSelectDropdown from './MultiSelectDropdown';
import Textarea from './Textarea';
import SectionHeading from './SectionHeading';

const TeacherDummy = () => {
    const genderOptions = ["Male", "Female", "Other"];
    const subjectOptions = ["Physics", "Mathematics", "Biology", "Computer Science", "English"]
    const classNamesOptions = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
    const boardOptions = ["CBSE", "ICSE", "State Board", "Other"]
    const qualificationsOptions = ["SSC", "HSC", "Bachelors", "Masters", "PhD"]
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        bio: "",
        profileImageUrl: "",
        classNames: [],
        subjects: [],
        qualifications: [],
        experience: 0,
        board: [],
        schoolName: "",
        studentsMentored: "",
        resumeFile: "",
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
    })
    const [errors, setErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // if() {

        // } 
        // else {

        // }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    console.log(formData)

    return (
        <div className="h-screen flex justify-center py-5 sm:py-[60px] mx-5">
            <form className="w-3xl" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl font-medium pb-3">Teacher Registration Form</h1>
                <SectionHeading title="General Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="name" inputType="text" placeholder="Enter your name" name="name" isRequired={true} value={formData.name} onChange={handleChange} />
                    <InputField label="email" inputType="email" placeholder="Enter your email" name="email" isRequired={true} value={formData.email} onChange={handleChange} />
                    <InputField label="password" inputType="text" placeholder="Enter your password" name="password" isRequired={true} value={formData.password} onChange={handleChange} />
                    <InputField label="phone" inputType="text" placeholder="Enter your phone" name="phone" isRequired={true} value={formData.phone} onChange={handleChange} />
                    <Dropdown label="gender" options={genderOptions} isRequired={true} value={formData.gender} onChange={handleChange} />
                    <FileInput label="profile image" />
                    <Textarea label="bio" placeholder="Enter bio..." name="bio" value={formData.bio} onChange={handleChange} />
                </div>
                <SectionHeading title="Professional Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <MultiSelectDropdown label="class names" options={classNamesOptions} />
                    <MultiSelectDropdown label="subjects" options={subjectOptions} />
                    <MultiSelectDropdown label="qualifications" options={qualificationsOptions} />
                    <MultiSelectDropdown label="board" options={boardOptions} />
                    <InputField label="school" inputType="text" name="school" placeholder="Enter school" value={formData.school} onChange={handleChange} />
                    <InputField label="students mentored" inputType="number" name="studentsMentored" placeholder="Enter students mentored" value={formData.studentsMentored} onChange={handleChange} />
                    <FileInput label="resume upload" />
                </div>
                <SectionHeading title="Address Details" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="area" inputType="text" placeholder="Enter area" name="address.area" value={formData.address.area} onChange={handleChange} />
                    <InputField label="street" inputType="text" placeholder="Enter street" name="address.street" value={formData.address.street} onChange={handleChange} />
                    <InputField label="city" inputType="text" placeholder="Enter city" name="address.city" value={formData.address.city} onChange={handleChange} />
                    <InputField label="landmark" inputType="text" placeholder="Enter landmark" name="address.landmark" value={formData.address.landmark} onChange={handleChange} />
                    <InputField label="country" inputType="text" placeholder="Enter country" name="address.country" value={formData.address.country} onChange={handleChange} />
                </div>
                <SectionHeading title="Social Links" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2">
                    <InputField label="linkedin" inputType="text" placeholder="Enter linkedin" name="socialLinks.linkedIn" value={formData.socialLinks.linkedIn} onChange={handleChange} />
                </div>
                <SectionHeading title="Documents" />
                <div className="grid gap-4 sm:gap-x-10 sm:gap-y-6 sm:grid-cols-2 mb-5">
                    <FileInput label="documents upload" />
                </div>
                <Button />
            </form>
            
        </div>
    )
}
export default TeacherDummy