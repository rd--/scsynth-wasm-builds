sl.addType(
  true,
  "PriorityQueue",
  "PriorityQueue",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "PriorityQueue",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "peek",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.peek() || null;
  },
  "{ :self |\n\t\t<primitive: return _self.peek() || null;>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "peekPriority",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.peekValue() || null;
  },
  "{ :self |\n\t\t<primitive: return _self.peekValue() || null;>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "pop",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.pop();
  },
  "{ :self |\n\t\t<primitive: return _self.pop();>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "pushWithPriority",
  ["self", "item", "priority"],
  function (_self, _item, _priority) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _item, _priority"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.push(_item, _priority);
  },
  "{ :self :item :priority |\n\t\t<primitive: return _self.push(_item, _priority);>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "pushAllWithPriority",
  ["self", "associationsList"],
  function (_self, _associationsList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _associationsList"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_associationsList, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _pushWithPriority_3(_self, _key_1(_each), _value_1(_each));
    });
  },
  "{ :self :associationsList |\n\t\tassociationsList.do { :each |\n\t\t\tself.pushWithPriority(each.key, each.value)\n\t\t}\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.clear();
  },
  "{ :self |\n\t\t<primitive: return _self.clear();>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "removeAllAndShrink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _removeAll_1(_self);
    return _shrink_1(_self);
  },
  "{ :self |\n\t\tself.removeAll;\n\t\tself.shrink\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "shrink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.shrink();
  },
  "{ :self |\n\t\t<primitive: return _self.shrink();>\n\t}",
);

sl.addMethod(
  "PriorityQueue",
  "PriorityQueue",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.length;
  },
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addMethod(
  "Void",
  "PriorityQueue",
  "PriorityQueue",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage =
        "Arity: expected 0, "; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new sl.PriorityQueue();
  },
  "{\n\t\t<primitive: return new sl.PriorityQueue();>\n\t}",
);
