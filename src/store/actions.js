/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_BBSID,
  RECEIVE_STOREID,
  RECEIVE_LOGO,
  RECEIVE_URL
} from './mutation-types'
export default {
  reBbsid ({commit}, bbsid) {
    commit(RECEIVE_BBSID, {bbsid})
  },
  // 同步记录storeid
  reStoreid ({commit}, storeid) {
    commit(RECEIVE_STOREID, {storeid})
  },
  relogo ({commit}, logo) {
    commit(RECEIVE_LOGO, {logo})
  },
  reUrl ({commit}, url) {
    commit(RECEIVE_URL, {url})
  }
}
