import express from "express";
import mongoose from "mongoose";
import gameRouter from "./routes/gameRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import genreRouter from "./routes/genreRouter.js";
import popularGamesRouter from "./routes/popularGamesRouter.js";
import navbaritemRouter from "./routes/navbaritemRouter.js";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swagger.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import footerRouter from "./routes/footerRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://flix-backend-psi.vercel.app", "https://quickrunz.com/"], // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    credentials: false, // Allow cookies or authentication headers if needed
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  const tokenString = req.header("Authorization");

  if (tokenString != null) {
    const token = tokenString.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (decoded != null) {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({
          message: "Unautherized person invalied token",
        });
      }
    });
  } else {
    next();
  }
});

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
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.6.0/swagger-ui.min.css",
    swaggerJsUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.6.0/swagger-ui-bundle.js",
    swaggerStandalonePresetUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.6.0/swagger-ui-standalone-preset.js",
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
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/games", gameRouter);
app.use("/api/category", categoryRouter);
app.use("/api/genre", genreRouter);
app.use("/api/popular-games", popularGamesRouter);
app.use("/api/navbaritem", navbaritemRouter);
app.use("/api/footer", footerRouter);

// Export for Vercel serverless
app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
