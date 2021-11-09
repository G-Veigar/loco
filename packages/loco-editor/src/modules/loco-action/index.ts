function navTo () {
  console.log('navTo')
}

function setData () {
  console.log('setData')
}

function show () {
  console.log('show')
}

function hide () {
  console.log('hide')
}

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

const action = {
  navTo,
  setData,
  show,
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

export default action
