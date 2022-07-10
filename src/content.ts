chrome.runtime.onMessage.addListener((r) => {
  chrome.browserAction.setIcon({
    path: {
      '16': 'dark.png',
      '32': 'dark.png',
      '48': 'dark.png',
      '128': 'dark.png'
    }
  })
})

export { }