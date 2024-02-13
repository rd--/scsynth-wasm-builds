sl.addType(
  true,
  "Set",
  "Set",
  ["Object", "Iterable", "Collection", "Extensible", "Removable", "Unordered"],
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

sl.addMethod(
  "Set",
  "Set",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isSet_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_size_1(_self), _size_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _allSatisfy_2(_self, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _includes_2(_anObject, _each);
          });
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isSet & {\n\t\t\tself.size = anObject.size & {\n\t\t\t\tself.allSatisfy { :each |\n\t\t\t\t\tanObject.includes(each)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "set includes item");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _include_2(_self, _anObject);
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\tself.error('set includes item')\n\t\t} {\n\t\t\tself.include(anObject)\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.delete(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.delete(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _basicInclude_2(_answer, _aBlock_1(_each));
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = Set();\n\t\tself.do { :each |\n\t\t\tanswer.basicInclude(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_isImmediate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Set>>include: non-immediate entry");
    });
    return _basicInclude_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tanObject.isImmediate.ifFalse {\n\t\t\t'Set>>include: non-immediate entry'.error\n\t\t};\n\t\tself.basicInclude(anObject)\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.has(_anObject);
  },
  "{ :self :anObject |\n\t\t<primitive: return _self.has(_anObject);>\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "isSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "occurrencesOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 0;
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return ["size"];
  },
  "{ :self |\n\t\t['size']\n\t}",
);

sl.addMethod(
  "Set",
  "Set",
  "remove",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _removeIfAbsent_3(_self, _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "remove: item does not exist");
    });
  },
  "{ :self :anObject |\n\t\tself.removeIfAbsent(anObject) {\n\t\t\tself.error('remove: item does not exist')\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Set_0;
  },
  "{ :self |\n\t\tSet:/0\n\t}",
);

sl.addMethod(
  "List",
  "Set",
  "basicAsSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Set(_self);
  },
  "{ :self |\n\t\t<primitive: return new Set(_self);>\n\t}",
);

sl.addMethod(
  "List",
  "Set",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_allSatisfy_2(_self, _isImmediate_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("List>>asSet: non-immediate entry");
    });
    return _basicAsSet_1(_self);
  },
  "{ :self |\n\t\tself.allSatisfy(isImmediate:/1).ifFalse {\n\t\t\t'List>>asSet: non-immediate entry'.error\n\t\t};\n\t\tself.basicAsSet\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Set",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Set();\n\t\tanswer.includeAll(self);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Set",
  "asSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asSet_1(_values_1(_self));
  },
  "{ :self |\n\t\tself.values.asSet\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Set",
  "isSet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "Void",
  "Set",
  "Set",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Set();
  },
  "{\n\t\t<primitive: return new Set();>\n\t}",
);
