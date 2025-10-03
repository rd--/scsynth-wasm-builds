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
  "{ :self :epsilon | collect(asRatios(self), { :each | asFraction(each,epsilon) }) }",
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
  "{ :self | collect(asRatios(self),asFraction:/1) }",
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
  "{ :self | collect(asCents(self),centsToRatio:/1) }",
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
  "{ :self | false }",
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
  "{ :self | size(cents(self)) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :name :description :cents :octave | initializeSlots(newCentsTuning(),name, description, cents, octave) }",
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
      _asList_1(_thenTo_3(0, _step, _hyphenMinus_2(1200, _step))),
      2,
    );
  }, ["self"]),
  "{ :self | let step = /(1200, self); CentsTuning(++('ET-', self), ++(capitalize(asWords(self)), ' tone equal-temperament'), asList(thenTo(0, step, -(1200, step))), 2) }",
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
  "{ :self | CentsTuning('Unnamed tuning', 'Undescribed tuning', self, 2) }",
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
  "{ :self | CentsTuning(name(self), description(self), asCents(self), octave(self)) }",
);
