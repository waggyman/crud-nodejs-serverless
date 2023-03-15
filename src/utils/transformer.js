const { formatToUser } = require("./date")

const transformUserResponse = (schema) => {
    return {
        id: schema._id,
        username: schema.username,
        password: schema.password,
        full_name: schema.full_name,
        phone_number: schema.phone_number,
        date_of_birth: formatToUser(schema.date_of_birth),
        age: schema.age
    }
}

module.exports = {
    transformUserResponse
}