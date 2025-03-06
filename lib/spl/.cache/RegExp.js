sl.addType(
  true,
  "RegExp",
  "RegExp",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "RegExp",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "asRegExp",
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
  "RegExp",
  "RegExp",
  "basicExec",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    const result = _self.exec(_aString);
    return {
      match: result ? result[0] : null,
    };
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: const result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null\n\t\t};>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicExecIndices",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    const result = _self.exec(_aString);
    return {
      match: result ? result[0] : null,
      indices: result ? [result.indices[0][0] + 1, result.indices[0][1]] : null,
    };
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: const result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null,\n\t\t\tindices: result ? [result.indices[0][0] + 1, result.indices[0][1]] : null\n\t\t};>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicMatchAll",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return [..._aString.matchAll(_self)].map(function (each) {
      return each[0];
    });
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return [..._aString.matchAll(_self)].map(function(each) {\n\t\t\treturn each[0]\n\t\t});>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicReplaceWith",
  ["self", "aString", "replacementString"],
  sl.annotateFunction(function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _aString.replace(_self, _replacementString);
  }, ["self", "aString", "replacementString"]),
  "{ :self :aString :replacementString | <primitive: return _aString.replace(_self, _replacementString);>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicReplaceAllWith",
  ["self", "aString", "replacementString"],
  sl.annotateFunction(function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _aString.replaceAll(_self, _replacementString);
  }, ["self", "aString", "replacementString"]),
  "{ :self :aString :replacementString | <primitive: return _aString.replaceAll(_self, _replacementString);>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicSearch",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.test(_aString);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _self.test(_aString);>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "basicSplit",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Primitive */
    return _aString.split(_self);
  }, ["self", "aString"]),
  "{ :self :aString | <primitive: return _aString.split(_self);>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "exec",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicExec_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | assertIsString(aString); basicExec(self,aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "execIndices",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicExecIndices_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | assertIsString(aString); basicExecIndices(self,aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "flags",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.flags;
  }, ["self"]),
  "{ :self | <primitive: return _self.flags;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "hasIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasIndices;
  }, ["self"]),
  "{ :self | <primitive: return _self.hasIndices;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "isGlobal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.global;
  }, ["self"]),
  "{ :self | <primitive: return _self.global;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "lastIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.lastIndex;
  }, ["self"]),
  "{ :self | <primitive: return _self.lastIndex;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "match",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_exec_2(_self, _aString), "match");
  }, ["self", "aString"]),
  "{ :self :aString | at(exec(self,aString), 'match') }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "matchAll",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicMatchAll_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | assertIsString(aString); basicMatchAll(self,aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "matches",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_match_2(_self, _aString), _aString);
  }, ["self", "aString"]),
  "{ :self :aString | =(match(self,aString), aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["flags", "isGlobal", "hasIndices", "source"];
  }, ["self"]),
  "{ :self | ['flags', 'isGlobal', 'hasIndices', 'source'] }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "replaceWith",
  ["self", "aString", "replacementString"],
  sl.annotateFunction(function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    _assertIsString_1(_replacementString);
    return _basicReplaceWith_3(_self, _aString, _replacementString);
  }, ["self", "aString", "replacementString"]),
  "{ :self :aString :replacementString | assertIsString(aString); assertIsString(replacementString); basicReplaceWith(self,aString, replacementString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "replaceModifying",
  ["self", "aString", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicReplaceWith_3(
      _self,
      _aString,
      sl.annotateFunction(function (_match, _offset, _string) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _match, _offset, _string";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_match);
      }, ["match", "offset", "string"]),
    );
  }, ["self", "aString", "aBlock:/1"]),
  "{ :self :aString :aBlock:/1 | assertIsString(aString); basicReplaceWith(self, aString, { :match :offset :string | aBlock(match) }) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "replaceAllWith",
  ["self", "aString", "replacementString"],
  sl.annotateFunction(function (_self, _aString, _replacementString) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aString, _replacementString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    _assertIsString_1(_replacementString);
    return _basicReplaceAllWith_3(_self, _aString, _replacementString);
  }, ["self", "aString", "replacementString"]),
  "{ :self :aString :replacementString | assertIsString(aString); assertIsString(replacementString); basicReplaceAllWith(self,aString, replacementString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "replaceAllModifying",
  ["self", "aString", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aString, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicReplaceAllWith_3(
      _self,
      _aString,
      sl.annotateFunction(function (_match, _offset, _string) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _match, _offset, _string";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_match);
      }, ["match", "offset", "string"]),
    );
  }, ["self", "aString", "aBlock:/1"]),
  "{ :self :aString :aBlock:/1 | assertIsString(aString); basicReplaceAllWith(self, aString, { :match :offset :string | aBlock(match) }) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "search",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicSearch_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | assertIsString(aString); basicSearch(self,aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "splitBy",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_aString);
    return _basicSplit_2(_self, _aString);
  }, ["self", "aString"]),
  "{ :self :aString | assertIsString(aString); basicSplit(self,aString) }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "source",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.source;
  }, ["self"]),
  "{ :self | <primitive: return _self.source;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return `RegExp('${_self.source}', '${_self.flags}')`;
  }, ["self"]),
  "{ :self | <primitive: return `RegExp('${_self.source}', '${_self.flags}')`;>\n }",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegExp",
  "stringLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toString();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "allRegExpMatches",
  ["self", "aRegExp"],
  sl.annotateFunction(function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchAll_2(_asRegExp_1(_aRegExp), _self);
  }, ["self", "aRegExp"]),
  "{ :self :aRegExp | matchAll(asRegExp(aRegExp),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "asRegExp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RegExp_1(_self);
  }, ["self"]),
  "{ :self | RegExp(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "camelCaseToWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceRegExp_3(_self, _RegExp_2("([A-Z])", "g"), " $1");
  }, ["self"]),
  "{ :self | replaceRegExp(self,RegExp('([A-Z])', 'g'), ' $1') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "isAllDigits",
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
        return _matchesRegExp_2(_self, "^[0-9]+$");
      }, []),
    );
  }, ["self"]),
  "{ :self | |(isEmpty(self), { matchesRegExp(self,'^[0-9]+$') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "isDecimalIntegerString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegExp_2(_self, "^[0-9]+$");
  }, ["self"]),
  "{ :self | matchesRegExp(self,'^[0-9]+$') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "isFloatString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegExp_2(
      _self,
      "^[-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$",
    );
  }, ["self"]),
  "{ :self | matchesRegExp(self,'^[-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "matchRegExp",
  ["self", "aRegExp"],
  sl.annotateFunction(function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      throw new Error(errorMessage);
    } /* Statements */
    return _match_2(_asRegExp_1(_aRegExp), _self);
  }, ["self", "aRegExp"]),
  "{ :self :aRegExp | match(asRegExp(aRegExp),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "matchesRegExp",
  ["self", "aRegExp"],
  sl.annotateFunction(function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      throw new Error(errorMessage);
    } /* Statements */
    return _matches_2(_asRegExp_1(_aRegExp), _self);
  }, ["self", "aRegExp"]),
  "{ :self :aRegExp | matches(asRegExp(aRegExp),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "pascalCaseToWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allButFirst_1(_camelCaseToWords_1(_self));
  }, ["self"]),
  "{ :self | allButFirst(camelCaseToWords(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "replaceRegExp",
  ["self", "regExpToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceWith_3(
      _asRegExp_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  }, ["self", "regExpToFind", "stringToReplaceWith"]),
  "{ :self :regExpToFind :stringToReplaceWith | replaceWith(asRegExp(regExpToFind),self, stringToReplaceWith) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "replaceAllRegExp",
  ["self", "regExpToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceAllWith_3(
      _asRegExp_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  }, ["self", "regExpToFind", "stringToReplaceWith"]),
  "{ :self :regExpToFind :stringToReplaceWith | replaceAllWith(asRegExp(regExpToFind),self, stringToReplaceWith) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "searchRegExp",
  ["self", "aRegExp"],
  sl.annotateFunction(function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      throw new Error(errorMessage);
    } /* Statements */
    return _search_2(_asRegExp_1(_aRegExp), _self);
  }, ["self", "aRegExp"]),
  "{ :self :aRegExp | search(asRegExp(aRegExp),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "splitByRegExp",
  ["self", "aRegExp"],
  sl.annotateFunction(function (_self, _aRegExp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegExp";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_asRegExp_1(_aRegExp), _self);
  }, ["self", "aRegExp"]),
  "{ :self :aRegExp | splitBy(asRegExp(aRegExp),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "RegExp",
  ["self", "flags"],
  sl.annotateFunction(function (_self, _flags) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _flags";
      throw new Error(errorMessage);
    } /* Primitive */
    return new RegExp(_self, _flags);
  }, ["self", "flags"]),
  "{ :self :flags | <primitive: return new RegExp(_self, _flags);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "RegExp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new RegExp(_self, "d");
  }, ["self"]),
  "{ :self | <primitive: return new RegExp(_self, 'd');>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "wordAtIndex",
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
        let _before = _if_3(
          _equalsSign_2(_index, 1),
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
            return _questionMark_2(
              _matchRegExp_2(
                _copyFromTo_3(_self, 1, _hyphenMinus_2(_index, 1)),
                "[a-zA-Z0-9-_]+$",
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return "";
              }, []),
            );
          }, []),
        );
        let _after = _questionMark_2(
          _matchRegExp_2(
            _copyFromTo_3(_self, _index, _size_1(_self)),
            "^[a-zA-Z0-9-_]+",
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "";
          }, []),
        );
        /* Statements */
        return _plusSignPlusSign_2(_before, _after);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "wordAtIndex: invalid index");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if(includesIndex(self,index), { let before = if((=(index, 1)), { '' }, { ?(matchRegExp(copyFromTo(self,1, -(index, 1)),'[a-zA-Z0-9-_]+$'), { '' }) }); let after = ?(matchRegExp(copyFromTo(self,index, size(self)),'^[a-zA-Z0-9-_]+'), { '' }); ++(before, after) }, { error(self,'wordAtIndex: invalid index') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "wordsBy",
  ["self", "separators"],
  sl.annotateFunction(function (_self, _separators) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _separators";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _splitByRegExp_2(
        _self,
        _stringIntercalate_2(_characters_1(_separators), "|"),
      ),
      _isEmpty_1,
    );
  }, ["self", "separators"]),
  "{ :self :separators | reject(splitByRegExp(self,stringIntercalate(characters(separators),'|')),isEmpty:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegExp",
  "words",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitByRegExp_2(_trim_1(_self), "\\s+");
  }, ["self"]),
  "{ :self | splitByRegExp(trim(self),'\\\\s+') }",
);
