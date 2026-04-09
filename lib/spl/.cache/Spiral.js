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
  "diamondSpiral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _greaterThanSignGreaterThanSign_2(
        _plusSign_2(
          _integerSquareRoot_1(
            _lessThanSignLessThanSign_2(_plusSign_2(_n, 1), 3),
          ),
          1,
        ),
        1,
      );
      /* Statements */
      return _if_3(
        _equalsSign_2(_bitAnd_2(_m, 1), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            _n,
            _greaterThanSignGreaterThanSign_2(_square_1(_m), 1),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            _greaterThanSignGreaterThanSign_2(_square_1(_m), 1),
            _n,
          );
        }, []),
      );
    }, ["n"]);
    /* Statements */
    return _toCollect_3(
      0,
      _hyphenMinus_2(_self, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_i, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [0, 0];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _j = _floor_1(
              _solidus_2(
                _plusSign_2(_sqrt_1(_hyphenMinus_2(_asterisk_2(2, _i), 1)), 1),
                2,
              ),
            );
            let _x = _f_1(_i);
            let _y = _f_1(_hyphenMinus_2(_i, _j));
            /* Statements */
            return [_x, _y];
          }, []),
        );
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet f = { :n |\n\t\t\tlet m = (n + 1 << 3).integerSquareRoot + 1 >> 1;\n\t\t\t(m.bitAnd(1) = 1).if {\n\t\t\t\tn - (m.square >> 1)\n\t\t\t} {\n\t\t\t\t(m.square >> 1) - n\n\t\t\t}\n\t\t};\n\t\t0.toCollect(self - 1) { :i |\n\t\t\t(i < 1).if {\n\t\t\t\t[0 0]\n\t\t\t} {\n\t\t\t\tlet j = (((2 * i - 1).sqrt + 1) / 2).floor;\n\t\t\t\tlet x = f(i);\n\t\t\t\tlet y = f(i - j);\n\t\t\t\t[x, y]\n\t\t\t}\n\t\t}\n\t}",
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
  "hyperbolicSpiral",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _solidus_2(_a, _theta);
      /* Statements */
      return _fromPolarCoordinates_1([_r, _theta]);
    }, ["theta"]);
  }, ["a"]),
  "{ :a |\n\t\t{ :theta |\n\t\t\tlet r = a / theta;\n\t\t\t[r, theta].fromPolarCoordinates\n\t\t}\n\t}",
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
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_k, [
      _hyphenMinusGreaterThanSign_2(
        "Clockwise",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _squareSpiral_1(_n);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Counterclockwise",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _m = _hyphenMinus_2(_n, 2);
          let _d = _collect_2(
            _rangeOrRelativeRange_3(0, _m, 1),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _r = _solidus_2(
                _pi_1(
                  _mod_2(
                    _floor_1(_sqrt_1(_plusSign_2(_asterisk_2(4, _i), 1))),
                    4,
                  ),
                ),
                2,
              );
              /* Statements */
              return _round_1([_sin_1(_r), _negate_1(_cos_1(_r))]);
            }, ["i"]),
          );
          /* Statements */
          return _scanLeft_2(_plusSignPlusSign_2([[0, 0]], _d), _plusSign_2);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "B",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _realImaginary_1(
            _nestList_3(
              sl.annotateFunction(function (_z) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _z";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar2 = _assertIsOfSize_2(_realImaginary_1(_z), 2);
                let _r = _at_2(__SplVar2, 1);
                let _i = _at_2(__SplVar2, 2);
                let _w = _max_2(_abs_1(_r), _abs_1(_i));
                /* Statements */
                return _if_3(
                  _equalsSign_2(_i, _negate_1(_w)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(_z, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_i, _w),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _hyphenMinus_2(_z, 1);
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _equalsSign_2(_r, _negate_1(_w)),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _hyphenMinus_2(_z, _Complex_2(0, 1));
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _plusSign_2(_z, _Complex_2(0, 1));
                          }, []),
                        );
                      }, []),
                    );
                  }, []),
                );
              }, ["z"]),
              0,
              _n,
            ),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "C",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _squareSpiralWithFourArms_1(_n);
        }, []),
      ),
    ]);
  }, ["n", "k"]),
  "{ :n :k |\n\t\tk.caseOf(\n\t\t\t[\n\t\t\t\t'Clockwise' -> {\n\t\t\t\t\tn.squareSpiral\n\t\t\t\t},\n\t\t\t\t'Counterclockwise' -> {\n\t\t\t\t\tlet m = n - 2;\n\t\t\t\t\tlet d = 0:m.collect { :i |\n\t\t\t\t\t\tlet r = ((4 * i + 1).sqrt.floor.mod(4).pi / 2);\n\t\t\t\t\t\t[r.sin, r.cos.negate].round\n\t\t\t\t\t};\n\t\t\t\t\t([[0, 0]] ++ d).scanLeft(+)\n\t\t\t\t},\n\t\t\t\t'B' -> {\n\t\t\t\t\t{ :z |\n\t\t\t\t\t\tlet [r, i] = z.realImaginary;\n\t\t\t\t\t\tlet w = r.abs.max(i.abs);\n\t\t\t\t\t\t(i = -w).if {\n\t\t\t\t\t\t\tz + 1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(i = w).if {\n\t\t\t\t\t\t\t\tz - 1\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t(r = -w).if {\n\t\t\t\t\t\t\t\t\tz - 0J1\n\t\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\t\tz + 0J1\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}.nestList(0, n).realImaginary\n\t\t\t\t},\n\t\t\t\t'C' -> {\n\t\t\t\t\tn.squareSpiralWithFourArms\n\t\t\t\t}\n\t\t\t]\n\t\t)\n\t}",
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
  "squareSpiralRank",
  ["x", "y", "o"],
  sl.annotateFunction(function (_x, _y, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _if_3(
        _greaterThanSignEqualsSign_2(_y, _abs_1(_x)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            _hyphenMinus_2(_asterisk_2(4, _square_1(_y)), _y),
            _x,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _greaterThanSignEqualsSign_2(_negate_1(_x), _abs_1(_y)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinus_2(
                _hyphenMinus_2(_asterisk_2(4, _square_1(_x)), _x),
                _y,
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _greaterThanSignEqualsSign_2(_negate_1(_y), _abs_1(_x)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    _asterisk_2(_hyphenMinus_2(_asterisk_2(4, _y), 3), _y),
                    _x,
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    _asterisk_2(_hyphenMinus_2(_asterisk_2(4, _x), 3), _x),
                    _y,
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      ),
      _o,
    );
  }, ["x", "y", "o"]),
  "{ :x :y :o |\n\t\t(y >= x.abs).if {\n\t\t\t4 * y.square - y - x\n\t\t} {\n\t\t\t(-x >= y.abs).if {\n\t\t\t\t4 * x.square - x - y\n\t\t\t} {\n\t\t\t\t(-y >= x.abs).if {\n\t\t\t\t\t(4 * y - 3) * y + x\n\t\t\t\t} {\n\t\t\t\t\t(4 * x - 3) * x + y\n\t\t\t\t}\n\t\t\t}\n\t\t} + o\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "squareSpiralUnrank",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _integerSquareRoot_1(_hyphenMinus_2(_n, 1));
    let _k = _ceiling_1(_solidus_2(_m, 2));
    /* Statements */
    _n = _hyphenMinus_2(_hyphenMinus_2(_n, 1), _asterisk_2(4, _square_1(_k)));
    return _if_3(
      _lessThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_n, _negate_1(_m)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_k, _plusSign_2(_asterisk_2(3, _k), _n)];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_hyphenMinus_2(_negate_1(_k), _n), _k];
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_n, _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_negate_1(_k), _hyphenMinus_2(_k, _n)];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_hyphenMinus_2(_n, _asterisk_2(3, _k)), _negate_1(_k)];
          }, []),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet m = (n - 1).integerSquareRoot;\n\t\tlet k = (m / 2).ceiling;\n\t\tn := n - 1 - (4 * k.square);\n\t\t(n < 0).if {\n\t\t\t(n < -m).if {\n\t\t\t\t[k, 3 * k + n]\n\t\t\t} {\n\t\t\t\t[-k - n, k]\n\t\t\t}\n\t\t} {\n\t\t\t(n < m).if {\n\t\t\t\t[-k, k - n]\n\t\t\t} {\n\t\t\t\t[n - (3 * k), -k]\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "squareSpiralWithFourArms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _realImaginary_1(
      _toCollect_3(
        0,
        _hyphenMinus_2(_self, 1),
        sl.annotateFunction(function (_n) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _n";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _s = _integerSquareRoot_1(_n);
          let _r = _hyphenMinus_2(_n, _square_1(_s));
          /* Statements */
          _ifTrue_2(
            _greaterThanSign_2(_r, _s),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _s = _plusSign_2(_s, 1);
              return _r = _hyphenMinus_2(
                _r,
                _hyphenMinus_2(_asterisk_2(2, _s), 1),
              );
            }, []),
          );
          return _asterisk_2(
            _hyphenMinus_2(_r, _i_1(_s)),
            _circumflexAccent_2(_i_1(1), _s),
          );
        }, ["n"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t0.toCollect(self - 1) { :n |\n\t\t\tlet s = n.integerSquareRoot;\n\t\t\tlet r = n - s.square;\n\t\t\t(r > s).ifTrue {\n\t\t\t\ts := s + 1;\n\t\t\t\tr := r - (2 * s - 1)\n\t\t\t};\n\t\t\t(r - s.i) * (1.i ^ s)\n\t\t}.realImaginary\n\t}",
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

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Spiral",
  "triangularSpiral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _collect_2(
      _to_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _ceiling_1(_sqrt_1(_n));
        /* Statements */
        return _asterisk_2(
          _circumflexAccent_2(-1, _plusSign_2(_m, 1)),
          _plusSign_2(_plusSign_2(_hyphenMinus_2(0, _square_1(_m)), _m), _n),
        );
      }, ["n"]),
    );
    let _y = _collect_2(
      _to_2(0, _hyphenMinus_2(_self, 1)),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _sqrt_1(_n);
        let _a = _asterisk_2(
          _m,
          _max_2(0, _hyphenMinus_2(_asterisk_2(2, _percentSign_2(_m, 2)), 2)),
        );
        let _b = _asterisk_2(_asterisk_2(-2, _m), _percentSign_2(_m, -1));
        /* Statements */
        return _floor_1(
          _plusSign_2(_min_2(_a, _b), _ceiling_1(_solidus_2(_negate_1(_m), 2))),
        );
      }, ["n"]),
    );
    /* Statements */
    return _transpose_1([_x, _y]);
  }, ["self"]),
  "{ :self |\n\t\tlet x = 0.to(self - 1).collect { :n |\n\t\t\tlet m = n.sqrt.ceiling;\n\t\t\t(-1 ^ (m + 1)) * (0 - m.square + m + n)\n\t\t};\n\t\tlet y = 0.to(self - 1).collect { :n |\n\t\t\tlet m = n.sqrt;\n\t\t\tlet a = m * 0.max(2 * (m %  2) - 2);\n\t\t\tlet b = -2 * m * (m % -1);\n\t\t\t(a.min(b) + (-m / 2).ceiling).floor\n\t\t};\n\t\t[x, y].transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Spiral",
  "squareSpiralUnrank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _squareSpiralUnrank_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(squareSpiralUnrank:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Spiral",
  "squareSpiralRank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_v, 2);
        let _x = _at_2(__SplVar3, 1);
        let _y = _at_2(__SplVar3, 2);
        /* Statements */
        return _squareSpiralRank_3(_x, _y, 1);
      }, ["v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :v |\n\t\t\tlet [x, y] = v;\n\t\t\tsquareSpiralRank(x, y, 1)\n\t\t}\n\t}",
);
