sl.addType(
  true,
  "System",
  "System",
  ["Object", "Cache", "Indexable", "Random"],
  [],
);

sl.copyTraitToType(
  "Object",
  "System",
);

sl.copyTraitToType(
  "Cache",
  "System",
);

sl.copyTraitToType(
  "Indexable",
  "System",
);

sl.copyTraitToType(
  "Random",
  "System",
);

sl.addMethod(
  "System",
  "System",
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
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_globalDictionary_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.globalDictionary[index]\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "atPut",
  ["self", "key", "anObject"],
  function (_self, _key, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_globalDictionary_1(_self), _key, _anObject);
  },
  "{ :self :key :anObject |\n\t\tself.globalDictionary[key] := anObject\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "cache",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.cache;
  },
  "{ :self |\n\t\t<primitive: return _self.cache;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleClear",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    console.clear;
    return null;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconsole.clear;\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleError",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    console.error(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.error(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleNotification",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    console.log(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.log(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleWarning",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    console.warn(_message);
    return null;
  },
  "{ :self :message |\n\t\t<primitive:\n\t\tconsole.warn(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluateOrSignalError",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.evaluateForSignalling("*Interactive*", _aString);
  },
  "{ :self :aString |\n\t\t<primitive: return sl.evaluateForSignalling('*Interactive*', _aString);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluateNotifying",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _evaluateOrSignalError_2(_self, _aString);
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_err);
    });
  },
  "{ :self :aString :aBlock:/1 |\n\t\t{\n\t\t\tself.evaluateOrSignalError(aString)\n\t\t}.ifError { :err |\n\t\t\taBlock(err)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluate",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _evaluateNotifying_3(_self, _aString, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _consoleError_2(_system, _err);
    });
  },
  "{ :self :aString |\n\t\tself.evaluateNotifying(aString) { :err |\n\t\t\tsystem.consoleError(err)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "globalDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "globalDictionary", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('globalDictionary') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_globalDictionary_1(_self));
  },
  "{ :self |\n\t\tself.globalDictionary.indices\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadFile",
  ["self", "fileName"],
  function (_self, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fileName";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    evaluateFile(_fileName);
  },
  "{ :self :fileName |\n\t\t<primitive: evaluateFile(_fileName);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadUrl",
  ["self", "url"],
  function (_self, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _url";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    evaluateUrl(_url);
  },
  "{ :self :url |\n\t\t<primitive: evaluateUrl(_url);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "localStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _localStorage_1(_window_1(_self));
  },
  "{ :self |\n\t\tself.window.localStorage\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "localTimeZoneOffsetInMinutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    const aDate = new Date(0);
    return aDate.getTimezoneOffset();
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst aDate = new Date(0);\n\t\treturn aDate.getTimezoneOffset();\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "methodDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.methodDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.methodDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "millisecondsToRun",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _beginTime = _systemTimeInMilliseconds_1(_self);
    /* Statements */
    _aBlock_0();
    return _hyphenMinus_2(_systemTimeInMilliseconds_1(_self), _beginTime);
  },
  "{ :self :aBlock:/0 |\n\t\tlet beginTime = self.systemTimeInMilliseconds;\n\t\taBlock();\n\t\tself.systemTimeInMilliseconds - beginTime\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextUniqueId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "nextUniqueId", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
  },
  "{ :self |\n\t\tself.cached('nextUniqueId') {\n\t\t\t1\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextUniqueId",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_cached_1(_self), "nextUniqueId", _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.cached::nextUniqueId := aNumber\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "operatorCharacterNameTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.operatorCharacterNameTable;
  },
  "{ :self |\n\t\t<primitive: return sl.operatorCharacterNameTable;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "operatorNameTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _table = _operatorCharacterNameTable_1(_self);
    /* Statements */
    return _cached_3(_self, "operatorNameTable", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asRecord_1(
        _collect_2(
          _plusSignPlusSign_1(
            _collect_2([
              "+ ++ * - -> / // & && | ||",
              "< << <= <~ <=> > >> >= >~ = == ==>",
              "% ! !~ \\ \\\\ ~ ~~ ~= ~? ? ?? ^",
            ], _words_1),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _each,
              _join_1(
                _camelCase_1(
                  _collect_2(_stringList_1(_each), function (_letter) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _letter";
                      console.error(errorMessage);
                      throw new Error(errorMessage);
                    }
                    /* Statements */
                    return _at_2(_table, _letter);
                  }),
                ),
              ),
            );
          },
        ),
      );
    });
  },
  "{ :self |\n\t\tlet table = self.operatorCharacterNameTable;\n\t\tself.cached('operatorNameTable') {\n\t\t\t[\n\t\t\t\t'+ ++ * - -> / // & && | ||',\n\t\t\t\t'< << <= <~ <=> > >> >= >~ = == ==>',\n\t\t\t\t'% ! !~ \\\\ \\\\\\\\ ~ ~~ ~= ~? ? ?? ^'\n\t\t\t].collect(words:/1).++.collect { :each |\n\t\t\t\teach -> each.stringList.collect { :letter |\n\t\t\t\t\ttable[letter]\n\t\t\t\t}.camelCase.join\n\t\t\t}.asRecord\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "packageDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.packageDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.packageDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "postLine",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _consoleNotification_2(_system, _aString);
  },
  "{ :self :aString |\n\t\tsystem.consoleNotification(aString)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preference",
  ["self", "path", "defaultValue"],
  function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _preferencesReadPath_3(_self, _splitBy_2(_path, "/"), _defaultValue);
  },
  "{ :self :path :defaultValue |\n\t\tself.preferencesReadPath(path.splitBy('/'), defaultValue)\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferences",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "preferences", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('preferences') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferencesRead",
  ["self", "key", "defaultValue"],
  function (_self, _key, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.preferencesRead(_preferences_1(_self), _key, _defaultValue);
  },
  "{ :self :key :defaultValue |\n\t\t<primitive: return sl.preferencesRead(_preferences_1(_self), _key, _defaultValue);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferencesReadPath",
  ["self", "path", "defaultValue"],
  function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_path), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "System>>preferencesReadPath: empty path");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _item = _preferencesRead_3(_self, _at_2(_path, 1), null);
      let _index = 2;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_notNil_1(_item), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _lessThanSignEqualsSign_2(_index, _size_1(_path));
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _item = _atIfAbsent_3(_item, _at_2(_path, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return null;
        });
        return _index = _plusSign_2(_index, 1);
      });
      return _questionMark_2(_item, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _defaultValue;
      });
    });
  },
  "{ :self :path :defaultValue |\n\t\tpath.isEmpty.if {\n\t\t\tself.error('System>>preferencesReadPath: empty path')\n\t\t} {\n\t\t\tlet item = self.preferencesRead(path[1], nil);\n\t\t\tlet index = 2;\n\t\t\t{\n\t\t\t\titem.notNil & {\n\t\t\t\t\tindex <= path.size\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\titem := item.atIfAbsent(path[index]) { nil };\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\titem ? {\n\t\t\t\tdefaultValue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [
      "cache",
      "methodDictionary",
      "traitDictionary",
      "typeDictionary",
      "packageDictionary",
      "window",
      "library",
      "transcript",
    ];
  },
  "{ :self |\n\t\t[\n\t\t\t'cache',\n\t\t\t'methodDictionary',\n\t\t\t'traitDictionary',\n\t\t\t'typeDictionary',\n\t\t\t'packageDictionary',\n\t\t\t'window',\n\t\t\t'library', {- Package -}\n\t\t\t'transcript' {- Package -}\n\t\t]\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Math.random();
  },
  "{ :self |\n\t\t<primitive: return Math.random();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "nextRandomFloat",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _nextRandomFloat_1(_system);
    }, _count);
  },
  "{ :self :count |\n\t\t{ system.nextRandomFloat } ! count\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "sessionStorage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sessionStorage_1(_window_1(_self));
  },
  "{ :self |\n\t\tself.window.sessionStorage\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "smallFloatEpsilon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Number.EPSILON;
  },
  "{ :self |\n\t\t<primitive: return Number.EPSILON;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "traitDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.traitDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.traitDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "typeDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.typeDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.typeDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return performance.now();
  },
  "{ :self |\n\t\t<primitive: return performance.now();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return performance.now() * 0.001;
  },
  "{ :self |\n\t\t<primitive: return performance.now() * 0.001;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "uniqueId",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _cached_3(_self, "uniqueId", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
    /* Statements */
    _atPut_3(_cache_1(_self), "uniqueId", _plusSign_2(_answer, 1));
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.cached('uniqueId') { 1 };\n\t\tself.cache::uniqueId := answer + 1;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "unixTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Date.now();
  },
  "{ :self |\n\t\t<primitive: return Date.now();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "window",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.window;
  },
  "{ :self |\n\t\t<primitive: return _self.window;>\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "once",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _cache = _cached_3(_system, "onceCache", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _WeakMap_0();
    });
    /* Statements */
    return _atIfAbsentPut_3(_cache, _self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self |\n\t\tlet cache = system.cached('onceCache') {\n\t\t\tWeakMap()\n\t\t};\n\t\tcache.atIfAbsentPut(self) {\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "once",
  ["self", "where", "key"],
  function (_self, _where, _key) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_where, _key, _self);
  },
  "{ :self :where :key |\n\t\twhere.cached(key, self)\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "benchForMilliseconds",
  ["self:/0", "interval"],
  function (_self_0, _interval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _interval";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _t0 = _systemTimeInMilliseconds_1(_system);
    let _t1 = null;
    let _t2 = _plusSign_2(_t0, _interval);
    let _count = 1;
    /* Statements */
    _self_0();
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _t1 = _systemTimeInMilliseconds_1(_system);
      return _lessThanSign_2(_t1, _t2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _self_0();
      return _count = _plusSign_2(_count, 1);
    });
    return [_count, _hyphenMinus_2(_t1, _t0)];
  },
  "{ :self:/0 :interval |\n\t\tlet t0 = system.systemTimeInMilliseconds;\n\t\tlet t1 = nil;\n\t\tlet t2 = t0 + interval;\n\t\tlet count = 1;\n\t\tself();\n\t\t{\n\t\t\tt1 := system.systemTimeInMilliseconds;\n\t\t\tt1 < t2\n\t\t}.whileTrue {\n\t\t\tself();\n\t\t\tcount := count + 1\n\t\t};\n\t\t[count, t1 - t0]\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "benchFor",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym1 = _assertIsOfSize_2(
        _benchForMilliseconds_2(_self, _milliseconds_1(_aDuration)),
        2,
      ),
      _count = _at_2(__genSym1, 1),
      _elapsedTime = _at_2(__genSym1, 2);
    /* Statements */
    return _join_1([
      _roundTo_2(_solidus_2(_count, _solidus_2(_elapsedTime, 1000)), 0.001),
      " per second; ",
      _roundTo_2(_solidus_2(_solidus_2(_elapsedTime, 1000), _count), 0.001),
      " per count",
    ]);
  },
  "{ :self :aDuration |\n\t\tlet [count, elapsedTime] = self.benchForMilliseconds(aDuration.milliseconds);\n\t\t[\n\t\t\t(count / (elapsedTime / 1000)).roundTo(0.001), ' per second; ',\n\t\t\t((elapsedTime / 1000) / count).roundTo(0.001), ' per count'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Block",
  "System",
  "millisecondsToRun",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _startTime = _systemTimeInMilliseconds_1(_system);
    /* Statements */
    _self_0();
    return _hyphenMinus_2(_systemTimeInMilliseconds_1(_system), _startTime);
  },
  "{ :self:/0 |\n\t\tlet startTime = system.systemTimeInMilliseconds;\n\t\tself();\n\t\tsystem.systemTimeInMilliseconds - startTime\n\t}",
);
