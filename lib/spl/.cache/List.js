sl.addType(
  true,
  "List",
  "List",
  [
    "Object",
    "Json",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequence",
    "PrimitiveSequence",
    "Ordered",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "List",
);

sl.copyTraitToType(
  "Json",
  "List",
);

sl.copyTraitToType(
  "Iterable",
  "List",
);

sl.copyTraitToType(
  "Indexable",
  "List",
);

sl.copyTraitToType(
  "Collection",
  "List",
);

sl.copyTraitToType(
  "Extensible",
  "List",
);

sl.copyTraitToType(
  "Removable",
  "List",
);

sl.copyTraitToType(
  "Sequence",
  "List",
);

sl.copyTraitToType(
  "PrimitiveSequence",
  "List",
);

sl.copyTraitToType(
  "Ordered",
  "List",
);

sl.addMethod(
  "List",
  "List",
  "addListFirst",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.unshift(..._aList);
    return _aList;
  },
  "{ :self :aList |\n\t\t<primitive:\n\t\t_self.unshift(..._aList);\n\t\treturn _aList;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "addListLast",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.push(..._aList);
    return _aList;
  },
  "{ :self :aList |\n\t\t<primitive:\n\t\t_self.push(..._aList);\n\t\treturn _aList;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "addFirst",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.unshift(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.unshift(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "addLast",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.push(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.push(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "atAllPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.fill(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.fill(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "diagonalMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _k = _size_1(_self);
    let _answer = _zeroMatrix_2(_k, _k);
    /* Statements */
    _toDo_3(1, _k, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_at_2(_answer, _each), _each, _at_2(_self, _each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet k = self.size;\n\t\tlet answer = k.zeroMatrix(k);\n\t\t1.toDo(k) { :each |\n\t\t\tanswer[each][each] := self[each]\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(_isList_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _isVector_1(_each);
        });
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_asSet_1(_collect_2(_self, _size_1))), 1);
      },
    );
  },
  "{ :self |\n\t\tself.allSatisfy { :each | each.isList & { each.isVector } } & {\n\t\t\tself.collect(size:/1).asSet.size = 1\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "isVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _noneSatisfy_2(_self, _isList_1);
  },
  "{ :self |\n\t\tself.noneSatisfy(isList:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "printString",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "[",
        _joinSeparatedBy_2(_collect_2(_self, _toString_1), ", "),
      ),
      "]",
    );
  },
  "{ :self :toString:/1 |\n\t\t'[' ++ self.collect(toString:/1).joinSeparatedBy(', ') ++ ']'\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _printString_2(_self, _printString_1);
  },
  "{ :self |\n\t\tself.printString(printString:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "reflectionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _self = _solidus_2(_self, _norm_1(_self));
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let __genSym1 = _assertIsOfSize_2(_self, 2),
          _a = _at_2(__genSym1, 1),
          _b = _at_2(__genSym1, 2);
        /* Statements */
        return [[
          _hyphenMinus_2(_squared_1(_a), _squared_1(_b)),
          _asterisk_2(_asterisk_2(2, _a), _b),
        ], [
          _asterisk_2(_asterisk_2(2, _a), _b),
          _hyphenMinus_2(_squared_1(_b), _squared_1(_a)),
        ]];
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let __genSym2 = _assertIsOfSize_2(_self, 3),
          _a = _at_2(__genSym2, 1),
          _b = _at_2(__genSym2, 2),
          _c = _at_2(__genSym2, 3);
        /* Statements */
        return [[
          _hyphenMinus_2(1, _asterisk_2(2, _squared_1(_a))),
          _asterisk_2(_asterisk_2(-2, _a), _b),
          _asterisk_2(_asterisk_2(-2, _a), _c),
        ], [
          _asterisk_2(_asterisk_2(-2, _a), _b),
          _hyphenMinus_2(1, _asterisk_2(2, _squared_1(_b))),
          _asterisk_2(_asterisk_2(-2, _b), _c),
        ], [
          _asterisk_2(_asterisk_2(-2, _a), _c),
          _asterisk_2(_asterisk_2(-2, _b), _c),
          _hyphenMinus_2(1, _asterisk_2(2, _squared_1(_c))),
        ]];
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("List>>reflectionMatrix: not two or three list");
    });
  },
  "{ :self |\n\t\tself := self / self.norm;\n\t\tself.size.caseOfOtherwise([\n\t\t\t{ 2 } -> {\n\t\t\t\tlet [a, b] = self;\n\t\t\t\t[\n\t\t\t\t\t[a.squared - b.squared, 2 * a * b],\n\t\t\t\t\t[2 * a * b, b.squared - a.squared]\n\t\t\t\t]\n\t\t\t},\n\t\t\t{ 3 } -> {\n\t\t\t\tlet [a, b, c] = self;\n\t\t\t\t[\n\t\t\t\t\t[1 - (2 * a.squared), -2 * a * b, -2 * a * c],\n\t\t\t\t\t[-2 * a * b, 1 - (2 * b.squared), -2 * b * c],\n\t\t\t\t\t[-2 * a * c, -2 * b * c, 1 - (2 * c.squared)]\n\t\t\t\t]\n\t\t\t}\n\t\t]) {\n\t\t\t'List>>reflectionMatrix: not two or three list'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(0);
  },
  "{ :self |\n\t\t<primitive: return _self.splice(0);>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(_index - 1, 1)[0];
  },
  "{ :self :index |\n\t\t<primitive: return _self.splice(_index - 1, 1)[0];>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.shift();
  },
  "{ :self |\n\t\t<primitive: return _self.shift();>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeFirst",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(0, _count);
  },
  "{ :self :count |\n\t\t<primitive: return _self.splice(0, _count);>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.pop();
  },
  "{ :self |\n\t\t<primitive: return _self.pop();>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeLast",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(_self.length - _count, _count);
  },
  "{ :self :count |\n\t\t<primitive: return _self.splice(_self.length - _count, _count);>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "scalingMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _diagonalMatrix_1(_self);
  },
  "{ :self |\n\t\tself.diagonalMatrix\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Array.from(_self);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _List_1;
  },
  "{ :self |\n\t\tList:/1\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _printString_2(_self, _storeString_1);
  },
  "{ :self |\n\t\tself.printString(storeString:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "arithmeticSeries",
  ["self", "start", "step"],
  function (_self, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(_asterisk_2(_step, _hyphenMinus_2(_each, 1)), _start);
    });
  },
  "{ :self :start :step |\n\t\t1.upTo(self).collect { :each |\n\t\t\t(step * (each - 1)) + start\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "geometricSeries",
  ["self", "start", "grow"],
  function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = _start;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _next);
      return _next = _asterisk_2(_next, _grow);
    });
    return _answer;
  },
  "{ :self :start :grow |\n\t\tlet answer = [];\n\t\tlet next = start;\n\t\tself.timesRepeat {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * grow\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "List",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Array(Number(_size));
  },
  "{ :size |\n\t\t<primitive: return Array(Number(_size));>\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "List",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    return _answer;
  },
  "{ :size :anObject |\n\t\tlet answer = List(size);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Void",
  "List",
  "List",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return [];
  },
  "{\n\t\t<primitive: return [];>\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "List",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _atPut_3(_answer, _index, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 0;\n\t\tself.do { :each |\n\t\t\tindex := index + 1;\n\t\t\tanswer[index] := each\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "List",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _at_2(_self, _index));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := self[index]\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "List",
  "exclamationMark",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _duplicate_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.duplicate(anInteger)\n\t}",
);

sl.addMethod(
  "Block",
  "List",
  "exclamationMark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(_self, 2);
  },
  "{ :self |\n\t\tself ! 2\n\t}",
);

sl.addMethod(
  "Block",
  "List",
  "duplicate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _duplicate_2(_self, 2);
  },
  "{ :self |\n\t\tself.duplicate(2)\n\t}",
);

sl.addMethod(
  "Block",
  "List",
  "duplicate",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateApplying_3(_self, _anInteger, _value_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateApplying(anInteger, value:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "exclamationMarkPlusSignPlusSign",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_exclamationMark_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\t(self ! anInteger).concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "enclose",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [_self];
  },
  "{ :self |\n\t\t[self]\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "nest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isList_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [_self];
    });
  },
  "{ :self |\n\t\tself.isList.if {\n\t\t\tself\n\t\t} {\n\t\t\t[self]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "replicateApplying",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_anInteger);
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _aBlock_1(_self));
    });
    return _answer;
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet answer = List(anInteger);\n\t\tanswer.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "replicate",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateApplying_3(_self, _anInteger, _identity_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateApplying(anInteger, identity:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "exclamationMark",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicate_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.replicate(anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "fibonacciList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fibonacciSequenceInto_2(_self, []);
  },
  "{ :self |\n\t\tself.fibonacciSequenceInto([])\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "identityMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _zeroMatrix_2(_self, _self);
    /* Statements */
    _do_2(_upOrDownTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_at_2(_answer, _each), _each, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.zeroMatrix(self);\n\t\t1:self.do { :each |\n\t\t\tanswer[each][each] := 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "zeroMatrix",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _self), function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _List_2(_other, 0);
    });
  },
  "{ :self :other |\n\t\t1:self.collect { :unused |\n\t\t\tList(other, 0)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "plot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _fileName = "/tmp/listPlot.json";
    /* Statements */
    return _then_2(
      _writeTextFile_2(_fileName, _json_1([_self])),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-plot", [
          "json",
          "x",
          "--rows",
          _fileName,
          0,
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet fileName = '/tmp/listPlot.json';\n\t\tfileName.writeTextFile([self].json).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-plot',\n\t\t\t\t[\n\t\t\t\t\t'json',\n\t\t\t\t\t'x',\n\t\t\t\t\t'--rows',\n\t\t\t\t\tfileName,\n\t\t\t\t\t0\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);
