sl.addTrait("Random", "Random");

sl.addTraitMethod(
  "Random",
  "Random",
  "isRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "randomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Random>>randomFloat: type responsibility");
  },
  "{ :self |\n\t\tself.error('@Random>>randomFloat: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "randomFloat",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_randomFloat_1(_self), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.randomFloat * aNumber\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "randomFloat",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_min, _randomFloat_2(_self, _minus_2(_max, _min)));
  },
  "{ :self :min :max |\n\t\tmin + self.randomFloat(max - min)\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "randomInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_randomFloat_3(_self, 1, _plus_2(_anInteger, 1)));
  },
  "{ :self :anInteger |\n\t\tself.randomFloat(1, anInteger + 1).floor\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "randomInteger",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_randomFloat_3(_self, _min, _plus_2(_max, 1)));
  },
  "{ :self :min :max |\n\t\tself.randomFloat(min, max + 1).floor\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Random",
  "isRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
