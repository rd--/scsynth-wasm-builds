/*  Requires: Map  */

sl.addType(
  true,
  "WeakMap",
  "WeakMap",
  ["Object", "Indexable", "PrimitiveMap"],
  [],
);

sl.copyTraitToType(
  "Object",
  "WeakMap",
);

sl.copyTraitToType(
  "Indexable",
  "WeakMap",
);

sl.copyTraitToType(
  "PrimitiveMap",
  "WeakMap",
);

sl.addMethod(
  "WeakMap",
  "WeakMap",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "size: cannot be observed");
  },
  "{ :self |\n\t\tself.error('size: cannot be observed')\n\t}",
);

sl.addMethod(
  "Void",
  "WeakMap",
  "WeakMap",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new WeakMap();
  },
  "{\n\t\t<primitive: return new WeakMap();>\n\t}",
);
