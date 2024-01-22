sl.addType(
  true,
  "Storage",
  "Storage",
  ["Object", "Collection", "Dictionary"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Storage",
);

sl.copyTraitToType(
  "Collection",
  "Storage",
);

sl.copyTraitToType(
  "Dictionary",
  "Storage",
);

sl.addMethod(
  "Storage",
  "Storage",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_key);
    _assertIsValidKey_2(_self, _key);
    return _basicAt_2(_self, _key);
  },
  "{ :self :key |\n\t\tkey.assertIsString;\n\t\tself.assertIsValidKey(key);\n\t\tself.basicAt(key)\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_key);
    _assertIsString_1(_value);
    return _basicAtPut_3(_self, _key, _value);
  },
  "{ :self :key :value |\n\t\tkey.assertIsString;\n\t\tvalue.assertIsString;\n\t\tself.basicAtPut(key, value)\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "basicAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.getItem(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.getItem(_key);>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "basicAtPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.setItem(_key, _value);
    return _value;
  },
  "{ :self :key :value |\n\t\t<primitive:\n\t\t_self.setItem(_key, _value);\n\t\treturn _value;\n\t\t>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "basicRemoveAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const answer = _self.getItem(_key);
    _self.removeItem(_key);
    return answer;
  },
  "{ :self :key |\n\t\t<primitive:\n\t\tconst answer = _self.getItem(_key);\n\t\t_self.removeItem(_key);\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "includesIndex",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_indices_1(_self), _key);
  },
  "{ :self :key |\n\t\tself.indices.includes(key)\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    const answer = [];
    for (let index = 0; index < _self.length; index++) {
      answer.push(_self.key(index));
    }
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst answer = [];\n\t\tfor(let index = 0; index < _self.length; index++) {\n\t\t\tanswer.push(_self.key(index));\n\t\t};\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "removeAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _assertIsString_1(_key);
    _assertIsValidKey_2(_self, _key);
    return _basicRemoveAt_2(_self, _key);
  },
  "{ :self :key |\n\t\tkey.assertIsString;\n\t\tself.assertIsValidKey(key);\n\t\tself.basicRemoveAt(key)\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.clear();
    return _self;
  },
  "{ :self |\n\t\t<primitive:\n\t\t_self.clear();\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.length;
  },
  "{ :self |\n\t\t<primitive: return _self.length;>\n\t}",
);

sl.addMethod(
  "Storage",
  "Storage",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return "<a Storage>";
  },
  "{ :self |\n\t\t'<a Storage>'\n\t}",
);
