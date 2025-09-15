/*  Requires: PrimitiveMap  */

sl.addType(
  true,
  "WeakMap",
  "WeakMap",
  ["Object", "Indexable", "PrimitiveMap"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeakMap",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "WeakMap",
);

sl.copyTraitMethodsToType(
  "PrimitiveMap",
  "WeakMap",
);

sl.addMethodToExistingType(
  "WeakMap",
  "WeakMap",
  "atPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.set(_key, _value);
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value | <primitive: _self.set(_key, _value);\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingType(
  "WeakMap",
  "WeakMap",
  "includesIndex",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_key);
  }, ["self", "key"]),
  "{ :self :key | <primitive: return _self.has(_key);>\n }",
);

sl.addMethodToExistingType(
  "WeakMap",
  "WeakMap",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "size: cannot be observed");
  }, ["self"]),
  "{ :self | error(self,'size: cannot be observed') }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "WeakMap",
  "WeakMap",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new WeakMap();
  }, []),
  "{ <primitive: return new WeakMap();>\n }",
);
