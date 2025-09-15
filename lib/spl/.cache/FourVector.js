/*  Requires: PlanarCoordinates CartesianCoordinates  */

sl.addType(
  false,
  "FourVector",
  "FourVector",
  ["Object"],
  ["w", "x", "y", "z"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FourVector",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isFourVector_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_asList_1(_self), _asList_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isFourVector(anObject), { =(asList(self), asList(anObject)) }) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "allZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_w_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_x_1(_self), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_y_1(_self), 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_z_1(_self), 0);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(=(w(self), 0), { &(=(x(self), 0), { &(=(y(self), 0), { =(z(self), 0) }) }) }) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_w_1(_self), _x_1(_self), _y_1(_self), _z_1(_self)];
  }, ["self"]),
  "{ :self | [w(self), x(self), y(self), z(self)] }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["w", _w_1(_self)], ["x", _x_1(_self)], [
      "y",
      _y_1(_self),
    ], ["z", _z_1(_self)]]);
  }, ["self"]),
  "{ :self | Record([['w', w(self)], ['x', x(self)], ['y', y(self)], ['z', z(self)]]) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 4;
  }, ["self"]),
  "{ :self | 4 }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "xy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1([_x_1(_self), _y_1(_self)]);
  }, ["self"]),
  "{ :self | PlanarCoordinates([x(self), y(self)]) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "xyz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1([_x_1(_self), _y_1(_self), _z_1(_self)]);
  }, ["self"]),
  "{ :self | CartesianCoordinates([x(self), y(self), z(self)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "FourVector",
  "FourVector",
  ["w", "x", "y", "z"],
  sl.annotateFunction(function (_w, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newFourVector_0(), _w, _x, _y, _z);
  }, ["w", "x", "y", "z"]),
  "{ :w :x :y :z | initializeSlots(newFourVector(),w, x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FourVector",
  "asFourVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL145 = _assertIsOfSize_2(_self, 4);
    let _w = _at_2(__SPL145, 1);
    let _x = _at_2(__SPL145, 2);
    let _y = _at_2(__SPL145, 3);
    let _z = _at_2(__SPL145, 4);
    /* Statements */
    return _FourVector_4(_w, _x, _y, _z);
  }, ["self"]),
  "{ :self | let __SPL145 = assertIsOfSize(self, 4); let w = at(__SPL145, 1); let x = at(__SPL145, 2); let y = at(__SPL145, 3); let z = at(__SPL145, 4); FourVector(w, x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "FourVector",
  "asFourVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _FourVector_4(
      _at_2(_self, "w"),
      _at_2(_self, "x"),
      _at_2(_self, "y"),
      _at_2(_self, "z"),
    );
  }, ["self"]),
  "{ :self | FourVector(at(self, 'w'), at(self, 'x'), at(self, 'y'), at(self, 'z')) }",
);
