sl.addTrait("Iterator", "Iterator");

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "any",
  ["self", "numberOfElements"],
  function (_self, _numberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numberOfElements";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _next_2(_self, _numberOfElements);
  },
  "{ :self :numberOfElements |\n\t\tself.next(numberOfElements)\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "asIterator",
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

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _each = _next_1(_self);
    /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isNil_1(_each);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_each);
      return _each = _next_1(_self);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet each = self.next;\n\t\t{\n\t\t\teach.isNil\n\t\t}.whileFalse {\n\t\t\taBlock(each);\n\t\t\teach := self.next\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "isIterator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "Iterator>>next");
  },
  "{ :self |\n\t\tself.typeResponsibility('Iterator>>next')\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "next",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addLast_2(_answer, _next_1(_self));
    });
    return _answer;
  },
  "{ :self :anInteger |\n\t\tlet answer = [];\n\t\tanInteger.timesRepeat {\n\t\t\tanswer.addLast(self.next)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextInto",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nextIntoStartingAt_4(_self, _size_1(_aCollection), _aCollection, 1);
  },
  "{ :self :aCollection |\n\t\tself.nextIntoStartingAt(aCollection.size, aCollection, 1)\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextIntoStartingAt",
  ["self", "n", "aCollection", "startIndex"],
  function (_self, _n, _aCollection, _startIndex) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _n, _aCollection, _startIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _count = _readIntoStartingAtCount_4(
      _self,
      _aCollection,
      _startIndex,
      _n,
    );
    /* Statements */
    return _if_3(_equalsSign_2(_count, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aCollection;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _copyFromTo_3(
        _aCollection,
        1,
        _hyphenMinus_2(_plusSign_2(_startIndex, _count), 1),
      );
    });
  },
  "{ :self :n :aCollection :startIndex |\n\t\tlet count = self.readIntoStartingAtCount(aCollection, startIndex, n);\n\t\t(count = n).if {\n\t\t\taCollection\n\t\t} {\n\t\t\taCollection.copyFromTo(1, startIndex + count - 1)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextMatchFor",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_anObject, _next_1(_self));
  },
  "{ :self :anObject |\n\t\tanObject = self.next\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextOrUpToEnd",
  ["self", "maxNumberOfElements"],
  function (_self, _maxNumberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxNumberOfElements";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _timesRepeat_2(_maxNumberOfElements, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _item = _next_1(_self);
        /* Statements */
        _ifNil_2(_item, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(_answer);
        });
        return _addLast_2(_answer, _item);
      });
      return _answer;
    });
  },
  "{ :self :maxNumberOfElements |\n\t\tlet answer = [];\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tmaxNumberOfElements.timesRepeat {\n\t\t\t\tlet item = self.next;\n\t\t\t\titem.ifNil {\n\t\t\t\t\tanswer.return\n\t\t\t\t};\n\t\t\t\tanswer.addLast(item)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextSatisfy",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_aBlock_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(_each);
        });
      });
      return _error_1("Iterator>>nextSatisfy: no satisfactory element");
    });
  },
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\taBlock(each).ifTrue {\n\t\t\t\t\teach.return\n\t\t\t\t}\n\t\t\t};\n\t\t\t'Iterator>>nextSatisfy: no satisfactory element'.error\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextUntil",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _nextWhile_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _not_1(_aBlock_1(_each));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.nextWhile { :each |\n\t\t\teach.aBlock.not\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "nextWhile",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = null;
    /* Statements */
    _doWhileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _next = _next_1(_self);
      return _addLast_2(_answer, _next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_next);
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tlet next = nil;\n\t\t{\n\t\t\tnext := self.next;\n\t\t\tanswer.addLast(next)\n\t\t}.doWhileTrue {\n\t\t\tnext.aBlock\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "readIntoStartingAtCount",
  ["self", "aCollection", "startIndex", "n"],
  function (_self, _aCollection, _startIndex, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aCollection, _startIndex, _n";
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
      _toDo_3(0, _hyphenMinus_2(_n, 1), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _obj = null;
        /* Statements */
        _obj = _ifNil_2(_next_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(_i);
        });
        return _atPut_3(_aCollection, _plusSign_2(_startIndex, _i), _obj);
      });
      return _n;
    });
  },
  "{ :self :aCollection :startIndex :n |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t0.toDo(n - 1) { :i |\n\t\t\t\tlet obj = nil;\n\t\t\t\tobj := self.next.ifNil {\n\t\t\t\t\ti.return\n\t\t\t\t};\n\t\t\t\taCollection[startIndex + i] := obj\n\t\t\t};\n\t\t\tn\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "upTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = _next_1(_self);
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _verticalLine_2(_equalsSign_2(_next, null), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_next, _anObject);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _addLast_2(_answer, _next);
      return _next = _next_1(_self);
    });
    return _answer;
  },
  "{ :self :anObject |\n\t\tlet answer = [];\n\t\tlet next = self.next;\n\t\t{\n\t\t\tnext = nil | {\n\t\t\t\tnext = anObject\n\t\t\t}\n\t\t}.whileFalse {\n\t\t\tanswer.addLast(next);\n\t\t\tnext := self.next\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Iterator",
  "Iterator",
  "upToEnd",
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
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addLast_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.do { :each |\n\t\t\tanswer.addLast(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Iterator",
  "isIterator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
