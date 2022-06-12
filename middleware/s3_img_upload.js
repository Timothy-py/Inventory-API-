// const AWS = require('aws-sdk');
// const {uuid} = require('uuidv4');

// const logger = require('../logger')


// // configure amazon s3 bucket
// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ID,
//     secretAccessKey: process.env.AWS_SECRET
// })

// module.exports = (req, res, next) => {
//     // if image file is provided
//     // console.log(req.file.fieldname)
//     // if (req.file.fieldname == 'image'){
//     const image = req.file.originalname.split(".")
//     const fileType = image[image.length - 1]

//     const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `${uuid()}.${fileType}`,
//         Body: req.file.buffer
//     }

//     // send image file to s3 bucket: response = data url
//     s3.upload(params, async (error, data) => {
//         if(error){
//             logger.error(error)
//             return res.status(500).json({
//                 error: `S3 ERROR - ${error}`
//             })
//         }

//         const img_url = data['Location']
//         req.body = {image: img_url}

//         next()
//     })
//     // }else{
//     //     next()
//     // }
// }