import axios from 'axios'
import { HOST } from 'common/js/config'

//获取排行接口
export function getTop(id) {
  const url = HOST + `/top/list?idx=${id}`
  return axios.get(url)
}
