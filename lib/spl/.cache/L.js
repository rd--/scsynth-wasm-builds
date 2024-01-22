/* {- Requires: BlockStream -} */

sl.extendTraitWithMethod(
  "Object",
  "L",
  "Lforever",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :self |\n\t\tBlockStream { self } { }\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "L",
  "Lonce",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asStream_1([_self]);
  },
  "{ :self |\n\t\t[self].asStream\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "L",
  "Lconstant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Lforever_1(_self);
  },
  "{ :self |\n\t\tLforever(self)\n\t}",
);

sl.addMethod(
  "Block",
  "L",
  "Lunfold",
  ["self:/1", "start"],
  function (_self_1, _start) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _start";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _next = _start;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _next;
      /* Statements */
      _next = _self_1(_next);
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _next = _start;
    });
  },
  "{ :self:/1 :start |\n\t\tlet next = start;\n\t\tBlockStream {\n\t\t\tlet answer = next;\n\t\t\tnext := self(next);\n\t\t\tanswer\n\t\t} {\n\t\t\tnext := start\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "L",
  "Lunfold",
  ["self:/1", "start", "length"],
  function (_self_1, _start, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self_1, _start, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _take_2(_Lunfold_2(_self_1, _start), _length);
  },
  "{ :self:/1 :start :length |\n\t\tLunfold(self:/1, start).take(length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "L",
  "Lgeom",
  ["start", "grow", "length"],
  function (_start, _grow, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _grow, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Lunfold_3(
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(_each, _grow);
      },
      _start,
      _length,
    );
  },
  "{ :start :grow :length |\n\t\tLunfold({ :each | each * grow }, start, length)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "L",
  "Lseries",
  ["start", "step", "length"],
  function (_start, _step, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _step, _length";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Lunfold_3(
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plus_2(_each, _step);
      },
      _start,
      _length,
    );
  },
  "{ :start :step :length |\n\t\tLunfold({ :each | each + step }, start, length)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lcat",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _Lonce_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThan_2(_index, _size_1(_list)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return null;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _next = _next_1(_at_2(_list, _index));
        /* Statements */
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _and_2(_isNil_1(_next), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lessThan_2(_index, _size_1(_list));
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _index = _plus_2(_index, 1);
          return _next = _next_1(_at_2(_list, _index));
        });
        return _next;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _index = 1;
    });
  },
  "{ :list |\n\t\tlet index = 1;\n\t\tlist.replace(Lonce:/1);\n\t\tBlockStream {\n\t\t\t(index > list.size).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = list[index].next;\n\t\t\t\t{\n\t\t\t\t\tnext.isNil & {\n\t\t\t\t\t\tindex < list.size\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tindex := index + 1;\n\t\t\t\t\tnext := list[index].next\n\t\t\t\t};\n\t\t\t\tnext\n\t\t\t}\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\tindex := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lcyc",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Lseq_2(_list, _inf);
  },
  "{ :list |\n\t\tLseq(list, inf)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Llace",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index = 1;
    /* Statements */
    _replace_2(_list, _Lonce_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_at_2(_list, _index));
      /* Statements */
      _ifNil_2(_next, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _reset_1(_at_2(_list, _index));
        return _next = _next_1(_at_2(_list, _index));
      });
      _if_3(_greaterThanEquals_2(_index, _size_1(_list)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _index = 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _index = _plus_2(_index, 1);
      });
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :list |\n\t\tlet index = 1;\n\t\tlist.replace(Lonce:/1);\n\t\tBlockStream {\n\t\t\tlet next = list[index].next;\n\t\t\tnext.ifNil {\n\t\t\t\tlist[index].reset;\n\t\t\t\tnext := list[index].next\n\t\t\t};\n\t\t\t(index >= list.size).if {\n\t\t\t\tindex := 1\n\t\t\t} {\n\t\t\t\tindex := index + 1\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Llace",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _take_2(_Llace_1(_list), _count);
  },
  "{ :list :count |\n\t\tLlace(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lrand",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atRandom_1(_list);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :list |\n\t\tBlockStream {\n\t\t\tlist.atRandom\n\t\t} {\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lrand",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _take_2(_Lrand_1(_list), _count);
  },
  "{ :list :count |\n\t\tLrand(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lseq",
  ["list", "repeats"],
  function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Ln_2(_Lcat_1(_list), _repeats);
  },
  "{ :list :repeats |\n\t\tLn(Lcat(list), repeats)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lswitch",
  ["list", "which"],
  function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _index;
    /* Statements */
    _replace_2(_list, _Lonce_1);
    _which = _Lforever_1(_which);
    _index = _next_1(_which);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_at_2(_list, _index));
      /* Statements */
      _ifNil_2(_next, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _reset_1(_which);
    });
  },
  "{ :list :which |\n\t\t| index |\n\t\tlist.replace(Lonce:/1);\n\t\twhich := Lforever(which);\n\t\tindex := which.next;\n\t\tBlockStream {\n\t\t\tlet next = list[index].next;\n\t\t\tnext.ifNil {\n\t\t\t\tlist[index].reset;\n\t\t\t\tindex := which.next;\n\t\t\t\tnext := list[index].next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\twhich.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lswitch1",
  ["list", "which"],
  function (_list, _which) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _which";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _replace_2(_list, _Lforever_1);
    _which = _Lforever_1(_which);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _next_1(_at_2(_list, _next_1(_which)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _reset_1(_which);
    });
  },
  "{ :list :which |\n\t\tlist.replace(Lforever:/1);\n\t\twhich := Lforever(which);\n\t\tBlockStream {\n\t\t\tlist[which.next].next\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\twhich.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Ltuple",
  ["list", "repeats"],
  function (_list, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _repeats";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _count = _repeats;
    /* Statements */
    _replace_2(_list, _Lonce_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanEquals_2(_count, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return null;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _next = _collect_2(_list, _next_1);
        /* Statements */
        _ifTrue_2(_anySatisfy_2(_next, _isNil_1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _count = _minus_2(_count, 1);
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
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_list, _reset_1);
      return _count = _repeats;
    });
  },
  "{ :list :repeats |\n\t\tlet count = repeats;\n\t\tlist.replace(Lonce:/1);\n\t\tBlockStream {\n\t\t\t(count <= 0).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = list.collect(next:/1);\n\t\t\t\tnext.anySatisfy(isNil:/1).ifTrue {\n\t\t\t\t\tcount := count - 1;\n\t\t\t\t\tlist.do(reset:/1);\n\t\t\t\t\tnext := list.collect(next:/1)\n\t\t\t\t};\n\t\t\t\tnext\n\t\t\t}\n\t\t} {\n\t\t\tlist.do(reset:/1);\n\t\t\tcount := repeats\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lxrand",
  ["list"],
  function (_list) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _list";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _previous = null;
    let _next = _atRandom_1(_list);
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_next, _previous);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _next = _atRandom_1(_list);
      });
      _previous = _next;
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
    });
  },
  "{ :list |\n\t\tlet previous = nil;\n\t\tlet next = list.atRandom;\n\t\tBlockStream {\n\t\t\t{\n\t\t\t\tnext = previous\n\t\t\t}.whileTrue {\n\t\t\t\tnext := list.atRandom\n\t\t\t};\n\t\t\tprevious := next;\n\t\t\tnext\n\t\t} {\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "L",
  "Lxrand",
  ["list", "count"],
  function (_list, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _list, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _take_2(_Lxrand_1(_list), _count);
  },
  "{ :list :count |\n\t\tLxrand(list).take(count)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Lclump",
  ["input", "size"],
  function (_input, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _size = _Lforever_1(_size);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _nextOrUpToEnd_2(_input, _next_1(_size));
      /* Statements */
      return _if_3(_isEmpty_1(_answer), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return null;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _answer;
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _reset_1(_size);
    });
  },
  "{ :input :size |\n\t\tsize := Lforever(size);\n\t\tBlockStream {\n\t\t\tlet answer = input.nextOrUpToEnd(size.next);\n\t\t\tanswer.isEmpty.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tsize.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Lclutch",
  ["input", "latch", "initialValue"],
  function (_input, _latch, _initialValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _input, _latch, _initialValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _previous = _initialValue;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_asBoolean_1(_next_1(_latch)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
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
        throw Error(errorMessage);
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
  "L",
  "Ldup",
  ["input", "repeats"],
  function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _remain = 1;
    let _next = null;
    /* Statements */
    _repeats = _Lforever_1(_repeats);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _remain = _minus_2(_remain, 1);
      _ifTrue_2(_lessThanEquals_2(_remain, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _remain = _next_1(_repeats);
        return _next = _next_1(_input);
      });
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      _reset_1(_repeats);
      return _remain = 1;
    });
  },
  "{ :input :repeats |\n\t\tlet remain = 1;\n\t\tlet next = nil;\n\t\trepeats := Lforever(repeats);\n\t\tBlockStream {\n\t\t\tremain := remain - 1;\n\t\t\t(remain <= 0).ifTrue {\n\t\t\t\tremain := repeats.next;\n\t\t\t\tnext := input.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tinput.reset;\n\t\t\trepeats.reset;\n\t\t\tremain := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Lforever",
  ["input"],
  function (_input) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _input";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Ln_2(_input, _inf);
  },
  "{ :input |\n\t\tLn(input, inf)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Ln",
  ["input", "repeats"],
  function (_input, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _repeats";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _repeat = 1;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = _next_1(_input);
      /* Statements */
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_isNil_1(_next), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThan_2(_repeat, _repeats);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _reset_1(_input);
        _repeat = _plus_2(_repeat, 1);
        return _next = _next_1(_input);
      });
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _repeat = 1;
    });
  },
  "{ :input :repeats |\n\t\tlet repeat = 1;\n\t\tBlockStream {\n\t\t\tlet next = input.next;\n\t\t\t{\n\t\t\t\tnext.isNil & {\n\t\t\t\t\trepeat < repeats\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tinput.reset;\n\t\t\t\trepeat := repeat + 1;\n\t\t\t\tnext := input.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tinput.reset;\n\t\t\trepeat := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Lonce",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "L",
  "Lconstant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "L",
  "Lbind",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _atEnd = false;
    /* Statements */
    _replace_2(_self, _Lconstant_1);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_atEnd, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return null;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _next = _collect_2(_self, _next_1);
        /* Statements */
        return _if_3(_anySatisfy_2(_next, _isNil_1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _atEnd = true;
          return null;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_self, _reset_1);
      return _atEnd = false;
    });
  },
  "{ :self |\n\t\tlet atEnd = false;\n\t\tself.replace(Lconstant:/1);\n\t\tBlockStream {\n\t\t\tatEnd.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet next = self.collect(next:/1);\n\t\t\t\tnext.anySatisfy(isNil:/1).if {\n\t\t\t\t\tatEnd := true;\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\tnext\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.do(reset:/1);\n\t\t\tatEnd := false\n\t\t}\n\t}",
);
