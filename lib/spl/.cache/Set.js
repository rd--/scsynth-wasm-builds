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
  "{ :self :anObject |\n\t\tself.includes(anObject).ifTrue {\n\t\t\tself.error('@Set>>add: includes item')\n\t\t};\n\t\tself.include(anObject)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = self.species.new;\n\t\tself.do { :each |\n\t\t\tanswer.include(aBlock(each))\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isSet & {\n\t\t\tself.size = anObject.size & {\n\t\t\t\tself.allSatisfy { :each |\n\t\t\t\t\tanObject.includesBy(each, aBlock:/2)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :unused |\n\t\ttrue\n\t}",
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
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.removeIfAbsent(anObject) {\n\t\t\tself.error('@Set>>remove: item does not exist')\n\t\t}\n\t}",
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
  "{ :self :anObject |\n\t\tself.removeIfAbsent(anObject) { };\n\t\tself\n\t}",
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
  "{ :self :anObject |\n\t\tself.include(anObject)\n\t}",
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
  "{ :self |\n\t\tself.values.asSet\n\t}",
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
  "{ :self |\n\t\tSortedSet(self)\n\t}",
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
  "{ :self |\n\t\tSortedSet(self)\n\t}",
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
  "{\n\t\tSortedSet()\n\t}",
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
  "{ :self |\n\t\tself.collect(asSet:/1).reduce(intersection:/2)\n\t}",
);
