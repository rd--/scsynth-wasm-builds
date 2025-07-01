sl.addType(
  false,
  "Permutation",
  "Permutations",
  ["Object"],
  ["cycles", "degree"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Permutation",
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
        return _equalsSign_2(_cycles_1(_self), _cycles_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isPermutation(anObject), { =(cycles(self), cycles(anObject)) }) }",
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
      _ordering_1(
        _apply_2(
          _aPermutation,
          _apply_2(_self, _asList_1(_upOrDownTo_2(1, _length))),
        ),
      ),
    );
  }, ["self", "aPermutation"]),
  "{ :self :aPermutation | let length = max(degree(self),degree(aPermutation)); asPermutation(ordering(apply(aPermutation,apply(self,asList(upOrDownTo(1, length)))))) }",
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
        return _circumflexAccent_2(_inverse_1(_self), _negated_1(_anInteger));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(_numberSign_2(_self, _anInteger));
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | if(isNegative(anInteger), { ^(inverse(self), negated(anInteger)) }, { product((#(self, anInteger))) }) }",
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
  "{ :self :aSequence | let length = size(aSequence); if(isIdentity(self), { aSequence }, { let answer = List(length); let indices = list(self,length); toDo(1, length, { :i | atPut(answer, at(indices, i), at(aSequence, i)) }); answer }) }",
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
  "{ :self :aBlock:/2 | let p = list(self); let k = size(p); let answer = []; toDo(1, -(k, 1), { :i | ifTrue(aBlock(at(p, i), at(p, +(i, 1))), { add(answer,i) }) }); answer }",
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
  "{ :self | ascents(self,<) }",
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
  "{ :self | self }",
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
  "{ :self | runs(self,>) }",
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
  "{ :self | ascents(self,>) }",
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
        _upOrDownTo_2(1, _degree_1(_self)),
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
  "{ :self | asMap(collect(upOrDownTo(1, degree(self)), { :i | ->(i, image(self,i)) })) }",
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
  "{ :self | let support = asIdentitySet(support(self)); let answer = []; toDo(1, degree(self), { :each | ifFalse(includes(support,each), { add(answer,each) }) }); answer }",
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
    let _v = _asList_1(_upOrDownTo_2(1, _degree_1(_self)));
    /* Statements */
    return _Graph_2(_v, _e);
  }, ["self"]),
  "{ :self | let l = list(self); let i = inversions(self); let e = collect(i, { :each | @*(l, each) }); let v = asList(upOrDownTo(1, degree(self))); Graph(v, e) }",
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
  "{ :self :pattern | valueWithReturn({ :return:/1 | let list = list(self); subsequencesDo(list, { :each | ifTrue((=(reducedPermutation(each), pattern)), { return(true) }) }); false }) }",
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
  "{ :self :anInteger | valueWithReturn({ :return:/1 | do(cycles(self), { :each | let i = indexOf(each,anInteger); ifTrue((>(i, 0)), { return(atWrap(each,+(i, 1))) }) }); anInteger }) }",
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
          return _reversed_1(_each);
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self | cycles(collect(cycles(self), { :each | reversed(each) })) }",
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
  "{ :self | let list = list(self); let n = size(list); let answer = List(n); toDo(1, n, { :i | let j = indexOf(list,i); let c = 0; toDo(1, j, { :k | ifTrue((>(at(list, k), i)), { c := +(c, 1) }) }); atPut(answer, i, c) }); answer }",
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
  "{ :self | let list = list(self); let answer = []; toDo(1, size(list), { :j | let e = at(list, j); toDo(1, -(j, 1), { :i | ifTrue((>(at(list, i), e)), { add(answer,[i, j]) }) }) }); answer }",
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
  "{ :self | =(size(support(self)), degree(self)) }",
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
  "{ :self | isEmpty(cycles(self)) }",
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
  "{ :self | allSatisfy(cycles(self), { :each | <=(size(each), 2) }) }",
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
  "{ :self :aPermutation | *(aPermutation, self) }",
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
  "{ :self | let list = list(self); let n = size(list); let answer = List(n); toDo(1, n, { :i | let c = 0; toDo(1, i, { :k | ifTrue((>(at(list, k), at(list, i))), { c := +(c, 1) }) }); atPut(answer, i, c) }); answer }",
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
  "{ :self | size(support(self)) }",
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
  "{ :self | list(self,degree(self)) }",
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
  "{ :self :anInteger | permutationCyclesToPermutationList(cycles(self),anInteger) }",
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
  "{ :self | sum(descents(self)) }",
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
  "{ :self :anInteger | let list = list(self,anInteger); let answer = []; do(list, { :each | let row = List(anInteger, 0); atPut(row, each, 1); add(answer,row) }); answer }",
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
  "{ :self | matrix(self,degree(self)) }",
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
  "{ :self | if(isIdentity(self), { 0 }, { max(support(self)) }) }",
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
  "{ :self | if(isIdentity(self), { Infinity }, { min(support(self)) }) }",
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
  "{ :self | if(isIdentity(self), { 1 }, { lcm(collect(cycles(self),size:/1)) }) }",
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
    let _answer = [];
    let _next = _self;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isIdentity_1(_next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _next = _asterisk_2(_next, _self);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; let next = self; whileFalse({ isIdentity(next) }, { add(answer,next); next := *(next, self) }); answer }",
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
      _asList_1(_upOrDownTo_2(1, _k)),
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
  "{ :self :pattern | let list = list(self); let k = size(list); let answer = []; powerSetDo(asList(upOrDownTo(1, k)), { :each | let subsequence = @*(list, each); ifTrue((=(reducedPermutation(subsequence), pattern)), { add(answer,each) }) }); answer }",
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
  "{ :self | let p = list(self); select(to(2,-(size(p), 1)), { :i | &(<(at(p, -(i, 1)), at(p, i)), { >(at(p, i), at(p, +(i, 1))) }) }) }",
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
    return _cycles_2(_self, _copy_1(_cycles_1(_self)));
  }, ["self"]),
  "{ :self | cycles(self, copy(cycles(self))) }",
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
    let _r = _asList_1(_upOrDownTo_2(_degree_1(_self), 1));
    /* Statements */
    return _mixedRadixDecode_2(_c, _r);
  }, ["self"]),
  "{ :self | let c = rightInversionCount(self); let r = asList(upOrDownTo(degree(self), 1)); mixedRadixDecode(c,r) }",
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
  "{ :self :aBlock:/1 | let f = { :p | let isIdentity = true; toDo(1, -(size(p), 1), { :d | let e = +(d, 1); ifTrue((>(at(p, d), at(p, e))), { isIdentity := false; swapWith(p,d, e); reducedWordsDo(asPermutation(p), { :x | add(x,d); aBlock(x) }); swapWith(p,d, e) }) }); ifTrue(isIdentity, { aBlock([]) }) }; f(list(self)) }",
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
  "{ :self | let answer = []; reducedWordsDo(self, { :each | add(answer,each) }); answer }",
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
  "{ :self :aSequence | collect(aSequence, { :each | image(self,each) }) }",
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
  "{ :self :aPermutation | *(self, aPermutation) }",
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
  "{ :self | let list = list(self); let n = size(list); let answer = List(n); toDo(1, n, { :i | let c = 0; toDo((+(i, 1)), n, { :k | ifTrue((<(at(list, k), at(list, i))), { c := +(c, 1) }) }); atPut(answer, i, c) }); answer }",
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
  "{ :self :aBlock:/2 | orderedSubstrings(list(self),aBlock:/2) }",
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
  "{ :self | runs(self,<) }",
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
  "{ :self | ^(-1, size(inversions(self))) }",
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
  "{ :self | asPermutation(stackSort(list(self))) }",
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
    return _plusSignPlusSign_2(_storeString_1(_cycles_1(_self)), ".cycles");
  }, ["self"]),
  "{ :self | ++(storeString(cycles(self)), '.cycles') }",
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
  "{ :self | sort(catenate(cycles(self))) }",
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
    return [_asList_1(_upOrDownTo_2(1, _degree_1(_self))), _list_1(_self)];
  }, ["self"]),
  "{ :self | [asList(upOrDownTo(1, degree(self))), list(self)] }",
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
    return _if_3(
      _isPermutationCycles_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cycles_1(_self);
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
            return _initializeSlots_3(
              _newPermutation_0(),
              _permutationListToPermutationCycles_2(_self, true),
              _max_1(_self),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>asPermutation: not permutation");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isPermutationCycles(self), { cycles(self) }, { if(isPermutationList(self), { initializeSlots(newPermutation(),permutationListToPermutationCycles(self,true), max(self)) }, { error(self,'List>>asPermutation: not permutation') }) }) }",
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
  "{ :self | if(isPermutationCycles(self), { initializeSlots(newPermutation(),if(isEmpty(self), { [] }, { permutationCyclesToCanonicalForm(self,true) }), permutationDegree(self)) }, { error(self,'List>>cycles: not permutation cycles') }) }",
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
            _withCollect_3(_self, _each, _tildeEqualsSign_2),
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
  "{ :self | let answer = []; permutationsDo(self, { :each | ifTrue(allSatisfy(withCollect(self,each, ~=),identity:/1), { add(answer,copy(each)) }) }); answer }",
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
  "{ :self | asPermutation(ordering(self)) }",
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
  "{ :self :aSequence | let indices = collect(aSequence, { :each | indexOf(self,each) }); findPermutation(indices) }",
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
  "{ :self | minimumChangePermutations(self) }",
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
  "{ :self | inverse(asPermutation(self)) }",
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
  "{ :self | inversionVector(asPermutation(self)) }",
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
  "{ :self | isInvolution(asPermutation(self)) }",
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
  "{ :self | |(isEmpty(self), { &((=(depth(self), 3)), { let entries = catenate(self); &(allSatisfy(entries, { :each | &(isInteger(each), { isPositive(each) }) }), { isDuplicateFree(entries,==) }) }) }) }",
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
  "{ :self | if(isEmpty(self), { true }, { let ascending = sorted(self); &(isArithmeticProgression(ascending), { &(=(first(ascending), 1), { =(last(ascending), size(self)) }) }) }) }",
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
  "{ :self :aSequence | &((=(size(self), size(aSequence))), { =(sort(self), sort(aSequence)) }) }",
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
  "{ :self | leftInversionCount(asPermutation(self)) }",
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
  "{ :self | let answer = []; lexicographicPermutationsDo(self, { :each | add(answer,copy(each)); true }); answer }",
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
            return _continue = _notNil_1(_next);
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let list = sort(copy(self)); let next = nil; let continue = true; whileTrue({ continue }, { continue := aBlock(list); ifTrue(continue, { next := nextPermutationLexicographic(list); continue := notNil(next) }) }) }",
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
  "{ :self | let answer = []; minimumChangePermutationsDo(self, { :each | add(answer,copy(each)) }); answer }",
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
  "{ :self :aBlock:/1 | let a = copy(self); let n = size(a); let c = List(n, 1); let i = 2; let swap = { :i :j | let t = at(a, i); atPut(a, i, at(a, j)); atPut(a, j, t) }; aBlock(a); whileTrue({ <=(i, n) }, { if((<(at(c, i), i)), { if(isOdd(i), { swap(1, i) }, { swap(at(c, i), i) }); aBlock(a); atPut(c, i, +(at(c, i), 1)); i := 2 }, { atPut(c, i, 1); i := +(i, 1) }) }) }",
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
  "{ :self | let swap = { :i :j | let t = at(self, i); atPut(self, i, at(self, j)); atPut(self, j, t) }; let n = size(self); let k = n; whileTrue({ &(>(k, 1), { >=(at(self, -(k, 1)), at(self, k)) }) }, { k := -(k, 1) }); k := -(k, 1); if((=(k, 0)), { nil }, { let l = n; whileTrue({ <=(at(self, l), at(self, k)) }, { l := -(l, 1) }); swap(k, l); k := +(k, 1); l := n; whileTrue({ >(l, k) }, { swap(k, l); l := -(l, 1); k := +(k, 1) }); self }) }",
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
  "{ :self :n | let index = 1; let answer = nil; lexicographicPermutationsDo(self, { :each | if((=(index, n)), { answer := copy(each); false }, { index := +(index, 1); true }) }); answer }",
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
  "{ :self | let answer = []; plainChangesDo(self, { :each | add(answer,copy(each)) }); answer }",
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
  "{ :self :aBlock:/1 | let p = copy(self); let q = copy(self); let n = size(p); let d = List(n, -1); let move = { :x :y | let z = at(p, +(at(q, x), y)); atPut(p, at(q, x), z); atPut(p, +(at(q, x), y), x); atPut(q, z, at(q, x)); atPut(q, x, +(at(q, x), y)) }; let perm = { :i | if((>(i, n)), { aBlock(p) }, { perm(+(i, 1)); timesRepeat((-(i, 1)), { move(i, at(d, i)); perm(+(i, 1)) }); atPut(d, i, -(0, at(d, i))) }) }; perm(1) }",
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
  "{ :self | cycles(asPermutation(self)) }",
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
    } /* Temporaries */
    let _list = _permutationCyclesToPermutationList_1(_self);
    /* Statements */
    return _permutationListToPermutationCycles_2(_list, _deleteUnaryCycles);
  }, ["self", "deleteUnaryCycles"]),
  "{ :self :deleteUnaryCycles | let list = permutationCyclesToPermutationList(self); permutationListToPermutationCycles(list,deleteUnaryCycles) }",
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
  "{ :self | permutationCyclesToPermutationList(self,permutationDegree(self)) }",
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
        let _answer = _asList_1(_upOrDownTo_2(1, _anInteger));
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
  "{ :self :anInteger | if((=(anInteger, 0)), { [] }, { let answer = asList(upOrDownTo(1, anInteger)); do(self, { :each | toDo(1, size(each), { :index | atPut(answer, at(each, index), atWrap(each,+(index, 1))) }) }); answer }) }",
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
  "{ :self | if(isPermutationCycles(self), { if(isEmpty(self), { 0 }, { max(catenate(self)) }) }, { if(isPermutationList(self), { max(self) }, { error(self,'List>>permutationDegree: not a permutation') }) }) }",
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
  "{ :self :pattern | hasPattern(asPermutation(self),pattern) }",
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
  "{ :self | fixedPoints(asPermutation(self)) }",
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
  "{ :self | graph(asPermutation(self)) }",
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
  "{ :self | inversions(asPermutation(self)) }",
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
  "{ :self :anInteger | let answer = [anInteger]; let nextItem = at(self, anInteger); whileFalse({ =(nextItem, anInteger) }, { add(answer,nextItem); nextItem := at(self, nextItem) }); answer }",
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
  "{ :self :deleteUnaryCycles | let visited = IdentitySet(); let answer = []; toDo(1, size(self), { :each | ifFalse(includes(visited,each), { let cycle = permutationListToPermutationCycle(self,each); addAll(visited,cycle); add(answer,cycle) }) }); if(deleteUnaryCycles, { reject(answer, { :each | =(size(each), 1) }) }, { answer }) }",
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
  "{ :self | if(isPermutationList(self), { self }, { permutationCyclesToPermutationList(self,permutationDegree(self)) }) }",
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
  "{ :self :anInteger | list(asPermutation(self),anInteger) }",
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
  "{ :self | matrix(asPermutation(self),permutationDegree(self)) }",
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
  "{ :self | max(asPermutation(self)) }",
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
  "{ :self | min(asPermutation(self)) }",
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
  "{ :self | order(asPermutation(self)) }",
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
  "{ :self :pattern | patternPositions(asPermutation(self),pattern) }",
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
  "{ :self | peaks(asPermutation(self)) }",
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
        return _asPermutation_1(
          _asList_1(_upOrDownTo_2(1, _permutationDegree_1(_self))),
        );
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
  "{ :self :anInteger | if((=(anInteger, 0)), { asPermutation(asList(upOrDownTo(1, permutationDegree(self)))) }, { ^(asPermutation(self), anInteger) }) }",
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
  "{ :self | let entries = collect(self,asPermutation:/1); if(isEmpty(entries), { cycles([]) }, { if((=(size(entries), 1)), { first(entries) }, { reduce(entries,*) }) }) }",
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
  "{ :self | rank(asPermutation(self)) }",
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
  "{ :self :aPermutation | replace(asPermutation(aPermutation),self) }",
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
  "{ :self | runs(asPermutation(self)) }",
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
  "{ :self | support(asPermutation(self)) }",
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
  "{ :self | let answer = []; permutationsDo(self, { :each | add(answer,copy(each)) }); answer }",
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
  "{ :self :size | collectCatenate(subsets(self, { :each | =(size(each), size) }),permutations:/1) }",
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
  "{ :self :aBlock:/1 | permutationsStartingAtDo(copy(self),1, aBlock:/1) }",
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
  "{ :self :anInteger :aBlock:/1 | if((>(anInteger, size(self))), { self }, { if((=(anInteger, size(self))), { aBlock(self) }, { toDo(anInteger, size(self), { :index | swapWith(self,anInteger, index); permutationsStartingAtDo(self,+(anInteger, 1), aBlock:/1); swapWith(self,anInteger, index) }) }) }) }",
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
  "{ :self | if(isPermutationList(self), { ^(-1, size(permutationInversions(self))) }, { 0 }) }",
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
  "{ :self :anObject | apply(asPermutation(anObject),self) }",
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
  "{ :self | let sequence = sorted(self); collect(self, { :each | indexOf(sequence,each) }) }",
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
  "{ :self | rightInversionCount(asPermutation(self)) }",
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
    let _list = _asList_1(_upOrDownTo_2(1, _size_1(_self)));
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
  "{ :self | let list = asList(upOrDownTo(1, size(self))); collect(self, { :each | removeAt(list,+(each, 1)) }) }",
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
  "{ :self | asPermutation(rightInversionCountToPermutationList(self)) }",
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
  "{ :self | if(isPermutationList(self), { signature(asPermutation(self)) }, { 0 }) }",
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
              _tildeEqualsSign_2(_n, null),
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
  "{ :self | let stack = Stack(); let answer = []; do(self, { :x | whileTrue({ let n = peek(stack); &(~=(n, nil), { >(x, n) }) }, { add(answer,pop(stack)) }); push(stack,x) }); whileFalse({ isEmpty(stack) }, { add(answer,pop(stack)) }); answer }",
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
  "{ :self :aBlock:/1 | permutationsDo(asList(self),aBlock:/1) }",
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
      _upOrDownTo_2(0, _hyphenMinus_2(_n, 1)),
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
  "{ :k | let n = ^(2, k); collect(upOrDownTo(0, -(n, 1)), { :i | +(fromDigits(reverse(integerDigits(i,2, k)),2), 1) }) }",
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
    return _heapsAlgorithm_1(_asList_1(_upOrDownTo_2(1, _self)));
  }, ["self"]),
  "{ :self | heapsAlgorithm(asList(upOrDownTo(1, self))) }",
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
    return _minimumChangePermutations_1(_asList_1(_upOrDownTo_2(1, _self)));
  }, ["self"]),
  "{ :self | minimumChangePermutations(asList(upOrDownTo(1, self))) }",
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
        return _plainChanges_1(_asList_1(_upOrDownTo_2(1, _self)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if((<(self, 1)), { error(self,'@Integer>>plainChanges: n < 1') }, { plainChanges(asList(upOrDownTo(1, self))) }) }",
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
  "{ :self :aBlock:/1 | plainChangesDo(self,aBlock:/1) }",
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
  "{ :self | plainChanges(self) }",
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
      _mixedRadixEncode_2(_rank, _asList_1(_upOrDownTo_2(_degree, 1))),
    );
  }, ["rank", "degree"]),
  "{ :rank :degree | rightInversionCountToPermutation(mixedRadixEncode(rank,asList(upOrDownTo(degree, 1)))) }",
);
