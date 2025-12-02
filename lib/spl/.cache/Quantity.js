sl.addType(
  false,
  "Quantity",
  "Quantity",
  [
    "Object",
    "Storeable",
    "Equatable",
    "Comparable",
    "Magnitude",
    "Frequency",
    "Length",
    "Mass",
    "PlaneAngle",
    "Time",
  ],
  ["magnitude", "unit"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Frequency",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Length",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Mass",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "PlaneAngle",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Time",
  "Quantity",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCommensurate_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_magnitude_1(_self), _magnitude_1(_anObject));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "<: invalid operand");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isCommensurate(anObject).if {\n\t\t\tself.magnitude < anObject.magnitude\n\t\t} {\n\t\t\tself.error('<: invalid operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _reciprocal_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself * anObject.reciprocal\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _reciprocal_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself * anObject.reciprocal\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_negate_1(_magnitude_1(_self)), _unit_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self.magnitude.negate, self.unit)\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_negate_1(_magnitude_1(_self)), _unit_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self.magnitude.negate, self.unit)\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCommensurate_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quantity_2(
          _plusSign_2(_magnitude_1(_self), _magnitude_1(_anObject)),
          _unit_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "+: invalid operand");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isCommensurate(anObject).if {\n\t\t\tQuantity(\n\t\t\t\tself.magnitude + anObject.magnitude,\n\t\t\t\tself.unit\n\t\t\t)\n\t\t} {\n\t\t\tself.error('+: invalid operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCommensurate_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quantity_2(
          _plusSign_2(_magnitude_1(_self), _magnitude_1(_anObject)),
          _unit_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "+: invalid operand");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isCommensurate(anObject).if {\n\t\t\tQuantity(\n\t\t\t\tself.magnitude + anObject.magnitude,\n\t\t\t\tself.unit\n\t\t\t)\n\t\t} {\n\t\t\tself.error('+: invalid operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "subtract",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _negate_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself + anObject.negate\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _negate_1(_anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself + anObject.negate\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quantity_2(
          _asterisk_2(_magnitude_1(_self), _anObject),
          _unit_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "*: invalid operand");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tQuantity(\n\t\t\t\tself.magnitude * anObject,\n\t\t\t\tself.unit\n\t\t\t)\n\t\t} {\n\t\t\tself.error('*: invalid operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quantity_2(
          _asterisk_2(_magnitude_1(_self), _anObject),
          _unit_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "*: invalid operand");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tQuantity(\n\t\t\t\tself.magnitude * anObject,\n\t\t\t\tself.unit\n\t\t\t)\n\t\t} {\n\t\t\tself.error('*: invalid operand')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isQuantity_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_unit_1(_self), _unit_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_magnitude_1(_self), _magnitude_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isQuantity & {\n\t\t\tself.unit = anObject.unit & {\n\t\t\t\taBlock(self.magnitude, anObject.magnitude)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "hertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "hertz"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _magnitude_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_unit_1(_self), "seconds"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(1, _magnitude_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "hertz: not frequency");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'hertz').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\t(self.unit = 'seconds').if {\n\t\t\t\t1 / self.magnitude\n\t\t\t} {\n\t\t\t\tself.error('hertz: not frequency')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isCommensurate",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isQuantity_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_unit_1(_self), _unit_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isQuantity & {\n\t\t\tself.unit = anObject.unit\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "radians");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'radians'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isFrequency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "hertz");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'hertz'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "metres");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'metres'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isPlaneAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "radians");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'radians'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isMass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "kilograms");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'kilograms'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "isTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_unit_1(_self), "seconds");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'seconds'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "kilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "kilograms"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _magnitude_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "kilograms: not mass");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'kilograms').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('kilograms: not mass')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "metres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "metres"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _magnitude_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "metres: not length");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'metres').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('metres: not length')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "radians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "radians"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _magnitude_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "radians: not plane angle");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'radians').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('radians: not plane angle')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "seconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "seconds"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _magnitude_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "seconds: not time");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'seconds').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('seconds: not time')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "Quantity",
  ["magnitude", "unit"],
  sl.annotateFunction(function (_magnitude, _unit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _magnitude, _unit";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newQuantity_0(), _magnitude, _unit);
  }, ["magnitude", "unit"]),
  "{ :magnitude :unit |\n\t\tnewQuantity().initializeSlots(magnitude, unit)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "hertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "hertz");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'hertz') /* Hz */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "kilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "kilograms");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'kilograms') /* kg */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "metres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "metres");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'metres') /* m */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "radians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "radians");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'radians') /* rad */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Quantity",
  "seconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "seconds");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'seconds') /* s */\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Quantity",
  "magnitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _magnitude_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(magnitude:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Quantity",
  "unit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _unit_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(unit:/1)\n\t}",
);
