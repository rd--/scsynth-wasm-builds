sl.addType(
  false,
  "SortedSet",
  "SortedSet",
  [
    "Object",
    "Storeable",
    "Copyable",
    "Equatable",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Set",
  ],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "Removable",
  "SortedSet",
);

sl.copyTraitMethodsToType(
  "Set",
  "SortedSet",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "add",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _contents = _contents_1(_self);
    /* Statements */
    return _if_3(
      _includes_2(_contents, _anObject),
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
        return _include_2(_contents, _anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet contents = self.contents;\n\t\tcontents.includes(anObject).if {\n\t\t\tself.error('add: item already present')\n\t\t} {\n\t\t\tcontents.include(anObject)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.asList\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedSet_1(_collect_2(_contents_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tSortedSet(\n\t\t\tself.contents.collect(aBlock:/1)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
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
  "SortedSet",
  "SortedSet",
  "include",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addIfNotPresent_2(_contents_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.contents.addIfNotPresent(anObject)\n\t}",
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
    return _includes_2(_contents_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.contents.includes(anObject)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
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
  "SortedSet",
  "SortedSet",
  "removeIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsent_3(_contents_1(_self), _anObject, _aBlock_0);
  }, ["self", "anObject", "aBlock:/0"]),
  "{ :self :anObject :aBlock:/0 |\n\t\tself.contents.removeIfAbsent(anObject, aBlock:/0)\n\t}",
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
    return _contents_2(_self, _copy_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents := self.contents.copy\n\t}",
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
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
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
  "{ :self |\n\t\tSortedSet:/0\n\t}",
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
    return _storeStringLiteral_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringLiteral\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "storeStringLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("{|%|}", [
      _commaSeparated_1(
        _collect_2(_contents_1(_contents_1(_self)), _storeString_1),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'{|%|}'.format(\n\t\t\t[\n\t\t\t\tself.contents.contents.collect(storeString:/1).commaSeparated\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "SortedSet",
  "SortedSet",
  "storeStringExpression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("SortedSet([%])", [
      _commaSeparated_1(
        _collect_2(_contents_1(_contents_1(_self)), _storeString_1),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'SortedSet([%])'.format(\n\t\t\t[\n\t\t\t\tself.contents.contents.collect(storeString:/1).commaSeparated\n\t\t\t]\n\t\t)\n\t}",
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
  "{\n\t\tnewSortedSet().initializeSlots(\n\t\t\tSortedList([], precedesOrEqualTo:/2)\n\t\t)\n\t}",
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
    } /* Temporaries */
    let _answer = _SortedSet_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = SortedSet();\n\t\tanswer.includeAll(self);\n\t\tanswer\n\t}",
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
        return _includeAll_2(_aCollection, _each);
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.do { :each |\n\t\t\taCollection.includeAll(each)\n\t\t};\n\t\taCollection\n\t}",
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
    return _asList_1(_unionInto_2(_self, _SortedSet_0()));
  }, ["self"]),
  "{ :self |\n\t\tself.unionInto(SortedSet()).asList\n\t}",
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
