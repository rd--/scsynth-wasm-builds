sl.addType(
  false,
  "Permutation",
  "Permutations",
  ["Object"],
  ["cycles", "degree"],
);

sl.copyTraitToType(
  "Object",
  "Permutation",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isPermutation_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_cycles_1(_self), _cycles_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isPermutation & {\n\t\t\tself.cycles = anObject.cycles\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "asterisk",
  ["self", "aPermutation"],
  function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _length = _max_2(_degree_1(_self), _degree_1(_aPermutation));
    /* Statements */
    return _asPermutation_1(
      _ordering_1(
        _apply_2(
          _aPermutation,
          _apply_2(_self, _asList_1(_upOrDownTo_2(1, _length))),
        ),
      ),
    );
  },
  "{ :self :aPermutation |\n\t\tlet length = self.degree.max(aPermutation.degree);\n\t\taPermutation.apply(\n\t\t\tself.apply([1 .. length])\n\t\t).ordering.asPermutation\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "circumflexAccent",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNegative_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _circumflexAccent_2(_inverse_1(_self), _negated_1(_anInteger));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _product_1(_numberSign_2(_self, _anInteger));
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself.inverse ^ anInteger.negated\n\t\t} {\n\t\t\t(self # anInteger).product\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "apply",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _length = _size_1(_aSequence);
    /* Statements */
    return _if_3(_isIdentity_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aSequence;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _List_1(_length);
      let _indices = _list_2(_self, _length);
      /* Statements */
      _toDo_3(1, _length, function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(_answer, _at_2(_indices, _i), _at_2(_aSequence, _i));
      });
      return _answer;
    });
  },
  "{ :self :aSequence |\n\t\tlet length = aSequence.size;\n\t\tself.isIdentity.if {\n\t\t\taSequence\n\t\t} {\n\t\t\tlet answer = List(length);\n\t\t\tlet indices = self.list(length);\n\t\t\t1.toDo(length) { :i |\n\t\t\t\tanswer[indices[i]] := aSequence[i]\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "ascents",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _list_1(_self);
    let _k = _size_1(_p);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _hyphenMinus_2(_k, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _aBlock_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _i);
        },
      );
    });
    return _answer;
  },
  "{ :self :aBlock:/2 |\n\t\tlet p = self.list;\n\t\tlet k = p.size;\n\t\tlet answer = [];\n\t\t1.toDo(k - 1) { :i |\n\t\t\taBlock(p[i], p[i + 1]).ifTrue {\n\t\t\t\tanswer.add(i)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "ascents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ascents_2(_self, _lessThanSign_2);
  },
  "{ :self |\n\t\tself.ascents(<)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "asPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "decreasingRuns",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _runs_2(_self, _greaterThanSign_2);
  },
  "{ :self |\n\t\tself.runs(>)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "descents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ascents_2(_self, _greaterThanSign_2);
  },
  "{ :self |\n\t\tself.ascents(>)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "dictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asMap_1(
      _collect_2(_upOrDownTo_2(1, _degree_1(_self)), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _hyphenMinusGreaterThanSign_2(_i, _image_2(_self, _i));
      }),
    );
  },
  "{ :self |\n\t\t(1 .. self.degree).collect { :i |\n\t\t\ti -> self.image(i)\n\t\t}.asMap\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "fixedPoints",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _support = _asSet_1(_support_1(_self));
    let _answer = [];
    /* Statements */
    _toDo_3(1, _degree_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifFalse_2(_includes_2(_support, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet support = self.support.asSet;\n\t\tlet answer = [];\n\t\t1.toDo(self.degree) { :each |\n\t\t\tsupport.includes(each).ifFalse {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "graph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _l = _list_1(_self);
    let _i = _inversions_1(_self);
    let _e = _collect_2(_i, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _commercialAtAsterisk_2(_l, _each);
    });
    let _v = _asList_1(_upOrDownTo_2(1, _degree_1(_self)));
    /* Statements */
    return _Graph_2(_v, _e);
  },
  "{ :self |\n\t\tlet l = self.list;\n\t\tlet i = self.inversions;\n\t\tlet e = i.collect { :each | l @* each };\n\t\tlet v = [1 .. self.degree];\n\t\tGraph(v, e)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "hasPattern",
  ["self", "pattern"],
  function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _list = _list_1(_self);
      /* Statements */
      _subsequencesDo_2(_list, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_reducedPermutation_1(_each), _pattern),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(true);
          },
        );
      });
      return false;
    });
  },
  "{ :self :pattern |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet list = self.list;\n\t\t\tlist.subsequencesDo { :each |\n\t\t\t\t(each.reducedPermutation = pattern).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "image",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_cycles_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _i = _indexOf_2(_each, _anInteger);
        /* Statements */
        return _ifTrue_2(_greaterThanSign_2(_i, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(_atWrap_2(_each, _plusSign_2(_i, 1)));
        });
      });
      return _anInteger;
    });
  },
  "{ :self :anInteger |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.cycles.do { :each |\n\t\t\t\tlet i = each.indexOf(anInteger);\n\t\t\t\t(i > 0).ifTrue {\n\t\t\t\t\teach.atWrap(i + 1).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tanInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cycles_1(_collect_2(_cycles_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _reversed_1(_each);
    }));
  },
  "{ :self |\n\t\tself.cycles.collect { :each |\n\t\t\teach.reversed\n\t\t}.cycles\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "inversionVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _j = _indexOf_2(_list, _i);
      let _c = 0;
      /* Statements */
      _toDo_3(1, _j, function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_greaterThanSign_2(_at_2(_list, _k), _i), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _c = _plusSign_2(_c, 1);
        });
      });
      return _atPut_3(_answer, _i, _c);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = list.indexOf(i);\n\t\t\tlet c = 0;\n\t\t\t1.toDo(j) { :k |\n\t\t\t\t(list[k] > i).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "inversions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(1, _size_1(_list), function (_j) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _e = _at_2(_list, _j);
      /* Statements */
      return _toDo_3(1, _hyphenMinus_2(_j, 1), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_greaterThanSign_2(_at_2(_list, _i), _e), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, [_i, _j]);
        });
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet answer = [];\n\t\t1.toDo(list.size) { :j |\n\t\t\tlet e = list[j];\n\t\t\t1.toDo(j - 1) { :i |\n\t\t\t\t(list[i] > e).ifTrue {\n\t\t\t\t\tanswer.add([i j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "isDerangement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_support_1(_self)), _degree_1(_self));
  },
  "{ :self |\n\t\tself.support.size = self.degree\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "isIdentity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isEmpty_1(_cycles_1(_self));
  },
  "{ :self |\n\t\tself.cycles.isEmpty\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "isInvolution",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_cycles_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_size_1(_each), 2);
    });
  },
  "{ :self |\n\t\tself.cycles.allSatisfy { :each |\n\t\t\teach.size <= 2\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "leftActionProduct",
  ["self", "aPermutation"],
  function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_aPermutation, _self);
  },
  "{ :self :aPermutation |\n\t\taPermutation * self\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "leftInversionCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _c = 0;
      /* Statements */
      _toDo_3(1, _i, function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_at_2(_list, _k), _at_2(_list, _i)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _c = _plusSign_2(_c, 1);
          },
        );
      });
      return _atPut_3(_answer, _i, _c);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet c = 0;\n\t\t\t1.toDo(i) { :k |\n\t\t\t\t(list[k] > list[i]).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_support_1(_self));
  },
  "{ :self |\n\t\tself.support.size\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "list",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _list_2(_self, _degree_1(_self));
  },
  "{ :self |\n\t\tself.list(self.degree)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "list",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permutationCyclesToPermutationList_2(_cycles_1(_self), _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.cycles.permutationCyclesToPermutationList(anInteger)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "majorIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_descents_1(_self));
  },
  "{ :self |\n\t\tself.descents.sum\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "matrix",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_2(_self, _anInteger);
    let _answer = [];
    /* Statements */
    _do_2(_list, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _row = _List_2(_anInteger, 0);
      /* Statements */
      _atPut_3(_row, _each, 1);
      return _add_2(_answer, _row);
    });
    return _answer;
  },
  "{ :self :anInteger |\n\t\tlet list = self.list(anInteger);\n\t\tlet answer = [];\n\t\tlist.do { :each |\n\t\t\tlet row = List(anInteger, 0);\n\t\t\trow[each] := 1;\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "matrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _matrix_2(_self, _degree_1(_self));
  },
  "{ :self |\n\t\tself.matrix(self.degree)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "max",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isIdentity_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _max_1(_support_1(_self));
    });
  },
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.support.max\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "min",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isIdentity_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _inf;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _min_1(_support_1(_self));
    });
  },
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\tinf\n\t\t} {\n\t\t\tself.support.min\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "order",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isIdentity_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lcm_1(_collect_2(_cycles_1(_self), _size_1));
    });
  },
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.cycles.collect(size:/1).lcm\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "orderList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = _self;
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isIdentity_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _next);
      return _next = _asterisk_2(_next, _self);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet next = self;\n\t\t{\n\t\t\tnext.isIdentity\n\t\t}.whileFalse {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * self\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "patternPositions",
  ["self", "pattern"],
  function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_1(_self);
    let _k = _size_1(_list);
    let _answer = [];
    /* Statements */
    _powerSetDo_2(_asList_1(_upOrDownTo_2(1, _k)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _subsequence = _commercialAtAsterisk_2(_list, _each);
      /* Statements */
      return _ifTrue_2(
        _equalsSign_2(_reducedPermutation_1(_subsequence), _pattern),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _each);
        },
      );
    });
    return _answer;
  },
  "{ :self :pattern |\n\t\tlet list = self.list;\n\t\tlet k = list.size;\n\t\tlet answer = [];\n\t\t[1 .. k].powerSetDo { :each |\n\t\t\tlet subsequence = list @* each;\n\t\t\t(subsequence.reducedPermutation = pattern).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "peaks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _list_1(_self);
    /* Statements */
    return _select_2(_to_2(2, _hyphenMinus_2(_size_1(_p), 1)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _lessThanSign_2(_at_2(_p, _hyphenMinus_2(_i, 1)), _at_2(_p, _i)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _greaterThanSign_2(
            _at_2(_p, _i),
            _at_2(_p, _plusSign_2(_i, 1)),
          );
        },
      );
    });
  },
  "{ :self |\n\t\tlet p = self.list;\n\t\t2.to(p.size - 1).select { :i |\n\t\t\tp[i - 1] < p[i] & {\n\t\t\t\tp[i] > p[i + 1]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cycles_2(_self, _copy_1(_cycles_1(_self)));
  },
  "{ :self |\n\t\tself.cycles := self.cycles.copy\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _c = _rightInversionCount_1(_self);
    let _r = _asList_1(_upOrDownTo_2(_degree_1(_self), 1));
    /* Statements */
    return _mixedRadixDecode_2(_c, _r);
  },
  "{ :self |\n\t\tlet c = self.rightInversionCount;\n\t\tlet r = [self.degree .. 1];\n\t\tc.mixedRadixDecode(r)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "reducedWordsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _f_1 = function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _isIdentity = true;
      /* Statements */
      _toDo_3(1, _hyphenMinus_2(_size_1(_p), 1), function (_d) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _d";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _e = _plusSign_2(_d, 1);
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_at_2(_p, _d), _at_2(_p, _e)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            _isIdentity = false;
            _swapWith_3(_p, _d, _e);
            _reducedWordsDo_2(_asPermutation_1(_p), function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              _add_2(_x, _d);
              return _aBlock_1(_x);
            });
            return _swapWith_3(_p, _d, _e);
          },
        );
      });
      return _ifTrue_2(_isIdentity, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1([]);
      });
    };
    /* Statements */
    return _f_1(_list_1(_self));
  },
  "{ :self :aBlock:/1 |\n\t\tlet f = { :p |\n\t\t\tlet isIdentity = true;\n\t\t\t1.toDo(p.size - 1) { :d |\n\t\t\t\tlet e = d + 1;\n\t\t\t\t(p[d] > p[e]).ifTrue {\n\t\t\t\t\tisIdentity := false;\n\t\t\t\t\tp.swapWith(d, e);\n\t\t\t\t\tp.asPermutation.reducedWordsDo { :x |\n\t\t\t\t\t\tx.add(d);\n\t\t\t\t\t\taBlock(x)\n\t\t\t\t\t};\n\t\t\t\t\tp.swapWith(d, e)\n\t\t\t\t}\n\t\t\t};\n\t\t\tisIdentity.ifTrue {\n\t\t\t\taBlock([])\n\t\t\t}\n\t\t};\n\t\tf(self.list)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "reducedWords",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _reducedWordsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.reducedWordsDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "replace",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aSequence, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _image_2(_self, _each);
    });
  },
  "{ :self :aSequence |\n\t\taSequence.collect { :each |\n\t\t\tself.image(each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "rightActionProduct",
  ["self", "aPermutation"],
  function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _aPermutation);
  },
  "{ :self :aPermutation |\n\t\tself * aPermutation\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "rightInversionCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _c = 0;
      /* Statements */
      _toDo_3(_plusSign_2(_i, 1), _n, function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_at_2(_list, _k), _at_2(_list, _i)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _c = _plusSign_2(_c, 1);
          },
        );
      });
      return _atPut_3(_answer, _i, _c);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet c = 0;\n\t\t\t(i + 1).toDo(n) { :k |\n\t\t\t\t(list[k] < list[i]).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "runs",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _orderedSubstrings_2(_list_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.list.orderedSubstrings(aBlock:/2)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "runs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _runs_2(_self, _lessThanSign_2);
  },
  "{ :self |\n\t\tself.runs(<)\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "signature",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(-1, _size_1(_inversions_1(_self)));
  },
  "{ :self |\n\t\t-1 ^ self.inversions.size\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "stackSort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asPermutation_1(_stackSort_1(_list_1(_self)));
  },
  "{ :self |\n\t\tself.list.stackSort.asPermutation\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_cycles_1(_self)), ".cycles");
  },
  "{ :self |\n\t\tself.cycles.storeString ++ '.cycles'\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "support",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sort_1(_concatenation_1(_cycles_1(_self)));
  },
  "{ :self |\n\t\tself.cycles.concatenation.sort\n\t}",
);

sl.addMethod(
  "Permutation",
  "Permutations",
  "twoLineNotation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_asList_1(_upOrDownTo_2(1, _degree_1(_self))), _list_1(_self)];
  },
  "{ :self |\n\t\t[\n\t\t\t[1 .. self.degree],\n\t\t\tself.list\n\t\t]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "asPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPermutationCycles_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cycles_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isPermutationList_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _initializeSlots_3(
          _newPermutation_0(),
          _permutationListToPermutationCycles_2(_self, true),
          _max_1(_self),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Sequence>>asPermutation: not permutation");
      });
    });
  },
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tself.cycles\n\t\t} {\n\t\t\tself.isPermutationList.if {\n\t\t\t\tnewPermutation().initializeSlots(\n\t\t\t\t\tself.permutationListToPermutationCycles(true),\n\t\t\t\t\tself.max\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>asPermutation: not permutation')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "cycles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPermutationCycles_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _initializeSlots_3(
        _newPermutation_0(),
        _if_3(_isEmpty_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [];
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _permutationCyclesToCanonicalForm_2(_self, true);
        }),
        _permutationDegree_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>cycles: not permutation cycles");
    });
  },
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tnewPermutation().initializeSlots(\n\t\t\t\tself.isEmpty.if {\n\t\t\t\t\t[]\n\t\t\t\t} {\n\t\t\t\t\tself.permutationCyclesToCanonicalForm(true)\n\t\t\t\t},\n\t\t\t\tself.permutationDegree\n\t\t\t)\n\t\t} {\n\t\t\tself.error('@Sequence>>cycles: not permutation cycles')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "derangements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _permutationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _allSatisfy_2(
          _withCollect_3(_self, _each, _tildeEqualsSign_2),
          _identity_1,
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _add_2(_answer, _copy_1(_each));
        },
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.permutationsDo { :each |\n\t\t\tself.withCollect(each, ~=).allSatisfy(identity:/1).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "findPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asPermutation_1(_ordering_1(_self));
  },
  "{ :self |\n\t\tself.ordering.asPermutation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "findPermutation",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _indices = _collect_2(_aSequence, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOf_2(_self, _each);
    });
    /* Statements */
    return _findPermutation_1(_indices);
  },
  "{ :self :aSequence |\n\t\tlet indices = aSequence.collect { :each |\n\t\t\tself.indexOf(each)\n\t\t};\n\t\tindices.findPermutation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "inversePermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _inverse_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.inverse\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "inversionVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _inversionVector_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.inversionVector\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "isInvolution",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isInvolution_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.isInvolution\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "isPermutationCycles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_equalsSign_2(_depth_1(_self), 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _entries = _concatenation_1(_self);
        /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_entries, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _ampersand_2(_isInteger_1(_each), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _isPositive_1(_each);
            });
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isDuplicateFree_2(_entries, _equalsSignEqualsSign_2);
          },
        );
      });
    });
  },
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\t(self.depth = 3) & {\n\t\t\t\tlet entries = self.concatenation;\n\t\t\t\tentries.allSatisfy { :each |\n\t\t\t\t\teach.isInteger & {\n\t\t\t\t\t\teach.isPositive\n\t\t\t\t\t}\n\t\t\t\t} & {\n\t\t\t\t\tentries.isDuplicateFree(==)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "isPermutationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _ascending = _sorted_1(_self);
      /* Statements */
      return _ampersand_2(_isArithmeticSeries_1(_ascending), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_first_1(_ascending), 1),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_last_1(_ascending), _size_1(_self));
          },
        );
      });
    });
  },
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet ascending = self.sorted;\n\t\t\tascending.isArithmeticSeries & {\n\t\t\t\tascending.first = 1 & {\n\t\t\t\t\tascending.last = self.size\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "isPermutationOf",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_self), _size_1(_aSequence)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_sort_1(_self), _sort_1(_aSequence));
      },
    );
  },
  "{ :self :aSequence |\n\t\t(self.size = aSequence.size) & {\n\t\t\tself.sort = aSequence.sort\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "leftInversionCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _leftInversionCount_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.leftInversionCount\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "lexicographicPermutations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _lexicographicPermutationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.lexicographicPermutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "lexicographicPermutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _sort_1(_copy_1(_self));
    let _next = null;
    /* Statements */
    _aBlock_1(_list);
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _next = _nextPermutationLexicographic_1(_list);
      return _isNil_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_list);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet list = self.copy.sort;\n\t\tlet next = nil;\n\t\taBlock(list);\n\t\t{\n\t\t\tnext := list.nextPermutationLexicographic;\n\t\t\tnext.isNil\n\t\t}.whileFalse {\n\t\t\taBlock(list)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "minimumChangePermutations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _minimumChangePermutationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.minimumChangePermutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "minimumChangePermutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _copy_1(_self);
    let _n = _size_1(_a);
    let _c = _List_2(_n, 1);
    let _i = 2;
    let _swap_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _t = _at_2(_a, _i);
      /* Statements */
      _atPut_3(_a, _i, _at_2(_a, _j));
      return _atPut_3(_a, _j, _t);
    };
    /* Statements */
    _aBlock_1(_a);
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_i, _n);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_at_2(_c, _i), _i), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _if_3(_isOdd_1(_i), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _swap_2(1, _i);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _swap_2(_at_2(_c, _i), _i);
        });
        _aBlock_1(_a);
        _atPut_3(_c, _i, _plusSign_2(_at_2(_c, _i), 1));
        return _i = 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_c, _i, 1);
        return _i = _plusSign_2(_i, 1);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet a = self.copy;\n\t\tlet n = a.size;\n\t\tlet c = List(n, 1);\n\t\tlet i = 2;\n\t\tlet swap = { :i :j |\n\t\t\tlet t = a[i];\n\t\t\ta[i] := a[j];\n\t\t\ta[j] := t\n\t\t};\n\t\taBlock(a);\n\t\t{\n\t\t\ti <= n\n\t\t}.whileTrue {\n\t\t\t(c[i] < i).if {\n\t\t\t\ti.isOdd.if {\n\t\t\t\t\tswap(1, i)\n\t\t\t\t} {\n\t\t\t\t\tswap(c[i], i)\n\t\t\t\t};\n\t\t\t\taBlock(a);\n\t\t\t\tc[i] := c[i] + 1;\n\t\t\t\ti := 2\n\t\t\t} {\n\t\t\t\tc[i] := 1;\n\t\t\t\ti := i + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "nextPermutationLexicographic",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _swap_2 = function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _t = _at_2(_self, _i);
      /* Statements */
      _atPut_3(_self, _i, _at_2(_self, _j));
      return _atPut_3(_self, _j, _t);
    };
    let _n = _size_1(_self);
    let _k = _n;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_greaterThanSign_2(_k, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(
          _at_2(_self, _hyphenMinus_2(_k, 1)),
          _at_2(_self, _k),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _k = _hyphenMinus_2(_k, 1);
    });
    _k = _hyphenMinus_2(_k, 1);
    return _if_3(_equalsSign_2(_k, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _l = _n;
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_at_2(_self, _l), _at_2(_self, _k));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _l = _hyphenMinus_2(_l, 1);
      });
      _swap_2(_k, _l);
      _k = _plusSign_2(_k, 1);
      _l = _n;
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_l, _k);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _swap_2(_k, _l);
        _l = _hyphenMinus_2(_l, 1);
        return _k = _plusSign_2(_k, 1);
      });
      return _self;
    });
  },
  "{ :self |\n\t\tlet swap = { :i :j |\n\t\t\tlet t = self[i];\n\t\t\tself[i] := self[j];\n\t\t\tself[j] := t\n\t\t};\n\t\tlet n = self.size;\n\t\tlet k = n;\n\t\t{\n\t\t\tk > 1 & {\n\t\t\t\tself[k - 1] >= self[k]\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tk := k - 1\n\t\t};\n\t\tk := k - 1;\n\t\t(k = 0).if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet l = n;\n\t\t\t{\n\t\t\t\tself[l] <= self[k]\n\t\t\t}.whileTrue {\n\t\t\t\tl := l - 1\n\t\t\t};\n\t\t\tswap(k, l);\n\t\t\tk := k + 1;\n\t\t\tl := n;\n\t\t\t{\n\t\t\t\tl > k\n\t\t\t}.whileTrue {\n\t\t\t\tswap(k, l);\n\t\t\t\tl := l - 1;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "plainChanges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _plainChangesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.plainChangesDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "plainChangesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _copy_1(_self);
    let _q = _copy_1(_self);
    let _n = _size_1(_p);
    let _d = _List_2(_n, -1);
    let _move_2 = function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _z = _at_2(_p, _plusSign_2(_at_2(_q, _x), _y));
      /* Statements */
      _atPut_3(_p, _at_2(_q, _x), _z);
      _atPut_3(_p, _plusSign_2(_at_2(_q, _x), _y), _x);
      _atPut_3(_q, _z, _at_2(_q, _x));
      return _atPut_3(_q, _x, _plusSign_2(_at_2(_q, _x), _y));
    };
    let _perm_1 = function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_i, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_p);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _perm_1(_plusSign_2(_i, 1));
        _timesRepeat_2(_hyphenMinus_2(_i, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _move_2(_i, _at_2(_d, _i));
          return _perm_1(_plusSign_2(_i, 1));
        });
        return _atPut_3(_d, _i, _hyphenMinus_2(0, _at_2(_d, _i)));
      });
    };
    /* Statements */
    return _perm_1(1);
  },
  "{ :self :aBlock:/1 |\n\t\tlet p = self.copy;\n\t\tlet q = self.copy;\n\t\tlet n = p.size;\n\t\tlet d = List(n, -1);\n\t\tlet move = { :x :y |\n\t\t\tlet z = p[q[x] + y];\n\t\t\tp[q[x]] := z;\n\t\t\tp[q[x] + y] := x;\n\t\t\tq[z] := q[x];\n\t\t\tq[x] := q[x] + y\n\t\t};\n\t\tlet perm = { :i |\n\t\t\t(i > n).if {\n\t\t\t\taBlock(p)\n\t\t\t} {\n\t\t\t\tperm(i + 1);\n\t\t\t\t(i - 1).timesRepeat {\n\t\t\t\t\tmove(i, d[i]);\n\t\t\t\t\tperm(i + 1)\n\t\t\t\t};\n\t\t\t\td[i] := 0 - d[i]\n\t\t\t}\n\t\t};\n\t\tperm(1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationCycles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cycles_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.cycles\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationCyclesToCanonicalForm",
  ["self", "deleteUnaryCycles"],
  function (_self, _deleteUnaryCycles) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deleteUnaryCycles";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _permutationCyclesToPermutationList_1(_self);
    /* Statements */
    return _permutationListToPermutationCycles_2(_list, _deleteUnaryCycles);
  },
  "{ :self :deleteUnaryCycles |\n\t\tlet list = self.permutationCyclesToPermutationList;\n\t\tlist.permutationListToPermutationCycles(deleteUnaryCycles)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationCyclesToPermutationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permutationCyclesToPermutationList_2(
      _self,
      _permutationDegree_1(_self),
    );
  },
  "{ :self |\n\t\tself.permutationCyclesToPermutationList(self.permutationDegree)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationCyclesToPermutationList",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_anInteger, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _asList_1(_upOrDownTo_2(1, _anInteger));
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(1, _size_1(_each), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atPut_3(
            _answer,
            _at_2(_each, _index),
            _atWrap_2(_each, _plusSign_2(_index, 1)),
          );
        });
      });
      return _answer;
    });
  },
  "{ :self :anInteger |\n\t\t(anInteger = 0).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = [1 .. anInteger];\n\t\t\tself.do { :each |\n\t\t\t\t1.toDo(each.size) { :index |\n\t\t\t\t\tanswer[each[index]] := each.atWrap(index + 1)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationDegree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPermutationCycles_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isEmpty_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _max_1(_concatenation_1(_self));
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isPermutationList_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _max_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          "@Sequence>>permutationDegree: not a permutation",
        );
      });
    });
  },
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tself.isEmpty.if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tself.concatenation.max\n\t\t\t}\n\t\t} {\n\t\t\tself.isPermutationList.if {\n\t\t\t\tself.max\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>permutationDegree: not a permutation')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationHasPattern",
  ["self", "pattern"],
  function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasPattern_2(_asPermutation_1(_self), _pattern);
  },
  "{ :self :pattern |\n\t\tself.asPermutation.hasPattern(pattern)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationFixedPoints",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fixedPoints_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.fixedPoints\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _graph_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.graph\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationInversions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _inversions_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.inversions\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationListToPermutationCycle",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [_anInteger];
    let _nextItem = _at_2(_self, _anInteger);
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_nextItem, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _nextItem);
      return _nextItem = _at_2(_self, _nextItem);
    });
    return _answer;
  },
  "{ :self :anInteger |\n\t\tlet answer = [anInteger];\n\t\tlet nextItem = self[anInteger];\n\t\t{\n\t\t\tnextItem = anInteger\n\t\t}.whileFalse {\n\t\t\tanswer.add(nextItem);\n\t\t\tnextItem := self[nextItem]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationListToPermutationCycles",
  ["self", "deleteUnaryCycles"],
  function (_self, _deleteUnaryCycles) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deleteUnaryCycles";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _visited = _Set_0();
    let _answer = [];
    /* Statements */
    _toDo_3(1, _size_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifFalse_2(_includes_2(_visited, _each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _cycle = _permutationListToPermutationCycle_2(_self, _each);
        /* Statements */
        _addAll_2(_visited, _cycle);
        return _add_2(_answer, _cycle);
      });
    });
    return _if_3(_deleteUnaryCycles, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _reject_2(_answer, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_each), 1);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer;
    });
  },
  "{ :self :deleteUnaryCycles |\n\t\tlet visited = Set();\n\t\tlet answer = [];\n\t\t1.toDo(self.size) { :each |\n\t\t\tvisited.includes(each).ifFalse {\n\t\t\t\tlet cycle = self.permutationListToPermutationCycle(each);\n\t\t\t\tvisited.addAll(cycle);\n\t\t\t\tanswer.add(cycle)\n\t\t\t}\n\t\t};\n\t\tdeleteUnaryCycles.if {\n\t\t\tanswer.reject { :each |\n\t\t\t\teach.size = 1\n\t\t\t}\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPermutationList_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _permutationCyclesToPermutationList_2(
        _self,
        _permutationDegree_1(_self),
      );
    });
  },
  "{ :self |\n\t\tself.isPermutationList.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.permutationCyclesToPermutationList(self.permutationDegree)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationList",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _list_2(_asPermutation_1(_self), _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.asPermutation.list(anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _matrix_2(_asPermutation_1(_self), _permutationDegree_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.matrix(self.permutationDegree)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationMax",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.max\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationMin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _min_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.min\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationOrder",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _order_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.order\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationPatternPositions",
  ["self", "pattern"],
  function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _patternPositions_2(_asPermutation_1(_self), _pattern);
  },
  "{ :self :pattern |\n\t\tself.asPermutation.patternPositions(pattern)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationPeaks",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _peaks_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.peaks\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationPower",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_anInteger, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asPermutation_1(
        _asList_1(_upOrDownTo_2(1, _permutationDegree_1(_self))),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _circumflexAccent_2(_asPermutation_1(_self), _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\t(anInteger = 0).if {\n\t\t\t[1 .. self.permutationDegree].asPermutation\n\t\t} {\n\t\t\tself.asPermutation ^ anInteger\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationProduct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _entries = _collect_2(_self, _asPermutation_1);
    /* Statements */
    return _if_3(_isEmpty_1(_entries), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _cycles_1([]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_size_1(_entries), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _first_1(_entries);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _reduce_2(_entries, _asterisk_2);
      });
    });
  },
  "{ :self |\n\t\tlet entries = self.collect(asPermutation:/1);\n\t\tentries.isEmpty.if {\n\t\t\t[].cycles\n\t\t} {\n\t\t\t(entries.size = 1).if {\n\t\t\t\tentries.first\n\t\t\t} {\n\t\t\t\tentries.reduce(*)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationRank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rank_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.rank\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationReplace",
  ["self", "aPermutation"],
  function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _replace_2(_asPermutation_1(_aPermutation), _self);
  },
  "{ :self :aPermutation |\n\t\taPermutation.asPermutation.replace(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationRuns",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _runs_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.runs\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationSupport",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _support_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.support\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _permutationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.permutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutations",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_collect_2(
      _subsets_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_size_1(_each), _size);
      }),
      _permutations_1,
    ));
  },
  "{ :self :size |\n\t\tself.subsets { :each |\n\t\t\teach.size = size\n\t\t}.collect(permutations:/1).concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permutationsStartingAtDo_3(_copy_1(_self), 1, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.copy.permutationsStartingAtDo(1, aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationsStartingAtDo",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_anInteger, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_anInteger, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _toDo_3(_anInteger, _size_1(_self), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _swapWith_3(_self, _anInteger, _index);
          _permutationsStartingAtDo_3(
            _self,
            _plusSign_2(_anInteger, 1),
            _aBlock_1,
          );
          return _swapWith_3(_self, _anInteger, _index);
        });
      });
    });
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\t(anInteger > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\t(anInteger = self.size).if {\n\t\t\t\taBlock(self)\n\t\t\t} {\n\t\t\t\tanInteger.toDo(self.size) { :index |\n\t\t\t\t\tself.swapWith(anInteger, index);\n\t\t\t\t\tself.permutationsStartingAtDo(anInteger + 1, aBlock:/1);\n\t\t\t\t\tself.swapWith(anInteger, index)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permutationSymbol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isPermutationList_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _circumflexAccent_2(-1, _size_1(_permutationInversions_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self |\n\t\tself.isPermutationList.if {\n\t\t\t-1 ^ self.permutationInversions.size\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "permute",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _apply_2(_asPermutation_1(_anObject), _self);
  },
  "{ :self :anObject |\n\t\tanObject.asPermutation.apply(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "reducedPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _sequence = _sorted_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _indexOf_2(_sequence, _each);
    });
  },
  "{ :self |\n\t\tlet sequence = self.sorted;\n\t\tself.collect { :each |\n\t\t\tsequence.indexOf(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "rightInversionCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rightInversionCount_1(_asPermutation_1(_self));
  },
  "{ :self |\n\t\tself.asPermutation.rightInversionCount\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "rightInversionCountToPermutationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _list = _asList_1(_upOrDownTo_2(1, _size_1(_self)));
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeAt_2(_list, _plusSign_2(_each, 1));
    });
  },
  "{ :self |\n\t\tlet list = [1 .. self.size];\n\t\tself.collect { :each |\n\t\t\tlist.removeAt(each + 1)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "rightInversionCountToPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asPermutation_1(_rightInversionCountToPermutationList_1(_self));
  },
  "{ :self |\n\t\tself.rightInversionCountToPermutationList.asPermutation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Permutations",
  "stackSort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _stack = _Stack_0();
    let _answer = [];
    /* Statements */
    _do_2(_self, function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _n = _peek_1(_stack);
        /* Statements */
        return _ampersand_2(_tildeEqualsSign_2(_n, null), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _greaterThanSign_2(_x, _n);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _pop_1(_stack));
      });
      return _push_2(_stack, _x);
    });
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isEmpty_1(_stack);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _pop_1(_stack));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet stack = Stack();\n\t\tlet answer = [];\n\t\tself.do { :x |\n\t\t\t{\n\t\t\t\tlet n = stack.peek;\n\t\t\t\tn ~= nil & {\n\t\t\t\t\tx > n\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tanswer.add(stack.pop)\n\t\t\t};\n\t\t\tstack.push(x)\n\t\t};\n\t\t{\n\t\t\tstack.isEmpty\n\t\t}.whileFalse {\n\t\t\tanswer.add(stack.pop)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "ArithmeticProgression",
  "Permutations",
  "permutationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _permutationsDo_2(_asList_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.asList.permutationsDo(aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "minimumChangePermutations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _minimumChangePermutations_1(_asList_1(_upOrDownTo_2(1, _self)));
  },
  "{ :self |\n\t\t[1 .. self].minimumChangePermutations\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "plainChanges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Integer>>plainChanges: n < 1");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plainChanges_1(_asList_1(_upOrDownTo_2(1, _self)));
    });
  },
  "{ :self |\n\t\t(self < 1).if {\n\t\t\tself.error('@Integer>>plainChanges: n < 1')\n\t\t} {\n\t\t\t[1 .. self].plainChanges\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "randomPermutation",
  ["self", "randomNumberGenerator"],
  function (_self, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _randomNumberGenerator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asPermutation_1(
      _randomSample_3(_upOrDownTo_2(1, _self), _self, _randomNumberGenerator),
    );
  },
  "{ :self :randomNumberGenerator |\n\t\t(1 .. self).randomSample(self, randomNumberGenerator).asPermutation\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "randomPermutation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _randomPermutation_2(_self, _system);
  },
  "{ :self |\n\t\tself.randomPermutation(system)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "randomPermutationList",
  ["self", "count", "randomNumberGenerator"],
  function (_self, _count, _randomNumberGenerator) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _count, _randomNumberGenerator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _randomPermutation_2(_self, _randomNumberGenerator);
    }, _count);
  },
  "{ :self :count :randomNumberGenerator |\n\t\t{\n\t\t\tself.randomPermutation(randomNumberGenerator)\n\t\t} ! count\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "randomPermutationList",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _randomPermutationList_3(_self, _count, _system);
  },
  "{ :self :count |\n\t\tself.randomPermutationList(count, system)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Permutations",
  "unrankPermutation",
  ["rank", "degree"],
  function (_rank, _degree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _rank, _degree";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rightInversionCountToPermutation_1(
      _mixedRadixEncode_2(_rank, _asList_1(_upOrDownTo_2(_degree, 1))),
    );
  },
  "{ :rank :degree |\n\t\trank.mixedRadixEncode([degree .. 1]).rightInversionCountToPermutation\n\t}",
);
