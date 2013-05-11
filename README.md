scratch
=======
Reuse scratch memory for intermediate calculations.  This is useful for avoiding costly reallocations and for keeping temporary array data in hot cache between procedure calls.

## Install

    npm install scratch

### `require("scratch")(n[, dtype])`
Returns a temporary array buffer for intermediate calculations.

* `n` is the length of the array
* `dtype` is an optional string which specifies the type of the typed array to return.  Possible options are:
    + `"uint8"`
    + `"uint16"`
    + `"uint32"`
    + `"int8"`
    + `"int16"`
    + `"int32"`
    + `"float32"`
    + `"float64"`
    + `undefined` - Returns an ArrayBuffer

**Returns** A typed array of length `n`

## Warning
This module is non-reentrant.  Once you have allocated scratch memory, you should not call any submodules, or else they may overwrite the contents of the data in scratch.  You should only use this module if you know what you are doing.

# Credits
(c) 2013 Mikola Lysenko. MIT License