sl.addTrait("UrlQueryParameters", "UrlQueryParameters");

sl.addTraitMethod(
  "UrlQueryParameters",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeReponsibility_2(_self, "asUrlQueryParameters");
  },
  "{ :self |\n\t\tself.typeReponsibility('asUrlQueryParameters')\n\t}",
);

sl.addType(
  true,
  "URLSearchParams",
  "UrlQueryParameters",
  ["Object", "Iterable", "UrlQueryParameters"],
  [],
);

sl.copyTraitToType(
  "Object",
  "URLSearchParams",
);

sl.copyTraitToType(
  "Iterable",
  "URLSearchParams",
);

sl.copyTraitToType(
  "UrlQueryParameters",
  "URLSearchParams",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isUrlQueryParameters_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_asString_1(_self), _asString_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isUrlQueryParameters & {\n\t\t\tself.asString = anObject.asString\n\t\t}\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "add",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anAssociation"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _basicAppend_3(
      _self,
      _key_1(_anAssociation),
      _value_1(_anAssociation),
    );
  },
  "{ :self :anAssociation |\n\t\tself.basicAppend(anAssociation.key, anAssociation.value)\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "associations",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _keysAndValuesDo_2(_self, function (_key, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _key, _value"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _hyphenMinusGreaterThanSign_2(_key, _value));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.keysAndValuesDo { :key :value |\n\t\t\tanswer.add(key -> value)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.toString();
  },
  "{ :self |\n\t\t<primitive: return _self.toString();>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _name"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.get(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.get(_name);>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "atAllEntries",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _name"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.getAll(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.getAll(_name);>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "atPut",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _name, _value"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.set(_name, _value);
  },
  "{ :self :name :value |\n\t\t<primitive: return _self.set(_name, _value);>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "basicAppend",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _name, _value"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.append(_name, _value);
  },
  "{ :self :name :value |\n\t\t<primitive: return _self.append(_name, _value);>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _keysAndValuesDo_2(_self, function (_unusedKey, _value) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage =
          "Arity: expected 2, _unusedKey, _value"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_1(_value);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.keysAndValuesDo { :unusedKey :value |\n\t\t\taBlock(value)\n\t\t}\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "includes",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _name"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.has(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.has(_name);>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "isUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "keys",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    const answer = [];
    for (const key of _self.keys()) {
      answer.push(key);
    }
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst answer = [];\n\t\tfor(const key of _self.keys()) {\n\t\t\tanswer.push(key);\n\t\t}\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "keysAndValuesDo",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.forEach(function (value, key, _myself) {
      _aBlock_2(key, value);
    });
    return _self;
  },
  "{ :self :aBlock:/2 |\n\t\t<primitive:\n\t\t_self.forEach(function(value, key, _myself) {\n\t\t\t_aBlock_2(key, value);\n\t\t});\n\t\treturn _self;\n\t\t>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "removeKey",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _name"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.delete(_name);
    return null;
  },
  "{ :self :name |\n\t\t<primitive:\n\t\t_self.delete(_name);\n\t\treturn null;\n\t\t>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "size",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _name"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.size;
  },
  "{ :self :name |\n\t\t<primitive: return _self.size;>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "sort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.sort();
    return null;
  },
  "{ :self |\n\t\t<primitive: _self.sort(); return null;>\n\t}",
);

sl.addMethod(
  "URLSearchParams",
  "UrlQueryParameters",
  "values",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    const answer = [];
    for (const value of _self.values()) {
      answer.push(value);
    }
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst answer = [];\n\t\tfor(const value of _self.values()) {\n\t\t\tanswer.push(value);\n\t\t}\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "UrlQueryParameters",
  "isUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "String",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new URLSearchParams(_self);
  },
  "{ :self |\n\t\t<primitive: return new URLSearchParams(_self);>\n\t}",
);

sl.addMethod(
  "Record",
  "UrlQueryParameters",
  "asUrlQueryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new URLSearchParams(_self);
  },
  "{ :self |\n\t\t<primitive: return new URLSearchParams(_self);>\n\t}",
);
