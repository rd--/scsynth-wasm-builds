/*  Requires: ByteArray MutableCollectionStream  */

sl.extendTypeOrTraitWithMethod(
  "MutableCollectionStream",
  "Utf8Stream",
  "utf8Contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _utf8String_1(_contents_1(_self));
  },
  "{ :self | utf8String(contents(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Utf8Stream",
  "utf8StringStreamContents",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stream = _Utf8Stream_0();
    /* Statements */
    _self_1(_stream);
    return _utf8String_1(_contents_1(_stream));
  },
  "{ :self:/1 | let stream = Utf8Stream(); self(stream); utf8String(contents(stream)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Utf8Stream",
  "Utf8Stream",
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
  "Utf8Stream",
  "Utf8Stream",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Utf8Stream_1(100);
  },
  "{ Utf8Stream(100) }",
);
