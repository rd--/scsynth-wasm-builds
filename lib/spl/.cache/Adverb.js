sl.addMethod(
  "Block",
  "Adverb",
  "atop",
  ["self:/2", "aBlock:/1"],
  function (_self_2, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_anObject, _anotherObject) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _anObject, _anotherObject";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_self_2(_anObject, _anotherObject));
    });
  },
  "{ :self:/2 :aBlock:/1 |\n\t\t{ :anObject :anotherObject |\n\t\t\taBlock(self(anObject, anotherObject))\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "bind",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _bindLeft_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.bindLeft(anObject)\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "bindLeft",
  ["self:/2", "anObject"],
  function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self_2(_anObject, _each);
    });
  },
  "{ :self:/2 :anObject |\n\t\t{ :each |\n\t\t\tself(anObject, each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "bindRight",
  ["self:/2", "anObject"],
  function (_self_2, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self_2(_each, _anObject);
    });
  },
  "{ :self:/2 :anObject |\n\t\t{ :each |\n\t\t\tself(each, anObject)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "compose",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _composeLeft_2(_self_1, _aBlock_1);
  },
  "{ :self:/1 :aBlock:/1 |\n\t\tself:/1.composeLeft(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "composeLeft",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_anObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anObject";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self_1(_aBlock_1(_anObject));
    });
  },
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :anObject |\n\t\t\tself(aBlock(anObject))\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "composeRight",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_anObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anObject";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_self_1(_anObject));
    });
  },
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :anObject |\n\t\t\taBlock(self(anObject))\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "e",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectEqual_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectEqual(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "each",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_numArgs_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function (_aCollection) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aCollection";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_aCollection, _self);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return (function (_alpha, _beta) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _alpha, _beta";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _withCollect_3(_alpha, _beta, _self);
      });
    });
  },
  "{ :self |\n\t\t(self.numArgs = 1).if {\n\t\t\t{ :aCollection |\n\t\t\t\taCollection.collect(self)\n\t\t\t}\n\t\t} {\n\t\t\t{ :alpha :beta |\n\t\t\t\talpha.withCollect(beta, self)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "f",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectFolding_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectFolding(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "inner",
  ["self:/2", "aBlock:/2"],
  function (_self_2, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_2, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _inner_4(_self_2, _p, _q, _aBlock_2);
    });
  },
  "{ :self:/2 :aBlock:/2 |\n\t\t{ :p :q |\n\t\t\tself:/2.inner(p, q, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "map",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollect_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollect(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "outer",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_u, function (_alpha) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _alpha";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(_v, function (_beta) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _beta";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _self_2(_alpha, _beta);
        });
      });
    });
  },
  "{ :self:/2 |\n\t\t{ :u :v |\n\t\t\tu.collect { :alpha |\n\t\t\t\tv.collect { :beta |\n\t\t\t\t\tself(alpha, beta)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "over",
  ["f:/2", "g:/1"],
  function (_f_2, _g_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _f_2, _g_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_p, _q) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _q";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _f_2(_g_1(_p), _g_1(_q));
    });
  },
  "{ :f:/2 :g:/1 |\n\t\t{ :p :q |\n\t\t\tf(p.g, q.g)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "power",
  ["self:/1", "count"],
  function (_self_1, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _timesRepeat_2(_count, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _each = _self_1(_each);
      });
      return _each;
    });
  },
  "{ :self:/1 :count |\n\t\t{ :each |\n\t\t\tcount.timesRepeat {\n\t\t\t\teach := self(each)\n\t\t\t};\n\t\t\teach\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "s",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectTruncating_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectTruncating(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "self",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self_2(_each, _each);
    });
  },
  "{ :self:/2 |\n\t\t{ :each |\n\t\t\tself(each, each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "swap",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_tildeEqualsSign_2(_numArgs_1(_self_2), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("Block>>swap: not two argument block");
    });
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self_2(_beta, _alpha);
    });
  },
  "{ :self:/2 |\n\t\t(self:/2.numArgs ~= 2).ifTrue {\n\t\t\t'Block>>swap: not two argument block'.error\n\t\t};\n\t\t{ :alpha :beta |\n\t\t\tself(beta, alpha)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "t",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectTable_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectTable(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "w",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectWrapping_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectWrapping(beta, self:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Adverb",
  "x",
  ["self:/2"],
  function (_self_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_alpha, _beta) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _alpha, _beta";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withCollectCrossed_3(_alpha, _beta, _self_2);
    });
  },
  "{ :self:/2 |\n\t\t{ :alpha :beta |\n\t\t\talpha.withCollectCrossed(beta, self:/2)\n\t\t}\n\t}",
);
