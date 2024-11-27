/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "LinearCongruential",
  "LinearCongruential",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "state"],
);

sl.copyTraitToType(
  "Object",
  "LinearCongruential",
);

sl.copyTraitToType(
  "Iterator",
  "LinearCongruential",
);

sl.copyTraitToType(
  "RandomNumberGenerator",
  "LinearCongruential",
);

sl.copyTraitToType(
  "Stream",
  "LinearCongruential",
);

sl.addMethod(
  "LinearCongruential",
  "LinearCongruential",
  "initialize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  },
  "{ :self :aNumber |\n\t\tself.seed := aNumber;\n\t\tself.reset;\n\t\tself\n\t}",
);

sl.addMethod(
  "LinearCongruential",
  "LinearCongruential",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = 139968;
    let _a = 3877;
    let _c = 29573;
    let _r = _reverseSolidusReverseSolidus_2(
      _plusSign_2(_asterisk_2(_state_1(_self), _a), _c),
      _m,
    );
    /* Statements */
    _state_2(_self, _r);
    return _solidus_2(_r, _m);
  },
  "{ :self |\n\t\tlet m = 139968;\n\t\tlet a = 3877;\n\t\tlet c = 29573;\n\t\tlet r = (self.state * a + c) \\\\ m;\n\t\tself.state := r;\n\t\tr / m\n\t}",
);

sl.addMethod(
  "LinearCongruential",
  "LinearCongruential",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _state_2(_self, _seed_1(_self));
  },
  "{ :self |\n\t\tself.state := self.seed\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "LinearCongruential",
  "LinearCongruential",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newLinearCongruential_0(), _self);
  },
  "{ :self |\n\t\tnewLinearCongruential().initialize(self)\n\t}",
);

sl.addMethod(
  "Void",
  "LinearCongruential",
  "LinearCongruential",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage =
        "Arity: expected 0, "; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LinearCongruential_1(42);
  },
  "{\n\t\tLinearCongruential(42)\n\t}",
);
