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
  "{ :self |\n\t\t(\n\t\t\tself.isBaseUnit | {\n\t\t\t\tself.isDerivedUnit\n\t\t\t}\n\t\t).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('invalid SI unit paramters')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tsystem.siBaseUnitList.includes(self)\n\t}",
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
  "{ :self |\n\t\tself.isBaseUnit.not\n\t}",
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
  "{ :self :symbolOrName |\n\t\tself.name = symbolOrName | {\n\t\t\tself.symbol = symbolOrName\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :self |\n\t\tself.siUnit.isBaseUnit\n\t}",
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
  "{ :self |\n\t\tself.siUnit.isDerivedUnit\n\t}",
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
  "{ :self |\n\t\tself.isBaseUnit | {\n\t\t\tself.isDerivedUnit\n\t\t}\n\t}",
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
  "{ :name :symbol :quantity :dimension |\n\t\tuncheckedSiUnit(name, symbol, quantity, dimension)\n\t\t.assertIsValid\n\t}",
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
  "{ :self :exceptionBlock:/0 |\n\t\tsystem.siBaseUnitList.detectIfNone { :each |\n\t\t\teach.namedBy(self)\n\t\t} {\n\t\t\texceptionBlock()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.siBaseUnitIfAbsent {\n\t\t\tsystem.siNamedDerivedUnitList.detectIfNone { :each |\n\t\t\t\teach.namedBy(self)\n\t\t\t} {\n\t\t\t\tself.error('siUnit: not SI unit name')\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :name :symbol :quantity :dimension |\n\t\tnewSiUnit()\n\t\t.initializeSlots(name, symbol, quantity, dimension)\n\t}",
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
  "{ :self |\n\t\tself.cached('siBaseUnitList') {\n\t\t\t[\n\t\t\t\tuncheckedSiUnit('ampere', 'A', 'electric current', 'I'),\n\t\t\t\tuncheckedSiUnit('candela', 'cd', 'luminous intensity', 'J'),\n\t\t\t\tuncheckedSiUnit('kelvin', 'K', 'thermodynamic temperature', 'Θ'),\n\t\t\t\tuncheckedSiUnit('kilogram', 'kg', 'mass', 'M'),\n\t\t\t\tuncheckedSiUnit('metre', 'm', 'length', 'L'),\n\t\t\t\tuncheckedSiUnit('mole', 'mol', 'amount of substance', 'N'),\n\t\t\t\tuncheckedSiUnit('second', 's', 'time', 'T')\n\t\t\t]\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.cached('siNamedDerivedUnitList') {\n\t\t\t[\n\t\t\t\tuncheckedSiUnit('becquerel', 'Bq', 'activity', 'A'),\n\t\t\t\tuncheckedSiUnit('hertz', 'Hz', 'frequency', 'f'),\n\t\t\t\tuncheckedSiUnit('joule', 'J', ['energy', 'work', 'heat'], ['E', 'W', 'Q']),\n\t\t\t\tuncheckedSiUnit('lumen', 'lm', 'luminous flux', 'Φv'),\n\t\t\t\tuncheckedSiUnit('lux', 'lx', 'illuminance', 'Ev'),\n\t\t\t\tuncheckedSiUnit('newton', 'N', ['force', 'weight'], ['F', 'W']),\n\t\t\t\tuncheckedSiUnit('pascal', 'Pa', ['pressure', 'stress'], ['p', 'σ']),\n\t\t\t\tuncheckedSiUnit('radian', 'rad', 'plane angle', nil),\n\t\t\t\tuncheckedSiUnit('steradian', 'sr', 'solid angle', 'Ω'),\n\t\t\t\tuncheckedSiUnit('volt', 'V', 'electric potential difference', 'V'),\n\t\t\t\tuncheckedSiUnit('watt', 'W', ['power', 'radiant flux'], ['P', 'Φe'])\n\t\t\t]\n\t\t}\n\t}",
);
