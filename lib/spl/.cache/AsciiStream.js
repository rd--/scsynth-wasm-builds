/*  Requires: ByteArray MutableCollectionStream  */

sl.addMethod(
  "MutableCollectionStream",
  "AsciiStream",
  "asciiContents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asciiString_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.asciiString\n\t}",
);

sl.addMethod(
  "Block",
  "AsciiStream",
  "asciiStringStreamContents",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _stream = _AsciiStream_0();
    /* Statements */
    _self_1(_stream);
    return _asciiString_1(_contents_1(_stream));
  },
  "{ :self:/1 |\n\t\tlet stream = AsciiStream();\n\t\tself(stream);\n\t\tstream.contents.asciiString\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "AsciiStream",
  "AsciiStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asWriteStream_1(_ByteArray_1(_self));
  },
  "{ :self |\n\t\tByteArray(self).asWriteStream\n\t}",
);

sl.addMethod(
  "Void",
  "AsciiStream",
  "AsciiStream",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage =
        "Arity: expected 0, "; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _AsciiStream_1(100);
  },
  "{\n\t\tAsciiStream(100)\n\t}",
);
