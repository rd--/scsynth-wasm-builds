/* {- Requires: Array -} */

sl.addType(
  false,
  "Vector",
  "Vector",
  ["Object", "Iterable", "Indexable", "Collection", "Sequenceable", "Arrayed"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Vector",
);

sl.copyTraitToType(
  "Iterable",
  "Vector",
);

sl.copyTraitToType(
  "Indexable",
  "Vector",
);

sl.copyTraitToType(
  "Collection",
  "Vector",
);

sl.copyTraitToType(
  "Sequenceable",
  "Vector",
);

sl.copyTraitToType(
  "Arrayed",
  "Vector",
);

sl.addMethod(
  "Vector",
  "Vector",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copy_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_contents_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.contents[index]\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_contents_1(_self), _index, _anObject);
  },
  "{ :self :index :anObject |\n\t\tself.contents[index] := anObject\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asVector_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.asVector\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_contents_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1)\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indices_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.indices\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_contents_1(_self));
  },
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Vector_1;
  },
  "{ :self |\n\t\tVector:/1\n\t}",
);

sl.addMethod(
  "Vector",
  "Vector",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_storeString_1(_contents_1(_self)), ".asVector");
  },
  "{ :self |\n\t\tself.contents.storeString ++ '.asVector'\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Vector",
  "Vector",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asVector_1(_Array_1(_size));
  },
  "{ :size |\n\t\tArray(size).asVector\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Vector",
  "Vector",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asVector_1(_Array_2(_size, _anObject));
  },
  "{ :size :anObject |\n\t\tArray(size, anObject).asVector\n\t}",
);

sl.addMethod(
  "Array",
  "Vector",
  "asVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newVector_0(), _copy_1(_self));
  },
  "{ :self |\n\t\tnewVector().initializeSlots(self.copy)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Vector",
  "asVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asVector_1(_asArray_1(_self));
  },
  "{ :self |\n\t\tself.asArray.asVector\n\t}",
);
