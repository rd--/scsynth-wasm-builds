sl.addType(
  true,
  "Date",
  "Date",
  ["Object", "Store", "Equal", "Compare"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Date",
);

sl.copyTraitMethodsToType(
  "Store",
  "Date",
);

sl.copyTraitMethodsToType(
  "Equal",
  "Date",
);

sl.copyTraitMethodsToType(
  "Compare",
  "Date",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "less",
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
  "{ :self :aDate |\n\t\tself.absoluteTime < aDate.absoluteTime\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.getTime() / 1000;>\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "components",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_year_1(_self), _month_1(_self), _dayOfMonth_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.year,\n\t\t\tself.month,\n\t\t\tself.dayOfMonth\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "Date",
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
  "Date",
  "Date",
  "DateAndTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _DateAndTime_1(_absoluteTime_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tDateAndTime(self.absoluteTime)\n\t}",
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
      _printString_1(_year_1(_self)),
      _padLeft_3(_printString_1(_month_1(_self)), [2], "0"),
      _padLeft_3(_printString_1(_dayOfMonth_1(_self)), [2], "0"),
    ], "-");
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.year.printString,\n\t\t\tself.month.printString.padLeft([2], '0'),\n\t\t\tself.dayOfMonth.printString.padLeft([2], '0')\n\t\t].stringJoin('-')\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.getUTCDay() + 1;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.getUTCDate();>\n\t}",
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
    } /* Statements */
    let _y = _year_1(_self);
    let _m = _month_1(_self);
    let _d = _dayOfMonth_1(_self);
    let _t1 = _absoluteTime_1(_Date_3(_y, _m, _d));
    let _t2 = _absoluteTime_1(_Date_3(_y, 1, 1));
    return _plusSign_2(
      _solidus_2(
        _hyphenMinus_2(_t1, _t2),
        _asterisk_2(_asterisk_2(24, 60), 60),
      ),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet y = self.year;\n\t\tlet m = self.month;\n\t\tlet d = self.dayOfMonth;\n\t\tlet t1 = Date(y, m, d).absoluteTime;\n\t\tlet t2 = Date(y, 1, 1).absoluteTime;\n\t\t(t1 - t2) / (24 * 60 * 60) + 1\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "equalBy",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
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
        return _aBlock_2(_absoluteTime_1(_self), _absoluteTime_1(_anObject));
      }, []),
    );
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tanObject.isDate & {\n\t\t\taBlock(self.absoluteTime, anObject.absoluteTime)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "julianDate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _julianDayToJulian_1(_julianDay_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.julianDay.julianDayToJulian\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "julianDay",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gregorianToJulianDay_3(
      _year_1(_self),
      _month_1(_self),
      _dayOfMonth_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tgregorianToJulianDay(\n\t\t\tself.year,\n\t\t\tself.month,\n\t\t\tself.dayOfMonth\n\t\t)\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.getUTCMonth() + 1;>\n\t}",
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
      _printString_1(_year_1(_self)),
      _padLeft_3(_printString_1(_dayOfYear_1(_self)), [3], "0"),
    ], "-");
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.year.printString,\n\t\t\tself.dayOfYear.printString.padLeft([3], '0')\n\t\t].stringJoin('-')\n\t}",
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
    return _format_2("Date(%)", [_components_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\t'Date(%)'.format([self.components])\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "Time",
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
  "Date",
  "Date",
  "TimeStamp",
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
  "{ :self |\n\t\t<primitive: return _self.getUTCFullYear();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "Date",
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
  "Date",
  "Date",
  ["year", "month", "dayOfMonth"],
  sl.annotateFunction(function (_year, _month, _dayOfMonth) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _year, _month, _dayOfMonth";
      throw new Error(errorMessage);
    } /* Primitive */
    const d = new Date(
      Date.UTC(
        _year,
        _month - 1,
        _dayOfMonth,
        0,
        0,
        0,
        0,
      ),
    );
    d.setFullYear(_year);
    return d;
  }, ["year", "month", "dayOfMonth"]),
  "{ :year :month :dayOfMonth |\n\t\t<primitive:\n\t\tconst d = new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t)\n\t\t);\n\t\td.setFullYear(_year);\n\t\treturn d;\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "fromJulianDay",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_julianDayToGregorian_1(_self), 3);
    let _year = _at_2(__SplVar1, 1);
    let _month = _at_2(__SplVar1, 2);
    let _day = _at_2(__SplVar1, 3);
    return _Date_3(_year, _month, _ceiling_1(_day));
  }, ["self"]),
  "{ :self |\n\t\tlet [year, month, day] = self.julianDayToGregorian;\n\t\tDate(year, month, day.ceiling)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "JulianDate",
  ["year", "month", "day"],
  sl.annotateFunction(function (_year, _month, _day) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _year, _month, _day";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromJulianDay_1(_julianToJulianDay_3(_year, _month, _day));
  }, ["year", "month", "day"]),
  "{ :year :month :day |\n\t\tjulianToJulianDay(\n\t\t\tyear,\n\t\t\tmonth,\n\t\t\tday\n\t\t).fromJulianDay\n\t}",
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
    } /* Statements */
    let __SplVar2 = _assertIsOfSize_2(_self, 3);
    let _year = _at_2(__SplVar2, 1);
    let _month = _at_2(__SplVar2, 2);
    let _dayOfMonth = _at_2(__SplVar2, 3);
    return _Date_3(_year, _month, _dayOfMonth);
  }, ["self"]),
  "{ :self |\n\t\tlet [year, month, dayOfMonth] = self;\n\t\tDate(year, month, dayOfMonth)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Date",
  "isDateString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(
      _self,
      "^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Date",
  "parseDate",
  ["self", "elseClause/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_size_1(_self), 10),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isDateString_1(_self);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedParseDate_1(_self);
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
  }, ["self", "elseClause/0"]),
  "{ :self :elseClause/0 |\n\t\t(self.size = 10 & { self.isDateString }).if {\n\t\t\tself.uncheckedParseDate\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
    return _parseDate_2(
      _self,
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
  "{ :self |\n\t\tself.parseDate {\n\t\t\tself.error('parseDate: invalid size')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Date",
  "uncheckedParseDate",
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
  "{ :unused |\n\t\t<primitive: return new Date();>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "isGregorianLeapYear",
  ["year"],
  sl.annotateFunction(function (_year) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _year";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_percentSign_2(_year, 4), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(
          _ampersand_2(
            _equalsSign_2(_percentSign_2(_year, 100), 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _exclamationMarkEqualsSign_2(
                _percentSign_2(_year, 400),
                0,
              );
            }, []),
          ),
        );
      }, []),
    );
  }, ["year"]),
  "{ :year |\n\t\t/* https://www.fourmilab.ch/documents/calendar/calendar.js */\n\t\t(year % 4 = 0) & {\n\t\t\t(\n\t\t\t\t(year % 100 = 0) & {\n\t\t\t\t\tyear % 400 != 0\n\t\t\t\t}\n\t\t\t).not\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "julianDayToJulian",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let td = _self + 0.5;
    let z = Math.floor(td);
    let a = z;
    let b = a + 1524;
    let c = Math.floor((b - 122.1) / 365.25);
    let d = Math.floor(365.25 * c);
    let e = Math.floor((b - d) / 30.6001);
    let month = Math.floor((e < 14) ? (e - 1) : (e - 13));
    let year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
    let day = b - d - Math.floor(30.6001 * e);
    return [year, month, day];
  }, ["self"]),
  "{ :self |\n\t\t/* https://www.fourmilab.ch/documents/calendar/calendar.js */\n\t\t<primitive:\n\t\tlet td = _self + 0.5;\n\t\tlet z = Math.floor(td);\n\t\tlet a = z;\n\t\tlet b = a + 1524;\n\t\tlet c = Math.floor((b - 122.1) / 365.25);\n\t\tlet d = Math.floor(365.25 * c);\n\t\tlet e = Math.floor((b - d) / 30.6001);\n\t\tlet month = Math.floor((e < 14) ? (e - 1) : (e - 13));\n\t\tlet year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));\n\t\tlet day = b - d - Math.floor(30.6001 * e);\n\t\treturn [year, month, day];\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "julianDayToGregorian",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    let jd = _self;
    function mod(a, b) {
      return a - (b * Math.floor(a / b));
    }
    let wjd = Math.floor(jd - 0.5) + 0.5;
    let gregorianEpoch = 1721425.5;
    let depoch = wjd - gregorianEpoch;
    let quadricent = Math.floor(depoch / 146097);
    let dqc = mod(depoch, 146097);
    let cent = Math.floor(dqc / 36524);
    let dcent = mod(dqc, 36524);
    let quad = Math.floor(dcent / 1461);
    let dquad = mod(dcent, 1461);
    let yindex = Math.floor(dquad / 365);
    let year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
    if (!((cent == 4) || (yindex == 4))) {
      year++;
    }
    let yearday = wjd - _gregorianToJulianDay_3(year, 1, 1);
    let leapadj = (wjd < _gregorianToJulianDay_3(year, 3, 1))
      ? 0
      : (_isGregorianLeapYear_1(year) ? 1 : 2);
    let month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
    let day = (wjd - _gregorianToJulianDay_3(year, month, 1)) + 1;
    return [year, month, day];
  }, ["self"]),
  "{ :self |\n\t\t/* https://www.fourmilab.ch/documents/calendar/calendar.js */\n\t\t<primitive:\n\t\tlet jd = _self;\n\t\tfunction mod(a, b) { return a - (b * Math.floor(a / b)); }\n\t\tlet wjd = Math.floor(jd - 0.5) + 0.5;\n\t\tlet gregorianEpoch = 1721425.5;\n\t\tlet depoch = wjd - gregorianEpoch;\n\t\tlet quadricent = Math.floor(depoch / 146097);\n\t\tlet dqc = mod(depoch, 146097);\n\t\tlet cent = Math.floor(dqc / 36524);\n\t\tlet dcent = mod(dqc, 36524);\n\t\tlet quad = Math.floor(dcent / 1461);\n\t\tlet dquad = mod(dcent, 1461);\n\t\tlet yindex = Math.floor(dquad / 365);\n\t\tlet year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;\n\t\tif (!((cent == 4) || (yindex == 4))) {\n\t\t\tyear++;\n\t\t}\n\t\tlet yearday = wjd - _gregorianToJulianDay_3(year, 1, 1);\n\t\tlet leapadj = (\n\t\t\t(wjd < _gregorianToJulianDay_3(year, 3, 1))\n\t\t\t? 0\n\t\t\t: (_isGregorianLeapYear_1(year) ? 1 : 2)\n\t\t);\n\t\tlet month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);\n\t\tlet day = (wjd - _gregorianToJulianDay_3(year, month, 1)) + 1;\n\t\treturn [year, month, day];\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "gregorianToJulianDay",
  ["year", "month", "day"],
  sl.annotateFunction(function (_year, _month, _day) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _year, _month, _day";
      throw new Error(errorMessage);
    } /* Statements */
    let _gregorianEpoch = 1721425.5;
    return _ceiling_1(
      _plusSign_2(
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(
                _hyphenMinus_2(_gregorianEpoch, 1),
                _asterisk_2(365, _hyphenMinus_2(_year, 1)),
              ),
              _floor_1(_solidus_2(_hyphenMinus_2(_year, 1), 4)),
            ),
            _hyphenMinus_2(
              0,
              _floor_1(_solidus_2(_hyphenMinus_2(_year, 1), 100)),
            ),
          ),
          _floor_1(_solidus_2(_hyphenMinus_2(_year, 1), 400)),
        ),
        _floor_1(
          _plusSign_2(
            _plusSign_2(
              _solidus_2(_hyphenMinus_2(_asterisk_2(367, _month), 362), 12),
              _if_3(
                _lessThanSignEqualsSign_2(_month, 2),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 0;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _isGregorianLeapYear_1(_year),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return -1;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return -2;
                    }, []),
                  );
                }, []),
              ),
            ),
            _day,
          ),
        ),
      ),
    );
  }, ["year", "month", "day"]),
  "{ :year :month :day |\n\t\t/* https://www.fourmilab.ch/documents/calendar/calendar.js */\n\t\tlet gregorianEpoch = 1_721_425.5;\n\t\t(\n\t\t\t(gregorianEpoch - 1)\n\t\t\t+\n\t\t\t(365 * (year - 1))\n\t\t\t+\n\t\t\tfloor((year - 1) / 4)\n\t\t\t+\n\t\t\t(0 - floor((year - 1) / 100))\n\t\t\t+\n\t\t\tfloor((year - 1) / 400)\n\t\t\t+\n\t\t\tfloor(\n\t\t\t\t(((367 * month) - 362) / 12)\n\t\t\t\t+\n\t\t\t\t(month <= 2).if {\n\t\t\t\t\t0\n\t\t\t\t} {\n\t\t\t\t\tyear.isGregorianLeapYear.if { -1 } { -2 }\n\t\t\t\t}\n\t\t\t\t+\n\t\t\t\tday\n\t\t\t)\n\t\t).ceiling\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Date",
  "julianToJulianDay",
  ["year", "month", "day"],
  sl.annotateFunction(function (_year, _month, _day) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _year, _month, _day";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _lessThanSignEqualsSign_2(_month, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _year = _hyphenMinus_2(_year, 1);
        return _month = _plusSign_2(_month, 12);
      }, []),
    );
    return _ceiling_1(
      _hyphenMinus_2(
        _plusSign_2(
          _plusSign_2(
            _floor_1(_asterisk_2(365.25, _plusSign_2(_year, 4716))),
            _floor_1(_asterisk_2(30.6001, _plusSign_2(_month, 1))),
          ),
          _day,
        ),
        1524.5,
      ),
    );
  }, ["year", "month", "day"]),
  "{ :year :month :day |\n\t\t/* https://www.fourmilab.ch/documents/calendar/calendar.js */\n\t\t(month <= 2).ifTrue {\n\t\t\tyear := year - 1;\n\t\t\tmonth := month + 12\n\t\t};\n\t\t(\n\t\t\t(\n\t\t\t\tfloor((365.25 * (year + 4716)))\n\t\t\t\t+\n\t\t\t\tfloor((30.6001 * (month + 1)))\n\t\t\t\t+\n\t\t\t\tday\n\t\t\t)\n\t\t\t-\n\t\t\t1524.5\n\t\t).ceiling\n\t}",
);
