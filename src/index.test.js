import LS from './index'

import get from './get'
import remove from './remove'
import set from './set'

jest.mock('./get')
jest.mock('./remove')
jest.mock('./set')

const key = 'key'
const ls = new LS(key)

it('initiates get function with key', () => { expect(get).toBeCalledWith(key) })

it('initiates remove function with key', () => { expect(remove).toBeCalledWith(key) })

it('initiates set function with key', () => { expect(set).toBeCalledWith(key) })
