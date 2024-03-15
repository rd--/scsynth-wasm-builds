sl.addType(
  false,
  "Slice",
  "Slice",
  ["Object", "Iterable", "Indexable", "Collection", "Sequence"],
  ["contents", "firstIndex", "lastIndex"],
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asList_1(
      _copyFromTo_3(
        _contents_1(_self),
        _firstIndex_1(_self),
        _lastIndex_1(_self),
      ),
    );
  },
  "{ :self |\n\t\tself.contents.copyFromTo(self.firstIndex, self.lastIndex).asList\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.contents[index]\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_contents_1(_self), _index, _value);
  },
  "{ :self :index :value |\n\t\tself.contents[index] := value\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _items = _contents_1(_self);
    /* Statements */
    return _toDo_3(
      _firstIndex_1(_self),
      _lastIndex_1(_self),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_at_2(_items, _index));
      },
    );
  },
  "{ :self :aBlock:/1 |\n\t\tlet items = self.contents;\n\t\tself.firstIndex.toDo(self.lastIndex) { :index |\n\t\t\taBlock(items[index])\n\t\t}\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2(
            _plusSignPlusSign_2(_printString_1(_contents_1(_self)), ".slice("),
            _firstIndex_1(_self),
          ),
          ", ",
        ),
        _lastIndex_1(_self),
      ),
      ")",
    );
  },
  "{ :self |\n\t\tself.contents.printString ++ '.slice(' ++ self.firstIndex ++ ', ' ++ self.lastIndex ++ ')'\n\t}",
);

sl.addMethod(
  "Slice",
  "Slice",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(_lastIndex_1(_self), _firstIndex_1(_self)),
      1,
    );
  },
  "{ :self |\n\t\tself.lastIndex - self.firstIndex + 1\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "Slice>>storeString: do not store slices");
  },
  "{ :self |\n\t\tself.error('Slice>>storeString: do not store slices')\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Slice",
  "slice",
  ["self", "firstIndex", "lastIndex"],
  function (_self, _firstIndex, _lastIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _firstIndex, _lastIndex";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newSlice_0(), _self, _firstIndex, _lastIndex);
  },
  "{ :self :firstIndex :lastIndex |\n\t\tnewSlice().initializeSlots(self, firstIndex, lastIndex)\n\t}",
);
