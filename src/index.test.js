const ls = require('./index')

const key = 'tst'

it('calls localstorage.getItem with specified key', () => {
  ls(key).get()

  expect(localStorage.getItem).toBeCalledWith(key)
})

it('calls localstorage.removeItem with specified key', () => {
  ls(key).remove()

  expect(localStorage.removeItem).toBeCalledWith(key)
})

it('calls localstorage.setItem with specified key & val', () => {
  const val = 'tst'

  ls(key).set(val)

  expect(localStorage.setItem).toBeCalledWith(key, JSON.stringify(val))
})
