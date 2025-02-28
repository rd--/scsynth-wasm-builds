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
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isFourVector_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_asList_1(_self), _asList_1(_anObject));
    });
  },
  "{ :self :anObject | &(isFourVector(anObject), { =(asList(self), asList(anObject)) }) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_w_1(_self), _x_1(_self), _y_1(_self), _z_1(_self)];
  },
  "{ :self | [w(self), x(self), y(self), z(self)] }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["w", _w_1(_self)], ["x", _x_1(_self)], [
      "y",
      _y_1(_self),
    ], ["z", _z_1(_self)]]);
  },
  "{ :self | Record([['w', w(self)], ['x', x(self)], ['y', y(self)], ['z', z(self)]]) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_equalsSign_2(_w_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(_equalsSign_2(_x_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(_equalsSign_2(_y_1(_self), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_z_1(_self), 0);
        });
      });
    });
  },
  "{ :self | &(=(w(self), 0), { &(=(x(self), 0), { &(=(y(self), 0), { =(z(self), 0) }) }) }) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 4;
  },
  "{ :self | 4 }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "xy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _y_1(_self));
  },
  "{ :self | PlanarCoordinates(x(self), y(self)) }",
);

sl.addMethodToExistingType(
  "FourVector",
  "FourVector",
  "xyz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self | CartesianCoordinates(x(self), y(self), z(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "FourVector",
  "FourVector",
  ["w", "x", "y", "z"],
  function (_w, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newFourVector_0(), _w, _x, _y, _z);
  },
  "{ :w :x :y :z | initializeSlots(newFourVector(),w, x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FourVector",
  "asFourVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_self, 4);
    let _w = _at_2(__SPL1, 1);
    let _x = _at_2(__SPL1, 2);
    let _y = _at_2(__SPL1, 3);
    let _z = _at_2(__SPL1, 4);
    /* Statements */
    return _FourVector_4(_w, _x, _y, _z);
  },
  "{ :self | let __SPL1 = assertIsOfSize(self, 4); let w = at(__SPL1, 1); let x = at(__SPL1, 2); let y = at(__SPL1, 3); let z = at(__SPL1, 4); FourVector(w, x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "FourVector",
  "asFourVector",
  ["self"],
  function (_self) {
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
  },
  "{ :self | FourVector(at(self, 'w'), at(self, 'x'), at(self, 'y'), at(self, 'z')) }",
);
