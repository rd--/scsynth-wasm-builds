sl.addTrait("Tuning", "Tuning");

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "cents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "cents");
  },
  "{ :self |\n\t\tself.typeResponsibility('cents')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "integers",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "integers");
  },
  "{ :self |\n\t\tself.typeResponsibility('integers')\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "isRational");
  },
  "{ :self |\n\t\tself.typeResponsibility('isRational')\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _max_1(_collect_2(_integers_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_each, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _each;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _max_1(_primeFactors_1(_each));
      });
    }));
  },
  "{ :self |\n\t\tself.integers.collect { :each |\n\t\t\t(each = 1).if {\n\t\t\t\teach\n\t\t\t} {\n\t\t\t\teach.primeFactors.max\n\t\t\t}\n\t\t}.max\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "octave");
  },
  "{ :self |\n\t\tself.typeResponsibility('octave')\n\t}",
);

sl.addTraitMethod(
  "Tuning",
  "Tuning",
  "ratios",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "ratios");
  },
  "{ :self |\n\t\tself.typeResponsibility('ratios')\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "size");
  },
  "{ :self |\n\t\tself.typeResponsibility('size')\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(
      2,
      _times_2(_dividedBy_2(_self, 100), _dividedBy_2(1, 12)),
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_times_2(12, _log2_1(_self)), 100);
  },
  "{ :self |\n\t\t(12 * self.log2) * 100\n\t}",
);
