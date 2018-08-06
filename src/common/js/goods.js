import axios from 'axios'
var qs = require('qs')
export const getGoods = (merchid) => axios.post('http://192.168.3.2/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=ajax.ajax.getallgoods', qs.stringify({merchid: `${merchid}`}))
