const callBacks: any = {
  'show': [],
  'hide': [],
};
let _window: any = {};

if (typeof window !== 'undefined') {
  _window = window;
}

export const on = (life:string, func:Function) => {
  if (callBacks[life]) {
    const index = callBacks[life].length
    callBacks[life].push(func)
    return () => {
      delete(callBacks[life][index])
    }
  } else {
    throw new Error(`没有当前生命周期:[life]`)
  }
}

// app 从后台切前台的时候调用
_window.onXtWebviewShow = (data: any) => {
  callBacks['show'].forEach((func:Function) => {
    func(data)
  })
};
// app 从前台切后台的时候调用
_window.onXtWebviewHide = (data: any) => {
  callBacks['hide'].forEach((func:Function) => {
    func(data)
  })
};
