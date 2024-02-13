/* {- Require: Object -} */

sl.addTrait("Indexable", "Indexable");

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "commercialAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _index);
  },
  "{ :self :index |\n\t\tself[index]\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "commercialAtGreaterThanSign",
  ["self", "path"],
  function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPath_2(_self, _path);
  },
  "{ :self :path |\n\t\tself.atPath(path)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "commercialAtSolidus",
  ["self", "pathString"],
  function (_self, _pathString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pathString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPath_2(_self, _splitBy_2(_pathString, "/"));
  },
  "{ :self :pathString |\n\t\tself.atPath(pathString.splitBy('/'))\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "assertIsValidIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _index;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2(
          "@Indexable>>assertIsValidIndex: no such index: ",
          _index,
        ),
      );
    });
  },
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tindex\n\t\t} {\n\t\t\tself.error('@Indexable>>assertIsValidIndex: no such index: ' ++ index)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Indexable>>at: type responsibility");
  },
  "{ :self :index |\n\t\tself.error('@Indexable>>at: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "at",
  ["self", "primaryIndex", "secondaryIndex"],
  function (_self, _primaryIndex, _secondaryIndex) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _primaryIndex, _secondaryIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_at_2(_self, _primaryIndex), _secondaryIndex);
  },
  "{ :self :primaryIndex :secondaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "at",
  ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex"],
  function (_self, _primaryIndex, _secondaryIndex, _tertiaryIndex) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(
      _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
      _tertiaryIndex,
    );
  },
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex)\n\t}",
);

sl.addTraitMethod(
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(
      _at_2(
        _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
        _tertiaryIndex,
      ),
      _quaternaryIndex,
    );
  },
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex).at(quaternaryIndex)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atAllPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _do_2(_indices_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _anObject);
    });
    return _anObject;
  },
  "{ :self :anObject |\n\t\tself.indices.do { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atAllPut",
  ["self", "indices", "anObject"],
  function (_self, _indices, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _do_2(_indices, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _anObject);
    });
    return _anObject;
  },
  "{ :self :indices :anObject |\n\t\tindices.do { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atAllPutAll",
  ["self", "indices", "values"],
  function (_self, _indices, _values) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _values";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _withDo_3(_indices, _values, function (_index, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _index, _value";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _value);
    });
    return _values;
  },
  "{ :self :indices :values |\n\t\tindices.withDo(values) { :index :value |\n\t\t\tself[index] := value\n\t\t};\n\t\tvalues\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atIfAbsent",
  ["self", "index", "aBlock:/0"],
  function (_self, _index, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, _index);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :index :aBlock:/0 |\n\t\tself.includesIndex(index).if {\n\t\t\tself[index]\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atIfAbsentPut",
  ["self", "index", "aBlock:/0"],
  function (_self, _index, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atIfAbsent_3(_self, _index, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_self, _index, _aBlock_0());
    });
  },
  "{ :self :index :aBlock:/0 |\n\t\tself.atIfAbsent(index) {\n\t\t\tself[index] := aBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atIfPresent",
  ["self", "index", "aBlock:/1"],
  function (_self, _index, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_at_2(_self, _index));
    });
  },
  "{ :self :index :aBlock:/1 |\n\t\tself.includesIndex(index).ifTrue {\n\t\t\taBlock(self[index])\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atIfPresentIfAbsent",
  ["self", "index", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _index, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _ifPresent_1, _ifAbsent_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifPresent_1(_at_2(_self, _index));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifAbsent_0();
    });
  },
  "{ :self :index :ifPresent:/1 :ifAbsent:/0 |\n\t\tself.includesIndex(index).if {\n\t\t\tifPresent(self[index])\n\t\t} {\n\t\t\tifAbsent()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atIncrementBy",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_self, _index, _plusSign_2(_at_2(_self, _index), _value));
  },
  "{ :self :index :value |\n\t\tself[index] := self[index] + value\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atModify",
  ["self", "index", "aBlock:/1"],
  function (_self, _index, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_self, _index, _aBlock_1(_at_2(_self, _index)));
  },
  "{ :self :index :aBlock:/1 |\n\t\tself[index] := aBlock(self[index])\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atPath",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _item = _self;
    /* Statements */
    return _ifEmpty_3(_indices, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "atPath: empty indices");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_indices, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _item = _at_2(_item, _index);
      });
      return _item;
    });
  },
  "{ :self :indices |\n\t\tlet item = self;\n\t\tindices.ifEmpty {\n\t\t\tself.error('atPath: empty indices')\n\t\t} {\n\t\t\tindices.do { :index |\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atPathPut",
  ["self", "indices", "value"],
  function (_self, _indices, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _item = _self;
    /* Statements */
    return _ifEmpty_3(_indices, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "atPath: empty indices");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _toDo_3(
        1,
        _hyphenMinus_2(_size_1(_indices), 1),
        function (_indicesIndex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _indicesIndex";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _index = _at_2(_indices, _indicesIndex);
          /* Statements */
          return _item = _at_2(_item, _index);
        },
      );
      return _atPut_3(_item, _last_1(_indices), _value);
    });
  },
  "{ :self :indices :value |\n\t\tlet item = self;\n\t\tindices.ifEmpty {\n\t\t\tself.error('atPath: empty indices')\n\t\t} {\n\t\t\t1.toDo(indices.size - 1) { :indicesIndex |\n\t\t\t\tlet index = indices[indicesIndex];\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem[indices.last] := value\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Indexable>>atPut: type responsibility");
  },
  "{ :self :index :anObject |\n\t\tself.error('@Indexable>>atPut: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "primaryIndex", "secondaryIndex", "anObject"],
  function (_self, _primaryIndex, _secondaryIndex, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _primaryIndex, _secondaryIndex, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(_at_2(_self, _primaryIndex), _secondaryIndex, _anObject);
  },
  "{ :self :primaryIndex :secondaryIndex :anObject |\n\t\tself.at(primaryIndex).atPut(secondaryIndex, anObject)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "atPut",
  ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex", "anObject"],
  function (_self, _primaryIndex, _secondaryIndex, _tertiaryIndex, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _primaryIndex, _secondaryIndex, _tertiaryIndex, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(
      _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
      _tertiaryIndex,
      _anObject,
    );
  },
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).atPut(tertiaryIndex, anObject)\n\t}",
);

sl.addTraitMethod(
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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPut_3(
      _at_2(
        _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
        _tertiaryIndex,
      ),
      _quaternaryIndex,
      _anObject,
    );
  },
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex).atPut(quaternaryIndex, anObject)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "basicAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Indexable>>basicAt: type responsibility");
  },
  "{ :self :index |\n\t\tself.error('@Indexable>>basicAt: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "basicAtPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Indexable>>basicAtPut: type responsibility");
  },
  "{ :self :index :anObject |\n\t\tself.error('@Indexable>>basicAtPut: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "deepIndicesStartingAtDo",
  ["self", "startIndex", "aBlock:/1"],
  function (_self, _startIndex, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _type = _typeOf_1(_self);
    /* Statements */
    return _withIndexDo_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _here = _plusSignPlusSign_2(_startIndex, [_index]);
      /* Statements */
      return _if_3(_equalsSign_2(_typeOf_1(_each), _type), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _deepIndicesStartingAtDo_3(_each, _here, _aBlock_1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_1(_here);
      });
    });
  },
  "{ :self :startIndex :aBlock:/1 |\n\t\tlet type = self.typeOf;\n\t\tself.withIndexDo { :each :index |\n\t\t\tlet here = startIndex ++ [index];\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepIndicesStartingAtDo(here, aBlock:/1)\n\t\t\t} {\n\t\t\t\taBlock(here)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "deepIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _deepIndicesStartingAtDo_3(_self, [], function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.deepIndicesStartingAtDo([]) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "errorInvalidIndex",
  ["self", "for", "index"],
  function (_self, _for, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _for, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(
      _self,
      _join_1([
        "errorInvalidIndex: index not correct type or out of range.",
        " index: ",
        _index,
        " for: ",
        _for,
        " index.typeOf: ",
        _typeOf_1(_index),
        " self.size: ",
        _size_1(_self),
      ]),
    );
  },
  "{ :self :for :index |\n\t\tself.error([\n\t\t\t'errorInvalidIndex: index not correct type or out of range.',\n\t\t\t' index: ', index,\n\t\t\t' for: ', for,\n\t\t\t' index.typeOf: ', index.typeOf,\n\t\t\t' self.size: ', self.size\n\t\t].join)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "includesIndex",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _includes_2(_indices_1(_self), _anObject);
  },
  "{ :self :anObject |\n\t\tself.indices.includes(anObject)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "indexOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _indexOfIfAbsent_3(_self, _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Indexable>>indexOf: no such element");
    });
  },
  "{ :self :anObject |\n\t\tself.indexOfIfAbsent(anObject) {\n\t\t\tself.error('@Indexable>>indexOf: no such element')\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "indexOfIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_indices_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_at_2(_self, _index), _anObject),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_index);
          },
        );
      });
      return _aBlock_0();
    });
  },
  "{ :self :anObject :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.indices.do { :index |\n\t\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "indices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "@Indexable>>indices: type responsibility");
  },
  "{ :self |\n\t\tself.error('@Indexable>>indices: type responsibility')\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "indicesSorted",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _indices_1(_self);
    /* Statements */
    _sort_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = self.indices;\n\t\tanswer.sort;\n\t\tanswer\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "indicesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_indices_1(_self), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.indices.do(aBlock:/1)\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "isIndexable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Indexable",
  "Indexable",
  "withIndexDo",
  ["self", "elementAndIndexBlock:/2"],
  function (_self, _elementAndIndexBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementAndIndexBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_indices_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _elementAndIndexBlock_2(_at_2(_self, _index), _index);
    });
  },
  "{ :self :elementAndIndexBlock:/2 |\n\t\tself.indices.do { :index |\n\t\t\telementAndIndexBlock(self[index], index)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Indexable",
  "isIndexable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);
