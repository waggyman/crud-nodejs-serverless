const { ObjectId } = require('mongodb');
const { users } = require('../models');
const { validateDate, getAge, getDateFromFormat } = require('../utils/date');
const { encryptPassword } = require('../utils/parser');

const create = async (data) => {
  try {
    const userModel = await users();
    if (!validateDate(data.date_of_birth)) {
      throw Error('Invalid date_of_birth. Make sure it\'s under format dd-mm-yyyy')
    }
    const userDoc = {
      username: data.username,
      password: encryptPassword(data.password),
      full_name: data.full_name,
      phone_number: data.phone_number,
      date_of_birth: new Date(data.date_of_birth),
      age: getAge(data.date_of_birth)
    }
    const newUser = await userModel.insertOne(userDoc)
    return newUser
  } catch (error) {
    throw error
  }
}

const list = async () => {
  try {
    const userModel = await users()
    const data = await userModel.find().toArray()
    return data    
  } catch (error) {
    throw error
  }
}

const getOne = async (id) => {
  try {
    const userModel = await users()
    const user = await userModel.findOne({_id: new ObjectId(id)})
    return user
  } catch (error) {
    throw error
  }
}

const update = async (id, payload) => {
  try {
    const userModel = await users()
    let updatePayload = {...payload}
    if (payload.date_of_birth && typeof payload.date_of_birth === 'string') {
      if (!validateDate(payload.date_of_birth)) throw Error('Invalid date_of_birth. Make sure it\'s under format dd-mm-yyyy')
      updatePayload.date_of_birth = getDateFromFormat(payload.date_of_birth)
      updatePayload.age = getAge(payload.date_of_birth)
    }
    
    await userModel.updateOne({_id: new ObjectId(id)}, {'$set': updatePayload})
    return true
  } catch (error) {
    throw error
  }
}

const destroy = async (id) => {
  try {
    const userModel = await users()
    await userModel.deleteOne({ _id: new ObjectId(id) })
    return true
  } catch (error) {
    throw error    
  }
}
module.exports = {
  create,
  list,
  getOne,
  update,
  destroy
}