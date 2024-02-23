sl.addType(
  false,
  "Duration",
  "Duration",
  ["Object", "Magnitude"],
  ["milliseconds"],
);

sl.copyTraitToType(
  "Object",
  "Duration",
);

sl.copyTraitToType(
  "Magnitude",
  "Duration",
);

sl.addMethod(
  "Duration",
  "Duration",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isDuration_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_milliseconds_1(_self), _milliseconds_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isDuration & {\n\t\t\tself.milliseconds = anObject.milliseconds\n\t\t}\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "lessThanSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(
      _milliseconds_1(_self),
      _milliseconds_1(_asDuration_1(_aDuration)),
    );
  },
  "{ :self :aDuration |\n\t\tself.milliseconds < aDuration.asDuration.milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "asterisk",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(_asterisk_2(_milliseconds_1(_self), _aNumber));
  },
  "{ :self :aNumber |\n\t\t(self.milliseconds * aNumber).milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "solidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(_solidus_2(_milliseconds_1(_self), _aNumber));
  },
  "{ :self :aNumber |\n\t\t(self.milliseconds / aNumber).milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "plusSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(
      _plusSign_2(
        _milliseconds_1(_self),
        _milliseconds_1(_asDuration_1(_aDuration)),
      ),
    );
  },
  "{ :self :aDuration |\n\t\t(self.milliseconds + aDuration.asDuration.milliseconds).milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "hyphenMinus",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(
      _hyphenMinus_2(
        _milliseconds_1(_self),
        _milliseconds_1(_asDuration_1(_aDuration)),
      ),
    );
  },
  "{ :self :aDuration |\n\t\t(self.milliseconds - aDuration.asDuration.milliseconds).milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(_abs_1(_milliseconds_1(_self)));
  },
  "{ :self |\n\t\tself.milliseconds.abs.milliseconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "asDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "asSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _seconds_1(_self);
  },
  "{ :self |\n\t\tself.seconds\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "centiseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_milliseconds_1(_self), 10);
  },
  "{ :self |\n\t\tself.milliseconds / 10\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "days",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  },
  "{ :self |\n\t\tself.hours / 24\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "hours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  },
  "{ :self |\n\t\tself.minutes / 60\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_milliseconds_1(_self), 0);
  },
  "{ :self |\n\t\tself.milliseconds = 0\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "minutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  },
  "{ :self |\n\t\tself.seconds / 60\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "seconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_milliseconds_1(_self), 1000);
  },
  "{ :self |\n\t\tself.milliseconds / 1000\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_milliseconds_1(_self)),
      ".milliseconds",
    );
  },
  "{ :self |\n\t\tself.milliseconds.storeString ++ '.milliseconds'\n\t}",
);

sl.addMethod(
  "Duration",
  "Duration",
  "weeks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_days_1(_self), 7);
  },
  "{ :self |\n\t\tself.days / 7\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "anomalisticMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 27.554551));
  },
  "{ :self |\n\t\t(self * 27.554551).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "anomalisticYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 365.259636));
  },
  "{ :self |\n\t\t(self * 365.259636).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "asDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "Duration: no units specified");
  },
  "{ :self |\n\t\tself.error('Duration: no units specified')\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "asSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "centiseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(_asterisk_2(_self, 10));
  },
  "{ :self |\n\t\t(self * 10).milliseconds\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "days",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hours_1(_asterisk_2(_self, 24));
  },
  "{ :self |\n\t\t(self * 24).hours\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "hours",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minutes_1(_asterisk_2(_self, 60));
  },
  "{ :self |\n\t\t(self * 60).minutes\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "julianYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 365.25));
  },
  "{ :self |\n\t\t(self * 365.25).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "milliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newDuration_0(), _self);
  },
  "{ :self |\n\t\tnewDuration().initializeSlots(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "minutes",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _seconds_1(_asterisk_2(_self, 60));
  },
  "{ :self |\n\t\t(self * 60).seconds\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "seconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _milliseconds_1(_asterisk_2(_self, 1000));
  },
  "{ :self |\n\t\t(self * 1000).milliseconds\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "siderealMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 27.321661));
  },
  "{ :self |\n\t\t(self * 27.321661).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "siderealYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 365.256363004));
  },
  "{ :self |\n\t\t(self * 365.256363004).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "solarMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 27.321582));
  },
  "{ :self |\n\t\t(self * 27.321582).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "solarYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 365.24219));
  },
  "{ :self |\n\t\t(self * 365.24219).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "synodicMonths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 29.53059));
  },
  "{ :self |\n\t\t(self * 29.53059).days\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Duration",
  "weeks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _days_1(_asterisk_2(_self, 7));
  },
  "{ :self |\n\t\t(self * 7).days\n\t}",
);

sl.addMethod(
  "Block",
  "Duration",
  "valueAfter",
  ["self:/0", "delay"],
  function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueAfterMilliseconds_2(
      _self_0,
      _asterisk_2(_asSeconds_1(_delay), 1000),
    );
  },
  "{ :self:/0 :delay |\n\t\tself:/0.valueAfterMilliseconds(delay.asSeconds * 1000)\n\t}",
);

sl.addMethod(
  "Block",
  "Duration",
  "valueAfterWith",
  ["self:/1", "delay", "anObject"],
  function (_self_1, _delay, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _delay, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueAfterMillisecondsWith_3(
      _self_1,
      _asterisk_2(_asSeconds_1(_delay), 1000),
      _anObject,
    );
  },
  "{ :self:/1 :delay :anObject |\n\t\tself:/1.valueAfterMillisecondsWith(delay.asSeconds * 1000, anObject)\n\t}",
);

sl.addMethod(
  "Block",
  "Duration",
  "valueEvery",
  ["self:/0", "delay"],
  function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueEveryMilliseconds_2(
      _self_0,
      _asterisk_2(_asSeconds_1(_delay), 1000),
    );
  },
  "{ :self:/0 :delay |\n\t\tself:/0.valueEveryMilliseconds(delay.asSeconds * 1000)\n\t}",
);

sl.addMethod(
  "String",
  "Duration",
  "parseIso8601DurationAsList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
  "{ :self |\n\t\t<primitive:\n\t\tconst regex = /P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+)S)?)?$/;\n\t\tconst [_unused, years, months, weeks, days, hours, minutes, seconds] = _self.match(regex);\n\t\treturn [years, months, weeks, days, hours, minutes, seconds].map(function(x) {\n\t\t\treturn x ? Number(x) : 0;\n\t\t});\n\t\t>\n\t}",
);

sl.addMethod(
  "String",
  "Duration",
  "parseDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym46 = _assertIsOfSize_2(_parseIso8601DurationAsList_1(_self), 7),
      _years = _at_2(__genSym46, 1),
      _months = _at_2(__genSym46, 2),
      _weeks = _at_2(__genSym46, 3),
      _days = _at_2(__genSym46, 4),
      _hours = _at_2(__genSym46, 5),
      _minutes = _at_2(__genSym46, 6),
      _seconds = _at_2(__genSym46, 7);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_plusSign_2(_years, _months), 0),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          "String>>asDuration: includes non-zero year or month fields",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
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
  "{ :self |\n\t\tlet [\n\t\t\tyears, months, weeks, days,\n\t\t\thours, minutes, seconds\n\t\t] = self.parseIso8601DurationAsList;\n\t\t(years + months > 0).if {\n\t\t\tself.error('String>>asDuration: includes non-zero year or month fields')\n\t\t} {\n\t\t\tweeks.weeks + days.days + hours.hours + minutes.minutes + seconds.seconds\n\t\t}\n\t}",
);
