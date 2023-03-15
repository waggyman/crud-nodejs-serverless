const aes = require("crypto-js/aes");
const parseResponse = (statusCode = 200, data = undefined) => {
  let response = {statusCode}
  if (data) {
    response = {...response, body: JSON.stringify(data, null, 2)}
  }
  return response
}

const encryptPassword = (stringValue) => {
  const chipher = aes.encrypt(stringValue, '%QCk8kL4DtZ$JQa3N%1RZ3I#')
  return chipher.toString()
}

const decryptPassword = (chipherValue) => {
  const decrypt = aes.decrypt(chipherValue, '%QCk8kL4DtZ$JQa3N%1RZ3I#')
  return decrypt.toString()
} 

const parseError = (error, message, errorCode = 500) => {
  console.error(error)
  return {
    statusCode: errorCode,
    body: JSON.stringify({message, details: {
      error: error.message,
      name: error.name,
      stackTrace: error.stack
    }}, null, 2)
  }
}

module.exports = {
  parseResponse,
  parseError,
  encryptPassword,
  decryptPassword
}
