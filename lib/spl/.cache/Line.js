sl.addType(
  false,
  "Line",
  "Line",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "forSvg",
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
        let __SPL116 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
        let _p1 = _at_2(__SPL116, 1);
        let _p2 = _at_2(__SPL116, 2);
        let __SPL117 = _assertIsOfSize_2(_p1, 2);
        let _x1 = _at_2(__SPL117, 1);
        let _y1 = _at_2(__SPL117, 2);
        let __SPL118 = _assertIsOfSize_2(_p2, 2);
        let _x2 = _at_2(__SPL118, 1);
        let _y2 = _at_2(__SPL118, 2);
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
  '{ :self :options | if((=(vertexCount(self), 2)), { let precision = at(options, \'precision\'); let __SPL116 = assertIsOfSize(vertexCoordinates(self), 2); let p1 = at(__SPL116, 1); let p2 = at(__SPL116, 2); let __SPL117 = assertIsOfSize(p1, 2); let x1 = at(__SPL117, 1); let y1 = at(__SPL117, 2); let __SPL118 = assertIsOfSize(p2, 2); let x2 = at(__SPL118, 1); let y2 = at(__SPL118, 2); format(\'<line x1="%" y1="%" x2="%" y2="%" />\',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }, { format(\'<polyline points="%" />\',[asSvgPointList(vertexCoordinates(self),options)]) }) }',
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
    let __genSym121 = _whileTrue_2(
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
    let __SPL119 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SPL119, 1);
    let _y1 = _at_2(__SPL119, 2);
    let __SPL120 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SPL120, 1);
    let _y2 = _at_2(__SPL120, 2);
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
  "{ :self | let __SPL119 = assertIsOfSize(at(self, 1), 2); let x1 = at(__SPL119, 1); let y1 = at(__SPL119, 2); let __SPL120 = assertIsOfSize(at(self, 2), 2); let x2 = at(__SPL120, 1); let y2 = at(__SPL120, 2); let dx = abs((-(x2, x1))); let sx = if((<(x1, x2)), { 1 }, { -1 }); let dy = -(abs((-(y2, y1)))); let sy = if((<(y1, y2)), { 1 }, { -1 }); let e = +(dx, dy); let answer = []; whileTrue({ add(answer,[x1, y1]); if((&((==(x1, x2)), { ==(y1, y2) })), { false }, { let e2 = *(2, e); ifTrue((>=(e2, dy)), { e := +(e, dy); x1 := +(x1, sx) }); ifTrue((<=(e2, dx)), { e := +(e, dx); y1 := +(y1, sy) }); true }) }); answer }",
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
    let __SPL119 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SPL119, 1);
    let _y1 = _at_2(__SPL119, 2);
    let __SPL120 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SPL120, 1);
    let _y2 = _at_2(__SPL120, 2);
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
  "{ :self | let __SPL119 = assertIsOfSize(at(self, 1), 2); let x1 = at(__SPL119, 1); let y1 = at(__SPL119, 2); let __SPL120 = assertIsOfSize(at(self, 2), 2); let x2 = at(__SPL120, 1); let y2 = at(__SPL120, 2); let dx = abs((-(x2, x1))); let sx = if((<(x1, x2)), { 1 }, { -1 }); let dy = -(abs((-(y2, y1)))); let sy = if((<(y1, y2)), { 1 }, { -1 }); let e = +(dx, dy); let answer = []; whileTrue({ add(answer,[x1, y1]); if((&((==(x1, x2)), { ==(y1, y2) })), { false }, { let e2 = *(2, e); ifTrue((>=(e2, dy)), { e := +(e, dy); x1 := +(x1, sx) }); ifTrue((<=(e2, dx)), { e := +(e, dx); y1 := +(y1, sy) }); true }) }); answer }",
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
  "@Integer",
  "Line",
  "hilbertCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("A", "+BF-AFA-FB+"),
                _hyphenMinusGreaterThanSign_2("B", "-AF+BFB+FA-"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "A",
              _self,
            ),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          }, ["each"]),
        ),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, "F"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _angle = _plusSign_2(
              _angle,
              _if_3(
                _equalsSign_2(_each, "+"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(0.5);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(-0.5);
                }, []),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let angle = 0; let answer = [[0, 0]]; do(contents(select(last(substitutionSystem(asMap([->('A', '+BF-AFA-FB+'), ->('B', '-AF+BFB+FA-'), ->('F', 'F'), ->('+', '+'), ->('-', '-')]),'A', self)), { :each | includes('+-F',each) })), { :each | if((=(each, 'F')), { add(answer,+(last(answer), angleVector(angle))) }, { angle := +(angle, if((=(each, '+')), { pi(0.5) }, { pi(-0.5) })) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Line",
  "kochCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("F", "F+F--F+F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "F",
              _self,
            ),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          }, ["each"]),
        ),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, "F"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _angle = _plusSign_2(
              _angle,
              _if_3(
                _equalsSign_2(_each, "+"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(_Fraction_2(1n, 3n));
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(_Fraction_2(-1n, 3n));
                }, []),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let angle = 0; let answer = [[0, 0]]; do(contents(select(last(substitutionSystem(asMap([->('F', 'F+F--F+F'), ->('+', '+'), ->('-', '-')]),'F', self)), { :each | includes('+-F',each) })), { :each | if((=(each, 'F')), { add(answer,+(last(answer), angleVector(angle))) }, { angle := +(angle, if((=(each, '+')), { pi(Fraction(1L, 3L)) }, { pi(Fraction(-1L, 3L)) })) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Line",
  "peanoCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("X", "XFYFX+F+YFXFY-F-XFYFX"),
                _hyphenMinusGreaterThanSign_2("Y", "YFXFY-F-XFYFX+F+YFXFY"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "X",
              _self,
            ),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          }, ["each"]),
        ),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_each, "F"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _angle = _plusSign_2(
              _angle,
              _if_3(
                _equalsSign_2(_each, "+"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(0.5);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(-0.5);
                }, []),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let angle = 0; let answer = [[0, 0]]; do(contents(select(last(substitutionSystem(asMap([->('X', 'XFYFX+F+YFXFY-F-XFYFX'), ->('Y', 'YFXFY-F-XFYFX+F+YFXFY'), ->('F', 'F'), ->('+', '+'), ->('-', '-')]),'X', self)), { :each | includes('+-F',each) })), { :each | if((=(each, 'F')), { add(answer,+(last(answer), angleVector(angle))) }, { angle := +(angle, if((=(each, '+')), { pi(0.5) }, { pi(-0.5) })) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Line",
  "sierpinskiCurve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("X", "XF+G+XF--F--XF+G+X"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("G", "G"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "F--XF--F--XF",
              _self,
            ),
          ),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-FG", _each);
          }, ["each"]),
        ),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includes_2("FG", _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _angle = _plusSign_2(
              _angle,
              _if_3(
                _equalsSign_2(_each, "+"),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(0.25);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi_1(-0.25);
                }, []),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let angle = 0; let answer = [[0, 0]]; do(contents(select(last(substitutionSystem(asMap([->('X', 'XF+G+XF--F--XF+G+X'), ->('F', 'F'), ->('G', 'G'), ->('+', '+'), ->('-', '-')]),'F--XF--F--XF', self)), { :each | includes('+-FG',each) })), { :each | if((includes('FG',each)), { add(answer,+(last(answer), angleVector(angle))) }, { angle := +(angle, if((=(each, '+')), { pi(0.25) }, { pi(-0.25) })) }) }); answer }",
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
