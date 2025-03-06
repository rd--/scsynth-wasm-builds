/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.addType(
  false,
  "LinearCongruential",
  "LinearCongruential",
  ["Object", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "state"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "LinearCongruential",
);

sl.copyTraitMethodsToType(
  "Stream",
  "LinearCongruential",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
  "initialize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _seed_2(_self, _aNumber);
    _reset_1(_self);
    return _self;
  }, ["self", "aNumber"]),
  "{ :self :aNumber | seed(self, aNumber); reset(self); self }",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
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
  }, ["self"]),
  "{ :self | let m = 139968; let a = 3877; let c = 29573; let r = \\\\((+(*(state(self), a), c)), m); state(self, r); /(r, m) }",
);

sl.addMethodToExistingType(
  "LinearCongruential",
  "LinearCongruential",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _state_2(_self, _seed_1(_self));
  }, ["self"]),
  "{ :self | state(self, seed(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "LinearCongruential",
  "LinearCongruential",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newLinearCongruential_0(), _self);
  }, ["self"]),
  "{ :self | initialize(newLinearCongruential(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "LinearCongruential",
  "LinearCongruential",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _LinearCongruential_1(42);
  }, []),
  "{ LinearCongruential(42) }",
);
