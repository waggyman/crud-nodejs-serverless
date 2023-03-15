const userService = require("../../services/userService")
const { parseError, parseResponse } = require("../../utils/parser")
const { transformUserResponse } = require("../../utils/transformer")

const updateUser = async (request) => {
  const { id } = request.pathParameters
  try {
    const payload = JSON.parse(request.body)
    const currentUser = await userService.getOne(id)
    if (!currentUser) throw Error(`User with id: ${id} is not found!`)

    const updated = { ...currentUser, ...payload }
    await userService.update(id, updated)

    const updatedUser = await userService.getOne(id)
    const response = transformUserResponse(updatedUser)
    return parseResponse(200, response)
  } catch (error) {
    console.log("ERROR HERE");
    return parseError(error, 'Update User error. Please check the logs')
  }
}

module.exports = {
  updateUser
}