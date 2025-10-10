sl.addTrait("Time", "Time");

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.seconds\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.seconds * 10\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.hours / 24\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.minutes / 60\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.days / 365.25\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.seconds * 1000\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.seconds / 60\n\t}",
);

sl.addMethodToExistingTrait(
  "Time",
  "Time",
  "seconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "seconds");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('seconds')\n\t}",
);

sl.addMethodToExistingTrait(
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
        let __SplVar1 = _assertIsOfSize_2(
          _mixedRadixEncode_2(_seconds, [60, 60]),
          3,
        );
        let _h = _at_2(__SplVar1, 1);
        let _m = _at_2(__SplVar1, 2);
        let _s = _at_2(__SplVar1, 3);
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
  "{ :self |\n\t\tlet seconds = self.seconds;\n\t\t(seconds >= 0 & { seconds < (24 * 60 * 60) }).if {\n\t\t\tlet [h, m, s] = seconds.mixedRadixEncode([60 60]);\n\t\t\t'%:%:%.%'.format([\n\t\t\t\th.asString.padLeft([2], '0'),\n\t\t\t\tm.asString.padLeft([2], '0'),\n\t\t\t\ts.truncate.asString.padLeft([2], '0'),\n\t\t\t\t(s.fractionalPart * 1000).round.asString.padLeft([3], '0')\n\t\t\t])\n\t\t} {\n\t\t\tself.error('timeString: invalid time')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
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
  "{ :self |\n\t\tself.days / 7\n\t}",
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
    return _Quantity_2(_self, "seconds");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'seconds')\n\t}",
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
  "{ :self |\n\t\tself.matchesRegularExpression('[0-9][0-9]:[0-9][0-9]:[0-9][0-9](.[0-9]+)?Z?$')\n\t}",
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
        let __SplVar2 = _assertIsOfSize_2(_splitBy_2(_self, ":"), 3);
        let _h = _at_2(__SplVar2, 1);
        let _m = _at_2(__SplVar2, 2);
        let _s = _at_2(__SplVar2, 3);
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
  "{ :self :elseClause:/0 |\n\t\tself.isTimeString.if {\n\t\t\tlet [h, m, s] = self.splitBy(':');\n\t\t\th := h.parseDecimalInteger;\n\t\t\tm := m.parseDecimalInteger;\n\t\t\ts := s.parseNumber;\n\t\t\t(h < 24 | { m < 60 | { s < 60 } }).if {\n\t\t\t\tTime((h * 60 * 60) + (m * 60) + s)\n\t\t\t} {\n\t\t\t\telseClause()\n\t\t\t}\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.parseTime {\n\t\t\tself.error('parseTime: invalid input')\n\t\t}\n\t}",
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
  "{ :self |\n\t\t(self * 27.554551).days\n\t}",
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
  "{ :self |\n\t\t(self * 365.259636).days\n\t}",
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
  "{ :self |\n\t\t(self * 10).milliseconds\n\t}",
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
  "{ :self |\n\t\t(self * 24).hours\n\t}",
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
  "{ :self |\n\t\t(self * 60).minutes\n\t}",
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
  "{ :self |\n\t\t(self * 365.25).days\n\t}",
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
  "{ :self |\n\t\t(self / 1000).seconds\n\t}",
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
  "{ :self |\n\t\t(self * 60).seconds\n\t}",
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
  "{ :self |\n\t\t(self * 86164.0905).seconds\n\t}",
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
  "{ :self |\n\t\t(self * 27.321661).days\n\t}",
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
  "{ :self |\n\t\t(self * 365.256363004).days\n\t}",
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
  "{ :self |\n\t\t(self * 27.321582).days\n\t}",
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
  "{ :self |\n\t\t(self * 365.24219).days\n\t}",
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
  "{ :self |\n\t\t(self * 29.53059).days\n\t}",
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
  "{ :self |\n\t\t(self * 7).days\n\t}",
);
