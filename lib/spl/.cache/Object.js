sl.addTrait("Object", "Object");

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject | hasEqualSlots(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject | =(self, anObject) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "tildeEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_equalsSign_2(_self, _anObject));
  },
  "{ :self :anObject | not(=(self, anObject)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "equalsSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject | <primitive: return _self === _anObject;>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "tildeTilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self !== _anObject;
  },
  "{ :self :anObject | <primitive: return _self !== _anObject;>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "questionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self :aBlock:/0 | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "questionMarkQuestionMark",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self :anObject | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "tildeQuestionMark",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_0();
  },
  "{ :self :aBlock:/0 | aBlock() }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "assert",
  ["self", "aString", "aBlock:/0"],
  function (_self, _aString, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_aBlock_0(), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Assertion failed: ", _aString),
      );
    });
  },
  "{ :self :aString :aBlock:/0 | if(aBlock(), { self }, { error(self,++('Assertion failed: ', aString)) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "assert",
  ["self", "aBlock:/0"],
  function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(_self, "*unknown context*", _aBlock_0);
  },
  "{ :self :aBlock:/0 | assert(self,'*unknown context*', aBlock:/0) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  },
  "{ :self | printString(self) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseError",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@Object>>caseError: case not found and no otherwise clause",
    );
  },
  "{ :self | error(self,'@Object>>caseError: case not found and no otherwise clause') }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseOf",
  ["self", "aBlockAssociationCollection"],
  function (_self, _aBlockAssociationCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlockAssociationCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(
      _self,
      _aBlockAssociationCollection,
      function (_case) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _case";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseError_1(_self);
      },
    );
  },
  "{ :self :aBlockAssociationCollection | caseOfOtherwise(self, aBlockAssociationCollection, { :case | caseError(self) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseOfOtherwise",
  ["self", "aBlockAssociationCollection", "otherwise:/1"],
  function (_self, _aBlockAssociationCollection, _otherwise_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlockAssociationCollection, _otherwise_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(_aBlockAssociationCollection, function (_assoc) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _assoc";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_value_1(_key_1(_assoc)), _self),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_value_1(_value_1(_assoc)));
          },
        );
      });
      return _cull_2(_otherwise_1, _self);
    });
  },
  "{ :self :aBlockAssociationCollection :otherwise:/1 | valueWithReturn({ :return:/1 | associationsDo(aBlockAssociationCollection, { :assoc | ifTrue((=(value(key(assoc)), self)), { return(value(value(assoc))) }) }); cull(otherwise:/1,self) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "concisePrintString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndefiniteArticle_1(_typeOf_1(_self));
  },
  "{ :self | withIndefiniteArticle(typeOf(self)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "constant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_unusedObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    });
  },
  "{ :self | { :unusedObject | self } }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _shallowCopy_1(_self);
    /* Statements */
    _postCopy_1(_answer);
    return _answer;
  },
  "{ :self | let answer = shallowCopy(self); postCopy(answer); answer }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "deepCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return structuredClone(_self);
  },
  "{ :self | <primitive: return structuredClone(_self);>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "equalByAtNamedSlots",
  ["self", "anObject", "slotNameList", "aBlock:/2"],
  function (_self, _anObject, _slotNameList, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _anObject, _slotNameList, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    return _slotNameList.every(function (key) {
      return _aBlock_2(_self[key], _anObject[key]);
    });
  },
  "{ :self :anObject :slotNameList :aBlock:/2 | <primitive: return _slotNameList.every(function (key) {\n\t\t\treturn _aBlock_2(_self[key], _anObject[key]);\n\t\t});>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "errorMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _typeOf_1(_self),
      ": ",
      _message,
      ": (",
      _printStringLimitedTo_2(_self, 16),
      ")",
    ], "");
  },
  "{ :self :message | join([typeOf(self), ': ', message, ': (', printStringLimitedTo(self,16), ')'],'') }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "error",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _description = _errorMessage_2(_self, _message);
    /* Statements */
    return _signal_1(_Error_1(_description));
  },
  "{ :self :message | let description = errorMessage(self,message); signal(Error(description)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "hasEqualSlots",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, =) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "hasEqualSlotsBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_anObject)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalByAtNamedSlots_4(
          _self,
          _anObject,
          _slotNameList_1(_self),
          _aBlock_2,
        );
      },
    );
  },
  "{ :self :anObject :aBlock:/2 | &(=(typeOf(self), typeOf(anObject)), { equalByAtNamedSlots(self,anObject, slotNameList(self), aBlock:/2) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "in",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 | aBlock(self) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "inspectAsList",
  ["self", "maxIndices"],
  function (_self, _maxIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxIndices";
      throw new Error(errorMessage);
    } /* Statements */
    return _concatenation_1([
      [_hyphenMinusGreaterThanSign_2("Type", _typeDefinition_1(_self))],
      _slotList_1(_self),
      _pseudoSlotList_1(_self),
      _if_3(_isIndexable_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _take_2(_indices_1(_self), _maxIndices),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinusGreaterThanSign_2(
              _concisePrintString_1(_each),
              _at_2(_self, _each),
            );
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }),
    ]);
  },
  "{ :self :maxIndices | concatenation([[->('Type', typeDefinition(self))], slotList(self), pseudoSlotList(self), if(isIndexable(self), { collect(take(indices(self),maxIndices), { :each | ->(concisePrintString(each), at(self, each)) }) }, { [] })]) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isBinary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isImmediate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "leftIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self :anObject | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "notificationMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _typeOf_1(_self),
      ": ",
      _message,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(": (", _printStringLimitedTo_2(_self, 16)),
        ")",
      ),
    ], "");
  },
  "{ :self :message | join([typeOf(self), ': ', message, ++(++(': (', printStringLimitedTo(self,16)), ')')],'') }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "notify",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    _postLine_2(_system, _notificationMessage_2(_self, _message));
    return _self;
  },
  "{ :self :message | postLine(system,notificationMessage(self,message)); self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "perform",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 1, _typeOf_1(_self)),
    )(_self);
  },
  "{ :self :aString | block(methodLookupAtType(system,aString, 1, typeOf(self))) . (self) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "perform",
  ["self", "aString", "aValue"],
  function (_self, _aString, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 2, _typeOf_1(_self)),
    )(_self, _aValue);
  },
  "{ :self :aString :aValue | block(methodLookupAtType(system,aString, 2, typeOf(self))) . (self, aValue) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "primitiveEquals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self == _anObject;
  },
  "{ :self :anObject | <primitive: return _self == _anObject;>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "primitiveIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  },
  "{ :self :anObject | <primitive: return _self === _anObject;>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeString_1(_self);
  },
  "{ :self | storeString(self) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "printStringLimitedTo",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(_greaterThanSign_2(_size_1(_answer), _count), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _abbreviateTo_2(_answer, _count);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    });
  },
  "{ :self :count | let answer = printString(self); if((>(size(answer), count)), { abbreviateTo(answer,count) }, { answer }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "pseudoSlotList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_pseudoSlotNameList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
    });
  },
  "{ :self | collect(pseudoSlotNameList(self), { :each | ->(each, perform(self,each)) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  },
  "{ :self | [] }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "rightIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _anObject;
  },
  "{ :self :anObject | anObject }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.assign({}, _self);
  },
  "{ :self | <primitive: return Object.assign({}, _self);>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _slotNameList_1(_typeDefinition_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
      },
    );
  },
  "{ :self | collect(slotNameList(typeDefinition(self)), { :each | ->(each, perform(self,each)) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _slotNameList_1(_typeDefinition_1(_self));
  },
  "{ :self | slotNameList(typeDefinition(self)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotValueList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _slotNameList_1(_typeDefinition_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _slotRead_2(_self, _each);
      },
    );
  },
  "{ :self | collect(slotNameList(typeDefinition(self)), { :each | slotRead(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotRead",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_key];
  },
  "{ :self :key | <primitive: return _self[_key];>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotReadList",
  ["self", "keyList"],
  function (_self, _keyList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _keyList.map(function (key) {
      return _self[key];
    });
  },
  "{ :self :keyList | <primitive: return _keyList.map(function (key) {\n\t\t\treturn _self[key];\n\t\t});>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotWrite",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_key] = _value;
    /* Statements */
    return null;
  },
  "{ :self :key :value | <primitive: _self[_key] = _value;>\nnil }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "storeStringAsInitializeSlots",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _typeOf_1(_self),
      "(",
      _join_2(_collect_2(_slotValueList_1(_self), _storeString_1), ", "),
      ")",
    ], "");
  },
  "{ :self | join([typeOf(self), '(', join(collect(slotValueList(self),storeString:/1),', '), ')'],'') }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndefiniteArticle_1(_typeOf_1(_self));
  },
  "{ :self | withIndefiniteArticle(typeOf(self)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "then",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  },
  "{ :self :aBlock:/1 | aBlock(self) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "typeDefinition",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeLookup_2(_system, _typeOf_1(_self));
  },
  "{ :self | typeLookup(system,typeOf(self)) }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "typeOf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.splTypeOf(_self);
  },
  "{ :self | <primitive: return sl.splTypeOf(_self);>\n }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "value",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "warningMessage",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "Warning: ",
      _typeOf_1(_self),
      ": ",
      _message,
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(": (", _printStringLimitedTo_2(_self, 16)),
        ")",
      ),
    ], "");
  },
  "{ :self :message | join(['Warning: ', typeOf(self), ': ', message, ++(++(': (', printStringLimitedTo(self,16)), ')')],'') }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "warning",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    _postLine_2(_system, _warningMessage_2(_self, _message));
    return _self;
  },
  "{ :self :message | postLine(system,warningMessage(self,message)); self }",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "yourself",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);
