/*  Requires: Tuning  */

sl.addType(
  false,
  "ScalaTuning",
  "ScalaTuning",
  ["Object", "Tuning"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "ScalaTuning",
);

sl.copyTraitToType(
  "Tuning",
  "ScalaTuning",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _pitches_1(_self);
    /* Statements */
    _addFirst_2(_answer, 0);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.pitches;\n\t\tanswer.addFirst(0);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _pitches_1(_self);
    /* Statements */
    _ifFalse_2(_allSatisfy_2(_answer, _isFraction_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asRatios: non-ratio pitch");
    });
    _addFirst_2(
      _answer,
      _Fraction_2(
        1,
        1,
      ),
    );
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.pitches;\n\t\tanswer.allSatisfy(isFraction:/1).ifFalse {\n\t\t\tself.error('asRatios: non-ratio pitch')\n\t\t};\n\t\tanswer.addFirst(1/1);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "degree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "degree");
  },
  "{ :self |\n\t\tself.contents['degree']\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "description",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "description");
  },
  "{ :self |\n\t\tself.contents['description']\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_contents_1(_self), "limit");
  },
  "{ :self |\n\t\tself.contents.includesKey('limit')\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "limit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "limit");
  },
  "{ :self |\n\t\tself.contents['limit']\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), "name");
  },
  "{ :self |\n\t\tself.contents['name']\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "octave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _octave = _at_2(_contents_1(_self), "octave");
    /* Statements */
    return _if_3(_isNumber_1(_octave), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _centsToRatio_1(_octave);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isList_1(_octave), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym145 = _assertIsOfSize_2(_octave, 2),
          _numerator = _at_2(__genSym145, 1),
          _denominator = _at_2(__genSym145, 2);
        /* Statements */
        return _Fraction_2(_numerator, _denominator);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "octave: invalid octave");
      });
    });
  },
  "{ :self |\n\t\tlet octave = self.contents['octave'];\n\t\toctave.isNumber.if {\n\t\t\toctave.centsToRatio\n\t\t} {\n\t\t\toctave.isList.if {\n\t\t\t\tlet [numerator, denominator] = octave;\n\t\t\t\tFraction(numerator, denominator)\n\t\t\t} {\n\t\t\t\tself.error('octave: invalid octave')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "pitches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_at_2(_contents_1(_self), "pitches"), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isNumber_1(_each), function () {
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
        return _if_3(_isList_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let __genSym146 = _assertIsOfSize_2(_each, 2),
            _numerator = _at_2(__genSym146, 1),
            _denominator = _at_2(__genSym146, 2);
          /* Statements */
          return _Fraction_2(_numerator, _denominator);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "pitches: invalid pitch");
        });
      });
    });
  },
  "{ :self |\n\t\tself.contents['pitches'].collect { :each |\n\t\t\teach.isNumber.if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.isList.if {\n\t\t\t\t\tlet [numerator, denominator] = each;\n\t\t\t\t\tFraction(numerator, denominator)\n\t\t\t\t} {\n\t\t\t\t\tself.error('pitches: invalid pitch')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "ScalaTuning",
  "ScalaTuning",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _limit_1(_self);
  },
  "{ :self |\n\t\tself.limit\n\t}",
);

sl.addMethod(
  "Record",
  "ScalaTuning",
  "ScalaTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newScalaTuning_0(), _self);
  },
  "{ :self |\n\t\tnewScalaTuning().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "System",
  "ScalaTuning",
  "categorizedTuningArchive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(
      _self,
      "Music/Tuning/CategorizedTuningArchive",
    );
  },
  "{ :self |\n\t\tself.requireLibraryItem('Music/Tuning/CategorizedTuningArchive')\n\t}",
);

sl.addMethod(
  "System",
  "ScalaTuning",
  "scalaIntervalArchive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "Music/Tuning/ScalaIntervalNames");
  },
  "{ :self |\n\t\tself.requireLibraryItem('Music/Tuning/ScalaIntervalNames')\n\t}",
);

sl.addMethod(
  "System",
  "ScalaTuning",
  "scalaRationalTuningArchive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "scalaRationalTuningArchive", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _select_2(_scalaTuningArchive_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _isRational_1(_each);
        }),
        function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _asRatioTuning_1(_each);
        },
      );
    });
  },
  "{ :self |\n\t\tself.cached('scalaRationalTuningArchive') {\n\t\t\tself.scalaTuningArchive.select { :each |\n\t\t\t\teach.isRational\n\t\t\t}.collect { :each |\n\t\t\t\teach.asRatioTuning\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "ScalaTuning",
  "scalaScaleArchive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "Music/Scales/ScalaModeNames");
  },
  "{ :self |\n\t\tself.requireLibraryItem('Music/Scales/ScalaModeNames')\n\t}",
);

sl.addMethod(
  "System",
  "ScalaTuning",
  "scalaTuningArchive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "Music/Tuning/ScalaTuningArchive");
  },
  "{ :self |\n\t\tself.requireLibraryItem('Music/Tuning/ScalaTuningArchive')\n\t}",
);

sl.addMethod(
  "Fraction",
  "ScalaTuning",
  "intervalName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _scalaIntervalArchive_1(_system),
      _printString_1(_self),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return "*unnamed interval*";
      },
    );
  },
  "{ :self |\n\t\tsystem.scalaIntervalArchive.atIfAbsent(\n\t\t\tself.printString\n\t\t) {\n\t\t\t'*unnamed interval*'\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "ScalaTuning",
  "namedInterval",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _parseFraction_1(
      _keyAtValueIfAbsent_3(
        _scalaIntervalArchive_1(_system),
        _self,
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "namedInterval: no such interval");
        },
      ),
    );
  },
  "{ :self |\n\t\tsystem.scalaIntervalArchive.keyAtValueIfAbsent(self) {\n\t\t\tself.error('namedInterval: no such interval')\n\t\t}.parseFraction\n\t}",
);

sl.addMethod(
  "String",
  "ScalaTuning",
  "namedTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_scalaTuningArchive_1(_system), _self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "namedTuning: no such tuning");
    });
  },
  "{ :self |\n\t\tsystem.scalaTuningArchive.atIfAbsent(self) {\n\t\t\tself.error('namedTuning: no such tuning')\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "ScalaTuning",
  "intervalName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _intervalName_1);
  },
  "{ :self |\n\t\tself.collect(intervalName:/1)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Music/Scales/ScalaModeNames"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-modenam.json"],
      ["mimeType", "application/json"],
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let __genSym147 = _assertIsOfSize_2(_each, 3),
            _zeroIndexedStartIndex = _at_2(__genSym147, 1),
            _intervals = _at_2(__genSym147, 2),
            _description = _at_2(__genSym147, 3);
          /* Statements */
          return _Scale_3(
            _plusSign_2(_zeroIndexedStartIndex, 1),
            _intervals,
            _description,
          );
        });
      }],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Music/Tuning/ScalaIntervalNames"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-intnam.json"],
      ["mimeType", "application/json"],
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = Object.fromEntries([]);
        /* Statements */
        _keysAndValuesDo_2(_libraryItem, function (_key, _value) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _key, _value";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let __genSym148 = _assertIsOfSize_2(_value, 2),
            _n = _at_2(__genSym148, 1),
            _d = _at_2(__genSym148, 2);
          /* Statements */
          return _add_2(
            _answer,
            _hyphenMinusGreaterThanSign_2(
              _printString_1(_Fraction_2(_n, _d)),
              _key,
            ),
          );
        });
        return _answer;
      }],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Music/Tuning/ScalaTuningArchive"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-db.json"],
      ["mimeType", "application/json"],
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, _ScalaTuning_1);
      }],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Music/Tuning/CategorizedTuningArchive"],
      ["url", "https://rohandrape.net/sw/hmt/data/json/scala-meta-au.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
