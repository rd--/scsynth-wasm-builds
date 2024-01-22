sl.addType(
  false,
  "Character",
  "Character",
  ["Object", "Magnitude"],
  ["string", "codePoint"],
);

sl.copyTraitToType(
  "Object",
  "Character",
);

sl.copyTraitToType(
  "Magnitude",
  "Character",
);

sl.addMethod(
  "Character",
  "Character",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isCharacter_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_string_1(_self), _string_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCharacter & {\n\t\t\tself.string = anObject.string\n\t\t}\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "lessThan",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isCharacter_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThan_2(_codePoint_1(_self), _codePoint_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCharacter & {\n\t\t\tself.codePoint < anObject.codePoint\n\t\t}\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asciiValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_codePoint_1(_self), 127), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "asciiValue: not ascii");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _codePoint_1(_self);
    });
  },
  "{ :self |\n\t\t(self.codePoint > 127).if {\n\t\t\tself.error('asciiValue: not ascii')\n\t\t} {\n\t\t\tself.codePoint\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _codePoint_1(_self);
  },
  "{ :self |\n\t\tself.codePoint\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asLowercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asCharacter_1(_asLowercase_1(_string_1(_self)));
  },
  "{ :self |\n\t\tself.string.asLowercase.asCharacter\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "asUppercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asCharacter_1(_asUppercase_1(_string_1(_self)));
  },
  "{ :self |\n\t\tself.string.asUppercase.asCharacter\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _string_1(_self);
  },
  "{ :self |\n\t\tself.string\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "Character",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "digitValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _integerValue = _asInteger_1(_self);
    let _digitValues = _atIfAbsentPut_3(
      _cache_1(_system),
      "digitValues",
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _answer = _Array_2(256, -1);
        /* Statements */
        _upToDo_3(0, 9, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(_answer, _plus_2(_plus_2(48, _i), 1), _i);
        });
        _upToDo_3(10, 35, function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _atPut_3(_answer, _plus_2(_plus_2(55, _i), 1), _i);
          return _atPut_3(_answer, _plus_2(_plus_2(87, _i), 1), _i);
        });
        return _answer;
      },
    );
    /* Statements */
    return _at_2(_digitValues, _plus_2(_integerValue, 1));
  },
  "{ :self |\n\t\tlet integerValue = self.asInteger;\n\t\tlet digitValues = system.cache.atIfAbsentPut('digitValues') {\n\t\t\tlet answer = Array(256, -1);\n\t\t\t0.upToDo(9) { :i |\n\t\t\t\tanswer[48 + i + 1] := i\n\t\t\t};\n\t\t\t10.upToDo(35) { :i |\n\t\t\t\tanswer[55 + i + 1] := i;\n\t\t\t\tanswer[87 + i + 1] := i\n\t\t\t};\n\t\t\tanswer\n\t\t};\n\t\tdigitValues[integerValue + 1]\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "isAscii",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThan_2(_codePoint_1(_self), 128);
  },
  "{ :self |\n\t\tself.codePoint < 128\n\t}",
);

sl.addMethod(
  "Character",
  "Character",
  "isVowel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includesSubstring_2("AEIOU", _string_1(_asUppercase_1(_self)));
  },
  "{ :self |\n\t\t'AEIOU'.includesSubstring(self.asUppercase.string)\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2("$", _string_1(_self));
  },
  "{ :self |\n\t\t'$' ++ self.string\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsEquals_2(_self, _aCharacter), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsEquals_2(
        _asLowercase_1(_self),
        _asLowercase_1(_aCharacter),
      );
    });
  },
  "{ :self :aCharacter |\n\t\t(self == aCharacter).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.asLowercase == aCharacter.asLowercase\n\t\t}\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_asString_1(_codePoint_1(_self)), ".asCharacter");
  },
  "{ :self |\n\t\tself.codePoint.asString ++ '.asCharacter'\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_self, 0, 35), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _asCharacter_1(
        _plus_2(
          _self,
          _if_3(_lessThan_2(_self, 10), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return 48;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "digitValue");
    });
  },
  "{ :self |\n\t\tself.betweenAnd(0, 35).if {\n\t\t\t(\n\t\t\t\tself + (self < 10).if {\n\t\t\t\t\t48\n\t\t\t\t} {\n\t\t\t\t\t55\n\t\t\t\t}\n\t\t\t).asCharacter\n\t\t} {\n\t\t\tself.error('digitValue')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Character",
  "asCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Character_2(_self, _codePoint_1(_self));
  },
  "{ :self |\n\t\tCharacter(self, self.codePoint)\n\t}",
);

sl.addMethod(
  "String",
  "Character",
  "Character",
  ["self", "codePoint"],
  function (_self, _codePoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _codePoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSingleCharacter_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atIfAbsentPut_3(
        _atIfAbsentPut_3(_cache_1(_system), "characterDictionary", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return Object.fromEntries([]);
        }),
        _self,
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _initializeSlots_3(_newCharacter_0(), _self, _codePoint);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "String>>Character: not character");
    });
  },
  "{ :self :codePoint |\n\t\tself.isSingleCharacter.if {\n\t\t\tsystem.cache.atIfAbsentPut('characterDictionary') {\n\t\t\t\t()\n\t\t\t}.atIfAbsentPut(self) {\n\t\t\t\tnewCharacter().initializeSlots(self, codePoint)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('String>>Character: not character')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Character",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _characterArray_1(_self);
  },
  "{ :self |\n\t\tself.characterArray\n\t}",
);
