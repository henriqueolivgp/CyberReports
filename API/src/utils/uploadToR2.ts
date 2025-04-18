import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { config } from 'dotenv';

config();

const r2Client = new S3Client({
  region: 'auto', // R2 use 'auto' as a region 
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  // creadentials for cloudflare R2
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY || '',
    secretAccessKey: process.env.R2_SECRET_KEY || '',
  },
});

export async function uploadImageToR2(file: Buffer, filename: string): Promise<string> {
  const bucketName = 'avatar'; // The name of fixed bucket or use the environment variable
  const key = `avatars/${filename}`; // The Unique name for avatars

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: 'image/png', // Adjust according to image type
  });

  await r2Client.send(command);
  // Return a public URL
  return `https://${bucketName}.${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;
}