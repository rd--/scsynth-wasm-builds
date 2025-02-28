sl.addTrait("Ordered", "Ordered");

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addLast_2(_self, _anObject);
  },
  "{ :self :anObject | addLast(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addAfter",
  ["self", "newObject", "oldObject"],
  function (_self, _newObject, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _oldObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _insertAt_3(_self, _newObject, _plusSign_2(_index, 1));
  },
  "{ :self :newObject :oldObject | let index = indexOf(self,oldObject); insertAt(self,newObject, +(index, 1)) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addAfterIndex",
  ["self", "newObject", "index"],
  function (_self, _newObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_betweenAnd_3(_index, 0, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _insertAt_3(_self, _newObject, _plusSign_2(_index, 1));
      return _newObject;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _errorInvalidIndex_3(_self, "addAfterIndex", _index);
    });
  },
  "{ :self :newObject :index | if(betweenAnd(index,0, size(self)), { insertAt(self,newObject, +(index, 1)); newObject }, { errorInvalidIndex(self,'addAfterIndex', index) }) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addAllFirst",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _addListFirst_2(_self, _asList_1(_aCollection));
  },
  "{ :self :aCollection | addListFirst(self,asList(aCollection)) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addAllLast",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _addListLast_2(_self, _asList_1(_aCollection));
  },
  "{ :self :aCollection | addListLast(self,asList(aCollection)) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addBefore",
  ["self", "newObject", "oldObject"],
  function (_self, _newObject, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _oldObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _insertAt_3(_self, _newObject, _index);
  },
  "{ :self :newObject :oldObject | let index = indexOf(self,oldObject); insertAt(self,newObject, index) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "addBeforeIndex",
  ["self", "newObject", "index"],
  function (_self, _newObject, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_index, 1, _plusSign_2(_size_1(_self), 1)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _insertAt_3(_self, _newObject, _index);
        return _newObject;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "addBeforeIndex", _index);
      },
    );
  },
  "{ :self :newObject :index | if(betweenAnd(index,1, +(size(self), 1)), { insertAt(self,newObject, index); newObject }, { errorInvalidIndex(self,'addBeforeIndex', index) }) }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(_hyphenMinus_2(_aNumber, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, null);
    });
    return _self;
  },
  "{ :self :aNumber | timesRepeat((-(aNumber, size(self))), { add(self,nil) }); self }",
);

sl.addMethodToExistingTrait(
  "Ordered",
  "Ordered",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _if_3(_equalsSign_2(_index, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _anExceptionBlock_0();
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeAt_2(_self, _index);
    });
  },
  "{ :self :oldObject :anExceptionBlock:/0 | let index = indexOf(self,oldObject); if((=(index, 0)), { anExceptionBlock() }, { removeAt(self,index) }) }",
);
