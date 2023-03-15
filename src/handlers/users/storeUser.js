const userService = require("../../services/userService")
const { parseError, parseResponse } = require("../../utils/parser")
const { transformUserResponse } = require("../../utils/transformer")

const storeUser = async (request) => {
  const payload = JSON.parse(request.body)
  try {
    const newUser = await userService.create(payload)
    const user = await userService.getOne(newUser.insertedId)
    const response = transformUserResponse(user)
    return parseResponse(201, response)
  } catch (error) {
    return parseError(error, 'Create User error. Please check the logs')
  }
}

module.exports = {
  storeUser
}