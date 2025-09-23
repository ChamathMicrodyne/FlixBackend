import express from "express";
import mongoose from "mongoose";
import gameRouter from "./routes/gameRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import genreRouter from "./routes/genreRouter.js";
import titleRouter from "./routes/titleRouter.js";
import navbaritemRouter from "./routes/navbaritemRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
//import swaggerDocuments from "./swagger.json" assert { type: "json" };
import { testswaggerDocuments } from "./testswaggerDocuments.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load Swagger YAML file
let swaggerDocument;
try {
  swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf8"));
  console.log("Swagger document loaded successfully");
} catch (error) {
  console.log("Error loading Swagger document:", error.message);
  swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "GameFlix Backend API",
      version: "1.0.1",
      description: "API for managing GameFlix site 'internal'",
    },
    servers: [
      {
        url: "https://flix-backend-psi.vercel.app",
      },
    ],
    paths: {
      "/api/games": {
        get: {
          summary: "Retrieve a list of games",
          tags: ["Games"],
          responses: {
            200: {
              description: "A list of games",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        title: { type: "string" },
                        description: { type: "string" },
                        thumbnail: { type: "string" },
                        videoUrl: { type: "string" },
                        genre: { type: "string" },
                        category: { type: "string" },
                        ReleaseYear: { type: "number" },
                        NOPlayes: { type: "number" },
                        AVGBet: { type: "number" },
                        AVGCashOut: { type: "number" },
                        CurrentPlayes: { type: "number" },
                        GamingRank: { type: "number" },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to retrieve games",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Create a new game",
          tags: ["Games"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    title: { type: "string" },
                    description: { type: "string" },
                    thumbnail: { type: "string" },
                    videoUrl: { type: "string" },
                    genre: { type: "string" },
                    category: { type: "string" },
                    ReleaseYear: { type: "number" },
                    NOPlayes: { type: "number" },
                    AVGBet: { type: "number" },
                    AVGCashOut: { type: "number" },
                    CurrentPlayes: { type: "number" },
                    GamingRank: { type: "number" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Game created successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to create game",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/games/{id}": {
        delete: {
          summary: "Delete a game by ID",
          tags: ["Games"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Game deleted successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to delete game",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update a game by ID",
          tags: ["Games"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    description: { type: "string" },
                    thumbnail: { type: "string" },
                    videoUrl: { type: "string" },
                    genre: { type: "string" },
                    ReleaseYear: { type: "number" },
                    NOPlayes: { type: "number" },
                    AVGBet: { type: "number" },
                    AVGCashOut: { type: "number" },
                    CurrentPlayes: { type: "number" },
                    GamingRank: { type: "number" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Game updated successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/category": {
        get: {
          summary: "Retrieve a list of categories",
          tags: ["Categories"],
          responses: {
            200: {
              description: "A list of categories",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        name: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to retrieve categories",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Create a new category",
          tags: ["Categories"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Category created successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to create category",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/category/{id}": {
        delete: {
          summary: "Delete a category by ID",
          tags: ["Categories"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Category deleted successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to delete category",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update a category by ID",
          tags: ["Categories"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Category updated successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/genre": {
        get: {
          summary: "Retrieve a list of genres",
          tags: ["Genres"],
          responses: {
            200: {
              description: "A list of genres",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        name: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to retrieve genres",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Create a new genre",
          tags: ["Genres"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Genre created successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to create genre",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/genre/{id}": {
        delete: {
          summary: "Delete a genre by ID",
          tags: ["Genres"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Genre deleted successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to delete genre",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update a genre by ID",
          tags: ["Genres"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Genre updated successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/title": {
        get: {
          summary: "Retrieve a list of titles",
          tags: ["Titles"],
          responses: {
            200: {
              description: "A list of titles",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        name: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to retrieve titles",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Create a new title",
          tags: ["Titles"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Title created successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to create title",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/api/title/{id}": {
        delete: {
          summary: "Delete a title by ID",
          tags: ["Titles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Title deleted successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Failed to delete title",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        put: {
          summary: "Update a title by ID",
          tags: ["Titles"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Title updated successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            500: {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                      error: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}
// Setup Swagger UI with CDN for all assets
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(testswaggerDocuments, {
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
app.use("/api/games", gameRouter);
app.use("/api/category", categoryRouter);
app.use("/api/genre", genreRouter);
app.use("/api/title", titleRouter);
app.use("/api/navbaritem", navbaritemRouter);

// Export for Vercel serverless
app.listen(port, () => {
  console.log("Server is running on port " + port);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
