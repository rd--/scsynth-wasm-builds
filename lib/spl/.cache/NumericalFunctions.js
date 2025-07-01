sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NumericalFunctions",
  "cosineWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _cos_1(_asterisk_2(_x, _pi_1(2)));
  }, ["x"]),
  "{ :x | cos((*(x, pi(2)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "NumericalFunctions",
  "cosineWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _cos_1(_asterisk_2(_x, _pi_1(2)));
  }, ["x"]),
  "{ :x | cos((*(x, pi(2)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NumericalFunctions",
  "sawtoothWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_x, 1);
  }, ["x"]),
  "{ :x | %(x, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "NumericalFunctions",
  "sawtoothWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentSign_2(_x, 1);
  }, ["x"]),
  "{ :x | %(x, 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NumericalFunctions",
  "squareWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _percentSign_2(_x, 1);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_u, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["x"]),
  "{ :x | let u = %(x, 1); if((>=(u, 0.5)), { -1 }, { 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "NumericalFunctions",
  "squareWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _percentSign_2(_x, 1);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_u, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["x"]),
  "{ :x | let u = %(x, 1); if((>=(u, 0.5)), { -1 }, { 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NumericalFunctions",
  "triangleWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _percentSign_2(_x, 1);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_u, 0.75),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(4, _hyphenMinus_2(_u, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_u, 0.25),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(-2, _hyphenMinus_2(_asterisk_2(2, _u), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(4, _u);
          }, []),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | let u = %(x, 1); if((>=(u, 0.75)), { *(4, (-(u, 1))) }, { if((>=(u, 0.25)), { *(-2, (-((*(2, u)), 1))) }, { *(4, u) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "NumericalFunctions",
  "triangleWave",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _percentSign_2(_x, 1);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_u, 0.75),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(4, _hyphenMinus_2(_u, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_u, 0.25),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(-2, _hyphenMinus_2(_asterisk_2(2, _u), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(4, _u);
          }, []),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x | let u = %(x, 1); if((>=(u, 0.75)), { *(4, (-(u, 1))) }, { if((>=(u, 0.25)), { *(-2, (-((*(2, u)), 1))) }, { *(4, u) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericalFunctions",
  "cosineWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosineWave_1);
  }, ["self"]),
  "{ :self | collect(self,cosineWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericalFunctions",
  "cosineWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosineWave_1);
  }, ["self"]),
  "{ :self | collect(self,cosineWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericalFunctions",
  "sawtoothWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sawtoothWave_1);
  }, ["self"]),
  "{ :self | collect(self,sawtoothWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericalFunctions",
  "sawtoothWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sawtoothWave_1);
  }, ["self"]),
  "{ :self | collect(self,sawtoothWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericalFunctions",
  "squareWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _squareWave_1);
  }, ["self"]),
  "{ :self | collect(self,squareWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericalFunctions",
  "squareWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _squareWave_1);
  }, ["self"]),
  "{ :self | collect(self,squareWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "NumericalFunctions",
  "triangleWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _triangleWave_1);
  }, ["self"]),
  "{ :self | collect(self,triangleWave:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "NumericalFunctions",
  "triangleWave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _triangleWave_1);
  }, ["self"]),
  "{ :self | collect(self,triangleWave:/1) }",
);
