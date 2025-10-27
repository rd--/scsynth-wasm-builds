sl.addType(
  false,
  "Sphere",
  "Sphere",
  ["Object", "Equatable", "Geometry"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Sphere",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Sphere",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Sphere",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_asterisk_2(_square_1(_radius_1(_self)), 4));
  }, ["self"]),
  "{ :self |\n\t\t(self.radius.square * 4).pi\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "diameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_radius_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.radius * 2\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_center_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.center.size\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSphere_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_center_1(_self), _center_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_radius_1(_self), _radius_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isSphere & {\n\t\t\taBlock(self.center, anObject.center) & {\n\t\t\t\taBlock(self.radius, anObject.radius)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "randomPoint",
  ["self", "aRandom", "shape"],
  sl.annotateFunction(function (_self, _aRandom, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aRandom, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    let _u = _UnitSphere_0();
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_randomPoint_2(_u, _aRandom), _r), _c);
      }, []),
      _shape,
    );
  }, ["self", "aRandom", "shape"]),
  "{ :self :aRandom :shape |\n\t\tlet c = self.center;\n\t\tlet r = self.radius;\n\t\tlet u = UnitSphere();\n\t\t{\n\t\t\tu.randomPoint(aRandom) * r + c\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
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
  "Sphere",
  "Sphere",
  "translateBy",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sphere_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  }, ["self", "factor"]),
  "{ :self :factor |\n\t\tSphere(self.center + factor, self.radius)\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.center[1]\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.center[2]\n\t}",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.center[3]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sphere",
  "Sphere",
  ["center", "radius"],
  sl.annotateFunction(function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSphere_0(), _center, _radius);
  }, ["center", "radius"]),
  "{ :center :radius |\n\t\tnewSphere().initializeSlots(center, radius)\n\t}",
);

sl.addType(
  false,
  "UnitSphere",
  "Sphere",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnitSphere",
);

sl.addMethodToExistingType(
  "UnitSphere",
  "Sphere",
  "randomPoint",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
    let _x2 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
    let _sum = _plusSign_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2));
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_sum, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPoint_2(_self, _r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _asterisk_2(2, _sqrt_1(_hyphenMinus_2(1, _sum)));
        /* Statements */
        return [
          _asterisk_2(_x1, _z),
          _asterisk_2(_x2, _z),
          _hyphenMinus_2(1, _asterisk_2(2, _sum)),
        ];
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r |\n\t\tlet x1 = r.nextRandomFloat * 2 - 1;\n\t\tlet x2 = r.nextRandomFloat * 2 - 1;\n\t\tlet sum = (x1 * x1) + (x2 * x2);\n\t\t(sum >= 1).if {\n\t\t\tself.randomPoint(r)\n\t\t} {\n\t\t\tlet z = 2 * (1 - sum).sqrt;\n\t\t\t[x1 * z, x2 * z, 1 - (2 * sum)]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnitSphere",
  "Sphere",
  "randomPoint",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPoint_2(_self, _r);
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\t{ self.randomPoint(r) } ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Sphere",
  "UnitSphere",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newUnitSphere_0();
  }, []),
  "{\n\t\tnewUnitSphere()\n\t}",
);
