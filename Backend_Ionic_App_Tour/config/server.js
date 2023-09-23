module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS"),
  },
  settings: {
    cors: {
      enabled: true,
      origin: [
        env("CORS_ORIGIN", "http://localhost:4200"),
        env("CORS_ORIGIN", "http://localhost:8100"),
      ],
    },
  },
});
