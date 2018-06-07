export default (key) => (val) => localStorage.setItem(key, JSON.stringify(val))
