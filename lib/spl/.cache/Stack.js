/*  Requires: LinkedList  */

sl.addType(
  false,
  "Stack",
  "Stack",
  ["Object"],
  ["linkedList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Stack",
);

sl.addMethodToExistingType(
  "Stack",
  "Stack",
  "equalsSign",
  ["self", "aStack"],
  sl.annotateFunction(function (_self, _aStack) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aStack";
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
        return _equalsSign_2(_linkedList_1(_self), _linkedList_1(_aStack));
      }, []),
    );
  }, ["self", "aStack"]),
  "{ :self :aStack | &(isStack(aStack), { =(linkedList(self), linkedList(aStack)) }) }",
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
  "{ :self | error(self,'Stack is empty') }",
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
  "{ :self | isEmpty(linkedList(self)) }",
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
  "{ :self | ifTrue(isEmpty(self), { errorEmptyStack(self) }) }",
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
  "{ :self | let list = linkedList(self); if(isEmpty(list), { nil }, { value(first(list)) }) }",
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
  "{ :self | let list = linkedList(self); if(isEmpty(list), { nil }, { value(removeFirst(list)) }) }",
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
  "{ :self | linkedList(self, copy(linkedList(self))) }",
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
  "{ :self :anObject | addFirst(linkedList(self),anObject); anObject }",
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
  "{ :self | size(linkedList(self)) }",
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
  "{ initializeSlots(newStack(),LinkedList()) }",
);
