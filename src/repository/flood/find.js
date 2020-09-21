const Flood = require('../../model/flood')

/**
   * Find floods by a mongo filter.
   *
   * @param {*} filter
   * @param {*} sort
   */
module.exports = async (filter, skip, limit, sort) => {

  return Flood.find(filter)
    .skip(skip || 0)
    .limit(limit || 10)
    .sort(sort || {createdAt: -1})
    .populate('user')
    .populate('user', '-password')
    .exec()
}