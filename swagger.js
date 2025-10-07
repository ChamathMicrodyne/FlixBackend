export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "GameFlix Backend API Documentation",
    version: "1.0.0",
    description: "API for managing GameFlix site",
  },
  servers: [
    {
      url: "https://flix-backend-psi.vercel.app",
    },
  ],
  paths: {
    "/api/user": {
      get: {
        summary: "Retrieve a list of users",
        tags: ["Users"],
        responses: {
          200: {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      username: { type: "string" },
                      firstname: { type: "string" },
                      lastname: { type: "string" },
                      email: { type: "string" },
                      password: { type: "string" },
                      numbercode: { type: "string" },
                      number: { type: "number" },
                      birthday: { type: "string" },
                      countrycode: { type: "string" },
                      currency: { type: "string" },
                      zipcode: { type: "number" },
                      nic: { type: "string" },
                      ballance: { type: "number" },
                      noncashballance: { type: "number" },
                      emailverified: { type: "boolean" },
                      numberverified: { type: "boolean" },
                      active: { type: "boolean" },
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
    },
    "/api/user/signup": {
      post: {
        summary: "Create a new user",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  username: { type: "string" },
                  firstname: { type: "string" },
                  lastname: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  numbercode: { type: "string" },
                  number: { type: "number" },
                  birthday: { type: "string" },
                  countrycode: { type: "string" },
                  currency: { type: "string" },
                  zipcode: { type: "number" },
                  nic: { type: "string" },
                  ballance: { type: "number" },
                  noncashballance: { type: "number" },
                  emailverified: { type: "boolean" },
                  numberverified: { type: "boolean" },
                  active: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "user created successfully",
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
            description: "Failed to create user",
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
    "/api/user/login": {
      post: {
        summary: "Login user",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "login successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    token: { type: "string" },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to login",
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
        },
      },
    },
    "/api/user/refreshbalance": {
      post: {
        summary: "Refresh user balance",
        tags: ["Users"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
        responses: {
          200: {
            description: "Balance refresh successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Balance refresh successfully",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "User not found, please login first",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User not found please login first",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string", example: "User not found" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/user/updatebalance": {
      post: {
        summary: "Refresh user balance",
        tags: ["Users"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  balance: { type: "string" },
                  noncashbalance: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Balance update successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Balance update successfully",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "User not found, please login first",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "User not found please login first",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string", example: "User not found" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/user/{id}": {
      delete: {
        summary: "Delete a user by ID",
        tags: ["Users"],
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
            description: "user deleted successfully",
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
            description: "Failed to delete user",
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
        summary: "Update a user by ID",
        tags: ["Users"],
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
                  firstname: { type: "string" },
                  lastname: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  numbercode: { type: "string" },
                  number: { type: "number" },
                  birthday: { type: "string" },
                  countrycode: { type: "string" },
                  currency: { type: "string" },
                  zipcode: { type: "number" },
                  nic: { type: "string" },
                  ballance: { type: "number" },
                  noncashballance: { type: "number" },
                  emailverified: { type: "boolean" },
                  numberverified: { type: "boolean" },
                  active: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "user updated successfully",
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
    "/api/popular-games": {
      get: {
        summary: "Retrieve a list of PopularGame",
        tags: ["PopularGames"],
        responses: {
          200: {
            description: "A list of PopularGame",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      name: { type: "string" },
                      genre: { type: "string" },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to retrieve PopularGame",
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
        summary: "Create a new PopularGame",
        tags: ["PopularGames"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  name: { type: "string" },
                  genre: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "PopularGame created successfully",
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
            description: "Failed to create PopularGame",
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
    "/api/popular-games/{id}": {
      delete: {
        summary: "Delete a PopularGame by ID",
        tags: ["PopularGames"],
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
            description: "PopularGame deleted successfully",
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
            description: "Failed to delete PopularGame",
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
        summary: "Update a PopularGame by ID",
        tags: ["PopularGames"],
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
                  genre: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "PopularGame updated successfully",
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
    "/api/navbaritem": {
      get: {
        summary: "Retrieve a list of Navbaritems",
        tags: ["NavbarItem"],
        responses: {
          200: {
            description: "A list of Navbaritems",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      name: { type: "string" },
                      destination: { type: "string" },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to retrieve Navbaritems",
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
        summary: "Create a new Navbaritem",
        tags: ["NavbarItem"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  name: { type: "string" },
                  destination: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Navbaritem created successfully",
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
            description: "Failed to create Navbaritem",
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
    "/api/navbaritem/{id}": {
      delete: {
        summary: "Delete a Navbaritem by ID",
        tags: ["NavbarItem"],
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
            description: "Navbaritem deleted successfully",
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
            description: "Failed to delete Navbaritem",
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
        summary: "Update a Navbaritem by ID",
        tags: ["NavbarItem"],
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
            description: "Navbaritem updated successfully",
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
    "/api/footer/discription": {
      get: {
        summary: "Retrieve a list of Description",
        tags: ["Footer"],
        responses: {
          200: {
            description: "A list of Description",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      description: { type: "string" },
                      active: { type: "boolean" },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to retrieve Description",
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
        summary: "Create a new Description",
        tags: ["Footer"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  description: { type: "string" },
                  active: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Description created successfully",
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
            description: "Failed to create Description",
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
    "/api/footer/discription/{id}": {
      delete: {
        summary: "Delete a Description by ID",
        tags: ["Footer"],
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
            description: "Description deleted successfully",
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
            description: "Failed to delete Description",
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
    "/api/footer/socialmedia": {
      get: {
        summary: "Retrieve a list of SocialMedia",
        tags: ["Footer"],
        responses: {
          200: {
            description: "A list of SocialMedia",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      icon: { type: "string" },
                      name: { type: "string" },
                      link: { type: "string" },
                      active: { type: "boolean" },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to retrieve SocialMedia",
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
        summary: "Create a new SocialMedia",
        tags: ["Footer"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  icon: { type: "string" },
                  name: { type: "string" },
                  link: { type: "string" },
                  active: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "SocialMedia created successfully",
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
            description: "Failed to create SocialMedia",
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
    "/api/footer/socialmedia/{id}": {
      delete: {
        summary: "Delete a SocialMedia by ID",
        tags: ["Footer"],
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
            description: "SocialMedia deleted successfully",
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
            description: "Failed to delete SocialMedia",
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
    "/api/footer/hotline": {
      get: {
        summary: "Retrieve a list of HotlinesNumbers",
        tags: ["Footer"],
        responses: {
          200: {
            description: "A list of HotlinesNumbers",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      number: { type: "string" },
                      active: { type: "boolean" },
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Failed to retrieve HotlinesNumbers",
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
        summary: "Create a new HotlinesNumbers",
        tags: ["Footer"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "number" },
                  number: { type: "string" },
                  active: { type: "boolean" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "HotlinesNumbers created successfully",
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
            description: "Failed to create HotlinesNumbers",
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
    "/api/footer/hotline/{id}": {
      delete: {
        summary: "Delete a HotlinesNumbers by ID",
        tags: ["Footer"],
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
            description: "HotlinesNumbers deleted successfully",
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
            description: "Failed to delete HotlinesNumbers",
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
