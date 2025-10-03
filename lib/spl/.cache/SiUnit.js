sl.addType(
  false,
  "SiUnit",
  "SiUnit",
  ["Object", "Equatable"],
  ["name", "symbol", "quantity", "dimension"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SiUnit",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SiUnit",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "assertIsValid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isBaseUnit_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isDerivedUnit_1(_self);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "invalid SI unit paramters");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((|(isBaseUnit(self), { isDerivedUnit(self) })), { self }, { error(self,'invalid SI unit paramters') }) }",
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
      _equalsSign_2(_name_1(_self), _symbolOrName),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_symbol_1(_self), _symbolOrName);
      }, []),
    );
  }, ["self", "symbolOrName"]),
  "{ :self :symbolOrName | |(=(name(self), symbolOrName), { =(symbol(self), symbolOrName) }) }",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
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
  "String",
  "SiUnit",
  "isBaseUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isBaseUnit_1(_siUnit_1(_self));
  }, ["self"]),
  "{ :self | isBaseUnit(siUnit(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "isDerivedUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDerivedUnit_1(_siUnit_1(_self));
  }, ["self"]),
  "{ :self | isDerivedUnit(siUnit(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "isKnownUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isBaseUnit_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isDerivedUnit_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self | |(isBaseUnit(self), { isDerivedUnit(self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "SiUnit",
  ["name", "symbol", "quantity", "dimension"],
  sl.annotateFunction(function (_name, _symbol, _quantity, _dimension) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _name, _symbol, _quantity, _dimension";
      throw new Error(errorMessage);
    } /* Statements */
    return _assertIsValid_1(
      _uncheckedSiUnit_4(_name, _symbol, _quantity, _dimension),
    );
  }, ["name", "symbol", "quantity", "dimension"]),
  "{ :name :symbol :quantity :dimension | assertIsValid(uncheckedSiUnit(name, symbol, quantity, dimension)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "siBaseUnitIfAbsent",
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
    return _siBaseUnitIfAbsent_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _detectIfNone_3(
          _siNamedDerivedUnitList_1(_system),
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
            return _error_2(_self, "siUnit: not SI unit name");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | siBaseUnitIfAbsent(self, { detectIfNone(siNamedDerivedUnitList(system), { :each | namedBy(each,self) }, { error(self,'siUnit: not SI unit name') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "SiUnit",
  "uncheckedSiUnit",
  ["name", "symbol", "quantity", "dimension"],
  sl.annotateFunction(function (_name, _symbol, _quantity, _dimension) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _name, _symbol, _quantity, _dimension";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newSiUnit_0(),
      _name,
      _symbol,
      _quantity,
      _dimension,
    );
  }, ["name", "symbol", "quantity", "dimension"]),
  "{ :name :symbol :quantity :dimension | initializeSlots(newSiUnit(),name, symbol, quantity, dimension) }",
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
    return _cached_3(
      _self,
      "siBaseUnitList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _uncheckedSiUnit_4("ampere", "A", "electric current", "I"),
          _uncheckedSiUnit_4("candela", "cd", "luminous intensity", "J"),
          _uncheckedSiUnit_4("kelvin", "K", "thermodynamic temperature", "Θ"),
          _uncheckedSiUnit_4("kilogram", "kg", "mass", "M"),
          _uncheckedSiUnit_4("metre", "m", "length", "L"),
          _uncheckedSiUnit_4("mole", "mol", "amount of substance", "N"),
          _uncheckedSiUnit_4("second", "s", "time", "T"),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'siBaseUnitList', { [uncheckedSiUnit('ampere', 'A', 'electric current', 'I'), uncheckedSiUnit('candela', 'cd', 'luminous intensity', 'J'), uncheckedSiUnit('kelvin', 'K', 'thermodynamic temperature', 'Θ'), uncheckedSiUnit('kilogram', 'kg', 'mass', 'M'), uncheckedSiUnit('metre', 'm', 'length', 'L'), uncheckedSiUnit('mole', 'mol', 'amount of substance', 'N'), uncheckedSiUnit('second', 's', 'time', 'T')] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "SiUnit",
  "siNamedDerivedUnitList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "siNamedDerivedUnitList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _uncheckedSiUnit_4("becquerel", "Bq", "activity", "A"),
          _uncheckedSiUnit_4("hertz", "Hz", "frequency", "f"),
          _uncheckedSiUnit_4("joule", "J", ["energy", "work", "heat"], [
            "E",
            "W",
            "Q",
          ]),
          _uncheckedSiUnit_4("lumen", "lm", "luminous flux", "Φv"),
          _uncheckedSiUnit_4("lux", "lx", "illuminance", "Ev"),
          _uncheckedSiUnit_4("newton", "N", ["force", "weight"], ["F", "W"]),
          _uncheckedSiUnit_4("pascal", "Pa", ["pressure", "stress"], [
            "p",
            "σ",
          ]),
          _uncheckedSiUnit_4("radian", "rad", "plane angle", null),
          _uncheckedSiUnit_4("steradian", "sr", "solid angle", "Ω"),
          _uncheckedSiUnit_4("volt", "V", "electric potential difference", "V"),
          _uncheckedSiUnit_4("watt", "W", ["power", "radiant flux"], [
            "P",
            "Φe",
          ]),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'siNamedDerivedUnitList', { [uncheckedSiUnit('becquerel', 'Bq', 'activity', 'A'), uncheckedSiUnit('hertz', 'Hz', 'frequency', 'f'), uncheckedSiUnit('joule', 'J', ['energy', 'work', 'heat'], ['E', 'W', 'Q']), uncheckedSiUnit('lumen', 'lm', 'luminous flux', 'Φv'), uncheckedSiUnit('lux', 'lx', 'illuminance', 'Ev'), uncheckedSiUnit('newton', 'N', ['force', 'weight'], ['F', 'W']), uncheckedSiUnit('pascal', 'Pa', ['pressure', 'stress'], ['p', 'σ']), uncheckedSiUnit('radian', 'rad', 'plane angle', nil), uncheckedSiUnit('steradian', 'sr', 'solid angle', 'Ω'), uncheckedSiUnit('volt', 'V', 'electric potential difference', 'V'), uncheckedSiUnit('watt', 'W', ['power', 'radiant flux'], ['P', 'Φe'])] }) }",
);
