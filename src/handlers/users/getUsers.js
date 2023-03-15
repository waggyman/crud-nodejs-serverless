const userService = require("../../services/userService")
const { parseError, parseResponse } = require("../../utils/parser")
const { transformUserResponse } = require("../../utils/transformer")

const getUsers = async (request) => {
  try {
    const data = await userService.list()
    const response = data.map((d) => transformUserResponse(d))
    return parseResponse(200, response)
  } catch (error) {
    return parseError(error, 'Cannot get list of users. Please check the logs')
  }
}

module.exports = {
  getUsers
}