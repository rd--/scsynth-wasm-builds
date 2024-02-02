/* {- Requires: Iterator Stream -} */

sl.addType(
  false,
  "BlockStream",
  "BlockStream",
  ["Object", "Iterator", "Stream"],
  ["onNext", "onReset"],
);

sl.copyTraitToType(
  "Object",
  "BlockStream",
);

sl.copyTraitToType(
  "Iterator",
  "BlockStream",
);

sl.copyTraitToType(
  "Stream",
  "BlockStream",
);

sl.addMethod(
  "BlockStream",
  "BlockStream",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_1("BlockStream>>copy: not implemented");
  },
  "{ :self |\n\t\t'BlockStream>>copy: not implemented'.error\n\t}",
);

sl.addMethod(
  "BlockStream",
  "BlockStream",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _value_1(_onNext_1(_self));
  },
  "{ :self |\n\t\tself.onNext.value\n\t}",
);

sl.addMethod(
  "BlockStream",
  "BlockStream",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _value_1(_onReset_1(_self));
  },
  "{ :self |\n\t\tself.onReset.value\n\t}",
);

sl.addMethod(
  "Block",
  "BlockStream",
  "BlockStream",
  ["onNext", "onReset"],
  function (_onNext, _onReset) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _onNext, _onReset";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newBlockStream_0(), _onNext, _onReset);
  },
  "{ :onNext :onReset |\n\t\tnewBlockStream().initializeSlots(onNext, onReset)\n\t}",
);

sl.addMethod(
  "Block",
  "BlockStream",
  "iterate",
  ["self:/1", "anObject"],
  function (_self_1, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _state = _anObject;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _next = _state;
      /* Statements */
      _state = _self_1(_state);
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _state = _anObject;
    });
  },
  "{ :self:/1 :anObject |\n\t\tlet state = anObject;\n\t\tBlockStream {\n\t\t\tlet next = state;\n\t\t\tstate := self(state);\n\t\t\tnext\n\t\t} {\n\t\t\tstate := anObject\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "times",
  ["lhs", "rhs"],
  function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _times_2);
  },
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "dividedBy",
  ["lhs", "rhs"],
  function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _dividedBy_2);
  },
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "plus",
  ["lhs", "rhs"],
  function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _plus_2);
  },
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "minus",
  ["lhs", "rhs"],
  function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _minus_2);
  },
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aNumber, _each);
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "adaptToStreamAndApply",
  ["self", "aStream", "aBlock:/2"],
  function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _atEnd = false;
    /* Statements */
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
        let _p = _next_1(_self);
        let _q = _next_1(_aStream);
        /* Statements */
        return _if_3(
          _or_2(_isNil_1(_p), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _isNil_1(_q);
          }),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            _atEnd = true;
            return null;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _aBlock_2(_p, _q);
          },
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_self);
      _reset_1(_aStream);
      return _atEnd = false;
    });
  },
  "{ :self :aStream :aBlock:/2 |\n\t\tlet atEnd = false;\n\t\tBlockStream {\n\t\t\tatEnd.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet p = self.next;\n\t\t\t\tlet q = aStream.next;\n\t\t\t\tp.isNil.or {\n\t\t\t\t\tq.isNil\n\t\t\t\t}.if {\n\t\t\t\t\tatEnd := true;\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\taBlock(p, q)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset;\n\t\t\tatEnd := false\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      /* Temporaries */
      let _next = _next_1(_self);
      /* Statements */
      return _if_3(_isNil_1(_next), function () {
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
        return _aBlock_1(_next);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _reset_1(_self);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\tnext.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(next)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "drop",
  ["input", "count"],
  function (_input, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _next_2(_input, _count);
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _next_1(_input);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_input);
      return _next_2(_input, _count);
    });
  },
  "{ :input :count |\n\t\tinput.next(count);\n\t\tBlockStream {\n\t\t\tinput.next\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tinput.next(count)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "duplicateEach",
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
  "{ :input :repeats |\n\t\tlet remain = 1;\n\t\tlet next = nil;\n\t\tBlockStream {\n\t\t\tremain := remain - 1;\n\t\t\t(remain <= 0).ifTrue {\n\t\t\t\tremain := repeats.next;\n\t\t\t\tnext := input.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tinput.reset;\n\t\t\trepeats.reset;\n\t\t\tremain := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "randomFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _randomFloat_1);
  },
  "{ :self |\n\t\tself.collect(randomFloat:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "randomFloat",
  ["lhs", "rhs"],
  function (_lhs, _rhs) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lhs, _rhs";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _adaptToStreamAndApply_3(_rhs, _lhs, _randomFloat_2);
  },
  "{ :lhs :rhs |\n\t\trhs.adaptToStreamAndApply(lhs, randomFloat:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "reject",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _select_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _not_1(_aBlock_1(_each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.select { :each |\n\t\t\taBlock(each).not\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "removeSuccesiveDuplicates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _previous = null;
    /* Statements */
    return _reject_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_each, _previous), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return true;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _previous = _each;
        return false;
      });
    });
  },
  "{ :self |\n\t\tlet previous = nil;\n\t\tself.reject { :each |\n\t\t\t(each = previous).if {\n\t\t\t\ttrue\n\t\t\t} {\n\t\t\t\tprevious := each;\n\t\t\t\tfalse\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "repeat",
  ["self", "repeats"],
  function (_self, _repeats) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _repeats";
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
      let _next = _next_1(_self);
      /* Statements */
      _ifTrue_2(
        _and_2(_isNil_1(_next), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lessThan_2(_repeat, _repeats);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _reset_1(_self);
          _repeat = _plus_2(_repeat, 1);
          return _next = _next_1(_self);
        },
      );
      return _next;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_self);
      return _repeat = 1;
    });
  },
  "{ :self :repeats |\n\t\tlet repeat = 1;\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\tnext.isNil.and {\n\t\t\t\trepeat < repeats\n\t\t\t}.ifTrue {\n\t\t\t\tself.reset;\n\t\t\t\trepeat := repeat + 1;\n\t\t\t\tnext := self.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tself.reset;\n\t\t\trepeat := 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "scan",
  ["input", "aBlock:/2"],
  function (_input, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _input, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _z1 = _next_1(_input);
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _z2 = _next_1(_input);
      /* Statements */
      return _if_3(_isNil_1(_z1), function () {
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
        let _answer = _z1;
        /* Statements */
        _if_3(_isNil_1(_z2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _z1 = null;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _z1 = _aBlock_2(_z1, _z2);
        });
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
      return _z1 = _next_1(_input);
    });
  },
  "{ :input :aBlock:/2 |\n\t\tlet z1 = input.next;\n\t\tBlockStream {\n\t\t\tlet z2 = input.next;\n\t\t\tz1.isNil.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet answer = z1;\n\t\t\t\tz2.isNil.if {\n\t\t\t\t\tz1 := nil\n\t\t\t\t} {\n\t\t\t\t\tz1 := aBlock(z1, z2)\n\t\t\t\t};\n\t\t\t\tanswer\n\t\t\t}\n\t\t} {\n\t\t\tinput.reset;\n\t\t\tz1 := input.next\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      /* Temporaries */
      let _next = _next_1(_self);
      /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _or_2(_isNil_1(_next), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_1(_next);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _next = _next_1(_self);
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
      return _reset_1(_self);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tBlockStream {\n\t\t\tlet next = self.next;\n\t\t\t{\n\t\t\t\tnext.isNil | {\n\t\t\t\t\taBlock(next)\n\t\t\t\t}\n\t\t\t}.whileFalse {\n\t\t\t\tnext := self.next\n\t\t\t};\n\t\t\tnext\n\t\t} {\n\t\t\tself.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "take",
  ["self", "limit"],
  function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _count = 1;
    /* Statements */
    return _BlockStream_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThan_2(_count, _limit), function () {
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
        _count = _plus_2(_count, 1);
        return _next_1(_self);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _count = 1;
      return _reset_1(_self);
    });
  },
  "{ :self :limit |\n\t\tlet count = 1;\n\t\tBlockStream {\n\t\t\t(count > limit).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tcount := count + 1;\n\t\t\t\tself.next\n\t\t\t}\n\t\t} {\n\t\t\tcount := 1;\n\t\t\tself.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "withAndCollect",
  ["self", "aStream", "anotherStream", "aBlock:/3"],
  function (_self, _aStream, _anotherStream, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aStream, _anotherStream, _aBlock_3";
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
      /* Temporaries */
      let _selfNext = _next_1(_self);
      let _aStreamNext = _next_1(_aStream);
      let _anotherStreamNext = _next_1(_anotherStream);
      /* Statements */
      return _if_3(
        _or_2(_isNil_1(_selfNext), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _or_2(_isNil_1(_aStreamNext), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _isNil_1(_anotherStreamNext);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return null;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_3(_selfNext, _aStreamNext, _anotherStreamNext);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_self);
      _reset_1(_aStream);
      return _reset_1(_anotherStream);
    });
  },
  "{ :self :aStream :anotherStream :aBlock:/3 |\n\t\tBlockStream {\n\t\t\tlet selfNext = self.next;\n\t\t\tlet aStreamNext = aStream.next;\n\t\t\tlet anotherStreamNext = anotherStream.next;\n\t\t\t(selfNext.isNil | {\n\t\t\t\taStreamNext.isNil | {\n\t\t\t\t\tanotherStreamNext.isNil\n\t\t\t\t}\n\t\t\t}).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(selfNext, aStreamNext, anotherStreamNext)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset;\n\t\t\tanotherStream.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Stream",
  "BlockStream",
  "withCollect",
  ["self", "aStream", "aBlock:/2"],
  function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
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
      /* Temporaries */
      let _selfNext = _next_1(_self);
      let _aStreamNext = _next_1(_aStream);
      /* Statements */
      return _if_3(
        _or_2(_isNil_1(_selfNext), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _isNil_1(_aStreamNext);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return null;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_2(_selfNext, _aStreamNext);
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _reset_1(_self);
      return _reset_1(_aStream);
    });
  },
  "{ :self :aStream :aBlock:/2 |\n\t\tBlockStream {\n\t\t\tlet selfNext = self.next;\n\t\t\tlet aStreamNext = aStream.next;\n\t\t\tselfNext.isNil.or {\n\t\t\t\taStreamNext.isNil\n\t\t\t}.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\taBlock(selfNext, aStreamNext)\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "BlockStream",
  "adaptToStreamAndApply",
  ["self", "aStream", "aBlock:/2"],
  function (_self, _aStream, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStream, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aStream, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aStream :aBlock:/2 |\n\t\taStream.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);
