import cors from "cors"
import express from "express"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb"}))
app.use(express.static("public"))

import healthcheckRouter from "./routes/healthcheck.routes.js"
import teacherRouter from "./routes/teacher.routes.js"

app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/teacher", teacherRouter)

export { app } 