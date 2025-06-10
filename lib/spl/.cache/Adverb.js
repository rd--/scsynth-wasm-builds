sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "atop",
  ["self:/2", "aBlock:/1"],
  sl.annotateFunction(function (_self_2, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_anObject, _anotherObject) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _anObject, _anotherObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_self_2(_anObject, _anotherObject));
    }, ["anObject", "anotherObject"]);
  }, ["self:/2", "aBlock:/1"]),
  "{ :self:/2 :aBlock:/1 | { :anObject :anotherObject | aBlock(self(anObject, anotherObject)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "bind",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _bindLeft_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | bindLeft(self,anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "bindLeft",
  ["self:/2", "anObject"],
  sl.annotateFunction(function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_2(_anObject, _each);
    }, ["each"]);
  }, ["self:/2", "anObject"]),
  "{ :self:/2 :anObject | { :each | self(anObject, each) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "bindRight",
  ["self:/2", "anObject"],
  sl.annotateFunction(function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_2(_each, _anObject);
    }, ["each"]);
  }, ["self:/2", "anObject"]),
  "{ :self:/2 :anObject | { :each | self(each, anObject) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "compose",
  ["self:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _composeLeft_2(_self_1, _aBlock_1);
  }, ["self:/1", "aBlock:/1"]),
  "{ :self:/1 :aBlock:/1 | composeLeft(self:/1,aBlock:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "composeLeft",
  ["self:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_anObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(_aBlock_1(_anObject));
    }, ["anObject"]);
  }, ["self:/1", "aBlock:/1"]),
  "{ :self:/1 :aBlock:/1 | { :anObject | self(aBlock(anObject)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "composeRight",
  ["self:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_anObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_self_1(_anObject));
    }, ["anObject"]);
  }, ["self:/1", "aBlock:/1"]),
  "{ :self:/1 :aBlock:/1 | { :anObject | aBlock(self(anObject)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "e",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectEqual_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectEqual(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "each",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_numArgs_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_aCollection) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _aCollection";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_aCollection, _self);
        }, ["aCollection"]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_alpha, _beta) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _alpha, _beta";
            throw new Error(errorMessage);
          } /* Statements */
          return _withCollect_3(_alpha, _nest_1(_beta), _self);
        }, ["alpha", "beta"]);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(numArgs(self), 1)), { { :aCollection | collect(aCollection,self) } }, { { :alpha :beta | withCollect(alpha,nest(beta), self) } }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "f",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectFolding_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectFolding(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "inner",
  ["self:/2", "aBlock:/2"],
  sl.annotateFunction(function (_self_2, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        throw new Error(errorMessage);
      } /* Statements */
      return _inner_4(_self_2, _p, _q, _aBlock_2);
    }, ["p", "q"]);
  }, ["self:/2", "aBlock:/2"]),
  "{ :self:/2 :aBlock:/2 | { :p :q | inner(self:/2,p, q, aBlock:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "map",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollect_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollect(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "outer",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isMatrix_1(_u),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL1 = _assertIsOfSize_2(_shape_1(_u), 2);
          let _m = _at_2(__SPL1, 1);
          let _n = _at_2(__SPL1, 2);
          /* Statements */
          return _table_3(
            sl.annotateFunction(function (_i, _j) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _i, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(_at_2(_at_2(_u, _i), _j), _v);
            }, ["i", "j"]),
            _Span_3(1, _m, 1),
            _Span_3(1, _n, 1),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _u,
            sl.annotateFunction(function (_alpha) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _alpha";
                throw new Error(errorMessage);
              } /* Statements */
              return _collect_2(
                _v,
                sl.annotateFunction(function (_beta) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _beta";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _self_2(_alpha, _beta);
                }, ["beta"]),
              );
            }, ["alpha"]),
          );
        }, []),
      );
    }, ["u", "v"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :u :v | if(isMatrix(u), { let __SPL1 = assertIsOfSize(shape(u), 2); let m = at(__SPL1, 1); let n = at(__SPL1, 2); table({ :i :j | *(at(at(u, i), j), v) },Span(1, m, 1), Span(1, n, 1)) }, { collect(u, { :alpha | collect(v, { :beta | self(alpha, beta) }) }) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "over",
  ["f:/2", "g:/1"],
  sl.annotateFunction(function (_f_2, _g_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f_2, _g_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        throw new Error(errorMessage);
      } /* Statements */
      return _f_2(_g_1(_p), _g_1(_q));
    }, ["p", "q"]);
  }, ["f:/2", "g:/1"]),
  "{ :f:/2 :g:/1 | { :p :q | f(g(p), g(q)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "power",
  ["self:/1", "count"],
  sl.annotateFunction(function (_self_1, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _count";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      _timesRepeat_2(
        _count,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _each = _self_1(_each);
        }, []),
      );
      return _each;
    }, ["each"]);
  }, ["self:/1", "count"]),
  "{ :self:/1 :count | { :each | timesRepeat(count, { each := self(each) }); each } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "s",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectTruncating_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectTruncating(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "self",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_2(_each, _each);
    }, ["each"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :each | self(each, each) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "swap",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _tildeEqualsSign_2(_numArgs_1(_self_2), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Block>>swap: not two argument block");
      }, []),
    );
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_2(_beta, _alpha);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | ifTrue((~=(numArgs(self:/2), 2)), { error('Block>>swap: not two argument block') }); { :alpha :beta | self(beta, alpha) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "t",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectTable_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectTable(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "w",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectWrapping_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectWrapping(alpha,beta, self:/2) } }",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "Adverb",
  "x",
  ["self:/2"],
  sl.annotateFunction(function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollectCrossed_3(_alpha, _beta, _self_2);
    }, ["alpha", "beta"]);
  }, ["self:/2"]),
  "{ :self:/2 | { :alpha :beta | withCollectCrossed(alpha,beta, self:/2) } }",
);
