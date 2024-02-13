/* {- Requires: List -} */

sl.addType(
  true,
  "String",
  "String",
  ["Object", "Json", "Iterable"],
  [],
);

sl.copyTraitToType(
  "Object",
  "String",
);

sl.copyTraitToType(
  "Json",
  "String",
);

sl.copyTraitToType(
  "Iterable",
  "String",
);

sl.addMethod(
  "String",
  "String",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "lessThanSignEqualsSignGreaterThanSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (typeof _aString == "string") {
      if (_self < _aString) {
        return -1;
      } else if (_self == _aString) {
        return 0;
      } else {
        return 1;
      }
    }
    /* Statements */
    return _error_1("String>><=>: non string operand");
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(typeof _aString == 'string') {\n\t\t\tif(_self < _aString) {\n\t\t\t\treturn -1;\n\t\t\t} else if(_self == _aString) {\n\t\t\t\treturn 0;\n\t\t\t} else {\n\t\t\t\treturn 1;\n\t\t\t}\n\t\t};\n\t\t>\n\t\t'String>><=>: non string operand'.error\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "lessThanSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      -1,
    );
  },
  "{ :self :aString |\n\t\tself <=> aString = -1\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "lessThanSignEqualsSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      0,
    );
  },
  "{ :self :aString |\n\t\tself <=> aString <= 0\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "greaterThanSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      1,
    );
  },
  "{ :self :aString |\n\t\tself <=> aString = 1\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "greaterThanSign",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSignEqualsSign_2(
      _lessThanSignEqualsSignGreaterThanSign_2(_self, _aString),
      1,
    );
  },
  "{ :self :aString |\n\t\tself <=> aString >= 1\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "plusSignPlusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _appendString_2(_self, _asString_1(_anObject));
  },
  "{ :self :anObject |\n\t\tself.appendString(anObject.asString)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "appendString",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self + _aString;
  },
  "{ :self :aString |\n\t\t<primitive: return _self + _aString;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asAscii",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinCharacters_1(_select_2(_characterList_1(_self), _isAscii_1));
  },
  "{ :self |\n\t\tself.characterList.select(isAscii:/1).joinCharacters\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asBracketedComment",
  ["self", "open", "close"],
  function (_self, _open, _close) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _open, _close";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _verticalLine_2(_includesSubstring_2(_self, _open), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _includesSubstring_2(_self, _close);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "asBracketedComment: includes comment brackets");
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _join_1([_open, " ", _self, " ", _close]);
      },
    );
  },
  "{ :self :open :close |\n\t\t(self.includesSubstring(open) | {\n\t\t\tself.includesSubstring(close)\n\t\t}).if {\n\t\t\tself.error('asBracketedComment: includes comment brackets')\n\t\t} {\n\t\t\t[open, ' ', self, ' ', close].join\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _list = _characterList_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_list), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _first_1(_list);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("String>>asCharacter: not single character string");
    });
  },
  "{ :self |\n\t\tlet list = self.characterList;\n\t\t(list.size = 1).if {\n\t\t\tlist.first\n\t\t} {\n\t\t\t'String>>asCharacter: not single character string'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asciiByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _utf8ByteArray_1(_self);
    /* Statements */
    return _if_3(_allSatisfy_2(_answer, _isAsciiCodePoint_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "asciiByteArray: non-ascii character");
    });
  },
  "{ :self |\n\t\tlet answer = self.utf8ByteArray;\n\t\tanswer.allSatisfy(isAsciiCodePoint:/1).if {\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('asciiByteArray: non-ascii character')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
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
    return _if_3(_equalsSign_2(_size_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _first_1(_asciiByteArray_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "asciiValue: not single character");
    });
  },
  "{ :self |\n\t\t(self.size = 1).if {\n\t\t\tself.asciiByteArray.first\n\t\t} {\n\t\t\tself.error('asciiValue: not single character')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asHaskellComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asBracketedComment_3(_self, "{-", "-}");
  },
  "{ :self |\n\t\tself.asBracketedComment('{-', '-}')\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asHex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hex_1(_asciiByteArray_1(_self));
  },
  "{ :self |\n\t\tself.asciiByteArray.hex\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asLowercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toLowerCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toLowerCase(); >\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asMlComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asBracketedComment_3(_self, "(*", "*)");
  },
  "{ :self |\n\t\tself.asBracketedComment('(*', '*)')\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "assertIsString",
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
  "String",
  "String",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSet_1(_stringList_1(_self));
  },
  "{ :self |\n\t\tself.stringList.asSet\n\t}",
);

sl.addMethod(
  "String",
  "String",
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
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "asUppercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toUpperCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toUpperCase(); >\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _codePoint = _codePointAt_2(_self, _index);
    /* Statements */
    return _ifNil_3(_codePoint, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "at: invalid index");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isUtf16SurrogateCode_1(_codePoint), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "at: code point is lone surrogate");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asCharacter_1(_codePoint);
      });
    });
  },
  "{ :self :index |\n\t\t{- Note: index is in Utf-16 code units, not characters -}\n\t\tlet codePoint = self.codePointAt(index);\n\t\tcodePoint.ifNil {\n\t\t\tself.error('at: invalid index')\n\t\t} {\n\t\t\tcodePoint.isUtf16SurrogateCode.if {\n\t\t\t\tself.error('at: code point is lone surrogate')\n\t\t\t} {\n\t\t\t\tcodePoint.asCharacter\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "basicAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asCharacter_1(_codePointAt_2(_self, _index));
  },
  "{ :self :index |\n\t\tself.codePointAt(index).asCharacter\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "basicReplaceString",
  ["self", "stringToFind", "stringToReplaceWith"],
  function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.replace(_stringToFind, _stringToReplaceWith);
  },
  "{ :self :stringToFind :stringToReplaceWith |\n\t\t<primitive: return _self.replace(_stringToFind, _stringToReplaceWith);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "basicReplaceStringAll",
  ["self", "stringToFind", "stringToReplaceWith"],
  function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.replaceAll(_stringToFind, _stringToReplaceWith);
  },
  "{ :self :stringToFind :stringToReplaceWith |\n\t\t<primitive: return _self.replaceAll(_stringToFind, _stringToReplaceWith);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "beginsWith",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (typeof _aString == "string") {
      return _self.startsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "beginsWith: non string operand");
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(typeof _aString == 'string') {\n\t\t\treturn _self.startsWith(_aString);\n\t\t}\n\t\t>\n\t\tself.error('beginsWith: non string operand')\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "capitalized",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self[0].toUpperCase() + _self.slice(1);
  },
  "{ :self |\n\t\t<primitive: return _self[0].toUpperCase() + _self.slice(1);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "characterRange",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _characterRange_2(_asCharacter_1(_self), _asCharacter_1(_aString)),
      _asString_1,
    );
  },
  "{ :self :aString |\n\t\tself.asCharacter.characterRange(aString.asCharacter).collect(asString:/1)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "characterList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collectInto_3(_self, _identity_1, []);
  },
  "{ :self |\n\t\tself.collectInto(identity:/1, [])\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "codePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
      return _codePointAt_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "codePoint: not single character string");
    });
  },
  "{ :self |\n\t\tself.isSingleCharacter.if {\n\t\t\tself.codePointAt(1)\n\t\t} {\n\t\t\tself.error('codePoint: not single character string')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "codePointAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.codePointAt(_index - 1);
  },
  "{ :self :index |\n\t\t<primitive: return _self.codePointAt(_index - 1);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "codePointList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collectInto_3(_self, _codePoint_1, []);
  },
  "{ :self |\n\t\tself.collectInto(codePoint:/1, [])\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "collectInto",
  ["self", "aBlock:/1", "aCollection"],
  function (_self, _aBlock_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _primitiveCollectInto_3(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_asCharacter_1(_each));
    }, []);
  },
  "{ :self :aBlock:/1 :aCollection |\n\t\tself.primitiveCollectInto({ :each |\n\t\t\taBlock(each.asCharacter)\n\t\t}, [])\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "contractTo",
  ["self", "smallSize"],
  function (_self, _smallSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), _smallSize),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThanSign_2(_smallSize, 5), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _copyFromTo_3(_self, 1, _smallSize);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
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
        });
      },
    );
  },
  "{ :self :smallSize |\n\t\t(self.size <= smallSize).if {\n\t\t\tself\n\t\t} {\n\t\t\t(smallSize < 5).if {\n\t\t\t\tself.copyFromTo(1, smallSize)\n\t\t\t} {\n\t\t\t\tlet leftSize = smallSize - 2 // 2;\n\t\t\t\tself.copyReplaceFromToWith(\n\t\t\t\t\tleftSize + 1,\n\t\t\t\t\tself.size - (smallSize - leftSize - 3),\n\t\t\t\t\t'...'\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "copyFromTo",
  ["self", "start", "end"],
  function (_self, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _end";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.substring(_start - 1, _end);
  },
  "{ :self :start :end |\n\t\t<primitive: return _self.substring(_start - 1, _end);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "copyReplaceFromToWith",
  ["self", "start", "stop", "replacement"],
  function (_self, _start, _stop, _replacement) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _stop, _replacement";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _copyFromTo_3(_self, 1, _hyphenMinus_2(_start, 1)),
      _replacement,
      _copyFromTo_3(_self, _plusSign_2(_stop, 1), _size_1(_self)),
    ]);
  },
  "{ :self :start :stop :replacement |\n\t\t[\n\t\t\tself.copyFromTo(1, start - 1),\n\t\t\treplacement,\n\t\t\tself.copyFromTo(stop + 1, self.size)\n\t\t].join\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "countCharacters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.do { :each |\n\t\t\tanswer := answer + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "countUtf16CodeUnits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.length;
  },
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _primitiveDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_asCharacter_1(_each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.primitiveDo { :each |\n\t\t\taBlock(each.asCharacter)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "drop",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_anInteger, _size_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return "";
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _copyFromTo_3(_self, _plusSign_2(_anInteger, 1), _size_1(_self));
      },
    );
  },
  "{ :self :anInteger |\n\t\t(anInteger >= self.size).if {\n\t\t\t''\n\t\t} {\n\t\t\tself.copyFromTo(anInteger + 1, self.size)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "editDistance",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _editDistance_2(_stringList_1(_self), _stringList_1(_aString));
  },
  "{ :self :aString |\n\t\tself.stringList.editDistance(aString.stringList)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "endsWith",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (typeof _aString == "string") {
      return _self.endsWith(_aString);
    }
    /* Statements */
    return _error_2(_self, "endsWith: non string operand");
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(typeof _aString == 'string') {\n\t\t\treturn _self.endsWith(_aString);\n\t\t}\n\t\t>\n\t\tself.error('endsWith: non string operand')\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "findLastOccurrenceOfStringStartingAt",
  ["self", "subString", "start"],
  function (_self, _subString, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subString, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _last = _findStringStartingAt_3(_self, _subString, _start);
    /* Statements */
    return _if_3(_equalsSign_2(_last, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = null;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_last, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _answer = _last;
        return _last = _findStringStartingAt_3(
          _self,
          _subString,
          _plusSign_2(_last, 1),
        );
      });
      return _answer;
    });
  },
  "{ :self :subString :start |\n\t\tlet last = self.findStringStartingAt(subString, start);\n\t\t(last = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet answer = nil;\n\t\t\t{\n\t\t\t\tlast > 0\n\t\t\t}.whileTrue {\n\t\t\t\tanswer := last;\n\t\t\t\tlast := self.findStringStartingAt(subString, last + 1)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "findPreviousOccurrenceOfStringStartingAt",
  ["self", "subString", "start"],
  function (_self, _subString, _start) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _subString, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.lastIndexOf(_subString, _start - 1) + 1;
  },
  "{ :self :subString :start |\n\t\t<primitive: return _self.lastIndexOf(_subString, _start - 1) + 1;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "findStringStartingAt",
  ["self", "aString", "aNumber"],
  function (_self, _aString, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.indexOf(_aString, _aNumber - 1) + 1;
  },
  "{ :self :aString :aNumber |\n\t\t<primitive: return _self.indexOf(_aString, _aNumber - 1) + 1;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "findString",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.indexOf(_aString) + 1;
  },
  "{ :self :aString |\n\t\t<primitive: return _self.indexOf(_aString) + 1;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, 1);
  },
  "{ :self |\n\t\tself[1]\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstBracketedCommentIfAbsent",
  ["self", "open", "close", "aBlock:/0"],
  function (_self, _open, _close, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _open, _close, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _start = _findString_2(_self, _open);
    let _end = _findString_2(_self, _close);
    /* Statements */
    return _if_3(
      _verticalLine_2(_equalsSign_2(_start, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_end, 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_0();
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _copyFromTo_3(
          _self,
          _plusSign_2(_start, _size_1(_open)),
          _hyphenMinus_2(_end, 1),
        );
      },
    );
  },
  "{ :self :open :close :aBlock:/0 |\n\t\tlet start = self.findString(open);\n\t\tlet end = self.findString(close);\n\t\t(start = 0 | {\n\t\t\tend = 0\n\t\t}).if {\n\t\t\taBlock()\n\t\t} {\n\t\t\tself.copyFromTo(start + open.size, end - 1)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstBracketedComment",
  ["self", "open", "close"],
  function (_self, _open, _close) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _open, _close";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, _open, _close, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "firstBracketedComment: no comment found");
    });
  },
  "{ :self :open :close |\n\t\tself.firstBracketedCommentIfAbsent(open, close) {\n\t\t\tself.error('firstBracketedComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstHsCommentIfAbsent",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, "{-", "-}", _aBlock_0);
  },
  "{ :self :aBlock:/0 |\n\t\tself.firstBracketedCommentIfAbsent('{-', '-}', aBlock:/0)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstHsComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _firstHsCommentIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "firstHsComment: no comment found");
    });
  },
  "{ :self |\n\t\tself.firstHsCommentIfAbsent {\n\t\t\tself.error('firstHsComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstMlCommentIfAbsent",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _firstBracketedCommentIfAbsent_4(_self, "(*", "*)", _aBlock_0);
  },
  "{ :self :aBlock:/0 |\n\t\tself.firstBracketedCommentIfAbsent('(*', '*)', aBlock:/0)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "firstMlComment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _firstMlCommentIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "firstMlComment: no comment found");
    });
  },
  "{ :self |\n\t\tself.firstMlCommentIfAbsent {\n\t\t\tself.error('firstMlComment: no comment found')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "hammingDistance",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hammingDistance_2(_stringList_1(_self), _stringList_1(_aString));
  },
  "{ :self :aString |\n\t\tself.stringList.hammingDistance(aString.stringList)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "includes",
  ["self", "aCharacter"],
  function (_self, _aCharacter) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCharacter";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_characterList_1(_self), _aCharacter);
  },
  "{ :self :aCharacter |\n\t\tself.characterList.includes(aCharacter)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "indefiniteArticle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVowel_1(_first_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "an ";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return "a ";
    });
  },
  "{ :self |\n\t\tself.first.isVowel.if {\n\t\t\t'an '\n\t\t} {\n\t\t\t'a '\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _to_2(1, _size_1(_self));
  },
  "{ :self |\n\t\t1.to(self.size)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "indicesOf",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isString_1(_aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = [];
      let _index = 1;
      let _end = _size_1(_self);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _betweenAnd_3(_index, 1, _end);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _index = _findStringStartingAt_3(_self, _aString, _index);
        return _ifTrue_2(_tildeEqualsSign_2(_index, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _add_2(_answer, _index);
          return _index = _plusSign_2(_index, 1);
        });
      });
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("indicesOf: not a string: ", _aString),
      );
    });
  },
  "{ :self :aString |\n\t\taString.isString.if {\n\t\t\tlet answer = [];\n\t\t\tlet index = 1;\n\t\t\tlet end = self.size;\n\t\t\t{\n\t\t\t\tindex.betweenAnd(1, end)\n\t\t\t}.whileTrue {\n\t\t\t\tindex := self.findStringStartingAt(aString, index);\n\t\t\t\t(index ~= 0).ifTrue {\n\t\t\t\t\tanswer.add(index);\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('indicesOf: not a string: ' ++ aString)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "includesSubstring",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.includes(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.includes(_aString);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isAsciiString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_self, _isAscii_1);
  },
  "{ :self |\n\t\tself.allSatisfy(isAscii:/1)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return /^[0-9]+$/.test(_self);
  },
  "{ :self |\n\t\t<primitive: return /^[0-9]+$/.test(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isInBasicMultilingualPlane",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(
      _countUtf16CodeUnits_1(_self),
      _countCharacters_1(_self),
    );
  },
  "{ :self |\n\t\tself.countUtf16CodeUnits = self.countCharacters\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isLetter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isLowercase_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isUppercase_1(_self);
    });
  },
  "{ :self |\n\t\tself.isLowercase | { self.isUppercase }\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isLowercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return /^[a-z]+$/.test(_self);
  },
  "{ :self |\n\t\t<primitive: return /^[a-z]+$/.test(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isSequence",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isSingleCharacter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_equalsSign_2(_size_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_equalsSign_2(_size_1(_self), 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isUtf16SurrogateCode_1(_codePointAt_2(_self, 2));
      });
    });
  },
  "{ :self |\n\t\tself.size = 1 | {\n\t\t\tself.size = 2 & {\n\t\t\t\tself.codePointAt(2).isUtf16SurrogateCode\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isUppercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return /^[A-Z]+$/.test(_self);
  },
  "{ :self |\n\t\t<primitive: return /^[A-Z]+$/.test(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "isWellFormed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.isWellFormed();
  },
  "{ :self |\n\t\t<primitive: return _self.isWellFormed();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "last",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _size_1(_self));
  },
  "{ :self |\n\t\tself[self.size]\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "last",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(
      _self,
      _plusSign_2(_hyphenMinus_2(_size_1(_self), _count), 1),
      _size_1(_self),
    );
  },
  "{ :self :count |\n\t\tself.copyFromTo(self.size - count + 1, self.size)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "lines",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.split(/\r?\n/);
  },
  "{ :self |\n\t\t<primitive: return _self.split(/\\r?\\n/);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "markdownToHtml",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const reader = new commonmark.Parser({ smart: true });
    const writer = new commonmark.HtmlRenderer();
    return writer.render(reader.parse(_self));
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst reader = new commonmark.Parser({smart: true});\n\t\tconst writer = new commonmark.HtmlRenderer();\n\t\treturn writer.render(reader.parse(_self));\n\t\t>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "notEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _not_1(_isEmpty_1(_self));
  },
  "{ :self |\n\t\tself.isEmpty.not\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "nub",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _seen = [];
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifAbsentAdd_2(_seen, _each);
    });
  },
  "{ :self |\n\t\tlet seen = [];\n\t\tself.select { :each |\n\t\t\tseen.ifAbsentAdd(each)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "occurrencesOf",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isString_1(_aString), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _index = 1;
      let _end = _size_1(_self);
      let _tally = 0;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _betweenAnd_3(_index, 1, _end);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _index = _findStringStartingAt_3(_self, _aString, _index);
        return _ifTrue_2(_tildeEqualsSign_2(_index, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _tally = _plusSign_2(_tally, 1);
          return _index = _plusSign_2(_index, 1);
        });
      });
      return _tally;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("occurrencesOf: not a string: ", _aString),
      );
    });
  },
  "{ :self :aString |\n\t\taString.isString.if {\n\t\t\tlet index = 1;\n\t\t\tlet end = self.size;\n\t\t\tlet tally = 0;\n\t\t\t{\n\t\t\t\tindex.betweenAnd(1, end)\n\t\t\t}.whileTrue {\n\t\t\t\tindex := self.findStringStartingAt(aString, index);\n\t\t\t\t(index ~= 0).ifTrue {\n\t\t\t\t\ttally := tally + 1;\n\t\t\t\t\tindex := index + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\ttally\n\t\t} {\n\t\t\tself.error('occurrencesOf: not a string: ' ++ aString)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "padLeft",
  ["self", "anInteger", "aString"],
  function (_self, _anInteger, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.padStart(_anInteger, _aString);
  },
  "{ :self :anInteger :aString |\n\t\t<primitive: return _self.padStart(_anInteger, _aString);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "padRight",
  ["self", "anInteger", "aString"],
  function (_self, _anInteger, _aString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.padEnd(_anInteger, _aString);
  },
  "{ :self :anInteger :aString |\n\t\t<primitive: return _self.padEnd(_anInteger, _aString);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "paragraphs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.split("\n\n");
  },
  "{ :self |\n\t\t<primitive: return _self.split('\\n\\n');>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "parseBacktickQuotedString",
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
  "String",
  "String",
  "parseDoubleQuotedString",
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
  "String",
  "String",
  "parseJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return JSON.parse(_self);
  },
  "{ :self |\n\t\t<primitive: return JSON.parse(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "postLine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _postLine_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.postLine(self)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "primitiveCollectInto",
  ["self", "aBlock:/1", "aCollection"],
  function (_self, _aBlock_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _primitiveDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_aCollection, _aBlock_1(_each));
    });
    return _aCollection;
  },
  "{ :self :aBlock:/1 :aCollection |\n\t\tself.primitiveDo { :each |\n\t\t\taCollection.add(aBlock(each))\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "primitiveDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    for (const each of _self) {
      _aBlock_1(each);
    }
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t<primitive:\n\t\tfor(const each of _self) {\n\t\t\t_aBlock_1(each);\n\t\t};\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "replaceString",
  ["self", "stringToFind", "stringToReplaceWith"],
  function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_stringToFind);
    _assertIsString_1(_stringToReplaceWith);
    return _basicReplaceString_3(_self, _stringToFind, _stringToReplaceWith);
  },
  "{ :self :stringToFind :stringToReplaceWith |\n\t\tstringToFind.assertIsString;\n\t\tstringToReplaceWith.assertIsString;\n\t\tself.basicReplaceString(stringToFind, stringToReplaceWith)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "replaceStringAll",
  ["self", "stringToFind", "stringToReplaceWith"],
  function (_self, _stringToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _stringToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_stringToFind);
    _assertIsString_1(_stringToReplaceWith);
    return _basicReplaceStringAll_3(_self, _stringToFind, _stringToReplaceWith);
  },
  "{ :self :stringToFind :stringToReplaceWith |\n\t\tstringToFind.assertIsString;\n\t\tstringToReplaceWith.assertIsString;\n\t\tself.basicReplaceStringAll(stringToFind, stringToReplaceWith)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1(_reversed_1(_asList_1(_self)));
  },
  "{ :self |\n\t\tself.asList.reversed.join\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "romanNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _value = 0;
    let _v1 = 0;
    let _v2 = 0;
    let _letters = _asciiByteArray_1("IVXLCDM");
    /* Statements */
    _reverseDo_2(_asciiByteArray_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _v1 = _at_2([1, 5, 10, 50, 100, 500, 1000], _indexOf_2(_letters, _each));
      _if_3(_greaterThanSignEqualsSign_2(_v1, _v2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value = _plusSign_2(_value, _v1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value = _hyphenMinus_2(_value, _v1);
      });
      return _v2 = _v1;
    });
    return _value;
  },
  "{ :self |\n\t\tlet value = 0;\n\t\tlet v1 = 0;\n\t\tlet v2 = 0;\n\t\tlet letters = 'IVXLCDM'.asciiByteArray;\n\t\tself.asciiByteArray.reverseDo { :each |\n\t\t\tv1 := [1, 5, 10, 50, 100, 500, 1000].at(letters.indexOf(each));\n\t\t\t(v1 >= v2).if {\n\t\t\t\tvalue := value + v1\n\t\t\t} {\n\t\t\t\tvalue := value - v1\n\t\t\t};\n\t\t\tv2 := v1\n\t\t};\n\t\tvalue\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "sameAs",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, _aString), function () {
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
      return _equalsSign_2(_asLowercase_1(_self), _asLowercase_1(_aString));
    });
  },
  "{ :self :aString |\n\t\t(self = aString).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tself.asLowercase = aString.asLowercase\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _list = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _add_2(_list, _each);
      });
    });
    return _join_1(_list);
  },
  "{ :self :aBlock:/1 |\n\t\tlet list = [];\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tlist.add(each)\n\t\t\t}\n\t\t};\n\t\tlist.join\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "shallowCopy",
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
  "String",
  "String",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _countUtf16CodeUnits_1(_self);
  },
  "{ :self |\n\t\tself.countUtf16CodeUnits\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "split",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _stringList_1(_self);
  },
  "{ :self |\n\t\tself.stringList\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "splitBy",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.split(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.split(_aString);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "splitByLimitedTo",
  ["self", "aString", "count"],
  function (_self, _aString, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.split(_aString, _count);
  },
  "{ :self :aString :count |\n\t\t<primitive: return _self.split(_aString, _count);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return `'${_self}'`;
  },
  "{ :self |\n\t\t<primitive: return `'${_self}'`;>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "stringList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _primitiveCollectInto_3(_self, _identity_1, []);
  },
  "{ :self |\n\t\tself.primitiveCollectInto(identity:/1, [])\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "take",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, 1, _min_2(_anInteger, _size_1(_self)));
  },
  "{ :self :anInteger |\n\t\tself.copyFromTo(1, anInteger.min(self.size))\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "toLowercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toLowerCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toLowerCase();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "toUppercase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toUpperCase();
  },
  "{ :self |\n\t\t<primitive: return _self.toUpperCase();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "truncateTo",
  ["self", "smallSize"],
  function (_self, _smallSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _smallSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_size_1(_self), _smallSize),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _copyFromTo_3(_self, 1, _smallSize);
      },
    );
  },
  "{ :self :smallSize |\n\t\t(self.size <= smallSize).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.copyFromTo(1, smallSize)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "utf8ByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new TextEncoder().encode(_self.normalize("NFC"));
  },
  "{ :self |\n\t\t<primitive: return new TextEncoder().encode(_self.normalize('NFC'));>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "utf16List",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(1, _countUtf16CodeUnits_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _utf16CodePointAt_2(_self, _index));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\t1.toDo(self.countUtf16CodeUnits) { :index |\n\t\t\tanswer.add(self.utf16CodePointAt(index))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "utf16CodePointAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.charCodeAt(_index - 1);
  },
  "{ :self :index |\n\t\t<primitive: return _self.charCodeAt(_index - 1);>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "whiteSpaceDelimitedWordAtIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _previousSpaceIndex = _findPreviousOccurrenceOfStringStartingAt_3(
      _self,
      " ",
      _hyphenMinus_2(_index, 1),
    );
    let _nextSpaceIndex = _findStringStartingAt_3(_self, " ", _index);
    let _begin = _if_3(_lessThanSign_2(_previousSpaceIndex, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(_previousSpaceIndex, 1);
    });
    let _end = _if_3(_lessThanSign_2(_nextSpaceIndex, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _length_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextSpaceIndex;
    });
    /* Statements */
    return _copyFromTo_3(_self, _begin, _hyphenMinus_2(_end, 1));
  },
  "{ :self :index |\n\t\tlet previousSpaceIndex = self.findPreviousOccurrenceOfStringStartingAt(' ', index - 1);\n\t\tlet nextSpaceIndex = self.findStringStartingAt(' ', index);\n\t\tlet begin = (previousSpaceIndex < 1).if { 1 } { previousSpaceIndex + 1 };\n\t\tlet end = (nextSpaceIndex < 1).if { self.length } { nextSpaceIndex };\n\t\tself.copyFromTo(begin, end - 1)\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "withBlanksTrimmed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.trim();
  },
  "{ :self |\n\t\t<primitive: return _self.trim();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "withIndefiniteArticle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_indefiniteArticle_1(_self), _self);
  },
  "{ :self |\n\t\tself.indefiniteArticle ++ self\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "withoutLeadingBlanks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.trimStart();
  },
  "{ :self |\n\t\t<primitive: return _self.trimStart();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "withoutQuoting",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _quote = _first_1(_self);
      /* Statements */
      return _if_3(
        _ampersand_2(_equalsSign_2(_quote, _last_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _includes_2([34, 39, 96], _codePoint_1(_quote));
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _copyFromTo_3(_self, 2, _hyphenMinus_2(_size_1(_self), 1));
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _self;
        },
      );
    });
  },
  "{ :self |\n\t\t(self.size < 2).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet quote = self.first;\n\t\t\t(\n\t\t\t\tquote = self.last & {\n\t\t\t\t\t[34, 39, 96].includes(quote.codePoint)\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tself.copyFromTo(2, self.size - 1)\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "withoutTrailingBlanks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.trimEnd();
  },
  "{ :self |\n\t\t<primitive: return _self.trimEnd();>\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "words",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _splitBy_2(_self, " ");
  },
  "{ :self |\n\t\tself.splitBy(' ')\n\t}",
);

sl.addMethod(
  "String",
  "String",
  "allButFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allButFirst_2(_self, 1);
  },
  "{ :self | self.allButFirst(1) }",
);

sl.addMethod(
  "String",
  "String",
  "allButFirst",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, _plusSign_2(_n, 1), _size_1(_self));
  },
  "{ :self :n | self.copyFromTo(n + 1, self.size) }",
);

sl.extendTraitWithMethod(
  "Object",
  "String",
  "postLine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _postLine_1(_printString_1(_self));
    return _self;
  },
  "{ :self |\n\t\tself.printString.postLine;\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "String",
  "isAsciiCodePoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_self, 0, 127);
  },
  "{ :self |\n\t\tself.betweenAnd(0, 127)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "String",
  "isUtf16SurrogateCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_self, 55296, 57343);
  },
  "{ :self |\n\t\t{- 0xD800 = 55296, 0xDfFF = 57343 -}\n\t\tself.betweenAnd(55296, 57343)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "camelCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      [_first_1(_self)],
      _collect_2(_allButFirst_1(_self), _capitalized_1),
    );
  },
  "{ :self |\n\t\t[self.first] ++ self.allButFirst.collect(capitalized:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "join",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinSeparatedBy_2(_self, "");
  },
  "{ :self |\n\t\tself.joinSeparatedBy('')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "joinCharacters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinSeparatedBy_2(_collect_2(_self, _string_1), "");
  },
  "{ :self |\n\t\tself.collect(string:/1).joinSeparatedBy('')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "joinSeparatedBy",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinStringsSeparatedBy_2(_collect_2(_self, _asString_1), _aString);
  },
  "{ :self :aString |\n\t\tself.collect(asString:/1).joinStringsSeparatedBy(aString)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "pascalCase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _capitalized_1);
  },
  "{ :self |\n\t\tself.collect(capitalized:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "unlines",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinSeparatedBy_2(_self, "\n");
  },
  "{ :self |\n\t\tself.joinSeparatedBy('\\n')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "String",
  "unwords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _joinSeparatedBy_2(_self, " ");
  },
  "{ :self |\n\t\tself.joinSeparatedBy(' ')\n\t}",
);

sl.addMethod(
  "List",
  "String",
  "joinStringsSeparatedBy",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.join(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.join(_aString);>\n\t}",
);
