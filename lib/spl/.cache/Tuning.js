sl.addTrait("Tuning", "Tuning");

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asCents");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asCents')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asIntegers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asIntegers");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asIntegers')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "asRatios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>asRatios");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>asRatios')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "isRational",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>isRational");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>isRational')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "limit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_1(_collect_2(_asIntegers_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_each, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _each;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _max_1(_primeFactors_1(_each));
      });
    }));
  },
  "{ :self |\n\t\tself.asIntegers.collect { :each |\n\t\t\t(each = 1).if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.primeFactors.max\n\t\t\t}\n\t\t}.max\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "octave",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>octave");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>octave')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Tuning>>size");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Tuning>>size')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuning",
  "isTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(
      2,
      _asterisk_2(_solidus_2(_self, 100), _solidus_2(1, 12)),
    );
  },
  "{ :self |\n\t\t2 ^ ((self / 100) * (1 / 12))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_asterisk_2(12, _log2_1(_self)), 100);
  },
  "{ :self |\n\t\t(12 * self.log2) * 100\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Tuning",
  "centsToRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _centsToRatio_1);
  },
  "{ :self |\n\t\tself.collect(centsToRatio:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Tuning",
  "ratioToCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _ratioToCents_1);
  },
  "{ :self |\n\t\tself.collect(ratioToCents:/1)\n\t}",
);
