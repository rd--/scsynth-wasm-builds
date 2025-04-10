sl.addType(
  true,
  "Date",
  "Date",
  ["Object", "Magnitude"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Date",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Date",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isDate_1(_anObject),
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
  "{ :self :anObject | &(isDate(anObject), { =(absoluteTime(self), absoluteTime(anObject)) }) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
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
  "Date",
  "Date",
  "absoluteTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getTime() / 1000;
  }, ["self"]),
  "{ :self | <primitive: return _self.getTime() / 1000;>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "asDate",
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
  "Date",
  "Date",
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
  "Date",
  "Date",
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
  "Date",
  "Date",
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
  "Date",
  "Date",
  "dateString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_2([
      _asString_1(_year_1(_self)),
      _padLeft_3(_asString_1(_month_1(_self)), [2], "0"),
      _padLeft_3(_asString_1(_dayOfMonth_1(_self)), [2], "0"),
    ], "-");
  }, ["self"]),
  "{ :self | stringJoin([asString(year(self)), padLeft(asString(month(self)),[2], '0'), padLeft(asString(dayOfMonth(self)),[2], '0')],'-') }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dateTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toISOString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toISOString();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dayOfWeek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCDay() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCDay() + 1;>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dayOfMonth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCDate();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCDate();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "dayOfYear",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _y = _year_1(_self);
    let _m = _month_1(_self);
    let _d = _dayOfMonth_1(_self);
    let _t1 = _absoluteTime_1(_Date_6(_y, _m, _d, 0, 0, 0));
    let _t2 = _absoluteTime_1(_Date_6(_y, 1, 1, 0, 0, 0));
    /* Statements */
    return _plusSign_2(
      _solidus_2(
        _hyphenMinus_2(_t1, _t2),
        _asterisk_2(_asterisk_2(24, 60), 60),
      ),
      1,
    );
  }, ["self"]),
  "{ :self | let y = year(self); let m = month(self); let d = dayOfMonth(self); let t1 = absoluteTime(Date(y, m, d, 0, 0, 0)); let t2 = absoluteTime(Date(y, 1, 1, 0, 0, 0)); +(/((-(t1, t2)), (*(*(24, 60), 60))), 1) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "hour",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCHours();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCHours();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "localeTimeString",
  ["self", "localeName"],
  sl.annotateFunction(function (_self, _localeName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _localeName";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toLocaleTimeString(_localeName);
  }, ["self", "localeName"]),
  "{ :self :localeName | <primitive: return _self.toLocaleTimeString(_localeName);>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "millisecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCMilliseconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCMilliseconds();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "minute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCMinutes();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCMinutes();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "month",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCMonth() + 1;
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCMonth() + 1;>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "offsetSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.round(_self.getTimezoneOffset() * 60);
  }, ["self"]),
  "{ :self | <primitive: return Math.round(_self.getTimezoneOffset() * 60);>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "ordinalDateString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_2([
      _asString_1(_year_1(_self)),
      _padLeft_3(_asString_1(_dayOfYear_1(_self)), [3], "0"),
    ], "-");
  }, ["self"]),
  "{ :self | stringJoin([asString(year(self)), padLeft(asString(dayOfYear(self)),[3], '0')],'-') }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCSeconds();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCSeconds();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Date(%)", [_asList_1(_self)]);
  }, ["self"]),
  "{ :self | format('Date(%)',[asList(self)]) }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "unixTimeInMilliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getTime();
  }, ["self"]),
  "{ :self | <primitive: return _self.getTime();>\n }",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "year",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getUTCFullYear();
  }, ["self"]),
  "{ :self | <primitive: return _self.getUTCFullYear();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "asDate",
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
  "Date",
  "Date",
  ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  sl.annotateFunction(
    function (_year, _month, _dayOfMonth, _hour, _minute, _second) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _year, _month, _dayOfMonth, _hour, _minute, _second";
        throw new Error(errorMessage);
      } /* Primitive */
      return new Date(
        Date.UTC(
          _year,
          _month - 1,
          _dayOfMonth,
          _hour,
          _minute,
          _second,
          0,
        ),
      );
    },
    ["year", "month", "dayOfMonth", "hour", "minute", "second"],
  ),
  "{ :year :month :dayOfMonth :hour :minute :second | <primitive: return new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t_hour,\n\t\t\t\t_minute,\n\t\t\t\t_second,\n\t\t\t\t0\n\t\t\t)\n\t\t);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Date",
  "Date",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_self, 6);
    let _year = _at_2(__SPL1, 1);
    let _month = _at_2(__SPL1, 2);
    let _dayOfMonth = _at_2(__SPL1, 3);
    let _hour = _at_2(__SPL1, 4);
    let _minute = _at_2(__SPL1, 5);
    let _second = _at_2(__SPL1, 6);
    /* Statements */
    return _Date_6(_year, _month, _dayOfMonth, _hour, _minute, _second);
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(self, 6); let year = at(__SPL1, 1); let month = at(__SPL1, 2); let dayOfMonth = at(__SPL1, 3); let hour = at(__SPL1, 4); let minute = at(__SPL1, 5); let second = at(__SPL1, 6); Date(year, month, dayOfMonth, hour, minute, second) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Date",
  "basicParseDate",
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
  "String",
  "Date",
  "parseDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2([10, 24, 29], _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicParseDate_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseDate: invalid size");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(includes([10, 24, 29],size(self)), { basicParseDate(self) }, { error(self,'parseDate: invalid size') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Date",
  "currentDate",
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
