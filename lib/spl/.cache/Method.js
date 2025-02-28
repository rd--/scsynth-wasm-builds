sl.addType(
  true,
  "MethodInformation",
  "Method",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "MethodInformation",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "arity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arity;
  },
  "{ :self | <primitive: return _self.arity;>\n }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  },
  "{ :self | <primitive: return _self.origin;>\n }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.packageName;
  },
  "{ :self | <primitive: return _self.packageName;>\n }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "parameterNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parameterNames;
  },
  "{ :self | <primitive: return _self.parameterNames;>\n }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "packageName", "parameterNames", "sourceCode", "origin"];
  },
  "{ :self | ['name', 'packageName', 'parameterNames', 'sourceCode', 'origin'] }",
);

sl.addMethodToExistingType(
  "MethodInformation",
  "Method",
  "sourceCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sourceCode;
  },
  "{ :self | <primitive: return _self.sourceCode;>\n }",
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
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject | ==(self, anObject) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "arity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arity_1(_information_1(_self));
  },
  "{ :self | arity(information(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "definition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_plusSignPlusSign_2("	", _name_1(_self)), " "),
      _sourceCode_1(_self),
    );
  },
  "{ :self | ++(++(++('\t', name(self)), ' '), sourceCode(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "definition",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluate_2(
      _system,
      _join_2(
        ["+", _qualifiedName_1(_origin_1(_self)), "{ ", _aString, " }"],
        "",
      ),
    );
  },
  "{ :self :aString | evaluate(system,join(['+', qualifiedName(origin(self)), '{ ', aString, ' }'],'')) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "information",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.information;
  },
  "{ :self | <primitive: return _self.information;>\n }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_information_1(_self));
  },
  "{ :self | name(information(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "operatorTokenOrQualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_arity_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _questionMark_2(_operatorNameToken_1(_name_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _qualifiedName_1(_self);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _qualifiedName_1(_self);
    });
  },
  "{ :self | if((=(arity(self), 2)), { ?(operatorNameToken(name(self)), { qualifiedName(self) }) }, { qualifiedName(self) }) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _origin_1(_information_1(_self));
  },
  "{ :self | origin(information(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _packageName_1(_information_1(_self));
  },
  "{ :self | packageName(information(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "block",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.block;
  },
  "{ :self | <primitive: return _self.block;>\n }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "provenance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([_packageName_1(_self), _name_1(_origin_1(_self))], ":");
  },
  "{ :self | join([packageName(self), name(origin(self))],':') }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["block", "information"];
  },
  "{ :self | ['block', 'information'] }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_name_1(_self), ":/"),
      _arity_1(_self),
    );
  },
  "{ :self | ++(++(name(self), ':/'), arity(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "signature",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_qualifiedName_1(_origin_1(_self)), ">>"),
      _qualifiedName_1(_self),
    );
  },
  "{ :self | ++(++(qualifiedName(origin(self)), '>>'), qualifiedName(self)) }",
);

sl.addMethodToExistingType(
  "Method",
  "Method",
  "sourceCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sourceCode_1(_information_1(_self));
  },
  "{ :self | sourceCode(information(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "asMethodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOperatorToken_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _operatorTokenName_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self | if(isOperatorToken(self), { operatorTokenName(self) }, { self }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "parseQualifiedMethodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ":/");
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_parts), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [_at_2(_parts, 1), _parseSmallInteger_2(_at_2(_parts, 2), 10)];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "parseQualifiedMethodName");
    });
  },
  "{ :self | let parts = splitBy(self,':/'); if((=(size(parts), 2)), { [at(parts, 1), parseSmallInteger(at(parts, 2),10)] }, { error(self,'parseQualifiedMethodName') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Method",
  "parseMethodSignature",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ">>");
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_parts), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _parts;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "parseMethodSignature");
    });
  },
  "{ :self | let parts = splitBy(self,'>>'); if((=(size(parts), 2)), { parts }, { error(self,'parseMethodSignature') }) }",
);
