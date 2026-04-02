const ImageKit = require("@imagekit/nodejs");

const imageKit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(buffer, name= "upload.jpg") {
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName : name
    })

    return result;
}

module.exports = uploadFile