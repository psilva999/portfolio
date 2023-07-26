export function handleDarkMode() {
  const body = document.body

  if (!body.classList.contains('active')) {
    body.classList.add('active')
    localStorage.setItem('dark', "false") 
    
    light()
  }

  else {
    body.classList.remove('active')
    localStorage.setItem('dark', "true")
    
    dark()
  }
}

function dark() {
  properties('#222425', '#E2E5E9', '#EBEDF0',
    'rgba(226,229,233,.6)', 'rgba(226,229,233,.8)',
    'rgba(226,229,233,.3)', 'rgba(226,229,233,.1)',
    '#2A2C2D',
  )
}

function light() {
  properties('#E2E5E9', '#222425', '#222425',
    'rgba(34,36,37,.6)', 'rgba(34,36,37,.8)',
    'rgba(34,36,37,.3)', 'rgba(34,36,37,.3)',
    '#D4D8DE',
  )
}

export function localStoragePortfolio() {
  if (localStorage.getItem('dark') === null)
    localStorage.setItem('dark', "false")

  checkStatus()
  function checkStatus() {
    if (localStorage.getItem('dark') === "true") {
      document.body.classList.remove('active')

      dark()
    }

    else {
      document.body.classList.add('active')

      light()
    } 
  }
}

function properties(erie, mainColor, mainTitle, opaque, 
                    options, transparent, invisible, platinum) {

  document.documentElement.style.setProperty('--erie-plati', erie)
  document.documentElement.style.setProperty('--main-color', mainColor)
  document.documentElement.style.setProperty('--main-title', mainTitle)

  document.documentElement.style.setProperty('--opaque', opaque)
  document.documentElement.style.setProperty('--options', options)

  document.documentElement.style.setProperty('--transparent', transparent)
  document.documentElement.style.setProperty('--invisible', invisible)
  document.documentElement.style.setProperty('--jet-platinum', platinum)
}
