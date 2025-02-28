sl.addTrait("Tuning", "Tuning");

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asCents");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>asCents') }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asIntegers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asIntegers");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>asIntegers') }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asRatios");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>asRatios') }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>isRational");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>isRational') }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
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

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "octave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>octave");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>octave') }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_collect_2(_asIntegers_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_each, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _each;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_1(_primeFactors_1(_each));
      });
    }));
  },
  "{ :self | max(collect(asIntegers(self), { :each | if((=(each, 1)), { each }, { max(primeFactors(each)) }) })) }",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>size");
  },
  "{ :self | typeResponsibility(self,'@Tuning>>size') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      2,
      _asterisk_2(_solidus_2(_self, 100), _solidus_2(1, 12)),
    );
  },
  "{ :self | ^(2, (*((/(self, 100)), (/(1, 12))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(12, _log2_1(_self)), 100);
  },
  "{ :self | *((*(12, log2(self))), 100) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _centsToRatio_1);
  },
  "{ :self | collect(self,centsToRatio:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ratioToCents_1);
  },
  "{ :self | collect(self,ratioToCents:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Tuning",
  "integerLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    return _max_2(_n, _d);
  },
  "{ :self | let n = numerator(self); let d = denominator(self); max(n,d) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Tuning",
  "oddLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isEven_1(_n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n = _solidus_2(_n, 2);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isEven_1(_d);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _d = _solidus_2(_d, 2);
    });
    return _max_2(_n, _d);
  },
  "{ :self | let n = numerator(self); let d = denominator(self); whileTrue({ isEven(n) }, { n := /(n, 2) }); whileTrue({ isEven(d) }, { d := /(d, 2) }); max(n,d) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Tuning",
  "oddLimitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _thenTo_3(1, 3, _self);
    let _l = [];
    let _r = _tuplesDo_2([_n, _n], function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_l, _Fraction_2(_at_2(_each, 1), _at_2(_each, 2)));
    });
    /* Statements */
    return _sort_1(_octaveReduced_1(_nub_1(_l)));
  },
  "{ :self | let n = thenTo(1, 3, self); let l = []; let r = tuplesDo([n, n], { :each | add(l,Fraction(at(each, 1), at(each, 2))) }); sort(octaveReduced(nub(l))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "combinationProductSet",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_each), _anInteger);
    });
  },
  "{ :self :anInteger | eulerFokkerGenus(self, { :each | =(size(each), anInteger) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _combinations = _subsets_2(_self, _aBlock_1);
    let _products = _collect_2(_combinations, _product_1);
    let _normalized = _Fraction_2(_products, _min_1(_products));
    let _reduced = _octaveReduced_1(_normalized);
    /* Statements */
    return _sort_1(_nub_1(_reduced));
  },
  "{ :self :aBlock:/1 | let combinations = subsets(self,aBlock:/1); let products = collect(combinations,product:/1); let normalized = Fraction(products, min(products)); let reduced = octaveReduced(normalized); sort(nub(reduced)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    });
  },
  "{ :self | eulerFokkerGenus(self, { :each | true }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "kurenniemiNotation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chordDegrees = _solidus_2(_ratioToCents_1(_self), 100);
    let _upper = _plusSign_2(_max_1(_chordDegrees), 1);
    let _lineDegrees = [2, 5, 9, 12, 16, 19, 23];
    let _allLines = _takeWhile_2(
      _gather_2(_to_2(0, 3), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_each, 24), _lineDegrees);
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_each, _upper);
      },
    );
    let _staffLines = [19, 23, 26, 29, 33, 40, 43, 47, 50, 53];
    /* Statements */
    return _LineDrawing_2([
      _collect_2(_allLines, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL216 = _assertIsOfSize_2(
          _if_3(_includes_2(_staffLines, _y), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [0, 15];
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [5, 10];
          }),
          2,
        );
        let _x1 = _at_2(__SPL216, 1);
        let _x2 = _at_2(__SPL216, 2);
        /* Statements */
        return _Line_1([[_x1, _y], [_x2, _y]]);
      }),
      _collect_2(_chordDegrees, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _Ellipse_2([7.5, _y], [_solidus_2(4, 5), _solidus_2(2, 3)]);
      }),
    ], _Record_1([["height", 300]]));
  },
  "{ :self | let chordDegrees = /(ratioToCents(self), 100); let upper = +(max(chordDegrees), 1); let lineDegrees = [2, 5, 9, 12, 16, 19, 23]; let allLines = takeWhile(gather(to(0, 3), { :each | +(*(each, 24), lineDegrees) }), { :each | <=(each, upper) }); let staffLines = [19, 23, 26, 29, 33, 40, 43, 47, 50, 53]; LineDrawing([collect(allLines, { :y | let __SPL216 = assertIsOfSize(if(includes(staffLines,y), { [0, 15] }, { [5, 10] }), 2); let x1 = at(__SPL216, 1); let x2 = at(__SPL216, 2); Line([[x1, y], [x2, y]]) }), collect(chordDegrees, { :y | Ellipse([7.5, y], [/(4, 5), /(2, 3)]) })], Record([['height', 300]])) }",
);
