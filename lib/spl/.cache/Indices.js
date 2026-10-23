sl.addTrait("@Indices", "Indices");

sl.addMethodToExistingTrait(
  "@Indices",
  "Indices",
  "indices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Indices>>indices");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Indices>>indices')\n\t}",
);

sl.addMethodToExistingTrait(
  "@Indices",
  "Indices",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Indices>>size");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Indices>>size')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
  "atAllPutInPlace",
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
        return _putInPlace_3(_self, _index, _anObject);
      }, ["index"]),
    );
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.indicesDo { :index |\n\t\t\tput!(self, index, anObject)\n\t\t};\n\t\tanObject\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
  "deepIndicesStartingAtDo",
  ["self", "startIndex", "aBlock/2"],
  sl.annotateFunction(function (_self, _startIndex, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _startIndex, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _type = _typeName_1(_self);
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
          _equalsSign_2(_typeName_1(_each), _type),
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
  "{ :self :startIndex :aBlock/2 |\n\t\tlet type = self.typeName;\n\t\tself.withIndexDo { :each :index |\n\t\t\tlet here = startIndex ++ [index];\n\t\t\t(each.typeName = type).if {\n\t\t\t\teach.deepIndicesStartingAtDo(here, aBlock/2)\n\t\t\t} {\n\t\t\t\taBlock(each, here)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Indices",
  "Indices",
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
        _typeName_1(_index),
        _size_1(_self),
      ]),
    );
  }, ["self", "message", "index"]),
  "{ :self :message :index |\n\t\tself.error(\n\t\t\t'InvalidIndex: %, i=%:%, n=%'.format(\n\t\t\t\t[message, index, index.typeName, self.size]\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "@Indices",
  "Indices",
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
  "Indices",
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
