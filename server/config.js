import SES from "aws-sdk/clients/ses.js";
import  S3  from "aws-sdk/clients/s3.js";
import NodeGeocoder from 'node-geocoder';

export const DATABASE = 'mongodb+srv://abhishekpatidar901:5XUETfPx0aleeraB@cluster0.z75gndy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const AWS_ACCESS_KEY_ID = "AKIATCKATNJQ77X6EJOO";
export const AWS_SECRET_ACCESS_KEY = "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"

export const EMAIL_FROM = '"Real Estate"<restate152@gmail.com>';
export const REPLY_TO = "abhishekpatidar901@gmail.com";


const awsConfig = {
    accessKeyId : AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: "ap-southeast-2",
    apiVersion: "2010-12-01",
};
export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

export const JWT_SECRET = 'Realabhi123';

export const CLIENT_URL = 'http://localhost:3000';

const options = {
    provider:'google',
    apiKey:'AIzaSyCYZI5-eCDjutlSiWuQp3U7QVe4E7QwL4k',
    formatter: null
};

export const GOOGLE_GEOCODER = NodeGeocoder(options);