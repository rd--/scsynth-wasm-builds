sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeFirstMiddleLastIntoBy",
  ["self", "first", "middle", "last", "destination", "aBlock:/2"],
  sl.annotateFunction(
    function (_self, _first, _middle, _last, _destination, _aBlock_2) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _first, _middle, _last, _destination, _aBlock_2";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _first;
      let _i2 = _plusSign_2(_middle, 1);
      let _val1 = _at_2(_self, _i1);
      let _val2 = _at_2(_self, _i2);
      let _out = _hyphenMinus_2(_first, 1);
      /* Statements */
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _lessThanSignEqualsSign_2(_i1, _middle),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_i2, _last);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _aBlock_2(_val1, _val2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _out = _plusSign_2(_out, 1);
              _i1 = _plusSign_2(_i1, 1);
              _atPut_3(_destination, _out, _val1);
              return _val1 = _at_2(_self, _i1);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _out = _plusSign_2(_out, 1);
              _i2 = _plusSign_2(_i2, 1);
              _atPut_3(_destination, _out, _val2);
              return _val2 = _atWrap_2(_self, _i2);
            }, []),
          );
        }, []),
      );
      return _if_3(
        _lessThanSignEqualsSign_2(_i1, _middle),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _replaceFromToWithStartingAt_5(
            _destination,
            _plusSign_2(_out, 1),
            _last,
            _self,
            _i1,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _replaceFromToWithStartingAt_5(
            _destination,
            _plusSign_2(_out, 1),
            _last,
            _self,
            _i2,
          );
        }, []),
      );
    },
    ["self", "first", "middle", "last", "destination", "aBlock:/2"],
  ),
  "{ :self :first :middle :last :destination :aBlock:/2 | let i1 = first; let i2 = +(middle, 1); let val1 = at(self, i1); let val2 = at(self, i2); let out = -(first, 1); whileTrue({ &(<=(i1, middle), { <=(i2, last) }) }, { if(aBlock(val1, val2), { out := +(out, 1); i1 := +(i1, 1); atPut(destination, out, val1); val1 := at(self, i1) }, { out := +(out, 1); i2 := +(i2, 1); atPut(destination, out, val2); val2 := atWrap(self,i2) }) }); if((<=(i1, middle)), { replaceFromToWithStartingAt(destination,+(out, 1), last, self, i1) }, { replaceFromToWithStartingAt(destination,+(out, 1), last, self, i2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortFromToBy",
  ["self", "startIndex", "stopIndex", "aBlock:/2"],
  sl.annotateFunction(function (_self, _startIndex, _stopIndex, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _startIndex, _stopIndex, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSignEqualsSign_2(_size, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_startIndex, _stopIndex);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _ifFalse_2(
          _lessThanSignEqualsSign_2(1, _startIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _startIndex);
          }, []),
        );
        _ifFalse_2(
          _lessThanSignEqualsSign_2(_stopIndex, _size),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _stopIndex);
          }, []),
        );
        _ifFalse_2(
          _lessThanSign_2(_startIndex, _stopIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _errorSubscriptBounds_2(_self, _startIndex);
          }, []),
        );
        _mergeSortFromToIntoBy_5(
          _shallowCopy_1(_self),
          _startIndex,
          _stopIndex,
          _self,
          _aBlock_2,
        );
        return _self;
      }, []),
    );
  }, ["self", "startIndex", "stopIndex", "aBlock:/2"]),
  "{ :self :startIndex :stopIndex :aBlock:/2 | let size = size(self); if((|(<=(size, 1), { =(startIndex, stopIndex) })), { self }, { ifFalse((<=(1, startIndex)), { errorSubscriptBounds(self,startIndex) }); ifFalse((<=(stopIndex, size)), { errorSubscriptBounds(self,stopIndex) }); ifFalse((<(startIndex, stopIndex)), { errorSubscriptBounds(self,startIndex) }); mergeSortFromToIntoBy(shallowCopy(self),startIndex, stopIndex, self, aBlock:/2); self }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortFromToIntoBy",
  ["self", "firstIndex", "lastIndex", "destination", "aBlock:/2"],
  sl.annotateFunction(
    function (_self, _firstIndex, _lastIndex, _destination, _aBlock_2) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _firstIndex, _lastIndex, _destination, _aBlock_2";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _n = _hyphenMinus_2(_lastIndex, _firstIndex);
      /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_n, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_n, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _self;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _firstObject = _at_2(_self, _firstIndex);
              let _lastObject = _at_2(_self, _lastIndex);
              /* Statements */
              _if_3(
                _aBlock_2(_firstObject, _lastObject),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _atPut_3(_destination, _lastIndex, _lastObject);
                  return _atPut_3(_destination, _firstIndex, _firstObject);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _atPut_3(_destination, _lastIndex, _firstObject);
                  return _atPut_3(_destination, _firstIndex, _lastObject);
                }, []),
              );
              return _self;
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _n = _solidusSolidus_2(_plusSign_2(_firstIndex, _lastIndex), 2);
          _mergeSortFromToIntoBy_5(
            _destination,
            _firstIndex,
            _n,
            _self,
            _aBlock_2,
          );
          _mergeSortFromToIntoBy_5(
            _destination,
            _plusSign_2(_n, 1),
            _lastIndex,
            _self,
            _aBlock_2,
          );
          return _mergeFirstMiddleLastIntoBy_6(
            _self,
            _firstIndex,
            _n,
            _lastIndex,
            _destination,
            _aBlock_2,
          );
        }, []),
      );
    },
    ["self", "firstIndex", "lastIndex", "destination", "aBlock:/2"],
  ),
  "{ :self :firstIndex :lastIndex :destination :aBlock:/2 | let n = -(lastIndex, firstIndex); if((<=(n, 1)), { if((=(n, 0)), { self }, { let firstObject = at(self, firstIndex); let lastObject = at(self, lastIndex); if(aBlock(firstObject, lastObject), { atPut(destination, lastIndex, lastObject); atPut(destination, firstIndex, firstObject) }, { atPut(destination, lastIndex, firstObject); atPut(destination, firstIndex, lastObject) }); self }) }, { n := //(+(firstIndex, lastIndex), 2); mergeSortFromToIntoBy(destination,firstIndex, n, self, aBlock:/2); mergeSortFromToIntoBy(destination,+(n, 1), lastIndex, self, aBlock:/2); mergeFirstMiddleLastIntoBy(self,firstIndex, n, lastIndex, destination, aBlock:/2) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortBy",
  ["self", "aSortBlock:/2"],
  sl.annotateFunction(function (_self, _aSortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortFromToBy_4(_self, 1, _size_1(_self), _aSortBlock_2);
  }, ["self", "aSortBlock:/2"]),
  "{ :self :aSortBlock:/2 | mergeSortFromToBy(self,1, size(self), aSortBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortBy_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self | mergeSortBy(self,<) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortWithIndices",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
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
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _mergeSortBy_2(
          _withIndexCollect_2(
            _self,
            sl.annotateFunction(function (_each, _index) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _each, _index";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinusGreaterThanSign_2(_each, _index);
            }, ["each", "index"]),
          ),
          sl.annotateFunction(function (_p, _q) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _p, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _sortBlock_2(_key_1(_p), _key_1(_q));
          }, ["p", "q"]),
        );
      }, []),
    );
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 | ifEmpty(self, { [] }, { mergeSortBy(withIndexCollect(self, { :each :index | ->(each, index) }), { :p :q | sortBlock(key(p), key(q)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MergeSort",
  "mergeSortWithIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeSortWithIndices_2(_self, _lessThanSign_2);
  }, ["self"]),
  "{ :self | mergeSortWithIndices(self,<) }",
);
