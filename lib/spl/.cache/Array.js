sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "arrayDepth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_dimensions_1(_self));
  }, ["self"]),
  "{ :self | size(dimensions(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "arrayFlatten",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isArray_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL3 = _assertIsOfSize_2(_take_2(_shape_1(_self), 4), 4);
        let _r = _at_2(__SPL3, 1);
        let _c = _at_2(__SPL3, 2);
        let _i = _at_2(__SPL3, 3);
        let _j = _at_2(__SPL3, 4);
        let _n = _asterisk_2(_r, _i);
        let _m = _asterisk_2(_c, _j);
        let _p = 1;
        let _answer = _List_1(_n);
        /* Statements */
        _toDo_3(
          1,
          _r,
          sl.annotateFunction(function (_w) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _w";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _i,
              sl.annotateFunction(function (_x) {
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
                return _toDo_3(
                  1,
                  _c,
                  sl.annotateFunction(function (_y) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _y";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _toDo_3(
                      1,
                      _j,
                      sl.annotateFunction(function (_z) {
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
                      }, ["z"]),
                    );
                  }, ["y"]),
                );
              }, ["x"]),
            );
          }, ["w"]),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>arrayFlatten: not array");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isArray(self), { let __SPL3 = assertIsOfSize(take(shape(self),4), 4); let r = at(__SPL3, 1); let c = at(__SPL3, 2); let i = at(__SPL3, 3); let j = at(__SPL3, 4); let n = *(r, i); let m = *(c, j); let p = 1; let answer = List(n); toDo(1, r, { :w | toDo(1, i, { :x | let row = List(m); let q = 1; atPut(answer, p, row); p := +(p, 1); toDo(1, c, { :y | toDo(1, j, { :z | atPut(row, q, at(at(at(at(self, w), y), x), z)); q := +(q, 1) }) }) }) }); answer }, { error(self,'List>>arrayFlatten: not array') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "arrayPad",
  ["self", "z", "o"],
  sl.annotateFunction(function (_self, _z, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _z, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL4 = _assertIsOfSize_2(_z, 2);
        let _m = _at_2(__SPL4, 1);
        let _n = _at_2(__SPL4, 2);
        let _k = _size_1(_self);
        /* Statements */
        return _collect_2(
          _upOrDownTo_2(1, _plusSign_2(_k, _sum_1(_z))),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _hyphenMinus_2(_i, _m);
            /* Statements */
            return _if_3(
              _betweenAnd_3(_d, 1, _k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_self, _d);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _o;
              }, []),
            );
          }, ["i"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL5 = _assertIsOfSize_2(_z, 2);
            let _m = _at_2(__SPL5, 1);
            let _n = _at_2(__SPL5, 2);
            let __SPL6 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _a = _at_2(__SPL6, 1);
            let _b = _at_2(__SPL6, 2);
            let _p = _plusSign_2(_sum_1(_m), _a);
            let _q = _plusSign_2(_sum_1(_n), _b);
            /* Statements */
            return _table_3(
              sl.annotateFunction(function (_i, _j) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _i, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _d = _hyphenMinus_2(_i, _at_2(_m, 1));
                let _e = _hyphenMinus_2(_j, _at_2(_n, 1));
                /* Statements */
                return _if_3(
                  _ampersand_2(
                    _betweenAnd_3(_d, 1, _a),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _betweenAnd_3(_e, 1, _b);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _at_2(_at_2(_self, _d), _e);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _o;
                  }, []),
                );
              }, ["i", "j"]),
              _Span_3(1, _p, 1),
              _Span_3(1, _q, 1),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "arrayPad");
          }, []),
        );
      }, []),
    );
  }, ["self", "z", "o"]),
  "{ :self :z :o | if(isVector(self), { let __SPL4 = assertIsOfSize(z, 2); let m = at(__SPL4, 1); let n = at(__SPL4, 2); let k = size(self); collect(upOrDownTo(1, +(k, sum(z))), { :i | let d = -(i, m); if(betweenAnd(d,1, k), { at(self, d) }, { o }) }) }, { if(isMatrix(self), { let __SPL5 = assertIsOfSize(z, 2); let m = at(__SPL5, 1); let n = at(__SPL5, 2); let __SPL6 = assertIsOfSize(shape(self), 2); let a = at(__SPL6, 1); let b = at(__SPL6, 2); let p = +(sum(m), a); let q = +(sum(n), b); table({ :i :j | let d = -(i, at(m, 1)); let e = -(j, at(n, 1)); if((&(betweenAnd(d,1, a), { betweenAnd(e,1, b) })), { at(at(self, d), e) }, { o }) },Span(1, p, 1), Span(1, q, 1)) }, { error(self,'arrayPad') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "coordinateBoundingBoxArray",
  ["bounds", "steps", "offset"],
  sl.annotateFunction(function (_bounds, _steps, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _bounds, _steps, _offset";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL7 = _assertIsOfSize_2(_shape_1(_bounds), 2);
    let _m = _at_2(__SPL7, 1);
    let _n = _at_2(__SPL7, 2);
    /* Statements */
    return _coordinateBoundsArray_3(_transpose_1(_bounds), _steps, _offset);
  }, ["bounds", "steps", "offset"]),
  "{ :bounds :steps :offset | let __SPL7 = assertIsOfSize(shape(bounds), 2); let m = at(__SPL7, 1); let n = at(__SPL7, 2); coordinateBoundsArray(transpose(bounds),steps, offset) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "coordinateBoundingBoxArray",
  ["bounds", "steps"],
  sl.annotateFunction(function (_bounds, _steps) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _bounds, _steps";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBoxArray_3(_bounds, _steps, [0]);
  }, ["bounds", "steps"]),
  "{ :bounds :steps | coordinateBoundingBoxArray(bounds,steps, [0]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "coordinateBoundsArray",
  ["rangeList", "stepList", "offset"],
  sl.annotateFunction(function (_rangeList, _stepList, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rangeList, _stepList, _offset";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuplesArray_1(
      _withCollect_3(
        _each_1(_plusSign_2)(_rangeList, _offset),
        _stepList,
        sl.annotateFunction(function (_range, _step) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _range, _step";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL8 = _assertIsOfSize_2(_range, 2);
          let _l = _at_2(__SPL8, 1);
          let _r = _at_2(__SPL8, 2);
          /* Statements */
          return _asList_1(_thenTo_3(_l, _plusSign_2(_l, _step), _r));
        }, ["range", "step"]),
      ),
    );
  }, ["rangeList", "stepList", "offset"]),
  "{ :rangeList :stepList :offset | tuplesArray(withCollect(((each(+) . (rangeList, offset))), stepList, { :range :step | let __SPL8 = assertIsOfSize(range, 2); let l = at(__SPL8, 1); let r = at(__SPL8, 2); asList(thenTo(l, +(l, step), r)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "coordinateBoundsArray",
  ["rangeList", "stepList"],
  sl.annotateFunction(function (_rangeList, _stepList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _rangeList, _stepList";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundsArray_3(_rangeList, _stepList, [0]);
  }, ["rangeList", "stepList"]),
  "{ :rangeList :stepList | coordinateBoundsArray(rangeList, stepList, [0]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "coordinateBoundsList",
  ["rangeList", "stepList", "offset"],
  sl.annotateFunction(function (_rangeList, _stepList, _offset) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rangeList, _stepList, _offset";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuples_1(
      _withCollect_3(
        _each_1(_plusSign_2)(_rangeList, _offset),
        _stepList,
        sl.annotateFunction(function (_range, _step) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _range, _step";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL9 = _assertIsOfSize_2(_range, 2);
          let _l = _at_2(__SPL9, 1);
          let _r = _at_2(__SPL9, 2);
          /* Statements */
          return _asList_1(_thenTo_3(_l, _plusSign_2(_l, _step), _r));
        }, ["range", "step"]),
      ),
    );
  }, ["rangeList", "stepList", "offset"]),
  "{ :rangeList :stepList :offset | tuples(withCollect(((each(+) . (rangeList, offset))), stepList, { :range :step | let __SPL9 = assertIsOfSize(range, 2); let l = at(__SPL9, 1); let r = at(__SPL9, 2); asList(thenTo(l, +(l, step), r)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "dimensions",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_anInteger, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _add_2(_answer, _size_1(_self));
        _ifTrue_2(
          _ampersand_2(
            _notEmpty_1(_self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _allSatisfy_2(_self, _isSequenceable_1);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _k = _size_1(_anyOne_1(_self));
            /* Statements */
            return _ifTrue_2(
              _allSatisfy_2(
                _self,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_size_1(_each), _k);
                }, ["each"]),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _addAll_2(
                  _answer,
                  _dimensions_2(
                    _anyOne_1(_self),
                    _hyphenMinus_2(_anInteger, 1),
                  ),
                );
              }, []),
            );
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | if((<(anInteger, 1)), { [] }, { let answer = []; add(answer,size(self)); ifTrue((&(notEmpty(self), { allSatisfy(self,isSequenceable:/1) })), { let k = size(anyOne(self)); ifTrue(allSatisfy(self, { :each | =(size(each), k) }), { addAll(answer,dimensions(anyOne(self),-(anInteger, 1))) }) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "dimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dimensions_2(_self, Infinity);
  }, ["self"]),
  "{ :self | dimensions(self,Infinity) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "flipLeftRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reverse_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_self, _reverse_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_self, _flipLeftRight_1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { reverse(self) }, { if(isMatrix(self), { collect(self,reverse:/1) }, { collect(self,flipLeftRight:/1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "impliedShape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
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
        } /* Temporaries */
        let _answer = [_size_1(_self)];
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_depth_1(_self), 2),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _max_1(
                _collect_2(
                  _level_2(_self, [_i]),
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _size_1(_nest_1(_each));
                  }, ["each"]),
                ),
              ),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { self }, { let answer = [size(self)]; toDo(1, -(depth(self), 2), { :i | add(answer,max(collect(level(self,[i]), { :each | size(nest(each)) }))) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _notNil_1(_shapeOrNil_1(_self));
  }, ["self"]),
  "{ :self | notNil(shapeOrNil(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isArray",
  ["self", "depth"],
  sl.annotateFunction(function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rho = _shapeOrNil_1(_self);
    /* Statements */
    return _ampersand_2(
      _notNil_1(_rho),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_rho), _depth);
      }, []),
    );
  }, ["self", "depth"]),
  "{ :self :depth | let rho = shapeOrNil(self); &(notNil(rho), { =(size(rho), depth) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isCommensurate",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_shape_1(_self), _shape_1(_other)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_elementType_1(_self), _elementType_1(_other));
      }, []),
    );
  }, ["self", "other"]),
  "{ :self :other | &(=(shape(self), shape(other)), { =(elementType(self), elementType(other)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_arrayDepth_1(_self), 2);
  }, ["self"]),
  "{ :self | =(arrayDepth(self), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isSmallFloatMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_arrayDepth_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _deepAllSatisfy_2(_self, _isSmallFloat_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(=(arrayDepth(self), 2), { deepAllSatisfy(self,isSmallFloat:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isSmallFloatVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _isSmallFloat_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,isSmallFloat:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, _isList_1);
  }, ["self"]),
  "{ :self | noneSatisfy(self,isList:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isVector",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _not_1(_isList_1(_each)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | allSatisfy(self, { :each | &(not(isList(each)), { aBlock(each) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "padLeft",
  ["self", "aList", "anObject"],
  sl.annotateFunction(function (_self, _aList, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aList, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _padRight_3(_self, _negate_1(_aList), _anObject);
  }, ["self", "aList", "anObject"]),
  "{ :self :aList :anObject | padRight(self,negate(aList), anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "padLeft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padLeft_3(_self, _impliedShape_1(_self), 0);
  }, ["self"]),
  "{ :self | padLeft(self,impliedShape(self), 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "padRight",
  ["self", "shape", "anObject"],
  sl.annotateFunction(function (_self, _shape, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _affix = _numberSign_2(
      _anObject,
      _hyphenMinus_2(_abs_1(_at_2(_shape, 1)), _size_1(_self)),
    );
    let _next = _if_3(
      _isNegative_1(_at_2(_shape, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_affix, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_self, _affix);
      }, []),
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_shape), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _next;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextShape = _allButFirst_1(_shape);
        /* Statements */
        return _collect_2(
          _next,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _padRight_3(_nest_1(_each), _nextShape, _anObject);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "shape", "anObject"]),
  "{ :self :shape :anObject | let affix = #(anObject, (-(abs(at(shape, 1)), size(self)))); let next = if(isNegative(at(shape, 1)), { ++(affix, self) }, { ++(self, affix) }); if((=(size(shape), 1)), { next }, { let nextShape = allButFirst(shape); collect(next, { :each | padRight(nest(each), nextShape, anObject) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "padRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _padRight_3(_self, _impliedShape_1(_self), 0);
  }, ["self"]),
  "{ :self | padRight(self,impliedShape(self), 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "rank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  }, ["self"]),
  "{ :self | size(shape(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "rankUnchecked",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isEmpty_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _not_1(_isList_1(_at_2(_self, 1)));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(1, _rankUnchecked_1(_at_2(_self, 1)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if((|(isEmpty(self), { not(isList(at(self, 1))) })), { 1 }, { +(1, rankUnchecked(at(self, 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "ravel",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _flatten_1(_self);
  }, ["self"]),
  "{ :self | flatten(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "recycle",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _collect_2(
      _to_2(1, _at_2(_shape, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_self, _i);
      }, ["i"]),
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_shape), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _next;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextShape = _allButFirst_1(_shape);
        /* Statements */
        return _collect_2(
          _next,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _recycle_2(_nest_1(_each), _nextShape);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "shape"]),
  "{ :self :shape | let next = collect(to(1,at(shape, 1)), { :i | atWrap(self,i) }); if((=(size(shape), 1)), { next }, { let nextShape = allButFirst(shape); collect(next, { :each | recycle(nest(each), nextShape) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "recycle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _recycle_2(_self, _impliedShape_1(_self));
  }, ["self"]),
  "{ :self | recycle(self,impliedShape(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "replaceSubarray",
  ["self", "indices", "subarray"],
  sl.annotateFunction(function (_self, _indices, _subarray) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _subarray";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shape = _shape_1(_subarray);
    /* Statements */
    return _if_3(
      _equalsSign_2(_shape, _collect_2(_indices, _size_1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _tuples_1(_indices);
        let _j = _tuples_1(
          _collect_2(
            _shape,
            sl.annotateFunction(function (_n) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _n";
                throw new Error(errorMessage);
              } /* Statements */
              return _asList_1(_upOrDownTo_2(1, _n));
            }, ["n"]),
          ),
        );
        /* Statements */
        return _withDo_3(
          _i,
          _j,
          sl.annotateFunction(function (_p, _q) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _p, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPathPut_3(_self, _p, _atPath_2(_subarray, _q));
          }, ["p", "q"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>replaceSubarray: index mismatch");
      }, []),
    );
  }, ["self", "indices", "subarray"]),
  "{ :self :indices :subarray | let shape = shape(subarray); if((=(shape, collect(indices,size:/1))), { let i = tuples(indices); let j = tuples(collect(shape, { :n | asList(upOrDownTo(1, n)) })); withDo(i, j, { :p :q | atPathPut(self,p, atPath(subarray,q)) }) }, { error(self,'List>>replaceSubarray: index mismatch') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "reshapeList",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    _reverseDo_2(
      _allButFirst_1(_shape),
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _self = _clump_2(_self, _n);
      }, ["n"]),
    );
    return _self;
  }, ["self", "shape"]),
  "{ :self :shape | reverseDo(allButFirst(shape), { :n | self := clump(self,n) }); self }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "shapeOrNil",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _type = _typeOf_1(_self);
        let _elementTypes = _elementTypes_1(_self);
        /* Statements */
        return _if_3(
          _allSatisfy_2(
            _elementTypes,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_each, _type);
            }, ["each"]),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _elementShapes = _collect_2(_self, _shape_1);
            /* Statements */
            return _if_3(
              _equalsSign_2(_size_1(_nub_1(_elementShapes)), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _plusSignPlusSign_2(
                  [_size_1(_self)],
                  _first_1(_elementShapes),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return null;
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
              _includes_2(_elementTypes, _type),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return null;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return [_size_1(_self)];
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(size(self), 0)), { [0] }, { let type = typeOf(self); let elementTypes = elementTypes(self); if(allSatisfy(elementTypes, { :each | =(each, type) }), { let elementShapes = collect(self,shape:/1); if((=(size(nub(elementShapes)), 1)), { ++([size(self)], first(elementShapes)) }, { nil }) }, { if(includes(elementTypes,type), { nil }, { [size(self)] }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _shapeOrNil_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "shape: irregular arrays do not have shape");
      }, []),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, ["answer"]),
    );
  }, ["self"]),
  "{ :self | ifNil(shapeOrNil(self), { error(self,'shape: irregular arrays do not have shape') }, { :answer | answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "shapeUnchecked",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _leftmost = _at_2(_self, 1);
        /* Statements */
        return _if_3(
          _isList_1(_leftmost),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSignPlusSign_2(
              [_size_1(_self)],
              _shapeUnchecked_1(_leftmost),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_size_1(_self)];
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isEmpty(self), { [0] }, { let leftmost = at(self, 1); if(isList(leftmost), { ++([size(self)], shapeUnchecked(leftmost)) }, { [size(self)] }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "subarray",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_indices);
    let _i = _at_2(_indices, 1);
    let _a = _atAll_2(_self, _i);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _allButFirst_1(_indices);
        /* Statements */
        return _collect_2(
          _a,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _subarray_2(_each, _j);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "indices"]),
  "{ :self :indices | let k = size(indices); let i = at(indices, 1); let a = atAll(self,i); if((=(k, 1)), { a }, { let j = allButFirst(indices); collect(a, { :each | subarray(each,j) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "zeros",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2([0], _self);
  }, ["self"]),
  "{ :self | reshape([0],self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "iota",
  ["shape", "start", "step"],
  sl.annotateFunction(function (_shape, _start, _step) {
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
  }, ["shape", "start", "step"]),
  "{ :shape :start :step | let count = product(shape); let end = +(start, (*(-(count, 1), step))); reshape(Range(start, end, step),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "iota",
  ["shape", "start", "step"],
  sl.annotateFunction(function (_shape, _start, _step) {
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
  }, ["shape", "start", "step"]),
  "{ :shape :start :step | let count = product(shape); let end = +(start, (*(-(count, 1), step))); reshape(Range(start, end, step),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "iota",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_shape)), _shape);
  }, ["shape"]),
  "{ :shape | reshape(upOrDownTo(1, product(shape)),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "iota",
  ["shape"],
  sl.annotateFunction(function (_shape) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2(_upOrDownTo_2(1, _product_1(_shape)), _shape);
  }, ["shape"]),
  "{ :shape | reshape(upOrDownTo(1, product(shape)),shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isVectorOf",
  ["self", "elementType"],
  sl.annotateFunction(function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_elementType_1(_self), _elementType);
      }, []),
    );
  }, ["self", "elementType"]),
  "{ :self :elementType | &(isVector(self), { =(elementType(self), elementType) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "isVectorOf",
  ["self", "elementType"],
  sl.annotateFunction(function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_elementType_1(_self), _elementType);
      }, []),
    );
  }, ["self", "elementType"]),
  "{ :self :elementType | &(isVector(self), { =(elementType(self), elementType) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "reshape",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _shape,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "reshape: empty shape?");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reshapeList_2(
          _wrapExtend_2(_flatten_1(_self), _product_1(_shape)),
          _shape,
        );
      }, []),
    );
  }, ["self", "shape"]),
  "{ :self :shape | ifEmpty(shape, { error(self,'reshape: empty shape?') }, { reshapeList(wrapExtend(flatten(self),product(shape)),shape) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "reshape",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _shape,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "reshape: empty shape?");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reshapeList_2(
          _wrapExtend_2(_flatten_1(_self), _product_1(_shape)),
          _shape,
        );
      }, []),
    );
  }, ["self", "shape"]),
  "{ :self :shape | ifEmpty(shape, { error(self,'reshape: empty shape?') }, { reshapeList(wrapExtend(flatten(self),product(shape)),shape) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "reshapeLike",
  ["self", "another"],
  sl.annotateFunction(function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(
      _another,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _atWrap_2(_items, _index);
        /* Statements */
        _index = _plusSign_2(_index, 1);
        return _item;
      }, ["unusedItem"]),
    );
  }, ["self", "another"]),
  "{ :self :another | let index = 1; let items = flatten(self); deepCollect(another, { :unusedItem | let item = atWrap(items,index); index := +(index, 1); item }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "reshapeLike",
  ["self", "another"],
  sl.annotateFunction(function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(
      _another,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _atWrap_2(_items, _index);
        /* Statements */
        _index = _plusSign_2(_index, 1);
        return _item;
      }, ["unusedItem"]),
    );
  }, ["self", "another"]),
  "{ :self :another | let index = 1; let items = flatten(self); deepCollect(another, { :unusedItem | let item = atWrap(items,index); index := +(index, 1); item }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "iota",
  ["count", "start", "step"],
  sl.annotateFunction(function (_count, _start, _step) {
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
  }, ["count", "start", "step"]),
  "{ :count :start :step | let end = +(start, (*(-(count, 1), step))); asList(Range(start, end, step)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "iota",
  ["count"],
  sl.annotateFunction(function (_count) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_Range_3(1, _count, 1));
  }, ["count"]),
  "{ :count | asList(Range(1, count, 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "mooreNeighborhood",
  ["dimensions", "range"],
  sl.annotateFunction(function (_dimensions, _range) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _dimensions, _range";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _plusSign_2(_asterisk_2(_range, 2), 1);
    let _length = _hyphenMinus_2(_circumflexAccent_2(_size, _dimensions), 1);
    let _neighbors = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_length, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _neighbor = _List_1(_dimensions);
        let _index = _if_3(
          _lessThanSign_2(_i, _solidus_2(_length, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_i, 1);
          }, []),
        );
        /* Statements */
        _add_2(_neighbors, _neighbor);
        return _toDo_3(
          1,
          _dimensions,
          sl.annotateFunction(function (_d) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _d";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _value = _percentSign_2(_index, _circumflexAccent_2(_size, _d));
            /* Statements */
            _atPut_3(
              _neighbor,
              _d,
              _hyphenMinus_2(
                _solidus_2(
                  _value,
                  _circumflexAccent_2(_size, _hyphenMinus_2(_d, 1)),
                ),
                _range,
              ),
            );
            return _index = _hyphenMinus_2(_index, _value);
          }, ["d"]),
        );
      }, ["i"]),
    );
    return _neighbors;
  }, ["dimensions", "range"]),
  "{ :dimensions :range | let size = +(*(range, 2), 1); let length = -((^(size, dimensions)), 1); let neighbors = []; toDo(0, -(length, 1), { :i | let neighbor = List(dimensions); let index = if((<(i, (/(length, 2)))), { i }, { +(i, 1) }); add(neighbors,neighbor); toDo(1, dimensions, { :d | let value = %(index, (^(size, d))); atPut(neighbor, d, -(/(value, (^(size, (-(d, 1))))), range)); index := -(index, value) }) }); neighbors }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Array",
  "vonNeumannNeighborhood",
  ["dimensions", "range"],
  sl.annotateFunction(function (_dimensions, _range) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _dimensions, _range";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _plusSign_2(_asterisk_2(_range, 2), 1);
    let _iterations = _circumflexAccent_2(_size, _dimensions);
    let _center = _solidus_2(_hyphenMinus_2(_iterations, 1), 2);
    let _neighbors = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_iterations, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_i, _center),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _neighbor = _List_1(_dimensions);
            let _distance = 0;
            let _remaining = _i;
            /* Statements */
            _toDo_3(
              0,
              _hyphenMinus_2(_dimensions, 1),
              sl.annotateFunction(function (_d) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _d";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _remainder = _percentSign_2(
                  _remaining,
                  _circumflexAccent_2(_size, _plusSign_2(_d, 1)),
                );
                let _value = _hyphenMinus_2(
                  _solidus_2(_remainder, _circumflexAccent_2(_size, _d)),
                  _range,
                );
                /* Statements */
                _atPut_3(_neighbor, _plusSign_2(_d, 1), _value);
                _distance = _plusSign_2(_distance, _abs_1(_value));
                return _remaining = _hyphenMinus_2(_remaining, _remainder);
              }, ["d"]),
            );
            return _ifTrue_2(
              _lessThanSignEqualsSign_2(_distance, _range),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_neighbors, _neighbor);
              }, []),
            );
          }, []),
        );
      }, ["i"]),
    );
    return _neighbors;
  }, ["dimensions", "range"]),
  "{ :dimensions :range | let size = +(*(range, 2), 1); let iterations = ^(size, dimensions); let center = /((-(iterations, 1)), 2); let neighbors = []; toDo(0, -(iterations, 1), { :i | ifFalse((=(i, center)), { let neighbor = List(dimensions); let distance = 0; let remaining = i; toDo(0, -(dimensions, 1), { :d | let remainder = %(remaining, (^(size, (+(d, 1))))); let value = -(/(remainder, (^(size, d))), range); atPut(neighbor, +(d, 1), value); distance := +(distance, abs(value)); remaining := -(remaining, remainder) }); ifTrue((<=(distance, range)), { add(neighbors,neighbor) }) }) }); neighbors }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Array",
  "arrayReduce",
  ["self:/1", "anArray", "anInteger"],
  sl.annotateFunction(function (_self_1, _anArray, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _anArray, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_anInteger, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_anArray, _self_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_anInteger, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _columnsCollect_2(_anArray, _self_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "Block>>arrayReduce: not implemented");
          }, []),
        );
      }, []),
    );
  }, ["self:/1", "anArray", "anInteger"]),
  "{ :self:/1 :anArray :anInteger | if((=(anInteger, 1)), { collect(anArray,self:/1) }, { if((=(anInteger, 2)), { columnsCollect(anArray,self:/1) }, { error(self,'Block>>arrayReduce: not implemented') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "arrayDepth",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["unused"]),
  "{ :unused | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "dimensions",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_k, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_size_1(_self)];
      }, []),
    );
  }, ["self", "k"]),
  "{ :self :k | if((=(k, 0)), { [] }, { [size(self)] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "dimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_size_1(_self)];
  }, ["self"]),
  "{ :self | [size(self)] }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "rank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_size_1(_self)];
  }, ["self"]),
  "{ :self | [size(self)] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "arrayDepth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "dimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self | [] }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "rank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Array",
  "shape",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self | [] }",
);
