exports.get = async (request, response) => {
  try {
    response.status(200);
    response.json({
      Message: 'Hello, World!',
    });
    return;
  } catch (error) {
    response.status(500);
    response.json({
      Message: 'Houston, we have a problem',
    });
  }
};