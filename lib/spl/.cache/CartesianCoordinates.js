sl.addTrait("CartesianCoordinates", "CartesianCoordinates");

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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
    return _equalsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject | =(compare(self,anObject), -1) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_compare_2(_self, _anObject), 0);
  }, ["self", "anObject"]),
  "{ :self :anObject | <=(compare(self,anObject), 0) }",
);

sl.addMethodToExistingTrait(
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
    return _copy_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | copy(coordinates(self)) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "assertIsCompatibleOperand",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_typeOf_1(_self), _typeOf_1(_operand)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_self), _size_1(_operand));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _operand;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "assertIsCompatibleOperand: not of equal type or size",
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if((&((=(typeOf(self), typeOf(operand))), { =(size(self), size(operand)) })), { operand }, { error(self,'assertIsCompatibleOperand: not of equal type or size') }) }",
);

sl.addMethodToExistingTrait(
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
    return _at_2(_coordinates_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(coordinates(self),index) }",
);

sl.addMethodToExistingTrait(
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
    return _atPut_3(_coordinates_1(_self), _index, _value);
  }, ["self", "index", "value"]),
  "{ :self :index :value | atPut(coordinates(self),index, value) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "compare",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(
      _coordinates_1(_self),
      _coordinates_1(_assertIsCompatibleOperand_2(_self, _anObject)),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | compare(coordinates(self),coordinates(assertIsCompatibleOperand(self,anObject))) }",
);

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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
    return _euclideanDistance_2(
      _coordinates_1(_self),
      _coordinates_1(_assertIsCompatibleOperand_2(_self, _other)),
    );
  }, ["self", "other"]),
  "{ :self :other | euclideanDistance(coordinates(self),coordinates(assertIsCompatibleOperand(self,other))) }",
);

sl.addMethodToExistingTrait(
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
    return _sum_1(
      _asterisk_2(
        _coordinates_1(_self),
        _coordinates_1(_assertIsCompatibleOperand_2(_self, _anObject)),
      ),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | sum((*(coordinates(self), coordinates(assertIsCompatibleOperand(self,anObject))))) }",
);

sl.addMethodToExistingTrait(
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
    return _size_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | size(coordinates(self)) }",
);

sl.addMethodToExistingTrait(
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
    return _first_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | first(coordinates(self)) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "isOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_coordinates_1(_self), _isZero_1);
  }, ["self"]),
  "{ :self | allSatisfy(coordinates(self),isZero:/1) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "isPlanar",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_coordinates_1(_self)), 2);
  }, ["self"]),
  "{ :self | =(size(coordinates(self)), 2) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_2(_self, _negated_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self | coordinates(self, negated(coordinates(self))) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_sum_1(_squared_1(_coordinates_1(_self))));
  }, ["self"]),
  "{ :self | sqrt(sum(squared(coordinates(self)))) }",
);

sl.addMethodToExistingTrait(
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
    return _second_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | second(coordinates(self)) }",
);

sl.addMethodToExistingTrait(
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
    return _size_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | size(coordinates(self)) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self), 1) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "x",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_coordinates_1(_self), 1, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | atPut(coordinates(self), 1, anObject) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_v), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@CartesianCoordinates>>y: no y");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_v, 2);
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = coordinates(self); if((<(size(v), 2)), { error(self,'@CartesianCoordinates>>y: no y') }, { at(v, 2) }) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "y",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_coordinates_1(_self), 2, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | atPut(coordinates(self), 2, anObject) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_v), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@CartesianCoordinates>>z: no z");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_v, 3);
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = coordinates(self); if((<(size(v), 3)), { error(self,'@CartesianCoordinates>>z: no z') }, { at(v, 3) }) }",
);

sl.addMethodToExistingTrait(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "z",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_coordinates_1(_self), 3, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | atPut(coordinates(self), 3, anObject) }",
);

sl.addType(
  false,
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["Object", "Magnitude", "Indexable", "CartesianCoordinates"],
  ["coordinates"],
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

sl.copyTraitMethodsToType(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)]]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)], [
              "z",
              _z_1(_self),
            ]]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)], [
              "z",
              _z_1(_self),
            ], ["w", _w_1(_self)]]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asRecord: not x,y or x,y,z or x,z,y,w");
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(size(self), [->(2, { Record([['x', x(self)], ['y', y(self)]]) }), ->(3, { Record([['x', x(self)], ['y', y(self)], ['z', z(self)]]) }), ->(4, { Record([['x', x(self)], ['y', y(self)], ['z', z(self)], ['w', w(self)]]) })], { error(self,'asRecord: not x,y or x,y,z or x,z,y,w') }) }",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(_copy_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self | CartesianCoordinates(copy(coordinates(self))) }",
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
    return _CartesianCoordinates_1(
      _cross_2(
        _coordinates_1(_u),
        _coordinates_1(_assertIsCompatibleOperand_2(_u, _v)),
      ),
    );
  }, ["u", "v"]),
  "{ :u :v | CartesianCoordinates(cross(coordinates(u),coordinates(assertIsCompatibleOperand(u,v)))) }",
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
    return _at_2(_self, 1);
  }, ["self"]),
  "{ :self | at(self,1) }",
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
    return _at_2(_self, 2);
  }, ["self"]),
  "{ :self | at(self,2) }",
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
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
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
    return _at_2(_self, 3);
  }, ["self"]),
  "{ :self | at(self,3) }",
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
    return _CartesianCoordinates_1([_x_1(_self), _y_1(_self)]);
  }, ["self"]),
  "{ :self | CartesianCoordinates([x(self), y(self)]) }",
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
    return _CartesianCoordinates_1([_x_1(_self), _z_1(_self)]);
  }, ["self"]),
  "{ :self | CartesianCoordinates([x(self), z(self)]) }",
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
    return _CartesianCoordinates_1([_y_1(_self), _z_1(_self)]);
  }, ["self"]),
  "{ :self | CartesianCoordinates([y(self), z(self)]) }",
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
    } /* Statements */
    return _CartesianCoordinates_1(_self);
  }, ["self"]),
  "{ :self | CartesianCoordinates(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newCartesianCoordinates_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newCartesianCoordinates(),self) }",
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
    return _caseOf_3(
      _size_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL101 = _assertIsOfSize_2(_self, 2);
            let _x = _at_2(__SPL101, "x");
            let _y = _at_2(__SPL101, "y");
            /* Statements */
            return _CartesianCoordinates_1([_x, _y]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL102 = _assertIsOfSize_2(_self, 3);
            let _x = _at_2(__SPL102, "x");
            let _y = _at_2(__SPL102, "y");
            let _z = _at_2(__SPL102, "z");
            /* Statements */
            return _CartesianCoordinates_1([_x, _y, _z]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL103 = _assertIsOfSize_2(_self, 4);
            let _x = _at_2(__SPL103, "x");
            let _y = _at_2(__SPL103, "y");
            let _z = _at_2(__SPL103, "z");
            let _w = _at_2(__SPL103, "w");
            /* Statements */
            return _CartesianCoordinates_1([_x, _y, _z, _w]);
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
          "asCartesianCoordinates: not x,y or x,y,z or x,y,z,w",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(size(self), [->(2, { let __SPL101 = assertIsOfSize(self, 2); let x = at(__SPL101, 'x'); let y = at(__SPL101, 'y'); CartesianCoordinates([x, y]) }), ->(3, { let __SPL102 = assertIsOfSize(self, 3); let x = at(__SPL102, 'x'); let y = at(__SPL102, 'y'); let z = at(__SPL102, 'z'); CartesianCoordinates([x, y, z]) }), ->(4, { let __SPL103 = assertIsOfSize(self, 4); let x = at(__SPL103, 'x'); let y = at(__SPL103, 'y'); let z = at(__SPL103, 'z'); let w = at(__SPL103, 'w'); CartesianCoordinates([x, y, z, w]) })], { error(self,'asCartesianCoordinates: not x,y or x,y,z or x,y,z,w') }) }",
);
