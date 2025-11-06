sl.addTrait("CartesianCoordinates", "CartesianCoordinates");

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
  "{ :self :operand |\n\t\t(\n\t\t\t(self.typeOf = operand.typeOf) & {\n\t\t\t\tself.size = operand.size\n\t\t\t}\n\t\t).if {\n\t\t\toperand\n\t\t} {\n\t\t\tself.error('assertIsCompatibleOperand: not of equal type or size')\n\t\t}\n\t}",
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
  "{ :self :index |\n\t\tself.coordinates.at(index)\n\t}",
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
  "{ :self :index :value |\n\t\tself.coordinates.atPut(index, value)\n\t}",
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
  "{ :self :anObject |\n\t\tself.coordinates.compare(\n\t\t\tself.assertIsCompatibleOperand(anObject).coordinates\n\t\t)\n\t}",
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
  "{ :self |\n\t\t0\n\t}",
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
  "{ :self :other |\n\t\tself.coordinates.euclideanDistance(\n\t\t\tself.assertIsCompatibleOperand(other).coordinates\n\t\t)\n\t}",
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
  "{ :self :anObject |\n\t\t(\n\t\t\tself.coordinates * self.assertIsCompatibleOperand(anObject).coordinates\n\t\t).sum\n\t}",
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
  "{ :self |\n\t\tself.coordinates.size\n\t}",
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
  "{ :self |\n\t\tself.coordinates.first\n\t}",
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
  "{ :self |\n\t\tself.coordinates.allSatisfy(isZero:/1)\n\t}",
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
  "{ :self |\n\t\tself.coordinates.size = 2\n\t}",
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
    return _coordinates_2(_self, _negate_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates := self.coordinates.negate\n\t}",
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
    return _sqrt_1(_sum_1(_square_1(_coordinates_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates.square.sum.sqrt\n\t}",
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
  "{ :self |\n\t\tself.coordinates.second\n\t}",
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
  "{ :self |\n\t\tself.coordinates.size\n\t}",
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
  "{ :self |\n\t\tself.coordinates[1]\n\t}",
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
  "{ :self :anObject |\n\t\tself.coordinates[1] := anObject\n\t}",
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
  "{ :self |\n\t\tlet v = self.coordinates;\n\t\t(v.size < 2).if {\n\t\t\tself.error('@CartesianCoordinates>>y: no y')\n\t\t} {\n\t\t\tv[2]\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.coordinates[2] := anObject\n\t}",
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
  "{ :self |\n\t\tlet v = self.coordinates;\n\t\t(v.size < 3).if {\n\t\t\tself.error('@CartesianCoordinates>>z: no z')\n\t\t} {\n\t\t\tv[3]\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.coordinates[3] := anObject\n\t}",
);

sl.addType(
  false,
  "CartesianCoordinates",
  "CartesianCoordinates",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Comparable",
    "Magnitude",
    "Indexable",
    "CartesianCoordinates",
  ],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CartesianCoordinates",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "CartesianCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "CartesianCoordinates",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.size.caseOf([\n\t\t\t2 -> { (x: self.x, y: self.y) },\n\t\t\t3 -> { (x: self.x, y: self.y, z: self.z) },\n\t\t\t4 -> { (x: self.x, y: self.y, z: self.z, w: self.w) }\n\t\t]) {\n\t\t\tself.error('asRecord: not x,y or x,y,z or x,z,y,w')\n\t\t}\n\t}",
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
  "{ :u :v |\n\t\tCartesianCoordinates(\n\t\t\tu.coordinates.cross(\n\t\t\t\tu.assertIsCompatibleOperand(v).coordinates\n\t\t\t)\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.at(1)\n\t}",
);

sl.addMethodToExistingType(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_2(_self, _copy_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates := self.coordinates.copy\n\t}",
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
  "{ :self |\n\t\tself.at(2)\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :self |\n\t\tself.at(3)\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates([self.x, self.y])\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates([self.x, self.z])\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates([self.y, self.z])\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates(self)\n\t}",
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
  "{ :self |\n\t\tnewCartesianCoordinates().initializeSlots(self)\n\t}",
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
            let __SplVar1 = _assertIsOfSize_2(_self, 2);
            let _x = _at_2(__SplVar1, "x");
            let _y = _at_2(__SplVar1, "y");
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
            let __SplVar2 = _assertIsOfSize_2(_self, 3);
            let _x = _at_2(__SplVar2, "x");
            let _y = _at_2(__SplVar2, "y");
            let _z = _at_2(__SplVar2, "z");
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
            let __SplVar3 = _assertIsOfSize_2(_self, 4);
            let _x = _at_2(__SplVar3, "x");
            let _y = _at_2(__SplVar3, "y");
            let _z = _at_2(__SplVar3, "z");
            let _w = _at_2(__SplVar3, "w");
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
  "{ :self |\n\t\tself.size.caseOf(\n\t\t\t[\n\t\t\t\t2 -> {\n\t\t\t\t\tlet (x: x, y: y) = self;\n\t\t\t\t\tCartesianCoordinates([x y])\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tlet (x: x, y: y, z: z) = self;\n\t\t\t\t\tCartesianCoordinates([x y z])\n\t\t\t\t},\n\t\t\t\t4 -> {\n\t\t\t\t\tlet (x: x, y: y, z: z, w: w) = self;\n\t\t\t\t\tCartesianCoordinates([x y z w])\n\t\t\t\t}\n\t\t\t]\n\t\t) {\n\t\t\tself.error('asCartesianCoordinates: not x,y or x,y,z or x,y,z,w')\n\t\t}\n\t}",
);
