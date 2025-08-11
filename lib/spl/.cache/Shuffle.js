sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "fisherYatesShuffle",
  ["self", "rng"],
  sl.annotateFunction(function (_self, _rng) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    _toByDo_4(
      _size_1(_self),
      2,
      -1,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _swapWith_3(_self, _each, _nextRandomInteger_3(_rng, 1, _each));
      }, ["each"]),
    );
    return _self;
  }, ["self", "rng"]),
  "{ :self :rng | toByDo(size(self), 2, -1, { :each | swapWith(self,each, nextRandomInteger(rng,1, each)) }); self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "fisherYatesShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fisherYatesShuffle_2(_self, _system);
  }, ["self"]),
  "{ :self | fisherYatesShuffle(self,system) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "inShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _if_3(
      _isOdd_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_hyphenMinus_2(_n, 1), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_n, 2);
      }, []),
    );
    let _p = _copyFromTo_3(_self, 1, _m);
    let _q = _copyFromTo_3(_self, _plusSign_2(_m, 1), _n);
    /* Statements */
    return _riffle_2(_q, _p);
  }, ["self"]),
  "{ :self | let n = size(self); let m = if(isOdd(n), { /((-(n, 1)), 2) }, { /(n, 2) }); let p = copyFromTo(self,1, m); let q = copyFromTo(self,+(m, 1), n); riffle(q,p) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "inShuffle",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _inShuffle_1(_x);
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _x;
  }, ["self", "n"]),
  "{ :self :n | let x = self; whileTrue({ >(n, 0) }, { x := inShuffle(x); n := -(n, 1) }); x }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "klondikeShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = [];
    let _i = 1;
    let _j = _size_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_i, _j);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addFirst_2(_r, _at_2(_self, _j));
        _addFirst_2(_r, _at_2(_self, _i));
        _i = _plusSign_2(_i, 1);
        return _j = _hyphenMinus_2(_j, 1);
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_i, _j),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirst_2(_r, _at_2(_self, _i));
      }, []),
    );
    return _r;
  }, ["self"]),
  "{ :self | let r = []; let i = 1; let j = size(self); whileTrue({ <(i, j) }, { addFirst(r,at(self, j)); addFirst(r,at(self, i)); i := +(i, 1); j := -(j, 1) }); ifTrue((=(i, j)), { addFirst(r,at(self, i)) }); r }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "klondikeShuffle",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _klondikeShuffle_1(_x);
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _x;
  }, ["self", "n"]),
  "{ :self :n | let x = self; whileTrue({ >(n, 0) }, { x := klondikeShuffle(x); n := -(n, 1) }); x }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "mongesShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _top = false;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _if_3(
          _top,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addFirst_2(_answer, _each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_answer, _each);
          }, []),
        );
        return _top = _not_1(_top);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; let top = false; do(self, { :each | if(top, { addFirst(answer,each) }, { addLast(answer,each) }); top := not(top) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "mongesShuffle",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _mongesShuffle_1(_x);
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _x;
  }, ["self", "n"]),
  "{ :self :n | let x = self; whileTrue({ >(n, 0) }, { x := mongesShuffle(x); n := -(n, 1) }); x }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "outShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _if_3(
      _isOdd_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_plusSign_2(_n, 1), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_n, 2);
      }, []),
    );
    let _p = _copyFromTo_3(_self, 1, _m);
    let _q = _copyFromTo_3(_self, _plusSign_2(_m, 1), _n);
    /* Statements */
    return _riffle_2(_p, _q);
  }, ["self"]),
  "{ :self | let n = size(self); let m = if(isOdd(n), { /((+(n, 1)), 2) }, { /(n, 2) }); let p = copyFromTo(self,1, m); let q = copyFromTo(self,+(m, 1), n); riffle(p,q) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "outShuffle",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _outShuffle_1(_x);
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _x;
  }, ["self", "n"]),
  "{ :self :n | let x = self; whileTrue({ >(n, 0) }, { x := outShuffle(x); n := -(n, 1) }); x }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "sattoloShuffle",
  ["self", "rng"],
  sl.annotateFunction(function (_self, _rng) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rng";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _size_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_i, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _nextRandomInteger_3(_rng, 1, _hyphenMinus_2(_i, 1));
        /* Statements */
        _swapWith_3(_self, _i, _j);
        return _i = _hyphenMinus_2(_i, 1);
      }, []),
    );
    return _self;
  }, ["self", "rng"]),
  "{ :self :rng | let i = size(self); whileTrue({ >(i, 1) }, { let j = nextRandomInteger(rng,1, -(i, 1)); swapWith(self,i, j); i := -(i, 1) }); self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "sattoloShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sattoloShuffle_2(_self, _system);
  }, ["self"]),
  "{ :self | sattoloShuffle(self,system) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "shuffle",
  ["self", "rng"],
  sl.annotateFunction(function (_self, _rng) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    return _fisherYatesShuffle_2(_self, _rng);
  }, ["self", "rng"]),
  "{ :self :rng | fisherYatesShuffle(self,rng) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "shuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fisherYatesShuffle_1(_self);
  }, ["self"]),
  "{ :self | fisherYatesShuffle(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "shuffled",
  ["self", "rng"],
  sl.annotateFunction(function (_self, _rng) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    return _fisherYatesShuffle_2(_copy_1(_self), _rng);
  }, ["self", "rng"]),
  "{ :self :rng | fisherYatesShuffle(copy(self),rng) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "shuffled",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fisherYatesShuffle_1(_copy_1(_self));
  }, ["self"]),
  "{ :self | fisherYatesShuffle(copy(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "spiralShuffle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _copyList_1(_self);
    let _b = [];
    let _c = true;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_a);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _removeFirst_1(_a);
        /* Statements */
        _if_3(
          _c,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addFirst_2(_b, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_a, _x);
          }, []),
        );
        return _c = _not_1(_c);
      }, []),
    );
    return _b;
  }, ["self"]),
  "{ :self | let a = copyList(self); let b = []; let c = true; whileFalse({ isEmpty(a) }, { let x = removeFirst(a); if(c, { addFirst(b,x) }, { addLast(a,x) }); c := not(c) }); b }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Shuffle",
  "spiralShuffle",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x = _spiralShuffle_1(_x);
        return _n = _hyphenMinus_2(_n, 1);
      }, []),
    );
    return _x;
  }, ["self", "n"]),
  "{ :self :n | let x = self; whileTrue({ >(n, 0) }, { x := spiralShuffle(x); n := -(n, 1) }); x }",
);
