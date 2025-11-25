sl.addType(
  true,
  "RegExp",
  "RegularExpression",
  ["Object", "Storeable", "Equatable"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "RegExp",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "RegExp",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "RegExp",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
  "asRegularExpression",
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
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\t<primitive:\n\t\tconst result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null\n\t\t};\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\t<primitive:\n\t\tconst result = _self.exec(_aString);\n\t\treturn {\n\t\t\tmatch: result ? result[0] : null,\n\t\t\tindices: result ? [result.indices[0][0] + 1, result.indices[0][1]] : null\n\t\t};\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\t<primitive:\n\t\treturn [..._aString.matchAll(_self)].map(function(each) {\n\t\t\treturn each[0]\n\t\t});>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :replacementString |\n\t\t<primitive: return _aString.replace(_self, _replacementString);>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :replacementString |\n\t\t<primitive: return _aString.replaceAll(_self, _replacementString);>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\t<primitive: return _self.test(_aString);>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\t<primitive: return _aString.split(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isRegularExpression_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_source_1(_self), _source_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_flags_1(_self), _flags_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isRegularExpression & {\n\t\t\taBlock(self.source, anObject.source) & {\n\t\t\t\taBlock(self.flags, anObject.flags)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicExec(aString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicExecIndices(aString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.flags;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.hasIndices;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.global;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
  "isRegularExpression",
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
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.lastIndex;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\tself.exec(aString)['match']\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicMatchAll(aString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\tself.match(aString) = aString\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t['flags', 'isGlobal', 'hasIndices', 'source']\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :replacementString |\n\t\taString.assertIsString;\n\t\treplacementString.assertIsString;\n\t\tself.basicReplaceWith(aString, replacementString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :aBlock:/1 |\n\t\taString.assertIsString;\n\t\tself.basicReplaceWith(aString) { :match :offset :string |\n\t\t\taBlock(match)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :replacementString |\n\t\taString.assertIsString;\n\t\treplacementString.assertIsString;\n\t\tself.basicReplaceAllWith(aString, replacementString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString :aBlock:/1 |\n\t\taString.assertIsString;\n\t\tself.basicReplaceAllWith(aString) { :match :offset :string |\n\t\t\taBlock(match)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicSearch(aString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self :aString |\n\t\taString.assertIsString;\n\t\tself.basicSplit(aString)\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.source;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return `RegularExpression('${_self.source}', '${_self.flags}')`;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return `RegularExpression('${_self.source}', '${_self.flags}')`;>\n\t}",
);

sl.addMethodToExistingType(
  "RegExp",
  "RegularExpression",
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
  "{ :self |\n\t\t<primitive: return _self.toString();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "allRegularExpressionMatches",
  ["self", "aRegularExpression"],
  sl.annotateFunction(function (_self, _aRegularExpression) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegularExpression";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchAll_2(_asRegularExpression_1(_aRegularExpression), _self);
  }, ["self", "aRegularExpression"]),
  "{ :self :aRegularExpression |\n\t\taRegularExpression.asRegularExpression.matchAll(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "asRegularExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _RegularExpression_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tRegularExpression(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "camelCaseToWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceRegularExpression_3(
      _self,
      _RegularExpression_2("([A-Z])", "g"),
      " $1",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.replaceRegularExpression(RegularExpression('([A-Z])', 'g'), ' $1')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "escapeForRegularExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return RegExp.escape(self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return RegExp.escape(self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
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
        return _matchesRegularExpression_2(_self, "^[0-9]+$");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\tself.matchesRegularExpression('^[0-9]+$')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isBase16String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[0-9A-F]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[0-9A-F]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isBase64String",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[0-9A-Za-z+/]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[0-9A-Za-z+/]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isBitString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[01]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[01]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isDecimalIntegerString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[-+]?[0-9]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[-+]?[0-9]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isDecimalNumeralString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[-+]?[0-9]+([.][0-9]+)?$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[-+]?[0-9]+([.][0-9]+)?$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isFloatString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(
      _self,
      "^[-+]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[-+]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isScientificNotationString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(
      _self,
      "^[-+]?[0-9]+([.][0-9]+)?[eE][+-]?[0-9]+$",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[-+]?[0-9]+([.][0-9]+)?[eE][+-]?[0-9]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "isUnsignedDecimalIntegerString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[0-9]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[0-9]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "matchRegularExpression",
  ["self", "aRegularExpression"],
  sl.annotateFunction(function (_self, _aRegularExpression) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegularExpression";
      throw new Error(errorMessage);
    } /* Statements */
    return _match_2(_asRegularExpression_1(_aRegularExpression), _self);
  }, ["self", "aRegularExpression"]),
  "{ :self :aRegularExpression |\n\t\taRegularExpression.asRegularExpression.match(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "matchesRegularExpression",
  ["self", "aRegularExpression"],
  sl.annotateFunction(function (_self, _aRegularExpression) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegularExpression";
      throw new Error(errorMessage);
    } /* Statements */
    return _matches_2(_asRegularExpression_1(_aRegularExpression), _self);
  }, ["self", "aRegularExpression"]),
  "{ :self :aRegularExpression |\n\t\taRegularExpression.asRegularExpression.matches(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
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
  "{ :self |\n\t\tself.camelCaseToWords.allButFirst\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "RegularExpression",
  ["self", "flags"],
  sl.annotateFunction(function (_self, _flags) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _flags";
      throw new Error(errorMessage);
    } /* Primitive */
    return new RegExp(_self, _flags);
  }, ["self", "flags"]),
  "{ :self :flags |\n\t\t<primitive: return new RegExp(_self, _flags);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "RegularExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new RegExp(_self, "d");
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new RegExp(_self, 'd');>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "replaceRegularExpression",
  ["self", "regExpToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceWith_3(
      _asRegularExpression_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  }, ["self", "regExpToFind", "stringToReplaceWith"]),
  "{ :self :regExpToFind :stringToReplaceWith |\n\t\tregExpToFind.asRegularExpression.replaceWith(self, stringToReplaceWith)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "replaceAllRegularExpression",
  ["self", "regExpToFind", "stringToReplaceWith"],
  sl.annotateFunction(function (_self, _regExpToFind, _stringToReplaceWith) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _regExpToFind, _stringToReplaceWith";
      throw new Error(errorMessage);
    } /* Statements */
    return _replaceAllWith_3(
      _asRegularExpression_1(_regExpToFind),
      _self,
      _stringToReplaceWith,
    );
  }, ["self", "regExpToFind", "stringToReplaceWith"]),
  "{ :self :regExpToFind :stringToReplaceWith |\n\t\tregExpToFind.asRegularExpression.replaceAllWith(self, stringToReplaceWith)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "replaceMultipleStrings",
  ["aString", "aRecord"],
  sl.annotateFunction(function (_aString, _aRecord) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aString, _aRecord";
      throw new Error(errorMessage);
    } /* Primitive */
    let k = Object.keys(_aRecord).map((x) => RegExp.escape(x));
    let r = new RegExp(k.join("|"), "g");
    return _aString.replace(r, function (matched) {
      return _aRecord[matched];
    });
  }, ["aString", "aRecord"]),
  "{ :aString :aRecord |\n\t\t<primitive:\n\t\tlet k = Object.keys(_aRecord).map(x => RegExp.escape(x));\n\t\tlet r = new RegExp(k.join('|'), 'g');\n\t\treturn _aString.replace(r, function(matched) {\n\t\t\treturn _aRecord[matched];\n\t\t});\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "searchRegularExpression",
  ["self", "aRegularExpression"],
  sl.annotateFunction(function (_self, _aRegularExpression) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegularExpression";
      throw new Error(errorMessage);
    } /* Statements */
    return _search_2(_asRegularExpression_1(_aRegularExpression), _self);
  }, ["self", "aRegularExpression"]),
  "{ :self :aRegularExpression |\n\t\taRegularExpression.asRegularExpression.search(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "splitByRegularExpression",
  ["self", "aRegularExpression"],
  sl.annotateFunction(function (_self, _aRegularExpression) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRegularExpression";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_asRegularExpression_1(_aRegularExpression), _self);
  }, ["self", "aRegularExpression"]),
  "{ :self :aRegularExpression |\n\t\taRegularExpression.asRegularExpression.splitBy(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "stringDelete",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringReplace_2(_self, _hyphenMinusGreaterThanSign_2(_operand, ""));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.stringReplace(operand -> '')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "stringReplace",
  ["s", "r"],
  sl.annotateFunction(function (_s, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_r),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceMultipleStrings_2(_s, _asRecord_1(_r));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _key_1(_r);
        let _b = _value_1(_r);
        /* Statements */
        return _if_3(
          _isString_1(_a),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _replaceStringAll_3(_s, _key_1(_r), _value_1(_r));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isRegularExpression_1(_a),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _replaceAllWith_3(_a, _s, _b);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_s, "String>>stringReplace");
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["s", "r"]),
  "{ :s :r |\n\t\tr.isList.if {\n\t\t\ts.replaceMultipleStrings(r.asRecord)\n\t\t} {\n\t\t\tlet a = r.key;\n\t\t\tlet b = r.value;\n\t\t\ta.isString.if {\n\t\t\t\ts.replaceStringAll(r.key, r.value)\n\t\t\t} {\n\t\t\t\ta.isRegularExpression.if {\n\t\t\t\t\ta.replaceAllWith(s, b)\n\t\t\t\t} {\n\t\t\t\t\ts.error('String>>stringReplace')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
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
              _matchRegularExpression_2(
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
          _matchRegularExpression_2(
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
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tlet before = (index = 1).if {\n\t\t\t\t''\n\t\t\t} {\n\t\t\t\tself.copyFromTo(1, index - 1).matchRegularExpression('[a-zA-Z0-9-_]+$') ? { '' }\n\t\t\t};\n\t\t\tlet after = self.copyFromTo(index, self.size).matchRegularExpression('^[a-zA-Z0-9-_]+') ? { '' };\n\t\t\tbefore ++ after\n\t\t} {\n\t\t\tself.error('wordAtIndex: invalid index')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "wordCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_words_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.words.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "wordsBy",
  ["self", "separators"],
  sl.annotateFunction(function (_self, _separators) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _separators";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _splitByRegularExpression_2(
        _self,
        _stringIntercalate_2(_characters_1(_separators), "|"),
      ),
      _isEmpty_1,
    );
  }, ["self", "separators"]),
  "{ :self :separators |\n\t\tself.splitByRegularExpression(\n\t\t\tseparators.characters.stringIntercalate('|')\n\t\t).reject(isEmpty:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "RegularExpression",
  "words",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _trimmed = _trim_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_trimmed),
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
        return _splitByRegularExpression_2(_trimmed, "\\s+");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet trimmed = self.trim;\n\t\ttrimmed.isEmpty.if {\n\t\t\t[]\n\t\t} {\n\t\t\ttrimmed.splitByRegularExpression('\\\\s+')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "RegularExpression",
  "stringReplace",
  ["s", "r"],
  sl.annotateFunction(function (_s, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _s,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringReplace_2(_each, _r);
      }, ["each"]),
    );
  }, ["s", "r"]),
  "{ :s :r |\n\t\ts.collect { :each |\n\t\t\teach.stringReplace(r)\n\t\t}\n\t}",
);
