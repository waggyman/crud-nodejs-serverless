const userService = require("../../services/userService")
const { parseError, parseResponse } = require("../../utils/parser")
const { transformUserResponse } = require("../../utils/transformer")

const getUserDetail = async (request) => {
  try {
    const { id } = request.pathParameters
    const user = await userService.getOne(id)
    if (!user) throw Error(`User with id: ${id} is not found!`)

    const response = transformUserResponse(user)
    return parseResponse(200, response)
  } catch (error) {
    return parseError(error, 'Get User Detail error. Please check the logs')
  }
}

module.exports = {
  getUserDetail
}