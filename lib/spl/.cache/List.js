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
  "{ :self :aList | <primitive: _self.unshift(..._aList);\n\t\treturn _aList;>\n }",
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
  "{ :self :aList | <primitive: _self.push(..._aList);\n\t\treturn _aList;>\n }",
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
  "{ :self :anObject | <primitive: _self.unshift(_anObject);\n\t\treturn _anObject;>\n }",
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
  "{ :self :anObject | <primitive: _self.push(_anObject);\n\t\treturn _anObject;>\n }",
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
  "{ :self | self }",
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
  "{ :self :anObject | <primitive: _self.fill(_anObject);\n\t\treturn _anObject;>\n }",
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
  "{ :self | copy(self) }",
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
    return _transposed_1(_partition_3(_self, _n, _n));
  }, ["self", "n"]),
  "{ :self :n | transposed(partition(self,n, n)) }",
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
  "{ :shape :aBlock:/1 | if(isEmpty(shape), { aBlock(0) }, { let answer = iota(shape); shapeIndicesDo(shape, { :index | atPathPut(answer,index, aBlock(index)) }); answer }) }",
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
  "{ :self :aBlock:/2 | let answer = []; do(self, { :x | let i = detectIndex(answer, { :y | aBlock(x, anyOne(y)) }); ifNil(i, { add(answer,[x]) }, { add(at(answer, i),x) }) }); answer }",
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
    return _flatten_1(_irregularTransposition_1(_self));
  }, ["self"]),
  "{ :self | flatten(irregularTransposition(self)) }",
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
  "{ :self | allSatisfy(self,isJson:/1) }",
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
  "{ :self :elementType | =(elementType(self), elementType) }",
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
  "{ :self | allSatisfy(self,isLiteral:/1) }",
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
  "{ :self :level | if((<=(level, 1)), { catenate(self) }, { toAsCollect(1, size(first(self)), species(first(self)), { :index | join(collect(self, { :row | at(row, index) }),-(level, 1)) }) }) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
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
  "{ :self :toString:/1 | format('[%]',[commaSeparated(collect(self,toString:/1))]) }",
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
  "{ :self | printString(self,printString:/1) }",
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
            let __SPL27 = _assertIsOfSize_2(_self, 2);
            let _a = _at_2(__SPL27, 1);
            let _b = _at_2(__SPL27, 2);
            /* Statements */
            return [[
              _hyphenMinus_2(_squared_1(_a), _squared_1(_b)),
              _asterisk_2(_asterisk_2(2, _a), _b),
            ], [
              _asterisk_2(_asterisk_2(2, _a), _b),
              _hyphenMinus_2(_squared_1(_b), _squared_1(_a)),
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
            let __SPL28 = _assertIsOfSize_2(_self, 3);
            let _a = _at_2(__SPL28, 1);
            let _b = _at_2(__SPL28, 2);
            let _c = _at_2(__SPL28, 3);
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
  "{ :self | self := /(self, norm(self)); caseOf(size(self), [->(2, { let __SPL27 = assertIsOfSize(self, 2); let a = at(__SPL27, 1); let b = at(__SPL27, 2); [[-(squared(a), squared(b)), *(*(2, a), b)], [*(*(2, a), b), -(squared(b), squared(a))]] }), ->(3, { let __SPL28 = assertIsOfSize(self, 3); let a = at(__SPL28, 1); let b = at(__SPL28, 2); let c = at(__SPL28, 3); [[-(1, (*(2, squared(a)))), *(*(-2, a), b), *(*(-2, a), c)], [*(*(-2, a), b), -(1, (*(2, squared(b)))), *(*(-2, b), c)], [*(*(-2, a), c), *(*(-2, b), c), -(1, (*(2, squared(c))))]] })], { error('List>>reflectionMatrix: not two or three list') }) }",
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
  "{ :self | <primitive: return _self.splice(0);>\n }",
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
  "{ :self :index | let removed = at(self, index); uncheckedRemoveAt(self,index); removed }",
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
  "{ :self :indices | let removed = atAll(self,indices); do(indices, { :index | uncheckedRemoveAt(self,index) }); removed }",
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
  "{ :self | <primitive: return _self.shift();>\n }",
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
  "{ :self :count | <primitive: return _self.splice(0, _count);>\n }",
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
  "{ :self | <primitive: return _self.pop();>\n }",
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
  "{ :self :count | <primitive: return _self.splice(_self.length - _count, _count);>\n }",
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
  "{ :self | diagonalMatrix(self) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self);>\n }",
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
  "{ :self | List:/1 }",
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
  "{ :self | printString(self,storeString:/1) }",
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
  "{ :n | collect(Span(1, n, 1), { :n | Fraction(^(-1, (+(n, 1))), n) }) }",
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
  "{ :n :a :d :b :r | let i = arithmeticProgression(n, a, d); let j = geometricProgression(n, b, r); *(i, j) }",
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
  "{ :self :start :step | collect(to(1,self), { :each | +((*(step, (-(each, 1)))), start) }) }",
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
  "{ :self :aBlock:/1 | let answer = List(self); indicesDo(answer, { :index | atPut(answer, index, aBlock(index)) }); answer }",
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
  "{ :self :start :grow | let answer = []; let next = start; timesRepeat(self, { add(answer,next); next := *(next, grow) }); answer }",
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
  "{ :self :start :step | /(1, arithmeticProgression(self,start, step)) }",
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
  "{ :self | Fraction(1, Span(1, self, 1)) }",
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
  "{ :size | <primitive: return Array(Number(_size)).fill(null);>\n }",
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
  "{ :size :anObject | let answer = List(size); atAllPut(answer,anObject); answer }",
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
  "{ :x1 :x2 :n | let step = /((-(x2, x1)), (-(n, 1))); nestList({ :x | +(x, step) },x1, -(n, 1)) }",
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
  "{ :a :b :n | ^(10, linspace(a,b, n)) }",
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
  "{ <primitive: return [];>\n }",
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
  "{ :self | let answer = List(size(self)); let index = 0; do(self, { :each | index := +(index, 1); atPut(answer, index, each) }); answer }",
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
  "{ :self | let answer = List(size(self)); indicesDo(self, { :index | atPut(answer, index, at(self, index)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "exclamationMark",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateInteger_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | duplicateInteger(self,anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "numberSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicateInteger_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | replicateInteger(self,anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "duplicateInteger",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(
      _anInteger,
      sl.annotateFunction(function (_unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      }, ["unusedIndex"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | fill(anInteger, { :unusedIndex | value(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "duplicateShape",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(
      _shape,
      sl.annotateFunction(function (_unusedIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      }, ["unusedIndex"]),
    );
  }, ["self", "shape"]),
  "{ :self :shape | fill(shape, { :unusedIndex | value(self) }) }",
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
  "{ :self | [self] }",
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
  "{ :self | if(isList(self), { self }, { [self] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "replicateInteger",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fill_2(_anInteger, _constant_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Object>>replicateInteger: not integer");
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | if(isInteger(anInteger), { fill(anInteger,constant(self)) }, { error(self,'@Object>>replicateInteger: not integer') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "replicateShape",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_aSequence),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _fill_2(_aSequence, _constant_1(_self));
      }, []),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence | if(isEmpty(aSequence), { value(self) }, { fill(aSequence,constant(self)) }) }",
);
