sl.addType(
  false,
  "ListView",
  "ListView",
  [
    "Object",
    "Equatable",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Sequenceable",
  ],
  ["contents", "startIndex", "endIndex", "referenceIndex"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Collection",
  "ListView",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "ListView",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
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
  "{ :self |\n\t\tself.contents.copyFromTo(self.startIndex, self.endIndex).asList\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
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
          _hyphenMinus_2(
            _plusSign_2(_index, _startIndex_1(_self)),
            _referenceIndex_1(_self),
          ),
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
  "{ :self :index :ifAbsent:/0 |\n\t\tself.includesIndex(index).if {\n\t\t\tself.contents[index + self.startIndex - self.referenceIndex]\n\t\t} {\n\t\t\tifAbsent()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
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
          _hyphenMinus_2(
            _plusSign_2(_index, _startIndex_1(_self)),
            _referenceIndex_1(_self),
          ),
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
  "{ :self :index :value |\n\t\tself.includesIndex(index).if {\n\t\t\tself.contents[index + self.startIndex - self.referenceIndex] := value\n\t\t} {\n\t\t\tself.error('atPut: invalid index: ' ++ index)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "copyFromTo",
  ["self", "from", "to"],
  sl.annotateFunction(function (_self, _from, _to) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _from, _to";
      throw new Error(errorMessage);
    } /* Statements */
    return _ListView_4(_self, _from, _to, _referenceIndex_1(_self));
  }, ["self", "from", "to"]),
  "{ :self :from :to |\n\t\tListView(self, from, to, self.referenceIndex)\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
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
  "{ :self :aBlock:/1 |\n\t\tlet items = self.contents;\n\t\tself.startIndex.toDo(self.endIndex) { :index |\n\t\t\taBlock(items[index])\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "includesIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _referenceIndex_1(_self);
    /* Statements */
    return _ampersand_2(
      _greaterThanSignEqualsSign_2(_index, _a),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(
          _index,
          _hyphenMinus_2(_plusSign_2(_a, _size_1(_self)), 1),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tlet a = self.referenceIndex;\n\t\tindex >= a & {\n\t\t\tindex <= (a + self.size - 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _referenceIndex_1(_self);
    /* Statements */
    return _to_2(_i, _hyphenMinus_2(_plusSign_2(_i, _size_1(_self)), 1));
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.referenceIndex;\n\t\ti.to(i + self.size - 1)\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "ListView",
  ["self", "startIndex", "endIndex", "referenceIndex"],
  sl.annotateFunction(
    function (_self, _startIndex, _endIndex, _referenceIndex) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _startIndex, _endIndex, _referenceIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _ListView_4(
        _contents_1(_self),
        _hyphenMinus_2(_plusSign_2(_startIndex_1(_self), _startIndex), 1),
        _hyphenMinus_2(_plusSign_2(_startIndex_1(_self), _endIndex), 1),
        _referenceIndex,
      );
    },
    ["self", "startIndex", "endIndex", "referenceIndex"],
  ),
  "{ :self :startIndex :endIndex :referenceIndex |\n\t\tListView(\n\t\t\tself.contents,\n\t\t\tself.startIndex + startIndex - 1,\n\t\t\tself.startIndex + endIndex - 1,\n\t\t\treferenceIndex\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asList.printString\n\t}",
);

sl.addMethodToExistingType(
  "ListView",
  "ListView",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(_endIndex_1(_self), _startIndex_1(_self)),
      1,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.endIndex - self.startIndex + 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ListView",
  "ListView",
  ["self", "startIndex", "endIndex", "referenceIndex"],
  sl.annotateFunction(
    function (_self, _startIndex, _endIndex, _referenceIndex) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _startIndex, _endIndex, _referenceIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _greaterThanSignEqualsSign_2(_endIndex, _startIndex),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_size_1(_self), _endIndex);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _initializeSlots_5(
            _newListView_0(),
            _self,
            _startIndex,
            _endIndex,
            _referenceIndex,
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "ListView: invalid indices");
        }, []),
      );
    },
    ["self", "startIndex", "endIndex", "referenceIndex"],
  ),
  "{ :self :startIndex :endIndex :referenceIndex |\n\t\t(endIndex >= startIndex & { self.size >= endIndex }).if {\n\t\t\tnewListView().initializeSlots(self, startIndex, endIndex, referenceIndex)\n\t\t} {\n\t\t\tself.error('ListView: invalid indices')\n\t\t}\n\t}",
);
