/*  Requires: ScalaTuning, Tuning  */

sl.addType(
  false,
  "CentsTuning",
  "CentsTuning",
  ["Object", "Equatable", "Tuning"],
  ["name", "description", "asCents", "octave"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CentsTuning",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "CentsTuning",
);

sl.copyTraitMethodsToType(
  "Tuning",
  "CentsTuning",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "asFractions",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _asRatios_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _asFraction_2(_each, _epsilon);
      }, ["each"]),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tself.asRatios.collect { :each |\n\t\t\teach.asFraction(epsilon)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "asFractions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_asRatios_1(_self), _asFraction_1);
  }, ["self"]),
  "{ :self |\n\t\tself.asRatios.collect(asFraction:/1)\n\t}",
);

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
  "asRatios",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_asCents_1(_self), _centsToRatio_1);
  }, ["self"]),
  "{ :self |\n\t\tself.asCents.collect(centsToRatio:/1)\n\t}",
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

sl.addMethodToExistingType(
  "CentsTuning",
  "CentsTuning",
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
    } /* Temporaries */
    let _step = _solidus_2(1200, _self);
    /* Statements */
    return _CentsTuning_4(
      _plusSignPlusSign_2("ET-", _self),
      _plusSignPlusSign_2(
        _capitalize_1(_asWords_1(_self)),
        " tone equal-temperament",
      ),
      _asList_1(_nonemptyThenTo_3(0, _step, _hyphenMinus_2(1200, _step))),
      2,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet step = 1200 / self;\n\t\tCentsTuning(\n\t\t\t'ET-' ++ self,\n\t\t\tself.asWords.capitalize ++ ' tone equal-temperament',\n\t\t\t[0, step .. 1200 - step],\n\t\t\t2\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CentsTuning",
  "asCentsTuning",
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
  "asCentsTuning",
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
      _asCents_1(_self),
      _octave_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tCentsTuning(\n\t\t\tself.name,\n\t\t\tself.description,\n\t\t\tself.asCents,\n\t\t\tself.octave\n\t\t)\n\t}",
);
