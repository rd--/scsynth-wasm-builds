/* {- Requires: Tuning -} */

sl.addType(
  false,
  "CentsTuning",
  "CentsTuning",
  ["Object", "Tuning"],
  ["name", "description", "cents", "octave"],
);

sl.copyTraitToType(
  "Object",
  "CentsTuning",
);

sl.copyTraitToType(
  "Tuning",
  "CentsTuning",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "ratios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_cents_1(_self), _centsToRatio_1);
  },
  "{ :self |\n\t\tself.cents.collect(centsToRatio:/1)\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_cents_1(_self));
  },
  "{ :self |\n\t\tself.cents.size\n\t}",
);

sl.addMethod(
  "String",
  "CentsTuning",
  "CentsTuning",
  ["self", "description", "cents", "octave"],
  function (_self, _description, _cents, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _description, _cents, _octave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newCentsTuning_0(),
      _self,
      _description,
      _cents,
      _octave,
    );
  },
  "{ :self :description :cents :octave |\n\t\tnewCentsTuning().initializeSlots(self, description, cents, octave)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "CentsTuning",
  "equalTemperamentTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _step = _solidus_2(1200, _self);
    /* Statements */
    return _CentsTuning_4(
      _plusSignPlusSign_2("ET-", _self),
      _plusSignPlusSign_2(
        _capitalized_1(_asWords_1(_self)),
        " tone equal-temperament",
      ),
      _asList_1(_thenTo_3(0, _step, _hyphenMinus_2(1200, _step))),
      2,
    );
  },
  "{ :self |\n\t\tlet step = 1200 / self;\n\t\tCentsTuning(\n\t\t\t'ET-' ++ self,\n\t\t\tself.asWords.capitalized ++ ' tone equal-temperament',\n\t\t\t[0, step .. 1200 - step],\n\t\t\t2\n\t\t)\n\t}",
);
