sl.addType(
  true,
  "System",
  "System",
  ["Object", "Cache", "Indexable", "RandomNumberGenerator"],
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
  "RandomNumberGenerator",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_globalDictionary_1(_self), _key, _anObject);
  },
  "{ :self :key :anObject |\n\t\tself.globalDictionary[key] := anObject\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "basicNextRandomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.random();
  },
  "{ :self |\n\t\t<primitive: return Math.random();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "byteOrdering",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isLittleEndian_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    });
  },
  "{ :self |\n\t\tself.isLittleEndian.if {\n\t\t\t-1\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cache;
  },
  "{ :self |\n\t\t<primitive: return _self.cache;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "caches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.caches;
  },
  "{ :self |\n\t\t<primitive: return _self.window.caches;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleClear",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    console.clear;
    return null;
  },
  "{ :unused |\n\t\t<primitive:\n\t\tconsole.clear;\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleError",
  ["unused", "message"],
  function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    console.error(_message);
    return null;
  },
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.error(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleNotification",
  ["unused", "message"],
  function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    console.log(_message);
    return null;
  },
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.log(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "consoleWarning",
  ["unused", "message"],
  function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    console.warn(_message);
    return null;
  },
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.warn(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "evaluateOrSignalError",
  ["unused", "aString"],
  function (_unused, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.evaluateForSignalling("*Interactive*", _aString);
  },
  "{ :unused :aString |\n\t\t<primitive: return sl.evaluateForSignalling('*Interactive*', _aString);>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateOrSignalError_2(_self, _aString);
    }, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluateNotifying_3(_self, _aString, function (_err) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _err";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _consoleError_2(_self, _err);
    });
  },
  "{ :self :aString |\n\t\tself.evaluateNotifying(aString) { :err |\n\t\t\tself.consoleError(err)\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "globalDictionary", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('globalDictionary') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "homeDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(_environmentVariable_2(_self, "HOME"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "homeDirectory: not set");
    });
  },
  "{ :self |\n\t\tself.environmentVariable('HOME').ifNil {\n\t\t\tself.error('homeDirectory: not set')\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_globalDictionary_1(_self));
  },
  "{ :self |\n\t\tself.globalDictionary.indices\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isBigEndian",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_at_2(_unsigned32BitWordList_1(1), 1), 1072693248);
  },
  "{ :unused |\n\t\t1.unsigned32BitWordList[1] = 16r3FF00000\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "isLittleEndian",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isBigEndian_1(_self));
  },
  "{ :self |\n\t\tself.isBigEndian.not\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadFile",
  ["unused", "fileName"],
  function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    evaluateFile(_fileName);
  },
  "{ :unused :fileName |\n\t\t<primitive: evaluateFile(_fileName);>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "loadUrl",
  ["unused", "url"],
  function (_unused, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _url";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    evaluateUrl(_url);
  },
  "{ :unused :url |\n\t\t<primitive: evaluateUrl(_url);>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.localStorage;
  },
  "{ :self |\n\t\t<primitive: return _self.window.localStorage;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "localTimeZoneOffsetInMinutes",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const aDate = new Date(0);
    return aDate.getTimezoneOffset();
  },
  "{ :unused |\n\t\t<primitive:\n\t\tconst aDate = new Date(0);\n\t\treturn aDate.getTimezoneOffset();\n\t\t>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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
  "operatorCharacters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "operatorCharacters", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _contents_1("&*^@$=!>-<#%+?\\/~|");
    });
  },
  "{ :self |\n\t\tself.cached('operatorCharacters') {\n\t\t\t'&*^@$=!>-<#%+?\\\\/~|'.contents\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _punctuationCharacterNameTable_1(_self);
    /* Statements */
    return _cached_3(_self, "operatorNameTable", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _asRecord_1(
        _collect_2(
          _plusSignPlusSign_1(
            _collect_2([
              "& * ^ @ $ = ! > - < # % + ? \\ / ~ |",
              "&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\ // ~= ~~ ||",
              ">>> <=> +++",
            ], _words_1),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _each,
              _operatorTokenName_2(_each, _table),
            );
          },
        ),
      );
    });
  },
  "{ :self |\n\t\tlet table = self.punctuationCharacterNameTable;\n\t\tself.cached('operatorNameTable') {\n\t\t\t[\n\t\t\t\t'& * ^ @ $ = ! > - < # % + ? \\\\ / ~ |'\n\t\t\t\t'&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\\\\\ // ~= ~~ ||'\n\t\t\t\t'>>> <=> +++'\n\t\t\t].collect(words:/1).++.collect { :each |\n\t\t\t\teach -> each.operatorTokenName(table)\n\t\t\t}.asRecord\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _consoleNotification_2(_self, _aString);
  },
  "{ :self :aString |\n\t\tself.consoleNotification(aString)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "preferences", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return Object.fromEntries([]);
    });
  },
  "{ :self |\n\t\tself.cached('preferences') {\n\t\t\t()\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "preferencesRead",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.preferencesRead(_preferences_1(_self), _key);
  },
  "{ :self :key |\n\t\t<primitive: return sl.preferencesRead(_preferences_1(_self), _key);>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_path), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "System>>preferencesReadPath: empty path");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _preferencesRead_2(_self, _at_2(_path, 1));
      let _index = 2;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_notNil_1(_item), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_index, _size_1(_path));
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _item = _atIfAbsent_3(_item, _at_2(_path, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return null;
        });
        return _index = _plusSign_2(_index, 1);
      });
      return _questionMark_2(_item, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _defaultValue;
      });
    });
  },
  "{ :self :path :defaultValue |\n\t\tpath.isEmpty.if {\n\t\t\tself.error('System>>preferencesReadPath: empty path')\n\t\t} {\n\t\t\tlet item = self.preferencesRead(path[1]);\n\t\t\tlet index = 2;\n\t\t\t{\n\t\t\t\titem.notNil & {\n\t\t\t\t\tindex <= path.size\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\titem := item.atIfAbsent(path[index]) { nil };\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\titem ? {\n\t\t\t\tdefaultValue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "pseudoSlotNameList",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
  "{ :unused |\n\t\t[\n\t\t\t'cache',\n\t\t\t'methodDictionary',\n\t\t\t'traitDictionary',\n\t\t\t'typeDictionary',\n\t\t\t'packageDictionary',\n\t\t\t'window',\n\t\t\t'library', /* Package */\n\t\t\t'transcript' /* Package */\n\t\t]\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "punctuationCharacterNameTable",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.punctuationCharacterNameTable;
  },
  "{ :unused |\n\t\t<primitive: return sl.punctuationCharacterNameTable;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "punctuationCharacters",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.punctuationCharacters.split("");
  },
  "{ :unused |\n\t\t<primitive: return sl.punctuationCharacters.split('');>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _next_1(_randomNumberGenerator_1(_self));
  },
  "{ :self |\n\t\tself.randomNumberGenerator.next\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "randomByteArray",
  ["unused", "anInteger"],
  function (_unused, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    let bytes = new Uint8Array(_anInteger);
    crypto.getRandomValues(bytes);
    return bytes;
  },
  "{ :unused :anInteger |\n\t\t<primitive:\n\t\tlet bytes = new Uint8Array(_anInteger);\n\t\tcrypto.getRandomValues(bytes);\n\t\treturn bytes;\n\t\t>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "randomNumberGenerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "randomNumberGenerator", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Sfc32_1(_unixTimeInMilliseconds_1(_self));
    });
  },
  "{ :self |\n\t\tself.cached('randomNumberGenerator') {\n\t\t\tSfc32(self.unixTimeInMilliseconds)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "seedRandom",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_randomNumberGenerator_1(_self), _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.randomNumberGenerator.initialize(anInteger)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sessionStorage_1(_window_1(_self));
  },
  "{ :self |\n\t\tself.window.sessionStorage\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "smallFloatEpsilon",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.EPSILON;
  },
  "{ :unused |\n\t\t<primitive: return Number.EPSILON;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "splDirectory",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(_environmentVariable_2(_self, "SPL_DIR"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "splDirectory: not set");
    });
  },
  "{ :self |\n\t\tself.environmentVariable('SPL_DIR').ifNil {\n\t\t\tself.error('splDirectory: not set')\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "splFileName",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([_splDirectory_1(_self), _aString], "/");
  },
  "{ :self :aString |\n\t\t[\n\t\t\tself.splDirectory,\n\t\t\taString\n\t\t].join('/')\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "splUrl",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asUrl_1(
      _plusSignPlusSign_2("https://rohandrape.net/sw/spl/", _aString),
    );
  },
  "{ :self :aString |\n\t\t('https://rohandrape.net/sw/spl/' ++ aString).asUrl\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.typeDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.typeDictionary;>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInMilliseconds",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return performance.now();
  },
  "{ :unused |\n\t\t<primitive: return performance.now();>\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "systemTimeInSeconds",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return performance.now() * 0.001;
  },
  "{ :unused |\n\t\t<primitive: return performance.now() * 0.001;>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _cached_3(_self, "uniqueId", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    });
    /* Statements */
    _atPut_3(_cache_1(_self), "uniqueId", _plusSign_2(_answer, 1));
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.cached('uniqueId') {\n\t\t\t1\n\t\t};\n\t\tself.cache['uniqueId'] := answer + 1;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "uniqueId",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_cache_1(_self), "uniqueId", _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.cache['uniqueId'] := anInteger\n\t}",
);

sl.addMethod(
  "System",
  "System",
  "unixTimeInMilliseconds",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Date.now();
  },
  "{ :unused |\n\t\t<primitive: return Date.now();>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cache = _cached_3(_system, "onceCache", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _WeakMap_0();
    });
    /* Statements */
    return _atIfAbsentPut_3(_cache, _self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _t1 = _systemTimeInMilliseconds_1(_system);
      return _lessThanSign_2(_t1, _t2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym1 = _assertIsOfSize_2(
        _benchForMilliseconds_2(_self, _milliseconds_1(_aDuration)),
        2,
      ),
      _count = _at_2(__genSym1, 1),
      _elapsedTime = _at_2(__genSym1, 2);
    /* Statements */
    return _stringJoin_1([
      _roundTo_2(_solidus_2(_count, _solidus_2(_elapsedTime, 1000)), 0.001),
      " per second; ",
      _roundTo_2(_solidus_2(_solidus_2(_elapsedTime, 1000), _count), 0.001),
      " per count",
    ]);
  },
  "{ :self :aDuration |\n\t\tlet [count, elapsedTime] = self.benchForMilliseconds(aDuration.milliseconds);\n\t\t[\n\t\t\t(count / (elapsedTime / 1000)).roundTo(0.001), ' per second; ',\n\t\t\t((elapsedTime / 1000) / count).roundTo(0.001), ' per count'\n\t\t].stringJoin\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _startTime = _systemTimeInMilliseconds_1(_system);
    /* Statements */
    _self_0();
    return _hyphenMinus_2(_systemTimeInMilliseconds_1(_system), _startTime);
  },
  "{ :self:/0 |\n\t\tlet startTime = system.systemTimeInMilliseconds;\n\t\tself();\n\t\tsystem.systemTimeInMilliseconds - startTime\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "System",
  "seedRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _seedRandom_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.seedRandom(self)\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "seedRandom",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _seedRandom_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.seedRandom(self)\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isOperatorCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isOperatorCharacter(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isOperatorCharacter(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isOperatorToken",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isOperatorToken(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isOperatorToken(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isPunctuationCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isPunctuationCharacter(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isPunctuationCharacter(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isPunctuationToken",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isPunctuationToken(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isPunctuationToken(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isSyntaxCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSyntaxCharacter(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isSyntaxCharacter(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "isSyntaxToken",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSyntaxToken(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.isSyntaxToken(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "operatorNameToken",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(_operatorNameTable_1(_system), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_equalsSign_2(_value_1(_each), _self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_key_1(_each));
        });
      });
      return null;
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tsystem.operatorNameTable.associationsDo { :each |\n\t\t\t\t(each.value = self).ifTrue {\n\t\t\t\t\teach.key.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "operatorTokenName",
  ["self", "table"],
  function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOperatorToken_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _punctuationTokenName_2(_self, _table);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "operatorTokenName: not operator token");
    });
  },
  "{ :self :table |\n\t\tself.isOperatorToken.if {\n\t\t\tself.punctuationTokenName(table)\n\t\t} {\n\t\t\tself.error('operatorTokenName: not operator token')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "operatorTokenName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _operatorTokenName_2(
      _self,
      _punctuationCharacterNameTable_1(_system),
    );
  },
  "{ :self |\n\t\tself.operatorTokenName(system.punctuationCharacterNameTable)\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "punctuationTokenName",
  ["self", "table"],
  function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2(
      _camelCase_1(_collect_2(_contents_1(_self), function (_letter) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _letter";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_table, _letter);
      })),
      "",
    );
  },
  "{ :self :table |\n\t\tself.contents.collect { :letter |\n\t\t\ttable[letter]\n\t\t}.camelCase.join('')\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "punctuationTokenName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _punctuationTokenName_2(
      _self,
      _punctuationCharacterNameTable_1(_system),
    );
  },
  "{ :self |\n\t\tself.punctuationTokenName(system.punctuationCharacterNameTable)\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "splParseExpression",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tree = _splParseTree_1(_self);
    let _f_1 = function (_e) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _e";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym2 = _assertIsOfSize_2(_e, 2),
        _o = _at_2(__genSym2, 1),
        _p = _at_2(__genSym2, 2);
      /* Statements */
      return _caseOfOtherwise_3(_o, [
        _hyphenMinusGreaterThanSign_2("Apply", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2(
            _f_1(_at_2(_p, 1)),
            _collect_2(_at_2(_p, 2), _f_1),
          );
        }),
        _hyphenMinusGreaterThanSign_2("Arguments", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("𝓐", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("Assignment", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("←", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("Block", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("𝜆", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("Identifier", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Symbol_1(_at_2(_p, 1));
        }),
        _hyphenMinusGreaterThanSign_2("LargeInteger", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _parseLargeInteger_1(_allButLast_1(_at_2(_p, 1)));
        }),
        _hyphenMinusGreaterThanSign_2("Let", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("≔", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("List", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("𝓛", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("Operator", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Symbol_1(_at_2(_p, 1));
        }),
        _hyphenMinusGreaterThanSign_2("Program", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _SymbolicExpression_2("𝒫", _collect_2(_p, _f_1));
        }),
        _hyphenMinusGreaterThanSign_2("ReservedIdentifier", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _caseOf_2(_at_2(_p, 1), [
            _hyphenMinusGreaterThanSign_2("false", function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return false;
            }),
            _hyphenMinusGreaterThanSign_2("nil", function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return null;
            }),
            _hyphenMinusGreaterThanSign_2("true", function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return true;
            }),
          ]);
        }),
        _hyphenMinusGreaterThanSign_2("SmallFloat", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _parseNumber_1(_at_2(_p, 1));
        }),
        _hyphenMinusGreaterThanSign_2("SmallInteger", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _parseSmallInteger_2(_at_2(_p, 1), 10);
        }),
      ], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("String>>splParseExpression: ", _o),
        );
      });
    };
    /* Statements */
    return _f_1(_tree);
  },
  "{ :self |\n\t\tlet tree = self.splParseTree;\n\t\tlet f = { :e |\n\t\t\tlet [o, p] = e;\n\t\t\to.caseOfOtherwise(\n\t\t\t\t[\n\t\t\t\t\t'Apply' -> {\n\t\t\t\t\t\tSymbolicExpression(f(p[1]), p[2].collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Arguments' -> {\n\t\t\t\t\t\tSymbolicExpression('𝓐', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Assignment' -> {\n\t\t\t\t\t\tSymbolicExpression('←', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Block' -> {\n\t\t\t\t\t\tSymbolicExpression('𝜆', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Identifier' -> {\n\t\t\t\t\t\tSymbol(p[1])\n\t\t\t\t\t},\n\t\t\t\t\t'LargeInteger' -> {\n\t\t\t\t\t\tp[1].allButLast.parseLargeInteger\n\t\t\t\t\t},\n\t\t\t\t\t'Let' -> {\n\t\t\t\t\t\tSymbolicExpression('≔', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'List' -> {\n\t\t\t\t\t\tSymbolicExpression('𝓛', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Operator' -> {\n\t\t\t\t\t\tSymbol(p[1])\n\t\t\t\t\t},\n\t\t\t\t\t'Program' -> {\n\t\t\t\t\t\tSymbolicExpression('𝒫', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'ReservedIdentifier' -> {\n\t\t\t\t\t\tp[1].caseOf(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t'false' -> { false },\n\t\t\t\t\t\t\t\t'nil' -> { nil },\n\t\t\t\t\t\t\t\t'true' -> { true }\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t},\n\t\t\t\t\t'SmallFloat' -> {\n\t\t\t\t\t\tp[1].parseNumber\n\t\t\t\t\t},\n\t\t\t\t\t'SmallInteger' -> {\n\t\t\t\t\t\tp[1].parseSmallInteger(10)\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t) {\n\t\t\t\tself.error('String>>splParseExpression: ' ++ o)\n\t\t\t}\n\t\t};\n\t\tf(tree)\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "splParseTree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.rewriteSlToAst(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.rewriteSlToAst(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "System",
  "splSimplify",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.rewriteSlToCore(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.rewriteSlToCore(_self);>\n\t}",
);
