sl.addTrait("Character", "Character");

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
  "{ :self |\n\t\t(self.codePoint > 127).if {\n\t\t\tself.error('asciiValue: not ascii')\n\t\t} {\n\t\t\tself.codePoint\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.codePoint\n\t}",
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
  "{ :self :aCharacter |\n\t\tself.codePoint.characterRange(aCharacter.codePoint)\n\t}",
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
  "{ :self |\n\t\tlet integerValue = self.asCodePoint;\n\t\tlet digitValues = system.cache.atIfAbsentPut('digitValues') {\n\t\t\tlet answer = List(256, -1);\n\t\t\t0.toDo(9) { :i |\n\t\t\t\tanswer[48 + i + 1] := i\n\t\t\t};\n\t\t\t10.toDo(35) { :i |\n\t\t\t\tanswer[55 + i + 1] := i;\n\t\t\t\tanswer[87 + i + 1] := i\n\t\t\t};\n\t\t\tanswer\n\t\t};\n\t\tdigitValues[integerValue + 1]\n\t}",
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
  "{ :self |\n\t\tself.isDigit | {\n\t\t\tself.isLetter\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 39\n\t}",
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
  "{ :self |\n\t\tself.codePoint < 128\n\t}",
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
  "{ :self |\n\t\tself.isSpace | {\n\t\t\tself.isTab\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 13\n\t}",
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
  "{ :self |\n\t\tself.codePoint.betweenAnd(48, 57)\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 12\n\t}",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isGraveAccent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 96);
  }, ["self"]),
  "{ :self |\n\t\tself.codePoint = 96\n\t}",
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
  "{ :self |\n\t\tself.isLowerCase | {\n\t\t\tself.isUpperCase\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 10\n\t}",
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
  "{ :self |\n\t\tself.codePoint.betweenAnd(97, 122)\n\t}",
);

sl.addMethodToExistingTrait(
  "Character",
  "Character",
  "isPunctuation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPunctuation_1(_characterString_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.characterString.isPunctuation\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 34\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 92\n\t}",
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
  "{ :self |\n\t\t[1 9 10 12 13 32].includes(self.codePoint)\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 32\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 1\n\t}",
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
  "{ :self |\n\t\tself.codePoint.betweenAnd(65, 90)\n\t}",
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
  "{ :self |\n\t\tself.codePoint = 9\n\t}",
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
  "{ :self |\n\t\t[65 69 73 79 85].includes(self.asUpperCase.codePoint)\n\t}",
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
  "{ :self |\n\t\tsystem.morseCodeTable[self.characterString]\n\t}",
);

sl.addType(
  false,
  "Character",
  "Character",
  ["Object", "Equatable", "Comparable", "Magnitude", "Character"],
  ["characterString", "codePoint"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Character",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Character",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self :anObject |\n\t\tanObject.isCharacter & {\n\t\t\tself.characterString = anObject.characterString\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.isUpperCase.if {\n\t\t\t(self.codePoint + 32).asCharacter\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isLowerCase.if {\n\t\t\t(self.codePoint - 32).asCharacter\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.characterString\n\t}",
);

sl.addMethodToExistingType(
  "Character",
  "Character",
  "compare",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_codePoint_1(_self), _codePoint_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.codePoint.compare(anObject.codePoint)\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self :aCharacter |\n\t\t(self == aCharacter).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.asLowerCase == aCharacter.asLowerCase\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.codePoint.asString ++ '.asCharacter'\n\t}",
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
  "{ :self |\n\t\t' '.asCharacter\n\t}",
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
    } /* Statements */
    return _asCharacter_1(_fromCodePoint_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.fromCodePoint.asCharacter\n\t}",
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
  "{ :self |\n\t\tself.betweenAnd(0, 35).if {\n\t\t\t(\n\t\t\t\tself + (self < 10).if {\n\t\t\t\t\t48\n\t\t\t\t} {\n\t\t\t\t\t55\n\t\t\t\t}\n\t\t\t).asCharacter\n\t\t} {\n\t\t\tself.error('digitValue')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Character",
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
              return _Record_0();
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
  "{ :self :codePoint |\n\t\tself.isCharacter.if {\n\t\t\tsystem.cache.atIfAbsentPut('characterDictionary') {\n\t\t\t\t(:)\n\t\t\t}.atIfAbsentPut(self) {\n\t\t\t\tnewCharacter().initializeSlots(self, codePoint)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('String>>Character: not character?')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.cached('morseCodeTable') {\n\t\t\t(\n\t\t\t\ta: '.-', i: '..', r: '.-.',\n\t\t\t\tb: '-...', j: '.---', s: '...',\n\t\t\t\tc: '-.-.', k: '-.-', t: '-',\n\t\t\t\td: '-..', l: '.-..', u: '..-',\n\t\t\t\te: '.', m: '--', v: '...-',\n\t\t\t\té: '..-..', n: '-.', w: '.--',\n\t\t\t\tf: '..-.', o: '---', x: '-..-',\n\t\t\t\tg: '--.', p: '.--.', y: '-.--',\n\t\t\t\th: '....', q: '--.-', z: '--..',\n\t\t\t\t'1': '.----', '6': '-....',\n\t\t\t\t'2': '..---', '7': '--...',\n\t\t\t\t'3': '...--', '8': '---..',\n\t\t\t\t'4': '....-', '9': '----.',\n\t\t\t\t'5': '.....', '0': '-----'\n\t\t\t)\n\t\t}\n\t}",
);
