const userService = require("../../services/userService")
const { parseError, parseResponse } = require("../../utils/parser")

const deleteUser = async (request) => {
  const { id } = request.pathParameters
  try {
    const currentUser = await userService.getOne(id)
    if (!currentUser) throw Error(`User with id: ${id} is not found!`)

    await userService.destroy(id)
    return parseResponse(204)
  } catch (error) {
    return parseError(error, 'Delete User error. Please check the logs')
  }
}

module.exports = {
  deleteUser
}