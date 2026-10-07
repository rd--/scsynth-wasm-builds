sl.addTrait("Extensible", "Extensible");

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Extensible>>add!");
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Extensible>>add!')\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAllInPlace",
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
        return _addInPlace_2(_self, _each);
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.add!(each)\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAllIfNotPresentInPlace",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
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
        return _addIfNotPresentInPlace_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.addIfNotPresent!(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresentInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _includes_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_self, _anObject);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includes(anObject).ifFalse {\n\t\t\tself.add!(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresentByInPlace",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _includesBy_3(_self, _anObject, _aBlock_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_self, _anObject);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tself.includesBy(anObject, aBlock/2).ifFalse {\n\t\t\tself.add!(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addWithOccurrencesInPlace",
  ["self", "newObject", "anInteger"],
  sl.annotateFunction(function (_self, _newObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _anInteger,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_self, _newObject);
      }, []),
    );
    return _newObject;
  }, ["self", "newObject", "anInteger"]),
  "{ :self :newObject :anInteger |\n\t\tanInteger.timesRepeat {\n\t\t\tself.add!(newObject)\n\t\t};\n\t\tnewObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "fillFromWith",
  ["self", "aCollection", "aBlock/1"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
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
        return _addInPlace_2(_self, _aBlock_1(_each));
      }, ["each"]),
    );
  }, ["self", "aCollection", "aBlock/1"]),
  "{ :self :aCollection :aBlock/1 |\n\t\taCollection.do { :each |\n\t\t\tself.add!(aBlock(each))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "ifAbsentAddInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_self, _anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addInPlace_2(_self, _anObject);
        return true;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.add!(anObject);\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "includeInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addInPlace_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t/* self.typeResponsibility('@Extensible>>include') */\n\t\tself.add!(anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "includeAllInPlace",
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
        return _includeInPlace_2(_self, _each);
      }, ["each"]),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.include!(each)\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "intersperse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_1(_species_1(_self));
    _doSeparatedBy_3(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _each);
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _anObject);
      }, []),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet answer = self.species.new;\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add!(each)\n\t\t} {\n\t\t\tanswer.add!(anObject)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
  "removeIfAbsentInPlace",
  ["self", "oldObject", "anExceptionBlock"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Extensible>>removeIfAbsent!");
  }, ["self", "oldObject", "anExceptionBlock"]),
  "{ :self :oldObject :anExceptionBlock |\n\t\tself.typeResponsibility('@Extensible>>removeIfAbsent!')\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "union",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _copy_1(_self);
    _includeAllInPlace_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.includeAll!(aCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
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
  "Extensible",
  "Extensible",
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
