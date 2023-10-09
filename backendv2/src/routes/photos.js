const photos = require("../data/photos");

const router = require("express").Router();

module.exports = () => {
  router.get("/photos", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    return response.json(photos(serverUrl));
  });

  return router;
};
