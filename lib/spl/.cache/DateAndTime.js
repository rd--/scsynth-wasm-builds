sl.addType(
  false,
  "DateAndTime",
  "DateAndTime",
  ["Object", "Equatable", "Comparable", "Magnitude"],
  ["primitive"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DateAndTime",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "DateAndTime",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "DateAndTime",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "DateAndTime",
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
  "{ :self :aDate |\n\t\tself.absoluteTime < aDate.absoluteTime\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getTime() / 1000;>\n\t}",
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
  "{ :self |\n\t\tDate([self.year, self.month, self.dayOfMonth])\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\tself.year,\n\t\t\tself.month,\n\t\t\tself.dayOfMonth,\n\t\t\tself.hour,\n\t\t\tself.minute,\n\t\t\tself.second\n\t\t]\n\t}",
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
  "{ :self |\n\t\tTime(self.absoluteTime)\n\t}",
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
  "{ :self |\n\t\tTimeStamp(self.absoluteTime)\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.toISOString();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCDay() + 1;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCDate();>\n\t}",
);

sl.addMethodToExistingType(
  "DateAndTime",
  "DateAndTime",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
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
        return _aBlock_2(_absoluteTime_1(_self), _absoluteTime_1(_anObject));
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isDateAndTime & {\n\t\t\taBlock(self.absoluteTime, anObject.absoluteTime)\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCHours();>\n\t}",
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
  "{ :self :localeName |\n\t\t<primitive: return _self.primitive.toLocaleTimeString(_localeName);>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCMilliseconds();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCMinutes();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCMonth() + 1;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.round(_self.primitive.getTimezoneOffset() * 60);>\n\t}",
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
  "{ :self |\n\t\tself.wholeSecond + (self.millisecond / 1000)\n\t}",
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
  "{ :self |\n\t\t'DateAndTime(%)'.format([self.asList])\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getTime();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCSeconds();>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.primitive.getUTCFullYear();>\n\t}",
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
  "{ :self |\n\t\tnewDateAndTime().initializeSlots(\n\t\t\tself.asPrimitiveDateAndTime\n\t\t)\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Date(_self * 1000);>\n\t}",
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
  "{ :year :month :dayOfMonth :hour :minute :second |\n\t\tnewDateAndTime().initializeSlots(\n\t\t\tprimitiveDateAndTime(year, month, dayOfMonth, hour, minute, second)\n\t\t)\n\t}",
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
  "{ :year :month :dayOfMonth :hour :minute :second |\n\t\t<primitive:\n\t\tconst wholeSecond = Math.trunc(_second);\n\t\tconst millisecond = (_second - wholeSecond) * 1000;\n\t\treturn new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t_hour,\n\t\t\t\t_minute,\n\t\t\t\twholeSecond,\n\t\t\t\tmillisecond\n\t\t\t)\n\t\t);\n\t\t>\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_self, 6);
    let _year = _at_2(__SplVar1, 1);
    let _month = _at_2(__SplVar1, 2);
    let _dayOfMonth = _at_2(__SplVar1, 3);
    let _hour = _at_2(__SplVar1, 4);
    let _minute = _at_2(__SplVar1, 5);
    let _second = _at_2(__SplVar1, 6);
    /* Statements */
    return _DateAndTime_6(_year, _month, _dayOfMonth, _hour, _minute, _second);
  }, ["self"]),
  "{ :self |\n\t\tlet [year, month, dayOfMonth, hour, minute, second] = self;\n\t\tDateAndTime(year, month, dayOfMonth, hour, minute, second)\n\t}",
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
  "{ :self |\n\t\t[24 29].includes(self.size) & {\n\t\t\tself.matchesRegularExpression('^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?([-+][0-9][0-9]:[0-9][0-9]|Z)?$')\n\t\t}\n\t}",
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
  "{ :self :elseClause:/0 |\n\t\tself.isDateAndTimeString.if {\n\t\t\tnewDateAndTime().initializeSlots(\n\t\t\t\tself.uncheckedParsePrimitiveDateAndTime\n\t\t\t)\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.parseDateAndTime {\n\t\t\tself.error('parseDateAndTime: invalid input')\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return new Date(_self);>\n\t}",
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
  "{ :self |\n\t\tnewDateAndTime().initializeSlots(\n\t\t\tself.currentPrimitiveDateAndTime\n\t\t)\n\t}",
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
  "{ :unused |\n\t\t<primitive: return new Date();>\n\t}",
);
