sl.addTrait("New", "New");

sl.addMethodToExistingTrait(
  "New",
  "New",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeReponsibility_2(_self, "species");
  }, ["self"]),
  "{ :self |\n\t\tself.typeReponsibility('species')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@New",
  "New",
  "new",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_species_1(_self), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.species.cull(aNumber)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@New",
  "New",
  "new",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _new_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.new(0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@New",
  "New",
  "newFrom",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    let _size = _size_1(_aCollection);
    let _answer = _new_2(_self, _size);
    _fillFromInPlace_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet size = aCollection.size;\n\t\tlet answer = self.new(size);\n\t\tanswer.fillFrom!(aCollection);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@New",
  "New",
  "newOfSize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_2(_self, _aNumber);
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_answer), _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _extendToSizeInPlace_2(_answer, _aNumber);
      }, []),
    );
    return _answer;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet answer = self.new(aNumber);\n\t\t(answer.size != aNumber).ifTrue {\n\t\t\tanswer.extendToSize!(aNumber)\n\t\t};\n\t\tanswer\n\t}",
);
