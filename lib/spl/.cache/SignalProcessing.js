sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SignalProcessing",
  "aWeightingCurve",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(
      _circumflexAccent_2(12194, 2),
      _circumflexAccent_2(_x, 4),
    );
    let _b = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(20.6, 2),
    );
    let _c = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(107.7, 2),
    );
    let _d = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(737.9, 2),
    );
    let _e = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(12194, 2),
    );
    /* Statements */
    return _solidus_2(
      _a,
      _asterisk_2(_asterisk_2(_b, _sqrt_1(_asterisk_2(_c, _d))), _e),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet a = (12194 ^ 2) * (x ^ 4);\n\t\tlet b = (x ^ 2) + (20.6 ^ 2);\n\t\tlet c = (x ^ 2) + (107.7 ^ 2);\n\t\tlet d = (x ^ 2) + (737.9 ^ 2);\n\t\tlet e = (x ^ 2) + (12194 ^ 2);\n\t\ta / (b * (c * d).sqrt * e)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SignalProcessing",
  "bWeightingCurve",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _asterisk_2(
      _circumflexAccent_2(12194, 2),
      _circumflexAccent_2(_x, 3),
    );
    let _b = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(20.6, 2),
    );
    let _c = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(158.5, 2),
    );
    let _d = _plusSign_2(
      _circumflexAccent_2(_x, 2),
      _circumflexAccent_2(12194, 2),
    );
    /* Statements */
    return _solidus_2(_a, _asterisk_2(_asterisk_2(_b, _sqrt_1(_c)), _d));
  }, ["x"]),
  "{ :x |\n\t\tlet a = (12194 ^ 2) * (x ^ 3);\n\t\tlet b = (x ^ 2) + (20.6 ^ 2);\n\t\tlet c = (x ^ 2) + (158.5 ^ 2);\n\t\tlet d = (x ^ 2) + (12194 ^ 2);\n\t\ta / (b * c.sqrt * d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SignalProcessing",
  "recurrenceFilter",
  ["c", "x", "y0"],
  sl.annotateFunction(function (_c, _x, _y0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _c, _x, _y0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_c, 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2([_size_1(_a), _size_1(_b)], 2);
    let _n = _at_2(__SplVar2, 1);
    let _m = _at_2(__SplVar2, 2);
    let _y = _List_2(_size_1(_x), 0);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_x),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _sum_1(
          _collect_2(
            _to_2(0, _hyphenMinus_2(_m, 1)),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _at_2(_b, _plusSign_2(_j, 1)),
                _atIfAbsent_3(
                  _x,
                  _hyphenMinus_2(_i, _j),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return 0;
                  }, []),
                ),
              );
            }, ["j"]),
          ),
        );
        let _q = _sum_1(
          _collect_2(
            _to_2(0, _hyphenMinus_2(_n, 1)),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _at_2(_a, _plusSign_2(_j, 1)),
                _atIfAbsent_3(
                  _y,
                  _hyphenMinus_2(_i, _j),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _at_2(
                      _y0,
                      _hyphenMinus_2(1, _hyphenMinus_2(_i, _j)),
                    );
                  }, []),
                ),
              );
            }, ["j"]),
          ),
        );
        /* Statements */
        return _atPut_3(_y, _i, _hyphenMinus_2(_p, _q));
      }, ["i"]),
    );
    return _y;
  }, ["c", "x", "y0"]),
  "{ :c :x :y0 |\n\t\tlet [a, b] = c;\n\t\tlet [n, m] = [a.size, b.size];\n\t\tlet y = List(x.size, 0);\n\t\t1.toDo(x.size) { :i |\n\t\t\tlet p = 0.to(m - 1).collect { :j |\n\t\t\t\tb.at(j + 1) * x.atIfAbsent(i - j) { 0 }\n\t\t\t}.sum;\n\t\t\tlet q = 0.to(n - 1).collect { :j |\n\t\t\t\ta.at(j + 1) * y.atIfAbsent(i - j) { y0.at(1 - (i - j)) }\n\t\t\t}.sum;\n\t\t\ty[i] := p - q\n\t\t};\n\t\ty\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SignalProcessing",
  "recurrenceFilter",
  ["c", "x"],
  sl.annotateFunction(function (_c, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_size_1(_at_2(_c, 1)), 1);
    /* Statements */
    return _recurrenceFilter_3(_c, _x, _List_2(_k, 0));
  }, ["c", "x"]),
  "{ :c :x |\n\t\tlet k = c.at(1).size - 1;\n\t\tc.recurrenceFilter(x, List(k, 0))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SignalProcessing",
  "unwrapPhase",
  ["self", "period"],
  sl.annotateFunction(function (_self, _period) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _period";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _discontinuity = _solidus_2(_period, 2);
    let _high = _solidus_2(_period, 2);
    let _low = _hyphenMinus_2(0, _high);
    let _dd = _differences_1(_self);
    let _ph = _collect_2(
      _dd,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_abs_1(_each), _discontinuity),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _plusSign_2(
              _percentSign_2(_hyphenMinus_2(_each, _low), _period),
              _low,
            );
            /* Statements */
            return _if_3(
              _ampersand_2(
                _equalsSign_2(_a, _low),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _greaterThanSign_2(_each, 0);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(_high, _each);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(_a, _each);
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    /* Statements */
    return _plusSign_2(_self, _plusSignPlusSign_2([0], _prefixSum_1(_ph)));
  }, ["self", "period"]),
  "{ :self :period |\n\t\tlet discontinuity = period / 2;\n\t\tlet high = period / 2;\n\t\tlet low = 0 - high;\n\t\tlet dd = self.differences;\n\t\tlet ph = dd.collect { :each |\n\t\t\t(each.abs < discontinuity).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet a = ((each - low) % period) + low;\n\t\t\t\t(a = low & { each > 0 }).if {\n\t\t\t\t\thigh - each\n\t\t\t\t} {\n\t\t\t\t\ta - each\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself + ([0] ++ ph.prefixSum)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "SignalProcessing",
  "recurrenceTable",
  ["self:/2", "i", "n"],
  sl.annotateFunction(function (_self_2, _i, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _i, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _copy_1(_i);
    /* Statements */
    _toDo_3(
      _plusSign_2(_size_1(_i), 1),
      _n,
      sl.annotateFunction(function (_m) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _m";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _self_2(_r, _m);
        /* Statements */
        return _add_2(_r, _z);
      }, ["m"]),
    );
    return _r;
  }, ["self:/2", "i", "n"]),
  "{ :self:/2 :i :n |\n\t\tlet r = i.copy;\n\t\t(i.size + 1).toDo(n) { :m |\n\t\t\tlet z = self(r, m);\n\t\t\tr.add(z)\n\t\t};\n\t\tr\n\t}",
);
