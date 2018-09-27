/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_BBSID,
  RECEIVE_STOREID,
  RECEIVE_LOGO,
  RECEIVE_URL
} from './mutation-types'

export default {
  [RECEIVE_BBSID] (state, {bbsid}) {
    state.bbsid = bbsid
  },
  [RECEIVE_STOREID] (state, {storeid}) {
    state.storeid = storeid
  },
  [RECEIVE_LOGO] (state, {logo}) {
    state.logo = logo
  },
  [RECEIVE_URL] (state, {url}) {
    state.url = url
  }
}
