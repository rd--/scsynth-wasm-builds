sl.addType(
  false,
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y", "z"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CartesianCoordinates",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "CartesianCoordinates",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "CartesianCoordinates",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compareBy_3(_self, _anObject, _lessThanSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | compareBy(self,anObject, <) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
      _index,
      [
        _hyphenMinusGreaterThanSign_2(
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
            return _x_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _y_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _z_1(_self);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "CartesianCoordinate>>at: index out of range");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | caseOfOtherwise(index, [->({ 1 }, { x(self) }), ->({ 2 }, { y(self) }), ->({ 3 }, { z(self) })], { error(self,'CartesianCoordinate>>at: index out of range') }) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "atPut",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
      _index,
      [
        _hyphenMinusGreaterThanSign_2(
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
            return _x_2(_self, _value);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _y_2(_self, _value);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _z_2(_self, _value);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "CartesianCoordinate>>atPut: index out of range",
        );
      }, []),
    );
  }, ["self", "index", "value"]),
  "{ :self :index :value | caseOfOtherwise(index, [->({ 1 }, { x(self, value) }), ->({ 2 }, { y(self, value) }), ->({ 3 }, { z(self, value) })], { error(self,'CartesianCoordinate>>atPut: index out of range') }) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_x_1(_self), _y_1(_self), _z_1(_self)];
  }, ["self"]),
  "{ :self | [x(self), y(self), z(self)] }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  }, ["self"]),
  "{ :self | Record([['x', x(self)], ['y', y(self)], ['z', z(self)]]) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "compareBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _aBlock_2(_x_1(_self), _x_1(_anObject)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_y_1(_self), _y_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_z_1(_self), _z_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | &(aBlock(x(self), x(anObject)), { &(aBlock(y(self), y(anObject)), { aBlock(z(self), z(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "cross",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_3(
      _hyphenMinus_2(
        _asterisk_2(_y_1(_u), _z_1(_v)),
        _asterisk_2(_z_1(_u), _y_1(_v)),
      ),
      _hyphenMinus_2(
        _asterisk_2(_z_1(_u), _x_1(_v)),
        _asterisk_2(_x_1(_u), _z_1(_v)),
      ),
      _hyphenMinus_2(
        _asterisk_2(_x_1(_u), _y_1(_v)),
        _asterisk_2(_y_1(_u), _x_1(_v)),
      ),
    );
  }, ["u", "v"]),
  "{ :u :v | CartesianCoordinates(-((*(y(u), z(v))), (*(z(u), y(v)))), -((*(z(u), x(v))), (*(x(u), z(v)))), -((*(x(u), y(v))), (*(y(u), x(v))))) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "dimension",
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

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "distance",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x_1(_other), _x_1(_self))),
          _squared_1(_hyphenMinus_2(_y_1(_other), _y_1(_self))),
        ),
        _squared_1(_hyphenMinus_2(_z_1(_other), _z_1(_self))),
      ),
    );
  }, ["self", "other"]),
  "{ :self :other | sqrt((+(+(squared((-(x(other), x(self)))), squared((-(y(other), y(self))))), squared((-(z(other), z(self))))))) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "dotProduct",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _asterisk_2(_x_1(_self), _x_1(_anObject)),
        _asterisk_2(_y_1(_self), _y_1(_anObject)),
      ),
      _asterisk_2(_z_1(_self), _z_1(_anObject)),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | +(+((*(x(self), x(anObject))), (*(y(self), y(anObject)))), (*(z(self), z(anObject)))) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  }, ["self"]),
  "{ :self | 3 }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "first",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x_1(_self);
  }, ["self"]),
  "{ :self | x(self) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isZero_1(_x_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isZero_1(_y_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isZero_1(_z_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isZero(x(self)), { &(isZero(y(self)), { isZero(z(self)) }) }) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _y_1(_self);
  }, ["self"]),
  "{ :self | y(self) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  }, ["self"]),
  "{ :self | 3 }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("CartesianCoordinates(%, %, %)", [
      _storeString_1(_x_1(_self)),
      _storeString_1(_y_1(_self)),
      _storeString_1(_z_1(_self)),
    ]);
  }, ["self"]),
  "{ :self | format('CartesianCoordinates(%, %, %)',[storeString(x(self)), storeString(y(self)), storeString(z(self))]) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "third",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _z_1(_self);
  }, ["self"]),
  "{ :self | z(self) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "xy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _y_1(_self));
  }, ["self"]),
  "{ :self | PlanarCoordinates(x(self), y(self)) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "xz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _z_1(_self));
  }, ["self"]),
  "{ :self | PlanarCoordinates(x(self), z(self)) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "yz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_y_1(_self), _z_1(_self));
  }, ["self"]),
  "{ :self | PlanarCoordinates(y(self), z(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["x", "y", "z"],
  sl.annotateFunction(function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newCartesianCoordinates_0(), _x, _y, _z);
  }, ["x", "y", "z"]),
  "{ :x :y :z | initializeSlots(newCartesianCoordinates(),x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CartesianCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL66 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL66, 1);
    let _y = _at_2(__SPL66, 2);
    let _z = _at_2(__SPL66, 3);
    /* Statements */
    return _CartesianCoordinates_3(_x, _y, _z);
  }, ["self"]),
  "{ :self | let __SPL66 = assertIsOfSize(self, 3); let x = at(__SPL66, 1); let y = at(__SPL66, 2); let z = at(__SPL66, 3); CartesianCoordinates(x, y, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "CartesianCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_3(
      _at_2(_self, "x"),
      _at_2(_self, "y"),
      _at_2(_self, "z"),
    );
  }, ["self"]),
  "{ :self | CartesianCoordinates(at(self, 'x'), at(self, 'y'), at(self, 'z')) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CartesianCoordinates",
  "linePlaneIntersection",
  ["p0", "n", "l0", "l"],
  sl.annotateFunction(function (_p0, _n, _l0, _l) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _p0, _n, _l0, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ln = _dot_2(_l, _n);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_ln, 0),
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
        } /* Temporaries */
        let _d = _solidus_2(_dot_2(_hyphenMinus_2(_p0, _l0), _n), _ln);
        /* Statements */
        return _plusSign_2(_l0, _asterisk_2(_l, _d));
      }, []),
    );
  }, ["p0", "n", "l0", "l"]),
  "{ :p0 :n :l0 :l | let ln = dot(l,n); if(isVeryCloseTo(ln,0), { nil }, { let d = /(dot((-(p0, l0)),n), ln); +(l0, (*(l, d))) }) }",
);
