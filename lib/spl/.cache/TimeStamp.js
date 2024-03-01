sl.addType(
  false,
  "TimeStamp",
  "TimeStamp",
  ["Object"],
  ["unixTimeInMilliseconds"],
);

sl.copyTraitToType(
  "Object",
  "TimeStamp",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "equalsSign",
  ["self", "aTimeStamp"],
  function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isTimeStamp_1(_aTimeStamp), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(
        _unixTimeInMilliseconds_1(_self),
        _unixTimeInMilliseconds_1(_aTimeStamp),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :aTimeStamp |\n\t\taTimeStamp.isTimeStamp.if {\n\t\t\tself.unixTimeInMilliseconds = aTimeStamp.unixTimeInMilliseconds\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "lessThanSign",
  ["self", "aTimeStamp"],
  function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(
      _unixTimeInMilliseconds_1(_self),
      _unixTimeInMilliseconds_1(_aTimeStamp),
    );
  },
  "{ :self :aTimeStamp |\n\t\tself.unixTimeInMilliseconds < aTimeStamp.unixTimeInMilliseconds\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "plusSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTimeStamp_1(
      _plusSign_2(
        _unixTimeInMilliseconds_1(_self),
        _milliseconds_1(_aDuration),
      ),
    );
  },
  "{ :self :aDuration |\n\t\t(self.unixTimeInMilliseconds + aDuration.milliseconds).asTimeStamp\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "hyphenMinus",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTimeStamp_1(
      _hyphenMinus_2(
        _unixTimeInMilliseconds_1(_self),
        _milliseconds_1(_aDuration),
      ),
    );
  },
  "{ :self :aDuration |\n\t\t(self.unixTimeInMilliseconds - aDuration.milliseconds).asTimeStamp\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "asDate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asDate_1(_unixTimeInSeconds_1(_self));
  },
  "{ :self |\n\t\tself.unixTimeInSeconds.asDate\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "asTimeStamp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "iso8601",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _iso8601_1(_asDate_1(_self));
  },
  "{ :self |\n\t\tself.asDate.iso8601\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "roundTo",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _unixTimeInMilliseconds_2(
      _self,
      _roundTo_2(_unixTimeInMilliseconds_1(_self), _milliseconds_1(_aDuration)),
    );
    return _self;
  },
  "{ :self :aDuration |\n\t\tself.unixTimeInMilliseconds := self.unixTimeInMilliseconds.roundTo(aDuration.milliseconds);\n\t\tself\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "TimeStamp(",
        _storeString_1(_unixTimeInMilliseconds_1(_self)),
      ),
      ")",
    );
  },
  "{ :self |\n\t\t'TimeStamp(' ++ self.unixTimeInMilliseconds.storeString ++ ')'\n\t}",
);

sl.addMethod(
  "TimeStamp",
  "TimeStamp",
  "unixTimeInSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_unixTimeInMilliseconds_1(_self), 1000);
  },
  "{ :self |\n\t\tself.unixTimeInMilliseconds / 1000\n\t}",
);

sl.addMethod(
  "System",
  "TimeStamp",
  "unixTime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTimeStamp_1(_unixTimeInMilliseconds_1(_self));
  },
  "{ :self |\n\t\tself.unixTimeInMilliseconds.asTimeStamp\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "TimeStamp",
  "asTimeStamp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _TimeStamp_1(_self);
  },
  "{ :self |\n\t\tTimeStamp(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "TimeStamp",
  "TimeStamp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newTimeStamp_0(), _self);
  },
  "{ :self |\n\t\tnewTimeStamp().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "TimeStamp",
  "unixTimeInMilliseconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Block",
  "TimeStamp",
  "valueAt",
  ["self", "time"],
  function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _now = _unixTimeInMilliseconds_1(_system);
    /* Statements */
    return _valueAfterMilliseconds_2(
      _self,
      _hyphenMinus_2(_unixTimeInMilliseconds_1(_time), _now),
    );
  },
  "{ :self :time |\n\t\tlet now = system.unixTimeInMilliseconds;\n\t\tself.valueAfterMilliseconds(time.unixTimeInMilliseconds - now)\n\t}",
);

sl.addMethod(
  "Block",
  "TimeStamp",
  "valueAtWith",
  ["self", "time", "anObject"],
  function (_self, _time, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _now = _unixTimeInMilliseconds_1(_system);
    /* Statements */
    return _valueAfterMillisecondsWith_3(
      _self,
      _hyphenMinus_2(_unixTimeInMilliseconds_1(_time), _now),
      _anObject,
    );
  },
  "{ :self :time :anObject |\n\t\tlet now = system.unixTimeInMilliseconds;\n\t\tself.valueAfterMillisecondsWith(time.unixTimeInMilliseconds - now, anObject)\n\t}",
);
