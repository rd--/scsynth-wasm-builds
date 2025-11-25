sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GroupTheory",
  "finiteAbelianGroupCount",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asInteger_1(
      _product_1(_partitionsP_1(_column_2(_factorInteger_1(_n), 2))),
    );
  }, ["n"]),
  "{ :n |\n\t\tn.factorInteger\n\t\t.column(2)\n\t\t.partitionsP\n\t\t.product\n\t\t.asInteger\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GroupTheory",
  "finiteGroupCount",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = _at_2(_oeisSequenceData_1(_system), "A000001");
    let _k = _size_1(_t);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_n, _k),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_at_2(_t, _plusSign_2(_n, 1)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_n, "finiteGroupCount");
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet t = system.oeisSequenceData.at('A000001');\n\t\tlet k = t.size;\n\t\t(n < k).if {\n\t\t\tt.at(n + 1).at(2)\n\t\t} {\n\t\t\tn.error('finiteGroupCount')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "GroupTheory",
  "finiteAbelianGroupCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _finiteAbelianGroupCount_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(finiteAbelianGroupCount:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "GroupTheory",
  "finiteGroupCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _finiteGroupCount_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(finiteGroupCount:/1)\n\t}",
);
