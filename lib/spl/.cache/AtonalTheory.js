sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "forteIntervalVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _t = _select_2(
      _tuples_2(_self, 2),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_at_2(_x, 1), _at_2(_x, 2));
      }, ["x"]),
    );
    let _m = _Multiset_1(_collect_2(
      _t,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        let _i = _hyphenMinus_2(_at_2(_x, 2), _at_2(_x, 1));
        return _if_3(
          _greaterThanSign_2(_i, 6),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(12, _i);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          }, []),
        );
      }, ["x"]),
    ));
    return _collect_2(
      _asList_1(_nonemptyRange_3(1, 6, 1)),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _occurrencesOf_2(_m, _x);
      }, ["x"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet t = self.tuples(2).select { :x |\n\t\t\tx[1] < x[2]\n\t\t};\n\t\tlet m = t.collect { :x |\n\t\t\tlet i = x[2] - x[1];\n\t\t\t(i > 6).if { 12 - i } { i }\n\t\t}.Multiset;\n\t\t[1 .. 6].collect { :x |\n\t\t\tm.occurrencesOf(x)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "forteNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keyAtValue_2(
      _rahnSetClassTable_1(_system),
      _rahnPrimeForm_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.rahnSetClassTable.keyAtValue(\n\t\t\tself.rahnPrimeForm\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "mandereauIntervalVector",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    let _m = _Multiset_1(
      _collect_2(
        _tuples_2(_self, 2),
        sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _percentSign_2(
            _hyphenMinus_2(_at_2(_x, 2), _at_2(_x, 1)),
            _modulus,
          );
        }, ["x"]),
      ),
    );
    return _collect_2(
      _asList_1(_nonemptyRange_3(0, _hyphenMinus_2(_modulus, 1), 1)),
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _occurrencesOf_2(_m, _x);
      }, ["x"]),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet m = self.tuples(2).collect { :x |\n\t\t\t(x[2] - x[1]) % modulus\n\t\t}.Multiset;\n\t\t[0 .. modulus - 1].collect { :x |\n\t\t\tm.occurrencesOf(x)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "mandereauIntervalVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mandereauIntervalVector_2(_self, 12);
  }, ["self"]),
  "{ :self |\n\t\tself.mandereauIntervalVector(12)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "normalForm",
  ["self", "f:/2"],
  sl.annotateFunction(function (_self, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _p = _sorted_1(_self);
        let _k = _size_1(_p);
        let _a = [];
        let _rotateAndZero_2 = sl.annotateFunction(function (_x, _n) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _x, _n";
            throw new Error(errorMessage);
          } /* Statements */
          let _y = _rotate_2(_x, _n);
          let _z = _hyphenMinus_2(_y, _at_2(_y, 1));
          return _percentSign_2(_z, 12);
        }, ["x", "n"]);
        return _minBy_2(
          _collect_2(
            _rangeOrRelativeRange_3(1, _k, 1),
            sl.annotateFunction(function (_n) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _n";
                throw new Error(errorMessage);
              } /* Statements */
              return _rotateAndZero_2(_p, _n);
            }, ["n"]),
          ),
          _f_2,
        );
      }, []),
    );
  }, ["self", "f:/2"]),
  "{ :self :f:/2 |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet p = self.sorted;\n\t\t\tlet k = p.size;\n\t\t\tlet a = [];\n\t\t\tlet rotateAndZero = { :x :n |\n\t\t\t\tlet y = x.rotate(n);\n\t\t\t\tlet z = y - y[1];\n\t\t\t\tz % 12\n\t\t\t};\n\t\t\t1:k.collect { :n |\n\t\t\t\tp.rotateAndZero(n)\n\t\t\t}.minBy(f:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "primeForm",
  ["self", "f:/2"],
  sl.annotateFunction(function (_self, _f_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_2([
      _normalForm_2(_self, _f_2),
      _normalForm_2(_hyphenMinus_2(12, _self), _f_2),
    ], _f_2);
  }, ["self", "f:/2"]),
  "{ :self :f:/2 |\n\t\t[\n\t\t\tself.normalForm(f:/2),\n\t\t\t(12 - self).normalForm(f:/2)\n\t\t].minBy(f:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "rahnNormalForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalForm_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignVerticalLine_2(_reverse_1(_a), _reverse_1(_b));
      }, ["a", "b"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.normalForm { :a :b |\n\t\t\ta.reverse <| b.reverse\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AtonalTheory",
  "rahnPrimeForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primeForm_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignVerticalLine_2(_reverse_1(_a), _reverse_1(_b));
      }, ["a", "b"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.primeForm { :a :b |\n\t\t\ta.reverse <| b.reverse\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "AtonalTheory",
  "forteSetClassTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ForteSetClassTable");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'ForteSetClassTable'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "AtonalTheory",
  "rahnSetClassTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "RahnSetClassTable");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'RahnSetClassTable'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ForteSetClassTable"],
      ["category", "Music/AtonalTheory"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/forte-table.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "RahnSetClassTable"],
      ["category", "Music/AtonalTheory"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/rahn-table.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
