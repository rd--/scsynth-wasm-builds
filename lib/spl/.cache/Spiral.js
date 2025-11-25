sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "archimedeanSpiral",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_a, _circumflexAccent_2(_theta, _solidus_2(1, _n)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "n"]),
  "{ :a :n |\n\t\t{ :theta |\n\t\t\tlet r = a * (theta ^ (1 / n));\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "eulerSpiral",
  ["theta"],
  sl.annotateFunction(function (_theta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return [_fresnelC_1(_theta), _fresnelS_1(_theta)];
  }, ["theta"]),
  "{ :theta |\n\t\t[theta.fresnelC, theta.fresnelS]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "galileanSpiral",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _hyphenMinus_2(_asterisk_2(_b, _square_1(_theta)), _a);
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet rho = (b * theta.square) - a;\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "inverseNorwichSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _asterisk_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_asterisk_2(2, _t), _tan_1(_t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet rho = a * t.cos.square;\n\t\t\tlet theta = (2 * t) - t.tan;\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "logarithmicSpiral",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _asterisk_2(_a, _exp_1(_asterisk_2(_b, _theta)));
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\t{ :theta |\n\t\t\tlet r = a * (b * theta).exp;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "norwichSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _solidus_2(_a, _square_1(_cos_1(_t)));
      let _theta = _hyphenMinus_2(_tan_1(_t), _asterisk_2(2, _t));
      /* Statements */
      return _fromPolarCoordinates_1([_rho, _theta]);
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet rho = a / t.cos.square;\n\t\t\tlet theta = t.tan - (2 * t);\n\t\t\t[rho theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "seiffertsSpiral",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _sqrt_1(_m);
    /* Statements */
    return sl.annotateFunction(function (_s) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _s";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _rho = _jacobiSn_2(_s, _m);
      let _theta = _asterisk_2(_k, _s);
      let _z = _jacobiCn_2(_s, _m);
      /* Statements */
      return _fromCylindricalCoordinates_1([_rho, _theta, _z]);
    }, ["s"]);
  }, ["m"]),
  "{ :m |\n\t\tlet k = m.sqrt;\n\t\t{ :s |\n\t\t\tlet rho = jacobiSn(s, m);\n\t\t\tlet theta = k * s;\n\t\t\tlet z = jacobiCn(s, m);\n\t\t\t[rho theta z].fromCylindricalCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "sinusoidalSpiral",
  ["n", "a"],
  sl.annotateFunction(function (_n, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _nthRoot_2(
        _asterisk_2(
          _asterisk_2(2, _circumflexAccent_2(_a, _n)),
          _cos_1(_asterisk_2(_n, _theta)),
        ),
        _n,
      );
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["n", "a"]),
  "{ :n :a |\n\t\t{ :theta |\n\t\t\tlet r = (2 * (a ^ n) * (n * theta).cos).nthRoot(n);\n\t\t\t[r theta].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "sphericalSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _c = _arcTan_1(_asterisk_2(_t, _a));
      let _d = _cos_1(_c);
      let _x = _asterisk_2(_cos_1(_t), _d);
      let _y = _asterisk_2(_sin_1(_t), _d);
      let _z = _hyphenMinus_1(_sin_1(_c));
      /* Statements */
      return [_x, _y, _z];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\tlet c = (t * a).arcTan;\n\t\t\tlet d = c.cos;\n\t\t\tlet x = t.cos * d;\n\t\t\tlet y = t.sin * d;\n\t\t\tlet z = c.sin.-;\n\t\t\t[x, y, z]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "squareSpiralDo",
  ["self", "f:/2"],
  sl.annotateFunction(function (_self, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2([0, 0, 0, 0, 0, 0, 0], 7);
    let _x = _at_2(__SplVar1, 1);
    let _y = _at_2(__SplVar1, 2);
    let _i = _at_2(__SplVar1, 3);
    let _j = _at_2(__SplVar1, 4);
    let _m = _at_2(__SplVar1, 5);
    let _n = _at_2(__SplVar1, 6);
    let _c = _at_2(__SplVar1, 7);
    /* Statements */
    return _toDo_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        _f_2(_x, _y);
        _ifTrue_2(
          _equalsSign_2(_n, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _c = _plusSign_2(_c, 1);
            _ifTrue_2(
              _greaterThanSign_2(_c, 3),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _c = 0;
              }, []),
            );
            _ifTrue_2(
              _equalsSign_2(_c, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _i = 0;
                return _j = 1;
              }, []),
            );
            _ifTrue_2(
              _equalsSign_2(_c, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _i = 1;
                return _j = 0;
              }, []),
            );
            _ifTrue_2(
              _equalsSign_2(_c, 2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _i = 0;
                return _j = -1;
              }, []),
            );
            _ifTrue_2(
              _equalsSign_2(_c, 3),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _i = -1;
                return _j = 0;
              }, []),
            );
            _ifTrue_2(
              _includes_2([1, 3], _c),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _m = _plusSign_2(_m, 1);
              }, []),
            );
            return _n = _m;
          }, []),
        );
        _n = _hyphenMinus_2(_n, 1);
        _x = _plusSign_2(_x, _i);
        return _y = _plusSign_2(_y, _j);
      }, ["k"]),
    );
  }, ["self", "f:/2"]),
  "{ :self :f:/2 |\n\t\tlet [x, y, i, j, m, n, c] = [0, 0, 0, 0, 0, 0, 0];\n\t\t0.toDo(self - 1) { :k |\n\t\t\tf(x, y);\n\t\t\t(n = 0).ifTrue {\n\t\t\t\tc := c + 1;\n\t\t\t\t(c > 3).ifTrue { c := 0 };\n\t\t\t\t(c = 0).ifTrue { i := 0; j := 1 };\n\t\t\t\t(c = 1).ifTrue { i := 1; j := 0 };\n\t\t\t\t(c = 2).ifTrue { i := 0; j := -1 };\n\t\t\t\t(c = 3).ifTrue { i := -1; j := 0 };\n\t\t\t\t[1 3].includes(c).ifTrue { m := m + 1 };\n\t\t\t\tn := m\n\t\t\t};\n\t\t\tn := n - 1;\n\t\t\tx := x + i;\n\t\t\ty := y + j\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "squareSpiral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _squareSpiralDo_2(
      _self,
      sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_x, _y]);
      }, ["x", "y"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.squareSpiralDo { :x :y |\n\t\t\tanswer.add([x, y])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "tractrixSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        _asterisk_2(
          _asterisk_2(_a, _cos_1(_t)),
          _cos_1(_hyphenMinus_2(_t, _tan_1(_t))),
        ),
        _asterisk_2(
          _asterisk_2(_a, _cos_1(_t)),
          _sin_1(_hyphenMinus_2(_t, _tan_1(_t))),
        ),
      ];
    }, ["t"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :t |\n\t\t\t[\n\t\t\t\ta * cos(t) * cos(t - tan(t)),\n\t\t\t\ta * cos(t) * sin(t - tan(t))\n\t\t\t]\n\t\t}\n\t}",
);
