import express from 'express';
import mongoose from 'mongoose';
import gameRouter from './routes/gameRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import genreRouter from './routes/genreRouter.js';
import titleRouter from './routes/titleRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000

// Middleware
app.use(cors());
app.use(express.json());

// Load Swagger YAML file
let swaggerDocument;
try {
  swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf8"));
  console.log("Swagger document loaded successfully");
} catch (error) {
  console.error("Error loading Swagger document:", error.message);
  swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "GameFlix Backend API",
      version: "1.0.0",
      description: "Fallback API spec",
    },
    servers: [
      {
        url: "https://flix-backend-psi.vercel.app",
      },
    ],
  };
}
// Setup Swagger UI with CDN for all assets
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerJsUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-bundle.js',
  swaggerStandalonePresetUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-standalone-preset.js',
  swaggerOptions: {
    persistAuthorization: false,
    docExpansion: 'none'
  }
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to the Database!");
}).catch((err) => {
  console.error("Database connection failed:", err.message, err.stack);
  process.exit(1);
});

// Routes
app.use("/api/games", gameRouter);
app.use("/api/category", categoryRouter);
app.use("/api/genre", genreRouter);
app.use("/api/title", titleRouter);

// Export for Vercel serverless
app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});