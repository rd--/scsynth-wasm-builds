/* {- Requires: Fraction RatioTuning Tuning -} */

sl.addMethod(
  "String",
  "JiTuning",
  "JiTuning",
  ["self", "description", "ratiosOrIntegers", "octave", "limit"],
  function (_self, _description, _ratiosOrIntegers, _octave, _limit) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _description, _ratiosOrIntegers, _octave, _limit";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _allSatisfy_2(_ratiosOrIntegers, _isSmallInteger_1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _limit_2(
          _IntegerTuning_4(_self, _description, _ratiosOrIntegers, _octave),
          _limit,
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
        return _if_3(
          _allSatisfy_2(_ratiosOrIntegers, _isFraction_1),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _limit_2(
              _RatioTuning_4(_self, _description, _ratiosOrIntegers, _octave),
              _limit,
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
            return _error_2(_self, "not ratios or integers");
          },
        );
      },
    );
  },
  "{ :self :description :ratiosOrIntegers :octave :limit |\n\t\tratiosOrIntegers.allSatisfy(isSmallInteger:/1).if {\n\t\t\tIntegerTuning(self, description, ratiosOrIntegers, octave).limit(limit)\n\t\t} {\n\t\t\tratiosOrIntegers.allSatisfy(isFraction:/1).if {\n\t\t\t\tRatioTuning(self, description, ratiosOrIntegers, octave).limit(limit)\n\t\t\t} {\n\t\t\t\tself.error('not ratios or integers')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Record",
  "JiTuning",
  "JiTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _JiTuning_5(
      _at_2(_self, "name"),
      _at_2(_self, "description"),
      _at_2(_self, "tuning"),
      _atIfAbsent_3(_self, "octave", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _Fraction_2(
          2,
          1,
        );
      }),
      _at_2(_self, "limit"),
    );
  },
  "{ :self |\n\t\tJiTuning(\n\t\t\tself::name,\n\t\t\tself::description,\n\t\t\tself::tuning,\n\t\t\tself.atIfAbsent('octave') {\n\t\t\t\t2/1\n\t\t\t},\n\t\t\tself::limit\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "JiTuning",
  "JiTuning",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _JiTuning_5(
      "",
      "",
      _self,
      _Fraction_2(
        2,
        1,
      ),
      null,
    );
  },
  "{ :self |\n\t\tJiTuning(\n\t\t\t'',\n\t\t\t'',\n\t\t\tself,\n\t\t\t2/1,\n\t\t\tnil\n\t\t)\n\t}",
);
