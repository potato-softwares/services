export default ({ env }) => {
  const port = env.int("PORT", 1337);
  return {
    auth: { secret: env("ADMIN_JWT_SECRET") },
    apiToken: { salt: env("API_TOKEN_SALT") },
    webpack: (config, webpack) => {
      config.devServer = {
        host: "0.0.0.0",
        public: env("GITPOD_WORKSPACE_URL", "").replace(
          "https://",
          `https://${port}-`
        ),
        disableHostCheck: true,
      };
      return config;
    },
  };
};
