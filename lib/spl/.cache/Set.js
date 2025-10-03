sl.addTrait("Set", "Set");

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
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
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
                return _includesBy_3(_anObject, _each, _aBlock_2);
              }, ["each"]),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | &(isSet(anObject), { &(=(size(self), size(anObject)), { allSatisfy(self, { :each | includesBy(anObject,each, aBlock:/2) }) }) }) }",
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

sl.addMethodToExistingTrait(
  "Set",
  "Set",
  "uncheckedInclude",
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
    return _SortedSet_1(_self);
  }, ["self"]),
  "{ :self | SortedSet(self) }",
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
    } /* Statements */
    return _SortedSet_1(_self);
  }, ["self"]),
  "{ :self | SortedSet(self) }",
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
    return _SortedSet_0();
  }, []),
  "{ SortedSet() }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Set",
  "setIntersection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_collect_2(_self, _asSet_1), _intersection_2);
  }, ["self"]),
  "{ :self | reduce(collect(self,asSet:/1),intersection:/2) }",
);
