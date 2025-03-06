sl.addTrait("Character", "Character");

sl.addMethodToExistingTrait(
  "Character",
  "Character",
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

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_codePoint_1(_self), _codePoint_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject | <(codePoint(self), codePoint(anObject)) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "asciiValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_codePoint_1(_self), 127),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asciiValue: not ascii");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _codePoint_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(codePoint(self), 127)), { error(self,'asciiValue: not ascii') }, { codePoint(self) }) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
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

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "characterRange",
  ["self", "aCharacter"],
  sl.annotateFunction(function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      throw new Error(errorMessage);
    } /* Statements */
    return _characterRange_2(_codePoint_1(_self), _codePoint_1(_aCharacter));
  }, ["self", "aCharacter"]),
  "{ :self :aCharacter | characterRange(codePoint(self),codePoint(aCharacter)) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "digitValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _integerValue = _asCodePoint_1(_self);
    let _digitValues = _atIfAbsentPut_3(
      _cache_1(_system),
      "digitValues",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _List_2(256, -1);
        /* Statements */
        _toDo_3(
          0,
          9,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_answer, _plusSign_2(_plusSign_2(48, _i), 1), _i);
          }, ["i"]),
        );
        _toDo_3(
          10,
          35,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_answer, _plusSign_2(_plusSign_2(55, _i), 1), _i);
            return _atPut_3(_answer, _plusSign_2(_plusSign_2(87, _i), 1), _i);
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
    /* Statements */
    return _at_2(_digitValues, _plusSign_2(_integerValue, 1));
  }, ["self"]),
  "{ :self | let integerValue = asCodePoint(self); let digitValues = atIfAbsentPut(cache(system), 'digitValues', { let answer = List(256, -1); toDo(0, 9, { :i | atPut(answer, +(+(48, i), 1), i) }); toDo(10, 35, { :i | atPut(answer, +(+(55, i), 1), i); atPut(answer, +(+(87, i), 1), i) }); answer }); at(digitValues, +(integerValue, 1)) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isAlphaNumeric",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isDigit_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isLetter_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | |(isDigit(self), { isLetter(self) }) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isApostrophe",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 39);
  }, ["self"]),
  "{ :self | =(codePoint(self), 39) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isAscii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_codePoint_1(_self), 128);
  }, ["self"]),
  "{ :self | <(codePoint(self), 128) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isBlank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isSpace_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isTab_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | |(isSpace(self), { isTab(self) }) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isCarriageReturn",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 13);
  }, ["self"]),
  "{ :self | =(codePoint(self), 13) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isDigit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 48, 57);
  }, ["self"]),
  "{ :self | betweenAnd(codePoint(self),48, 57) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isFormFeed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 12);
  }, ["self"]),
  "{ :self | =(codePoint(self), 12) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isLetter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isLowerCase_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isUpperCase_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | |(isLowerCase(self), { isUpperCase(self) }) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isLineFeed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 10);
  }, ["self"]),
  "{ :self | =(codePoint(self), 10) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isLowerCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 97, 122);
  }, ["self"]),
  "{ :self | betweenAnd(codePoint(self),97, 122) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isQuotationMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 34);
  }, ["self"]),
  "{ :self | =(codePoint(self), 34) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isReverseSolidus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 92);
  }, ["self"]),
  "{ :self | =(codePoint(self), 92) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isSeparator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2([1, 9, 10, 12, 13, 32], _codePoint_1(_self));
  }, ["self"]),
  "{ :self | includes([1, 9, 10, 12, 13, 32],codePoint(self)) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isSpace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 32);
  }, ["self"]),
  "{ :self | =(codePoint(self), 32) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isStartOfHeading",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 1);
  }, ["self"]),
  "{ :self | =(codePoint(self), 1) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isUpperCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 65, 90);
  }, ["self"]),
  "{ :self | betweenAnd(codePoint(self),65, 90) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isTab",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 9);
  }, ["self"]),
  "{ :self | =(codePoint(self), 9) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isVowel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(
      [65, 69, 73, 79, 85],
      _codePoint_1(_asUpperCase_1(_self)),
    );
  }, ["self"]),
  "{ :self | includes([65, 69, 73, 79, 85],codePoint(asUpperCase(self))) }",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "morseCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_morseCodeTable_1(_system), _characterString_1(_self));
  }, ["self"]),
  "{ :self | at(morseCodeTable(system), characterString(self)) }",
);

sl.addType(
  false,
  "Character",
  "Character",
  ["Object", "Magnitude", "Character"],
  ["characterString", "codePoint"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Character",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Character",
);

sl.copyTraitMethodsToType(
  "Character",
  "Character",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
          _characterString_1(_self),
          _characterString_1(_anObject),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isCharacter(anObject), { =(characterString(self), characterString(anObject)) }) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "asCharacter",
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
  "Character",
  "Character",
  "asLowerCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isUpperCase_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asCharacter_1(_plusSign_2(_codePoint_1(_self), 32));
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
  }, ["self"]),
  "{ :self | if(isUpperCase(self), { asCharacter((+(codePoint(self), 32))) }, { self }) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "asUpperCase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isLowerCase_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asCharacter_1(_hyphenMinus_2(_codePoint_1(_self), 32));
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
  }, ["self"]),
  "{ :self | if(isLowerCase(self), { asCharacter((-(codePoint(self), 32))) }, { self }) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _characterString_1(_self);
  }, ["self"]),
  "{ :self | characterString(self) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
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
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "isSameAs",
  ["self", "aCharacter"],
  sl.annotateFunction(function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_self, _aCharacter),
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
        return _equalsSignEqualsSign_2(
          _asLowerCase_1(_self),
          _asLowerCase_1(_aCharacter),
        );
      }, []),
    );
  }, ["self", "aCharacter"]),
  "{ :self :aCharacter | if((==(self, aCharacter)), { true }, { ==(asLowerCase(self), asLowerCase(aCharacter)) }) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_characterString_1(_self));
  }, ["self"]),
  "{ :self | printString(characterString(self)) }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _asString_1(_codePoint_1(_self)),
      ".asCharacter",
    );
  }, ["self"]),
  "{ :self | ++(asString(codePoint(self)), '.asCharacter') }",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asCharacter_1(" ");
  }, ["self"]),
  "{ :self | asCharacter(' ') }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Character",
  "asCharacter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _Character_2(String.fromCodePoint(_self), _self);
  }, ["self"]),
  "{ :self | <primitive: return _Character_2(String.fromCodePoint(_self), _self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Character",
  "digitValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_self, 0, 35),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asCharacter_1(
          _plusSign_2(
            _self,
            _if_3(
              _lessThanSign_2(_self, 10),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 48;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 55;
              }, []),
            ),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "digitValue");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(betweenAnd(self,0, 35), { asCharacter((+(self, if((<(self, 10)), { 48 }, { 55 })))) }, { error(self,'digitValue') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Character",
  "morseCodeTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "morseCodeTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([
          ["a", ".-"],
          ["i", ".."],
          ["r", ".-."],
          ["b", "-..."],
          ["j", ".---"],
          ["s", "..."],
          ["c", "-.-."],
          ["k", "-.-"],
          ["t", "-"],
          ["d", "-.."],
          ["l", ".-.."],
          ["u", "..-"],
          ["e", "."],
          ["m", "--"],
          ["v", "...-"],
          ["é", "..-.."],
          ["n", "-."],
          ["w", ".--"],
          ["f", "..-."],
          ["o", "---"],
          ["x", "-..-"],
          ["g", "--."],
          ["p", ".--."],
          ["y", "-.--"],
          ["h", "...."],
          ["q", "--.-"],
          ["z", "--.."],
          ["1", ".----"],
          ["6", "-...."],
          ["2", "..---"],
          ["7", "--..."],
          ["3", "...--"],
          ["8", "---.."],
          ["4", "....-"],
          ["9", "----."],
          ["5", "....."],
          ["0", "-----"],
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'morseCodeTable', { Record([['a', '.-'], ['i', '..'], ['r', '.-.'], ['b', '-...'], ['j', '.---'], ['s', '...'], ['c', '-.-.'], ['k', '-.-'], ['t', '-'], ['d', '-..'], ['l', '.-..'], ['u', '..-'], ['e', '.'], ['m', '--'], ['v', '...-'], ['é', '..-..'], ['n', '-.'], ['w', '.--'], ['f', '..-.'], ['o', '---'], ['x', '-..-'], ['g', '--.'], ['p', '.--.'], ['y', '-.--'], ['h', '....'], ['q', '--.-'], ['z', '--..'], ['1', '.----'], ['6', '-....'], ['2', '..---'], ['7', '--...'], ['3', '...--'], ['8', '---..'], ['4', '....-'], ['9', '----.'], ['5', '.....'], ['0', '-----']]) }) }",
);
