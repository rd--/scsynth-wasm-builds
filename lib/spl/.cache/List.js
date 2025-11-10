sl.addType(
  true,
  "List",
  "List",
  [
    "Object",
    "Equatable",
    "Comparable",
    "Json",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequenceable",
    "PrimitiveSequence",
    "Ordered",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "List",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "List",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "List",
);

sl.copyTraitMethodsToType(
  "Json",
  "List",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "List",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "List",
);

sl.copyTraitMethodsToType(
  "Collection",
  "List",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "List",
);

sl.copyTraitMethodsToType(
  "Removable",
  "List",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "List",
);

sl.copyTraitMethodsToType(
  "PrimitiveSequence",
  "List",
);

sl.copyTraitMethodsToType(
  "Ordered",
  "List",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addListFirst",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.unshift(..._aList);
    return _aList;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\t<primitive:\n\t\t_self.unshift(..._aList);\n\t\treturn _aList;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addListLast",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.push(..._aList);
    return _aList;
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\t<primitive:\n\t\t_self.push(..._aList);\n\t\treturn _aList;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addFirst",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.unshift(_anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.unshift(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addLast",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.push(_anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.push(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "asList",
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
  "List",
  "List",
  "atAllPut",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.fill(_anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.fill(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "copyList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.copy\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "deinterleave",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _transpose_1(_partition_3(_self, _n, _n));
  }, ["self", "n"]),
  "{ :self :n |\n\t\t/*\n\t\tlet k = self.size;\n\t\tlet numberOfChannels = n;\n\t\tlet numberOfFrames = k // numberOfChannels;\n\t\tlet channelsArray = {\n\t\t\tList(numberOfFrames)\n\t\t} ! numberOfChannels;\n\t\t0.toDo(numberOfFrames - 1) { :i |\n\t\t\t1.toDo(numberOfChannels) { :j |\n\t\t\t\tchannelsArray[j][i + 1] := self[(i * numberOfChannels) + j]\n\t\t\t}\n\t\t};\n\t\tchannelsArray\n\t\t*/\n\t\tself.partition(n, n).transpose\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "fill",
  ["shape", "aBlock:/1"],
  sl.annotateFunction(function (_shape, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _shape, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_shape),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _iota_1(_shape);
        /* Statements */
        _shapeIndicesDo_2(
          _shape,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPathPut_3(_answer, _index, _aBlock_1(_index));
          }, ["index"]),
        );
        return _answer;
      }, []),
    );
  }, ["shape", "aBlock:/1"]),
  "{ :shape :aBlock:/1 |\n\t\tshape.isEmpty.if {\n\t\t\taBlock(0)\n\t\t} {\n\t\t\tlet answer = shape.iota;\n\t\t\tshape.shapeIndicesDo { :index |\n\t\t\t\tanswer.atPathPut(index, aBlock(index))\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "gather",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _detectIndex_2(
          _answer,
          sl.annotateFunction(function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_x, _anyOne_1(_y));
          }, ["y"]),
        );
        /* Statements */
        return _ifNil_3(
          _i,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, [_x]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_at_2(_answer, _i), _x);
          }, []),
        );
      }, ["x"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet answer = [];\n\t\tself.do { :x |\n\t\t\tlet i = answer.detectIndex { :y |\n\t\t\t\taBlock(x, y.anyOne)\n\t\t\t};\n\t\t\ti.ifNil {\n\t\t\t\tanswer.add([x])\n\t\t\t} {\n\t\t\t\tanswer[i].add(x)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "interleave",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _flatten_1(_transposeIrregular_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.transposeIrregular.flatten\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isJson_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(isJson:/1)\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isListOf",
  ["self", "elementType"],
  sl.annotateFunction(function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_elementType_1(_self), _elementType);
  }, ["self", "elementType"]),
  "{ :self :elementType |\n\t\tself.elementType = elementType\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isLiteral_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(isLiteral:/1)\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "join",
  ["self", "level"],
  sl.annotateFunction(function (_self, _level) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _level";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_level, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _catenate_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toAsCollect_4(
          1,
          _size_1(_first_1(_self)),
          _species_1(_first_1(_self)),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _join_2(
              _collect_2(
                _self,
                sl.annotateFunction(function (_row) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _row";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _at_2(_row, _index);
                }, ["row"]),
              ),
              _hyphenMinus_2(_level, 1),
            );
          }, ["index"]),
        );
      }, []),
    );
  }, ["self", "level"]),
  "{ :self :level |\n\t\t(level <= 1).if {\n\t\t\tself.catenate\n\t\t} {\n\t\t\t1.toAsCollect(self.first.size, self.first.species) { :index |\n\t\t\t\tself.collect { :row |\n\t\t\t\t\trow[index]\n\t\t\t\t}.join(level - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "keySort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_self, _key_1);
  }, ["self"]),
  "{ :self |\n\t\tself.sortOn(key:/1)\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "printString",
  ["self", "toString:/1"],
  sl.annotateFunction(function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("[%]", [
      _commaSeparated_1(_collect_2(_self, _toString_1)),
    ]);
  }, ["self", "toString:/1"]),
  "{ :self :toString:/1 |\n\t\t'[%]'.format([\n\t\t\tself.collect(toString:/1).commaSeparated\n\t\t])\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, _printString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.printString(printString:/1)\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "reflectionMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _self = _solidus_2(_self, _norm_1(_self));
    return _caseOf_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar1 = _assertIsOfSize_2(_self, 2);
            let _a = _at_2(__SplVar1, 1);
            let _b = _at_2(__SplVar1, 2);
            /* Statements */
            return [[
              _hyphenMinus_2(_square_1(_a), _square_1(_b)),
              _asterisk_2(_asterisk_2(2, _a), _b),
            ], [
              _asterisk_2(_asterisk_2(2, _a), _b),
              _hyphenMinus_2(_square_1(_b), _square_1(_a)),
            ]];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar2 = _assertIsOfSize_2(_self, 3);
            let _a = _at_2(__SplVar2, 1);
            let _b = _at_2(__SplVar2, 2);
            let _c = _at_2(__SplVar2, 3);
            /* Statements */
            return [[
              _hyphenMinus_2(1, _asterisk_2(2, _square_1(_a))),
              _asterisk_2(_asterisk_2(-2, _a), _b),
              _asterisk_2(_asterisk_2(-2, _a), _c),
            ], [
              _asterisk_2(_asterisk_2(-2, _a), _b),
              _hyphenMinus_2(1, _asterisk_2(2, _square_1(_b))),
              _asterisk_2(_asterisk_2(-2, _b), _c),
            ], [
              _asterisk_2(_asterisk_2(-2, _a), _c),
              _asterisk_2(_asterisk_2(-2, _b), _c),
              _hyphenMinus_2(1, _asterisk_2(2, _square_1(_c))),
            ]];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("List>>reflectionMatrix: not two or three list");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself := self / self.norm;\n\t\tself.size.caseOf([\n\t\t\t2 -> {\n\t\t\t\tlet [a, b] = self;\n\t\t\t\t[\n\t\t\t\t\t[a.square - b.square, 2 * a * b],\n\t\t\t\t\t[2 * a * b, b.square - a.square]\n\t\t\t\t]\n\t\t\t},\n\t\t\t3 -> {\n\t\t\t\tlet [a, b, c] = self;\n\t\t\t\t[\n\t\t\t\t\t[1 - (2 * a.square), -2 * a * b, -2 * a * c],\n\t\t\t\t\t[-2 * a * b, 1 - (2 * b.square), -2 * b * c],\n\t\t\t\t\t[-2 * a * c, -2 * b * c, 1 - (2 * c.square)]\n\t\t\t\t]\n\t\t\t}\n\t\t]) {\n\t\t\t'List>>reflectionMatrix: not two or three list'.error\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(0);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.splice(0);>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _at_2(_self, _index);
    /* Statements */
    _uncheckedRemoveAt_2(_self, _index);
    return _removed;
  }, ["self", "index"]),
  "{ :self :index |\n\t\tlet removed = self[index];\n\t\tself.uncheckedRemoveAt(index);\n\t\tremoved\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAtAll",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _atAll_2(_self, _indices);
    /* Statements */
    _do_2(
      _indices,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedRemoveAt_2(_self, _index);
      }, ["index"]),
    );
    return _removed;
  }, ["self", "indices"]),
  "{ :self :indices |\n\t\tlet removed = self.atAll(indices);\n\t\tindices.do { :index |\n\t\t\tself.uncheckedRemoveAt(index)\n\t\t};\n\t\tremoved\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shift();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.shift();>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeFirst",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(0, _count);
  }, ["self", "count"]),
  "{ :self :count |\n\t\t<primitive: return _self.splice(0, _count);>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pop();
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.pop();>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeLast",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(_self.length - _count, _count);
  }, ["self", "count"]),
  "{ :self :count |\n\t\t<primitive: return _self.splice(_self.length - _count, _count);>\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "scalingMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonalMatrix_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.diagonalMatrix\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1;
  }, ["self"]),
  "{ :self |\n\t\tList:/1\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, _storeString_1);
  }, ["self"]),
  "{ :self |\n\t\tself.printString(storeString:/1)\n\t}",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "valueSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_self, _value_1);
  }, ["self"]),
  "{ :self |\n\t\tself.sortOn(value:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "alternatingHarmonicSeries",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _Span_3(1, _n, 1),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(_circumflexAccent_2(-1, _plusSign_2(_n, 1)), _n);
      }, ["n"]),
    );
  }, ["n"]),
  "{ :n |\n\t\t1:n.collect { :n |\n\t\t\tFraction(-1 ^ (n + 1), n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "arithmeticoGeometricSequence",
  ["n", "a", "d", "b", "r"],
  sl.annotateFunction(function (_n, _a, _d, _b, _r) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _n, _a, _d, _b, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _arithmeticProgression_3(_n, _a, _d);
    let _j = _geometricProgression_3(_n, _b, _r);
    /* Statements */
    return _asterisk_2(_i, _j);
  }, ["n", "a", "d", "b", "r"]),
  "{ :n :a :d :b :r |\n\t\tlet i = arithmeticProgression(n, a, d);\n\t\tlet j = geometricProgression(n, b, r);\n\t\ti * j\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "arithmeticProgression",
  ["self", "start", "step"],
  sl.annotateFunction(function (_self, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _to_2(1, _self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(_step, _hyphenMinus_2(_each, 1)),
          _start,
        );
      }, ["each"]),
    );
  }, ["self", "start", "step"]),
  "{ :self :start :step |\n\t\t1.to(self).collect { :each |\n\t\t\t(step * (each - 1)) + start\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "fill",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_self);
    /* Statements */
    _indicesDo_2(
      _answer,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_answer, _index, _aBlock_1(_index));
      }, ["index"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet answer = List(self);\n\t\tanswer.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(index)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "geometricProgression",
  ["self", "start", "grow"],
  sl.annotateFunction(function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _start;
    /* Statements */
    _timesRepeat_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _next = _asterisk_2(_next, _grow);
      }, []),
    );
    return _answer;
  }, ["self", "start", "grow"]),
  "{ :self :start :grow |\n\t\tlet answer = [];\n\t\tlet next = start;\n\t\tself.timesRepeat {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * grow\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "harmonicProgression",
  ["self", "start", "step"],
  sl.annotateFunction(function (_self, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _arithmeticProgression_3(_self, _start, _step));
  }, ["self", "start", "step"]),
  "{ :self :start :step |\n\t\t1 / self.arithmeticProgression(start, step)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "harmonicSeries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(1, _Span_3(1, _self, 1));
  }, ["self"]),
  "{ :self |\n\t\tFraction(1, 1:self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "List",
  ["size"],
  sl.annotateFunction(function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array(Number(_size)).fill(null);
  }, ["size"]),
  "{ :size |\n\t\t<primitive: return Array(Number(_size)).fill(null);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "List",
  ["size", "anObject"],
  sl.annotateFunction(function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    return _answer;
  }, ["size", "anObject"]),
  "{ :size :anObject |\n\t\tlet answer = List(size);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "List",
  "linspace",
  ["x1", "x2", "n"],
  sl.annotateFunction(function (_x1, _x2, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x1, _x2, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_n, 1));
    /* Statements */
    return _nestList_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_x, _step);
      }, ["x"]),
      _x1,
      _hyphenMinus_2(_n, 1),
    );
  }, ["x1", "x2", "n"]),
  "{ :x1 :x2 :n |\n\t\tlet step = (x2 - x1) / (n - 1);\n\t\t{ :x | x + step }.nestList(x1, n - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "List",
  "logspace",
  ["a", "b", "n"],
  sl.annotateFunction(function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _linspace_3(_a, _b, _n));
  }, ["a", "b", "n"]),
  "{ :a :b :n |\n\t\t10 ^ a.linspace(b, n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "List",
  "List",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return [];
  }, []),
  "{\n\t\t<primitive: return [];>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "List",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _plusSign_2(_index, 1);
        return _atPut_3(_answer, _index, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 0;\n\t\tself.do { :each |\n\t\t\tindex := index + 1;\n\t\t\tanswer[index] := each\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "List",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _indicesDo_2(
      _self,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_answer, _index, _at_2(_self, _index));
      }, ["index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := self[index]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "enclose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_self];
  }, ["self"]),
  "{ :self |\n\t\t[self]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "nest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_self),
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
        return [_self];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isList.if {\n\t\t\tself\n\t\t} {\n\t\t\t[self]\n\t\t}\n\t}",
);
