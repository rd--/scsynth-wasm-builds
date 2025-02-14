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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.fill(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.fill(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "isAssociationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isAssociation_1);
  },
  "{ :self |\n\t\tself.allSatisfy(isAssociation:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isJson_1);
  },
  "{ :self |\n\t\tself.allSatisfy(isJson:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isLiteral_1);
  },
  "{ :self |\n\t\tself.allSatisfy(isLiteral:/1)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_isList_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _isVector_1(_each);
        });
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _size_1(_asIdentitySet_1(_collect_2(_self, _size_1))),
          1,
        );
      },
    );
  },
  "{ :self |\n\t\tself.allSatisfy { :each | each.isList & { each.isVector } } & {\n\t\t\tself.collect(size:/1).asIdentitySet.size = 1\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, _isList_1);
  },
  "{ :self |\n\t\tself.noneSatisfy(isList:/1)\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "join",
  ["self", "separator"],
  function (_self, _separator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _separator";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _separatorType = _typeOf_1(_separator);
    /* Statements */
    return _if_3(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_typeOf_1(_each), _separatorType);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOfOtherwise_3(_separatorType, [
          _hyphenMinusGreaterThanSign_2("List", function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _concatenationSeparatedBy_2(_self, _separator);
          }),
          _hyphenMinusGreaterThanSign_2("String", function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _basicStringJoin_2(_self, _separator);
          }),
        ], function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            _plusSignPlusSign_2(
              "List>>join: element type not List or String: ",
              _elementType,
            ),
          );
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "List>>join: heterogenous list: ",
            _elementTypes_1(_self),
          ),
        );
      },
    );
  },
  "{ :self :separator |\n\t\tlet separatorType = separator.typeOf;\n\t\tself.allSatisfy { :each |\n\t\t\teach.typeOf = separatorType\n\t\t}.if {\n\t\t\tseparatorType.caseOfOtherwise([\n\t\t\t\t'List' -> {\n\t\t\t\t\tself.concatenationSeparatedBy(separator)\n\t\t\t\t},\n\t\t\t\t'String' -> {\n\t\t\t\t\tself.basicStringJoin(separator)\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\tself.error('List>>join: element type not List or String: ' ++ elementType)\n\t\t\t}\n\t\t} {\n\t\t\tself.error('List>>join: heterogenous list: ' ++ self.elementTypes)\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("[", _join_2(_collect_2(_self, _toString_1), ", ")),
      "]",
    );
  },
  "{ :self :toString:/1 |\n\t\t'[' ++ self.collect(toString:/1).join(', ') ++ ']'\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _self = _solidus_2(_self, _norm_1(_self));
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym10 = _assertIsOfSize_2(_self, 2),
          _a = _at_2(__genSym10, 1),
          _b = _at_2(__genSym10, 2);
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym11 = _assertIsOfSize_2(_self, 3),
          _a = _at_2(__genSym11, 1),
          _b = _at_2(__genSym11, 2),
          _c = _at_2(__genSym11, 3);
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
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _at_2(_self, _index);
    /* Statements */
    _basicRemoveAt_2(_self, _index);
    return _removed;
  },
  "{ :self :index |\n\t\tlet removed = self[index];\n\t\tself.basicRemoveAt(index);\n\t\tremoved\n\t}",
);

sl.addMethod(
  "List",
  "List",
  "removeAtAll",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _atAll_2(_self, _indices);
    /* Statements */
    _do_2(_indices, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicRemoveAt_2(_self, _index);
    });
    return _removed;
  },
  "{ :self :indices |\n\t\tlet removed = self.atAll(indices);\n\t\tindices.do { :index |\n\t\t\tself.basicRemoveAt(index)\n\t\t};\n\t\tremoved\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_asterisk_2(_step, _hyphenMinus_2(_each, 1)), _start);
    });
  },
  "{ :self :start :step |\n\t\t1.to(self).collect { :each |\n\t\t\t(step * (each - 1)) + start\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "List",
  "fill",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_self);
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_answer, _index, _aBlock_1(_index));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = List(self);\n\t\tanswer.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(index)\n\t\t};\n\t\tanswer\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _start;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array(Number(_size)).fill(null);
  },
  "{ :size |\n\t\t<primitive: return Array(Number(_size)).fill(null);>\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    return _answer;
  },
  "{ :size :anObject |\n\t\tlet answer = List(size);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "List",
  "linspace",
  ["x1", "x2", "n"],
  function (_x1, _x2, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x1, _x2, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_n, 1));
    /* Statements */
    return _nestList_3(
      function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_x, _step);
      },
      _x1,
      _hyphenMinus_2(_n, 1),
    );
  },
  "{ :x1 :x2 :n |\n\t\tlet step = (x2 - x1) / (n - 1);\n\t\t{ :x | x + step }.nestList(x1, n - 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "List",
  "logspace",
  ["a", "b", "n"],
  function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _linspace_3(_a, _b, _n));
  },
  "{ :a :b :n |\n\t\t10 ^ a.linspace(b, n)\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_answer, _index, _at_2(_self, _index));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := self[index]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "List",
  "fill",
  ["shape", "aBlock:/1"],
  function (_shape, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _shape, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_shape), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _iota_1(_shape);
      /* Statements */
      _shapeIndicesDo_2(_shape, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atPathPut_3(_answer, _index, _aBlock_1(_index));
      });
      return _answer;
    });
  },
  "{ :shape :aBlock:/1 |\n\t\tshape.isEmpty.if {\n\t\t\taBlock(0)\n\t\t} {\n\t\t\tlet answer = shape.iota;\n\t\t\tshape.shapeIndicesDo { :index |\n\t\t\t\tanswer.atPathPut(index, aBlock(index))\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "exclamationMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateInteger_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.duplicateInteger(anObject)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "numberSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _replicateInteger_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.replicateInteger(anObject)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "duplicateInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(_anInteger, function (_unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedIndex";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.fill { :unusedIndex |\n\t\t\tself.value\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "duplicateShape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(_shape, function (_unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedIndex";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self :shape |\n\t\tshape.fill { :unusedIndex |\n\t\t\tself.value\n\t\t}\n\t}",
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
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
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSequence_1(_self), function () {
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
      return [_self];
    });
  },
  "{ :self |\n\t\tself.isSequence.if {\n\t\t\tself\n\t\t} {\n\t\t\t[self]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "replicateInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _fill_2(_anInteger, _constant_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Object>>replicateInteger: not integer");
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isInteger.if {\n\t\t\tanInteger.fill(self.constant)\n\t\t} {\n\t\t\tself.error('@Object>>replicateInteger: not integer')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "List",
  "replicateShape",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_aSequence), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _fill_2(_aSequence, _constant_1(_self));
    });
  },
  "{ :self :aSequence |\n\t\taSequence.isEmpty.if {\n\t\t\tself.value\n\t\t} {\n\t\t\taSequence.fill(self.constant)\n\t\t}\n\t}",
);
