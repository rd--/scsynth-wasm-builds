sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "arrayDepth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_dimensions_1(_self));
  },
  "{ :self | size(dimensions(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "arrayFlatten",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isArray_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL2 = _assertIsOfSize_2(_take_2(_shape_1(_self), 4), 4);
      let _r = _at_2(__SPL2, 1);
      let _c = _at_2(__SPL2, 2);
      let _i = _at_2(__SPL2, 3);
      let _j = _at_2(__SPL2, 4);
      let _n = _asterisk_2(_r, _i);
      let _m = _asterisk_2(_c, _j);
      let _p = 1;
      let _answer = _List_1(_n);
      /* Statements */
      _toDo_3(1, _r, function (_w) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _w";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(1, _i, function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _row = _List_1(_m);
          let _q = 1;
          /* Statements */
          _atPut_3(_answer, _p, _row);
          _p = _plusSign_2(_p, 1);
          return _toDo_3(1, _c, function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(1, _j, function (_z) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _z";
                throw new Error(errorMessage);
              } /* Statements */
              _atPut_3(
                _row,
                _q,
                _at_2(_at_2(_at_2(_at_2(_self, _w), _y), _x), _z),
              );
              return _q = _plusSign_2(_q, 1);
            });
          });
        });
      });
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>arrayFlatten: not array");
    });
  },
  "{ :self | if(isArray(self), { let __SPL2 = assertIsOfSize(take(shape(self),4), 4); let r = at(__SPL2, 1); let c = at(__SPL2, 2); let i = at(__SPL2, 3); let j = at(__SPL2, 4); let n = *(r, i); let m = *(c, j); let p = 1; let answer = List(n); toDo(1, r, { :w | toDo(1, i, { :x | let row = List(m); let q = 1; atPut(answer, p, row); p := +(p, 1); toDo(1, c, { :y | toDo(1, j, { :z | atPut(row, q, at(at(at(at(self, w), y), x), z)); q := +(q, 1) }) }) }) }); answer }, { error(self,'List>>arrayFlatten: not array') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "dimensions",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSign_2(_anInteger, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = [];
      /* Statements */
      _add_2(_answer, _size_1(_self));
      _ifTrue_2(_allSatisfy_2(_self, _isList_1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _size_1(_anyOne_1(_self));
        /* Statements */
        return _ifTrue_2(
          _allSatisfy_2(_self, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_size_1(_each), _k);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(
              _answer,
              _dimensions_2(_anyOne_1(_self), _hyphenMinus_2(_anInteger, 1)),
            );
          },
        );
      });
      return _answer;
    });
  },
  "{ :self :anInteger | if((<(anInteger, 1)), { [] }, { let answer = []; add(answer,size(self)); ifTrue(allSatisfy(self,isList:/1), { let k = size(anyOne(self)); ifTrue(allSatisfy(self, { :each | =(size(each), k) }), { addAll(answer,dimensions(anyOne(self),-(anInteger, 1))) }) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "dimensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dimensions_2(_self, Infinity);
  },
  "{ :self | dimensions(self,Infinity) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _notNil_1(_shapeOrNil_1(_self));
  },
  "{ :self | notNil(shapeOrNil(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isCommensurate",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_shape_1(_self), _shape_1(_other)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_elementType_1(_self), _elementType_1(_other));
      },
    );
  },
  "{ :self :other | &(=(shape(self), shape(other)), { =(elementType(self), elementType(other)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_dimensions_2(_self, 2)), 2);
  },
  "{ :self | =(size(dimensions(self,2)), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isSmallFloatVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_elementType_1(_self), "SmallFloat");
    });
  },
  "{ :self | &(isVector(self), { =(elementType(self), 'SmallFloat') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, _isList_1);
  },
  "{ :self | noneSatisfy(self,isList:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  },
  "{ :self | size(shape(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "ravel",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _flatten_1(_self);
  },
  "{ :self | flatten(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "shapeOrNil",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return [0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _type = _typeOf_1(_self);
      let _elementTypes = _elementTypes_1(_self);
      /* Statements */
      return _if_3(
        _allSatisfy_2(_elementTypes, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_each, _type);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _elementShapes = _collect_2(_self, _shape_1);
          /* Statements */
          return _if_3(
            _equalsSign_2(_size_1(_nub_1(_elementShapes)), 1),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                [_size_1(_self)],
                _first_1(_elementShapes),
              );
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return null;
            },
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_includes_2(_elementTypes, _type), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_size_1(_self)];
          });
        },
      );
    });
  },
  "{ :self | if((=(size(self), 0)), { [0] }, { let type = typeOf(self); let elementTypes = elementTypes(self); if(allSatisfy(elementTypes, { :each | =(each, type) }), { let elementShapes = collect(self,shape:/1); if((=(size(nub(elementShapes)), 1)), { ++([size(self)], first(elementShapes)) }, { nil }) }, { if(includes(elementTypes,type), { nil }, { [size(self)] }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(_shapeOrNil_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "shape: irregular arrays do not have shape");
    }, function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    });
  },
  "{ :self | ifNil(shapeOrNil(self), { error(self,'shape: irregular arrays do not have shape') }, { :answer | answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "zeros",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2([0], _self);
  },
  "{ :self | reshape([0],self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "iota",
  ["shape", "start", "step"],
  function (_shape, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _shape, _start, _step";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _product_1(_shape);
    let _end = _plusSign_2(
      _start,
      _asterisk_2(_hyphenMinus_2(_count, 1), _step),
    );
    /* Statements */
    return _reshape_2(_Range_3(_start, _end, _step), _shape);
  },
  "{ :shape :start :step | let count = product(shape); let end = +(start, (*(-(count, 1), step))); reshape(Range(start, end, step),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "iota",
  ["shape", "start", "step"],
  function (_shape, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _shape, _start, _step";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _product_1(_shape);
    let _end = _plusSign_2(
      _start,
      _asterisk_2(_hyphenMinus_2(_count, 1), _step),
    );
    /* Statements */
    return _reshape_2(_Range_3(_start, _end, _step), _shape);
  },
  "{ :shape :start :step | let count = product(shape); let end = +(start, (*(-(count, 1), step))); reshape(Range(start, end, step),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "iota",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_shape)), _shape);
  },
  "{ :shape | reshape(upOrDownTo(1, product(shape)),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "iota",
  ["shape"],
  function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_shape)), _shape);
  },
  "{ :shape | reshape(upOrDownTo(1, product(shape)),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_shape, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "reshape: empty shape?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _size = _product_1(_shape);
      let _answer = _wrapExtend_2(_flatten_1(_self), _size);
      /* Statements */
      _reverseDo_2(_allButFirst_1(_shape), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _clump_2(_answer, _n);
      });
      return _answer;
    });
  },
  "{ :self :shape | ifEmpty(shape, { error(self,'reshape: empty shape?') }, { let size = product(shape); let answer = wrapExtend(flatten(self),size); reverseDo(allButFirst(shape), { :n | answer := clump(answer,n) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_shape, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "reshape: empty shape?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _size = _product_1(_shape);
      let _answer = _wrapExtend_2(_flatten_1(_self), _size);
      /* Statements */
      _reverseDo_2(_allButFirst_1(_shape), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _clump_2(_answer, _n);
      });
      return _answer;
    });
  },
  "{ :self :shape | ifEmpty(shape, { error(self,'reshape: empty shape?') }, { let size = product(shape); let answer = wrapExtend(flatten(self),size); reverseDo(allButFirst(shape), { :n | answer := clump(answer,n) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(_another, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _atWrap_2(_items, _index);
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _item;
    });
  },
  "{ :self :another | let index = 1; let items = flatten(self); deepCollect(another, { :unusedItem | let item = atWrap(items,index); index := +(index, 1); item }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(_another, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _atWrap_2(_items, _index);
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _item;
    });
  },
  "{ :self :another | let index = 1; let items = flatten(self); deepCollect(another, { :unusedItem | let item = atWrap(items,index); index := +(index, 1); item }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "iota",
  ["count", "start", "step"],
  function (_count, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _count, _start, _step";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _end = _plusSign_2(
      _start,
      _asterisk_2(_hyphenMinus_2(_count, 1), _step),
    );
    /* Statements */
    return _asList_1(_Range_3(_start, _end, _step));
  },
  "{ :count :start :step | let end = +(start, (*(-(count, 1), step))); asList(Range(start, end, step)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "iota",
  ["count"],
  function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_Range_3(1, _count, 1));
  },
  "{ :count | asList(Range(1, count, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Array",
  "arrayReduce",
  ["self:/1", "anArray", "anInteger"],
  function (_self_1, _anArray, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anArray, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_anInteger, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_anArray, _self_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_anInteger, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _columnsCollect_2(_anArray, _self_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Block>>arrayReduce: not implemented");
      });
    });
  },
  "{ :self:/1 :anArray :anInteger | if((=(anInteger, 1)), { collect(anArray,self:/1) }, { if((=(anInteger, 2)), { columnsCollect(anArray,self:/1) }, { error(self,'Block>>arrayReduce: not implemented') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "arrayDepth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self | 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "dimensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  },
  "{ :self | [] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self | 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  },
  "{ :self | [] }",
);
