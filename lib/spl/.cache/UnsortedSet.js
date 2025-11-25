sl.addType(
  false,
  "UnsortedSet",
  "UnsortedSet",
  [
    "Object",
    "Storeable",
    "Equatable",
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
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Collection",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Removable",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "UnsortedSet",
);

sl.copyTraitMethodsToType(
  "Set",
  "UnsortedSet",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self :anObject |\n\t\tself.contents.addIfNotPresentBy(anObject, self.comparator)\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self :anObject |\n\t\tself.contents.includesBy(anObject, self.comparator)\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self |\n\t\tself.contents.removeAll\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self :anObject :aBlock:/0 |\n\t\tself.contents.detectIndexIfFoundIfNone { :item |\n\t\t\tself.comparator.value(item, anObject)\n\t\t} { :index |\n\t\t\tself.contents.removeAt(index)\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
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
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsortedSet_0;
  }, ["self"]),
  "{ :self |\n\t\tUnsortedSet:/0\n\t}",
);

sl.addMethodToExistingType(
  "UnsortedSet",
  "UnsortedSet",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlotsOmitting_2(_self, ["comparator"]);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlotsOmitting(['comparator'])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "UnsortedSet",
  "UnsortedSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _UnsortedSet_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = UnsortedSet();\n\t\tanswer.includeAll(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "UnsortedSet",
  "UnsortedSet",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newUnsortedSet_0(), [], _equalsSign_2);
  }, []),
  "{\n\t\tnewUnsortedSet().initializeSlots([], =)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnsortedSet",
  "unionBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _set = _UnsortedSet_0();
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
  "{ :self :aBlock:/2 |\n\t\tlet set = UnsortedSet();\n\t\tset.comparator := aBlock:/2;\n\t\tself.do { :each |\n\t\t\tset.includeAll(each)\n\t\t};\n\t\tset.asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnsortedSet",
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
  "{ :self :aCollection :aBlock:/2 |\n\t\t[self, aCollection].unionBy(aBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnsortedSet",
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
  "{ :self |\n\t\tself.unionBy(=)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnsortedSet",
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
  "{ :self :aCollection |\n\t\t[self, aCollection].unionBy(=)\n\t}",
);
