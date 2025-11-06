sl.addType(
  false,
  "CalendarDuration",
  "CalendarDuration",
  ["Object", "Equatable", "Comparable"],
  ["components"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CalendarDuration",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "CalendarDuration",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "CalendarDuration",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "asCalendarDuration",
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
  "CalendarDuration",
  "CalendarDuration",
  "compare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_components_1(_self), _components_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.components.compare(operand.components)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "durationString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("P%Y%M%DT%H%M%S", _components_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t'P%Y%M%DT%H%M%S'.format(\n\t\t\tself.components\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "months",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(2)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 3);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(3)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 4);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(4)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 5);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(5)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "parts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _components_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.components\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "seconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 6);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(6)\n\t}",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
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
  "CalendarDuration",
  "CalendarDuration",
  "years",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_components_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.components.at(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CalendarDuration",
  "CalendarDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 6),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newCalendarDuration_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "CalendarDuration: invalid list");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 6).if {\n\t\t\tnewCalendarDuration()\n\t\t\t.initializeSlots(self)\n\t\t} {\n\t\t\tself.error('CalendarDuration: invalid list')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CalendarDuration",
  "isIso8601DurationString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(
      _self,
      "^P([0-9]+Y)?([0-9]+M)?([0-9]+W)?([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(.[0-9]+)S)?)?$",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^P([0-9]+Y)?([0-9]+M)?([0-9]+W)?([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(.[0-9]+)S)?)?$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CalendarDuration",
  "parseCalendarDuration",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIso8601DurationString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(
          _uncheckedParseIso8601DurationAsList_1(_self),
          7,
        );
        let _years = _at_2(__SplVar1, 1);
        let _months = _at_2(__SplVar1, 2);
        let _weeks = _at_2(__SplVar1, 3);
        let _days = _at_2(__SplVar1, 4);
        let _hours = _at_2(__SplVar1, 5);
        let _minutes = _at_2(__SplVar1, 6);
        let _seconds = _at_2(__SplVar1, 7);
        /* Statements */
        _days = _plusSign_2(_days, _asterisk_2(_weeks, 7));
        return _CalendarDuration_1([
          _years,
          _months,
          _days,
          _hours,
          _minutes,
          _seconds,
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isIso8601DurationString.if {\n\t\t\tlet [\n\t\t\t\tyears, months, weeks, days,\n\t\t\t\thours, minutes, seconds\n\t\t\t] = self.uncheckedParseIso8601DurationAsList;\n\t\t\tdays := days + (weeks * 7);\n\t\t\tCalendarDuration(\n\t\t\t\t[\n\t\t\t\t\tyears, months, days,\n\t\t\t\t\thours, minutes, seconds\n\t\t\t\t]\n\t\t\t)\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CalendarDuration",
  "parseCalendarDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseCalendarDuration_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseCalendarDuration: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseCalendarDuration {\n\t\t\tself.error('String>>parseCalendarDuration: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CalendarDuration",
  "uncheckedParseIso8601DurationAsList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const regex =
      /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(\.\d+)?)S)?)?$/;
    const [_unused, years, months, weeks, days, hours, minutes, seconds] = _self
      .match(regex);
    return [years, months, weeks, days, hours, minutes, seconds].map(
      function (x) {
        return x ? Number(x) : 0;
      },
    );
  }, ["self"]),
  "{ :self |\n\t\t<primitive:\n\t\tconst regex = /P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(\\.\\d+)?)S)?)?$/;\n\t\tconst [_unused, years, months, weeks, days, hours, minutes, seconds] = _self.match(regex);\n\t\treturn [years, months, weeks, days, hours, minutes, seconds].map(function(x) {\n\t\t\treturn x ? Number(x) : 0;\n\t\t});\n\t\t>\n\t}",
);
