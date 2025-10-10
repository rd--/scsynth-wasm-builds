sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binCounts",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_binLists_2(_self, _b), _size_1);
  }, ["self", "b"]),
  "{ :self :b |\n\t\tself.binLists(b).collect(size:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binCounts",
  ["self", "b1", "b2"],
  sl.annotateFunction(function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _binLists_3(_self, _b1, _b2),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_each, _size_1);
      }, ["each"]),
    );
  }, ["self", "b1", "b2"]),
  "{ :self :b1 :b2 |\n\t\tself.binLists(b1, b2).collect { :each |\n\t\t\teach.collect(size:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binListsFor",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_b);
    let _c = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      _hyphenMinus_2(_n, 1),
    );
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_e) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _e";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _ampersand_2(
            _greaterThanSignEqualsSign_2(_e, _at_2(_b, 1)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_e, _at_2(_b, _n));
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _min_2(
              _binarySearchLeftmost_2(_b, _e),
              _hyphenMinus_2(_n, 1),
            );
            /* Statements */
            return _add_2(_at_2(_c, _i), _e);
          }, []),
        );
      }, ["e"]),
    );
    return _c;
  }, ["self", "b"]),
  "{ :self :b |\n\t\tlet n = b.size;\n\t\tlet c = { [] } ! (n - 1);\n\t\tself.do { :e |\n\t\t\t(e >= b[1] & { e <= b[n] }).ifTrue {\n\t\t\t\tlet i = b.binarySearchLeftmost(e).min(n - 1);\n\t\t\t\tc[i].add(e)\n\t\t\t}\n\t\t};\n\t\tc\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binListsFor",
  ["self", "b1", "b2"],
  sl.annotateFunction(function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2([_size_1(_b1), _size_1(_b2)], 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    let _c = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      [_hyphenMinus_2(_m, 1), _hyphenMinus_2(_n, 1)],
    );
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_e) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _e";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_e, 2);
        let _e1 = _at_2(__SplVar2, 1);
        let _e2 = _at_2(__SplVar2, 2);
        /* Statements */
        return _ifTrue_2(
          _ampersand_2(
            _greaterThanSignEqualsSign_2(_e1, _at_2(_b1, 1)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _lessThanSignEqualsSign_2(_e1, _at_2(_b1, _m)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _greaterThanSignEqualsSign_2(_e2, _at_2(_b2, 1)),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _lessThanSignEqualsSign_2(_e2, _at_2(_b2, _n));
                    }, []),
                  );
                }, []),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _min_2(
              _binarySearchLeftmost_2(_b1, _e1),
              _hyphenMinus_2(_m, 1),
            );
            let _j = _min_2(
              _binarySearchLeftmost_2(_b2, _e2),
              _hyphenMinus_2(_n, 1),
            );
            /* Statements */
            return _add_2(_at_2(_at_2(_c, _i), _j), _e);
          }, []),
        );
      }, ["e"]),
    );
    return _c;
  }, ["self", "b1", "b2"]),
  "{ :self :b1 :b2 |\n\t\tlet [m, n] = [b1.size, b2.size];\n\t\tlet c = { [] } ! [m - 1, n - 1];\n\t\tself.do { :e |\n\t\t\tlet [e1, e2] = e;\n\t\t\t(\n\t\t\t\te1 >= b1[1] & {\n\t\t\t\t\te1 <= b1[m] & {\n\t\t\t\t\t\te2 >= b2[1] & {\n\t\t\t\t\t\t\te2 <= b2[n]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tlet i = b1.binarySearchLeftmost(e1).min(m - 1);\n\t\t\t\tlet j = b2.binarySearchLeftmost(e2).min(n - 1);\n\t\t\t\tc[i][j].add(e)\n\t\t\t}\n\t\t};\n\t\tc\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binLists",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _binListsFor_2(_self, _asList_1(_Range_1(_b)));
  }, ["self", "b"]),
  "{ :self :b |\n\t\tself.binListsFor(\n\t\t\tRange(b).asList\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "binLists",
  ["self", "b1", "b2"],
  sl.annotateFunction(function (_self, _b1, _b2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _b1, _b2";
      throw new Error(errorMessage);
    } /* Statements */
    return _binListsFor_3(
      _self,
      _asList_1(_Range_1(_b1)),
      _asList_1(_Range_1(_b2)),
    );
  }, ["self", "b1", "b2"]),
  "{ :self :b1 :b2 |\n\t\tself.binListsFor(\n\t\t\tRange(b1).asList,\n\t\t\tRange(b2).asList\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "freedmanDiaconisRule",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _asterisk_2(
      2,
      _solidus_2(
        _interquartileRange_1(_self),
        _circumflexAccent_2(_n, _solidus_2(1, 3)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\t2 * (self.interquartileRange / (n ^ (1 / 3)))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "histogramOf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _histogramOf_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _each;
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.histogramOf { :each |\n\t\t\teach\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "histogramListFor",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return [_b, _collect_2(_binListsFor_2(_self, _b), _size_1)];
  }, ["self", "b"]),
  "{ :self :b |\n\t\t[b, self.binListsFor(b).collect(size:/1)]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "histogramList",
  ["self", "b"],
  sl.annotateFunction(function (_self, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_b, 3);
    let _start = _at_2(__SplVar3, 1);
    let _stop = _at_2(__SplVar3, 2);
    let _step = _at_2(__SplVar3, 3);
    /* Statements */
    return _histogramListFor_2(
      _self,
      _asList_1(_Range_3(_start, _stop, _step)),
    );
  }, ["self", "b"]),
  "{ :self :b |\n\t\tlet [start, stop, step] = b;\n\t\tself.histogramListFor(\n\t\t\tRange(start, stop, step).asList\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "histogramList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _plusSign_2(_ceiling_1(_sqrt_1(_size_1(_self))), 1);
    let __SplVar4 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _min = _at_2(__SplVar4, 1);
    let _max = _at_2(__SplVar4, 2);
    let _b = _findDivisions_2(_hyphenMinusHyphenMinus_2(_min, _max), _k);
    /* Statements */
    return _histogramListFor_2(_self, _asList_1(_b));
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size.sqrt.ceiling + 1;\n\t\tlet [min, max] = self.minMax;\n\t\tlet b = (min -- max).findDivisions(k);\n\t\tself.histogramListFor(b.asList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "scottsRule",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _asterisk_2(
      _standardDeviation_1(_self),
      _cubeRoot_1(_solidus_2(_asterisk_2(24, _sqrt_1(_pi_1(1))), _n)),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tself.standardDeviation * ((24 * 1.pi.sqrt) / n).cubeRoot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Histogram",
  "sturgesRule",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _plusSign_2(_floor_1(_log_2(_n, 2)), 1);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tn.log(2).floor + 1\n\t}",
);
