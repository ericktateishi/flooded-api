const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
    },
    active: {
      type: Boolean
    },
  },
  { timestamps: true },
)

UserSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

UserSchema.set('toJSON', {
  getters: true,
})

UserSchema.set('toObject', {
  getters: true,
})

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, saltRounds)
  next()
})

UserSchema.methods.comparePassword = async function(candidate) {
  return bcrypt.compare(candidate, this.password)
}

const User = mongoose.model('user', UserSchema)

module.exports = User
