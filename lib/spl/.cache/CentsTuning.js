/*  Requires: ScalaTuning, Tuning  */

sl.addType(
  false,
  "CentsTuning",
  "CentsTuning",
  ["Object", "Store", "Equal", "Tuning"],
  ["name", "description", "cents", "octave"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CentsTuning",
);

sl.copyTraitMethodsToType(
  "Store",
  "CentsTuning",
);

sl.copyTraitMethodsToType(
  "Equal",
  "CentsTuning",
);

sl.copyTraitMethodsToType(
  "Tuning",
  "CentsTuning",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "approximateRatios",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_cents_1(_self), _centsToRatio_1);
  }, ["self"]),
  "{ :self |\n\t\tself.cents.collect(centsToRatio/1)\n\t}",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "isRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_cents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.cents.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CentsTuning",
  "CentsTuning",
  ["name", "description", "cents", "octave"],
  sl.annotateFunction(function (_name, _description, _cents, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _name, _description, _cents, _octave";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newCentsTuning_0(),
      _name,
      _description,
      _cents,
      _octave,
    );
  }, ["name", "description", "cents", "octave"]),
  "{ :name :description :cents :octave |\n\t\tnewCentsTuning().initializeSlots(name, description, cents, octave)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "CentsTuning",
  "equalTemperamentTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _step = _solidus_2(1200, _self);
    return _CentsTuning_4(
      _plusSignPlusSign_2("ET-", _printString_1(_self)),
      _plusSignPlusSign_2(
        _capitalize_1(_inEnglishWords_1(_self)),
        " tone equal-temperament",
      ),
      _listThenTo_3(0, _step, _hyphenMinus_2(1200, _step)),
      2,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet step = 1200 / self;\n\t\tCentsTuning(\n\t\t\t'ET-' ++ self.printString,\n\t\t\tself.inEnglishWords.capitalize ++ ' tone equal-temperament',\n\t\t\t[0, step .. 1200 - step],\n\t\t\t2\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CentsTuning",
  "CentsTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CentsTuning_4("Unnamed tuning", "Undescribed tuning", _self, 2);
  }, ["self"]),
  "{ :self |\n\t\tCentsTuning('Unnamed tuning', 'Undescribed tuning', self, 2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "ScalaTuning",
  "CentsTuning",
  "CentsTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CentsTuning_4(
      _name_1(_self),
      _description_1(_self),
      _cents_1(_self),
      _octave_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tCentsTuning(\n\t\t\tself.name,\n\t\t\tself.description,\n\t\t\tself.cents,\n\t\t\tself.octave\n\t\t)\n\t}",
);
