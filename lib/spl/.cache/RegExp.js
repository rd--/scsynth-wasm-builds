sl.addType(
  true,
  "RegExp",
  "RegExp",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "RegExp",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "asRegExp",
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
  "RegExp",
  "RegExp",
  "basicExec",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const result = _self.exec(_aString);
    return {
      match: result ? result[0] : null,
    };
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tconst result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null\n\t\t};\n\t\t>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicExecIndices",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const result = _self.exec(_aString);
    return {
      match: result ? result[0] : null,
      indices: result ? [result.indices[0][0] + 1, result.indices[0][1]] : null,
    };
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tconst result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null,\n\t\t\tindices: result ? [result.indices[0][0] + 1, result.indices[0][1]] : null\n\t\t};\n\t\t>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicMatchAll",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return [..._aString.matchAll(_self)].map(function (each) {
      return each[0];
    });
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\treturn [..._aString.matchAll(_self)].map(function(each) {\n\t\t\treturn each[0]\n\t\t});>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicReplaceWith",
  ["self", "aString", "replacementString"],
  function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _aString.replace(_self, _replacementString);
  },
  "{ :self :aString :replacementString |\n\t\t<primitive: return _aString.replace(_self, _replacementString);>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicReplaceAllWith",
  ["self", "aString", "replacementString"],
  function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _aString.replaceAll(_self, _replacementString);
  },
  "{ :self :aString :replacementString |\n\t\t<primitive: return _aString.replaceAll(_self, _replacementString);>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicSearch",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.test(_aString);
  },
  "{ :self :aString |\n\t\t<primitive: return _self.test(_aString);>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "basicSplit",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _aString.split(_self);
  },
  "{ :self :aString |\n\t\t<primitive: return _aString.split(_self);>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "exec",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicExec_2(_self, _aString);
  },
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicExec(aString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "execIndices",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicExecIndices_2(_self, _aString);
  },
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicExecIndices(aString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "flags",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.flags;
  },
  "{ :self |\n\t\t<primitive: return _self.flags;>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "hasIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.hasIndices;
  },
  "{ :self |\n\t\t<primitive: return _self.hasIndices;>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "isGlobal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.global;
  },
  "{ :self |\n\t\t<primitive: return _self.global;>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "match",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_exec_2(_self, _aString), "match");
  },
  "{ :self :aString |\n\t\tself.exec(aString)::match\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "matchAll",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicMatchAll_2(_self, _aString);
  },
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicMatchAll(aString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "matches",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_match_2(_self, _aString), _aString);
  },
  "{ :self :aString |\n\t\tself.match(aString) = aString\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["flags", "isGlobal", "hasIndices", "source"];
  },
  "{ :self |\n\t\t['flags', 'isGlobal', 'hasIndices', 'source']\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "replaceWith",
  ["self", "aString", "replacementString"],
  function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    _assertIsString_1(_replacementString);
    return _basicReplaceWith_3(_self, _aString, _replacementString);
  },
  "{ :self :aString :replacementString |\n\t\taString.assertIsString;\n\t\treplacementString.assertIsString;\n\t\tself.basicReplaceWith(aString, replacementString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "replaceModifying",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicReplaceWith_3(
      _self,
      _aString,
      function (_match, _offset, _string) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _match, _offset, _string";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_match);
      },
    );
  },
  "{ :self :aString :aBlock:/1 |\n\t\taString.assertIsString;\n\t\tself.basicReplaceWith(aString) { :match :offset :string |\n\t\t\taBlock(match)\n\t\t}\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "replaceAllWith",
  ["self", "aString", "replacementString"],
  function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    _assertIsString_1(_replacementString);
    return _basicReplaceAllWith_3(_self, _aString, _replacementString);
  },
  "{ :self :aString :replacementString |\n\t\taString.assertIsString;\n\t\treplacementString.assertIsString;\n\t\tself.basicReplaceAllWith(aString, replacementString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "replaceAllModifying",
  ["self", "aString", "aBlock:/1"],
  function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicReplaceAllWith_3(
      _self,
      _aString,
      function (_match, _offset, _string) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _match, _offset, _string";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_match);
      },
    );
  },
  "{ :self :aString :aBlock:/1 |\n\t\taString.assertIsString;\n\t\tself.basicReplaceAllWith(aString) { :match :offset :string |\n\t\t\taBlock(match)\n\t\t}\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "search",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicSearch_2(_self, _aString);
  },
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicSearch(aString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "split",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_aString);
    return _basicSplit_2(_self, _aString);
  },
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicSplit(aString)\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "source",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.source;
  },
  "{ :self |\n\t\t<primitive: return _self.source;>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
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
    return `RegExp('${_self.source}', '${_self.flags}')`;
  },
  "{ :self |\n\t\t<primitive: return `RegExp('${_self.source}', '${_self.flags}')`;>\n\t}",
);

sl.addMethod(
  "RegExp",
  "RegExp",
  "stringLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.toString();
  },
  "{ :self |\n\t\t<primitive: return _self.toString();>\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "allRegExpMatches",
  ["self", "aRegExp"],
  function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _matchAll_2(_asRegExp_1(_aRegExp), _self);
  },
  "{ :self :aRegExp |\n\t\taRegExp.asRegExp.matchAll(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "asRegExp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RegExp_1(_self);
  },
  "{ :self |\n\t\tRegExp(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "camelCaseToWords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replaceRegExp_3(_self, _RegExp_2("([A-Z])", "g"), " $1");
  },
  "{ :self |\n\t\tself.replaceRegExp(RegExp('([A-Z])', 'g'), ' $1')\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "isAllDigits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _or_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _matchesRegExp_2(_self, "^[0-9]+$");
    });
  },
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\tself.matchesRegExp('^[0-9]+$')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "isDecimalIntegerString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _matchesRegExp_2(_self, "^[0-9]+$");
  },
  "{ :self |\n\t\tself.matchesRegExp('^[0-9]+$')\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "isFloatString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _matchesRegExp_2(
      _self,
      "^[-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$",
    );
  },
  "{ :self |\n\t\tself.matchesRegExp('^[-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$')\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "matchRegExp",
  ["self", "aRegExp"],
  function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _match_2(_asRegExp_1(_aRegExp), _self);
  },
  "{ :self :aRegExp |\n\t\taRegExp.asRegExp.match(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "matchesRegExp",
  ["self", "aRegExp"],
  function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _matches_2(_asRegExp_1(_aRegExp), _self);
  },
  "{ :self :aRegExp |\n\t\taRegExp.asRegExp.matches(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "pascalCaseToWords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _allButFirst_1(_camelCaseToWords_1(_self));
  },
  "{ :self |\n\t\tself.camelCaseToWords.allButFirst\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "replaceRegExp",
  ["self", "regExpToFind", "stringToReplaceWith"],
  function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replaceWith_3(
      _asRegExp_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  },
  "{ :self :regExpToFind :stringToReplaceWith |\n\t\tregExpToFind.asRegExp.replaceWith(self, stringToReplaceWith)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "replaceAllRegExp",
  ["self", "regExpToFind", "stringToReplaceWith"],
  function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replaceAllWith_3(
      _asRegExp_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  },
  "{ :self :regExpToFind :stringToReplaceWith |\n\t\tregExpToFind.asRegExp.replaceAllWith(self, stringToReplaceWith)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "searchRegExp",
  ["self", "aRegExp"],
  function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _search_2(_asRegExp_1(_aRegExp), _self);
  },
  "{ :self :aRegExp |\n\t\taRegExp.asRegExp.search(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "splitRegExp",
  ["self", "aRegExp"],
  function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _split_2(_asRegExp_1(_aRegExp), _self);
  },
  "{ :self :aRegExp |\n\t\taRegExp.asRegExp.split(self)\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "RegExp",
  ["self", "flags"],
  function (_self, _flags) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _flags";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new RegExp(_self, _flags);
  },
  "{ :self :flags |\n\t\t<primitive: return new RegExp(_self, _flags);>\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "RegExp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new RegExp(_self, "d");
  },
  "{ :self |\n\t\t<primitive: return new RegExp(_self, 'd');>\n\t}",
);

sl.addMethod(
  "String",
  "RegExp",
  "wordAtIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _before = _query_2(
      _matchRegExp_2(
        _copyFromTo_3(_self, 1, _minus_2(_index, 1)),
        "[a-zA-Z0-9-_]+$",
      ),
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
    );
    let _after = _query_2(
      _matchRegExp_2(
        _copyFromTo_3(_self, _index, _size_1(_self)),
        "^[a-zA-Z0-9-_]+",
      ),
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
    );
    /* Statements */
    return _plusPlus_2(_before, _after);
  },
  "{ :self :index |\n\t\tlet before = self.copyFromTo(1, index - 1).matchRegExp('[a-zA-Z0-9-_]+$') ? { '' };\n\t\tlet after = self.copyFromTo(index, self.size).matchRegExp('^[a-zA-Z0-9-_]+') ? { '' };\n\t\tbefore ++ after\n\t}",
);