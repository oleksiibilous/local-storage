# Local Storage

Local Storage creates your personal bubble inside local storage. It assigns object to specific key and returns helpers for modifying it

## Installation

```
npm i @rocketstation/local-storage
```

## Usage

```javascript
import localStorage from '@rocketstation/local-storage'

const ls = localStorage('key')

ls.get() // {}

ls.set({ foo: 'bar' })
ls.get() // { foo: 'bar' }

ls.remove('foo')
ls.get() // {}

ls.add('foo', 'bar')
ls.get() // { foo: 'bar }

ls.update({ bar: 'foo' })
ls.get() // { foo: 'bar,  bar: 'foo'  }

```

## Motivation

We were tired of writing this code again and again

## License

Local Storage is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
