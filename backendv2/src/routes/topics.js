const router = require("express").Router();
const photos = require("../data/photos");
const topics = require('../data/topics');

module.exports = () => {
  router.get("/topics", (request, response) => {
    return response.json(topics);
  });

  router.get("/topics/photos/:id", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;
    return response.json(
      photos(serverUrl).filter(photo => Number(photo.topicId) === Number(request.params.id))
    );
  });

  return router;
};
