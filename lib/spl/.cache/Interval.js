sl.addType(
  false,
  "Interval",
  "Interval",
  ["Object", "Magnitude", "Number"],
  ["min", "max"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Interval",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Interval",
);

sl.copyTraitMethodsToType(
  "Number",
  "Interval",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
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
  "Interval",
  "Interval",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_min_1(_self), _min_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_max_1(_self), _max_1(_operand));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { &(<(min(self), min(operand)), { <(max(self), max(operand)) }) }, { adaptToIntervalAndApply(operand,self, +) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Interval_2(
          _plusSign_2(_min_1(_self), _min_1(_operand)),
          _plusSign_2(_max_1(_self), _max_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { Interval(+(min(self), min(operand)), +(max(self), max(operand))) }, { adaptToIntervalAndApply(operand,self, +) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Interval_2(
          _hyphenMinus_2(_min_1(_self), _min_1(_operand)),
          _hyphenMinus_2(_max_1(_self), _max_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { Interval(-(min(self), min(operand)), -(max(self), max(operand))) }, { adaptToIntervalAndApply(operand,self, -) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _products = _flatten_1(
          _outer_1(_asterisk_2)([_min_1(_self), _max_1(_self)], [
            _min_1(_operand),
            _max_1(_operand),
          ]),
        );
        /* Statements */
        return _Interval_2(_min_1(_products), _max_1(_products));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { let products = flatten(((outer(*) . ([min(self), max(self)], [min(operand), max(operand)])))); Interval(min(products), max(products)) }, { adaptToIntervalAndApply(operand,self, *) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_min_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_max_1(_self), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negated_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Interval_2(
              0,
              _max_2(_negated_1(_min_1(_self)), _max_1(_self)),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>=(min(self), 0)), { self }, { if((<=(max(self), 0)), { negated(self) }, { Interval(0, max(negated(min(self)),max(self))) }) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asInterval_1(_aNumber), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | aBlock(asInterval(aNumber), self) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextRandomFloat_3(_system, _min_1(_self), _max_1(_self));
  }, ["self"]),
  "{ :self | nextRandomFloat(system,min(self), max(self)) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "between",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _min_1(_self);
    let _max = _max_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _lessThanSignEqualsSign_2(_min, _x),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _max);
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let min = min(self); let max = max(self); { :x | &(<=(min, x), { <=(x, max) }) } }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "betweenAnd",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_min, _min_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_max_1(_self), _max);
      }, []),
    );
  }, ["self", "min", "max"]),
  "{ :self :min :max | &(<=(min, min(self)), { <=(max(self), max) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "discretize",
  ["self", "size", "aBlock:/1"],
  sl.annotateFunction(function (_self, _size, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _size, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_discretize_2(_self, _size), _aBlock_1);
  }, ["self", "size", "aBlock:/1"]),
  "{ :self :size :aBlock:/1 | collect(discretize(self,size),aBlock:/1) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "discretize",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = _min_1(_self);
    let _stop = _max_1(_self);
    let _step = _solidus_2(
      _hyphenMinus_2(_stop, _start),
      _hyphenMinus_2(_size, 1),
    );
    /* Statements */
    return _Range_3(_start, _stop, _step);
  }, ["self", "size"]),
  "{ :self :size | let start = min(self); let stop = max(self); let step = /((-(stop, start)), (-(size, 1))); Range(start, stop, step) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_min_1(_self), _min_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_max_1(_self), _max_1(_operand));
          }, []),
        );
      }, []),
    );
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 | &(isInterval(operand), { &(aBlock(min(self), min(operand)), { aBlock(max(self), max(operand)) }) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "findDivisions",
  ["self", "dx", "n"],
  sl.annotateFunction(function (_self, _dx, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _dx, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _roundUpTo_2(
      _solidus_2(
        _hyphenMinus_2(_max_1(_self), _min_1(_self)),
        _plusSign_2(_n, 1),
      ),
      _dx,
    );
    let _next = _roundDownTo_2(_min_1(_self), _dx);
    let _answer = [_next];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_next, _max_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _plusSign_2(_next, _step);
        return _add_2(_answer, _next);
      }, []),
    );
    return _answer;
  }, ["self", "dx", "n"]),
  "{ :self :dx :n | let step = roundUpTo((/((-(max(self), min(self))), (+(n, 1)))),dx); let next = roundDownTo(min(self),dx); let answer = [next]; whileTrue({ <(next, max(self)) }, { next := +(next, step); add(answer,next) }); answer }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "findDivisions",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _min_1(_self);
    let _max = _max_1(_self);
    let _range = _niceNumberAbove_1(_hyphenMinus_2(_max, _min));
    let _step = _niceNumberNear_1(_solidus_2(_range, _n));
    let _start = _asterisk_2(_floor_1(_solidus_2(_min, _step)), _step);
    let _end = _asterisk_2(_ceiling_1(_solidus_2(_max, _step)), _step);
    /* Statements */
    return _Range_3(_start, _end, _step);
  }, ["self", "n"]),
  "{ :self :n | let min = min(self); let max = max(self); let range = niceNumberAbove((-(max, min))); let step = niceNumberNear((/(range, n))); let start = *(floor((/(min, step))), step); let end = *(ceiling((/(max, step))), step); Range(start, end, step) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "includes",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_operand, _min_1(_self), _max_1(_self));
  }, ["self", "operand"]),
  "{ :self :operand | betweenAnd(operand,min(self), max(self)) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "intersection",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDisjoint_2(_self, _operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Interval>>intersection: disjoint Intervals");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Interval_2(
              _max_2(_min_1(_self), _min_1(_operand)),
              _min_2(_max_1(_self), _max_1(_operand)),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _intersection_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { if(isDisjoint(self,operand), { error('Interval>>intersection: disjoint Intervals') }, { Interval(max(min(self),min(operand)), min(max(self),max(operand))) }) }, { adaptToIntervalAndApply(operand,self, intersection:/2) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "isDisjoint",
  ["self", "anInterval"],
  sl.annotateFunction(function (_self, _anInterval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInterval";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_max_1(_self), _min_1(_anInterval)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_max_1(_anInterval), _min_1(_self));
      }, []),
    );
  }, ["self", "anInterval"]),
  "{ :self :anInterval | |(<(max(self), min(anInterval)), { <(max(anInterval), min(self)) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "minMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_min_1(_self), _max_1(_self)];
  }, ["self"]),
  "{ :self | [min(self), max(self)] }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "negated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_zero_1(_self), _self);
  }, ["self"]),
  "{ :self | -(zero(self), self) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asInterval_1(1);
  }, ["self"]),
  "{ :self | asInterval(1) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_plusSignPlusSign_2("(", _min_1(_self)), " -- "),
        _max_1(_self),
      ),
      ")",
    );
  }, ["self"]),
  "{ :self | ++(++(++(++('(', min(self)), ' -- '), max(self)), ')') }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "squared",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _asterisk_2(_self, _self);
    /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_min_1(_answer), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _min_2(_answer, 0);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = *(self, self); ifTrue((<(min(answer), 0)), { min(answer, 0) }); answer }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "subdivide",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_2(_self, _plusSign_2(_n, 1));
  }, ["self", "n"]),
  "{ :self :n | discretize(self,+(n, 1)) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
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

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "union",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInterval_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDisjoint_2(_self, _operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Interval>>union: disjoint Intervals");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Interval_2(
              _min_2(_min_1(_self), _min_1(_operand)),
              _max_2(_max_1(_self), _max_1(_operand)),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntervalAndApply_3(_operand, _self, _union_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isInterval(operand), { if(isDisjoint(self,operand), { error('Interval>>union: disjoint Intervals') }, { Interval(min(min(self),min(operand)), max(max(self),max(operand))) }) }, { adaptToIntervalAndApply(operand,self, union:/2) }) }",
);

sl.addMethodToExistingType(
  "Interval",
  "Interval",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asInterval_1(0);
  }, ["self"]),
  "{ :self | asInterval(0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Interval",
  "hyphenMinusHyphenMinus",
  ["min", "max"],
  sl.annotateFunction(function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _Interval_2(_min, _max);
  }, ["min", "max"]),
  "{ :min :max | Interval(min, max) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Interval",
  "adaptToIntervalAndApply",
  ["self", "anInterval", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anInterval, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInterval, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_anInterval, _asInterval_1(_self));
  }, ["self", "anInterval", "aBlock:/2"]),
  "{ :self :anInterval :aBlock:/2 | aBlock(anInterval, asInterval(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Interval",
  "asInterval",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Interval_2(_self, _self);
  }, ["self"]),
  "{ :self | Interval(self, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Interval",
  "Interval",
  ["min", "max"],
  sl.annotateFunction(function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_min, _max),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_min, _max], "Interval: min > max");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newInterval_0(), _min, _max);
      }, []),
    );
  }, ["min", "max"]),
  "{ :min :max | if((>(min, max)), { error([min, max],'Interval: min > max') }, { initializeSlots(newInterval(),min, max) }) }",
);
