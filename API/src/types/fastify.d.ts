import { FastifyInstance } from 'fastify';
import { MultipartFile } from '@fastify/multipart';

declare module 'fastify' {
  interface FastifyInstance {
    multipart: () => any; // Adiciona o método multipart ao FastifyInstance
  }

  interface FastifyRequest {
    file: () => Promise<MultipartFile | undefined>; // Adiciona o método file ao FastifyRequest
  }
}