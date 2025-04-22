sl.addType(
  true,
  "Storage",
  "Storage",
  ["Object", "Collection", "Dictionary"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Storage",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Storage",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "Storage",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ==(self, anObject) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "at",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_key);
    _assertIsValidKey_2(_self, _key);
    return _uncheckedAt_2(_self, _key);
  }, ["self", "key"]),
  "{ :self :key | assertIsString(key); assertIsValidKey(self,key); uncheckedAt(self,key) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "atPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsString_1(_key);
    _assertIsString_1(_value);
    return _uncheckedAtPut_3(_self, _key, _value);
  }, ["self", "key", "value"]),
  "{ :self :key :value | assertIsString(key); assertIsString(value); uncheckedAtPut(self,key, value) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "includesKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keys_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key | includes(keys(self),key) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = [];
    for (let index = 0; index < _self.length; index++) {
      answer.push(_self.key(index));
    }
    return answer;
  }, ["self"]),
  "{ :self | <primitive: const answer = [];\n\t\tfor(let index = 0; index < _self.length; index++) {\n\t\t\tanswer.push(_self.key(index));\n\t\t};\n\t\treturn answer;>\n }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "removeKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeKeyIfAbsent_3(
      _self,
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "removeKey: invalid key");
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key | removeKeyIfAbsent(self, key, { error(self,'removeKey: invalid key') }) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  sl.annotateFunction(function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesKey_2(_self, _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedRemoveKey_2(_self, _key);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
    );
  }, ["self", "key", "aBlock:/0"]),
  "{ :self :key :aBlock:/0 | if(includesKey(self,key), { uncheckedRemoveKey(self,key) }, { aBlock() }) }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.clear();
    return _self;
  }, ["self"]),
  "{ :self | <primitive: _self.clear();\n\t\treturn _self;>\n }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
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

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return "a Storage";
  }, ["self"]),
  "{ :self | 'a Storage' }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "uncheckedAt",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getItem(_key);
  }, ["self", "key"]),
  "{ :self :key | <primitive: return _self.getItem(_key);>\n }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "uncheckedAtPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.setItem(_key, _value);
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value | <primitive: _self.setItem(_key, _value);\n\t\treturn _value;>\n }",
);

sl.addMethodToExistingType(
  "Storage",
  "Storage",
  "uncheckedRemoveKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = _self.getItem(_key);
    _self.removeItem(_key);
    return answer;
  }, ["self", "key"]),
  "{ :self :key | <primitive: const answer = _self.getItem(_key);\n\t\t_self.removeItem(_key);\n\t\treturn answer;>\n }",
);
