sl.addTrait("Iterable", "Iterable");

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "ampersand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _value_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,value:/1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "verticalLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _value_1);
  }, ["self"]),
  "{ :self | anySatisfy(self,value:/1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "absMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _injectInto_3(
      _self,
      _abs_1(_anyOne_1(_self)),
      sl.annotateFunction(function (_answer, _each) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _answer, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_2(_answer, _abs_1(_each));
      }, ["answer", "each"]),
    );
  }, ["self"]),
  "{ :self | injectInto(self, abs(anyOne(self)), { :answer :each | max(answer,abs(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "allSatisfy",
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
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | do(self, { :each | ifFalse(aBlock(each), { return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "allTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self | allSatisfy(self,identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "anyOne",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
          return _return_1(_each);
        }, ["each"]),
      );
      return _error_2(_self, "@Iterable>>anyOne: empty iterable");
    }, ["return:/1"]));
  }, ["self"]),
  "{ :self | valueWithReturn({ :return:/1 | do(self, { :each | return(each) }); error(self,'@Iterable>>anyOne: empty iterable') }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "anySatisfy",
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
              return _return_1(true);
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue(aBlock(each), { return(true) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "anyTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self | anySatisfy(self,identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "contents",
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
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; do(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "count",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
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
            return _answer = _plusSign_2(_answer, 1);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = 0; do(self, { :each | ifTrue(aBlock(each), { answer := +(answer, 1) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "countAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(
      _self,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, ["unusedItem"]),
    );
  }, ["self"]),
  "{ :self | count(self, { :unusedItem | true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "countDistinct",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _set = _Set_1(_aBlock_2);
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_set, _each);
      }, ["each"]),
    );
    return _size_1(_set);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let set = Set(aBlock:/2); do(self, { :each | include(set,each) }); size(set) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepAllSatisfy",
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
      _deepDo_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | deepDo(self, { :each | ifFalse(aBlock(each), { return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_typeOf_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deepDo_2(_each, _aBlock_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let type = typeOf(self); do(self, { :each | if((=(typeOf(each), type)), { deepDo(each,aBlock:/1) }, { aBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _max_2);
  }, ["self"]),
  "{ :self | deepReduce(self,max:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepMin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _min_2);
  }, ["self"]),
  "{ :self | deepReduce(self,min:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepReduce",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _deepDo_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | reduceBy(self,aBlock:/2, deepDo:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "deepSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _plusSign_2);
  }, ["self"]),
  "{ :self | deepReduce(self,+) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(
      _self,
      _aBlock_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Iterable>>detect: not found");
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | detectIfNone(self, aBlock:/1, { error(self,'@Iterable>>detect: not found') }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectIfFound",
  ["self", "aBlock:/1", "foundBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1, _foundBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _foundBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(
      _self,
      _aBlock_1,
      _foundBlock_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "aBlock:/1", "foundBlock:/1"]),
  "{ :self :aBlock:/1 :foundBlock:/1 | detectIfFoundIfNone(self, aBlock:/1, foundBlock:/1, { nil }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectIfFoundIfNone",
  ["self", "aBlock:/1", "foundBlock:/1", "exceptionBlock:/0"],
  sl.annotateFunction(
    function (_self, _aBlock_1, _foundBlock_1, _exceptionBlock_0) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _aBlock_1, _foundBlock_1, _exceptionBlock_0";
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
                return _return_1(_foundBlock_1(_each));
              }, []),
            );
          }, ["each"]),
        );
        return _exceptionBlock_0();
      }, ["return:/1"]));
    },
    ["self", "aBlock:/1", "foundBlock:/1", "exceptionBlock:/0"],
  ),
  "{ :self :aBlock:/1 :foundBlock:/1 :exceptionBlock:/0 | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue(aBlock(each), { return(foundBlock(each)) }) }); exceptionBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectIfNone",
  ["self", "aBlock:/1", "whenAbsent:/0"],
  sl.annotateFunction(function (_self, _aBlock_1, _whenAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _whenAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_self, _aBlock_1, _identity_1, _whenAbsent_0);
  }, ["self", "aBlock:/1", "whenAbsent:/0"]),
  "{ :self :aBlock:/1 :whenAbsent:/0 | detectIfFoundIfNone(self,aBlock:/1, identity:/1, whenAbsent:/0) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectSum",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum = _plusSign_2(_sum, _aBlock_1(_each));
      }, ["each"]),
    );
    return _sum;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let sum = 0; do(self, { :each | sum := +(sum, aBlock(each)) }); sum }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectMax",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxElement = null;
    let _maxValue = null;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifNil_3(
          _maxValue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _maxElement = _each;
            return _maxValue = _aBlock_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _nextValue = _aBlock_1(_each);
            /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_nextValue, _maxValue),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _maxElement = _each;
                return _maxValue = _nextValue;
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _maxElement;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let maxElement = nil; let maxValue = nil; do(self, { :each | ifNil(maxValue, { maxElement := each; maxValue := aBlock(each) }, { let nextValue = aBlock(each); ifTrue((>(nextValue, maxValue)), { maxElement := each; maxValue := nextValue }) }) }); maxElement }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "detectMin",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _minElement = null;
    let _minValue = null;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifNil_3(
          _minValue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _minElement = _each;
            return _minValue = _aBlock_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _nextValue = _aBlock_1(_each);
            /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_nextValue, _minValue),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _minElement = _each;
                return _minValue = _nextValue;
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _minElement;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let minElement = nil; let minValue = nil; do(self, { :each | ifNil(minValue, { minElement := each; minValue := aBlock(each) }, { let nextValue = aBlock(each); ifTrue((<(nextValue, minValue)), { minElement := each; minValue := nextValue }) }) }); minElement }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Iterable>>do");
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | typeResponsibility(self,'@Iterable>>do') }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "doSeparatedBy",
  ["self", "elementBlock:/1", "separatorBlock:/0"],
  sl.annotateFunction(function (_self, _elementBlock_1, _separatorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _elementBlock_1, _separatorBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _beforeFirst = true;
    /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _if_3(
          _beforeFirst,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _beforeFirst = false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _separatorBlock_0();
          }, []),
        );
        return _elementBlock_1(_each);
      }, ["each"]),
    );
  }, ["self", "elementBlock:/1", "separatorBlock:/0"]),
  "{ :self :elementBlock:/1 :separatorBlock:/0 | let beforeFirst = true; do(self, { :each | if(beforeFirst, { beforeFirst := false }, { separatorBlock() }); elementBlock(each) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "doWithout",
  ["self", "aBlock:/1", "anItem"],
  sl.annotateFunction(function (_self, _aBlock_1, _anItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _anItem";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_anItem, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1", "anItem"]),
  "{ :self :aBlock:/1 :anItem | do(self, { :each | ifFalse((=(anItem, each)), { aBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "includesBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _anObject);
      }, ["each"]),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | anySatisfy(self, { :each | aBlock(each, anObject) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_self, _anObject, _equalsSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | includesBy(self,anObject, =) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "includesAnyOf",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _aCollection,
        sl.annotateFunction(function (_elem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _elem";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _includes_2(_self, _elem),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["elem"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection | valueWithReturn({ :return:/1 | do(aCollection, { :elem | ifTrue(includes(self,elem), { return(true) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "includesAllOf",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _aCollection,
        sl.annotateFunction(function (_elem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _elem";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _includes_2(_self, _elem),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["elem"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection | valueWithReturn({ :return:/1 | do(aCollection, { :elem | ifFalse(includes(self,elem), { return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "injectInto",
  ["self", "initialValue", "aBlock:/2"],
  sl.annotateFunction(function (_self, _initialValue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _initialValue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _nextValue = _initialValue;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextValue = _aBlock_2(_nextValue, _each);
      }, ["each"]),
    );
    return _nextValue;
  }, ["self", "initialValue", "aBlock:/2"]),
  "{ :self :initialValue :aBlock:/2 | let nextValue = initialValue; do(self, { :each | nextValue := aBlock(nextValue, each) }); nextValue }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "isDuplicateFree",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _items = [];
      /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _includesBy_3(_items, _each, _aBlock_2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          return _add_2(_items, _each);
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | valueWithReturn({ :return:/1 | let items = []; do(self, { :each | ifTrue(includesBy(items,each, aBlock:/2), { return(false) }); add(items,each) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "isProperSubsetOf",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _includesAllOf_2(_aCollection, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tildeEqualsSign_2(_self, _aCollection);
      }, []),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection | &(includesAllOf(aCollection,self), { ~=(self, aCollection) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "isSubsetOf",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesAllOf_2(_aCollection, _self);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | includesAllOf(aCollection,self) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "levelBy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _withLevelDo_2(
      _self,
      sl.annotateFunction(function (_each, _level) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _level";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_level),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each", "level"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; withLevelDo(self, { :each :level | ifTrue(aBlock(level), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "level",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _levelBy_2(
      _self,
      sl.annotateFunction(function (_level) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _level";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aList, _level);
      }, ["level"]),
    );
  }, ["self", "aList"]),
  "{ :self :aList | levelBy(self, { :level | includes(aList,level) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _max_2);
  }, ["self"]),
  "{ :self | reduce(self,max:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "maximalBy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _collect_2(_self, _aBlock_1);
    /* Statements */
    return _atAll_2(_self, _indicesOf_2(_z, _max_1(_z)));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let z = collect(self,aBlock:/1); atAll(self,indicesOf(z,max(z))) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _min_2);
  }, ["self"]),
  "{ :self | reduce(self,min:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "minimalBy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _collect_2(_self, _aBlock_1);
    /* Statements */
    return _atAll_2(_self, _indicesOf_2(_z, _min_1(_z)));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let z = collect(self,aBlock:/1); atAll(self,indicesOf(z,min(z))) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "minMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _min = _anyOne_1(_self);
    let _max = _min;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _min = _min_2(_min, _each);
        return _max = _max_2(_max, _each);
      }, ["each"]),
    );
    return [_min, _max];
  }, ["self"]),
  "{ :self | let min = anyOne(self); let max = min; do(self, { :each | min := min(min,each); max := max(max,each) }); [min, max] }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "neumaierSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sum = 0.0;
    let _c = 0.0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _t = _plusSign_2(_sum, _each);
        /* Statements */
        _if_3(
          _greaterThanSignEqualsSign_2(_abs_1(_sum), _abs_1(_each)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(
              _c,
              _plusSign_2(_hyphenMinus_2(_sum, _t), _each),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(
              _c,
              _plusSign_2(_hyphenMinus_2(_each, _t), _sum),
            );
          }, []),
        );
        return _sum = _t;
      }, ["each"]),
    );
    return _plusSign_2(_sum, _c);
  }, ["self"]),
  "{ :self | let sum = 0.0; let c = 0.0; do(self, { :each | let t = +(sum, each); if((>=(abs(sum), abs(each))), { c := +(c, (+((-(sum, t)), each))) }, { c := +(c, (+((-(each, t)), sum))) }); sum := t }); +(sum, c) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "noneSatisfy",
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
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue(aBlock(each), { return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "noneTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self | noneSatisfy(self,identity:/1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_anObject, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tally = _plusSign_2(_tally, 1);
          }, []),
        );
      }, ["each"]),
    );
    return _tally;
  }, ["self", "anObject"]),
  "{ :self :anObject | let tally = 0; do(self, { :each | ifTrue((=(anObject, each)), { tally := +(tally, 1) }) }); tally }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "oneSatisfies",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_count_2(_self, _aBlock_1), 1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | =(count(self,aBlock:/1), 1) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "product",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
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
        return _reduce_2(_self, _asterisk_2);
      }, []),
    );
  }, ["self"]),
  "{ :self | ifEmpty(self, { 1 }, { reduce(self,*) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "range",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_max_1(_self), _min_1(_self));
  }, ["self"]),
  "{ :self | -(max(self), min(self)) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "reduceBy",
  ["self", "aBlock:/2", "iterationBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2, _iterationBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_2, _iterationBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _isFirst = true;
    let _nextValue = null;
    /* Statements */
    _iterationBlock_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFirst,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _nextValue = _each;
            return _isFirst = false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextValue = _aBlock_2(_nextValue, _each);
          }, []),
        );
      }, ["each"]),
    );
    _ifTrue_2(
      _isFirst,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Iterable>>reduceBy: empty collection");
      }, []),
    );
    return _nextValue;
  }, ["self", "aBlock:/2", "iterationBlock:/2"]),
  "{ :self :aBlock:/2 :iterationBlock:/2 | let isFirst = true; let nextValue = nil; iterationBlock(self, { :each | if(isFirst, { nextValue := each; isFirst := false }, { nextValue := aBlock(nextValue, each) }) }); ifTrue(isFirst, { error(self,'@Iterable>>reduceBy: empty collection') }); nextValue }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "reduce",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _do_2);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | reduceBy(self,aBlock:/2, do:/2) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "rejectThenDo",
  ["self", "rejectBlock:/1", "doBlock:/1"],
  sl.annotateFunction(function (_self, _rejectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _rejectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _rejectBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _doBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "rejectBlock:/1", "doBlock:/1"]),
  "{ :self :rejectBlock:/1 :doBlock:/1 | do(self, { :each | ifFalse(rejectBlock(each), { doBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "selectThenDo",
  ["self", "selectBlock:/1", "doBlock:/1"],
  sl.annotateFunction(function (_self, _selectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _selectBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _doBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "selectBlock:/1", "doBlock:/1"]),
  "{ :self :selectBlock:/1 :doBlock:/1 | do(self, { :each | ifTrue(selectBlock(each), { doBlock(each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _tally = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tally = _plusSign_2(_tally, 1);
      }, ["each"]),
    );
    return _tally;
  }, ["self"]),
  "{ :self | let tally = 0; do(self, { :each | tally := +(tally, 1) }); tally }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "sum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _plusSign_2);
  }, ["self"]),
  "{ :self | reduce(self,+) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "sumOfSquares",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _injectInto_3(
      _self,
      0,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_i, _squared_1(_j));
      }, ["i", "j"]),
    );
  }, ["self"]),
  "{ :self | injectInto(self, 0, { :i :j | +(i, squared(j)) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "withLevelDo",
  ["self", "aBlock:/2", "level"],
  sl.annotateFunction(function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_typeOf_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _withLevelDo_3(_each, _aBlock_2, _plusSign_2(_level, 1));
            return _aBlock_2(_each, _level);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _level);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/2", "level"]),
  "{ :self :aBlock:/2 :level | let type = typeOf(self); do(self, { :each | if((=(typeOf(each), type)), { withLevelDo(each,aBlock:/2, +(level, 1)); aBlock(each, level) }, { aBlock(each, level) }) }) }",
);

sl.addMethodToExistingTrait(
  "Iterable",
  "Iterable",
  "withLevelDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _withLevelDo_3(_self, _aBlock_2, 1);
    return _aBlock_2(_self, 0);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | withLevelDo(self,aBlock:/2, 1); aBlock(self, 0) }",
);
