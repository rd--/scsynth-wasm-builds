sl.addTrait("Stream", "Stream");

sl.addTraitMethod(
  "Stream",
  "Stream",
  "asStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Stream",
  "Stream",
  "equalToOnReset",
  ["self", "places"],
  function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _initialAnswer = _next_2(_self, _places);
    /* Statements */
    _reset_1(_self);
    return _equalsSign_2(_next_2(_self, _places), _initialAnswer);
  },
  "{ :self :places |\n\t\tlet initialAnswer = self.next(places);\n\t\tself.reset;\n\t\tself.next(places) = initialAnswer\n\t}",
);

sl.addTraitMethod(
  "Stream",
  "Stream",
  "equalUpToEndOnReset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _initialAnswer = _upToEnd_1(_self);
    /* Statements */
    _reset_1(_self);
    return _equalsSign_2(_upToEnd_1(_self), _initialAnswer);
  },
  "{ :self |\n\t\tlet initialAnswer = self.upToEnd;\n\t\tself.reset;\n\t\tself.upToEnd = initialAnswer\n\t}",
);

sl.addTraitMethod(
  "Stream",
  "Stream",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "Stream>>isBinary");
  },
  "{ :self |\n\t\tself.typeResponsibility('Stream>>isBinary')\n\t}",
);

sl.addTraitMethod(
  "Stream",
  "Stream",
  "isStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Stream",
  "Stream",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "Stream>>reset");
  },
  "{ :self |\n\t\tself.typeResponsibility('Stream>>reset')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Stream",
  "isStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
