sl.addTrait("WriteStream", "WriteStream");

sl.addTraitMethod(
  "WriteStream",
  "WriteStream",
  "nextPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "WriteStream>>nextPut");
  },
  "{ :self :anObject |\n\t\tself.typeResponsibility('WriteStream>>nextPut')\n\t}",
);

sl.addTraitMethod(
  "WriteStream",
  "WriteStream",
  "nextPutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextPut_2(_self, _each);
    });
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.nextPut(each)\n\t\t};\n\t\taCollection\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "WriteStream",
  "putOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nextPut_2(_aStream, _self);
  },
  "{ :self :aStream |\n\t\taStream.nextPut(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "WriteStream",
  "putOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nextPutAll_2(_aStream, _self);
  },
  "{ :self :aStream |\n\t\taStream.nextPutAll(self)\n\t}",
);

sl.addMethod(
  "String",
  "WriteStream",
  "encodeOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isBinary_1(_aStream), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextPutAll_2(_aStream, _utf8ByteArray_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("String>>encodeOn: not binary stream");
    });
  },
  "{ :self :aStream |\n\t\taStream.isBinary.if {\n\t\t\taStream.nextPutAll(self.utf8ByteArray)\n\t\t} {\n\t\t\t'String>>encodeOn: not binary stream'.error\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "WriteStream",
  "printOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _encodeOn_2(_printString_1(_self), _aStream);
  },
  "{ :self :aStream |\n\t\tself.printString.encodeOn(aStream)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "WriteStream",
  "storeOn",
  ["self", "aStream"],
  function (_self, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStream";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _encodeOn_2(_storeString_1(_self), _aStream);
  },
  "{ :self :aStream |\n\t\tself.storeString.encodeOn(aStream)\n\t}",
);
