/* {- Requires: PositionableStream Stream WriteStream -} */

sl.addType(
  false,
  "MutableCollectionStream",
  "MutableCollectionStream",
  ["Object", "Iterator", "Stream", "PositionableStream", "WriteStream"],
  ["collection", "positionIndex", "writeLimit"],
);

sl.copyTraitToType(
  "Object",
  "MutableCollectionStream",
);

sl.copyTraitToType(
  "Iterator",
  "MutableCollectionStream",
);

sl.copyTraitToType(
  "Stream",
  "MutableCollectionStream",
);

sl.copyTraitToType(
  "PositionableStream",
  "MutableCollectionStream",
);

sl.copyTraitToType(
  "WriteStream",
  "MutableCollectionStream",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _position_1(_self));
  },
  "{ :self |\n\t\tself.collection.copyFromTo(1, self.position)\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isByteArray_1(_collection_1(_self));
  },
  "{ :self |\n\t\tself.collection.isByteArray\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "growTo",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _oldSize = _size_1(_collection_1(_self));
    let _newSize = _plus_2(_anInteger, _max_2(_quotient_2(_oldSize, 4), 20));
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
  "{ :self :anInteger |\n\t\tlet oldSize = self.collection.size;\n\t\tlet newSize = anInteger + oldSize.quotient(4).max(20);\n\t\tlet newCollection = self.collection.species.new(newSize);\n\t\tself.collection := newCollection.replaceFromToWithStartingAt(1, oldSize, collection, 1);\n\t\tself.writeLimit := self.collection.size\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _greaterThanEquals_2(_position_1(_self), _writeLimit_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _pastEndPut_2(_self, _anObject);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _position_2(_self, _plus_2(_position_1(_self), 1));
        return _atPut_3(_collection_1(_self), _position_1(_self), _anObject);
      },
    );
  },
  "{ :self :anObject |\n\t\t(self.position >= self.writeLimit).if {\n\t\t\tself.pastEndPut(anObject)\n\t\t} {\n\t\t\tself.position := self.position + 1;\n\t\t\tself.collection[self.position] := anObject\n\t\t}\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "nextPutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _if_3(
      _equals_2(_typeOf_1(_collection_1(_self)), _typeOf_1(_aCollection)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _newEnd = _plus_2(_position_1(_self), _size_1(_aCollection));
        /* Statements */
        _ifTrue_2(_greaterThan_2(_newEnd, _writeLimit_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _growTo_2(_self, _newEnd);
        });
        _replaceFromToWithStartingAt_5(
          _collection_1(_self),
          _plus_2(_position_1(_self), 1),
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
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _upToDo_3(1, _size_1(_aCollection), function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _nextPut_2(_self, _at_2(_aCollection, _index));
        });
      },
    );
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\t(self.collection.typeOf = aCollection.typeOf).if {\n\t\t\tlet newEnd = self.position + aCollection.size;\n\t\t\t(newEnd > self.writeLimit).ifTrue {\n\t\t\t\tself.growTo(newEnd)\n\t\t\t};\n\t\t\tself.collection.replaceFromToWithStartingAt(self.position + 1, newEnd, aCollection, 1);\n\t\t\tself.position := newEnd\n\t\t} {\n\t\t\t1.upToDo(aCollection.size) { :index |\n\t\t\t\tself.nextPut(aCollection[index])\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "pastEndPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _collection_2(
      _self,
      _grownBy_2(
        _collection_1(_self),
        _min_2(_max_2(_size_1(_collection_1(_self)), 20), 1000000),
      ),
    );
    _writeLimit_2(_self, _size_1(_collection_1(_self)));
    _position_2(_self, _plus_2(_position_1(_self), 1));
    _atPut_3(_collection_1(_self), _position_1(_self), _anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\tself.collection := self.collection.grownBy(self.collection.size.max(20).min(1000000));\n\t\tself.writeLimit := self.collection.size;\n\t\tself.position := self.position + 1;\n\t\tself.collection[self.position] := anObject;\n\t\tanObject\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "position",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_negative_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _positionError_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _positionIndex_2(_self, _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.negative.if {\n\t\t\tself.positionError\n\t\t} {\n\t\t\tself.positionIndex := anInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
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
    return _position_2(_self, 0);
  },
  "{ :self |\n\t\tself.position := 0\n\t}",
);

sl.addMethod(
  "MutableCollectionStream",
  "MutableCollectionStream",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _position_1(_self);
  },
  "{ :self |\n\t\tself.position\n\t}",
);

sl.extendTraitWithMethod(
  "Arrayed",
  "MutableCollectionStream",
  "asWriteStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newMutableCollectionStream_0(),
      _self,
      0,
      _size_1(_self),
    );
  },
  "{ :self |\n\t\tnewMutableCollectionStream().initializeSlots(self, 0, self.size)\n\t}",
);
