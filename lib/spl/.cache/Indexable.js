/*  Require: Object  */

sl.addTrait("Indexable", "Indexable");

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "commercialAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, _index);
  }, ["self", "index"]),
  "{ :self :index | at(self, index) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "commercialAtAsterisk",
  ["self", "indexList"],
  sl.annotateFunction(function (_self, _indexList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indexList";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_self, _indexList);
  }, ["self", "indexList"]),
  "{ :self :indexList | atAll(self,indexList) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "commercialAtGreaterThanSign",
  ["self", "path"],
  sl.annotateFunction(function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPath_2(_self, _path);
  }, ["self", "path"]),
  "{ :self :path | atPath(self,path) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "commercialAtSolidus",
  ["self", "pathString"],
  sl.annotateFunction(function (_self, _pathString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pathString";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPath_2(_self, _splitBy_2(_pathString, "/"));
  }, ["self", "pathString"]),
  "{ :self :pathString | atPath(self,splitBy(pathString,'/')) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "assertIsOfSize",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_self), _anInteger);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | assert(self, { =(size(self), anInteger) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "assertIsValidIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _index;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "@Indexable>>assertIsValidIndex: no such index: ",
            _index,
          ),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if(includesIndex(self,index), { index }, { error(self,++('@Indexable>>assertIsValidIndex: no such index: ', index)) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Indexable>>at: invalid index");
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | atIfAbsent(self, index, { error(self,'@Indexable>>at: invalid index') }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "at",
  ["self", "primaryIndex", "secondaryIndex"],
  sl.annotateFunction(function (_self, _primaryIndex, _secondaryIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _primaryIndex, _secondaryIndex";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_at_2(_self, _primaryIndex), _secondaryIndex);
  }, ["self", "primaryIndex", "secondaryIndex"]),
  "{ :self :primaryIndex :secondaryIndex | at(at(self,primaryIndex),secondaryIndex) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "at",
  ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex"],
  sl.annotateFunction(
    function (_self, _primaryIndex, _secondaryIndex, _tertiaryIndex) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(
        _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
        _tertiaryIndex,
      );
    },
    ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex"],
  ),
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex | at(at(at(self,primaryIndex),secondaryIndex),tertiaryIndex) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "at",
  [
    "self",
    "primaryIndex",
    "secondaryIndex",
    "tertiaryIndex",
    "quaternaryIndex",
  ],
  sl.annotateFunction(
    function (
      _self,
      _primaryIndex,
      _secondaryIndex,
      _tertiaryIndex,
      _quaternaryIndex,
    ) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex, _quaternaryIndex";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(
        _at_2(
          _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
          _tertiaryIndex,
        ),
        _quaternaryIndex,
      );
    },
    [
      "self",
      "primaryIndex",
      "secondaryIndex",
      "tertiaryIndex",
      "quaternaryIndex",
    ],
  ),
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex | at(at(at(at(self,primaryIndex),secondaryIndex),tertiaryIndex),quaternaryIndex) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atAllPut",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _indices_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _anObject);
      }, ["index"]),
    );
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | do(indices(self), { :index | atPut(self, index, anObject) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atAllPut",
  ["self", "indices", "anObject"],
  sl.annotateFunction(function (_self, _indices, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _indices,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _anObject);
      }, ["index"]),
    );
    return _anObject;
  }, ["self", "indices", "anObject"]),
  "{ :self :indices :anObject | do(indices, { :index | atPut(self, index, anObject) }); anObject }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atAllPutAll",
  ["self", "indices", "values"],
  sl.annotateFunction(function (_self, _indices, _values) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _values";
      throw new Error(errorMessage);
    } /* Statements */
    _withDo_3(
      _indices,
      _values,
      sl.annotateFunction(function (_index, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _index, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _value);
      }, ["index", "value"]),
    );
    return _values;
  }, ["self", "indices", "values"]),
  "{ :self :indices :values | withDo(indices, values, { :index :value | atPut(self, index, value) }); values }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Indexable>>atIfPresentIfAbsent");
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 | typeResponsibility(self,'@Indexable>>atIfPresentIfAbsent') }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atIfAbsentPut",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _index, _ifAbsent_0());
      }, []),
    );
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 | atIfAbsent(self, index, { atPut(self, index, ifAbsent()) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atIfPresent",
  ["self", "index", "ifPresent:/1"],
  sl.annotateFunction(function (_self, _index, _ifPresent_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifPresent_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _index,
      _ifPresent_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "index", "ifPresent:/1"]),
  "{ :self :index :ifPresent:/1 | atIfPresentIfAbsent(self,index, ifPresent:/1, { nil }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atIfPresentIfAbsent",
  ["self", "index", "ifPresent:/1", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _ifPresent_1, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _isPresent = true;
    let _answer = _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _isPresent = false;
        return _ifAbsent_0();
      }, []),
    );
    /* Statements */
    return _if_3(
      _isPresent,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_answer);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
    );
  }, ["self", "index", "ifPresent:/1", "ifAbsent:/0"]),
  "{ :self :index :ifPresent:/1 :ifAbsent:/0 | let isPresent = true; let answer = atIfAbsent(self, index, { isPresent := false; ifAbsent() }); if(isPresent, { ifPresent(answer) }, { answer }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atIncrementBy",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_self, _index, _plusSign_2(_at_2(_self, _index), _value));
  }, ["self", "index", "value"]),
  "{ :self :index :value | atPut(self, index, +(at(self, index), value)) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atLinear",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPath_2(_self, _cartesianIndex_2(_shape_1(_self), _index));
  }, ["self", "index"]),
  "{ :self :index | atPath(self,cartesianIndex(shape(self),index)) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atMissing",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Missing_2("NotAvailable", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | atIfAbsent(self, index, { Missing('NotAvailable', index) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atModify",
  ["self", "index", "aBlock:/1"],
  sl.annotateFunction(function (_self, _index, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPut_3(_self, _index, _aBlock_1(_at_2(_self, _index)));
  }, ["self", "index", "aBlock:/1"]),
  "{ :self :index :aBlock:/1 | atPut(self, index, aBlock(at(self, index))) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atNil",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | atIfAbsent(self, index, { nil }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPath",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _item = _self;
    /* Statements */
    return _ifEmpty_3(
      _indices,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "atPath: empty indices");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(
          _indices,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _item = _at_2(_item, _index);
          }, ["index"]),
        );
        return _item;
      }, []),
    );
  }, ["self", "indices"]),
  "{ :self :indices | let item = self; ifEmpty(indices, { error(self,'atPath: empty indices') }, { do(indices, { :index | item := at(item, index) }); item }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPathPut",
  ["self", "indices", "value"],
  sl.annotateFunction(function (_self, _indices, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _item = _self;
    /* Statements */
    return _ifEmpty_3(
      _indices,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "atPath: empty indices");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_size_1(_indices), 1),
          sl.annotateFunction(function (_indicesIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _indicesIndex";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _index = _at_2(_indices, _indicesIndex);
            /* Statements */
            return _item = _at_2(_item, _index);
          }, ["indicesIndex"]),
        );
        return _atPut_3(_item, _last_1(_indices), _value);
      }, []),
    );
  }, ["self", "indices", "value"]),
  "{ :self :indices :value | let item = self; ifEmpty(indices, { error(self,'atPath: empty indices') }, { toDo(1, -(size(indices), 1), { :indicesIndex | let index = at(indices, indicesIndex); item := at(item, index) }); atPut(item, last(indices), value) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Indexable>>atPut");
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject | typeResponsibility(self,'@Indexable>>atPut') }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "primaryIndex", "secondaryIndex", "anObject"],
  sl.annotateFunction(
    function (_self, _primaryIndex, _secondaryIndex, _anObject) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _primaryIndex, _secondaryIndex, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(_at_2(_self, _primaryIndex), _secondaryIndex, _anObject);
    },
    ["self", "primaryIndex", "secondaryIndex", "anObject"],
  ),
  "{ :self :primaryIndex :secondaryIndex :anObject | atPut(at(self,primaryIndex),secondaryIndex, anObject) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex", "anObject"],
  sl.annotateFunction(
    function (
      _self,
      _primaryIndex,
      _secondaryIndex,
      _tertiaryIndex,
      _anObject,
    ) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(
        _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
        _tertiaryIndex,
        _anObject,
      );
    },
    ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex", "anObject"],
  ),
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :anObject | atPut(at(at(self,primaryIndex),secondaryIndex),tertiaryIndex, anObject) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atPut",
  [
    "self",
    "primaryIndex",
    "secondaryIndex",
    "tertiaryIndex",
    "quaternaryIndex",
    "anObject",
  ],
  sl.annotateFunction(
    function (
      _self,
      _primaryIndex,
      _secondaryIndex,
      _tertiaryIndex,
      _quaternaryIndex,
      _anObject,
    ) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex, _quaternaryIndex, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(
        _at_2(
          _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
          _tertiaryIndex,
        ),
        _quaternaryIndex,
        _anObject,
      );
    },
    [
      "self",
      "primaryIndex",
      "secondaryIndex",
      "tertiaryIndex",
      "quaternaryIndex",
      "anObject",
    ],
  ),
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex :anObject | atPut(at(at(at(self,primaryIndex),secondaryIndex),tertiaryIndex),quaternaryIndex, anObject) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "deepIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepIndices_2(_self, _constant_1(true));
  }, ["self"]),
  "{ :self | deepIndices(self,constant(true)) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "deepIndices",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepIndicesStartingAtDo_3(
      _self,
      [],
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
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
            return _add_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; deepIndicesStartingAtDo(self, [], { :each :index | ifTrue(aBlock(each), { add(answer,index) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "deepIndicesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _withDeepIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_each, _anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject | let answer = []; withDeepIndexDo(self, { :each :index | ifTrue((=(each, anObject)), { add(answer,index) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "deepIndicesStartingAtDo",
  ["self", "startIndex", "aBlock:/2"],
  sl.annotateFunction(function (_self, _startIndex, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _here = _plusSignPlusSign_2(_startIndex, [_index]);
        /* Statements */
        return _if_3(
          _equalsSign_2(_typeOf_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deepIndicesStartingAtDo_3(_each, _here, _aBlock_2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _here);
          }, []),
        );
      }, ["each", "index"]),
    );
  }, ["self", "startIndex", "aBlock:/2"]),
  "{ :self :startIndex :aBlock:/2 | let type = typeOf(self); withIndexDo(self, { :each :index | let here = ++(startIndex, [index]); if((=(typeOf(each), type)), { deepIndicesStartingAtDo(each,here, aBlock:/2) }, { aBlock(each, here) }) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "errorInvalidIndex",
  ["self", "for", "index"],
  sl.annotateFunction(function (_self, _for, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _for, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _unwords_1([
        "errorInvalidIndex: index not correct type or out of range.",
        "index:",
        _asString_1(_index),
        "for:",
        _for,
        "index.typeOf:",
        _typeOf_1(_index),
        "self.size:",
        _asString_1(_size_1(_self)),
      ]),
    );
  }, ["self", "for", "index"]),
  "{ :self :for :index | error(self,unwords(['errorInvalidIndex: index not correct type or out of range.', 'index:', asString(index), 'for:', for, 'index.typeOf:', typeOf(index), 'self.size:', asString(size(self))])) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "includesIndex",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_indices_1(_self), _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | includes(indices(self),anObject) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indexOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOfIfAbsent_3(
      _self,
      _anObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Indexable>>indexOf: no such element");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | indexOfIfAbsent(self, anObject, { error(self,'@Indexable>>indexOf: no such element') }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indexOfIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _indices_1(_self),
        sl.annotateFunction(function (_index) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _index";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_at_2(_self, _index), _anObject),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_index);
            }, []),
          );
        }, ["index"]),
      );
      return _aBlock_0();
    }, ["return:/1"]));
  }, ["self", "anObject", "aBlock:/0"]),
  "{ :self :anObject :aBlock:/0 | valueWithReturn({ :return:/1 | do(indices(self), { :index | ifTrue((=(at(self, index), anObject)), { return(index) }) }); aBlock() }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Indexable>>indices");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'@Indexable>>indices') }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indices",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
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
            return _add_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | let answer = []; withIndexDo(self, { :each :index | ifTrue(aBlock(each), { add(answer,index) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indicesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_each, _anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject | let answer = []; withIndexDo(self, { :each :index | ifTrue((=(each, anObject)), { add(answer,index) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indicesSorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _indices_1(_self);
    /* Statements */
    _sort_1(_answer);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = indices(self); sort(answer); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "indicesDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_indices_1(_self), _aBlock_1);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | do(indices(self),aBlock:/1) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "isIndexable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "positionIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Map_0();
    /* Statements */
    _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesKey_2(_answer, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_at_2(_answer, _each), _index);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_answer, _each, [_index]);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Map(); withIndexDo(self, { :each :index | if(includesKey(answer,each), { add(at(answer,each),index) }, { atPut(answer,each, [index]) }) }); answer }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "withDeepIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  sl.annotateFunction(function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _deepIndices_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _elementAndIndexBlock_2(_atPath_2(_self, _index), _index);
      }, ["index"]),
    );
  }, ["self", "elementAndIndexBlock:/2"]),
  "{ :self :elementAndIndexBlock:/2 | do(deepIndices(self), { :index | elementAndIndexBlock(atPath(self,index), index) }) }",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "withIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  sl.annotateFunction(function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _indices_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _elementAndIndexBlock_2(_at_2(_self, _index), _index);
      }, ["index"]),
    );
  }, ["self", "elementAndIndexBlock:/2"]),
  "{ :self :elementAndIndexBlock:/2 | do(indices(self), { :index | elementAndIndexBlock(at(self, index), index) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Indexable",
  "isIndexable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);
