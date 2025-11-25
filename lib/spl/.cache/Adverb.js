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
  "{ :self:/2 :aBlock:/1 |\n\t\t{ :anObject :anotherObject |\n\t\t\taBlock(self(anObject, anotherObject))\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.bindLeft(anObject)\n\t}",
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
  "{ :self:/2 :anObject |\n\t\t{ :each |\n\t\t\tself(anObject, each)\n\t\t}\n\t}",
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
  "{ :self:/2 :anObject |\n\t\t{ :each |\n\t\t\tself(each, anObject)\n\t\t}\n\t}",
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
  "{ :self:/1 :aBlock:/1 |\n\t\tself:/1.composeLeft(aBlock:/1)\n\t}",
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
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :anObject |\n\t\t\tself(aBlock(anObject))\n\t\t}\n\t}",
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
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :anObject |\n\t\t\taBlock(self(anObject))\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectEqual(beta, self:/2)\n\t\t}\n\t}",
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
  "{ :self |\n\t\t(self.numArgs = 1).if {\n\t\t\t{ :aCollection |\n\t\t\t\taCollection.collect(self)\n\t\t\t}\n\t\t} {\n\t\t\t{ :alpha :beta |\n\t\t\t\talpha.withCollect(beta.nest, self)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectFolding(beta, self:/2)\n\t\t}\n\t}",
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
  "{ :self:/2 :aBlock:/2 |\n\t\t{ :p :q |\n\t\t\tself:/2.inner(p, q, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollect(beta, self:/2)\n\t\t}\n\t}",
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
          let __SplVar1 = _assertIsOfSize_2(_shape_1(_u), 2);
          let _m = _at_2(__SplVar1, 1);
          let _n = _at_2(__SplVar1, 2);
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
            _to_2(1, _m),
            _to_2(1, _n),
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
  "{ :self:/2 |\n\t\t{ :u :v |\n\t\t\tu.isMatrix.if {\n\t\t\t\tlet [m, n] = u.shape;\n\t\t\t\t{ :i :j |\n\t\t\t\t\tu[i][j] * v\n\t\t\t\t}.table(1.to(m), 1.to(n))\n\t\t\t} {\n\t\t\t\tu.collect { :alpha |\n\t\t\t\t\tv.collect { :beta |\n\t\t\t\t\t\tself(alpha, beta)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :f:/2 :g:/1 |\n\t\t{ :p :q |\n\t\t\tf(p.g, q.g)\n\t\t}\n\t}",
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
  "{ :self:/1 :count |\n\t\t{ :each |\n\t\t\tcount.timesRepeat {\n\t\t\t\teach := self(each)\n\t\t\t};\n\t\t\teach\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectTruncating(beta, self:/2)\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :each |\n\t\t\tself(each, each)\n\t\t}\n\t}",
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
      _exclamationMarkEqualsSign_2(_numArgs_1(_self_2), 2),
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
  "{ :self:/2 |\n\t\t(self:/2.numArgs != 2).ifTrue {\n\t\t\t'Block>>swap: not two argument block'.error\n\t\t};\n\t\t{ :alpha :beta |\n\t\t\tself(beta, alpha)\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectTable(beta, self:/2)\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectWrapping(beta, self:/2)\n\t\t}\n\t}",
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
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectCrossed(beta, self:/2)\n\t\t}\n\t}",
);
