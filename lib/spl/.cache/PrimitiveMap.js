sl.addTrait("PrimitiveMap", "PrimitiveMap");

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "PrimitiveMap",
  "asMap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "PrimitiveMap",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _allSatisfy_2(_keys_1(_self), _isString_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedAsRecord_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@PrimitiveMap>>asRecord: not all keys are strings",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(allSatisfy(keys(self),isString:/1), { uncheckedAsRecord(self) }, { error(self,'@PrimitiveMap>>asRecord: not all keys are strings') }) }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "PrimitiveMap",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_key)) {
      return _self.get(_key);
    }
    return _ifAbsent_0();
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 | <primitive: if(_self.has(_key)) {\n\t\t\treturn _self.get(_key);\n\t\t};\n\t\treturn _ifAbsent_0();>\n }",
);

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "PrimitiveMap",
  "includesKey",
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

sl.addMethodToExistingTrait(
  "PrimitiveMap",
  "PrimitiveMap",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  sl.annotateFunction(function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_key)) {
      const removed = _self.get(_key);
      _self.delete(_key);
      return removed;
    } else {
      return _aBlock_0();
    }
  }, ["self", "key", "aBlock:/0"]),
  "{ :self :key :aBlock:/0 | <primitive: if(_self.has(_key)) {\n\t\t\tconst removed = _self.get(_key);\n\t\t\t_self.delete(_key);\n\t\t\treturn removed;\n\t\t} else {\n\t\t\treturn _aBlock_0();\n\t\t}>\n }",
);
