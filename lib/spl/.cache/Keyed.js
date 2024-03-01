sl.extendTraitWithMethod(
  "Dictionary",
  "Keyed",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_self);
  },
  "{ :self |\n\t\tself.indices\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Keyed",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _withIndexDo_2(_self, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_key, _value);
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.withIndexDo { :value :key |\n\t\t\taBlock(key, value)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Keyed",
  "keysDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.indicesDo(aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Keyed",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_self, _key);
  },
  "{ :self :key |\n\t\tself.includesIndex(key)\n\t}",
);

sl.extendTraitWithMethod(
  "Indexable",
  "Keyed",
  "keyAtValue",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indexOf_2(_self, _value);
  },
  "{ :self :value |\n\t\tself.indexOf(value)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Keyed",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_index, _at_2(_self, _index));
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.indicesDo { :index |\n\t\t\taBlock(index, self[index])\n\t\t}\n\t}",
);
