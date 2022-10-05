exports.get = async (request, response) => {
  try {
    response.status(404);
    response.json({
      Message: 'The Requested Resource Was Not Found.',
    });
    return;
  } catch (error) {
    response.status(500);
    response.json({
      Message: 'Houston, we have a problem',
    });
  }
};