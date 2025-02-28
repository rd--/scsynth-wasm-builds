/*  Requires: Object  */

sl.addType(
  true,
  "Block",
  "Block",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Block",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "dollarSign",
  ["self:/1", "anObject"],
  function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_1(_anObject);
  },
  "{ :self:/1 :anObject | self(anObject) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "commercialAtAsterisk",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _composeLeft_2(_self_1, _aBlock_1);
  },
  "{ :self:/1 :aBlock:/1 | composeLeft(self:/1,aBlock:/1) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "apply",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
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
  "{ :self :aList | <primitive: if(sl.isArray(_aList) && (_self.length === _aList.length)) {\n\t\t\treturn _self(... _aList);\n\t\t}>\nerror(self,'apply: argument is not a list or not of required size') }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "array",
  ["aBlock", "shape"],
  function (_aBlock, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aBlock, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_size_1(_shape), [
      _hyphenMinusGreaterThanSign_2(function () {
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
        return _table_2(_aBlock, _upOrDownTo_2(1, _at_2(_shape, 1)));
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _table_3(
          _aBlock,
          _upOrDownTo_2(1, _at_2(_shape, 1)),
          _upOrDownTo_2(1, _at_2(_shape, 2)),
        );
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _table_4(
          _aBlock,
          _upOrDownTo_2(1, _at_2(_shape, 1)),
          _upOrDownTo_2(1, _at_2(_shape, 2)),
          _upOrDownTo_2(1, _at_2(_shape, 3)),
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_aBlock, "array: not vector or matrix or volume");
    });
  },
  "{ :aBlock :shape | caseOfOtherwise(size(shape), [->({ 1 }, { table(aBlock,upOrDownTo(1, at(shape, 1))) }), ->({ 2 }, { table(aBlock,upOrDownTo(1, at(shape, 1)), upOrDownTo(1, at(shape, 2))) }), ->({ 3 }, { table(aBlock,upOrDownTo(1, at(shape, 1)), upOrDownTo(1, at(shape, 2)), upOrDownTo(1, at(shape, 3))) })], { error(aBlock,'array: not vector or matrix or volume') }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "arrayFilter",
  ["aBlock:/1", "aList", "anInteger"],
  function (_aBlock_1, _aList, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_1, _aList, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_upOrDownTo_2(1, _size_1(_aList)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(
        _copyFromToPin_3(
          _aList,
          _hyphenMinus_2(_i, _anInteger),
          _plusSign_2(_i, _anInteger),
        ),
      );
    });
  },
  "{ :aBlock:/1 :aList :anInteger | collect(upOrDownTo(1, size(aList)), { :i | aBlock(copyFromToPin(aList,-(i, anInteger), +(i, anInteger))) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asBinaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asBinaryBlock: not binary");
    });
  },
  "{ :self | if((=(numArgs(self), 2)), { self }, { error(self,'asBinaryBlock: not binary') }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asBlock",
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
  "Block",
  "Block",
  "asTernaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asTernaryBlock: not ternary");
    });
  },
  "{ :self | if((=(numArgs(self), 3)), { self }, { error(self,'asTernaryBlock: not ternary') }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asUnaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asUnaryBlock: not unary");
    });
  },
  "{ :self | if((=(numArgs(self), 1)), { self }, { error(self,'asUnaryBlock: not unary') }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "assert",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(_self, _self);
    return null;
  },
  "{ :self | assert(self,self); nil }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "blockMap",
  ["aBlock:/1", "aList", "n", "d"],
  function (_aBlock_1, _aList, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _aBlock_1, _aList, _n, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _index = 1;
    /* Statements */
    _collect_2(
      _thenTo_3(
        1,
        _plusSign_2(1, _d),
        _plusSign_2(_hyphenMinus_2(_size_1(_aList), _n), 1),
      ),
      function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _aBlock_1(
            _copyFromTo_3(_aList, _i, _hyphenMinus_2(_plusSign_2(_i, _n), 1)),
          ),
        );
      },
    );
    return _answer;
  },
  "{ :aBlock:/1 :aList :n :d | let answer = []; let index = 1; collect(thenTo(1, +(1, d), +(-(size(aList), n), 1)), { :i | add(answer,aBlock(copyFromTo(aList,i, -(+(i, n), 1)))) }); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg"],
  function (_self, _firstArg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _firstArg";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_2(_self, _firstArg);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      },
    );
  },
  "{ :self :firstArg | if((>=(numArgs(self), 1)), { value(self,firstArg) }, { value(self) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg", "secondArg"],
  function (_self, _firstArg, _secondArg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _firstArg, _secondArg";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 2),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_3(_self, _firstArg, _secondArg);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_numArgs_1(_self), 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _value_2(_self, _firstArg);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _value_1(_self);
        });
      },
    );
  },
  "{ :self :firstArg :secondArg | if((>=(numArgs(self), 2)), { value(self,firstArg, secondArg) }, { if((=(numArgs(self), 1)), { value(self,firstArg) }, { value(self) }) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "deepCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_1("Block>>deepCopy: not implemented");
  },
  "{ :self | error('Block>>deepCopy: not implemented') }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "doWhileFalse",
  ["self:/0", "conditionBlock:/0"],
  function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileFalse_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 | let answer = nil; whileFalse({ answer := self(); conditionBlock() }); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "doWhileTrue",
  ["self:/0", "conditionBlock:/0"],
  function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :conditionBlock:/0 | let answer = nil; whileTrue({ answer := self(); conditionBlock() }); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ensure",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
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
  "{ :self :aBlock:/0 | <primitive: let returnValue;\n\t\ttry {\n\t\t\treturnValue = _self();\n\t\t} finally {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn returnValue;>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "eulerMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
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
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_x, _x1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _x = _plusSign_2(_x, _h);
      _y = _plusSign_2(_y, _asterisk_2(_h, _self_2(_x, _y)));
      _add_2(_vx, _x);
      return _add_2(_vy, _y);
    });
    return [_vx, _vy];
  },
  "{ :self:/2 :y0 :x0 :x1 :h | let x = x0; let y = y0; let vx = [x0]; let vy = [y0]; whileTrue({ <(x, x1) }, { x := +(x, h); y := +(y, (*(h, self(x, y)))); add(vx,x); add(vy,y) }); [vx, vy] }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ifError",
  ["self", "errorHandlerBlock:/1"],
  function (_self, _errorHandlerBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _errorHandlerBlock_1";
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
  "{ :self :errorHandlerBlock:/1 | <primitive: try {\n\t\t\treturn _self();\n\t\t} catch (caughtValue) {\n\t\t\tif(caughtValue instanceof Error) {\n\t\t\t\treturn _cull_2(_errorHandlerBlock_1, caughtValue)\n\t\t\t} {\n\t\t\t\tthrow caughtValue;\n\t\t\t}\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "inner",
  ["f:/2", "p", "q", "g:/2"],
  function (_f_2, _p, _q, _g_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_2, _p, _q, _g_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h_2 = _e_1(_f_2);
    /* Statements */
    return _if_3(_isVector_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isVector_1(_q), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reduce_2(_h_2(_p, _q), _g_2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isMatrix_1(_q), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_transposed_1(_q), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_h_2(_p, _each), _g_2);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_1("Block>>inner: q not vector or matrix");
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isMatrix_1(_p), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_isVector_1(_q), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_p, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_h_2(_each, _q), _g_2);
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_isMatrix_1(_q), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_p, function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _inner_4(_f_2, _each, _q, _g_2);
            });
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Block>>inner: argument not vector or matrix");
          });
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Block>>inner: p not vector or matrix");
      });
    });
  },
  "{ :f:/2 :p :q :g:/2 | let h:/2 = e(f:/2); if(isVector(p), { if(isVector(q), { reduce(h(p, q),g:/2) }, { if(isMatrix(q), { collect(transposed(q), { :each | reduce(h(p, each),g:/2) }) }, { error('Block>>inner: q not vector or matrix') }) }) }, { if(isMatrix(p), { if(isVector(q), { collect(p, { :each | reduce(h(each, q),g:/2) }) }, { if(isMatrix(q), { collect(p, { :each | inner(f:/2, each, q, g:/2) }) }, { error('Block>>inner: argument not vector or matrix') }) }) }, { error('Block>>inner: p not vector or matrix') }) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "iterate",
  ["self:/1", "anObject", "anInteger"],
  function (_self_1, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anObject = _self_1(_anObject);
    });
    return _anObject;
  },
  "{ :self:/1 :anObject :anInteger | timesRepeat(anInteger, { anObject := self(anObject) }); anObject }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/1", "aCollection"],
  function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aCollection, _self_1);
  },
  "{ :self:/1 :aCollection | collect(aCollection,self:/1) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/2", "aList", "anotherList"],
  function (_self_2, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_aList, _anotherList, _self_2);
  },
  "{ :self:/2 :aList :anotherList | withCollect(aList,anotherList, self:/2) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/3", "aList", "anotherList", "aThirdList"],
  function (_self_3, _aList, _anotherList, _aThirdList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aList, _anotherList, _aThirdList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withWithCollect_4(_aList, _anotherList, _aThirdList, _self_3);
  },
  "{ :self:/3 :aList :anotherList :aThirdList | withWithCollect(aList,anotherList, aThirdList, self:/3) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "memoize",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _Map_0();
    /* Statements */
    return (function (_input) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _input";
        throw new Error(errorMessage);
      } /* Statements */
      return _atIfAbsent_3(_table, _input, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _self_1(_input);
        /* Statements */
        _atPut_3(_table, _input, _answer);
        return _answer;
      });
    });
  },
  "{ :self:/1 | let table = Map(); { :input | atIfAbsent(table, input, { let answer = self(input); atPut(table,input, answer); answer }) } }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "millisecondsToRun",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _millisecondsToRun_2(_system, _self_0);
  },
  "{ :self:/0 | millisecondsToRun(system,self:/0) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "movingMap",
  ["self:/1", "sequence", "windowSize"],
  function (_self_1, _sequence, _windowSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _sequence, _windowSize";
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
  "{ :self:/1 :sequence :windowSize | let answer = []; toDo(1, +(-(size(sequence), windowSize), 1), { :i | add(answer,self(copyFromTo(sequence,i, -(+(i, windowSize), 1)))) }); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "new",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_self, 0);
  },
  "{ :self | cull(self,0) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "new",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_self, _aNumber);
  },
  "{ :self :aNumber | cull(self,aNumber) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "newFrom",
  ["self:/1", "aCollection"],
  function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _self_1(_size_1(_aCollection));
    /* Statements */
    _fillFrom_2(_answer, _aCollection);
    return _answer;
  },
  "{ :self:/1 :aCollection | let answer = self(size(aCollection)); fillFrom(answer,aCollection); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgsIfAbsent",
  ["self", "ifAbsent:/0"],
  function (_self, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasRestParameters ? _ifAbsent() : _self.length;
  },
  "{ :self :ifAbsent:/0 | <primitive: return _self.hasRestParameters ? _ifAbsent() : _self.length;>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgsOrNil",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    });
  },
  "{ :self | numArgsIfAbsent(self, { nil }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "numArgs: applied to arity-dispatch block");
    });
  },
  "{ :self | numArgsIfAbsent(self, { error(self,'numArgs: applied to arity-dispatch block') }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _ofSize_2(_cull_2(_self, _aNumber), _aNumber);
  },
  "{ :self :aNumber | ofSize(cull(self,aNumber),aNumber) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "outer",
  ["self", "aList", "anotherList"],
  function (_self, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_3(_outer_1(_self), _aList, _anotherList);
  },
  "{ :self :aList :anotherList | value((outer(self)),aList, anotherList) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "repeat",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _self_0();
      return true;
    });
  },
  "{ :self:/0 | whileTrue({ self(); true }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "rungeKuttaMethod",
  ["self:/2", "y0", "x0", "x1", "h"],
  function (_self_2, _y0, _x0, _x1, _h) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_2, _y0, _x0, _x1, _h";
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
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_x, _x1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
  "{ :self:/2 :y0 :x0 :x1 :h | let f:/2 = self:/2; let x = x0; let y = y0; let vx = [x0]; let vy = [y0]; whileTrue({ <(x, x1) }, { let k1 = *(h, f(x, y)); let k2 = *(h, f(+(x, (*(0.5, h))), +(y, (*(0.5, k1))))); let k3 = *(h, f(+(x, (*(0.5, h))), +(y, (*(0.5, k2))))); let k4 = *(h, f(+(x, h), +(y, k3))); x := +(x, h); y := +(y, (/((+(+(+(+(+(k1, k2), k2), k3), k3), k4)), 6))); add(vx,x); add(vy,y) }); [vx, vy] }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_aList, _anotherList) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _aList, _anotherList";
        throw new Error(errorMessage);
      } /* Statements */
      return _table_3(_self_2, _aList, _anotherList);
    });
  },
  "{ :self:/2 | { :aList :anotherList | table(self:/2,aList, anotherList) } }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/1", "aList"],
  function (_self_1, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aList, _self_1);
  },
  "{ :self:/1 :aList | collect(aList,self:/1) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/2", "aList", "anotherList"],
  function (_self_2, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aList, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_anotherList, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_2(_i, _j);
      });
    });
  },
  "{ :self:/2 :aList :anotherList | collect(aList, { :i | collect(anotherList, { :j | self(i, j) }) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/3", "aList", "aSecondList", "aThirdList"],
  function (_self_3, _aList, _aSecondList, _aThirdList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aList, _aSecondList, _aThirdList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aList, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_aSecondList, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_aThirdList, function (_k) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _k";
            throw new Error(errorMessage);
          } /* Statements */
          return _self_3(_i, _j, _k);
        });
      });
    });
  },
  "{ :self:/3 :aList :aSecondList :aThirdList | collect(aList, { :i | collect(aSecondList, { :j | collect(aThirdList, { :k | self(i, j, k) }) }) }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "unqualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name.split(":")[0];
  },
  "{ :self | <primitive: return _self.name.split(':')[0];>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_0();
  },
  "{ :self:/0 | self() }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/1", "p1"],
  function (_self_1, _p1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _p1";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_1(_p1);
  },
  "{ :self:/1 :p1 | self(p1) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/2", "p1", "p2"],
  function (_self_2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _p1, _p2";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_2(_p1, _p2);
  },
  "{ :self:/2 :p1 :p2 | self(p1, p2) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/3", "p1", "p2", "p3"],
  function (_self_3, _p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self_3, _p1, _p2, _p3";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_3(_p1, _p2, _p3);
  },
  "{ :self:/3 :p1 :p2 :p3 | self(p1, p2, p3) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/4", "p1", "p2", "p3", "p4"],
  function (_self_4, _p1, _p2, _p3, _p4) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_4, _p1, _p2, _p3, _p4";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_4(_p1, _p2, _p3, _p4);
  },
  "{ :self:/4 :p1 :p2 :p3 :p4 | self(p1, p2, p3, p4) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/5", "p1", "p2", "p3", "p4", "p5"],
  function (_self_5, _p1, _p2, _p3, _p4, _p5) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self_5, _p1, _p2, _p3, _p4, _p5";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_5(_p1, _p2, _p3, _p4, _p5);
  },
  "{ :self:/5 :p1 :p2 :p3 :p4 :p5 | self(p1, p2, p3, p4, p5) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "valueWithArguments",
  ["self", "argumentsList"],
  function (_self, _argumentsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _argumentsList";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.apply(null, _argumentsList);
  },
  "{ :self :argumentsList | <primitive: _self.apply(null, _argumentsList)>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "valueWithReturn",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
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
  "{ :self:/1 | <primitive: const returnBlock = function(returnValue) {\n\t\t\tthrow returnValue;\n\t\t};\n\t\ttry {\n\t\t\treturn _self_1(returnBlock);\n\t\t} catch (returnedValue) {\n\t\t\tif(returnedValue instanceof Error) {\n\t\t\t\tthrow returnedValue;\n\t\t\t} {\n\t\t\t\treturn returnedValue;\n\t\t\t}\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      }
    });
  },
  "{ :self:/0 | whileFalse({ self() }, {  }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    while (!_self_0()) {
      _aBlock_0();
    }
    return null;
  },
  "{ :self:/0 :aBlock:/0 | <primitive: while(!_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileNil",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isNil_1(_answer = _self_0());
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
    return _answer;
  },
  "{ :self:/0 :aBlock:/0 | let answer = nil; whileTrue({ isNil((answer := self())) }, { aBlock() }); answer }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0"],
  function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      }
    });
  },
  "{ :self:/0 | whileTrue({ self() }, {  }) }",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0", "aBlock:/0"],
  function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    while (_self_0()) {
      _aBlock_0();
    }
    return null;
  },
  "{ :self:/0 :aBlock:/0 | <primitive: while(_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Block",
  "also",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _aBlock_1(_self);
    return _self;
  },
  "{ :self :aBlock:/1 | aBlock(self); self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Block",
  "with",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 | aBlock(self) }",
);
