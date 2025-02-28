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
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.unshift(..._aList);
    return _aList;
  },
  "{ :self :aList | <primitive: _self.unshift(..._aList);\n\t\treturn _aList;>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addListLast",
  ["self", "aList"],
  function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.push(..._aList);
    return _aList;
  },
  "{ :self :aList | <primitive: _self.push(..._aList);\n\t\treturn _aList;>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addFirst",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.unshift(_anObject);
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.unshift(_anObject);\n\t\treturn _anObject;>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "addLast",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.push(_anObject);
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.push(_anObject);\n\t\treturn _anObject;>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "asList",
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
  "List",
  "List",
  "atAllPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.fill(_anObject);
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.fill(_anObject);\n\t\treturn _anObject;>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "fill",
  ["shape", "aBlock:/1"],
  function (_shape, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _shape, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_shape), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _iota_1(_shape);
      /* Statements */
      _shapeIndicesDo_2(_shape, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPathPut_3(_answer, _index, _aBlock_1(_index));
      });
      return _answer;
    });
  },
  "{ :shape :aBlock:/1 | if(isEmpty(shape), { aBlock(0) }, { let answer = iota(shape); shapeIndicesDo(shape, { :index | atPathPut(answer,index, aBlock(index)) }); answer }) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isAssociationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isAssociation_1);
  },
  "{ :self | allSatisfy(self,isAssociation:/1) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isJson_1);
  },
  "{ :self | allSatisfy(self,isJson:/1) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isLiteral_1);
  },
  "{ :self | allSatisfy(self,isLiteral:/1) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "join",
  ["self", "separator"],
  function (_self, _separator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _separator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _separatorType = _typeOf_1(_separator);
    /* Statements */
    return _if_3(
      _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_typeOf_1(_each), _separatorType);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOfOtherwise_3(_separatorType, [
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "List";
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _concatenationSeparatedBy_2(_self, _separator);
          }),
          _hyphenMinusGreaterThanSign_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "String";
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _basicStringJoin_2(_self, _separator);
          }),
        ], function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
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
  "{ :self :separator | let separatorType = typeOf(separator); if(allSatisfy(self, { :each | =(typeOf(each), separatorType) }), { caseOfOtherwise(separatorType, [->({ 'List' }, { concatenationSeparatedBy(self,separator) }), ->({ 'String' }, { basicStringJoin(self,separator) })], { error(self,++('List>>join: element type not List or String: ', elementType)) }) }, { error(self,++('List>>join: heterogenous list: ', elementTypes(self))) }) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "printString",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2("[", _join_2(_collect_2(_self, _toString_1), ", ")),
      "]",
    );
  },
  "{ :self :toString:/1 | ++(++('[', join(collect(self,toString:/1),', ')), ']') }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, _printString_1);
  },
  "{ :self | printString(self,printString:/1) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "reflectionMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _self = _solidus_2(_self, _norm_1(_self));
    return _caseOfOtherwise_3(_size_1(_self), [
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
        } /* Temporaries */
        let __SPL1 = _assertIsOfSize_2(_self, 2);
        let _a = _at_2(__SPL1, 1);
        let _b = _at_2(__SPL1, 2);
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
          throw new Error(errorMessage);
        } /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL2 = _assertIsOfSize_2(_self, 3);
        let _a = _at_2(__SPL2, 1);
        let _b = _at_2(__SPL2, 2);
        let _c = _at_2(__SPL2, 3);
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
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("List>>reflectionMatrix: not two or three list");
    });
  },
  "{ :self | self := /(self, norm(self)); caseOfOtherwise(size(self), [->({ 2 }, { let __SPL1 = assertIsOfSize(self, 2); let a = at(__SPL1, 1); let b = at(__SPL1, 2); [[-(squared(a), squared(b)), *(*(2, a), b)], [*(*(2, a), b), -(squared(b), squared(a))]] }), ->({ 3 }, { let __SPL2 = assertIsOfSize(self, 3); let a = at(__SPL2, 1); let b = at(__SPL2, 2); let c = at(__SPL2, 3); [[-(1, (*(2, squared(a)))), *(*(-2, a), b), *(*(-2, a), c)], [*(*(-2, a), b), -(1, (*(2, squared(b)))), *(*(-2, b), c)], [*(*(-2, a), c), *(*(-2, b), c), -(1, (*(2, squared(c))))]] })], { error('List>>reflectionMatrix: not two or three list') }) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(0);
  },
  "{ :self | <primitive: return _self.splice(0);>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _at_2(_self, _index);
    /* Statements */
    _basicRemoveAt_2(_self, _index);
    return _removed;
  },
  "{ :self :index | let removed = at(self, index); basicRemoveAt(self,index); removed }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeAtAll",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removed = _atAll_2(_self, _indices);
    /* Statements */
    _do_2(_indices, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _basicRemoveAt_2(_self, _index);
    });
    return _removed;
  },
  "{ :self :indices | let removed = atAll(self,indices); do(indices, { :index | basicRemoveAt(self,index) }); removed }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shift();
  },
  "{ :self | <primitive: return _self.shift();>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeFirst",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(0, _count);
  },
  "{ :self :count | <primitive: return _self.splice(0, _count);>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pop();
  },
  "{ :self | <primitive: return _self.pop();>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "removeLast",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.splice(_self.length - _count, _count);
  },
  "{ :self :count | <primitive: return _self.splice(_self.length - _count, _count);>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "scalingMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diagonalMatrix_1(_self);
  },
  "{ :self | diagonalMatrix(self) }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  },
  "{ :self | <primitive: return Array.from(_self);>\n }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1;
  },
  "{ :self | List:/1 }",
);

sl.addMethodToExistingType(
  "List",
  "List",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_2(_self, _storeString_1);
  },
  "{ :self | printString(self,storeString:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "arithmeticSeries",
  ["self", "start", "step"],
  function (_self, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_to_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_asterisk_2(_step, _hyphenMinus_2(_each, 1)), _start);
    });
  },
  "{ :self :start :step | collect(to(1,self), { :each | +((*(step, (-(each, 1)))), start) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "fill",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_self);
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_answer, _index, _aBlock_1(_index));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = List(self); indicesDo(answer, { :index | atPut(answer, index, aBlock(index)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "geometricSeries",
  ["self", "start", "grow"],
  function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _start;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _next);
      return _next = _asterisk_2(_next, _grow);
    });
    return _answer;
  },
  "{ :self :start :grow | let answer = []; let next = start; timesRepeat(self, { add(answer,next); next := *(next, grow) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "List",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array(Number(_size)).fill(null);
  },
  "{ :size | <primitive: return Array(Number(_size)).fill(null);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "List",
  "List",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    return _answer;
  },
  "{ :size :anObject | let answer = List(size); atAllPut(answer,anObject); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "List",
  "linspace",
  ["x1", "x2", "n"],
  function (_x1, _x2, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x1, _x2, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_n, 1));
    /* Statements */
    return _nestList_3(
      function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_x, _step);
      },
      _x1,
      _hyphenMinus_2(_n, 1),
    );
  },
  "{ :x1 :x2 :n | let step = /((-(x2, x1)), (-(n, 1))); nestList({ :x | +(x, step) },x1, -(n, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "List",
  "logspace",
  ["a", "b", "n"],
  function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _linspace_3(_a, _b, _n));
  },
  "{ :a :b :n | ^(10, linspace(a,b, n)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "List",
  "List",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return [];
  },
  "{ <primitive: return [];>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "List",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _index = _plusSign_2(_index, 1);
      return _atPut_3(_answer, _index, _each);
    });
    return _answer;
  },
  "{ :self | let answer = List(size(self)); let index = 0; do(self, { :each | index := +(index, 1); atPut(answer, index, each) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "List",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_answer, _index, _at_2(_self, _index));
    });
    return _answer;
  },
  "{ :self | let answer = List(size(self)); indicesDo(self, { :index | atPut(answer, index, at(self, index)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "exclamationMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _duplicateInteger_2(_self, _anObject);
  },
  "{ :self :anObject | duplicateInteger(self,anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "numberSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicateInteger_2(_self, _anObject);
  },
  "{ :self :anObject | replicateInteger(self,anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "duplicateInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(_anInteger, function (_unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self :anInteger | fill(anInteger, { :unusedIndex | value(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "duplicateShape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _fill_2(_shape, function (_unusedIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    });
  },
  "{ :self :shape | fill(shape, { :unusedIndex | value(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "enclose",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return [_self];
  },
  "{ :self | <primitive: return [_self];>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "nest",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSequence_1(_self), function () {
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
      return [_self];
    });
  },
  "{ :self | if(isSequence(self), { self }, { [self] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "replicateInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _fill_2(_anInteger, _constant_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Object>>replicateInteger: not integer");
    });
  },
  "{ :self :anInteger | if(isInteger(anInteger), { fill(anInteger,constant(self)) }, { error(self,'@Object>>replicateInteger: not integer') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "List",
  "replicateShape",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isEmpty_1(_aSequence), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _fill_2(_aSequence, _constant_1(_self));
    });
  },
  "{ :self :aSequence | if(isEmpty(aSequence), { value(self) }, { fill(aSequence,constant(self)) }) }",
);
