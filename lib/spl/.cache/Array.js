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
  "{ :self |\n\t\tself.dimensions.size\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_take_2(_shape_1(_self), 4), 4);
        let _r = _at_2(__SplVar1, 1);
        let _c = _at_2(__SplVar1, 2);
        let _i = _at_2(__SplVar1, 3);
        let _j = _at_2(__SplVar1, 4);
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
  "{ :self |\n\t\tself.isArray.if {\n\t\t\tlet [r, c, i, j] = self.shape.take(4);\n\t\t\tlet n = r * i;\n\t\t\tlet m = c * j;\n\t\t\tlet p = 1;\n\t\t\tlet answer = List(n);\n\t\t\t1.toDo(r) { :w |\n\t\t\t\t1.toDo(i) { :x |\n\t\t\t\t\tlet row = List(m);\n\t\t\t\t\tlet q = 1;\n\t\t\t\t\tanswer[p] := row;\n\t\t\t\t\tp := p + 1;\n\t\t\t\t\t1.toDo(c) { :y |\n\t\t\t\t\t\t1.toDo(j) { :z |\n\t\t\t\t\t\t\trow[q] := self[w][y][x][z];\n\t\t\t\t\t\t\tq := q + 1\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('List>>arrayFlatten: not array')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "assertIsOfShape",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_shape_1(_self), _shape);
      }, []),
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tself.assert {\n\t\t\tself.shape = shape\n\t\t}\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_shape_1(_bounds), 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return _coordinateBoundsArray_3(_transpose_1(_bounds), _steps, _offset);
  }, ["bounds", "steps", "offset"]),
  "{ :bounds :steps :offset |\n\t\tlet [m, n] = bounds.shape;\n\t\tbounds.transpose.coordinateBoundsArray(steps, offset)\n\t}",
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
  "{ :bounds :steps |\n\t\tbounds.coordinateBoundingBoxArray(steps, [0])\n\t}",
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
          let __SplVar3 = _assertIsOfSize_2(_range, 2);
          let _l = _at_2(__SplVar3, 1);
          let _r = _at_2(__SplVar3, 2);
          /* Statements */
          return _asList_1(_nonemptyThenTo_3(_l, _plusSign_2(_l, _step), _r));
        }, ["range", "step"]),
      ),
    );
  }, ["rangeList", "stepList", "offset"]),
  "{ :rangeList :stepList :offset |\n\t\t(rangeList +.each offset).withCollect(stepList) { :range :step |\n\t\t\tlet [l, r] = range;\n\t\t\t[l, l + step .. r]\n\t\t}.tuplesArray\n\t}",
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
  "{ :rangeList :stepList |\n\t\tcoordinateBoundsArray(rangeList, stepList, [0])\n\t}",
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
          let __SplVar4 = _assertIsOfSize_2(_range, 2);
          let _l = _at_2(__SplVar4, 1);
          let _r = _at_2(__SplVar4, 2);
          /* Statements */
          return _asList_1(_nonemptyThenTo_3(_l, _plusSign_2(_l, _step), _r));
        }, ["range", "step"]),
      ),
    );
  }, ["rangeList", "stepList", "offset"]),
  "{ :rangeList :stepList :offset |\n\t\t(rangeList +.each offset).withCollect(stepList) { :range :step |\n\t\t\tlet [l, r] = range;\n\t\t\t[l, l + step .. r]\n\t\t}.tuples\n\t}",
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
            _isNotEmpty_1(_self),
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
  "{ :self :anInteger |\n\t\t(anInteger < 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tanswer.add(self.size);\n\t\t\t(self.isNotEmpty & { self.allSatisfy(isSequenceable:/1) }).ifTrue {\n\t\t\t\tlet k = self.anyOne.size;\n\t\t\t\tself.allSatisfy { :each |\n\t\t\t\t\teach.size = k\n\t\t\t\t}.ifTrue {\n\t\t\t\t\tanswer.addAll(self.anyOne.dimensions(anInteger - 1))\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.dimensions(Infinity)\n\t}",
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.reverse\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.collect(reverse:/1)\n\t\t\t} {\n\t\t\t\tself.collect(flipLeftRight:/1)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself\n\t\t} {\n\t\t\tlet answer = [self.size];\n\t\t\t1.toDo(self.depth - 2) { :i |\n\t\t\t\tanswer.add(\n\t\t\t\t\tself.level([i]).collect { :each |\n\t\t\t\t\t\teach.nest.size\n\t\t\t\t\t}.max\n\t\t\t\t)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isArray",
  ["self", "depth", "aBlock:/1"],
  sl.annotateFunction(function (_self, _depth, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rho = _shapeOrNil_1(_self);
    /* Statements */
    return _ampersand_2(
      _isNotNil_1(_rho),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_rho), _depth),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deepAllSatisfy_2(_self, _aBlock_1);
          }, []),
        );
      }, []),
    );
  }, ["self", "depth", "aBlock:/1"]),
  "{ :self :depth :aBlock:/1 |\n\t\tlet rho = self.shapeOrNil;\n\t\trho.isNotNil & {\n\t\t\trho.size = depth & {\n\t\t\t\tself.deepAllSatisfy(aBlock:/1)\n\t\t\t}\n\t\t}\n\t}",
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
      _isNotNil_1(_rho),
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
  "{ :self :depth |\n\t\tlet rho = self.shapeOrNil;\n\t\trho.isNotNil & {\n\t\t\trho.size = depth\n\t\t}\n\t}",
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
    return _isNotNil_1(_shapeOrNil_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.shapeOrNil.isNotNil\n\t}",
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
  "{ :self :other |\n\t\tself.shape = other.shape & {\n\t\t\tself.elementType = other.elementType\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isMatrix",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _isArray_3(_self, 2, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.isArray(2, aBlock:/1)\n\t}",
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
  "{ :self |\n\t\tself.arrayDepth = 2\n\t}",
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
  "{ :self |\n\t\tself.arrayDepth = 2 & {\n\t\t\tself.deepAllSatisfy(isSmallFloat:/1)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.allSatisfy(isSmallFloat:/1)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isList.not & {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.noneSatisfy(isList:/1)\n\t}",
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
  "{ :self :aList :anObject |\n\t\tself.padRight(aList.negate, anObject)\n\t}",
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
  "{ :self |\n\t\tself.padLeft(self.impliedShape, 0)\n\t}",
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
    let _affix = _List_2(
      _hyphenMinus_2(_abs_1(_at_2(_shape, 1)), _size_1(_self)),
      _anObject,
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
  "{ :self :shape :anObject |\n\t\tlet affix = List(shape[1].abs - self.size, anObject);\n\t\tlet next = shape[1].isNegative.if { affix ++ self } { self ++ affix };\n\t\t(shape.size = 1).if {\n\t\t\tnext\n\t\t} {\n\t\t\tlet nextShape = shape.allButFirst;\n\t\t\tnext.collect { :each |\n\t\t\t\tpadRight(each.nest, nextShape, anObject)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.padRight(self.impliedShape, 0)\n\t}",
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
  "{ :self |\n\t\tself.shape.size\n\t}",
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
  "{ :self |\n\t\t(self.isEmpty | { self[1].isList.not }).if {\n\t\t\t1\n\t\t} {\n\t\t\t1 + self[1].rankUnchecked\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.flatten\n\t}",
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
  "{ :self :shape |\n\t\tlet next = 1.to(shape[1]).collect { :i |\n\t\t\tself.atWrap(i)\n\t\t};\n\t\t(shape.size = 1).if {\n\t\t\tnext\n\t\t} {\n\t\t\tlet nextShape = shape.allButFirst;\n\t\t\tnext.collect { :each |\n\t\t\t\trecycle(each.nest, nextShape)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.recycle(self.impliedShape)\n\t}",
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
              return _asList_1(_nonemptyRange_3(1, _n, 1));
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
  "{ :self :indices :subarray |\n\t\tlet shape = subarray.shape;\n\t\t(shape = indices.collect(size:/1)).if {\n\t\t\tlet i = indices.tuples;\n\t\t\tlet j = shape.collect { :n |\n\t\t\t\t[1 .. n]\n\t\t\t}.tuples;\n\t\t\ti.withDo(j) { :p :q |\n\t\t\t\tself.atPathPut(p, subarray.atPath(q))\n\t\t\t}\n\t\t} {\n\t\t\tself.error('List>>replaceSubarray: index mismatch')\n\t\t}\n\t}",
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
  "{ :self :shape |\n\t\tshape.allButFirst.reverseDo { :n |\n\t\t\tself := self.clump(n)\n\t\t};\n\t\tself\n\t}",
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
  "{ :self |\n\t\t(self.size = 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet type = self.typeOf;\n\t\t\tlet elementTypes = self.elementTypes;\n\t\t\telementTypes.allSatisfy { :each |\n\t\t\t\teach = type\n\t\t\t}.if {\n\t\t\t\tlet elementShapes = self.collect(shape:/1);\n\t\t\t\t(elementShapes.nub.size = 1).if {\n\t\t\t\t\t[self.size] ++ elementShapes.first\n\t\t\t\t} {\n\t\t\t\t\tnil\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\telementTypes.includes(type).if {\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\t[self.size]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.shapeOrNil.ifNil {\n\t\t\tself.error('shape: irregular arrays do not have shape')\n\t\t} { :answer |\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet leftmost = self[1];\n\t\t\tleftmost.isList.if {\n\t\t\t\t[self.size] ++ leftmost.shapeUnchecked\n\t\t\t} {\n\t\t\t\t[self.size]\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :indices |\n\t\tlet k = indices.size;\n\t\tlet i = indices[1];\n\t\tlet a = self.atAll(i);\n\t\t(k = 1).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet j = indices.allButFirst;\n\t\t\ta.collect { :each |\n\t\t\t\teach.subarray(j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "tensorProduct",
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _foldRight_2(_self, _outerProduct_2);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.foldRight(outerProduct:/2)\n\t\t}\n\t}",
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
  "{ :self |\n\t\t[0].reshape(self)\n\t}",
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
        let __SplVar5 = _assertIsOfSize_2(_z, 2);
        let _m = _at_2(__SplVar5, 1);
        let _n = _at_2(__SplVar5, 2);
        let _k = _size_1(_self);
        /* Statements */
        return _collect_2(
          _to_2(1, _plusSign_2(_k, _sum_1(_z))),
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
            let __SplVar6 = _assertIsOfSize_2(_z, 2);
            let _m = _at_2(__SplVar6, 1);
            let _n = _at_2(__SplVar6, 2);
            let __SplVar7 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _a = _at_2(__SplVar7, 1);
            let _b = _at_2(__SplVar7, 2);
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
              _to_2(1, _p),
              _to_2(1, _q),
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
  "{ :self :z :o |\n\t\tself.isVector.if {\n\t\t\tlet [m, n] = z;\n\t\t\tlet k = self.size;\n\t\t\t1.to(k + z.sum).collect { :i |\n\t\t\t\tlet d = i - m;\n\t\t\t\td.betweenAnd(1, k).if {\n\t\t\t\t\tself[d]\n\t\t\t\t} {\n\t\t\t\t\to\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet [m, n] = z;\n\t\t\t\tlet [a, b] = self.shape;\n\t\t\t\tlet p = m.sum + a;\n\t\t\t\tlet q = n.sum + b;\n\t\t\t\t{ :i :j |\n\t\t\t\t\tlet d = i - m[1];\n\t\t\t\t\tlet e = j - n[1];\n\t\t\t\t\t(\n\t\t\t\t\t\td.betweenAnd(1, a) & {\n\t\t\t\t\t\t\te.betweenAnd(1, b)\n\t\t\t\t\t\t}\n\t\t\t\t\t).if {\n\t\t\t\t\t\tself[d][e]\n\t\t\t\t\t} {\n\t\t\t\t\t\to\n\t\t\t\t\t}\n\t\t\t\t}.table(1.to(p), 1.to(q))\n\t\t\t} {\n\t\t\t\tself.error('arrayPad')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
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
        let __SplVar5 = _assertIsOfSize_2(_z, 2);
        let _m = _at_2(__SplVar5, 1);
        let _n = _at_2(__SplVar5, 2);
        let _k = _size_1(_self);
        /* Statements */
        return _collect_2(
          _to_2(1, _plusSign_2(_k, _sum_1(_z))),
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
            let __SplVar6 = _assertIsOfSize_2(_z, 2);
            let _m = _at_2(__SplVar6, 1);
            let _n = _at_2(__SplVar6, 2);
            let __SplVar7 = _assertIsOfSize_2(_shape_1(_self), 2);
            let _a = _at_2(__SplVar7, 1);
            let _b = _at_2(__SplVar7, 2);
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
              _to_2(1, _p),
              _to_2(1, _q),
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
  "{ :self :z :o |\n\t\tself.isVector.if {\n\t\t\tlet [m, n] = z;\n\t\t\tlet k = self.size;\n\t\t\t1.to(k + z.sum).collect { :i |\n\t\t\t\tlet d = i - m;\n\t\t\t\td.betweenAnd(1, k).if {\n\t\t\t\t\tself[d]\n\t\t\t\t} {\n\t\t\t\t\to\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tlet [m, n] = z;\n\t\t\t\tlet [a, b] = self.shape;\n\t\t\t\tlet p = m.sum + a;\n\t\t\t\tlet q = n.sum + b;\n\t\t\t\t{ :i :j |\n\t\t\t\t\tlet d = i - m[1];\n\t\t\t\t\tlet e = j - n[1];\n\t\t\t\t\t(\n\t\t\t\t\t\td.betweenAnd(1, a) & {\n\t\t\t\t\t\t\te.betweenAnd(1, b)\n\t\t\t\t\t\t}\n\t\t\t\t\t).if {\n\t\t\t\t\t\tself[d][e]\n\t\t\t\t\t} {\n\t\t\t\t\t\to\n\t\t\t\t\t}\n\t\t\t\t}.table(1.to(p), 1.to(q))\n\t\t\t} {\n\t\t\t\tself.error('arrayPad')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "boustrophedonTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_boustrophedonTriangle_1(_self), _last_1);
  }, ["self"]),
  "{ :self |\n\t\tself.boustrophedonTriangle.collect(last:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "boustrophedonTransform",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_boustrophedonTriangle_1(_self), _last_1);
  }, ["self"]),
  "{ :self |\n\t\tself.boustrophedonTriangle.collect(last:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "boustrophedonTriangle",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_a);
    let _t = _triangularArray_2(
      _to_2(1, _m),
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_a, _i);
      }, ["i", "j"]),
    );
    /* Statements */
    _triangularArrayDo_3(
      _to_2(1, _m),
      sl.annotateFunction(function (_k, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _k, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _at_2(_t, _k),
              _n,
              _plusSign_2(
                _at_2(_at_2(_t, _k), _hyphenMinus_2(_n, 1)),
                _at_2(
                  _at_2(_t, _hyphenMinus_2(_k, 1)),
                  _plusSign_2(_hyphenMinus_2(_k, _n), 1),
                ),
              ),
            );
          }, []),
        );
      }, ["k", "n"]),
      0,
    );
    return _t;
  }, ["a"]),
  "{ :a |\n\t\tlet m = a.size;\n\t\tlet t = 1.to(m).triangularArray { :i :j |\n\t\t\ta[i]\n\t\t};\n\t\t1.to(m).triangularArrayDo(\n\t\t\t{ :k :n |\n\t\t\t\t(n != 1).ifTrue {\n\t\t\t\t\tt[k][n] := t[k][n - 1] + t[k - 1][k - n + 1]\n\t\t\t\t}\n\t\t\t},\n\t\t\t0\n\t\t);\n\t\tt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "boustrophedonTriangle",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _size_1(_a);
    let _t = _triangularArray_2(
      _to_2(1, _m),
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_a, _i);
      }, ["i", "j"]),
    );
    /* Statements */
    _triangularArrayDo_3(
      _to_2(1, _m),
      sl.annotateFunction(function (_k, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _k, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_n, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _at_2(_t, _k),
              _n,
              _plusSign_2(
                _at_2(_at_2(_t, _k), _hyphenMinus_2(_n, 1)),
                _at_2(
                  _at_2(_t, _hyphenMinus_2(_k, 1)),
                  _plusSign_2(_hyphenMinus_2(_k, _n), 1),
                ),
              ),
            );
          }, []),
        );
      }, ["k", "n"]),
      0,
    );
    return _t;
  }, ["a"]),
  "{ :a |\n\t\tlet m = a.size;\n\t\tlet t = 1.to(m).triangularArray { :i :j |\n\t\t\ta[i]\n\t\t};\n\t\t1.to(m).triangularArrayDo(\n\t\t\t{ :k :n |\n\t\t\t\t(n != 1).ifTrue {\n\t\t\t\t\tt[k][n] := t[k][n - 1] + t[k - 1][k - n + 1]\n\t\t\t\t}\n\t\t\t},\n\t\t\t0\n\t\t);\n\t\tt\n\t}",
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
  "{ :shape :start :step |\n\t\tlet count = shape.product;\n\t\tlet end = start + (count - 1 * step);\n\t\tRange(start, end, step).reshape(shape)\n\t}",
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
  "{ :shape :start :step |\n\t\tlet count = shape.product;\n\t\tlet end = start + (count - 1 * step);\n\t\tRange(start, end, step).reshape(shape)\n\t}",
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
    return _reshape_2(_to_2(1, _product_1(_shape)), _shape);
  }, ["shape"]),
  "{ :shape |\n\t\t1.to(shape.product).reshape(shape)\n\t}",
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
    return _reshape_2(_to_2(1, _product_1(_shape)), _shape);
  }, ["shape"]),
  "{ :shape |\n\t\t1.to(shape.product).reshape(shape)\n\t}",
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
  "{ :self :elementType |\n\t\tself.isVector & {\n\t\t\tself.elementType = elementType\n\t\t}\n\t}",
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
  "{ :self :elementType |\n\t\tself.isVector & {\n\t\t\tself.elementType = elementType\n\t\t}\n\t}",
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
  "{ :self :shape |\n\t\tshape.ifEmpty {\n\t\t\tself.error('reshape: empty shape?')\n\t\t} {\n\t\t\tself\n\t\t\t.flatten\n\t\t\t.wrapExtend(shape.product)\n\t\t\t.reshapeList(shape)\n\t\t}\n\t}",
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
  "{ :self :shape |\n\t\tshape.ifEmpty {\n\t\t\tself.error('reshape: empty shape?')\n\t\t} {\n\t\t\tself\n\t\t\t.flatten\n\t\t\t.wrapExtend(shape.product)\n\t\t\t.reshapeList(shape)\n\t\t}\n\t}",
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
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flatten;\n\t\tanother.deepCollect { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
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
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flatten;\n\t\tanother.deepCollect { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
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
  "{ :count :start :step |\n\t\tlet end = start + (count - 1 * step);\n\t\tRange(start, end, step).asList\n\t}",
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
  "{ :count |\n\t\tRange(1, count, 1).asList\n\t}",
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
  "{ :dimensions :range |\n\t\tlet size = range * 2 + 1;\n\t\tlet length = (size ^ dimensions) - 1;\n\t\tlet neighbors = [];\n\t\t0.toDo(length - 1) { :i |\n\t\t\tlet neighbor = List(dimensions);\n\t\t\tlet index = (i < (length / 2)).if { i } { i + 1 };\n\t\t\tneighbors.add(neighbor);\n\t\t\t1.toDo(dimensions) { :d |\n\t\t\t\tlet value = index % (size ^ d);\n\t\t\t\tneighbor[d] := value / (size ^ (d - 1)) - range;\n\t\t\t\tindex := index - value\n\t\t\t}\n\t\t};\n\t\tneighbors\n\t}",
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
  "{ :dimensions :range |\n\t\tlet size = range * 2 + 1;\n\t\tlet iterations = size ^ dimensions;\n\t\tlet center = (iterations - 1) / 2;\n\t\tlet neighbors = [];\n\t\t0.toDo(iterations - 1) { :i |\n\t\t\t(i = center).ifFalse {\n\t\t\t\tlet neighbor = List(dimensions);\n\t\t\t\tlet distance = 0;\n\t\t\t\tlet remaining = i;\n\t\t\t\t0.toDo(dimensions - 1) { :d |\n\t\t\t\t\tlet remainder = remaining % (size ^ (d + 1));\n\t\t\t\t\tlet value = remainder / (size ^ d) - range;\n\t\t\t\t\tneighbor[d + 1] := value;\n\t\t\t\t\tdistance := distance + value.abs;\n\t\t\t\t\tremaining :=  remaining - remainder\n\t\t\t\t};\n\t\t\t\t(distance <= range).ifTrue {\n\t\t\t\t\tneighbors.add(neighbor)\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tneighbors\n\t}",
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
  "{ :self:/1 :anArray :anInteger |\n\t\t(anInteger = 1).if {\n\t\t\tanArray.collect(self:/1)\n\t\t} {\n\t\t\t(anInteger = 2).if {\n\t\t\t\tanArray.columnsCollect(self:/1)\n\t\t\t} {\n\t\t\t\tself.error('Block>>arrayReduce: not implemented')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :unused |\n\t\t1\n\t}",
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
  "{ :self :k |\n\t\t(k = 0).if {\n\t\t\t[]\n\t\t} {\n\t\t\t[self.size]\n\t\t}\n\t}",
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
  "{ :self |\n\t\t[self.size]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "isSmallFloatVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_elementType_1(_self), "SmallFloat");
  }, ["self"]),
  "{ :self |\n\t\tself.elementType = 'SmallFloat'\n\t}",
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
  "{ :self |\n\t\t1\n\t}",
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
  "{ :self |\n\t\t[self.size]\n\t}",
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
  "{ :self |\n\t\t0\n\t}",
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
  "{ :self |\n\t\t[]\n\t}",
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
  "{ :self |\n\t\t0\n\t}",
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
  "{ :self |\n\t\t[]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "triangularArrayDo",
  ["self", "aBlock:/2", "k"],
  sl.annotateFunction(function (_self, _aBlock_2, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _at_2(_self, 1);
    /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          _a,
          _max_2(_a, _plusSign_2(_n, _k)),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_n, _m);
          }, ["m"]),
        );
      }, ["n"]),
    );
  }, ["self", "aBlock:/2", "k"]),
  "{ :self :aBlock:/2 :k |\n\t\tlet a = self[1];\n\t\tself.do { :n |\n\t\t\ta.toDo(max(a, n + k)) { :m |\n\t\t\t\taBlock(n, m)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "triangularArray",
  ["self", "aBlock:/2", "k"],
  sl.annotateFunction(function (_self, _aBlock_2, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _at_2(_self, 1);
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _to_2(_a, _max_2(_a, _plusSign_2(_n, _k))),
          sl.annotateFunction(function (_m) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _m";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_n, _m);
          }, ["m"]),
        );
      }, ["n"]),
    );
  }, ["self", "aBlock:/2", "k"]),
  "{ :self :aBlock:/2 :k |\n\t\tlet a = self[1];\n\t\tself.collect { :n |\n\t\t\ta.to(max(a, n + k)).collect { :m |\n\t\t\t\taBlock(n, m)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Array",
  "triangularArray",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangularArray_3(_self, _aBlock_2, 0);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\ttriangularArray(self, aBlock:/2, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Array",
  "isTriangularArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    let _l = _collect_2(_self, _size_1);
    /* Statements */
    return _verticalLine_2(
      _hasEqualElements_2(_l, _Range_3(1, _k, 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hasEqualElements_2(_l, _Range_3(_k, 1, -1));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size;\n\t\tlet l = self.collect(size:/1);\n\t\tl.hasEqualElements(Range(1, k, 1)) | {\n\t\t\tl.hasEqualElements(Range(k, 1, -1))\n\t\t}\n\t}",
);
