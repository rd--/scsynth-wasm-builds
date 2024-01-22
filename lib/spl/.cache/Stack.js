/* {- Requires: LinkedList -} */

sl.addType(
  false,
  "Stack",
  "Stack",
  ["Object"],
  ["linkedList"],
);

sl.copyTraitToType(
  "Object",
  "Stack",
);

sl.addMethod(
  "Stack",
  "Stack",
  "equals",
  ["self", "aStack"],
  function (_self, _aStack) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStack";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isStack_1(_aStack), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_linkedList_1(_self), _linkedList_1(_aStack));
    });
  },
  "{ :self :aStack |\n\t\taStack.isStack & {\n\t\t\tself.linkedList = aStack.linkedList\n\t\t}\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "errorEmptyStack",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "this stack is empty");
  },
  "{ :self |\n\t\tself.error('this stack is empty')\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isEmpty_1(_linkedList_1(_self));
  },
  "{ :self |\n\t\tself.linkedList.isEmpty\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "notEmptyCheck",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _errorEmptyStack_1(_self);
    });
  },
  "{ :self |\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.errorEmptyStack\n\t\t}\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "pop",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _notEmptyCheck_1(_self);
    return _value_1(_removeFirst_1(_linkedList_1(_self)));
  },
  "{ :self |\n\t\tself.notEmptyCheck;\n\t\tself.linkedList.removeFirst.value\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
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
    return _linkedList_2(_self, _copy_1(_linkedList_1(_self)));
  },
  "{ :self |\n\t\tself.linkedList := self.linkedList.copy\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "push",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _addFirst_2(_linkedList_1(_self), _anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\tself.linkedList.addFirst(anObject);\n\t\tanObject\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
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
    return _size_1(_linkedList_1(_self));
  },
  "{ :self |\n\t\tself.linkedList.size\n\t}",
);

sl.addMethod(
  "Stack",
  "Stack",
  "top",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _notEmptyCheck_1(_self);
    return _value_1(_first_1(_linkedList_1(_self)));
  },
  "{ :self |\n\t\tself.notEmptyCheck;\n\t\tself.linkedList.first.value\n\t}",
);

sl.addMethod(
  "Void",
  "Stack",
  "Stack",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newStack_0(), _LinkedList_0());
  },
  "{\n\t\tnewStack().initializeSlots(LinkedList())\n\t}",
);
