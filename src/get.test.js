import get from './get'

it('calls localstorage.getItem with specified key', () => {
  const key = 'tst'

  get(key)()

  expect(localStorage.getItem).toBeCalledWith(key)
})
