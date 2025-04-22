/*  Require: Collection  */

sl.addTrait("Dictionary", "Dictionary");

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "equalsSign",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keyList = _indices_1(_self);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_keyList, _indices_1(_aDictionary)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _keyList,
          sl.annotateFunction(function (_key) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _key";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_self, _key), _at_2(_aDictionary, _key));
          }, ["key"]),
        );
      }, []),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | let keyList = indices(self); &(=(keyList, indices(aDictionary)), { allSatisfy(keyList, { :key | =(at(self, key), at(aDictionary, key)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "plusSignPlusSign",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aDictionary);
    return _answer;
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | let answer = copy(self); includeAll(answer,aDictionary); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "add",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesKey_2(_self, _key_1(_anAssociation)),
      sl.annotateFunction(function () {
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
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
        return _anAssociation;
      }, []),
    );
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation | if(includesKey(self,key(anAssociation)), { error(self,++('@Dictionary>>add: key exists: ', key(anAssociation))) }, { atPut(self, key(anAssociation), value(anAssociation)); anAssociation }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "addAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(
      _aCollection,
      sl.annotateFunction(function (_anAssociation) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _anAssociation";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_self, _anAssociation);
      }, ["anAssociation"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | associationsDo(aCollection, { :anAssociation | add(self,anAssociation) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _valuesDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; valuesDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "assertIsValidKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesKey_2(_self, _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _key;
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key | if(includesKey(self,key), { key }, { error(self,++('@Dictionary>>assertIsValidKey: no such key: ', key)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationAt",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationAtIfAbsent_3(
      _self,
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Dictionary>>associationAt: no such key");
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key | associationAtIfAbsent(self, key, { error(self,'@Dictionary>>associationAt: no such key') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationAtIfAbsent",
  ["self", "key", "aBlock:/0"],
  sl.annotateFunction(function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _key,
      sl.annotateFunction(function (_value) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(_key, _value);
      }, ["value"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
    );
  }, ["self", "key", "aBlock:/0"]),
  "{ :self :key :aBlock:/0 | atIfPresentIfAbsent(self, key, { :value | ->(key, value) }, { aBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _associationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; associationsDo(self, { :each | add(answer,each) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_hyphenMinusGreaterThanSign_2(_key, _value));
      }, ["key", "value"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | keysAndValuesDo(self, { :key :value | aBlock(->(key, value)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsRemove",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _removals = [];
    /* Statements */
    _associationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_removals, _key_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _do_2(
      _removals,
      sl.annotateFunction(function (_key) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeKey_2(_self, _key);
      }, ["key"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let removals = []; associationsDo(self, { :each | ifTrue(aBlock(each), { add(removals,key(each)) }) }); do(removals, { :key | removeKey(self,key) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsSelect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); associationsDo(self, { :each | ifTrue(aBlock(each), { add(answer,each) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "at",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("@Dictionary>>at: unknown key: ", _key),
        );
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key | atIfAbsent(self, key, { error(self,++('@Dictionary>>at: unknown key: ', key)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOfBy_3(_keys_1(_self), _key, _comparator_1(_self));
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_values_1(_self), _index);
      }, []),
    );
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 | let index = indexOfBy(keys(self),key, comparator(self)); if((=(index, 0)), { ifAbsent() }, { at(values(self), index) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "atAll",
  ["self", "keys"],
  sl.annotateFunction(function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsSelect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesBy_3(_keys, _key_1(_each), _comparator_1(_self));
      }, ["each"]),
    );
  }, ["self", "keys"]),
  "{ :self :keys | associationsSelect(self, { :each | includesBy(keys,key(each), comparator(self)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "atPut",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOfBy_3(_keys_1(_self), _key, _comparator_1(_self));
    /* Statements */
    _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_keys_1(_self), _key);
        return _add_2(_values_1(_self), _value);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_values_1(_self), _index, _value);
      }, []),
    );
    return _value;
  }, ["self", "key", "value"]),
  "{ :self :key :value | let index = indexOfBy(keys(self),key, comparator(self)); if((=(index, 0)), { add(keys(self),key); add(values(self),value) }, { atPut(values(self), index, value) }); value }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _hyphenMinusGreaterThanSign_2(_key, _aBlock_1(_value)),
        );
      }, ["key", "value"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); keysAndValuesDo(self, { :key :value | add(answer,->(key, aBlock(value))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "comparator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Dictionary>>comparator");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'@Dictionary>>comparator') }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "declareFrom",
  ["self", "key", "aDictionary"],
  sl.annotateFunction(function (_self, _key, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesKey_2(_self, _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesKey_2(_aDictionary, _key),
          sl.annotateFunction(function () {
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
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_self, _hyphenMinusGreaterThanSign_2(_key, null));
            return null;
          }, []),
        );
      }, []),
    );
  }, ["self", "key", "aDictionary"]),
  "{ :self :key :aDictionary | if(includesKey(self,key), { nil }, { if(includesKey(aDictionary,key), { let association = associationAt(aDictionary,key); add(self,association); removeKey(aDictionary,key); association }, { add(self,->(key, nil)); nil }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valuesDo_2(_self, _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | valuesDo(self,aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "errorValueNotFound",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Value not found");
  }, ["self"]),
  "{ :self | error(self,'Value not found') }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDictionary_1(_aCollection),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _associationsDo_2(
          _aCollection,
          sl.annotateFunction(function (_association) {
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
          }, ["association"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aCollection,
          sl.annotateFunction(function (_element) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _element";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_self, _aBlock_1(_element));
          }, ["element"]),
        );
      }, []),
    );
  }, ["self", "aCollection", "aBlock:/1"]),
  "{ :self :aCollection :aBlock:/1 | if(isDictionary(aCollection), { associationsDo(aCollection, { :association | atPut(self, key(association), aBlock(value(association))) }) }, { do(aCollection, { :element | add(self,aBlock(element)) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "hasEqualElements",
  ["self", "aDictionary"],
  sl.annotateFunction(function (_self, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), _size_1(_aDictionary)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allSatisfy_2(
          _keys_1(_self),
          sl.annotateFunction(function (_key) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _key";
              throw new Error(errorMessage);
            } /* Statements */
            return _atIfPresentIfAbsent_4(
              _aDictionary,
              _key,
              sl.annotateFunction(function (_value) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _value";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_self, _key), _value);
              }, ["value"]),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return false;
              }, []),
            );
          }, ["key"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary | if((=(size(self), size(aDictionary))), { allSatisfy(keys(self), { :key | atIfPresentIfAbsent(aDictionary, key, { :value | =(at(self, key), value) }, { false }) }) }, { false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "include",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    _atPut_3(_self, _key_1(_anAssociation), _value_1(_anAssociation));
    return _anAssociation;
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation | atPut(self, key(anAssociation), value(anAssociation)); anAssociation }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includeAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _associationsDo_2(
      _aCollection,
      sl.annotateFunction(function (_anAssociation) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _anAssociation";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_self, _anAssociation);
      }, ["anAssociation"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | associationsDo(aCollection, { :anAssociation | include(self,anAssociation) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesAllIndices",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _indices,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKey_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "indices"]),
  "{ :self :indices | allSatisfy(indices, { :each | includesKey(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesAssociation",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _key_1(_anAssociation),
      sl.annotateFunction(function (_value) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_value_1(_anAssociation), _value);
      }, ["value"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation | atIfPresentIfAbsent(self, key(anAssociation), { :value | =(value(anAssociation), value) }, { false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesIdentity",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSignEqualsSign_2(_anObject, _each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "anObject"]),
  "{ :self :anObject | valueWithReturn({ :return:/1 | do(self, { :each | ifTrue((==(anObject, each)), { return(true) }) }); false }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_keys_1(_self), _key, _comparator_1(_self));
  }, ["self", "key"]),
  "{ :self :key | includesBy(keys(self),key, comparator(self)) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keys_1(_self);
  }, ["self"]),
  "{ :self | keys(self) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "isDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValuesCollect",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _hyphenMinusGreaterThanSign_2(_key, _aBlock_2(_key, _value)),
        );
      }, ["key", "value"]),
    );
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let answer = new(species(self)); keysAndValuesDo(self, { :key :value | add(answer,->(key, aBlock(key, value))) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    /* Statements */
    _toDo_3(
      1,
      _size_1(_keys),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_at_2(_keys, _index), _at_2(_values, _index));
      }, ["index"]),
    );
    return null;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let keys = keys(self); let values = values(self); toDo(1, size(keys), { :index | aBlock(at(keys, index), at(values, index)) }); nil }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValuesRemove",
  ["self", "keyValueBlock:/2"],
  sl.annotateFunction(function (_self, _keyValueBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keyValueBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _keyValueBlock_2(_key_1(_each), _value_1(_each));
      }, ["each"]),
    );
  }, ["self", "keyValueBlock:/2"]),
  "{ :self :keyValueBlock:/2 | associationsRemove(self, { :each | keyValueBlock(key(each), value(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keyAtValueIfAbsent",
  ["self", "value", "exceptionBlock:/0"],
  sl.annotateFunction(function (_self, _value, _exceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _value, _exceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _associationsDo_2(
        _self,
        sl.annotateFunction(function (_association) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _association";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_value, _value_1(_association)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_key_1(_association));
            }, []),
          );
        }, ["association"]),
      );
      return _exceptionBlock_0();
    }, ["return:/1"]));
  }, ["self", "value", "exceptionBlock:/0"]),
  "{ :self :value :exceptionBlock:/0 | valueWithReturn({ :return:/1 | associationsDo(self, { :association | ifTrue((=(value, value(association))), { return(key(association)) }) }); exceptionBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keyAtValue",
  ["self", "value"],
  sl.annotateFunction(function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _keyAtValueIfAbsent_3(
      _self,
      _value,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorValueNotFound_1(_self);
      }, []),
    );
  }, ["self", "value"]),
  "{ :self :value | keyAtValueIfAbsent(self, value, { errorValueNotFound(self) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsDo_2(
      _self,
      sl.annotateFunction(function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_key_1(_association));
      }, ["association"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | associationsDo(self, { :association | aBlock(key(association)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "lookup",
  ["self", "key", "defaultAnswer"],
  sl.annotateFunction(function (_self, _key, _defaultAnswer) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultAnswer";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _key,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _lookup_3(_self, _each, _defaultAnswer);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _self,
          _key,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _value_1(_defaultAnswer);
          }, []),
        );
      }, []),
    );
  }, ["self", "key", "defaultAnswer"]),
  "{ :self :key :defaultAnswer | if(isList(key), { collect(key, { :each | lookup(self,each, defaultAnswer) }) }, { atIfAbsent(self, key, { value(defaultAnswer) }) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "remove",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAssociation_2(_self, _anAssociation);
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation | removeAssociation(self,anAssociation) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(
      _self,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, ["unusedItem"]),
    );
  }, ["self"]),
  "{ :self | associationsRemove(self, { :unusedItem | true }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAllKeys",
  ["self", "keys"],
  sl.annotateFunction(function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_keys, _key_1(_each));
      }, ["each"]),
    );
  }, ["self", "keys"]),
  "{ :self :keys | associationsRemove(self, { :each | includes(keys,key(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsRemove_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | associationsRemove(self, { :each | aBlock(value(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAssociationIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesAssociation_2(_self, _oldObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeKey_2(_self, _key_1(_oldObject));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anExceptionBlock_0();
      }, []),
    );
  }, ["self", "oldObject", "anExceptionBlock:/0"]),
  "{ :self :oldObject :anExceptionBlock:/0 | if(includesAssociation(self,oldObject), { removeKey(self,key(oldObject)) }, { anExceptionBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAssociation",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAssociationIfAbsent_3(
      _self,
      _oldObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "removeAssociation: not present");
      }, []),
    );
  }, ["self", "oldObject"]),
  "{ :self :oldObject | removeAssociationIfAbsent(self, oldObject, { error(self,'removeAssociation: not present') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAt",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeKey_2(_self, _key);
  }, ["self", "key"]),
  "{ :self :key | removeKey(self,key) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeAtAll",
  ["self", "keys"],
  sl.annotateFunction(function (_self, _keys) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _keys";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllKeys_2(_self, _keys);
  }, ["self", "keys"]),
  "{ :self :keys | removeAllKeys(self,keys) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeKeyIfAbsent_3(
      _self,
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Dictionary>>removeKey");
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key | removeKeyIfAbsent(self, key, { error(self,'@Dictionary>>removeKey') }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeKeyIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOfBy_3(_keys_1(_self), _key, _comparator_1(_self));
    /* Statements */
    return _if_3(
      _equalsSign_2(_index, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _removeAt_2(_keys_1(_self), _index);
        return _removeAt_2(_values_1(_self), _index);
      }, []),
    );
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 | let index = indexOfBy(keys(self),key, comparator(self)); if((=(index, 0)), { ifAbsent() }, { removeAt(keys(self),index); removeAt(values(self),index) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "@Dictionary>>removeIfAbsent");
  }, ["self", "oldObject", "anExceptionBlock:/0"]),
  "{ :self :oldObject :anExceptionBlock:/0 | shouldNotImplement(self,'@Dictionary>>removeIfAbsent') }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "replace",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _indices_1(_self),
      sl.annotateFunction(function (_key) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _key, _aBlock_1(_at_2(_self, _key)));
      }, ["key"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(indices(self), { :key | atPut(self, key, aBlock(at(self, key))) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _associationsDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_value_1(_each)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _copy_1(_each));
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); associationsDo(self, { :each | ifTrue(aBlock(value(each)), { add(answer,copy(each)) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_keys_1(_self));
  }, ["self"]),
  "{ :self | size(keys(self)) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.as%", [
      _storeString_1(_associations_1(_self)),
      _typeOf_1(_self),
    ]);
  }, ["self"]),
  "{ :self | format('%.as%',[storeString(associations(self)), typeOf(self)]) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "valuesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _associationsDo_2(
      _self,
      sl.annotateFunction(function (_association) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _association";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value_1(_association));
      }, ["association"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | associationsDo(self, { :association | aBlock(value(association)) }) }",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "withIndexCollect",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesCollect_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_value, _key);
      }, ["key", "value"]),
    );
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | keysAndValuesCollect(self, { :key :value | aBlock(value, key) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "lookup",
  ["self", "key", "defaultValue"],
  sl.annotateFunction(function (_self, _key, _defaultValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _defaultValue";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lookup_3(_each, _key, _defaultValue);
      }, ["each"]),
    );
  }, ["self", "key", "defaultValue"]),
  "{ :self :key :defaultValue | collect(self, { :each | lookup(each,key, defaultValue) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Dictionary",
  "dictionaryJoin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Collection>>dictionaryJoin");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _copy_1(_first_1(_self));
        /* Statements */
        _allButFirstDo_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includeAll_2(_answer, _each);
          }, ["each"]),
        );
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self | ifEmpty(self, { error(self,'@Collection>>dictionaryJoin') }, { let answer = copy(first(self)); allButFirstDo(self, { :each | includeAll(answer,each) }); answer }) }",
);
