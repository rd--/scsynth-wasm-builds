sl.addType(
  false,
  "AliasMethod",
  "AliasMethod",
  ["Object", "Iterator"],
  ["alias", "probability", "random"],
);

sl.copyTraitMethodsToType(
  "Object",
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
    } /* Temporaries */
    let _column = _nextRandomInteger_3(
      _random_1(_self),
      1,
      _size_1(_probability_1(_self)),
    );
    let _coinToss = _lessThanSign_2(
      _nextRandomFloat_1(_random_1(_self)),
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
  }, ["self"]),
  "{ :self | let column = nextRandomInteger(random(self),1, size(probability(self))); let coinToss = <(nextRandomFloat(random(self)), at(probability(self), column)); if(coinToss, { column }, { at(alias(self), column) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AliasMethod",
  "AliasMethod",
  ["self", "random"],
  sl.annotateFunction(function (_self, _random) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _random";
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
    return _initializeSlots_4(
      _newAliasMethod_0(),
      _alias,
      _probability,
      _random,
    );
  }, ["self", "random"]),
  "{ :self :random | let probabilities = copy(self); let count = size(probabilities); let probability = List(count); let alias = List(count); let average = /(1, count); let small = []; let large = []; toDo(1, count, { :i | if((>=(at(probabilities, i), average)), { addLast(large,i) }, { addLast(small,i) }) }); whileFalse({ ||(isEmpty(small), isEmpty(large)) }, { let less = removeLast(small); let more = removeLast(large); atPut(probability, less, *(at(probabilities, less), count)); atPut(alias, less, more); atPut(probabilities, more, -(+(at(probabilities, more), at(probabilities, less)), average)); if((>=(at(probabilities, more), (/(1, count)))), { addLast(large,more) }, { addLast(small,more) }) }); whileFalse({ isEmpty(small) }, { atPut(probability, removeLast(small), 1) }); whileFalse({ isEmpty(large) }, { atPut(probability, removeLast(large), 1) }); initializeSlots(newAliasMethod(),alias, probability, random) }",
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
    } /* Statements */
    return _AliasMethod_2(_self, _system);
  }, ["self"]),
  "{ :self | AliasMethod(self, system) }",
);
