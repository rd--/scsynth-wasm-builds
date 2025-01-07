sl.addType(
  false,
  "SiUnit",
  "SiUnit",
  ["Object"],
  ["symbol", "name", "dimension", "quantity"],
);

sl.copyTraitToType(
  "Object",
  "SiUnit",
);

sl.addMethod(
  "SiUnit",
  "SiUnit",
  "equalsSign",
  ["self", "anSiUnit"],
  function (_self, _anSiUnit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anSiUnit";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anSiUnit);
  },
  "{ :self :anSiUnit |\n\t\tself == anSiUnit\n\t}",
);

sl.addMethod(
  "SiUnit",
  "SiUnit",
  "isBaseUnit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_siBaseUnitList_1(_system), _self);
  },
  "{ :self |\n\t\tsystem.siBaseUnitList.includes(self)\n\t}",
);

sl.addMethod(
  "SiUnit",
  "SiUnit",
  "isDerivedUnit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isBaseUnit_1(_self));
  },
  "{ :self |\n\t\tself.isBaseUnit.not\n\t}",
);

sl.addMethod(
  "SiUnit",
  "SiUnit",
  "namedBy",
  ["self", "symbolOrName"],
  function (_self, _symbolOrName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _symbolOrName";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_symbol_1(_self), _symbolOrName),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_name_1(_self), _symbolOrName);
      },
    );
  },
  "{ :self :symbolOrName |\n\t\tself.symbol = symbolOrName | {\n\t\t\tself.name = symbolOrName\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "SiUnit",
  "SiUnit",
  ["self", "name", "dimension", "quantity"],
  function (_self, _name, _dimension, _quantity) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _name, _dimension, _quantity";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _newSiUnit_0(),
      _self,
      _name,
      _dimension,
      _quantity,
    );
  },
  "{ :self :name :dimension :quantity |\n\t\tnewSiUnit().initializeSlots(self, name, dimension, quantity)\n\t}",
);

sl.addMethod(
  "String",
  "SiUnit",
  "siBaseUnit",
  ["self", "exceptionBlock:/0"],
  function (_self, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _exceptionBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(_siBaseUnitList_1(_system), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _namedBy_2(_each, _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _exceptionBlock_0();
    });
  },
  "{ :self :exceptionBlock:/0 |\n\t\tsystem.siBaseUnitList.detectIfNone { :each |\n\t\t\teach.namedBy(self)\n\t\t} {\n\t\t\texceptionBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "SiUnit",
  "siUnit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _siBaseUnit_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _detectIfNone_3(_siDerivedUnitList_1(_system), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _namedBy_2(_each, _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "siUnit");
      });
    });
  },
  "{ :self |\n\t\tself.siBaseUnit {\n\t\t\tsystem.siDerivedUnitList.detectIfNone { :each |\n\t\t\t\teach.namedBy(self)\n\t\t\t} {\n\t\t\t\tself.error('siUnit')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "SiUnit",
  "siBaseUnitList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_cache_1(_self), "siBaseUnitList", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
    });
  },
  "{ :self |\n\t\tself.cache.atIfAbsentPut('siBaseUnitList') {\n\t\t\t[\n\t\t\t\t'm'.SiUnit('meter', 'L', 'length'),\n\t\t\t\t's'.SiUnit('second', 'T', 'time'),\n\t\t\t\t'mole'.SiUnit('mole', 'N', 'amount of substance'),\n\t\t\t\t'A'.SiUnit('ampere', 'I', 'electric current'),\n\t\t\t\t'K'.SiUnit('kelvin', 'Θ', 'thermodynamic temperature'),\n\t\t\t\t'cd'.SiUnit('candela', 'J', 'luminous intensity'),\n\t\t\t\t'kg'.SiUnit('kilogram', 'M', 'mass')\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "SiUnit",
  "siDerivedUnitList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_cache_1(_self), "siDerivedUnitList", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
    });
  },
  "{ :self |\n\t\tself.cache.atIfAbsentPut('siDerivedUnitList') {\n\t\t\t[\n\t\t\t\t'Hz'.SiUnit('hertz', 'f', 'frequency'),\n\t\t\t\t'rad'.SiUnit('radian', nil, 'angle'),\n\t\t\t\t'sr'.SiUnit('steradian', 'Ω', 'solid angle'),\n\t\t\t\t'N'.SiUnit('newton', ['F', 'W'], ['force', 'weight']),\n\t\t\t\t'Pa'.SiUnit('pascal', ['p', 'σ'], ['pressure', 'stress']),\n\t\t\t\t'J'.SiUnit('joule', ['E', 'W', 'Q'], ['energy', 'work', 'heat']),\n\t\t\t\t'W'.SiUnit('watt', ['P', 'Φe'], ['power', 'radiant flux']),\n\t\t\t\t'lm'.SiUnit('lumen', 'Φv', 'luminous flux'),\n\t\t\t\t'lx'.SiUnit('lux', 'Ev', 'illuminance'),\n\t\t\t\t'Bq'.SiUnit('becquerel', nil, 'radioactivity')\n\t\t\t]\n\t\t}\n\t}",
);
