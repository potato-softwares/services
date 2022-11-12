export default ({ env }) => {
  const port = 1337,
    config = {
      host: env("HOST", "0.0.0.0"),
      port: env.int("PORT", port),
      app: {
        keys: env.array("APP_KEYS"),
      },
    };
  if (process.env.GITPOD_WORKSPACE_URL) {
    const url = process.env.GITPOD_WORKSPACE_URL.replace(
      "https://",
      `https://${port}-`
    );
    return { ...config, url, admin: { url: `${url}/admin` } };
  }
  return config;
};
