/*  Requires: Duration  */

sl.addType(
  false,
  "Frequency",
  "Frequency",
  ["Object", "Magnitude"],
  ["hertz"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Frequency",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Frequency",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
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
  "Frequency",
  "Frequency",
  "lessThanSign",
  ["self", "aFrequency"],
  function (_self, _aFrequency) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFrequency";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_hertz_1(_self), _hertz_1(_aFrequency));
  },
  "{ :self :aFrequency | <(hertz(self), hertz(aFrequency)) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "asDuration",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_reciprocal_1(_hertz_1(_self)));
  },
  "{ :self | seconds(reciprocal(hertz(self))) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "asHertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  },
  "{ :self | hertz(self) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "cyclesPerMinute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_hertz_1(_self), 60);
  },
  "{ :self | *(hertz(self), 60) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "cyclesPerSecond",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  },
  "{ :self | hertz(self) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "kilohertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hertz_1(_self), 1000);
  },
  "{ :self | /(hertz(self), 1000) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "megaherz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hertz_1(_self), 1000000);
  },
  "{ :self | /(hertz(self), 1000000) }",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_hertz_1(_self)), ".hertz");
  },
  "{ :self | ++(storeString(hertz(self)), '.hertz') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "asHertz",
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
  "Frequency",
  "hertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newFrequency_0(), _self);
  },
  "{ :self | initializeSlots(newFrequency(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "kilohertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000));
  },
  "{ :self | hertz((*(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "megaherz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000000));
  },
  "{ :self | hertz((*(self, 1000000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Duration",
  "Frequency",
  "asFrequency",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_reciprocal_1(_seconds_1(_self)));
  },
  "{ :self | hertz(reciprocal(seconds(self))) }",
);
