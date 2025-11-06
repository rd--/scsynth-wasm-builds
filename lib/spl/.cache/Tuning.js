sl.addTrait("Tuning", "Tuning");

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asCents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asCents");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asCents')\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asIntegers",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asIntegers");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asIntegers')\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "asRatios",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asRatios");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asRatios')\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "isRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>isRational");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>isRational')\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "isTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "octave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>octave");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>octave')\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "primeLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(
      _collect_2(
        _asIntegers_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_each, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _each;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _max_1(_primeFactors_1(_each));
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.asIntegers.collect { :each |\n\t\t\t(each = 1).if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.primeFactors.max\n\t\t\t}\n\t\t}.max\n\t}",
);

sl.addMethodToExistingTrait(
  "Tuning",
  "Tuning",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>size");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>size')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Tuning",
  "isTuning",
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

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "centsToRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _solidus_2(_self, 1200));
  }, ["self"]),
  "{ :self |\n\t\t2 ^ (self / 1200)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "millioctavesToRatio",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _solidus_2(_n, 1000));
  }, ["n"]),
  "{ :n |\n\t\t2 ^ (n / 1000)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "ratioToMillioctaves",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_log_2(_n, 2), 1000);
  }, ["n"]),
  "{ :n |\n\t\tn.log(2) * 1000\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "ratioToCents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(12, _log2_1(_self)), 100);
  }, ["self"]),
  "{ :self |\n\t\t(12 * self.log2) * 100\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "ratioToSavarts",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_log_2(_n, 10), 1000);
  }, ["n"]),
  "{ :n |\n\t\tn.log(10) * 1000\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "savartsToCents",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_n, _solidus_2(1.2, _log_2(2, 10)));
  }, ["n"]),
  "{ :n |\n\t\tn * (1.2 / 2.log(10))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Tuning",
  "savartsToRatio",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _solidus_2(_n, 1000));
  }, ["n"]),
  "{ :n |\n\t\t10 ^ (n / 1000)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Tuning",
  "centsToRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _centsToRatio_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(centsToRatio:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Tuning",
  "ratioToCents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ratioToCents_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ratioToCents:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Tuning",
  "integerLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    return _max_2(_n, _d);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\tn.max(d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Tuning",
  "oddLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEven_1(_n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n = _solidus_2(_n, 2);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEven_1(_d);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _d = _solidus_2(_d, 2);
      }, []),
    );
    return _max_2(_n, _d);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\t{ n.isEven }.whileTrue {\n\t\t\tn := n / 2\n\t\t};\n\t\t{ d.isEven }.whileTrue {\n\t\t\td := d / 2\n\t\t};\n\t\tn.max(d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Tuning",
  "oddLimitSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _toBy_3(1, _self, 2);
    let _l = [];
    let _r = _tuplesDo_2(
      [_n, _n],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_l, _Fraction_2(_at_2(_each, 1), _at_2(_each, 2)));
      }, ["each"]),
    );
    /* Statements */
    return _sort_1(_octaveReduce_1(_nub_1(_l)));
  }, ["self"]),
  "{ :self |\n\t\tlet n = 1.toBy(self, 2);\n\t\tlet l = [];\n\t\tlet r = [n, n].tuplesDo { :each |\n\t\t\tl.add(Fraction(each[1], each[2]))\n\t\t};\n\t\tl.nub.octaveReduce.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "combinationProductSet",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_each), _anInteger);
      }, ["each"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.eulerFokkerGenus { :each |\n\t\t\teach.size = anInteger\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _combinations = _subsets_2(_self, _aBlock_1);
    let _products = _collect_2(_combinations, _product_1);
    let _normalized = _Fraction_2(_products, _min_1(_products));
    let _reduced = _octaveReduce_1(_normalized);
    /* Statements */
    return _sort_1(_nub_1(_reduced));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet combinations = self.subsets(aBlock:/1);\n\t\tlet products = combinations.collect(product:/1);\n\t\tlet normalized = Fraction(products, products.min);\n\t\tlet reduced = normalized.octaveReduce;\n\t\treduced.nub.sort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "eulerFokkerGenus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _eulerFokkerGenus_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.eulerFokkerGenus { :each |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Tuning",
  "kurenniemiNotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chordDegrees = _solidus_2(_ratioToCents_1(_self), 100);
    let _upper = _plusSign_2(_max_1(_chordDegrees), 1);
    let _lineDegrees = [2, 5, 9, 12, 16, 19, 23];
    let _allLines = _takeWhile_2(
      _collectCatenate_2(
        _Span_3(0, 3, 1),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_asterisk_2(_each, 24), _lineDegrees);
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_each, _upper);
      }, ["each"]),
    );
    let _staffLines = [19, 23, 26, 29, 33, 40, 43, 47, 50, 53];
    /* Statements */
    return _LineDrawing_2([
      _collect_2(
        _allLines,
        sl.annotateFunction(function (_y) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _y";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar1 = _assertIsOfSize_2(
            _if_3(
              _includes_2(_staffLines, _y),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return [0, 15];
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return [5, 10];
              }, []),
            ),
            2,
          );
          let _x1 = _at_2(__SplVar1, 1);
          let _x2 = _at_2(__SplVar1, 2);
          /* Statements */
          return _Line_1([[_x1, _y], [_x2, _y]]);
        }, ["y"]),
      ),
      _collect_2(
        _chordDegrees,
        sl.annotateFunction(function (_y) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _y";
            throw new Error(errorMessage);
          } /* Statements */
          return _Ellipse_2([7.5, _y], [_solidus_2(4, 5), _solidus_2(2, 3)]);
        }, ["y"]),
      ),
    ], _Record_1([["height", 300]]));
  }, ["self"]),
  "{ :self |\n\t\tlet chordDegrees = self.ratioToCents / 100;\n\t\tlet upper = chordDegrees.max + 1;\n\t\tlet lineDegrees = [2 5 9 12 16 19 23];\n\t\tlet allLines = 0:3.collectCatenate { :each |\n\t\t\teach * 24 + lineDegrees\n\t\t}.takeWhile { :each |\n\t\t\teach <= upper\n\t\t};\n\t\tlet staffLines = [\n\t\t\t19 23 26 29 33\n\t\t\t40 43 47 50 53\n\t\t];\n\t\t[\n\t\t\tallLines.collect { :y |\n\t\t\t\tlet [x1, x2] = staffLines.includes(y).if {\n\t\t\t\t\t[0 15]\n\t\t\t\t} {\n\t\t\t\t\t[5 10]\n\t\t\t\t};\n\t\t\t\tLine([x1 y; x2 y])\n\t\t\t},\n\t\t\tchordDegrees.collect { :y |\n\t\t\t\tEllipse([7.5, y], [4 / 5, 2 / 3])\n\t\t\t}\n\t\t].LineDrawing(height: 300)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Tuning",
  "masinaConsonanceData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "MasinaConsonanceData");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('MasinaConsonanceData')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "MasinaConsonanceData"],
      ["category", "Music/Tuning"],
      [
        "url",
        "https://rohandrape.net/sw/hmt/data/json/masina-consonance-data.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _at_2(_libraryItem, "data"),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar2 = _assertIsOfSize_2(_each, 4);
              let _f2 = _at_2(__SplVar2, 1);
              let _f1 = _at_2(__SplVar2, 2);
              let _m = _at_2(__SplVar2, 3);
              let _sd = _at_2(__SplVar2, 4);
              /* Statements */
              return [_Fraction_2(_f2, _f1), _m, _sd];
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
