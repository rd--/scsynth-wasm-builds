sl.addType(
  false,
  "BinomialProcess",
  "BinomialProcess",
  ["Object"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BinomialProcess",
);

sl.addMethodToExistingType(
  "BinomialProcess",
  "BinomialProcess",
  "asStream",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _x = 0;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x = _plusSign_2(
          _x,
          _boole_1(_lessThanSign_2(_nextRandomFloat_1(_r), _p)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x = 0;
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r |\n\t\tlet p = self.p;\n\t\tlet x = 0;\n\t\tBlockStream {\n\t\t\tx := x + (r.nextRandomFloat < p).boole\n\t\t} {\n\t\t\tx := 0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BinomialProcess",
  "BinomialProcess",
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
  "BinomialProcess",
  "BinomialProcess",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBinomialProcess_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewBinomialProcess().initializeSlots(p)\n\t}",
);
