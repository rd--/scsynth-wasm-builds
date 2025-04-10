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
  "{ :self :b | collect(binLists(self,b),size:/1) }",
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
  "{ :self :b1 :b2 | collect(binLists(self,b1, b2), { :each | collect(each,size:/1) }) }",
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
  "{ :self :b | let n = size(b); let c = !({ [] }, (-(n, 1))); do(self, { :e | ifTrue((&(>=(e, at(b, 1)), { <=(e, at(b, n)) })), { let i = min(binarySearchLeftmost(b,e),-(n, 1)); add(at(c, i),e) }) }); c }",
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
    let __SPL17 = _assertIsOfSize_2([_size_1(_b1), _size_1(_b2)], 2);
    let _m = _at_2(__SPL17, 1);
    let _n = _at_2(__SPL17, 2);
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
        let __SPL18 = _assertIsOfSize_2(_e, 2);
        let _e1 = _at_2(__SPL18, 1);
        let _e2 = _at_2(__SPL18, 2);
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
  "{ :self :b1 :b2 | let __SPL17 = assertIsOfSize([size(b1), size(b2)], 2); let m = at(__SPL17, 1); let n = at(__SPL17, 2); let c = !({ [] }, [-(m, 1), -(n, 1)]); do(self, { :e | let __SPL18 = assertIsOfSize(e, 2); let e1 = at(__SPL18, 1); let e2 = at(__SPL18, 2); ifTrue((&(>=(e1, at(b1, 1)), { &(<=(e1, at(b1, m)), { &(>=(e2, at(b2, 1)), { <=(e2, at(b2, n)) }) }) })), { let i = min(binarySearchLeftmost(b1,e1),-(m, 1)); let j = min(binarySearchLeftmost(b2,e2),-(n, 1)); add(at(at(c, i), j),e) }) }); c }",
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
    } /* Temporaries */
    let __SPL19 = _assertIsOfSize_2(_b, 3);
    let _start = _at_2(__SPL19, 1);
    let _stop = _at_2(__SPL19, 2);
    let _step = _at_2(__SPL19, 3);
    /* Statements */
    return _binListsFor_2(_self, _asList_1(_Range_3(_start, _stop, _step)));
  }, ["self", "b"]),
  "{ :self :b | let __SPL19 = assertIsOfSize(b, 3); let start = at(__SPL19, 1); let stop = at(__SPL19, 2); let step = at(__SPL19, 3); binListsFor(self,asList(Range(start, stop, step))) }",
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
    } /* Temporaries */
    let __SPL20 = _assertIsOfSize_2(_b1, 3);
    let _start1 = _at_2(__SPL20, 1);
    let _stop1 = _at_2(__SPL20, 2);
    let _step1 = _at_2(__SPL20, 3);
    let __SPL21 = _assertIsOfSize_2(_b2, 3);
    let _start2 = _at_2(__SPL21, 1);
    let _stop2 = _at_2(__SPL21, 2);
    let _step2 = _at_2(__SPL21, 3);
    /* Statements */
    return _binListsFor_3(
      _self,
      _asList_1(_Range_3(_start1, _stop1, _step1)),
      _asList_1(_Range_3(_start2, _stop2, _step2)),
    );
  }, ["self", "b1", "b2"]),
  "{ :self :b1 :b2 | let __SPL20 = assertIsOfSize(b1, 3); let start1 = at(__SPL20, 1); let stop1 = at(__SPL20, 2); let step1 = at(__SPL20, 3); let __SPL21 = assertIsOfSize(b2, 3); let start2 = at(__SPL21, 1); let stop2 = at(__SPL21, 2); let step2 = at(__SPL21, 3); binListsFor(self,asList(Range(start1, stop1, step1)), asList(Range(start2, stop2, step2))) }",
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
  "{ :self | let n = size(self); *(2, (/(interquartileRange(self), (^(n, (/(1, 3))))))) }",
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
  "{ :self | histogramOf(self, { :each | each }) }",
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
  "{ :self :b | [b, collect(binListsFor(self,b),size:/1)] }",
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
    let __SPL22 = _assertIsOfSize_2(_b, 3);
    let _start = _at_2(__SPL22, 1);
    let _stop = _at_2(__SPL22, 2);
    let _step = _at_2(__SPL22, 3);
    /* Statements */
    return _histogramListFor_2(
      _self,
      _asList_1(_Range_3(_start, _stop, _step)),
    );
  }, ["self", "b"]),
  "{ :self :b | let __SPL22 = assertIsOfSize(b, 3); let start = at(__SPL22, 1); let stop = at(__SPL22, 2); let step = at(__SPL22, 3); histogramListFor(self,asList(Range(start, stop, step))) }",
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
    let __SPL23 = _assertIsOfSize_2(_minMax_1(_self), 2);
    let _min = _at_2(__SPL23, 1);
    let _max = _at_2(__SPL23, 2);
    let _b = _findDivisions_2(_hyphenMinusHyphenMinus_2(_min, _max), _k);
    /* Statements */
    return _histogramListFor_2(_self, _asList_1(_b));
  }, ["self"]),
  "{ :self | let k = +(ceiling(sqrt(size(self))), 1); let __SPL23 = assertIsOfSize(minMax(self), 2); let min = at(__SPL23, 1); let max = at(__SPL23, 2); let b = findDivisions((--(min, max)),k); histogramListFor(self,asList(b)) }",
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
  "{ :self | let n = size(self); *(standardDeviation(self), cubeRoot((/((*(24, sqrt(pi(1)))), n)))) }",
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
  "{ :self | let n = size(self); +(floor(log(n,2)), 1) }",
);
