sl.addType(
  true,
  "Promise",
  "Promise",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Promise",
);

sl.addMethod(
  "Promise",
  "Promise",
  "catch",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.catch(_aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive: return _self.catch(_aBlock_1);>\n\t}",
);

sl.addMethod(
  "Promise",
  "Promise",
  "finally",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.finally(_aBlock_0);
  },
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self.finally(_aBlock_0);>\n\t}",
);

sl.addMethod(
  "Promise",
  "Promise",
  "then",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.then(_aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive: return _self.then(_aBlock_1);>\n\t}",
);

sl.addMethod(
  "Promise",
  "Promise",
  "thenElse",
  ["self", "onResolve:/1", "onReject:/1"],
  function (_self, _onResolve_1, _onReject_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _onResolve_1, _onReject_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.then(_onResolve_1, _onReject_1);
  },
  "{ :self :onResolve:/1 :onReject:/1 |\n\t\t<primitive: return _self.then(_onResolve_1, _onReject_1);>\n\t}",
);

sl.addMethod(
  "Block",
  "Promise",
  "Promise",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Promise(_self_2);
  },
  "{ :self:/2 |\n\t\t<primitive: return new Promise(_self_2);>\n\t}",
);

sl.addMethod(
  "Array",
  "Promise",
  "allResolved",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.all(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.all(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Promise",
  "allSettled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.allSettled(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.allSettled(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Promise",
  "anyResolved",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.any(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.any(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Promise",
  "anySettled",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.race(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.race(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Promise",
  "Promise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allResolved_1(_self);
  },
  "{ :self |\n\t\tself.allResolved\n\t}",
);

sl.addMethod(
  "Error",
  "Promise",
  "Promise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.reject(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.reject(_self);>\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Promise",
  "resolvedPromise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Promise.resolve(_self);
  },
  "{ :self |\n\t\t<primitive: return Promise.resolve(_self);>\n\t}",
);
