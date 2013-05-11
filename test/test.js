"use strict"

var scratch = require("../scratch.js")

require("tap").test("scratch", function(t) {

  var i = scratch(10, "int32")
  t.assert(i.constructor === Int32Array)
  
  t.end()
})