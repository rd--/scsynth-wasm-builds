sl.addType(
  true,
  "Boolean",
  "Boolean",
  ["Object", "Json"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Boolean",
);

sl.copyTraitToType(
  "Json",
  "Boolean",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "ampersand",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self && _aBlock_0();
  },
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self && _aBlock_0();>\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "verticalLine",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self || _aBlock_0();
  },
  "{ :self :aBlock:/0 |\n\t\t<primitive: return _self || _aBlock_0();>\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "ampersandAmpersand",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _assertIsBoolean_1(_anObject);
    });
  },
  "{ :self :anObject |\n\t\tself & {\n\t\t\tanObject.assertIsBoolean\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "verticalLineVerticalLine",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _assertIsBoolean_1(_anObject);
    });
  },
  "{ :self :anObject |\n\t\tself | {\n\t\t\tanObject.assertIsBoolean\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "equalsSignEqualsSignGreaterThanSign",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    });
  },
  "{ :self :aBlock:/0 |\n\t\tself.if {\n\t\t\taBlock()\n\t\t} {\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "always",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_0();
  },
  "{ :self :aBlock:/0 |\n\t\taBlock()\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "asBit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.if { 1 } { 0 }\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "asBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBit_1(_self);
  },
  "{ :self |\n\t\tself.asBit\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "asNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBit_1(_self);
  },
  "{ :self |\n\t\tself.asBit\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "assertIsBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "boole",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asBit_1(_self);
  },
  "{ :self |\n\t\tself.asBit\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "if",
  ["self", "whenTrue:/0", "whenFalse:/0"],
  function (_self, _whenTrue_0, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenTrue_0, _whenFalse_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self ? _whenTrue_0() : _whenFalse_0();
  },
  "{ :self :whenTrue:/0 :whenFalse:/0 |\n\t\t<primitive: return _self ? _whenTrue_0() : _whenFalse_0();>\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "ifFalse",
  ["self", "whenFalse:/0"],
  function (_self, _whenFalse_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenFalse_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _whenFalse_0();
    });
  },
  "{ :self :whenFalse:/0 |\n\t\tself.if {\n\t\t\tnil\n\t\t} {\n\t\t\twhenFalse()\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "ifFalseIfTrue",
  ["self", "whenFalse:/0", "whenTrue:/0"],
  function (_self, _whenFalse_0, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _whenFalse_0, _whenTrue_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, _whenTrue_0, _whenFalse_0);
  },
  "{ :self :whenFalse:/0 :whenTrue:/0 |\n\t\tself.if(whenTrue:/0, whenFalse:/0)\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "ifTrue",
  ["self", "whenTrue:/0"],
  function (_self, _whenTrue_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _whenTrue_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _whenTrue_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    });
  },
  "{ :self :whenTrue:/0 |\n\t\tself.if {\n\t\t\twhenTrue()\n\t\t} {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "not",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self ? false : true;
  },
  "{ :self |\n\t\t<primitive: return _self ? false : true;>\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "notAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_ampersand_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anObject;
    }));
  },
  "{ :self :anObject |\n\t\t(self & { anObject }).not\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "notOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_or_2(_self, _anObject));
  },
  "{ :self :anObject |\n\t\tself.or(anObject).not\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "true";
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return "false";
    });
  },
  "{ :self |\n\t\tself.if {\n\t\t\t'true'\n\t\t} {\n\t\t\t'false'\n\t\t}\n\t}",
);

sl.addMethod(
  "Boolean",
  "Boolean",
  "xor",
  ["self", "aBoolean"],
  function (_self, _aBoolean) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBoolean";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_value_1(_aBoolean), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_self, false);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_self, true);
    });
  },
  "{ :self :aBoolean |\n\t\taBoolean.value.if { self = false } { self = true }\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Boolean",
  "assertIsBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "assertIsBoolean");
  },
  "{ :self |\n\t\tself.error('assertIsBoolean')\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Boolean",
  "asBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_self, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return true;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Integer>>asBoolean: not 0 or 1");
      });
    });
  },
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tfalse\n\t\t} {\n\t\t\t(self = 1).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\t'@Integer>>asBoolean: not 0 or 1'.error\n\t\t\t}\n\t\t}\n\t}",
);
