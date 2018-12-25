module.exports = function(key) {
  return {
    get: function() {
      return JSON.parse(localStorage.getItem(key)) || {}
    },
    remove: function() {
      localStorage.removeItem(key)
    },
    set: function(val) {
      localStorage.setItem(key, JSON.stringify(val))
    },
  }
}
