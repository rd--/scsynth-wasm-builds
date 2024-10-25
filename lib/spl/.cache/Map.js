/*  Require: List, Record, Void  */

sl.addTrait("PrimitiveMap", "Map");

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_allSatisfy_2(_indices_1(_self), _isString_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _basicAsRecord_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "asRecord: not all keys are strings");
    });
  },
  "{ :self |\n\t\tself.indices.allSatisfy(isString:/1).if {\n\t\t\tself.basicAsRecord\n\t\t} {\n\t\t\tself.error('asRecord: not all keys are strings')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    if (_self.has(_key)) {
      return _self.get(_key);
    }
    /* Statements */
    return _error_2(_self, _plusSignPlusSign_2("at: unknown key: ", _key));
  },
  "{ :self :key |\n\t\t<primitive:\n\t\tif(_self.has(_key)) {\n\t\t\treturn _self.get(_key);\n\t\t}\n\t\t>\n\t\tself.error('at: unknown key: ' ++ key)\n\t}",
);

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.set(_key, _value);
    return _value;
  },
  "{ :self :key :value |\n\t\t<primitive:\n\t\t_self.set(_key, _value);\n\t\treturn _value;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "includesIndex",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.has(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.has(_key);>\n\t}",
);

sl.addTraitMethod(
  "PrimitiveMap",
  "Map",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    const existed = _self.delete(_key);
    if (existed) {
      return _key;
    } else {
      return _aBlock_0();
    }
  },
  "{ :self :key :aBlock:/0 |\n\t\t<primitive:\n\t\tconst existed = _self.delete(_key);\n\t\tif(existed) {\n\t\t\treturn _key;\n\t\t} else {\n\t\t\treturn _aBlock_0();\n\t\t}\n\t\t>\n\t}",
);

sl.addType(
  true,
  "Map",
  "Map",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Indexable",
    "Dictionary",
    "PrimitiveMap",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "Map",
);

sl.copyTraitToType(
  "Iterable",
  "Map",
);

sl.copyTraitToType(
  "Collection",
  "Map",
);

sl.copyTraitToType(
  "Extensible",
  "Map",
);

sl.copyTraitToType(
  "Removable",
  "Map",
);

sl.copyTraitToType(
  "Indexable",
  "Map",
);

sl.copyTraitToType(
  "Dictionary",
  "Map",
);

sl.copyTraitToType(
  "PrimitiveMap",
  "Map",
);

sl.addMethod(
  "Map",
  "Map",
  "add",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.set(_anAssociation.key, _anAssociation.value);
    return _anAssociation;
  },
  "{ :self :anAssociation |\n\t\t<primitive:\n\t\t_self.set(_anAssociation.key, _anAssociation.value);\n\t\treturn _anAssociation;\n\t\t>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "asJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asJson_3(_self, null, "");
  },
  "{ :self |\n\t\tself.asJson(nil, '')\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "asJson",
  ["self", "replacer", "space"],
  function (_self, _replacer, _space) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _replacer, _space";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asJson_3(_asRecord_1(_self), _replacer, _space);
  },
  "{ :self :replacer :space |\n\t\tself.asRecord.asJson(replacer, space)\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "basicAsRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Object.fromEntries(_self);
  },
  "{ :self |\n\t\t<primitive: return Object.fromEntries(_self);>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Array.from(_self.keys());
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.keys());>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.clear();
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\t<primitive: _self.clear();>\n\t\tself\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Map(_self);
  },
  "{ :self |\n\t\t<primitive: return new Map(_self);>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.size;
  },
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Map_0;
  },
  "{ :self |\n\t\tMap:/0\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_associations_1(_self)),
      ".asMap",
    );
  },
  "{ :self |\n\t\tself.associations.storeString ++ '.asMap'\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "substitutionSystem",
  ["self", "aSequence", "anInteger"],
  function (_self, _aSequence, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aSequence, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [_aSequence];
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _next = [];
      /* Statements */
      _do_2(_last_1(_answer), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(_next, _at_2(_self, _each));
      });
      return _add_2(_answer, _next);
    });
    return _answer;
  },
  "{ :self :aSequence :anInteger |\n\t\tlet answer = [aSequence];\n\t\tanInteger.timesRepeat {\n\t\t\tlet next = [];\n\t\t\tanswer.last.do { :each |\n\t\t\t\tnext.addAll(self[each])\n\t\t\t};\n\t\t\tanswer.add(next)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return Array.from(_self.values());
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.values());>\n\t}",
);

sl.addMethod(
  "Map",
  "Map",
  "withIndexDo",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.forEach(function (value, key, _) {
      _aBlock(value, key);
    });
    return null;
  },
  "{ :self :aBlock |\n\t\t<primitive:\n\t\t_self.forEach(function(value, key, _) {\n\t\t\t_aBlock(value, key);\n\t\t});\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "List",
  "Map",
  "mapFromTwoElementLists",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Map(_self);
  },
  "{ :self |\n\t\t<primitive: return new Map(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _mapFromTwoElementLists_1(_collect_2(_self, _asList_1));
  },
  "{ :self |\n\t\tself.collect(asList:/1).mapFromTwoElementLists\n\t}",
);

sl.addMethod(
  "Void",
  "Map",
  "Map",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Map();
  },
  "{\n\t\t<primitive: return new Map();>\n\t}",
);

sl.addMethod(
  "Record",
  "Map",
  "asMap",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new Map(Object.entries(_self));
  },
  "{ :self |\n\t\t<primitive: return new Map(Object.entries(_self));>\n\t}",
);
