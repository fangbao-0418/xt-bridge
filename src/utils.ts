/**
 * 比较版本号
 *
 * @export
 * @param {string} _v1
 * @param {string} _v2
 * @returns {number} 1:大于 -1:小于 0等于
 */
export function compareVersion(_v1: string, _v2: string) {
  const v1 = _v1.split('.');
  const v2 = _v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

/**
 * 获取native注入的 userAgent
 *
 * @export
 * @returns {object}
 */
export function getAppInjectUA() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const customAgent = userAgent.match(/\[xt\](.*)\[xt\]/);
  let customAgentObj: any = {};
  if (customAgent && customAgent[1]) {
    const arr = customAgent[1].split(',');
    for (const item of arr) {
      const t = item.split(':') || [];
      const key = t[0];
      const value = t[1];
      key && (customAgentObj[key] = value);
    }
  }
  return customAgentObj;
}

/**
 * 获取系统类型
 *
 * @export
 * @returns {string}
 */
export function getAppSystem() {
  const customUa: any = getAppInjectUA();

  if (customUa.os === 'ios') {
    return 'ios';
  } else if (customUa.os === 'android') {
    return 'android';
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('android') > -1 || userAgent.indexOf('linux') > -1) {
    return 'android';
  } else if (userAgent.indexOf('iphone') > -1) {
    return 'ios';
  }
  return '';
}

/**
 * 获取app状态栏高度
 *
 * @export
 * @returns {number}
 */
export function getAppStatusHeight() {
  const customUa: any = getAppInjectUA();
  return customUa.statusbarheight || 0;
}

/**
 * 获取app版本
 *
 * @export
 * @returns {string}
 */
export function getAppVersion() {
  const customUa: any = getAppInjectUA();
  return customUa.appversion || '';
}
