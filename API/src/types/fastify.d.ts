import { FastifyInstance } from 'fastify';
import { MultipartFile } from '@fastify/multipart';
import { FastifyRequest } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    multipart: () => any; // Adiciona o método multipart ao FastifyInstance
  }

  interface FastifyRequest {
    file: () => Promise<MultipartFile | undefined>; // Adiciona o método file ao FastifyRequest
  }

  interface FastifyRequest {
    params: {
      id?: string;
    };
  }
  
  export interface FastifyRequest {
    user: {
      id: string
    } 
  }
}



