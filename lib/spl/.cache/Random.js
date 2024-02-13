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
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nextRandomFloat_1(_self);
  },
  "{ :self |\n\t\tself.nextRandomFloat\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Random>>nextRandomFloat: type responsibility");
  },
  "{ :self |\n\t\tself.error('@Random>>nextRandomFloat: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomFloat",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_nextRandomFloat_1(_self), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.nextRandomFloat * aNumber\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomFloat",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _min,
      _asterisk_2(_nextRandomFloat_1(_self), _hyphenMinus_2(_max, _min)),
    );
  },
  "{ :self :min :max |\n\t\tmin + (self.nextRandomFloat * (max - min))\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomFloatBipolar",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nextRandomFloat_3(_self, _negated_1(_aNumber), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.nextRandomFloat(aNumber.negated, aNumber)\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_nextRandomFloat_3(_self, 1, _plusSign_2(_anInteger, 1)));
  },
  "{ :self :anInteger |\n\t\tself.nextRandomFloat(1, anInteger + 1).floor\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomInteger",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(_nextRandomFloat_3(_self, _min, _plusSign_2(_max, 1)));
  },
  "{ :self :min :max |\n\t\tself.nextRandomFloat(min, max + 1).floor\n\t}",
);

sl.addTraitMethod(
  "Random",
  "Random",
  "nextRandomIntegerBipolar",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _floor_1(
      _nextRandomFloat_3(
        _self,
        _negated_1(_anInteger),
        _plusSign_2(_anInteger, 1),
      ),
    );
  },
  "{ :self :anInteger |\n\t\tself.nextRandomFloat(anInteger.negated, anInteger + 1).floor\n\t}",
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
