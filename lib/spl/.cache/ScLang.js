sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _AmpDb_1);
  },
  "{ :self | collect(self,AmpDb:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "atExtending: not a sequence");
  },
  "{ :self :index | error(self,'atExtending: not a sequence') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _DbAmp_1);
  },
  "{ :self | collect(self,DbAmp:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "extendTo: not a sequence");
  },
  "{ :self :size | error(self,'extendTo: not a sequence') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "linLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _linLin_5(_each, _inMin, _inMax, _outMin, _outMax);
    });
  },
  "{ :self :inMin :inMax :outMin :outMax | collect(self, { :each | linLin(each,inMin, inMax, outMin, outMax) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _MidiCps_1);
  },
  "{ :self | collect(self,MidiCps:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "powersetBitwise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_bitShift_2(1, _size_1(_self)), 1);
    /* Statements */
    return _collect_2(_to_2(0, _k), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _index = 0;
      /* Statements */
      return _select_2(_self, function (_elem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _elem";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _equalsSign_2(_bitAt_2(_each, _index), 1);
      });
    });
  },
  "{ :self | let k = -(bitShift(1,size(self)), 1); collect(to(0, k), { :each | let index = 0; select(self, { :elem | index := +(index, 1); =(bitAt(each,index), 1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "sizeForExtending: not a sequence");
  },
  "{ :self | error(self,'sizeForExtending: not a sequence') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Magnitude",
  "ScLang",
  "exclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_lessThanSign_2(_lo, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_self, _hi);
    });
  },
  "{ :self :lo :hi | &(<(lo, self), { <(self, hi) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Magnitude",
  "ScLang",
  "inclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_lessThanSignEqualsSign_2(_lo, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSignEqualsSign_2(_self, _hi);
    });
  },
  "{ :self :lo :hi | &(<=(lo, self), { <=(self, hi) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "ampComp",
  ["freq", "root", "exp"],
  function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_solidus_2(_root, _freq), _exp);
  },
  "{ :freq :root :exp | ^((/(root, freq)), exp) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_log10_1(_self), 20);
  },
  "{ :self | *(log10(self), 20) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "coin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_nextRandomFloat_1(_system), _self);
  },
  "{ :self | <(nextRandomFloat(system), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CentsRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MidiRatio_1(_solidus_2(_self, 100));
  },
  "{ :self | MidiRatio((/(self, 100))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CpsMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_log2_1(_asterisk_2(_self, _solidus_2(1, 440))), 12),
      69,
    );
  },
  "{ :self | +(*(log2((*(self, (/(1, 440))))), 12), 69) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CpsOct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_log2_1(_asterisk_2(_self, _solidus_2(1, 440))), 4.75);
  },
  "{ :self | +(log2((*(self, (/(1, 440))))), 4.75) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  },
  "{ :self | *(*(self, self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "curveLin",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_lessThanSign_2(_abs_1(_curve), 0.001), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _asterisk_2(
              _solidus_2(
                _hyphenMinus_2(_self, _inMin),
                _hyphenMinus_2(_inMax, _inMin),
              ),
              _hyphenMinus_2(_outMax, _outMin),
            ),
            _outMin,
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _grow = _exp_1(_curve);
          let _a = _solidus_2(
            _hyphenMinus_2(_inMax, _inMin),
            _hyphenMinus_2(1.0, _grow),
          );
          let _b = _plusSign_2(_inMin, _a);
          /* Statements */
          return _plusSign_2(
            _solidus_2(
              _asterisk_2(
                _log_1(_solidus_2(_hyphenMinus_2(_b, _self), _a)),
                _hyphenMinus_2(_outMax, _outMin),
              ),
              _curve,
            ),
            _outMin,
          );
        });
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { if((<(abs(curve), 0.001)), { +(*(/((-(self, inMin)), (-(inMax, inMin))), (-(outMax, outMin))), outMin) }, { let grow = exp(curve); let a = /(-(inMax, inMin), (-(1.0, grow))); let b = +(inMin, a); +(/(*(log((/((-(b, self)), a))), (-(outMax, outMin))), curve), outMin) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _asterisk_2(_self, 0.05));
  },
  "{ :self | ^(10, (*(self, 0.05))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "DifSqr",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(_self, _self),
      _asterisk_2(_aNumber, _aNumber),
    );
  },
  "{ :self :aNumber | -((*(self, self)), (*(aNumber, aNumber))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Distort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _plusSign_2(1, _abs_1(_self)));
  },
  "{ :self | /(self, (+(1, abs(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "expExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _circumflexAccent_2(
            _solidus_2(_outMax, _outMin),
            _solidus_2(
              _log_1(_solidus_2(_self, _inMin)),
              _log_1(_solidus_2(_inMax, _inMin)),
            ),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { *(^((/(outMax, outMin)), (/(log((/(self, inMin))), log((/(inMax, inMin)))))), outMin) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "expLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(
            _solidus_2(
              _log_1(_solidus_2(_self, _inMin)),
              _log_1(_solidus_2(_inMax, _inMin)),
            ),
            _hyphenMinus_2(_outMax, _outMin),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { +(*(/(log((/(self, inMin))), log((/(inMax, inMin)))), (-(outMax, outMin))), outMin) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "expRand",
  ["self", "upperBound"],
  function (_self, _upperBound) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _upperBound";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_system, 1, _linExpFromTo_2(_self, _upperBound), []);
  },
  "{ :self :upperBound | randomReal(system,1, linExpFromTo(self,upperBound), []) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "foldOnce",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_self, _hi), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(_plusSign_2(_hi, _hi), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSign_2(_self, _lo), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_plusSign_2(_lo, _lo), _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_self, _hi), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lo;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _self;
        });
      });
    });
  },
  "{ :self :lo :hi | if((>=(self, hi)), { -(+(hi, hi), self) }, { if((<(self, lo)), { -(+(lo, lo), self) }, { if((=(self, hi)), { lo }, { self }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "fold",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(_greaterThanSignEqualsSign_2(_self, _lo), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, _hi);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _hyphenMinus_2(_self, _lo);
        let _range = _hyphenMinus_2(_hi, _lo);
        let _twiceRange = _plusSign_2(_range, _range);
        let _c = _hyphenMinus_2(
          _x,
          _asterisk_2(_twiceRange, _floor_1(_solidus_2(_x, _twiceRange))),
        );
        /* Statements */
        _ifTrue_2(_greaterThanSignEqualsSign_2(_c, _range), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _c = _hyphenMinus_2(_twiceRange, _c);
        });
        return _plusSign_2(_c, _lo);
      },
    );
  },
  "{ :self :lo :hi | if((&(>=(self, lo), { <(self, hi) })), { self }, { let x = -(self, lo); let range = -(hi, lo); let twiceRange = +(range, range); let c = -(x, (*(twiceRange, floor((/(x, twiceRange)))))); ifTrue((>=(c, range)), { c := -(twiceRange, c) }); +(c, lo) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Hypotenuse",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(_asterisk_2(_self, _self), _asterisk_2(_aNumber, _aNumber)),
    );
  },
  "{ :self :aNumber | sqrt((+((*(self, self)), (*(aNumber, aNumber))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "HypotenuseApproximate",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_abs_1(_self), _abs_1(_aNumber)),
      _asterisk_2(
        _hyphenMinus_2(_sqrt_1(2), 1),
        _min_2(_abs_1(_self), _abs_1(_aNumber)),
      ),
    );
  },
  "{ :self :aNumber | -(+(abs(self), abs(aNumber)), (*((-(sqrt(2), 1)), min(abs(self),abs(aNumber))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_lessThanSign_2(_abs_1(_curve), 0.001), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _asterisk_2(
              _solidus_2(
                _hyphenMinus_2(_self, _inMin),
                _hyphenMinus_2(_inMax, _inMin),
              ),
              _hyphenMinus_2(_outMax, _outMin),
            ),
            _outMin,
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _grow = _exp_1(_curve);
          let _a = _solidus_2(
            _hyphenMinus_2(_outMax, _outMin),
            _hyphenMinus_2(1.0, _grow),
          );
          let _b = _plusSign_2(_outMin, _a);
          let _scaled = _solidus_2(
            _hyphenMinus_2(_self, _inMin),
            _hyphenMinus_2(_inMax, _inMin),
          );
          /* Statements */
          return _hyphenMinus_2(
            _b,
            _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
          );
        });
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { if((<(abs(curve), 0.001)), { +(*(/((-(self, inMin)), (-(inMax, inMin))), (-(outMax, outMin))), outMin) }, { let grow = exp(curve); let a = /(-(outMax, outMin), (-(1.0, grow))); let b = +(outMin, a); let scaled = /((-(self, inMin)), (-(inMax, inMin))); -(b, (*(a, (^(grow, scaled))))) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _circumflexAccent_2(
            _solidus_2(_outMax, _outMin),
            _solidus_2(
              _hyphenMinus_2(_self, _inMin),
              _hyphenMinus_2(_inMax, _inMin),
            ),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { *(^((/(outMax, outMin)), (/((-(self, inMin)), (-(inMax, inMin))))), outMin) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linExpFromTo",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _lo,
      _exp_1(_asterisk_2(_log_1(_solidus_2(_hi, _lo)), _self)),
    );
  },
  "{ :self :lo :hi | *(lo, exp((*(log((/(hi, lo))), self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSignEqualsSign_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(
            _solidus_2(
              _hyphenMinus_2(_self, _inMin),
              _hyphenMinus_2(_inMax, _inMin),
            ),
            _hyphenMinus_2(_outMax, _outMin),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax | if((<=(self, inMin)), { outMin }, { if((>=(self, inMax)), { outMax }, { +(*(/((-(self, inMin)), (-(inMax, inMin))), (-(outMax, outMin))), outMin) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      440,
      _circumflexAccent_2(
        2,
        _asterisk_2(_hyphenMinus_2(_self, 69), _solidus_2(1, 12)),
      ),
    );
  },
  "{ :self | *(440, (^(2, (*((-(self, 69)), (/(1, 12))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MidiRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2.0, _asterisk_2(_self, _solidus_2(1, 12)));
  },
  "{ :self | ^(2.0, (*(self, (/(1, 12))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  },
  "{ :self :mul :add | +(*(self, mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(0, _self);
  },
  "{ :self | -(0, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "nextPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextPowerOf_2(_self, 2);
  },
  "{ :self | nextPowerOf(self,2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "nextPowerOf",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _exponent = _ceiling_1(_log_2(_self, _base));
    /* Statements */
    return _circumflexAccent_2(_base, _exponent);
  },
  "{ :self :base | let exponent = ceiling(log(self,base)); ^(base, exponent) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "OctCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      440,
      _circumflexAccent_2(2, _hyphenMinus_2(_self, 4.75)),
    );
  },
  "{ :self | *(440, (^(2, (-(self, 4.75))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "previousPowerOf",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _base,
      _hyphenMinus_2(_ceiling_1(_log_2(_self, _base)), 1),
    );
  },
  "{ :self :base | ^(base, (-(ceiling(log(self,base)), 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "RatioCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_RatioMidi_1(_self), 100);
  },
  "{ :self | *(RatioMidi(self), 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "RatioMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(12, _log2_1(_self));
  },
  "{ :self | *(12, log2(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _self);
  },
  "{ :self | /(1, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  },
  "{ :self | *(self, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ScLang",
  "asBinaryDigits",
  ["self", "numDigits"],
  function (_self, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numDigits";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(0, _hyphenMinus_2(_numDigits, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _addFirst_2(_answer, _bitAnd_2(_bitShiftRight_2(_self, _i), 1));
    });
    return _answer;
  },
  "{ :self :numDigits | let answer = []; toDo(0, -(numDigits, 1), { :i | addFirst(answer,bitAnd(bitShiftRight(self,i),1)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "exclamationMarkPlusSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sum_1(_exclamationMark_2(_self, _anInteger));
  },
  "{ :self :anInteger | Sum((!(self, anInteger))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "exclamationMarkAsterisk",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_exclamationMark_2(_self, _anInteger));
  },
  "{ :self :anInteger | product((!(self, anInteger))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self :index | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_2(_size, _self);
  },
  "{ :self :size | List(size, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _item;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _instill_4(_asCollection_1(_self), _index, _item, _default);
    });
  },
  "{ :self :index :item :default | if((=(index, 1)), { item }, { instill(asCollection(self),index, item, default) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _default;
    });
  },
  "{ :self :index :default | if((=(index, 1)), { self }, { default }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asRandomTable",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _if_3(_equalsSign_2(_size, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _resample_2(_self, _size);
    });
    let _b = _normalizeRange_3(_integrate_1(_a), 1, _size);
    /* Statements */
    return _collect_2(_to_2(1, _size), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _hyphenMinus_2(_indexOfInBetween_2(_b, _index), 1),
        _size,
      );
    });
  },
  "{ :self :size | let a = if((=(size, size(self))), { self }, { resample(self,size) }); let b = normalizeRange(integrate(a),1, size); collect(to(1, size), { :index | /(-(indexOfInBetween(b,index), 1), size) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asRandomTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asRandomTable_2(_self, _size_1(_self));
  },
  "{ :self | asRandomTable(self,size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asWavetable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _asterisk_2(_size_1(_self), 2);
    let _answer = _ofSize_2(_species_1(_self), _size);
    let _index = 1;
    /* Statements */
    _do_2(_upOrDownTo_2(1, _size_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _e1 = _at_2(_self, _each);
      let _e2 = _if_3(_equalsSign_2(_each, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _plusSign_2(_each, 1));
      });
      /* Statements */
      _atPut_3(_answer, _index, _hyphenMinus_2(_asterisk_2(2, _e1), _e2));
      _atPut_3(_answer, _plusSign_2(_index, 1), _hyphenMinus_2(_e2, _e1));
      return _index = _plusSign_2(_index, 2);
    });
    return _answer;
  },
  "{ :self | let size = *(size(self), 2); let answer = ofSize(species(self),size); let index = 1; do(upOrDownTo(1, size(self)), { :each | let e1 = at(self, each); let e2 = if((=(each, size(self))), { 0 }, { at(self, +(each, 1)) }); atPut(answer, index, -(*(2, e1), e2)); atPut(answer, +(index, 1), -(e2, e1)); index := +(index, 2) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atAllBlend",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _atBlend_2(_self, _each);
    });
  },
  "{ :self :indices | collect(indices, { :each | atBlend(self,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atBlend",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indexMin = _hyphenMinus_2(_roundUpTo_2(_index, 1), 1);
    /* Statements */
    return _blend_3(
      _atPin_2(_self, _indexMin),
      _atPin_2(_self, _plusSign_2(_indexMin, 1)),
      _abs_1(_hyphenMinus_2(_index, _indexMin)),
    );
  },
  "{ :self :index | let indexMin = -(roundUpTo(index,1), 1); blend(atPin(self,indexMin),atPin(self,+(indexMin, 1)), abs((-(index, indexMin)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atWrap_2(_self, _index);
  },
  "{ :self :index | atWrap(self,index) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_segment, _each);
      return _ifTrue_2(
        _greaterThanSignEqualsSign_2(_size_1(_segment), _groupSize),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _add_2(_answer, _segment);
          return _segment = [];
        },
      );
    });
    _ifTrue_2(_greaterThanSign_2(_size_1(_segment), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _segment);
    });
    return _answer;
  },
  "{ :self :groupSize | let answer = []; let segment = []; do(self, { :each | add(segment,each); ifTrue((>=(size(segment), groupSize)), { add(answer,segment); segment := [] }) }); ifTrue((>(size(segment), 0)), { add(answer,segment) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "degreeToKey",
  ["self", "scale", "stepsPerOctave"],
  function (_self, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _stepsPerOctave";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_scaleDegree) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _scaleDegree";
        throw new Error(errorMessage);
      } /* Statements */
      return _degreeToKey_3(_scaleDegree, _scale, _stepsPerOctave);
    });
  },
  "{ :self :scale :stepsPerOctave | collect(self, { :scaleDegree | degreeToKey(scaleDegree,scale, stepsPerOctave) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "differentiate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _prev = 0;
    let _index = 1;
    let _answer = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_answer, _index, _hyphenMinus_2(_each, _prev));
      _prev = _each;
      return _index = _plusSign_2(_index, 1);
    });
    return _answer;
  },
  "{ :self | let prev = 0; let index = 1; let answer = new(species(self),size(self)); do(self, { :each | atPut(answer, index, -(each, prev)); prev := each; index := +(index, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(1, _size, _species_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atWrap_2(_self, _index);
    });
  },
  "{ :self :size | toAsCollect(1, size, species(self), { :index | atWrap(self,index) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "extendToBeOfEqualSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _extendTo_2(_each, _size);
    });
  },
  "{ :self | let size = max(collect(self,sizeForExtending:/1)); collect(self, { :each | extendTo(each,size) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "flop",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _multiChannelExpand_1(_self);
  },
  "{ :self | multiChannelExpand(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "indexOfInBetween",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i = _binaryDetectIndex_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_each, _aNumber);
      });
      /* Statements */
      return _if_3(_greaterThanSign_2(_i, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_i, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _i;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _a = _at_2(_self, _hyphenMinus_2(_i, 1));
          let _b = _at_2(_self, _i);
          let _div = _hyphenMinus_2(_b, _a);
          /* Statements */
          return _if_3(_equalsSign_2(_div, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              _plusSign_2(_solidus_2(_hyphenMinus_2(_aNumber, _a), _div), _i),
              1,
            );
          });
        });
      });
    });
  },
  "{ :self :aNumber | if(isEmpty(self), { nil }, { let i = binaryDetectIndex(self, { :each | >(each, aNumber) }); if((>(i, size(self))), { size(self) }, { if((=(i, 1)), { i }, { let a = at(self, -(i, 1)); let b = at(self, i); let div = -(b, a); if((=(div, 0)), { i }, { -(+((/((-(aNumber, a)), div)), i), 1) }) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _timesRepeat_2(_hyphenMinus_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _default);
    });
    _atPut_3(_answer, _index, _item);
    return _answer;
  },
  "{ :self :index :item :default | let answer = copy(self); timesRepeat((-(index, size(self))), { add(answer,default) }); atPut(answer, index, item); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "integrate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _sum = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _sum = _plusSign_2(_sum, _each);
      return _add_2(_answer, _sum);
    });
    return _answer;
  },
  "{ :self | let answer = []; let sum = 0; do(self, { :each | sum := +(sum, each); add(answer,sum) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keep",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2(_self, _n);
  },
  "{ :self :n | first(self,n) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keepAtMost",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_n, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _keep_2(_self, _n);
    });
  },
  "{ :self :n | if((>(n, size(self))), { self }, { keep(self,n) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keepLast",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _copyFromTo_3(_self, _hyphenMinus_2(_size, _n), _size);
  },
  "{ :self :n | let size = size(self); copyFromTo(self,-(size, n), size) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _collect_2(_to_2(1, _k), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atExtending_2(_each, _index);
      });
    });
  },
  "{ :self | let k = max(collect(self,sizeForExtending:/1)); collect(to(1, k), { :index | collect(self, { :each | atExtending(each,index) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _default;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _index);
    });
  },
  "{ :self :index :default | if((>(index, size(self))), { default }, { at(self, index) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "pyramid",
  ["self", "patternType"],
  function (_self, _patternType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _patternType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _lastIndex = _size_1(_self);
    /* Statements */
    _ifTrue_2(_equalsSign_2(_patternType, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _lastIndex, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _downToDo_3(_lastIndex, 1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _downToDo_3(_lastIndex, 1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _lastIndex, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(1, _lastIndex, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
      return _toByDo_4(_hyphenMinus_2(_lastIndex, 1), 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 6), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _toByDo_4(_lastIndex, 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
      });
      return _toDo_3(2, _lastIndex, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
      });
    });
    _ifTrue_2(_equalsSign_2(_patternType, 7), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _toByDo_4(_lastIndex, 1, -1, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
      return _toDo_3(2, _lastIndex, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
      });
    });
    return _newFrom_2(_species_1(_self), _answer);
  },
  "{ :self :patternType | let answer = []; let lastIndex = size(self); ifTrue((=(patternType, 1)), { toDo(1, lastIndex, { :i | addAll(answer,copyFromTo(self,1, i)) }) }); ifTrue((=(patternType, 2)), { downToDo(lastIndex, 1, { :i | addAll(answer,copyFromTo(self,i, lastIndex)) }) }); ifTrue((=(patternType, 3)), { downToDo(lastIndex, 1, { :i | addAll(answer,copyFromTo(self,1, i)) }) }); ifTrue((=(patternType, 4)), { toDo(1, lastIndex, { :i | addAll(answer,copyFromTo(self,i, lastIndex)) }) }); ifTrue((=(patternType, 5)), { toDo(1, lastIndex, { :i | addAll(answer,copyFromTo(self,1, i)) }); toByDo((-(lastIndex, 1)), 1, -1, { :i | addAll(answer,copyFromTo(self,1, i)) }) }); ifTrue((=(patternType, 6)), { toByDo(lastIndex, 1, -1, { :i | addAll(answer,copyFromTo(self,i, lastIndex)) }); toDo(2, lastIndex, { :i | addAll(answer,copyFromTo(self,i, lastIndex)) }) }); ifTrue((=(patternType, 7)), { toByDo(lastIndex, 1, -1, { :i | addAll(answer,copyFromTo(self,1, i)) }); toDo(2, lastIndex, { :i | addAll(answer,copyFromTo(self,1, i)) }) }); newFrom(species(self),answer) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "scramble",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shuffled_1(_self);
  },
  "{ :self | shuffled(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "separate",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _adjacentPairsDo_2(_self, function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_segment, _a);
      return _ifTrue_2(_aBlock_2(_a, _b), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _segment);
        return _segment = [];
      });
    });
    _ifTrue_2(_notEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_segment, _last_1(_self));
    });
    _add_2(_answer, _segment);
    return _answer;
  },
  "{ :self :aBlock:/2 | let answer = []; let segment = []; adjacentPairsDo(self, { :a :b | add(segment,a); ifTrue(aBlock(a, b), { add(answer,segment); segment := [] }) }); ifTrue(notEmpty(self), { add(segment,last(self)) }); add(answer,segment); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "shift",
  ["self", "count", "item"],
  function (_self, _count, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fill = _List_2(_abs_1(_count), _item);
    let _remain = _drop_2(_self, _negated_1(_count));
    /* Statements */
    return _if_3(_isNegative_1(_count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(_remain, _fill);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(_fill, _remain);
    });
  },
  "{ :self :count :item | let fill = List(abs(count), item); let remain = drop(self,negated(count)); if(isNegative(count), { ++(remain, fill) }, { ++(fill, remain) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "similarity",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _similarity_3(_self, _other, _equalsSign_2);
  },
  "{ :self :other | similarity(self,other, =) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "similarity",
  ["self", "other", "equalityBlock:/2"],
  function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxDistance = _max_2(_size_1(_self), _size_1(_other));
    /* Statements */
    return _if_3(_greaterThanSign_2(_maxDistance, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        1,
        _solidus_2(
          _levenshteinDistance_3(_self, _other, _equalityBlock_2),
          _maxDistance,
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    });
  },
  "{ :self :other :equalityBlock:/2 | let maxDistance = max(size(self),size(other)); if((>(maxDistance, 0)), { -(1, (/(levenshteinDistance(self,other, equalityBlock:/2), maxDistance))) }, { 1 }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  },
  "{ :self | size(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "slide",
  ["self", "windowSize", "stepSize"],
  function (_self, _windowSize, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _stepSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _concatenation_1(_partition_3(_self, _windowSize, _stepSize));
  },
  "{ :self :windowSize :stepSize | concatenation(partition(self,windowSize, stepSize)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "stutter",
  ["self", "repeatCount"],
  function (_self, _repeatCount) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _repeatCount";
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateEach_2(_self, _repeatCount);
  },
  "{ :self :repeatCount | duplicateEach(self,repeatCount) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "tableRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atBlend_2(_self, _randomReal_4(_system, 1, _size_1(_self), []));
  },
  "{ :self | atBlend(self,randomReal(system,1, size(self), [])) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "waveFill",
  ["self", "aBlock:/3", "start", "end"],
  function (_self, _aBlock_3, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _aBlock_3, _start, _end";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(_greaterThanSign_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _index = 1;
      let _next = _start;
      let _size = _size_1(_self);
      let _step = _solidus_2(_hyphenMinus_2(_end, _start), _size);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _size);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_self, _index, _aBlock_3(_next, _at_2(_self, _index), _index));
        _next = _plusSign_2(_next, _step);
        return _index = _plusSign_2(_index, 1);
      });
    });
  },
  "{ :self :aBlock:/3 :start :end | ifTrue((>(size(self), 0)), { let index = 1; let next = start; let size = size(self); let step = /((-(end, start)), size); whileTrue({ <=(i, size) }, { atPut(self, index, aBlock(next, at(self, index), index)); next := +(next, step); index := +(index, 1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "wrapExtend",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(1, _size, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _atWrap_2(_self, _index));
    });
    return _answer;
  },
  "{ :self :size | let answer = []; toDo(1, size, { :index | add(answer,atWrap(self,index)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "ScLang",
  "kr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _kr_1);
  },
  "{ :self | collect(self,kr:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    let _size = _max_1(_collect_2(_values, _sizeForExtending_1));
    let _places = _collect_2(_multiChannelExpand_1(_values), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _withIndexCollect_2(_each, function (_item, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _item, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(_at_2(_keys, _index), _item);
      });
    });
    /* Statements */
    return _collect_2(_places, _asRecord_1);
  },
  "{ :self | let keys = keys(self); let values = values(self); let size = max(collect(values,sizeForExtending:/1)); let places = collect(multiChannelExpand(values), { :each | withIndexCollect(each, { :item :index | ->(at(keys, index), item) }) }); collect(places,asRecord:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.clump(_self, _groupSize);
  },
  "{ :self :groupSize | <primitive: return sc.clump(_self, _groupSize);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  },
  "{ :self :mul :add | +(*(self, mul), add) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "degreeToKey",
  ["self", "scale", "stepsPerOctave"],
  function (_self, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _stepsPerOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scaleDegree = _rounded_1(_self);
    let _accidental = _asterisk_2(_hyphenMinus_2(_self, _scaleDegree), 10);
    let _baseKey = _plusSign_2(
      _asterisk_2(
        _stepsPerOctave,
        _quotientBy_3(_scaleDegree, _size_1(_scale), _floor_1),
      ),
      _atWrap_2(_scale, _plusSign_2(_scaleDegree, 1)),
    );
    /* Statements */
    return _if_3(_equalsSign_2(_accidental, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _baseKey;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _baseKey,
        _asterisk_2(_accidental, _solidus_2(_stepsPerOctave, 12.0)),
      );
    });
  },
  "{ :self :scale :stepsPerOctave | let scaleDegree = rounded(self); let accidental = *((-(self, scaleDegree)), 10); let baseKey = +((*(stepsPerOctave, (quotientBy(scaleDegree,size(scale), floor:/1)))), atWrap(scale,+(scaleDegree, 1))); if((=(accidental, 0)), { baseKey }, { +(baseKey, (*(accidental, (/(stepsPerOctave, 12.0))))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "geom",
  ["self", "start", "grow"],
  function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      throw new Error(errorMessage);
    } /* Statements */
    return _geometricSeries_3(_self, _start, _grow);
  },
  "{ :self :start :grow | geometricSeries(self,start, grow) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "SoftClip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_hyphenMinus_2(_abs_1(_self), 0.25), _self);
    });
  },
  "{ :self | if((<=(abs(self), 0.5)), { self }, { /((-(abs(self), 0.25)), self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "lessThanSignGreaterThanSign",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(_aBlock_1(_x));
    });
  },
  "{ :self:/1 :aBlock:/1 | { :x | self(aBlock(x)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "block",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(_return_1);
    });
  },
  "{ :self:/1 | valueWithReturn({ :return:/1 | self(return:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "plusSignPlusSignQuestionMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(_anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSignPlusSign_2(_self, _value_1(_anObject));
    });
  },
  "{ :self :anObject | ifNil(anObject, { self }, { ++(self, value(anObject)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "plusSignSolidusPlusSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_plusSignPlusSign_2(_self, "/"), _aString);
  },
  "{ :self :aString | ++(++(self, '/'), aString) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "ascii",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_asciiByteArray_1(_self));
  },
  "{ :self | asList(asciiByteArray(self)) }",
);
