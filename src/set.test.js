import set from './set'

it('calls localstorage.setItem with specified key & val', () => {
  const key = 'tst'
  const val = 'tst'

  set(key)(val)

  expect(localStorage.setItem).toBeCalledWith(key, JSON.stringify(val))
})
