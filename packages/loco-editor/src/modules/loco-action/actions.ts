// 修改状态
function setData (options: {nodeId: string, key: string, value: any, scope: any}) {
  const { nodeId, key, value, scope }= options
  scope[nodeId][key] = value
}

function show (optipns: {nodeId: string, scope: any}) {
  const setDataOptions = {
    ...optipns,
    key: '$show',
    value: true
  }
  setData(setDataOptions)
}

function toggleShow (optipns: {nodeId: string, scope: any}) {
  const {nodeId, scope} = optipns
  const setDataOptions = {
    ...optipns,
    key: '$show',
    value: !scope[nodeId]['$show']
  }
  setData(setDataOptions)
}

function hide (optipns: {nodeId: string, scope: any}) {
  const setDataOptions = {
    ...optipns,
    key: '$show',
    value: false
  }
  setData(setDataOptions)
}

// 跳转
function navTo () {
  console.log('navTo')
}

// 通知反馈
function toast (msg: string) {
  console.log(msg)
}

function alert (msg: string) {
  console.log(msg)
}

function confirm (msg: string) {
  console.log(msg)
}

function loading (msg?: string) {
  console.log(msg)
}

const actions = {
  navTo,
  setData,
  show,
  toggleShow,
  hide,
  toast,
  alert,
  confirm,
  loading
  // follow
  // share
  // download
  // upload
  // request
  // log
  // animate
}

export default actions
