/*  Requires: Tuning  */

sl.addType(
  false,
  "ScalaTuning",
  "ScalaTuning",
  ["Object", "Tuning"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ScalaTuning",
);

sl.copyTraitMethodsToType(
  "Tuning",
  "ScalaTuning",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "asCents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _pitches_1(_self);
    /* Statements */
    _addFirst_2(_answer, 0);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.pitches;\n\t\tanswer.addFirst(0);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "asRatioTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asRatioTuning_1(_asRatios_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asRatios.asRatioTuning\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "asRatios",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _pitches_1(_self);
    /* Statements */
    _ifFalse_2(
      _allSatisfy_2(_answer, _isFraction_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asRatios: non-ratio pitch");
      }, []),
    );
    _addFirst_2(_answer, _Fraction_2(1n, 1n));
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.pitches;\n\t\tanswer.allSatisfy(isFraction:/1).ifFalse {\n\t\t\tself.error('asRatios: non-ratio pitch')\n\t\t};\n\t\tanswer.addFirst(1/1);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "degree");
  }, ["self"]),
  "{ :self |\n\t\tself.contents['degree']\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "description",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "description");
  }, ["self"]),
  "{ :self |\n\t\tself.contents['description']\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "isRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_contents_1(_self), "limit");
  }, ["self"]),
  "{ :self |\n\t\tself.contents.includesKey('limit')\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "name");
  }, ["self"]),
  "{ :self |\n\t\tself.contents['name']\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "octave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _octave = _at_2(_contents_1(_self), "octave");
    /* Statements */
    return _if_3(
      _isNumber_1(_octave),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _centsToRatio_1(_octave);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isList_1(_octave),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar1 = _assertIsOfSize_2(_octave, 2);
            let _numerator = _at_2(__SplVar1, 1);
            let _denominator = _at_2(__SplVar1, 2);
            /* Statements */
            return _Fraction_2(_numerator, _denominator);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "octave: invalid octave");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet octave = self.contents['octave'];\n\t\toctave.isNumber.if {\n\t\t\toctave.centsToRatio\n\t\t} {\n\t\t\toctave.isList.if {\n\t\t\t\tlet [numerator, denominator] = octave;\n\t\t\t\tFraction(numerator, denominator)\n\t\t\t} {\n\t\t\t\tself.error('octave: invalid octave')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "pitches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _at_2(_contents_1(_self), "pitches"),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNumber_1(_each),
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
            return _if_3(
              _isList_1(_each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar2 = _assertIsOfSize_2(_each, 2);
                let _numerator = _at_2(__SplVar2, 1);
                let _denominator = _at_2(__SplVar2, 2);
                /* Statements */
                return _Fraction_2(_numerator, _denominator);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "pitches: invalid pitch");
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.contents['pitches'].collect { :each |\n\t\t\teach.isNumber.if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.isList.if {\n\t\t\t\t\tlet [numerator, denominator] = each;\n\t\t\t\t\tFraction(numerator, denominator)\n\t\t\t\t} {\n\t\t\t\t\tself.error('pitches: invalid pitch')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "primeLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "limit");
  }, ["self"]),
  "{ :self |\n\t\tself.contents['limit']\n\t}",
);

sl.addMethodToExistingType(
  "ScalaTuning",
  "ScalaTuning",
  "tuningLatticeGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isRational_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tuningLatticeGraph_1(_asRatioTuning_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "tuningLatticeGraph: irrational");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isRational.if {\n\t\t\tself.asRatioTuning.tuningLatticeGraph\n\t\t} {\n\t\t\tself.error('tuningLatticeGraph: irrational')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScalaTuning",
  "ScalaTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newScalaTuning_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewScalaTuning().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScalaTuning",
  "scalaIntervalArchive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ScalaIntervalArchive");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('ScalaIntervalArchive')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScalaTuning",
  "scalaRationalTuningArchive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "scalaRationalTuningArchive",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _select_2(
            _scalaTuningArchive_1(_self),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _isRational_1(_each);
            }, ["each"]),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _asRatioTuning_1(_each);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('scalaRationalTuningArchive') {\n\t\t\tself.scalaTuningArchive.select { :each |\n\t\t\t\teach.isRational\n\t\t\t}.collect { :each |\n\t\t\t\teach.asRatioTuning\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScalaTuning",
  "scalaScaleArchive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ScalaScaleArchive");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('ScalaScaleArchive')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScalaTuning",
  "scalaTuningArchive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ScalaTuningArchive");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('ScalaTuningArchive')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "ScalaTuning",
  "scalaTuningMetaArchive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "ScalaTuningMetaArchive");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('ScalaTuningMetaArchive')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "ScalaTuning",
  "intervalName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _scalaIntervalArchive_1(_system),
      _printString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "*unnamed interval*";
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.scalaIntervalArchive.atIfAbsent(\n\t\t\tself.printString\n\t\t) {\n\t\t\t'*unnamed interval*'\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "ScalaTuning",
  "intervalNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_intervalName_1(_self), ", ");
  }, ["self"]),
  "{ :self |\n\t\tself.intervalName.splitBy(', ')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScalaTuning",
  "namedInterval",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseFraction_1(
      _keyAtValueIfAbsent_3(
        _scalaIntervalArchive_1(_system),
        _self,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "namedInterval: no such interval");
        }, []),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.scalaIntervalArchive.keyAtValueIfAbsent(self) {\n\t\t\tself.error('namedInterval: no such interval')\n\t\t}.parseFraction\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScalaTuning",
  "namedTuning",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _scalaTuningArchive_1(_system),
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedTuning: no such tuning");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tsystem.scalaTuningArchive.atIfAbsent(self) {\n\t\t\tself.error('namedTuning: no such tuning')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScalaTuning",
  "intervalName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _intervalName_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(intervalName:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScalaTuning",
  "tuningName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _detectIfFoundIfNone_4(
          _scalaRationalTuningArchive_1(_system),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _tilde_2(_asRatios_1(_each), _self);
          }, ["each"]),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _name_1(_each);
          }, ["each"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "*unnamed tuning*";
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _tuningName_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tsystem.scalaRationalTuningArchive.detectIfFoundIfNone { :each |\n\t\t\t\teach.asRatios ~ self\n\t\t\t} { :each |\n\t\t\t\teach.name\n\t\t\t} {\n\t\t\t\t'*unnamed tuning*'\n\t\t\t}\n\t\t} {\n\t\t\tself.collect(tuningName:/1)\n\t\t}\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ScalaScaleArchive"],
      ["category", "Music/Tuning"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-modenam.json"],
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
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar3 = _assertIsOfSize_2(_each, 3);
              let _zeroIndexedStartIndex = _at_2(__SplVar3, 1);
              let _intervals = _at_2(__SplVar3, 2);
              let _description = _at_2(__SplVar3, 3);
              /* Statements */
              return _Scale_3(
                _plusSign_2(_zeroIndexedStartIndex, 1),
                _intervals,
                _description,
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ScalaIntervalArchive"],
      ["category", "Music/Tuning"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-intnam.json"],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _answer = _Record_0();
          /* Statements */
          _keysAndValuesDo_2(
            _libraryItem,
            sl.annotateFunction(function (_key, _value) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _key, _value";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar4 = _assertIsOfSize_2(_value, 2);
              let _n = _at_2(__SplVar4, 1);
              let _d = _at_2(__SplVar4, 2);
              /* Statements */
              return _add_2(
                _answer,
                _hyphenMinusGreaterThanSign_2(
                  _printString_1(_Fraction_2(_n, _d)),
                  _key,
                ),
              );
            }, ["key", "value"]),
          );
          return _answer;
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ScalaTuningArchive"],
      ["category", "Music/Tuning"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-db.json"],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_libraryItem, _ScalaTuning_1);
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ScalaTuningMetaArchive"],
      ["category", "Music/Tuning"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-meta-au.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
