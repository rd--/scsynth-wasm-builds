sl.addType(
  false,
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HexagonalEfficientCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HexagonalEfficientCoordinates",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a1 = _at_2(__SplVar1, 1);
    let _r1 = _at_2(__SplVar1, 2);
    let _c1 = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_coordinates_1(_operand), 3);
    let _a2 = _at_2(__SplVar2, 1);
    let _r2 = _at_2(__SplVar2, 2);
    let _c2 = _at_2(__SplVar2, 3);
    /* Statements */
    return _HexagonalEfficientCoordinates_3(
      _bitXor_2(_a1, _a2),
      _plusSign_2(_plusSign_2(_r1, _r2), _bitAnd_2(_a1, _a2)),
      _plusSign_2(_plusSign_2(_c1, _c2), _bitAnd_2(_a1, _a2)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | let __SplVar1 = assertIsOfSize(coordinates(self), 3); let a1 = at(__SplVar1, 1); let r1 = at(__SplVar1, 2); let c1 = at(__SplVar1, 3); let __SplVar2 = assertIsOfSize(coordinates(operand), 3); let a2 = at(__SplVar2, 1); let r2 = at(__SplVar2, 2); let c2 = at(__SplVar2, 3); HexagonalEfficientCoordinates(bitXor(a1,a2), +(+(r1, r2), bitAnd(a1,a2)), +(+(c1, c2), bitAnd(a1,a2))) }",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _negate_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand | +(self, negate(operand)) }",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_operand_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_coordinates_1(_self), 3);
        let _a = _at_2(__SplVar3, 1);
        let _r = _at_2(__SplVar3, 2);
        let _c = _at_2(__SplVar3, 3);
        let _z = _asterisk_2(_a, _floor_1(_solidus_2(_operand, 2)));
        /* Statements */
        return _HexagonalEfficientCoordinates_3(
          _percentSign_2(_asterisk_2(_a, _operand), 2),
          _plusSign_2(_asterisk_2(_r, _operand), _z),
          _plusSign_2(_asterisk_2(_c, _operand), _z),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_negate_1(_self), _abs_1(_operand));
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isNonNegativeInteger(operand(self)), { let __SplVar3 = assertIsOfSize(coordinates(self), 3); let a = at(__SplVar3, 1); let r = at(__SplVar3, 2); let c = at(__SplVar3, 3); let z = *(a, floor((/(operand, 2)))); HexagonalEfficientCoordinates(%((*(a, operand)), 2), +((*(r, operand)), z), +((*(c, operand)), z)) }, { *(negate(self), abs(operand)) }) }",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(
      _fromHexagonalEfficientCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | CartesianCoordinates(fromHexagonalEfficientCoordinates(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
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
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a = _at_2(__SplVar4, 1);
    let _r = _at_2(__SplVar4, 2);
    let _c = _at_2(__SplVar4, 3);
    /* Statements */
    return _HexagonalEfficientCoordinates_3(
      _a,
      _hyphenMinus_2(_hyphenMinus_2(0, _r), _a),
      _hyphenMinus_2(_hyphenMinus_2(0, _c), _a),
    );
  }, ["self"]),
  "{ :self | let __SplVar4 = assertIsOfSize(coordinates(self), 3); let a = at(__SplVar4, 1); let r = at(__SplVar4, 2); let c = at(__SplVar4, 3); HexagonalEfficientCoordinates(a, -(-(0, r), a), -(-(0, c), a)) }",
);

sl.addMethodToExistingType(
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  "nearestNeighbours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a = _at_2(__SplVar5, 1);
    let _c = _at_2(__SplVar5, 2);
    let _r = _at_2(__SplVar5, 3);
    /* Statements */
    return _collect_2([
      [_a, _r, _plusSign_2(_c, 1)],
      [
        _hyphenMinus_2(1, _a),
        _hyphenMinus_2(_r, _hyphenMinus_2(1, _a)),
        _plusSign_2(_c, _a),
      ],
      [
        _hyphenMinus_2(1, _a),
        _hyphenMinus_2(_r, _hyphenMinus_2(1, _a)),
        _hyphenMinus_2(_c, _hyphenMinus_2(1, _a)),
      ],
      [_a, _r, _hyphenMinus_2(_c, 1)],
      [
        _hyphenMinus_2(1, _a),
        _plusSign_2(_r, _a),
        _hyphenMinus_2(_c, _hyphenMinus_2(1, _a)),
      ],
      [_hyphenMinus_2(1, _a), _plusSign_2(_r, _a), _plusSign_2(_c, _a)],
    ], _HexagonalEfficientCoordinates_1);
  }, ["self"]),
  "{ :self | let __SplVar5 = assertIsOfSize(coordinates(self), 3); let a = at(__SplVar5, 1); let c = at(__SplVar5, 2); let r = at(__SplVar5, 3); collect([[a, r, +(c, 1)], [-(1, a), -(r, (-(1, a))), +(c, a)], [-(1, a), -(r, (-(1, a))), -(c, (-(1, a)))], [a, r, -(c, 1)], [-(1, a), +(r, a), -(c, (-(1, a)))], [-(1, a), +(r, a), +(c, a)]],HexagonalEfficientCoordinates:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalEfficientCoordinates",
  "fromHexagonalEfficientCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar6, 1);
    let _r = _at_2(__SplVar6, 2);
    let _c = _at_2(__SplVar6, 3);
    /* Statements */
    return [
      _plusSign_2(_solidus_2(_a, 2), _c),
      _asterisk_2(_sqrt_1(3), _plusSign_2(_solidus_2(_a, 2), _r)),
    ];
  }, ["self"]),
  "{ :self | let __SplVar6 = assertIsOfSize(self, 3); let a = at(__SplVar6, 1); let r = at(__SplVar6, 2); let c = at(__SplVar6, 3); [+((/(a, 2)), c), *(sqrt(3), (+((/(a, 2)), r)))] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar7, 1);
    let _r = _at_2(__SplVar7, 2);
    let _c = _at_2(__SplVar7, 3);
    /* Statements */
    return _initializeSlots_2(_newHexagonalEfficientCoordinates_0(), [
      _a,
      _r,
      _c,
    ]);
  }, ["self"]),
  "{ :self | let __SplVar7 = assertIsOfSize(self, 3); let a = at(__SplVar7, 1); let r = at(__SplVar7, 2); let c = at(__SplVar7, 3); initializeSlots(newHexagonalEfficientCoordinates(),[a, r, c]) }",
);
