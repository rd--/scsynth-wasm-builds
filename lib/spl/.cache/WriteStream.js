sl.addTrait("WriteStream", "WriteStream");

sl.addMethodToExistingTrait(
  "WriteStream",
  "WriteStream",
  "nextPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@WriteStream>>nextPut");
  },
  "{ :self :anObject | typeResponsibility(self,'@WriteStream>>nextPut') }",
);

sl.addMethodToExistingTrait(
  "WriteStream",
  "WriteStream",
  "nextPutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextPut_2(_self, _each);
    });
    return _aCollection;
  },
  "{ :self :aCollection | do(aCollection, { :each | nextPut(self,each) }); aCollection }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "WriteStream",
  "putOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextPut_2(_aStream, _self);
  },
  "{ :self :aStream | nextPut(aStream,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "WriteStream",
  "putOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextPutAll_2(_aStream, _self);
  },
  "{ :self :aStream | nextPutAll(aStream,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "WriteStream",
  "encodeOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isBinary_1(_aStream), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _nextPutAll_2(_aStream, _utf8ByteArray_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("String>>encodeOn: not binary stream");
    });
  },
  "{ :self :aStream | if(isBinary(aStream), { nextPutAll(aStream,utf8ByteArray(self)) }, { error('String>>encodeOn: not binary stream') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "WriteStream",
  "printOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _encodeOn_2(_printString_1(_self), _aStream);
  },
  "{ :self :aStream | encodeOn(printString(self),aStream) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "WriteStream",
  "storeOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      throw new Error(errorMessage);
    } /* Statements */
    return _encodeOn_2(_storeString_1(_self), _aStream);
  },
  "{ :self :aStream | encodeOn(storeString(self),aStream) }",
);
