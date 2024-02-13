sl.addType(
  true,
  "Record",
  "Record",
  ["Object", "Json", "Iterable", "Indexable", "Collection", "Dictionary"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Record",
);

sl.copyTraitToType(
  "Json",
  "Record",
);

sl.copyTraitToType(
  "Iterable",
  "Record",
);

sl.copyTraitToType(
  "Indexable",
  "Record",
);

sl.copyTraitToType(
  "Collection",
  "Record",
);

sl.copyTraitToType(
  "Dictionary",
  "Record",
);

sl.addMethod(
  "Record",
  "Record",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "at",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (Object.hasOwn(_self, _aString)) {
      return _self[_aString];
    }
    /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("at: unknown key: ", _aString));
  },
  "{ :self :aString |\n\t\t<primitive:\n\t\tif(Object.hasOwn(_self, _aString)) {\n\t\t\treturn _self[_aString];\n\t\t}\n\t\t>\n\t\tself.error('at: unknown key: ' ++ aString)\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "atPut",
  ["self", "aString", "anObject"],
  function (_self, _aString, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aString, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (typeof _aString === "string") {
      _self[_aString] = _anObject;
      return _anObject;
    }
    /* Statements */
    return _error_2(
      _self,
      _plusSignPlusSign_2("atPut key not a string: ", _typeOf_1(_aString)),
    );
  },
  "{ :self :aString :anObject |\n\t\t<primitive:\n\t\tif(typeof _aString === 'string') {\n\t\t\t_self[_aString] = _anObject;\n\t\t\treturn _anObject;\n\t\t}\n\t\t>\n\t\tself.error('atPut key not a string: ' ++ aString.typeOf)\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "includesIndex",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Object.hasOwn(_self, _key);
  },
  "{ :self :key |\n\t\t<primitive: return Object.hasOwn(_self, _key);>\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
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
    return Object.keys(_self);
  },
  "{ :self |\n\t\t<primitive: return Object.keys(_self);>\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock"],
  function (_self, _key, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    if (Object.hasOwn(_self, _key)) {
      delete _self[_key];
      return _key;
    } else {
      return _aBlock();
    }
  },
  "{ :self :key :aBlock |\n\t\t<primitive:\n\t\tif(Object.hasOwn(_self, _key)) {\n\t\t\tdelete _self[_key];\n\t\t\treturn _key;\n\t\t} else {\n\t\t\treturn _aBlock();\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
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
    return Object.keys(_self).length;
  },
  "{ :self |\n\t\t<primitive: return Object.keys(_self).length;>\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Record_0;
  },
  "{ :self |\n\t\tRecord:/0\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
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
    return _join_1([
      "(",
      _joinSeparatedBy_2(
        _collect_2(_associations_1(_self), function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _plusSignPlusSign_2(
            _plusSignPlusSign_2(_key_1(_each), ": "),
            _storeString_1(_value_1(_each)),
          );
        }),
        ", ",
      ),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'(',\n\t\t\t\tself.associations.collect { :each |\n\t\t\t\t\teach.key ++ ': ' ++ each.value.storeString\n\t\t\t\t}.joinSeparatedBy(', '),\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Object.values(_self);
  },
  "{ :self |\n\t\t<primitive: return Object.values(_self);>\n\t}",
);

sl.addMethod(
  "Record",
  "Record",
  "withIndexDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    Object.entries(_self).forEach(function (entry) {
      _aBlock_2(entry[1], entry[0]);
    });
    return null;
  },
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\tObject.entries(_self).forEach(function(entry) {\n\t\t\t_aBlock_2(entry[1], entry[0]);\n\t\t});\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "Record",
  "recordFromTwoElementLists",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Object.fromEntries(_self);
  },
  "{ :self |\n\t\t<primitive: return Object.fromEntries(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Record",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _allSatisfy_2(_collect_2(_self, _key_1), _isString_1),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _recordFromTwoElementLists_1(_collect_2(_self, _asList_1));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "List>>asRecord: not all keys are strings");
      },
    );
  },
  "{ :self |\n\t\tself.collect(key:/1).allSatisfy(isString:/1).if {\n\t\t\tself.collect(asList:/1).recordFromTwoElementLists\n\t\t} {\n\t\t\tself.error('List>>asRecord: not all keys are strings')\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "Record",
  "Record",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Object.create(null);
  },
  "{\n\t\t<primitive: return Object.create(null);>\n\t}",
);
