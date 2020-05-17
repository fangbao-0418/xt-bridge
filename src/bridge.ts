let i = 0;
const createUid = function (type: string) {
  i += 1;
  return type + new Date().getTime() + i;
};

const callBacks: any = {};
let _window: any = {};

if (typeof window !== 'undefined') {
  _window = window;

  _window.nativeBack = function (obj: any) {
    try {
      let jsonObj = obj;
      if (typeof jsonObj === 'string') {
        jsonObj = JSON.parse(obj);
      }
      if (jsonObj && jsonObj.uid) {
        callBacks[jsonObj.uid](jsonObj.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * 调用app方法
 *
 * @export
 * @param {string} type
 * @param {*} [data='']
 * @returns {Promise}
 */
export function callNative(type: string, data: any = '') {
  return new Promise((res) => {
    const uid = createUid(type);
    callBacks[uid] = res;
    const _data = {
      type,
      data,
      uid,
    };
    // ios
    if (_window.webkit && _window.webkit.messageHandlers && _window.webkit.messageHandlers.jsToOcMain) {
      _window.webkit.messageHandlers.jsToOcMain.postMessage(_data);
      return;
    }
    // android
    if (_window.hybridApp && _window.hybridApp.exec) {
      _window.hybridApp.exec(JSON.stringify(_data));
      return;
    }
  });
}
