sl.addType(
  false,
  "ChordDiagram",
  "ChordDiagram",
  ["Object"],
  ["lengthVector"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ChordDiagram",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "asGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Graph_2(_vertexList_1(_self), _edgeList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tGraph(\n\t\t\tself.vertexList,\n\t\t\tself.edgeList\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "chordDiagramPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circularGraphPlot_2(
      _asGraph_1(_self),
      _Record_1([["drawCircle", true]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.asGraph.circularGraphPlot (\n\t\t\tdrawCircle: true\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _asterisk_2(_size_1(_self), 2);
    let _l = _lengthVector_1(_self);
    /* Statements */
    return _sort_1(
      _nub_1(
        _collect_2(
          _to_2(0, _hyphenMinus_2(_m, 1)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _j = _percentSign_2(
              _plusSign_2(_i, _at_2(_l, _plusSign_2(_i, 1))),
              _m,
            );
            /* Statements */
            return _plusSign_2(_sort_1([_i, _j]), 1);
          }, ["i"]),
        ),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.size * 2;\n\t\tlet l = self.lengthVector;\n\t\t0.to(m - 1).collect { :i |\n\t\t\tlet j = (i + l[i + 1]) % m;\n\t\t\t[i, j].sort + 1\n\t\t}.nub.sort\n\t}",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_size_1(_lengthVector_1(_self)), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.lengthVector.size / 2\n\t}",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "ChordDiagram",
  "ChordDiagram",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_nonemptyRange_3(1, _asterisk_2(_size_1(_self), 2), 1));
  }, ["self"]),
  "{ :self |\n\t\t[1 .. self.size * 2]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ChordDiagram",
  "chordDiagramPlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _chordDiagramPlot_1(_ChordDiagram_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tChordDiagram(self).chordDiagramPlot\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ChordDiagram",
  "edgeListToChordDiagram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar1, 1);
    let __SplUnused3 = _at_2(__SplVar1, 2);
    let _v = _List_2(_asterisk_2(_m, 2), 0);
    /* Statements */
    _toDo_3(
      1,
      _m,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_at_2(_self, _each), 2);
        let _i = _at_2(__SplVar2, 1);
        let _j = _at_2(__SplVar2, 2);
        /* Statements */
        _atPut_3(_v, _i, _hyphenMinus_2(_j, _i));
        return _atPut_3(
          _v,
          _j,
          _hyphenMinus_2(_asterisk_2(_m, 2), _hyphenMinus_2(_j, _i)),
        );
      }, ["each"]),
    );
    return _lengthVectorToChordDiagram_1(_v);
  }, ["self"]),
  "{ :self |\n\t\tlet [m, _] = self.shape;\n\t\tlet v = List(m * 2, 0);\n\t\t1.toDo(m) { :each |\n\t\t\tlet [i, j] = self[each];\n\t\t\tv[i] := j - i;\n\t\t\tv[j] := (m * 2) - (j - i)\n\t\t};\n\t\tlengthVectorToChordDiagram(v)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ChordDiagram",
  "lengthVectorToChordDiagram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newChordDiagram_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewChordDiagram().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ChordDiagram",
  "ChordDiagram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lengthVectorToChordDiagram_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _edgeListToChordDiagram_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.lengthVectorToChordDiagram\n\t\t} {\n\t\t\tself.edgeListToChordDiagram\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ChordDiagram",
  "chordDiagramCount",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _alpha_2 = sl.annotateFunction(function (_p, _q) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _p, _q";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _isEven_1(_q),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _sum_2(
                _to_2(0, _solidus_2(_p, 2)),
                sl.annotateFunction(function (_k) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _k";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _asterisk_2(
                    _asterisk_2(
                      _binomial_2(_p, _asterisk_2(2, _k)),
                      _circumflexAccent_2(_q, _k),
                    ),
                    _doubleFactorial_1(_hyphenMinus_2(_asterisk_2(2, _k), 1)),
                  );
                }, ["k"]),
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _circumflexAccent_2(_q, _solidus_2(_p, 2)),
                _doubleFactorial_1(_hyphenMinus_2(_p, 1)),
              );
            }, []),
          );
        }, ["p", "q"]);
        /* Statements */
        return _solidus_2(
          _sum_2(
            _divisors_1(_asterisk_2(2, _n)),
            sl.annotateFunction(function (_p) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _p";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _q = _solidus_2(_asterisk_2(2, _n), _p);
              /* Statements */
              return _asterisk_2(_alpha_2(_p, _q), _eulerPhi_1(_q));
            }, ["p"]),
          ),
          _asterisk_2(2, _n),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n = 0).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet alpha = { :p :q |\n\t\t\t\tq.isEven.if {\n\t\t\t\t\t0.to(p / 2).sum { :k |\n\t\t\t\t\t\tbinomial(p, 2 * k)\n\t\t\t\t\t\t*\n\t\t\t\t\t\t(q ^ k)\n\t\t\t\t\t\t*\n\t\t\t\t\t\t((2 * k) - 1).doubleFactorial\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t(q ^ (p / 2))\n\t\t\t\t\t*\n\t\t\t\t\t(p - 1).doubleFactorial\n\t\t\t\t}\n\t\t\t};\n\t\t\t(2 * n).divisors.sum { :p |\n\t\t\t\tlet q = (2 * n) / p;\n\t\t\t\talpha(p, q) * eulerPhi(q)\n\t\t\t} / (2 * n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ChordDiagram",
  "chordDiagramsDo",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _asterisk_2(2, _n);
    let _l = _List_2(_plusSign_2(_m, 1), 0);
    let _a = _ListView_4(_l, 1, _plusSign_2(_m, 1), 0);
    let _simpleChords_2 = sl.annotateFunction(function (_t, _p) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _t, _p";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_t, _m),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_percentSign_2(_m, _p), 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _f_1(_ChordDiagram_1(_allButFirst_1(_l)));
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
            _ampersand_2(
              _equalsSign_2(_at_2(_a, _t), 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(
                  _plusSign_2(_t, _at_2(_a, _hyphenMinus_2(_t, _p))),
                  _m,
                );
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _toDo_3(
                _at_2(_a, _hyphenMinus_2(_t, _p)),
                _hyphenMinus_2(_m, _t),
                sl.annotateFunction(function (_j) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _j";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ifTrue_2(
                    _equalsSign_2(_at_2(_a, _plusSign_2(_t, _j)), 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _atPut_3(_a, _t, _j);
                      _atPut_3(_a, _plusSign_2(_t, _j), _hyphenMinus_2(_m, _j));
                      _if_3(
                        _equalsSign_2(
                          _at_2(_a, _t),
                          _at_2(_a, _hyphenMinus_2(_t, _p)),
                        ),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _simpleChords_2(_plusSign_2(_t, 1), _p);
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _simpleChords_2(_plusSign_2(_t, 1), _t);
                        }, []),
                      );
                      return _atPut_3(_a, _plusSign_2(_t, _j), 0);
                    }, []),
                  );
                }, ["j"]),
              );
              return _atPut_3(_a, _t, 0);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _equalsSign_2(_at_2(_a, _t), _at_2(_a, _hyphenMinus_2(_t, _p))),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _simpleChords_2(_plusSign_2(_t, 1), _p);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ifTrue_2(
                    _greaterThanSign_2(
                      _at_2(_a, _t),
                      _at_2(_a, _hyphenMinus_2(_t, _p)),
                    ),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _simpleChords_2(_plusSign_2(_t, 1), _t);
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["t", "p"]);
    /* Statements */
    _atPut_3(_a, 1, 0);
    return _simpleChords_2(1, 1);
  }, ["n", "f:/1"]),
  "{ :n :f:/1 |\n\t\tlet m = 2 * n;\n\t\tlet l = List(m + 1, 0);\n\t\tlet a = ListView(l, 1, m + 1, 0);\n\t\tlet simpleChords = { :t :p |\n\t\t\t(t > m).if {\n\t\t\t\t(m % p = 0).ifTrue {\n\t\t\t\t\tf(ChordDiagram(l.allButFirst))\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(a[t] = 0 & { (t + a[t - p]) <= m }).if {\n\t\t\t\t\ta[t - p].toDo(m - t) { :j |\n\t\t\t\t\t\t(a[t + j] = 0).ifTrue {\n\t\t\t\t\t\t\ta[t] := j;\n\t\t\t\t\t\t\ta[t + j] := m - j;\n\t\t\t\t\t\t\t(a[t] = a[t - p]).if {\n\t\t\t\t\t\t\t\tsimpleChords(t + 1, p)\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tsimpleChords(t + 1, t)\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\ta[t + j] := 0\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\ta[t] := 0\n\t\t\t\t} {\n\t\t\t\t\t(a[t] = a[t - p]).if {\n\t\t\t\t\t\tsimpleChords(t + 1, p)\n\t\t\t\t\t} {\n\t\t\t\t\t\t(a[t] > a[t - p]).ifTrue {\n\t\t\t\t\t\t\tsimpleChords(t + 1, t)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\ta[1] := 0;\n\t\tsimpleChords(1, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ChordDiagram",
  "chordDiagrams",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _chordDiagramsDo_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tn.chordDiagramsDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);
