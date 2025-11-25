sl.addType(
  false,
  "Duration",
  "Duration",
  ["Object", "Storeable", "Equatable", "Comparable", "Magnitude"],
  ["seconds"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Duration",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Duration",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Duration",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Duration",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Duration",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "lessThanSign",
  ["self", "aDuration"],
  sl.annotateFunction(function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _seconds_1(_self),
      _seconds_1(_asDuration_1(_aDuration)),
    );
  }, ["self", "aDuration"]),
  "{ :self :aDuration |\n\t\tself.seconds < aDuration.asDuration.seconds\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asterisk",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(_asterisk_2(_seconds_1(_self), _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tDuration(self.seconds * aNumber)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "solidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(_solidus_2(_seconds_1(_self), _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tDuration(self.seconds / aNumber)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "plusSign",
  ["self", "aDuration"],
  sl.annotateFunction(function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(
      _plusSign_2(_seconds_1(_self), _seconds_1(_asDuration_1(_aDuration))),
    );
  }, ["self", "aDuration"]),
  "{ :self :aDuration |\n\t\tDuration(self.seconds + aDuration.asDuration.seconds)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "hyphenMinus",
  ["self", "aDuration"],
  sl.annotateFunction(function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(
      _hyphenMinus_2(_seconds_1(_self), _seconds_1(_asDuration_1(_aDuration))),
    );
  }, ["self", "aDuration"]),
  "{ :self :aDuration |\n\t\tDuration(self.seconds - aDuration.asDuration.seconds)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(_abs_1(_seconds_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tDuration(self.seconds.abs)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asDuration",
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
  "Duration",
  "Duration",
  "asFrequency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Frequency_1(_reciprocal_1(_seconds_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tFrequency(self.seconds.reciprocal)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
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

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "components",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = [24, 60, 60];
    /* Statements */
    return _padLeft_3(_mixedRadixEncode_2(_seconds_1(_self), _b), [4], 0);
  }, ["self"]),
  "{ :self |\n\t\tlet b = [24 60 60];\n\t\tself.seconds.mixedRadixEncode(b).padLeft([4], 0)\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "durationString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_components_1(_self), 4);
    let _d = _at_2(__SplVar1, 1);
    let _h = _at_2(__SplVar1, 2);
    let _m = _at_2(__SplVar1, 3);
    let _s = _at_2(__SplVar1, 4);
    /* Statements */
    return _format_2("P%DT%H%M%S", [_d, _h, _m, _s]);
  }, ["self"]),
  "{ :self |\n\t\tlet [d, h, m, s] = self.components;\n\t\t'P%DT%H%M%S'.format([d, h, m, s])\n\t}",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_seconds_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.seconds = 0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Duration",
  "Duration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newDuration_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewDuration().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Duration",
  "Duration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 4);
    let _d = _at_2(__SplVar2, 1);
    let _h = _at_2(__SplVar2, 2);
    let _m = _at_2(__SplVar2, 3);
    let _s = _at_2(__SplVar2, 4);
    let _b = [24, 60, 60];
    /* Statements */
    return _Duration_1(_mixedRadixDecode_2(_self, _b));
  }, ["self"]),
  "{ :self |\n\t\tlet [d, h, m, s] = self;\n\t\tlet b = [24 60 60];\n\t\tDuration(self.mixedRadixDecode(b))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "asDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Duration: no units specified");
  }, ["self"]),
  "{ :self |\n\t\tself.error('Duration: no units specified')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Duration",
  "asSeconds",
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

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueAfter",
  ["self:/0", "delay"],
  sl.annotateFunction(function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicValueAfter_2(_self_0, _asSeconds_1(_delay));
  }, ["self:/0", "delay"]),
  "{ :self:/0 :delay |\n\t\tself:/0.basicValueAfter(delay.asSeconds)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueAfterWith",
  ["self:/1", "delay", "anObject"],
  sl.annotateFunction(function (_self_1, _delay, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _delay, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicValueAfterWith_3(_self_1, _asSeconds_1(_delay), _anObject);
  }, ["self:/1", "delay", "anObject"]),
  "{ :self:/1 :delay :anObject |\n\t\tself:/1.basicValueAfterWith(delay.asSeconds, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Duration",
  "valueEvery",
  ["self:/0", "delay"],
  sl.annotateFunction(function (_self_0, _delay) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_0, _delay";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicValueEvery_2(_self_0, _asSeconds_1(_delay));
  }, ["self:/0", "delay"]),
  "{ :self:/0 :delay |\n\t\tself:/0.basicValueEvery(delay.asSeconds)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Duration",
  "parseDuration",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIso8601DurationString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(
          _components_1(_parseCalendarDuration_1(_self)),
          6,
        );
        let _years = _at_2(__SplVar3, 1);
        let _months = _at_2(__SplVar3, 2);
        let _days = _at_2(__SplVar3, 3);
        let _hours = _at_2(__SplVar3, 4);
        let _minutes = _at_2(__SplVar3, 5);
        let _seconds = _at_2(__SplVar3, 6);
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_plusSign_2(_years, _months), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _elseClause_0();
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Duration_1(
              _mixedRadixDecode_2([_days, _hours, _minutes, _seconds], [
                24,
                60,
                60,
              ]),
            );
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
  "{ :self :elseClause:/0 |\n\t\tself.isIso8601DurationString.if {\n\t\t\tlet [\n\t\t\t\tyears,\n\t\t\t\tmonths,\n\t\t\t\tdays,\n\t\t\t\thours,\n\t\t\t\tminutes,\n\t\t\t\tseconds\n\t\t\t] = self.parseCalendarDuration.components;\n\t\t\t(years + months > 0).if {\n\t\t\t\telseClause()\n\t\t\t} {\n\t\t\t\tDuration(\n\t\t\t\t\t[days, hours, minutes, seconds].mixedRadixDecode([24 60 60])\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Duration",
  "parseDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseDuration_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseDuration: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseDuration {\n\t\t\tself.error('String>>parseDuration: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Duration",
  "localTimeZoneOffset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minutes_1(_localTimeZoneOffsetInMinutes_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself\n\t\t.localTimeZoneOffsetInMinutes\n\t\t.minutes\n\t}",
);
