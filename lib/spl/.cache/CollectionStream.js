/*  Requires: PositionableStream Stream  */

sl.addType(
  false,
  "CollectionStream",
  "CollectionStream",
  ["Object", "Iterator", "Stream", "PositionableStream"],
  ["collection", "positionIndex", "readLimit"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "Stream",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "PositionableStream",
  "CollectionStream",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "atEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(
      _position_1(_self),
      _readLimit_1(_self),
    );
  },
  "{ :self | >=(position(self), readLimit(self)) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _readLimit_1(_self));
  },
  "{ :self | copyFromTo(collection(self),1, readLimit(self)) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isByteArray_1(_collection_1(_self));
  },
  "{ :self | isByteArray(collection(self)) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "next",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_position_1(_self), _readLimit_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _position_2(_self, _plusSign_2(_position_1(_self), 1));
        return _at_2(_collection_1(_self), _position_1(_self));
      },
    );
  },
  "{ :self | if((>=(position(self), readLimit(self))), { nil }, { position(self, +(position(self), 1)); at(collection(self), position(self)) }) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "next",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _endPosition = _plusSign_2(_position_1(_self), _anInteger);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_endPosition, _readLimit_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "CollectionStream>>next: not enough items in stream",
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _copyFromTo_3(
          _collection_1(_self),
          _plusSign_2(_position_1(_self), 1),
          _endPosition,
        );
        /* Statements */
        _position_2(_self, _endPosition);
        return _answer;
      },
    );
  },
  "{ :self :anInteger | let endPosition = +(position(self), anInteger); if((>(endPosition, readLimit(self))), { error(self,'CollectionStream>>next: not enough items in stream') }, { let answer = copyFromTo(collection(self),+(position(self), 1), endPosition); position(self, endPosition); answer }) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "position",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_validReadPosition_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _positionIndex_2(_self, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _positionError_1(_self);
    });
  },
  "{ :self :anInteger | if(validReadPosition(self,anInteger), { positionIndex(self, anInteger) }, { positionError(self) }) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "setFromTo",
  ["self", "newStart", "newStop"],
  function (_self, _newStart, _newStop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newStart, _newStop";
      throw new Error(errorMessage);
    } /* Statements */
    _position_2(_self, _hyphenMinus_2(_newStart, 1));
    return _readLimit_2(_self, _newStop);
  },
  "{ :self :newStart :newStop | position(self, -(newStart, 1)); readLimit(self, newStop) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "setToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, _readLimit_1(_self));
  },
  "{ :self | position(self, readLimit(self)) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readLimit_1(_self);
  },
  "{ :self | readLimit(self) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "upTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = _plusSign_2(_position_1(_self), 1);
    let _end = _indexOfStartingAtBy_4(
      _collection_1(_self),
      _anObject,
      _start,
      _equalsSign_2,
    );
    /* Statements */
    return _if_3(
      _verticalLine_2(_equalsSign_2(_end, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_end, _readLimit_1(_self));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _upToEnd_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _position_2(_self, _end);
        return _copyFromTo_3(
          _collection_1(_self),
          _start,
          _hyphenMinus_2(_end, 1),
        );
      },
    );
  },
  "{ :self :anObject | let start = +(position(self), 1); let end = indexOfStartingAtBy(collection(self),anObject, start, =); if((|(=(end, 0), { >(end, readLimit(self)) })), { upToEnd(self) }, { position(self, end); copyFromTo(collection(self),start, -(end, 1)) }) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "upToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _start = _plusSign_2(1, _position_1(_self));
    /* Statements */
    _position_2(_self, _readLimit_1(_self));
    return _copyFromTo_3(_collection_1(_self), _start, _position_1(_self));
  },
  "{ :self | let start = +(1, position(self)); position(self, readLimit(self)); copyFromTo(collection(self),start, position(self)) }",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "validReadPosition",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_anInteger, 0, _readLimit_1(_self));
  },
  "{ :self :anInteger | betweenAnd(anInteger,0, readLimit(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CollectionStream",
  "asIterator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asStream_1(_self);
  },
  "{ :self | asStream(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CollectionStream",
  "asIterator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asStream_1(_self);
  },
  "{ :self | asStream(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CollectionStream",
  "asStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newCollectionStream_0(),
      _self,
      0,
      _size_1(_self),
    );
  },
  "{ :self | initializeSlots(newCollectionStream(),self, 0, size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CollectionStream",
  "asStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newCollectionStream_0(),
      _self,
      0,
      _size_1(_self),
    );
  },
  "{ :self | initializeSlots(newCollectionStream(),self, 0, size(self)) }",
);
