/*  Require: Object  */

sl.addTrait("At", "At");

sl.addMethodToExistingTrait(
  "At",
  "At",
  "atIfAbsent",
  ["self", "index", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "atIfPresentIfAbsent");
  }, ["self", "index", "ifAbsent/0"]),
  "{ :self :index :ifAbsent/0 |\n\t\tself.typeResponsibility('atIfPresentIfAbsent')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "assertIsOfSize",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      "isOfSize",
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
  "{ :self :anInteger |\n\t\tself.assert('isOfSize') {\n\t\t\tself.size = anInteger\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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
        return _errorInvalidIndex_3(_self, "assertIsValidIndex", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.includesIndex(index).if {\n\t\t\tindex\n\t\t} {\n\t\t\tself.errorInvalidIndex('assertIsValidIndex', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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
        return _errorInvalidIndex_3(_self, "at", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tself.errorInvalidIndex('at', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "commercialAt",
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
        return _errorInvalidIndex_3(_self, "at", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tself.errorInvalidIndex('at', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIfPresent",
  ["self", "index", "ifPresent/1"],
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
  }, ["self", "index", "ifPresent/1"]),
  "{ :self :index :ifPresent/1 |\n\t\tself.atIfPresentIfAbsent(\n\t\t\tindex,\n\t\t\tifPresent/1,\n\t\t\t{ nil }\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIfPresentIfAbsent",
  ["self", "index", "ifPresent/1", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _index, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _ifPresent_1, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
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
  }, ["self", "index", "ifPresent/1", "ifAbsent/0"]),
  "{ :self :index :ifPresent/1 :ifAbsent/0 |\n\t\tlet isPresent = true;\n\t\tlet answer = self.atIfAbsent(index) {\n\t\t\tisPresent := false;\n\t\t\tifAbsent()\n\t\t};\n\t\tisPresent.if {\n\t\t\tifPresent(answer)\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIncrementBy",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _putInPlace_3(
      _self,
      _index,
      _plusSign_2(_at_2(_self, _index), _value),
    );
  }, ["self", "index", "value"]),
  "{ :self :index :value |\n\t\tself[index] := self[index] + value\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atPath",
  ["self", "path"],
  sl.annotateFunction(function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    let _item = _self;
    return _ifEmpty_3(
      _path,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "atPath", _path);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(
          _path,
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
  }, ["self", "path"]),
  "{ :self :path |\n\t\tlet item = self;\n\t\tpath.ifEmpty {\n\t\t\tself.errorInvalidIndex('atPath', path)\n\t\t} {\n\t\t\tpath.do { :index |\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "indices");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('indices')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "deepIndices",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
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
            return _addInPlace_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = [];\n\t\tself.deepIndicesStartingAtDo([]) { :each :index |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add!(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "deepIndicesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
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
            return _addInPlace_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet answer = [];\n\t\tself.withDeepIndexDo { :each :index |\n\t\t\t(each = anObject).ifTrue {\n\t\t\t\tanswer.add!(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "deepIndicesStartingAtDo",
  ["self", "startIndex", "aBlock/2"],
  sl.annotateFunction(function (_self, _startIndex, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _type = _typeOf_1(_self);
    return _withIndexDo_2(
      _self,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Statements */
        let _here = _plusSignPlusSign_2(_startIndex, [_index]);
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
  }, ["self", "startIndex", "aBlock/2"]),
  "{ :self :startIndex :aBlock/2 |\n\t\tlet type = self.typeOf;\n\t\tself.withIndexDo { :each :index |\n\t\t\tlet here = startIndex ++ [index];\n\t\t\t(each.typeOf = type).if {\n\t\t\t\teach.deepIndicesStartingAtDo(here, aBlock/2)\n\t\t\t} {\n\t\t\t\taBlock(each, here)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "errorInvalidIndex",
  ["self", "message", "index"],
  sl.annotateFunction(function (_self, _message, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _message, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      _format_2("InvalidIndex: %, i=%:%, n=%", [
        _message,
        _index,
        _typeOf_1(_index),
        _size_1(_self),
      ]),
    );
  }, ["self", "message", "index"]),
  "{ :self :message :index |\n\t\tself.error(\n\t\t\t'InvalidIndex: %, i=%:%, n=%'.format(\n\t\t\t\t[message, index, index.typeOf, self.size]\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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
        return _error_3(_self, "indexOf: no such element", [_anObject]);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.indexOfIfAbsent(anObject) {\n\t\t\tself.error('indexOf: no such element', [anObject])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "indexOfIfAbsent",
  ["self", "anObject", "aBlock/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
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
    }, ["return/1"]));
  }, ["self", "anObject", "aBlock/0"]),
  "{ :self :anObject :aBlock/0 |\n\t\twithReturn { :return/1 |\n\t\t\tself.indicesDo { :index |\n\t\t\t\t(self[index] = anObject).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "indices",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
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
            return _addInPlace_2(_answer, _index);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = [];\n\t\tself.withIndexDo { :each :index |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer.add!(index)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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
  "{ :self :anObject |\n\t\tself.indices { :each |\n\t\t\teach = anObject\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "indicesSorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _indices_1(_self);
    _sort_1(_answer);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self.indices;\n\t\tanswer.sort;\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "indicesDo",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_indices_1(_self), _aBlock_1);
    return null;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.indices.do(aBlock/1);\n\t\tnil\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
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

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "positionIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _Map_0();
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
            return _addInPlace_2(_at_2(_answer, _each), _index);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _putInPlace_3(_answer, _each, [_index]);
          }, []),
        );
      }, ["each", "index"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = Map();\n\t\tself.withIndexDo { :each :index |\n\t\t\tanswer.includesKey(each).if {\n\t\t\t\tanswer.at(each).add!(index)\n\t\t\t} {\n\t\t\t\tanswer.put!(each, [index])\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "positionSmallest",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _x = _min_1(_self);
    return _indicesOf_2(_self, _x);
  }, ["self"]),
  "{ :self |\n\t\tlet x = self.min;\n\t\tself.indicesOf(x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "positionSmallest",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    let _x = _sort_1(_self);
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
  "{ :self :n |\n\t\tlet x = self.sort;\n\t\t1.to(n).collect { :y |\n\t\t\tself.indicesOf(x[y])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "withDeepIndexDo",
  ["self", "elementAndIndexBlock/2"],
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
  }, ["self", "elementAndIndexBlock/2"]),
  "{ :self :elementAndIndexBlock/2 |\n\t\tself.deepIndices.do { :index |\n\t\t\telementAndIndexBlock(self.atPath(index), index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "withIndexDo",
  ["self", "elementAndIndexBlock/2"],
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
  }, ["self", "elementAndIndexBlock/2"]),
  "{ :self :elementAndIndexBlock/2 |\n\t\tself.indicesDo { :index |\n\t\t\telementAndIndexBlock(self[index], index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "At",
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
