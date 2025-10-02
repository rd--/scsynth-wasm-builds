sl.addType(
  false,
  "Slice",
  "Slice",
  [
    "Object",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
  ],
  ["contents", "startIndex", "size"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Slice",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Slice",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Slice",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Slice",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Slice",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Slice",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(
      _copyFromTo_3(
        _contents_1(_self),
        _startIndex_1(_self),
        _endIndex_1(_self),
      ),
    );
  }, ["self"]),
  "{ :self | asList(copyFromTo(contents(self),startIndex(self), endIndex(self))) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(
          _contents_1(_self),
          _hyphenMinus_2(_plusSign_2(_index, _startIndex_1(_self)), 1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      }, []),
    );
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 | if(includesIndex(self,index), { at(contents(self), -(+(index, startIndex(self)), 1)) }, { ifAbsent() }) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "atPut",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _contents_1(_self),
          _hyphenMinus_2(_plusSign_2(_index, _startIndex_1(_self)), 1),
          _value,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("atPut: invalid index: ", _index),
        );
      }, []),
    );
  }, ["self", "index", "value"]),
  "{ :self :index :value | if(includesIndex(self,index), { atPut(contents(self), -(+(index, startIndex(self)), 1), value) }, { error(self,++('atPut: invalid index: ', index)) }) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _items = _contents_1(_self);
    /* Statements */
    return _toDo_3(
      _startIndex_1(_self),
      _endIndex_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_at_2(_items, _index));
      }, ["index"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let items = contents(self); toDo(startIndex(self), endIndex(self), { :index | aBlock(at(items, index)) }) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "endIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_plusSign_2(_startIndex_1(_self), _size_1(_self)), 1);
  }, ["self"]),
  "{ :self | -(+(startIndex(self), size(self)), 1) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.sliceFromTo(%, %)", [
      _printString_1(_contents_1(_self)),
      _startIndex_1(_self),
      _endIndex_1(_self),
    ]);
  }, ["self"]),
  "{ :self | format('%.sliceFromTo(%, %)',[printString(contents(self)), startIndex(self), endIndex(self)]) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "Slice",
  ["self", "startIndex", "size"],
  sl.annotateFunction(function (_self, _startIndex, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _Slice_3(
      _contents_1(_self),
      _hyphenMinus_2(_plusSign_2(_startIndex_1(_self), _startIndex), 1),
      _size,
    );
  }, ["self", "startIndex", "size"]),
  "{ :self :startIndex :size | Slice(contents(self), -(+(startIndex(self), startIndex), 1), size) }",
);

sl.addMethodToExistingType(
  "Slice",
  "Slice",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Slice>>storeString: do not store slices");
  }, ["self"]),
  "{ :self | error(self,'Slice>>storeString: do not store slices') }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Slice",
  "Slice",
  ["self", "startIndex", "size"],
  sl.annotateFunction(function (_self, _startIndex, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _endIndex = _hyphenMinus_2(_plusSign_2(_startIndex, _size), 1);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_size_1(_self), _endIndex),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_4(_newSlice_0(), _self, _startIndex, _size);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Slice: invalid indices");
      }, []),
    );
  }, ["self", "startIndex", "size"]),
  "{ :self :startIndex :size | let endIndex = -(+(startIndex, size), 1); if((>=(size(self), endIndex)), { initializeSlots(newSlice(),self, startIndex, size) }, { error(self,'Slice: invalid indices') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Slice",
  "sliceFromTo",
  ["self", "startIndex", "endIndex"],
  sl.annotateFunction(function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _plusSign_2(_hyphenMinus_2(_endIndex, _startIndex), 1);
    /* Statements */
    return _Slice_3(_self, _startIndex, _size);
  }, ["self", "startIndex", "endIndex"]),
  "{ :self :startIndex :endIndex | let size = +(-(endIndex, startIndex), 1); Slice(self, startIndex, size) }",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Slice",
  "sliceFromTo",
  ["self", "startIndex", "endIndex"],
  sl.annotateFunction(function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _plusSign_2(_hyphenMinus_2(_endIndex, _startIndex), 1);
    /* Statements */
    return _Slice_3(_self, _startIndex, _size);
  }, ["self", "startIndex", "endIndex"]),
  "{ :self :startIndex :endIndex | let size = +(-(endIndex, startIndex), 1); Slice(self, startIndex, size) }",
);
