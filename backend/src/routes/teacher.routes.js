import { Router } from "express";
import { registerTeacher } from "../controllers/teacher.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router()

router.route("/").post(upload.fields([
    { 
        name: "profileImageUrl", 
        maxCount: 1 
    }, 
    { 
        name: "resumeFileUrl", 
        maxCount: 1 
    }, 
    { 
        name: "documents", 
        maxCount: 8 
    }]), registerTeacher)

export default router