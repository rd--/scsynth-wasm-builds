sl.addType(
  false,
  "AssociationList",
  "AssociationList",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
  ],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "AssociationList",
);

sl.copyTraitToType(
  "Iterable",
  "AssociationList",
);

sl.copyTraitToType(
  "Indexable",
  "AssociationList",
);

sl.copyTraitToType(
  "Collection",
  "AssociationList",
);

sl.copyTraitToType(
  "Extensible",
  "AssociationList",
);

sl.copyTraitToType(
  "Removable",
  "AssociationList",
);

sl.copyTraitToType(
  "Dictionary",
  "AssociationList",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "associations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  },
  "{ :self |\n\t\tself.contents\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "atIfPresentIfAbsent",
  ["self", "key", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _key, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _ifPresent_1, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _detectIndex_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_key_1(_each), _key);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      },
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_value_1(_at_2(_contents_1(_self), _index)));
      },
    );
  },
  "{ :self :key :ifPresent:/1 :ifAbsent:/0 |\n\t\tself.contents.detectIndex { :each |\n\t\t\teach.key = key\n\t\t}.ifNil {\n\t\t\tifAbsent()\n\t\t} { :index |\n\t\t\tifPresent(self.contents[index].value)\n\t\t}\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_key_1(_each), _key);
    }, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_1(_each);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("AssociationList>>at: unknown key: ", _key),
      );
    });
  },
  "{ :self :key |\n\t\tself.contents.detectIfFoundIfNone { :each |\n\t\t\teach.key = key\n\t\t} { :each |\n\t\t\teach.value\n\t\t} {\n\t\t\tself.error('AssociationList>>at: unknown key: ' ++ key)\n\t\t}\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_key_1(_each), _key);
    }, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_2(_each, _value);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(
        _contents_1(_self),
        _hyphenMinusGreaterThanSign_2(_key, _value),
      );
    });
  },
  "{ :self :key :value |\n\t\tself.contents.detectIfFoundIfNone { :each |\n\t\t\teach.key = key\n\t\t} { :each |\n\t\t\teach.value := value\n\t\t} {\n\t\t\tself.contents.add(key -> value)\n\t\t}\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _tildeEqualsSign_2(
      _detectIndex_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_key_1(_each), _key);
      }),
      null,
    );
  },
  "{ :self :key |\n\t\tself.contents.detectIndex { :each |\n\t\t\teach.key = key\n\t\t} ~= nil\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_self);
  },
  "{ :self |\n\t\tself.keys\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _key_1);
  },
  "{ :self |\n\t\tself.contents.collect(key:/1)\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _detectIndex_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_key_1(_each), _key);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      },
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAt_2(_contents_1(_self), _index);
      },
    );
  },
  "{ :self :key :aBlock:/0 |\n\t\tself.contents.detectIndex { :each |\n\t\t\teach.key = key\n\t\t}.ifNil {\n\t\t\taBlock()\n\t\t} { :index |\n\t\t\tself.contents.removeAt(index)\n\t\t}\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "AssociationList",
  "AssociationList",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_contents_1(_self), _value_1);
  },
  "{ :self |\n\t\tself.contents.collect(value:/1)\n\t}",
);

sl.addMethod(
  "Void",
  "AssociationList",
  "AssociationList",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newAssociationList_0(), _List_0());
  },
  "{\n\t\tnewAssociationList().initializeSlots(List())\n\t}",
);

sl.addMethod(
  "List",
  "AssociationList",
  "asAssociationList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_allSatisfy_2(_self, _isAssociation_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newAssociationList_0(), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        "List>>asAssociationList: not list of associations",
      );
    });
  },
  "{ :self |\n\t\tself.allSatisfy(isAssociation:/1).if {\n\t\t\tnewAssociationList().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('List>>asAssociationList: not list of associations')\n\t\t}\n\t}",
);
