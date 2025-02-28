sl.addType(
  true,
  "Boolean",
  "Boolean",
  ["Object", "Json"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Boolean",
);

sl.copyTraitMethodsToType(
  "Json",
  "Boolean",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject | <primitive: return _self === _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ampersand",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self && _aBlock_0();
  },
  "{ :self :aBlock:/0 | <primitive: return _self && _aBlock_0();>\n }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "verticalLine",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self || _aBlock_0();
  },
  "{ :self :aBlock:/0 | <primitive: return _self || _aBlock_0();>\n }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ampersandAmpersand",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _assertIsBoolean_1(_anObject);
    });
  },
  "{ :self :anObject | &(self, { assertIsBoolean(anObject) }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "verticalLineVerticalLine",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _assertIsBoolean_1(_anObject);
    });
  },
  "{ :self :anObject | |(self, { assertIsBoolean(anObject) }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "equalsSignEqualsSignGreaterThanSign",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    });
  },
  "{ :self :aBlock:/0 | if(self, { aBlock() }, { true }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "always",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_0();
  },
  "{ :self :aBlock:/0 | aBlock() }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "asBit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self | if(self, { 1 }, { 0 }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "asBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "assertIsBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "boole",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asBit_1(_self);
  },
  "{ :self | asBit(self) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "concisePrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  },
  "{ :self | printString(self) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ? _whenTrue_0() : _whenFalse_0();
  },
  "{ :self :whenTrue:/0 :whenFalse:/0 | <primitive: return _self ? _whenTrue_0() : _whenFalse_0();>\n }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifFalse",
  ["self", "whenFalse:/0"],
  function (_self, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenFalse_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _whenFalse_0();
    });
  },
  "{ :self :whenFalse:/0 | if(self, { nil }, { whenFalse() }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifFalseIfTrue",
  ["self", "whenFalse:/0", "whenTrue:/0"],
  function (_self, _whenFalse_0, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenFalse_0, _whenTrue_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, _whenTrue_0, _whenFalse_0);
  },
  "{ :self :whenFalse:/0 :whenTrue:/0 | if(self,whenTrue:/0, whenFalse:/0) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "ifTrue",
  ["self", "whenTrue:/0"],
  function (_self, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenTrue_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _whenTrue_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    });
  },
  "{ :self :whenTrue:/0 | if(self, { whenTrue() }, { nil }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self ? false : true;
  },
  "{ :self | <primitive: return _self ? false : true;>\n }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "notAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_ampersand_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anObject;
    }));
  },
  "{ :self :anObject | not((&(self, { anObject }))) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "notOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_or_2(_self, _anObject));
  },
  "{ :self :anObject | not(or(self,anObject)) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "true";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "false";
    });
  },
  "{ :self | if(self, { 'true' }, { 'false' }) }",
);

sl.addMethodToExistingType(
  "Boolean",
  "Boolean",
  "xor",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_value_1(_aBoolean), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_self, false);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_self, true);
    });
  },
  "{ :self :aBoolean | if(value(aBoolean), { =(self, false) }, { =(self, true) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Boolean",
  "assertIsBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "assertIsBoolean");
  },
  "{ :self | error(self,'assertIsBoolean') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "ampersandAmpersand",
  ["self", "aBoole"],
  function (_self, _aBoole) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoole";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAnd_2(_assertIsBoole_1(_self), _assertIsBoole_1(_aBoole));
  },
  "{ :self :aBoole | bitAnd(assertIsBoole(self),assertIsBoole(aBoole)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "verticalLineVerticalLine",
  ["self", "aBoole"],
  function (_self, _aBoole) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoole";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitOr_2(_assertIsBoole_1(_self), _assertIsBoole_1(_aBoole));
  },
  "{ :self :aBoole | bitOr(assertIsBoole(self),assertIsBoole(aBoole)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "asBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_self, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asBoolean: not 0 or 1");
      });
    });
  },
  "{ :self | if((=(self, 0)), { false }, { if((=(self, 1)), { true }, { error(self,'asBoolean: not 0 or 1') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Boolean",
  "assertIsBoole",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(_equalsSign_2(_self, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, 1);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "assertIsBoole: not 0 or 1");
      },
    );
  },
  "{ :self | if((|(=(self, 0), { =(self, 1) })), { self }, { error(self,'assertIsBoole: not 0 or 1') }) }",
);
