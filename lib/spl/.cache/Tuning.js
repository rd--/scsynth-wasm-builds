sl.addTrait("Tuning", "Tuning");

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asCents");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asCents')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asIntegers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asIntegers");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asIntegers')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asRatios");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asRatios')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>isRational");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>isRational')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "limit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _primeLimit_1(_self);
  },
  "{ :self |\n\t\tself.primeLimit\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "octave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>octave");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>octave')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_collect_2(_asIntegers_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_each, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _each;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _max_1(_primeFactors_1(_each));
      });
    }));
  },
  "{ :self |\n\t\tself.asIntegers.collect { :each |\n\t\t\t(each = 1).if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.primeFactors.max\n\t\t\t}\n\t\t}.max\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>size");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>size')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      2,
      _asterisk_2(_solidus_2(_self, 100), _solidus_2(1, 12)),
    );
  },
  "{ :self |\n\t\t2 ^ ((self / 100) * (1 / 12))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(12, _log2_1(_self)), 100);
  },
  "{ :self |\n\t\t(12 * self.log2) * 100\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _centsToRatio_1);
  },
  "{ :self |\n\t\tself.collect(centsToRatio:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ratioToCents_1);
  },
  "{ :self |\n\t\tself.collect(ratioToCents:/1)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Tuning",
  "integerLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    return _max_2(_n, _d);
  },
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\tn.max(d)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Tuning",
  "oddLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isEven_1(_n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _n = _solidus_2(_n, 2);
    });
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isEven_1(_d);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _d = _solidus_2(_d, 2);
    });
    return _max_2(_n, _d);
  },
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\t{ n.isEven }.whileTrue {\n\t\t\tn := n / 2\n\t\t};\n\t\t{ d.isEven }.whileTrue {\n\t\t\td := d / 2\n\t\t};\n\t\tn.max(d)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Tuning",
  "oddLimitSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _thenTo_3(1, 3, _self);
    let _l = [];
    let _r = _tuplesDo_2([_n, _n], function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_l, _Fraction_2(_at_2(_each, 1), _at_2(_each, 2)));
    });
    /* Statements */
    return _sort_1(_octaveReduced_1(_nub_1(_l)));
  },
  "{ :self |\n\t\tlet n = (1, 3 .. self);\n\t\tlet l = [];\n\t\tlet r = [n, n].tuplesDo { :each |\n\t\t\tl.add(Fraction(each[1], each[2]))\n\t\t};\n\t\tl.nub.octaveReduced.sort\n\t}",
);

sl.addMethod(
  "List",
  "Tuning",
  "combinationProductSet",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_each), _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\tself.eulerFokkerGenus { :each |\n\t\t\teach.size = anInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _combinations = _subsets_2(_self, _aBlock_1);
    let _products = _collect_2(_combinations, _product_1);
    let _normalized = _Fraction_2(_products, _min_1(_products));
    let _reduced = _octaveReduced_1(_normalized);
    /* Statements */
    return _sort_1(_nub_1(_reduced));
  },
  "{ :self :aBlock:/1 |\n\t\tlet combinations = self.subsets(aBlock:/1);\n\t\tlet products = combinations.collect(product:/1);\n\t\tlet normalized = Fraction(products, products.min);\n\t\tlet reduced = normalized.octaveReduced;\n\t\treduced.nub.sort\n\t}",
);

sl.addMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    });
  },
  "{ :self |\n\t\tself.eulerFokkerGenus { :each |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Tuning",
  "kurenniemiNotation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chordDegrees = _solidus_2(_ratioToCents_1(_self), 100);
    let _upper = _plusSign_2(_max_1(_chordDegrees), 1);
    let _lineDegrees = [2, 5, 9, 12, 16, 19, 23];
    let _allLines = _takeWhile_2(
      _concatenation_1(_collect_2(_to_2(0, 3), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_each, 24), _lineDegrees);
      })),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym191 = _assertIsOfSize_2(
            _if_3(_includes_2(_staffLines, _y), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return [0, 15];
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return [5, 10];
            }),
            2,
          ),
          _x1 = _at_2(__genSym191, 1),
          _x2 = _at_2(__genSym191, 2);
        /* Statements */
        return _Line_1([[_x1, _y], [_x2, _y]]);
      }),
      _collect_2(_chordDegrees, function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Ellipse_2([7.5, _y], [_solidus_2(4, 5), _solidus_2(2, 3)]);
      }),
    ], Object.fromEntries([["height", 300]]));
  },
  "{ :self |\n\t\tlet chordDegrees = self.ratioToCents / 100;\n\t\tlet upper = chordDegrees.max + 1;\n\t\tlet lineDegrees = [2 5 9 12 16 19 23];\n\t\tlet allLines = 0:3.collect { :each |\n\t\t\teach * 24 + lineDegrees\n\t\t}.concatenation.takeWhile { :each |\n\t\t\teach <= upper\n\t\t};\n\t\tlet staffLines = [\n\t\t\t19 23 26 29 33\n\t\t\t40 43 47 50 53\n\t\t];\n\t\t[\n\t\t\tallLines.collect { :y |\n\t\t\t\tlet [x1, x2] = staffLines.includes(y).if {\n\t\t\t\t\t[0 15]\n\t\t\t\t} {\n\t\t\t\t\t[5 10]\n\t\t\t\t};\n\t\t\t\tLine([x1 y; x2 y])\n\t\t\t},\n\t\t\tchordDegrees.collect { :y |\n\t\t\t\tEllipse([7.5, y], [4 / 5, 2 / 3])\n\t\t\t}\n\t\t].LineDrawing(height: 300)\n\t}",
);
