/*  Require: Object  */

sl.addTrait("Put", "Put");

sl.addMethodToExistingTrait(
  "Put",
  "Put",
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
  "{ :self :anObject |\n\t\tself.indicesDo { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "atAllPutInPlace",
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
        return _putInPlace_3(_self, _index, _anObject);
      }, ["index"]),
    );
    return _anObject;
  }, ["self", "indices", "anObject"]),
  "{ :self :indices :anObject |\n\t\tindices.do { :index |\n\t\t\tself[index] := anObject\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "atAllPutAllInPlace",
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
        return _putInPlace_3(_self, _index, _value);
      }, ["index", "value"]),
    );
    return _values;
  }, ["self", "indices", "values"]),
  "{ :self :indices :values |\n\t\tindices.withDo(values) { :index :value |\n\t\t\tself[index] := value\n\t\t};\n\t\tvalues\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "atIfAbsentPutInPlace",
  ["self", "index", "ifAbsent/0"],
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
        return _putInPlace_3(_self, _index, _ifAbsent_0());
      }, []),
    );
  }, ["self", "index", "ifAbsent/0"]),
  "{ :self :index :ifAbsent/0 |\n\t\tself.atIfAbsent(index) {\n\t\t\tself[index] := ifAbsent()\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "atModifyInPlace",
  ["self", "index", "defaultValue", "aBlock/1"],
  sl.annotateFunction(function (_self, _index, _defaultValue, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _defaultValue, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _putInPlace_3(
      _self,
      _index,
      _aBlock_1(_atIfAbsent_3(
        _self,
        _index,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _defaultValue;
        }, []),
      )),
    );
  }, ["self", "index", "defaultValue", "aBlock/1"]),
  "{ :self :index :defaultValue :aBlock/1 |\n\t\tself.put!(index, aBlock(self.atIfAbsent(index, { defaultValue })))\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "atPathPutInPlace",
  ["self", "indices", "value"],
  sl.annotateFunction(function (_self, _indices, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _indices, _value";
      throw new Error(errorMessage);
    } /* Statements */
    let _item = _self;
    return _ifEmpty_3(
      _indices,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "atPathPut!: empty indices");
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
            } /* Statements */
            let _index = _at_2(_indices, _indicesIndex);
            return _item = _at_2(_item, _index);
          }, ["indicesIndex"]),
        );
        return _putInPlace_3(_item, _last_1(_indices), _value);
      }, []),
    );
  }, ["self", "indices", "value"]),
  "{ :self :indices :value |\n\t\tlet item = self;\n\t\tindices.ifEmpty {\n\t\t\tself.error('atPathPut!: empty indices')\n\t\t} {\n\t\t\t1.toDo(indices.size - 1) { :indicesIndex |\n\t\t\t\tlet index = indices[indicesIndex];\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem[indices.last] := value\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "putInPlace",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Put>>put!");
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject |\n\t\tself.typeResponsibility('@Put>>put!')\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "putInPlace",
  ["self", "primaryIndex", "secondaryIndex", "anObject"],
  sl.annotateFunction(
    function (_self, _primaryIndex, _secondaryIndex, _anObject) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _primaryIndex, _secondaryIndex, _anObject";
        throw new Error(errorMessage);
      } /* Statements */
      return _putInPlace_3(
        _at_2(_self, _primaryIndex),
        _secondaryIndex,
        _anObject,
      );
    },
    ["self", "primaryIndex", "secondaryIndex", "anObject"],
  ),
  "{ :self :primaryIndex :secondaryIndex :anObject |\n\t\tself.at(primaryIndex).put!(secondaryIndex, anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "putInPlace",
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
      return _putInPlace_3(
        _at_2(_at_2(_self, _primaryIndex), _secondaryIndex),
        _tertiaryIndex,
        _anObject,
      );
    },
    ["self", "primaryIndex", "secondaryIndex", "tertiaryIndex", "anObject"],
  ),
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).put!(tertiaryIndex, anObject)\n\t}",
);

sl.addMethodToExistingTrait(
  "Put",
  "Put",
  "putInPlace",
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
      return _putInPlace_3(
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
  "{ :self :primaryIndex :secondaryIndex :tertiaryIndex :quaternaryIndex :anObject |\n\t\tself.at(primaryIndex).at(secondaryIndex).at(tertiaryIndex).put!(quaternaryIndex, anObject)\n\t}",
);
