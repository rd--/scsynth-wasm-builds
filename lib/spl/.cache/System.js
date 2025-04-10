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
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ==(self, anObject) }",
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
  "{ :unused | <primitive: return Date.now() / 1000;>\n }",
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
  "{ :self | <primitive: return Math.random();>\n }",
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
  "{ :self | if(isLittleEndian(self), { -1 }, { 1 }) }",
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
  "{ :self | <primitive: return _self.cache;>\n }",
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
  "{ :self | <primitive: return _self.window.caches;>\n }",
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
  "{ :unused | <primitive: console.clear;\n\t\treturn null;>\n }",
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
  "{ :unused :message | <primitive: console.error(_message);\n\t\treturn null;>\n }",
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
  "{ :unused :message | <primitive: console.log(_message);\n\t\treturn null;>\n }",
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
  "{ :unused :message | <primitive: console.warn(_message);\n\t\treturn null;>\n }",
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
  "{ :unused :aString | <primitive: return sl.evaluateForSignalling('*Interactive*', _aString);>\n }",
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
  "{ :self :aString :aBlock:/1 | ifError({ evaluateOrSignalError(self,aString) }, { :err | aBlock(err) }) }",
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
  "{ :self :aString | evaluateNotifying(self, aString, { :err | consoleError(self,err) }) }",
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
  "{ :self | ifNil(environmentVariable(self,'HOME'), { error(self,'homeDirectory: not set') }) }",
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
  "{ :unused | =(at(unsigned32BitWordList(1), 1), 1072693248) }",
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
  "{ :self | not(isBigEndian(self)) }",
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
  "{ :unused :fileName | <primitive: evaluateFile(_fileName);>\n }",
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
  "{ :unused :url | <primitive: evaluateUrl(_url);>\n }",
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
  "{ :self | <primitive: return _self.window.localStorage;>\n }",
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
  "{ :unused | <primitive: const aDate = new Date(0);\n\t\treturn aDate.getTimezoneOffset();>\n }",
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
  "{ :self | <primitive: return _self.methodDictionary;>\n }",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "operatorCharacters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "operatorCharacters",
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
  "{ :self | cached(self, 'operatorCharacters', { contents('&*^@$=!>-<#%+?\\\\/~|') }) }",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "operatorNameTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _punctuationCharacterNameTable_1(_self);
    /* Statements */
    return _cached_3(
      _self,
      "operatorNameTable",
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
                "&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\ // ~= ~~ ||",
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
                _operatorTokenName_2(_each, _table),
              );
            }, ["each"]),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let table = punctuationCharacterNameTable(self); cached(self, 'operatorNameTable', { asRecord(collect(++(collect(['& * ^ @ $ = ! > - < # % + ? \\\\ / ~ |', '&& @* @> == !^ !> !+ !~ >= >> >~ -> - <= <! <- << <~ ++ \\\\\\\\ // ~= ~~ ||', '>>> <=> +++'],words:/1)), { :each | ->(each, operatorTokenName(each,table)) })) }) }",
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
  "{ :self | <primitive: return _self.packageDictionary;>\n }",
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
  "{ :self :aString | consoleNotification(self,aString) }",
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
  "{ :self :path :defaultValue | preferencesReadPath(self,splitBy(path,'/'), defaultValue) }",
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
        return _Record_1([]);
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'preferences', { Record([]) }) }",
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
  "{ :self :key | <primitive: return sl.preferencesRead(_preferences_1(_self), _key);>\n }",
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
              _notNil_1(_item),
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
  "{ :self :path :defaultValue | if(isEmpty(path), { error(self,'System>>preferencesReadPath: empty path') }, { let item = preferencesRead(self,at(path, 1)); let index = 2; whileTrue({ &(notNil(item), { <=(index, size(path)) }) }, { item := atIfAbsent(item, at(path, index), { nil }); index := +(index, 1) }); ?(item, { defaultValue }) }) }",
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
  "{ :unused | ['cache', 'methodDictionary', 'traitDictionary', 'typeDictionary', 'packageDictionary', 'window', 'library', 'transcript'] }",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "punctuationCharacterNameTable",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.punctuationCharacterNameTable;
  }, ["unused"]),
  "{ :unused | <primitive: return sl.punctuationCharacterNameTable;>\n }",
);

sl.addMethodToExistingType(
  "System",
  "System",
  "punctuationCharacters",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.punctuationCharacters.split("");
  }, ["unused"]),
  "{ :unused | <primitive: return sl.punctuationCharacters.split('');>\n }",
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
  "{ :self | next(randomNumberGenerator(self)) }",
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
  "{ :unused :anInteger | <primitive: let bytes = new Uint8Array(_anInteger);\n\t\tcrypto.getRandomValues(bytes);\n\t\treturn bytes;>\n }",
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
  "{ :self | cached(self, 'randomNumberGenerator', { Sfc32(absoluteTime(self)) }) }",
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
  "{ :self :anInteger | initialize(randomNumberGenerator(self),anInteger) }",
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
  "{ :self | sessionStorage(window(self)) }",
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
  "{ :unused | <primitive: return Number.EPSILON;>\n }",
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
  "{ :unused | <primitive: return Number.MAX_VALUE;>\n }",
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
  "{ :self | ifNil(environmentVariable(self,'SPL_DIR'), { error(self,'splDirectory: not set') }) }",
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
  "{ :self :aString | format('%/%',[splDirectory(self), aString]) }",
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
    return _asUrl_1(
      _plusSignPlusSign_2("https://rohandrape.net/sw/spl/", _aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString | asUrl((++('https://rohandrape.net/sw/spl/', aString))) }",
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
  "{ :self :aBlock:/0 | let beginTime = sessionTime(self); let answer = aBlock(); let endTime = sessionTime(self); [-(endTime, beginTime), answer] }",
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
  "{ :self | <primitive: return _self.traitDictionary;>\n }",
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
  "{ :self | <primitive: return _self.typeDictionary;>\n }",
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
  "{ :unused | <primitive: return performance.now();>\n }",
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
  "{ :unused | <primitive: return performance.now() / 1000;>\n }",
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
  "{ :self | let answer = cached(self, 'uniqueId', { 1 }); atPut(cache(self), 'uniqueId', +(answer, 1)); answer }",
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
  "{ :self :anInteger | atPut(cache(self), 'uniqueId', anInteger) }",
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
  "{ :unused | <primitive: return Date.now();>\n }",
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
  "{ :self | <primitive: return _self.window;>\n }",
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
  "{ :self | cached(self, 'workspace', { Record() }) }",
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
  "{ :self | let cache = cached(system, 'onceCache', { WeakMap() }); atIfAbsentPut(cache, self, { value(self) }) }",
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
  "{ :self :where :key | cached(where,key, self) }",
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
  "{ :self:/0 :interval | let timeList = []; let currentTime = sessionTime(system); let endTime = +(currentTime, interval); let answer = self(); whileTrue({ let previousTime = currentTime; currentTime := sessionTime(system); add(timeList,-(currentTime, previousTime)); <(currentTime, endTime) }, { self() }); [trimmedMean(timeList,[0.25, 0.25]), answer] }",
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
  "{ :self:/0 | timing(system,self:/0) }",
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
  "{ :self | seedRandom(system,self) }",
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
  "{ :self | seedRandom(system,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isOperatorCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isOperatorCharacter(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isOperatorCharacter(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isOperatorToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isOperatorToken(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isOperatorToken(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isPunctuationCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isPunctuationCharacter(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isPunctuationCharacter(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isPunctuationToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isPunctuationToken(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isPunctuationToken(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSyntaxCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSyntaxCharacter(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isSyntaxCharacter(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "isSyntaxToken",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.isSyntaxToken(_self);
  }, ["self"]),
  "{ :self | <primitive: return sl.isSyntaxToken(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "operatorNameToken",
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
        _operatorNameTable_1(_system),
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
  "{ :self | valueWithReturn({ :return:/1 | associationsDo(operatorNameTable(system), { :each | ifTrue((=(value(each), self)), { return(key(each)) }) }); nil }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "operatorTokenName",
  ["self", "table"],
  sl.annotateFunction(function (_self, _table) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _table";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOperatorToken_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _punctuationTokenName_2(_self, _table);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "operatorTokenName: not operator token");
      }, []),
    );
  }, ["self", "table"]),
  "{ :self :table | if(isOperatorToken(self), { punctuationTokenName(self,table) }, { error(self,'operatorTokenName: not operator token') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "operatorTokenName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _operatorTokenName_2(
      _self,
      _punctuationCharacterNameTable_1(_system),
    );
  }, ["self"]),
  "{ :self | operatorTokenName(self,punctuationCharacterNameTable(system)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "punctuationTokenName",
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
  "{ :self :table | stringCatenate(camelCase(collect(contents(self), { :letter | at(table, letter) }))) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "System",
  "punctuationTokenName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _punctuationTokenName_2(
      _self,
      _punctuationCharacterNameTable_1(_system),
    );
  }, ["self"]),
  "{ :self | punctuationTokenName(self,punctuationCharacterNameTable(system)) }",
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
      return _caseOfOtherwise_3(
        _o,
        [
          _hyphenMinusGreaterThanSign_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Apply";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Arguments";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Assignment";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Block";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Identifier";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "LargeInteger";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Let";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "List";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Operator";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Program";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "ReservedIdentifier";
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _caseOf_2(_at_2(_p, 1), [
                _hyphenMinusGreaterThanSign_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return "false";
                  }, []),
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
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return "nil";
                  }, []),
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
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return "true";
                  }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "SmallFloat";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "SmallInteger";
            }, []),
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
  "{ :self | let tree = splParseTree(self); let f = { :e | let o = first(e); let p = allButFirst(e); caseOfOtherwise(o, [->({ 'Apply' }, { SymbolicExpression(f(at(p, 1)), collect(allButFirst(p),f:/1)) }), ->({ 'Arguments' }, { SymbolicExpression('𝓐', collect(p,f:/1)) }), ->({ 'Assignment' }, { SymbolicExpression('←', collect(p,f:/1)) }), ->({ 'Block' }, { SymbolicExpression('𝜆', collect(p,f:/1)) }), ->({ 'Identifier' }, { Symbol(at(p, 1)) }), ->({ 'LargeInteger' }, { parseLargeInteger(allButLast(at(p, 1))) }), ->({ 'Let' }, { SymbolicExpression('≔', collect(p,f:/1)) }), ->({ 'List' }, { SymbolicExpression('𝓛', collect(p,f:/1)) }), ->({ 'Operator' }, { Symbol(at(p, 1)) }), ->({ 'Program' }, { SymbolicExpression('𝒫', collect(p,f:/1)) }), ->({ 'ReservedIdentifier' }, { caseOf(at(p, 1),[->({ 'false' }, { false }), ->({ 'nil' }, { nil }), ->({ 'true' }, { true })]) }), ->({ 'SmallFloat' }, { parseNumber(at(p, 1)) }), ->({ 'SmallInteger' }, { parseSmallInteger(at(p, 1),10) })], { error(self,++('String>>splParseExpression: ', o)) }) }; f(tree) }",
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
  "{ :self | <primitive: return sl.rewriteSlToAst(_self);>\n }",
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
  "{ :self | <primitive: return sl.rewriteSlToCore(_self);>\n }",
);
