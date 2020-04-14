import store from 'store'

export default {
  set: function (key, val, exp) {
    // 以天为单位，默认 6 个小时
    store.set(key, { val: val, exp: exp || 0.25, time: new Date().getTime() })
  },
  get: function (key) {
    var info = store.get(key)
    if (!info) { return null }
    if (new Date().getTime() - info.time > info.exp * 1000 * 60 * 60 * 24) { return null }
    return info.val
  },
  remove: function (key) {
    store.remove(key)
  }
}
