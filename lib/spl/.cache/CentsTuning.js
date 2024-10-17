sl.addType(
  false,
  "CentsTuning",
  "CentsTuning",
  ["Object", "Tuning"],
  ["name", "description", "asCents", "octave"],
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
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "asFractions",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_asRatios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asFraction_2(_each, _epsilon);
    });
  },
  "{ :self :epsilon |\n\t\tself.asRatios.collect { :each |\n\t\t\teach.asFraction(epsilon)\n\t\t}\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "asFractions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_asRatios_1(_self), _asFraction_1);
  },
  "{ :self |\n\t\tself.asRatios.collect(asFraction:/1)\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_asCents_1(_self), _centsToRatio_1);
  },
  "{ :self |\n\t\tself.asCents.collect(centsToRatio:/1)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_cents_1(_self));
  },
  "{ :self |\n\t\tself.cents.size\n\t}",
);

sl.addMethod(
  "CentsTuning",
  "CentsTuning",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "String",
  "CentsTuning",
  "CentsTuning",
  ["name", "description", "cents", "octave"],
  function (_name, _description, _cents, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _name, _description, _cents, _octave";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newCentsTuning_0(),
      _name,
      _description,
      _cents,
      _octave,
    );
  },
  "{ :name :description :cents :octave |\n\t\tnewCentsTuning().initializeSlots(name, description, cents, octave)\n\t}",
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
      throw new Error(errorMessage);
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

sl.extendTraitWithMethod(
  "Sequence",
  "CentsTuning",
  "asCentsTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CentsTuning_4("Unnamed tuning", "Undescribed tuning", _self, 2);
  },
  "{ :self |\n\t\tCentsTuning('Unnamed tuning', 'Undescribed tuning', self, 2)\n\t}",
);
