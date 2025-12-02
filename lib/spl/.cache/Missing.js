sl.addType(
  false,
  "Missing",
  "Missing",
  ["Object", "Storeable", "Equatable"],
  ["reasonMissing", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Missing",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Missing",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Missing",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["aString", "anObject"],
  sl.annotateFunction(function (_aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aString, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newMissing_0(), _aString, _anObject);
  }, ["aString", "anObject"]),
  "{ :aString :anObject |\n\t\tnewMissing().initializeSlots(aString, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Missing",
  "Missing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Missing_2(_self, null);
  }, ["self"]),
  "{ :self |\n\t\tMissing(self, nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Missing",
  "deleteMissing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(_self, _isMissing_1);
  }, ["self"]),
  "{ :self |\n\t\tself.reject(isMissing:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Missing",
  "deleteMissing",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deleteMissing_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _deleteMissing_2(_each, _hyphenMinus_2(_n, 1));
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\t(n = 1).if {\n\t\t\tself.deleteMissing\n\t\t} {\n\t\t\tself.collect { :each |\n\t\t\t\teach.deleteMissing(n - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Nil",
  "Missing",
  "isMissing",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Nil",
  "Missing",
  "reasonMissing",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "Unknown";
  }, ["unused"]),
  "{ :unused |\n\t\t'Unknown'\n\t}",
);
