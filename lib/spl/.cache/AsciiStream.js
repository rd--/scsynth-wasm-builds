/*  Requires: ByteArray MutableCollectionStream  */

sl.extendTypeOrTraitWithMethod(
  "MutableCollectionStream",
  "AsciiStream",
  "asciiContents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asciiString_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asciiString\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "AsciiStream",
  "asciiStringStreamContents",
  ["self:/1"],
  sl.annotateFunction(function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stream = _AsciiStream_0();
    /* Statements */
    _self_1(_stream);
    return _asciiString_1(_contents_1(_stream));
  }, ["self:/1"]),
  "{ :self:/1 |\n\t\tlet stream = AsciiStream();\n\t\tself(stream);\n\t\tstream.contents.asciiString\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "AsciiStream",
  "AsciiStream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asWriteStream_1(_ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tByteArray(self).asWriteStream\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "AsciiStream",
  "AsciiStream",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _AsciiStream_1(100);
  }, []),
  "{\n\t\tAsciiStream(100)\n\t}",
);
