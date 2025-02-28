/*  Require: Collection  */

sl.addTrait("Dictionary", "Dictionary");

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "equalsSign",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keyList = _indices_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_keyList, _indices_1(_aDictionary)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(_keyList, function (_key) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _key";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, _key), _at_2(_aDictionary, _key));
        });
      },
    );
  },
  "{ :self :aDictionary | let keyList = indices(self); &(=(keyList, indices(aDictionary)), { allSatisfy(keyList, { :key | =(at(self, key), at(aDictionary, key)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "plusSignPlusSign",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aDictionary);
    return _answer;
  },
  "{ :self :aDictionary | let answer = copy(self); includeAll(answer,aDictionary); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "add",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesKey_2(_self, _key_1(_anAssociation)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "@Dictionary>>add: key exists: ",
          _key_1(_anAssociation),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
      return _anAssociation;
    });
  },
  "{ :self :anAssociation | if(includesKey(self,key(anAssociation)), { error(self,++('@Dictionary>>add: key exists: ', key(anAssociation))) }, { atPut(self, key(anAssociation), value(anAssociation)); anAssociation }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(_aCollection, function (_anAssociation) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anAssociation";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _anAssociation);
    });
    return _aCollection;
  },
  "{ :self :aCollection | associationsDo(aCollection, { :anAssociation | add(self,anAssociation) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _valuesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; valuesDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "assertIsValidKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesKey_2(_self, _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _key;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "@Dictionary>>assertIsValidKey: no such key: ",
          _key,
        ),
      );
    });
  },
  "{ :self :key | if(includesKey(self,key), { key }, { error(self,++('@Dictionary>>assertIsValidKey: no such key: ', key)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationAtIfAbsent_3(_self, _key, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Dictionary>>associationAt: no such key");
    });
  },
  "{ :self :key | associationAtIfAbsent(self, key, { error(self,'@Dictionary>>associationAt: no such key') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationAtIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, function (_value) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinusGreaterThanSign_2(_key, _value);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :key :aBlock:/0 | atIfPresentIfAbsent(self, key, { :value | ->(key, value) }, { aBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self | let answer = []; associationsDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(_self, function (_key, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _key, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_hyphenMinusGreaterThanSign_2(_key, _value));
    });
  },
  "{ :self :aBlock:/1 | keysAndValuesDo(self, { :key :value | aBlock(->(key, value)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsRemove",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removals = [];
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_removals, _key_1(_each));
      });
    });
    return _do_2(_removals, function (_key) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _key";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeKey_2(_self, _key);
    });
  },
  "{ :self :aBlock:/1 | let removals = []; associationsDo(self, { :each | ifTrue(aBlock(each), { add(removals,key(each)) }) }); do(removals, { :key | removeKey(self,key) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsSelect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); associationsDo(self, { :each | ifTrue(aBlock(each), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "atAll",
  ["self", "keys"],
  function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsSelect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_keys, _key_1(_each));
    });
  },
  "{ :self :keys | associationsSelect(self, { :each | includes(keys,key(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _keysAndValuesDo_2(_self, function (_key, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _key, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(
        _answer,
        _hyphenMinusGreaterThanSign_2(_key, _aBlock_1(_value)),
      );
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); keysAndValuesDo(self, { :key :value | add(answer,->(key, aBlock(value))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "declareFrom",
  ["self", "key", "aDictionary"],
  function (_self, _key, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesKey_2(_self, _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_includesKey_2(_aDictionary, _key), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _association = _associationAt_2(_aDictionary, _key);
        /* Statements */
        _add_2(_self, _association);
        _removeKey_2(_aDictionary, _key);
        return _association;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_self, _hyphenMinusGreaterThanSign_2(_key, null));
        return null;
      });
    });
  },
  "{ :self :key :aDictionary | if(includesKey(self,key), { nil }, { if(includesKey(aDictionary,key), { let association = associationAt(aDictionary,key); add(self,association); removeKey(aDictionary,key); association }, { add(self,->(key, nil)); nil }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valuesDo_2(_self, _aBlock_1);
  },
  "{ :self :aBlock:/1 | valuesDo(self,aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "errorValueNotFound",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Value not found");
  },
  "{ :self | error(self,'Value not found') }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isDictionary_1(_aCollection), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _associationsDo_2(_aCollection, function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          throw new Error(errorMessage);
        } /* Statements */
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
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_aCollection, function (_element) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _element";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_self, _aBlock_1(_element));
      });
    });
  },
  "{ :self :aCollection :aBlock:/1 | if(isDictionary(aCollection), { associationsDo(aCollection, { :association | atPut(self, key(association), aBlock(value(association))) }) }, { do(aCollection, { :element | add(self,aBlock(element)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "hasEqualElements",
  ["self", "aDictionary"],
  function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), _size_1(_aDictionary)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(_keys_1(_self), function (_key) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _key";
            throw new Error(errorMessage);
          } /* Statements */
          return _atIfPresentIfAbsent_4(_aDictionary, _key, function (_value) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _value";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_self, _key), _value);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          });
        });
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      },
    );
  },
  "{ :self :aDictionary | if((=(size(self), size(aDictionary))), { allSatisfy(keys(self), { :key | atIfPresentIfAbsent(aDictionary, key, { :value | =(at(self, key), value) }, { false }) }) }, { false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "include",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
    return _anAssociation;
  },
  "{ :self :anAssociation | atPut(self, key(anAssociation), value(anAssociation)); anAssociation }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(_aCollection, function (_anAssociation) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _anAssociation";
        throw new Error(errorMessage);
      } /* Statements */
      return _include_2(_self, _anAssociation);
    });
    return _aCollection;
  },
  "{ :self :aCollection | associationsDo(aCollection, { :anAssociation | include(self,anAssociation) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesAllIndices",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includesKey_2(_self, _each);
    });
  },
  "{ :self :indices | allSatisfy(indices, { :each | includesKey(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesAssociation",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _key_1(_anAssociation),
      function (_value) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_value_1(_anAssociation), _value);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      },
    );
  },
  "{ :self :anAssociation | atIfPresentIfAbsent(self, key(anAssociation), { :value | =(value(anAssociation), value) }, { false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesIdentity",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSignEqualsSign_2(_anObject, _each),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(true);
          },
        );
      });
      return false;
    });
  },
  "{ :self :anObject | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue((==(anObject, each)), { return(true) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keys_1(_self), _key);
  },
  "{ :self :key | includes(keys(self),key) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "isDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValuesCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _keysAndValuesDo_2(_self, function (_key, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _key, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(
        _answer,
        _hyphenMinusGreaterThanSign_2(_key, _aBlock_2(_key, _value)),
      );
    });
    return _answer;
  },
  "{ :self :aBlock:/2 | let answer = new(species(self)); keysAndValuesDo(self, { :key :value | add(answer,->(key, aBlock(key, value))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValuesRemove",
  ["self", "keyValueBlock:/2"],
  function (_self, _keyValueBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyValueBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _keyValueBlock_2(_key_1(_each), _value_1(_each));
    });
  },
  "{ :self :keyValueBlock:/2 | associationsRemove(self, { :each | keyValueBlock(key(each), value(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keyAtValueIfAbsent",
  ["self", "value", "exceptionBlock:/0"],
  function (_self, _value, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _value, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(_self, function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_value, _value_1(_association)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_key_1(_association));
          },
        );
      });
      return _exceptionBlock_0();
    });
  },
  "{ :self :value :exceptionBlock:/0 | valueWithReturn({ :return:/1 | associationsDo(self, { :association | ifTrue((=(value, value(association))), { return(key(association)) }) }); exceptionBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keyAtValue",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _keyAtValueIfAbsent_3(_self, _value, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _errorValueNotFound_1(_self);
    });
  },
  "{ :self :value | keyAtValueIfAbsent(self, value, { errorValueNotFound(self) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsDo_2(_self, function (_association) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _association";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_key_1(_association));
    });
  },
  "{ :self :aBlock:/1 | associationsDo(self, { :association | aBlock(key(association)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "lookup",
  ["self", "key", "defaultAnswer"],
  function (_self, _key, _defaultAnswer) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultAnswer";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isList_1(_key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_key, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lookup_3(_self, _each, _defaultAnswer);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _atIfAbsent_3(_self, _key, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_1(_defaultAnswer);
      });
    });
  },
  "{ :self :key :defaultAnswer | if(isList(key), { collect(key, { :each | lookup(self,each, defaultAnswer) }) }, { atIfAbsent(self, key, { value(defaultAnswer) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "remove",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAssociation_2(_self, _anAssociation);
  },
  "{ :self :anAssociation | removeAssociation(self,anAssociation) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(_self, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        throw new Error(errorMessage);
      } /* Statements */
      return true;
    });
  },
  "{ :self | associationsRemove(self, { :unusedItem | true }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAllKeys",
  ["self", "keys"],
  function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_keys, _key_1(_each));
    });
  },
  "{ :self :keys | associationsRemove(self, { :each | includes(keys,key(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_value_1(_each));
    });
  },
  "{ :self :aBlock:/1 | associationsRemove(self, { :each | aBlock(value(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAssociationIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesAssociation_2(_self, _oldObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeKey_2(_self, _key_1(_oldObject));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anExceptionBlock_0();
    });
  },
  "{ :self :oldObject :anExceptionBlock:/0 | if(includesAssociation(self,oldObject), { removeKey(self,key(oldObject)) }, { anExceptionBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAssociation",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAssociationIfAbsent_3(_self, _oldObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "removeAssociation: not present");
    });
  },
  "{ :self :oldObject | removeAssociationIfAbsent(self, oldObject, { error(self,'removeAssociation: not present') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAt",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeKey_2(_self, _key);
  },
  "{ :self :key | removeKey(self,key) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAtAll",
  ["self", "keys"],
  function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllKeys_2(_self, _keys);
  },
  "{ :self :keys | removeAllKeys(self,keys) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeKeyIfAbsent_3(_self, _key, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Dictionary>>removeKey");
    });
  },
  "{ :self :key | removeKeyIfAbsent(self, key, { error(self,'@Dictionary>>removeKey') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "@Dictionary>>removeIfAbsent");
  },
  "{ :self :oldObject :anExceptionBlock:/0 | shouldNotImplement(self,'@Dictionary>>removeIfAbsent') }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "replace",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_indices_1(_self), function (_key) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _key";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_self, _key, _aBlock_1(_at_2(_self, _key)));
    });
  },
  "{ :self :aBlock:/1 | do(indices(self), { :key | atPut(self, key, aBlock(at(self, key))) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_value_1(_each)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _copy_1(_each));
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 | let answer = new(species(self)); associationsDo(self, { :each | ifTrue(aBlock(value(each)), { add(answer,copy(each)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_associations_1(_self)), ".as"),
      _typeOf_1(_self),
    );
  },
  "{ :self | ++(++(storeString(associations(self)), '.as'), typeOf(self)) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "valuesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsDo_2(_self, function (_association) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _association";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_value_1(_association));
    });
  },
  "{ :self :aBlock:/1 | associationsDo(self, { :association | aBlock(value(association)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "withIndexCollect",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesCollect_2(_self, function (_key, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _key, _value";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_value, _key);
    });
  },
  "{ :self :aBlock:/2 | keysAndValuesCollect(self, { :key :value | aBlock(value, key) }) }",
);

sl.addType(
  false,
  "Dictionary",
  "Dictionary",
  [
    "Object",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
  ],
  ["keys", "values"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Dictionary",
  "Dictionary",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "atIfPresentIfAbsent",
  ["self", "key", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _key, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _ifPresent_1, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_keys_1(_self), _key);
    /* Statements */
    return _if_3(_equalsSign_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifAbsent_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifPresent_1(_at_2(_values_1(_self), _index));
    });
  },
  "{ :self :key :ifPresent:/1 :ifAbsent:/0 | let index = indexOf(keys(self),key); if((=(index, 0)), { ifAbsent() }, { ifPresent(at(values(self), index)) }) }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, _identity_1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("at: unknown key: ", _key));
    });
  },
  "{ :self :key | atIfPresentIfAbsent(self, key, identity:/1, { error(self,++('at: unknown key: ', key)) }) }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_keys_1(_self), _key);
    /* Statements */
    _if_3(_equalsSign_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_keys_1(_self), _key);
      return _add_2(_values_1(_self), _value);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_values_1(_self), _index, _value);
    });
    return _value;
  },
  "{ :self :key :value | let index = indexOf(keys(self),key); if((=(index, 0)), { add(keys(self),key); add(values(self),value) }, { atPut(values(self), index, value) }); value }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_keys_1(_self), _key);
  },
  "{ :self :key | includes(keys(self),key) }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_self);
  },
  "{ :self | keys(self) }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    /* Statements */
    _toDo_3(1, _size_1(_keys), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_at_2(_keys, _index), _at_2(_values, _index));
    });
    return null;
  },
  "{ :self :aBlock:/2 | let keys = keys(self); let values = values(self); toDo(1, size(keys), { :index | aBlock(at(keys, index), at(values, index)) }); nil }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "removeKeyIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_keys_1(_self), _key);
    /* Statements */
    return _if_3(_equalsSign_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifAbsent_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _removeAt_2(_keys_1(_self), _index);
      return _removeAt_2(_values_1(_self), _index);
    });
  },
  "{ :self :key :ifAbsent:/0 | let index = indexOf(keys(self),key); if((=(index, 0)), { ifAbsent() }, { removeAt(keys(self),index); removeAt(values(self),index) }) }",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_keys_1(_self));
  },
  "{ :self | size(keys(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Dictionary",
  "Dictionary",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newDictionary_0(), [], []);
  },
  "{ initializeSlots(newDictionary(),[], []) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "asDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_allSatisfy_2(_self, _isAssociation_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_3(
        _newDictionary_0(),
        _collect_2(_self, _key_1),
        _collect_2(_self, _value_1),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>asDictionary: not list of associations");
    });
  },
  "{ :self | if(allSatisfy(self,isAssociation:/1), { initializeSlots(newDictionary(),collect(self,key:/1), collect(self,value:/1)) }, { error(self,'List>>asDictionary: not list of associations') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "lookup",
  ["self", "key", "defaultValue"],
  function (_self, _key, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _lookup_3(_each, _key, _defaultValue);
    });
  },
  "{ :self :key :defaultValue | collect(self, { :each | lookup(each,key, defaultValue) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Dictionary",
  "dictionaryJoin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Collection>>dictionaryJoin");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _copy_1(_first_1(_self));
      /* Statements */
      _allButFirstDo_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(_answer, _each);
      });
      return _answer;
    });
  },
  "{ :self | ifEmpty(self, { error(self,'@Collection>>dictionaryJoin') }, { let answer = copy(first(self)); allButFirstDo(self, { :each | includeAll(answer,each) }); answer }) }",
);
