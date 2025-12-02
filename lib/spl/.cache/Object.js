sl.addTrait("Object", "Object");

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "identical",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "equalsSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "nonidentical",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self !== _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self !== _anObject;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "exclamationMarkEqualsSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self !== _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self !== _anObject;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "assert",
  ["self", "aString", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aString, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _aBlock_0(),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Assertion failed: ", _aString),
        );
      }, []),
    );
  }, ["self", "aString", "aBlock:/0"]),
  "{ :self :aString :aBlock:/0 |\n\t\taBlock().if {\n\t\t\tself\n\t\t} {\n\t\t\tself.error('Assertion failed: ' ++ aString)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "assert",
  ["self", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(_self, "*unknown context*", _aBlock_0);
  }, ["self", "aBlock:/0"]),
  "{ :self :aBlock:/0 |\n\t\tself.assert('*unknown context*', aBlock:/0)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseError",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "@Object>>caseError: case not found and no otherwise clause",
    );
  }, ["self"]),
  "{ :self |\n\t\tself.error('@Object>>caseError: case not found and no otherwise clause')\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseOf",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      _aCollection,
      sl.annotateFunction(function (_case) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _case";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseError_1(_self);
      }, ["case"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.caseOf(aCollection) { :case |\n\t\t\tself.caseError\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "caseOf",
  ["self", "aCollection", "otherwise:/1"],
  sl.annotateFunction(function (_self, _aCollection, _otherwise_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aCollection, _otherwise_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(
        _aCollection,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_key_1(_each), _self),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_blockValue_1(_value_1(_each)));
            }, []),
          );
        }, ["each"]),
      );
      return _cull_2(_otherwise_1, _self);
    }, ["return:/1"]));
  }, ["self", "aCollection", "otherwise:/1"]),
  "{ :self :aCollection :otherwise:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\taCollection.associationsDo { :each |\n\t\t\t\t(each.key = self).ifTrue {\n\t\t\t\t\teach.value.blockValue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\totherwise:/1.cull(self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndefiniteArticle_1(_typeOf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.typeOf.withIndefiniteArticle\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "constant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_unusedObject) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _self;
    }, ["unusedObject"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :unusedObject |\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveCopy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.primitiveCopy\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "deepCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "deepCopy");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('deepCopy')\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "errorMessage",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%: %: (%)", [
      _typeOf_1(_self),
      _message,
      _printStringLimitedTo_2(_self, 16),
    ]);
  }, ["self", "message"]),
  "{ :self :message |\n\t\t'%: %: (%)'.format(\n\t\t\t[\n\t\t\t\tself.typeOf,\n\t\t\t\tmessage,\n\t\t\t\tself.printStringLimitedTo(16)\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "error",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _description = _errorMessage_2(_self, _message);
    /* Statements */
    return _signal_1(_Error_1(_description));
  }, ["self", "message"]),
  "{ :self :message |\n\t\tlet description = self.errorMessage(message);\n\t\tError(description).signal\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "identity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "in",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.aBlock\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "initialize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "inspectAsList",
  ["self", "maxIndices"],
  sl.annotateFunction(function (_self, _maxIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxIndices";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_1([
      [_hyphenMinusGreaterThanSign_2("Type", _typeDefinition_1(_self))],
      _slotList_1(_self),
      _pseudoSlotList_1(_self),
      _if_3(
        _isIndexable_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _take_2(_indices_1(_self), _maxIndices),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinusGreaterThanSign_2(
                _concisePrintString_1(_each),
                _at_2(_self, _each),
              );
            }, ["each"]),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [];
        }, []),
      ),
    ]);
  }, ["self", "maxIndices"]),
  "{ :self :maxIndices |\n\t\t[\n\t\t\t['Type' -> self.typeDefinition],\n\t\t\tself.slotList,\n\t\t\tself.pseudoSlotList,\n\t\t\tself.isIndexable.if {\n\t\t\t\tself.indices.take(maxIndices).collect { :each |\n\t\t\t\t\teach.concisePrintString -> self[each]\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t[]\n\t\t\t}\n\t\t].catenate\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isImmediate",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "leftIdentity",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "notificationMessage",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%: %: (%)", [
      _typeOf_1(_self),
      _message,
      _printStringLimitedTo_2(_self, 16),
    ]);
  }, ["self", "message"]),
  "{ :self :message |\n\t\t'%: %: (%)'.format(\n\t\t\t[\n\t\t\t\tself.typeOf,\n\t\t\t\tmessage,\n\t\t\t\tself.printStringLimitedTo(16)\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "notify",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    _postLine_2(_system, _notificationMessage_2(_self, _message));
    return _self;
  }, ["self", "message"]),
  "{ :self :message |\n\t\tsystem.postLine(self.notificationMessage(message));\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "perform",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 1, _typeOf_1(_self)),
    )(_self);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tsystem.methodLookupAtType(aString, 1, self.typeOf).block . (self)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "perform",
  ["self", "aString", "aValue"],
  sl.annotateFunction(function (_self, _aString, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _aValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _block_1(
      _methodLookupAtType_4(_system, _aString, 2, _typeOf_1(_self)),
    )(_self, _aValue);
  }, ["self", "aString", "aValue"]),
  "{ :self :aString :aValue |\n\t\tsystem.methodLookupAtType(aString, 2, self.typeOf).block . (self, aValue)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "primitiveCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Object.assign({}, _self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return Object.assign({}, _self);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "primitiveDeepCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return structuredClone(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return structuredClone(_self);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "primitiveIdentity",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self === _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t<primitive: return _self === _anObject;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndefiniteArticle_1(_typeOf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.typeOf.withIndefiniteArticle\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "printStringLimitedTo",
  ["self", "count"],
  sl.annotateFunction(function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _printString_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_size_1(_answer), _count),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _abbreviateTo_2(_answer, _count);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
    );
  }, ["self", "count"]),
  "{ :self :count |\n\t\tlet answer = self.printString;\n\t\t(answer.size > count).if {\n\t\t\tanswer.abbreviateTo(count)\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "pseudoSlotList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _pseudoSlotNameList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.pseudoSlotNameList.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self |\n\t\t[]\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "rightIdentity",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _slotNameList_1(_typeDefinition_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(_each, _perform_2(_self, _each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.typeDefinition.slotNameList.collect { :each |\n\t\t\teach -> self.perform(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _slotNameList_1(_typeDefinition_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.typeDefinition.slotNameList\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "slotValueList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _slotNameList_1(_typeDefinition_1(_self)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedSlotRead_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.typeDefinition.slotNameList.collect { :each |\n\t\t\tself.uncheckedSlotRead(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "then",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_1(_self);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.aBlock\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "typeDefinition",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeLookup_2(_system, _typeOf_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tsystem.typeLookup(self.typeOf)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "typeOf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sl.splTypeOf(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return sl.splTypeOf(_self);>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "uncheckedSlotRead",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self[_key];
  }, ["self", "key"]),
  "{ :self :key |\n\t\t<primitive: return _self[_key];>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "uncheckedSlotReadList",
  ["self", "keyList"],
  sl.annotateFunction(function (_self, _keyList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyList";
      throw new Error(errorMessage);
    } /* Primitive */
    return _keyList.map(function (key) {
      return _self[key];
    });
  }, ["self", "keyList"]),
  "{ :self :keyList |\n\t\t<primitive: return _keyList.map(function (key) {\n\t\t\treturn _self[key];\n\t\t});\n\t\t>\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "uncheckedSlotWrite",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self[_key] = _value;
    /* Statements */
    return null;
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\t<primitive: _self[_key] = _value;>\n\t\tnil\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "warningMessage",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Warning: %: %: (%)", [
      _typeOf_1(_self),
      _message,
      _printStringLimitedTo_2(_self, 16),
    ]);
  }, ["self", "message"]),
  "{ :self :message |\n\t\t'Warning: %: %: (%)'.format(\n\t\t\t[\n\t\t\t\tself.typeOf,\n\t\t\t\tmessage,\n\t\t\t\tself.printStringLimitedTo(16)\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "warning",
  ["self", "message"],
  sl.annotateFunction(function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      throw new Error(errorMessage);
    } /* Statements */
    _postLine_2(_system, _warningMessage_2(_self, _message));
    return _self;
  }, ["self", "message"]),
  "{ :self :message |\n\t\tsystem.postLine(self.warningMessage(message));\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Object",
  "Object",
  "yourself",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);
