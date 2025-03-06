sl.addType(
  true,
  "PriorityQueue",
  "PriorityQueue",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "PriorityQueue",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  }, ["self"]),
  "{ :self | =(size(self), 0) }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "peek",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.peek() || null;
  }, ["self"]),
  "{ :self | <primitive: return _self.peek() || null;>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "peekPriority",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.peekValue() || null;
  }, ["self"]),
  "{ :self | <primitive: return _self.peekValue() || null;>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "pop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pop();
  }, ["self"]),
  "{ :self | <primitive: return _self.pop();>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  }, ["self"]),
  "{ :self | ['size'] }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "pushWithPriority",
  ["self", "item", "priority"],
  sl.annotateFunction(function (_self, _item, _priority) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _item, _priority";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.push(_item, _priority);
  }, ["self", "item", "priority"]),
  "{ :self :item :priority | <primitive: return _self.push(_item, _priority);>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "pushAllWithPriority",
  ["self", "associationsList"],
  sl.annotateFunction(function (_self, _associationsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _associationsList";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _associationsList,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _pushWithPriority_3(_self, _key_1(_each), _value_1(_each));
      }, ["each"]),
    );
  }, ["self", "associationsList"]),
  "{ :self :associationsList | do(associationsList, { :each | pushWithPriority(self,key(each), value(each)) }) }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.clear();
  }, ["self"]),
  "{ :self | <primitive: return _self.clear();>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "removeAllAndShrink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAll_1(_self);
    return _shrink_1(_self);
  }, ["self"]),
  "{ :self | removeAll(self); shrink(self) }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "shrink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.shrink();
  }, ["self"]),
  "{ :self | <primitive: return _self.shrink();>\n }",
);

sl.addMethodToExistingType(
  "PriorityQueue",
  "PriorityQueue",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.length;
  }, ["self"]),
  "{ :self | <primitive: return _self.length;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "PriorityQueue",
  "PriorityQueue",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new sl.PriorityQueue();
  }, []),
  "{ <primitive: return new sl.PriorityQueue();>\n }",
);
