sl.addTrait("Object", "Object");

sl.addTraitMethod(
  "Object",
  "Object",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Object>>=");
  },
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Object>>=')\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tildeEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _not_1(_equals_2(_self, _anObject));
  },
  "{ :self :anObject |\n\t\tnot(self = anObject)\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "equalsEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self !== _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive: return _self !== _anObject;>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "query",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :aBlock:/0 |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "queryQuery",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :anObject |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "tildeQuery",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_aBlock_0(), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Assertion failed");
    });
  },
  "{ :self :aBlock:/0 |\n\t\taBlock().if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Assertion failed')\n\t\t}\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
          throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _associationsDo_2(_aBlockAssociationCollection, function (_assoc) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _assoc";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equals_2(_value_1(_key_1(_assoc)), _self),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_unusedObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedObject";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return structuredClone(_self);
  },
  "{ :self |\n\t\t<primitive: return structuredClone(_self);>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "equalSlots",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(
      _equals_2(_typeOf_1(_self), _typeOf_1(_anObject)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_slotArray_1(_self), _slotArray_1(_anObject));
      },
    );
  },
  "{ :self :anObject |\n\t\tself.typeOf = anObject.typeOf & {\n\t\t\tself.slotArray = anObject.slotArray\n\t\t}\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "inspectAsArray",
  ["self", "maxIndices"],
  function (_self, _maxIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxIndices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1([
      [_minusGreaterThan_2("Type", _Type_1(_self))],
      _slotArray_1(_self),
      _pseudoSlotArray_1(_self),
      _if_3(_isIndexable_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _collect_2(
          _take_2(_indices_1(_self), _maxIndices),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _minusGreaterThan_2(_asString_1(_each), _at_2(_self, _each));
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return [];
      }),
    ]);
  },
  "{ :self :maxIndices |\n\t\t[\n\t\t\t['Type' -> self.Type],\n\t\t\tself.slotArray,\n\t\t\tself.pseudoSlotArray,\n\t\t\tself.isIndexable.if {\n\t\t\t\tself.indices.take(maxIndices).collect { :each |\n\t\t\t\t\teach.asString -> self[each]\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t].concatenation\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _typeOf_1(_self),
      ": ",
      _message,
      _plusPlus_2(_plusPlus_2(": (", _printStringLimitedTo_2(_self, 16)), ")"),
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(_greaterThan_2(_size_1(_answer), _count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withIndefiniteArticle_1(_typeOf_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(_greaterThan_2(_size_1(_answer), _count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(
        _truncateTo_2(_answer, _minus_2(_count, 8)),
        "... &etc",
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
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
  "pseudoSlotArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_pseudoSlotNameArray_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _minusGreaterThan_2(_each, _perform_2(_self, _each));
    });
  },
  "{ :self |\n\t\tself.pseudoSlotNameArray.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
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
      throw Error(errorMessage);
    }
    /* Primitive */
    return Object.assign({}, _self);
  },
  "{ :self |\n\t\t<primitive: return Object.assign({}, _self);>\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_slotNameArray_1(_Type_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _minusGreaterThan_2(_each, _perform_2(_self, _each));
    });
  },
  "{ :self |\n\t\tself.Type.slotNameArray.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "slotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _slotNameArray_1(_Type_1(_self));
  },
  "{ :self |\n\t\tself.Type.slotNameArray\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 |\n\t\tself.aBlock\n\t}",
);

sl.addTraitMethod(
  "Object",
  "Object",
  "Type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Warning: ",
      _typeOf_1(_self),
      ": ",
      _message,
      _plusPlus_2(_plusPlus_2(": (", _printStringLimitedTo_2(_self, 16)), ")"),
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);
