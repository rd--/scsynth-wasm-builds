sl.addTrait("UrlQueryParameters", "UrlQueryParameters");

sl.addMethodToExistingTrait(
  "UrlQueryParameters",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeReponsibility_2(_self, "asUrlQueryParameters");
  }, ["self"]),
  "{ :self | typeReponsibility(self,'asUrlQueryParameters') }",
);

sl.addType(
  true,
  "URLSearchParams",
  "UrlQueryParameters",
  ["Object", "Iterable", "UrlQueryParameters"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "URLSearchParams",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "URLSearchParams",
);

sl.copyTraitMethodsToType(
  "UrlQueryParameters",
  "URLSearchParams",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isUrlQueryParameters_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_asString_1(_self), _asString_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isUrlQueryParameters(anObject), { =(asString(self), asString(anObject)) }) }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "add",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _basicAppend_3(
      _self,
      _key_1(_anAssociation),
      _value_1(_anAssociation),
    );
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation | basicAppend(self,key(anAssociation), value(anAssociation)) }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "associations",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_key, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _key, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_key, _value));
      }, ["key", "value"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = []; keysAndValuesDo(self, { :key :value | add(answer,->(key, value)) }); answer }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toString();
  }, ["self"]),
  "{ :self | <primitive: return _self.toString();>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "at",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.get(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.get(_name);>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "atAllEntries",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.getAll(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.getAll(_name);>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "atPut",
  ["self", "name", "value"],
  sl.annotateFunction(function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.set(_name, _value);
  }, ["self", "name", "value"]),
  "{ :self :name :value | <primitive: return _self.set(_name, _value);>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "basicAppend",
  ["self", "name", "value"],
  sl.annotateFunction(function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.append(_name, _value);
  }, ["self", "name", "value"]),
  "{ :self :name :value | <primitive: return _self.append(_name, _value);>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _keysAndValuesDo_2(
      _self,
      sl.annotateFunction(function (_unusedKey, _value) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _unusedKey, _value";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value);
      }, ["unusedKey", "value"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | keysAndValuesDo(self, { :unusedKey :value | aBlock(value) }) }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "includes",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_name);
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.has(_name);>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "isUrlQueryParameters",
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

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "keys",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = [];
    for (const key of _self.keys()) {
      answer.push(key);
    }
    return answer;
  }, ["self"]),
  "{ :self | <primitive: const answer = [];\n\t\tfor(const key of _self.keys()) {\n\t\t\tanswer.push(key);\n\t\t}\n\t\treturn answer;>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (value, key, _myself) {
      _aBlock_2(key, value);
    });
    return _self;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | <primitive: _self.forEach(function(value, key, _myself) {\n\t\t\t_aBlock_2(key, value);\n\t\t});\n\t\treturn _self;>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "removeKey",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.delete(_name);
    return null;
  }, ["self", "name"]),
  "{ :self :name | <primitive: _self.delete(_name);\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "size",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self", "name"]),
  "{ :self :name | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "sort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.sort();
    return null;
  }, ["self"]),
  "{ :self | <primitive: _self.sort(); return null;>\n }",
);

sl.addMethodToExistingType(
  "URLSearchParams",
  "UrlQueryParameters",
  "values",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = [];
    for (const value of _self.values()) {
      answer.push(value);
    }
    return answer;
  }, ["self"]),
  "{ :self | <primitive: const answer = [];\n\t\tfor(const value of _self.values()) {\n\t\t\tanswer.push(value);\n\t\t}\n\t\treturn answer;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "UrlQueryParameters",
  "isUrlQueryParameters",
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

sl.extendTypeOrTraitWithMethod(
  "String",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URLSearchParams(_self);
  }, ["self"]),
  "{ :self | <primitive: return new URLSearchParams(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URLSearchParams(_self);
  }, ["self"]),
  "{ :self | <primitive: return new URLSearchParams(_self);>\n }",
);
