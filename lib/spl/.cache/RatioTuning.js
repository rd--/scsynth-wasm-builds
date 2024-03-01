/* {- Requires: Fraction Tuning -} */

sl.addType(
  false,
  "RatioTuning",
  "RatioTuning",
  ["Object", "Tuning"],
  ["name", "description", "ratios", "octave", "cachedLimit"],
);

sl.copyTraitToType(
  "Object",
  "RatioTuning",
);

sl.copyTraitToType(
  "Tuning",
  "RatioTuning",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
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
    return _ampersand_2(_isRatioTuning_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_name_1(_self), _name_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(
            _equalsSign_2(_description_1(_self), _description_1(_anObject)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _equalsSign_2(_ratios_1(_self), _ratios_1(_anObject));
            },
          );
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isRatioTuning & {\n\t\t\tself.name = anObject.name & {\n\t\t\t\tself.description = anObject.description & {\n\t\t\t\t\tself.ratios = anObject.ratios\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "cents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_ratios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(_log2_1(_asFloat_1(_each)), 1200);
    });
  },
  "{ :self |\n\t\tself.ratios.collect { :each |\n\t\t\teach.asFloat.log2 * 1200\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "integers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _solidus_2(_ratios_1(_self), _reduce_2(_ratios_1(_self), _gcd_2)),
      _asInteger_1,
    );
  },
  "{ :self |\n\t\t(self.ratios / self.ratios.reduce(gcd:/2)).collect(asInteger:/1)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
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
    return _allSatisfy_2(_ratios_1(_self), _isFraction_1);
  },
  "{ :self |\n\t\tself.ratios.allSatisfy(isFraction:/1)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "limit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_cachedLimit_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cachedLimit_2(
        _self,
        _max_1(_collect_2(_ratios_1(_self), _primeLimit_1)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cachedLimit_1(_self);
    });
  },
  "{ :self |\n\t\tself.cachedLimit.ifNil {\n\t\t\tself.cachedLimit := self.ratios.collect(primeLimit:/1).max\n\t\t} {\n\t\t\tself.cachedLimit\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "limit",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _cachedLimit_2(_self, _anInteger);
    return _self;
  },
  "{ :self :anInteger |\n\t\tself.cachedLimit := anInteger;\n\t\tself\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
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
    return _size_1(_ratios_1(_self));
  },
  "{ :self |\n\t\tself.ratios.size\n\t}",
);

sl.addMethod(
  "String",
  "RatioTuning",
  "IntegerTuning",
  ["self", "description", "integers", "octave"],
  function (_self, _description, _integers, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _description, _integers, _octave";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _ratios = _collect_2(_integers, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Fraction_2(_each, _first_1(_integers));
    });
    /* Statements */
    return _RatioTuning_4(_self, _description, _ratios, _octave);
  },
  "{ :self :description :integers :octave |\n\t\tlet ratios = integers.collect { :each |\n\t\t\tFraction(each, integers.first)\n\t\t};\n\t\tRatioTuning(self, description, ratios, octave)\n\t}",
);

sl.addMethod(
  "String",
  "RatioTuning",
  "RatioTuning",
  ["self", "description", "ratios", "octave"],
  function (_self, _description, _ratios, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _description, _ratios, _octave";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_6(
      _newRatioTuning_0(),
      _self,
      _description,
      _ratios,
      _octave,
      null,
    );
  },
  "{ :self :description :ratios :octave |\n\t\tnewRatioTuning().initializeSlots(self, description, ratios, octave, nil)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RatioTuning",
  "RatioTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RatioTuning_4("Unnamed tuning", "Undescribed tuning", _self, 2);
  },
  "{ :self |\n\t\tRatioTuning('Unnamed tuning', 'Undescribed tuning', self, 2)\n\t}",
);
