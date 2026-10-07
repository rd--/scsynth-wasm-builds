sl.addType(
  false,
  "Quantity",
  "Quantity",
  [
    "Object",
    "Copy",
    "Store",
    "Equal",
    "Compare",
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
  "Copy",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Store",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Equal",
  "Quantity",
);

sl.copyTraitMethodsToType(
  "Compare",
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
  "equalBy",
  ["self", "anObject", "aBlock/2"],
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
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tanObject.isQuantity & {\n\t\t\tself.unit = anObject.unit & {\n\t\t\t\taBlock(self.magnitude, anObject.magnitude)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "Frequency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Frequency_1(_inHertz_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tFrequency(self.inHertz)\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "inHertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _unit_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "second",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(1, _magnitude_1(_self));
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "hertz",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _magnitude_1(_self);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "not time or frequency");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.unit.caseOf(\n\t\t\t[\n\t\t\t\t'second' -> { 1 / self.magnitude },\n\t\t\t\t'hertz' -> { self.magnitude }\n\t\t\t]\n\t\t) {\n\t\t\tself.error('not time or frequency')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "inKilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "kilogram"),
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
        return _error_2(_self, "inKilograms: not mass");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'kilogram').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('inKilograms: not mass')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "inMetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "metre"),
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
        return _error_2(_self, "inMetres: not length");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'metre').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('inMetres: not length')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "inRadians",
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
        return _error_2(_self, "inRadians: not plane angle");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.unit = 'radians').if {\n\t\t\tself.magnitude\n\t\t} {\n\t\t\tself.error('inRadians: not plane angle')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "inSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _unit_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "second",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _magnitude_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "hertz",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(1, _magnitude_1(_self));
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "not time or frequency");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.unit.caseOf(\n\t\t\t[\n\t\t\t\t'second' -> { self.magnitude },\n\t\t\t\t'hertz' -> { 1 / self.magnitude }\n\t\t\t]\n\t\t) {\n\t\t\tself.error('not time or frequency')\n\t\t}\n\t}",
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
    return _equalsSign_2(_unit_1(_self), "metre");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'metre'\n\t}",
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
    return _equalsSign_2(_unit_1(_self), "kilogram");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'kilogram'\n\t}",
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
    return _equalsSign_2(_unit_1(_self), "second");
  }, ["self"]),
  "{ :self |\n\t\tself.unit = 'second'\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "less",
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
  "Time",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Time_1(_inSeconds_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tTime(self.inSeconds)\n\t}",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
  "Times",
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
    return _Quantity_2(_self, "kilogram");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'kilogram') /* kg */\n\t}",
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
    return _Quantity_2(_self, "metre");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'metre') /* m */\n\t}",
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
    return _Quantity_2(_self, "second");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'second') /* s */\n\t}",
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
  "{ :self |\n\t\tself.collect(magnitude/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(unit/1)\n\t}",
);
