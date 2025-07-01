sl.addType(
  false,
  "DateAndTime",
  "DateAndTime",
  ["Object", "Magnitude"],
  ["primitive"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DateAndTime",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "DateAndTime",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isDateAndTime_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _absoluteTime_1(_self),
          _absoluteTime_1(_anObject),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isDateAndTime(anObject), { =(absoluteTime(self), absoluteTime(anObject)) }) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isDateAndTime_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tilde_2(_absoluteTime_1(_self), _absoluteTime_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isDateAndTime(anObject), { ~(absoluteTime(self), absoluteTime(anObject)) }) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "lessThanSign",
  ["self", "aDate"],
  sl.annotateFunction(function (_self, _aDate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDate";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_absoluteTime_1(_self), _absoluteTime_1(_aDate));
  }, ["self", "aDate"]),
  "{ :self :aDate | <(absoluteTime(self), absoluteTime(aDate)) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "absoluteTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getTime() / 1000;
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getTime() / 1000;>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "asDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Date_1([_year_1(_self), _month_1(_self), _dayOfMonth_1(_self)]);
  }, ["self"]),
  "{ :self | Date([year(self), month(self), dayOfMonth(self)]) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "asDateAndTime",
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
  "DateAndTime",
  "DateAndTime",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _year_1(_self),
      _month_1(_self),
      _dayOfMonth_1(_self),
      _hour_1(_self),
      _minute_1(_self),
      _second_1(_self),
    ];
  }, ["self"]),
  "{ :self | [year(self), month(self), dayOfMonth(self), hour(self), minute(self), second(self)] }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "asTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Time_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self | Time(absoluteTime(self)) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "asTimeStamp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TimeStamp_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self | TimeStamp(absoluteTime(self)) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "dateAndTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.toISOString();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.toISOString();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "dayOfWeek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCDay() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCDay() + 1;>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "dayOfMonth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCDate();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCDate();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "hour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCHours();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCHours();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "localeTimeString",
  ["self", "localeName"],
  sl.annotateFunction(function (_self, _localeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _localeName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.toLocaleTimeString(_localeName);
  }, ["self", "localeName"]),
  "{ :self :localeName | <primitive: return _self.primitive.toLocaleTimeString(_localeName);>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "millisecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCMilliseconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCMilliseconds();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "minute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCMinutes();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCMinutes();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "month",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCMonth() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCMonth() + 1;>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "offsetSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.round(_self.primitive.getTimezoneOffset() * 60);
  }, ["self"]),
  "{ :self | <primitive: return Math.round(_self.primitive.getTimezoneOffset() * 60);>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _wholeSecond_1(_self),
      _solidus_2(_millisecond_1(_self), 1000),
    );
  }, ["self"]),
  "{ :self | +(wholeSecond(self), (/(millisecond(self), 1000))) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("DateAndTime(%)", [_asList_1(_self)]);
  }, ["self"]),
  "{ :self | format('DateAndTime(%)',[asList(self)]) }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "unixTimeInMilliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getTime();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getTime();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "wholeSecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCSeconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCSeconds();>\n }",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "year",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.primitive.getUTCFullYear();
  }, ["self"]),
  "{ :self | <primitive: return _self.primitive.getUTCFullYear();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DateAndTime",
  "asDateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(
      _newDateAndTime_0(),
      _asPrimitiveDateAndTime_1(_self),
    );
  }, ["self"]),
  "{ :self | initializeSlots(newDateAndTime(),asPrimitiveDateAndTime(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DateAndTime",
  "asPrimitiveDateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Date(_self * 1000);
  }, ["self"]),
  "{ :self | <primitive: return new Date(_self * 1000);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DateAndTime",
  "DateAndTime",
  ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  sl.annotateFunction(
    function (_year, _month, _dayOfMonth, _hour, _minute, _second) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _year, _month, _dayOfMonth, _hour, _minute, _second";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(
        _newDateAndTime_0(),
        _primitiveDateAndTime_6(
          _year,
          _month,
          _dayOfMonth,
          _hour,
          _minute,
          _second,
        ),
      );
    },
    ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  ),
  "{ :year :month :dayOfMonth :hour :minute :second | initializeSlots(newDateAndTime(),primitiveDateAndTime(year, month, dayOfMonth, hour, minute, second)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DateAndTime",
  "primitiveDateAndTime",
  ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  sl.annotateFunction(
    function (_year, _month, _dayOfMonth, _hour, _minute, _second) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _year, _month, _dayOfMonth, _hour, _minute, _second";
        throw new Error(errorMessage);
      } /* Primitive */
      const wholeSecond = Math.trunc(_second);
      const millisecond = (_second - wholeSecond) * 1000;
      return new Date(
        Date.UTC(
          _year,
          _month - 1,
          _dayOfMonth,
          _hour,
          _minute,
          wholeSecond,
          millisecond,
        ),
      );
    },
    ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  ),
  "{ :year :month :dayOfMonth :hour :minute :second | <primitive: const wholeSecond = Math.trunc(_second);\n\t\tconst millisecond = (_second - wholeSecond) * 1000;\n\t\treturn new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t_hour,\n\t\t\t\t_minute,\n\t\t\t\twholeSecond,\n\t\t\t\tmillisecond\n\t\t\t)\n\t\t);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DateAndTime",
  "DateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL10 = _assertIsOfSize_2(_self, 6);
    let _year = _at_2(__SPL10, 1);
    let _month = _at_2(__SPL10, 2);
    let _dayOfMonth = _at_2(__SPL10, 3);
    let _hour = _at_2(__SPL10, 4);
    let _minute = _at_2(__SPL10, 5);
    let _second = _at_2(__SPL10, 6);
    /* Statements */
    return _DateAndTime_6(_year, _month, _dayOfMonth, _hour, _minute, _second);
  }, ["self"]),
  "{ :self | let __SPL10 = assertIsOfSize(self, 6); let year = at(__SPL10, 1); let month = at(__SPL10, 2); let dayOfMonth = at(__SPL10, 3); let hour = at(__SPL10, 4); let minute = at(__SPL10, 5); let second = at(__SPL10, 6); DateAndTime(year, month, dayOfMonth, hour, minute, second) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DateAndTime",
  "isDateAndTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _includes_2([24, 29], _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _matchesRegularExpression_2(
          _self,
          "^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?([-+][0-9][0-9]:[0-9][0-9]|Z)?$",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | &(includes([24, 29],size(self)), { matchesRegularExpression(self,'^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?([-+][0-9][0-9]:[0-9][0-9]|Z)?$') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DateAndTime",
  "parseDateAndTime",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDateAndTimeString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(
          _newDateAndTime_0(),
          _uncheckedParsePrimitiveDateAndTime_1(_self),
        );
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
  "{ :self :elseClause:/0 | if(isDateAndTimeString(self), { initializeSlots(newDateAndTime(),uncheckedParsePrimitiveDateAndTime(self)) }, { elseClause() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DateAndTime",
  "parseDateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDateAndTime_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseDateAndTime: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self | parseDateAndTime(self, { error(self,'parseDateAndTime: invalid input') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "DateAndTime",
  "uncheckedParsePrimitiveDateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Date(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Date(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "DateAndTime",
  "currentDateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(
      _newDateAndTime_0(),
      _currentPrimitiveDateAndTime_1(_self),
    );
  }, ["self"]),
  "{ :self | initializeSlots(newDateAndTime(),currentPrimitiveDateAndTime(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "DateAndTime",
  "currentPrimitiveDateAndTime",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Date();
  }, ["unused"]),
  "{ :unused | <primitive: return new Date();>\n }",
);
