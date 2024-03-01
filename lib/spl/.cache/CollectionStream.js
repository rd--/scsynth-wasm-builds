/* {- Requires: PositionableStream Stream -} */

sl.addType(
  false,
  "CollectionStream",
  "CollectionStream",
  ["Object", "Iterator", "Stream", "PositionableStream"],
  ["collection", "positionIndex", "readLimit"],
);

sl.copyTraitToType(
  "Object",
  "CollectionStream",
);

sl.copyTraitToType(
  "Iterator",
  "CollectionStream",
);

sl.copyTraitToType(
  "Stream",
  "CollectionStream",
);

sl.copyTraitToType(
  "PositionableStream",
  "CollectionStream",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "atEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSignEqualsSign_2(
      _position_1(_self),
      _readLimit_1(_self),
    );
  },
  "{ :self |\n\t\tself.position >= self.readLimit\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "contents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _readLimit_1(_self));
  },
  "{ :self |\n\t\tself.collection.copyFromTo(1, self.readLimit)\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isByteArray_1(_collection_1(_self));
  },
  "{ :self |\n\t\tself.collection.isByteArray\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
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
    return _if_3(
      _greaterThanSignEqualsSign_2(_position_1(_self), _readLimit_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return null;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _position_2(_self, _plusSign_2(_position_1(_self), 1));
        return _at_2(_collection_1(_self), _position_1(_self));
      },
    );
  },
  "{ :self |\n\t\t(self.position >= self.readLimit).if {\n\t\t\tnil\n\t\t} {\n\t\t\tself.position := self.position + 1;\n\t\t\tself.collection[self.position]\n\t\t}\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
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
    let _endPosition = _min_2(
      _plusSign_2(_position_1(_self), _anInteger),
      _readLimit_1(_self),
    );
    let _answer = _copyFromTo_3(
      _collection_1(_self),
      _plusSign_2(_position_1(_self), 1),
      _endPosition,
    );
    /* Statements */
    _position_2(_self, _endPosition);
    return _answer;
  },
  "{ :self :anInteger |\n\t\tlet endPosition = (self.position + anInteger).min(self.readLimit);\n\t\tlet answer = self.collection.copyFromTo(self.position + 1, endPosition);\n\t\tself.position := endPosition;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "position",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_validReadPosition_2(_self, _anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _positionIndex_2(_self, _anInteger);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _positionError_1(_self);
    });
  },
  "{ :self :anInteger |\n\t\tself.validReadPosition(anInteger).if {\n\t\t\tself.positionIndex := anInteger\n\t\t} {\n\t\t\tself.positionError\n\t\t}\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "setFromTo",
  ["self", "newStart", "newStop"],
  function (_self, _newStart, _newStop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newStart, _newStop";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _position_2(_self, _hyphenMinus_2(_newStart, 1));
    return _readLimit_2(_self, _newStop);
  },
  "{ :self :newStart :newStop |\n\t\tself.position := newStart - 1;\n\t\tself.readLimit := newStop\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "setToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _position_2(_self, _readLimit_1(_self));
  },
  "{ :self |\n\t\tself.position := self.readLimit\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _readLimit_1(_self);
  },
  "{ :self |\n\t\tself.readLimit\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
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
    let _start = _plusSign_2(_position_1(_self), 1);
    let _end = _indexOfStartingAt_3(_collection_1(_self), _anObject, _start);
    /* Statements */
    return _if_3(
      _verticalLine_2(_equalsSign_2(_end, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSign_2(_end, _readLimit_1(_self));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _upToEnd_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _position_2(_self, _end);
        return _copyFromTo_3(
          _collection_1(_self),
          _start,
          _hyphenMinus_2(_end, 1),
        );
      },
    );
  },
  "{ :self :anObject |\n\t\tlet start = self.position + 1;\n\t\tlet end = self.collection.indexOfStartingAt(anObject, start);\n\t\t(end = 0 | {\n\t\t\tend > self.readLimit\n\t\t}).if {\n\t\t\tself.upToEnd\n\t\t} {\n\t\t\tself.position := end;\n\t\t\tself.collection.copyFromTo(start, end - 1)\n\t\t}\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
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
    let _start = _plusSign_2(1, _position_1(_self));
    /* Statements */
    _position_2(_self, _readLimit_1(_self));
    return _copyFromTo_3(_collection_1(_self), _start, _position_1(_self));
  },
  "{ :self |\n\t\tlet start = 1 + self.position;\n\t\tself.position := self.readLimit;\n\t\tself.collection.copyFromTo(start, self.position)\n\t}",
);

sl.addMethod(
  "CollectionStream",
  "CollectionStream",
  "validReadPosition",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_anInteger, 0, _readLimit_1(_self));
  },
  "{ :self :anInteger |\n\t\tanInteger.betweenAnd(0, self.readLimit)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "CollectionStream",
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
    return _asStream_1(_self);
  },
  "{ :self |\n\t\tself.asStream\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "CollectionStream",
  "asStream",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newCollectionStream_0(),
      _self,
      0,
      _size_1(_self),
    );
  },
  "{ :self |\n\t\tnewCollectionStream().initializeSlots(self, 0, self.size)\n\t}",
);
