/*  Requires: Object  */

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
  "Block",
  "Block",
  "dollarSign",
  ["self:/1", "anObject"],
  function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self_1(_anObject);
  },
  "{ :self:/1 :anObject |\n\t\tself(anObject)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "commercialAtAsterisk",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _composeLeft_2(_self_1, _aBlock_1);
  },
  "{ :self:/1 :aBlock:/1 |\n\t\tself:/1.composeLeft(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "apply",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isArray(_aList) && (_self.length === _aList.length)) {
      return _self(..._aList);
    }
    /* Statements */
    return _error_2(
      _self,
      "apply: argument is not a list or not of required size",
    );
  },
  "{ :self :aList |\n\t\t<primitive:\n\t\tif(sl.isArray(_aList) && (_self.length === _aList.length)) {\n\t\t\treturn _self(... _aList);\n\t\t}\n\t\t>\n\t\tself.error('apply: argument is not a list or not of required size')\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "asBinaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asBinaryBlock: not binary");
    });
  },
  "{ :self |\n\t\t(self.numArgs = 2).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asBinaryBlock: not binary')\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "asBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "asTernaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asTernaryBlock: not ternary");
    });
  },
  "{ :self |\n\t\t(self.numArgs = 3).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asTernaryBlock: not ternary')\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "asUnaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asUnaryBlock: not unary");
    });
  },
  "{ :self |\n\t\t(self.numArgs = 1).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asUnaryBlock: not unary')\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(_self, _self);
    return null;
  },
  "{ :self |\n\t\tself.assert(self);\n\t\tnil\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _value_2(_self, _firstArg);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      },
    );
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 2),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _value_3(_self, _firstArg, _secondArg);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_numArgs_1(_self), 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _value_2(_self, _firstArg);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _value_1(_self);
        });
      },
    );
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileFalse_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileFalse;\n\t\tanswer\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
  "eulerMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _x0;
    let _y = _y0;
    let _vx = [_x0];
    let _vy = [_y0];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_x, _x1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _x = _plusSign_2(_x, _h);
      _y = _plusSign_2(_y, _asterisk_2(_h, _self_2(_x, _y)));
      _add_2(_vx, _x);
      return _add_2(_vy, _y);
    });
    return [_vx, _vy];
  },
  "{ :self:/2 :y0 :x0 :x1 :h |\n\t\tlet x = x0;\n\t\tlet y = y0;\n\t\tlet vx = [x0];\n\t\tlet vy = [y0];\n\t\t{\n\t\t\tx < x1\n\t\t}.whileTrue {\n\t\t\tx := x + h;\n\t\t\ty := y + (h * self(x, y));\n\t\t\tvx.add(x);\n\t\t\tvy.add(y)\n\t\t};\n\t\t[vx, vy]\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "ifError",
  ["self", "errorHandlerBlock:/1"],
  function (_self, _errorHandlerBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _errorHandlerBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    try {
      return _self();
    } catch (caughtValue) {
      if (caughtValue instanceof Error) {
        return _cull_2(_errorHandlerBlock_1, caughtValue);
      }
      {
        throw caughtValue;
      }
    }
  },
  "{ :self :errorHandlerBlock:/1 |\n\t\t<primitive:\n\t\ttry {\n\t\t\treturn _self();\n\t\t} catch (caughtValue) {\n\t\t\tif(caughtValue instanceof Error) {\n\t\t\t\treturn _cull_2(_errorHandlerBlock_1, caughtValue)\n\t\t\t} {\n\t\t\t\tthrow caughtValue;\n\t\t\t}\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "inner",
  ["f:/2", "p", "q", "g:/2"],
  function (_f_2, _p, _q, _g_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_2, _p, _q, _g_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h_2 = _e_1(_f_2);
    /* Statements */
    return _if_3(_isVector_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isVector_1(_q), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _reduce_2(_h_2(_p, _q), _g_2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrix_1(_q), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_transposed_1(_q), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_h_2(_p, _each), _g_2);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_1("Block>>inner: q not vector or matrix");
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_p), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isVector_1(_q), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_p, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_h_2(_each, _q), _g_2);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_isMatrix_1(_q), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_p, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _inner_4(_f_2, _each, _q, _g_2);
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Block>>inner: argument not vector or matrix");
          });
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Block>>inner: p not vector or matrix");
      });
    });
  },
  "{ :f:/2 :p :q :g:/2 |\n\t\tlet h:/2 = f:/2.e;\n\t\tp.isVector.if {\n\t\t\tq.isVector.if {\n\t\t\t\th(p, q).reduce(g:/2)\n\t\t\t} {\n\t\t\t\tq.isMatrix.if {\n\t\t\t\t\tq.transposed.collect { :each |\n\t\t\t\t\t\th(p, each).reduce(g:/2)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t'Block>>inner: q not vector or matrix'.error\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tp.isMatrix.if {\n\t\t\t\tq.isVector.if {\n\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\th(each, q).reduce(g:/2)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tq.isMatrix.if {\n\t\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\t\tinner(f:/2, each, q, g:/2)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t'Block>>inner: argument not vector or matrix'.error\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t'Block>>inner: p not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "iterate",
  ["self:/1", "anObject", "anInteger"],
  function (_self_1, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _anObject = _self_1(_anObject);
    });
    return _anObject;
  },
  "{ :self:/1 :anObject :anInteger |\n\t\tanInteger.timesRepeat {\n\t\t\tanObject := self(anObject)\n\t\t};\n\t\tanObject\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aCollection, _self_1);
  },
  "{ :self:/1 :aCollection |\n\t\taCollection.collect(self:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "map",
  ["self:/2", "aSequence", "anotherSequence"],
  function (_self_2, _aSequence, _anotherSequence) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _aSequence, _anotherSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_aSequence, _anotherSequence, _self_2);
  },
  "{ :self:/2 :aSequence :anotherSequence |\n\t\taSequence.withCollect(anotherSequence, self:/2)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "map",
  ["self:/3", "aSequence", "anotherSequence", "aThirdSequence"],
  function (_self_3, _aSequence, _anotherSequence, _aThirdSequence) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aSequence, _anotherSequence, _aThirdSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withWithCollect_4(
      _aSequence,
      _anotherSequence,
      _aThirdSequence,
      _self_3,
    );
  },
  "{ :self:/3 :aSequence :anotherSequence :aThirdSequence |\n\t\taSequence.withWithCollect(anotherSequence, aThirdSequence, self:/3)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "memoize",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _Map_0();
    /* Statements */
    return (function (_input) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _input";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atIfAbsent_3(_table, _input, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _self_1(_input);
        /* Statements */
        _atPut_3(_table, _input, _answer);
        return _answer;
      });
    });
  },
  "{ :self:/1 |\n\t\tlet table = Map();\n\t\t{ :input |\n\t\t\ttable.atIfAbsent(input) {\n\t\t\t\tlet answer = self(input);\n\t\t\t\ttable.atPut(input, answer);\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _millisecondsToRun_2(_system, _self_0);
  },
  "{ :self:/0 |\n\t\tsystem.millisecondsToRun(self:/0)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "movingMap",
  ["self:/1", "sequence", "windowSize"],
  function (_self_1, _sequence, _windowSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _sequence, _windowSize";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _plusSign_2(_hyphenMinus_2(_size_1(_sequence), _windowSize), 1),
      function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _self_1(
            _copyFromTo_3(
              _sequence,
              _i,
              _hyphenMinus_2(_plusSign_2(_i, _windowSize), 1),
            ),
          ),
        );
      },
    );
    return _answer;
  },
  "{ :self:/1 :sequence :windowSize |\n\t\tlet answer = [];\n\t\t1.toDo(sequence.size - windowSize + 1) { :i |\n\t\t\tanswer.add(\n\t\t\t\tself(sequence.copyFromTo(i, i + windowSize - 1))\n\t\t\t)\n\t\t};\n\t\tanswer\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasRestParameters ? _ifAbsent() : _self.length;
  },
  "{ :self :ifAbsent:/0 |\n\t\t/*\n\t\tJs does not have a proper numArgs mechanism.\n\t\tIn the simple arity model Spl adds hasRestParameters to the arity dispatch method functions, else it is undefined.\n\t\tFrom within Spl there is no concept of a variadic block.\n\t\t*/\n\t\t<primitive: return _self.hasRestParameters ? _ifAbsent() : _self.length;>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ofSize_2(_cull_2(_self, _aNumber), _aNumber);
  },
  "{ :self :aNumber |\n\t\tself.cull(aNumber).ofSize(aNumber)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "outer",
  ["self", "aSequence", "anotherSequence"],
  function (_self, _aSequence, _anotherSequence) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aSequence, _anotherSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _value_3(_outer_1(_self), _aSequence, _anotherSequence);
  },
  "{ :self :aSequence :anotherSequence |\n\t\t(self.outer).value(aSequence, anotherSequence)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _self_0();
      return true;
    });
  },
  "{ :self:/0 |\n\t\t{\n\t\t\tself();\n\t\t\ttrue\n\t\t}.whileTrue\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "rungeKuttaMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _self_2;
    let _x = _x0;
    let _y = _y0;
    let _vx = [_x0];
    let _vy = [_y0];
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_x, _x1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k1 = _asterisk_2(_h, _f_2(_x, _y));
      let _k2 = _asterisk_2(
        _h,
        _f_2(
          _plusSign_2(_x, _asterisk_2(0.5, _h)),
          _plusSign_2(_y, _asterisk_2(0.5, _k1)),
        ),
      );
      let _k3 = _asterisk_2(
        _h,
        _f_2(
          _plusSign_2(_x, _asterisk_2(0.5, _h)),
          _plusSign_2(_y, _asterisk_2(0.5, _k2)),
        ),
      );
      let _k4 = _asterisk_2(
        _h,
        _f_2(_plusSign_2(_x, _h), _plusSign_2(_y, _k3)),
      );
      /* Statements */
      _x = _plusSign_2(_x, _h);
      _y = _plusSign_2(
        _y,
        _solidus_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(_plusSign_2(_plusSign_2(_k1, _k2), _k2), _k3),
              _k3,
            ),
            _k4,
          ),
          6,
        ),
      );
      _add_2(_vx, _x);
      return _add_2(_vy, _y);
    });
    return [_vx, _vy];
  },
  "{ :self:/2 :y0 :x0 :x1 :h |\n\t\tlet f:/2 = self:/2;\n\t\tlet x = x0;\n\t\tlet y = y0;\n\t\tlet vx = [x0];\n\t\tlet vy = [y0];\n\t\t{\n\t\t\tx < x1\n\t\t}.whileTrue {\n\t\t\tlet k1 = h * f(x, y);\n\t\t\tlet k2 = h * f(x + (0.5 * h), y + (0.5 * k1));\n\t\t\tlet k3 = h * f(x + (0.5 * h), y + (0.5 * k2));\n\t\t\tlet k4 = h * f(x + h, y + k3);\n\t\t\tx := x + h;\n\t\t\ty := y + ((k1 + k2 + k2 + k3 + k3 + k4) / 6);\n\t\t\tvx.add(x);\n\t\t\tvy.add(y)\n\t\t};\n\t\t[vx, vy]\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "table",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_aSequence, _anotherSequence) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _aSequence, _anotherSequence";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _table_3(_self_2, _aSequence, _anotherSequence);
    });
  },
  "{ :self:/2 |\n\t\t{ :aSequence :anotherSequence |\n\t\t\tself:/2.table(aSequence, anotherSequence)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "table",
  ["self:/1", "aSequence"],
  function (_self_1, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aSequence, _self_1);
  },
  "{ :self:/1 :aSequence |\n\t\taSequence.collect(self:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "table",
  ["self:/2", "aSequence", "anotherSequence"],
  function (_self_2, _aSequence, _anotherSequence) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self_2, _aSequence, _anotherSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aSequence, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_anotherSequence, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _self_2(_i, _j);
      });
    });
  },
  "{ :self:/2 :aSequence :anotherSequence |\n\t\taSequence.collect { :i |\n\t\t\tanotherSequence.collect { :j |\n\t\t\t\tself(i, j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "table",
  ["self:/3", "aSequence", "aSecondSequence", "aThirdSequence"],
  function (_self_3, _aSequence, _aSecondSequence, _aThirdSequence) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aSequence, _aSecondSequence, _aThirdSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aSequence, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_aSecondSequence, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_aThirdSequence, function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _self_3(_i, _j, _k);
        });
      });
    });
  },
  "{ :self:/3 :aSequence :aSecondSequence :aThirdSequence |\n\t\taSequence.collect { :i |\n\t\t\taSecondSequence.collect { :j |\n\t\t\t\taThirdSequence.collect { :k |\n\t\t\t\t\tself(i, j, k)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "unqualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name.split(":")[0];
  },
  "{ :self |\n\t\t<primitive: return _self.name.split(':')[0];>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self_5(_p1, _p2, _p3, _p4, _p5);
  },
  "{ :self:/5 :p1 :p2 :p3 :p4 :p5 |\n\t\tself(p1, p2, p3, p4, p5)\n\t}",
);

sl.addMethod(
  "Block",
  "Block",
  "valueWithArguments",
  ["self", "argumentsList"],
  function (_self, _argumentsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _argumentsList";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.apply(null, _argumentsList);
  },
  "{ :self :argumentsList |\n\t\t<primitive: _self.apply(null, _argumentsList)>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
  "whileNil",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isNil_1(_answer = _self_0());
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :aBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\t(answer := self()).isNil\n\t\t}.whileTrue {\n\t\t\taBlock()\n\t\t};\n\t\tanswer\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\taBlock(self)\n\t}",
);
