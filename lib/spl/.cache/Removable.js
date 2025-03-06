sl.addTrait("Removable", "Removable");

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "remove",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsent_3(
      _self,
      _oldObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorNotFound_2(_self, _oldObject);
      }, []),
    );
  }, ["self", "oldObject"]),
  "{ :self :oldObject | removeIfAbsent(self, oldObject, { errorNotFound(self,oldObject) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _remove_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | do(self, { :each | remove(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _equalsSignEqualsSign_2(_aCollection, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAll_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aCollection,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _remove_2(_self, _each);
          }, ["each"]),
        );
      }, []),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | if((==(aCollection, self)), { removeAll(self) }, { do(aCollection, { :each | remove(self,each) }) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllEqualTo",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllSuchThat_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _oldObject);
      }, ["each"]),
    );
  }, ["self", "oldObject"]),
  "{ :self :oldObject | removeAllSuchThat(self, { :each | =(each, oldObject) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllFoundIn",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeIfAbsent_3(
          _self,
          _each,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            }
          }, []),
        );
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | do(aCollection, { :each | removeIfAbsent(self, each, {  }) }); aCollection }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _copy_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _remove_2(_self, _each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(copy(self), { :each | ifTrue(aBlock(each), { remove(self,each) }) }) }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Removable>>removeIfAbsent");
  }, ["self", "oldObject", "anExceptionBlock"]),
  "{ :self :oldObject :anExceptionBlock | typeResponsibility(self,'@Removable>>removeIfAbsent') }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "without",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThat_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _oldObject);
      }, ["each"]),
    );
    return _self;
  }, ["self", "oldObject"]),
  "{ :self :oldObject | removeAllSuchThat(self, { :each | =(each, oldObject) }); self }",
);

sl.addMethodToExistingTrait(
  "Removable",
  "Removable",
  "withoutAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThat_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
    return _self;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | removeAllSuchThat(self, { :each | includes(aCollection,each) }); self }",
);
