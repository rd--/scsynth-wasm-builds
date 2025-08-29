sl.addType(
  false,
  "Line",
  "Line",
  ["Object", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Line",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Line",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _adjacentPairsDo_2(
      _vertexCoordinates_1(_self),
      sl.annotateFunction(function (_u, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _u, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, _euclideanDistance_2(_u, _v));
      }, ["u", "v"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = 0; adjacentPairsDo(vertexCoordinates(self), { :u :v | answer := +(answer, euclideanDistance(u,v)) }); answer }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(vertexCoordinates(self), index) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_collect_2(_vertexCoordinates_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | Line(collect(vertexCoordinates(self),aBlock:/1)) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "dimension",
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

sl.addMethodToExistingType(
  "Line",
  "Line",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_vertexCount_1(_self), 1);
  }, ["self"]),
  "{ :self | -(vertexCount(self), 1) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _hyphenMinus_2(_vertexCount_1(_self), 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return [_i, _plusSign_2(_i, 1)];
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self | collect(upOrDownTo(1, -(vertexCount(self), 1)), { :i | [i, +(i, 1)] }) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | size(anyOne(vertexCoordinates(self))) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "lineEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
    let _a = _at_2(__SPL1, 1);
    let _b = _at_2(__SPL1, 2);
    /* Statements */
    return _lineEquation_2(_a, _b);
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(vertexCoordinates(self), 2); let a = at(__SPL1, 1); let b = at(__SPL1, 2); lineEquation(a,b) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "lineIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_vertexList_1(_self)];
  }, ["self"]),
  "{ :self | [vertexList(self)] }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "midpoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _vertexCoordinates_1(_self);
    let _l = _arcLength_1(_self);
    let _h = _solidus_2(_l, 2);
    let _i = 1;
    let _c1 = 0;
    let _c2 = _c1;
    let __genSym12 = _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c2, _h);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _c1 = _c2;
        _c2 = _plusSign_2(
          _c1,
          _euclideanDistance_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
        );
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    let _d = _hyphenMinus_2(_h, _c1);
    let _v = _hyphenMinus_2(_at_2(_p, _i), _at_2(_p, _hyphenMinus_2(_i, 1)));
    /* Statements */
    return _plusSign_2(
      _at_2(_p, _hyphenMinus_2(_i, 1)),
      _asterisk_2(_normalize_1(_v), _d),
    );
  }, ["self"]),
  "{ :self | let p = vertexCoordinates(self); let l = arcLength(self); let h = /(l, 2); let i = 1; let c1 = 0; let c2 = c1; let _ = whileTrue({ <(c2, h) }, { c1 := c2; c2 := +(c1, euclideanDistance(at(p, i),at(p, +(i, 1)))); i := +(i, 1) }); let d = -(h, c1); let v = -(at(p, i), at(p, -(i, 1))); +(at(p, -(i, 1)), (*(normalize(v), d))) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  }, ["self", "projection"]),
  "{ :self :projection | Line(collect(vertexCoordinates(self),asUnaryBlock(projection))) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_vertexCount_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _precision = _at_2(_options, "precision");
        let __SPL2 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
        let _p1 = _at_2(__SPL2, 1);
        let _p2 = _at_2(__SPL2, 2);
        let __SPL3 = _assertIsOfSize_2(_p1, 2);
        let _x1 = _at_2(__SPL3, 1);
        let _y1 = _at_2(__SPL3, 2);
        let __SPL4 = _assertIsOfSize_2(_p2, 2);
        let _x2 = _at_2(__SPL4, 1);
        let _y2 = _at_2(__SPL4, 2);
        /* Statements */
        return _format_2('<line x1="%" y1="%" x2="%" y2="%" />', [
          _printStringToFixed_2(_x1, _precision),
          _printStringToFixed_2(_y1, _precision),
          _printStringToFixed_2(_x2, _precision),
          _printStringToFixed_2(_y2, _precision),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<polyline points="%" />', [
          _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
        ]);
      }, []),
    );
  }, ["self", "options"]),
  '{ :self :options | if((=(vertexCount(self), 2)), { let precision = at(options, \'precision\'); let __SPL2 = assertIsOfSize(vertexCoordinates(self), 2); let p1 = at(__SPL2, 1); let p2 = at(__SPL2, 2); let __SPL3 = assertIsOfSize(p1, 2); let x1 = at(__SPL3, 1); let y1 = at(__SPL3, 2); let __SPL4 = assertIsOfSize(p2, 2); let x2 = at(__SPL4, 1); let y2 = at(__SPL4, 2); format(\'<line x1="%" y1="%" x2="%" y2="%" />\',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }, { format(\'<polyline points="%" />\',[asSvgPointList(vertexCoordinates(self),options)]) }) }',
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | size(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _size_1(_vertexCoordinates_1(_self))));
  }, ["self"]),
  "{ :self | asList(upOrDownTo(1, size(vertexCoordinates(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "closedLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_plusSignPlusSign_2(_self, [_first_1(_self)]));
  }, ["self"]),
  "{ :self | Line(++(self, [first(self)])) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "Line",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Line_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newLine_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(rank(self), 2)), { collect(self,Line:/1) }, { initializeSlots(newLine(),self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SPL5, 1);
    let _y1 = _at_2(__SPL5, 2);
    let __SPL6 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SPL6, 1);
    let _y2 = _at_2(__SPL6, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(
      _lessThanSign_2(_x1, _x2),
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
        return -1;
      }, []),
    );
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(
      _lessThanSign_2(_y1, _y2),
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
        return -1;
      }, []),
    );
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(
          _equalsSignEqualsSign_2(_x1, _x2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_y1, _y2);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(
            _greaterThanSignEqualsSign_2(_e2, _dy),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dy);
              return _x1 = _plusSign_2(_x1, _sx);
            }, []),
          );
          _ifTrue_2(
            _lessThanSignEqualsSign_2(_e2, _dx),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dx);
              return _y1 = _plusSign_2(_y1, _sy);
            }, []),
          );
          return true;
        }, []),
      );
    }, []));
    return _answer;
  }, ["self"]),
  "{ :self | let __SPL5 = assertIsOfSize(at(self, 1), 2); let x1 = at(__SPL5, 1); let y1 = at(__SPL5, 2); let __SPL6 = assertIsOfSize(at(self, 2), 2); let x2 = at(__SPL6, 1); let y2 = at(__SPL6, 2); let dx = abs((-(x2, x1))); let sx = if((<(x1, x2)), { 1 }, { -1 }); let dy = -(abs((-(y2, y1)))); let sy = if((<(y1, y2)), { 1 }, { -1 }); let e = +(dx, dy); let answer = []; whileTrue({ add(answer,[x1, y1]); if((&((==(x1, x2)), { ==(y1, y2) })), { false }, { let e2 = *(2, e); ifTrue((>=(e2, dy)), { e := +(e, dy); x1 := +(x1, sx) }); ifTrue((<=(e2, dx)), { e := +(e, dx); y1 := +(y1, sy) }); true }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SPL5, 1);
    let _y1 = _at_2(__SPL5, 2);
    let __SPL6 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SPL6, 1);
    let _y2 = _at_2(__SPL6, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(
      _lessThanSign_2(_x1, _x2),
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
        return -1;
      }, []),
    );
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(
      _lessThanSign_2(_y1, _y2),
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
        return -1;
      }, []),
    );
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(
          _equalsSignEqualsSign_2(_x1, _x2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_y1, _y2);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(
            _greaterThanSignEqualsSign_2(_e2, _dy),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dy);
              return _x1 = _plusSign_2(_x1, _sx);
            }, []),
          );
          _ifTrue_2(
            _lessThanSignEqualsSign_2(_e2, _dx),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dx);
              return _y1 = _plusSign_2(_y1, _sy);
            }, []),
          );
          return true;
        }, []),
      );
    }, []));
    return _answer;
  }, ["self"]),
  "{ :self | let __SPL5 = assertIsOfSize(at(self, 1), 2); let x1 = at(__SPL5, 1); let y1 = at(__SPL5, 2); let __SPL6 = assertIsOfSize(at(self, 2), 2); let x2 = at(__SPL6, 1); let y2 = at(__SPL6, 2); let dx = abs((-(x2, x1))); let sx = if((<(x1, x2)), { 1 }, { -1 }); let dy = -(abs((-(y2, y1)))); let sy = if((<(y1, y2)), { 1 }, { -1 }); let e = +(dx, dy); let answer = []; whileTrue({ add(answer,[x1, y1]); if((&((==(x1, x2)), { ==(y1, y2) })), { false }, { let e2 = *(2, e); ifTrue((>=(e2, dy)), { e := +(e, dy); x1 := +(x1, sx) }); ifTrue((<=(e2, dx)), { e := +(e, dx); y1 := +(y1, sy) }); true }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_end, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _pointLineDistance_2(
          [_at_2(_self, 1), _at_2(_self, _end)],
          _at_2(_self, _i),
        );
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_d, _dMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _i;
            return _dMax = _d;
          }, []),
        );
      }, ["i"]),
    );
    _if_3(
      _greaterThanSign_2(_dMax, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, 1, _index),
          _epsilon,
        );
        let _q = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, _index, _end),
          _epsilon,
        );
        /* Statements */
        _addAll_2(
          _answer,
          _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)),
        );
        return _addAll_2(_answer, _q);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _at_2(_self, 1));
        return _add_2(_answer, _at_2(_self, _end));
      }, []),
    );
    return _answer;
  }, ["self", "epsilon"]),
  "{ :self :epsilon | let dMax = 0; let index = 0; let end = size(self); let answer = []; toDo(2, -(end, 1), { :i | let d = pointLineDistance([at(self, 1), at(self, end)],at(self, i)); ifTrue((>(d, dMax)), { index := i; dMax := d }) }); if((>(dMax, epsilon)), { let p = ramerDouglasPeuckerAlgorithm(sliceFromTo(self,1, index), epsilon); let q = ramerDouglasPeuckerAlgorithm(sliceFromTo(self,index, end), epsilon); addAll(answer,sliceFromTo(p,1, -(size(p), 1))); addAll(answer,q) }, { add(answer,at(self, 1)); add(answer,at(self, end)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_end, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _pointLineDistance_2(
          [_at_2(_self, 1), _at_2(_self, _end)],
          _at_2(_self, _i),
        );
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_d, _dMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _i;
            return _dMax = _d;
          }, []),
        );
      }, ["i"]),
    );
    _if_3(
      _greaterThanSign_2(_dMax, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, 1, _index),
          _epsilon,
        );
        let _q = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, _index, _end),
          _epsilon,
        );
        /* Statements */
        _addAll_2(
          _answer,
          _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)),
        );
        return _addAll_2(_answer, _q);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _at_2(_self, 1));
        return _add_2(_answer, _at_2(_self, _end));
      }, []),
    );
    return _answer;
  }, ["self", "epsilon"]),
  "{ :self :epsilon | let dMax = 0; let index = 0; let end = size(self); let answer = []; toDo(2, -(end, 1), { :i | let d = pointLineDistance([at(self, 1), at(self, end)],at(self, i)); ifTrue((>(d, dMax)), { index := i; dMax := d }) }); if((>(dMax, epsilon)), { let p = ramerDouglasPeuckerAlgorithm(sliceFromTo(self,1, index), epsilon); let q = ramerDouglasPeuckerAlgorithm(sliceFromTo(self,index, end), epsilon); addAll(answer,sliceFromTo(p,1, -(size(p), 1))); addAll(answer,q) }, { add(answer,at(self, 1)); add(answer,at(self, end)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "xiaolinWuLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL7 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x0 = _at_2(__SPL7, 1);
    let _y0 = _at_2(__SPL7, 2);
    let __SPL8 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x1 = _at_2(__SPL8, 1);
    let _y1 = _at_2(__SPL8, 2);
    let _isSteep = _greaterThanSign_2(
      _abs_1(_hyphenMinus_2(_y1, _y0)),
      _abs_1(_hyphenMinus_2(_x1, _x0)),
    );
    let _answer = [];
    /* Statements */
    _if_3(
      _isSteep,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _xiaolinWuLineAlgorithm_1([[_y0, _x0], [_y1, _x1]]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x0, _x1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _xiaolinWuLineAlgorithm_1([[_x1, _y1], [_x0, _y0]]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _dx = _hyphenMinus_2(_x1, _x0);
            let _dy = _hyphenMinus_2(_y1, _y0);
            let _gradient = _solidus_2(_dy, _dx);
            let _xEnd0 = _round_1(_x0);
            let _yEnd0 = _plusSign_2(
              _y0,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd0, _x0)),
            );
            let _xGap0 = _hyphenMinus_2(
              1,
              _fractionalPart_1(_plusSign_2(_x0, 0.5)),
            );
            let _xPixel0 = _xEnd0;
            let _yPixel0 = _integerPart_1(_yEnd0);
            let _interY = _plusSign_2(_yEnd0, _gradient);
            let _xEnd1 = _round_1(_x1);
            let _yEnd1 = _plusSign_2(
              _y1,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd1, _x1)),
            );
            let _xGap1 = _fractionalPart_1(_plusSign_2(_x1, 0.5));
            let _xPixel1 = _xEnd1;
            let _yPixel1 = _integerPart_1(_yEnd1);
            /* Statements */
            _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel0,
                  _xPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel0, 1),
                  _xPixel0,
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel0,
                  _yPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel0,
                  _plusSign_2(_yPixel0, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
            );
            _toDo_3(
              _plusSign_2(_xPixel0, 1),
              _hyphenMinus_2(_xPixel1, 1),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                _if_3(
                  _isSteep,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _integerPart_1(_interY),
                      _x,
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _x,
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _x,
                      _integerPart_1(_interY),
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _x,
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                );
                return _interY = _plusSign_2(_interY, _gradient);
              }, ["x"]),
            );
            return _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel1,
                  _xPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel1, 1),
                  _xPixel1,
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel1,
                  _yPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel1,
                  _plusSign_2(_yPixel1, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let __SPL7 = assertIsOfSize(at(self, 1), 2); let x0 = at(__SPL7, 1); let y0 = at(__SPL7, 2); let __SPL8 = assertIsOfSize(at(self, 2), 2); let x1 = at(__SPL8, 1); let y1 = at(__SPL8, 2); let isSteep = >(abs(-(y1, y0)), abs(-(x1, x0))); let answer = []; if(isSteep, { xiaolinWuLineAlgorithm([[y0, x0], [y1, x1]]) }, { if((>(x0, x1)), { xiaolinWuLineAlgorithm([[x1, y1], [x0, y0]]) }, { let dx = -(x1, x0); let dy = -(y1, y0); let gradient = /(dy, dx); let xEnd0 = round(x0); let yEnd0 = +(y0, (*(gradient, (-(xEnd0, x0))))); let xGap0 = -(1, fractionalPart((+(x0, 0.5)))); let xPixel0 = xEnd0; let yPixel0 = integerPart(yEnd0); let interY = +(yEnd0, gradient); let xEnd1 = round(x1); let yEnd1 = +(y1, (*(gradient, (-(xEnd1, x1))))); let xGap1 = fractionalPart((+(x1, 0.5))); let xPixel1 = xEnd1; let yPixel1 = integerPart(yEnd1); if(isSteep, { add(answer,[yPixel0, xPixel0, *((-(1, fractionalPart(yEnd0))), xGap0)]); add(answer,[+(yPixel0, 1), xPixel0, *(fractionalPart(yEnd0), xGap0)]) }, { add(answer,[xPixel0, yPixel0, *((-(1, fractionalPart(yEnd0))), xGap0)]); add(answer,[xPixel0, +(yPixel0, 1), *(fractionalPart(yEnd0), xGap0)]) }); toDo((+(xPixel0, 1)), -(xPixel1, 1), { :x | if(isSteep, { add(answer,[integerPart(interY), x, -(1, fractionalPart(interY))]); add(answer,[+(integerPart(interY), 1), x, fractionalPart(interY)]) }, { add(answer,[x, integerPart(interY), -(1, fractionalPart(interY))]); add(answer,[x, +(integerPart(interY), 1), fractionalPart(interY)]) }); interY := +(interY, gradient) }); if(isSteep, { add(answer,[yPixel1, xPixel1, *((-(1, fractionalPart(yEnd1))), xGap1)]); add(answer,[+(yPixel1, 1), xPixel1, *(fractionalPart(yEnd1), xGap1)]) }, { add(answer,[xPixel1, yPixel1, *((-(1, fractionalPart(yEnd1))), xGap1)]); add(answer,[xPixel1, +(yPixel1, 1), *(fractionalPart(yEnd1), xGap1)]) }) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "xiaolinWuLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL7 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x0 = _at_2(__SPL7, 1);
    let _y0 = _at_2(__SPL7, 2);
    let __SPL8 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x1 = _at_2(__SPL8, 1);
    let _y1 = _at_2(__SPL8, 2);
    let _isSteep = _greaterThanSign_2(
      _abs_1(_hyphenMinus_2(_y1, _y0)),
      _abs_1(_hyphenMinus_2(_x1, _x0)),
    );
    let _answer = [];
    /* Statements */
    _if_3(
      _isSteep,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _xiaolinWuLineAlgorithm_1([[_y0, _x0], [_y1, _x1]]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x0, _x1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _xiaolinWuLineAlgorithm_1([[_x1, _y1], [_x0, _y0]]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _dx = _hyphenMinus_2(_x1, _x0);
            let _dy = _hyphenMinus_2(_y1, _y0);
            let _gradient = _solidus_2(_dy, _dx);
            let _xEnd0 = _round_1(_x0);
            let _yEnd0 = _plusSign_2(
              _y0,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd0, _x0)),
            );
            let _xGap0 = _hyphenMinus_2(
              1,
              _fractionalPart_1(_plusSign_2(_x0, 0.5)),
            );
            let _xPixel0 = _xEnd0;
            let _yPixel0 = _integerPart_1(_yEnd0);
            let _interY = _plusSign_2(_yEnd0, _gradient);
            let _xEnd1 = _round_1(_x1);
            let _yEnd1 = _plusSign_2(
              _y1,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd1, _x1)),
            );
            let _xGap1 = _fractionalPart_1(_plusSign_2(_x1, 0.5));
            let _xPixel1 = _xEnd1;
            let _yPixel1 = _integerPart_1(_yEnd1);
            /* Statements */
            _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel0,
                  _xPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel0, 1),
                  _xPixel0,
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel0,
                  _yPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel0,
                  _plusSign_2(_yPixel0, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
            );
            _toDo_3(
              _plusSign_2(_xPixel0, 1),
              _hyphenMinus_2(_xPixel1, 1),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                _if_3(
                  _isSteep,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _integerPart_1(_interY),
                      _x,
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _x,
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _x,
                      _integerPart_1(_interY),
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _x,
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                );
                return _interY = _plusSign_2(_interY, _gradient);
              }, ["x"]),
            );
            return _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel1,
                  _xPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel1, 1),
                  _xPixel1,
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel1,
                  _yPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel1,
                  _plusSign_2(_yPixel1, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let __SPL7 = assertIsOfSize(at(self, 1), 2); let x0 = at(__SPL7, 1); let y0 = at(__SPL7, 2); let __SPL8 = assertIsOfSize(at(self, 2), 2); let x1 = at(__SPL8, 1); let y1 = at(__SPL8, 2); let isSteep = >(abs(-(y1, y0)), abs(-(x1, x0))); let answer = []; if(isSteep, { xiaolinWuLineAlgorithm([[y0, x0], [y1, x1]]) }, { if((>(x0, x1)), { xiaolinWuLineAlgorithm([[x1, y1], [x0, y0]]) }, { let dx = -(x1, x0); let dy = -(y1, y0); let gradient = /(dy, dx); let xEnd0 = round(x0); let yEnd0 = +(y0, (*(gradient, (-(xEnd0, x0))))); let xGap0 = -(1, fractionalPart((+(x0, 0.5)))); let xPixel0 = xEnd0; let yPixel0 = integerPart(yEnd0); let interY = +(yEnd0, gradient); let xEnd1 = round(x1); let yEnd1 = +(y1, (*(gradient, (-(xEnd1, x1))))); let xGap1 = fractionalPart((+(x1, 0.5))); let xPixel1 = xEnd1; let yPixel1 = integerPart(yEnd1); if(isSteep, { add(answer,[yPixel0, xPixel0, *((-(1, fractionalPart(yEnd0))), xGap0)]); add(answer,[+(yPixel0, 1), xPixel0, *(fractionalPart(yEnd0), xGap0)]) }, { add(answer,[xPixel0, yPixel0, *((-(1, fractionalPart(yEnd0))), xGap0)]); add(answer,[xPixel0, +(yPixel0, 1), *(fractionalPart(yEnd0), xGap0)]) }); toDo((+(xPixel0, 1)), -(xPixel1, 1), { :x | if(isSteep, { add(answer,[integerPart(interY), x, -(1, fractionalPart(interY))]); add(answer,[+(integerPart(interY), 1), x, fractionalPart(interY)]) }, { add(answer,[x, integerPart(interY), -(1, fractionalPart(interY))]); add(answer,[x, +(integerPart(interY), 1), fractionalPart(interY)]) }); interY := +(interY, gradient) }); if(isSteep, { add(answer,[yPixel1, xPixel1, *((-(1, fractionalPart(yEnd1))), xGap1)]); add(answer,[+(yPixel1, 1), xPixel1, *(fractionalPart(yEnd1), xGap1)]) }, { add(answer,[xPixel1, yPixel1, *((-(1, fractionalPart(yEnd1))), xGap1)]); add(answer,[xPixel1, +(yPixel1, 1), *(fractionalPart(yEnd1), xGap1)]) }) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Line",
  "spirangle",
  ["n", "m", "centre", "radii", "initialAngle"],
  sl.annotateFunction(function (_n, _m, _centre, _radii, _initialAngle) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _n, _m, _centre, _radii, _initialAngle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL9 = _assertIsOfSize_2(_radii, 2);
    let _radiusIncrement = _at_2(__SPL9, 1);
    let _initialRadial = _at_2(__SPL9, 2);
    let _thetaIncrement = _hyphenMinus_2(
      _pi_1(1),
      _solidus_2(_pi_1(_hyphenMinus_2(_n, 2)), _n),
    );
    let _r = _asterisk_2(_initialRadial, _radiusIncrement);
    let _theta = _initialAngle;
    let _v = _plusSign_2(_centre, _fromPolarCoordinates_1([_r, _theta]));
    let _vertexCoordinates = [_v];
    /* Statements */
    _timesRepeat_2(
      _asterisk_2(_m, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _r = _plusSign_2(_r, _radiusIncrement);
        _theta = _percentSign_2(_plusSign_2(_theta, _thetaIncrement), _pi_1(2));
        _v = _plusSign_2(_v, _fromPolarCoordinates_1([_r, _theta]));
        return _add_2(_vertexCoordinates, _v);
      }, []),
    );
    return _Line_1(_vertexCoordinates);
  }, ["n", "m", "centre", "radii", "initialAngle"]),
  "{ :n :m :centre :radii :initialAngle | let __SPL9 = assertIsOfSize(radii, 2); let radiusIncrement = at(__SPL9, 1); let initialRadial = at(__SPL9, 2); let thetaIncrement = -(pi(1), (/(pi((-(n, 2))), n))); let r = *(initialRadial, radiusIncrement); let theta = initialAngle; let v = +(centre, fromPolarCoordinates([r, theta])); let vertexCoordinates = [v]; timesRepeat((*(m, n)), { r := +(r, radiusIncrement); theta := %((+(theta, thetaIncrement)), pi(2)); v := +(v, fromPolarCoordinates([r, theta])); add(vertexCoordinates,v) }); Line(vertexCoordinates) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Line",
  "cohenSutherlandAlgorithm",
  ["x0", "y0", "x1", "y1", "xMin", "yMin", "xMax", "yMax"],
  sl.annotateFunction(
    function (_x0, _y0, _x1, _y1, _xMin, _yMin, _xMax, _yMax) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _x0, _y0, _x1, _y1, _xMin, _yMin, _xMax, _yMax";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _inside = 0;
      let _left = 1;
      let _right = 2;
      let _bottom = 4;
      let _top = 8;
      let _computeOutCode_2 = sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _code = _inside;
        /* Statements */
        _if_3(
          _lessThanSign_2(_x, _xMin),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _code = _bitOr_2(_code, _left);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_x, _xMax),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _code = _bitOr_2(_code, _right);
              }, []),
            );
          }, []),
        );
        _if_3(
          _lessThanSign_2(_y, _yMin),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _code = _bitOr_2(_code, _bottom);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_y, _yMax),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _code = _bitOr_2(_code, _top);
              }, []),
            );
          }, []),
        );
        return _code;
      }, ["x", "y"]);
      let _outCode0 = _computeOutCode_2(_x0, _y0);
      let _outCode1 = _computeOutCode_2(_x1, _y1);
      let _accept = false;
      let _completed = false;
      /* Statements */
      _whileFalse_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _completed;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _not_1(_isNonZero_1(_bitOr_2(_outCode0, _outCode1))),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _accept = true;
              return _completed = true;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _isNonZero_1(_bitAnd_2(_outCode0, _outCode1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _completed = true;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _x = null;
                  let _y = null;
                  let _outCodeOut = _if_3(
                    _greaterThanSign_2(_outCode1, _outCode0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _outCode1;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _outCode0;
                    }, []),
                  );
                  /* Statements */
                  _if_3(
                    _isNonZero_1(_bitAnd_2(_outCodeOut, _top)),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x = _plusSign_2(
                        _x0,
                        _solidus_2(
                          _asterisk_2(
                            _hyphenMinus_2(_x1, _x0),
                            _hyphenMinus_2(_yMax, _y0),
                          ),
                          _hyphenMinus_2(_y1, _y0),
                        ),
                      );
                      return _y = _yMax;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _if_3(
                        _isNonZero_1(_bitAnd_2(_outCodeOut, _bottom)),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          _x = _plusSign_2(
                            _x0,
                            _solidus_2(
                              _asterisk_2(
                                _hyphenMinus_2(_x1, _x0),
                                _hyphenMinus_2(_yMin, _y0),
                              ),
                              _hyphenMinus_2(_y1, _y0),
                            ),
                          );
                          return _y = _yMin;
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _if_3(
                            _isNonZero_1(_bitAnd_2(_outCodeOut, _right)),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              _y = _plusSign_2(
                                _y0,
                                _solidus_2(
                                  _asterisk_2(
                                    _hyphenMinus_2(_y1, _y0),
                                    _hyphenMinus_2(_xMax, _x0),
                                  ),
                                  _hyphenMinus_2(_x1, _x0),
                                ),
                              );
                              return _x = _xMax;
                            }, []),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              return _ifTrue_2(
                                _isNonZero_1(_bitAnd_2(_outCodeOut, _left)),
                                sl.annotateFunction(function () {
                                  /* ArityCheck */
                                  if (arguments.length !== 0) {
                                    const errorMessage = "Arity: expected 0, ";
                                    throw new Error(errorMessage);
                                  } /* Statements */
                                  _y = _plusSign_2(
                                    _y0,
                                    _solidus_2(
                                      _asterisk_2(
                                        _hyphenMinus_2(_y1, _y0),
                                        _hyphenMinus_2(_xMin, _x0),
                                      ),
                                      _hyphenMinus_2(_x1, _x0),
                                    ),
                                  );
                                  return _x = _xMin;
                                }, []),
                              );
                            }, []),
                          );
                        }, []),
                      );
                    }, []),
                  );
                  return _if_3(
                    _equalsSign_2(_outCodeOut, _outCode0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x0 = _x;
                      _y0 = _y;
                      return _outCode0 = _computeOutCode_2(_x0, _y0);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x1 = _x;
                      _y1 = _y;
                      return _outCode1 = _computeOutCode_2(_x1, _y1);
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
      return [_accept, _x0, _y0, _x1, _y1];
    },
    ["x0", "y0", "x1", "y1", "xMin", "yMin", "xMax", "yMax"],
  ),
  "{ :x0 :y0 :x1 :y1 :xMin :yMin :xMax :yMax | let inside = 0; let left = 1; let right = 2; let bottom = 4; let top = 8; let computeOutCode = { :x :y | let code = inside; if((<(x, xMin)), { code := bitOr(code,left) }, { ifTrue((>(x, xMax)), { code := bitOr(code,right) }) }); if((<(y, yMin)), { code := bitOr(code,bottom) }, { ifTrue((>(y, yMax)), { code := bitOr(code,top) }) }); code }; let outCode0 = computeOutCode(x0, y0); let outCode1 = computeOutCode(x1, y1); let accept = false; let completed = false; whileFalse({ completed }, { if(not(isNonZero(bitOr(outCode0,outCode1))), { accept := true; completed := true }, { if(isNonZero(bitAnd(outCode0,outCode1)), { completed := true }, { let x = nil; let y = nil; let outCodeOut = if((>(outCode1, outCode0)), { outCode1 }, { outCode0 }); if(isNonZero(bitAnd(outCodeOut,top)), { x := +(x0, (/(*((-(x1, x0)), (-(yMax, y0))), (-(y1, y0))))); y := yMax }, { if(isNonZero(bitAnd(outCodeOut,bottom)), { x := +(x0, (/(*((-(x1, x0)), (-(yMin, y0))), (-(y1, y0))))); y := yMin }, { if(isNonZero(bitAnd(outCodeOut,right)), { y := +(y0, (/(*((-(y1, y0)), (-(xMax, x0))), (-(x1, x0))))); x := xMax }, { ifTrue(isNonZero(bitAnd(outCodeOut,left)), { y := +(y0, (/(*((-(y1, y0)), (-(xMin, x0))), (-(x1, x0))))); x := xMin }) }) }) }); if((=(outCodeOut, outCode0)), { x0 := x; y0 := y; outCode0 := computeOutCode(x0, y0) }, { x1 := x; y1 := y; outCode1 := computeOutCode(x1, y1) }) }) }) }); [accept, x0, y0, x1, y1] }",
);

sl.extendTypeOrTraitWithMethod(
  "Line",
  "Line",
  "cohenSutherlandAlgorithm",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL10 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
    let _a = _at_2(__SPL10, 1);
    let _b = _at_2(__SPL10, 2);
    let _c = _lowerLeft_1(_aRectangle);
    let _d = _upperRight_1(_aRectangle);
    let __SPL11 = _assertIsOfSize_2(
      _cohenSutherlandAlgorithm_8(
        _at_2(_a, 1),
        _at_2(_a, 2),
        _at_2(_b, 1),
        _at_2(_b, 2),
        _at_2(_c, 1),
        _at_2(_c, 2),
        _at_2(_d, 1),
        _at_2(_d, 2),
      ),
      5,
    );
    let _accept = _at_2(__SPL11, 1);
    let _x1 = _at_2(__SPL11, 2);
    let _y1 = _at_2(__SPL11, 3);
    let _x2 = _at_2(__SPL11, 4);
    let _y2 = _at_2(__SPL11, 5);
    /* Statements */
    return _if_3(
      _accept,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1([[_x1, _y1], [_x2, _y2]]);
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
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle | let __SPL10 = assertIsOfSize(vertexCoordinates(self), 2); let a = at(__SPL10, 1); let b = at(__SPL10, 2); let c = lowerLeft(aRectangle); let d = upperRight(aRectangle); let __SPL11 = assertIsOfSize(cohenSutherlandAlgorithm(at(a, 1), at(a, 2), at(b, 1), at(b, 2), at(c, 1), at(c, 2), at(d, 1), at(d, 2)), 5); let accept = at(__SPL11, 1); let x1 = at(__SPL11, 2); let y1 = at(__SPL11, 3); let x2 = at(__SPL11, 4); let y2 = at(__SPL11, 5); if(accept, { Line([[x1, y1], [x2, y2]]) }, { nil }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinKnotCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinKnotCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'SchareinKnotCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinLinkCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinLinkCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'SchareinLinkCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinMinimalKnotCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalKnotCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'SchareinMinimalKnotCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinMinimalLinkCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalLinkCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'SchareinMinimalLinkCatalogue') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinKnotCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinKnotCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinLinkCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinLinkCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinMinimalKnotCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinMinimalKnotCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinMinimalLinkCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinMinimalLinkCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
