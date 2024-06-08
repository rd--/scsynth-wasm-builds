sl.addTrait("Object", "Object");

sl.addTraitMethod(
  "Object",
  "Object",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t\t{- self.typeResponsibility('@Object>>=') -}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tildeEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _not_1(_equalsSign_2(_self, _anObject));
  },
  "{ :self :anObject |\n\t\tnot(self = anObject)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "equalsSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tildeTilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self !== _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self !== _anObject;>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "questionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :aBlock:/0 |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "questionMarkQuestionMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :anObject |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tildeQuestionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_0();
  },
  "{ :self :aBlock:/0 |\n\t\taBlock()\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "assert",
  ["self", "aString", "aBlock:/0"],
  function (_self, _aString, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_aBlock_0(), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Assertion failed: ", _aString),
      );
    });
  },
  "{ :self :aString :aBlock:/0 |\n\t\taBlock().if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Assertion failed: ' ++ aString)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "assert",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _assert_3(_self, "*unknown context*", _aBlock_0);
  },
  "{ :self :aBlock:/0 |\n\t\tself.assert('*unknown context*', aBlock:/0)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _printString_1(_self);
  },
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "caseError",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(
      _self,
      "@Object>>caseError: case not found and no otherwise clause",
    );
  },
  "{ :self |\n\t\tself.error('@Object>>caseError: case not found and no otherwise clause')\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "caseOf",
  ["self", "aBlockAssociationCollection"],
  function (_self, _aBlockAssociationCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlockAssociationCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(
      _self,
      _aBlockAssociationCollection,
      function (_case) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _case";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _caseError_1(_self);
      },
    );
  },
  "{ :self :aBlockAssociationCollection |\n\t\tself.caseOfOtherwise(aBlockAssociationCollection) { :case |\n\t\t\tself.caseError\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "caseOfOtherwise",
  ["self", "aBlockAssociationCollection", "otherwise:/1"],
  function (_self, _aBlockAssociationCollection, _otherwise_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlockAssociationCollection, _otherwise_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _associationsDo_2(_aBlockAssociationCollection, function (_assoc) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _assoc";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_value_1(_key_1(_assoc)), _self),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_value_1(_value_1(_assoc)));
          },
        );
      });
      return _cull_2(_otherwise_1, _self);
    });
  },
  "{ :self :aBlockAssociationCollection :otherwise:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taBlockAssociationCollection.associationsDo { :assoc |\n\t\t\t\t(assoc.key.value = self).ifTrue {\n\t\t\t\t\tassoc.value.value.return\n\t\t\t\t}\n\t\t\t};\n\t\t\totherwise:/1.cull(self)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "constant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return (function (_unusedObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedObject";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\t{ :unusedObject |\n\t\t\tself\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _shallowCopy_1(_self);
    /* Statements */
    _postCopy_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.shallowCopy;\n\t\tanswer.postCopy;\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "deepCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return structuredClone(_self);
  },
  "{ :self |\n\t\t<primitive: return structuredClone(_self);>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "errorMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _typeOf_1(_self),
      ": ",
      _message,
      ": (",
      _printStringLimitedTo_2(_self, 16),
      ")",
    ]);
  },
  "{ :self :message |\n\t\t[\n\t\t\tself.typeOf, ': ',\n\t\t\tmessage,\n\t\t\t': (', self.printStringLimitedTo(16), ')'\n\t\t].join\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "error",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _description = _errorMessage_2(_self, _message);
    /* Statements */
    return _signal_1(_Error_1(_description));
  },
  "{ :self :message |\n\t\tlet description = self.errorMessage(message);\n\t\tError(description).signal\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "hasEqualSlotsBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_slotValueList_1(_self), _slotValueList_1(_anObject));
      },
    );
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tself.typeOf = anObject.typeOf & {\n\t\t\taBlock(self.slotValueList, anObject.slotValueList)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "hasEqualSlots",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(
          _slotValueList_1(_self),
          _slotValueList_1(_anObject),
        );
      },
    );
  },
  "{ :self :anObject |\n\t\tself.typeOf = anObject.typeOf & {\n\t\t\tself.slotValueList = anObject.slotValueList\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "in",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\taBlock(self)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "inspectAsList",
  ["self", "maxIndices"],
  function (_self, _maxIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxIndices";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1([
      [_hyphenMinusGreaterThanSign_2("Type", _type_1(_self))],
      _slotList_1(_self),
      _pseudoSlotList_1(_self),
      _if_3(_isIndexable_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _collect_2(
          _take_2(_indices_1(_self), _maxIndices),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _asString_1(_each),
              _at_2(_self, _each),
            );
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [];
      }),
    ]);
  },
  "{ :self :maxIndices |\n\t\t[\n\t\t\t['Type' -> self.type],\n\t\t\tself.slotList,\n\t\t\tself.pseudoSlotList,\n\t\t\tself.isIndexable.if {\n\t\t\t\tself.indices.take(maxIndices).collect { :each |\n\t\t\t\t\teach.asString -> self[each]\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t].concatenation\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
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
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isByte",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "leftIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :anObject |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "notificationMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _typeOf_1(_self),
      ": ",
      _message,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(": (", _printStringLimitedTo_2(_self, 16)),
        ")",
      ),
    ]);
  },
  "{ :self :message |\n\t\t[\n\t\t\tself.typeOf, ': ',\n\t\t\tmessage,\n\t\t\t': (' ++ self.printStringLimitedTo(16) ++ ')'\n\t\t].join\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "notify",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _postLine_2(_system, _notificationMessage_2(_self, _message));
    return _self;
  },
  "{ :self :message |\n\t\tsystem.postLine(self.notificationMessage(message));\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "perform",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 1, _typeOf_1(_self)),
    )(_self);
  },
  "{ :self :aString |\n\t\tsystem.methodLookupAtType(aString, 1, self.typeOf).block . (self)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "perform",
  ["self", "aString", "aValue"],
  function (_self, _aString, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 2, _typeOf_1(_self)),
    )(_self, _aValue);
  },
  "{ :self :aString :aValue |\n\t\tsystem.methodLookupAtType(aString, 2, self.typeOf).block . (self, aValue)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "primitiveEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self == _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self == _anObject;>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeString_1(_self);
  },
  "{ :self |\n\t\tself.storeString\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "printStringConcise",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(_greaterThanSign_2(_size_1(_answer), _count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _withIndefiniteArticle_1(_typeOf_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer;
    });
  },
  "{ :self :count |\n\t\tlet answer = self.printString;\n\t\t(answer.size > count).if {\n\t\t\tself.typeOf.withIndefiniteArticle\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "printStringLimitedTo",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(_greaterThanSign_2(_size_1(_answer), _count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSignPlusSign_2(
        _truncateTo_2(_answer, _hyphenMinus_2(_count, 8)),
        "... &etc",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer;
    });
  },
  "{ :self :count |\n\t\tlet answer = self.printString;\n\t\t(answer.size > count).if {\n\t\t\tanswer.truncateTo(count - 8) ++ '... &etc'\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "pseudoSlotList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_pseudoSlotNameList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
    });
  },
  "{ :self |\n\t\tself.pseudoSlotNameList.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "rightIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anObject;
  },
  "{ :self :anObject |\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Object.assign({}, _self);
  },
  "{ :self |\n\t\t<primitive: return Object.assign({}, _self);>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_slotNameList_1(_type_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
    });
  },
  "{ :self |\n\t\tself.type.slotNameList.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _slotNameList_1(_type_1(_self));
  },
  "{ :self |\n\t\tself.type.slotNameList\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotValueList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_slotNameList_1(_type_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _slotRead_2(_self, _each);
    });
  },
  "{ :self |\n\t\tself.type.slotNameList.collect { :each |\n\t\t\tself.slotRead(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotRead",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self[_key];
  },
  "{ :self :key |\n\t\t<primitive: return _self[_key];>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotWrite",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self[_key] = _value;
    /* Statements */
    return null;
  },
  "{ :self :key :value |\n\t\t<primitive: _self[_key] = _value;>\n\t\tnil\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "storeStringAsInitializeSlots",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _typeOf_1(_self),
      "(",
      _join_2(_collect_2(_slotValueList_1(_self), _storeString_1), ", "),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\tself.typeOf,\n\t\t\t'(',\n\t\t\tself.slotValueList.collect(storeString:/1).join(', '),\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withIndefiniteArticle_1(_typeOf_1(_self));
  },
  "{ :self |\n\t\tself.typeOf.withIndefiniteArticle\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "then",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\tself.aBlock\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeLookup_2(_system, _typeOf_1(_self));
  },
  "{ :self |\n\t\tsystem.typeLookup(self.typeOf)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "typeOf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sl.typeOf(_self);
  },
  "{ :self |\n\t\t<primitive: return sl.typeOf(_self);>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "warningMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Warning: ",
      _typeOf_1(_self),
      ": ",
      _message,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(": (", _printStringLimitedTo_2(_self, 16)),
        ")",
      ),
    ]);
  },
  "{ :self :message |\n\t\t[\n\t\t\t'Warning: ',\n\t\t\tself.typeOf, ': ',\n\t\t\tmessage,\n\t\t\t': (' ++ self.printStringLimitedTo(16) ++ ')'\n\t\t].join\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "warning",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _postLine_2(_system, _warningMessage_2(_self, _message));
    return _self;
  },
  "{ :self :message |\n\t\tsystem.postLine(self.warningMessage(message));\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "yourself",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);
