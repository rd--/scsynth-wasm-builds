sl.addType(
  false,
  "AliasMethod",
  "AliasMethod",
  ["Object", "Equatable", "Iterator"],
  ["alias", "probability"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AliasMethod",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "AliasMethod",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "AliasMethod",
);

sl.addMethodToExistingType(
  "AliasMethod",
  "AliasMethod",
  "next",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextRandom_2(_self, _system);
  }, ["self"]),
  "{ :self |\n\t\tself.nextRandom(system)\n\t}",
);

sl.addMethodToExistingType(
  "AliasMethod",
  "AliasMethod",
  "nextRandom",
  ["self", "randomNumberGenerator"],
  sl.annotateFunction(function (_self, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _randomNumberGenerator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _column = _nextRandomInteger_3(
      _randomNumberGenerator,
      1,
      _size_1(_probability_1(_self)),
    );
    let _coinToss = _lessThanSign_2(
      _nextRandomFloat_1(_randomNumberGenerator),
      _at_2(_probability_1(_self), _column),
    );
    /* Statements */
    return _if_3(
      _coinToss,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _column;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_alias_1(_self), _column);
      }, []),
    );
  }, ["self", "randomNumberGenerator"]),
  "{ :self :randomNumberGenerator |\n\t\tlet column = randomNumberGenerator.nextRandomInteger(1, self.probability.size);\n\t\tlet coinToss = randomNumberGenerator.nextRandomFloat < self.probability[column];\n\t\tcoinToss.if {\n\t\t\tcolumn\n\t\t} {\n\t\t\tself.alias[column]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AliasMethod",
  "AliasMethod",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _probabilities = _copy_1(_self);
    let _count = _size_1(_probabilities);
    let _probability = _List_1(_count);
    let _alias = _List_1(_count);
    let _average = _solidus_2(1, _count);
    let _small = [];
    let _large = [];
    /* Statements */
    _toDo_3(
      1,
      _count,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_at_2(_probabilities, _i), _average),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_large, _i);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_small, _i);
          }, []),
        );
      }, ["i"]),
    );
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLineVerticalLine_2(
          _isEmpty_1(_small),
          _isEmpty_1(_large),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _less = _removeLast_1(_small);
        let _more = _removeLast_1(_large);
        /* Statements */
        _atPut_3(
          _probability,
          _less,
          _asterisk_2(_at_2(_probabilities, _less), _count),
        );
        _atPut_3(_alias, _less, _more);
        _atPut_3(
          _probabilities,
          _more,
          _hyphenMinus_2(
            _plusSign_2(
              _at_2(_probabilities, _more),
              _at_2(_probabilities, _less),
            ),
            _average,
          ),
        );
        return _if_3(
          _greaterThanSignEqualsSign_2(
            _at_2(_probabilities, _more),
            _solidus_2(1, _count),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_large, _more);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_small, _more);
          }, []),
        );
      }, []),
    );
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_small);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_probability, _removeLast_1(_small), 1);
      }, []),
    );
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_large);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_probability, _removeLast_1(_large), 1);
      }, []),
    );
    return _initializeSlots_3(_newAliasMethod_0(), _alias, _probability);
  }, ["self"]),
  "{ :self |\n\t\tlet probabilities = self.copy;\n\t\tlet count = probabilities.size;\n\t\tlet probability = List(count);\n\t\tlet alias = List(count);\n\t\tlet average = 1 / count;\n\t\tlet small = [];\n\t\tlet large = [];\n\t\t1.toDo(count) { :i |\n\t\t\t(probabilities[i] >= average).if {\n\t\t\t\tlarge.addLast(i)\n\t\t\t} {\n\t\t\t\tsmall.addLast(i)\n\t\t\t}\n\t\t};\n\t\t{\n\t\t\tsmall.isEmpty || large.isEmpty\n\t\t}.whileFalse {\n\t\t\tlet less = small.removeLast;\n\t\t\tlet more = large.removeLast;\n\t\t\tprobability[less] := probabilities[less] * count;\n\t\t\talias[less] := more;\n\t\t\tprobabilities[more] := probabilities[more] + probabilities[less] - average;\n\t\t\t(probabilities[more] >= (1 / count)).if {\n\t\t\t\tlarge.addLast(more)\n\t\t\t} {\n\t\t\t\tsmall.addLast(more)\n\t\t\t}\n\t\t};\n\t\t{ small.isEmpty }.whileFalse {\n\t\t\tprobability[small.removeLast] := 1\n\t\t};\n\t\t{ large.isEmpty }.whileFalse {\n\t\t\tprobability[large.removeLast] := 1\n\t\t};\n\t\tnewAliasMethod().initializeSlots(alias, probability)\n\t}",
);
