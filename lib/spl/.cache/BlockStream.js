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
  "{ :self :aStream :aBlock:/2 |\n\t\tlet atEnd = false;\n\t\tBlockStream {\n\t\t\tatEnd.if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tlet p = self.next;\n\t\t\t\tlet q = aStream.next;\n\t\t\t\t(\n\t\t\t\t\tp.isNil | {\n\t\t\t\t\t\tq.isNil\n\t\t\t\t\t}\n\t\t\t\t).if {\n\t\t\t\t\tatEnd := true;\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\taBlock(p, q)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.reset;\n\t\t\taStream.reset;\n\t\t\tatEnd := false\n\t\t}\n\t}",
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
