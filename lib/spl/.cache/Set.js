sl.addTrait("Set", "Set");

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSet_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_size_1(_self), _size_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _allSatisfy_2(
              _self,
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _includes_2(_anObject, _each);
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isSet(anObject), { &(=(size(self), size(anObject)), { allSatisfy(self, { :each | includes(anObject,each) }) }) }) }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "add",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _includes_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Set>>add: includes item");
      }, []),
    );
    return _include_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ifTrue(includes(self,anObject), { error(self,'@Set>>add: includes item') }); include(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
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
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _include_2(_answer, _aBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = new(species(self)); do(self, { :each | include(answer,aBlock(each)) }); answer }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "isSet",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused | true }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(includes(self,anObject), { 1 }, { 0 }) }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "remove",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsent_3(
      _self,
      _anObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Set>>remove: item does not exist");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | removeIfAbsent(self, anObject, { error(self,'@Set>>remove: item does not exist') }) }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "union",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | let answer = copy(self); includeAll(answer,aCollection); answer }",
);

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "without",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _removeIfAbsent_3(
      _self,
      _anObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      }, []),
    );
    return _self;
  }, ["self", "anObject"]),
  "{ :self :anObject | removeIfAbsent(self, anObject, {  }); self }",
);

sl.addType(
  false,
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
  ["contents", "comparator"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Set",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Set",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Set",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "Set",
);

sl.copyTraitMethodsToType(
  "Removable",
  "Set",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "Set",
);

sl.copyTraitMethodsToType(
  "Set",
  "Set",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "basicInclude",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _include_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | include(self,anObject) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(contents(self),aBlock:/1); self }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "include",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addIfNotPresentBy_3(
      _contents_1(_self),
      _anObject,
      _comparator_1(_self),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | addIfNotPresentBy(contents(self),anObject, comparator(self)) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_contents_1(_self), _anObject, _comparator_1(_self));
  }, ["self", "anObject"]),
  "{ :self :anObject | includesBy(contents(self),anObject, comparator(self)) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAll_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | removeAll(contents(self)) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "removeIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIndexIfFoundIfNone_4(
      _contents_1(_self),
      sl.annotateFunction(function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          throw new Error(errorMessage);
        } /* Statements */
        return _value_3(_comparator_1(_self), _item, _anObject);
      }, ["item"]),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAt_2(_contents_1(_self), _index);
      }, ["index"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
    );
  }, ["self", "anObject", "aBlock:/0"]),
  "{ :self :anObject :aBlock:/0 | detectIndexIfFoundIfNone(contents(self), { :item | value(comparator(self),item, anObject) }, { :index | removeAt(contents(self),index) }, { aBlock() }) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_1(_shallowCopy_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | asSet(shallowCopy(contents(self))) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | size(contents(self)) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Set_0;
  }, ["self"]),
  "{ :self | Set:/0 }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("{|%|}", [
      _commaSeparated_1(_collect_2(_contents_1(_self), _storeString_1)),
    ]);
  }, ["self"]),
  "{ :self | format('{|%|}',[commaSeparated(collect(contents(self),storeString:/1))]) }",
);

sl.addMethodToExistingType(
  "Set",
  "Set",
  "storeStringExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Set(%)", [_storeString_1(_contents_1(_self))]);
  }, ["self"]),
  "{ :self | format('Set(%)',[storeString(contents(self))]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "Set",
  "asSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSet_1(_values_1(_self));
  }, ["self"]),
  "{ :self | asSet(values(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Set",
  "unionBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _set = _Set_0();
    /* Statements */
    _comparator_2(_set, _aBlock_2);
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeAll_2(_set, _each);
      }, ["each"]),
    );
    return _asList_1(_set);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let set = Set(); comparator(set, aBlock:/2); do(self, { :each | includeAll(set,each) }); asList(set) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Set",
  "unionBy",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _unionBy_2([_self, _aCollection], _aBlock_2);
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 | unionBy([self, aCollection],aBlock:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Set",
  "union",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _unionBy_2(_self, _equalsSign_2);
  }, ["self"]),
  "{ :self | unionBy(self,=) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Set",
  "union",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _unionBy_2([_self, _aCollection], _equalsSign_2);
  }, ["self", "aCollection"]),
  "{ :self :aCollection | unionBy([self, aCollection],=) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Set",
  "asSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Set_1(_self);
  }, ["self"]),
  "{ :self | Set(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Set",
  "Set",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Set(); includeAll(answer,self); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Set",
  "Set",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSet_0(), [], _equalsSign_2);
  }, []),
  "{ initializeSlots(newSet(),[], =) }",
);
