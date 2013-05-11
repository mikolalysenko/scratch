"use strict"

var bits = require("bit-twiddle")

var BUFFER      = (new Uint8Array(1024)).buffer
  , INT8_VIEW   = new Int8Array(BUFFER)
  , INT16_VIEW  = new Int16Array(BUFFER)
  , INT32_VIEW  = new Int32Array(BUFFER)
  , UINT8_VIEW  = new Uint8Array(BUFFER)
  , UINT16_VIEW = new Uint16Array(BUFFER)
  , UINT32_VIEW = new Uint32Array(BUFFER)
  , FLOAT_VIEW  = new Float32Array(BUFFER)
  , DOUBLE_VIEW = new Float64Array(BUFFER)

function realloc(n) {
  if(n < BUFFER.length) {
    return
  }
  var l = bits.nextPow2(n)
  BUFFER      = (new Uint8Array(l)).buffer
  INT8_VIEW   = new Int8Array(BUFFER)
  INT16_VIEW  = new Int16Array(BUFFER)
  INT32_VIEW  = new Int32Array(BUFFER)
  UINT8_VIEW  = new Uint8Array(BUFFER)
  UINT16_VIEW = new Uint16Array(BUFFER)
  UINT32_VIEW = new Uint32Array(BUFFER)
  FLOAT_VIEW  = new Float32Array(BUFFER)
  DOUBLE_VIEW = new Float64Array(BUFFER)
}

function getScratch(n, dtype) {
  if(dtype === undefined) {
    realloc(n)
    return BUFFER
  }
  switch(dtype) {
    case "uint8":
      realloc(n)
      return UINT8_VIEW
    case "uint16":
      realloc(2*n)
      return UINT16_VIEW
    case "uint32":
      realloc(4*n)
      return UINT32_VIEW
    case "int8":
      realloc(n)
      return INT8_VIEW
    case "int16":
      realloc(2*n)
      return INT16_VIEW
    case "int32":
      realloc(4*n)
      return INT32_VIEW
    case "float":
    case "float32":
      realloc(4*n)
      return FLOAT_VIEW
    case "double":
    case "float64":
      realloc(8*n)
      return DOUBLE_VIEW
  }
  return null
}

module.exports = getScratch
