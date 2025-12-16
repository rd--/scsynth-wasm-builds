sl.addType(
  false,
  "Permutation",
  "Permutations",
  ["Object", "Storeable", "Equatable"],
  ["cycles", "degree"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Permutation",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Permutation",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Permutation",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "equal",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPermutation_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equal_2(_cycles_1(_self), _cycles_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isPermutation & {\n\t\t\tequal(self.cycles, anObject.cycles)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPermutation_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equal_2(_cycles_1(_self), _cycles_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isPermutation & {\n\t\t\tequal(self.cycles, anObject.cycles)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "power",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_inverse_1(_self), _negate_1(_anInteger));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(_List_2(_anInteger, _self));
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself.inverse ^ anInteger.negate\n\t\t} {\n\t\t\tList(anInteger, self).product\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "circumflexAccent",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_inverse_1(_self), _negate_1(_anInteger));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(_List_2(_anInteger, _self));
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself.inverse ^ anInteger.negate\n\t\t} {\n\t\t\tList(anInteger, self).product\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "similar",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "times",
  ["self", "aPermutation"],
  sl.annotateFunction(function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _length = _max_2(_degree_1(_self), _degree_1(_aPermutation));
    /* Statements */
    return _asPermutation_1(
      _ordering_1(_apply_2(_aPermutation, _apply_2(_self, _iota_1(_length)))),
    );
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation |\n\t\tlet length = self.degree.max(aPermutation.degree);\n\t\taPermutation.apply(\n\t\t\tself.apply(length.iota)\n\t\t).ordering.asPermutation\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "asterisk",
  ["self", "aPermutation"],
  sl.annotateFunction(function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _length = _max_2(_degree_1(_self), _degree_1(_aPermutation));
    /* Statements */
    return _asPermutation_1(
      _ordering_1(_apply_2(_aPermutation, _apply_2(_self, _iota_1(_length)))),
    );
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation |\n\t\tlet length = self.degree.max(aPermutation.degree);\n\t\taPermutation.apply(\n\t\t\tself.apply(length.iota)\n\t\t).ordering.asPermutation\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "apply",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _length = _size_1(_aSequence);
    /* Statements */
    return _if_3(
      _isIdentity_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aSequence;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _List_1(_length);
        let _indices = _list_2(_self, _length);
        /* Statements */
        _toDo_3(
          1,
          _length,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _answer,
              _at_2(_indices, _i),
              _at_2(_aSequence, _i),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\tlet length = aSequence.size;\n\t\tself.isIdentity.if {\n\t\t\taSequence\n\t\t} {\n\t\t\tlet answer = List(length);\n\t\t\tlet indices = self.list(length);\n\t\t\t1.toDo(length) { :i |\n\t\t\t\tanswer[indices[i]] := aSequence[i]\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "ascents",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _list_1(_self);
    let _k = _size_1(_p);
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _hyphenMinus_2(_k, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _i);
          }, []),
        );
      }, ["i"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet p = self.list;\n\t\tlet k = p.size;\n\t\tlet answer = [];\n\t\t1.toDo(k - 1) { :i |\n\t\t\taBlock(p[i], p[i + 1]).ifTrue {\n\t\t\t\tanswer.add(i)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "ascents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ascents_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.ascents(<)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "asPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "decreasingRuns",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _runs_2(_self, _greaterThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.runs(>)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "descents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ascents_2(_self, _greaterThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.ascents(>)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "dictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMap_1(
      _collect_2(
        _to_2(1, _degree_1(_self)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2(_i, _image_2(_self, _i));
        }, ["i"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t1.to(self.degree).collect { :i |\n\t\t\ti -> self.image(i)\n\t\t}.asMap\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "fixedPoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _support = _asIdentitySet_1(_support_1(_self));
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _degree_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _includes_2(_support, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet support = self.support.asIdentitySet;\n\t\tlet answer = [];\n\t\t1.toDo(self.degree) { :each |\n\t\t\tsupport.includes(each).ifFalse {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "graph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _list_1(_self);
    let _i = _inversions_1(_self);
    let _e = _collect_2(
      _i,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _commercialAtAsterisk_2(_l, _each);
      }, ["each"]),
    );
    let _v = _iota_1(_degree_1(_self));
    /* Statements */
    return _Graph_2(_v, _e);
  }, ["self"]),
  "{ :self |\n\t\tlet l = self.list;\n\t\tlet i = self.inversions;\n\t\tlet e = i.collect { :each | l @* each };\n\t\tlet v = self.degree.iota;\n\t\tGraph(v, e)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "hasPattern",
  ["self", "pattern"],
  sl.annotateFunction(function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _list = _list_1(_self);
      /* Statements */
      _subsequencesDo_2(
        _list,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_reducedPermutation_1(_each), _pattern),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "pattern"]),
  "{ :self :pattern |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet list = self.list;\n\t\t\tlist.subsequencesDo { :each |\n\t\t\t\t(each.reducedPermutation = pattern).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "image",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _cycles_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _indexOf_2(_each, _anInteger);
          /* Statements */
          return _ifTrue_2(
            _greaterThanSign_2(_i, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_atWrap_2(_each, _plusSign_2(_i, 1)));
            }, []),
          );
        }, ["each"]),
      );
      return _anInteger;
    }, ["return:/1"]));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.cycles.do { :each |\n\t\t\t\tlet i = each.indexOf(anInteger);\n\t\t\t\t(i > 0).ifTrue {\n\t\t\t\t\teach.atWrap(i + 1).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tanInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "inverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cycles_1(
      _collect_2(
        _cycles_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _reverse_1(_each);
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cycles.collect { :each |\n\t\t\teach.reverse\n\t\t}.cycles\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "inversionVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _indexOf_2(_list, _i);
        let _c = 0;
        /* Statements */
        _toDo_3(
          1,
          _j,
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_at_2(_list, _k), _i),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _c = _plusSign_2(_c, 1);
              }, []),
            );
          }, ["k"]),
        );
        return _atPut_3(_answer, _i, _c);
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = list.indexOf(i);\n\t\t\tlet c = 0;\n\t\t\t1.toDo(j) { :k |\n\t\t\t\t(list[k] > i).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "inversions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _size_1(_list),
      sl.annotateFunction(function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _at_2(_list, _j);
        /* Statements */
        return _toDo_3(
          1,
          _hyphenMinus_2(_j, 1),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_at_2(_list, _i), _e),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, [_i, _j]);
              }, []),
            );
          }, ["i"]),
        );
      }, ["j"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet answer = [];\n\t\t1.toDo(list.size) { :j |\n\t\t\tlet e = list[j];\n\t\t\t1.toDo(j - 1) { :i |\n\t\t\t\t(list[i] > e).ifTrue {\n\t\t\t\t\tanswer.add([i j])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "isDerangement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_support_1(_self)), _degree_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.support.size = self.degree\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "isIdentity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEmpty_1(_cycles_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.cycles.isEmpty\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "isInvolution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _cycles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_size_1(_each), 2);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cycles.allSatisfy { :each |\n\t\t\teach.size <= 2\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "leftActionProduct",
  ["self", "aPermutation"],
  sl.annotateFunction(function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_aPermutation, _self);
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation |\n\t\taPermutation * self\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "leftInversionCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = 0;
        /* Statements */
        _toDo_3(
          1,
          _i,
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_at_2(_list, _k), _at_2(_list, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _c = _plusSign_2(_c, 1);
              }, []),
            );
          }, ["k"]),
        );
        return _atPut_3(_answer, _i, _c);
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet c = 0;\n\t\t\t1.toDo(i) { :k |\n\t\t\t\t(list[k] > list[i]).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "length",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_support_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.support.size\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "list",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _list_2(_self, _degree_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.list(self.degree)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "permutationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _list_2(_self, _degree_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.list(self.degree)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "list",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationCyclesToPermutationList_2(_cycles_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.cycles.permutationCyclesToPermutationList(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "permutationList",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationCyclesToPermutationList_2(_cycles_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.cycles.permutationCyclesToPermutationList(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "majorIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_descents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.descents.sum\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "matrix",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_2(_self, _anInteger);
    let _answer = [];
    /* Statements */
    _do_2(
      _list,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _row = _List_2(_anInteger, 0);
        /* Statements */
        _atPut_3(_row, _each, 1);
        return _add_2(_answer, _row);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet list = self.list(anInteger);\n\t\tlet answer = [];\n\t\tlist.do { :each |\n\t\t\tlet row = List(anInteger, 0);\n\t\t\trow[each] := 1;\n\t\t\tanswer.add(row)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "matrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrix_2(_self, _degree_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.matrix(self.degree)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIdentity_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_1(_support_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.support.max\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIdentity_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _min_1(_support_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\tInfinity\n\t\t} {\n\t\t\tself.support.min\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "order",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIdentity_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lcm_1(_collect_2(_cycles_1(_self), _size_1));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.cycles.collect(size:/1).lcm\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "permutationOrder",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isIdentity_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lcm_1(_collect_2(_cycles_1(_self), _size_1));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isIdentity.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.cycles.collect(size:/1).lcm\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "orderList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _self;
    let _answer = [_next];
    /* Statements */
    _doWhileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _asterisk_2(_next, _self);
        return _add_2(_answer, _next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isIdentity_1(_next);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet next = self;\n\t\tlet answer = [next];\n\t\t{\n\t\t\tnext := next * self;\n\t\t\tanswer.add(next)\n\t\t}.doWhileFalse {\n\t\t\tnext.isIdentity\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "permutationOrderList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _self;
    let _answer = [_next];
    /* Statements */
    _doWhileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _asterisk_2(_next, _self);
        return _add_2(_answer, _next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isIdentity_1(_next);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet next = self;\n\t\tlet answer = [next];\n\t\t{\n\t\t\tnext := next * self;\n\t\t\tanswer.add(next)\n\t\t}.doWhileFalse {\n\t\t\tnext.isIdentity\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "patternPositions",
  ["self", "pattern"],
  sl.annotateFunction(function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_1(_self);
    let _k = _size_1(_list);
    let _answer = [];
    /* Statements */
    _powerSetDo_2(
      _to_2(1, _k),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _subsequence = _commercialAtAsterisk_2(_list, _each);
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_reducedPermutation_1(_subsequence), _pattern),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "pattern"]),
  "{ :self :pattern |\n\t\tlet list = self.list;\n\t\tlet k = list.size;\n\t\tlet answer = [];\n\t\t1.to(k).powerSetDo { :each |\n\t\t\tlet subsequence = list @* each;\n\t\t\t(subsequence.reducedPermutation = pattern).ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "peaks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _list_1(_self);
    /* Statements */
    return _select_2(
      _to_2(2, _hyphenMinus_2(_size_1(_p), 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _lessThanSign_2(_at_2(_p, _hyphenMinus_2(_i, 1)), _at_2(_p, _i)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(
              _at_2(_p, _i),
              _at_2(_p, _plusSign_2(_i, 1)),
            );
          }, []),
        );
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.list;\n\t\t2.to(p.size - 1).select { :i |\n\t\t\tp[i - 1] < p[i] & {\n\t\t\t\tp[i] > p[i + 1]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "permutationCycles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cycles_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.cycles\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cycles_2(_self, _deepCopy_1(_cycles_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.cycles := self.cycles.deepCopy\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "rank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _rightInversionCount_1(_self);
    let _r = _toBy_3(_degree_1(_self), 1, -1);
    /* Statements */
    return _mixedRadixDecode_2(_c, _r);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.rightInversionCount;\n\t\tlet r = self.degree.toBy(1, -1);\n\t\tc.mixedRadixDecode(r)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "reducedWordsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _isIdentity = true;
      /* Statements */
      _toDo_3(
        1,
        _hyphenMinus_2(_size_1(_p), 1),
        sl.annotateFunction(function (_d) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _d";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e = _plusSign_2(_d, 1);
          /* Statements */
          return _ifTrue_2(
            _greaterThanSign_2(_at_2(_p, _d), _at_2(_p, _e)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _isIdentity = false;
              _swapWith_3(_p, _d, _e);
              _reducedWordsDo_2(
                _asPermutation_1(_p),
                sl.annotateFunction(function (_x) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _x";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _add_2(_x, _d);
                  return _aBlock_1(_x);
                }, ["x"]),
              );
              return _swapWith_3(_p, _d, _e);
            }, []),
          );
        }, ["d"]),
      );
      return _ifTrue_2(
        _isIdentity,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _aBlock_1([]);
        }, []),
      );
    }, ["p"]);
    /* Statements */
    return _f_1(_list_1(_self));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet f = { :p |\n\t\t\tlet isIdentity = true;\n\t\t\t1.toDo(p.size - 1) { :d |\n\t\t\t\tlet e = d + 1;\n\t\t\t\t(p[d] > p[e]).ifTrue {\n\t\t\t\t\tisIdentity := false;\n\t\t\t\t\tp.swapWith(d, e);\n\t\t\t\t\tp.asPermutation.reducedWordsDo { :x |\n\t\t\t\t\t\tx.add(d);\n\t\t\t\t\t\taBlock(x)\n\t\t\t\t\t};\n\t\t\t\t\tp.swapWith(d, e)\n\t\t\t\t}\n\t\t\t};\n\t\t\tisIdentity.ifTrue {\n\t\t\t\taBlock([])\n\t\t\t}\n\t\t};\n\t\tf(self.list)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "reducedWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _reducedWordsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.reducedWordsDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "replace",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aSequence,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _image_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\taSequence.collect { :each |\n\t\t\tself.image(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "rightActionProduct",
  ["self", "aPermutation"],
  sl.annotateFunction(function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _aPermutation);
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation |\n\t\tself * aPermutation\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "rightInversionCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _list_1(_self);
    let _n = _size_1(_list);
    let _answer = _List_1(_n);
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = 0;
        /* Statements */
        _toDo_3(
          _plusSign_2(_i, 1),
          _n,
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_at_2(_list, _k), _at_2(_list, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _c = _plusSign_2(_c, 1);
              }, []),
            );
          }, ["k"]),
        );
        return _atPut_3(_answer, _i, _c);
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.list;\n\t\tlet n = list.size;\n\t\tlet answer = List(n);\n\t\t1.toDo(n) { :i |\n\t\t\tlet c = 0;\n\t\t\t(i + 1).toDo(n) { :k |\n\t\t\t\t(list[k] < list[i]).ifTrue {\n\t\t\t\t\tc := c + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer[i] := c\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "runs",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _orderedSubstrings_2(_list_1(_self), _aBlock_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.list.orderedSubstrings(aBlock:/2)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "runs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _runs_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.runs(<)\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "signature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(-1, _size_1(_inversions_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t-1 ^ self.inversions.size\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "stackSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_stackSort_1(_list_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.list.stackSort.asPermutation\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Permutation(%)", [_storeString_1(_cycles_1(_self))]);
  }, ["self"]),
  "{ :self |\n\t\t'Permutation(%)'.format([self.cycles.storeString])\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "support",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_catenate_1(_cycles_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.cycles.catenate.sort\n\t}",
);

sl.addMethodToExistingType(
  "Permutation",
  "Permutations",
  "twoLineNotation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_iota_1(_degree_1(_self)), _list_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.degree.iota,\n\t\t\tself.list\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "Permutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationCycles_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedCyclesToPermutation_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isPermutationList_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedPermutationListToPermutation_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>Permutation: not permutation");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tself.uncheckedCyclesToPermutation\n\t\t} {\n\t\t\tself.isPermutationList.if {\n\t\t\t\tself.uncheckedPermutationListToPermutation\n\t\t\t} {\n\t\t\t\tself.error('List>>Permutation: not permutation')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "uncheckedCyclesToPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPermutation_0(),
      _if_3(
        _isEmpty_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [];
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _permutationCyclesToCanonicalForm_2(_self, true);
        }, []),
      ),
      _permutationDegree_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tnewPermutation().initializeSlots(\n\t\t\tself.isEmpty.if {\n\t\t\t\t[]\n\t\t\t} {\n\t\t\t\tself.permutationCyclesToCanonicalForm(true)\n\t\t\t},\n\t\t\tself.permutationDegree\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "uncheckedPermutationListToPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPermutation_0(),
      _permutationListToPermutationCycles_2(_self, true),
      _max_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tnewPermutation().initializeSlots(\n\t\t\tself.permutationListToPermutationCycles(true),\n\t\t\tself.max\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "asPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Permutation_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tPermutation(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "cycles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationCycles_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedCyclesToPermutation_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>cycles: not permutation cycles");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tself.uncheckedCyclesToPermutation\n\t\t} {\n\t\t\tself.error('List>>cycles: not permutation cycles')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "derangements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _permutationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _allSatisfy_2(
            _withCollect_3(_self, _each, _exclamationMarkEqualsSign_2),
            _identity_1,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.permutationsDo { :each |\n\t\t\tself.withCollect(each, !=).allSatisfy(identity:/1).ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "findPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_ordering_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.ordering.asPermutation\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "findPermutation",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indices = _collect_2(
      _aSequence,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _indexOf_2(_self, _each);
      }, ["each"]),
    );
    /* Statements */
    return _findPermutation_1(_indices);
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\tlet indices = aSequence.collect { :each |\n\t\t\tself.indexOf(each)\n\t\t};\n\t\tindices.findPermutation\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "heapsAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumChangePermutations_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.minimumChangePermutations\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "inversePermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _inverse_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.inverse\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "inversionVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _inversionVector_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.inversionVector\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "isInvolution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInvolution_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.isInvolution\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "isPermutationCycles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_depth_1(_self), 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _entries = _catenate_1(_self);
            /* Statements */
            return _ampersand_2(
              _allSatisfy_2(
                _entries,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _ampersand_2(
                    _isInteger_1(_each),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _isPositive_1(_each);
                    }, []),
                  );
                }, ["each"]),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isDuplicateFree_2(_entries, _equalsSignEqualsSign_2);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty | {\n\t\t\t(self.depth = 3) & {\n\t\t\t\tlet entries = self.catenate;\n\t\t\t\tentries.allSatisfy { :each |\n\t\t\t\t\teach.isInteger & {\n\t\t\t\t\t\teach.isPositive\n\t\t\t\t\t}\n\t\t\t\t} & {\n\t\t\t\t\tentries.isDuplicateFree(==)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "isPermutationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _ascending = _sorted_1(_self);
        /* Statements */
        return _ampersand_2(
          _isArithmeticProgression_1(_ascending),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_first_1(_ascending), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_last_1(_ascending), _size_1(_self));
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\ttrue\n\t\t} {\n\t\t\tlet ascending = self.sorted;\n\t\t\tascending.isArithmeticProgression & {\n\t\t\t\tascending.first = 1 & {\n\t\t\t\t\tascending.last = self.size\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "isPermutationOf",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_self), _size_1(_aSequence)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_sort_1(_self), _sort_1(_aSequence));
      }, []),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence |\n\t\t(self.size = aSequence.size) & {\n\t\t\tself.sort = aSequence.sort\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "isSuperpermutation",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _permutations_1(_alphabet_1(_p)),
      sl.annotateFunction(function (_q) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesSubstring_2(_p, _q);
      }, ["q"]),
    );
  }, ["p"]),
  "{ :p |\n\t\tp.alphabet.permutations.allSatisfy { :q |\n\t\t\tp.includesSubstring(q)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "leftInversionCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _leftInversionCount_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.leftInversionCount\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "lexicographicPermutations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _lexicographicPermutationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _copy_1(_each));
        return true;
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.lexicographicPermutationsDo { :each |\n\t\t\tanswer.add(each.copy);\n\t\t\ttrue\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "lexicographicPermutationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _sort_1(_copy_1(_self));
    let _next = null;
    let _continue = true;
    /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _continue;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _continue = _aBlock_1(_list);
        return _ifTrue_2(
          _continue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _next = _nextPermutationLexicographic_1(_list);
            return _continue = _isNotNil_1(_next);
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet list = self.copy.sort;\n\t\tlet next = nil;\n\t\tlet continue = true;\n\t\t{\n\t\t\tcontinue\n\t\t}.whileTrue {\n\t\t\tcontinue := aBlock(list);\n\t\t\tcontinue.ifTrue {\n\t\t\t\tnext := list.nextPermutationLexicographic;\n\t\t\t\tcontinue := next.isNotNil\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "majorIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _majorIndex_1(_Permutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPermutation(self).majorIndex\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "minimumChangePermutations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _minimumChangePermutationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.minimumChangePermutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "minimumChangePermutationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _copy_1(_self);
    let _n = _size_1(_a);
    let _c = _List_2(_n, 1);
    let _i = 2;
    let _swap_2 = sl.annotateFunction(function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _at_2(_a, _i);
      /* Statements */
      _atPut_3(_a, _i, _at_2(_a, _j));
      return _atPut_3(_a, _j, _t);
    }, ["i", "j"]);
    /* Statements */
    _aBlock_1(_a);
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_i, _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_at_2(_c, _i), _i),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _if_3(
              _isOdd_1(_i),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _swap_2(1, _i);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _swap_2(_at_2(_c, _i), _i);
              }, []),
            );
            _aBlock_1(_a);
            _atPut_3(_c, _i, _plusSign_2(_at_2(_c, _i), 1));
            return _i = 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_c, _i, 1);
            return _i = _plusSign_2(_i, 1);
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet a = self.copy;\n\t\tlet n = a.size;\n\t\tlet c = List(n, 1);\n\t\tlet i = 2;\n\t\tlet swap = { :i :j |\n\t\t\tlet t = a[i];\n\t\t\ta[i] := a[j];\n\t\t\ta[j] := t\n\t\t};\n\t\taBlock(a);\n\t\t{\n\t\t\ti <= n\n\t\t}.whileTrue {\n\t\t\t(c[i] < i).if {\n\t\t\t\ti.isOdd.if {\n\t\t\t\t\tswap(1, i)\n\t\t\t\t} {\n\t\t\t\t\tswap(c[i], i)\n\t\t\t\t};\n\t\t\t\taBlock(a);\n\t\t\t\tc[i] := c[i] + 1;\n\t\t\t\ti := 2\n\t\t\t} {\n\t\t\t\tc[i] := 1;\n\t\t\t\ti := i + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "nextPermutationLexicographic",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _swap_2 = sl.annotateFunction(function (_i, _j) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _i, _j";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _t = _at_2(_self, _i);
      /* Statements */
      _atPut_3(_self, _i, _at_2(_self, _j));
      return _atPut_3(_self, _j, _t);
    }, ["i", "j"]);
    let _n = _size_1(_self);
    let _k = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_k, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(
              _at_2(_self, _hyphenMinus_2(_k, 1)),
              _at_2(_self, _k),
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
        return _k = _hyphenMinus_2(_k, 1);
      }, []),
    );
    _k = _hyphenMinus_2(_k, 1);
    return _if_3(
      _equalsSign_2(_k, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _n;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(
              _at_2(_self, _l),
              _at_2(_self, _k),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _l = _hyphenMinus_2(_l, 1);
          }, []),
        );
        _swap_2(_k, _l);
        _k = _plusSign_2(_k, 1);
        _l = _n;
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_l, _k);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _swap_2(_k, _l);
            _l = _hyphenMinus_2(_l, 1);
            return _k = _plusSign_2(_k, 1);
          }, []),
        );
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet swap = { :i :j |\n\t\t\tlet t = self[i];\n\t\t\tself[i] := self[j];\n\t\t\tself[j] := t\n\t\t};\n\t\tlet n = self.size;\n\t\tlet k = n;\n\t\t{\n\t\t\tk > 1 & {\n\t\t\t\tself[k - 1] >= self[k]\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tk := k - 1\n\t\t};\n\t\tk := k - 1;\n\t\t(k = 0).if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet l = n;\n\t\t\t{\n\t\t\t\tself[l] <= self[k]\n\t\t\t}.whileTrue {\n\t\t\t\tl := l - 1\n\t\t\t};\n\t\t\tswap(k, l);\n\t\t\tk := k + 1;\n\t\t\tl := n;\n\t\t\t{\n\t\t\t\tl > k\n\t\t\t}.whileTrue {\n\t\t\t\tswap(k, l);\n\t\t\t\tl := l - 1;\n\t\t\t\tk := k + 1\n\t\t\t};\n\t\t\tself\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "nthLexicographicPermutation",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _answer = null;
    /* Statements */
    _lexicographicPermutationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_index, _n),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _answer = _copy_1(_each);
            return false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _plusSign_2(_index, 1);
            return true;
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet index = 1;\n\t\tlet answer = nil;\n\t\tself.lexicographicPermutationsDo { :each |\n\t\t\t(index = n).if {\n\t\t\t\tanswer := each.copy;\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tindex := index + 1;\n\t\t\t\ttrue\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "plainChanges",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _plainChangesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.plainChangesDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "plainChangesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _copy_1(_self);
    let _q = _copy_1(_self);
    let _n = _size_1(_p);
    let _d = _List_2(_n, -1);
    let _move_2 = sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _z = _at_2(_p, _plusSign_2(_at_2(_q, _x), _y));
      /* Statements */
      _atPut_3(_p, _at_2(_q, _x), _z);
      _atPut_3(_p, _plusSign_2(_at_2(_q, _x), _y), _x);
      _atPut_3(_q, _z, _at_2(_q, _x));
      return _atPut_3(_q, _x, _plusSign_2(_at_2(_q, _x), _y));
    }, ["x", "y"]);
    let _perm_1 = sl.annotateFunction(function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_i, _n),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _aBlock_1(_p);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _perm_1(_plusSign_2(_i, 1));
          _timesRepeat_2(
            _hyphenMinus_2(_i, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _move_2(_i, _at_2(_d, _i));
              return _perm_1(_plusSign_2(_i, 1));
            }, []),
          );
          return _atPut_3(_d, _i, _hyphenMinus_2(0, _at_2(_d, _i)));
        }, []),
      );
    }, ["i"]);
    /* Statements */
    return _perm_1(1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet p = self.copy;\n\t\tlet q = self.copy;\n\t\tlet n = p.size;\n\t\tlet d = List(n, -1);\n\t\tlet move = { :x :y |\n\t\t\tlet z = p[q[x] + y];\n\t\t\tp[q[x]] := z;\n\t\t\tp[q[x] + y] := x;\n\t\t\tq[z] := q[x];\n\t\t\tq[x] := q[x] + y\n\t\t};\n\t\tlet perm = { :i |\n\t\t\t(i > n).if {\n\t\t\t\taBlock(p)\n\t\t\t} {\n\t\t\t\tperm(i + 1);\n\t\t\t\t(i - 1).timesRepeat {\n\t\t\t\t\tmove(i, d[i]);\n\t\t\t\t\tperm(i + 1)\n\t\t\t\t};\n\t\t\t\td[i] := 0 - d[i]\n\t\t\t}\n\t\t};\n\t\tperm(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationCycles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cycles_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.cycles\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationCycles",
  ["self", "deleteUnaryCycles"],
  sl.annotateFunction(function (_self, _deleteUnaryCycles) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deleteUnaryCycles";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationListToPermutationCycles_2(_self, _deleteUnaryCycles);
  }, ["self", "deleteUnaryCycles"]),
  "{ :self :deleteUnaryCycles |\n\t\tself.permutationListToPermutationCycles(deleteUnaryCycles)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationCyclesToCanonicalForm",
  ["self", "deleteUnaryCycles"],
  sl.annotateFunction(function (_self, _deleteUnaryCycles) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deleteUnaryCycles";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationListToPermutationCycles_2(
      _permutationCyclesToPermutationList_1(_self),
      _deleteUnaryCycles,
    );
  }, ["self", "deleteUnaryCycles"]),
  "{ :self :deleteUnaryCycles |\n\t\tself\n\t\t.permutationCyclesToPermutationList\n\t\t.permutationListToPermutationCycles(deleteUnaryCycles)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationCyclesToPermutationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationCyclesToPermutationList_2(
      _self,
      _permutationDegree_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.permutationCyclesToPermutationList(\n\t\t\tself.permutationDegree\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationCyclesToPermutationList",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_anInteger, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _iota_1(_anInteger);
        /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _size_1(_each),
              sl.annotateFunction(function (_index) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _index";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _answer,
                  _at_2(_each, _index),
                  _atWrap_2(_each, _plusSign_2(_index, 1)),
                );
              }, ["index"]),
            );
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(anInteger = 0).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = anInteger.iota;\n\t\t\tself.do { :each |\n\t\t\t\t1.toDo(each.size) { :index |\n\t\t\t\t\tanswer[each[index]] := each.atWrap(index + 1)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationDegree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationCycles_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isEmpty_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _max_1(_catenate_1(_self));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isPermutationList_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _max_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              "List>>permutationDegree: not a permutation",
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationCycles.if {\n\t\t\tself.isEmpty.if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tself.catenate.max\n\t\t\t}\n\t\t} {\n\t\t\tself.isPermutationList.if {\n\t\t\t\tself.max\n\t\t\t} {\n\t\t\t\tself.error('List>>permutationDegree: not a permutation')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationHasPattern",
  ["self", "pattern"],
  sl.annotateFunction(function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasPattern_2(_asPermutation_1(_self), _pattern);
  }, ["self", "pattern"]),
  "{ :self :pattern |\n\t\tself.asPermutation.hasPattern(pattern)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationFixedPoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fixedPoints_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.fixedPoints\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _graph_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.graph\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationInversions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _inversions_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.inversions\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationListToPermutationCycle",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_anInteger];
    let _nextItem = _at_2(_self, _anInteger);
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_nextItem, _anInteger);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _nextItem);
        return _nextItem = _at_2(_self, _nextItem);
      }, []),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet answer = [anInteger];\n\t\tlet nextItem = self[anInteger];\n\t\t{\n\t\t\tnextItem = anInteger\n\t\t}.whileFalse {\n\t\t\tanswer.add(nextItem);\n\t\t\tnextItem := self[nextItem]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationListToPermutationCycles",
  ["self", "deleteUnaryCycles"],
  sl.annotateFunction(function (_self, _deleteUnaryCycles) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _deleteUnaryCycles";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _visited = _IdentitySet_0();
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _includes_2(_visited, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _cycle = _permutationListToPermutationCycle_2(_self, _each);
            /* Statements */
            _addAll_2(_visited, _cycle);
            return _add_2(_answer, _cycle);
          }, []),
        );
      }, ["each"]),
    );
    return _if_3(
      _deleteUnaryCycles,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reject_2(
          _answer,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_size_1(_each), 1);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
    );
  }, ["self", "deleteUnaryCycles"]),
  "{ :self :deleteUnaryCycles |\n\t\tlet visited = IdentitySet();\n\t\tlet answer = [];\n\t\t1.toDo(self.size) { :each |\n\t\t\tvisited.includes(each).ifFalse {\n\t\t\t\tlet cycle = self.permutationListToPermutationCycle(each);\n\t\t\t\tvisited.addAll(cycle);\n\t\t\t\tanswer.add(cycle)\n\t\t\t}\n\t\t};\n\t\tdeleteUnaryCycles.if {\n\t\t\tanswer.reject { :each |\n\t\t\t\teach.size = 1\n\t\t\t}\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationList_1(_self),
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
        return _permutationCyclesToPermutationList_2(
          _self,
          _permutationDegree_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationList.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.permutationCyclesToPermutationList(self.permutationDegree)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationList",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _list_2(_asPermutation_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.asPermutation.list(anInteger)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matrix_2(_asPermutation_1(_self), _permutationDegree_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.matrix(self.permutationDegree)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.max\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationMin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.min\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationOrder",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _order_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.order\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationOrderList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _orderList_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.orderList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationPatternPositions",
  ["self", "pattern"],
  sl.annotateFunction(function (_self, _pattern) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pattern";
      throw new Error(errorMessage);
    } /* Statements */
    return _patternPositions_2(_asPermutation_1(_self), _pattern);
  }, ["self", "pattern"]),
  "{ :self :pattern |\n\t\tself.asPermutation.patternPositions(pattern)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationPeaks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _peaks_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.peaks\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationPower",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_anInteger, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asPermutation_1(_iota_1(_permutationDegree_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_asPermutation_1(_self), _anInteger);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(anInteger = 0).if {\n\t\t\tself.permutationDegree.iota.asPermutation\n\t\t} {\n\t\t\tself.asPermutation ^ anInteger\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationProduct",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _entries = _collect_2(_self, _asPermutation_1);
    /* Statements */
    return _if_3(
      _isEmpty_1(_entries),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cycles_1([]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_entries), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _first_1(_entries);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _reduce_2(_entries, _asterisk_2);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet entries = self.collect(asPermutation:/1);\n\t\tentries.isEmpty.if {\n\t\t\t[].cycles\n\t\t} {\n\t\t\t(entries.size = 1).if {\n\t\t\t\tentries.first\n\t\t\t} {\n\t\t\t\tentries.reduce(*)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationRank",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rank_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.rank\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationReplace",
  ["self", "aPermutation"],
  sl.annotateFunction(function (_self, _aPermutation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPermutation";
      throw new Error(errorMessage);
    } /* Statements */
    return _replace_2(_asPermutation_1(_aPermutation), _self);
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation |\n\t\taPermutation.asPermutation.replace(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationRuns",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _runs_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.runs\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationSupport",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _support_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.support\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _permutationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.permutationsDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutations",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectCatenate_2(
      _subsets_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_each), _size);
        }, ["each"]),
      ),
      _permutations_1,
    );
  }, ["self", "size"]),
  "{ :self :size |\n\t\tself.subsets { :each |\n\t\t\teach.size = size\n\t\t}.collectCatenate(permutations:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationsStartingAtDo_3(_copy_1(_self), 1, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.copy.permutationsStartingAtDo(1, aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationsStartingAtDo",
  ["self", "anInteger", "aBlock:/1"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_anInteger, _size_1(_self)),
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
          _equalsSign_2(_anInteger, _size_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              _anInteger,
              _size_1(_self),
              sl.annotateFunction(function (_index) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _index";
                  throw new Error(errorMessage);
                } /* Statements */
                _swapWith_3(_self, _anInteger, _index);
                _permutationsStartingAtDo_3(
                  _self,
                  _plusSign_2(_anInteger, 1),
                  _aBlock_1,
                );
                return _swapWith_3(_self, _anInteger, _index);
              }, ["index"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anInteger", "aBlock:/1"]),
  "{ :self :anInteger :aBlock:/1 |\n\t\t(anInteger > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\t(anInteger = self.size).if {\n\t\t\t\taBlock(self)\n\t\t\t} {\n\t\t\t\tanInteger.toDo(self.size) { :index |\n\t\t\t\t\tself.swapWith(anInteger, index);\n\t\t\t\t\tself.permutationsStartingAtDo(anInteger + 1, aBlock:/1);\n\t\t\t\t\tself.swapWith(anInteger, index)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permutationSymbol",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationList_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(
          -1,
          _size_1(_permutationInversions_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationList.if {\n\t\t\t-1 ^ self.permutationInversions.size\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "permute",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _apply_2(_asPermutation_1(_anObject), _self);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.asPermutation.apply(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "reducedPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sequence = _sorted_1(_self);
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _indexOf_2(_sequence, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet sequence = self.sorted;\n\t\tself.collect { :each |\n\t\t\tsequence.indexOf(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "rightInversionCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rightInversionCount_1(_asPermutation_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPermutation.rightInversionCount\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "rightInversionCountToPermutationList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _iota_1(_size_1(_self));
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAt_2(_list, _plusSign_2(_each, 1));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.size.iota;\n\t\tself.collect { :each |\n\t\t\tlist.removeAt(each + 1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "rightInversionCountToPermutation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPermutation_1(_rightInversionCountToPermutationList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rightInversionCountToPermutationList.asPermutation\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "signature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPermutationList_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _signature_1(_asPermutation_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isPermutationList.if {\n\t\t\tself.asPermutation.signature\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "stackSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stack = _Stack_0();
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _peek_1(_stack);
            /* Statements */
            return _ampersand_2(
              _exclamationMarkEqualsSign_2(_n, null),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSign_2(_x, _n);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _pop_1(_stack));
          }, []),
        );
        return _push_2(_stack, _x);
      }, ["x"]),
    );
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_stack);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _pop_1(_stack));
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet stack = Stack();\n\t\tlet answer = [];\n\t\tself.do { :x |\n\t\t\t{\n\t\t\t\tlet n = stack.peek;\n\t\t\t\tn != nil & {\n\t\t\t\t\tx > n\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tanswer.add(stack.pop)\n\t\t\t};\n\t\t\tstack.push(x)\n\t\t};\n\t\t{\n\t\t\tstack.isEmpty\n\t\t}.whileFalse {\n\t\t\tanswer.add(stack.pop)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@ArithmeticProgression",
  "Permutations",
  "permutationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _permutationsDo_2(_asList_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.asList.permutationsDo(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "bitReversalPermutation",
  ["k"],
  sl.annotateFunction(function (_k) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _circumflexAccent_2(2, _k);
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _fromDigits_2(_reverse_1(_integerDigits_3(_i, 2, _k)), 2),
          1,
        );
      }, ["i"]),
    );
  }, ["k"]),
  "{ :k |\n\t\tlet n = 2 ^ k;\n\t\t0.to(n - 1).collect { :i |\n\t\t\ti.integerDigits(2, k).reverse.fromDigits(2) + 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "heapsAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _heapsAlgorithm_1(_iota_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.iota.heapsAlgorithm\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "minimumChangePermutations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumChangePermutations_1(_iota_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.iota.minimumChangePermutations\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "plainChanges",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Integer>>plainChanges: n < 1");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plainChanges_1(_iota_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 1).if {\n\t\t\tself.error('@Integer>>plainChanges: n < 1')\n\t\t} {\n\t\t\tself.iota.plainChanges\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "reversalPermutation",
  ["n", "b"],
  sl.annotateFunction(function (_n, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _asList_1(
        _nonemptyRange_3(0, _hyphenMinus_2(_circumflexAccent_2(_b, _n), 1), 1),
      ),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_integerReverse_3(_i, _b, _n), 1);
      }, ["i"]),
    );
  }, ["n", "b"]),
  "{ :n :b |\n\t\t[0 .. b ^ n - 1].collect { :i |\n\t\t\ti.integerReverse(b, n) + 1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "steinhausJohnsonTrotterDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _plainChangesDo_2(_self, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.plainChangesDo(aBlock:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "steinhausJohnsonTrotter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plainChanges_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.plainChanges\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Permutations",
  "unrankPermutation",
  ["rank", "degree"],
  sl.annotateFunction(function (_rank, _degree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _rank, _degree";
      throw new Error(errorMessage);
    } /* Statements */
    return _rightInversionCountToPermutation_1(
      _mixedRadixEncode_2(_rank, _toBy_3(_degree, 1, -1)),
    );
  }, ["rank", "degree"]),
  "{ :rank :degree |\n\t\trank.mixedRadixEncode(\n\t\t\tdegree.toBy(1, -1)\n\t\t).rightInversionCountToPermutation\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "multisetPermutationsDoLink",
  ["self", "visit:/1"],
  sl.annotateFunction(function (_self, _visit_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _visit_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _l = _LinkedList_1(_sorted_2(_self, _verticalLineGreaterThanSign_2));
    let _h = _firstLink_1(_l);
    let _i = _linkAt_2(_l, _hyphenMinus_2(_n, 1));
    let _j = _lastLink_1(_l);
    /* Statements */
    _visit_1(_h);
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _isNotNil_1(_nextLink_1(_j)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_value_1(_j), _value_1(_h));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _s = _if_3(
          _ampersand_2(
            _isNotNil_1(_nextLink_1(_j)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(
                _value_1(_i),
                _value_1(_nextLink_1(_j)),
              );
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i;
          }, []),
        );
        let _t = _nextLink_1(_s);
        /* Statements */
        _nextLink_2(_s, _nextLink_1(_t));
        _nextLink_2(_t, _h);
        _ifTrue_2(
          _lessThanSign_2(_value_1(_t), _value_1(_h)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _i = _t;
          }, []),
        );
        _j = _nextLink_1(_i);
        _h = _t;
        return _visit_1(_h);
      }, []),
    );
  }, ["self", "visit:/1"]),
  "{ :self :visit:/1 |\n\t\tlet n = self.size;\n\t\tlet l = LinkedList(self.sorted(|>));\n\t\tlet h = l.firstLink;\n\t\tlet i = l.linkAt(n - 1);\n\t\tlet j = l.lastLink;\n\t\tvisit(h);\n\t\t{\n\t\t\tj.nextLink.isNotNil | {\n\t\t\t\tj.value < h.value\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tlet s = (\n\t\t\t\tj.nextLink.isNotNil & {\n\t\t\t\t\ti.value >= j.nextLink.value\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tj\n\t\t\t} {\n\t\t\t\ti\n\t\t\t};\n\t\t\tlet t = s.nextLink;\n\t\t\ts.nextLink := t.nextLink;\n\t\t\tt.nextLink := h;\n\t\t\t(t.value < h.value).ifTrue {\n\t\t\t\ti := t\n\t\t\t};\n\t\t\tj := i.nextLink;\n\t\t\th := t;\n\t\t\tvisit(h)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "multisetPermutationsDo",
  ["self", "visit:/1"],
  sl.annotateFunction(function (_self, _visit_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _visit_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _multisetPermutationsDoLink_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _visit_1(_asList_1(_each));
      }, ["each"]),
    );
  }, ["self", "visit:/1"]),
  "{ :self :visit:/1 |\n\t\tself.multisetPermutationsDoLink { :each |\n\t\t\tvisit(each.asList)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Permutations",
  "multisetPermutations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _multisetPermutationsDoLink_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _asList_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.multisetPermutationsDoLink { :each |\n\t\t\tanswer.add(each.asList)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Permutations",
  "mahonianNumber",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_n, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_k, 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_n, -1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _solidus_2(_asterisk_2(_n, _hyphenMinus_2(_n, 1)), 2);
            /* Statements */
            return _if_3(
              _ampersand_2(
                _greaterThanSignEqualsSign_2(_k, 0),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _lessThanSignEqualsSign_2(_k, _m);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _a = _mahonianNumber_2(_n, _hyphenMinus_2(_k, 1));
                let _b = _mahonianNumber_2(_hyphenMinus_2(_n, 1), _k);
                let _c = _mahonianNumber_2(
                  _hyphenMinus_2(_n, 1),
                  _hyphenMinus_2(_k, _n),
                );
                /* Statements */
                return _hyphenMinus_2(_plusSign_2(_a, _b), _c);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 0;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t(n = 0 & { k = 0 }).if {\n\t\t\t1\n\t\t} {\n\t\t\t(n = -1).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet m = n * (n - 1) / 2;\n\t\t\t\t(k >= 0 & { k <= m }).if {\n\t\t\t\t\tlet a = mahonianNumber(n, k - 1);\n\t\t\t\t\tlet b = mahonianNumber(n - 1, k);\n\t\t\t\t\tlet c = mahonianNumber(n - 1, k - n);\n\t\t\t\t\ta + b - c\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);
