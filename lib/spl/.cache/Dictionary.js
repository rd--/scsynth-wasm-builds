/* {- Require: Object -} */

sl.addTrait("Dictionary", "Dictionary");

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "equalsSign",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _keyList = _indices_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_keyList, _indices_1(_aDictionary)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allSatisfy_2(_keyList, function (_key) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _key";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_at_2(_self, _key), _at_2(_aDictionary, _key));
        });
      },
    );
  },
  "{ :self :aDictionary |\n\t\tlet keyList = self.indices;\n\t\tkeyList = aDictionary.indices & {\n\t\t\tkeyList.allSatisfy { :key |\n\t\t\t\tself[key] = aDictionary[key]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "plusSignPlusSign",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aDictionary);
    return _answer;
  },
  "{ :self :aDictionary |\n\t\tlet answer = self.copy;\n\t\tanswer.includeAll(aDictionary);\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "add",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _key_1(_anAssociation)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "@Dictionary>>add: index exists: ",
          _key_1(_anAssociation),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
      return _anAssociation;
    });
  },
  "{ :self :anAssociation |\n\t\tself.includesIndex(anAssociation.key).if {\n\t\t\tself.error('@Dictionary>>add: index exists: ' ++ anAssociation.key)\n\t\t} {\n\t\t\tself[anAssociation.key] := anAssociation.value;\n\t\t\tanAssociation\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _associationsDo_2(_aCollection, function (_anAssociation) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anAssociation";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, _anAssociation);
    });
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\taCollection.associationsDo { :anAssociation |\n\t\t\tself.add(anAssociation)\n\t\t};\n\t\taCollection\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _valuesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _each);
      return _index = _plusSign_2(_index, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 1;\n\t\tself.valuesDo { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "assertIsValidKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _key;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "@Dictionary>>assertIsValidKey: no such key: ",
          _key,
        ),
      );
    });
  },
  "{ :self :key |\n\t\tself.includesIndex(key).if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('@Dictionary>>assertIsValidKey: no such key: ' ++ key)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associationAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _associationAtIfAbsent_3(_self, _key, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>associationAt: no such key");
    });
  },
  "{ :self :key |\n\t\tself.associationAtIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>associationAt: no such key')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associationAtIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, function (_value) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _value";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinusGreaterThanSign_2(_key, _value);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :key :aBlock:/0 |\n\t\tself.atIfPresentIfAbsent(key) { :value |\n\t\t\tkey -> value\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _each);
      return _index = _plusSign_2(_index, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 1;\n\t\tself.associationsDo { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
      return _aBlock_1(_hyphenMinusGreaterThanSign_2(_key, _value));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.withIndexDo { :value :key |\n\t\t\taBlock(key -> value)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associationsRemove",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAllSuchThat_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.removeAllSuchThat(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "associationsSelect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.associationsDo { :each |\n\t\t\teach.aBlock.ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "basicAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self[_key];
  },
  "{ :self :key |\n\t\t<primitive: return _self[_key];>\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "basicAtPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self[_key] = _value;
    return _value;
  },
  "{ :self :key :value |\n\t\t<primitive:\n\t\t_self[_key] = _value;\n\t\treturn _value;\n\t\t>\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(
        _answer,
        _hyphenMinusGreaterThanSign_2(_key, _aBlock_1(_value)),
      );
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.withIndexDo { :value :key |\n\t\t\tanswer.add(key -> aBlock(value))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "declareFrom",
  ["self", "key", "aDictionary"],
  function (_self, _key, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includesIndex_2(_aDictionary, _key), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _association = _associationAt_2(_aDictionary, _key);
        /* Statements */
        _add_2(_self, _association);
        _removeKey_2(_aDictionary, _key);
        return _association;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _add_2(_self, _hyphenMinusGreaterThanSign_2(_key, null));
        return null;
      });
    });
  },
  "{ :self :key :aDictionary |\n\t\tself.includesIndex(key).if {\n\t\t\tnil\n\t\t} {\n\t\t\taDictionary.includesIndex(key).if {\n\t\t\t\tlet association = aDictionary.associationAt(key);\n\t\t\t\tself.add(association);\n\t\t\t\taDictionary.removeKey(key);\n\t\t\t\tassociation\n\t\t\t} {\n\t\t\t\tself.add(key -> nil);\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valuesDo_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.valuesDo(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "errorValueNotFound",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "Value not found");
  },
  "{ :self |\n\t\tself.error('Value not found')\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDictionary_1(_aCollection), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _associationsDo_2(_aCollection, function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _self,
          _key_1(_association),
          _aBlock_1(_value_1(_association)),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_aCollection, function (_element) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _element";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_self, _aBlock_1(_element));
      });
    });
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\taCollection.isDictionary.if {\n\t\t\taCollection.associationsDo { :association |\n\t\t\t\tself[association.key] := aBlock(association.value)\n\t\t\t}\n\t\t} {\n\t\t\taCollection.do { :element |\n\t\t\t\tself.add(aBlock(element))\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "hasEqualElements",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), _size_1(_aDictionary)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allSatisfy_2(_keys_1(_self), function (_key) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _key";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _atIfPresentIfAbsent_4(_aDictionary, _key, function (_value) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _value";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(_at_2(_self, _key), _value);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return false;
          });
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      },
    );
  },
  "{ :self :aDictionary |\n\t\t(self.size = aDictionary.size).if {\n\t\t\tself.keys.allSatisfy { :key |\n\t\t\t\taDictionary.atIfPresentIfAbsent(key) { :value |\n\t\t\t\t\tself[key] = value\n\t\t\t\t} {\n\t\t\t\t\tfalse\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "include",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
    return _anAssociation;
  },
  "{ :self :anAssociation |\n\t\tself[anAssociation.key] := anAssociation.value;\n\t\tanAssociation\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "includeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _associationsDo_2(_aCollection, function (_anAssociation) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anAssociation";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _include_2(_self, _anAssociation);
    });
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\taCollection.associationsDo { :anAssociation |\n\t\t\tself.include(anAssociation)\n\t\t};\n\t\taCollection\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "includesAllIndices",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _allSatisfy_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includesKey_2(_self, _each);
    });
  },
  "{ :self :indices |\n\t\tindices.allSatisfy { :each |\n\t\t\tself.includesKey(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "includesAssociation",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _key_1(_anAssociation),
      function (_value) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _value";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_value_1(_anAssociation), _value);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      },
    );
  },
  "{ :self :anAssociation |\n\t\tself.atIfPresentIfAbsent(anAssociation.key) { :value |\n\t\t\tanAssociation.value = value\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "includesIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSignEqualsSign_2(_anObject, _each),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(true);
          },
        );
      });
      return false;
    });
  },
  "{ :self :anObject |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\t(anObject == each).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "includesIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_indices_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.indices.includes(index)\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "indexOfIfAbsent",
  ["self", "value", "exceptionBlock:/0"],
  function (_self, _value, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _value, _exceptionBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _associationsDo_2(_self, function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_value, _value_1(_association)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_key_1(_association));
          },
        );
      });
      return _exceptionBlock_0();
    });
  },
  "{ :self :value :exceptionBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.associationsDo { :association |\n\t\t\t\t(value = association.value).ifTrue {\n\t\t\t\t\tassociation.key.return\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "indexOf",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indexOfIfAbsent_3(_self, _value, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorValueNotFound_1(_self);
    });
  },
  "{ :self :value |\n\t\tself.indexOfIfAbsent(value) {\n\t\t\tself.errorValueNotFound\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "indicesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _associationsDo_2(_self, function (_association) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _association";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_key_1(_association));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.associationsDo { :association |\n\t\t\taBlock(association.key)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "isDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "keysAndValuesRemove",
  ["self", "keyValueBlock:/2"],
  function (_self, _keyValueBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyValueBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _associationsRemove_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _keyValueBlock_2(_key_1(_each), _value_1(_each));
    });
  },
  "{ :self :keyValueBlock:/2 |\n\t\tself.associationsRemove { :each |\n\t\t\tkeyValueBlock(each.key, each.value)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
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

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "keyAtValueIfAbsent",
  ["self", "value", "exceptionBlock:/0"],
  function (_self, _value, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _value, _exceptionBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indexOfIfAbsent_3(_self, _value, _exceptionBlock_0);
  },
  "{ :self :value :exceptionBlock:/0 |\n\t\tself.indexOfIfAbsent(value, exceptionBlock:/0)\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "remove",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAssociation_2(_self, _anAssociation);
  },
  "{ :self :anAssociation |\n\t\tself.removeAssociation(anAssociation)\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAllSuchThat_2(_self, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return true;
    });
  },
  "{ :self |\n\t\tself.removeAllSuchThat { :unusedItem |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _removals = [];
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_removals, _key_1(_each));
      });
    });
    return _do_2(_removals, function (_key) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _key";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeKey_2(_self, _key);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet removals = [];\n\t\tself.associationsDo { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tremovals.add(each.key)\n\t\t\t}\n\t\t};\n\t\tremovals.do { :key |\n\t\t\tself.removeKey(key)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeAssociationIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesAssociation_2(_self, _oldObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeKey_2(_self, _key_1(_oldObject));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anExceptionBlock_0();
    });
  },
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tself.includesAssociation(oldObject).if {\n\t\t\tself.removeKey(oldObject.key)\n\t\t} {\n\t\t\tanExceptionBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeAssociation",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAssociationIfAbsent_3(_self, _oldObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "removeAssociation: not present");
    });
  },
  "{ :self :oldObject |\n\t\tself.removeAssociationIfAbsent(oldObject) {\n\t\t\tself.error('removeAssociation: not present')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _removed = _at_2(_self, _key);
      /* Statements */
      _removeKey_2(_self, _key);
      return _removed;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>removeAt");
    });
  },
  "{ :self :key |\n\t\tself.includesIndex(key).if {\n\t\t\tlet removed = self[key];\n\t\t\tself.removeKey(key);\n\t\t\tremoved\n\t\t} {\n\t\t\tself.error('@Dictionary>>removeAt')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeKeyIfAbsent_3(_self, _key, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>removeKey");
    });
  },
  "{ :self :key |\n\t\tself.removeKeyIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>removeKey')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _shouldNotImplement_2(_self, "@Dictionary>>removeIfAbsent");
  },
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tself.shouldNotImplement('@Dictionary>>removeIfAbsent')\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "replace",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_indices_1(_self), function (_key) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _key";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _key, _aBlock_1(_at_2(_self, _key)));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.indices.do { :key |\n\t\t\tself[key] := aBlock(self[key])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_value_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _copy_1(_each));
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.associationsDo { :each |\n\t\t\teach.value.aBlock.ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
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
      _plusSignPlusSign_2(_storeString_1(_associations_1(_self)), "."),
      _typeOf_1(_self),
    );
  },
  "{ :self |\n\t\tself.associations.storeString ++ '.' ++ self.typeOf\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "valuesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _associationsDo_2(_self, function (_association) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _association";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_value_1(_association));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.associationsDo { :association |\n\t\t\taBlock(association.value)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "withIndexCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _withIndexDo_2(_self, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(
        _answer,
        _hyphenMinusGreaterThanSign_2(_key, _aBlock_2(_value, _key)),
      );
    });
    return _answer;
  },
  "{ :self :aBlock:/2 |\n\t\tlet answer = self.species.new;\n\t\tself.withIndexDo { :value :key |\n\t\t\tanswer.add(key -> aBlock(value, key))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Dictionary",
  "Dictionary",
  "withIndexDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _associationsDo_2(_self, function (_association) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _association";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_value_1(_association), _key_1(_association));
    });
  },
  "{ :self :aBlock:/2 |\n\t\tself.associationsDo { :association |\n\t\t\taBlock(association.value, association.key)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Dictionary",
  "isDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Dictionary",
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
  "Dictionary",
  "Dictionary",
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
  "Dictionary",
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
  "Dictionary",
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
