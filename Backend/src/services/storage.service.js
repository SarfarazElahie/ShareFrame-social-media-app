const ImageKit = require("@imagekit/nodejs");

const imageKit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(buffer, name= "upload.jpg") {
    try {
        const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName : name
    })
    return result;
    } catch (error) {
        console.error("ImageKit Upload Error:", error.message)
    }
}

module.exports = uploadFile