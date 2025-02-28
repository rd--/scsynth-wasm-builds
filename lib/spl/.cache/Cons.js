sl.addType(
  false,
  "Cons",
  "Cons",
  ["Object", "Iterable", "Collection"],
  ["car", "cdr"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Cons",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Cons",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Cons",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isCons_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_car_1(_self), _car_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_cdr_1(_self), _cdr_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject | &(isCons(anObject), { &(=(car(self), car(anObject)), { =(cdr(self), cdr(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _Cons_2(_aBlock_1(_each), _answer);
    });
    return _reversed_1(_answer);
  },
  "{ :self :aBlock:/1 | let answer = nil; do(self, { :each | answer := Cons(aBlock(each), answer) }); reversed(answer) }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 1;
    let _next = _car_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _plusSign_2(_answer, 1);
      return _next = _car_1(_next);
    });
    return _answer;
  },
  "{ :self | let answer = 1; let next = car(self); whileTrue({ isCons(next) }, { answer := +(answer, 1); next := car(next) }); answer }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _cdr_1(_self);
    /* Statements */
    _aBlock_1(_car_1(_self));
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _aBlock_1(_car_1(_next));
      return _next = _cdr_1(_next);
    });
  },
  "{ :self :aBlock:/1 | let next = cdr(self); aBlock(car(self)); whileTrue({ isCons(next) }, { aBlock(car(next)); next := cdr(next) }) }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "isList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _next = _cdr_1(_next);
    });
    return _equalsSign_2(_next, null);
  },
  "{ :self | let next = cdr(self); whileTrue({ isCons(next) }, { next := cdr(next) }); =(next, nil) }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 1;
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _plusSign_2(_answer, 1);
      return _next = _cdr_1(_next);
    });
    return _if_3(_equalsSign_2(_next, null), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("Cons>>length: not proper list");
    });
  },
  "{ :self | let answer = 1; let next = cdr(self); whileTrue({ isCons(next) }, { answer := +(answer, 1); next := cdr(next) }); if((=(next, nil)), { answer }, { error('Cons>>length: not proper list') }) }",
);

sl.addMethodToExistingType(
  "Cons",
  "Cons",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Cons_2(_car_1(_self), null);
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _Cons_2(_car_1(_next), _answer);
      return _next = _cdr_1(_next);
    });
    return _if_3(_equalsSign_2(_next, null), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("Cons>>reversed: not proper list");
    });
  },
  "{ :self | let answer = Cons(car(self), nil); let next = cdr(self); whileTrue({ isCons(next) }, { answer := Cons(car(next), answer); next := cdr(next) }); if((=(next, nil)), { answer }, { error('Cons>>reversed: not proper list') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Cons",
  "Cons",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _Cons_2(
        _if_3(_isSequence_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Cons_1(_each);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _each;
        }),
        _answer,
      );
    });
    return _reversed_1(_answer);
  },
  "{ :self | let answer = nil; do(self, { :each | answer := Cons(if(isSequence(each), { Cons(each) }, { each }), answer) }); reversed(answer) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Cons",
  "Cons",
  ["car", "cdr"],
  function (_car, _cdr) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _car, _cdr";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCons_0(), _car, _cdr);
  },
  "{ :car :cdr | initializeSlots(newCons(),car, cdr) }",
);
