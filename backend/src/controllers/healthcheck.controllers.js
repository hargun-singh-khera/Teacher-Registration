const healthcheck = async (req, res) => {
    try {
        return res.status(200).json({message: "API is running..."})
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export { healthcheck }