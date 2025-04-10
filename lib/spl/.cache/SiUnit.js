sl.addType(
  false,
  "SiUnit",
  "SiUnit",
  ["Object"],
  ["name", "symbol", "quantity", "dimension"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SiUnit",
);

sl.addMethodToExistingType(
  "SiUnit",
  "SiUnit",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _equalsSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, =) }",
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
  "SiUnit",
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
  "{ :self | siBaseUnitIfAbsent(self, { detectIfNone(siDerivedUnitList(system), { :each | namedBy(each,self) }, { error(self,'siUnit') }) }) }",
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
          _SiUnit_4("ampere", "A", "electric current", "I"),
          _SiUnit_4("candela", "cd", "luminous intensity", "J"),
          _SiUnit_4("kelvin", "K", "thermodynamic temperature", "Θ"),
          _SiUnit_4("kilogram", "kg", "mass", "M"),
          _SiUnit_4("metre", "m", "length", "L"),
          _SiUnit_4("mole", "mol", "amount of substance", "N"),
          _SiUnit_4("second", "s", "time", "T"),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'siBaseUnitList', { [SiUnit('ampere', 'A', 'electric current', 'I'), SiUnit('candela', 'cd', 'luminous intensity', 'J'), SiUnit('kelvin', 'K', 'thermodynamic temperature', 'Θ'), SiUnit('kilogram', 'kg', 'mass', 'M'), SiUnit('metre', 'm', 'length', 'L'), SiUnit('mole', 'mol', 'amount of substance', 'N'), SiUnit('second', 's', 'time', 'T')] }) }",
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
    return _cached_3(
      _self,
      "siDerivedUnitList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _SiUnit_4("becquerel", "Bq", "activity", "A"),
          _SiUnit_4("hertz", "Hz", "frequency", "f"),
          _SiUnit_4("joule", "J", ["energy", "work", "heat"], ["E", "W", "Q"]),
          _SiUnit_4("lumen", "lm", "luminous flux", "Φv"),
          _SiUnit_4("lux", "lx", "illuminance", "Ev"),
          _SiUnit_4("newton", "N", ["force", "weight"], ["F", "W"]),
          _SiUnit_4("pascal", "Pa", ["pressure", "stress"], ["p", "σ"]),
          _SiUnit_4("radian", "rad", "plane angle", null),
          _SiUnit_4("steradian", "sr", "solid angle", "Ω"),
          _SiUnit_4("volt", "V", "electric potential difference", "V"),
          _SiUnit_4("watt", "W", ["power", "radiant flux"], ["P", "Φe"]),
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'siDerivedUnitList', { [SiUnit('becquerel', 'Bq', 'activity', 'A'), SiUnit('hertz', 'Hz', 'frequency', 'f'), SiUnit('joule', 'J', ['energy', 'work', 'heat'], ['E', 'W', 'Q']), SiUnit('lumen', 'lm', 'luminous flux', 'Φv'), SiUnit('lux', 'lx', 'illuminance', 'Ev'), SiUnit('newton', 'N', ['force', 'weight'], ['F', 'W']), SiUnit('pascal', 'Pa', ['pressure', 'stress'], ['p', 'σ']), SiUnit('radian', 'rad', 'plane angle', nil), SiUnit('steradian', 'sr', 'solid angle', 'Ω'), SiUnit('volt', 'V', 'electric potential difference', 'V'), SiUnit('watt', 'W', ['power', 'radiant flux'], ['P', 'Φe'])] }) }",
);
