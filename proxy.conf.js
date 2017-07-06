const PROXY_CONFIG = [
    {
        context: [
            "/uploadfile",
            "/uploadSettings",
        ],
        target: "http://localhost:5000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
