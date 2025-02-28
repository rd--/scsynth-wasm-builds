/*  Requires: PositionableStream Stream WriteStream  */

sl.addType(
  false,
  "MutableCollectionStream",
  "MutableCollectionStream",
  ["Object", "Iterator", "Stream", "PositionableStream", "WriteStream"],
  ["collection", "positionIndex", "writeLimit"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MutableCollectionStream",
);

sl.copyTraitMethodsToType(
  "Iterator",
  "MutableCollectionStream",
);

sl.copyTraitMethodsToType(
  "Stream",
  "MutableCollectionStream",
);

sl.copyTraitMethodsToType(
  "PositionableStream",
  "MutableCollectionStream",
);

sl.copyTraitMethodsToType(
  "WriteStream",
  "MutableCollectionStream",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "atEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _position_1(_self));
  },
  "{ :self | copyFromTo(collection(self),1, position(self)) }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
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
  "MutableCollectionStream",
  "MutableCollectionStream",
  "growTo",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _oldSize = _size_1(_collection_1(_self));
    let _newSize = _plusSign_2(
      _anInteger,
      _max_2(_quotient_2(_oldSize, 4), 20),
    );
    let _newCollection = _new_2(_species_1(_collection_1(_self)), _newSize);
    /* Statements */
    _collection_2(
      _self,
      _replaceFromToWithStartingAt_5(
        _newCollection,
        1,
        _oldSize,
        _collection,
        1,
      ),
    );
    return _writeLimit_2(_self, _size_1(_collection_1(_self)));
  },
  "{ :self :anInteger | let oldSize = size(collection(self)); let newSize = +(anInteger, max(quotient(oldSize,4),20)); let newCollection = new(species(collection(self)),newSize); collection(self, replaceFromToWithStartingAt(newCollection,1, oldSize, collection, 1)); writeLimit(self, size(collection(self))) }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_position_1(_self), _writeLimit_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pastEndPut_2(_self, _anObject);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _position_2(_self, _plusSign_2(_position_1(_self), 1));
        return _atPut_3(_collection_1(_self), _position_1(_self), _anObject);
      },
    );
  },
  "{ :self :anObject | if((>=(position(self), writeLimit(self))), { pastEndPut(self,anObject) }, { position(self, +(position(self), 1)); atPut(collection(self), position(self), anObject) }) }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _equalsSign_2(_typeOf_1(_collection_1(_self)), _typeOf_1(_aCollection)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _newEnd = _plusSign_2(_position_1(_self), _size_1(_aCollection));
        /* Statements */
        _ifTrue_2(
          _greaterThanSign_2(_newEnd, _writeLimit_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _growTo_2(_self, _newEnd);
          },
        );
        _replaceFromToWithStartingAt_5(
          _collection_1(_self),
          _plusSign_2(_position_1(_self), 1),
          _newEnd,
          _aCollection,
          1,
        );
        return _position_2(_self, _newEnd);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(1, _size_1(_aCollection), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _nextPut_2(_self, _at_2(_aCollection, _index));
        });
      },
    );
    return _aCollection;
  },
  "{ :self :aCollection | if((=(typeOf(collection(self)), typeOf(aCollection))), { let newEnd = +(position(self), size(aCollection)); ifTrue((>(newEnd, writeLimit(self))), { growTo(self,newEnd) }); replaceFromToWithStartingAt(collection(self),+(position(self), 1), newEnd, aCollection, 1); position(self, newEnd) }, { toDo(1, size(aCollection), { :index | nextPut(self,at(aCollection, index)) }) }); aCollection }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "pastEndPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _collection_2(
      _self,
      _grownBy_2(
        _collection_1(_self),
        _min_2(_max_2(_size_1(_collection_1(_self)), 20), 1000000),
      ),
    );
    _writeLimit_2(_self, _size_1(_collection_1(_self)));
    _position_2(_self, _plusSign_2(_position_1(_self), 1));
    _atPut_3(_collection_1(_self), _position_1(_self), _anObject);
    return _anObject;
  },
  "{ :self :anObject | collection(self, grownBy(collection(self),min(max(size(collection(self)),20),1000000))); writeLimit(self, size(collection(self))); position(self, +(position(self), 1)); atPut(collection(self), position(self), anObject); anObject }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "position",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNegative_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _positionError_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _positionIndex_2(_self, _anInteger);
    });
  },
  "{ :self :anInteger | if(isNegative(anInteger), { positionError(self) }, { positionIndex(self, anInteger) }) }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, 0);
  },
  "{ :self | position(self, 0) }",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_1(_self);
  },
  "{ :self | position(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@PrimitiveSequence",
  "MutableCollectionStream",
  "asWriteStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newMutableCollectionStream_0(),
      _self,
      0,
      _size_1(_self),
    );
  },
  "{ :self | initializeSlots(newMutableCollectionStream(),self, 0, size(self)) }",
);
