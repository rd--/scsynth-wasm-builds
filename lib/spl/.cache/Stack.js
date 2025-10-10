/*  Requires: LinkedList  */

sl.addType(
  false,
  "Stack",
  "Stack",
  ["Object", "Copyable", "Equatable"],
  ["linkedList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Stack",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "Stack",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Stack",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "equalBy",
  ["self", "aStack", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aStack, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aStack, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isStack_1(_aStack),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_linkedList_1(_self), _linkedList_1(_aStack));
      }, []),
    );
  }, ["self", "aStack", "aBlock:/2"]),
  "{ :self :aStack :aBlock:/2 |\n\t\taStack.isStack & {\n\t\t\taBlock(self.linkedList, aStack.linkedList)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "errorEmptyStack",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Stack is empty");
  }, ["self"]),
  "{ :self |\n\t\tself.error('Stack is empty')\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEmpty_1(_linkedList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.linkedList.isEmpty\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "isNotEmptyCheck",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorEmptyStack_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.errorEmptyStack\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "peek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _linkedList_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_list),
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
        return _value_1(_first_1(_list));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.linkedList;\n\t\tlist.isEmpty.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlist.first.value\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "pop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _list = _linkedList_1(_self);
    /* Statements */
    return _if_3(
      _isEmpty_1(_list),
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
        return _value_1(_removeFirst_1(_list));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet list = self.linkedList;\n\t\tlist.isEmpty.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlist.removeFirst.value\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linkedList_2(_self, _copy_1(_linkedList_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.linkedList := self.linkedList.copy\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "push",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _addFirst_2(_linkedList_1(_self), _anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.linkedList.addFirst(anObject);\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_linkedList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.linkedList.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Stack",
  "Stack",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newStack_0(), _LinkedList_0());
  }, []),
  "{\n\t\tnewStack().initializeSlots(LinkedList())\n\t}",
);
