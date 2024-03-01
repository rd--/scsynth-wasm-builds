sl.addType(
  true,
  "Type",
  "Type",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Type",
);

sl.addMethod(
  "Type",
  "Type",
  "category",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _categoryOf_3(
      _categoryDictionary_1(_system),
      "type",
      _name_1(_self),
    );
  },
  "{ :self |\n\t\tsystem.categoryDictionary.categoryOf('type', self.name)\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "constructorName",
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
      _plusSignPlusSign_2("new", _name_1(_self)),
      ":/0",
    );
  },
  "{ :self |\n\t\t'new' ++ self.name ++ ':/0'\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "instanceOf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _instance = _value_1(
      _block_1(
        _at_2(
          _methodDictionary_1(_typeLookup_2(_system, "Void")),
          _constructorName_1(_self),
        ),
      ),
    );
    /* Statements */
    _initialize_1(_instance);
    return _instance;
  },
  "{ :self |\n\t\tlet instance = system.typeLookup('Void').methodDictionary[self.constructorName].block.value;\n\t\tinstance.initialize;\n\t\tinstance\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "isMeta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _endsWith_2(_name_1(_self), "^");
  },
  "{ :self |\n\t\tself.name.endsWith('^')\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "methodList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _values_1(_methodDictionary_1(_self));
  },
  "{ :self |\n\t\tself.methodDictionary.values\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "methodDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.methodDictionary;
  },
  "{ :self |\n\t\t<primitive: return _self.methodDictionary;>\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "packageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.packageName;
  },
  "{ :self |\n\t\t<primitive: return _self.packageName;>\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _qualifiedName_1(_self);
  },
  "{ :self |\n\t\tself.qualifiedName\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [
      "name",
      "packageName",
      "traitNameList",
      "slotNameList",
      "methodDictionary",
    ];
  },
  "{ :self |\n\t\t['name', 'packageName', 'traitNameList', 'slotNameList', 'methodDictionary']\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _name_1(_self);
  },
  "{ :self |\n\t\tself.name\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "slotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.slotNameArray;
  },
  "{ :self |\n\t\t<primitive: return _self.slotNameArray;>\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "traitList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_traitNameList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _traitLookup_2(_system, _each);
    });
  },
  "{ :self |\n\t\tself.traitNameList.collect { :each |\n\t\t\tsystem.traitLookup(each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Type",
  "Type",
  "traitNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.traitNameArray;
  },
  "{ :self |\n\t\t<primitive: return _self.traitNameArray;>\n\t}",
);
