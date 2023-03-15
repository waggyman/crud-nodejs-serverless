const userService = require('./src/services/userService');
const { parseResponse, parseError } = require('./src/utils/parser');
const { transformUserResponse } = require('./src/utils/transformer');

const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
}

module.exports = {
  handler
}