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
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.finally(_aBlock_0);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self.finally(_aBlock_0);>\n\t}",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "onRejection",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.catch(_aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive: return _self.catch(_aBlock_1);>\n\t}",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "then",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.then(_aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive: return _self.then(_aBlock_1);>\n\t}",
);

sl.addMethodToExistingType(
  "Promise",
  "Promise",
  "thenElse",
  ["self", "onResolve:/1", "onReject:/1"],
  sl.annotateFunction(function (_self, _onResolve_1, _onReject_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _onResolve_1, _onReject_1";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.then(_onResolve_1, _onReject_1);
  }, ["self", "onResolve:/1", "onReject:/1"]),
  "{ :self :onResolve:/1 :onReject:/1 |\n\t\t<primitive: return _self.then(_onResolve_1, _onReject_1);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Promise",
  "Promise",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Promise(_self_2);
  }, ["self:/2"]),
  "{ :self:/2 |\n\t\t<primitive: return new Promise(_self_2);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "allFulfilled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.all(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.all(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "allSettled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.allSettled(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.allSettled(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "anyFulfilled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.any(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.any(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Promise",
  "anySettled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.race(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.race(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Error",
  "Promise",
  "rejectedPromise",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.reject(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.reject(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Promise",
  "resolvedPromise",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Promise.resolve(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Promise.resolve(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Promise",
  "Promise",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _self,
      sl.annotateFunction(function (_result) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _result";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawing_1(_result);
      }, ["result"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.then { :result |\n\t\t\tresult.drawing\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Promise",
  "Promise",
  "show",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _self,
      sl.annotateFunction(function (_result) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _result";
          throw new Error(errorMessage);
        } /* Statements */
        return _show_1(_result);
      }, ["result"]),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _plusSignPlusSign_2("show: ", _err));
      }, ["err"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.thenElse { :result |\n\t\t\tresult.show\n\t\t} { :err |\n\t\t\tself.error('show: ' ++ err)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Promise",
  "Promise",
  "writeSvg",
  ["self", "fileName"],
  sl.annotateFunction(function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _self,
      sl.annotateFunction(function (_result) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _result";
          throw new Error(errorMessage);
        } /* Statements */
        return _writeSvg_2(_result, _fileName);
      }, ["result"]),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, _plusSignPlusSign_2("writeSvg: ", _err));
      }, ["err"]),
    );
  }, ["self", "fileName"]),
  "{ :self :fileName |\n\t\tself.thenElse { :result |\n\t\t\tresult.writeSvg(fileName)\n\t\t} { :err |\n\t\t\tself.error('writeSvg: ' ++ err)\n\t\t}\n\t}",
);
