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
  "{ :self | let answer = pitches(self); addFirst(answer,0); answer }",
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
  "{ :self | let answer = pitches(self); ifFalse(allSatisfy(answer,isFraction:/1), { error(self,'asRatios: non-ratio pitch') }); addFirst(answer,Fraction(1L, 1L)); answer }",
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
  "{ :self | at(contents(self), 'degree') }",
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
  "{ :self | at(contents(self), 'description') }",
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
  "{ :self | includesKey(contents(self),'limit') }",
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
  "{ :self | at(contents(self), 'name') }",
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
            let __SPL477 = _assertIsOfSize_2(_octave, 2);
            let _numerator = _at_2(__SPL477, 1);
            let _denominator = _at_2(__SPL477, 2);
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
  "{ :self | let octave = at(contents(self), 'octave'); if(isNumber(octave), { centsToRatio(octave) }, { if(isList(octave), { let __SPL477 = assertIsOfSize(octave, 2); let numerator = at(__SPL477, 1); let denominator = at(__SPL477, 2); Fraction(numerator, denominator) }, { error(self,'octave: invalid octave') }) }) }",
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
                let __SPL478 = _assertIsOfSize_2(_each, 2);
                let _numerator = _at_2(__SPL478, 1);
                let _denominator = _at_2(__SPL478, 2);
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
  "{ :self | collect(at(contents(self), 'pitches'), { :each | if(isNumber(each), { each }, { if(isList(each), { let __SPL478 = assertIsOfSize(each, 2); let numerator = at(__SPL478, 1); let denominator = at(__SPL478, 2); Fraction(numerator, denominator) }, { error(self,'pitches: invalid pitch') }) }) }) }",
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
  "{ :self | at(contents(self), 'limit') }",
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
  "{ :self | initializeSlots(newScalaTuning(),self) }",
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
  "{ :self | requireLibraryItem(self,'ScalaIntervalArchive') }",
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
  "{ :self | cached(self, 'scalaRationalTuningArchive', { collect(select(scalaTuningArchive(self), { :each | isRational(each) }), { :each | asRatioTuning(each) }) }) }",
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
  "{ :self | requireLibraryItem(self,'ScalaScaleArchive') }",
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
  "{ :self | requireLibraryItem(self,'ScalaTuningArchive') }",
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
  "{ :self | requireLibraryItem(self,'ScalaTuningMetaArchive') }",
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
  "{ :self | atIfAbsent(scalaIntervalArchive(system), printString(self), { '*unnamed interval*' }) }",
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
  "{ :self | splitBy(intervalName(self),', ') }",
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
  "{ :self | parseFraction(keyAtValueIfAbsent(scalaIntervalArchive(system), self, { error(self,'namedInterval: no such interval') })) }",
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
  "{ :self | atIfAbsent(scalaTuningArchive(system), self, { error(self,'namedTuning: no such tuning') }) }",
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
  "{ :self | collect(self,intervalName:/1) }",
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
  "{ :self | if(isVector(self), { detectIfFoundIfNone(scalaRationalTuningArchive(system), { :each | ~(asRatios(each), self) }, { :each | name(each) }, { '*unnamed tuning*' }) }, { collect(self,tuningName:/1) }) }",
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
              let __SPL479 = _assertIsOfSize_2(_each, 3);
              let _zeroIndexedStartIndex = _at_2(__SPL479, 1);
              let _intervals = _at_2(__SPL479, 2);
              let _description = _at_2(__SPL479, 3);
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
          let _answer = _Record_1([]);
          /* Statements */
          _keysAndValuesDo_2(
            _libraryItem,
            sl.annotateFunction(function (_key, _value) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _key, _value";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SPL480 = _assertIsOfSize_2(_value, 2);
              let _n = _at_2(__SPL480, 1);
              let _d = _at_2(__SPL480, 2);
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
