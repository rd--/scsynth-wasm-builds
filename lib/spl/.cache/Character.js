sl.addTrait("Character", "Character");

sl.addTraitMethod(
  "Character",
  "Character",
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
    return _ampersand_2(_isCharacter_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(
        _characterString_1(_self),
        _characterString_1(_anObject),
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCharacter & {\n\t\t\tself.characterString = anObject.characterString\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_codePoint_1(_self), _codePoint_1(_anObject));
  },
  "{ :self :anObject |\n\t\tself.codePoint < anObject.codePoint\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "asciiValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_codePoint_1(_self), 127), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "asciiValue: not ascii");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _codePoint_1(_self);
    });
  },
  "{ :self |\n\t\t(self.codePoint > 127).if {\n\t\t\tself.error('asciiValue: not ascii')\n\t\t} {\n\t\t\tself.codePoint\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "asCodePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _codePoint_1(_self);
  },
  "{ :self |\n\t\tself.codePoint\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _codePoint_1(_self);
  },
  "{ :self |\n\t\tself.codePoint\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "characterRange",
  ["self", "aCharacter"],
  function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _characterRange_2(_codePoint_1(_self), _codePoint_1(_aCharacter));
  },
  "{ :self :aCharacter |\n\t\tself.codePoint.characterRange(aCharacter.codePoint)\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "digitValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _integerValue = _asCodePoint_1(_self);
    let _digitValues = _atIfAbsentPut_3(
      _cache_1(_system),
      "digitValues",
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _answer = _List_2(256, -1);
        /* Statements */
        _toDo_3(0, 9, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(_answer, _plusSign_2(_plusSign_2(48, _i), 1), _i);
        });
        _toDo_3(10, 35, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_answer, _plusSign_2(_plusSign_2(55, _i), 1), _i);
          return _atPut_3(_answer, _plusSign_2(_plusSign_2(87, _i), 1), _i);
        });
        return _answer;
      },
    );
    /* Statements */
    return _at_2(_digitValues, _plusSign_2(_integerValue, 1));
  },
  "{ :self |\n\t\tlet integerValue = self.asCodePoint;\n\t\tlet digitValues = system.cache.atIfAbsentPut('digitValues') {\n\t\t\tlet answer = List(256, -1);\n\t\t\t0.toDo(9) { :i |\n\t\t\t\tanswer[48 + i + 1] := i\n\t\t\t};\n\t\t\t10.toDo(35) { :i |\n\t\t\t\tanswer[55 + i + 1] := i;\n\t\t\t\tanswer[87 + i + 1] := i\n\t\t\t};\n\t\t\tanswer\n\t\t};\n\t\tdigitValues[integerValue + 1]\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isAlphaNumeric",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isDigit_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isLetter_1(_self);
    });
  },
  "{ :self |\n\t\tself.isDigit | {\n\t\t\tself.isLetter\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isAscii",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_codePoint_1(_self), 128);
  },
  "{ :self |\n\t\tself.codePoint < 128\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isBlank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isSpace_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isTab_1(_self);
    });
  },
  "{ :self |\n\t\tself.isSpace | {\n\t\t\tself.isTab\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isCarriageReturn",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 13);
  },
  "{ :self |\n\t\tself.codePoint = 13\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 48, 57);
  },
  "{ :self |\n\t\tself.codePoint.betweenAnd(48, 57)\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isFormFeed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 12);
  },
  "{ :self |\n\t\tself.codePoint = 12\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isLetter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isLowerCase_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isUpperCase_1(_self);
    });
  },
  "{ :self |\n\t\tself.isLowerCase | {\n\t\t\tself.isUpperCase\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isLineFeed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 10);
  },
  "{ :self |\n\t\tself.codePoint = 10\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isLowerCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 97, 122);
  },
  "{ :self |\n\t\tself.codePoint.betweenAnd(97, 122)\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isSeparator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2([1, 9, 10, 12, 13, 32], _codePoint_1(_self));
  },
  "{ :self |\n\t\t[1 9 10 12 13 32].includes(self.codePoint)\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 32);
  },
  "{ :self |\n\t\tself.codePoint = 32\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isStartOfHeading",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 1);
  },
  "{ :self |\n\t\tself.codePoint = 1\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isUpperCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_codePoint_1(_self), 65, 90);
  },
  "{ :self |\n\t\tself.codePoint.betweenAnd(65, 90)\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isTab",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_codePoint_1(_self), 9);
  },
  "{ :self |\n\t\tself.codePoint = 9\n\t}",
);

sl.addTraitMethod(
  "Character",
  "Character",
  "isVowel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2(
      [65, 69, 73, 79, 85],
      _codePoint_1(_asUpperCase_1(_self)),
    );
  },
  "{ :self |\n\t\t[65 69 73 79 85].includes(self.asUpperCase.codePoint)\n\t}",
);

sl.addType(
  false,
  "Character",
  "Character",
  ["Object", "Magnitude", "Character"],
  ["characterString", "codePoint"],
);

sl.copyTraitToType(
  "Object",
  "Character",
);

sl.copyTraitToType(
  "Magnitude",
  "Character",
);

sl.copyTraitToType(
  "Character",
  "Character",
);

sl.addMethod(
  "Character",
  "Character",
  "asCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asLowerCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isUpperCase_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asCharacter_1(_plusSign_2(_codePoint_1(_self), 32));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isUpperCase.if {\n\t\t\t(self.codePoint + 32).asCharacter\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asUpperCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isLowerCase_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asCharacter_1(_hyphenMinus_2(_codePoint_1(_self), 32));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isLowerCase.if {\n\t\t\t(self.codePoint - 32).asCharacter\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _characterString_1(_self);
  },
  "{ :self |\n\t\tself.characterString\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _printString_1(_characterString_1(_self));
  },
  "{ :self |\n\t\tself.characterString.printString\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "sameAs",
  ["self", "aCharacter"],
  function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSignEqualsSign_2(_self, _aCharacter), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSignEqualsSign_2(
        _asLowerCase_1(_self),
        _asLowerCase_1(_aCharacter),
      );
    });
  },
  "{ :self :aCharacter |\n\t\t(self == aCharacter).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.asLowerCase == aCharacter.asLowerCase\n\t\t}\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _asString_1(_codePoint_1(_self)),
      ".asCharacter",
    );
  },
  "{ :self |\n\t\tself.codePoint.asString ++ '.asCharacter'\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asCharacter_1(" ");
  },
  "{ :self |\n\t\t' '.asCharacter\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Character",
  "asCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _Character_2(String.fromCodePoint(_self), _self);
  },
  "{ :self |\n\t\t<primitive: return _Character_2(String.fromCodePoint(_self), _self);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Character",
  "digitValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_self, 0, 35), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asCharacter_1(
        _plusSign_2(
          _self,
          _if_3(_lessThanSign_2(_self, 10), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 48;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 55;
          }),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "digitValue");
    });
  },
  "{ :self |\n\t\tself.betweenAnd(0, 35).if {\n\t\t\t(\n\t\t\t\tself + (self < 10).if {\n\t\t\t\t\t48\n\t\t\t\t} {\n\t\t\t\t\t55\n\t\t\t\t}\n\t\t\t).asCharacter\n\t\t} {\n\t\t\tself.error('digitValue')\n\t\t}\n\t}",
);
