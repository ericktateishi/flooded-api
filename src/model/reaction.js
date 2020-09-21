const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    flood: {
      type: Schema.Types.ObjectId,
      ref: 'flood',
      required: true,
    },
    type: {
      type: String,
      enum: [
        "approved",
        "disapproved" 
      ],
      required: true,
    },
  },
  { timestamps: true },
)

ReactionSchema.virtual('id').get(function() {
  return this._id.toHexString()
})

ReactionSchema.set('toJSON', {
  getters: true,
})

ReactionSchema.set('toObject', {
  getters: true,
})

ReactionSchema.index({
  user: 1,
  flood: 1,
}, {unique: true, sparse: true})

const Reaction = mongoose.model('reaction', ReactionSchema)

module.exports = Reaction