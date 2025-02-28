sl.addType(
  true,
  "Promise",
  "Promise",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Promise",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "finally",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.finally(_aBlock_0);
  },
  "{ :self :aBlock:/0 | <primitive: return _self.finally(_aBlock_0);>\n }",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "onRejection",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.catch(_aBlock_1);
  },
  "{ :self :aBlock:/1 | <primitive: return _self.catch(_aBlock_1);>\n }",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "then",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.then(_aBlock_1);
  },
  "{ :self :aBlock:/1 | <primitive: return _self.then(_aBlock_1);>\n }",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "thenElse",
  ["self", "onResolve:/1", "onReject:/1"],
  function (_self, _onResolve_1, _onReject_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _onResolve_1, _onReject_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.then(_onResolve_1, _onReject_1);
  },
  "{ :self :onResolve:/1 :onReject:/1 | <primitive: return _self.then(_onResolve_1, _onReject_1);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Promise",
  "Promise",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Promise(_self_2);
  },
  "{ :self:/2 | <primitive: return new Promise(_self_2);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "allFulfilled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.all(_self);
  },
  "{ :self | <primitive: return Promise.all(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "allSettled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.allSettled(_self);
  },
  "{ :self | <primitive: return Promise.allSettled(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "anyFulfilled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.any(_self);
  },
  "{ :self | <primitive: return Promise.any(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "anySettled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.race(_self);
  },
  "{ :self | <primitive: return Promise.race(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Error",
  "Promise",
  "rejectedPromise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.reject(_self);
  },
  "{ :self | <primitive: return Promise.reject(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Promise",
  "resolvedPromise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.resolve(_self);
  },
  "{ :self | <primitive: return Promise.resolve(_self);>\n }",
);
