sl.addType(
  true,
  "Trait",
  "Trait",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Trait",
);

sl.addMethod(
  "Trait",
  "Trait",
  "addMethodsTo",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_values_1(_methodDictionary_1(_trait)), function (_method) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _method";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_aCollection, _method);
    });
  },
  "{ :self :aCollection |\n\t\ttrait.methodDictionary.values.do { :method |\n\t\t\taCollection.add(method)\n\t\t}\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "methodArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _values_1(_methodDictionary_1(_self));
  },
  "{ :self |\n\t\tself.methodDictionary.values\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "methodDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.methodDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.methodDictionary;>\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.packageName;
  },
  "{ :self |\n\t\t<primitive: return _self.packageName;>\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "pseudoSlotNameArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["methodDictionary", "name", "packageName"];
  },
  "{ :self |\n\t\t['methodDictionary', 'name', 'packageName']\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _qualifiedName_1(_self);
  },
  "{ :self |\n\t\tself.qualifiedName\n\t}",
);

sl.addMethod(
  "Trait",
  "Trait",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2("@", _name_1(_self));
  },
  "{ :self |\n\t\t'@' ++ self.name\n\t}",
);

sl.addMethod(
  "String",
  "Trait",
  "isQualifiedTraitName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_at_2(_self, 1), _asCharacter_1("@"));
  },
  "{ :self |\n\t\tself[1] = '@'.asCharacter\n\t}",
);

sl.addMethod(
  "String",
  "Trait",
  "parseQualifiedTraitName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isQualifiedTraitName_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copyFromTo_3(_self, 2, _size_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    });
  },
  "{ :self |\n\t\tself.isQualifiedTraitName.if {\n\t\t\tself.copyFromTo(2, self.size)\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);
