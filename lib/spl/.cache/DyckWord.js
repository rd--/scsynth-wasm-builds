sl.addType(
  false,
  "DyckWord",
  "DyckWord",
  ["Object", "Storeable"],
  ["word", "tokens"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DyckWord",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "DyckWord",
);

sl.addMethodToExistingType(
  "DyckWord",
  "DyckWord",
  "heights",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_tokens_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _h = 0;
    let _answer = [_h];
    /* Statements */
    _do_2(
      _word_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _h = _if_3(
          _equalsSign_2(_each, _a),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_h, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_h, 1);
          }, []),
        );
        return _add_2(_answer, _h);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.tokens;\n\t\tlet h = 0;\n\t\tlet answer = [h];\n\t\tself.word.do { :each |\n\t\t\th := (each = a).if { h + 1 } { h - 1 };\n\t\t\tanswer.add(h)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DyckWord",
  "DyckWord",
  ["word", "tokens"],
  sl.annotateFunction(function (_word, _tokens) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _word, _tokens";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDyckWord_2(_word, _tokens),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newDyckWord_0(), _word, _tokens);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_word, "DyckWord: invalid word");
      }, []),
    );
  }, ["word", "tokens"]),
  "{ :word :tokens |\n\t\tword.isDyckWord(tokens).if {\n\t\t\tnewDyckWord().initializeSlots(word, tokens)\n\t\t} {\n\t\t\tword.error('DyckWord: invalid word')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DyckWord",
  "isDyckWord",
  ["self", "tokens"],
  sl.annotateFunction(function (_self, _tokens) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tokens";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _ampersand_2(
      _isEven_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_Set_1(_self), _Set_1(_tokens)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar2 = _assertIsOfSize_2(_tokens, 2);
            let _a = _at_2(__SplVar2, 1);
            let _b = _at_2(__SplVar2, 2);
            let _k = 0;
            let _h = 0;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _lessThanSign_2(_k, _n),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _greaterThanSignEqualsSign_2(_h, 0);
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _k = _plusSign_2(_k, 1);
                return _h = _if_3(
                  _equalsSign_2(_at_2(_self, _k), _a),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(_h, 1);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(_h, 1);
                  }, []),
                );
              }, []),
            );
            return _ampersand_2(
              _equalsSign_2(_k, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_h, 0);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "tokens"]),
  "{ :self :tokens |\n\t\tlet n = self.size;\n\t\tn.isEven & {\n\t\t\tSet(self) = Set(tokens) & {\n\t\t\t\tlet [a, b] = tokens;\n\t\t\t\tlet k = 0;\n\t\t\t\tlet h = 0;\n\t\t\t\t{ k < n & { h >= 0 } }.whileTrue {\n\t\t\t\t\tk := k + 1;\n\t\t\t\t\th := (self[k] = a).if { h + 1 } { h - 1 }\n\t\t\t\t};\n\t\t\t\tk = n & { h = 0 }\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DyckWord",
  "isDyckWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDyckWord_2(_self, [1, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.isDyckWord([1 0])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "DyckWord",
  "dyckWordsDo",
  ["t", "letters", "visit:/1"],
  sl.annotateFunction(function (_t, _letters, _visit_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _t, _letters, _visit_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_letters, 2);
    let _one = _at_2(__SplVar3, 1);
    let _zero = _at_2(__SplVar3, 2);
    let _n = _asterisk_2(2, _t);
    let _b = _plusSignPlusSign_2(_List_2(_t, _one), _List_2(_t, _zero));
    let _x = _t;
    let _y = _t;
    /* Statements */
    _visit_1(_b);
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_x, _hyphenMinus_2(_n, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_b, _x, _zero);
        _atPut_3(_b, _y, _one);
        _x = _plusSign_2(_x, 1);
        _y = _plusSign_2(_y, 1);
        _ifTrue_2(
          _equalsSign_2(_at_2(_b, _x), _zero),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _greaterThanSignEqualsSign_2(
                _x,
                _hyphenMinus_2(_asterisk_2(2, _y), 2),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _x = _plusSign_2(_x, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_b, _x, _one);
                _atPut_3(_b, 2, _zero);
                _x = 3;
                return _y = 2;
              }, []),
            );
          }, []),
        );
        return _visit_1(_b);
      }, []),
    );
  }, ["t", "letters", "visit:/1"]),
  "{ :t :letters :visit:/1 |\n\t\tlet [one, zero] = letters;\n\t\tlet n = 2 * t;\n\t\tlet b = List(t, one) ++ List(t, zero);\n\t\tlet x = t;\n\t\tlet y = t;\n\t\tvisit(b);\n\t\t{ x < (n - 1) }.whileTrue {\n\t\t\tb[x] := zero;\n\t\t\tb[y] := one;\n\t\t\tx := x + 1;\n\t\t\ty := y + 1;\n\t\t\t(b[x] = zero).ifTrue {\n\t\t\t\t(x >= ((2 * y) - 2)).if {\n\t\t\t\t\tx := x + 1\n\t\t\t\t} {\n\t\t\t\t\tb[x] := one;\n\t\t\t\t\tb[2] := zero;\n\t\t\t\t\tx := 3;\n\t\t\t\t\ty := 2\n\t\t\t\t}\n\t\t\t};\n\t\t\tvisit(b)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "DyckWord",
  "dyckWords",
  ["t", "letters"],
  sl.annotateFunction(function (_t, _letters) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _t, _letters";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = [];
    /* Statements */
    _dyckWordsDo_3(
      _t,
      _letters,
      sl.annotateFunction(function (_b) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_r, _copy_1(_b));
      }, ["b"]),
    );
    return _r;
  }, ["t", "letters"]),
  "{ :t :letters |\n\t\tlet r = [];\n\t\tdyckWordsDo(t, letters) { :b |\n\t\t\tr.add(b.copy)\n\t\t};\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "DyckWord",
  "dyckWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dyckWords_2(_self, [1, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.dyckWords([1 0])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "DyckWord",
  "dyckWordsRecursiveAlgorithm",
  ["n", "letters"],
  sl.annotateFunction(function (_n, _letters) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _letters";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_letters, 2);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _f_4 = sl.annotateFunction(function (_x, _i, _n0, _n1) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _x, _i, _n0, _n1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d0_0 = sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [_a]),
          _plusSign_2(_i, 1),
          _plusSign_2(_n0, 1),
          _n1,
        );
      }, []);
      let _d1_0 = sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_4(
          _plusSignPlusSign_2(_x, [_b]),
          _plusSign_2(_i, 1),
          _n0,
          _plusSign_2(_n1, 1),
        );
      }, []);
      /* Statements */
      return _if_3(
        _ampersandAmpersand_2(
          _ampersandAmpersand_2(
            _lessThanSign_2(_n0, _n),
            _lessThanSign_2(_n1, _n),
          ),
          _greaterThanSign_2(_n0, _n1),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(_d0_0(), _d1_0());
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _verticalLineVerticalLine_2(
              _ampersandAmpersand_2(
                _ampersandAmpersand_2(
                  _lessThanSign_2(_n0, _n),
                  _lessThanSign_2(_n1, _n),
                ),
                _equalsSign_2(_n0, _n1),
              ),
              _ampersandAmpersand_2(
                _lessThanSign_2(_n0, _n),
                _equalsSign_2(_n1, _n),
              ),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _d0_0();
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _ampersandAmpersand_2(
                  _equalsSign_2(_n0, _n),
                  _lessThanSign_2(_n1, _n),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _d1_0();
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _ampersandAmpersand_2(
                      _equalsSign_2(_n0, _n1),
                      _equalsSign_2(_n1, _n),
                    ),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return [_x];
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _error_2(_n, "Integer>>dyckWords");
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["x", "i", "n0", "n1"]);
    /* Statements */
    return _f_4([_a], 1, 1, 0);
  }, ["n", "letters"]),
  "{ :n :letters |\n\t\tlet [a, b] = letters;\n\t\tlet f = { :x :i :n0 :n1 |\n\t\t\tlet d0 = { f(x ++ [a], i + 1, n0 + 1, n1) };\n\t\t\tlet d1 = { f(x ++ [b], i + 1, n0, n1 + 1) };\n\t\t\t((n0 < n) && (n1 < n) && (n0 > n1)).if {\n\t\t\t\td0() ++ d1()\n\t\t\t} {\n\t\t\t\t(\n\t\t\t\t\t((n0 < n) && (n1 < n) && (n0 = n1)) ||\n\t\t\t\t\t((n0 < n) && (n1 = n))\n\t\t\t\t).if {\n\t\t\t\t\td0()\n\t\t\t\t} {\n\t\t\t\t\t((n0 = n) && (n1 < n)).if {\n\t\t\t\t\t\td1()\n\t\t\t\t\t} {\n\t\t\t\t\t\t((n0 = n1) && (n1 = n)).if {\n\t\t\t\t\t\t\t[x]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tn.error('Integer>>dyckWords')\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tf([a], 1, 1, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "DyckWord",
  "isDyckWord",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _l = 0;
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_n, 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _l = _plusSign_2(_l, _circumflexAccent_2(-1, _n));
          _ifTrue_2(
            _lessThanSign_2(_l, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          return _n = _solidusSolidus_2(_n, 2);
        }, []),
      );
      return _not_1(_greaterThanSign_2(_l, 0));
    }, ["return:/1"]));
  }, ["n"]),
  "{ :n |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet l = 0;\n\t\t\t{ n > 0 }.whileTrue {\n\t\t\t\tl := l + (-1 ^ n);\n\t\t\t\t(l < 0).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\tn := n // 2\n\t\t\t};\n\t\t\t(l > 0).not\n\t\t}\n\t}",
);
