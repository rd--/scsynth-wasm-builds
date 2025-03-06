sl.addTrait("Iterator", "Iterator");

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "any",
  ["self", "numberOfElements"],
  sl.annotateFunction(function (_self, _numberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numberOfElements";
      throw new Error(errorMessage);
    } /* Statements */
    return _next_2(_self, _numberOfElements);
  }, ["self", "numberOfElements"]),
  "{ :self :numberOfElements | next(self,numberOfElements) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "asIterator",
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

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _each = _next_1(_self);
    /* Statements */
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNil_1(_each);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_each);
        return _each = _next_1(_self);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let each = next(self); whileFalse({ isNil(each) }, { aBlock(each); each := next(self) }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "isIterator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "next",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "Iterator>>next");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'Iterator>>next') }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "next",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addLast_2(_answer, _next_1(_self));
      }, []),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger | let answer = []; timesRepeat(anInteger, { addLast(answer,next(self)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextInto",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextIntoStartingAt_4(_self, _size_1(_aCollection), _aCollection, 1);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | nextIntoStartingAt(self,size(aCollection), aCollection, 1) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextIntoStartingAt",
  ["self", "n", "aCollection", "startIndex"],
  sl.annotateFunction(function (_self, _n, _aCollection, _startIndex) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _n, _aCollection, _startIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _readIntoStartingAtCount_4(
      _self,
      _aCollection,
      _startIndex,
      _n,
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_count, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aCollection;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copyFromTo_3(
          _aCollection,
          1,
          _hyphenMinus_2(_plusSign_2(_startIndex, _count), 1),
        );
      }, []),
    );
  }, ["self", "n", "aCollection", "startIndex"]),
  "{ :self :n :aCollection :startIndex | let count = readIntoStartingAtCount(self,aCollection, startIndex, n); if((=(count, n)), { aCollection }, { copyFromTo(aCollection,1, -(+(startIndex, count), 1)) }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextMatchFor",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_anObject, _next_1(_self));
  }, ["self", "anObject"]),
  "{ :self :anObject | =(anObject, next(self)) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextOrUpToEnd",
  ["self", "maxNumberOfElements"],
  sl.annotateFunction(function (_self, _maxNumberOfElements) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxNumberOfElements";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _timesRepeat_2(
        _maxNumberOfElements,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _item = _next_1(_self);
          /* Statements */
          _ifNil_2(
            _item,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_answer);
            }, []),
          );
          return _addLast_2(_answer, _item);
        }, []),
      );
      return _answer;
    }, ["return:/1"]));
  }, ["self", "maxNumberOfElements"]),
  "{ :self :maxNumberOfElements | let answer = []; valueWithReturn({ :return:/1 | timesRepeat(maxNumberOfElements, { let item = next(self); ifNil(item, { return(answer) }); addLast(answer,item) }); answer }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextSatisfy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_each);
            }, []),
          );
        }, ["each"]),
      );
      return _error_1("Iterator>>nextSatisfy: no satisfactory element");
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue(aBlock(each), { return(each) }) }); error('Iterator>>nextSatisfy: no satisfactory element') }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextUntil",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextWhile_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_aBlock_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | nextWhile(self, { :each | not(aBlock(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "nextWhile",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = null;
    /* Statements */
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _next = _next_1(_self);
        return _addLast_2(_answer, _next);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_next);
      }, []),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; let next = nil; doWhileTrue({ next := next(self); addLast(answer,next) }, { aBlock(next) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "readIntoStartingAtCount",
  ["self", "aCollection", "startIndex", "n"],
  sl.annotateFunction(function (_self, _aCollection, _startIndex, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _aCollection, _startIndex, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _toDo_3(
        0,
        _hyphenMinus_2(_n, 1),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _obj = null;
          /* Statements */
          _obj = _ifNil_2(
            _next_1(_self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_i);
            }, []),
          );
          return _atPut_3(_aCollection, _plusSign_2(_startIndex, _i), _obj);
        }, ["i"]),
      );
      return _n;
    }, ["return:/1"]));
  }, ["self", "aCollection", "startIndex", "n"]),
  "{ :self :aCollection :startIndex :n | valueWithReturn({ :return:/1 | toDo(0, -(n, 1), { :i | let obj = nil; obj := ifNil(next(self), { return(i) }); atPut(aCollection, +(startIndex, i), obj) }); n }) }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "upTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _next_1(_self);
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_next, null),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_next, _anObject);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addLast_2(_answer, _next);
        return _next = _next_1(_self);
      }, []),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject | let answer = []; let next = next(self); whileFalse({ |(=(next, nil), { =(next, anObject) }) }, { addLast(answer,next); next := next(self) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterator",
  "Iterator",
  "upToEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addLast_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; do(self, { :each | addLast(answer,each) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Iterator",
  "isIterator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);
