const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publickey: 'public_Na2lynpjQgbwq7t/+5NbmNqttRQ=',
})

async function uploadFile(filebuffer){
    const result = await imagekit.files.upload({
        file: filebuffer.toString("base64"),
        fileName: "mountain.jpg"
    })

    return result;
}

module.exports = uploadFile;