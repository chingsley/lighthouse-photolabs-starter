const photos = require("../data/photos");

const router = require("express").Router();

module.exports = () => {
  router.get("/photos", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    console.log(host);
    const port = process.env.PORT || 8001;
    let serverUrl = `${protocol}://${host}`;
    if (host === 'localhost') {
      serverUrl = `${protocol}://${host}:${port}`;
    }

    return response.json(photos(serverUrl));
  });

  return router;
};
