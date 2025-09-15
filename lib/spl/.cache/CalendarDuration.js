sl.addType(
  false,
  "CalendarDuration",
  "CalendarDuration",
  ["Object", "Magnitude"],
  ["components"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CalendarDuration",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "CalendarDuration",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlots(self,anObject) }",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _precedes_2(_components_1(_self), _components_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand | precedes(components(self),components(operand)) }",
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
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "CalendarDuration",
  "CalendarDuration",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _components_1(_self);
  }, ["self"]),
  "{ :self | components(self) }",
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
  "{ :self | at(components(self),1) }",
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
  "{ :self | at(components(self),2) }",
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
  "{ :self | at(components(self),3) }",
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
  "{ :self | at(components(self),4) }",
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
  "{ :self | at(components(self),5) }",
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
  "{ :self | at(components(self),6) }",
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
  "{ :self | format('P%Y%M%DT%H%M%S',components(self)) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | if((=(size(self), 6)), { initializeSlots(newCalendarDuration(),self) }, { error(self,'CalendarDuration: invalid list') }) }",
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
  "{ :self | matchesRegularExpression(self,'^P([0-9]+Y)?([0-9]+M)?([0-9]+W)?([0-9]+D)?(T([0-9]+H)?([0-9]+M)?([0-9]+(.[0-9]+)S)?)?$') }",
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
        let __SPL560 = _assertIsOfSize_2(
          _uncheckedParseIso8601DurationAsList_1(_self),
          7,
        );
        let _years = _at_2(__SPL560, 1);
        let _months = _at_2(__SPL560, 2);
        let _weeks = _at_2(__SPL560, 3);
        let _days = _at_2(__SPL560, 4);
        let _hours = _at_2(__SPL560, 5);
        let _minutes = _at_2(__SPL560, 6);
        let _seconds = _at_2(__SPL560, 7);
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
  "{ :self :elseClause:/0 | if(isIso8601DurationString(self), { let __SPL560 = assertIsOfSize(uncheckedParseIso8601DurationAsList(self), 7); let years = at(__SPL560, 1); let months = at(__SPL560, 2); let weeks = at(__SPL560, 3); let days = at(__SPL560, 4); let hours = at(__SPL560, 5); let minutes = at(__SPL560, 6); let seconds = at(__SPL560, 7); days := +(days, (*(weeks, 7))); CalendarDuration([years, months, days, hours, minutes, seconds]) }, { elseClause() }) }",
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
  "{ :self | parseCalendarDuration(self, { error(self,'String>>parseCalendarDuration: invalid input') }) }",
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
  "{ :self | <primitive: const regex = /P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(\\.\\d+)?)S)?)?$/;\n\t\tconst [_unused, years, months, weeks, days, hours, minutes, seconds] = _self.match(regex);\n\t\treturn [years, months, weeks, days, hours, minutes, seconds].map(function(x) {\n\t\t\treturn x ? Number(x) : 0;\n\t\t});>\n }",
);
