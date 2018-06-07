import remove from './remove'

it('calls localstorage.removeItem with specified key', () => {
  const key = 'tst'

  remove(key)()

  expect(localStorage.removeItem).toBeCalledWith(key)
})
