sl.addType(
  false,
  "Quantity",
  "Quantity",
  [
    "Object",
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
  "{ :self :anObject | if(isCommensurate(self,anObject), { <(magnitude(self), magnitude(anObject)) }, { error(self,'<: invalid operand') }) }",
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
  "{ :self :anObject | if(isNumber(anObject), { Quantity(*(magnitude(self), anObject), unit(self)) }, { error(self,'*: invalid operand') }) }",
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
  "{ :self :anObject | *(self, reciprocal(anObject)) }",
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
  "{ :self :anObject | if(isCommensurate(self,anObject), { Quantity(+(magnitude(self), magnitude(anObject)), unit(self)) }, { error(self,'+: invalid operand') }) }",
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
  "{ :self :anObject | +(self, negate(anObject)) }",
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
          _equalsSignEqualsSign_2(_unit_1(_self), _unit_1(_anObject)),
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
  "{ :self :anObject :aBlock:/2 | &(isQuantity(anObject), { &(==(unit(self), unit(anObject)), { aBlock(magnitude(self), magnitude(anObject)) }) }) }",
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
  "{ :self | if((=(unit(self), 'hertz')), { magnitude(self) }, { if((=(unit(self), 'seconds')), { /(1, magnitude(self)) }, { error(self,'hertz: not frequency') }) }) }",
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
  "{ :self :anObject | &(isQuantity(anObject), { =(unit(self), unit(anObject)) }) }",
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
  "{ :self | =(unit(self), 'radians') }",
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
  "{ :self | =(unit(self), 'hertz') }",
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
  "{ :self | =(unit(self), 'metres') }",
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
  "{ :self | =(unit(self), 'radians') }",
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
  "{ :self | =(unit(self), 'kilograms') }",
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
  "{ :self | =(unit(self), 'seconds') }",
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
  "{ :self | if((=(unit(self), 'kilograms')), { magnitude(self) }, { error(self,'kilograms: not mass') }) }",
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
  "{ :self | if((=(unit(self), 'metres')), { magnitude(self) }, { error(self,'metres: not length') }) }",
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
  "{ :self | Quantity(negate(magnitude(self)), unit(self)) }",
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
  "{ :self | if((=(unit(self), 'radians')), { magnitude(self) }, { error(self,'radians: not plane angle') }) }",
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
  "{ :self | if((=(unit(self), 'seconds')), { magnitude(self) }, { error(self,'seconds: not time') }) }",
);

sl.addMethodToExistingType(
  "Quantity",
  "Quantity",
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
  "{ :magnitude :unit | initializeSlots(newQuantity(),magnitude, unit) }",
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
  "{ :self | Quantity(self, 'hertz') }",
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
  "{ :self | Quantity(self, 'kilograms') }",
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
  "{ :self | Quantity(self, 'metres') }",
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
  "{ :self | Quantity(self, 'radians') }",
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
  "{ :self | Quantity(self, 'seconds') }",
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
  "{ :self | collect(self,magnitude:/1) }",
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
  "{ :self | collect(self,unit:/1) }",
);
