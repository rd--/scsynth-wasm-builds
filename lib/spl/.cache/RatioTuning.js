/*  Requires: Cache Fraction ScalaTuning Tuning  */

sl.addType(
  false,
  "RatioTuning",
  "RatioTuning",
  ["Object", "Cache", "Tuning"],
  ["name", "description", "ratios", "octave", "cache"],
);

sl.copyTraitMethodsToType(
  "Object",
  "RatioTuning",
);

sl.copyTraitMethodsToType(
  "Cache",
  "RatioTuning",
);

sl.copyTraitMethodsToType(
  "Tuning",
  "RatioTuning",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject | equalBy(self,anObject, =) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_ratios_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(_log2_1(_asFloat_1(_each)), 1200);
    });
  },
  "{ :self | collect(ratios(self), { :each | *(log2(asFloat(each)), 1200) }) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "asFractions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ratios_1(_self);
  },
  "{ :self | ratios(self) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "asIntegers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _solidus_2(_ratios_1(_self), _reduce_2(_ratios_1(_self), _gcd_2)),
      _asInteger_1,
    );
  },
  "{ :self | collect((/(ratios(self), reduce(ratios(self),gcd:/2))),asInteger:/1) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ratios_1(_self);
  },
  "{ :self | ratios(self) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isRatioTuning_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalByAtNamedSlots_4(_self, _anObject, [
        "name",
        "description",
        "ratios",
        "octave",
      ], _aBlock_2);
    });
  },
  "{ :self :anObject :aBlock:/2 | &(isRatioTuning(anObject), { equalByAtNamedSlots(self,anObject, ['name', 'description', 'ratios', 'octave'], aBlock:/2) }) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "intervalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _ratios_1(_self);
    /* Statements */
    return _withIndexCollect_2(_n, function (_p, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _rotatedLeft_2(_n, _hyphenMinus_2(_i, 1)),
        function (_q) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _q";
            throw new Error(errorMessage);
          } /* Statements */
          return _octaveReduced_2(_solidus_2(_q, _p), _octave_1(_self));
        },
      );
    });
  },
  "{ :self | let n = ratios(self); withIndexCollect(n, { :p :i | collect(rotatedLeft(n,-(i, 1)), { :q | octaveReduced((/(q, p)),octave(self)) }) }) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "isConstantStructure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _intervalMatrix_1(_self);
    let _t = _transposed_1(_m);
    let _i = _reject_2(_nub_1(_flatten_1(_m)), _isOne_1);
    /* Statements */
    return _allSatisfy_2(
      _collect_2(_i, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(_boole_1(_collect_2(_t, function (_c) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _c";
            throw new Error(errorMessage);
          } /* Statements */
          return _includes_2(_c, _each);
        })));
      }),
      function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_k, 1);
      },
    );
  },
  "{ :self | let m = intervalMatrix(self); let t = transposed(m); let i = reject(nub(flatten(m)),isOne:/1); allSatisfy(collect(i, { :each | sum(boole(collect(t, { :c | includes(c,each) }))) }), { :k | =(k, 1) }) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "isPythagorean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_primeLimit_1(_self), 3);
  },
  "{ :self | =(primeLimit(self), 3) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_ratios_1(_self), _isFraction_1);
  },
  "{ :self | allSatisfy(ratios(self),isFraction:/1) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "limit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primeLimit_1(_self);
  },
  "{ :self | primeLimit(self) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "primeLimit", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _max_1(_primeLimit_1(_ratios_1(_self)));
    });
  },
  "{ :self | cached(self, 'primeLimit', { max(primeLimit(ratios(self))) }) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "primeLimit",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_cache_1(_self), "primeLimit", _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "primeLimit: invalid limit");
    });
    return _self;
  },
  "{ :self :anInteger | if(isInteger(anInteger), { atPut(cache(self), 'primeLimit', anInteger) }, { error(self,'primeLimit: invalid limit') }); self }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_ratios_1(_self));
  },
  "{ :self | size(ratios(self)) }",
);

sl.addMethodToExistingType(
  "RatioTuning",
  "RatioTuning",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "RatioTuning(",
      _join_2(
        _collect_2([
          _name_1(_self),
          _description_1(_self),
          _ratios_1(_self),
          _octave_1(_self),
        ], _storeString_1),
        ", ",
      ),
      ")",
    ], "");
  },
  "{ :self | join(['RatioTuning(', join(collect([name(self), description(self), ratios(self), octave(self)],storeString:/1),', '), ')'],'') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RatioTuning",
  "RatioTuning",
  ["self", "description", "ratiosOrIntegers", "octave"],
  function (_self, _description, _ratiosOrIntegers, _octave) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _description, _ratiosOrIntegers, _octave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ratios = _ratiosOrIntegers;
    /* Statements */
    _ifFalse_2(_anySatisfy_2(_ratios, _isFraction_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ratios = _collect_2(_ratios, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(_each, _first_1(_ratios));
      });
    });
    return _initializeSlots_6(
      _newRatioTuning_0(),
      _self,
      _description,
      _ratios,
      _octave,
      _Record_0(),
    );
  },
  "{ :self :description :ratiosOrIntegers :octave | let ratios = ratiosOrIntegers; ifFalse(anySatisfy(ratios,isFraction:/1), { ratios := collect(ratios, { :each | Fraction(each, first(ratios)) }) }); initializeSlots(newRatioTuning(),self, description, ratios, octave, Record()) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RatioTuning",
  "RatioTuning",
  ["name", "description", "ratiosOrIntegers", "octave", "primeLimit"],
  function (_name, _description, _ratiosOrIntegers, _octave, _primeLimit) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _name, _description, _ratiosOrIntegers, _octave, _primeLimit";
      throw new Error(errorMessage);
    } /* Statements */
    return _primeLimit_2(
      _RatioTuning_4(_name, _description, _ratiosOrIntegers, _octave),
      _primeLimit,
    );
  },
  "{ :name :description :ratiosOrIntegers :octave :primeLimit | primeLimit(RatioTuning(name, description, ratiosOrIntegers, octave),primeLimit) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RatioTuning",
  "asRatioTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RatioTuning_4(
      "*Unnamed tuning*",
      "*Undescribed tuning*",
      _self,
      _Fraction_2(2n, 1n),
    );
  },
  "{ :self | RatioTuning('*Unnamed tuning*', '*Undescribed tuning*', self, Fraction(2L, 1L)) }",
);

sl.extendTypeOrTraitWithMethod(
  "ScalaTuning",
  "RatioTuning",
  "asRatioTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RatioTuning_5(
      _name_1(_self),
      _description_1(_self),
      _asRatios_1(_self),
      _octave_1(_self),
      _limit_1(_self),
    );
  },
  "{ :self | RatioTuning(name(self), description(self), asRatios(self), octave(self), limit(self)) }",
);
