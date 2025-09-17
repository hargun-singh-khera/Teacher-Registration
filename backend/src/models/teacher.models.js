import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const teacherSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required."],
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Phone Number is required."],
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [true, "Gender is required."],
    },
    bio: String,
    profileImageUrl: String,
    classNames: [String],
    subjects: [String],
    qualifications: [String],
    experience: Number,
    board: [String],
    schoolName: String,
    studentsMentored: Number,
    resumeFileUrl: String,
    address: {
        area: String,
        street: String,
        city: {
            type: String,
            default: "Doha"
        },
        landmark: String,
        pincode: {
            type: String,
            match: [/^\d{6}$/, "Pincode must be exactly 6 digits"]
        },
        country: String
    },
    socialLinks: {
        linkedIn: String,
    },
    documents: [String],
    approvalStatus: {
        type: String,
        enum: ["completed", "pending"],
        default: "pending",
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    type: {
        type: String,
        default: "Teacher",
    },
}, { timestamps: true })

teacherSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

export const Teacher = mongoose.model("Teacher", teacherSchema)