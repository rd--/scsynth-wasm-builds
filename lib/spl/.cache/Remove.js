sl.addTrait("@Remove", "Remove");

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "remove",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _copy_1(_self);
    _removeInPlace_2(_answer, _oldObject);
    return _answer;
  }, ["self", "oldObject"]),
  "{ :self :oldObject |\n\t\tlet answer = self.copy;\n\t\tanswer.remove!(oldObject);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeInPlace",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeIfAbsentInPlace_3(
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
  "{ :self :oldObject |\n\t\tself.removeIfAbsent!(oldObject) {\n\t\t\tself.errorNotFound(oldObject)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeAllInPlace",
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
        return _removeInPlace_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.do { :each |\n\t\t\tself.remove!(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeAllInPlace",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSignEqualsSign_2(_aCollection, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAllInPlace_1(_self);
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
            return _removeInPlace_2(_self, _each);
          }, ["each"]),
        );
      }, []),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\t(aCollection == self).if {\n\t\t\tself.removeAll!\n\t\t} {\n\t\t\taCollection.do { :each |\n\t\t\t\tself.remove!(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeAllEqualToInPlace",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _removeAllSuchThatInPlace_2(
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
  "{ :self :oldObject |\n\t\tself.removeAllSuchThat! { :each |\n\t\t\teach = oldObject\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeAllFoundInInPlace",
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
        return _removeIfAbsentInPlace_3(
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
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.removeIfAbsent!(each) {\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeAllSuchThatInPlace",
  ["self", "aBlock/1"],
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
            return _removeInPlace_2(_self, _each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.copy.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tself.remove!(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "removeIfAbsentInPlace",
  ["self", "oldObject", "anExceptionBlock"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Remove>>removeIfAbsent!");
  }, ["self", "oldObject", "anExceptionBlock"]),
  "{ :self :oldObject :anExceptionBlock |\n\t\tself.typeResponsibility('@Remove>>removeIfAbsent!')\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "withoutInPlace",
  ["self", "oldObject"],
  sl.annotateFunction(function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThatInPlace_2(
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
  "{ :self :oldObject |\n\t\tself.removeAllSuchThat! { :each |\n\t\t\teach = oldObject\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "@Remove",
  "Remove",
  "withoutAllInPlace",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _removeAllSuchThatInPlace_2(
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
  "{ :self :aCollection |\n\t\tself.removeAllSuchThat! { :each |\n\t\t\taCollection.includes(each)\n\t\t};\n\t\tself\n\t}",
);
