sl.addTrait("Extensible", "Extensible");

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "add",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Extensible>>add");
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Extensible>>add')\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAll",
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
        return _add_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.add(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAllIfNotPresent",
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
        return _addIfNotPresent_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.addIfNotPresent(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresent",
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
        return _add_2(_self, _anObject);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includes(anObject).ifFalse {\n\t\t\tself.add(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresentBy",
  ["self", "anObject", "aBlock:/2"],
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
        return _add_2(_self, _anObject);
      }, []),
    );
    return _anObject;
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself.includesBy(anObject, aBlock:/2).ifFalse {\n\t\t\tself.add(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addWithOccurrences",
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
        return _add_2(_self, _newObject);
      }, []),
    );
    return _newObject;
  }, ["self", "newObject", "anInteger"]),
  "{ :self :newObject :anInteger |\n\t\tanInteger.timesRepeat {\n\t\t\tself.add(newObject)\n\t\t};\n\t\tnewObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
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
        return _add_2(_self, _aBlock_1(_each));
      }, ["each"]),
    );
  }, ["self", "aCollection", "aBlock:/1"]),
  "{ :self :aCollection :aBlock:/1 |\n\t\taCollection.do { :each |\n\t\t\tself.add(aBlock(each))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "ifAbsentAdd",
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
        _add_2(_self, _anObject);
        return true;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.add(anObject);\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "include",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\t/* self.typeResponsibility('@Extensible>>include') */\n\t\tself.add(anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "includeAll",
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
        return _include_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.include(each)\n\t\t}\n\t}",
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
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _doSeparatedBy_3(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _anObject);
      }, []),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet answer = self.species.new;\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add(each)\n\t\t} {\n\t\t\tanswer.add(anObject)\n\t\t};\n\t\tanswer\n\t}",
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
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _includeAll_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.includeAll(aCollection);\n\t\tanswer\n\t}",
);
