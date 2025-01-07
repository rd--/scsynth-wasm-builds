sl.addType(
  true,
  "MethodInformation",
  "Method",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "MethodInformation",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "arity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.arity;
  },
  "{ :self |\n\t\t<primitive: return _self.arity;>\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  },
  "{ :self |\n\t\t<primitive: return _self.origin;>\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.packageName;
  },
  "{ :self |\n\t\t<primitive: return _self.packageName;>\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "parameterNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.parameterNames;
  },
  "{ :self |\n\t\t<primitive: return _self.parameterNames;>\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["name", "packageName", "parameterNames", "sourceCode", "origin"];
  },
  "{ :self |\n\t\t['name', 'packageName', 'parameterNames', 'sourceCode', 'origin']\n\t}",
);

sl.addMethod(
  "MethodInformation",
  "Method",
  "sourceCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.sourceCode;
  },
  "{ :self |\n\t\t<primitive: return _self.sourceCode;>\n\t}",
);

sl.addType(
  true,
  "Method",
  "Method",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Method",
);

sl.addMethod(
  "Method",
  "Method",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "arity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _arity_1(_information_1(_self));
  },
  "{ :self |\n\t\tself.information.arity\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "definition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_plusSignPlusSign_2("	", _name_1(_self)), " "),
      _sourceCode_1(_self),
    );
  },
  "{ :self |\n\t\t'\t' ++ self.name ++ ' ' ++ self.sourceCode\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "definition",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      /* console.error(errorMessage); */
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
  "{ :self :aString |\n\t\tsystem.evaluate(\n\t\t\t[\n\t\t\t\t'+',\n\t\t\t\tself.origin.qualifiedName,\n\t\t\t\t'{ ',\n\t\t\t\taString,\n\t\t\t\t' }'\n\t\t\t].join('')\n\t\t)\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "information",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.information;
  },
  "{ :self |\n\t\t<primitive: return _self.information;>\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _name_1(_information_1(_self));
  },
  "{ :self |\n\t\tself.information.name\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "operatorNameOrQualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_arity_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _name = _name_1(_self);
      /* Statements */
      return _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _associationsDo_2(_operatorNameTable_1(_system), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(_equalsSign_2(_value_1(_each), _name), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_key_1(_each));
          });
        });
        return _qualifiedName_1(_self);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _qualifiedName_1(_self);
    });
  },
  "{ :self |\n\t\t(self.arity = 2).if {\n\t\t\tlet name = self.name;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tsystem.operatorNameTable.associationsDo { :each |\n\t\t\t\t\t(each.value = name).ifTrue {\n\t\t\t\t\t\teach.key.return\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tself.qualifiedName\n\t\t\t}\n\t\t} {\n\t\t\tself.qualifiedName\n\t\t}\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _origin_1(_information_1(_self));
  },
  "{ :self |\n\t\tself.information.origin\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _packageName_1(_information_1(_self));
  },
  "{ :self |\n\t\tself.information.packageName\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "block",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.block;
  },
  "{ :self |\n\t\t<primitive: return _self.block;>\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "provenance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([_packageName_1(_self), _name_1(_origin_1(_self))], ":");
  },
  "{ :self |\n\t\t[\n\t\t\tself.packageName,\n\t\t\tself.origin.name\n\t\t].join(':')\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["block", "information"];
  },
  "{ :self |\n\t\t['block', 'information']\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_name_1(_self), ":/"),
      _arity_1(_self),
    );
  },
  "{ :self |\n\t\tself.name ++ ':/' ++ self.arity\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "signature",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_qualifiedName_1(_origin_1(_self)), ">>"),
      _qualifiedName_1(_self),
    );
  },
  "{ :self |\n\t\tself.origin.qualifiedName ++ '>>' ++ self.qualifiedName\n\t}",
);

sl.addMethod(
  "Method",
  "Method",
  "sourceCode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sourceCode_1(_information_1(_self));
  },
  "{ :self |\n\t\tself.information.sourceCode\n\t}",
);

sl.addMethod(
  "String",
  "Method",
  "asMethodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOperator_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _operatorMethodName_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isOperator.if {\n\t\t\tself.operatorMethodName\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Method",
  "operatorMethodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOperator_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _punctuationTokenName_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "operatorMethodName: not operator");
    });
  },
  "{ :self |\n\t\tself.isOperator.if {\n\t\t\tself.punctuationTokenName\n\t\t} {\n\t\t\tself.error('operatorMethodName: not operator')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Method",
  "parseQualifiedMethodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ":/");
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_parts), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [_at_2(_parts, 1), _parseInteger_2(_at_2(_parts, 2), 10)];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "parseQualifiedMethodName");
    });
  },
  "{ :self |\n\t\tlet parts = self.splitBy(':/');\n\t\t(parts.size = 2).if {\n\t\t\t[parts[1], parts[2].parseInteger(10)]\n\t\t} {\n\t\t\tself.error('parseQualifiedMethodName')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Method",
  "parseMethodSignature",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ">>");
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_parts), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _parts;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "parseMethodSignature");
    });
  },
  "{ :self |\n\t\tlet parts = self.splitBy('>>');\n\t\t(parts.size = 2).if {\n\t\t\tparts\n\t\t} {\n\t\t\tself.error('parseMethodSignature')\n\t\t}\n\t}",
);
