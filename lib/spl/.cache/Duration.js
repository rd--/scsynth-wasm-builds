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
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
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
  "{ :self :aDuration | <(seconds(self), seconds(asDuration(aDuration))) }",
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
  "{ :self :aNumber | Duration(*(seconds(self), aNumber)) }",
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
  "{ :self :aNumber | Duration(/(seconds(self), aNumber)) }",
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
  "{ :self :aDuration | Duration(+(seconds(self), seconds(asDuration(aDuration)))) }",
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
  "{ :self :aDuration | Duration(-(seconds(self), seconds(asDuration(aDuration)))) }",
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
  "{ :self | Duration(abs(seconds(self))) }",
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
  "{ :self | self }",
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
  "{ :self | Frequency(reciprocal(seconds(self))) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = [7, 24, 60, 60];
    /* Statements */
    return _padLeft_3(_mixedRadixEncode_2(_seconds_1(_self), _b), [5], 0);
  }, ["self"]),
  "{ :self | let b = [7, 24, 60, 60]; padLeft(mixedRadixEncode(seconds(self),b),[5], 0) }",
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
  "{ :self | seconds(self) }",
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
    let __SPL1 = _assertIsOfSize_2(_asList_1(_self), 5);
    let _w = _at_2(__SPL1, 1);
    let _d = _at_2(__SPL1, 2);
    let _h = _at_2(__SPL1, 3);
    let _m = _at_2(__SPL1, 4);
    let _s = _at_2(__SPL1, 5);
    /* Statements */
    return _format_2("P%W%DT%H%M%S", [_w, _d, _h, _m, _s]);
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(asList(self), 5); let w = at(__SPL1, 1); let d = at(__SPL1, 2); let h = at(__SPL1, 3); let m = at(__SPL1, 4); let s = at(__SPL1, 5); format('P%W%DT%H%M%S',[w, d, h, m, s]) }",
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
  "{ :self | =(seconds(self), 0) }",
);

sl.addMethodToExistingType(
  "Duration",
  "Duration",
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
  "{ :self | initializeSlots(newDuration(),self) }",
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
    let __SPL2 = _assertIsOfSize_2(_self, 5);
    let _w = _at_2(__SPL2, 1);
    let _d = _at_2(__SPL2, 2);
    let _h = _at_2(__SPL2, 3);
    let _m = _at_2(__SPL2, 4);
    let _s = _at_2(__SPL2, 5);
    let _b = [7, 24, 60, 60];
    /* Statements */
    return _Duration_1(_mixedRadixDecode_2(_self, _b));
  }, ["self"]),
  "{ :self | let __SPL2 = assertIsOfSize(self, 5); let w = at(__SPL2, 1); let d = at(__SPL2, 2); let h = at(__SPL2, 3); let m = at(__SPL2, 4); let s = at(__SPL2, 5); let b = [7, 24, 60, 60]; Duration(mixedRadixDecode(self,b)) }",
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
  "{ :self | error(self,'Duration: no units specified') }",
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
  "{ :self | self }",
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
  "{ :self:/0 :delay | basicValueAfter(self:/0,asSeconds(delay)) }",
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
  "{ :self:/1 :delay :anObject | basicValueAfterWith(self:/1,asSeconds(delay), anObject) }",
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
  "{ :self:/0 :delay | basicValueEvery(self:/0,asSeconds(delay)) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Duration",
  "parseIso8601DurationAsList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const regex =
      /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(\.\d+)?)S)?)?$/;
    const [_unused, years, months, weeks, days, hours, minutes, seconds] = _self
      .match(regex);
    return [years, months, weeks, days, hours, minutes, seconds].map(
      function (x) {
        return x ? Number(x) : 0;
      },
    );
  }, ["self"]),
  "{ :self | <primitive: const regex = /P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(\\.\\d+)?)S)?)?$/;\n\t\tconst [_unused, years, months, weeks, days, hours, minutes, seconds] = _self.match(regex);\n\t\treturn [years, months, weeks, days, hours, minutes, seconds].map(function(x) {\n\t\t\treturn x ? Number(x) : 0;\n\t\t});>\n }",
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
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_parseIso8601DurationAsList_1(_self), 7);
    let _years = _at_2(__SPL3, 1);
    let _months = _at_2(__SPL3, 2);
    let _weeks = _at_2(__SPL3, 3);
    let _days = _at_2(__SPL3, 4);
    let _hours = _at_2(__SPL3, 5);
    let _minutes = _at_2(__SPL3, 6);
    let _seconds = _at_2(__SPL3, 7);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_plusSign_2(_years, _months), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "String>>asDuration: includes non-zero year or month fields",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(_asDuration_1(_weeks_1(_weeks)), _days_1(_days)),
              _hours_1(_hours),
            ),
            _minutes_1(_minutes),
          ),
          _seconds_1(_seconds),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL3 = assertIsOfSize(parseIso8601DurationAsList(self), 7); let years = at(__SPL3, 1); let months = at(__SPL3, 2); let weeks = at(__SPL3, 3); let days = at(__SPL3, 4); let hours = at(__SPL3, 5); let minutes = at(__SPL3, 6); let seconds = at(__SPL3, 7); if((>(+(years, months), 0)), { error(self,'String>>asDuration: includes non-zero year or month fields') }, { +(+(+(+(asDuration(weeks(weeks)), days(days)), hours(hours)), minutes(minutes)), seconds(seconds)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Duration",
  "asDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_unit_1(_self), "seconds"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Duration_1(_magnitude_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asDuration: not time");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(unit(self), 'seconds')), { Duration(magnitude(self)) }, { error(self,'asDuration: not time') }) }",
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
  "{ :self | minutes(localTimeZoneOffsetInMinutes(self)) }",
);
