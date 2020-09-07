const users = require('./../data/index')
let counter = users.length+1
// let counter = users.length+1

// * GET /users
//   * Return all users
const listUsers = (req, res) => {
  res.json(users)
}
// * GET /users/:id
const userById = (req, res) => {
  let foundUser = users.find( user => user.id === parseInt(req.params.id))
  if (foundUser) {
    foundUser.isActive = false
    res.send(foundUser)
  } else {
    res.status(404).json({message:' No user here with this id ${req.params.id'})
 //error message//
 //   * Return just the user that matches the path param (id)
  }
}


// * POST /users
//   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11
const createUser = (req, res) => {
  users.push({_id: counter++, ...req.body})
  res.json(users[users.length -1])
}
// * PUT /users/:id
const updateUser = (req,res) => {
  let foundUser = users.find( user => user._id === parseInt(req.params.userId))
  foundUser.name = req.body.name ? req.body.name : foundUser.name
  foundUser.avatar = req.body.avatar ? req.body.avatar : foundUser.avatar
  foundUser.occupation = req.body.occupation ? req.body.occupation : foundUser.occupation
  res.json(foundUser) 
}
//   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// * DELETE /users/:id
const deleteUser = (req, res) => {
  let foundUser = users.find( user => user._id === parseInt(req.params.userId))
  if (foundUser) {
    foundUser.isActive = false
    res.send('${req.params.userId} is gone')
  } else {
    res.status(400).json({message: 'no user with this id${req.params.id'})
    //error message
  }
}
//   * Delete one user by it's id

module.exports = {
  listUsers,
  userById,
  createUser,
  updateUser,
  deleteUser
}