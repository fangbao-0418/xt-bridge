import { compareVersion, getAppVersion } from './utils';
import { callNative } from './bridge';

/**
 *  保存图片
 *
 * @export
 * @param {string} data base64的图片
 * @returns {Promise}
 */
export function saveImg(data: string) {
  return callNative('saveImg', data);
}

/**
 * 获取token
 *
 * @export
 * @returns {Promise}
 */
export function getToken() {
  return callNative('getToken');
}

/**
 * 关闭webview
 *
 * @export
 * @returns {Promise}
 */
export function closeWebview() {
  return callNative('closeWebview');
}

/**
 * 打开webview
 *
 * @export
 * @param {string} url
 * @returns {Promise}
 */
export function openWebView(url: string) {
  if (compareVersion(getAppVersion(), '1.5.0') === -1) {
    window.location.href = url;
    return Promise.resolve();
  } else {
    return callNative('openWebView', { url: url });
  }
}

/**
 * 保存token
 *
 * @export
 * @param {*} token
 * @returns {Promise}
 */
export function setToken(token: string) {
  return callNative('setToken', token);
}

/**
 * 保存图片并发送朋友
 *
 * @export
 * @param {string} data base64图片
 * @returns {Promise}
 */
export function imgShareFriends(data: string) {
  return callNative('img_shareFriends', data);
}

/**
 * 分享朋友 - 小程序卡片
 *
 * @export
 * @param {object} data 分享数据
 * @returns {Promise}
 */
export function miniappShareFriends(data: object) {
  return callNative('miniapp_shareFriends', data);
}

/**
 * 分享朋友 - h5链接
 *
 * @export
 * @param {object} data 分享数据
 * @returns {Promise}
 */
export function h5ShareFriends(data: object) {
  return callNative('h5_shareFriends', data);
}

/**
 * 支付宝支付
 *
 * @export
 * @param {object} data 支付数据
 * @returns {Promise}
 */
export function alipay(data: object) {
  return callNative('alipay', data);
}

/**
 * 微信支付
 *
 * @export
 * @param {object} data 支付数据
 * @returns {Promise}
 */
export function wxpay(data: object) {
  return callNative('wxpay', data);
}

/**
 * 获取购物车信息
 *
 * @export
 * @returns {Promise}
 */
export function getCartData() {
  return callNative('getCartData');
}

/**
 * 获取立即下单信息
 *
 * @export
 * @returns {Promise}
 */
export function getBuyNowData() {
  if (compareVersion(getAppVersion(), '1.6.2') === -1) {
    return callNative('getBuyNowData');
  }
  return appStorageGet('order-immediately-data');
}

/**
 * 跳转到登录
 *
 * @export
 * @returns {Promise}
 */
export function gotoLogin() {
  sessionStorage.clear();
  localStorage.clear();
  return callNative('gotoLogin');
}

/**
 * 扫码
 *
 * @export
 * @returns {Promise}
 */
export function scanQrcode() {
  return callNative('scanQrcode');
}

interface miniData {
  path: string;
  appid: string;
  type: 1 | 2 | 3; // 1 测试 2体验 3正式
}
/**
 * 跳至小程序
 *
 * @export
 * @param {miniData} data
 * @returns {Promise}
 */
export function gotoMini(data: miniData) {
  return callNative('gotoMini', data);
}

/**
 * 跳至消息通知设置页面
 *
 * @export
 * @param {*} data
 * @returns {Promise}
 */
export function gotoNotice() {
  return callNative('gotoNotice');
}

interface calendarAlertData {
  title: string; // 标题
  desc: string; // 描述
  aheadTime: number; // 提前多少秒提醒
  startTimestramp: number; // 开始时间戳
}
/**
 * 设置日历提醒
 *
 * @export
 * @param {calendarAlertData} data
 * @returns {Promise}
 */
export function setCalendarAlert(data: calendarAlertData) {
  return callNative('setCalendarAlert', data);
}

/**
 * 设置-关于喜团
 *
 * @export
 * @returns {Promise}
 */
export function aboutXiTuan() {
  return callNative('aboutXiTuan');
}

/**
 * 跳转原生页面
 *
 * @export
 * @param {(string)} url
 * @returns {Promise}
 */
export function goPage(url: string) {
  return callNative('goPage', url);
}

/**
 * 功能开关
 *
 * @export
 * @param {string} key noticeSetting:消息提醒
 * @returns {Promise}
 */
export function checkOnOff(key: string) {
  return callNative('checkOnOff', key);
}

/**
 * 显示隐藏webview头部
 *
 * @export
 * @param {boolean} [hide=true]
 * @returns {Promise}
 */
export function xtTitleBarHide(hide: boolean = true) {
  if (compareVersion(getAppVersion(), '1.5.0') === -1) return Promise.resolve();
  return callNative('xtTitleBarHide', { hide: hide });
}

/**
 * 打开微信
 *
 * @export
 * @returns {Promise}
 */
export function openWx() {
  return callNative('openWx');
}

/**
 * 设置系统剪贴板
 *
 * @export
 * @param {string} data
 * @returns {Promise}
 */
export function setCopy(data: string) {
  return callNative('setCopy', data);
}

/**
 * 获取小窗视频播放状态
 *
 * @export
 * @returns {Promise}
 */
export function getSmallWindowVideoStatus() {
  return callNative('getSmallWindowVideoStatus');
}

/**
 * app存储 - set
 *
 * @export
 * @param {string} k
 * @param {*} v
 * @returns {Promise}
 */
export function appStorageSet(k: string, v: any) {
  return callNative('appStorageSet', {
    key: k,
    value: v,
  });
}

/**
 * app存储 - get
 *
 * @export
 * @param {string} k
 * @returns {Promise}
 */
export function appStorageGet(k: string) {
  return callNative('appStorageGet', {
    key: k,
  });
}

/**
 *  app存储 - remove
 *
 * @export
 * @param {string} k
 * @returns {Promise}
 */
export function appStorageRemove(k: string) {
  return callNative('appStorageRemove', {
    key: k,
  });
}

/**
 * 获取手机端黑匣子
 *
 * @export
 * @returns {Promise}
 */
export function getBlackBox() {
  if (compareVersion(getAppVersion(), '1.6.1') === -1) {
    return Promise.resolve(false);
  } else {
    return callNative('getBlackBox');
  }
}

/**
 * 获取设备的一些信息
 *
 * @export
 * @returns {Promise}
 */
export function getDeviceInfo() {
  return callNative('getDeviceInfo');
}

/**
 * 是否有设备权限
 *
 * @export
 * @param {*} data { permissions: [downloadFiles] }
 * @returns {Promise} {downloadFiles: true}
 */
export function hasPermission(data: any) {
  return callNative('hasPermission', data);
}

interface downloadFileData {
  id: number; // 文件的id
  url: string; // 文件的url,
  type: 'http' | 'base64'; // 文件的类型: http、base64
  mime: 'image' | 'video'; // 文件类型image video
}
/**
 * 下载
 *
 * @export
 * @param {downloadFileData[]} data
 * @returns {Promise}
 * {
 *  taskId: '', // 下载动作的id
 *  progress: 0, // 下载进度
 *  data: [ // 下载信息
 *    {
 *      id: 0,  // 文件id
 *      progress: 0, // 下载进度
 *      status: 0, // 下载状态 0:未开始 1:进行中 2:成功3:失败
 *    }
 *  ],
 * }
 */
export function downloadFiles(data: downloadFileData[]) {
  return callNative('downloadFiles', data);
}

/**
 * 取消下载
 *
 * @export
 * @param {number|string} taskId
 * @returns {Promise}
 * {
 *  taskId: '', // 下载动作的id
 *  progress: 0, // 下载进度
 *  data: [ // 下载信息
 *    {
 *      id: 0,  // 文件id
 *      progress: 0, // 下载进度
 *      status: 0, // 下载状态 0:未开始 1:进行中 2:成功3:失败
 *    }
 *  ],
 * }
 */
export function abortDownloadFilesTask(taskId: number | string) {
  return callNative('abortDownloadFilesTask', taskId);
}

interface chooseImageData {
  count: number; // 选择张数
  isCut: 0 | 1; // 是否裁剪 0:不裁剪 1:裁剪
}
/**
 * 获取上传图片
 *
 * @export
 * @param {chooseImageData} data
 * @returns {Promise}
 */
export function chooseImage(data: chooseImageData) {
  return callNative('chooseImage', data);
}
