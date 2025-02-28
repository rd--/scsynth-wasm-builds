sl.addType(
  false,
  "Duration",
  "Duration",
  ["Object", "Magnitude"],
  ["seconds"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Duration",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Duration",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "lessThanSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _seconds_1(_self),
      _seconds_1(_asDuration_1(_aDuration)),
    );
  },
  "{ :self :aDuration | <(seconds(self), seconds(asDuration(aDuration))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asterisk",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_asterisk_2(_seconds_1(_self), _aNumber));
  },
  "{ :self :aNumber | seconds((*(seconds(self), aNumber))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "solidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_solidus_2(_seconds_1(_self), _aNumber));
  },
  "{ :self :aNumber | seconds((/(seconds(self), aNumber))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "plusSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(
      _plusSign_2(_seconds_1(_self), _seconds_1(_asDuration_1(_aDuration))),
    );
  },
  "{ :self :aDuration | seconds((+(seconds(self), seconds(asDuration(aDuration))))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "hyphenMinus",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(
      _hyphenMinus_2(_seconds_1(_self), _seconds_1(_asDuration_1(_aDuration))),
    );
  },
  "{ :self :aDuration | seconds((-(seconds(self), seconds(asDuration(aDuration))))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_abs_1(_seconds_1(_self)));
  },
  "{ :self | seconds(abs(seconds(self))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  },
  "{ :self | seconds(self) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "centiseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 10);
  },
  "{ :self | *(seconds(self), 10) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "days",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  },
  "{ :self | /(hours(self), 24) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "hours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  },
  "{ :self | /(minutes(self), 60) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_seconds_1(_self), 0);
  },
  "{ :self | =(seconds(self), 0) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "milliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 1000);
  },
  "{ :self | *(seconds(self), 1000) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "minutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  },
  "{ :self | /(seconds(self), 60) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_seconds_1(_self)), ".seconds");
  },
  "{ :self | ++(storeString(seconds(self)), '.seconds') }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "weeks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 7);
  },
  "{ :self | /(days(self), 7) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "anomalisticMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.554551));
  },
  "{ :self | days((*(self, 27.554551))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "anomalisticYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.259636));
  },
  "{ :self | days((*(self, 365.259636))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "asDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Duration: no units specified");
  },
  "{ :self | error(self,'Duration: no units specified') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "asSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "centiseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _milliseconds_1(_asterisk_2(_self, 10));
  },
  "{ :self | milliseconds((*(self, 10))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "days",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hours_1(_asterisk_2(_self, 24));
  },
  "{ :self | hours((*(self, 24))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "hours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minutes_1(_asterisk_2(_self, 60));
  },
  "{ :self | minutes((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "julianYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.25));
  },
  "{ :self | days((*(self, 365.25))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "milliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_solidus_2(_self, 1000));
  },
  "{ :self | seconds((/(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "minutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_asterisk_2(_self, 60));
  },
  "{ :self | seconds((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "seconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDuration_0(), _self);
  },
  "{ :self | initializeSlots(newDuration(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "siderealMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321661));
  },
  "{ :self | days((*(self, 27.321661))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "siderealYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.256363004));
  },
  "{ :self | days((*(self, 365.256363004))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "solarMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321582));
  },
  "{ :self | days((*(self, 27.321582))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "solarYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.24219));
  },
  "{ :self | days((*(self, 365.24219))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "synodicMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 29.53059));
  },
  "{ :self | days((*(self, 29.53059))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "weeks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 7));
  },
  "{ :self | days((*(self, 7))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueAfter",
  ["self:/0", "delay"],
  function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueAfterMilliseconds_2(
      _self_0,
      _asterisk_2(_asSeconds_1(_delay), 1000),
    );
  },
  "{ :self:/0 :delay | valueAfterMilliseconds(self:/0,*(asSeconds(delay), 1000)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueAfterWith",
  ["self:/1", "delay", "anObject"],
  function (_self_1, _delay, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _delay, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueAfterMillisecondsWith_3(
      _self_1,
      _asterisk_2(_asSeconds_1(_delay), 1000),
      _anObject,
    );
  },
  "{ :self:/1 :delay :anObject | valueAfterMillisecondsWith(self:/1,*(asSeconds(delay), 1000), anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueEvery",
  ["self:/0", "delay"],
  function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueEveryMilliseconds_2(
      _self_0,
      _asterisk_2(_asSeconds_1(_delay), 1000),
    );
  },
  "{ :self:/0 :delay | valueEveryMilliseconds(self:/0,*(asSeconds(delay), 1000)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Duration",
  "parseIso8601DurationAsList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const regex =
      /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;
    const [_unused, years, months, weeks, days, hours, minutes, seconds] = _self
      .match(regex);
    return [years, months, weeks, days, hours, minutes, seconds].map(
      function (x) {
        return x ? Number(x) : 0;
      },
    );
  },
  "{ :self | <primitive: const regex = /P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+)S)?)?$/;\n\t\tconst [_unused, years, months, weeks, days, hours, minutes, seconds] = _self.match(regex);\n\t\treturn [years, months, weeks, days, hours, minutes, seconds].map(function(x) {\n\t\t\treturn x ? Number(x) : 0;\n\t\t});>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Duration",
  "parseDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL255 = _assertIsOfSize_2(_parseIso8601DurationAsList_1(_self), 7);
    let _years = _at_2(__SPL255, 1);
    let _months = _at_2(__SPL255, 2);
    let _weeks = _at_2(__SPL255, 3);
    let _days = _at_2(__SPL255, 4);
    let _hours = _at_2(__SPL255, 5);
    let _minutes = _at_2(__SPL255, 6);
    let _seconds = _at_2(__SPL255, 7);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_plusSign_2(_years, _months), 0),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>asDuration: includes non-zero year or month fields",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(_weeks_1(_weeks), _days_1(_days)),
              _hours_1(_hours),
            ),
            _minutes_1(_minutes),
          ),
          _seconds_1(_seconds),
        );
      },
    );
  },
  "{ :self | let __SPL255 = assertIsOfSize(parseIso8601DurationAsList(self), 7); let years = at(__SPL255, 1); let months = at(__SPL255, 2); let weeks = at(__SPL255, 3); let days = at(__SPL255, 4); let hours = at(__SPL255, 5); let minutes = at(__SPL255, 6); let seconds = at(__SPL255, 7); if((>(+(years, months), 0)), { error(self,'String>>asDuration: includes non-zero year or month fields') }, { +(+(+(+(weeks(weeks), days(days)), hours(hours)), minutes(minutes)), seconds(seconds)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Duration",
  "localTimeZoneOffset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minutes_1(_localTimeZoneOffsetInMinutes_1(_self));
  },
  "{ :self | minutes(localTimeZoneOffsetInMinutes(self)) }",
);
