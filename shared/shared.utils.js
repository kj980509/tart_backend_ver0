import AWS from "aws-sdk";

AWS.config.update({
    credentials:{
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET
    }
})

export const uploadArtToS3 = async (file, artId, folderName ) =>{
    const {filename, createReadStream } = await file
    const readStream = createReadStream()
    const objectName = `${folderName}/${artId}_${filename}`
    const {Location} = await new AWS.S3().upload({
        Bucket: "insta-prac",
        Key: objectName,
        ACL: "public-read",
        Body: readStream,
    }).promise()

    return Location
}
