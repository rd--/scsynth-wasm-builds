sl.addType(
  false,
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HexagonalCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HexagonalCoordinates",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isHexagonalCoordinates_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _HexagonalCoordinates_1(
          _plusSign_2(_coordinates_1(_self), _coordinates_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "HexagonalCoordinates>>+");
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isHexagonalCoordinates(operand), { HexagonalCoordinates(+(coordinates(self), coordinates(operand))) }, { error(self,'HexagonalCoordinates>>+') }) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isHexagonalCoordinates_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _HexagonalCoordinates_1(
          _hyphenMinus_2(_coordinates_1(_self), _coordinates_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "HexagonalCoordinates>>-");
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isHexagonalCoordinates(operand), { HexagonalCoordinates(-(coordinates(self), coordinates(operand))) }, { error(self,'HexagonalCoordinates>>-') }) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "asterisk",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _HexagonalCoordinates_1(
      _asterisk_2(_coordinates_1(_self), _aNumber),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | HexagonalCoordinates(*(coordinates(self), aNumber)) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(
      _fromHexagonalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | CartesianCoordinates(fromHexagonalCoordinates(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_1(_self);
  }, ["self"]),
  "{ :self | coordinates(self) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "euclideanDistance",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _q1 = _at_2(__SplVar1, 1);
    let _r1 = _at_2(__SplVar1, 2);
    let __SplUnused7 = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_coordinates_1(_operand), 3);
    let _q2 = _at_2(__SplVar2, 1);
    let _r2 = _at_2(__SplVar2, 2);
    let __SplUnused8 = _at_2(__SplVar2, 3);
    /* Statements */
    return _sqrt_1(
      _plusSign_2(
        _plusSign_2(
          _square_1(_hyphenMinus_2(_q2, _q1)),
          _square_1(_hyphenMinus_2(_r2, _r1)),
        ),
        _asterisk_2(_hyphenMinus_2(_q2, _q1), _hyphenMinus_2(_r2, _r1)),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand | let __SplVar1 = assertIsOfSize(coordinates(self), 3); let q1 = at(__SplVar1, 1); let r1 = at(__SplVar1, 2); let _ = at(__SplVar1, 3); let __SplVar2 = assertIsOfSize(coordinates(operand), 3); let q2 = at(__SplVar2, 1); let r2 = at(__SplVar2, 2); let _ = at(__SplVar2, 3); sqrt((+(+(square((-(q2, q1))), square((-(r2, r1)))), (*((-(q2, q1)), (-(r2, r1))))))) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "diagonalNeighbourVectors",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return [[+2, -1, -1], [+1, -2, +1], [-1, -1, +2], [-2, +1, +1], [
      -1,
      +2,
      -1,
    ], [+1, +1, -2]];
  }, ["unused"]),
  "{ :unused | [[+2, -1, -1], [+1, -2, +1], [-1, -1, +2], [-2, +1, +1], [-1, +2, -1], [+1, +1, -2]] }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "diagonalNeighbours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _coordinates_1(_self);
    /* Statements */
    return _collect_2(
      _diagonalNeighbourVectors_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _HexagonalCoordinates_1(_plusSign_2(_c, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let c = coordinates(self); collect(diagonalNeighbourVectors(self), { :each | HexagonalCoordinates(+(c, each)) }) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "manhattanDistance",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_abs_1(_coordinates_1(_hyphenMinus_2(_self, _operand))));
  }, ["self", "operand"]),
  "{ :self :operand | max(abs(coordinates((-(self, operand))))) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "nearestNeighbourVectors",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return [[+1, 0, -1], [+1, -1, 0], [0, -1, +1], [-1, 0, +1], [-1, +1, 0], [
      0,
      +1,
      -1,
    ]];
  }, ["unused"]),
  "{ :unused | [[+1, 0, -1], [+1, -1, 0], [0, -1, +1], [-1, 0, +1], [-1, +1, 0], [0, +1, -1]] }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "nearestNeighbours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _coordinates_1(_self);
    /* Statements */
    return _collect_2(
      _nearestNeighbourVectors_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _HexagonalCoordinates_1(_plusSign_2(_c, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let c = coordinates(self); collect(nearestNeighbourVectors(self), { :each | HexagonalCoordinates(+(c, each)) }) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _HexagonalCoordinates_1(
      _roundedHexagonalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | HexagonalCoordinates(roundedHexagonalCoordinates(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "HexagonalCoordinates",
  "HexagonalCoordinates",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "HexagonalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _equalsSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addLast_2(
          _self,
          _hyphenMinus_2(_hyphenMinus_2(0, _at_2(_self, 1)), _at_2(_self, 2)),
        );
      }, []),
    );
    return _if_3(
      _equalsSign_2(_size_1(_self), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newHexagonalCoordinates_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "HexagonalCoordinates: invalid parameters");
      }, []),
    );
  }, ["self"]),
  "{ :self | ifTrue((=(size(self), 2)), { addLast(self,-(-(0, at(self, 1)), at(self, 2))) }); if((=(size(self), 3)), { initializeSlots(newHexagonalCoordinates(),self) }, { error(self,'HexagonalCoordinates: invalid parameters') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "fromHexagonalCoordinates",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _sqrt_1(3);
    let _basisVectors = _fromPolarCoordinates_1([[_m, _theta], [
      _m,
      _plusSign_2(_theta, _degree_1(60)),
    ]]);
    /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includes_2([2, 3], _size_1(_v)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _q = _at_2(_v, 1);
            let _r = _at_2(_v, 2);
            /* Statements */
            return _plusSign_2(
              _asterisk_2(_q, _at_2(_basisVectors, 1)),
              _asterisk_2(_r, _at_2(_basisVectors, 2)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "fromHexagonalCoordinates: invalid coordinates",
            );
          }, []),
        );
      }, ["v"]),
    );
  }, ["self", "theta"]),
  "{ :self :theta | let m = sqrt(3); let basisVectors = fromPolarCoordinates([[m, theta], [m, +(theta, degree(60))]]); atVectorOrElementwise(self, { :v | if(includes([2, 3],size(v)), { let q = at(v, 1); let r = at(v, 2); +((*(q, at(basisVectors, 1))), (*(r, at(basisVectors, 2)))) }, { error(self,'fromHexagonalCoordinates: invalid coordinates') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "fromHexagonalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromHexagonalCoordinates_2(_self, 0);
  }, ["self"]),
  "{ :self | fromHexagonalCoordinates(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "polygonalHexagonalGrid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _Polygon_1(_self);
    let _b = _coordinateBoundingBox_1(_self);
    let _answer = [];
    let __SplVar3 = _assertIsOfSize_2(_at_2(_b, 1), 2);
    let _x1 = _at_2(__SplVar3, 1);
    let _y1 = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2(_at_2(_b, 2), 2);
    let _x2 = _at_2(__SplVar4, 1);
    let _y2 = _at_2(__SplVar4, 2);
    let _m = _solidus_2(1, _sqrt_1(3));
    let _k = 3;
    /* Statements */
    _toDo_3(
      _hyphenMinus_2(_y1, _k),
      _plusSign_2(_y2, _k),
      sl.annotateFunction(function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _rOffset = _floor_1(_solidus_2(_r, 2));
        /* Statements */
        return _toDo_3(
          _hyphenMinus_2(_hyphenMinus_2(_x1, _rOffset), _k),
          _plusSign_2(_hyphenMinus_2(_x2, _rOffset), _k),
          sl.annotateFunction(function (_q) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _q";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = _hyphenMinus_2(_hyphenMinus_2(0, _q), _r);
            let _c = _asterisk_2(
              _fromHexagonalCoordinates_1([_q, _r, _s]),
              0.5,
            );
            let _h = _regularPolygon_4(6, _c, 0.5, _pi_1(0.5));
            /* Statements */
            return _ifTrue_2(
              _anySatisfy_2(
                _vertexCoordinates_1(_h),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _containsPoint_2(_p, _each);
                }, ["each"]),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _h);
              }, []),
            );
          }, ["q"]),
        );
      }, ["r"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let p = Polygon(self); let b = coordinateBoundingBox(self); let answer = []; let __SplVar3 = assertIsOfSize(at(b, 1), 2); let x1 = at(__SplVar3, 1); let y1 = at(__SplVar3, 2); let __SplVar4 = assertIsOfSize(at(b, 2), 2); let x2 = at(__SplVar4, 1); let y2 = at(__SplVar4, 2); let m = /(1, sqrt(3)); let k = 3; toDo((-(y1, k)), +(y2, k), { :r | let rOffset = floor((/(r, 2))); toDo((-(-(x1, rOffset), k)), +(-(x2, rOffset), k), { :q | let s = -(-(0, q), r); let c = *(fromHexagonalCoordinates([q, r, s]), 0.5); let h = regularPolygon(6,c, 0.5, pi(0.5)); ifTrue(anySatisfy(vertexCoordinates(h), { :each | containsPoint(p,each) }), { add(answer,h) }) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "rectangularHexagonalGrid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonalHexagonalGrid_1(
      _vertexCoordinates_1(_asPolygon_1(_asRectangle_1(_self))),
    );
  }, ["self"]),
  "{ :self | polygonalHexagonalGrid(vertexCoordinates(asPolygon(asRectangle(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "roundedHexagonalCoordinates",
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
        } /* Temporaries */
        let __SplVar5 = _assertIsOfSize_2(_self, 3);
        let _q = _at_2(__SplVar5, 1);
        let _r = _at_2(__SplVar5, 2);
        let _s = _at_2(__SplVar5, 3);
        let _qR = _round_1(_q);
        let _rR = _round_1(_r);
        let _sR = _round_1(_s);
        let _qD = _abs_1(_hyphenMinus_2(_qR, _q));
        let _rD = _abs_1(_hyphenMinus_2(_rR, _r));
        let _sD = _abs_1(_hyphenMinus_2(_sR, _s));
        /* Statements */
        _if_3(
          _ampersand_2(
            _greaterThanSign_2(_qD, _rD),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSign_2(_qD, _sD);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _qD = _hyphenMinus_2(_hyphenMinus_2(0, _rD), _sD);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _greaterThanSign_2(_rD, _sD),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _rD = _hyphenMinus_2(_hyphenMinus_2(0, _qD), _sD);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _sD = _hyphenMinus_2(_hyphenMinus_2(0, _qD), _rD);
              }, []),
            );
          }, []),
        );
        return [_qR, _rR, _sR];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _roundedHexagonalCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let __SplVar5 = assertIsOfSize(self, 3); let q = at(__SplVar5, 1); let r = at(__SplVar5, 2); let s = at(__SplVar5, 3); let qR = round(q); let rR = round(r); let sR = round(s); let qD = abs((-(qR, q))); let rD = abs((-(rR, r))); let sD = abs((-(sR, s))); if((&(>(qD, rD), { >(qD, sD) })), { qD := -(-(0, rD), sD) }, { if((>(rD, sD)), { rD := -(-(0, qD), sD) }, { sD := -(-(0, qD), rD) }) }); [qR, rR, sR] }, { collect(self,roundedHexagonalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalCoordinates",
  "toHexagonalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar6 = _assertIsOfSize_2(_v, 2);
        let _x = _at_2(__SplVar6, 1);
        let _y = _at_2(__SplVar6, 2);
        let _m = _sqrt_1(3);
        let _q = _hyphenMinus_2(
          _asterisk_2(_solidus_2(_m, 3), _x),
          _asterisk_2(_solidus_2(1, 3), _y),
        );
        let _r = _asterisk_2(_solidus_2(2, 3), _y);
        let _s = _hyphenMinus_2(_hyphenMinus_2(0, _q), _r);
        /* Statements */
        return [_q, _r, _s];
      }, ["v"]),
    );
  }, ["self"]),
  "{ :self | atVectorOrElementwise(self, { :v | let __SplVar6 = assertIsOfSize(v, 2); let x = at(__SplVar6, 1); let y = at(__SplVar6, 2); let m = sqrt(3); let q = -((*(/(m, 3), x)), (*(/(1, 3), y))); let r = *(/(2, 3), y); let s = -(-(0, q), r); [q, r, s] }) }",
);
