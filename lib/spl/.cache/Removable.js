sl.addTrait("Removable", "Removable");

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "remove",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsent_3(_self, _oldObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _errorNotFound_2(_self, _oldObject);
    });
  },
  "{ :self :oldObject | removeIfAbsent(self, oldObject, { errorNotFound(self,oldObject) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _remove_2(_self, _each);
    });
  },
  "{ :self | do(self, { :each | remove(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(_equalsSignEqualsSign_2(_aCollection, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeAll_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _do_2(_aCollection, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _remove_2(_self, _each);
      });
    });
    return _aCollection;
  },
  "{ :self :aCollection | if((==(aCollection, self)), { removeAll(self) }, { do(aCollection, { :each | remove(self,each) }) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllEqualTo",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_each, _oldObject);
    });
  },
  "{ :self :oldObject | removeAllSuchThat(self, { :each | =(each, oldObject) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllFoundIn",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _removeIfAbsent_3(_self, _each, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        }
      });
    });
    return _aCollection;
  },
  "{ :self :aCollection | do(aCollection, { :each | removeIfAbsent(self, each, {  }) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_copy_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _remove_2(_self, _each);
      });
    });
  },
  "{ :self :aBlock:/1 | do(copy(self), { :each | ifTrue(aBlock(each), { remove(self,each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock"],
  function (_self, _oldObject, _anExceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Removable>>removeIfAbsent");
  },
  "{ :self :oldObject :anExceptionBlock | typeResponsibility(self,'@Removable>>removeIfAbsent') }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "without",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_each, _oldObject);
    });
    return _self;
  },
  "{ :self :oldObject | removeAllSuchThat(self, { :each | =(each, oldObject) }); self }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "withoutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_aCollection, _each);
    });
    return _self;
  },
  "{ :self :aCollection | removeAllSuchThat(self, { :each | includes(aCollection,each) }); self }",
);
