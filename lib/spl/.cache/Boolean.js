sl.addType(
  true,
  "Boolean",
  "Boolean",
  ["Object", "Equatable", "Json"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Boolean",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Boolean",
);

sl.copyTraitMethodsToType(
  "Json",
  "Boolean",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ampersand",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self && _aBlock_0();
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self && _aBlock_0();>\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "verticalLine",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self || _aBlock_0();
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self || _aBlock_0();>\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ampersandAmpersand",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _assertIsBoolean_1(_anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself & {\n\t\t\tanObject.assertIsBoolean\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "verticalLineVerticalLine",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _assertIsBoolean_1(_anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself | {\n\t\t\tanObject.assertIsBoolean\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "equalsSignEqualsSignGreaterThanSign",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, []),
    );
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tself.if {\n\t\t\taBlock()\n\t\t} {\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "always",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_0();
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\taBlock()\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "asBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.if { 1 } { 0 }\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "asBoolean",
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
  "Boolean",
  "Boolean",
  "assertIsBoolean",
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
  "Boolean",
  "Boolean",
  "boole",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBit_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asBit\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
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
  "Boolean",
  "Boolean",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself == anObject\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  sl.annotateFunction(function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ? _whenTrue_0() : _whenFalse_0();
  }, ["self", "whenTrue:/0", "whenFalse:/0"]),
  "{ :self :whenTrue:/0 :whenFalse:/0 |\n\t\t<primitive: return _self ? _whenTrue_0() : _whenFalse_0();>\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifFalse",
  ["self", "whenFalse:/0"],
  sl.annotateFunction(function (_self, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _whenFalse_0();
      }, []),
    );
  }, ["self", "whenFalse:/0"]),
  "{ :self :whenFalse:/0 |\n\t\tself.if {\n\t\t\tnil\n\t\t} {\n\t\t\twhenFalse()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifFalseIfTrue",
  ["self", "whenFalse:/0", "whenTrue:/0"],
  sl.annotateFunction(function (_self, _whenFalse_0, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenFalse_0, _whenTrue_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, _whenTrue_0, _whenFalse_0);
  }, ["self", "whenFalse:/0", "whenTrue:/0"]),
  "{ :self :whenFalse:/0 :whenTrue:/0 |\n\t\tself.if(whenTrue:/0, whenFalse:/0)\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifTrue",
  ["self", "whenTrue:/0"],
  sl.annotateFunction(function (_self, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenTrue_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _whenTrue_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "whenTrue:/0"]),
  "{ :self :whenTrue:/0 |\n\t\tself.if {\n\t\t\twhenTrue()\n\t\t} {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "isImmediate",
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
  "Boolean",
  "Boolean",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "not",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ? false : true;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self ? false : true;>\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "notAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_ampersand_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anObject;
      }, []),
    ));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t(self & { anObject }).not\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "notOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_or_2(_self, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.or(anObject).not\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "true";
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "false";
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.if {\n\t\t\t'true'\n\t\t} {\n\t\t\t'false'\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "xor",
  ["self", "aBoolean"],
  sl.annotateFunction(function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _value_1(_aBoolean),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, false);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, true);
      }, []),
    );
  }, ["self", "aBoolean"]),
  "{ :self :aBoolean |\n\t\taBoolean.value.if { self = false } { self = true }\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Boolean",
  "assertIsBoolean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "assertIsBoolean");
  }, ["self"]),
  "{ :self |\n\t\tself.error('assertIsBoolean')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "ampersandAmpersand",
  ["self", "aBoole"],
  sl.annotateFunction(function (_self, _aBoole) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoole";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAnd_2(_assertIsBoole_1(_self), _assertIsBoole_1(_aBoole));
  }, ["self", "aBoole"]),
  "{ :self :aBoole |\n\t\tself.assertIsBoole.bitAnd(aBoole.assertIsBoole)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "verticalLineVerticalLine",
  ["self", "aBoole"],
  sl.annotateFunction(function (_self, _aBoole) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoole";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitOr_2(_assertIsBoole_1(_self), _assertIsBoole_1(_aBoole));
  }, ["self", "aBoole"]),
  "{ :self :aBoole |\n\t\tself.assertIsBoole.bitOr(aBoole.assertIsBoole)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "asBoolean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, 1),
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
            return _error_2(_self, "asBoolean: not 0 or 1");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self = 1).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tself.error('asBoolean: not 0 or 1')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "assertIsBoole",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_self, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_self, 1);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "assertIsBoole: not 0 or 1");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 0 | { self = 1 }).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('assertIsBoole: not 0 or 1')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Boolean",
  "isBooleanString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, "true"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, "false");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself = 'true' | {\n\t\t\tself = 'false'\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Boolean",
  "parseBoolean",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, "true"),
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
        return _if_3(
          _equalsSign_2(_self, "false"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _elseClause_0();
          }, []),
        );
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\t(self = 'true').if {\n\t\t\ttrue\n\t\t} {\n\t\t\t(self = 'false').if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\telseClause()\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Boolean",
  "parseBoolean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseBoolean_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseBoolean");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseBoolean {\n\t\t\tself.error('parseBoolean')\n\t\t}\n\t}",
);
