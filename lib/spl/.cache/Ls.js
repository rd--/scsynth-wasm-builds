sl.extendTraitWithMethod(
  "Object",
  "Ls",
  "LsCons",
  ["anObject", "aStream"],
  function (_anObject, _aStream) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _anObject, _aStream";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsCat_1([_LsOnce_1(_anObject), _aStream]);
  },
  "{ :anObject :aStream |\n\t\tLsCat([LsOnce(anObject), aStream])\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Ls",
  "LsConstant",
  ["anObject"],
  function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsForever_1(_anObject);
  },
  "{ :anObject |\n\t\tLsForever(anObject)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Ls",
  "LsForever",
  ["anObject"],
  function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anObject;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    });
  },
  "{ :anObject |\n\t\tBlockStream {\n\t\t\tanObject\n\t\t} {\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Ls",
  "LsOnce",
  ["anObject"],
  function (_anObject) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asStream_1([_anObject]);
  },
  "{ :anObject |\n\t\t[anObject].asStream\n\t}",
);

sl.addMethod(
  "Block",
  "Ls",
  "LsUnfold",
  ["aBlock:/1", "start"],
  function (_aBlock_1, _start) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aBlock_1, _start";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _next = _start;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _next;
      /* Statements */
      _next = _aBlock_1(_next);
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _next = _start;
    });
  },
  "{ :aBlock:/1 :start |\n\t\tlet next = start;\n\t\tBlockStream {\n\t\t\tlet answer = next;\n\t\t\tnext := aBlock(next);\n\t\t\tanswer\n\t\t} {\n\t\t\tnext := start\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "Ls",
  "LsUnfold",
  ["aBlock:/1", "start", "length"],
  function (_aBlock_1, _start, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _aBlock_1, _start, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsUnfold_2(_aBlock_1, _start), _length);
  },
  "{ :aBlock:/1 :start :length |\n\t\tLsUnfold(aBlock:/1, start).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Ls",
  "LsFin",
  ["count", "input"],
  function (_count, _input) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _count, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_input, _count);
  },
  "{ :count :input |\n\t\tinput.take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsGeom",
  ["start", "grow", "length"],
  function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsUnfold_3(
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(_each, _grow);
      },
      _start,
      _length,
    );
  },
  "{ :start :grow :length |\n\t\tLsUnfold({ :each | each * grow }, start, length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsSeries",
  ["start", "step", "length"],
  function (_start, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _step, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsUnfold_3(
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_each, _step);
      },
      _start,
      _length,
    );
  },
  "{ :start :step :length |\n\t\tLsUnfold({ :each | each + step }, start, length)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsAt",
  ["list", "indices"],
  function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_list, _each);
    });
  },
  "{ :list :indices |\n\t\tindices.collect { :each |\n\t\t\tlist[each]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsAtFold",
  ["list", "indices"],
  function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atFold_2(_list, _each);
    });
  },
  "{ :list :indices |\n\t\tindices.collect { :each |\n\t\t\tlist.atFold(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsAtWrap",
  ["list", "indices"],
  function (_list, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _indices";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atWrap_2(_list, _each);
    });
  },
  "{ :list :indices |\n\t\tindices.collect { :each |\n\t\t\tlist.atWrap(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsCat",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_index, _size_1(_list)), function () {
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
        let _next = _next_1(_at_2(_list, _index));
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_isNil_1(_next), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSign_2(_index, _size_1(_list));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _index = _plusSign_2(_index, 1);
          return _next = _next_1(_at_2(_list, _index));
        });
        return _next;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _index = 1;
    });
  },
  "{ :list |\n\t\tlet index = 1;\n\t\tlist.replace(LsOnce:/1);\n\t\tBlockStream {\n\t\t\t(index > list.size).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = list[index].next;\n\t\t\t\t{\n\t\t\t\t\tnext.isNil & {\n\t\t\t\t\t\tindex < list.size\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tindex := index + 1;\n\t\t\t\t\tnext := list[index].next\n\t\t\t\t};\n\t\t\t\tnext\n\t\t\t}\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\tindex := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsCyc",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsSeq_2(_list, _inf);
  },
  "{ :list |\n\t\tLsSeq(list, inf)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsLace",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _LsForever_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_at_2(_list, _index));
      /* Statements */
      _if_3(_greaterThanSignEqualsSign_2(_index, _size_1(_list)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _index = 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _index = _plusSign_2(_index, 1);
      });
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _index = 1;
    });
  },
  "{ :list |\n\t\tlet index = 1;\n\t\tlist.replace(LsForever:/1);\n\t\tBlockStream {\n\t\t\tlet next = list[index].next;\n\t\t\t(index >= list.size).if {\n\t\t\t\tindex := 1\n\t\t\t} {\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\tindex := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsLace",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsLace_1(_list), _count);
  },
  "{ :list :count |\n\t\tLsLace(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsPermutations",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _local = _copy_1(_list);
    let _next = _local;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _copy_1(_next);
      /* Statements */
      _next = _nextPermutationLexicographic_1(_local);
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _local = _copy_1(_list);
    });
  },
  "{ :list |\n\t\tlet local = list.copy;\n\t\tlet next = local;\n\t\tBlockStream {\n\t\t\tlet answer = next.copy;\n\t\t\tnext := local.nextPermutationLexicographic;\n\t\t\tanswer\n\t\t} {\n\t\t\tlocal := list.copy\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsRand",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atRandom_1(_list);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    });
  },
  "{ :list |\n\t\tBlockStream {\n\t\t\tlist.atRandom\n\t\t} {\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsRand",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsRand_1(_list), _count);
  },
  "{ :list :count |\n\t\tLsRand(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsSeq",
  ["list", "repeats"],
  function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsN_2(_LsCat_1(_list), _repeats);
  },
  "{ :list :repeats |\n\t\tLsN(LsCat(list), repeats)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsSer",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsTake_2(_LsCyc_1(_list), _count);
  },
  "{ :list :count |\n\t\tLsTake(LsCyc(list), count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsSwitch",
  ["list", "which"],
  function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = null;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    _which = _LsForever_1(_which);
    _index = _next_1(_which);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_at_2(_list, _index));
      /* Statements */
      _ifNil_2(_next, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _reset_1(_at_2(_list, _index));
        _index = _next_1(_which);
        return _next = _next_1(_at_2(_list, _index));
      });
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _reset_1(_which);
    });
  },
  "{ :list :which |\n\t\tlet index = nil;\n\t\tlist.replace(LsOnce:/1);\n\t\twhich := LsForever(which);\n\t\tindex := which.next;\n\t\tBlockStream {\n\t\t\tlet next = list[index].next;\n\t\t\tnext.ifNil {\n\t\t\t\tlist[index].reset;\n\t\t\t\tindex := which.next;\n\t\t\t\tnext := list[index].next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\twhich.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsSwitch1",
  ["list", "which"],
  function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _replace_2(_list, _LsForever_1);
    _which = _LsForever_1(_which);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _next_1(_at_2(_list, _next_1(_which)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _reset_1(_which);
    });
  },
  "{ :list :which |\n\t\tlist.replace(LsForever:/1);\n\t\twhich := LsForever(which);\n\t\tBlockStream {\n\t\t\tlist[which.next].next\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\twhich.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsTuple",
  ["list", "repeats"],
  function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _count = _repeats;
    /* Statements */
    _replace_2(_list, _LsOnce_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_count, 0), function () {
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
        let _next = _collect_2(_list, _next_1);
        /* Statements */
        _ifTrue_2(_anySatisfy_2(_next, _isNil_1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _count = _hyphenMinus_2(_count, 1);
          _do_2(_list, _reset_1);
          return _next = _collect_2(_list, _next_1);
        });
        return _next;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _count = _repeats;
    });
  },
  "{ :list :repeats |\n\t\tlet count = repeats;\n\t\tlist.replace(LsOnce:/1);\n\t\tBlockStream {\n\t\t\t(count <= 0).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = list.collect(next:/1);\n\t\t\t\tnext.anySatisfy(isNil:/1).ifTrue {\n\t\t\t\t\tcount := count - 1;\n\t\t\t\t\tlist.do(reset:/1);\n\t\t\t\t\tnext := list.collect(next:/1)\n\t\t\t\t};\n\t\t\t\tnext\n\t\t\t}\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\tcount := repeats\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsWalk",
  ["list", "steps"],
  function (_list, _steps) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _steps";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsAtFold_2(_list, _LsAccum_1(_LsConstant_1(_steps)));
  },
  "{ :list :steps |\n\t\tLsAtFold(list, LsAccum(LsConstant(steps)))\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsXRand",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsRemDup_1(_LsRand_1(_list));
  },
  "{ :list |\n\t\tLsRemDup(LsRand(list))\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Ls",
  "LsXRand",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsXRand_1(_list), _count);
  },
  "{ :list :count |\n\t\tLsXRand(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsAccum",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsScan_2(_input, _plusSign_2);
  },
  "{ :input |\n\t\tLsScan(input, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsAdjacent",
  ["input", "aBlock:/2"],
  function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _previous = _next_1(_input);
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_input);
      /* Statements */
      return _if_3(_isNil_1(_next), function () {
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
        let _answer = _aBlock_2(_previous, _next);
        /* Statements */
        _previous = _next;
        return _answer;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _previous = _next_1(_input);
    });
  },
  "{ :input :aBlock:/2 |\n\t\tlet previous = input.next;\n\t\tBlockStream {\n\t\t\tlet next = input.next;\n\t\t\tnext.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet answer = aBlock(previous, next);\n\t\t\t\tprevious := next;\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tprevious := input.next\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsClump",
  ["input", "size"],
  function (_input, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _size = _LsForever_1(_size);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _nextOrUpToEnd_2(_input, _next_1(_size));
      /* Statements */
      return _if_3(_isEmpty_1(_answer), function () {
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
        /* Statements */
        return _answer;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _reset_1(_size);
    });
  },
  "{ :input :size |\n\t\tsize := LsForever(size);\n\t\tBlockStream {\n\t\t\tlet answer = input.nextOrUpToEnd(size.next);\n\t\t\tanswer.isEmpty.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tsize.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsClutch",
  ["input", "latch", "initialValue"],
  function (_input, _latch, _initialValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _latch, _initialValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _previous = _initialValue;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_asBoolean_1(_next_1(_latch)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _previous = _next_1(_input);
      });
      return _previous;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _reset_1(_latch);
    });
  },
  "{ :input :latch :initialValue |\n\t\tlet previous = initialValue;\n\t\tBlockStream {\n\t\t\tlatch.next.asBoolean.ifTrue {\n\t\t\t\tprevious := input.next\n\t\t\t};\n\t\t\tprevious\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tlatch.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsCollect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.collect(aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsConstant",
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

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsDiff",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsAdjacent_2(_input, _swap_1(_hyphenMinus_2));
  },
  "{ :input |\n\t\tLsAdjacent(input, -.swap)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsDrop",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _drop_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.drop(anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsDupEach",
  ["input", "repeats"],
  function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _duplicateEach_2(_input, _LsForever_1(_repeats));
  },
  "{ :input :repeats |\n\t\tinput.duplicateEach(LsForever(repeats))\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsFold",
  ["input", "aBlock:/2"],
  function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsLast_1(_LsScan_2(_input, _aBlock_2));
  },
  "{ :input :aBlock:/2 |\n\t\tLsLast(LsScan(input, aBlock:/2))\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsForever",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _LsN_2(_input, _inf);
  },
  "{ :input |\n\t\tLsN(input, inf)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsLast",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _next_1(_input);
    let _next = null;
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _next = _next_1(_input);
      return _notNil_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _next;
    });
    return _answer;
  },
  "{ :input |\n\t\tlet answer = input.next;\n\t\tlet next = nil;\n\t\t{\n\t\t\tnext := input.next;\n\t\t\tnext.notNil\n\t\t}.whileTrue {\n\t\t\tanswer := next\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsN",
  ["input", "repeats"],
  function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _repeat_2(_input, _repeats);
  },
  "{ :input :repeats |\n\t\tinput.repeat(repeats)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsOnce",
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

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsRemDup",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeSuccesiveDuplicates_1(_self);
  },
  "{ :self |\n\t\tself.removeSuccesiveDuplicates\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsScan",
  ["input", "aBlock:/2"],
  function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _scan_2(_input, _aBlock_2);
  },
  "{ :input :aBlock:/2 |\n\t\tinput.scan(aBlock:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsSlidingWindows",
  ["input", "windowSize", "stepSize"],
  function (_input, _windowSize, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _windowSize, _stepSize";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _overlap = _max_2(_hyphenMinus_2(_windowSize, _stepSize), 0);
    let _require = _hyphenMinus_2(_windowSize, _overlap);
    let _skip = _max_2(_hyphenMinus_2(_stepSize, _windowSize), 0);
    let _window = _next_2(_input, _overlap);
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _current = _nextOrUpToEnd_2(_input, _require);
      /* Statements */
      return _if_3(
        _tildeEqualsSign_2(_size_1(_current), _require),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return null;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _answer = _plusSignPlusSign_2(_window, _current);
          /* Statements */
          _ifTrue_2(_greaterThanSign_2(_skip, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _next_2(_input, _skip);
          });
          _addAll_2(_window, _current);
          _removeFirst_2(_window, _require);
          return _answer;
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _window = _next_2(_input, _overlap);
    });
  },
  "{ :input :windowSize :stepSize |\n\t\tlet overlap = (windowSize - stepSize).max(0);\n\t\tlet require = windowSize - overlap;\n\t\tlet skip = (stepSize - windowSize).max(0);\n\t\tlet window = input.next(overlap);\n\t\tBlockStream {\n\t\t\tlet current = input.nextOrUpToEnd(require);\n\t\t\t(current.size ~= require).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet answer = window ++ current;\n\t\t\t\t(skip > 0).ifTrue {\n\t\t\t\t\tinput.next(skip)\n\t\t\t\t};\n\t\t\t\twindow.addAll(current);\n\t\t\t\twindow.removeFirst(require);\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\twindow := input.next(overlap)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsTake",
  ["input", "anInteger"],
  function (_input, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_input, _anInteger);
  },
  "{ :input :anInteger |\n\t\tinput.take(anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsTrace",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_input, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _postLine_1(_each);
      return _each;
    });
  },
  "{ :input |\n\t\tinput.collect { :each |\n\t\t\teach.postLine;\n\t\t\teach\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "play",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _unixTime = _unixTimeInMilliseconds_1(_system);
    let _systemTime = _systemTimeInMilliseconds_1(_system);
    let _timeDifference = _solidus_2(
      _hyphenMinus_2(_unixTime, _systemTime),
      1000,
    );
    /* Statements */
    return _schedule_1(function (_currentTime) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _currentTime";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_self);
      /* Statements */
      return _ifNil_3(_next, function () {
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
        let _dur = _at_2(_next, "dur");
        let _events = _multiChannelExpand_1(_next);
        let _packets = _concatenation_1(_collect_2(_events, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _asPatternEventMessages_2(
            _each,
            _plusSign_2(_currentTime, _timeDifference),
          );
        }));
        /* Statements */
        _do_2(_packets, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _sendOsc_2(_scSynth_1(_system), _each);
        });
        return _dur;
      });
    });
  },
  "{ :self |\n\t\tlet unixTime = system.unixTimeInMilliseconds;\n\t\tlet systemTime = system.systemTimeInMilliseconds;\n\t\tlet timeDifference = (unixTime - systemTime) / 1000;\n\t\t{ :currentTime |\n\t\t\tlet next = self.next;\n\t\t\tnext.ifNil {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet dur = next::dur;\n\t\t\t\tlet events = next.multiChannelExpand;\n\t\t\t\tlet packets = events.collect { :each |\n\t\t\t\t\teach.asPatternEventMessages(currentTime + timeDifference)\n\t\t\t\t}.concatenation;\n\t\t\t\tpackets.do { :each |\n\t\t\t\t\tsystem.scSynth.sendOsc(each)\n\t\t\t\t};\n\t\t\t\tdur\n\t\t\t}\n\t\t}.schedule\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Ls",
  "asPatternEventMessages",
  ["self", "currentTime"],
  function (_self, _currentTime) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _currentTime";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _latency = 0.2;
    let _instrument = _at_2(_self, "instrument");
    let _synthId = _plusSign_2(100, _uniqueId_1(_system));
    let _addAction = 0;
    let _targetNode = 1;
    let _sNewMessage = _OscMessage_2(
      "/s_new",
      _plusSignPlusSign_2(
        [_instrument, _synthId, _addAction, _targetNode],
        _concatenation_1(_collect_2(_associations_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return [_key_1(_each), _value_1(_each)];
        })),
      ),
    );
    let _sNewBundle = _OscBundle_2(_plusSign_2(_currentTime, _latency), [
      _sNewMessage,
    ]);
    /* Statements */
    return _if_3(_includesKey_2(_self, "gate"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _sustain = _at_2(_self, "sustain");
      let _releaseTime = _plusSign_2(_currentTime, _sustain);
      let _nSetMessage = _OscMessage_2("/n_set", [_synthId, "gate", 0]);
      let _nSetBundle = _OscBundle_2(_plusSign_2(_releaseTime, _latency), [
        _nSetMessage,
      ]);
      /* Statements */
      return [_sNewBundle, _nSetBundle];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return [_sNewBundle];
    });
  },
  "{ :self :currentTime |\n\t\tlet latency = 0.2; /* Preferences */\n\t\tlet instrument = self::instrument;\n\t\tlet synthId = 100 + system.uniqueId; /* Node allocator */\n\t\tlet addAction = 0;\n\t\tlet targetNode = 1;\n\t\tlet sNewMessage = OscMessage(\n\t\t\t'/s_new',\n\t\t\t[\n\t\t\t\tinstrument,\n\t\t\t\tsynthId,\n\t\t\t\taddAction,\n\t\t\t\ttargetNode\n\t\t\t] ++ self.associations.collect { :each |\n\t\t\t\t[\n\t\t\t\t\teach.key,\n\t\t\t\t\teach.value\n\t\t\t\t]\n\t\t\t}.concatenation\n\t\t);\n\t\tlet sNewBundle = OscBundle(currentTime + latency, [sNewMessage]);\n\t\tself.includesKey('gate').if {\n\t\t\tlet sustain = self::sustain;\n\t\t\tlet releaseTime = currentTime + sustain;\n\t\t\tlet nSetMessage = OscMessage('/n_set', [synthId, 'gate', 0]);\n\t\t\tlet nSetBundle = OscBundle(releaseTime + latency, [nSetMessage]);\n\t\t\t[sNewBundle, nSetBundle]\n\t\t} {\n\t\t\t[sNewBundle]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Ls",
  "LsBind",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _atEnd = false;
    /* Statements */
    _replace_2(_self, _LsConstant_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_atEnd, function () {
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
        let _next = _collect_2(_self, _next_1);
        /* Statements */
        return _if_3(_anySatisfy_2(_next, _isNil_1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          _atEnd = true;
          return null;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _next;
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_self, _reset_1);
      return _atEnd = false;
    });
  },
  "{ :self |\n\t\tlet atEnd = false;\n\t\tself.replace(LsConstant:/1);\n\t\tBlockStream {\n\t\t\tatEnd.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = self.collect(next:/1);\n\t\t\t\tnext.anySatisfy(isNil:/1).if {\n\t\t\t\t\tatEnd := true;\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\tnext\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.do(reset:/1);\n\t\t\tatEnd := false\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsBeta",
  ["low", "high", "p1", "p2", "length"],
  function (_low, _high, _p1, _p2, _length) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _low, _high, _p1, _p2, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _low = _LsConstant_1(_low);
    _high = _LsConstant_1(_high);
    _p1 = _LsConstant_1(_p1);
    _p2 = _LsConstant_1(_p2);
    return _take_2(
      _BlockStream_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextRandomFloatEularianBetaDistribution_5(
          _system,
          _next_1(_low),
          _next_1(_high),
          _next_1(_p1),
          _next_1(_p2),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _reset_1(_low);
        _reset_1(_high);
        _reset_1(_p1);
        return _reset_1(_p2);
      }),
      _length,
    );
  },
  "{ :low :high :p1 :p2 :length |\n\t\tlow := LsConstant(low);\n\t\thigh := LsConstant(high);\n\t\tp1 := LsConstant(p1);\n\t\tp2 := LsConstant(p2);\n\t\tBlockStream {\n\t\t\tsystem.nextRandomFloatEularianBetaDistribution(low.next, high.next, p1.next, p2.next)\n\t\t} {\n\t\t\tlow.reset;\n\t\t\thigh.reset;\n\t\t\tp1.reset;\n\t\t\tp2.reset\n\t\t}.take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsBeta",
  ["low", "high", "p1", "p2", "length"],
  function (_low, _high, _p1, _p2, _length) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _low, _high, _p1, _p2, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _low = _LsConstant_1(_low);
    _high = _LsConstant_1(_high);
    _p1 = _LsConstant_1(_p1);
    _p2 = _LsConstant_1(_p2);
    return _take_2(
      _BlockStream_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextRandomFloatEularianBetaDistribution_5(
          _system,
          _next_1(_low),
          _next_1(_high),
          _next_1(_p1),
          _next_1(_p2),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _reset_1(_low);
        _reset_1(_high);
        _reset_1(_p1);
        return _reset_1(_p2);
      }),
      _length,
    );
  },
  "{ :low :high :p1 :p2 :length |\n\t\tlow := LsConstant(low);\n\t\thigh := LsConstant(high);\n\t\tp1 := LsConstant(p1);\n\t\tp2 := LsConstant(p2);\n\t\tBlockStream {\n\t\t\tsystem.nextRandomFloatEularianBetaDistribution(low.next, high.next, p1.next, p2.next)\n\t\t} {\n\t\t\tlow.reset;\n\t\t\thigh.reset;\n\t\t\tp1.reset;\n\t\t\tp2.reset\n\t\t}.take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsBrownUsing",
  ["low", "high", "step", "aBlock:/4"],
  function (_low, _high, _step, _aBlock_4) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _aBlock_4";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _next = null;
    /* Statements */
    _low = _LsConstant_1(_low);
    _high = _LsConstant_1(_high);
    _step = _LsConstant_1(_step);
    _next = _aBlock_4(_system, _next_1(_low), _next_1(_high), []);
    return _withAndCollect_4(_low, _high, _step, function (_low, _high, _step) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _low, _high, _step";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _next;
      /* Statements */
      _next = _foldBetweenAnd_3(
        _plusSign_2(_next, _aBlock_4(_system, _negated_1(_step), _step, [])),
        _low,
        _high,
      );
      return _answer;
    });
  },
  "{ :low :high :step :aBlock:/4 |\n\t\tlet next = nil;\n\t\tlow := LsConstant(low);\n\t\thigh := LsConstant(high);\n\t\tstep := LsConstant(step);\n\t\tnext := aBlock(system, low.next, high.next, []);\n\t\tlow.withAndCollect(high, step) { :low :high :step |\n\t\t\tlet answer = next;\n\t\t\tnext := (next + aBlock(system, step.negated, step, [])).foldBetweenAnd(low, high);\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsBrownUsing",
  ["low", "high", "step", "aBlock:/4"],
  function (_low, _high, _step, _aBlock_4) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _aBlock_4";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _next = null;
    /* Statements */
    _low = _LsConstant_1(_low);
    _high = _LsConstant_1(_high);
    _step = _LsConstant_1(_step);
    _next = _aBlock_4(_system, _next_1(_low), _next_1(_high), []);
    return _withAndCollect_4(_low, _high, _step, function (_low, _high, _step) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _low, _high, _step";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _next;
      /* Statements */
      _next = _foldBetweenAnd_3(
        _plusSign_2(_next, _aBlock_4(_system, _negated_1(_step), _step, [])),
        _low,
        _high,
      );
      return _answer;
    });
  },
  "{ :low :high :step :aBlock:/4 |\n\t\tlet next = nil;\n\t\tlow := LsConstant(low);\n\t\thigh := LsConstant(high);\n\t\tstep := LsConstant(step);\n\t\tnext := aBlock(system, low.next, high.next, []);\n\t\tlow.withAndCollect(high, step) { :low :high :step |\n\t\t\tlet answer = next;\n\t\t\tnext := (next + aBlock(system, step.negated, step, [])).foldBetweenAnd(low, high);\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsBrown",
  ["low", "high", "step", "length"],
  function (_low, _high, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsBrownUsing_4(_low, _high, _step, _randomReal_4), _length);
  },
  "{ :low :high :step :length |\n\t\tLsBrownUsing(\n\t\t\tlow,\n\t\t\thigh,\n\t\t\tstep,\n\t\t\trandomReal:/4\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsBrown",
  ["low", "high", "step", "length"],
  function (_low, _high, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(_LsBrownUsing_4(_low, _high, _step, _randomReal_4), _length);
  },
  "{ :low :high :step :length |\n\t\tLsBrownUsing(\n\t\t\tlow,\n\t\t\thigh,\n\t\t\tstep,\n\t\t\trandomReal:/4\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsCauchy",
  ["mean", "spread", "length"],
  function (_mean, _spread, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mean, _spread, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _mean = _LsConstant_1(_mean);
    _spread = _LsConstant_1(_spread);
    return _take_2(
      _withCollect_3(_mean, _spread, function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextRandomFloatCauchyDistribution_3(_system, _p, _q);
      }),
      _length,
    );
  },
  "{ :mean :spread :length |\n\t\tmean := LsConstant(mean);\n\t\tspread := LsConstant(spread);\n\t\tmean.withCollect(\n\t\t\tspread,\n\t\t\t{ :p :q |\n\t\t\t\tsystem.nextRandomFloatCauchyDistribution(p, q)\n\t\t\t}\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsCauchy",
  ["mean", "spread", "length"],
  function (_mean, _spread, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mean, _spread, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _mean = _LsConstant_1(_mean);
    _spread = _LsConstant_1(_spread);
    return _take_2(
      _withCollect_3(_mean, _spread, function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _nextRandomFloatCauchyDistribution_3(_system, _p, _q);
      }),
      _length,
    );
  },
  "{ :mean :spread :length |\n\t\tmean := LsConstant(mean);\n\t\tspread := LsConstant(spread);\n\t\tmean.withCollect(\n\t\t\tspread,\n\t\t\t{ :p :q |\n\t\t\t\tsystem.nextRandomFloatCauchyDistribution(p, q)\n\t\t\t}\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsIBrown",
  ["low", "high", "step", "length"],
  function (_low, _high, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(
      _LsBrownUsing_4(_low, _high, _step, _randomIntegerExcludingZero_4),
      _length,
    );
  },
  "{ :low :high :step :length |\n\t\tLsBrownUsing(\n\t\t\tlow,\n\t\t\thigh,\n\t\t\tstep,\n\t\t\trandomIntegerExcludingZero:/4\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsIBrown",
  ["low", "high", "step", "length"],
  function (_low, _high, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _low, _high, _step, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(
      _LsBrownUsing_4(_low, _high, _step, _randomIntegerExcludingZero_4),
      _length,
    );
  },
  "{ :low :high :step :length |\n\t\tLsBrownUsing(\n\t\t\tlow,\n\t\t\thigh,\n\t\t\tstep,\n\t\t\trandomIntegerExcludingZero:/4\n\t\t).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Ls",
  "LsWhite",
  ["low", "high", "length"],
  function (_low, _high, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _low, _high, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(
      _withCollect_3(
        _LsConstant_1(_low),
        _LsConstant_1(_high),
        function (_min, _max) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _min, _max";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _randomReal_4(_system, _min, _max, []);
        },
      ),
      _length,
    );
  },
  "{ :low :high :length |\n\t\tLsConstant(low).withCollect(LsConstant(high)) { :min :max |\n\t\t\tsystem.randomReal(min, max, [])\n\t\t}.take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "Ls",
  "LsWhite",
  ["low", "high", "length"],
  function (_low, _high, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _low, _high, _length";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _take_2(
      _withCollect_3(
        _LsConstant_1(_low),
        _LsConstant_1(_high),
        function (_min, _max) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _min, _max";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _randomReal_4(_system, _min, _max, []);
        },
      ),
      _length,
    );
  },
  "{ :low :high :length |\n\t\tLsConstant(low).withCollect(LsConstant(high)) { :min :max |\n\t\t\tsystem.randomReal(min, max, [])\n\t\t}.take(length)\n\t}",
);

sl.addMethod(
  "String",
  "Ls",
  "LsSet",
  ["key", "value", "input"],
  function (_key, _value, _input) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _key, _value, _input";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _value = _LsConstant_1(_value);
    return _withCollect_3(_input, _value, function (_each, _z) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _z";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_each, _key, _z);
      return _each;
    });
  },
  "{ :key :value :input |\n\t\tvalue := LsConstant(value);\n\t\tinput.withCollect(value) { :each :z |\n\t\t\teach[key] := z;\n\t\t\teach\n\t\t}\n\t}",
);
