import express from "express";
import mongoose from "mongoose";
import gameRouter from "./routes/gameRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import genreRouter from "./routes/genreRouter.js";
import popularGamesRouter from "./routes/popularGamesRouter.js";
import navbaritemRouter from "./routes/navbaritemRouter.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swagger.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Setup Swagger UI with CDN for all assets
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCss: `
    .execute-wrapper,
    .btn.try-out,
    .opblock .try-it-out,
    .opblock-post .execute-wrapper {
      display: none !important;
    }
  `,
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui.min.css",
    swaggerJsUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-bundle.js",
    swaggerStandalonePresetUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui-standalone-preset.js",
    swaggerOptions: {
      persistAuthorization: false,
      docExpansion: "none",
    },
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to the Database!");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message, err.stack);
    process.exit(1);
  });

// Routes
app.use("/api/user", userRouter);
app.use("/api/games", gameRouter);
app.use("/api/category", categoryRouter);
app.use("/api/genre", genreRouter);
app.use("/api/popular-games", popularGamesRouter);
app.use("/api/navbaritem", navbaritemRouter);

// Export for Vercel serverless
app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
