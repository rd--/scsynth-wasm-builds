/*  Requires: Object  */

sl.addType(
  true,
  "Block",
  "Block",
  ["Object", "Equatable"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Block",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Block",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself == anObject\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "dollarSign",
  ["self:/1", "anObject"],
  sl.annotateFunction(function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_1(_anObject);
  }, ["self:/1", "anObject"]),
  "{ :self:/1 :anObject |\n\t\tself(anObject)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "commercialAtAsterisk",
  ["self:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _composeLeft_2(_self_1, _aBlock_1);
  }, ["self:/1", "aBlock:/1"]),
  "{ :self:/1 :aBlock:/1 |\n\t\tself:/1.composeLeft(aBlock:/1)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "apply",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
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
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\t<primitive:\n\t\tif(sl.isArray(_aList) && (_self.length === _aList.length)) {\n\t\t\treturn _self(... _aList);\n\t\t}\n\t\t>\n\t\tself.error('apply: argument is not a list or not of required size')\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "argumentCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgs_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.numArgs\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "argumentNames",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.argumentNames;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.argumentNames;>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "array",
  ["aBlock", "shape"],
  sl.annotateFunction(function (_aBlock, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aBlock, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _size_1(_shape),
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _table_2(_aBlock, _to_2(1, _at_2(_shape, 1)));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _table_3(
              _aBlock,
              _to_2(1, _at_2(_shape, 1)),
              _to_2(1, _at_2(_shape, 2)),
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _table_4(
              _aBlock,
              _to_2(1, _at_2(_shape, 1)),
              _to_2(1, _at_2(_shape, 2)),
              _to_2(1, _at_2(_shape, 3)),
            );
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_aBlock, "array: not vector or matrix or volume");
      }, []),
    );
  }, ["aBlock", "shape"]),
  "{ :aBlock :shape |\n\t\tshape.size.caseOf(\n\t\t\t[\n\t\t\t\t1 -> { aBlock.table(1.to(shape[1])) },\n\t\t\t\t2 -> { aBlock.table(1.to(shape[1]), 1.to(shape[2])) },\n\t\t\t\t3 -> { aBlock.table(1.to(shape[1]), 1.to(shape[2]), 1.to(shape[3])) }\n\t\t\t]\n\t\t) {\n\t\t\taBlock.error('array: not vector or matrix or volume')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "arrayFilter",
  ["aBlock:/1", "aList", "anInteger"],
  sl.annotateFunction(function (_aBlock_1, _aList, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_1, _aList, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _to_2(1, _size_1(_aList)),
      sl.annotateFunction(function (_i) {
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
      }, ["i"]),
    );
  }, ["aBlock:/1", "aList", "anInteger"]),
  "{ :aBlock:/1 :aList :anInteger |\n\t\t1.to(aList.size).collect { :i |\n\t\t\taBlock(aList.copyFromToPin(i - anInteger, i + anInteger))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asBinaryBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), 2),
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
        return _error_2(_self, "asBinaryBlock: not binary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.numArgs = 2).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asBinaryBlock: not binary')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asBlock",
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
  "Block",
  "Block",
  "asTernaryBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), 3),
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
        return _error_2(_self, "asTernaryBlock: not ternary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.numArgs = 3).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asTernaryBlock: not ternary')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "asUnaryBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), 1),
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
        return _error_2(_self, "asUnaryBlock: not unary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.numArgs = 1).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('asUnaryBlock: not unary')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "assert",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _assert_2(_self, _self);
    return null;
  }, ["self"]),
  "{ :self |\n\t\tself.assert(self);\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "blockMap",
  ["aBlock:/1", "aList", "n", "d"],
  sl.annotateFunction(function (_aBlock_1, _aList, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _aBlock_1, _aList, _n, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _index = 1;
    /* Statements */
    _collect_2(
      _toBy_3(1, _plusSign_2(_hyphenMinus_2(_size_1(_aList), _n), 1), _d),
      sl.annotateFunction(function (_i) {
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
      }, ["i"]),
    );
    return _answer;
  }, ["aBlock:/1", "aList", "n", "d"]),
  "{ :aBlock:/1 :aList :n :d |\n\t\tlet answer = [];\n\t\tlet index = 1;\n\t\t1.toBy(aList.size - n + 1, d).collect { :i |\n\t\t\tanswer.add(aBlock(aList.copyFromTo(i, i + n - 1)))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "blockValue",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_0();
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\tself()\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "clip",
  ["aBlock:/1", "minMax"],
  sl.annotateFunction(function (_aBlock_1, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aBlock_1, _minMax";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _clip_2(_aBlock_1(_x), _minMax);
    }, ["x"]);
  }, ["aBlock:/1", "minMax"]),
  "{ :aBlock:/1 :minMax |\n\t\t{ :x |\n\t\t\taBlock(x).clip(minMax)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg"],
  sl.annotateFunction(function (_self, _firstArg) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _firstArg";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_2(_self, _firstArg);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      }, []),
    );
  }, ["self", "firstArg"]),
  "{ :self :firstArg |\n\t\t(self.numArgs >= 1).if {\n\t\t\tself.value(firstArg)\n\t\t} {\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "cull",
  ["self", "firstArg", "secondArg"],
  sl.annotateFunction(function (_self, _firstArg, _secondArg) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _firstArg, _secondArg";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_numArgs_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_3(_self, _firstArg, _secondArg);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_numArgs_1(_self), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _value_2(_self, _firstArg);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _value_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self", "firstArg", "secondArg"]),
  "{ :self :firstArg :secondArg |\n\t\t(self.numArgs >= 2).if {\n\t\t\tself.value(firstArg, secondArg)\n\t\t} {\n\t\t\t(self.numArgs = 1).if {\n\t\t\t\tself.value(firstArg)\n\t\t\t} {\n\t\t\t\tself.value\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "doWhileFalse",
  ["self:/0", "conditionBlock:/0"],
  sl.annotateFunction(function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileFalse_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    }, []));
    return _answer;
  }, ["self:/0", "conditionBlock:/0"]),
  "{ :self:/0 :conditionBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileFalse;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "doWhileTrue",
  ["self:/0", "conditionBlock:/0"],
  sl.annotateFunction(function (_self_0, _conditionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _conditionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _self_0();
      return _conditionBlock_0();
    }, []));
    return _answer;
  }, ["self:/0", "conditionBlock:/0"]),
  "{ :self:/0 :conditionBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\tanswer := self();\n\t\t\tconditionBlock()\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "elementwise",
  ["self:/1", "x"],
  sl.annotateFunction(function (_self_1, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _isAtom_3(
      _x,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_1(_x);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_x, _self_1);
      }, []),
    );
  }, ["self:/1", "x"]),
  "{ :self:/1 :x |\n\t\tx.isAtom {\n\t\t\tself(x)\n\t\t} {\n\t\t\tx.collect(self:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "elementwise",
  ["self:/2", "x", "y"],
  sl.annotateFunction(function (_self_2, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isAtom_1(_x),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isAtom_1(_y);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(
          _nest_1(_x),
          _nest_1(_y),
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _elementwise_3(_self_2, _i, _j);
          }, ["i", "j"]),
        );
      }, []),
    );
  }, ["self:/2", "x", "y"]),
  "{ :self:/2 :x :y |\n\t\t(x.isAtom & { y.isAtom }).if {\n\t\t\tself(x, y)\n\t\t} {\n\t\t\tx.nest.withCollect(y.nest) { :i :j |\n\t\t\t\tself:/2.elementwise(i, j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "elementwise",
  ["self:/3", "x", "y", "z"],
  sl.annotateFunction(function (_self_3, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self_3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isAtom_1(_x),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _isAtom_1(_y),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isAtom_1(_z);
            }, []),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_3(_x, _y, _z);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withWithCollect_4(
          _nest_1(_x),
          _nest_1(_y),
          _nest_1(_z),
          sl.annotateFunction(function (_i, _j, _k) {
            /* ArityCheck */
            if (arguments.length !== 3) {
              const errorMessage = "Arity: expected 3, _i, _j, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _elementwise_4(_self_3, _i, _j, _k);
          }, ["i", "j", "k"]),
        );
      }, []),
    );
  }, ["self:/3", "x", "y", "z"]),
  "{ :self:/3 :x :y :z |\n\t\t(x.isAtom & { y.isAtom & { z.isAtom }}).if {\n\t\t\tself(x, y, z)\n\t\t} {\n\t\t\tx.nest.withWithCollect(y.nest, z.nest) { :i :j :k |\n\t\t\t\tself:/3.elementwise(i, j, k)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ensure",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
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
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\t<primitive:\n\t\tlet returnValue;\n\t\ttry {\n\t\t\treturnValue = _self();\n\t\t} finally {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn returnValue;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "hasError",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = false;
    /* Statements */
    _ifError_2(
      _self_0,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = true;
      }, []),
    );
    return _answer;
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\tlet answer = false;\n\t\tself:/0.ifError {\n\t\t\tanswer := true\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ifError",
  ["self:/0", "errorHandlerBlock:/1"],
  sl.annotateFunction(function (_self_0, _errorHandlerBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _errorHandlerBlock_1";
      throw new Error(errorMessage);
    } /* Primitive */
    try {
      return _self_0();
    } catch (caughtValue) {
      if (caughtValue instanceof Error) {
        return _cull_2(_errorHandlerBlock_1, caughtValue);
      }
      {
        throw caughtValue;
      }
    }
  }, ["self:/0", "errorHandlerBlock:/1"]),
  "{ :self:/0 :errorHandlerBlock:/1 |\n\t\t<primitive:\n\t\ttry {\n\t\t\treturn _self_0();\n\t\t} catch (caughtValue) {\n\t\t\tif(caughtValue instanceof Error) {\n\t\t\t\treturn _cull_2(_errorHandlerBlock_1, caughtValue)\n\t\t\t} {\n\t\t\t\tthrow caughtValue;\n\t\t\t}\n\t\t}\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ignoreError",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifError_2(
      _self_0,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\tself:/0.ifError { }\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "isLiteral",
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
  "Block",
  "Block",
  "inner",
  ["f:/2", "p", "q", "g:/2"],
  sl.annotateFunction(function (_f_2, _p, _q, _g_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f_2, _p, _q, _g_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h_2 = _e_1(_f_2);
    /* Statements */
    return _if_3(
      _isVector_1(_p),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isVector_1(_q),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_h_2(_p, _q), _g_2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isMatrix_1(_q),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _collect_2(
                  _transpose_1(_q),
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _reduce_2(_h_2(_p, _each), _g_2);
                  }, ["each"]),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_1("Block>>inner: q not vector or matrix");
              }, []),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_p),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isVector_1(_q),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _collect_2(
                  _p,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _reduce_2(_h_2(_each, _q), _g_2);
                  }, ["each"]),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _isMatrix_1(_q),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _collect_2(
                      _p,
                      sl.annotateFunction(function (_each) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _each";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _inner_4(_f_2, _each, _q, _g_2);
                      }, ["each"]),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1(
                      "Block>>inner: argument not vector or matrix",
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Block>>inner: p not vector or matrix");
          }, []),
        );
      }, []),
    );
  }, ["f:/2", "p", "q", "g:/2"]),
  "{ :f:/2 :p :q :g:/2 |\n\t\tlet h:/2 = f:/2.e;\n\t\tp.isVector.if {\n\t\t\tq.isVector.if {\n\t\t\t\th(p, q).reduce(g:/2)\n\t\t\t} {\n\t\t\t\tq.isMatrix.if {\n\t\t\t\t\tq.transpose.collect { :each |\n\t\t\t\t\t\th(p, each).reduce(g:/2)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t'Block>>inner: q not vector or matrix'.error\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tp.isMatrix.if {\n\t\t\t\tq.isVector.if {\n\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\th(each, q).reduce(g:/2)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tq.isMatrix.if {\n\t\t\t\t\t\tp.collect { :each |\n\t\t\t\t\t\t\tinner(f:/2, each, q, g:/2)\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\t'Block>>inner: argument not vector or matrix'.error\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t'Block>>inner: p not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "iterate",
  ["self:/1", "anObject", "anInteger"],
  sl.annotateFunction(function (_self_1, _anObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anObject = _self_1(_anObject);
      }, []),
    );
    return _anObject;
  }, ["self:/1", "anObject", "anInteger"]),
  "{ :self:/1 :anObject :anInteger |\n\t\tanInteger.timesRepeat {\n\t\t\tanObject := self(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/1", "aCollection"],
  sl.annotateFunction(function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aCollection, _self_1);
  }, ["self:/1", "aCollection"]),
  "{ :self:/1 :aCollection |\n\t\taCollection.collect(self:/1)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/2", "aList", "anotherList"],
  sl.annotateFunction(function (_self_2, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_aList, _anotherList, _self_2);
  }, ["self:/2", "aList", "anotherList"]),
  "{ :self:/2 :aList :anotherList |\n\t\taList.withCollect(anotherList, self:/2)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "map",
  ["self:/3", "aList", "anotherList", "aThirdList"],
  sl.annotateFunction(function (_self_3, _aList, _anotherList, _aThirdList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aList, _anotherList, _aThirdList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withWithCollect_4(_aList, _anotherList, _aThirdList, _self_3);
  }, ["self:/3", "aList", "anotherList", "aThirdList"]),
  "{ :self:/3 :aList :anotherList :aThirdList |\n\t\taList.withWithCollect(anotherList, aThirdList, self:/3)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "memoizeBinary",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _unary_1 = _memoizeUnary_2(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_x, 2);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        /* Statements */
        return _self_2(_a, _b);
      }, ["x"]),
      false,
    );
    /* Statements */
    return sl.annotateFunction(function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        throw new Error(errorMessage);
      } /* Statements */
      return _unary_1([_a, _b]);
    }, ["a", "b"]);
  }, ["self:/2"]),
  "{ :self:/2 |\n\t\tlet unary:/1 = { :x |\n\t\t\tlet [a, b] = x;\n\t\t\tself(a, b)\n\t\t}.memoizeUnary(false);\n\t\t{ :a :b |\n\t\t\tunary([a, b])\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "memoizeUnary",
  ["self:/1", "requireImmediate"],
  sl.annotateFunction(function (_self_1, _requireImmediate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _requireImmediate";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _table = _if_3(
      _requireImmediate,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Map_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Dictionary_0();
      }, []),
    );
    /* Statements */
    return sl.annotateFunction(function (_input) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _input";
        throw new Error(errorMessage);
      } /* Statements */
      return _atIfAbsent_3(
        _table,
        _input,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _answer = _self_1(_input);
          /* Statements */
          _atPut_3(_table, _input, _answer);
          return _answer;
        }, []),
      );
    }, ["input"]);
  }, ["self:/1", "requireImmediate"]),
  "{ :self:/1 :requireImmediate |\n\t\tlet table = requireImmediate.if {\n\t\t\tMap()\n\t\t} {\n\t\t\tDictionary()\n\t\t};\n\t\t{ :input |\n\t\t\ttable.atIfAbsent(input) {\n\t\t\t\tlet answer = self(input);\n\t\t\t\ttable.atPut(input, answer);\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "memoize",
  ["self", "requireImmediate"],
  sl.annotateFunction(function (_self, _requireImmediate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _requireImmediate";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_numArgs_1(_self), [
      _hyphenMinusGreaterThanSign_2(
        1,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _memoizeUnary_2(_self, _requireImmediate);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        2,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _assert_1(sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_requireImmediate, false);
          }, []));
          return _memoizeBinary_1(_self);
        }, []),
      ),
    ]);
  }, ["self", "requireImmediate"]),
  "{ :self :requireImmediate |\n\t\tself.numArgs.caseOf(\n\t\t\t[\n\t\t\t\t1 -> { self.memoizeUnary(requireImmediate) },\n\t\t\t\t2 -> { { requireImmediate = false }.assert; self.memoizeBinary }\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "memoize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _memoize_2(_self, false);
  }, ["self"]),
  "{ :self |\n\t\tself.memoize(false)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "movingMap",
  ["self:/1", "sequence", "windowSize"],
  sl.annotateFunction(function (_self_1, _sequence, _windowSize) {
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
      sl.annotateFunction(function (_i) {
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
      }, ["i"]),
    );
    return _answer;
  }, ["self:/1", "sequence", "windowSize"]),
  "{ :self:/1 :sequence :windowSize |\n\t\tlet answer = [];\n\t\t1.toDo(sequence.size - windowSize + 1) { :i |\n\t\t\tanswer.add(\n\t\t\t\tself(sequence.copyFromTo(i, i + windowSize - 1))\n\t\t\t)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "neighbourhoodMap",
  ["aBlock:/2", "x", "r"],
  sl.annotateFunction(function (_aBlock_2, _x, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_2, _x, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    /* Statements */
    return _collect_2(
      _to_2(1, _n),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _max_2(_hyphenMinus_2(_i, _r), 1);
        let _k = _min_2(_plusSign_2(_i, _r), _n);
        /* Statements */
        return _aBlock_2(_copyFromTo_3(_x, _j, _k), _i);
      }, ["i"]),
    );
  }, ["aBlock:/2", "x", "r"]),
  "{ :aBlock:/2 :x :r |\n\t\tlet n = x.size;\n\t\t1.to(n).collect { :i |\n\t\t\tlet j = (i - r).max(1);\n\t\t\tlet k = (i + r).min(n);\n\t\t\taBlock(x.copyFromTo(j, k), i)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "new",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.cull(0)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "new",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _cull_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.cull(aNumber)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "newFrom",
  ["self:/1", "aCollection"],
  sl.annotateFunction(function (_self_1, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _self_1(_size_1(_aCollection));
    /* Statements */
    _fillFrom_2(_answer, _aCollection);
    return _answer;
  }, ["self:/1", "aCollection"]),
  "{ :self:/1 :aCollection |\n\t\tlet answer = self(aCollection.size);\n\t\tanswer.fillFrom(aCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgsIfAbsent",
  ["self", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hasRestParameters ? _ifAbsent() : _self.length;
  }, ["self", "ifAbsent:/0"]),
  "{ :self :ifAbsent:/0 |\n\t\t/*\n\t\tJs does not have a proper numArgs mechanism.\n\t\tIn the simple arity model Spl adds hasRestParameters to the arity dispatch method functions, else it is undefined.\n\t\tFrom within Spl there is no concept of a variadic block.\n\t\t*/\n\t\t<primitive: return _self.hasRestParameters ? _ifAbsent() : _self.length;>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgsOrNil",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numArgsIfAbsent {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "numArgs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numArgsIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "numArgs: applied to arity-dispatch block");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numArgsIfAbsent {\n\t\t\tself.error('numArgs: applied to arity-dispatch block')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "ofSize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _ofSize_2(_cull_2(_self, _aNumber), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.cull(aNumber).ofSize(aNumber)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "outer",
  ["self", "aList", "anotherList"],
  sl.annotateFunction(function (_self, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_3(_outer_1(_self), _aList, _anotherList);
  }, ["self", "aList", "anotherList"]),
  "{ :self :aList :anotherList |\n\t\t(self.outer).value(aList, anotherList)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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
  "Block",
  "Block",
  "repeat",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _self_0();
      return true;
    }, []));
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\t{\n\t\t\tself();\n\t\t\ttrue\n\t\t}.whileTrue\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
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

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_aList, _anotherList) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _aList, _anotherList";
        throw new Error(errorMessage);
      } /* Statements */
      return _table_3(_self_2, _aList, _anotherList);
    }, ["aList", "anotherList"]);
  }, ["self:/2"]),
  "{ :self:/2 |\n\t\t{ :aList :anotherList |\n\t\t\tself:/2.table(aList, anotherList)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/1", "aList"],
  sl.annotateFunction(function (_self_1, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_aList, _self_1);
  }, ["self:/1", "aList"]),
  "{ :self:/1 :aList |\n\t\taList.collect(self:/1)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/2", "aList", "anotherList"],
  sl.annotateFunction(function (_self_2, _aList, _anotherList) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _aList, _anotherList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aList,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _anotherList,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _self_2(_i, _j);
          }, ["j"]),
        );
      }, ["i"]),
    );
  }, ["self:/2", "aList", "anotherList"]),
  "{ :self:/2 :aList :anotherList |\n\t\taList.collect { :i |\n\t\t\tanotherList.collect { :j |\n\t\t\t\tself(i, j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "table",
  ["self:/3", "aList", "aSecondList", "aThirdList"],
  sl.annotateFunction(function (_self_3, _aList, _aSecondList, _aThirdList) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self_3, _aList, _aSecondList, _aThirdList";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aList,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _aSecondList,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _aThirdList,
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _self_3(_i, _j, _k);
              }, ["k"]),
            );
          }, ["j"]),
        );
      }, ["i"]),
    );
  }, ["self:/3", "aList", "aSecondList", "aThirdList"]),
  "{ :self:/3 :aList :aSecondList :aThirdList |\n\t\taList.collect { :i |\n\t\t\taSecondList.collect { :j |\n\t\t\t\taThirdList.collect { :k |\n\t\t\t\t\tself(i, j, k)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "unqualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name.split(":")[0];
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.name.split(':')[0];>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_0();
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\tself()\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/1", "p1"],
  sl.annotateFunction(function (_self_1, _p1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _p1";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_1(_p1);
  }, ["self:/1", "p1"]),
  "{ :self:/1 :p1 |\n\t\tself(p1)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/2", "p1", "p2"],
  sl.annotateFunction(function (_self_2, _p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_2, _p1, _p2";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_2(_p1, _p2);
  }, ["self:/2", "p1", "p2"]),
  "{ :self:/2 :p1 :p2 |\n\t\tself(p1, p2)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/3", "p1", "p2", "p3"],
  sl.annotateFunction(function (_self_3, _p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self_3, _p1, _p2, _p3";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_3(_p1, _p2, _p3);
  }, ["self:/3", "p1", "p2", "p3"]),
  "{ :self:/3 :p1 :p2 :p3 |\n\t\tself(p1, p2, p3)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/4", "p1", "p2", "p3", "p4"],
  sl.annotateFunction(function (_self_4, _p1, _p2, _p3, _p4) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self_4, _p1, _p2, _p3, _p4";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_4(_p1, _p2, _p3, _p4);
  }, ["self:/4", "p1", "p2", "p3", "p4"]),
  "{ :self:/4 :p1 :p2 :p3 :p4 |\n\t\tself(p1, p2, p3, p4)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "value",
  ["self:/5", "p1", "p2", "p3", "p4", "p5"],
  sl.annotateFunction(function (_self_5, _p1, _p2, _p3, _p4, _p5) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self_5, _p1, _p2, _p3, _p4, _p5";
      throw new Error(errorMessage);
    } /* Statements */
    return _self_5(_p1, _p2, _p3, _p4, _p5);
  }, ["self:/5", "p1", "p2", "p3", "p4", "p5"]),
  "{ :self:/5 :p1 :p2 :p3 :p4 :p5 |\n\t\tself(p1, p2, p3, p4, p5)\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "valueWithArguments",
  ["self", "argumentsList"],
  sl.annotateFunction(function (_self, _argumentsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _argumentsList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.apply(null, _argumentsList);
  }, ["self", "argumentsList"]),
  "{ :self :argumentsList |\n\t\t<primitive: return _self.apply(null, _argumentsList);>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "valueWithReturn",
  ["self:/1"],
  sl.annotateFunction(function (_self_1) {
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
  }, ["self:/1"]),
  "{ :self:/1 |\n\t\t<primitive:\n\t\tconst returnBlock = function(returnValue) {\n\t\t\tthrow returnValue;\n\t\t};\n\t\ttry {\n\t\t\treturn _self_1(returnBlock);\n\t\t} catch (returnedValue) {\n\t\t\tif(returnedValue instanceof Error) {\n\t\t\t\tthrow returnedValue;\n\t\t\t} {\n\t\t\t\treturn returnedValue;\n\t\t\t}\n\t\t}\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\t{\n\t\t\tself()\n\t\t}.whileFalse {\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileFalse",
  ["self:/0", "aBlock:/0"],
  sl.annotateFunction(function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    while (!_self_0()) {
      _aBlock_0();
    }
    return null;
  }, ["self:/0", "aBlock:/0"]),
  "{ :self:/0 :aBlock:/0 |\n\t\t<primitive:\n\t\twhile(!_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileNil",
  ["self:/0", "aBlock:/0"],
  sl.annotateFunction(function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNil_1(_answer = _self_0());
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
    );
    return _answer;
  }, ["self:/0", "aBlock:/0"]),
  "{ :self:/0 :aBlock:/0 |\n\t\tlet answer = nil;\n\t\t{\n\t\t\t(answer := self()).isNil\n\t\t}.whileTrue {\n\t\t\taBlock()\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0"],
  sl.annotateFunction(function (_self_0) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
  }, ["self:/0"]),
  "{ :self:/0 |\n\t\t{\n\t\t\tself()\n\t\t}.whileTrue {\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "whileTrue",
  ["self:/0", "aBlock:/0"],
  sl.annotateFunction(function (_self_0, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    while (_self_0()) {
      _aBlock_0();
    }
    return null;
  }, ["self:/0", "aBlock:/0"]),
  "{ :self:/0 :aBlock:/0 |\n\t\t<primitive:\n\t\twhile(_self_0()) {\n\t\t\t_aBlock_0();\n\t\t};\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "Block",
  "Block",
  "yCombinator",
  ["self:/1"],
  sl.annotateFunction(function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u_1 = sl.annotateFunction(function (_f_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _f_1";
        throw new Error(errorMessage);
      } /* Statements */
      return sl.annotateFunction(function (_x_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x_1";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_x_1(_x_1));
      }, ["x:/1"]);
    }, ["f:/1"]);
    let _delta_1 = _u_1(_identity_1);
    /* Statements */
    return _delta_1(sl.annotateFunction(function (_i_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _h_1 = _i_1(_i_1);
        /* Statements */
        return _h_1(_x);
      }, ["x"]));
    }, ["i:/1"]));
  }, ["self:/1"]),
  "{ :self:/1 |\n\t\tlet u = { :f:/1 |\n\t\t\t{ :x:/1 |\n\t\t\t\tf(x(x:/1))\n\t\t\t}\n\t\t};\n\t\tlet delta:/1 = identity:/1.u;\n\t\t{ :i:/1 |\n\t\t\tself(\n\t\t\t\t{ :x |\n\t\t\t\t\tlet h:/1 = i(i:/1);\n\t\t\t\t\th(x)\n\t\t\t\t}\n\t\t\t)\n\t\t}.delta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Block",
  "also",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _aBlock_1(_self);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\taBlock(self);\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Block",
  "with",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\taBlock(self)\n\t}",
);
