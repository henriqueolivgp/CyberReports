import fastify, {FastifyListenOptions} from 'fastify'
import dotEnv from 'dotenv'
import app from './app'

// DotEnv configuration
dotEnv.config()

const PORT = parseInt(process.env.SERVER_PORT || "5000");
const HOST = process.env.HOST_SERVER || "127.0.0.1" ;

const options: FastifyListenOptions = {
  port: PORT,
  host: HOST,
  // Other options...
};

// Starts the API server
const start = async () => {
  try {
    app.listen(options, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server is running on ${address}`);
      console.log(`Swagger is running on ${address + "/docs"}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();