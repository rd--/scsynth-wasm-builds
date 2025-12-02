sl.addType(
  true,
  "System",
  "System",
  ["Object", "Cache", "RandomNumberGenerator"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "System",
);

sl.copyTraitMethodsToType(
  "Cache",
  "System",
);

sl.copyTraitMethodsToType(
  "RandomNumberGenerator",
  "System",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _identical_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tidentical(self, anObject)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _identical_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tidentical(self, anObject)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "absoluteTime",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Date.now() / 1000;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return Date.now() / 1000;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "basicNextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.random();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Math.random();>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "byteOrdering",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isLittleEndian_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isLittleEndian.if {\n\t\t\t-1\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "cache",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.cache;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.cache;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "caches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.caches;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.window.caches;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "consoleClear",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    console.clear;
    return null;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive:\n\t\tconsole.clear;\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "consoleError",
  ["unused", "message"],
  sl.annotateFunction(function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      throw new Error(errorMessage);
    } /* Primitive */
    console.error(_message);
    return null;
  }, ["unused", "message"]),
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.error(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "consoleNotification",
  ["unused", "message"],
  sl.annotateFunction(function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      throw new Error(errorMessage);
    } /* Primitive */
    console.log(_message);
    return null;
  }, ["unused", "message"]),
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.log(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "consoleWarning",
  ["unused", "message"],
  sl.annotateFunction(function (_unused, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _message";
      throw new Error(errorMessage);
    } /* Primitive */
    console.warn(_message);
    return null;
  }, ["unused", "message"]),
  "{ :unused :message |\n\t\t<primitive:\n\t\tconsole.warn(_message);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "evaluateOrSignalError",
  ["unused", "aString"],
  sl.annotateFunction(function (_unused, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.evaluateForSignalling("*Interactive*", _aString);
  }, ["unused", "aString"]),
  "{ :unused :aString |\n\t\t<primitive: return sl.evaluateForSignalling('*Interactive*', _aString);>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "evaluateNotifying",
  ["self", "aString", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _evaluateOrSignalError_2(_self, _aString);
      }, []),
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_err);
      }, ["err"]),
    );
  }, ["self", "aString", "aBlock:/1"]),
  "{ :self :aString :aBlock:/1 |\n\t\t{\n\t\t\tself.evaluateOrSignalError(aString)\n\t\t}.ifError { :err |\n\t\t\taBlock(err)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "evaluate",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluateNotifying_3(
      _self,
      _aString,
      sl.annotateFunction(function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          throw new Error(errorMessage);
        } /* Statements */
        return _consoleError_2(_self, _err);
      }, ["err"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.evaluateNotifying(aString) { :err |\n\t\t\tself.consoleError(err)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "homeDirectory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(
      _environmentVariable_2(_self, "HOME"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "homeDirectory: not set");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.environmentVariable('HOME').ifNil {\n\t\t\tself.error('homeDirectory: not set')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "isBigEndian",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_at_2(_unsigned32BitWordList_1(1), 1), 1072693248);
  }, ["unused"]),
  "{ :unused |\n\t\t1.unsigned32BitWordList[1] = 16r3FF00000\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "isLittleEndian",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isBigEndian_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isBigEndian.not\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "loadFile",
  ["unused", "fileName"],
  sl.annotateFunction(function (_unused, _fileName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _fileName";
      throw new Error(errorMessage);
    } /* Primitive */
    evaluateFile(_fileName);
  }, ["unused", "fileName"]),
  "{ :unused :fileName |\n\t\t<primitive: evaluateFile(_fileName);>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "loadUrl",
  ["unused", "url"],
  sl.annotateFunction(function (_unused, _url) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _url";
      throw new Error(errorMessage);
    } /* Primitive */
    evaluateUrl(_url);
  }, ["unused", "url"]),
  "{ :unused :url |\n\t\t<primitive: evaluateUrl(_url);>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "localStorage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window.localStorage;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.window.localStorage;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "localTimeZoneOffsetInMinutes",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    const aDate = new Date(0);
    return aDate.getTimezoneOffset();
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive:\n\t\tconst aDate = new Date(0);\n\t\treturn aDate.getTimezoneOffset();\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "methodDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.methodDictionary;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.methodDictionary;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "packageDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.packageDictionary;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.packageDictionary;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "postLine",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _consoleNotification_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.consoleNotification(aString)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "preference",
  ["self", "path", "defaultValue"],
  sl.annotateFunction(function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _preferencesReadPath_3(_self, _splitBy_2(_path, "/"), _defaultValue);
  }, ["self", "path", "defaultValue"]),
  "{ :self :path :defaultValue |\n\t\tself.preferencesReadPath(path.splitBy('/'), defaultValue)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "preferences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "preferences",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('preferences') {\n\t\t\t(:)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "preferencesRead",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.preferencesRead(_preferences_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\t<primitive: return sl.preferencesRead(_preferences_1(_self), _key);>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "preferencesReadPath",
  ["self", "path", "defaultValue"],
  sl.annotateFunction(function (_self, _path, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _path, _defaultValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_path),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "System>>preferencesReadPath: empty path");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _preferencesRead_2(_self, _at_2(_path, 1));
        let _index = 2;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isNotNil_1(_item),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_index, _size_1(_path));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _item = _atIfAbsent_3(
              _item,
              _at_2(_path, _index),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return null;
              }, []),
            );
            return _index = _plusSign_2(_index, 1);
          }, []),
        );
        return _questionMark_2(
          _item,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _defaultValue;
          }, []),
        );
      }, []),
    );
  }, ["self", "path", "defaultValue"]),
  "{ :self :path :defaultValue |\n\t\tpath.isEmpty.if {\n\t\t\tself.error('System>>preferencesReadPath: empty path')\n\t\t} {\n\t\t\tlet item = self.preferencesRead(path[1]);\n\t\t\tlet index = 2;\n\t\t\t{\n\t\t\t\titem.isNotNil & {\n\t\t\t\t\tindex <= path.size\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\titem := item.atIfAbsent(path[index]) { nil };\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\titem ? {\n\t\t\t\tdefaultValue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "pseudoSlotNameList",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
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
  }, ["unused"]),
  "{ :unused |\n\t\t[\n\t\t\t'cache',\n\t\t\t'methodDictionary',\n\t\t\t'traitDictionary',\n\t\t\t'typeDictionary',\n\t\t\t'packageDictionary',\n\t\t\t'window',\n\t\t\t'library', /* Package */\n\t\t\t'transcript' /* Package */\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "nextRandomFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _next_1(_randomNumberGenerator_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.randomNumberGenerator.next\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "randomByteArray",
  ["unused", "anInteger"],
  sl.annotateFunction(function (_unused, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _unused, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    let bytes = new Uint8Array(_anInteger);
    crypto.getRandomValues(bytes);
    return bytes;
  }, ["unused", "anInteger"]),
  "{ :unused :anInteger |\n\t\t<primitive:\n\t\tlet bytes = new Uint8Array(_anInteger);\n\t\tcrypto.getRandomValues(bytes);\n\t\treturn bytes;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "randomNumberGenerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "randomNumberGenerator",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Sfc32_1(_absoluteTime_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('randomNumberGenerator') {\n\t\t\tSfc32(self.absoluteTime)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "seedRandom",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_2(_randomNumberGenerator_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.randomNumberGenerator.initialize(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "sessionStorage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sessionStorage_1(_window_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.window.sessionStorage\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "smallFloatEpsilon",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.EPSILON;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return Number.EPSILON;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "smallFloatMax",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.MAX_VALUE;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return Number.MAX_VALUE;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "smallFloatMin",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Number.MIN_VALUE;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return Number.MIN_VALUE;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splDirectory",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_2(
      _environmentVariable_2(_self, "SPL_DIR"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "splDirectory: not set");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.environmentVariable('SPL_DIR').ifNil {\n\t\t\tself.error('splDirectory: not set')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splFileName",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%/%", [_splDirectory_1(_self), _aString]);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t'%/%'.format(\n\t\t\t[\n\t\t\t\tself.splDirectory,\n\t\t\t\taString\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splOperatorCharacters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "splOperatorCharacters",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _contents_1("&*^@$=!>-<#%+?\\/~|");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('splOperatorCharacters') {\n\t\t\t'&*^@$=!>-<#%+?\\\\/~|'.contents\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splOperatorNameTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _splPunctuationCharacterNameTable_1(_self);
    /* Statements */
    return _cached_3(
      _self,
      "splOperatorNameTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asRecord_1(
          _collect_2(
            _plusSignPlusSign_1(
              _collect_2([
                "& * ^ @ $ = ! > - < # % + ? \\ / ~ |",
                "&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\ // != !== ||",
                ">>> <=> +++",
              ], _words_1),
            ),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinusGreaterThanSign_2(
                _each,
                _splOperatorTokenName_2(_each, _table),
              );
            }, ["each"]),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet table = self.splPunctuationCharacterNameTable;\n\t\tself.cached('splOperatorNameTable') {\n\t\t\t[\n\t\t\t\t'& * ^ @ $ = ! > - < # % + ? \\\\ / ~ |'\n\t\t\t\t'&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\\\\\ // != !== ||'\n\t\t\t\t'>>> <=> +++'\n\t\t\t].collect(words:/1).++.collect { :each |\n\t\t\t\teach -> each.splOperatorTokenName(table)\n\t\t\t}.asRecord\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splPunctuationCharacterNameTable",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.splPunctuationCharacterNameTable;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return sl.splPunctuationCharacterNameTable;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splPunctuationCharacters",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.splPunctuationCharacters.split("");
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return sl.splPunctuationCharacters.split('');>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "splUrl",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(
      _plusSignPlusSign_2("https://rohandrape.net/sw/spl/", _aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tUrl('https://rohandrape.net/sw/spl/' ++ aString)\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "timing",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _beginTime = _sessionTime_1(_self);
    let _answer = _aBlock_0();
    let _endTime = _sessionTime_1(_self);
    /* Statements */
    return [_hyphenMinus_2(_endTime, _beginTime), _answer];
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tlet beginTime = self.sessionTime;\n\t\tlet answer = aBlock();\n\t\tlet endTime = self.sessionTime;\n\t\t[endTime - beginTime, answer]\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "traitDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.traitDictionary;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.traitDictionary;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "typeDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.typeDictionary;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.typeDictionary;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "sessionTimeInMilliseconds",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return performance.now();
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return performance.now();>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "sessionTime",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return performance.now() / 1000;
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return performance.now() / 1000;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "uniqueId",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _cached_3(
      _self,
      "uniqueId",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
    /* Statements */
    _atPut_3(_cache_1(_self), "uniqueId", _plusSign_2(_answer, 1));
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.cached('uniqueId') {\n\t\t\t1\n\t\t};\n\t\tself.cache['uniqueId'] := answer + 1;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "uniqueId",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_cache_1(_self), "uniqueId", _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.cache['uniqueId'] := anInteger\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "unixTimeInMilliseconds",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return Date.now();
  }, ["unused"]),
  "{ :unused |\n\t\t<primitive: return Date.now();>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "window",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.window;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.window;>\n\t}",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "workspace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "workspace",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_0();
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('workspace') {\n\t\t\tRecord()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "System",
  "once",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _cache = _cached_3(
      _system,
      "onceCache",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _WeakMap_0();
      }, []),
    );
    /* Statements */
    return _atIfAbsentPut_3(
      _cache,
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet cache = system.cached('onceCache') {\n\t\t\tWeakMap()\n\t\t};\n\t\tcache.atIfAbsentPut(self) {\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "System",
  "once",
  ["self", "where", "key"],
  sl.annotateFunction(function (_self, _where, _key) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _where, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_where, _key, _self);
  }, ["self", "where", "key"]),
  "{ :self :where :key |\n\t\twhere.cached(key, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "System",
  "repeatedTiming",
  ["self:/0", "interval"],
  sl.annotateFunction(function (_self_0, _interval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _interval";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _timeList = [];
    let _currentTime = _sessionTime_1(_system);
    let _endTime = _plusSign_2(_currentTime, _interval);
    let _answer = _self_0();
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _previousTime = _currentTime;
        /* Statements */
        _currentTime = _sessionTime_1(_system);
        _add_2(_timeList, _hyphenMinus_2(_currentTime, _previousTime));
        return _lessThanSign_2(_currentTime, _endTime);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_0();
      }, []),
    );
    return [_trimmedMean_2(_timeList, [0.25, 0.25]), _answer];
  }, ["self:/0", "interval"]),
  "{ :self:/0 :interval |\n\t\tlet timeList = [];\n\t\tlet currentTime = system.sessionTime;\n\t\tlet endTime = currentTime + interval;\n\t\tlet answer = self();\n\t\t{\n\t\t\tlet previousTime = currentTime;\n\t\t\tcurrentTime := system.sessionTime;\n\t\t\ttimeList.add(currentTime - previousTime);\n\t\t\tcurrentTime < endTime\n\t\t}.whileTrue {\n\t\t\tself()\n\t\t};\n\t\t[\n\t\t\ttimeList.trimmedMean([0.25 0.25]),\n\t\t\tanswer\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "System",
  "timing",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _timing_2(_system, _self_0);
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\tsystem.timing(self:/0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "System",
  "seedRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seedRandom_2(_system, _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.seedRandom(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "seedRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seedRandom_2(_system, _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.seedRandom(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplOperatorCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplOperatorCharacter(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplOperatorCharacter(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplOperatorToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplOperatorToken(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplOperatorToken(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplPunctuationCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplPunctuationCharacter(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplPunctuationCharacter(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplPunctuationToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplPunctuationToken(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplPunctuationToken(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplSyntaxCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplSyntaxCharacter(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplSyntaxCharacter(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSplSyntaxToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSplSyntaxToken(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.isSplSyntaxToken(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splOperatorNameToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(
        _splOperatorNameTable_1(_system),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_value_1(_each), _self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_key_1(_each));
            }, []),
          );
        }, ["each"]),
      );
      return null;
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tsystem.splOperatorNameTable.associationsDo { :each |\n\t\t\t\t(each.value = self).ifTrue {\n\t\t\t\t\teach.key.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splOperatorTokenName",
  ["self", "table"],
  sl.annotateFunction(function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSplOperatorToken_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _splPunctuationTokenName_2(_self, _table);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "splOperatorTokenName: not operator token");
      }, []),
    );
  }, ["self", "table"]),
  "{ :self :table |\n\t\tself.isSplOperatorToken.if {\n\t\t\tself.splPunctuationTokenName(table)\n\t\t} {\n\t\t\tself.error('splOperatorTokenName: not operator token')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splOperatorTokenName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splOperatorTokenName_2(
      _self,
      _splPunctuationCharacterNameTable_1(_system),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.splOperatorTokenName(\n\t\t\tsystem.splPunctuationCharacterNameTable\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splParseExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tree = _splParseTree_1(_self);
    let _f_1 = sl.annotateFunction(function (_e) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _e";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _o = _first_1(_e);
      let _p = _allButFirst_1(_e);
      /* Statements */
      return _caseOf_3(
        _o,
        [
          _hyphenMinusGreaterThanSign_2(
            "Apply",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2(
                _f_1(_at_2(_p, 1)),
                _collect_2(_allButFirst_1(_p), _f_1),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Arguments",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("𝓐", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Assignment",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("←", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Block",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("𝜆", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Identifier",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Symbol_1(_at_2(_p, 1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "LargeInteger",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _parseLargeInteger_1(_allButLast_1(_at_2(_p, 1)));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Let",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("≔", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "List",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("𝓛", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Operator",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Symbol_1(_at_2(_p, 1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Program",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _SymbolicExpression_2("𝒫", _collect_2(_p, _f_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "ReservedIdentifier",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _caseOf_2(_at_2(_p, 1), [
                _hyphenMinusGreaterThanSign_2(
                  "false",
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return false;
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  "nil",
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return null;
                  }, []),
                ),
                _hyphenMinusGreaterThanSign_2(
                  "true",
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return true;
                  }, []),
                ),
              ]);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "SmallFloat",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _parseNumber_1(_at_2(_p, 1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "SmallInteger",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _parseSmallInteger_2(_at_2(_p, 1), 10);
            }, []),
          ),
        ],
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            _plusSignPlusSign_2("String>>splParseExpression: ", _o),
          );
        }, []),
      );
    }, ["e"]);
    /* Statements */
    return _f_1(_tree);
  }, ["self"]),
  "{ :self |\n\t\tlet tree = self.splParseTree;\n\t\tlet f = { :e |\n\t\t\tlet o = e.first;\n\t\t\tlet p = e.allButFirst;\n\t\t\to.caseOf(\n\t\t\t\t[\n\t\t\t\t\t'Apply' -> {\n\t\t\t\t\t\tSymbolicExpression(f(p[1]), p.allButFirst.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Arguments' -> {\n\t\t\t\t\t\tSymbolicExpression('𝓐', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Assignment' -> {\n\t\t\t\t\t\tSymbolicExpression('←', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Block' -> {\n\t\t\t\t\t\tSymbolicExpression('𝜆', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Identifier' -> {\n\t\t\t\t\t\tSymbol(p[1])\n\t\t\t\t\t},\n\t\t\t\t\t'LargeInteger' -> {\n\t\t\t\t\t\tp[1].allButLast.parseLargeInteger\n\t\t\t\t\t},\n\t\t\t\t\t'Let' -> {\n\t\t\t\t\t\tSymbolicExpression('≔', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'List' -> {\n\t\t\t\t\t\tSymbolicExpression('𝓛', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'Operator' -> {\n\t\t\t\t\t\tSymbol(p[1])\n\t\t\t\t\t},\n\t\t\t\t\t'Program' -> {\n\t\t\t\t\t\tSymbolicExpression('𝒫', p.collect(f:/1))\n\t\t\t\t\t},\n\t\t\t\t\t'ReservedIdentifier' -> {\n\t\t\t\t\t\tp[1].caseOf(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t'false' -> { false },\n\t\t\t\t\t\t\t\t'nil' -> { nil },\n\t\t\t\t\t\t\t\t'true' -> { true }\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t},\n\t\t\t\t\t'SmallFloat' -> {\n\t\t\t\t\t\tp[1].parseNumber\n\t\t\t\t\t},\n\t\t\t\t\t'SmallInteger' -> {\n\t\t\t\t\t\tp[1].parseSmallInteger(10)\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t) {\n\t\t\t\tself.error('String>>splParseExpression: ' ++ o)\n\t\t\t}\n\t\t};\n\t\tf(tree)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splParseTree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.rewriteSlToAst(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.rewriteSlToAst(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splPunctuationTokenName",
  ["self", "table"],
  sl.annotateFunction(function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _camelCase_1(
        _collect_2(
          _contents_1(_self),
          sl.annotateFunction(function (_letter) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _letter";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_table, _letter);
          }, ["letter"]),
        ),
      ),
    );
  }, ["self", "table"]),
  "{ :self :table |\n\t\tself.contents.collect { :letter |\n\t\t\ttable[letter]\n\t\t}.camelCase.stringCatenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splPunctuationTokenName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splPunctuationTokenName_2(
      _self,
      _splPunctuationCharacterNameTable_1(_system),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.splPunctuationTokenName(\n\t\t\tsystem.splPunctuationCharacterNameTable\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "splSimplify",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.rewriteSlToCore(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.rewriteSlToCore(_self);>\n\t}",
);
