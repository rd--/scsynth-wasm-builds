sl.addType(
  false,
  "HexagonalEfficientCoordinates",
  "HexagonalEfficientCoordinates",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
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
    let __SPL139 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a1 = _at_2(__SPL139, 1);
    let _r1 = _at_2(__SPL139, 2);
    let _c1 = _at_2(__SPL139, 3);
    let __SPL140 = _assertIsOfSize_2(_coordinates_1(_operand), 3);
    let _a2 = _at_2(__SPL140, 1);
    let _r2 = _at_2(__SPL140, 2);
    let _c2 = _at_2(__SPL140, 3);
    /* Statements */
    return _HexagonalEfficientCoordinates_3(
      _bitXor_2(_a1, _a2),
      _plusSign_2(_plusSign_2(_r1, _r2), _bitAnd_2(_a1, _a2)),
      _plusSign_2(_plusSign_2(_c1, _c2), _bitAnd_2(_a1, _a2)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | let __SPL139 = assertIsOfSize(coordinates(self), 3); let a1 = at(__SPL139, 1); let r1 = at(__SPL139, 2); let c1 = at(__SPL139, 3); let __SPL140 = assertIsOfSize(coordinates(operand), 3); let a2 = at(__SPL140, 1); let r2 = at(__SPL140, 2); let c2 = at(__SPL140, 3); HexagonalEfficientCoordinates(bitXor(a1,a2), +(+(r1, r2), bitAnd(a1,a2)), +(+(c1, c2), bitAnd(a1,a2))) }",
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
    return _plusSign_2(_self, _negated_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand | +(self, negated(operand)) }",
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
        let __SPL141 = _assertIsOfSize_2(_coordinates_1(_self), 3);
        let _a = _at_2(__SPL141, 1);
        let _r = _at_2(__SPL141, 2);
        let _c = _at_2(__SPL141, 3);
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
        return _asterisk_2(_negated_1(_self), _abs_1(_operand));
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isNonNegativeInteger(operand(self)), { let __SPL141 = assertIsOfSize(coordinates(self), 3); let a = at(__SPL141, 1); let r = at(__SPL141, 2); let c = at(__SPL141, 3); let z = *(a, floor((/(operand, 2)))); HexagonalEfficientCoordinates(%((*(a, operand)), 2), +((*(r, operand)), z), +((*(c, operand)), z)) }, { *(negated(self), abs(operand)) }) }",
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
  "negated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL142 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a = _at_2(__SPL142, 1);
    let _r = _at_2(__SPL142, 2);
    let _c = _at_2(__SPL142, 3);
    /* Statements */
    return _HexagonalEfficientCoordinates_3(
      _a,
      _hyphenMinus_2(_hyphenMinus_2(0, _r), _a),
      _hyphenMinus_2(_hyphenMinus_2(0, _c), _a),
    );
  }, ["self"]),
  "{ :self | let __SPL142 = assertIsOfSize(coordinates(self), 3); let a = at(__SPL142, 1); let r = at(__SPL142, 2); let c = at(__SPL142, 3); HexagonalEfficientCoordinates(a, -(-(0, r), a), -(-(0, c), a)) }",
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
    let __SPL143 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _a = _at_2(__SPL143, 1);
    let _c = _at_2(__SPL143, 2);
    let _r = _at_2(__SPL143, 3);
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
  "{ :self | let __SPL143 = assertIsOfSize(coordinates(self), 3); let a = at(__SPL143, 1); let c = at(__SPL143, 2); let r = at(__SPL143, 3); collect([[a, r, +(c, 1)], [-(1, a), -(r, (-(1, a))), +(c, a)], [-(1, a), -(r, (-(1, a))), -(c, (-(1, a)))], [a, r, -(c, 1)], [-(1, a), +(r, a), -(c, (-(1, a)))], [-(1, a), +(r, a), +(c, a)]],HexagonalEfficientCoordinates:/1) }",
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
    let __SPL144 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL144, 1);
    let _r = _at_2(__SPL144, 2);
    let _c = _at_2(__SPL144, 3);
    /* Statements */
    return [
      _plusSign_2(_solidus_2(_a, 2), _c),
      _asterisk_2(_sqrt_1(3), _plusSign_2(_solidus_2(_a, 2), _r)),
    ];
  }, ["self"]),
  "{ :self | let __SPL144 = assertIsOfSize(self, 3); let a = at(__SPL144, 1); let r = at(__SPL144, 2); let c = at(__SPL144, 3); [+((/(a, 2)), c), *(sqrt(3), (+((/(a, 2)), r)))] }",
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
    let __SPL145 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL145, 1);
    let _r = _at_2(__SPL145, 2);
    let _c = _at_2(__SPL145, 3);
    /* Statements */
    return _initializeSlots_2(_newHexagonalEfficientCoordinates_0(), [
      _a,
      _r,
      _c,
    ]);
  }, ["self"]),
  "{ :self | let __SPL145 = assertIsOfSize(self, 3); let a = at(__SPL145, 1); let r = at(__SPL145, 2); let c = at(__SPL145, 3); initializeSlots(newHexagonalEfficientCoordinates(),[a, r, c]) }",
);
