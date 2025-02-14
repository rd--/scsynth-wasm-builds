sl.addType(
  false,
  "Missing",
  "Missing",
  ["Object"],
  ["reason", "value"],
);

sl.copyTraitToType(
  "Object",
  "Missing",
);

sl.addMethod(
  "Missing",
  "Missing",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "String",
  "Missing",
  "Missing",
  ["aString", "anObject"],
  function (_aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aString, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMissing_0(), _aString, _anObject);
  },
  "{ :aString :anObject |\n\t\tnewMissing().initializeSlots(aString, anObject)\n\t}",
);

sl.addMethod(
  "String",
  "Missing",
  "Missing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Missing_2(_self, null);
  },
  "{ :self |\n\t\tMissing(self, nil)\n\t}",
);
