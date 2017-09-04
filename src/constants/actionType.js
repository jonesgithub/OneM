/**
 * Created by guangqiang on 2017/8/22.
 */

/**
 * action对象的type属性集合
 */
const actionType = {

  // 配置 promiseMiddleware 异步action的几种状态
  FETCH_LOADING_SUFFIX : '_LOADING',
  FETCH_SUCCESS_SUFFIX : '_SUCCESS',
  FETCH_ERROR_SUFFIX : '_ERROR',

  // action 对象的type
  GET_ACCOUNT_GENERAL : 'GET_ACCOUNT_GENERAL',
  OPEN_CHAT : 'OPEN_CHAT',
  CHAT_INCREASES : 'CHAT_INCREASES',
  CHAT_REDUCE : 'CHAT_REDUCE'
}

export default actionType