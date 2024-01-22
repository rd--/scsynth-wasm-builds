/* {- Requires: Object -} */

sl.addType(
  true,
  "Block",
  "Block",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Block",
);

sl.addMethod(
  "Block",
  "Block",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsEquals_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "apply",
  ["self", "anArray"],
  function (_self, _anArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (sl.isArray(_anArray) && (_self.length === _anArray.length)) {
      return _self(..._anArray);
    }
    /* Statements */
    return _error_2(
      _self,
      "apply: argument is not array or not of required size",
    );
  },
  "{ :self :anArray |\n\t\t<primitive:\n\t\tif(sl.isArray(_anArray) && (_self.length === _anArray.length)) {\n\t\t\treturn _self(... _anArray);\n\t\t}\n\t\t>\n\t\tself.error('apply: argument is not array or not of required size')\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "assert",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assert_2(_self, _self);
    return null;
  },
  "{ :self |\n\t\tself.assert(self);\n\t\tnil\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "compose",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_anObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anObject";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_1(_aBlock_1(_anObject));
    });
  },
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :anObject |\n\t\t\tself(aBlock(anObject))\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg"],
  function (_self, _firstArg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _firstArg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanEquals_2(_numArgs_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _value_2(_self, _firstArg);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self :firstArg |\n\t\t(self.numArgs >= 1).if {\n\t\t\tself.value(firstArg)\n\t\t} {\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg", "secondArg"],
  function (_self, _firstArg, _secondArg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _firstArg, _secondArg";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanEquals_2(_numArgs_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _value_3(_self, _firstArg, _secondArg);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_numArgs_1(_self), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value_2(_self, _firstArg);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _value_1(_self);
      });
    });
  },
  "{ :self :firstArg :secondArg |\n\t\t(self.numArgs >= 2).if {\n\t\t\tself.value(firstArg, secondArg)\n\t\t} {\n\t\t\t(self.numArgs = 1).if {\n\t\t\t\tself.value(firstArg)\n\t\t\t} {\n\t\t\t\tself.value\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "deepCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_1("Block>>deepCopy: not implemented");
  },
  "{ :self |\n\t\t'Block>>deepCopy: not implemented'.error\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "doWhileFalse",
  ["self:/0", "conditionBlock:/0"],
  function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer;
    /* Statements */
    _whileFalse_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 |\n\t\t| answer |\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileFalse;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "doWhileTrue",
  ["self:/0", "conditionBlock:/0"],
  function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer;
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 |\n\t\t| answer |\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "ensure",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    let returnValue;
    try {
      returnValue = _self();
    } finally {
      _aBlock_0();
    }
    return returnValue;
  },
  "{ :self :aBlock:/0 |\n\t\t<primitive:\n\t\tlet returnValue;\n\t\ttry {\n\t\t\treturnValue = _self();\n\t\t} finally {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn returnValue;\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "ifError",
  ["self", "errorHandlerBlock"],
  function (_self, _errorHandlerBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _errorHandlerBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    try {
      return _self();
    } catch (caughtValue) {
      if (caughtValue instanceof Error) {
        return _cull_2(_errorHandlerBlock, caughtValue);
      }
      {
        throw caughtValue;
      }
    }
  },
  "{ :self :errorHandlerBlock |\n\t\t<primitive:\n\t\ttry {\n\t\t\treturn _self();\n\t\t} catch (caughtValue) {\n\t\t\tif(caughtValue instanceof Error) {\n\t\t\t\treturn _cull_2(_errorHandlerBlock, caughtValue)\n\t\t\t} {\n\t\t\t\tthrow caughtValue;\n\t\t\t}\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "map",
  ["self:/1", "aCollection"],
  function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, _self_1);
  },
  "{ :self:/1 :aCollection |\n\t\taCollection.collect(self:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "methodName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name.split(":")[0];
  },
  "{ :self |\n\t\t<primitive: return _self.name.split(':')[0];>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "millisecondsToRun",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _millisecondsToRun_2(_system, _self_0);
  },
  "{ :self:/0 |\n\t\tsystem.millisecondsToRun(self:/0)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "new",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cull_2(_self, 0);
  },
  "{ :self |\n\t\tself.cull(0)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "new",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cull_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.cull(aNumber)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "newFrom",
  ["self:/1", "aCollection"],
  function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _self_1(_size_1(_aCollection));
    /* Statements */
    _fillFrom_2(_answer, _aCollection);
    return _answer;
  },
  "{ :self:/1 :aCollection |\n\t\tlet answer = self(aCollection.size);\n\t\tanswer.fillFrom(aCollection);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "numArgsIfAbsent",
  ["self", "ifAbsent:/0"],
  function (_self, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ifAbsent_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.hasRestParameters ? _ifAbsent() : _self.length;
  },
  "{ :self :ifAbsent:/0 |\n\t\t{-\n\t\t\tJs doesn't have a proper numArgs mechanism.\n\t\t\tIn the simple arity model Spl adds hasRestParameters to the arity dispatch method functions, else it is undefined.\n\t\t\tFrom within Spl there is no concept of a variadic block.\n\t\t-}\n\t\t<primitive: return _self.hasRestParameters ? _ifAbsent() : _self.length;>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "numArgsOrNil",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return null;
    });
  },
  "{ :self |\n\t\tself.numArgsIfAbsent {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "numArgs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "numArgs: applied to arity-dispatch block");
    });
  },
  "{ :self |\n\t\tself.numArgsIfAbsent {\n\t\t\tself.error('numArgs: applied to arity-dispatch block')\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ofSize_2(_cull_2(_self, _aNumber), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.cull(aNumber).ofSize(aNumber)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "parameterNames",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.parameterNames;
  },
  "{ :self |\n\t\t<primitive: return _self.parameterNames;>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "repeat",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _self_0();
      return true;
    });
  },
  "{ :self:/0 |\n\t\t{\n\t\t\tself();\n\t\t\ttrue\n\t\t}.whileTrue\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_0();
  },
  "{ :self:/0 |\n\t\tself()\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/1", "p1"],
  function (_self_1, _p1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _p1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_1(_p1);
  },
  "{ :self:/1 :p1 |\n\t\tself(p1)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/2", "p1", "p2"],
  function (_self_2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _p1, _p2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_2(_p1, _p2);
  },
  "{ :self:/2 :p1 :p2 |\n\t\tself(p1, p2)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/3", "p1", "p2", "p3"],
  function (_self_3, _p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self_3, _p1, _p2, _p3";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_3(_p1, _p2, _p3);
  },
  "{ :self:/3 :p1 :p2 :p3 |\n\t\tself(p1, p2, p3)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/4", "p1", "p2", "p3", "p4"],
  function (_self_4, _p1, _p2, _p3, _p4) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_4, _p1, _p2, _p3, _p4";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_4(_p1, _p2, _p3, _p4);
  },
  "{ :self:/4 :p1 :p2 :p3 :p4 |\n\t\tself(p1, p2, p3, p4)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "value",
  ["self:/5", "p1", "p2", "p3", "p4", "p5"],
  function (_self_5, _p1, _p2, _p3, _p4, _p5) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self_5, _p1, _p2, _p3, _p4, _p5";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self_5(_p1, _p2, _p3, _p4, _p5);
  },
  "{ :self:/5 :p1 :p2 :p3 :p4 :p5 |\n\t\tself(p1, p2, p3, p4, p5)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "valueWithArguments",
  ["self", "argumentsArray"],
  function (_self, _argumentsArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _argumentsArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.apply(null, _argumentsArray);
  },
  "{ :self :argumentsArray |\n\t\t<primitive: _self.apply(null, _argumentsArray)>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "valueWithReturn",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const returnBlock = function (returnValue) {
      throw returnValue;
    };
    try {
      return _self_1(returnBlock);
    } catch (returnedValue) {
      if (returnedValue instanceof Error) {
        throw returnedValue;
      }
      {
        return returnedValue;
      }
    }
  },
  "{ :self:/1 |\n\t\t<primitive:\n\t\tconst returnBlock = function(returnValue) {\n\t\t\tthrow returnValue;\n\t\t};\n\t\ttry {\n\t\t\treturn _self_1(returnBlock);\n\t\t} catch (returnedValue) {\n\t\t\tif(returnedValue instanceof Error) {\n\t\t\t\tthrow returnedValue;\n\t\t\t} {\n\t\t\t\treturn returnedValue;\n\t\t\t}\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :self:/0 |\n\t\t{\n\t\t\tself()\n\t\t}.whileFalse {\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    while (!_self_0()) {
      _aBlock_0();
    }
    return null;
  },
  "{ :self:/0 :aBlock:/0 |\n\t\t<primitive:\n\t\twhile(!_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :self:/0 |\n\t\t{\n\t\t\tself()\n\t\t}.whileTrue {\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    while (_self_0()) {
      _aBlock_0();
    }
    return null;
  },
  "{ :self:/0 :aBlock:/0 |\n\t\t<primitive:\n\t\twhile(_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;\n\t\t>\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Block",
  "also",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _aBlock_1(_self);
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\taBlock(self);\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Block",
  "with",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\taBlock(self)\n\t}",
);
