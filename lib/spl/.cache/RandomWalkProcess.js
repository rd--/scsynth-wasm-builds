sl.addType(
  false,
  "RandomWalkProcess",
  "RandomWalkProcess",
  ["Object"],
  ["p", "q"],
);

sl.copyTraitMethodsToType(
  "Object",
  "RandomWalkProcess",
);

sl.addMethodToExistingType(
  "RandomWalkProcess",
  "RandomWalkProcess",
  "asStream",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _q = _q_1(_self);
    let _x = 0;
    /* Statements */
    return _BlockStream_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _nextRandomFloat_1(_r);
        /* Statements */
        _if_3(
          _lessThanSign_2(_u, _p),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _x = _plusSign_2(_x, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_u, _plusSign_2(_p, _q)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _x = _hyphenMinus_2(_x, 1);
              }, []),
            );
          }, []),
        );
        return _x;
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
  "{ :self :r |\n\t\tlet p = self.p;\n\t\tlet q = self.q;\n\t\tlet x = 0;\n\t\tBlockStream {\n\t\t\tlet u = r.nextRandomFloat;\n\t\t\t(u < p).if {\n\t\t\t\tx := x + 1\n\t\t\t} {\n\t\t\t\t(u < (p + q)).ifTrue {\n\t\t\t\t\tx := x - 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tx\n\t\t} {\n\t\t\tx := 0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "RandomWalkProcess",
  "RandomWalkProcess",
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
  "RandomWalkProcess",
  "RandomWalkProcess",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newRandomWalkProcess_0(), _p, _q);
  }, ["p", "q"]),
  "{ :p :q |\n\t\tnewRandomWalkProcess().initializeSlots(p, q)\n\t}",
);
