/*  Requires: RandomNumberGenerator Iterator Stream  */

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SplitMix",
  "splitMix32RandomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let a = _self;
    return function () {
      a |= 0;
      a = a + 0x9e3779b9 | 0;
      let t = a ^ a >>> 15;
      t = Math.imul(t, 0x85ebca6b);
      t = t ^ t >>> 13;
      t = Math.imul(t, 0xc2b2ae35);
      return ((t = t ^ t >>> 16) >>> 0) / 4294967296;
    };
  }, ["self"]),
  "{ :self | <primitive: let a = _self;\n\t\treturn function () {\n\t\t\ta |= 0;\n\t\t\ta = a + 0x9e3779b9 | 0;\n\t\t\tlet t = a ^ a >>> 15;\n\t\t\tt = Math.imul(t, 0x85ebca6b);\n\t\t\tt = t ^ t >>> 13;\n\t\t\tt = Math.imul(t, 0xc2b2ae35);\n\t\t\treturn ((t = t ^ t >>> 16) >>> 0) / 4294967296;\n\t\t};>\n }",
);

sl.addType(
  false,
  "SplitMix",
  "SplitMix",
  ["Object", "Equatable", "Iterator", "RandomNumberGenerator", "Stream"],
  ["seed", "block"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SplitMix",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SplitMix",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "SplitMix",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "SplitMix",
);

sl.copyTraitMethodsToType(
  "Stream",
  "SplitMix",
);

sl.addMethodToExistingType(
  "SplitMix",
  "SplitMix",
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
  "SplitMix",
  "SplitMix",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_block_1(_self));
  }, ["self"]),
  "{ :self | value(block(self)) }",
);

sl.addMethodToExistingType(
  "SplitMix",
  "SplitMix",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_2(_self, _splitMix32RandomNumberGenerator_1(_seed_1(_self)));
  }, ["self"]),
  "{ :self | block(self, splitMix32RandomNumberGenerator(seed(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SplitMix",
  "SplitMix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_newSplitMix_0(), _self);
  }, ["self"]),
  "{ :self | initialize(newSplitMix(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SplitMix",
  "SplitMix",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _SplitMix_1(_absoluteTime_1(_system));
  }, []),
  "{ SplitMix(absoluteTime(system)) }",
);
