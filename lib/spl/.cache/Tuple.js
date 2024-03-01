/* {- Requires: List -} */

sl.addType(
  false,
  "Tuple",
  "Tuple",
  ["Object", "Iterable", "Indexable", "Collection", "Sequence"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Tuple",
);

sl.copyTraitToType(
  "Iterable",
  "Tuple",
);

sl.copyTraitToType(
  "Indexable",
  "Tuple",
);

sl.copyTraitToType(
  "Collection",
  "Tuple",
);

sl.copyTraitToType(
  "Sequence",
  "Tuple",
);

sl.addMethod(
  "Tuple",
  "Tuple",
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
    return _copy_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
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
  "Tuple",
  "Tuple",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_contents_1(_self), _index, _anObject);
  },
  "{ :self :index :anObject |\n\t\tself.contents[index] := anObject\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.asTuple\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.indices\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "isVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _noneSatisfy_2(_self, _isTuple_1);
  },
  "{ :self |\n\t\tself.noneSatisfy(isTuple:/1)\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
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
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Tuple_1;
  },
  "{ :self |\n\t\tTuple:/1\n\t}",
);

sl.addMethod(
  "Tuple",
  "Tuple",
  "storeString",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        "(",
        _joinSeparatedBy_2(_collect_2(_self, _storeString_1), ", "),
      ),
      ")",
    );
  },
  "{ :self:/1 |\n\t\t'(' ++ self.collect(storeString:/1).joinSeparatedBy(', ') ++ ')'\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tuple",
  "Tuple",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1(_List_1(_size));
  },
  "{ :size |\n\t\tList(size).asTuple\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Tuple",
  "Tuple",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1(_List_2(_size, _anObject));
  },
  "{ :size :anObject |\n\t\tList(size, anObject).asTuple\n\t}",
);

sl.addMethod(
  "List",
  "Tuple",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newTuple_0(), _copy_1(_self));
  },
  "{ :self |\n\t\tnewTuple().initializeSlots(self.copy)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Tuple",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1(_asList_1(_self));
  },
  "{ :self |\n\t\tself.asList.asTuple\n\t}",
);
