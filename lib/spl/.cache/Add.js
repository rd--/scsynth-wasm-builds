sl.addTrait("Add", "Add");

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "addInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Add>>add!");
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.typeResponsibility('@Add>>add!')\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
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
  "Add",
  "Add",
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
  "Add",
  "Add",
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
  "Add",
  "Add",
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
  "Add",
  "Add",
  "addUtf8EncodedInPlace",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _addAllInPlace_2(_self, _utf8ByteArray_1(_aString));
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself.addAll!(aString.utf8ByteArray)\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
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
  "Add",
  "Add",
  "concatenation",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _copy_1(_self);
    _addAllInPlace_2(_answer, _assertIsCollection_1(_aCollection));
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.addAll!(aCollection.assertIsCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "plusSignPlusSign",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _copy_1(_self);
    _addAllInPlace_2(_answer, _assertIsCollection_1(_aCollection));
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.addAll!(aCollection.assertIsCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "copyWith",
  ["self", "newElement"],
  sl.annotateFunction(function (_self, _newElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newElement";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _copy_1(_self);
    _addInPlace_2(_answer, _newElement);
    return _answer;
  }, ["self", "newElement"]),
  "{ :self :newElement |\n\t\tlet answer = self.copy;\n\t\tanswer.add!(newElement);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "extendToSizeInPlace",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_aNumber, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_self, null);
      }, []),
    );
    return _self;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(aNumber - self.size).timesRepeat {\n\t\t\tself.add!(nil)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "fillFromWithInPlace",
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
  "Add",
  "Add",
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
  "Add",
  "Add",
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
  "{ :self :anObject |\n\t\t/* self.typeResponsibility('@Add>>include!') */\n\t\tself.add!(anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
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
  "Add",
  "Add",
  "intersperse",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_1(_self);
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
  "{ :self :anObject |\n\t\tlet answer = self.new;\n\t\tself.doSeparatedBy { :each |\n\t\t\tanswer.add!(each)\n\t\t} {\n\t\t\tanswer.add!(anObject)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "select",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_1(_self);
    _do_2(
      _self,
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
            return _includeInPlace_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = self.new;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.include!(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
  "selectThenCollect",
  ["self", "selectBlock/1", "collectBlock/1"],
  sl.annotateFunction(function (_self, _selectBlock_1, _collectBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _collectBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _new_1(_self);
    _selectThenDo_3(
      _self,
      _selectBlock_1,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _collectBlock_1(_each));
      }, ["each"]),
    );
    return _answer;
  }, ["self", "selectBlock/1", "collectBlock/1"]),
  "{ :self :selectBlock/1 :collectBlock/1 |\n\t\tlet answer = self.new;\n\t\tself.selectThenDo(selectBlock/1) { :each |\n\t\t\tanswer.add!(collectBlock(each))\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Add",
  "Add",
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
