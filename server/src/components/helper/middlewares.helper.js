/**
 * Delay middleware created on pourpose, to mock database access, password hash, and so on.
 */
const delay = ms => (req, res, next) =>
    setTimeout(() => next(), ms)

module.exports = {
    delay
}
