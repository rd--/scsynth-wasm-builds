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
  "{ :self | DateAndTime(absoluteTime(self)) }",
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
  "{ :self | [year(self), month(self), dayOfMonth(self)] }",
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
  "{ :self | let y = year(self); let m = month(self); let d = dayOfMonth(self); let t1 = absoluteTime(Date(y, m, d)); let t2 = absoluteTime(Date(y, 1, 1)); +(/((-(t1, t2)), (*(*(24, 60), 60))), 1) }",
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
  "{ :year :month :dayOfMonth | <primitive: return new Date(\n\t\t\tDate.UTC(\n\t\t\t\t_year,\n\t\t\t\t_month - 1,\n\t\t\t\t_dayOfMonth,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t)\n\t\t);>\n }",
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
    let __SPL560 = _assertIsOfSize_2(_self, 3);
    let _year = _at_2(__SPL560, 1);
    let _month = _at_2(__SPL560, 2);
    let _dayOfMonth = _at_2(__SPL560, 3);
    /* Statements */
    return _Date_3(_year, _month, _dayOfMonth);
  }, ["self"]),
  "{ :self | let __SPL560 = assertIsOfSize(self, 3); let year = at(__SPL560, 1); let month = at(__SPL560, 2); let dayOfMonth = at(__SPL560, 3); Date(year, month, dayOfMonth) }",
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
  "{ :self | matchesRegularExpression(self,'^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$') }",
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
  "{ :self :elseClause:/0 | if((&(=(size(self), 10), { isDateString(self) })), { uncheckedParseDate(self) }, { elseClause() }) }",
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
  "{ :self | parseDate(self, { error(self,'parseDate: invalid size') }) }",
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
  "{ :self | <primitive: return new Date(_self);>\n }",
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
