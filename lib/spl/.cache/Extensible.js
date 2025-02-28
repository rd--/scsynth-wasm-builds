sl.addTrait("Extensible", "Extensible");

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "add",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Extensible>>add");
  },
  "{ :self :anObject | typeResponsibility(self,'@Extensible>>add') }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _each);
    });
  },
  "{ :self :aCollection | do(aCollection, { :each | add(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addAllIfNotPresent",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _addIfNotPresent_2(_self, _each);
    });
  },
  "{ :self :aCollection | do(aCollection, { :each | addIfNotPresent(self,each) }) }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _anObject);
    });
    return _anObject;
  },
  "{ :self :anObject | ifFalse(includes(self,anObject), { add(self,anObject) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addIfNotPresentBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_includesBy_3(_self, _anObject, _aBlock_2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _anObject);
    });
    return _anObject;
  },
  "{ :self :anObject :aBlock:/2 | ifFalse(includesBy(self,anObject, aBlock:/2), { add(self,anObject) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "addWithOccurrences",
  ["self", "newObject", "anInteger"],
  function (_self, _newObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _newObject);
    });
    return _newObject;
  },
  "{ :self :newObject :anInteger | timesRepeat(anInteger, { add(self,newObject) }); newObject }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_self, _aBlock_1(_each));
    });
  },
  "{ :self :aCollection :aBlock:/1 | do(aCollection, { :each | add(self,aBlock(each)) }) }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "ifAbsentAdd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_self, _anObject);
      return true;
    });
  },
  "{ :self :anObject | if(includes(self,anObject), { false }, { add(self,anObject); true }) }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_2(_self, _anObject);
  },
  "{ :self :anObject | add(self,anObject) }",
);

sl.addMethodToExistingTrait(
  "Extensible",
  "Extensible",
  "intersperse",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _doSeparatedBy_3(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _each);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _add_2(_answer, _anObject);
    });
    return _answer;
  },
  "{ :self :anObject | let answer = new(species(self)); doSeparatedBy(self, { :each | add(answer,each) }, { add(answer,anObject) }); answer }",
);
