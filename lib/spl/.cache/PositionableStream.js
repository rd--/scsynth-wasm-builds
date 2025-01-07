sl.addTrait("PositionableStream", "PositionableStream");

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "atEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@PositionableStream>>atEnd");
  },
  "{ :self |\n\t\tself.typeResponsibility('@PositionableStream>>atEnd')\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "back",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(_equalsSign_2(_position_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@PositionableStream>>back: cannot go back");
    });
    _skip_2(_self, -1);
    return _peek_1(_self);
  },
  "{ :self |\n\t\t(self.position = 0).ifTrue {\n\t\t\tself.error('@PositionableStream>>back: cannot go back')\n\t\t};\n\t\tself.skip(-1);\n\t\tself.peek\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_atEnd_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_position_1(_self), 0);
    });
  },
  "{ :self |\n\t\tself.atEnd & {\n\t\t\tself.position = 0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "last",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_collection_1(_self), _position_1(_self));
  },
  "{ :self |\n\t\tself.collection.at(self.position)\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "nextMatchAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _savedPosition = _position_1(_self);
      /* Statements */
      _do_2(_aCollection, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(_equalsSign_2(_next_1(_self), _each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          _position_2(_self, _savedPosition);
          return _return_1(false);
        });
      });
      return true;
    });
  },
  "{ :self :aCollection |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tlet savedPosition = self.position;\n\t\t\taCollection.do { :each |\n\t\t\t\t(self.next = each).ifFalse {\n\t\t\t\t\tself.position := savedPosition;\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "on",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _collection_2(_self, _aCollection);
    _position_2(_self, 0);
    _if_2(_isReadStream_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _readLimit_2(_self, _size_1(_aCollection));
    });
    return _reset_1(_self);
  },
  "{ :self :aCollection |\n\t\tself.collection := aCollection;\n\t\tself.position := 0;\n\t\tself.isReadStream.if {\n\t\t\tself.readLimit := aCollection.size\n\t\t};\n\t\tself.reset\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "originalContents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collection_1(_self);
  },
  "{ :self |\n\t\tself.collection\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "peek",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_atEnd_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _nextObject = _next_1(_self);
      /* Statements */
      _position_2(_self, _hyphenMinus_2(_position_1(_self), 1));
      return _nextObject;
    });
  },
  "{ :self |\n\t\tself.atEnd.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet nextObject = self.next;\n\t\t\tself.position := self.position - 1;\n\t\t\tnextObject\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "peekFor",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(_atEnd_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _return_1(false);
      });
      _ifTrue_2(_equalsSign_2(_next_1(_self), _anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _return_1(true);
      });
      _position_2(_self, _hyphenMinus_2(_position_1(_self), 1));
      return false;
    });
  },
  "{ :self :anObject |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.atEnd.ifTrue {\n\t\t\t\tfalse.return\n\t\t\t};\n\t\t\t(self.next = anObject).ifTrue {\n\t\t\t\ttrue.return\n\t\t\t};\n\t\t\tself.position := self.position - 1;\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "position",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _positionIndex_1(_self);
  },
  "{ :self |\n\t\tself.positionIndex\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "position",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNegative_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _positionError_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _positionIndex_2(_self, _anInteger);
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself.positionError\n\t\t} {\n\t\t\tself.positionIndex := anInteger\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "positionError",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@PositionableStream>>positionError: position out of bounds",
    );
  },
  "{ :self |\n\t\tself.error('@PositionableStream>>positionError: position out of bounds')\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "reset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, 0);
  },
  "{ :self |\n\t\tself.position := 0\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "skip",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _position_2(_self, _plusSign_2(_position_1(_self), _anInteger));
  },
  "{ :self :anInteger |\n\t\tself.position := self.position + anInteger\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "skipTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atEnd_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(_equalsSign_2(_next_1(_self), _anObject), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(true);
        });
      });
      return false;
    });
  },
  "{ :self :anObject |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\tself.atEnd\n\t\t\t}.whileFalse {\n\t\t\t\t(self.next = anObject).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "upTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withWriteStream_2(_self, function (_aStream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aStream";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _element = null;
      /* Statements */
      return _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _verticalLine_2(_atEnd_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          _element = _next_1(_self);
          return _equalsSign_2(_element, _anObject);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _nextPut_2(_aStream, _element);
      });
    });
  },
  "{ :self :anObject |\n\t\tself.withWriteStream { :aStream |\n\t\t\tlet element = nil;\n\t\t\t{\n\t\t\t\tself.atEnd | {\n\t\t\t\t\telement := self.next;\n\t\t\t\t\telement = anObject\n\t\t\t\t}\n\t\t\t}.whileFalse {\n\t\t\t\taStream.nextPut(element)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "upToEnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withWriteStream_2(_self, function (_aStream) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aStream";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atEnd_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _nextPut_2(_aStream, _next_1(_self));
      });
    });
  },
  "{ :self |\n\t\tself.withWriteStream { :aStream |\n\t\t\t{\n\t\t\t\tself.atEnd\n\t\t\t}.whileFalse {\n\t\t\t\taStream.nextPut(self.next)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "upToPosition",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _next_2(_self, _hyphenMinus_2(_anInteger, _position_1(_self)));
  },
  "{ :self :anInteger |\n\t\tself.next(anInteger - self.position)\n\t}",
);

sl.addTraitMethod(
  "PositionableStream",
  "PositionableStream",
  "withWriteStream",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aStream = _asWriteStream_1(
      _new_2(_species_1(_collection_1(_self)), 100),
    );
    /* Statements */
    _aBlock_1(_aStream);
    return _contents_1(_aStream);
  },
  "{ :self :aBlock:/1 |\n\t\tlet aStream = self.collection.species.new(100).asWriteStream;\n\t\taBlock(aStream);\n\t\taStream.contents\n\t}",
);
