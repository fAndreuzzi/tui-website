const { fetchThemes } = require('store/firebase')

function getThemes(state, emitter) {
  fetchThemes((data) => {
    state.themes = data
    Object.keys(data).map((theme) => {
      // add pagination
    })
    state.themesLoaded = true
    emitter.emit('render')
  })
}

function getSingle(data, state, emitter) {
  // get single file,
  // create customTheme from default
}

const fetchFiles = {
  getThemes,
  getSingle
}

module.exports = fetchFiles
