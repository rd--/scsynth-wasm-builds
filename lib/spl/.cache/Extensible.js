sl.addTrait("Extensible", "Extensible");

sl.addTraitMethod(
  "Extensible",
  "Extensible",
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
    return _typeResponsibility_2(_self, "@Extensible>>add");
  },
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Extensible>>add')\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "addAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, _each);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.add(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "addAllIfNotPresent",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _addIfNotPresent_2(_self, _each);
    });
  },
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.addIfNotPresent(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "addIfNotPresent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, _anObject);
    });
    return _anObject;
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).ifFalse {\n\t\t\tself.add(anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "addWithOccurrences",
  ["self", "newObject", "anInteger"],
  function (_self, _newObject, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _newObject, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _timesRepeat_2(_anInteger, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, _newObject);
    });
    return _newObject;
  },
  "{ :self :newObject :anInteger |\n\t\tanInteger.timesRepeat {\n\t\t\tself.add(newObject)\n\t\t};\n\t\tnewObject\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "fillFromWith",
  ["self", "aCollection", "aBlock:/1"],
  function (_self, _aCollection, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, _aBlock_1(_each));
    });
  },
  "{ :self :aCollection :aBlock:/1 |\n\t\taCollection.do { :each |\n\t\t\tself.add(aBlock(each))\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "ifAbsentAdd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includes_2(_self, _anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _add_2(_self, _anObject);
      return true;
    });
  },
  "{ :self :anObject |\n\t\tself.includes(anObject).if {\n\t\t\tfalse\n\t\t} {\n\t\t\tself.add(anObject);\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "include",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _add_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.add(anObject)\n\t}",
);

sl.addTraitMethod(
  "Extensible",
  "Extensible",
  "intersperse",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _new_1(_species_1(_self));
    /* Statements */
    _doSeparatedBy_3(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _anObject);
    });
    return _answer;
  },
  "{ :self :anObject |\n\t\tlet answer = self.species.new;\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add(each)\n\t\t} {\n\t\t\tanswer.add(anObject)\n\t\t};\n\t\tanswer\n\t}",
);
