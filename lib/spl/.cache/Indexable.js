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
  "{ :self :index |\n\t\tself.at(index)\n\t}",
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
  "{ :self :indexList |\n\t\tself.atAll(indexList)\n\t}",
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
  "{ :self :path |\n\t\tself.atPath(path)\n\t}",
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
  "{ :self :pathString |\n\t\tself.atPath(\n\t\t\tpathString.splitBy('/')\n\t\t)\n\t}",
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
  "{ :self :anInteger |\n\t\tself.assert {\n\t\t\tself.size = anInteger\n\t\t}\n\t}",
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
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tindex\n\t\t} {\n\t\t\tself.error('@Indexable>>assertIsValidIndex: no such index: ' ++ index)\n\t\t}\n\t}",
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
        return _error_2(
          _self,
          _plusSignPlusSign_2("@Indexable>>at: invalid index: ", _index),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tself.error('@Indexable>>at: invalid index: ' ++ index)\n\t\t}\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex)\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex)\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex).at(quaternaryIndex)\n\t}",
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
    _indicesDo_2(
      _self,
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
  "{ :self :anObject |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
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
  "{ :self :indices :anObject |\n\t\tindices.do { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
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
  "{ :self :indices :values |\n\t\tindices.withDo(values) { :index :value |\n\t\t\tself[index] := value\n\t\t};\n\t\tvalues\n\t}",
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
  "{ :self :index :ifAbsent:/0 |\n\t\tself.typeResponsibility('@Indexable>>atIfPresentIfAbsent')\n\t}",
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
  "{ :self :index :ifAbsent:/0 |\n\t\tself.atIfAbsent(index) {\n\t\t\tself[index] := ifAbsent()\n\t\t}\n\t}",
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
  "{ :self :index :ifPresent:/1 |\n\t\tself.atIfPresentIfAbsent(\n\t\t\tindex,\n\t\t\tifPresent:/1,\n\t\t\t{ nil }\n\t\t)\n\t}",
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
  "{ :self :index :ifPresent:/1 :ifAbsent:/0 |\n\t\tlet isPresent = true;\n\t\tlet answer = self.atIfAbsent(index) {\n\t\t\tisPresent := false;\n\t\t\tifAbsent()\n\t\t};\n\t\tisPresent.if {\n\t\t\tifPresent(answer)\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
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
  "{ :self :index :value |\n\t\tself[index] := self[index] + value\n\t}",
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
  "{ :self :index |\n\t\tself.atPath(self.shape.cartesianIndex(index))\n\t}",
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
  "{ :self :index :aBlock:/1 |\n\t\tself[index] := aBlock(self[index])\n\t}",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atOrMissing",
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
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tMissing('NotAvailable', index)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "atOrNil",
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
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tnil\n\t\t}\n\t}",
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
  "{ :self :indices |\n\t\tlet item = self;\n\t\tindices.ifEmpty {\n\t\t\tself.error('atPath: empty indices')\n\t\t} {\n\t\t\tindices.do { :index |\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem\n\t\t}\n\t}",
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
  "{ :self :indices :value |\n\t\tlet item = self;\n\t\tindices.ifEmpty {\n\t\t\tself.error('atPath: empty indices')\n\t\t} {\n\t\t\t1.toDo(indices.size - 1) { :indicesIndex |\n\t\t\t\tlet index = indices[indicesIndex];\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem[indices.last] := value\n\t\t}\n\t}",
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
  "{ :self :index :anObject |\n\t\tself.typeResponsibility('@Indexable>>atPut')\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex :anObject |\n\t\tself.at(primaryIndex).atPut(secondaryIndex, anObject)\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).atPut(tertiaryIndex, anObject)\n\t}",
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
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex).atPut(quaternaryIndex, anObject)\n\t}",
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
  "{ :self |\n\t\tself.deepIndices(true.constant)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.deepIndicesStartingAtDo([]) { :each :index |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :anObject |\n\t\tlet answer = [];\n\t\tself.withDeepIndexDo { :each :index |\n\t\t\t(each = anObject).ifTrue {\n\t\t\t\tanswer.add(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :startIndex :aBlock:/2 |\n\t\tlet type = self.typeOf;\n\t\tself.withIndexDo { :each :index |\n\t\t\tlet here = startIndex ++ [index];\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepIndicesStartingAtDo(here, aBlock:/2)\n\t\t\t} {\n\t\t\t\taBlock(each, here)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :for :index |\n\t\tself.error(\n\t\t\t[\n\t\t\t\t'errorInvalidIndex: index not correct type or out of range.',\n\t\t\t\t'index:', index.asString,\n\t\t\t\t'for:', for,\n\t\t\t\t'index.typeOf:', index.typeOf,\n\t\t\t\t'self.size:', self.size.asString\n\t\t\t].unwords\n\t\t)\n\t}",
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
  "{ :self :anObject |\n\t\tself.indices.includes(anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "includesIndices",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesAll_2(_indices_1(_self), _aCollection);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.indices.includesAll(aCollection)\n\t}",
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
  "{ :self :anObject |\n\t\tself.indexOfIfAbsent(anObject) {\n\t\t\tself.error('@Indexable>>indexOf: no such element')\n\t\t}\n\t}",
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
      _indicesDo_2(
        _self,
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
  "{ :self :anObject :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.indicesDo { :index |\n\t\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.typeResponsibility('@Indexable>>indices')\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tlet answer = [];\n\t\tself.withIndexDo { :each :index |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
    } /* Statements */
    return _indices_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _anObject);
      }, ["each"]),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.indices { :each | each = anObject }\n\t}",
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
  "{ :self |\n\t\tlet answer = self.indices;\n\t\tanswer.sort;\n\t\tanswer\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tself.indices.do(aBlock:/1)\n\t}",
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
  "{ :self |\n\t\ttrue\n\t}",
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
  "{ :self |\n\t\tlet answer = Map();\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer.includesKey(each).if {\n\t\t\t\tanswer.at(each).add(index)\n\t\t\t} {\n\t\t\t\tanswer.atPut(each, [index])\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "positionSmallest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _min_1(_self);
    /* Statements */
    return _indicesOf_2(_self, _x);
  }, ["self"]),
  "{ :self |\n\t\tlet x = self.min;\n\t\tself.indicesOf(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Indexable",
  "Indexable",
  "positionSmallest",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _sorted_1(_self);
    /* Statements */
    return _collect_2(
      _to_2(1, _n),
      sl.annotateFunction(function (_y) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _y";
          throw new Error(errorMessage);
        } /* Statements */
        return _indicesOf_2(_self, _at_2(_x, _y));
      }, ["y"]),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet x = self.sorted;\n\t\t1.to(n).collect { :y |\n\t\t\tself.indicesOf(x[y])\n\t\t}\n\t}",
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
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.deepIndices.do { :index |\n\t\t\telementAndIndexBlock(self.atPath(index), index)\n\t\t}\n\t}",
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
    return _indicesDo_2(
      _self,
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
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.indicesDo { :index |\n\t\t\telementAndIndexBlock(self[index], index)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tfalse\n\t}",
);
