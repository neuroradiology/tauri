document.getElementById('log').addEventListener('click', function () {
  window.__TAURI__.invoke({
    cmd: 'logOperation',
    event: 'tauri-click',
    payload: 'this payload is optional because we used Option in Rust'
  })
})

document.getElementById('request').addEventListener('click', function () {
  window.__TAURI__.promisified({
    cmd: 'performRequest',
    endpoint: 'dummy endpoint arg',
    body: {
      id: 5,
      name: 'test'
    }
  }).then(registerResponse).catch(registerResponse)
})

document.getElementById('event').addEventListener('click', function () {
  window.__TAURI__.event.emit('js-event', 'this is the payload string')
})
