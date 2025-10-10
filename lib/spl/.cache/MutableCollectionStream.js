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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "contents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _position_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.collection.copyFromTo(1, self.position)\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isByteArray_1(_collection_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.collection.isByteArray\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "growTo",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
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
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet oldSize = self.collection.size;\n\t\tlet newSize = anInteger + oldSize.quotient(4).max(20);\n\t\tlet newCollection = self.collection.species.new(newSize);\n\t\tself.collection := newCollection.replaceFromToWithStartingAt(1, oldSize, collection, 1);\n\t\tself.writeLimit := self.collection.size\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPut",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_position_1(_self), _writeLimit_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pastEndPut_2(_self, _anObject);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _position_2(_self, _plusSign_2(_position_1(_self), 1));
        return _atPut_3(_collection_1(_self), _position_1(_self), _anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t(self.position >= self.writeLimit).if {\n\t\t\tself.pastEndPut(anObject)\n\t\t} {\n\t\t\tself.position := self.position + 1;\n\t\t\tself.collection[self.position] := anObject\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPutAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _equalsSign_2(_typeOf_1(_collection_1(_self)), _typeOf_1(_aCollection)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _newEnd = _plusSign_2(_position_1(_self), _size_1(_aCollection));
        /* Statements */
        _ifTrue_2(
          _greaterThanSign_2(_newEnd, _writeLimit_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _growTo_2(_self, _newEnd);
          }, []),
        );
        _replaceFromToWithStartingAt_5(
          _collection_1(_self),
          _plusSign_2(_position_1(_self), 1),
          _newEnd,
          _aCollection,
          1,
        );
        return _position_2(_self, _newEnd);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _size_1(_aCollection),
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextPut_2(_self, _at_2(_aCollection, _index));
          }, ["index"]),
        );
      }, []),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\t(self.collection.typeOf = aCollection.typeOf).if {\n\t\t\tlet newEnd = self.position + aCollection.size;\n\t\t\t(newEnd > self.writeLimit).ifTrue {\n\t\t\t\tself.growTo(newEnd)\n\t\t\t};\n\t\t\tself.collection.replaceFromToWithStartingAt(self.position + 1, newEnd, aCollection, 1);\n\t\t\tself.position := newEnd\n\t\t} {\n\t\t\t1.toDo(aCollection.size) { :index |\n\t\t\t\tself.nextPut(aCollection[index])\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "pastEndPut",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
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
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collection := self.collection.grownBy(self.collection.size.max(20).min(1000000));\n\t\tself.writeLimit := self.collection.size;\n\t\tself.position := self.position + 1;\n\t\tself.collection[self.position] := anObject;\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
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
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself.positionError\n\t\t} {\n\t\t\tself.positionIndex := anInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
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
  "{ :self |\n\t\tself.position := 0\n\t}",
);

sl.addMethodToExistingType(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _position_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.position\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@PrimitiveSequence",
  "MutableCollectionStream",
  "asWriteStream",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\tnewMutableCollectionStream().initializeSlots(self, 0, self.size)\n\t}",
);
