sl.addType(
  false,
  "TimeStamp",
  "TimeStamp",
  ["Object"],
  ["unixTimeInMilliseconds"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TimeStamp",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "equalsSign",
  ["self", "aTimeStamp"],
  function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isTimeStamp_1(_aTimeStamp), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(
        _unixTimeInMilliseconds_1(_self),
        _unixTimeInMilliseconds_1(_aTimeStamp),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :aTimeStamp | if(isTimeStamp(aTimeStamp), { =(unixTimeInMilliseconds(self), unixTimeInMilliseconds(aTimeStamp)) }, { false }) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "lessThanSign",
  ["self", "aTimeStamp"],
  function (_self, _aTimeStamp) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aTimeStamp";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _unixTimeInMilliseconds_1(_self),
      _unixTimeInMilliseconds_1(_aTimeStamp),
    );
  },
  "{ :self :aTimeStamp | <(unixTimeInMilliseconds(self), unixTimeInMilliseconds(aTimeStamp)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "plusSign",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTimeStamp_1(
      _plusSign_2(
        _unixTimeInMilliseconds_1(_self),
        _milliseconds_1(_aDuration),
      ),
    );
  },
  "{ :self :aDuration | asTimeStamp((+(unixTimeInMilliseconds(self), milliseconds(aDuration)))) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "hyphenMinus",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTimeStamp_1(
      _hyphenMinus_2(
        _unixTimeInMilliseconds_1(_self),
        _milliseconds_1(_aDuration),
      ),
    );
  },
  "{ :self :aDuration | asTimeStamp((-(unixTimeInMilliseconds(self), milliseconds(aDuration)))) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "asDate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDate_1(_unixTimeInSeconds_1(_self));
  },
  "{ :self | asDate(unixTimeInSeconds(self)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "asTimeStamp",
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
  "TimeStamp",
  "TimeStamp",
  "iso8601",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _iso8601_1(_asDate_1(_self));
  },
  "{ :self | iso8601(asDate(self)) }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "roundTo",
  ["self", "aDuration"],
  function (_self, _aDuration) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDuration";
      throw new Error(errorMessage);
    } /* Statements */
    _unixTimeInMilliseconds_2(
      _self,
      _roundTo_2(_unixTimeInMilliseconds_1(_self), _milliseconds_1(_aDuration)),
    );
    return _self;
  },
  "{ :self :aDuration | unixTimeInMilliseconds(self, roundTo(unixTimeInMilliseconds(self),milliseconds(aDuration))); self }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_unixTimeInMilliseconds_1(_self)),
      ".asTimeStamp",
    );
  },
  "{ :self | ++(storeString(unixTimeInMilliseconds(self)), '.asTimeStamp') }",
);

sl.addMethodToExistingType(
  "TimeStamp",
  "TimeStamp",
  "unixTimeInSeconds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_unixTimeInMilliseconds_1(_self), 1000);
  },
  "{ :self | /(unixTimeInMilliseconds(self), 1000) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "TimeStamp",
  "now",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asTimeStamp_1(_unixTimeInMilliseconds_1(_self));
  },
  "{ :self | asTimeStamp(unixTimeInMilliseconds(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TimeStamp",
  "asTimeStamp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTimeStamp_0(), _self);
  },
  "{ :self | initializeSlots(newTimeStamp(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TimeStamp",
  "unixTimeInMilliseconds",
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
  "Block",
  "TimeStamp",
  "valueAt",
  ["self", "time"],
  function (_self, _time) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _time";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _now = _unixTimeInMilliseconds_1(_system);
    /* Statements */
    return _valueAfterMilliseconds_2(
      _self,
      _hyphenMinus_2(_unixTimeInMilliseconds_1(_time), _now),
    );
  },
  "{ :self :time | let now = unixTimeInMilliseconds(system); valueAfterMilliseconds(self,-(unixTimeInMilliseconds(time), now)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "TimeStamp",
  "valueAtWith",
  ["self", "time", "anObject"],
  function (_self, _time, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _time, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _now = _unixTimeInMilliseconds_1(_system);
    /* Statements */
    return _valueAfterMillisecondsWith_3(
      _self,
      _hyphenMinus_2(_unixTimeInMilliseconds_1(_time), _now),
      _anObject,
    );
  },
  "{ :self :time :anObject | let now = unixTimeInMilliseconds(system); valueAfterMillisecondsWith(self,-(unixTimeInMilliseconds(time), now), anObject) }",
);
