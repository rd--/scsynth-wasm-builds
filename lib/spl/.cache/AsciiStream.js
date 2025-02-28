/*  Requires: ByteArray MutableCollectionStream  */

sl.extendTypeOrTraitWithMethod(
  "MutableCollectionStream",
  "AsciiStream",
  "asciiContents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asciiString_1(_contents_1(_self));
  },
  "{ :self | asciiString(contents(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "AsciiStream",
  "asciiStringStreamContents",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stream = _AsciiStream_0();
    /* Statements */
    _self_1(_stream);
    return _asciiString_1(_contents_1(_stream));
  },
  "{ :self:/1 | let stream = AsciiStream(); self(stream); asciiString(contents(stream)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "AsciiStream",
  "AsciiStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asWriteStream_1(_ByteArray_1(_self));
  },
  "{ :self | asWriteStream(ByteArray(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "AsciiStream",
  "AsciiStream",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _AsciiStream_1(100);
  },
  "{ AsciiStream(100) }",
);
