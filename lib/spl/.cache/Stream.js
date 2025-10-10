sl.addTrait("Stream", "Stream");

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "asStream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "equalToOnReset",
  ["self", "places"],
  sl.annotateFunction(function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _initialAnswer = _next_2(_self, _places);
    /* Statements */
    _reset_1(_self);
    return _equalsSign_2(_next_2(_self, _places), _initialAnswer);
  }, ["self", "places"]),
  "{ :self :places |\n\t\tlet initialAnswer = self.next(places);\n\t\tself.reset;\n\t\tself.next(places) = initialAnswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "equalUpToEndOnReset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _initialAnswer = _upToEnd_1(_self);
    /* Statements */
    _reset_1(_self);
    return _equalsSign_2(_upToEnd_1(_self), _initialAnswer);
  }, ["self"]),
  "{ :self |\n\t\tlet initialAnswer = self.upToEnd;\n\t\tself.reset;\n\t\tself.upToEnd = initialAnswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "Stream>>isBinary");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('Stream>>isBinary')\n\t}",
);

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "isStream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Stream",
  "Stream",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "Stream>>reset");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('Stream>>reset')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Stream",
  "isStream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);
