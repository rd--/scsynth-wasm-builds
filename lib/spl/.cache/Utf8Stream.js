/*  Requires: ByteArray MutableCollectionStream  */

sl.addMethod(
  "MutableCollectionStream",
  "Utf8Stream",
  "utf8Contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _utf8String_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.utf8String\n\t}",
);

sl.addMethod(
  "Block",
  "Utf8Stream",
  "utf8StringStreamContents",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stream = _Utf8Stream_0();
    /* Statements */
    _self_1(_stream);
    return _utf8String_1(_contents_1(_stream));
  },
  "{ :self:/1 |\n\t\tlet stream = Utf8Stream();\n\t\tself(stream);\n\t\tstream.contents.utf8String\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Utf8Stream",
  "Utf8Stream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asWriteStream_1(_ByteArray_1(_self));
  },
  "{ :self |\n\t\tByteArray(self).asWriteStream\n\t}",
);

sl.addMethod(
  "Void",
  "Utf8Stream",
  "Utf8Stream",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Utf8Stream_1(100);
  },
  "{\n\t\tUtf8Stream(100)\n\t}",
);
