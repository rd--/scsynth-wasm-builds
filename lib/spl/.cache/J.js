sl.extendTypeOrTraitWithMethod(
  "@Object",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  sl.annotateFunction(function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_levels, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_bubble_3(_self, _depth, _hyphenMinus_2(_levels, 1))];
      }, []),
    );
  }, ["self", "depth", "levels"]),
  "{ :self :depth :levels | if((<=(levels, 1)), { [self] }, { [bubble(self,depth, -(levels, 1))] }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  sl.annotateFunction(function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "depth", "levels"]),
  "{ :self :depth :levels | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "J",
  "maxSizeAtDepth",
  ["self", "depth"],
  sl.annotateFunction(function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxSize = 0;
    /* Statements */
    return _if_3(
      _equalsSign_2(_depth, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _size = _if_3(
              _isCollection_1(_each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _maxSizeAtDepth_2(_each, _hyphenMinus_2(_depth, 1));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
            );
            /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_size, _maxSize),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _maxSize = _size;
              }, []),
            );
          }, ["each"]),
        );
        return _maxSize;
      }, []),
    );
  }, ["self", "depth"]),
  "{ :self :depth | let maxSize = 0; if((=(depth, 1)), { size(self) }, { do(self, { :each | let size = if((isCollection(each)), { maxSizeAtDepth(each,-(depth, 1)) }, { 1 }); ifTrue((>(size, maxSize)), { maxSize := size }) }); maxSize }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  sl.annotateFunction(function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_depth, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_levels, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_self];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_bubble_3(_self, _depth, _hyphenMinus_2(_levels, 1))];
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _bubble_3(_each, _hyphenMinus_2(_depth, 1), _levels);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "depth", "levels"]),
  "{ :self :depth :levels | if((<=(depth, 0)), { if((<=(levels, 1)), { [self] }, { [bubble(self,depth, -(levels, 1))] }) }, { collect(self, { :each | bubble(each,-(depth, 1), levels) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "J",
  "shapeIndicesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuplesDo_2(
      _collect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _to_2(1, _each);
        }, ["each"]),
      ),
      _aBlock_1,
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | tuplesDo(collect(self, { :each | to(1,each) }),aBlock:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "J",
  "shapeIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tuples_1(_collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _to_2(1, _each);
      }, ["each"]),
    ));
  }, ["self"]),
  "{ :self | tuples(collect(self, { :each | to(1,each) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "J",
  "slice",
  ["self", "cuts"],
  sl.annotateFunction(function (_self, _cuts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cuts";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_cuts), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _firstCut = _first_1(_cuts);
        let _answer = _ifNil_3(
          _firstCut,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _copy_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atAll_2(_self, _asCollection_1(_firstCut));
          }, []),
        );
        /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_cuts), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unbubble_3(_answer, 0, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _cuts = _allButFirst_1(_cuts);
            return _unbubble_3(
              _collect_2(
                _answer,
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _isCollection_1(_each),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _slice_2(_each, _cuts);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _each;
                    }, []),
                  );
                }, ["each"]),
              ),
              0,
              1,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "cuts"]),
  "{ :self :cuts | if((=(size(cuts), 0)), { copy(self) }, { let firstCut = first(cuts); let answer = ifNil(firstCut, { copy(self) }, { atAll(self,asCollection(firstCut)) }); if((=(size(cuts), 1)), { unbubble(answer,0, 1) }, { cuts := allButFirst(cuts); unbubble(collect(answer, { :each | if(isCollection(each), { slice(each,cuts) }, { each }) }),0, 1) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  sl.annotateFunction(function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_depth, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_size_1(_self), 1),
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
            return _if_3(
              _lessThanSignEqualsSign_2(_levels, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _first_1(_self);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _unbubble_3(
                  _first_1(_self),
                  _depth,
                  _hyphenMinus_2(_levels, 1),
                );
              }, []),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _unbubble_3(_each, _hyphenMinus_2(_depth, 1), 1);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "depth", "levels"]),
  "{ :self :depth :levels | if((<=(depth, 0)), { if((>(size(self), 1)), { self }, { if((<=(levels, 1)), { first(self) }, { unbubble(first(self),depth, -(levels, 1)) }) }) }, { collect(self, { :each | unbubble(each,-(depth, 1), 1) }) }) }",
);
