sl.addType(
  false,
  "Time",
  "Time",
  ["Object"],
  ["seconds"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Time",
);

sl.addMethodToExistingType(
  "Time",
  "Time",
  "magnitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.addMethodToExistingType(
  "Time",
  "Time",
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

sl.addMethodToExistingType(
  "Time",
  "Time",
  "timeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _seconds = _seconds_1(_self);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _greaterThanSignEqualsSign_2(_seconds, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(
            _seconds,
            _asterisk_2(_asterisk_2(24, 60), 60),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL526 = _assertIsOfSize_2(
          _mixedRadixEncode_2(_seconds, [60, 60]),
          3,
        );
        let _h = _at_2(__SPL526, 1);
        let _m = _at_2(__SPL526, 2);
        let _s = _at_2(__SPL526, 3);
        /* Statements */
        return _format_2("%:%:%.%", [
          _padLeft_3(_asString_1(_h), [2], "0"),
          _padLeft_3(_asString_1(_m), [2], "0"),
          _padLeft_3(_asString_1(_truncate_1(_s)), [2], "0"),
          _padLeft_3(
            _asString_1(_round_1(_asterisk_2(_fractionalPart_1(_s), 1000))),
            [3],
            "0",
          ),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "timeString: invalid time");
      }, []),
    );
  }, ["self"]),
  "{ :self | let seconds = seconds(self); if((&(>=(seconds, 0), { <(seconds, (*(*(24, 60), 60))) })), { let __SPL526 = assertIsOfSize(mixedRadixEncode(seconds,[60, 60]), 3); let h = at(__SPL526, 1); let m = at(__SPL526, 2); let s = at(__SPL526, 3); format('%:%:%.%',[padLeft(asString(h),[2], '0'), padLeft(asString(m),[2], '0'), padLeft(asString(truncate(s)),[2], '0'), padLeft(asString(round((*(fractionalPart(s), 1000)))),[3], '0')]) }, { error(self,'timeString: invalid time') }) }",
);

sl.addMethodToExistingType(
  "Time",
  "Time",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "seconds";
  }, ["unused"]),
  "{ :unused | 'seconds' }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Time",
  "isTimeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(
      _self,
      "[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?Z?$",
    );
  }, ["self"]),
  "{ :self | matchesRegularExpression(self,'[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?Z?$') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Time",
  "parseTime",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isTimeString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL527 = _assertIsOfSize_2(_splitBy_2(_self, ":"), 3);
        let _h = _at_2(__SPL527, 1);
        let _m = _at_2(__SPL527, 2);
        let _s = _at_2(__SPL527, 3);
        /* Statements */
        _h = _parseDecimalInteger_1(_h);
        _m = _parseDecimalInteger_1(_m);
        _s = _parseNumber_1(_s);
        return _if_3(
          _verticalLine_2(
            _lessThanSign_2(_h, 24),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _verticalLine_2(
                _lessThanSign_2(_m, 60),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSign_2(_s, 60);
                }, []),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Time_1(
              _plusSign_2(
                _plusSign_2(
                  _asterisk_2(_asterisk_2(_h, 60), 60),
                  _asterisk_2(_m, 60),
                ),
                _s,
              ),
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
  "{ :self :elseClause:/0 | if(isTimeString(self), { let __SPL527 = assertIsOfSize(splitBy(self,':'), 3); let h = at(__SPL527, 1); let m = at(__SPL527, 2); let s = at(__SPL527, 3); h := parseDecimalInteger(h); m := parseDecimalInteger(m); s := parseNumber(s); if((|(<(h, 24), { |(<(m, 60), { <(s, 60) }) })), { Time(+(+((*(*(h, 60), 60)), (*(m, 60))), s)) }, { elseClause() }) }, { elseClause() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Time",
  "parseTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseTime_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseTime: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self | parseTime(self, { error(self,'parseTime: invalid input') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "asSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "asSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 10);
  }, ["self"]),
  "{ :self | *(seconds(self), 10) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 10);
  }, ["self"]),
  "{ :self | *(seconds(self), 10) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  }, ["self"]),
  "{ :self | /(hours(self), 24) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  }, ["self"]),
  "{ :self | /(hours(self), 24) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  }, ["self"]),
  "{ :self | /(minutes(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  }, ["self"]),
  "{ :self | /(minutes(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "julianYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 365.25);
  }, ["self"]),
  "{ :self | /(days(self), 365.25) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "julianYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 365.25);
  }, ["self"]),
  "{ :self | /(days(self), 365.25) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 1000);
  }, ["self"]),
  "{ :self | *(seconds(self), 1000) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 1000);
  }, ["self"]),
  "{ :self | *(seconds(self), 1000) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  }, ["self"]),
  "{ :self | /(seconds(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  }, ["self"]),
  "{ :self | /(seconds(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 7);
  }, ["self"]),
  "{ :self | /(days(self), 7) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 7);
  }, ["self"]),
  "{ :self | /(days(self), 7) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "Time",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTime_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newTime(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "asTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Time_1(_seconds_1(_self));
  }, ["self"]),
  "{ :self | Time(seconds(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "anomalisticMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.554551));
  }, ["self"]),
  "{ :self | days((*(self, 27.554551))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "anomalisticYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.259636));
  }, ["self"]),
  "{ :self | days((*(self, 365.259636))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _milliseconds_1(_asterisk_2(_self, 10));
  }, ["self"]),
  "{ :self | milliseconds((*(self, 10))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hours_1(_asterisk_2(_self, 24));
  }, ["self"]),
  "{ :self | hours((*(self, 24))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minutes_1(_asterisk_2(_self, 60));
  }, ["self"]),
  "{ :self | minutes((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "julianYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.25));
  }, ["self"]),
  "{ :self | days((*(self, 365.25))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_solidus_2(_self, 1000));
  }, ["self"]),
  "{ :self | seconds((/(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_asterisk_2(_self, 60));
  }, ["self"]),
  "{ :self | seconds((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealDays",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_asterisk_2(_self, 86164.0905));
  }, ["self"]),
  "{ :self | seconds((*(self, 86164.0905))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321661));
  }, ["self"]),
  "{ :self | days((*(self, 27.321661))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.256363004));
  }, ["self"]),
  "{ :self | days((*(self, 365.256363004))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "solarMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321582));
  }, ["self"]),
  "{ :self | days((*(self, 27.321582))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "solarYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.24219));
  }, ["self"]),
  "{ :self | days((*(self, 365.24219))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "synodicMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 29.53059));
  }, ["self"]),
  "{ :self | days((*(self, 29.53059))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 7));
  }, ["self"]),
  "{ :self | days((*(self, 7))) }",
);
