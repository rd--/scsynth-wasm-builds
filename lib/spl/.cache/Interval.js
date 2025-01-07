sl.addType(
  false,
  "Interval",
  "Interval",
  ["Object", "Magnitude", "Number"],
  ["min", "max"],
);

sl.copyTraitToType(
  "Object",
  "Interval",
);

sl.copyTraitToType(
  "Magnitude",
  "Interval",
);

sl.copyTraitToType(
  "Number",
  "Interval",
);

sl.addMethod(
  "Interval",
  "Interval",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "lessThanSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _lessThanSign_2(_min_1(_self), _min_1(_operand)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_max_1(_self), _max_1(_operand));
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tself.min < operand.min & {\n\t\t\t\tself.max < operand.max\n\t\t\t}\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "plusSign",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Interval_2(
        _plusSign_2(_min_1(_self), _min_1(_operand)),
        _plusSign_2(_max_1(_self), _max_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _plusSign_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tInterval(self.min + operand.min, self.max + operand.max)\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "hyphenMinus",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Interval_2(
        _hyphenMinus_2(_min_1(_self), _min_1(_operand)),
        _hyphenMinus_2(_max_1(_self), _max_1(_operand)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _hyphenMinus_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tInterval(self.min - operand.min, self.max - operand.max)\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "asterisk",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _asterisk_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tlet products = ([self.min, self.max] *.outer [operand.min, operand.max]).flatten;\n\t\t\tInterval(products.min, products.max)\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSignEqualsSign_2(_min_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_max_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _negated_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Interval_2(0, _max_2(_negated_1(_min_1(_self)), _max_1(_self)));
      });
    });
  },
  "{ :self |\n\t\t(self.min >= 0).if {\n\t\t\tself\n\t\t} {\n\t\t\t(self.max <= 0).if {\n\t\t\t\tself.negated\n\t\t\t} {\n\t\t\t\tInterval(0, self.min.negated.max(self.max))\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asInterval_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(aNumber.asInterval, self)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "atRandom",
  ["self", "shape", "r"],
  function (_self, _shape, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _r";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _randomReal_4(_r, _min_1(_self), _max_1(_self), _shape);
  },
  "{ :self :shape :r |\n\t\tr.randomReal(self.min, self.max, shape)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "discretize",
  ["self", "size", "aBlock:/1"],
  function (_self, _size, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _size, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_discretize_2(_self, _size), _aBlock_1);
  },
  "{ :self :size :aBlock:/1 |\n\t\tself.discretize(size).collect(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "discretize",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      /* console.error(errorMessage); */
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
  },
  "{ :self :size |\n\t\tlet start = self.min;\n\t\tlet stop = self.max;\n\t\tlet step = (stop - start) / (size - 1);\n\t\tRange(start, stop, step)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _aBlock_2(_min_1(_self), _min_1(_operand)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _aBlock_2(_max_1(_self), _max_1(_operand));
        },
      );
    });
  },
  "{ :self :operand :aBlock:/2 |\n\t\toperand.isInterval & {\n\t\t\taBlock(self.min, operand.min) & {\n\t\t\t\taBlock(self.max, operand.max)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "findDivisions",
  ["self", "dx", "n"],
  function (_self, _dx, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _dx, _n";
      /* console.error(errorMessage); */
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
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_next, _max_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _next = _plusSign_2(_next, _step);
      return _add_2(_answer, _next);
    });
    return _answer;
  },
  "{ :self :dx :n |\n\t\tlet step = ((self.max - self.min) / (n + 1)).roundUpTo(dx);\n\t\tlet next = self.min.roundDownTo(dx);\n\t\tlet answer = [next];\n\t\t{ next < self.max }.whileTrue {\n\t\t\tnext := next + step;\n\t\t\tanswer.add(next)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "findDivisions",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _niceNumberAbove_1(
      _hyphenMinus_2(_max_1(_self), _min_1(_self)),
    );
    let _step = _niceNumberNear_1(_solidus_2(_range, _n));
    let _start = _asterisk_2(_floor_1(_solidus_2(_min_1(_self), _step)), _step);
    let _end = _asterisk_2(_ceiling_1(_solidus_2(_max_1(_self), _step)), _step);
    /* Statements */
    return _Range_3(_start, _end, _step);
  },
  "{ :self :n |\n\t\tlet range = (self.max - self.min).niceNumberAbove;\n\t\tlet step = (range / n).niceNumberNear;\n\t\tlet start = (self.min / step).floor * step;\n\t\tlet end = (self.max / step).ceiling * step;\n\t\tRange(start, end, step)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "includes",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_aNumber, _min_1(_self), _max_1(_self));
  },
  "{ :self :aNumber |\n\t\taNumber.betweenAnd(self.min, self.max)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "intersection",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isDisjoint_2(_self, _operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Interval>>intersection: disjoint Intervals");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Interval_2(
          _max_2(_min_1(_self), _min_1(_operand)),
          _min_2(_max_1(_self), _max_1(_operand)),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _intersection_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tself.isDisjoint(operand).if {\n\t\t\t\t'Interval>>intersection: disjoint Intervals'.error\n\t\t\t} {\n\t\t\t\tInterval(self.min.max(operand.min), self.max.min(operand.max))\n\t\t\t}\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, intersection:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "isDisjoint",
  ["self", "anInterval"],
  function (_self, _anInterval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInterval";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_max_1(_self), _min_1(_anInterval)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_max_1(_anInterval), _min_1(_self));
      },
    );
  },
  "{ :self :anInterval |\n\t\tself.max < anInterval.min | {\n\t\t\tanInterval.max < self.min\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_zero_1(_self), _self);
  },
  "{ :self |\n\t\tself.zero - self\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asInterval_1(1);
  },
  "{ :self |\n\t\t1.asInterval\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(_plusSignPlusSign_2("(", _min_1(_self)), " -- "),
        _max_1(_self),
      ),
      ")",
    );
  },
  "{ :self |\n\t\t'(' ++ self.min ++ ' -- ' ++ self.max ++ ')'\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _asterisk_2(_self, _self);
    /* Statements */
    _ifTrue_2(_lessThanSign_2(_min_1(_answer), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _min_2(_answer, 0);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self * self;\n\t\t(answer.min < 0).ifTrue {\n\t\t\tanswer.min := 0\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "subdivide",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_2(_self, _plusSign_2(_n, 1));
  },
  "{ :self :n |\n\t\tself.discretize(n + 1)\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2("Interval(", _min_1(_self)),
          ", ",
        ),
        _max_1(_self),
      ),
      ")",
    );
  },
  "{ :self |\n\t\t'Interval(' ++ self.min ++ ', ' ++ self.max ++ ')'\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "union",
  ["self", "operand"],
  function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInterval_1(_operand), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isDisjoint_2(_self, _operand), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Interval>>union: disjoint Intervals");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Interval_2(
          _min_2(_min_1(_self), _min_1(_operand)),
          _max_2(_max_1(_self), _max_1(_operand)),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntervalAndApply_3(_operand, _self, _union_2);
    });
  },
  "{ :self :operand |\n\t\toperand.isInterval.if {\n\t\t\tself.isDisjoint(operand).if {\n\t\t\t\t'Interval>>union: disjoint Intervals'.error\n\t\t\t} {\n\t\t\t\tInterval(self.min.min(operand.min), self.max.max(operand.max))\n\t\t\t}\n\t\t} {\n\t\t\toperand.adaptToIntervalAndApply(self, union:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Interval",
  "Interval",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asInterval_1(0);
  },
  "{ :self |\n\t\t0.asInterval\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Interval",
  "hyphenMinusHyphenMinus",
  ["min", "max"],
  function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Interval_2(_min, _max);
  },
  "{ :min :max |\n\t\tInterval(min, max)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Interval",
  "adaptToIntervalAndApply",
  ["self", "anInterval", "aBlock:/2"],
  function (_self, _anInterval, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInterval, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_anInterval, _asInterval_1(_self));
  },
  "{ :self :anInterval :aBlock:/2 |\n\t\taBlock(anInterval, self.asInterval)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Interval",
  "asInterval",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Interval_2(_self, _self);
  },
  "{ :self |\n\t\tInterval(self, self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Interval",
  "Interval",
  ["min", "max"],
  function (_min, _max) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _min, _max";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_min, _max), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("@Number>>Interval: min > max");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_3(_newInterval_0(), _min, _max);
    });
  },
  "{ :min :max |\n\t\t(min > max).if {\n\t\t\t'@Number>>Interval: min > max'.error\n\t\t} {\n\t\t\tnewInterval().initializeSlots(min, max)\n\t\t}\n\t}",
);
