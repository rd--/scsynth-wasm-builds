/*  Requires: Character List  */

sl.addType(
  true,
  "String",
  "String",
  ["Object", "Json", "Iterable", "Character"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self :anObject | ==(self, anObject) }",
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
            return _equalsSign_2(
              _asCharacter_1(_self),
              _asCharacter_1(_anObject),
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
  "{ :self :anObject | if(isCharacter(self), { &(isCharacter(anObject), { =(asCharacter(self), asCharacter(anObject)) }) }, { ==(self, anObject) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lessThanSignEqualsSignGreaterThanSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    if (typeof _aString == "string") {
      const n = _self.localeCompare(_aString);
      if (n < 0) {
        return -1;
      } else if (n == 0) {
        return 0;
      } else {
        return 1;
      }
    }
    /* Statements */
    return _error_2(_self, "String>><=>: non string operand");
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: if(typeof _aString == 'string') {\n\t\t\tconst n = _self.localeCompare(_aString);\n\t\t\tif(n < 0) {\n\t\t\t\treturn -1;\n\t\t\t} else if(n == 0) {\n\t\t\t\treturn 0;\n\t\t\t} else {\n\t\t\t\treturn 1;\n\t\t\t}\n\t\t};>\nerror(self,'String>><=>: non string operand') }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lessThanSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      -1,
    );
  }, ["self", "aString"]),
  "{ :self :aString | =(<=>(self, aString), -1) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "lessThanSignEqualsSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      0,
    );
  }, ["self", "aString"]),
  "{ :self :aString | <=(<=>(self, aString), 0) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "greaterThanSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      1,
    );
  }, ["self", "aString"]),
  "{ :self :aString | =(<=>(self, aString), 1) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "greaterThanSignEqualsSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      1,
    );
  }, ["self", "aString"]),
  "{ :self :aString | >=(<=>(self, aString), 1) }",
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
    return _basicAppendString_2(_self, _asString_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | basicAppendString(self,asString(anObject)) }",
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
  "{ :self :anInteger | ++(truncateTo(self,-(anInteger, 8)), '... &etc') }",
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
  "{ :self | allButFirst(self,1) }",
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
  "{ :self :n | copyFromTo(self,+(n, 1), size(self)) }",
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
  "{ :self | allButLast(self,1) }",
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
  "{ :self :n | let end = -(size(self), n); if((=(end, 0)), { '' }, { copyFromTo(self,1, end) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "alphabet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "english";
          }, []),
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
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "greek";
          }, []),
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
        return _error_2(_self, "String>>alphabet: unknown alphabet");
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOfOtherwise(self, [->({ 'english' }, { ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] }), ->({ 'greek' }, { ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'] })], { error(self,'String>>alphabet: unknown alphabet') }) }",
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
  "{ :self :open :close | if((|(includesSubstring(self,open), { includesSubstring(self,close) })), { error(self,'String>>asBracketedComment: includes comment brackets') }, { unwords([open, self, close]) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Character_2(_self, _codePoint_1(_self));
  }, ["self"]),
  "{ :self | Character(self, codePoint(self)) }",
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
  "{ :self | let answer = utf8ByteArray(self); if(allSatisfy(answer,isAsciiCodePoint:/1), { answer }, { error(self,'String>>asciiByteArray: non-ascii character') }) }",
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
  "{ :self | asList(asciiByteArray(self)) }",
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
  "{ :self | if((=(size(self), 1)), { first(asciiByteArray(self)) }, { error(self,'String>>asciiValue: not single character') }) }",
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
  "{ :self | codePoint(self) }",
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
  "{ :self | asBracketedComment(self,'{-', '-}') }",
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
    return _asHexString_1(_asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self | asHexString(asciiByteArray(self)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _characters_1(_self);
  }, ["self"]),
  "{ :self | characters(self) }",
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
  "{ :self | <primitive: return _self.toLowerCase();>\n }",
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
  "{ :self | asBracketedComment(self,'(*', '*)') }",
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
  "{ :self | asBracketedComment(self,'/*', '*/') }",
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
  "{ :self | self }",
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
    return _asIdentitySet_1(_characters_1(_self));
  }, ["self"]),
  "{ :self | asIdentitySet(characters(self)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "asSet",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_2(_characters_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | asSet(characters(self),aBlock:/2) }",
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
  "{ :self | self }",
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
  "{ :self | <primitive: return _self.toUpperCase();>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "at",
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
            return _error_2(_self, "String>>at: invalid index");
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
                return _asCharacter_1(_codePoint);
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
        return _error_2(_self, "String>>at: invalid index");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if(includesIndex(self,index), { let codePoint = codePointAt(self,index); ifNil(codePoint, { error(self,'String>>at: invalid index') }, { if(isUtf16SurrogateCodePoint(codePoint), { error(self,'String>>at: code point is lone surrogate') }, { asCharacter(codePoint) }) }) }, { error(self,'String>>at: invalid index') }) }",
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
    return _stringCatenate_1(_atAll_2(_characters_1(_self), _indices));
  }, ["self", "indices"]),
  "{ :self :indices | stringCatenate(atAll(characters(self),indices)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "basicAppendString",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self + _aString;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self + _aString;>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "basicCopyFromTo",
  ["self", "start", "end"],
  sl.annotateFunction(function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.substring(_start - 1, _end);
  }, ["self", "start", "end"]),
  "{ :self :start :end | <primitive: return _self.substring(_start - 1, _end);>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "basicAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _asCharacter_1(_codePointAt_2(_self, _index));
  }, ["self", "index"]),
  "{ :self :index | asCharacter(codePointAt(self,index)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "basicReplaceString",
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
  "{ :self :stringToFind :stringToReplaceWith | <primitive: return _self.replace(_stringToFind, _stringToReplaceWith);>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "basicReplaceStringAll",
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
  "{ :self :stringToFind :stringToReplaceWith | <primitive: return _self.replaceAll(_stringToFind, _stringToReplaceWith);>\n }",
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
    if (typeof _aString == "string") {
      return _self.startsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "String>>beginsWith: non string operand");
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: if(typeof _aString == 'string') {\n\t\t\treturn _self.startsWith(_aString);\n\t\t}>\nerror(self,'String>>beginsWith: non string operand') }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "beginsWithAnyOf",
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
  "{ :self :aCollection | anySatisfy(aCollection, { :prefix | beginsWith(self,prefix) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "capitalized",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[0].toUpperCase() + _self.slice(1);
  }, ["self"]),
  "{ :self | <primitive: return _self[0].toUpperCase() + _self.slice(1);>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "Character",
  ["self", "codePoint"],
  sl.annotateFunction(function (_self, _codePoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _codePoint";
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
        return _atIfAbsentPut_3(
          _atIfAbsentPut_3(
            _cache_1(_system),
            "characterDictionary",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Record_1([]);
            }, []),
          ),
          _self,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _initializeSlots_3(_newCharacter_0(), _self, _codePoint);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>Character: not character?");
      }, []),
    );
  }, ["self", "codePoint"]),
  "{ :self :codePoint | if(isCharacter(self), { atIfAbsentPut(atIfAbsentPut(cache(system), 'characterDictionary', { Record([]) }), self, { initializeSlots(newCharacter(),self, codePoint) }) }, { error(self,'String>>Character: not character?') }) }",
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
  "{ :self :aString | collect(characterRange(asCharacter(self),asCharacter(aString)),asString:/1) }",
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
  "{ :self | if(isCharacter(self), { self }, { error(self,'String>>characterString: not single character string') }) }",
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
  "{ :self | collectInto(self,identity:/1, []) }",
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
  "{ :self | if(isCharacter(self), { codePointAt(self,1) }, { error(self,'String>>codePoint: not single character string') }) }",
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
  "{ :self :index | <primitive: return _self.codePointAt(_index - 1);>\n }",
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
  "{ :self | collectInto(self,codePoint:/1, []) }",
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
  "{ :self :aBlock:/1 :aCollection | primitiveCollectInto(self,{ :each | aBlock(asCharacter(each)) }, []) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "compare",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSignGreaterThanSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <=>(self, anObject) }",
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
  "{ :self | primitiveCollectInto(self,identity:/1, []) }",
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
  "{ :self | contractTo(self,32) }",
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
  "{ :self :smallSize | if((<=(size(self), smallSize)), { self }, { if((<(smallSize, 5)), { copyFromTo(self,1, smallSize) }, { let leftSize = //(-(smallSize, 2), 2); copyReplaceFromToWith(self,+(leftSize, 1), -(size(self), (-(-(smallSize, leftSize), 3))), '...') }) }) }",
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
        return _basicCopyFromTo_3(_self, _start, _end);
      }, []),
    );
  }, ["self", "start", "end"]),
  "{ :self :start :end | ifFalse(includesIndex(self,start), { error(self,'copyFromTo: invalid start index') }); ifFalse(includesIndex(self,end), { error(self,'copyFromTo: invalid end index') }); if((>(start, end)), { '' }, { basicCopyFromTo(self,start, end) }) }",
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
  "{ :self :start :stop :replacement | stringCatenate([copyFromTo(self,1, -(start, 1)), replacement, copyFromTo(self,+(stop, 1), size(self))]) }",
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
  "{ :self | let answer = 0; do(self, { :each | answer := +(answer, 1) }); answer }",
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
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "deBruijnSequence",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _deBruijnSequence_2(_characters_1(_self), _anInteger),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | stringCatenate(deBruijnSequence(characters(self),anInteger)) }",
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
  "{ :self :aBlock:/1 | primitiveDo(self, { :each | aBlock(each) }) }",
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
  "{ :self :anInteger | if((>=(anInteger, size(self))), { '' }, { copyFromTo(self,+(anInteger, 1), size(self)) }) }",
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
    if (typeof _aString == "string") {
      return _self.endsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "String>>endsWith: non string operand");
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: if(typeof _aString == 'string') {\n\t\t\treturn _self.endsWith(_aString);\n\t\t}>\nerror(self,'String>>endsWith: non string operand') }",
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
  "{ :self :subString :start | let last = findStringStartingAt(self,subString, start); if((=(last, 0)), { 0 }, { let answer = nil; whileTrue({ >(last, 0) }, { answer := last; last := findStringStartingAt(self,subString, +(last, 1)) }); answer }) }",
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
  "{ :self :subString :start | <primitive: return _self.lastIndexOf(_subString, _start - 1) + 1;>\n }",
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
  "{ :self :aString :anInteger | indexOfSubstringStartingAt(self,aString, anInteger) }",
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
  "{ :self :aString | indexOfSubstring(self,aString) }",
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
  "{ :self | at(self, 1) }",
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
  "{ :self :open :close :aBlock:/0 | let start = findString(self,open); let end = findString(self,close); if((|(=(start, 0), { =(end, 0) })), { aBlock() }, { copyFromTo(self,+(start, size(open)), -(end, 1)) }) }",
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
  "{ :self :open :close | firstBracketedCommentIfAbsent(self, open, close, { error(self,'String>>firstBracketedComment: no comment found') }) }",
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
  "{ :self :aBlock:/0 | firstBracketedCommentIfAbsent(self,'{-', '-}', aBlock:/0) }",
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
  "{ :self | firstHsCommentIfAbsent(self, { error(self,'String>>firstHsComment: no comment found') }) }",
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
  "{ :self :aBlock:/0 | firstBracketedCommentIfAbsent(self,'(*', '*)', aBlock:/0) }",
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
  "{ :self | firstMlCommentIfAbsent(self, { error(self,'String>>firstMlComment: no comment found') }) }",
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
  "{ :self :aBlock:/0 | firstBracketedCommentIfAbsent(self,'/*', '*/', aBlock:/0) }",
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
  "{ :self | firstPliCommentIfAbsent(self, { error(self,'String>>firstPliComment: no comment found') }) }",
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
  "{ :self :arguments | let parts = splitBy(self,'%'); if((=(+(size(arguments), 1), size(parts))), { stringCatenate(riffle(parts,collect(arguments,asString:/1))) }, { error(self,'format: incorrect number of arguments') }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includes",
  ["self", "aCharacter"],
  sl.annotateFunction(function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_characterList_1(_self), _asCharacter_1(_aCharacter));
  }, ["self", "aCharacter"]),
  "{ :self :aCharacter | includes(characterList(self),asCharacter(aCharacter)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includesBy",
  ["self", "aCharacter", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCharacter, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCharacter, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(
      _characterList_1(_self),
      _asCharacter_1(_aCharacter),
      _aBlock_2,
    );
  }, ["self", "aCharacter", "aBlock:/2"]),
  "{ :self :aCharacter :aBlock:/2 | includesBy(characterList(self),asCharacter(aCharacter), aBlock:/2) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includesIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_index, 1, _size_1(_self));
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | &(isInteger(index), { betweenAnd(index,1, size(self)) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includesSubsequence",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubsequence_2(
      _characters_1(_self),
      _characters_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString | includesSubsequence(characters(self),characters(aString)) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "includesSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.includes(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.includes(_aString);>\n }",
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
  "{ :self | if(isVowel(first(self)), { 'an' }, { 'a' }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "indexOfSubstringStartingAt",
  ["self", "aString", "anInteger"],
  sl.annotateFunction(function (_self, _aString, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anInteger";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.indexOf(_aString, _anInteger - 1) + 1;
  }, ["self", "aString", "anInteger"]),
  "{ :self :aString :anInteger | <primitive: return _self.indexOf(_aString, _anInteger - 1) + 1;>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "indexOfSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.indexOf(_aString) + 1;
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.indexOf(_aString) + 1;>\n }",
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
  "{ :self | to(1,size(self)) }",
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
              _tildeEqualsSign_2(_index, 0),
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
  "{ :self :aString | if(isString(aString), { let answer = []; let index = 1; let end = size(self); whileTrue({ betweenAnd(index,1, end) }, { index := findStringStartingAt(self,aString, index); ifTrue((~=(index, 0)), { add(answer,index); index := +(index, 1) }) }); answer }, { error(self,++('String>>indicesOf: not a string: ', aString)) }) }",
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
  "{ :self | allSatisfy(utf8ByteArray(self),isAsciiCodePoint:/1) }",
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
  "{ :self | <primitive: return !/[^\\t\\n\\r ]/.test(_self);>\n }",
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
  "{ :self | |(isEmpty(self), { allSatisfy(self, { :each | |(isSpace(each), { isTab(each) }) }) }) }",
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
  "{ :self | |(=(size(self), 1), { &(=(size(self), 2), { isUtf16SurrogateCodePoint(codePointAt(self,2)) }) }) }",
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
  "{ :self | =(countUtf16CodeUnits(self), countCharacters(self)) }",
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
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isImmediate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
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
  "{ :self | <primitive: return /^[a-z]+$/.test(_self);>\n }",
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
  "{ :self | allSatisfy(utf8ByteArray(self),isAsciiCodePoint:/1) }",
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
  "{ :self | allSatisfy(utf8ByteArray(self), { :each | betweenAnd(each,32, 126) }) }",
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
  "{ :self :aString | if((=(self, aString)), { true }, { =(asLowerCase(self), asLowerCase(aString)) }) }",
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
  "{ :self | <primitive: return /^[A-Z]+$/.test(_self);>\n }",
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
  "{ :self | <primitive: return _self.isWellFormed();>\n }",
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
  "{ :self | at(self, size(self)) }",
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
  "{ :self :count | copyFromTo(self,+(-(size(self), count), 1), size(self)) }",
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
    return _indexOf_2(_alphabet_1(_aString), _asLowerCase_1(_self));
  }, ["self", "aString"]),
  "{ :self :aString | indexOf(alphabet(aString),asLowerCase(self)) }",
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
  "{ :self | if(isEmpty(self), { 1 }, { let answer = +(lineFeedCount(self), 1); ifTrue(isLineFeed(last(self)), { answer := -(answer, 1) }); answer }) }",
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
  "{ :self | count(self,isLineFeed:/1) }",
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
  "{ :self | if(isEmpty(self), { [] }, { splitBy(withoutTrailingLineFeed(self),'\\n') }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "longestCommonSubsequence",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _longestCommonSubsequence_2(
        _characters_1(_self),
        _characters_1(_aString),
      ),
    );
  }, ["self", "aString"]),
  "{ :self :aString | stringCatenate(longestCommonSubsequence(characters(self),characters(aString))) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "longestCommonSubstringList",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _longestCommonSubstringList_2(
        _characters_1(_self),
        _characters_1(_aString),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringCatenate_1(_each);
      }, ["each"]),
    );
  }, ["self", "aString"]),
  "{ :self :aString | collect(longestCommonSubstringList(characters(self),characters(aString)), { :each | stringCatenate(each) }) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "longestCommonSubstring",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _longestCommonSubstring_2(_characters_1(_self), _characters_1(_aString)),
    );
  }, ["self", "aString"]),
  "{ :self :aString | stringCatenate(longestCommonSubstring(characters(self),characters(aString))) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "longestIncreasingSubsequence",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1(
      _longestIncreasingSubsequence_1(_characters_1(_self)),
    );
  }, ["self"]),
  "{ :self | stringCatenate(longestIncreasingSubsequence(characters(self))) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "notEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isEmpty_1(_self));
  }, ["self"]),
  "{ :self | not(isEmpty(self)) }",
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
  "{ :self | let seen = []; select(self, { :each | ifAbsentAdd(seen,each) }) }",
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
  "{ :self | nubSieve(characters(self)) }",
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
              _tildeEqualsSign_2(_index, 0),
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
  "{ :self :aString | if(isString(aString), { let index = 1; let end = size(self); let tally = 0; whileTrue({ betweenAnd(index,1, end) }, { index := findStringStartingAt(self,aString, index); ifTrue((~=(index, 0)), { tally := +(tally, 1); index := +(index, 1) }) }); tally }, { error(self,++('String>>occurrencesOf: not a string: ', aString)) }) }",
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
  "{ :self :aBlock:/1 | stringCatenate(aBlock(characters(self))) }",
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
  "{ :self :aList :aString | <primitive: return _self.padStart(_aList[0], _aString);>\n }",
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
  "{ :self :aList :aString | <primitive: return _self.padEnd(_aList[0], _aString);>\n }",
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
  "{ :self :index | if(isLineFeed(at(self, index)), { paragraphAtIndex(self,-(index, 1)) }, { let beforeIndex = findPreviousOccurrenceOfStringStartingAt(self,'\\n\\n', -(index, 1)); let afterIndex = findStringStartingAt(self,'\\n\\n', index); let start = if((<(beforeIndex, 1)), { 1 }, { +(beforeIndex, 2) }); let end = if((<(afterIndex, 1)), { size(self) }, { afterIndex }); copyFromTo(self,start, end) }) }",
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
  "{ :self | <primitive: return _self.split('\\n\\n');>\n }",
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
  "{ :self | <primitive: return JSON.parse(_self);>\n }",
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
  "{ :self | postLine(system,self) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "precedes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <(self, anObject) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "precedesOrEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <=(self, anObject) }",
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
  "{ :self :aBlock:/1 :aCollection | primitiveDo(self, { :each | add(aCollection,aBlock(each)) }); aCollection }",
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
  "{ :self :aBlock:/1 | <primitive: for(const each of _self) {\n\t\t\t_aBlock_1(each);\n\t\t};\n\t\treturn _self;>\n }",
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
  "{ :self | ['size'] }",
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
  "{ :self | <primitive: return _self.normalize(\"NFKD\").replace(/[\\u0300-\\u036f]/g, '');>\n }",
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
    return _basicReplaceString_3(_self, _stringToFind, _stringToReplaceWith);
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith | assertIsString(stringToFind); assertIsString(stringToReplaceWith); basicReplaceString(self,stringToFind, stringToReplaceWith) }",
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
    return _basicReplaceStringAll_3(_self, _stringToFind, _stringToReplaceWith);
  }, ["self", "stringToFind", "stringToReplaceWith"]),
  "{ :self :stringToFind :stringToReplaceWith | assertIsString(stringToFind); assertIsString(stringToReplaceWith); basicReplaceStringAll(self,stringToFind, stringToReplaceWith) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "reversed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _onCharacters_2(_self, _reversed_1);
  }, ["self"]),
  "{ :self | onCharacters(self,reversed:/1) }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "romanNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  }, ["self"]),
  "{ :self | let value = 0; let v1 = 0; let v2 = 0; let letters = asciiByteArray('IVXLCDM'); reverseDo(asciiByteArray(self), { :each | v1 := at([1, 5, 10, 50, 100, 500, 1000],indexOf(letters,each)); if((>=(v1, v2)), { value := +(value, v1) }, { value := -(value, v1) }); v2 := v1 }); value }",
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
  "{ :self :aBlock:/1 | let list = []; do(self, { :each | ifTrue(aBlock(each), { add(list,each) }) }); stringCatenate(list) }",
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
  "{ :self | <primitive: return sl.stringToSentences(_self);>\n }",
);

sl.addMethodToExistingType(
  "String",
  "String",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
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
  "{ :self | countUtf16CodeUnits(self) }",
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
  "{ :self :aString | <primitive: return _self.split(_aString);>\n }",
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
  "{ :self :aString :count | <primitive: return _self.split(_aString, _count);>\n }",
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
  "{ :self | <primitive: return `'${_self}'`;>\n }",
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
    return _reversed_1(_self);
  }, ["self"]),
  "{ :self | reversed(self) }",
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
  "{ :self :anInteger | copyFromTo(self,1, min(anInteger,size(self))) }",
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
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Ascii";
        }, []),
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
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Utf8";
        }, []),
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
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Utf16";
        }, []),
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
  "{ :self :encoding | caseOf(encoding,[->({ 'Ascii' }, { asciiList(self) }), ->({ 'Utf8' }, { utf8List(self) }), ->({ 'Utf16' }, { utf16List(self) })]) }",
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
  "{ :self | <primitive: return _self.trim();>\n }",
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
  "{ :self :smallSize | if((<=(size(self), smallSize)), { self }, { copyFromTo(self,1, smallSize) }) }",
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
  "{ :self | ++(self, uniqueId(system)) }",
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
  "{ :self | <primitive: return new TextEncoder().encode(_self.normalize('NFC'));>\n }",
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
  "{ :self | asList(utf8ByteArray(self)) }",
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
  "{ :self | let answer = []; toDo(1, countUtf16CodeUnits(self), { :index | add(answer,utf16CodePointAt(self,index)) }); answer }",
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
  "{ :self :index | <primitive: return _self.charCodeAt(_index - 1);>\n }",
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
  "{ :self :index | if(includesIndex(self,index), { let previousSpaceIndex = findPreviousOccurrenceOfStringStartingAt(self,' ', -(index, 1)); let nextSpaceIndex = findStringStartingAt(self,' ', index); let begin = if((<(previousSpaceIndex, 1)), { 1 }, { +(previousSpaceIndex, 1) }); let end = if((<(nextSpaceIndex, 1)), { size(self) }, { -(nextSpaceIndex, 1) }); if((>(begin, end)), { '' }, { copyFromTo(self,begin, end) }) }, { error(self,'whiteSpaceDelimitedWordAtIndex: invalid index') }) }",
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
  "{ :self | trim(self) }",
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
  "{ :self | unwords([indefiniteArticle(self), self]) }",
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
  "{ :self | <primitive: return _self.trimStart();>\n }",
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
  "{ :self | if((<(size(self), 2)), { self }, { let quote = first(self); if((&(=(quote, last(self)), { includes([34, 39, 96],codePoint(quote)) })), { copyFromTo(self,2, -(size(self), 1)) }, { self }) }) }",
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
  "{ :self | <primitive: return _self.trimEnd();>\n }",
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
  "{ :self | if(isEmpty(self), { self }, { if(isLineFeed(last(self)), { allButLast(self) }, { self }) }) }",
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
  "{ :self | postLine(printString(self)); self }",
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
  "{ :self :encoding | fromCharacterCode([self],encoding) }",
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
  "{ :self | betweenAnd(self,0, 127) }",
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
  "{ :self | betweenAnd(self,55296, 57343) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "String",
  "basicStringIntercalate",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.join(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.join(_aString);>\n }",
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
      _collect_2(_allButFirst_1(_self), _capitalized_1),
    );
  }, ["self"]),
  "{ :self | ++([first(self)], collect(allButFirst(self),capitalized:/1)) }",
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
  "{ :self | stringIntercalate(self,', ') }",
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Ascii";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Utf8";
            }, []),
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
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "Utf16";
            }, []),
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
  "{ :self :encoding | if(allSatisfy(self,isSmallFloat:/1), { caseOf(encoding,[->({ 'Ascii' }, { asciiString(self) }), ->({ 'Utf8' }, { utf8String(self) }), ->({ 'Utf16' }, { utf16String(self) })]) }, { collect(self, { :each | fromCharacterCode(each,encoding) }) }) }",
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
  "{ :self | collect(self,isPrintableAscii:/1) }",
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
  "{ :self :aString | collect(self, { :each | letterNumber(each,aString) }) }",
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
  "{ :self | stringIntercalate(self,'') }",
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
        return _basicStringIntercalate_2(_self, _aString);
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
  "{ :self :aString | if((&&(allSatisfy(self,isString:/1), isString(aString))), { basicStringIntercalate(self,aString) }, { error(self,'List>>stringIntercalate: non-string arguments') }) }",
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
    return _basicStringIntercalate_2(
      _collect_2(_flatten_1(_self), _asString_1),
      _asString_1(_aString),
    );
  }, ["self", "aString"]),
  "{ :self :aString | basicStringIntercalate(collect(flatten(self),asString:/1),asString(aString)) }",
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
  "{ :self | stringJoin(self,'') }",
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
  "{ :self | collect(self,stringReverse:/1) }",
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
    return _collect_2(_self, _capitalized_1);
  }, ["self"]),
  "{ :self | collect(self,capitalized:/1) }",
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
  "{ :self | collect(self,removeDiacritics:/1) }",
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
  "{ :self :encoding | collect(self, { :each | toCharacterCode(each,encoding) }) }",
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
  "{ :self | stringIntercalate(self,'\\n') }",
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
  "{ :self | stringIntercalate(self,' ') }",
);
