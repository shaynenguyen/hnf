exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success:    true,
        data:       "You are now access the private data."
    })
}