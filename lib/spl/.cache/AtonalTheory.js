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
        } /* Temporaries */
        let _p = _sorted_1(_self);
        let _k = _size_1(_p);
        let _a = [];
        let _rotateAndZero_2 = sl.annotateFunction(function (_x, _n) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _x, _n";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _y = _rotate_2(_x, _n);
          let _z = _hyphenMinus_2(_y, _at_2(_y, 1));
          /* Statements */
          return _percentSign_2(_z, 12);
        }, ["x", "n"]);
        /* Statements */
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
