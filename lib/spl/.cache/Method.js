sl.addType(
  true,
  "MethodInformation",
  "Method",
  ["Object", "Equatable"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MethodInformation",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "MethodInformation",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "arity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arity;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.arity;>\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "origin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.origin;>\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "packageName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.packageName;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.packageName;>\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "parameterNames",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parameterNames;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.parameterNames;>\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "packageName", "parameterNames", "sourceCode", "origin"];
  }, ["self"]),
  "{ :self |\n\t\t['name', 'packageName', 'parameterNames', 'sourceCode', 'origin']\n\t}",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "sourceCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sourceCode;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.sourceCode;>\n\t}",
);

sl.addType(
  true,
  "Method",
  "Method",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Method",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _identical_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tidentical(self, anObject)\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _identical_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tidentical(self, anObject)\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "arity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arity_1(_information_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.information.arity\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "definition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_plusSignPlusSign_2("	", _name_1(_self)), " "),
      _sourceCode_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\t'\t' ++ self.name ++ ' ' ++ self.sourceCode\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "definition",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluate_2(
      _system,
      _stringCatenate_1([
        "+",
        _qualifiedName_1(_origin_1(_self)),
        "{ ",
        _aString,
        " }",
      ]),
    );
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tsystem.evaluate(\n\t\t\t[\n\t\t\t\t'+',\n\t\t\t\tself.origin.qualifiedName,\n\t\t\t\t'{ ',\n\t\t\t\taString,\n\t\t\t\t' }'\n\t\t\t].stringCatenate\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "information",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.information;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.information;>\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_information_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.information.name\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "operatorTokenOrQualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_arity_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _questionMark_2(
          _splOperatorNameToken_1(_name_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _qualifiedName_1(_self);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _qualifiedName_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.arity = 2).if {\n\t\t\tself.name.splOperatorNameToken ? { self.qualifiedName }\n\t\t} {\n\t\t\tself.qualifiedName\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "origin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _origin_1(_information_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.information.origin\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "packageName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _packageName_1(_information_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.information.packageName\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "block",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.block;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.block;>\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "provenance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%:%", [_packageName_1(_self), _name_1(_origin_1(_self))]);
  }, ["self"]),
  "{ :self |\n\t\t'%:%'.format([\n\t\t\tself.packageName,\n\t\t\tself.origin.name\n\t\t])\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["block", "information"];
  }, ["self"]),
  "{ :self |\n\t\t['block', 'information']\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "qualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_name_1(_self), ":/"),
      _arity_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.name ++ ':/' ++ self.arity\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "signature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_qualifiedName_1(_origin_1(_self)), ">>"),
      _qualifiedName_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.origin.qualifiedName ++ '>>' ++ self.qualifiedName\n\t}",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "sourceCode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sourceCode_1(_information_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.information.sourceCode\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "asMethodName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSplOperatorToken_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _splOperatorTokenName_1(_self);
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
  "{ :self |\n\t\tself.isSplOperatorToken.if {\n\t\t\tself.splOperatorTokenName\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "parseQualifiedMethodName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ":/");
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_parts), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_at_2(_parts, 1), _parseSmallInteger_2(_at_2(_parts, 2), 10)];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseQualifiedMethodName");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet parts = self.splitBy(':/');\n\t\t(parts.size = 2).if {\n\t\t\t[parts[1], parts[2].parseSmallInteger(10)]\n\t\t} {\n\t\t\tself.error('parseQualifiedMethodName')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "parseMethodSignature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ">>");
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_parts), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _parts;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseMethodSignature");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet parts = self.splitBy('>>');\n\t\t(parts.size = 2).if {\n\t\t\tparts\n\t\t} {\n\t\t\tself.error('parseMethodSignature')\n\t\t}\n\t}",
);
