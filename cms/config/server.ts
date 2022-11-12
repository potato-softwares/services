export default ({ env }) => {
  const port = env.int("PORT", 1337),
    url = env("GITPOD_WORKSPACE_URL", "").replace(
      "https://",
      `https://${port}-`
    );
  return {
    host: env("HOST", "localhost"),
    port,
    app: { keys: env.array("APP_KEYS") },
    url,
  };
};
