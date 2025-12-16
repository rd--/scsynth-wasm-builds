sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LowDiscrepancySequence",
  "sobolSequenceData",
  ["d"],
  sl.annotateFunction(function (_d) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_sobolSequenceData_1(_system), _hyphenMinus_2(_d, 1));
  }, ["d"]),
  "{ :d |\n\t\tsystem.sobolSequenceData.at(d - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "LowDiscrepancySequence",
  "sobolSequence",
  ["n", "d"],
  sl.annotateFunction(function (_n, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _bitLength_1(_n);
    let _v = _List_1(_l);
    let _x = _List_2(_n, 0);
    /* Statements */
    _if_3(
      _equalsSign_2(_d, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _l,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _v,
              _i,
              _lessThanSignLessThanSign_2(1n, _hyphenMinus_2(32, _i)),
            );
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_sobolSequenceData_1(_d), 4);
        let __SplUnused3 = _at_2(__SplVar1, 1);
        let _s = _at_2(__SplVar1, 2);
        let _a = _at_2(__SplVar1, 3);
        let _m = _at_2(__SplVar1, 4);
        /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_l, _s),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _l,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _v,
                  _i,
                  _lessThanSignLessThanSign_2(
                    _at_2(_m, _i),
                    _hyphenMinus_2(32n, _i),
                  ),
                );
              }, ["i"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _collect_2(
              _rangeOrRelativeRange_3(1, _s, 1),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _v,
                  _i,
                  _lessThanSignLessThanSign_2(
                    _at_2(_m, _i),
                    _hyphenMinus_2(32n, _i),
                  ),
                );
              }, ["i"]),
            );
            return _toDo_3(
              _plusSign_2(_s, 1),
              _l,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(
                  _v,
                  _i,
                  _bitXor_2(
                    _at_2(_v, _hyphenMinus_2(_i, _s)),
                    _greaterThanSignGreaterThanSign_2(
                      _at_2(_v, _hyphenMinus_2(_i, _s)),
                      _s,
                    ),
                  ),
                );
                _toDo_3(
                  1,
                  _hyphenMinus_2(2, 1),
                  sl.annotateFunction(function (_k) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _k";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _atPut_3(
                      _v,
                      _i,
                      _bitXor_2(
                        _at_2(_v, _i),
                        _asterisk_2(
                          _bitAnd_2(
                            _greaterThanSignGreaterThanSign_2(
                              _a,
                              _hyphenMinus_2(_hyphenMinus_2(_s, 1), _k),
                            ),
                            1,
                          ),
                          _at_2(_v, _hyphenMinus_2(_i, _k)),
                        ),
                      ),
                    );
                  }, ["k"]),
                );
                return _v;
              }, ["i"]),
            );
          }, []),
        );
      }, []),
    );
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _rulerFunction_1(_hyphenMinus_2(_i, 1));
        /* Statements */
        return _atPut_3(
          _x,
          _i,
          _bitXor_2(_at_2(_x, _hyphenMinus_2(_i, 1)), _at_2(_v, _j)),
        );
      }, ["i"]),
    );
    return (_solidus_2(_x, _circumflexAccent_2(2, 32)));
  }, ["n", "d"]),
  "{ :n :d |\n\t\tlet l = n.bitLength;\n\t\tlet v = List(l);\n\t\tlet x = List(n, 0);\n\t\t(d = 1).if {\n\t\t\t1.toDo(l) { :i |\n\t\t\t\tv[i] := 1L << (32 - i)\n\t\t\t}\n\t\t} {\n\t\t\tlet [_, s, a, m] = d.sobolSequenceData;\n\t\t\t(l <= s).if {\n\t\t\t\t1.toDo(l) { :i |\n\t\t\t\t\tv[i] := m[i] << (32L - i)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t1:s.collect { :i |\n\t\t\t\t\tv[i] := m[i] << (32L - i)\n\t\t\t\t};\n\t\t\t\t(s + 1).toDo(l) { :i |\n\t\t\t\t\tv[i] := v[i - s].bitXor(v[i - s] >> s);\n\t\t\t\t\t1.toDo(2 - 1) { :k |\n\t\t\t\t\t\tv[i] := v[i].bitXor((a >> (s - 1 - k)).bitAnd(1) * v[i - k])\n\t\t\t\t\t};\n\t\t\t\t\tv\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t2.toDo(n) { :i |\n\t\t\tlet j = (i - 1).rulerFunction;\n\t\t\tx[i] := x[i - 1].bitXor(v[j])\n\t\t};\n\t\t(x / (2 ^ 32))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LowDiscrepancySequence",
  "sobolSequence",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_shape, 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _transpose_1(
      _collect_2(
        _rangeOrRelativeRange_3(1, _n, 1),
        sl.annotateFunction(function (_d) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _d";
            throw new Error(errorMessage);
          } /* Statements */
          return _sobolSequence_2(_m, _d);
        }, ["d"]),
      ),
    );
  }, ["shape"]),
  "{ :shape |\n\t\tlet [m, n] = shape;\n\t\t1:n.collect { :d |\n\t\t\tsobolSequence(m, d)\n\t\t}.transpose\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "LowDiscrepancySequence",
  "sobolSequenceData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SobolSequenceData");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('SobolSequenceData')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SobolSequenceData"],
      ["category", "Sequence/LowDiscrepancy"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/sobol/kuo.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
