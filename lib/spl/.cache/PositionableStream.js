sl.addTrait("PositionableStream", "PositionableStream");

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "atEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@PositionableStream>>atEnd");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'@PositionableStream>>atEnd') }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "back",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _equalsSign_2(_position_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@PositionableStream>>back: cannot go back");
      }, []),
    );
    _skip_2(_self, -1);
    return _peek_1(_self);
  }, ["self"]),
  "{ :self | ifTrue((=(position(self), 0)), { error(self,'@PositionableStream>>back: cannot go back') }); skip(self,-1); peek(self) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _atEnd_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_position_1(_self), 0);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(atEnd(self), { =(position(self), 0) }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "last",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_collection_1(_self), _position_1(_self));
  }, ["self"]),
  "{ :self | at(collection(self),position(self)) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "nextMatchAll",
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
      } /* Temporaries */
      let _savedPosition = _position_1(_self);
      /* Statements */
      _do_2(
        _aCollection,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _equalsSign_2(_next_1(_self), _each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _position_2(_self, _savedPosition);
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection | valueWithReturn({ :return:/1 | let savedPosition = position(self); do(aCollection, { :each | ifFalse((=(next(self), each)), { position(self, savedPosition); return(false) }) }); true }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "on",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _collection_2(_self, _aCollection);
    _position_2(_self, 0);
    _if_2(
      _isReadStream_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _readLimit_2(_self, _size_1(_aCollection));
      }, []),
    );
    return _reset_1(_self);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | collection(self, aCollection); position(self, 0); if(isReadStream(self), { readLimit(self, size(aCollection)) }); reset(self) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "originalContents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collection_1(_self);
  }, ["self"]),
  "{ :self | collection(self) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "peek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _atEnd_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextObject = _next_1(_self);
        /* Statements */
        _position_2(_self, _hyphenMinus_2(_position_1(_self), 1));
        return _nextObject;
      }, []),
    );
  }, ["self"]),
  "{ :self | if(atEnd(self), { nil }, { let nextObject = next(self); position(self, -(position(self), 1)); nextObject }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "peekFor",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _atEnd_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(false);
        }, []),
      );
      _ifTrue_2(
        _equalsSign_2(_next_1(_self), _anObject),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(true);
        }, []),
      );
      _position_2(_self, _hyphenMinus_2(_position_1(_self), 1));
      return false;
    }, ["return:/1"]));
  }, ["self", "anObject"]),
  "{ :self :anObject | valueWithReturn({ :return:/1 | ifTrue(atEnd(self), { return(false) }); ifTrue((=(next(self), anObject)), { return(true) }); position(self, -(position(self), 1)); false }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "position",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _positionIndex_1(_self);
  }, ["self"]),
  "{ :self | positionIndex(self) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "position",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _positionError_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _positionIndex_2(_self, _anInteger);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | if(isNegative(anInteger), { positionError(self) }, { positionIndex(self, anInteger) }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "positionError",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@PositionableStream>>positionError: position out of bounds",
    );
  }, ["self"]),
  "{ :self | error(self,'@PositionableStream>>positionError: position out of bounds') }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "reset",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, 0);
  }, ["self"]),
  "{ :self | position(self, 0) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "skip",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, _plusSign_2(_position_1(_self), _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger | position(self, +(position(self), anInteger)) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "skipTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _whileFalse_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _atEnd_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_next_1(_self), _anObject),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, []),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "anObject"]),
  "{ :self :anObject | valueWithReturn({ :return:/1 | whileFalse({ atEnd(self) }, { ifTrue((=(next(self), anObject)), { return(true) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "upTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _withWriteStream_2(
      _self,
      sl.annotateFunction(function (_aStream) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aStream";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _element = null;
        /* Statements */
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _atEnd_1(_self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _element = _next_1(_self);
                return _equalsSign_2(_element, _anObject);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextPut_2(_aStream, _element);
          }, []),
        );
      }, ["aStream"]),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | withWriteStream(self, { :aStream | let element = nil; whileFalse({ |(atEnd(self), { element := next(self); =(element, anObject) }) }, { nextPut(aStream,element) }) }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "upToEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withWriteStream_2(
      _self,
      sl.annotateFunction(function (_aStream) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aStream";
          throw new Error(errorMessage);
        } /* Statements */
        return _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atEnd_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextPut_2(_aStream, _next_1(_self));
          }, []),
        );
      }, ["aStream"]),
    );
  }, ["self"]),
  "{ :self | withWriteStream(self, { :aStream | whileFalse({ atEnd(self) }, { nextPut(aStream,next(self)) }) }) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "upToPosition",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _next_2(_self, _hyphenMinus_2(_anInteger, _position_1(_self)));
  }, ["self", "anInteger"]),
  "{ :self :anInteger | next(self,-(anInteger, position(self))) }",
);

sl.addMethodToExistingTrait(
  "PositionableStream",
  "PositionableStream",
  "withWriteStream",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aStream = _asWriteStream_1(
      _new_2(_species_1(_collection_1(_self)), 100),
    );
    /* Statements */
    _aBlock_1(_aStream);
    return _contents_1(_aStream);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let aStream = asWriteStream(new(species(collection(self)),100)); aBlock(aStream); contents(aStream) }",
);
