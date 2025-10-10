sl.addType(
  true,
  "Date",
  "Date",
  ["Object", "Equatable", "Comparable", "Magnitude"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Date",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Date",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Date",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Date",
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
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Date",
  "Date",
  "asDateAndTime",
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
  "asList",
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
  "{ :self |\n\t\tTimeStamp(self.absoluteTime)\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\tself.year.asString,\n\t\t\tself.month.asString.padLeft([2], '0'),\n\t\t\tself.dayOfMonth.asString.padLeft([2], '0')\n\t\t].stringJoin('-')\n\t}",
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
    } /* Temporaries */
    let _y = _year_1(_self);
    let _m = _month_1(_self);
    let _d = _dayOfMonth_1(_self);
    let _t1 = _absoluteTime_1(_Date_3(_y, _m, _d));
    let _t2 = _absoluteTime_1(_Date_3(_y, 1, 1));
    /* Statements */
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
  ["self", "anObject", "aBlock:/2"],
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
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isDate & {\n\t\t\taBlock(self.absoluteTime, anObject.absoluteTime)\n\t\t}\n\t}",
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
      _asString_1(_year_1(_self)),
      _padLeft_3(_asString_1(_dayOfYear_1(_self)), [3], "0"),
    ], "-");
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.year.asString,\n\t\t\tself.dayOfYear.asString.padLeft([3], '0')\n\t\t].stringJoin('-')\n\t}",
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
  "{ :self |\n\t\t'Date(%)'.format([self.asList])\n\t}",
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
    return new Date(
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
  }, ["year", "month", "dayOfMonth"]),
  "{ :year :month :dayOfMonth |\n\t\t<primitive:\n\t\treturn new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t)\n\t\t);\n\t\t>\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_self, 3);
    let _year = _at_2(__SplVar1, 1);
    let _month = _at_2(__SplVar1, 2);
    let _dayOfMonth = _at_2(__SplVar1, 3);
    /* Statements */
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
  ["self", "elseClause:/0"],
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
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\t(self.size = 10 & { self.isDateString }).if {\n\t\t\tself.uncheckedParseDate\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
