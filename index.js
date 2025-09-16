import express from 'express';
import bodyParser from 'body-parser';
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
const port = process.env.PORT || 3000; // Vercel uses process.env.PORT

// Existing middleware
app.use(cors());
app.use(bodyParser.json());

// Load Swagger YAML file
let swaggerDocument;
try {
  swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
  console.log('Swagger document loaded successfully');
} catch (error) {
  console.error('Error loading Swagger document:', error.message);
  swaggerDocument = {
    openapi: '3.0.0',
    info: { title: 'GameFlix Backend API', version: '1.0.0', description: 'Fallback API spec' }
  };
}

// Setup Swagger UI with working CSS to hide "Try it out"
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss: `
    .execute-wrapper,
    .btn.try-out,
    .opblock .try-it-out {
      display: none !important;
    }
    .opblock .execute-wrapper,
    .opblock-post .execute-wrapper {
      display: none !important;
    }
  `,
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui.min.css', // CDN for Vercel
  swaggerOptions: {
    persistAuthorization: false,
    docExpansion: 'none'
  }
}));

// Existing MongoDB connection
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to the Database!");
}).catch(() => {
  console.log("Database connection Failed!");
});

// Existing routes
app.use("/api/games", gameRouter);
app.use("/api/category", categoryRouter);
app.use("/api/genre", genreRouter);
app.use("/api/title", titleRouter);

// Export for Vercel serverless
const handler = app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

export default handler;