import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { config } from 'dotenv';

config();

const r2Client = new S3Client({
  region: 'auto', // R2 usa 'auto' como região
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY || '', // Use variáveis de ambiente corretamente
    secretAccessKey: process.env.R2_SECRET_KEY || '',
  },
});

export async function uploadImageToR2(file: Buffer, filename: string): Promise<string> {
  const bucketName = 'avatar'; // Nome do bucket fixo ou use variável de ambiente
  const key = `avatars/${filename}`; // Nome único para o arquivo

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: 'image/png', // Ajuste conforme o tipo de imagem
  });

  await r2Client.send(command);

  // Retorna a URL pública (ajuste conforme sua configuração de bucket)
  return `https://${bucketName}.${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;
}