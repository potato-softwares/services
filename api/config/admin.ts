export default ({ env }) => {
  const config = {
    auth: { secret: env("ADMIN_JWT_SECRET") },
    apiToken: { salt: env("API_TOKEN_SALT") },
  };
  if (process.env.GITPOD_WORKSPACE_URL) {
    return {
      ...config,
      webpack: (config, webpack) => {
        config.devServer = {
          host: "0.0.0.0",
          public: process.env.GITPOD_WORKSPACE_URL.replace(
            "https://",
            "https://1337-"
          ),
          disableHostCheck: true,
        };
        return config;
      },
    };
  }
  return config;
};
