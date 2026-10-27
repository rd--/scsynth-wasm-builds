/*  Requires: Stream  */

sl.addType(
  false,
  "CollectionStream",
  "CollectionStream",
  ["@Object", "@Copy", "@Equal", "@Do", "@Collect", "@Iterator", "@Stream"],
  ["collection", "positionIndex", "readLimit"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Do",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Collect",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Iterator",
  "CollectionStream",
);

sl.copyTraitMethodsToType(
  "@Stream",
  "CollectionStream",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "backInPlace",
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
        return _error_2(_self, "back!: cannot go back");
      }, []),
    );
    _skipInPlace_2(_self, -1);
    return _peek_1(_self);
  }, ["self"]),
  "{ :self |\n\t\t(self.position = 0).ifTrue {\n\t\t\tself.error('back!: cannot go back')\n\t\t};\n\t\tself.skip!(-1);\n\t\tself.peek\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "contents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_collection_1(_self), 1, _readLimit_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.collection.copyFromTo(1, self.readLimit)\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "isAtEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(
      _positionIndex_1(_self),
      _readLimit_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.positionIndex >= self.readLimit\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isAtEnd_1(_self),
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
  "{ :self |\n\t\tself.isAtEnd & {\n\t\t\tself.position = 0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "isValidReadPosition",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _isBetween_3(_anInteger, 0, _readLimit_1(_self));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isBetween(0, self.readLimit)\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
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
  "{ :self |\n\t\tself.collection.at(self.position)\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "next",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isAtEnd_1(_self),
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
        } /* Statements */
        _positionMutateInPlace_2(_self, _plusSign_2(_position_1(_self), 1));
        return _at_2(_collection_1(_self), _position_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isAtEnd.if {\n\t\t\tnil\n\t\t} {\n\t\t\tself.position := self.position + 1;\n\t\t\tself.collection[self.position]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "next",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    let _endPosition = _plusSign_2(_position_1(_self), _anInteger);
    return _if_3(
      _greaterThanSign_2(_endPosition, _readLimit_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "CollectionStream>>next: not enough items in stream",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _answer = _copyFromTo_3(
          _collection_1(_self),
          _plusSign_2(_position_1(_self), 1),
          _endPosition,
        );
        _positionMutateInPlace_2(_self, _endPosition);
        return _answer;
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet endPosition = self.position + anInteger;\n\t\t(endPosition > self.readLimit).if {\n\t\t\tself.error('CollectionStream>>next: not enough items in stream')\n\t\t} {\n\t\t\tlet answer = self.collection.copyFromTo(self.position + 1, endPosition);\n\t\t\tself.position := endPosition;\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "nextMatchAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      let _savedPosition = _position_1(_self);
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
              _positionMutateInPlace_2(_self, _savedPosition);
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\twithReturn { :return/1 |\n\t\t\tlet savedPosition = self.position;\n\t\t\taCollection.do { :each |\n\t\t\t\t(self.next = each).ifFalse {\n\t\t\t\t\tself.position := savedPosition;\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "peek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isAtEnd_1(_self),
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
        } /* Statements */
        let _nextObject = _next_1(_self);
        _positionMutateInPlace_2(_self, _hyphenMinus_2(_position_1(_self), 1));
        return _nextObject;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isAtEnd.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet nextObject = self.next;\n\t\t\tself.position := self.position - 1;\n\t\t\tnextObject\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "peekFor",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _isAtEnd_1(_self),
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
      _positionMutateInPlace_2(_self, _hyphenMinus_2(_position_1(_self), 1));
      return false;
    }, ["return/1"]));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\twithReturn { :return/1 |\n\t\t\tself.isAtEnd.ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t(self.next = anObject).ifTrue {\n\t\t\t\ttrue.return\n\t\t\t};\n\t\t\tself.position := self.position - 1;\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
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
  "{ :self |\n\t\tself.positionIndex\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "positionError",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "positionError: position out of bounds");
  }, ["self"]),
  "{ :self |\n\t\tself.error('positionError: position out of bounds')\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "positionMutateInPlace",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isValidReadPosition_2(_self, _anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _positionIndexMutateInPlace_2(_self, _anInteger);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _positionError_1(_self);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.isValidReadPosition(anInteger).if {\n\t\t\tself.positionIndex := anInteger\n\t\t} {\n\t\t\tself.positionError\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "resetInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _positionMutateInPlace_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself.position := 0\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "setFromToInPlace",
  ["self", "newStart", "newStop"],
  sl.annotateFunction(function (_self, _newStart, _newStop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newStart, _newStop";
      throw new Error(errorMessage);
    } /* Statements */
    _positionMutateInPlace_2(_self, _hyphenMinus_2(_newStart, 1));
    return _readLimitMutateInPlace_2(_self, _newStop);
  }, ["self", "newStart", "newStop"]),
  "{ :self :newStart :newStop |\n\t\tself.position := newStart - 1;\n\t\tself.readLimit := newStop\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "setToEndInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _positionMutateInPlace_2(_self, _readLimit_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.position := self.readLimit\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _readLimit_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.readLimit\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "skipInPlace",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _positionMutateInPlace_2(
      _self,
      _plusSign_2(_position_1(_self), _anInteger),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.position := self.position + anInteger\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "skipToInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
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
          return _isAtEnd_1(_self);
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
    }, ["return/1"]));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\twithReturn { :return/1 |\n\t\t\t{\n\t\t\t\tself.isAtEnd\n\t\t\t}.whileFalse {\n\t\t\t\t(self.next = anObject).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "upTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _start = _plusSign_2(_position_1(_self), 1);
    let _end = _indexOfStartingAtBy_4(
      _collection_1(_self),
      _anObject,
      _start,
      _isEqual_2,
    );
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_end, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_end, _readLimit_1(_self));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _upToEnd_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _positionMutateInPlace_2(_self, _end);
        return _copyFromTo_3(
          _collection_1(_self),
          _start,
          _hyphenMinus_2(_end, 1),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet start = self.position + 1;\n\t\tlet end = self.collection.indexOfStartingAtBy(anObject, start, isEqual/2);\n\t\t(\n\t\t\tend = 0 | {\n\t\t\t\tend > self.readLimit\n\t\t\t}\n\t\t).if {\n\t\t\tself.upToEnd\n\t\t} {\n\t\t\tself.position := end;\n\t\t\tself.collection.copyFromTo(start, end - 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
  "upToEnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _start = _plusSign_2(1, _position_1(_self));
    _positionMutateInPlace_2(_self, _readLimit_1(_self));
    return _copyFromTo_3(_collection_1(_self), _start, _position_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tlet start = 1 + self.position;\n\t\tself.position := self.readLimit;\n\t\tself.collection.copyFromTo(start, self.position)\n\t}",
);

sl.addMethodToExistingType(
  "CollectionStream",
  "CollectionStream",
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
  "{ :self :anInteger |\n\t\tself.next(anInteger - self.position)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CollectionStream",
  "CollectionStream",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\tnewCollectionStream()\n\t\t.initializeSlots(\n\t\t\tself,\n\t\t\t0,\n\t\t\tself.size\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CollectionStream",
  "CollectionStream",
  ["self"],
  sl.annotateFunction(function (_self) {
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
  }, ["self"]),
  "{ :self |\n\t\tnewCollectionStream()\n\t\t.initializeSlots(\n\t\t\tself,\n\t\t\t0,\n\t\t\tself.size\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CollectionStream",
  "Iterator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CollectionStream_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tCollectionStream(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CollectionStream",
  "Iterator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CollectionStream_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tCollectionStream(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CollectionStream",
  "Stream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CollectionStream_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tCollectionStream(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CollectionStream",
  "Stream",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CollectionStream_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tCollectionStream(self)\n\t}",
);
