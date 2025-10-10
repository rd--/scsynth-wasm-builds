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
  "{ :x |\n\t\t(x * 2.pi).cos\n\t}",
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
  "{ :x |\n\t\t(x * 2.pi).cos\n\t}",
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
  "{ :x |\n\t\tx % 1\n\t}",
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
  "{ :x |\n\t\tx % 1\n\t}",
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
  "{ :x |\n\t\tlet u = x % 1;\n\t\t(u >= 0.5).if {\n\t\t\t-1\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
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
  "{ :x |\n\t\tlet u = x % 1;\n\t\t(u >= 0.5).if {\n\t\t\t-1\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
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
  "{ :x |\n\t\tlet u = x % 1;\n\t\t(u >= 0.75).if {\n\t\t\t4 * (u - 1)\n\t\t} {\n\t\t\t(u >= 0.25).if {\n\t\t\t\t-2 * ((2 * u) - 1)\n\t\t\t} {\n\t\t\t\t4 * u\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :x |\n\t\tlet u = x % 1;\n\t\t(u >= 0.75).if {\n\t\t\t4 * (u - 1)\n\t\t} {\n\t\t\t(u >= 0.25).if {\n\t\t\t\t-2 * ((2 * u) - 1)\n\t\t\t} {\n\t\t\t\t4 * u\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.collect(cosineWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cosineWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sawtoothWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sawtoothWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(squareWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(squareWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(triangleWave:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(triangleWave:/1)\n\t}",
);
