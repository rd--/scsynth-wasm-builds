/* {- Requires: Cache Fraction Tuning -} */

sl.addType(
  false,
  "RatioTuning",
  "RatioTuning",
  ["Object", "Cache", "Tuning"],
  ["name", "description", "asRatios", "octave", "cache"],
);

sl.copyTraitToType(
  "Object",
  "RatioTuning",
);

sl.copyTraitToType(
  "Cache",
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
              return _equalsSign_2(_asRatios_1(_self), _asRatios_1(_anObject));
            },
          );
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isRatioTuning & {\n\t\t\tself.name = anObject.name & {\n\t\t\t\tself.description = anObject.description & {\n\t\t\t\t\tself.asRatios = anObject.asRatios\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
      return _asterisk_2(_log2_1(_asFloat_1(_each)), 1200);
    });
  },
  "{ :self |\n\t\tself.asRatios.collect { :each |\n\t\t\teach.asFloat.log2 * 1200\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
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
    return _asRatios_1(_self);
  },
  "{ :self |\n\t\tself.asRatios\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "asIntegers",
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
      _solidus_2(_asRatios_1(_self), _reduce_2(_asRatios_1(_self), _gcd_2)),
      _asInteger_1,
    );
  },
  "{ :self |\n\t\t(self.asRatios / self.asRatios.reduce(gcd:/2)).collect(asInteger:/1)\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "intervalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _asRatios_1(_self);
    /* Statements */
    return _withIndexCollect_2(_n, function (_p, _i) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(
        _rotatedLeft_2(_n, _hyphenMinus_2(_i, 1)),
        function (_q) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _q";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _octaveReduced_2(_solidus_2(_q, _p), _octave_1(_self));
        },
      );
    });
  },
  "{ :self |\n\t\tlet n = self.asRatios;\n\t\tn.withIndexCollect { :p :i |\n\t\t\tn.rotatedLeft(i - 1).collect { :q |\n\t\t\t\t(q / p).octaveReduced(self.octave)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "isConstantStructure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _intervalMatrix_1(_self);
    let _t = _transposed_1(_m);
    let _i = _reject_2(_nub_1(_flatten_1(_m)), _isOne_1);
    /* Statements */
    return _allSatisfy_2(
      _collect_2(_i, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _sum_1(_boole_1(_collect_2(_t, function (_c) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _c";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _includes_2(_c, _each);
        })));
      }),
      function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_k, 1);
      },
    );
  },
  "{ :self |\n\t\tlet m = self.intervalMatrix;\n\t\tlet t = m.transposed;\n\t\tlet i = m.flatten.nub.reject(isOne:/1);\n\t\ti.collect { :each |\n\t\t\tt.collect { :c |\n\t\t\t\tc.includes(each)\n\t\t\t}.boole.sum\n\t\t}.allSatisfy { :k |\n\t\t\tk = 1\n\t\t}\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
  "isPythagorean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_limit_1(_self), 3);
  },
  "{ :self |\n\t\tself.limit = 3\n\t}",
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
    return _allSatisfy_2(_asRatios_1(_self), _isFraction_1);
  },
  "{ :self |\n\t\tself.asRatios.allSatisfy(isFraction:/1)\n\t}",
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
    return _cached_3(_self, "limit", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _max_1(_primeLimit_1(_asRatios_1(_self)));
    });
  },
  "{ :self |\n\t\tself.cached('limit') {\n\t\t\tself.asRatios.primeLimit.max\n\t\t}\n\t}",
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
    _ifTrue_2(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_cache_1(_self), "limit", _anInteger);
    });
    return _self;
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger.ifTrue {\n\t\t\tself.cache::limit := anInteger\n\t\t};\n\t\tself\n\t}",
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
    return _size_1(_asRatios_1(_self));
  },
  "{ :self |\n\t\tself.asRatios.size\n\t}",
);

sl.addMethod(
  "RatioTuning",
  "RatioTuning",
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
    return _join_1([
      "RatioTuning(",
      _joinSeparatedBy_2(
        _collect_2([
          _name_1(_self),
          _description_1(_self),
          _asRatios_1(_self),
          _octave_1(_self),
        ], _storeString_1),
        ", ",
      ),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'RatioTuning(',\n\t\t\t\t[self.name, self.description, self.asRatios, self.octave].collect(storeString:/1).joinSeparatedBy(', '),\n\t\t\t')'\n\t\t].join\n\t}",
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
      _Record_0(),
    );
  },
  "{ :self :description :ratios :octave |\n\t\tnewRatioTuning().initializeSlots(self, description, ratios, octave, Record())\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "RatioTuning",
  "asRatioTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RatioTuning_4(
      "Unnamed tuning",
      "Undescribed tuning",
      _self,
      _Fraction_2(
        2,
        1,
      ),
    );
  },
  "{ :self |\n\t\tRatioTuning('Unnamed tuning', 'Undescribed tuning', self, 2/1)\n\t}",
);
