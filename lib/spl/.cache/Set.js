sl.addTrait("Set", "Set");

sl.addTraitMethod(
  "Set",
  "Set",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isSet_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_size_1(_self), _size_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _allSatisfy_2(_self, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2(_anObject, _each);
          });
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isSet & {\n\t\t\tself.size = anObject.size & {\n\t\t\t\tself.allSatisfy { :each |\n\t\t\t\t\tanObject.includes(each)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "set includes item");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _include_2(_self, _anObject);
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\tself.error('set includes item')\n\t\t} {\n\t\t\tself.include(anObject)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _include_2(_answer, _aBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.include(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "isSet",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "remove",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsent_3(_self, _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "remove: item does not exist");
    });
  },
  "{ :self :anObject |\n\t\tself.removeIfAbsent(anObject) {\n\t\t\tself.error('remove: item does not exist')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Set",
  "Set",
  "without",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _removeIfAbsent_3(_self, _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
    });
    return _self;
  },
  "{ :self :anObject |\n\t\tself.removeIfAbsent(anObject) { };\n\t\tself\n\t}",
);

sl.addType(
  true,
  "Set",
  "Set",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Set",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "Set",
);

sl.copyTraitToType(
  "Iterable",
  "Set",
);

sl.copyTraitToType(
  "Collection",
  "Set",
);

sl.copyTraitToType(
  "Extensible",
  "Set",
);

sl.copyTraitToType(
  "Removable",
  "Set",
);

sl.copyTraitToType(
  "Unordered",
  "Set",
);

sl.copyTraitToType(
  "Set",
  "Set",
);

sl.addMethod(
  "Set",
  "Set",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "basicInclude",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.add(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.add(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "basicIncludeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    for (const item of _aCollection) {
      _self.add(item);
    }
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\t<primitive:\n\t\tfor (const item of _aCollection) {\n\t\t\t_self.add(item);\n\t\t};\n\t\treturn _aCollection;\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "basicRemove",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.delete(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.delete(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "do",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (item) {
      _aBlock(item);
    });
    /* Statements */
    return _self;
  },
  "{ :self :aBlock |\n\t\t<primitive:\n\t\t_self.forEach(function(item) {\n\t\t\t_aBlock(item);\n\t\t});\n\t\t>\n\t\tself\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_isImmediate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "IdentitySet>>include: non-immediate entry: ",
          _anObject,
        ),
      );
    });
    return _basicInclude_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tanObject.isImmediate.ifFalse {\n\t\t\tself.error('IdentitySet>>include: non-immediate entry: ' ++ anObject)\n\t\t};\n\t\tself.basicInclude(anObject)\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_anObject);
  },
  "{ :self :anObject |\n\t\t<primitive: return _self.has(_anObject);>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "isIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    _self.clear();
    return null;
  },
  "{ :self |\n\t\t<primitive:\n\t\t_self.clear();\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "removeIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_anObject)) {
      _self.delete(_anObject);
      return _anObject;
    } else {
      return _aBlock_0();
    }
  },
  "{ :self :anObject :aBlock:/0 |\n\t\t<primitive:\n\t\tif(_self.has(_anObject)) {\n\t\t\t_self.delete(_anObject);\n\t\t\treturn _anObject;\n\t\t} else {\n\t\t\treturn _aBlock_0();\n\t\t}\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set(_self);
  },
  "{ :self |\n\t\t<primitive: return new Set(_self);>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  },
  "{ :self |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentitySet_0;
  },
  "{ :self |\n\t\tIdentitySet:/0\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _storeString_1(_asList_1(_self)),
      ".asIdentitySet",
    );
  },
  "{ :self |\n\t\tself.asList.storeString ++ '.asIdentitySet'\n\t}",
);

sl.addType(
  false,
  "SetBy",
  "Set",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Set",
  ],
  ["contents", "predicate"],
);

sl.copyTraitToType(
  "Object",
  "SetBy",
);

sl.copyTraitToType(
  "Iterable",
  "SetBy",
);

sl.copyTraitToType(
  "Collection",
  "SetBy",
);

sl.copyTraitToType(
  "Extensible",
  "SetBy",
);

sl.copyTraitToType(
  "Removable",
  "SetBy",
);

sl.copyTraitToType(
  "Unordered",
  "SetBy",
);

sl.copyTraitToType(
  "Set",
  "SetBy",
);

sl.addMethod(
  "SetBy",
  "Set",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1);\n\t\tself\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _addIfNotPresentBy_3(
      _contents_1(_self),
      _anObject,
      _predicate_1(_self),
    );
  },
  "{ :self :anObject |\n\t\tself.contents.addIfNotPresentBy(anObject, self.predicate)\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "includes",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_contents_1(_self), _anObject, _predicate_1(_self));
  },
  "{ :self :anObject |\n\t\tself.contents.includesBy(anObject, self.predicate)\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAll_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.removeAll\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "removeIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexIfFoundIfNone_4(_contents_1(_self), function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value_3(_predicate_1(_self), _item, _anObject);
    }, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _removeAt_2(_contents_1(_self), _index);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :anObject :aBlock:/0 |\n\t\tself.contents.detectIndexIfFoundIfNone { :item |\n\t\t\tself.predicate.value(item, anObject)\n\t\t} { :index |\n\t\t\tself.contents.removeAt(index)\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_2(_shallowCopy_1(_contents_1(_self)), _predicate_1(_self));
  },
  "{ :self |\n\t\tself.contents.shallowCopy.asSet(self.predicate)\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
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
  "SetBy",
  "Set",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return (function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Set_1(_predicate_1(_self));
    });
  },
  "{ :self |\n\t\t{\n\t\t\tSet(self.predicate)\n\t\t}\n\t}",
);

sl.addMethod(
  "SetBy",
  "Set",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.asSet(%)", [
      _storeString_1(_contents_1(_self)),
      _name_1(_predicate_1(_self)),
    ]);
  },
  "{ :self |\n\t\t'%.asSet(%)'.format(\n\t\t\t[\n\t\t\t\tself.contents.storeString,\n\t\t\t\tself.predicate.name\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Set",
  "asIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentitySet_1(_values_1(_self));
  },
  "{ :self |\n\t\tself.values.asIdentitySet\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Set",
  "asSet",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_2(_values_1(_self), _aBlock_2);
  },
  "{ :self :aBlock:/2 |\n\t\tself.values.asSet(aBlock:/2)\n\t}",
);

sl.addMethod(
  "List",
  "Set",
  "basicAsIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set(_self);
  },
  "{ :self |\n\t\t<primitive: return new Set(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Set",
  "asIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_allSatisfy_2(_self, _isImmediate_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("List>>asIdentitySet: non-immediate entry");
    });
    return _basicAsIdentitySet_1(_self);
  },
  "{ :self |\n\t\tself.allSatisfy(isImmediate:/1).ifFalse {\n\t\t\t'List>>asIdentitySet: non-immediate entry'.error\n\t\t};\n\t\tself.basicAsIdentitySet\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Set",
  "asIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = IdentitySet();\n\t\tanswer.includeAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Set",
  "asSet",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_1(_aBlock_2);
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  },
  "{ :self :aBlock:/2 |\n\t\tlet answer = Set(aBlock:/2);\n\t\tanswer.includeAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Set",
  "isIdentitySet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "Void",
  "Set",
  "IdentitySet",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set();
  },
  "{\n\t\t<primitive: return new Set();>\n\t}",
);

sl.addMethod(
  "Block",
  "Set",
  "Set",
  ["aBlock:/2"],
  function (_aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aBlock_2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_aBlock_2, _equalsSignEqualsSign_2),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _IdentitySet_0();
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newSetBy_0(), [], _aBlock_2);
      },
    );
  },
  "{ :aBlock:/2 |\n\t\t(aBlock:/2 == ==).if {\n\t\t\tIdentitySet()\n\t\t} {\n\t\t\tnewSetBy().initializeSlots([], aBlock:/2)\n\t\t}\n\t}",
);
