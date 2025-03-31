
import fastify from "fastify"
import fastifyCookie from "@fastify/cookie"
import fastifyCors from "@fastify/cors"

// Swagger Documentation
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"

// security 
import fs from "fs";
import path from "path";

// DotEnv configuration
import * as dotenv from 'dotenv';
dotenv.config();

// Charge swagger configuration of JSON file
const swaggerConfigPath = path.join(__dirname, "../src/SwaggerConfig/swaggerConfig.json");
let swaggerConfig;

try {
  swaggerConfig = JSON.parse(fs.readFileSync(swaggerConfigPath, "utf8"));
  console.log('Swagger configuration loaded successfully');
} catch (err) {
  console.error('Error loading Swagger configuration:', err);
  process.exit(1);  // Output with error if doesn't possible charge the file
}

const app = fastify();

// Register fastifyCors and your configuration
app.register(fastifyCors, {
  origin: "http://localhost:3000", // URL do seu frontend
  credentials: true, // Permitir envio de cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite apenas esses métodos
});

// register fastifyCookie
app.register(fastifyCookie)

// Register fastify-swagger plugin first
app.register(fastifySwagger, {
  swagger: swaggerConfig.swagger
});

// Register fastify-swagger-ui plugin then
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: (request, reply, next) => { next(); },
    preHandler: (request, reply, next) => { next(); }
  },
});

// Main Get
app.get('/', async (req, rep) => {
  return "Welcome to Cyber Repots API!!!"
})

export default app;