const create = require('./index')

const key = 'my-personal-bubble'

const ls = create(key)

beforeEach(() => {
  localStorage.clear()
})

test('get', () => {
  ls.get()

  expect(localStorage.getItem).toHaveBeenLastCalledWith(key)
})

test('set', () => {
  const next = { foo: 'bar' }

  ls.set(next)

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    key,
    JSON.stringify(next)
  )
})

test('update', () => {
  const prev = { foo: 'bar' }
  const next = { bar: 'foo' }

  ls.set(prev)
  ls.update(next)

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    key,
    JSON.stringify(Object.assign({}, prev, next))
  )
})

test('add', () => {
  const k = 'foo'
  const v = 'bar'

  ls.add(k, v)

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    key,
    JSON.stringify({ [k]: v })
  )
})

test('remove', () => {
  ls.set({ foo: 'bar' })
  ls.remove('foo')

  expect(localStorage.setItem).toHaveBeenLastCalledWith(key, JSON.stringify({}))
})
