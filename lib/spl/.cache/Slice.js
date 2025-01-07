sl.addType(
  false,
  "Slice",
  "Slice",
  ["Object", "Iterable", "Indexable", "Collection", "Sequence"],
  ["contents", "startIndex", "size"],
);

sl.copyTraitToType(
  "Object",
  "Slice",
);

sl.copyTraitToType(
  "Iterable",
  "Slice",
);

sl.copyTraitToType(
  "Indexable",
  "Slice",
);

sl.copyTraitToType(
  "Collection",
  "Slice",
);

sl.copyTraitToType(
  "Sequence",
  "Slice",
);

sl.addMethod(
  "Slice",
  "Slice",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(
      _copyFromTo_3(
        _contents_1(_self),
        _startIndex_1(_self),
        _endIndex_1(_self),
      ),
    );
  },
  "{ :self |\n\t\tself.contents.copyFromTo(self.startIndex, self.endIndex).asList\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(
        _contents_1(_self),
        _hyphenMinus_2(_plusSign_2(_index, _startIndex_1(_self)), 1),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("at: invalid index: ", _index),
      );
    });
  },
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tself.contents[index + self.startIndex - 1]\n\t\t} {\n\t\t\tself.error('at: invalid index: ' ++ index)\n\t\t}\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(
        _contents_1(_self),
        _hyphenMinus_2(_plusSign_2(_index, _startIndex_1(_self)), 1),
        _value,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("atPut: invalid index: ", _index),
      );
    });
  },
  "{ :self :index :value |\n\t\tself.includesIndex(index).if {\n\t\t\tself.contents[index + self.startIndex - 1] := value\n\t\t} {\n\t\t\tself.error('atPut: invalid index: ' ++ index)\n\t\t}\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _items = _contents_1(_self);
    /* Statements */
    return _toDo_3(_startIndex_1(_self), _endIndex_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_at_2(_items, _index));
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet items = self.contents;\n\t\tself.startIndex.toDo(self.endIndex) { :index |\n\t\t\taBlock(items[index])\n\t\t}\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "endIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_plusSign_2(_startIndex_1(_self), _size_1(_self)), 1);
  },
  "{ :self |\n\t\tself.startIndex + self.size - 1\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%.sliceFromTo(%, %)", [
      _printString_1(_contents_1(_self)),
      _startIndex_1(_self),
      _endIndex_1(_self),
    ]);
  },
  "{ :self |\n\t\t'%.sliceFromTo(%, %)'.format([\n\t\t\tself.contents.printString,\n\t\t\tself.startIndex,\n\t\t\tself.endIndex\n\t\t])\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "Slice>>storeString: do not store slices");
  },
  "{ :self |\n\t\tself.error('Slice>>storeString: do not store slices')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Slice",
  "Slice",
  ["self", "startIndex", "size"],
  function (_self, _startIndex, _size) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _size";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newSlice_0(), _self, _startIndex, _size);
  },
  "{ :self :startIndex :size |\n\t\tnewSlice().initializeSlots(self, startIndex, size)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Slice",
  "sliceFromTo",
  ["self", "startIndex", "endIndex"],
  function (_self, _startIndex, _endIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _endIndex";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Slice_3(
      _self,
      _startIndex,
      _plusSign_2(_hyphenMinus_2(_endIndex, _startIndex), 1),
    );
  },
  "{ :self :startIndex :endIndex |\n\t\tSlice(self, startIndex, endIndex - startIndex + 1)\n\t}",
);
