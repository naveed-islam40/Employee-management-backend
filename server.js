require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const adminRouter = require("./routes/Admin")
const employeeRouter = require("./routes/employeeRoutes")


app.use(cors(
    {
        origin: "https://employee-management-frontend-eeg603r1l.vercel.app",
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    }
))
app.use(express.json())

const dbConnect = require("./DB/dbConnect")

const port = process.env.PORT || 4000
dbConnect()

app.use("/api/v1", adminRouter)
app.use("/api/v1", employeeRouter)



app.listen(port, () => {
    console.log(`server runing on port ${port}`);
})