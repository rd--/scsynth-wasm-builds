sl.addTrait("Ordered", "Ordered");

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addLast_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.addLast(anObject)\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addAfter",
  ["self", "newObject", "oldObject"],
  function (_self, _newObject, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _insertAt_3(_self, _newObject, _plusSign_2(_index, 1));
  },
  "{ :self :newObject :oldObject |\n\t\tlet index = self.indexOf(oldObject);\n\t\tself.insertAt(newObject, index + 1)\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addAfterIndex",
  ["self", "newObject", "index"],
  function (_self, _newObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_betweenAnd_3(_index, 0, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _insertAt_3(_self, _newObject, _plusSign_2(_index, 1));
      return _newObject;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorInvalidIndex_3(_self, "addAfterIndex", _index);
    });
  },
  "{ :self :newObject :index |\n\t\tindex.betweenAnd(0, self.size).if {\n\t\t\tself.insertAt(newObject, index + 1);\n\t\t\tnewObject\n\t\t} {\n\t\t\tself.errorInvalidIndex('addAfterIndex', index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addAllFirst",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addListFirst_2(_self, _asList_1(_aCollection));
  },
  "{ :self :aCollection |\n\t\tself.addListFirst(aCollection.asList)\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addAllLast",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _addListLast_2(_self, _asList_1(_aCollection));
  },
  "{ :self :aCollection |\n\t\tself.addListLast(aCollection.asList)\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addBefore",
  ["self", "newObject", "oldObject"],
  function (_self, _newObject, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _insertAt_3(_self, _newObject, _index);
  },
  "{ :self :newObject :oldObject |\n\t\tlet index = self.indexOf(oldObject);\n\t\tself.insertAt(newObject, index)\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "addBeforeIndex",
  ["self", "newObject", "index"],
  function (_self, _newObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _betweenAnd_3(_index, 1, _plusSign_2(_size_1(_self), 1)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _insertAt_3(_self, _newObject, _index);
        return _newObject;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _errorInvalidIndex_3(_self, "addBeforeIndex", _index);
      },
    );
  },
  "{ :self :newObject :index |\n\t\tindex.betweenAnd(1, self.size + 1).if {\n\t\t\tself.insertAt(newObject, index);\n\t\t\tnewObject\n\t\t} {\n\t\t\tself.errorInvalidIndex('addBeforeIndex', index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _timesRepeat_2(_hyphenMinus_2(_aNumber, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, null);
    });
    return _self;
  },
  "{ :self :aNumber |\n\t\t(aNumber - self.size).timesRepeat {\n\t\t\tself.add(nil)\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Ordered",
  "Ordered",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _if_3(_equalsSign_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _anExceptionBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeAt_2(_self, _index);
    });
  },
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tlet index = self.indexOf(oldObject);\n\t\t(index = 0).if {\n\t\t\tanExceptionBlock()\n\t\t} {\n\t\t\tself.removeAt(index)\n\t\t}\n\t}",
);
