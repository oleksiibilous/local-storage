var checkIfObj = function(v) {
  return Object.prototype.toString.call(v) === '[object Object]'
}

var getter = function(key) {
  return function() {
    var storage = JSON.parse(localStorage.getItem(key))

    if (!checkIfObj(storage)) {
      localStorage.setItem(key, JSON.stringify({}))

      return {}
    }

    return storage
  }
}

var setter = function(key) {
  return function(val) {
    localStorage.setItem(key, JSON.stringify(val))
  }
}

module.exports = function(key) {
  var get = getter(key)
  var set = setter(key)

  return {
    add: function(key, val) {
      var storage = get()

      storage[key] = val

      set(storage)
    },
    get,
    remove: function(key) {
      var storage = get()

      delete storage[key]

      set(storage)
    },
    set: function(next) {
      if (checkIfObj(next)) set(next)
    },
    update: function(next) {
      if (checkIfObj(next)) set(Object.assign(get(), next))
    },
  }
}
