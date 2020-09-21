const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FloodSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean
    },
  },
  { timestamps: true },
)

FloodSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

FloodSchema.set('toJSON', {
  getters: true,
})

FloodSchema.set('toObject', {
  getters: true,
})

const Flood = mongoose.model('flood', FloodSchema)

module.exports = Flood