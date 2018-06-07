import get from './get'
import remove from './remove'
import set from './set'

export default class {
  constructor (key) {
    this.get = get(key)
    this.remove = remove(key)
    this.set = set(key)
  }
}
