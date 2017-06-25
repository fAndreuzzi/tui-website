const Fairybread = require('fairybread')
const globalCss = new Fairybread('global')
const cssVars = require('../style/vars')
// Component styles
// const marks = require('styles/mark-tab')
// reset(globalCss, cssVars)

const reset = require('../style/reset')
const grid = require('../style/grid')

reset(globalCss, cssVars)
grid(globalCss, cssVars)

module.exports = globalCss
