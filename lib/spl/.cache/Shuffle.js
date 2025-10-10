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
  "{ :self :rng |\n\t\tself.size.toByDo(2, -1) { :each |\n\t\t\tself.swapWith(\n\t\t\t\teach,\n\t\t\t\trng.nextRandomInteger(1, each)\n\t\t\t)\n\t\t};\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.fisherYatesShuffle(system)\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = n.isOdd.if { (n - 1) / 2 } { n / 2 };\n\t\tlet p = self.copyFromTo(1, m);\n\t\tlet q = self.copyFromTo(m + 1, n);\n\t\tq.riffle(p)\n\t}",
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
  "{ :self :n |\n\t\tlet x = self;\n\t\t{ n > 0 }.whileTrue {\n\t\t\tx := x.inShuffle;\n\t\t\tn := n - 1\n\t\t};\n\t\tx\n\t}",
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
  "{ :self |\n\t\tlet r = [];\n\t\tlet i = 1;\n\t\tlet j = self.size;\n\t\t{ i < j }.whileTrue {\n\t\t\tr.addFirst(self[j]);\n\t\t\tr.addFirst(self[i]);\n\t\t\ti := i + 1;\n\t\t\tj := j - 1\n\t\t};\n\t\t(i = j).ifTrue {\n\t\t\tr.addFirst(self[i])\n\t\t};\n\t\tr\n\t}",
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
  "{ :self :n |\n\t\tlet x = self;\n\t\t{ n > 0 }.whileTrue {\n\t\t\tx := x.klondikeShuffle;\n\t\t\tn := n - 1\n\t\t};\n\t\tx\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tlet top = false;\n\t\tself.do { :each |\n\t\t\ttop.if {\n\t\t\t\tanswer.addFirst(each)\n\t\t\t} {\n\t\t\t\tanswer.addLast(each)\n\t\t\t};\n\t\t\ttop := top.not\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :n |\n\t\tlet x = self;\n\t\t{ n > 0 }.whileTrue {\n\t\t\tx := x.mongesShuffle;\n\t\t\tn := n - 1\n\t\t};\n\t\tx\n\t}",
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
  "{ :self |\n\t\tlet n = self.size;\n\t\tlet m = n.isOdd.if { (n + 1) / 2 } { n / 2 };\n\t\tlet p = self.copyFromTo(1, m);\n\t\tlet q = self.copyFromTo(m + 1, n);\n\t\tp.riffle(q)\n\t}",
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
  "{ :self :n |\n\t\tlet x = self;\n\t\t{ n > 0 }.whileTrue {\n\t\t\tx := x.outShuffle;\n\t\t\tn := n - 1\n\t\t};\n\t\tx\n\t}",
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
  "{ :self :rng |\n\t\tlet i = self.size;\n\t\t{\n\t\t\ti > 1\n\t\t}.whileTrue {\n\t\t\tlet j = rng.nextRandomInteger(1, i - 1);\n\t\t\tself.swapWith(i, j);\n\t\t\ti := i - 1\n\t\t};\n\t\tself\n\t}",
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
  "{ :self |\n\t\tself.sattoloShuffle(system)\n\t}",
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
  "{ :self :rng |\n\t\tself.fisherYatesShuffle(rng)\n\t}",
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
  "{ :self |\n\t\tself.fisherYatesShuffle\n\t}",
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
  "{ :self :rng |\n\t\tself.copy.fisherYatesShuffle(rng)\n\t}",
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
  "{ :self |\n\t\tself.copy.fisherYatesShuffle\n\t}",
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
  "{ :self |\n\t\tlet a = self.copyList;\n\t\tlet b = [];\n\t\tlet c = true;\n\t\t{ a.isEmpty }.whileFalse {\n\t\t\tlet x = a.removeFirst;\n\t\t\tc.if {\n\t\t\t\tb.addFirst(x)\n\t\t\t} {\n\t\t\t\ta.addLast(x)\n\t\t\t};\n\t\t\tc := c.not\n\t\t};\n\t\tb\n\t}",
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
  "{ :self :n |\n\t\tlet x = self;\n\t\t{ n > 0 }.whileTrue {\n\t\t\tx := x.spiralShuffle;\n\t\t\tn := n - 1\n\t\t};\n\t\tx\n\t}",
);
