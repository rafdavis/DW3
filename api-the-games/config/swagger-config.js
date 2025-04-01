const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0", 
      info: {
        title: "The Games API",
        description: "API para catálogo de jogos",
        version: "1.0.0",
        contact: {
          name: "Ricardo",
        },
        servers: [{ url: "http://localhost:4000" }],
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT", 
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./routes/swagger-config.js", "./docs/swaggerDocs.yaml"], 
  };
  
  export default swaggerOptions;