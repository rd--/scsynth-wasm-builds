/*  Require: Collection  */

sl.addTrait("Dictionary", "Dictionary");

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
  "{ :self :key |\n\t\tself.atIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>at: unknown key: ' ++ key)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "commercialAt",
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
  "{ :self :key |\n\t\tself.atIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>at: unknown key: ' ++ key)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "concatenation",
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
  "{ :self :aDictionary |\n\t\tlet answer = self.copy;\n\t\tanswer.includeAll(aDictionary);\n\t\tanswer\n\t}",
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
  "{ :self :aDictionary |\n\t\tlet answer = self.copy;\n\t\tanswer.includeAll(aDictionary);\n\t\tanswer\n\t}",
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
  "{ :self :anAssociation |\n\t\tself.includesKey(anAssociation.key).if {\n\t\t\tself.error('@Dictionary>>add: key exists: ' ++ anAssociation.key)\n\t\t} {\n\t\t\tself[anAssociation.key] := anAssociation.value;\n\t\t\tanAssociation\n\t\t}\n\t}",
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
  "{ :self :aCollection |\n\t\taCollection.associationsDo { :anAssociation |\n\t\t\tself.add(anAssociation)\n\t\t};\n\t\taCollection\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.valuesDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :key |\n\t\tself.includesKey(key).if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('@Dictionary>>assertIsValidKey: no such key: ' ++ key)\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.associationAtIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>associationAt: no such key')\n\t\t}\n\t}",
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
  "{ :self :key :aBlock:/0 |\n\t\tself.atIfPresentIfAbsent(key) { :value |\n\t\t\tkey -> value\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.associationsDo { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "associationsAllSatisfy",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return:/1"]));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.associationsDo { :each |\n\t\t\t\taBlock(each).ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\taBlock(key -> value)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet removals = [];\n\t\tself.associationsDo { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tremovals.add(each.key)\n\t\t\t}\n\t\t};\n\t\tremovals.do { :key |\n\t\t\tself.removeKey(key)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.associationsDo { :each |\n\t\t\teach.aBlock.ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
    } /* Statements */
    return _typeResponsibility_2(_self, "@Dictionary>>atIfAbsent");
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 |\n\t\tself.typeResponsibility('@Dictionary>>atIfAbsent')\n\t}",
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
  "{ :self :keys |\n\t\tself.associationsSelect { :each |\n\t\t\tkeys.includesBy(each.key, self.comparator)\n\t\t}\n\t}",
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
    } /* Statements */
    return _typeResponsibility_2(_self, "@Dictionary>>atPut");
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tself.typeResponsibility('@Dictionary>>atPut')\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\tanswer.add(key -> aBlock(value))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :key :aDictionary |\n\t\tself.includesKey(key).if {\n\t\t\tnil\n\t\t} {\n\t\t\taDictionary.includesKey(key).if {\n\t\t\t\tlet association = aDictionary.associationAt(key);\n\t\t\t\tself.add(association);\n\t\t\t\taDictionary.removeKey(key);\n\t\t\t\tassociation\n\t\t\t} {\n\t\t\t\tself.add(key -> nil);\n\t\t\t\tnil\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.valuesDo(aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "equalBy",
  ["self", "aDictionary", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aDictionary, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aDictionary, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_typeOf_1(_self), _typeOf_1(_aDictionary)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hasEqualElements_3(_self, _aDictionary, _aBlock_2);
      }, []),
    );
  }, ["self", "aDictionary", "aBlock:/2"]),
  "{ :self :aDictionary :aBlock:/2 |\n\t\tself.typeOf = aDictionary.typeOf & {\n\t\t\tself.hasEqualElements(aDictionary, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.error('Value not found')\n\t}",
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
  "{ :self :aCollection :aBlock:/1 |\n\t\taCollection.isDictionary.if {\n\t\t\taCollection.associationsDo { :association |\n\t\t\t\tself[association.key] := aBlock(association.value)\n\t\t\t}\n\t\t} {\n\t\t\taCollection.do { :element |\n\t\t\t\tself.add(aBlock(element))\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "hasEqualElements",
  ["self", "aDictionary", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aDictionary, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aDictionary, _aBlock_2";
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
                return _aBlock_2(_at_2(_self, _key), _value);
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
  }, ["self", "aDictionary", "aBlock:/2"]),
  "{ :self :aDictionary :aBlock:/2 |\n\t\t(self.size = aDictionary.size).if {\n\t\t\tself.keys.allSatisfy { :key |\n\t\t\t\taDictionary.atIfPresentIfAbsent(key) { :value |\n\t\t\t\t\taBlock(self[key], value)\n\t\t\t\t} {\n\t\t\t\t\tfalse\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
    return _hasEqualElements_3(_self, _aDictionary, _equalsSign_2);
  }, ["self", "aDictionary"]),
  "{ :self :aDictionary |\n\t\tself.hasEqualElements(aDictionary, =)\n\t}",
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
  "{ :self :anAssociation |\n\t\tself[anAssociation.key] := anAssociation.value;\n\t\tanAssociation\n\t}",
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
  "{ :self :aCollection |\n\t\taCollection.associationsDo { :anAssociation |\n\t\t\tself.include(anAssociation)\n\t\t};\n\t\taCollection\n\t}",
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
  "{ :self :anAssociation |\n\t\tself.atIfPresentIfAbsent(anAssociation.key) { :value |\n\t\t\tanAssociation.value = value\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.do { :each |\n\t\t\t\t(anObject == each).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.keys.includesBy(key, self.comparator)\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "includesKeys",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKey_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.allSatisfy { :each |\n\t\t\tself.includesKey(each)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.keys\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "isDictionary",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
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
  "{ :self :value :exceptionBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.associationsDo { :association |\n\t\t\t\t(value = association.value).ifTrue {\n\t\t\t\t\tassociation.key.return\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock()\n\t\t}\n\t}",
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
  "{ :self :value |\n\t\tself.keyAtValueIfAbsent(value) {\n\t\t\tself.errorValueNotFound\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keysAndValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [_key, _value]);
      }, ["key", "value"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\tanswer.add([key, value])\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tlet answer = self.species.new;\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\tanswer.add(key -> aBlock(key, value))\n\t\t};\n\t\tanswer\n\t}",
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
    } /* Statements */
    return _typeResponsibility_2(_self, "@Dictionary>>keysAndValuesDo");
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tself.typeResponsibility('@Dictionary>>keysAndValuesDo')\n\t}",
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
  "{ :self :keyValueBlock:/2 |\n\t\tself.associationsRemove { :each |\n\t\t\tkeyValueBlock(each.key, each.value)\n\t\t}\n\t}",
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
    return _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_key);
      }, ["key", "value"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\taBlock(key)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keySelect",
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
          _aBlock_1(_key_1(_each)),
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.associationsDo { :each |\n\t\t\teach.key.aBlock.ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keySort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_associations_1(_self), _key_1);
  }, ["self"]),
  "{ :self |\n\t\tself.associations.sortOn(key:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "keyType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementType_1(_keys_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.keys.elementType\n\t}",
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
  "{ :self :key :defaultAnswer |\n\t\tkey.isList.if {\n\t\t\tkey.collect { :each |\n\t\t\t\tself.lookup(each, defaultAnswer)\n\t\t\t}\n\t\t} {\n\t\t\tself.atIfAbsent(key) {\n\t\t\t\tdefaultAnswer.value\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :anAssociation |\n\t\tself.removeAssociation(anAssociation)\n\t}",
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
  "{ :self |\n\t\tself.associationsRemove { :unusedItem |\n\t\t\ttrue\n\t\t}\n\t}",
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
  "{ :self :keys |\n\t\tself.associationsRemove { :each |\n\t\t\tkeys.includes(each.key)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.associationsRemove { :each |\n\t\t\taBlock(each.value)\n\t\t}\n\t}",
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
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tself.includesAssociation(oldObject).if {\n\t\t\tself.removeKey(oldObject.key)\n\t\t} {\n\t\t\tanExceptionBlock()\n\t\t}\n\t}",
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
  "{ :self :oldObject |\n\t\tself.removeAssociationIfAbsent(oldObject) {\n\t\t\tself.error('removeAssociation: not present')\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.removeKey(key)\n\t}",
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
  "{ :self :keys |\n\t\tself.removeAllKeys(keys)\n\t}",
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
  "{ :self :key |\n\t\tself.removeKeyIfAbsent(key) {\n\t\t\tself.error('@Dictionary>>removeKey')\n\t\t}\n\t}",
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
  "{ :self :key :ifAbsent:/0 |\n\t\tlet index = self.keys.indexOfBy(key, self.comparator);\n\t\t(index = 0).if {\n\t\t\tifAbsent()\n\t\t} {\n\t\t\tself.keys.removeAt(index);\n\t\t\tself.values.removeAt(index)\n\t\t}\n\t}",
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
    return _shouldNotImplement_2(_self, "removeIfAbsent");
  }, ["self", "oldObject", "anExceptionBlock:/0"]),
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tself.shouldNotImplement('removeIfAbsent')\n\t}",
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
    return _keysDo_2(
      _self,
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
  "{ :self :aBlock:/1 |\n\t\tself.keysDo { :key |\n\t\t\tself[key] := aBlock(self[key])\n\t\t}\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.associationsDo { :each |\n\t\t\teach.value.aBlock.ifTrue {\n\t\t\t\tanswer.add(each.copy)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
    return _typeResponsibility_2(_self, "@Dictionary>>size");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Dictionary>>size')\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "storeStringLiteral",
  ["self", "empty", "open", "close", "formatKey:/1", "join", "formatValue:/1"],
  sl.annotateFunction(
    function (
      _self,
      _empty,
      _open,
      _close,
      _formatKey_1,
      _join,
      _formatValue_1,
    ) {
      /* ArityCheck */
      if (arguments.length !== 7) {
        const errorMessage =
          "Arity: expected 7, _self, _empty, _open, _close, _formatKey_1, _join, _formatValue_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isEmpty_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _empty;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _format_2("%%%", [
            _open,
            _commaSeparated_1(
              _collect_2(
                _associations_1(_self),
                sl.annotateFunction(function (_each) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _each";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _format_2("%%%", [
                    _formatKey_1(_key_1(_each)),
                    _join,
                    _formatValue_1(_value_1(_each)),
                  ]);
                }, ["each"]),
              ),
            ),
            _close,
          ]);
        }, []),
      );
    },
    [
      "self",
      "empty",
      "open",
      "close",
      "formatKey:/1",
      "join",
      "formatValue:/1",
    ],
  ),
  "{ :self :empty :open :close :formatKey:/1 :join :formatValue:/1 |\n\t\tself.isEmpty.if {\n\t\t\tempty\n\t\t} {\n\t\t\t'%%%'.format(\n\t\t\t\t[\n\t\t\t\t\topen,\n\t\t\t\t\tself.associations.collect { :each |\n\t\t\t\t\t\t'%%%'.format(\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\teach.key.formatKey,\n\t\t\t\t\t\t\t\tjoin,\n\t\t\t\t\t\t\t\teach.value.formatValue\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t)\n\t\t\t\t\t}.commaSeparated,\n\t\t\t\t\tclose\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "storeStringExpression",
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
  "{ :self |\n\t\t'%.as%'.format(\n\t\t\t[\n\t\t\t\tself.associations.storeString,\n\t\t\t\tself.typeOf\n\t\t\t]\n\t\t)\n\t}",
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
    return _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value);
      }, ["key", "value"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\taBlock(value)\n\t\t}\n\t}",
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
  "{ :self :aBlock:/2 |\n\t\tself.keysAndValuesCollect { :key :value |\n\t\t\taBlock(value, key)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "valueSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortOn_2(_associations_1(_self), _value_1);
  }, ["self"]),
  "{ :self |\n\t\tself.associations.sortOn(value:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Dictionary",
  "Dictionary",
  "valueType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elementType_1(_values_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.values.elementType\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "keyIntersection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _intersection_1(_collect_2(_self, _keys_1));
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _item = _new_1(_species_1(_each));
        /* Statements */
        _do_2(
          _keys,
          sl.annotateFunction(function (_key) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _key";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _item,
              _hyphenMinusGreaterThanSign_2(_key, _at_2(_each, _key)),
            );
          }, ["key"]),
        );
        return _item;
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet keys = self.collect(keys:/1).intersection;\n\t\tself.collect { :each |\n\t\t\tlet item = each.species.new;\n\t\t\tkeys.do { :key |\n\t\t\t\titem.add(key -> each.at(key))\n\t\t\t};\n\t\t\titem\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "keyUnion",
  ["self", "blockOrDictionary"],
  sl.annotateFunction(function (_self, _blockOrDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _blockOrDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _Set_0();
    let _aBlock_1 = _if_3(
      _isBlock_1(_blockOrDictionary),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _blockOrDictionary;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_key) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _key";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_blockOrDictionary, _key);
        }, ["key"]);
      }, []),
    );
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(_keys, _keys_1(_each));
      }, ["each"]),
    );
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _copy = _copy_1(_each);
        /* Statements */
        _do_2(
          _keys,
          sl.annotateFunction(function (_key) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _key";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _includesKey_2(_copy, _key),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(
                  _copy,
                  _hyphenMinusGreaterThanSign_2(_key, _aBlock_1(_key)),
                );
              }, []),
            );
          }, ["key"]),
        );
        return _copy;
      }, ["each"]),
    );
  }, ["self", "blockOrDictionary"]),
  "{ :self :blockOrDictionary |\n\t\tlet keys = Set();\n\t\tlet aBlock:/1 = blockOrDictionary.isBlock.if {\n\t\t\tblockOrDictionary\n\t\t} {\n\t\t\t{ :key |\n\t\t\t\tblockOrDictionary.at(key)\n\t\t\t}\n\t\t};\n\t\tself.do { :each |\n\t\t\tkeys.includeAll(each.keys)\n\t\t};\n\t\tself.collect { :each |\n\t\t\tlet copy = each.copy;\n\t\t\tkeys.do { :key |\n\t\t\t\tcopy.includesKey(key).ifFalse {\n\t\t\t\t\tcopy.add(key -> aBlock(key))\n\t\t\t\t}\n\t\t\t};\n\t\t\tcopy\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "keyUnion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _keyUnion_2(
      _self,
      sl.annotateFunction(function (_key) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _Missing_2("KeyAbsent", _key);
      }, ["key"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.keyUnion { :key |\n\t\t\tMissing('KeyAbsent', key)\n\t\t}\n\t}",
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
  "{ :self :key :defaultValue |\n\t\tself.collect { :each |\n\t\t\teach.lookup(key, defaultValue)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "merge",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _union_1(_collect_2(_self, _keys_1));
    let _values = _collect_2(
      _keys,
      sl.annotateFunction(function (_key) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _key";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _list = [];
        /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _includesKey_2(_each, _key),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_list, _at_2(_each, _key));
              }, []),
            );
          }, ["each"]),
        );
        return _list;
      }, ["key"]),
    );
    let _answer = _new_1(_species_1(_anyOne_1(_self)));
    /* Statements */
    _withDo_3(
      _keys,
      _values,
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
  "{ :self :aBlock:/1 |\n\t\tlet keys = self.collect(keys:/1).union;\n\t\tlet values = keys.collect { :key |\n\t\t\tlet list = [];\n\t\t\tself.do { :each |\n\t\t\t\teach.includesKey(key).ifTrue {\n\t\t\t\t\tlist.add(each.at(key))\n\t\t\t\t}\n\t\t\t};\n\t\t\tlist\n\t\t};\n\t\tlet answer = self.anyOne.species.new;\n\t\tkeys.withDo(values) { :key :value |\n\t\t\tanswer.add(key -> aBlock(value))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "merge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _merge_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.merge(identity:/1)\n\t}",
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
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\tself.error('@Collection>>dictionaryJoin')\n\t\t} {\n\t\t\tlet answer = self.first.copy;\n\t\t\tself.allButFirstDo { :each |\n\t\t\t\tanswer.includeAll(each)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addType(
  false,
  "Dictionary",
  "Dictionary",
  [
    "Object",
    "Storeable",
    "Copyable",
    "Equatable",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Dictionary",
  ],
  ["keys", "values", "comparator"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "Dictionary",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self :key :ifAbsent:/0 |\n\t\tlet index = self.keys.indexOfBy(key, self.comparator);\n\t\t(index = 0).if {\n\t\t\tifAbsent()\n\t\t} {\n\t\t\tself.values[index]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
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
  "{ :self :key :value |\n\t\tlet index = self.keys.indexOfBy(key, self.comparator);\n\t\t(index = 0).if {\n\t\t\tself.keys.add(key);\n\t\t\tself.values.add(value)\n\t\t} {\n\t\t\tself.values[index] := value\n\t\t};\n\t\tvalue\n\t}",
);

sl.addMethodToExistingType(
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
    let _size = _size_1(_keys);
    /* Statements */
    _toDo_3(
      1,
      _size,
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
  "{ :self :aBlock:/2 |\n\t\tlet keys = self.keys;\n\t\tlet values = self.values;\n\t\tlet size = keys.size;\n\t\t1.toDo(size) { :index |\n\t\t\taBlock(keys[index], values[index])\n\t\t};\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "Dictionary",
  "Dictionary",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _keys_2(_self, _copy_1(_keys_1(_self)));
    return _values_2(_self, _copy_1(_values_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.keys := self.keys.copy;\n\t\tself.values := self.values.copy\n\t}",
);

sl.addMethodToExistingType(
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
  "{ :self |\n\t\tself.keys.size\n\t}",
);

sl.addMethodToExistingType(
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
    return _storeStringLiteral_7(
      _self,
      "[| |]",
      "[|",
      "|]",
      _storeString_1,
      " -> ",
      _storeString_1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral(\n\t\t\t'[| |]',\n\t\t\t'[|', '|]',\n\t\t\tstoreString:/1, ' -> ', storeString:/1\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Dictionary",
  "Dictionary",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newDictionary_0(), [], [], _equalsSign_2);
  }, []),
  "{\n\t\tnewDictionary().initializeSlots([], [], =)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "asDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Dictionary_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tDictionary(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "Dictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Dictionary_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isAssociationList_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _listToDictionary_1(_collect_2(_self, _keyValue_1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _listToDictionary_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tDictionary()\n\t\t} {\n\t\t\tself.isAssociationList.if {\n\t\t\t\tself.collect(keyValue:/1).listToDictionary\n\t\t\t} {\n\t\t\t\tself.listToDictionary\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Dictionary",
  "listToDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_dimensions_1(_self), 2);
    let __SplUnused3 = _at_2(__SplVar1, 1);
    let _m = _at_2(__SplVar1, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_m, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _keys = _at_2(__SplVar2, 1);
        let _values = _at_2(__SplVar2, 2);
        let _answer = _Dictionary_0();
        /* Statements */
        _keys_2(_answer, _keys);
        _values_2(_answer, _values);
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>listToDictionary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [_, m] = self.dimensions;\n\t\t(m = 2).if {\n\t\t\tlet [keys, values] = self.transpose;\n\t\t\tlet answer = Dictionary();\n\t\t\tanswer.keys := keys;\n\t\t\tanswer.values := values;\n\t\t\tanswer\n\t\t} {\n\t\t\tself.error('List>>listToDictionary')\n\t\t}\n\t}",
);
