/* {- Requires: Duration -} */

sl.addType(
  false,
  "Frequency",
  "Frequency",
  ["Object", "Magnitude"],
  ["hertz"],
);

sl.copyTraitToType(
  "Object",
  "Frequency",
);

sl.copyTraitToType(
  "Magnitude",
  "Frequency",
);

sl.addMethod(
  "Frequency",
  "Frequency",
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
    return _ampersand_2(_isFrequency_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_hertz_1(_self), _hertz_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isFrequency & {\n\t\t\tself.hertz = anObject.hertz\n\t\t}\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isFrequency_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _tilde_2(_hertz_1(_self), _hertz_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isFrequency & {\n\t\t\tself.hertz ~ anObject.hertz\n\t\t}\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "lessThanSign",
  ["self", "aFrequency"],
  function (_self, _aFrequency) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFrequency";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_hertz_1(_self), _hertz_1(_aFrequency));
  },
  "{ :self :aFrequency |\n\t\tself.hertz < aFrequency.hertz\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
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
    return _seconds_1(_reciprocal_1(_hertz_1(_self)));
  },
  "{ :self |\n\t\tself.hertz.reciprocal.seconds\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "asHertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_self);
  },
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "cyclesPerMinute",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_hertz_1(_self), 60);
  },
  "{ :self |\n\t\tself.hertz * 60\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "cyclesPerSecond",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_self);
  },
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "kilohertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_hertz_1(_self), 1000);
  },
  "{ :self |\n\t\tself.hertz / 1000\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
  "megaherz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_hertz_1(_self), 1000000);
  },
  "{ :self |\n\t\tself.hertz / 1000000\n\t}",
);

sl.addMethod(
  "Frequency",
  "Frequency",
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
    return _plusSignPlusSign_2(_storeString_1(_hertz_1(_self)), ".hertz");
  },
  "{ :self |\n\t\tself.hertz.storeString ++ '.hertz'\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Frequency",
  "asHertz",
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
  "Frequency",
  "hertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newFrequency_0(), _self);
  },
  "{ :self |\n\t\tnewFrequency().initializeSlots(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Frequency",
  "kilohertz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000));
  },
  "{ :self |\n\t\t(self * 1000).hertz\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Frequency",
  "megaherz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000000));
  },
  "{ :self |\n\t\t(self * 1000000).hertz\n\t}",
);

sl.addMethod(
  "Duration",
  "Frequency",
  "asFrequency",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _hertz_1(_reciprocal_1(_seconds_1(_self)));
  },
  "{ :self |\n\t\tself.seconds.reciprocal.hertz\n\t}",
);
