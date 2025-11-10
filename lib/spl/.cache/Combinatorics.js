sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "bellNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Integer>>bellNumber: n < 0");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, 2),
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
            let _list = _List_1(_self);
            /* Statements */
            _atPut_3(_list, 1, 1);
            _toDo_3(
              2,
              _self,
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                _toDo_3(
                  1,
                  _hyphenMinus_2(_i, 2),
                  sl.annotateFunction(function (_j) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _j";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _k = _hyphenMinus_2(_hyphenMinus_2(_i, _j), 1);
                    /* Statements */
                    return _atPut_3(
                      _list,
                      _k,
                      _plusSign_2(
                        _at_2(_list, _k),
                        _at_2(_list, _hyphenMinus_2(_i, _j)),
                      ),
                    );
                  }, ["j"]),
                );
                return _atPut_3(
                  _list,
                  _i,
                  _plusSign_2(
                    _at_2(_list, 1),
                    _at_2(_list, _hyphenMinus_2(_i, 1)),
                  ),
                );
              }, ["i"]),
            );
            return _at_2(_list, _self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.error('@Integer>>bellNumber: n < 0')\n\t\t} {\n\t\t\t(self < 2).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\tlet list = List(self);\n\t\t\t\tlist[1] := 1;\n\t\t\t\t2.toDo(self) { :i |\n\t\t\t\t\t1.toDo(i - 2) { :j |\n\t\t\t\t\t\tlet k = i - j - 1;\n\t\t\t\t\t\tlist[k] := list[k] + list[i - j]\n\t\t\t\t\t};\n\t\t\t\t\tlist[i] := list[1] + list[i - 1]\n\t\t\t\t};\n\t\t\t\tlist[self]\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "bellStringsDo",
  ["n", "receive:/1"],
  sl.annotateFunction(function (_n, _receive_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _receive_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _word = _List_2(_n, 0);
    let _focus = _asList_1(_nonemptyRange_3(1, _plusSign_2(_n, 1), 1));
    let _start = _List_2(_n, 0);
    let _maxima = [];
    let _first = _List_2(_n, true);
    /* Statements */
    _receive_1(_word);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_at_2(_focus, 1), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _at_2(_focus, 1);
        /* Statements */
        _atPut_3(_focus, 1, 1);
        _if_3(
          _equalsSign_2(_at_2(_word, _index), _at_2(_start, _index)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = 0;
            /* Statements */
            _if_3(
              _at_2(_first, _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_first, _index, false);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _isEmpty_1(_maxima),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _m = 1;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _m = _at_2(_word, _at_2(_maxima, 1));
                  }, []),
                );
              }, []),
            );
            _atPut_3(_word, _index, _plusSign_2(_m, 1));
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_plusSign_2(_m, 1), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addFirst_2(_maxima, _index);
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
                _equalsSign_2(_at_2(_word, _index), 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_at_2(_start, _index), 1);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(
                  _word,
                  _index,
                  _hyphenMinus_2(_at_2(_word, _index), 2),
                );
                return _ifTrue_2(
                  _equalsSign_2(_at_2(_maxima, 1), _index),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _removeFirst_1(_maxima);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(
                  _word,
                  _index,
                  _hyphenMinus_2(_at_2(_word, _index), 1),
                );
                return _ifTrue_2(
                  _equalsSign_2(_at_2(_maxima, 1), _index),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _removeFirst_1(_maxima);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
        _receive_1(_word);
        return _ifTrue_2(
          _equalsSign_2(
            _plusSign_2(_at_2(_word, _index), _at_2(_start, _index)),
            1,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_focus, _index, _at_2(_focus, _plusSign_2(_index, 1)));
            _atPut_3(_focus, _plusSign_2(_index, 1), _plusSign_2(_index, 1));
            return _atPut_3(_start, _index, _at_2(_word, _index));
          }, []),
        );
      }, []),
    );
    return null;
  }, ["n", "receive:/1"]),
  "{ :n :receive:/1 |\n\t\tlet word = List(n, 0);\n\t\tlet focus = [1 .. n + 1];\n\t\tlet start = List(n, 0);\n\t\tlet maxima = [];\n\t\tlet first = List(n, true);\n\t\treceive(word);\n\t\t{ focus[1] < n }.whileTrue {\n\t\t\tlet index = focus[1];\n\t\t\tfocus[1] := 1;\n\t\t\t(word[index] = start[index]).if {\n\t\t\t\tlet m = 0;\n\t\t\t\tfirst[index].if {\n\t\t\t\t\tfirst[index] := false\n\t\t\t\t} {\n\t\t\t\t\tmaxima.isEmpty.if {\n\t\t\t\t\t\tm := 1\n\t\t\t\t\t} {\n\t\t\t\t\t\tm := word[maxima[1]]\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tword[index] := m + 1;\n\t\t\t\t(m + 1 != 1).ifTrue {\n\t\t\t\t\tmaxima.addFirst(index)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(word[index] = 2 & { start[index] = 1 }).if {\n\t\t\t\t\tword[index] := word[index] - 2;\n\t\t\t\t\t(maxima[1] = index).ifTrue {\n\t\t\t\t\t\tmaxima.removeFirst\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tword[index] := word[index] - 1;\n\t\t\t\t\t(maxima[1] = index).ifTrue {\n\t\t\t\t\t\tmaxima.removeFirst\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\treceive(word);\n\t\t\t((word[index] + start[index]) = 1).ifTrue {\n\t\t\t\tfocus[index] := focus[index + 1];\n\t\t\t\tfocus[index + 1] := index + 1;\n\t\t\t\tstart[index] := word[index]\n\t\t\t}\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "bellStrings",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _bellStringsDo_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tbellStringsDo(n) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "braceletCount",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t1 = 0;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_percentSign_2(_n, _d), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _t1 = _plusSign_2(
              _t1,
              _asterisk_2(
                _eulerPhi_1(_d),
                _circumflexAccent_2(_k, _solidus_2(_n, _d)),
              ),
            );
          }, []),
        );
      }, ["d"]),
    );
    return _if_3(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(
            _t1,
            _asterisk_2(
              _asterisk_2(_solidus_2(_n, 2), _plusSign_2(1, _k)),
              _circumflexAccent_2(_k, _solidus_2(_n, 2)),
            ),
          ),
          _asterisk_2(2, _n),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(
            _t1,
            _asterisk_2(
              _n,
              _circumflexAccent_2(_k, _solidus_2(_plusSign_2(_n, 1), 2)),
            ),
          ),
          _asterisk_2(2, _n),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet t1 = 0;\n\t\t1.toDo(n) { :d |\n\t\t\t((n % d) = 0).ifTrue {\n\t\t\t\tt1 := t1 + (d.eulerPhi * (k ^ (n / d)))\n\t\t\t}\n\t\t};\n\t\tn.isEven.if {\n\t\t\t(t1 + ((n / 2) * (1 + k) * (k ^ (n / 2)))) / (2 * n)\n\t\t} {\n\t\t\t(t1 + (n * (k ^ ((n + 1) / 2)))) / (2 * n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "braceletsDo",
  ["n", "k", "receive:/1"],
  sl.annotateFunction(function (_n, _k, _receive_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _receive_1";
      throw new Error(errorMessage);
    } /* Primitive */
    let n = _n;
    let k = _k;
    let a = [];
    let i = -1;
    function checkRev(t, i) {
      while (++i < (t + 1) / 2 + 1) {
        if (a[i] < a[t - i + 1]) {
          return 0;
        }
        if (a[i] > a[t - i + 1]) {
          return -1;
        }
      }
      return 1;
    }
    function genBracelets(t, p, r, u, v, rs) {
      if (t - 1 > (n - r) / 2 + r) {
        if (a[t - 1] > a[n - t + 2 + r]) {
          rs = false;
        } else if (a[t - 1] < a[n - t + 2 + r]) {
          rs = true;
        }
      }
      if (t > n) {
        if (!rs && n % p === 0) {
          _receive_1(a.slice(1));
        }
      } else {
        a[t] = a[t - p];
        v = a[t] === a[1] ? v + 1 : 0;
        if (u === -1 && a[t - 1] !== a[1]) {
          u = r = t - 2;
        }
        if (u === -1 || t !== n || a[n] !== a[1]) {
          if (u === v) {
            let rev = checkRev(t, u);
            if (rev !== -1) {
              genBracelets(t + 1, p, rev ? t : r, u, v, rev ? false : rs);
            }
          } else {
            genBracelets(t + 1, p, r, u, v, rs);
          }
        }
        for (let j = a[t - p] + 1; j < k; j++) {
          a[t] = j;
          if (t === 1) {
            /* Errata: https://www.socs.uoguelph.ca/~sawada/pub.html */
            genBracelets(t + 1, t, 1, 1, 1, rs);
          }
          {
            genBracelets(t + 1, t, r, u, 0, rs);
          }
        }
      }
    }
    while (++i < n) {
      a[i] = 0;
    }
    return genBracelets(1, 1, 1, -1, 0, false);
  }, ["n", "k", "receive:/1"]),
  "{ :n :k :receive:/1 |\n\t\t/* https://www.jasondavies.com/necklaces/necklaces.js */\n\t\t<primitive:\n\t\tlet n = _n;\n\t\tlet k = _k;\n\t\tlet a = [];\n\t\tlet i = -1;\n\t\tfunction checkRev(t, i) {\n\t\t\twhile (++i < (t + 1) / 2 + 1) {\n\t\t\t\tif (a[i] < a[t - i + 1]) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\t\t\t\tif (a[i] > a[t - i + 1]) {\n\t\t\t\t\treturn -1;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn 1;\n\t\t}\n\t\tfunction genBracelets(t, p, r, u, v, rs) {\n\t\t\tif (t - 1 > (n - r) / 2 + r) {\n\t\t\t\tif (a[t - 1] > a[n - t + 2 + r]) {\n\t\t\t\t\trs = false;\n\t\t\t\t} else if (a[t - 1] < a[n - t + 2 + r]) {\n\t\t\t\t\trs = true;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (t > n) {\n\t\t\t\tif (!rs && n % p === 0) {\n\t\t\t\t\t_receive_1(a.slice(1));\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\ta[t] = a[t - p];\n\t\t\t\tv = a[t] === a[1] ? v + 1 : 0;\n\t\t\t\tif (u === -1 && a[t - 1] !== a[1]) {\n\t\t\t\t\tu = r = t - 2;\n\t\t\t\t}\n\t\t\t\tif (u === -1 || t !== n || a[n] !== a[1]) {\n\t\t\t\t\tif (u === v) {\n\t\t\t\t\t\tlet rev = checkRev(t, u);\n\t\t\t\t\t\tif (rev !== -1) {\n\t\t\t\t\t\t\tgenBracelets(t + 1, p, rev ? t : r, u, v, rev ? false : rs);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tgenBracelets(t + 1, p, r, u, v, rs);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (let j = a[t - p] + 1; j < k; j++) {\n\t\t\t\t\ta[t] = j;\n\t\t\t\t\tif (t === 1) {\n\t\t\t\t\t\t/* Errata: https://www.socs.uoguelph.ca/~sawada/pub.html */\n\t\t\t\t\t\tgenBracelets(t + 1, t, 1, 1, 1, rs);\n\t\t\t\t\t} {\n\t\t\t\t\t\tgenBracelets(t + 1, t , r, u, 0, rs);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\twhile (++i < n) {\n\t\t\ta[i] = 0;\n\t\t}\n\t\treturn genBracelets(1, 1, 1, -1, 0, false);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "bracelets",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _braceletsDo_3(
      _n,
      _k,
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
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\tbraceletsDo(n, k) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "catalanStringsDo",
  ["n", "k", "receive:/1"],
  sl.annotateFunction(function (_n, _k, _receive_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _receive_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _word = _List_2(_n, 0);
    let _focus = _asList_1(_nonemptyRange_3(1, _plusSign_2(_n, 1), 1));
    let _start = _List_2(_n, 0);
    /* Statements */
    _receive_1(_word);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_at_2(_focus, 1), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _at_2(_focus, 1);
        /* Statements */
        _atPut_3(_focus, 1, 1);
        _if_3(
          _equalsSign_2(_at_2(_word, _index), _at_2(_start, _index)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _ampersand_2(
                _equalsSign_2(_at_2(_word, _index), 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _equalsSign_2(_at_2(_word, _plusSign_2(_index, 1)), 0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _equalsSign_2(_k, 2);
                    }, []),
                  );
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_word, _index, 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _word,
                  _index,
                  _hyphenMinus_2(
                    _plusSign_2(_at_2(_word, _plusSign_2(_index, 1)), _k),
                    1,
                  ),
                );
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
                _equalsSign_2(_at_2(_word, _index), 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_at_2(_start, _index), 1);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _word,
                  _index,
                  _hyphenMinus_2(_at_2(_word, _index), 2),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _word,
                  _index,
                  _hyphenMinus_2(_at_2(_word, _index), 1),
                );
              }, []),
            );
          }, []),
        );
        _receive_1(_word);
        return _ifTrue_2(
          _equalsSign_2(
            _plusSign_2(_at_2(_word, _index), _at_2(_start, _index)),
            1,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_focus, _index, _at_2(_focus, _plusSign_2(_index, 1)));
            _atPut_3(_focus, _plusSign_2(_index, 1), _plusSign_2(_index, 1));
            return _atPut_3(_start, _index, _at_2(_word, _index));
          }, []),
        );
      }, []),
    );
    return null;
  }, ["n", "k", "receive:/1"]),
  "{ :n :k :receive:/1 |\n\t\tlet word = List(n, 0);\n\t\tlet focus = [1 .. n + 1];\n\t\tlet start = List(n, 0);\n\t\treceive(word);\n\t\t{ focus[1] < n }.whileTrue {\n\t\t\tlet index = focus[1];\n\t\t\tfocus[1] := 1;\n\t\t\t(word[index] = start[index]).if {\n\t\t\t\t(word[index] = 1 & { word[index + 1] = 0 & { k = 2 } }).if {\n\t\t\t\t\tword[index] := 0\n\t\t\t\t} {\n\t\t\t\t\tword[index] := word[index + 1] + k - 1\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(word[index] = 2 & { start[index] = 1 }).if {\n\t\t\t\t\tword[index] := word[index] - 2\n\t\t\t\t} {\n\t\t\t\t\tword[index] := word[index] - 1\n\t\t\t\t}\n\t\t\t};\n\t\t\treceive(word);\n\t\t\t((word[index] + start[index]) = 1).ifTrue {\n\t\t\t\tfocus[index] := focus[index + 1];\n\t\t\t\tfocus[index + 1] := index + 1;\n\t\t\t\tstart[index] := word[index]\n\t\t\t}\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "catalanStrings",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _catalanStringsDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\tcatalanStringsDo(n, k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "eulerianNumber",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _Span_3(0, _m, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _circumflexAccent_2(-1, _i),
            _binomial_2(_plusSign_2(_n, 1), _i),
          ),
          _circumflexAccent_2(_hyphenMinus_2(_plusSign_2(_m, 1), _i), _n),
        );
      }, ["i"]),
    );
  }, ["n", "m"]),
  "{ :n :m |\n\t\t0:m.sum { :i |\n\t\t\t(-1 ^ i)\n\t\t\t*\n\t\t\tbinomial(n + 1, i)\n\t\t\t*\n\t\t\t((m + 1 - i) ^ n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "eulerianNumberSecondOrder",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _to_2(0, _hyphenMinus_2(_n, _m)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _circumflexAccent_2(-1, _plusSign_2(_n, _k)),
            _binomial_2(_plusSign_2(_asterisk_2(2, _n), 1), _k),
          ),
          _stirlingS1_2(
            _plusSign_2(
              _hyphenMinus_2(_hyphenMinus_2(_asterisk_2(2, _n), _m), _k),
              1,
            ),
            _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_n, _m), _k), 1),
          ),
        );
      }, ["k"]),
    );
  }, ["n", "m"]),
  "{ :n :m |\n\t\t0.to(n - m).sum { :k |\n\t\t\t(-1 ^ (n + k))\n\t\t\t*\n\t\t\tbinomial(2 * n + 1, k)\n\t\t\t*\n\t\t\tstirlingS1(2 * n - m - k + 1, n - m - k + 1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "fibonacciFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_fibonacciSequence_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fibonacciSequence.product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "hyperfactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(
          _collect_2(
            _to_2(_one, _self),
            sl.annotateFunction(function (_k) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _k";
                throw new Error(errorMessage);
              } /* Statements */
              return _circumflexAccent_2(_k, _k);
            }, ["k"]),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unimplementedCase_2(_self, "hyperfactorial");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet one = self.one;\n\t\tself.isInteger.if {\n\t\t\tone.to(self).collect { :k |\n\t\t\t\tk ^ k\n\t\t\t}.product\n\t\t} {\n\t\t\tself.unimplementedCase('hyperfactorial')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "integerDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isOdd_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _integerDoubleFactorial_1(_plusSign_2(_self, 2)),
              _plusSign_2(_self, 2),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "@integerDoubleFactorial: negative even");
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
          _lessThanSignEqualsSign_2(_self, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _max_2(_self, _one);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _self,
              _integerDoubleFactorial_1(_hyphenMinus_2(_self, 2)),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet one = self.one;\n\t\tself.isNegative.if {\n\t\t\tself.isOdd.if {\n\t\t\t\t(self + 2).integerDoubleFactorial / (self + 2)\n\t\t\t} {\n\t\t\t\tself.error('@integerDoubleFactorial: negative even')\n\t\t\t}\n\t\t} {\n\t\t\t(self <= 3).if {\n\t\t\t\tself.max(one)\n\t\t\t} {\n\t\t\t\tself * (self - 2).integerDoubleFactorial\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "integerFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _one = _one_1(_self);
    /* Statements */
    _ifTrue_2(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "integerFactorial: not valid for negative integers",
        );
      }, []),
    );
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _one),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _one;
        /* Statements */
        _toDo_3(
          1,
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _asterisk_2(_answer, _each);
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet one = self.one;\n\t\tself.isNegative.ifTrue {\n\t\t\tself.error('integerFactorial: not valid for negative integers')\n\t\t};\n\t\t(self <= one).if {\n\t\t\tone\n\t\t} {\n\t\t\tlet answer = one;\n\t\t\t1.toDo(self) { :each |\n\t\t\t\tanswer := answer * each\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "involutionNumber",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(
      _to_2(0, _solidusSolidus_2(_n, 2)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _doubleFactorial_1(_hyphenMinus_2(_asterisk_2(2, _k), 1)),
          _binomial_2(_n, _asterisk_2(2, _k)),
        );
      }, ["k"]),
    );
  }, ["n"]),
  "{ :n |\n\t\t0.to(n // 2).sum { :k |\n\t\t\t((2 * k) - 1).doubleFactorial * binomial(n, 2 * k)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "necklaceCount",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_k, 1);
        let _m = _at_2(__SplVar1, 1);
        /* Statements */
        return _solidus_2(
          _sum_2(
            _divisors_1(_n),
            sl.annotateFunction(function (_d) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _d";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _asterisk_2(
                  _eulerPhi_1(_d),
                  _stirlingS2_2(_solidus_2(_n, _d), _m),
                ),
                _factorial_1(_m),
              );
            }, ["d"]),
          ),
          _n,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_2(
          _divisors_1(_n),
          sl.annotateFunction(function (_d) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _d";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _asterisk_2(
                _eulerPhi_1(_d),
                _circumflexAccent_2(_k, _solidus_2(_n, _d)),
              ),
              _n,
            );
          }, ["d"]),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\tk.isList.if {\n\t\t\tlet [m] = k;\n\t\t\tn.divisors.sum { :d |\n\t\t\t\td.eulerPhi * stirlingS2(n / d, m) * m.factorial\n\t\t\t} / n\n\t\t} {\n\t\t\tn.divisors.sum { :d |\n\t\t\t\td.eulerPhi * (k ^ (n / d)) / n\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "necklaces",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Primitive */
    function fkm(n, k) {
      let necklaces = [];
      let a = [];
      let i = -1;
      let j = null;
      while (++i < n) {
        a[i] = 0;
      }
      necklaces.push(a.slice());
      while (1) {
        i = n;
        while (--i >= 0) {
          if (a[i] < k - 1) {
            break;
          }
        }
        if (i < 0) {
          break;
        }
        a[j = i++]++;
        while (++j < n) {
          a[j] = a[j % i];
        }
        if (n % i === 0) {
          necklaces.push(a.slice());
        }
      }
      return necklaces;
    }
    return fkm(_n, _k);
  }, ["n", "k"]),
  "{ :n :k |\n\t\t/* https://www.jasondavies.com/necklaces/necklaces.js */\n\t\t<primitive:\n\t\tfunction fkm(n, k) {\n\t\t\tlet necklaces = [];\n\t\t\tlet a = [];\n\t\t\tlet i = -1;\n\t\t\tlet j = null;\n\t\t\twhile (++i < n) {\n\t\t\t\ta[i] = 0;\n\t\t\t}\n\t\t\tnecklaces.push(a.slice());\n\t\t\twhile (1) {\n\t\t\t\ti = n;\n\t\t\t\twhile (--i >= 0) {\n\t\t\t\t\tif (a[i] < k - 1) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (i < 0) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\ta[j = i++]++;\n\t\t\t\twhile (++j < n) {\n\t\t\t\t\ta[j] = a[j % i];\n\t\t\t\t}\n\t\t\t\tif (n % i === 0) {\n\t\t\t\t\tnecklaces.push(a.slice());\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn necklaces;\n\t\t};\n\t\treturn fkm(_n, _k)\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "polygonalNumber",
  ["r", "n"],
  sl.annotateFunction(function (_r, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_solidus_2(1, 2), _n),
      _plusSign_2(
        _hyphenMinus_2(_asterisk_2(_n, _hyphenMinus_2(_r, 2)), _r),
        4,
      ),
    );
  }, ["r", "n"]),
  "{ :r :n |\n\t\t(1 / 2) * n * (n * (r - 2) - r + 4)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "restrictedGrowthStringsDo",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 0);
    let _b = _List_2(_n, 0);
    let _r = true;
    /* Statements */
    _f_1(_a);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _n;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_at_2(_a, _c), _hyphenMinus_2(_n, 1)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSign_2(_at_2(_a, _c), _at_2(_b, _c));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _hyphenMinus_2(_c, 1);
          }, []),
        );
        return _if_3(
          _equalsSign_2(_c, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _r = false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_a, _c, _plusSign_2(_at_2(_a, _c), 1));
            _do_2(
              _to_2(_plusSign_2(_c, 1), _n),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_a, _i, 0);
                return _atPut_3(
                  _b,
                  _i,
                  _max_2(
                    _at_2(_a, _hyphenMinus_2(_i, 1)),
                    _at_2(_b, _hyphenMinus_2(_i, 1)),
                  ),
                );
              }, ["i"]),
            );
            return _f_1(_a);
          }, []),
        );
      }, []),
    );
    return null;
  }, ["n", "f:/1"]),
  "{ :n :f:/1 |\n\t\t/* https://github.com/gstamatelat/partitions-enumeration/blob/master/v.cpp */\n\t\tlet a = List(n, 0);\n\t\tlet b = List(n, 0);\n\t\tlet r = true;\n\t\tf(a);\n\t\t{ r }.whileTrue {\n\t\t\tlet c = n;\n\t\t\t{ a[c] = (n - 1) | { a[c] > b[c] } }.whileTrue {\n\t\t\t\tc := c - 1\n\t\t\t};\n\t\t\t(c = 1).if {\n\t\t\t\tr := false\n\t\t\t} {\n\t\t\t\ta[c] := a[c] + 1;\n\t\t\t\t(c + 1).to(n).do { :i |\n\t\t\t\t\ta[i] := 0;\n\t\t\t\t\tb[i] := max(a[i - 1], b[i - 1])\n\t\t\t\t};\n\t\t\t\tf(a)\n\t\t\t}\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "restrictedGrowthStrings",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _restrictedGrowthStringsDo_2(
      _n,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n |\n\t\tlet answer = [];\n\t\tn.restrictedGrowthStringsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "restrictedGrowthStringsDo",
  ["n", "k", "f:/1"],
  sl.annotateFunction(function (_n, _k, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _f_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _List_2(_n, 0);
    let _b = _List_2(_n, 0);
    let _r = true;
    let _m = -1;
    /* Statements */
    _downToDo_3(
      _hyphenMinus_2(_n, 1),
      _plusSign_2(_hyphenMinus_2(_n, _k), 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _plusSign_2(_hyphenMinus_2(_k, _n), _i);
        /* Statements */
        _atPut_3(_a, _plusSign_2(_i, 1), _x);
        return _atPut_3(_b, _plusSign_2(_i, 1), _hyphenMinus_2(_x, 1));
      }, ["i"]),
    );
    _f_1(_a);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _r;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _r,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _exclamationMarkEqualsSign_2(_m, _hyphenMinus_2(_k, 1));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _c = _n;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _verticalLine_2(
                  _equalsSign_2(_at_2(_a, _c), _hyphenMinus_2(_k, 1)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSign_2(_at_2(_a, _c), _at_2(_b, _c));
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _c = _hyphenMinus_2(_c, 1);
              }, []),
            );
            return _if_3(
              _equalsSign_2(_c, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _r = false;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_a, _c, _plusSign_2(_at_2(_a, _c), 1));
                _do_2(
                  _to_2(_plusSign_2(_c, 1), _n),
                  sl.annotateFunction(function (_i) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _i";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _atPut_3(_a, _i, 0);
                    return _atPut_3(
                      _b,
                      _i,
                      _max_2(
                        _at_2(_a, _hyphenMinus_2(_i, 1)),
                        _at_2(_b, _hyphenMinus_2(_i, 1)),
                      ),
                    );
                  }, ["i"]),
                );
                return _m = _max_2(_at_2(_a, _n), _at_2(_b, _n));
              }, []),
            );
          }, []),
        );
        return _ifNotNil_2(
          _m,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _f_1(_a);
          }, []),
        );
      }, []),
    );
    return null;
  }, ["n", "k", "f:/1"]),
  "{ :n :k :f:/1 |\n\t\t/* https://github.com/gstamatelat/partitions-enumeration/blob/master/x.cpp */\n\t\tlet a = List(n, 0);\n\t\tlet b = List(n, 0);\n\t\tlet r = true;\n\t\tlet m = -1;\n\t\t(n - 1).downToDo(n - k + 1) { :i |\n\t\t\tlet x = k - n + i;\n\t\t\ta[i + 1] := x;\n\t\t\tb[i + 1] := x - 1\n\t\t};\n\t\tf(a);\n\t\t{ r }.whileTrue {\n\t\t\tlet m = nil;\n\t\t\t{ r & { m != (k - 1) } }.whileTrue {\n\t\t\t\tlet c = n;\n\t\t\t\t{ a[c] = (k - 1) | { a[c] > b[c] } }.whileTrue {\n\t\t\t\t\tc := c - 1\n\t\t\t\t};\n\t\t\t\t(c = 1).if {\n\t\t\t\t\tr := false\n\t\t\t\t} {\n\t\t\t\t\ta[c] := a[c] + 1;\n\t\t\t\t\t(c + 1).to(n).do { :i |\n\t\t\t\t\t\ta[i] := 0;\n\t\t\t\t\t\tb[i] := max(a[i - 1], b[i - 1])\n\t\t\t\t\t};\n\t\t\t\t\tm := max(a[n], b[n])\n\t\t\t\t}\n\t\t\t};\n\t\t\tm.ifNotNil {\n\t\t\t\tf(a)\n\t\t\t}\n\t\t};\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "restrictedGrowthStrings",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _restrictedGrowthStringsDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = [];\n\t\trestrictedGrowthStringsDo(n, k) { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "secondOrderEulerianTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangularArray_2(
      _Span_3(1, _self, 1),
      _eulerianNumberSecondOrder_2,
    );
  }, ["self"]),
  "{ :self |\n\t\t1:self.triangularArray(\n\t\t\teulerianNumberSecondOrder:/2\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "setPartitionsDo",
  ["n", "k", "f:/1"],
  sl.annotateFunction(function (_n, _k, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _k, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _restrictedGrowthStringsDo_3(
      _n,
      _k,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_setPartition_1(_x));
      }, ["x"]),
    );
  }, ["n", "k", "f:/1"]),
  "{ :n :k :f:/1 |\n\t\trestrictedGrowthStringsDo(n, k) { :x |\n\t\t\tf(x.setPartition)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "setPartitionsDo",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _restrictedGrowthStringsDo_2(
      _n,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_setPartition_1(_x));
      }, ["x"]),
    );
  }, ["n", "f:/1"]),
  "{ :n :f:/1 |\n\t\trestrictedGrowthStringsDo(n) { :x |\n\t\t\tf(x.setPartition)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "setPartitions",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_restrictedGrowthStrings_2(_n, _k), _setPartition_1);
  }, ["n", "k"]),
  "{ :n :k |\n\t\trestrictedGrowthStrings(n, k).collect(setPartition:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "setPartitions",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_restrictedGrowthStrings_1(_n), _setPartition_1);
  }, ["n"]),
  "{ :n |\n\t\trestrictedGrowthStrings(n).collect(setPartition:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "stirlingS1",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_k, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_lessThanSign_2(_n, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_k, _n),
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
            } /* Statements */
            return _hyphenMinus_2(
              _stirlingS1_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_k, 1)),
              _asterisk_2(
                _hyphenMinus_2(_n, 1),
                _stirlingS1_2(_hyphenMinus_2(_n, 1), _k),
              ),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t(k = 0).if {\n\t\t\t(n < 1).boole\n\t\t} {\n\t\t\t(k > n).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tstirlingS1(n - 1, k - 1) - ((n - 1) * stirlingS1(n - 1, k))\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "stirlingS2",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _round_1(
      _asterisk_2(
        _solidus_2(1, _factorial_1(_k)),
        _sum_2(
          _Span_3(0, _k, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _asterisk_2(
                _circumflexAccent_2(-1, _hyphenMinus_2(_k, _i)),
                _binomial_2(_k, _i),
              ),
              _circumflexAccent_2(_i, _n),
            );
          }, ["i"]),
        ),
      ),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t/*\n\t\t0:k.sum { :i |\n\t\t\t((-1 ^ (k - i)) * (i ^ n)) / ((k - i).factorial * i.factorial)\n\t\t}\n\t\t*/\n\t\t((1 / k.factorial) * 0:k.sum { :i |\n\t\t\t(-1 ^ (k - i)) * binomial(k, i) * (i ^ n)\n\t\t}).round\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "wedderburnEtheringtonNumbers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a_1 = _memoize_2(
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _f_1 = sl.annotateFunction(function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(_a_1(_k), _a_1(_hyphenMinus_2(_n, _k)));
        }, ["k"]);
        /* Statements */
        return _which_1([
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_n, 2);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _n;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isOdd_1(_n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _sum_2(
                _to_2(1, _solidus_2(_hyphenMinus_2(_n, 1), 2)),
                _f_1,
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isEven_1(_n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSign_2(
                _sum_2(_to_2(1, _hyphenMinus_2(_solidus_2(_n, 2), 1)), _f_1),
                _asterisk_2(
                  _asterisk_2(_solidus_2(1, 2), _a_1(_solidus_2(_n, 2))),
                  _plusSign_2(1, _a_1(_solidus_2(_n, 2))),
                ),
              );
            }, []),
          ),
        ]);
      }, ["n"]),
      true,
    );
    /* Statements */
    return _collect_2(_to_2(0, _hyphenMinus_2(_self, 1)), _a_1);
  }, ["self"]),
  "{ :self |\n\t\tlet a:/1 = { :n |\n\t\t\tlet f = { :k | a(k) * a(n - k) };\n\t\t\t[\n\t\t\t\t{ n < 2 } -> {\n\t\t\t\t\tn\n\t\t\t\t},\n\t\t\t\t{ n.isOdd } -> {\n\t\t\t\t\t1.to((n - 1) / 2).sum(f:/1)\n\t\t\t\t},\n\t\t\t\t{ n.isEven } -> {\n\t\t\t\t\t1.to((n / 2) - 1).sum(f:/1)\n\t\t\t\t\t+\n\t\t\t\t\t((1 / 2) * a(n / 2) * (1 + a(n / 2)))\n\t\t\t\t}\n\t\t\t].which\n\t\t}.memoize(true);\n\t\t0.to(self - 1).collect(a:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "doubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normal_1(_integerDoubleFactorial_1(_asLargeInteger_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _generalizedDoubleFactorial_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself.asLargeInteger.integerDoubleFactorial.normal\n\t\t} {\n\t\t\tself.generalizedDoubleFactorial\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "factorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normal_1(_integerFactorial_1(_asLargeInteger_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_plusSign_2(_self, 1));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNonNegativeInteger.if {\n\t\t\tself.asLargeInteger.integerFactorial.normal\n\t\t} {\n\t\t\t(self + 1).gamma\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "factorialPower",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(
      _hyphenMinus_2(_self, _to_2(0, _hyphenMinus_2(_anInteger, 1))),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(self - 0.to(anInteger - 1)).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "lowerChristoffelWord",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = 1;
    let _y = 0;
    let _answer = [0];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_m, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_plusSign_2(_y, 1), _asterisk_2(_self, _x)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, 1);
            return _y = _plusSign_2(_y, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, 0);
            return _x = _plusSign_2(_x, 1);
          }, []),
        );
      }, ["n"]),
    );
    return _answer;
  }, ["self", "m"]),
  "{ :self :m |\n\t\tlet x = 1;\n\t\tlet y = 0;\n\t\tlet answer = [0];\n\t\t1.toDo(m - 1) { :n |\n\t\t\t((y + 1) <= (self * x)).if {\n\t\t\t\tanswer.add(1);\n\t\t\t\ty := y + 1\n\t\t\t} {\n\t\t\t\tanswer.add(0);\n\t\t\t\tx := x + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Combinatorics",
  "stirlingsApproximation",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _sqrt_1(_asterisk_2(_pi_1(2), _n)),
      _circumflexAccent_2(_solidus_2(_n, _e_1(1)), _n),
    );
  }, ["n"]),
  "{ :n |\n\t\t(2.pi * n).sqrt * ((n / 1.e) ^ n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Combinatorics",
  "generalizedDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_self, 2);
    let _a = _cos_1(_pi_1(_n));
    let _b = _circumflexAccent_2(
      2,
      _asterisk_2(
        0.25,
        _hyphenMinus_2(_plusSign_2(-3, _asterisk_2(2, _n)), _a),
      ),
    );
    let _c = _circumflexAccent_2(
      _pi_1(1),
      _asterisk_2(0.25, _plusSign_2(-1, _a)),
    );
    /* Statements */
    return _asterisk_2(_asterisk_2(_b, _c), _gamma_1(_asterisk_2(_n, 0.5)));
  }, ["self"]),
  "{ :self |\n\t\tlet n = self + 2;\n\t\tlet a = n.pi.cos;\n\t\tlet b = 2 ^ (0.25 * (-3 + (2 * n) - a));\n\t\tlet c = 1.pi ^ (0.25 * (-1 + a));\n\t\tb * c * (n * 0.5).gamma\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Combinatorics",
  "generalizedDoubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _plusSign_2(_self, 2);
    let _a = _cos_1(_pi_1(_n));
    let _b = _circumflexAccent_2(
      2,
      _asterisk_2(
        0.25,
        _hyphenMinus_2(_plusSign_2(-3, _asterisk_2(2, _n)), _a),
      ),
    );
    let _c = _circumflexAccent_2(
      _pi_1(1),
      _asterisk_2(0.25, _plusSign_2(-1, _a)),
    );
    /* Statements */
    return _asterisk_2(_asterisk_2(_b, _c), _gamma_1(_asterisk_2(_n, 0.5)));
  }, ["self"]),
  "{ :self |\n\t\tlet n = self + 2;\n\t\tlet a = n.pi.cos;\n\t\tlet b = 2 ^ (0.25 * (-3 + (2 * n) - a));\n\t\tlet c = 1.pi ^ (0.25 * (-1 + a));\n\t\tb * c * (n * 0.5).gamma\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isIntegerPartition",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_sum_1(_self), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_self, _isPositiveInteger_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isSortedBy_2(_self, _greaterThanSignEqualsSign_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.sum = n & {\n\t\t\tself.allSatisfy(isPositiveInteger:/1) & {\n\t\t\t\tself.isSortedBy(>=)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isRestrictedGrowthString",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_a);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_at_2(_a, 1), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _to_2(1, _hyphenMinus_2(_n, 1)),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _at_2(_a, _plusSign_2(_i, 1)),
              _plusSign_2(1, _max_1(_ListView_4(_a, 1, _i, 1))),
            );
          }, ["i"]),
        );
      }, []),
    );
  }, ["a"]),
  "{ :a |\n\t\tlet n = a.size;\n\t\ta[1] = 0 & {\n\t\t\t1.to(n - 1).allSatisfy { :i |\n\t\t\t\ta[i + 1] <= (1 + ListView(a, 1, i, 1).max)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isTableau",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSortedBy_2(_collect_2(_self, _size_1), _greaterThanSignEqualsSign_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isPermutationList_1(_catenate_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _allSatisfy_2(_self, _isSorted_1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _allSatisfy_2(_transposeTableau_1(_self), _isSorted_1);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.collect(size:/1).isSortedBy(>=) & {\n\t\t\tself.catenate.isPermutationList & {\n\t\t\t\tself.allSatisfy(isSorted:/1) & {\n\t\t\t\t\tself.transposeTableau.allSatisfy(isSorted:/1)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "setPartition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      _size_1(_self),
    );
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_at_2(_answer, _plusSign_2(_each, 1)), _index);
      }, ["each", "index"]),
    );
    return _reject_2(_answer, _isEmpty_1);
  }, ["self"]),
  "{ :self |\n\t\tlet answer = { [] } ! self.size;\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer.at(each + 1).add(index)\n\t\t};\n\t\tanswer.reject(isEmpty:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "transposeTableau",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _max_1(_collect_2(_self, _size_1));
    /* Statements */
    return _toAsCollect_4(
      1,
      _n,
      _species_1(_first_1(_self)),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _deleteMissing_1(
          _collect_2(
            _self,
            sl.annotateFunction(function (_row) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _row";
                throw new Error(errorMessage);
              } /* Statements */
              return _atOrNil_2(_row, _index);
            }, ["row"]),
          ),
        );
      }, ["index"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.collect(size:/1).max;\n\t\t1.toAsCollect(n, self.first.species) { :index |\n\t\t\tself.collect { :row |\n\t\t\t\trow.atOrNil(index)\n\t\t\t}.deleteMissing\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Combinatorics",
  "deBruijnSequence",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_1(
      _select_2(
        _lyndonWords_2(_self, _anInteger),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _divisible_2(_anInteger, _size_1(_each));
        }, ["each"]),
      ),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.lyndonWords(anInteger).select { :each |\n\t\t\tanInteger.divisible(each.size)\n\t\t}.catenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Combinatorics",
  "isDeBruijnSequence",
  ["x", "k", "n"],
  sl.annotateFunction(function (_x, _k, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _k, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _sort_1(_nub_1(_x));
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_a), _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_x), _circumflexAccent_2(_k, _n)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _b = _tuples_2(_a, _n);
            let _c = _plusSignPlusSign_2(
              _x,
              _first_2(_x, _hyphenMinus_2(_n, 1)),
            );
            /* Statements */
            return _allSatisfy_2(
              _b,
              sl.annotateFunction(function (_d) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _d";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includesSubstring_2(_c, _d);
              }, ["d"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["x", "k", "n"]),
  "{ :x :k :n |\n\t\tlet a = x.nub.sort;\n\t\t(a.size = k) & {\n\t\t\tx.size = (k ^ n) & {\n\t\t\t\tlet b = a.tuples(n);\n\t\t\t\tlet c = x ++ x.first(n - 1);\n\t\t\t\tb.allSatisfy { :d |\n\t\t\t\t\tc.includesSubstring(d)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Combinatorics",
  "deBruijnSequenceCount",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _circumflexAccent_2(
        _factorial_1(_k),
        _circumflexAccent_2(_k, _hyphenMinus_2(_n, 1)),
      ),
      _circumflexAccent_2(_k, _n),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\t(k.factorial ^ (k ^ (n - 1))) / (k ^ n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "bockerLiptakAlgorithm",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_a);
    let _n = _List_2(_at_2(_a, 1), Infinity);
    let _t = [];
    /* Statements */
    _atPut_3(_n, 1, 0);
    _add_2(_t, _copy_1(_n));
    _toDo_3(
      2,
      _k,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _gcd_2(_at_2(_a, 1), _at_2(_a, _i));
        /* Statements */
        _toDo_3(
          1,
          _d,
          sl.annotateFunction(function (_r) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _r";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _q = _asList_1(
              _nonemptyThenTo_3(
                _r,
                _plusSign_2(_r, _d),
                _plusSign_2(_r, _hyphenMinus_2(_at_2(_a, 1), _d)),
              ),
            );
            let _m = _min_1(_atAll_2(_n, _q));
            /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_m, Infinity),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _timesRepeat_2(
                  _solidusSolidus_2(_at_2(_a, 1), _d),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _p, _rp;
                    /* Statements */
                    _m = _plusSign_2(_m, _at_2(_a, _i));
                    _p = _percentSign_2(_m, _at_2(_a, 1));
                    _m = _min_2(_m, _at_2(_n, _plusSign_2(_p, 1)));
                    return _atPut_3(_n, _plusSign_2(_p, 1), _m);
                  }, []),
                );
              }, []),
            );
          }, ["r"]),
        );
        return _add_2(_t, _copy_1(_n));
      }, ["i"]),
    );
    return _t;
  }, ["a"]),
  "{ :a |\n\t\tlet k = a.size;\n\t\tlet n = List(a[1], Infinity);\n\t\tlet t = [];\n\t\tn[1] := 0;\n\t\tt.add(n.copy);\n\t\t2.toDo(k) { :i |\n\t\t\tlet d = gcd(a[1], a[i]);\n\t\t\t1.toDo(d) { :r |\n\t\t\t\tlet q = [r, r + d .. r + (a[1] - d)];\n\t\t\t\tlet m = min(n.atAll(q));\n\t\t\t\t(m < Infinity).ifTrue {\n\t\t\t\t\t(a[1] // d).timesRepeat {\n\t\t\t\t\t\tvar p, rp;\n\t\t\t\t\t\tm := m + a[i];\n\t\t\t\t\t\tp := m % a[1];\n\t\t\t\t\t\tm := min(m, n[p + 1]);\n\t\t\t\t\t\tn[p + 1] := m\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tt.add(n.copy)\n\t\t};\n\t\tt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "frobeniusNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, 1),
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
        return _if_3(
          _exclamationMarkEqualsSign_2(_gcd_1(_self), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return Infinity;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _last_1(_bockerLiptakAlgorithm_1(_sorted_1(_self)));
            /* Statements */
            return _hyphenMinus_2(_max_1(_r), _min_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.includes(1).if {\n\t\t\t-1\n\t\t} {\n\t\t\t(self.gcd != 1).if {\n\t\t\t\tInfinity\n\t\t\t} {\n\t\t\t\tlet r = self.sorted.bockerLiptakAlgorithm.last;\n\t\t\t\tr.max - self.min\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "frobeniusSolve",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ert = _bockerLiptakAlgorithm_1(_a);
    let _c = _List_2(_size_1(_a), 0);
    let _answer = [];
    let _f_2 = sl.annotateFunction(function (_m, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _m, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_i, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _atPut_3(_c, 1, _solidusSolidus_2(_m, _at_2(_a, 1)));
          return _add_2(_answer, _copy_1(_c));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _lc = _lcm_2(_at_2(_a, 1), _at_2(_a, _i));
          let _l = _solidusSolidus_2(_lc, _at_2(_a, _i));
          /* Statements */
          return _toDo_3(
            0,
            _hyphenMinus_2(_l, 1),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _mm = _hyphenMinus_2(_m, _asterisk_2(_j, _at_2(_a, _i)));
              let _r = _percentSign_2(_mm, _at_2(_a, 1));
              let _lb = _at_2(
                _at_2(_ert, _hyphenMinus_2(_i, 1)),
                _plusSign_2(_r, 1),
              );
              /* Statements */
              _atPut_3(_c, _i, _j);
              return _ifTrue_2(
                _exclamationMarkEqualsSign_2(_lb, Infinity),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _whileTrue_2(
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _greaterThanSignEqualsSign_2(_mm, _lb);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _f_2(_mm, _hyphenMinus_2(_i, 1));
                      _mm = _hyphenMinus_2(_mm, _lc);
                      return _atPut_3(_c, _i, _plusSign_2(_at_2(_c, _i), _l));
                    }, []),
                  );
                }, []),
              );
            }, ["j"]),
          );
        }, []),
      );
    }, ["m", "i"]);
    /* Statements */
    _f_2(_b, _size_1(_a));
    return _sortBy_2(_answer, _precedes_2);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet ert = a.bockerLiptakAlgorithm;\n\t\tlet c = List(a.size, 0);\n\t\tlet answer = [];\n\t\tlet f = { :m :i |\n\t\t\t(i = 1).if {\n\t\t\t\tc[1] := m // a[1];\n\t\t\t\tanswer.add(c.copy)\n\t\t\t} {\n\t\t\t\tlet lc = lcm(a[1], a[i]);\n\t\t\t\tlet l = lc // a[i];\n\t\t\t\t0.toDo(l - 1) { :j |\n\t\t\t\t\tlet mm = m - (j * a[i]);\n\t\t\t\t\tlet r = mm % a[1];\n\t\t\t\t\tlet lb = ert[i - 1][r + 1];\n\t\t\t\t\tc[i] := j;\n\t\t\t\t\t(lb != Infinity).ifTrue {\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tmm >= lb\n\t\t\t\t\t\t}.whileTrue {\n\t\t\t\t\t\t\tf(mm, i - 1);\n\t\t\t\t\t\t\tmm := mm - lc;\n\t\t\t\t\t\t\tc[i] := c[i] + l\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf(b, a.size);\n\t\tanswer.sortBy(precedes:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isLatticeWord",
  ["self", "alphabet"],
  sl.annotateFunction(function (_self, _alphabet) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alphabet";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _letters = _allButLast_1(_alphabet);
    /* Statements */
    return _allSatisfy_2(
      _prefixes_1(_self),
      sl.annotateFunction(function (_word) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _word";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _asIdentityMultiset_1(_word);
        /* Statements */
        return _allSatisfy_2(
          _letters,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _b = _occurrencesOf_2(_a, _i);
            let _c = _occurrencesOf_2(_a, _plusSign_2(_i, 1));
            /* Statements */
            return _greaterThanSignEqualsSign_2(_b, _c);
          }, ["i"]),
        );
      }, ["word"]),
    );
  }, ["self", "alphabet"]),
  "{ :self :alphabet |\n\t\tlet letters = alphabet.allButLast;\n\t\tself.prefixes.allSatisfy { :word |\n\t\t\tlet a = word.asIdentityMultiset;\n\t\t\tletters.allSatisfy { :i |\n\t\t\t\tlet b = a.occurrencesOf(i);\n\t\t\t\tlet c = a.occurrencesOf(i + 1);\n\t\t\t\tb >= c\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isLatticeWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _alphabet = _sort_1(_nub_1(_self));
    /* Statements */
    return _isLatticeWord_2(_self, _alphabet);
  }, ["self"]),
  "{ :self |\n\t\tlet alphabet = self.nub.sort;\n\t\tself.isLatticeWord(alphabet)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "isYamanouchiWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLatticeWord_1(_reverse_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.reverse.isLatticeWord\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Combinatorics",
  "deBruijnSequence",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _deBruijnSequence_2(_characters_1(_self), _anInteger),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.characters.deBruijnSequence(anInteger).stringCatenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Combinatorics",
  "lowerChristoffelWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_numeratorDenominator_1(_self), 2);
    let _n = _at_2(__SplVar2, 1);
    let _d = _at_2(__SplVar2, 2);
    /* Statements */
    return _lowerChristoffelWord_2(_self, _plusSign_2(_n, _d));
  }, ["self"]),
  "{ :self |\n\t\tlet [n, d] = self.numeratorDenominator;\n\t\tself.lowerChristoffelWord(n + d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Combinatorics",
  "upperChristoffelWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_numeratorDenominator_1(_self), 2);
    let _n = _at_2(__SplVar3, 1);
    let _d = _at_2(__SplVar3, 2);
    /* Statements */
    return _lowerChristoffelWord_2(_self, _plusSign_2(_n, _d));
  }, ["self"]),
  "{ :self |\n\t\tlet [n, d] = self.numeratorDenominator;\n\t\tself.lowerChristoffelWord(n + d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Combinatorics",
  "duvalsAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _factorisation = [];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _plusSign_2(_i, 1);
        let _k = _i;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSignEqualsSign_2(_j, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSignVerticalLine_2(
                  _at_2(_self, _k),
                  _at_2(_self, _j),
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(
              _lessThanSignVerticalLine_2(_at_2(_self, _k), _at_2(_self, _j)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _k = _i;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _k = _plusSign_2(_k, 1);
              }, []),
            );
            return _j = _plusSign_2(_j, 1);
          }, []),
        );
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(
              _factorisation,
              _copyFromTo_3(
                _self,
                _i,
                _hyphenMinus_2(_hyphenMinus_2(_plusSign_2(_i, _j), _k), 1),
              ),
            );
            return _i = _hyphenMinus_2(_plusSign_2(_i, _j), _k);
          }, []),
        );
      }, []),
    );
    return _factorisation;
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet factorisation = [];\n\t\tlet i = 1;\n\t\t{ i <= n }.whileTrue {\n\t\t\tlet j = i + 1;\n\t\t\tlet k = i;\n\t\t\t{ j <= n & { self[k] <=| self[j] } }.whileTrue {\n\t\t\t\t(self[k] <| self[j]).if {\n\t\t\t\t\tk := i\n\t\t\t\t} {\n\t\t\t\t\tk := k + 1\n\t\t\t\t};\n\t\t\t\tj := j + 1\n\t\t\t};\n\t\t\t{ i <= k }.whileTrue {\n\t\t\t\tfactorisation.add(\n\t\t\t\t\tself.copyFromTo(i, i + j - k - 1)\n\t\t\t\t);\n\t\t\t\ti := i + j - k\n\t\t\t}\n\t\t};\n\t\tfactorisation\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Combinatorics",
  "duvalsAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_duvalsAlgorithm_1(_characters_1(_self)), _stringJoin_1);
  }, ["self"]),
  "{ :self |\n\t\tself.characters.duvalsAlgorithm.collect(stringJoin:/1)\n\t}",
);
