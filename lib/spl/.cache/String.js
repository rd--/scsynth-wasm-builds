/*  Requires: Character List  */

sl.addType(
  true,
  "String",
  "String",
  [
    "Object",
    "Storeable",
    "Equatable",
    "Comparable",
    "Json",
    "Iterable",
    "Indexable",
    "Character",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "String",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "String",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "String",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "String",
);

sl.copyTraitMethodsToType(
  "Json",
  "String",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "String",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "String",
);

sl.copyTraitMethodsToType(
  "Character",
  "String",
);

sl.addMethodToExistingType(
  "String",
  "String",
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
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isCharacter_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(
              _codePoint_1(_self),
              _codePoint_1(_anObject),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSignEqualsSign_2(_self, _anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isCharacter.if {\n\t\t\tanObject.isCharacter & {\n\t\t\t\tself.codePoint == anObject.codePoint\n\t\t\t}\n\t\t} {\n\t\t\tself == anObject\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "plusSignPlusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedAppendString_2(_self, _asString_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.uncheckedAppendString(anObject.asString)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_codePoint_1(_self), _codePoint_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.codePoint < operand.codePoint\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "abbreviateTo",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _truncateTo_2(_self, _hyphenMinus_2(_anInteger, 8)),
      "... &etc",
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.truncateTo(anInteger - 8) ++ '... &etc'\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "allButFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButFirst_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.allButFirst(1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "allButFirst",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(_n, 1), _size_1(_self));
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.copyFromTo(n + 1, self.size)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "allButLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButLast_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.allButLast(1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "allButLast",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _end = _hyphenMinus_2(_size_1(_self), _n);
    /* Statements */
    return _if_3(
      _equalsSign_2(_end, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _end);
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet end = self.size - n;\n\t\t(end = 0).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.copyFromTo(1, end)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asBracketedComment",
  ["self", "open", "close"],
  sl.annotateFunction(function (_self, _open, _close) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _open, _close";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _includesSubstring_2(_self, _open),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _includesSubstring_2(_self, _close);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>asBracketedComment: includes comment brackets",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _unwords_1([_open, _self, _close]);
      }, []),
    );
  }, ["self", "open", "close"]),
  "{ :self :open :close |\n\t\t(self.includesSubstring(open) | {\n\t\t\tself.includesSubstring(close)\n\t\t}).if {\n\t\t\tself.error('String>>asBracketedComment: includes comment brackets')\n\t\t} {\n\t\t\t[open, self, close].unwords\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asciiByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _utf8ByteArray_1(_self);
    /* Statements */
    return _if_3(
      _allSatisfy_2(_answer, _isAsciiCodePoint_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>asciiByteArray: non-ascii character");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.utf8ByteArray;\n\t\tanswer.allSatisfy(isAsciiCodePoint:/1).if {\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('String>>asciiByteArray: non-ascii character')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asciiList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asciiByteArray.asList\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asciiValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_asciiByteArray_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>asciiValue: not single character");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 1).if {\n\t\t\tself.asciiByteArray.first\n\t\t} {\n\t\t\tself.error('String>>asciiValue: not single character')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asCodePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _codePoint_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.codePoint\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asHaskellComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBracketedComment_3(_self, "{-", "-}");
  }, ["self"]),
  "{ :self |\n\t\tself.asBracketedComment('{-', '-}')\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asHexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _base16Encode_1(_asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asciiByteArray.base16Encode\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asLowerCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toLowerCase();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.toLowerCase();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asMlComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBracketedComment_3(_self, "(*", "*)");
  }, ["self"]),
  "{ :self |\n\t\tself.asBracketedComment('(*', '*)')\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asPliComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBracketedComment_3(_self, "/*", "*/");
  }, ["self"]),
  "{ :self |\n\t\tself.asBracketedComment('/*', '*/')\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "assertIsCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_size_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "assertIsCharacter");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 1).ifFalse {\n\t\t\tself.error('assertIsCharacter')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "assertIsString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentitySet_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tIdentitySet(self.characters)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Set_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSet(self.characters)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asUpperCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toUpperCase();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.toUpperCase(); >\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _codePoint = _codePointAt_2(_self, _index);
        /* Statements */
        return _ifNil_3(
          _codePoint,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifAbsent_0();
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isUtf16SurrogateCodePoint_1(_codePoint),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "String>>at: code point is lone surrogate",
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _fromCodePoint_1(_codePoint);
              }, []),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
    );
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\t/* Note: index is in Utf-16 code units, not characters */\n\t\tself.includesIndex(index).if {\n\t\t\tlet codePoint = self.codePointAt(index);\n\t\t\tcodePoint.ifNil {\n\t\t\t\tifAbsent()\n\t\t\t} {\n\t\t\t\tcodePoint.isUtf16SurrogateCodePoint.if {\n\t\t\t\t\tself.error('String>>at: code point is lone surrogate')\n\t\t\t\t} {\n\t\t\t\t\tcodePoint.fromCodePoint\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tifAbsent()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "atAll",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(
      _self,
      sl.annotateFunction(function (_c) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _atAll_2(_c, _indices);
      }, ["c"]),
    );
  }, ["self", "indices"]),
  "{ :self :indices |\n\t\tself.onCharacters { :c |\n\t\t\tc.atAll(indices)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "beginsWith",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    if (typeof _aString === "string") {
      return _self.startsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "String>>beginsWith: non string operand");
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(typeof _aString === 'string') {\n\t\t\treturn _self.startsWith(_aString);\n\t\t}\n\t\t>\n\t\tself.error('String>>beginsWith: non string operand')\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "beginsWithAny",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _aCollection,
      sl.annotateFunction(function (_prefix) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _prefix";
          throw new Error(errorMessage);
        } /* Statements */
        return _beginsWith_2(_self, _prefix);
      }, ["prefix"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.anySatisfy { :prefix |\n\t\t\tself.beginsWith(prefix)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "caesarCipher",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = [];
    /* Statements */
    _do_2(
      _asciiByteArray_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _between_2(_i, [97, 122]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _c,
              _plusSign_2(
                _percentSign_2(_plusSign_2(_plusSign_2(_i, _n), 7), 26),
                97,
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _between_2(_i, [65, 90]),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _c,
                  _plusSign_2(
                    _percentSign_2(_plusSign_2(_plusSign_2(_i, _n), 13), 26),
                    65,
                  ),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_c, _i);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _asciiString_1(_c);
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet c = [];\n\t\tself.asciiByteArray.do { :i |\n\t\t\ti.between([97 122]).if {\n\t\t\t\tc.add((i + n + 7) % 26 + 97)\n\t\t\t} {\n\t\t\t\ti.between([65 90]).if {\n\t\t\t\t\tc.add((i + n + 13) % 26 + 65)\n\t\t\t\t} {\n\t\t\t\t\tc.add(i)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tc.asciiString\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "capitalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[0].toUpperCase() + _self.slice(1);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self[0].toUpperCase() + _self.slice(1);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characterCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_3(
      _associations_1(_asIdentityMultiset_1(_characters_1(_self))),
      _verticalLineGreaterThanSignEqualsSign_2,
      _value_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.characters\n\t\t.asIdentityMultiset\n\t\t.associations\n\t\t.sort(|>=, value:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characterCounts",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_3(
      _associations_1(
        _asIdentityMultiset_1(
          _collect_2(
            _partition_3(_characters_1(_self), _n, 1),
            _stringCatenate_1,
          ),
        ),
      ),
      _verticalLineGreaterThanSignEqualsSign_2,
      _value_1,
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself\n\t\t.characters\n\t\t.partition(n, 1)\n\t\t.collect(stringCatenate:/1)\n\t\t.asIdentityMultiset\n\t\t.associations\n\t\t.sort(|>=, value:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characterRange",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _characterRange_2(_asCharacter_1(_self), _asCharacter_1(_aString)),
      _asString_1,
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself\n\t\t.asCharacter\n\t\t.characterRange(aString.asCharacter)\n\t\t.collect(asString:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveCollectInto_3(_self, _identity_1, []);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveCollectInto(identity:/1, [])\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characterString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>characterString: not single character string",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCharacter.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('String>>characterString: not single character string')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "characterList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectInto_3(_self, _identity_1, []);
  }, ["self"]),
  "{ :self |\n\t\tself.collectInto(identity:/1, [])\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "codePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _codePointAt_2(_self, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>codePoint: not single character string",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCharacter.if {\n\t\t\tself.codePointAt(1)\n\t\t} {\n\t\t\tself.error('String>>codePoint: not single character string')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "codePointAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.codePointAt(_index - 1);
  }, ["self", "index"]),
  "{ :self :index |\n\t\t<primitive: return _self.codePointAt(_index - 1);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "codePoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectInto_3(_self, _codePoint_1, []);
  }, ["self"]),
  "{ :self |\n\t\tself.collectInto(codePoint:/1, [])\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "collectInto",
  ["self", "aBlock:/1", "aCollection"],
  sl.annotateFunction(function (_self, _aBlock_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveCollectInto_3(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_asCharacter_1(_each));
      }, ["each"]),
      [],
    );
  }, ["self", "aBlock:/1", "aCollection"]),
  "{ :self :aBlock:/1 :aCollection |\n\t\tself.primitiveCollectInto({ :each |\n\t\t\taBlock(each.asCharacter)\n\t\t}, [])\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "compare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _lexicographicCompare_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.lexicographicCompare(operand)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contractTo_2(_self, 32);
  }, ["self"]),
  "{ :self |\n\t\tself.contractTo(32)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "contractTo",
  ["self", "smallSize"],
  sl.annotateFunction(function (_self, _smallSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), _smallSize),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_smallSize, 5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _copyFromTo_3(_self, 1, _smallSize);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _leftSize = _solidusSolidus_2(_hyphenMinus_2(_smallSize, 2), 2);
            /* Statements */
            return _copyReplaceFromToWith_4(
              _self,
              _plusSign_2(_leftSize, 1),
              _hyphenMinus_2(
                _size_1(_self),
                _hyphenMinus_2(_hyphenMinus_2(_smallSize, _leftSize), 3),
              ),
              "...",
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "smallSize"]),
  "{ :self :smallSize |\n\t\t(self.size <= smallSize).if {\n\t\t\tself\n\t\t} {\n\t\t\t(smallSize < 5).if {\n\t\t\t\tself.copyFromTo(1, smallSize)\n\t\t\t} {\n\t\t\t\tlet leftSize = smallSize - 2 // 2;\n\t\t\t\tself.copyReplaceFromToWith(\n\t\t\t\t\tleftSize + 1,\n\t\t\t\t\tself.size - (smallSize - leftSize - 3),\n\t\t\t\t\t'...'\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "copyFromTo",
  ["self", "start", "end"],
  sl.annotateFunction(function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _includesIndex_2(_self, _start),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "copyFromTo: invalid start index");
      }, []),
    );
    _ifFalse_2(
      _includesIndex_2(_self, _end),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "copyFromTo: invalid end index");
      }, []),
    );
    return _if_3(
      _greaterThanSign_2(_start, _end),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedCopyFromTo_3(_self, _start, _end);
      }, []),
    );
  }, ["self", "start", "end"]),
  "{ :self :start :end |\n\t\tself.includesIndex(start).ifFalse {\n\t\t\tself.error('copyFromTo: invalid start index')\n\t\t};\n\t\tself.includesIndex(end).ifFalse {\n\t\t\tself.error('copyFromTo: invalid end index')\n\t\t};\n\t\t(start > end).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.uncheckedCopyFromTo(start, end)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "copyReplaceFromToWith",
  ["self", "start", "stop", "replacement"],
  sl.annotateFunction(function (_self, _start, _stop, _replacement) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _replacement";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1([
      _copyFromTo_3(_self, 1, _hyphenMinus_2(_start, 1)),
      _replacement,
      _copyFromTo_3(_self, _plusSign_2(_stop, 1), _size_1(_self)),
    ]);
  }, ["self", "start", "stop", "replacement"]),
  "{ :self :start :stop :replacement |\n\t\t[\n\t\t\tself.copyFromTo(1, start - 1),\n\t\t\treplacement,\n\t\t\tself.copyFromTo(stop + 1, self.size)\n\t\t].stringCatenate\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "countCharacters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.do { :each |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "countUtf16CodeUnits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "decapitalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[0].toLowerCase() + _self.slice(1);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self[0].toLowerCase() + _self.slice(1);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "difference",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _difference_2(_characters_1(_self), _characters_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.characters.difference(\n\t\t\toperand.characters\n\t\t).stringCatenate\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_each);
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.primitiveDo { :each |\n\t\t\taBlock(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "drop",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_anInteger, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, _plusSign_2(_anInteger, 1), _size_1(_self));
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(anInteger >= self.size).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.copyFromTo(anInteger + 1, self.size)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "endsWith",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    if (typeof _aString === "string") {
      return _self.endsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "String>>endsWith: non string operand");
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(typeof _aString === 'string') {\n\t\t\treturn _self.endsWith(_aString);\n\t\t}\n\t\t>\n\t\tself.error('String>>endsWith: non string operand')\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "equalIgnoringExtraWhitespace",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalIgnoringExtraWhitespace_3(
      _characters_1(_self),
      _characters_1(_operand),
      _isSeparator_1,
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.characters.equalIgnoringExtraWhitespace(operand.characters, isSeparator:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "findLastOccurrenceOfStringStartingAt",
  ["self", "subString", "start"],
  sl.annotateFunction(function (_self, _subString, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subString, _start";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _last = _findStringStartingAt_3(_self, _subString, _start);
    /* Statements */
    return _if_3(
      _equalsSign_2(_last, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_last, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _answer = _last;
            return _last = _findStringStartingAt_3(
              _self,
              _subString,
              _plusSign_2(_last, 1),
            );
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self", "subString", "start"]),
  "{ :self :subString :start |\n\t\tlet last = self.findStringStartingAt(subString, start);\n\t\t(last = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet answer = nil;\n\t\t\t{\n\t\t\t\tlast > 0\n\t\t\t}.whileTrue {\n\t\t\t\tanswer := last;\n\t\t\t\tlast := self.findStringStartingAt(subString, last + 1)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "findPreviousOccurrenceOfStringStartingAt",
  ["self", "subString", "start"],
  sl.annotateFunction(function (_self, _subString, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subString, _start";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.lastIndexOf(_subString, _start - 1) + 1;
  }, ["self", "subString", "start"]),
  "{ :self :subString :start |\n\t\t<primitive: return _self.lastIndexOf(_subString, _start - 1) + 1;>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "findStringStartingAt",
  ["self", "aString", "anInteger"],
  sl.annotateFunction(function (_self, _aString, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfSubstringStartingAt_3(_self, _aString, _anInteger);
  }, ["self", "aString", "anInteger"]),
  "{ :self :aString :anInteger |\n\t\tself.indexOfSubstringStartingAt(aString, anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "findString",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfSubstring_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.indexOfSubstring(aString)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "first",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself[1]\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "first",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _self,
      1,
      _hyphenMinus_2(_plusSign_2(1, _anInteger), 1),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.copyFromTo(1, 1 + anInteger - 1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstBracketedCommentIfAbsent",
  ["self", "open", "close", "aBlock:/0"],
  sl.annotateFunction(function (_self, _open, _close, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _open, _close, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = _findString_2(_self, _open);
    let _end = _findString_2(_self, _close);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_start, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_end, 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(
          _self,
          _plusSign_2(_start, _size_1(_open)),
          _hyphenMinus_2(_end, 1),
        );
      }, []),
    );
  }, ["self", "open", "close", "aBlock:/0"]),
  "{ :self :open :close :aBlock:/0 |\n\t\tlet start = self.findString(open);\n\t\tlet end = self.findString(close);\n\t\t(start = 0 | {\n\t\t\tend = 0\n\t\t}).if {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.copyFromTo(start + open.size, end - 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstBracketedComment",
  ["self", "open", "close"],
  sl.annotateFunction(function (_self, _open, _close) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _open, _close";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstBracketedCommentIfAbsent_4(
      _self,
      _open,
      _close,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>firstBracketedComment: no comment found",
        );
      }, []),
    );
  }, ["self", "open", "close"]),
  "{ :self :open :close |\n\t\tself.firstBracketedCommentIfAbsent(open, close) {\n\t\t\tself.error('String>>firstBracketedComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstHsCommentIfAbsent",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, "{-", "-}", _aBlock_0);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tself.firstBracketedCommentIfAbsent('{-', '-}', aBlock:/0)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstHsComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstHsCommentIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>firstHsComment: no comment found");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.firstHsCommentIfAbsent {\n\t\t\tself.error('String>>firstHsComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstMlCommentIfAbsent",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, "(*", "*)", _aBlock_0);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tself.firstBracketedCommentIfAbsent('(*', '*)', aBlock:/0)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstMlComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstMlCommentIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>firstMlComment: no comment found");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.firstMlCommentIfAbsent {\n\t\t\tself.error('String>>firstMlComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstPliCommentIfAbsent",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, "/*", "*/", _aBlock_0);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tself.firstBracketedCommentIfAbsent('/*', '*/', aBlock:/0)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "firstPliComment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _firstPliCommentIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>firstPliComment: no comment found");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.firstPliCommentIfAbsent {\n\t\t\tself.error('String>>firstPliComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "format",
  ["self", "arguments"],
  sl.annotateFunction(function (_self, _arguments) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _arguments";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, "%");
    /* Statements */
    return _if_3(
      _equalsSign_2(_plusSign_2(_size_1(_arguments), 1), _size_1(_parts)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringCatenate_1(
          _riffle_2(_parts, _collect_2(_arguments, _asString_1)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "format: incorrect number of arguments");
      }, []),
    );
  }, ["self", "arguments"]),
  "{ :self :arguments |\n\t\tlet parts = self.splitBy('%');\n\t\t(arguments.size + 1 = parts.size).if {\n\t\t\tparts.riffle(arguments.collect(asString:/1)).stringCatenate\n\t\t} {\n\t\t\tself.error('format: incorrect number of arguments')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "fromRomanNumeral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, "N"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _value = 0;
        let _v1 = 0;
        let _v2 = 0;
        let _letters = _asciiByteArray_1("IVXLCDM");
        /* Statements */
        _reverseDo_2(
          _asciiByteArray_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            _v1 = _at_2(
              [1, 5, 10, 50, 100, 500, 1000],
              _indexOf_2(_letters, _each),
            );
            _if_3(
              _greaterThanSignEqualsSign_2(_v1, _v2),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _value = _plusSign_2(_value, _v1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _value = _hyphenMinus_2(_value, _v1);
              }, []),
            );
            return _v2 = _v1;
          }, ["each"]),
        );
        return _value;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 'N').if {\n\t\t\t0\n\t\t} {\n\t\t\tlet value = 0;\n\t\t\tlet v1 = 0;\n\t\t\tlet v2 = 0;\n\t\t\tlet letters = 'IVXLCDM'.asciiByteArray;\n\t\t\tself.asciiByteArray.reverseDo { :each |\n\t\t\t\tv1 := [1, 5, 10, 50, 100, 500, 1000].at(letters.indexOf(each));\n\t\t\t\t(v1 >= v2).if {\n\t\t\t\t\tvalue := value + v1\n\t\t\t\t} {\n\t\t\t\t\tvalue := value - v1\n\t\t\t\t};\n\t\t\t\tv2 := v1\n\t\t\t};\n\t\t\tvalue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includesBy",
  ["self", "letter", "aBlock:/2"],
  sl.annotateFunction(function (_self, _letter, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _letter, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(
      _characters_1(_self),
      _characterString_1(_letter),
      _aBlock_2,
    );
  }, ["self", "letter", "aBlock:/2"]),
  "{ :self :letter :aBlock:/2 |\n\t\tself.characters.includesBy(letter.characterString, aBlock:/2)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "indefiniteArticle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVowel_1(_first_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "an";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "a";
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.first.isVowel.if {\n\t\t\t'an'\n\t\t} {\n\t\t\t'a'\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _to_2(1, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.size)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "indicesOf",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_aString),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _index = 1;
        let _end = _size_1(_self);
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _betweenAnd_3(_index, 1, _end);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _findStringStartingAt_3(_self, _aString, _index);
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_index, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, _index);
                return _index = _plusSign_2(_index, 1);
              }, []),
            );
          }, []),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("String>>indicesOf: not a string: ", _aString),
        );
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\taString.isString.if {\n\t\t\tlet answer = [];\n\t\t\tlet index = 1;\n\t\t\tlet end = self.size;\n\t\t\t{\n\t\t\t\tindex.betweenAnd(1, end)\n\t\t\t}.whileTrue {\n\t\t\t\tindex := self.findStringStartingAt(aString, index);\n\t\t\t\t(index != 0).ifTrue {\n\t\t\t\t\tanswer.add(index);\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('String>>indicesOf: not a string: ' ++ aString)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isAscii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_utf8ByteArray_1(_self), _isAsciiCodePoint_1);
  }, ["self"]),
  "{ :self |\n\t\tself.utf8ByteArray.allSatisfy(isAsciiCodePoint:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isAllWhiteSpace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return !/[^\t\n\r ]/.test(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return !/[^\\t\\n\\r ]/.test(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isAscii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_utf8ByteArray_1(_self), _isAsciiCodePoint_1);
  }, ["self"]),
  "{ :self |\n\t\tself.utf8ByteArray.allSatisfy(isAsciiCodePoint:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isBitVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isBitString_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\tself.isBitString\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isBlankLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _isSpace_1(_each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isTab_1(_each);
              }, []),
            );
          }, ["each"]),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.isSpace | {\n\t\t\t\t\teach.isTab\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_size_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_self), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isUtf16SurrogateCodePoint_1(_codePointAt_2(_self, 2));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.size = 1 | {\n\t\t\tself.size = 2 & {\n\t\t\t\tself.codePointAt(2).isUtf16SurrogateCodePoint\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isInBasicMultilingualPlane",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _countUtf16CodeUnits_1(_self),
      _countCharacters_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.countUtf16CodeUnits = self.countCharacters\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isImmediate",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isImmediateType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2([
      "Nil",
      "Boolean",
      "Block",
      "SmallFloat",
      "LargeInteger",
      "String",
    ], _self);
  }, ["self"]),
  "{ :self |\n\t\t['Nil', 'Boolean', 'Block', 'SmallFloat', 'LargeInteger', 'String']\n\t\t.includes(self)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isLiteral",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isLowerCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return /^[a-z]+$/.test(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return /^[a-z]+$/.test(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isNotEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEmpty_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.not\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isPalindrome",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPalindrome_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characters.isPalindrome\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isPrintableAscii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _utf8ByteArray_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_each, 32, 126);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.utf8ByteArray.allSatisfy { :each |\n\t\t\teach.betweenAnd(32, 126)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isPunctuation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return /\p{Punctuation}/u.test(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return /\\p{Punctuation}/u.test(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isSameAs",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _aString),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_asLowerCase_1(_self), _asLowerCase_1(_aString));
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t(self = aString).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.asLowerCase = aString.asLowerCase\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isUpperCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return /^[A-Z]+$/.test(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return /^[A-Z]+$/.test(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isWellFormed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isWellFormed();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.isWellFormed();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "last",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself[self.size]\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "last",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(
      _self,
      _plusSign_2(_hyphenMinus_2(_size_1(_self), _count), 1),
      _size_1(_self),
    );
  }, ["self", "count"]),
  "{ :self :count |\n\t\tself.copyFromTo(self.size - count + 1, self.size)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "letterCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_3(
      _associations_1(
        _asIdentityMultiset_1(_select_2(_characters_1(_self), _isLetter_1)),
      ),
      _verticalLineGreaterThanSignEqualsSign_2,
      _value_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.characters\n\t\t.select(isLetter:/1)\n\t\t.asIdentityMultiset\n\t\t.associations\n\t\t.sort(|>=, value:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "letterCounts",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_3(
      _associations_1(
        _asIdentityMultiset_1(
          _collect_2(
            _partition_3(_select_2(_characters_1(_self), _isLetter_1), _n, 1),
            _stringCatenate_1,
          ),
        ),
      ),
      _verticalLineGreaterThanSignEqualsSign_2,
      _value_1,
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself\n\t\t.characters\n\t\t.select(isLetter:/1)\n\t\t.partition(n, 1)\n\t\t.collect(stringCatenate:/1)\n\t\t.asIdentityMultiset\n\t\t.associations\n\t\t.sort(|>=, value:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "letterNumber",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOf_2(_namedAlphabet_1(_aString), _asLowerCase_1(_self));
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\taString.namedAlphabet.indexOf(\n\t\t\tself.asLowerCase\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lexicographicCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _localeCompare_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.localeCompare(operand)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lexicographicallyLeastRotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_1(
      _lexicographicallyLeastRotation_1(_characters_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.characters.lexicographicallyLeastRotation.stringJoin\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lineCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _plusSign_2(_lineFeedCount_1(_self), 1);
        /* Statements */
        _ifTrue_2(
          _isLineFeed_1(_last_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _hyphenMinus_2(_answer, 1);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t1\n\t\t} {\n\t\t\tlet answer = self.lineFeedCount + 1;\n\t\t\tself.last.isLineFeed.ifTrue {\n\t\t\t\tanswer := answer - 1\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lineFeedCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(_self, _isLineFeed_1);
  }, ["self"]),
  "{ :self |\n\t\tself.count(isLineFeed:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lines",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _splitBy_2(_withoutTrailingLineFeed_1(_self), "\n");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\tself.withoutTrailingLineFeed.splitBy('\\n')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "localeCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedLocaleCompare_2(_self, _operand);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "localeCompare: non string operand");
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isString.if {\n\t\t\tself.uncheckedLocaleCompare(operand)\n\t\t} {\n\t\t\tself.error('localeCompare: non string operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "namedAlphabet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          "english",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
            ];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "greek",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [
              "α",
              "β",
              "γ",
              "δ",
              "ε",
              "ζ",
              "η",
              "θ",
              "ι",
              "κ",
              "λ",
              "μ",
              "ν",
              "ξ",
              "ο",
              "π",
              "ρ",
              "σ",
              "τ",
              "υ",
              "φ",
              "χ",
              "ψ",
              "ω",
            ];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>namedAlphabet: unknown alphabet");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t'english' -> {\n\t\t\t\t\t[\n\t\t\t\t\t\t'a' 'b' 'c' 'd' 'e' 'f' 'g' 'h' 'i' 'j'\n\t\t\t\t\t\t'k' 'l' 'm' 'n' 'o' 'p' 'q' 'r' 's' 't'\n\t\t\t\t\t\t'u' 'v' 'w' 'x' 'y' 'z'\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t'greek' -> {\n\t\t\t\t\t[\n\t\t\t\t\t\t'α' 'β' 'γ' 'δ' 'ε' 'ζ' 'η' 'θ' 'ι' 'κ'\n\t\t\t\t\t\t'λ' 'μ' 'ν' 'ξ' 'ο' 'π' 'ρ' 'σ' 'τ' 'υ'\n\t\t\t\t\t\t'φ' 'χ' 'ψ' 'ω'\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\tself.error('String>>namedAlphabet: unknown alphabet')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "normalizeWhitespace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(/\s+/g, " ").trim();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.replace(/\\s+/g, ' ').trim();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "nub",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seen = [];
    /* Statements */
    return _select_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsentAdd_2(_seen, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet seen = [];\n\t\tself.select { :each |\n\t\t\tseen.ifAbsentAdd(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "nubSieve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nubSieve_1(_characters_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characters.nubSieve\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "occurrencesOf",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_aString),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = 1;
        let _end = _size_1(_self);
        let _tally = 0;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _betweenAnd_3(_index, 1, _end);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _findStringStartingAt_3(_self, _aString, _index);
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_index, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _tally = _plusSign_2(_tally, 1);
                return _index = _plusSign_2(_index, 1);
              }, []),
            );
          }, []),
        );
        return _tally;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "String>>occurrencesOf: not a string: ",
            _aString,
          ),
        );
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\taString.isString.if {\n\t\t\tlet index = 1;\n\t\t\tlet end = self.size;\n\t\t\tlet tally = 0;\n\t\t\t{\n\t\t\t\tindex.betweenAnd(1, end)\n\t\t\t}.whileTrue {\n\t\t\t\tindex := self.findStringStartingAt(aString, index);\n\t\t\t\t(index != 0).ifTrue {\n\t\t\t\t\ttally := tally + 1;\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\ttally\n\t\t} {\n\t\t\tself.error('String>>occurrencesOf: not a string: ' ++ aString)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "onCharacters",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(_aBlock_1(_characters_1(_self)));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.characters.aBlock.stringCatenate\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "onCharactersList",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aBlock_1(_characters_1(_self)), _stringCatenate_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.characters.aBlock.collect(stringCatenate:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "padLeft",
  ["self", "aList", "aString"],
  sl.annotateFunction(function (_self, _aList, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.padStart(_aList[0], _aString);
  }, ["self", "aList", "aString"]),
  "{ :self :aList :aString |\n\t\t<primitive: return _self.padStart(_aList[0], _aString);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "padRight",
  ["self", "aList", "aString"],
  sl.annotateFunction(function (_self, _aList, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.padEnd(_aList[0], _aString);
  }, ["self", "aList", "aString"]),
  "{ :self :aList :aString |\n\t\t<primitive: return _self.padEnd(_aList[0], _aString);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "paragraphAtIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isLineFeed_1(_at_2(_self, _index)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _paragraphAtIndex_2(_self, _hyphenMinus_2(_index, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _beforeIndex = _findPreviousOccurrenceOfStringStartingAt_3(
          _self,
          "\n\n",
          _hyphenMinus_2(_index, 1),
        );
        let _afterIndex = _findStringStartingAt_3(_self, "\n\n", _index);
        let _start = _if_3(
          _lessThanSign_2(_beforeIndex, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_beforeIndex, 2);
          }, []),
        );
        let _end = _if_3(
          _lessThanSign_2(_afterIndex, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _size_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _afterIndex;
          }, []),
        );
        /* Statements */
        return _copyFromTo_3(_self, _start, _end);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself[index].isLineFeed.if {\n\t\t\tself.paragraphAtIndex(index - 1)\n\t\t} {\n\t\t\tlet beforeIndex = self.findPreviousOccurrenceOfStringStartingAt('\\n\\n', index - 1);\n\t\t\tlet afterIndex = self.findStringStartingAt('\\n\\n', index);\n\t\t\tlet start = (beforeIndex < 1).if { 1 } { beforeIndex + 2 };\n\t\t\tlet end = (afterIndex < 1).if { self.size } { afterIndex };\n\t\t\tself.copyFromTo(start, end)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "paragraphs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.split("\n\n");
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.split('\\n\\n');>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "parseJson",
  ["self", "elseClause"],
  sl.annotateFunction(function (_self, _elseClause) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause";
      throw new Error(errorMessage);
    } /* Primitive */
    let answer = null;
    try {
      answer = JSON.parse(_self);
    } catch (_unused) {
      return _elseClause();
    }
    return answer;
  }, ["self", "elseClause"]),
  "{ :self :elseClause |\n\t\t<primitive:\n\t\tlet answer = null;\n\t\ttry {\n\t\t\tanswer = JSON.parse(_self);\n\t\t} catch (_unused) {\n\t\t\treturn _elseClause();\n\t\t};\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "parseJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return JSON.parse(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return JSON.parse(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "partition",
  ["self", "n", "d"],
  sl.annotateFunction(function (_self, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _p = [];
    let _i = 1;
    let _j = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_j, _k);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_p, _copyFromTo_3(_self, _i, _j));
        _i = _plusSign_2(_i, _d);
        return _j = _plusSign_2(_j, _d);
      }, []),
    );
    return _p;
  }, ["self", "n", "d"]),
  "{ :self :n :d |\n\t\tlet k = self.size;\n\t\tlet p = [];\n\t\tlet i = 1;\n\t\tlet j = n;\n\t\t{ j <= k }.whileTrue {\n\t\t\tp.add(self.copyFromTo(i, j));\n\t\t\ti := i + d;\n\t\t\tj := j + d\n\t\t};\n\t\tp\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "postLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _postLine_2(_system, _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.postLine(self)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "primitiveCollectInto",
  ["self", "aBlock:/1", "aCollection"],
  sl.annotateFunction(function (_self, _aBlock_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _primitiveDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_aCollection, _aBlock_1(_each));
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aBlock:/1", "aCollection"]),
  "{ :self :aBlock:/1 :aCollection |\n\t\tself.primitiveDo { :each |\n\t\t\taCollection.add(aBlock(each))\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "primitiveDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    for (const each of _self) {
      _aBlock_1(each);
    }
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tfor(const each of _self) {\n\t\t\t_aBlock_1(each);\n\t\t};\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  }, ["self"]),
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "removeDiacritics",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\treturn _self.normalize(\"NFKD\").replace(/[\\u0300-\\u036f]/g, '');\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "removePunctuation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(/\p{Punctuation}/gu, "");
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.replace(/\\p{Punctuation}/gu, '');>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "repeat",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.repeat(_n);
  }, ["self", "n"]),
  "{ :self :n |\n\t\t<primitive: return _self.repeat(_n);>\n\t\t/* List(n, self).stringCatenate */\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "replaceString",
  ["self", "stringToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_stringToFind);
    _assertIsString_1(_stringToReplaceWith);
    return _uncheckedReplaceString_3(
      _self,
      _stringToFind,
      _stringToReplaceWith,
    );
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith |\n\t\tstringToFind.assertIsString;\n\t\tstringToReplaceWith.assertIsString;\n\t\tself.uncheckedReplaceString(stringToFind, stringToReplaceWith)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "replaceStringAll",
  ["self", "stringToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_stringToFind);
    _assertIsString_1(_stringToReplaceWith);
    return _uncheckedReplaceStringAll_3(
      _self,
      _stringToFind,
      _stringToReplaceWith,
    );
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith |\n\t\tstringToFind.assertIsString;\n\t\tstringToReplaceWith.assertIsString;\n\t\tself.uncheckedReplaceStringAll(stringToFind, stringToReplaceWith)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(_self, _reverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.onCharacters(reverse:/1)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "rotateLeft",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _n = _percentSign_2(_anInteger, _k);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _allButFirst_2(_self, _n),
          _first_2(_self, _n),
        );
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet k = self.size;\n\t\tlet n = anInteger % k;\n\t\t(n = 0).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.allButFirst(n) ++ self.first(n)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_list, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _stringCatenate_1(_list);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet list = [];\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tlist.add(each)\n\t\t\t}\n\t\t};\n\t\tlist.stringCatenate\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "sentences",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.stringToSentences(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.stringToSentences(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _countUtf16CodeUnits_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.countUtf16CodeUnits\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "splitBy",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.split(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.split(_aString);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "splitByLimitedTo",
  ["self", "aString", "count"],
  sl.annotateFunction(function (_self, _aString, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.split(_aString, _count);
  }, ["self", "aString", "count"]),
  "{ :self :aString :count |\n\t\t<primitive: return _self.split(_aString, _count);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return `'${_self}'`;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return `'${_self}'`;>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "stringLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.size\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "stringReverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reverse_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.reverse\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "take",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_self, 1, _min_2(_anInteger, _size_1(_self)));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.copyFromTo(1, anInteger.min(self.size))\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "toCharacterCode",
  ["self", "encoding"],
  sl.annotateFunction(function (_self, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_encoding, [
      _hyphenMinusGreaterThanSign_2(
        "Ascii",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asciiList_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Utf8",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _utf8List_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Utf16",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _utf16List_1(_self);
        }, []),
      ),
    ]);
  }, ["self", "encoding"]),
  "{ :self :encoding |\n\t\tencoding.caseOf(\n\t\t\t[\n\t\t\t\t'Ascii' -> { self.asciiList },\n\t\t\t\t'Utf8' -> { self.utf8List },\n\t\t\t\t'Utf16' -> { self.utf16List }\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "trim",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.trim();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.trim();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "truncateTo",
  ["self", "smallSize"],
  sl.annotateFunction(function (_self, _smallSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), _smallSize),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(_self, 1, _smallSize);
      }, []),
    );
  }, ["self", "smallSize"]),
  "{ :self :smallSize |\n\t\t(self.size <= smallSize).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.copyFromTo(1, smallSize)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedAppendString",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self + _aString;
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self + _aString;>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedCopyFromTo",
  ["self", "start", "end"],
  sl.annotateFunction(function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.substring(_start - 1, _end);
  }, ["self", "start", "end"]),
  "{ :self :start :end |\n\t\t<primitive: return _self.substring(_start - 1, _end);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromCodePoint_1(_codePointAt_2(_self, _index));
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.codePointAt(index).fromCodePoint\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedLocaleCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Primitive */
    const n = _self.localeCompare(_operand);
    if (n < 0) {
      return -1;
    } else if (n === 0) {
      return 0;
    } else {
      return 1;
    }
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t<primitive:\n\t\tconst n = _self.localeCompare(_operand);\n\t\tif(n < 0) {\n\t\t\treturn -1;\n\t\t} else if(n === 0) {\n\t\t\treturn 0;\n\t\t} else {\n\t\t\treturn 1;\n\t\t};\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedReplaceString",
  ["self", "stringToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replace(_stringToFind, _stringToReplaceWith);
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith |\n\t\t<primitive: return _self.replace(_stringToFind, _stringToReplaceWith);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "uncheckedReplaceStringAll",
  ["self", "stringToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.replaceAll(_stringToFind, _stringToReplaceWith);
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith |\n\t\t<primitive: return _self.replaceAll(_stringToFind, _stringToReplaceWith);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "unique",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_self, _uniqueId_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself ++ system.uniqueId\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "utf8ByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new TextEncoder().encode(_self.normalize("NFC"));
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\treturn new TextEncoder().encode(_self.normalize('NFC'));\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "utf8List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_utf8ByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.utf8ByteArray.asList\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "utf16List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _countUtf16CodeUnits_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _utf16CodePointAt_2(_self, _index));
      }, ["index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\t1.toDo(self.countUtf16CodeUnits) { :index |\n\t\t\tanswer.add(self.utf16CodePointAt(index))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "utf16CodePointAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.charCodeAt(_index - 1);
  }, ["self", "index"]),
  "{ :self :index |\n\t\t<primitive: return _self.charCodeAt(_index - 1);>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "whiteSpaceDelimitedWordAtIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _previousSpaceIndex = _findPreviousOccurrenceOfStringStartingAt_3(
          _self,
          " ",
          _hyphenMinus_2(_index, 1),
        );
        let _nextSpaceIndex = _findStringStartingAt_3(_self, " ", _index);
        let _begin = _if_3(
          _lessThanSign_2(_previousSpaceIndex, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_previousSpaceIndex, 1);
          }, []),
        );
        let _end = _if_3(
          _lessThanSign_2(_nextSpaceIndex, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _size_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_nextSpaceIndex, 1);
          }, []),
        );
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_begin, _end),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "";
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _copyFromTo_3(_self, _begin, _end);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "whiteSpaceDelimitedWordAtIndex: invalid index");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tlet previousSpaceIndex = self.findPreviousOccurrenceOfStringStartingAt(' ', index - 1);\n\t\t\tlet nextSpaceIndex = self.findStringStartingAt(' ', index);\n\t\t\tlet begin = (previousSpaceIndex < 1).if { 1 } { previousSpaceIndex + 1 };\n\t\t\tlet end = (nextSpaceIndex < 1).if { self.size } { nextSpaceIndex - 1 };\n\t\t\t(begin > end).if {\n\t\t\t\t''\n\t\t\t} {\n\t\t\t\tself.copyFromTo(begin, end)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('whiteSpaceDelimitedWordAtIndex: invalid index')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withBlanksTrimmed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _trim_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.trim\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withIndefiniteArticle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _unwords_1([_indefiniteArticle_1(_self), _self]);
  }, ["self"]),
  "{ :self |\n\t\t[self.indefiniteArticle, self].unwords\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withoutLeadingBlanks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.trimStart();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.trimStart();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withoutQuoting",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _quote = _first_1(_self);
        /* Statements */
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_quote, _last_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includes_2([34, 39, 96], _codePoint_1(_quote));
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _copyFromTo_3(_self, 2, _hyphenMinus_2(_size_1(_self), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _self;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size < 2).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet quote = self.first;\n\t\t\t(\n\t\t\t\tquote = self.last & {\n\t\t\t\t\t[34, 39, 96].includes(quote.codePoint)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tself.copyFromTo(2, self.size - 1)\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withoutTrailingBlanks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.trimEnd();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.trimEnd();>\n\t}",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "withoutTrailingLineFeed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isLineFeed_1(_last_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allButLast_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _self;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.last.isLineFeed.if {\n\t\t\t\tself.allButLast\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "String",
  "postLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _postLine_1(_printString_1(_self));
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.printString.postLine;\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "fromCharacterCode",
  ["self", "encoding"],
  sl.annotateFunction(function (_self, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromCharacterCode_2([_self], _encoding);
  }, ["self", "encoding"]),
  "{ :self :encoding |\n\t\t[self].fromCharacterCode(encoding)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "fromCodePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return String.fromCodePoint(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\treturn String.fromCodePoint(_self);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "isAsciiCodePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_self, 0, 127);
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(0, 127)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "isUtf16SurrogateCodePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_self, 55296, 57343);
  }, ["self"]),
  "{ :self |\n\t\t/* 0xD800 = 55296, 0xDfFF = 57343 */\n\t\tself.betweenAnd(55296, 57343)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "String",
  ["self", "letter"],
  sl.annotateFunction(function (_self, _letter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _letter";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsCharacter_1(_letter);
    return _repeat_2(_letter, _self);
  }, ["self", "letter"]),
  "{ :self :letter |\n\t\tletter.assertIsCharacter;\n\t\tletter.repeat(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "String",
  "String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _String_2(_self, " ");
  }, ["self"]),
  "{ :self |\n\t\tString(self, ' ')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "camelCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      [_first_1(_self)],
      _collect_2(_allButFirst_1(_self), _capitalize_1),
    );
  }, ["self"]),
  "{ :self |\n\t\t[self.first] ++ self.allButFirst.collect(capitalize:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "capitalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _capitalize_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(capitalize:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "commaSeparated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2(_self, ", ");
  }, ["self"]),
  "{ :self |\n\t\tself.stringIntercalate(', ')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "decapitalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _decapitalize_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(decapitalize:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "deleteStopWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stopWords = _englishStopWords_1(_system);
    /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_stopWords, _asLowerCase_1(_each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet stopWords = system.englishStopWords;\n\t\tself.reject { :each |\n\t\t\tstopWords.includes(each.asLowerCase)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "fromCharacterCode",
  ["self", "encoding"],
  sl.annotateFunction(function (_self, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_self, _isSmallFloat_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_encoding, [
          _hyphenMinusGreaterThanSign_2(
            "Ascii",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _asciiString_1(_self);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Utf8",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _utf8String_1(_self);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Utf16",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _utf16String_1(_self);
            }, []),
          ),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _fromCharacterCode_2(_each, _encoding);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "encoding"]),
  "{ :self :encoding |\n\t\tself.allSatisfy(isSmallFloat:/1).if {\n\t\t\tencoding.caseOf(\n\t\t\t\t[\n\t\t\t\t\t'Ascii' -> { self.asciiString },\n\t\t\t\t\t'Utf8' -> { self.utf8String },\n\t\t\t\t\t'Utf16' -> { self.utf16String }\n\t\t\t\t]\n\t\t\t)\n\t\t} {\n\t\t\tself.collect { :each |\n\t\t\t\teach.fromCharacterCode(encoding)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "isPrintableAscii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isPrintableAscii_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isPrintableAscii:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "letterNumber",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _letterNumber_2(_each, _aString);
      }, ["each"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.collect { :each |\n\t\t\teach.letterNumber(aString)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringCatenate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2(_self, "");
  }, ["self"]),
  "{ :self |\n\t\tself.stringIntercalate('')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringIntercalate",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersandAmpersand_2(
        _allSatisfy_2(_self, _isString_1),
        _isString_1(_aString),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedStringIntercalate_2(_self, _aString);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>stringIntercalate: non-string arguments");
      }, []),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t(self.allSatisfy(isString:/1) && aString.isString).if {\n\t\t\tself.uncheckedStringIntercalate(aString)\n\t\t} {\n\t\t\tself.error('List>>stringIntercalate: non-string arguments')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringJoin",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedStringIntercalate_2(
      _collect_2(_flatten_1(_self), _asString_1),
      _asString_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself\n\t\t.flatten\n\t\t.collect(asString:/1)\n\t\t.uncheckedStringIntercalate(\n\t\t\taString.asString\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringJoin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_2(_self, "");
  }, ["self"]),
  "{ :self |\n\t\tself.stringJoin('')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _stringLength_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(stringLength:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "stringReverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _stringReverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(stringReverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "pascalCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _capitalize_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(capitalize:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "removeDiacritics",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _removeDiacritics_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(removeDiacritics:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "toCharacterCode",
  ["self", "encoding"],
  sl.annotateFunction(function (_self, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _toCharacterCode_2(_each, _encoding);
      }, ["each"]),
    );
  }, ["self", "encoding"]),
  "{ :self :encoding |\n\t\tself.collect { :each |\n\t\t\teach.toCharacterCode(encoding)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "uncheckedStringIntercalate",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.join(_aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\t<primitive: return _self.join(_aString);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "unlines",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2(_self, "\n");
  }, ["self"]),
  "{ :self |\n\t\tself.stringIntercalate('\\n')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "unwords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2(_self, " ");
  }, ["self"]),
  "{ :self |\n\t\tself.stringIntercalate(' ')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "burrowsWheelerMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lexicographicSort_1(
      _toCollect_3(
        1,
        _size_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _rotateLeft_2(_self, _each);
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.toCollect(self.size) { :each |\n\t\t\tself.rotateLeft(each)\n\t\t}.lexicographicSort\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "burrowsWheelerTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_burrowsWheelerMatrix_1(_self), _last_1);
  }, ["self"]),
  "{ :self |\n\t\tself.burrowsWheelerMatrix.collect(last:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "inverseBurrowWheelerTransform",
  ["self", "eot"],
  sl.annotateFunction(function (_self, _eot) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _eot";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _table = _List_2(_k, _List_0());
    /* Statements */
    _timesRepeat_2(
      _k,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _table,
              _i,
              _plusSignPlusSign_2([_at_2(_self, _i)], _at_2(_table, _i)),
            );
          }, ["i"]),
        );
        return _lexicographicSort_1(_table);
      }, []),
    );
    return _copyFromTo_3(
      _detect_2(
        _table,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_last_1(_each), _eot);
        }, ["each"]),
      ),
      2,
      _hyphenMinus_2(_k, 1),
    );
  }, ["self", "eot"]),
  "{ :self :eot |\n\t\tlet k = self.size;\n\t\tlet table = List(k, List());\n\t\tk.timesRepeat {\n\t\t\t1.toDo(k) { :i |\n\t\t\t\ttable[i] := [self[i]] ++ table[i]\n\t\t\t};\n\t\t\ttable.lexicographicSort\n\t\t};\n\t\ttable.detect { :each |\n\t\t\teach.last = eot\n\t\t}.copyFromTo(2, k - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "String",
  "burrowsWheelerTransform",
  ["self", "delimiters"],
  sl.annotateFunction(function (_self, _delimiters) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delimiters";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_delimiters, 2);
    let _p = _at_2(__SplVar1, 1);
    let _q = _at_2(__SplVar1, 2);
    let _c = _plusSignPlusSign_2(
      _plusSignPlusSign_2([_p], _characters_1(_self)),
      [_q],
    );
    /* Statements */
    return _stringJoin_1(_burrowsWheelerTransform_1(_c));
  }, ["self", "delimiters"]),
  "{ :self :delimiters |\n\t\tlet [p, q] = delimiters;\n\t\tlet c = [p] ++ self.characters ++ [q];\n\t\tc.burrowsWheelerTransform.stringJoin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "String",
  "inverseBurrowWheelerTransform",
  ["self", "eot"],
  sl.annotateFunction(function (_self, _eot) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _eot";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_1(
      _inverseBurrowWheelerTransform_2(_characters_1(_self), _eot),
    );
  }, ["self", "eot"]),
  "{ :self :eot |\n\t\tself\n\t\t.characters\n\t\t.inverseBurrowWheelerTransform(eot)\n\t\t.stringJoin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "String",
  "porterStemmer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const step2list = {
      ational: "ate",
      tional: "tion",
      enci: "ence",
      anci: "ance",
      izer: "ize",
      bli: "ble",
      alli: "al",
      entli: "ent",
      eli: "e",
      ousli: "ous",
      ization: "ize",
      ation: "ate",
      ator: "ate",
      alism: "al",
      iveness: "ive",
      fulness: "ful",
      ousness: "ous",
      aliti: "al",
      iviti: "ive",
      biliti: "ble",
      logi: "log",
    };
    const step3list = {
      icate: "ic",
      ative: "",
      alize: "al",
      iciti: "ic",
      ical: "ic",
      ful: "",
      ness: "",
    };
    const consonant = "[^aeiou]";
    const vowel = "[aeiouy]";
    const consonants = "(" + consonant + "[^aeiouy]*)";
    const vowels = "(" + vowel + "[aeiou]*)";
    const gt0 = new RegExp("^" + consonants + "?" + vowels + consonants);
    const eq1 = new RegExp(
      "^" + consonants + "?" + vowels + consonants + vowels + "?$",
    );
    const gt1 = new RegExp(
      "^" + consonants + "?(" + vowels + consonants + "){2,}",
    );
    const vowelInStem = new RegExp("^" + consonants + "?" + vowel);
    const consonantLike = new RegExp("^" + consonants + vowel + "[^aeiouwxy]$");
    const sfxLl = /ll$/;
    const sfxE = /^(.+?)e$/;
    const sfxY = /^(.+?)y$/;
    const sfxIon = /^(.+?(s|t))(ion)$/;
    const sfxEdOrIng = /^(.+?)(ed|ing)$/;
    const sfxAtOrBlOrIz = /(at|bl|iz)$/;
    const sfxEED = /^(.+?)eed$/;
    const sfxS = /^.+?[^s]s$/;
    const sfxSsesOrIes = /^.+?(ss|i)es$/;
    const sfxMultiConsonantLike = /([^aeiouylsz])\1$/;
    const step2 =
      /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
    const step3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    const step4 =
      /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    let result = String(_self).toLowerCase();
    if (result.length < 3) {
      return result;
    }
    let firstCharacterWasLowerCaseY = false;
    if (
      result.codePointAt(0) === 121
    ) {
      firstCharacterWasLowerCaseY = true;
      result = "Y" + result.slice(1);
    }
    if (sfxSsesOrIes.test(result)) {
      result = result.slice(0, -2);
    } else if (sfxS.test(result)) {
      result = result.slice(0, -1);
    }
    let match = null;
    if ((match = sfxEED.exec(result))) {
      if (gt0.test(match[1])) {
        result = result.slice(0, -1);
      }
    } else if (
      (match = sfxEdOrIng.exec(result)) && vowelInStem.test(match[1])
    ) {
      result = match[1];
      if (sfxAtOrBlOrIz.test(result)) {
        result += "e";
      } else if (sfxMultiConsonantLike.test(result)) {
        result = result.slice(0, -1);
      } else if (consonantLike.test(result)) {
        result += "e";
      }
    }
    if ((match = sfxY.exec(result)) && vowelInStem.test(match[1])) {
      result = match[1] + "i";
    }
    if ((match = step2.exec(result)) && gt0.test(match[1])) {
      result = match[1] + step2list[match[2]];
    }
    if ((match = step3.exec(result)) && gt0.test(match[1])) {
      result = match[1] + step3list[match[2]];
    }
    if ((match = step4.exec(result))) {
      if (gt1.test(match[1])) {
        result = match[1];
      }
    } else if ((match = sfxIon.exec(result)) && gt1.test(match[1])) {
      result = match[1];
    }
    if (
      (match = sfxE.exec(result)) &&
      (gt1.test(match[1]) ||
        (eq1.test(match[1]) && !consonantLike.test(match[1])))
    ) {
      result = match[1];
    }
    if (sfxLl.test(result) && gt1.test(result)) {
      result = result.slice(0, -1);
    }
    if (firstCharacterWasLowerCaseY) {
      result = "y" + result.slice(1);
    }
    return result;
  }, ["self"]),
  "{ :self |\n\t\t/* https://github.com/words/stemmer */\n\t\t<primitive:\n\t\tconst step2list = {\n\t\t\tational: 'ate',\n\t\t\ttional: 'tion',\n\t\t\tenci: 'ence',\n\t\t\tanci: 'ance',\n\t\t\tizer: 'ize',\n\t\t\tbli: 'ble',\n\t\t\talli: 'al',\n\t\t\tentli: 'ent',\n\t\t\teli: 'e',\n\t\t\tousli: 'ous',\n\t\t\tization: 'ize',\n\t\t\tation: 'ate',\n\t\t\tator: 'ate',\n\t\t\talism: 'al',\n\t\t\tiveness: 'ive',\n\t\t\tfulness: 'ful',\n\t\t\tousness: 'ous',\n\t\t\taliti: 'al',\n\t\t\tiviti: 'ive',\n\t\t\tbiliti: 'ble',\n\t\t\tlogi: 'log'\n\t\t};\n\t\tconst step3list = {\n\t\t\ticate: 'ic',\n\t\t\tative: '',\n\t\t\talize: 'al',\n\t\t\ticiti: 'ic',\n\t\t\tical: 'ic',\n\t\t\tful: '',\n\t\t\tness: ''\n\t\t};\n\t\tconst consonant = '[^aeiou]';\n\t\tconst vowel = '[aeiouy]';\n\t\tconst consonants = '(' + consonant + '[^aeiouy]*)';\n\t\tconst vowels = '(' + vowel + '[aeiou]*)';\n\t\tconst gt0 = new RegExp('^' + consonants + '?' + vowels + consonants);\n\t\tconst eq1 = new RegExp(\n\t\t\t'^' + consonants + '?' + vowels + consonants + vowels + '?$'\n\t\t);\n\t\tconst gt1 = new RegExp('^' + consonants + '?(' + vowels + consonants + '){2,}');\n\t\tconst vowelInStem = new RegExp('^' + consonants + '?' + vowel);\n\t\tconst consonantLike = new RegExp('^' + consonants + vowel + '[^aeiouwxy]$');\n\t\tconst sfxLl = /ll$/;\n\t\tconst sfxE = /^(.+?)e$/;\n\t\tconst sfxY = /^(.+?)y$/;\n\t\tconst sfxIon = /^(.+?(s|t))(ion)$/;\n\t\tconst sfxEdOrIng = /^(.+?)(ed|ing)$/;\n\t\tconst sfxAtOrBlOrIz = /(at|bl|iz)$/;\n\t\tconst sfxEED = /^(.+?)eed$/;\n\t\tconst sfxS = /^.+?[^s]s$/;\n\t\tconst sfxSsesOrIes = /^.+?(ss|i)es$/;\n\t\tconst sfxMultiConsonantLike = /([^aeiouylsz])\\1$/;\n\t\tconst step2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;\n\t\tconst step3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;\n\t\tconst step4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;\n\t\tlet result = String(_self).toLowerCase();\n\t\tif (result.length < 3) {\n\t\t\treturn result;\n\t\t}\n\t\tlet firstCharacterWasLowerCaseY = false;\n\t\tif (\n\t\t\tresult.codePointAt(0) === 121\n\t\t) {\n\t\t\tfirstCharacterWasLowerCaseY = true;\n\t\t\tresult = 'Y' + result.slice(1);\n\t\t}\n\t\tif (sfxSsesOrIes.test(result)) {\n\t\t\tresult = result.slice(0, -2);\n\t\t} else if (sfxS.test(result)) {\n\t\t\tresult = result.slice(0, -1);\n\t\t}\n\t\tlet match = null;\n\t\tif ((match = sfxEED.exec(result))) {\n\t\t\tif (gt0.test(match[1])) {\n\t\t\t\tresult = result.slice(0, -1);\n\t\t\t}\n\t\t} else if ((match = sfxEdOrIng.exec(result)) && vowelInStem.test(match[1])) {\n\t\t\tresult = match[1];\n\t\t\tif (sfxAtOrBlOrIz.test(result)) {\n\t\t\t\tresult += 'e';\n\t\t\t} else if (sfxMultiConsonantLike.test(result)) {\n\t\t\t\tresult = result.slice(0, -1);\n\t\t\t} else if (consonantLike.test(result)) {\n\t\t\t\tresult += 'e';\n\t\t\t}\n\t\t}\n\t\tif ((match = sfxY.exec(result)) && vowelInStem.test(match[1])) {\n\t\t\tresult = match[1] + 'i';\n\t\t}\n\t\tif ((match = step2.exec(result)) && gt0.test(match[1])) {\n\t\t\tresult = match[1] + step2list[match[2]];\n\t\t}\n\t\tif ((match = step3.exec(result)) && gt0.test(match[1])) {\n\t\t\tresult = match[1] + step3list[match[2]];\n\t\t}\n\t\tif ((match = step4.exec(result))) {\n\t\t\tif (gt1.test(match[1])) {\n\t\t\t\tresult = match[1];\n\t\t\t}\n\t\t} else if ((match = sfxIon.exec(result)) && gt1.test(match[1])) {\n\t\t\tresult = match[1];\n\t\t}\n\t\tif (\n\t\t\t(match = sfxE.exec(result)) &&\n\t\t\t(gt1.test(match[1]) || (eq1.test(match[1]) && !consonantLike.test(match[1])))\n\t\t) {\n\t\t\tresult = match[1];\n\t\t}\n\t\tif (sfxLl.test(result) && gt1.test(result)) {\n\t\t\tresult = result.slice(0, -1);\n\t\t}\n\t\tif (firstCharacterWasLowerCaseY) {\n\t\t\tresult = 'y' + result.slice(1)\n\t\t}\n\t\treturn result;\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "porterStemmer",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _porterStemmer_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(porterStemmer:/1)\n\t}",
);
