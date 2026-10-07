sl.addType(
  false,
  "SortedSet",
  "SortedSet",
  [
    "Object",
    "Copy",
    "Store",
    "Equal",
    "Iterable",
    "Collection",
    "Extensible",
    "Set",
  ],
  ["sortedList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Copy",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Store",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Equal",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Collection",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Set",
  "SortedSet",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "addInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _sortedList = _sortedList_1(_self);
    return _if_3(
      _includes_2(_sortedList, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "add: item already present");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeInPlace_2(_sortedList, _anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet sortedList = self.sortedList;\n\t\tsortedList.includes(anObject).if {\n\t\t\tself.error('add: item already present')\n\t\t} {\n\t\t\tsortedList.include!(anObject)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "collect",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedSet_1(_collect_2(_sortedList_1(_self), _aBlock_1));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tSortedSet(\n\t\t\tself.sortedList.collect(aBlock/1)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_sortedList_1(_self), _aBlock_1);
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.sortedList.do(aBlock/1)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "includeInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addIfNotPresentInPlace_2(_sortedList_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.sortedList.addIfNotPresent!(anObject)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_sortedList_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.sortedList.includes(anObject)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1(_sortedList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sortedList.List\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "removeAllInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllInPlace_1(_sortedList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sortedList.removeAll!\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "removeIfAbsentInPlace",
  ["self", "anObject", "aBlock/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsentInPlace_3(_sortedList_1(_self), _anObject, _aBlock_0);
  }, ["self", "anObject", "aBlock/0"]),
  "{ :self :anObject :aBlock/0 |\n\t\tself.sortedList.removeIfAbsent!(anObject, aBlock/0)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedListMutateInPlace_2(_self, _copy_1(_sortedList_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.sortedList := self.sortedList.copy\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_sortedList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sortedList.size\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedSet_0;
  }, ["self"]),
  "{ :self |\n\t\tSortedSet/0\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("SortedSet([%])", [
      _commaSeparated_1(
        _collect_2(_uncopiedList_1(_sortedList_1(_self)), _storeString_1),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'SortedSet([%])'.format(\n\t\t\t[\n\t\t\t\tself\n\t\t\t\t.sortedList\n\t\t\t\t.uncopiedList\n\t\t\t\t.collect(storeString/1)\n\t\t\t\t.commaSeparated\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SortedSet",
  "SortedSet",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(
      _newSortedSet_0(),
      _SortedList_2([], _precedesOrEqualTo_2),
    );
  }, []),
  "{\n\t\tnewSortedSet().initializeSlots(\n\t\t\tSortedList([], precedesOrEqualTo/2)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedSet",
  "SortedSet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _SortedSet_0();
    _includeAllInPlace_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = SortedSet();\n\t\tanswer.includeAll!(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedSet",
  "unionInto",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
        return _includeAllInPlace_2(_aCollection, _each);
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.do { :each |\n\t\t\taCollection.includeAll!(each)\n\t\t};\n\t\taCollection\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedSet",
  "union",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1(_unionInto_2(_self, _SortedSet_0()));
  }, ["self"]),
  "{ :self |\n\t\tself.unionInto(\n\t\t\tSortedSet()\n\t\t).List\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedSet",
  "union",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _union_1([_self, _aCollection]);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\t[self, aCollection].union\n\t}",
);
