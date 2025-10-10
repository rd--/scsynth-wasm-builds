sl.addType(
  false,
  "BernoulliProcess",
  "BernoulliProcess",
  ["Object"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BernoulliProcess",
);

sl.addMethodToExistingType(
  "BernoulliProcess",
  "BernoulliProcess",
  "asStream",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_lessThanSign_2(_nextRandomFloat_1(_r), _p));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r |\n\t\tlet p = self.p;\n\t\tBlockStream {\n\t\t\t(r.nextRandomFloat < p).boole\n\t\t} {\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliProcess",
  "BernoulliProcess",
  "randomFunction",
  ["self", "r", "t", "n"],
  sl.annotateFunction(function (_self, _r, _t, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _r, _t, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueSeriesRandomFunction_3(_asStream_2(_self, _r), _t, _n);
  }, ["self", "r", "t", "n"]),
  "{ :self :r :t :n |\n\t\tself.asStream(r).valueSeriesRandomFunction(t, n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BernoulliProcess",
  "BernoulliProcess",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBernoulliProcess_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewBernoulliProcess().initializeSlots(p)\n\t}",
);
