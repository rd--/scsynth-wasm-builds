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
    let __SPL1 = _assertIsOfSize_2(_c, 2);
    let _a = _at_2(__SPL1, 1);
    let _b = _at_2(__SPL1, 2);
    let __SPL2 = _assertIsOfSize_2([_size_1(_a), _size_1(_b)], 2);
    let _n = _at_2(__SPL2, 1);
    let _m = _at_2(__SPL2, 2);
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
            _upOrDownTo_2(0, _hyphenMinus_2(_m, 1)),
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
            _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
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
  "{ :c :x :y0 | let __SPL1 = assertIsOfSize(c, 2); let a = at(__SPL1, 1); let b = at(__SPL1, 2); let __SPL2 = assertIsOfSize([size(a), size(b)], 2); let n = at(__SPL2, 1); let m = at(__SPL2, 2); let y = List(size(x), 0); toDo(1, size(x), { :i | let p = sum(collect(upOrDownTo(0, -(m, 1)), { :j | *(at(b,+(j, 1)), atIfAbsent(x, -(i, j), { 0 })) })); let q = sum(collect(upOrDownTo(0, -(n, 1)), { :j | *(at(a,+(j, 1)), atIfAbsent(y, -(i, j), { at(y0,-(1, (-(i, j)))) })) })); atPut(y, i, -(p, q)) }); y }",
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
    return _recurrenceFilter_3(_c, _x, _numberSign_2(0, _k));
  }, ["c", "x"]),
  "{ :c :x | let k = -(size(at(c,1)), 1); recurrenceFilter(c,x, #(0, k)) }",
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
  "{ :self :period | let discontinuity = /(period, 2); let high = /(period, 2); let low = -(0, high); let dd = differences(self); let ph = collect(dd, { :each | if((<(abs(each), discontinuity)), { 0 }, { let a = +((%((-(each, low)), period)), low); if((&(=(a, low), { >(each, 0) })), { -(high, each) }, { -(a, each) }) }) }); +(self, (++([0], prefixSum(ph)))) }",
);
