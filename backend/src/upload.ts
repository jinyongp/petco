require('dotenv').config();
import AWS from "aws-sdk"
const accessKeyId = process.env.AWS_ACCESS_ID
const secretAccessKey = process.env.AWS_SECRET_KEY
const region = process.env.AWS_REGION
AWS.config.update({ accessKeyId, secretAccessKey, region });
const s3 = new AWS.S3({ region });

const s3DefaultParams = {
  ACL: 'public-read',
  Bucket: process.env.S3_BUCKET_NAME,
  Conditions: [
    ['content-length-range', 0, 10240000], // 10 Mb
    { acl: 'public-read' },
  ],
};

const handleFileUpload = async file => {
  const { createReadStream, filename } = await file;
  const date = new Date()
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        ...s3DefaultParams,
        Body: createReadStream(),
        Key: `${filename}-${date}`,
      },
      (err, data) => {
        if (err) {
          console.log('error uploading...', err);
          reject(err);
        } else {
          console.log('successfully uploaded file...', data);
          resolve(data);
        }
      },
    );
  });
}

export default handleFileUpload

type S3UploadConfig = {
  accessKeyId: String;
  secretAccessKey: String;
  destinationBucketName: String;
  region: String;
};

export class AWSS3Uploader {
  private s3: AWS.S3;
  public config: S3UploadConfig;
  
  constructor(config: S3UploadConfig){
    AWS.config = new AWS.Config();
    AWS.config.update({
      region: config.region,
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    });
    this.s3 = new AWS.S3();
    this.config = config;
  }
}