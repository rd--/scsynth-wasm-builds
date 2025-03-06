sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "centi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-2);
  }, ["self"]),
  "{ :self | *(self, 1E-2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "deca",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E1);
  }, ["self"]),
  "{ :self | *(self, 1E1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "deci",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-1);
  }, ["self"]),
  "{ :self | *(self, 1E-1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "hecto",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E2);
  }, ["self"]),
  "{ :self | *(self, 1E2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "giga",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E9);
  }, ["self"]),
  "{ :self | *(self, 1E9) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "mega",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E6);
  }, ["self"]),
  "{ :self | *(self, 1E6) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "kilo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E3);
  }, ["self"]),
  "{ :self | *(self, 1E3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "micro",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-6);
  }, ["self"]),
  "{ :self | *(self, 1E-6) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "milli",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-3);
  }, ["self"]),
  "{ :self | *(self, 1E-3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "nano",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-9);
  }, ["self"]),
  "{ :self | *(self, 1E-9) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "pico",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-12);
  }, ["self"]),
  "{ :self | *(self, 1E-12) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiUnit",
  "terra",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E12);
  }, ["self"]),
  "{ :self | *(self, 1E12) }",
);

sl.addType(
  false,
  "SiUnit",
  "SiUnit",
  ["Object"],
  ["symbol", "name", "dimension", "quantity"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SiUnit",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "equalsSign",
  ["self", "anSiUnit"],
  sl.annotateFunction(function (_self, _anSiUnit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anSiUnit";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anSiUnit);
  }, ["self", "anSiUnit"]),
  "{ :self :anSiUnit | ==(self, anSiUnit) }",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "isBaseUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_siBaseUnitList_1(_system), _self);
  }, ["self"]),
  "{ :self | includes(siBaseUnitList(system),self) }",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "isDerivedUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isBaseUnit_1(_self));
  }, ["self"]),
  "{ :self | not(isBaseUnit(self)) }",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "namedBy",
  ["self", "symbolOrName"],
  sl.annotateFunction(function (_self, _symbolOrName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _symbolOrName";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_symbol_1(_self), _symbolOrName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_self), _symbolOrName);
      }, []),
    );
  }, ["self", "symbolOrName"]),
  "{ :self :symbolOrName | |(=(symbol(self), symbolOrName), { =(name(self), symbolOrName) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "SiUnit",
  ["self", "name", "dimension", "quantity"],
  sl.annotateFunction(function (_self, _name, _dimension, _quantity) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _name, _dimension, _quantity";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newSiUnit_0(),
      _self,
      _name,
      _dimension,
      _quantity,
    );
  }, ["self", "name", "dimension", "quantity"]),
  "{ :self :name :dimension :quantity | initializeSlots(newSiUnit(),self, name, dimension, quantity) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "siBaseUnit",
  ["self", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(
      _siBaseUnitList_1(_system),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _namedBy_2(_each, _self);
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exceptionBlock_0();
      }, []),
    );
  }, ["self", "exceptionBlock:/0"]),
  "{ :self :exceptionBlock:/0 | detectIfNone(siBaseUnitList(system), { :each | namedBy(each,self) }, { exceptionBlock() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "siUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _siBaseUnit_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _detectIfNone_3(
          _siDerivedUnitList_1(_system),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _namedBy_2(_each, _self);
          }, ["each"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "siUnit");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | siBaseUnit(self, { detectIfNone(siDerivedUnitList(system), { :each | namedBy(each,self) }, { error(self,'siUnit') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "SiUnit",
  "siBaseUnitList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _cache_1(_self),
      "siBaseUnitList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _SiUnit_4("m", "meter", "L", "length"),
          _SiUnit_4("s", "second", "T", "time"),
          _SiUnit_4("mole", "mole", "N", "amount of substance"),
          _SiUnit_4("A", "ampere", "I", "electric current"),
          _SiUnit_4("K", "kelvin", "Θ", "thermodynamic temperature"),
          _SiUnit_4("cd", "candela", "J", "luminous intensity"),
          _SiUnit_4("kg", "kilogram", "M", "mass"),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | atIfAbsentPut(cache(self), 'siBaseUnitList', { [SiUnit('m','meter', 'L', 'length'), SiUnit('s','second', 'T', 'time'), SiUnit('mole','mole', 'N', 'amount of substance'), SiUnit('A','ampere', 'I', 'electric current'), SiUnit('K','kelvin', 'Θ', 'thermodynamic temperature'), SiUnit('cd','candela', 'J', 'luminous intensity'), SiUnit('kg','kilogram', 'M', 'mass')] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "SiUnit",
  "siDerivedUnitList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _cache_1(_self),
      "siDerivedUnitList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _SiUnit_4("Hz", "hertz", "f", "frequency"),
          _SiUnit_4("rad", "radian", null, "angle"),
          _SiUnit_4("sr", "steradian", "Ω", "solid angle"),
          _SiUnit_4("N", "newton", ["F", "W"], ["force", "weight"]),
          _SiUnit_4("Pa", "pascal", ["p", "σ"], ["pressure", "stress"]),
          _SiUnit_4("J", "joule", ["E", "W", "Q"], ["energy", "work", "heat"]),
          _SiUnit_4("W", "watt", ["P", "Φe"], ["power", "radiant flux"]),
          _SiUnit_4("lm", "lumen", "Φv", "luminous flux"),
          _SiUnit_4("lx", "lux", "Ev", "illuminance"),
          _SiUnit_4("Bq", "becquerel", null, "radioactivity"),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | atIfAbsentPut(cache(self), 'siDerivedUnitList', { [SiUnit('Hz','hertz', 'f', 'frequency'), SiUnit('rad','radian', nil, 'angle'), SiUnit('sr','steradian', 'Ω', 'solid angle'), SiUnit('N','newton', ['F', 'W'], ['force', 'weight']), SiUnit('Pa','pascal', ['p', 'σ'], ['pressure', 'stress']), SiUnit('J','joule', ['E', 'W', 'Q'], ['energy', 'work', 'heat']), SiUnit('W','watt', ['P', 'Φe'], ['power', 'radiant flux']), SiUnit('lm','lumen', 'Φv', 'luminous flux'), SiUnit('lx','lux', 'Ev', 'illuminance'), SiUnit('Bq','becquerel', nil, 'radioactivity')] }) }",
);
