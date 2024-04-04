sl.addType(
  false,
  "HashIndexTable",
  "JsonBenchmark",
  ["Object", "Indexable"],
  ["hashTable"],
);

sl.copyTraitToType(
  "Object",
  "HashIndexTable",
);

sl.copyTraitToType(
  "Indexable",
  "HashIndexTable",
);

sl.addMethod(
  "HashIndexTable",
  "JsonBenchmark",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _slot = _hashSlotFor_2(_self, _name);
    /* Statements */
    return _hyphenMinus_2(_bitAnd_2(_at_2(_hashTable_1(_self), _slot), 255), 1);
  },
  "{ :self :name |\n\t\tlet slot = self.hashSlotFor(name);\n\t\tself.hashTable[slot].bitAnd(255) - 1\n\t}",
);

sl.addMethod(
  "HashIndexTable",
  "JsonBenchmark",
  "atPut",
  ["self", "name", "index"],
  function (_self, _name, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _slot = _hashSlotFor_2(_self, _name);
    /* Statements */
    return _if_3(_lessThanSign_2(_index, 255), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_hashTable_1(_self), _slot, _plusSign_2(_index, 1));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_hashTable_1(_self), _slot, 0);
    });
  },
  "{ :self :name :index |\n\t\tlet slot = self.hashSlotFor(name);\n\t\t(index < 255).if {\n\t\t\tself.hashTable[slot] := index + 1\n\t\t} {\n\t\t\tself.hashTable[slot] := 0\n\t\t}\n\t}",
);

sl.addMethod(
  "HashIndexTable",
  "JsonBenchmark",
  "stringHash",
  ["self", "s"],
  function (_self, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _s";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_size_1(_s), 1402589);
  },
  "{ :self :s |\n\t\ts.size * 1402589\n\t}",
);

sl.addMethod(
  "HashIndexTable",
  "JsonBenchmark",
  "hashSlotFor",
  ["self", "element"],
  function (_self, _element) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _element";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _bitAnd_2(
        _stringHash_2(_self, _element),
        _hyphenMinus_2(_size_1(_hashTable_1(_self)), 1),
      ),
      1,
    );
  },
  "{ :self :element |\n\t\t((self.stringHash(element)).bitAnd(self.hashTable.size - 1)) + 1\n\t}",
);

sl.addMethod(
  "Void",
  "JsonBenchmark",
  "HashIndexTable",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newHashIndexTable_0(), _List_2(32, 0));
  },
  "{\n\t\tnewHashIndexTable().initializeSlots(List(32, 0))\n\t}",
);

sl.addTrait("JsonValue", "JsonBenchmark");

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isObject",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isTrue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isFalse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "isNull",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "asObject",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_1(
      _plusSignPlusSign_2(
        "Unsupported operation, not an object: ",
        _asString_1(_self),
      ),
    );
  },
  "{ :self | ('Unsupported operation, not an object: ' ++ self.asString).error }",
);

sl.addTraitMethod(
  "JsonValue",
  "JsonBenchmark",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _error_1(
      _plusSignPlusSign_2(
        "Unsupported operation, not an array: ",
        _asString_1(_self),
      ),
    );
  },
  "{ :self | ('Unsupported operation, not an array: ' ++ self.asString).error }",
);

sl.addType(
  false,
  "JsonList",
  "JsonBenchmark",
  ["Object", "Indexable", "JsonValue"],
  ["values"],
);

sl.copyTraitToType(
  "Object",
  "JsonList",
);

sl.copyTraitToType(
  "Indexable",
  "JsonList",
);

sl.copyTraitToType(
  "JsonValue",
  "JsonList",
);

sl.addMethod(
  "JsonList",
  "JsonBenchmark",
  "append",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifNil_2(_value, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("JsonList>>append: value is null");
    });
    return _add_2(_values_1(_self), _value);
  },
  "{ :self :value |\n\t\tvalue.ifNil {\n\t\t\t'JsonList>>append: value is null'.error\n\t\t};\n\t\tself.values.add(value)\n\t}",
);

sl.addMethod(
  "JsonList",
  "JsonBenchmark",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "JsonList",
  "JsonBenchmark",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_values_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.values[index]\n\t}",
);

sl.addMethod(
  "JsonList",
  "JsonBenchmark",
  "isList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "JsonList",
  "JsonBenchmark",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_values_1(_self));
  },
  "{ :self |\n\t\tself.values.size\n\t}",
);

sl.addMethod(
  "Void",
  "JsonBenchmark",
  "JsonList",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newJsonList_0(), _List_0());
  },
  "{\n\t\tnewJsonList().initializeSlots(List())\n\t}",
);

sl.addType(
  false,
  "JsonLiteral",
  "JsonBenchmark",
  ["Object", "JsonValue"],
  ["value", "isNull", "isTrue", "isFalse"],
);

sl.copyTraitToType(
  "Object",
  "JsonLiteral",
);

sl.copyTraitToType(
  "JsonValue",
  "JsonLiteral",
);

sl.addMethod(
  "JsonLiteral",
  "JsonBenchmark",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_self);
  },
  "{ :self | self.value }",
);

sl.addMethod(
  "JsonLiteral",
  "JsonBenchmark",
  "isNull",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isNull_1(_self);
  },
  "{ :self | self.isNull }",
);

sl.addMethod(
  "JsonLiteral",
  "JsonBenchmark",
  "isTrue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isTrue_1(_self);
  },
  "{ :self | self.isTrue }",
);

sl.addMethod(
  "JsonLiteral",
  "JsonBenchmark",
  "isFalse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isFalse_1(_self);
  },
  "{ :self | self.isFalse }",
);

sl.addMethod(
  "JsonLiteral",
  "JsonBenchmark",
  "isBoolean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_isTrue_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isFalse_1(_self);
    });
  },
  "{ :self | self.isTrue | { self.isFalse } }",
);

sl.addMethod(
  "String",
  "JsonBenchmark",
  "JsonLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newJsonLiteral_0(),
      _self,
      _equalsSign_2(_self, "null"),
      _equalsSign_2(_self, "true"),
      _equalsSign_2(_self, "false"),
    );
  },
  "{ :self |\n\t\tnewJsonLiteral().initializeSlots(self, self = 'null', self = 'true', self = 'false')\n\t}",
);

sl.addType(
  false,
  "JsonNumber",
  "JsonBenchmark",
  ["Object", "JsonValue"],
  ["string"],
);

sl.copyTraitToType(
  "Object",
  "JsonNumber",
);

sl.copyTraitToType(
  "JsonValue",
  "JsonNumber",
);

sl.addMethod(
  "JsonNumber",
  "JsonBenchmark",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _string_1(_self);
  },
  "{ :self | self.string }",
);

sl.addMethod(
  "JsonNumber",
  "JsonBenchmark",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethod(
  "String",
  "JsonBenchmark",
  "JsonNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newJsonNumber_0(), _self);
  },
  "{ :self |\n\t\tnewJsonNumber().initializeSlots(self)\n\t}",
);

sl.addType(
  false,
  "JsonObject",
  "JsonBenchmark",
  ["Object", "Indexable", "JsonValue"],
  ["names", "values", "table"],
);

sl.copyTraitToType(
  "Object",
  "JsonObject",
);

sl.copyTraitToType(
  "Indexable",
  "JsonObject",
);

sl.copyTraitToType(
  "JsonValue",
  "JsonObject",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "addWith",
  ["self", "name", "aJsonValue"],
  function (_self, _name, _aJsonValue) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aJsonValue";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifNil_2(_name, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("name is null");
    });
    _ifNil_2(_aJsonValue, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("aJsonValue is null");
    });
    _atPut_3(_table_1(_self), _name, _plusSign_2(_size_1(_names_1(_self)), 1));
    _add_2(_names_1(_self), _name);
    return _add_2(_values_1(_self), _aJsonValue);
  },
  "{ :self :name :aJsonValue |\n\t\tname.ifNil {\n\t\t\t'name is null'.error\n\t\t};\n\t\taJsonValue.ifNil {\n\t\t\t'aJsonValue is null'.error\n\t\t};\n\t\tself.table[name] := self.names.size + 1;\n\t\tself.names.add(name);\n\t\tself.values.add(aJsonValue)\n\t}",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "basicAt",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_values_1(_self), _indexOf_2(_self, _name));
  },
  "{ :self :name |\n\t\tself.values[self.indexOf(name)]\n\t}",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_name, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_1("name is null");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _index = _indexOf_2(_self, _name);
      /* Statements */
      return _if_3(_equalsSign_2(_index, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return null;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_values_1(_self), _index);
      });
    });
  },
  "{ :self :name |\n\t\tname.ifNil {\n\t\t\t'name is null'.error\n\t\t} {\n\t\t\tlet index = self.indexOf(name);\n\t\t\t(index = 0).if {\n\t\t\t\tnil\n\t\t\t} {\n\t\t\t\tself.values[index]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _size_1(_names_1(_self));
  },
  "{ :self | self.names.size }",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isEmpty_1(_names_1(_self));
  },
  "{ :self | self.names.isEmpty }",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "isObject",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "asObject",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethod(
  "JsonObject",
  "JsonBenchmark",
  "indexOf",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _index = _at_2(_table_1(_self), _name);
    /* Statements */
    return _if_3(
      _ampersand_2(_tildeEqualsSign_2(_index, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _equalsSign_2(_name, _at_2(_names_1(_self), _index));
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _index;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("not implement");
      },
    );
  },
  "{ :self :name |\n\t\tlet index = self.table[name];\n\t\t(index ~= 0 & {\n\t\t\tname = self.names[index]\n\t\t}).if {\n\t\t\tindex\n\t\t} {\n\t\t\t'not implement'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "JsonBenchmark",
  "JsonObject",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newJsonObject_0(),
      _List_0(),
      _List_0(),
      _HashIndexTable_0(),
    );
  },
  "{\n\t\tnewJsonObject().initializeSlots(List(), List(), HashIndexTable())\n\t}",
);

sl.addType(
  false,
  "JsonString",
  "JsonBenchmark",
  ["Object", "JsonValue"],
  ["string"],
);

sl.copyTraitToType(
  "Object",
  "JsonString",
);

sl.copyTraitToType(
  "JsonValue",
  "JsonString",
);

sl.addMethod(
  "JsonString",
  "JsonBenchmark",
  "isString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "String",
  "JsonBenchmark",
  "JsonString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newJsonString_0(), _self);
  },
  "{ :self |\n\t\tnewJsonString().initializeSlots(self)\n\t}",
);

sl.addType(
  false,
  "JsonParser",
  "JsonBenchmark",
  ["Object"],
  [
    "input",
    "index",
    "line",
    "column",
    "current",
    "captureBuffer",
    "captureStart",
    "exceptionBlock",
  ],
);

sl.copyTraitToType(
  "Object",
  "JsonParser",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "parse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _result = null;
    /* Statements */
    _read_1(_self);
    _skipWhiteSpace_1(_self);
    _result = _readValue_1(_self);
    _skipWhiteSpace_1(_self);
    _ifFalse_2(_isEndOfText_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Unexpected character");
    });
    return _result;
  },
  "{ :self |\n\t\tlet result = nil;\n\t\tself.read;\n\t\tself.skipWhiteSpace;\n\t\tresult := self.readValue;\n\t\tself.skipWhiteSpace;\n\t\tself.isEndOfText.ifFalse {\n\t\t\tself.error('Unexpected character')\n\t\t};\n\t\tresult\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readValue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_current_1(_self), "n"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readNull_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "t"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readTrue_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "f"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readFalse_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), '"'), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readString_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "["), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readList_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "{"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readObject_1(_self));
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "-"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readNumber_1(_self));
      });
      _ifTrue_2(_isDigit_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1(_readNumber_1(_self));
      });
      return _expected_2(_self, "value");
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self.current = 'n').ifTrue {\n\t\t\t\tself.readNull.return\n\t\t\t};\n\t\t\t(self.current = 't').ifTrue {\n\t\t\t\tself.readTrue.return\n\t\t\t};\n\t\t\t(self.current = 'f').ifTrue {\n\t\t\t\tself.readFalse.return\n\t\t\t};\n\t\t\t(self.current = '\"').ifTrue {\n\t\t\t\tself.readString.return\n\t\t\t};\n\t\t\t(self.current = '[').ifTrue {\n\t\t\t\tself.readList.return\n\t\t\t};\n\t\t\t(self.current = '{').ifTrue {\n\t\t\t\tself.readObject.return\n\t\t\t};\n\t\t\t(self.current = '-').ifTrue {\n\t\t\t\tself.readNumber.return\n\t\t\t};\n\t\t\tself.isDigit.ifTrue {\n\t\t\t\tself.readNumber.return\n\t\t\t};\n\t\t\tself.expected('value')\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readListElement",
  ["self", "array"],
  function (_self, _array) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _array";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _skipWhiteSpace_1(_self);
    _append_2(_array, _readValue_1(_self));
    return _skipWhiteSpace_1(_self);
  },
  "{ :self :array |\n\t\tself.skipWhiteSpace;\n\t\tarray.append(self.readValue);\n\t\tself.skipWhiteSpace\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _array = _JsonList_0();
    /* Statements */
    _read_1(_self);
    _skipWhiteSpace_1(_self);
    return _if_3(_readChar_2(_self, "]"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _array;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _readListElement_2(_self, _array);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readChar_2(_self, ",");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readListElement_2(_self, _array);
      });
      _ifFalse_2(_readChar_2(_self, "]"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _expected_2(_self, ", or ]");
      });
      return _array;
    });
  },
  "{ :self |\n\t\tlet array = JsonList();\n\t\tself.read;\n\t\tself.skipWhiteSpace;\n\t\t(self.readChar(']')).if {\n\t\t\tarray\n\t\t} {\n\t\t\tself.readListElement(array);\n\t\t\t{\n\t\t\t\tself.readChar(',')\n\t\t\t}.whileTrue {\n\t\t\t\tself.readListElement(array)\n\t\t\t};\n\t\t\t(self.readChar(']')).ifFalse {\n\t\t\t\tself.expected(', or ]')\n\t\t\t};\n\t\t\tarray\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readObjectKeyValuePair",
  ["self", "object"],
  function (_self, _object) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _object";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _name = null;
    /* Statements */
    _skipWhiteSpace_1(_self);
    _name = _readName_1(_self);
    _skipWhiteSpace_1(_self);
    _ifFalse_2(_readChar_2(_self, ":"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _expected_2(_self, ":");
    });
    _skipWhiteSpace_1(_self);
    _addWith_3(_object, _name, _readValue_1(_self));
    return _skipWhiteSpace_1(_self);
  },
  "{ :self :object |\n\t\tlet name = nil;\n\t\tself.skipWhiteSpace;\n\t\tname := self.readName;\n\t\tself.skipWhiteSpace;\n\t\t(self.readChar(':')).ifFalse {\n\t\t\tself.expected(':')\n\t\t};\n\t\tself.skipWhiteSpace;\n\t\tobject.addWith(name, self.readValue);\n\t\tself.skipWhiteSpace\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readObject",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _object = _JsonObject_0();
    /* Statements */
    _read_1(_self);
    _skipWhiteSpace_1(_self);
    return _if_3(_readChar_2(_self, "}"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _object;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _readObjectKeyValuePair_2(_self, _object);
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readChar_2(_self, ",");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readObjectKeyValuePair_2(_self, _object);
      });
      _ifFalse_2(_readChar_2(_self, "}"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _expected_2(_self, ", or }");
      });
      return _object;
    });
  },
  "{ :self |\n\t\tlet object = JsonObject();\n\t\tself.read;\n\t\tself.skipWhiteSpace;\n\t\t(self.readChar('}')).if {\n\t\t\tobject\n\t\t} {\n\t\t\tself.readObjectKeyValuePair(object);\n\t\t\t{\n\t\t\t\tself.readChar(',')\n\t\t\t}.whileTrue {\n\t\t\t\tself.readObjectKeyValuePair(object)\n\t\t\t};\n\t\t\t(self.readChar('}')).ifFalse {\n\t\t\t\tself.expected(', or }')\n\t\t\t};\n\t\t\tobject\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_equalsSign_2(_current_1(_self), '"'), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _expected_2(_self, "name");
    });
    return _readStringInternal_1(_self);
  },
  "{ :self |\n\t\t(self.current = '\"').ifFalse {\n\t\t\tself.expected('name')\n\t\t};\n\t\tself.readStringInternal\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readNull",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _read_1(_self);
    _readRequiredChar_2(_self, "u");
    _readRequiredChar_2(_self, "l");
    _readRequiredChar_2(_self, "l");
    return _JsonLiteral_1("null");
  },
  "{ :self |\n\t\tself.read;\n\t\tself.readRequiredChar('u');\n\t\tself.readRequiredChar('l');\n\t\tself.readRequiredChar('l');\n\t\t'null'.JsonLiteral\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readTrue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _read_1(_self);
    _readRequiredChar_2(_self, "r");
    _readRequiredChar_2(_self, "u");
    _readRequiredChar_2(_self, "e");
    return _JsonLiteral_1("true");
  },
  "{ :self |\n\t\tself.read;\n\t\tself.readRequiredChar('r');\n\t\tself.readRequiredChar('u');\n\t\tself.readRequiredChar('e');\n\t\t'true'.JsonLiteral\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readFalse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _read_1(_self);
    _readRequiredChar_2(_self, "a");
    _readRequiredChar_2(_self, "l");
    _readRequiredChar_2(_self, "s");
    _readRequiredChar_2(_self, "e");
    return _JsonLiteral_1("false");
  },
  "{ :self |\n\t\tself.read;\n\t\tself.readRequiredChar('a');\n\t\tself.readRequiredChar('l');\n\t\tself.readRequiredChar('s');\n\t\tself.readRequiredChar('e');\n\t\t'false'.JsonLiteral\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readRequiredChar",
  ["self", "ch"],
  function (_self, _ch) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ch";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_readChar_2(_self, _ch), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _expected_2(_self, _plusSignPlusSign_2("character: ", _ch));
    });
  },
  "{ :self :ch |\n\t\t(self.readChar(ch)).ifFalse {\n\t\t\tself.expected('character: ' ++ ch)\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _JsonString_1(_readStringInternal_1(_self));
  },
  "{ :self |\n\t\tJsonString(self.readStringInternal)\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readStringInternal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _string = null;
    /* Statements */
    _read_1(_self);
    _startCapture_1(_self);
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_current_1(_self), '"');
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_current_1(_self), "\\"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _pauseCapture_1(_self);
        _readEscape_1(_self);
        return _startCapture_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _read_1(_self);
      });
    });
    _string = _endCapture_1(_self);
    _read_1(_self);
    return _string;
  },
  "{ :self |\n\t\tlet string = nil;\n\t\tself.read;\n\t\tself.startCapture;\n\t\t{\n\t\t\tself.current = '\"'\n\t\t}.whileFalse {\n\t\t\t(self.current = '\\\\' ).if {\n\t\t\t\tself.pauseCapture;\n\t\t\t\tself.readEscape;\n\t\t\t\tself.startCapture\n\t\t\t} {\n\t\t\t\tself.read\n\t\t\t}\n\t\t};\n\t\tstring := self.endCapture;\n\t\tself.read;\n\t\tstring\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readEscapeChar",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifTrue_2(_equalsSign_2(_current_1(_self), '"'), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1('"');
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "/"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("/");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "\\"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\\");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "b"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\b");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "f"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\f");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "n"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\n");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "r"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\r");
      });
      _ifTrue_2(_equalsSign_2(_current_1(_self), "t"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _return_1("\t");
      });
      return _expected_2(
        _self,
        "valid escape sequence. note, some are not supported",
      );
    });
  },
  "{ :self |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(self.current = '\"').ifTrue { '\"'.return };\n\t\t\t(self.current = '/').ifTrue { '/'.return };\n\t\t\t(self.current = '\\\\').ifTrue { '\\\\'.return };\n\t\t\t(self.current = 'b').ifTrue { '\\b'.return };\n\t\t\t(self.current = 'f').ifTrue { '\\f'.return };\n\t\t\t(self.current = 'n').ifTrue { '\\n'.return };\n\t\t\t(self.current = 'r').ifTrue { '\\r'.return };\n\t\t\t(self.current = 't').ifTrue { '\\t'.return };\n\t\t\tself.expected('valid escape sequence. note, some are not supported')\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readEscape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _read_1(_self);
    _captureBuffer_2(
      _self,
      _concatenate_2(_captureBuffer_1(_self), _readEscapeChar_1(_self)),
    );
    return _read_1(_self);
  },
  "{ :self |\n\t\tself.read;\n\t\tself.captureBuffer := self.captureBuffer.concatenate(self.readEscapeChar);\n\t\tself.read\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _firstDigit = null;
    /* Statements */
    _startCapture_1(_self);
    _readChar_2(_self, "-");
    _firstDigit = _current_1(_self);
    _ifFalse_2(_readDigit_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _expected_2(_self, "digit");
    });
    _ifTrue_2(_tildeEqualsSign_2(_firstDigit, "0"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readDigit_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
      });
    });
    _readFraction_1(_self);
    _readExponent_1(_self);
    return _JsonNumber_1(_endCapture_1(_self));
  },
  "{ :self |\n\t\tlet firstDigit = nil;\n\t\tself.startCapture;\n\t\tself.readChar('-');\n\t\tfirstDigit := self.current;\n\t\tself.readDigit.ifFalse {\n\t\t\tself.expected('digit')\n\t\t};\n\t\t(firstDigit ~= '0').ifTrue {\n\t\t\t{\n\t\t\t\tself.readDigit\n\t\t\t}.whileTrue {\n\t\t\t}\n\t\t};\n\t\tself.readFraction;\n\t\tself.readExponent;\n\t\tJsonNumber(self.endCapture)\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_readChar_2(_self, "."), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _ifFalse_2(_readDigit_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _expected_2(_self, "digit");
      });
      _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readDigit_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
      });
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self |\n\t\t(self.readChar('.')).if {\n\t\t\tself.readDigit.ifFalse {\n\t\t\t\tself.expected('digit')\n\t\t\t};\n\t\t\t{\n\t\t\t\tself.readDigit\n\t\t\t}.whileTrue {\n\t\t\t};\n\t\t\ttrue\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readExponent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _verticalLine_2(_readChar_2(_self, "e"), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _readChar_2(_self, "E");
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        _ifFalse_2(_readChar_2(_self, "+"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _readChar_2(_self, "-");
        });
        _ifFalse_2(_readDigit_1(_self), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _expected_2(_self, "digit");
        });
        _whileTrue_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _readDigit_1(_self);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
        });
        return true;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return false;
      },
    );
  },
  "{ :self |\n\t\t(self.readChar('e') | {\n\t\t\tself.readChar('E')\n\t\t}).if {\n\t\t\tself.readChar('+').ifFalse {\n\t\t\t\tself.readChar('-')\n\t\t\t};\n\t\t\tself.readDigit.ifFalse {\n\t\t\t\tself.expected('digit')\n\t\t\t};\n\t\t\t{\n\t\t\t\tself.readDigit\n\t\t\t}.whileTrue {\n\t\t\t};\n\t\t\ttrue\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readChar",
  ["self", "ch"],
  function (_self, _ch) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _ch";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_current_1(_self), _ch), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _read_1(_self);
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :ch |\n\t\t(self.current = ch).if {\n\t\t\tself.read;\n\t\t\ttrue\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "readDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isDigit_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _read_1(_self);
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self |\n\t\tself.isDigit.if {\n\t\t\tself.read;\n\t\t\ttrue\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "skipWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isWhiteSpace_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _read_1(_self);
    });
  },
  "{ :self |\n\t\t{\n\t\t\tself.isWhiteSpace\n\t\t}.whileTrue {\n\t\t\tself.read\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "read",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_equalsSign_2(_current_1(_self), "\n"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _line_2(_self, _plusSign_2(_line_1(_self), 1));
      return _column_2(_self, 0);
    });
    _index_2(_self, _plusSign_2(_index_1(_self), 1));
    _column_2(_self, _plusSign_2(_column_1(_self), 1));
    _ifNil_2(_input_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "input nil");
    });
    return _if_3(
      _lessThanSignEqualsSign_2(_index_1(_self), _size_1(_input_1(_self))),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _current_2(
          _self,
          _asString_1(_at_2(_input_1(_self), _index_1(_self))),
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _current_2(_self, null);
      },
    );
  },
  "{ :self |\n\t\t(self.current = '\\n').ifTrue {\n\t\t\tself.line := self.line + 1;\n\t\t\tself.column := 0\n\t\t};\n\t\tself.index := self.index + 1;\n\t\tself.column := self.column + 1;\n\t\tself.input.ifNil {\n\t\t\tself.error('input nil')\n\t\t};\n\t\t(self.index <= self.input.size).if {\n\t\t\tself.current := self.input[self.index].asString\n\t\t} {\n\t\t\tself.current := nil\n\t\t}\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "startCapture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _captureStart_2(_self, _index_1(_self));
  },
  "{ :self |\n\t\tself.captureStart := self.index\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "pauseCapture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _captureBuffer_2(
      _self,
      _concatenate_2(
        _captureBuffer_1(_self),
        _copyFromTo_3(
          _input_1(_self),
          _captureStart_1(_self),
          _hyphenMinus_2(_index_1(_self), 1),
        ),
      ),
    );
    return _captureStart_2(_self, 0);
  },
  "{ :self |\n\t\tself.captureBuffer := self.captureBuffer.concatenate(self.input.copyFromTo(self.captureStart, self.index - 1));\n\t\tself.captureStart := 0\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "endCapture",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _captured = null;
    /* Statements */
    _if_3(_equalsSign_2("", _captureBuffer_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _captured = _copyFromTo_3(
        _input_1(_self),
        _captureStart_1(_self),
        _hyphenMinus_2(_index_1(_self), 1),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _pauseCapture_1(_self);
      _captured = _captureBuffer_1(_self);
      return _captureBuffer_2(_self, "");
    });
    _captureStart_2(_self, 0);
    return _captured;
  },
  "{ :self |\n\t\tlet captured = nil;\n\t\t('' = self.captureBuffer).if {\n\t\t\tcaptured := self.input.copyFromTo(self.captureStart, self.index - 1)\n\t\t} {\n\t\t\tself.pauseCapture;\n\t\t\tcaptured := self.captureBuffer;\n\t\t\tself.captureBuffer := ''\n\t\t};\n\t\tself.captureStart := 0;\n\t\tcaptured\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "expected",
  ["self", "expected"],
  function (_self, _expected) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _expected";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _ifTrue_2(_isEndOfText_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Unexpected end of input, expected ", _expected),
      );
    });
    return _error_2(_self, _plusSignPlusSign_2("Expected ", _expected));
  },
  "{ :self :expected |\n\t\tself.isEndOfText.ifTrue {\n\t\t\tself.error('Unexpected end of input, expected ' ++ expected)\n\t\t};\n\t\tself.error('Expected ' ++ expected)\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "error",
  ["self", "message"],
  function (_self, _message) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _message";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_2(
      _exceptionBlock_1(_self),
      _ParseException_4(
        _message,
        _index_1(_self),
        _line_1(_self),
        _column_1(_self),
      ),
    );
  },
  "{ :self :message |\n\t\tself.exceptionBlock.value(ParseException(message, self.index, self.line, self.column))\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "isWhiteSpace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2([" ", "\t", "\n", "\r"], _current_1(_self));
  },
  "{ :self |\n\t\t[' ', '\\t', '\\n', '\\r'].includes(self.current)\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "isDigit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includes_2(
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      _current_1(_self),
    );
  },
  "{ :self |\n\t\t['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(self.current)\n\t}",
);

sl.addMethod(
  "JsonParser",
  "JsonBenchmark",
  "isEndOfText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isNil_1(_current_1(_self));
  },
  "{ :self |\n\t\tself.current.isNil\n\t}",
);

sl.addMethod(
  "String",
  "JsonBenchmark",
  "JsonParser",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_9(
      _newJsonParser_0(),
      _self,
      0,
      1,
      0,
      null,
      "",
      0,
      function (_err) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _err";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _err;
      },
    );
  },
  "{ :self |\n\t\tnewJsonParser().initializeSlots(self, 0, 1, 0, nil, '', 0, { :err | err })\n\t}",
);

sl.addType(
  false,
  "ParseException",
  "JsonBenchmark",
  ["Object"],
  ["message", "offset", "line", "column"],
);

sl.copyTraitToType(
  "Object",
  "ParseException",
);

sl.addMethod(
  "ParseException",
  "JsonBenchmark",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _plusSignPlusSign_2(
          _plusSignPlusSign_2(_message_1(_self), ":"),
          _line_1(_self),
        ),
        ":",
      ),
      _column,
    );
  },
  "{ :self |\n\t\tself.message ++ ':' ++ self.line ++ ':' ++ column\n\t}",
);

sl.addMethod(
  "String",
  "JsonBenchmark",
  "ParseException",
  ["self", "offset", "line", "column"],
  function (_self, _offset, _line, _column) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _offset, _line, _column";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newParseException_0(),
      _self,
      _offset,
      _line,
      _column,
    );
  },
  "{ :self :offset :line :column |\n\t\tnewParseException().initializeSlots(self, offset, line, column)\n\t}",
);

sl.addMethod(
  "Void",
  "JsonBenchmark",
  "JsonBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _parse_1(
      _JsonParser_1(
        '{"head":{"requestCounter":4},"operations":[["destroy","w54"],["set","w2",{"activeControl":"w99"}],["set","w21",{"customVariant":"variant_navigation"}],["set","w28",{"customVariant":"variant_selected"}],["set","w53",{"children":["w95"]}],["create","w95","rwt.widgets.Composite",{"parent":"w53","style":["NONE"],"bounds":[0,0,1008,586],"children":["w96","w97"],"tabIndex":-1,"clientArea":[0,0,1008,586]}],["create","w96","rwt.widgets.Label",{"parent":"w95","style":["NONE"],"bounds":[10,30,112,26],"tabIndex":-1,"customVariant":"variant_pageHeadline","text":"TableViewer"}],["create","w97","rwt.widgets.Composite",{"parent":"w95","style":["NONE"],"bounds":[0,61,1008,525],"children":["w98","w99","w226","w228"],"tabIndex":-1,"clientArea":[0,0,1008,525]}],["create","w98","rwt.widgets.Text",{"parent":"w97","style":["LEFT","SINGLE","BORDER"],"bounds":[10,10,988,32],"tabIndex":22,"activeKeys":["#13","#27","#40"]}],["listen","w98",{"KeyDown":true,"Modify":true}],["create","w99","rwt.widgets.Grid",{"parent":"w97","style":["SINGLE","BORDER"],"appearance":"table","indentionWidth":0,"treeColumn":-1,"markupEnabled":false}],["create","w100","rwt.widgets.ScrollBar",{"parent":"w99","style":["HORIZONTAL"]}],["create","w101","rwt.widgets.ScrollBar",{"parent":"w99","style":["VERTICAL"]}],["set","w99",{"bounds":[10,52,988,402],"children":[],"tabIndex":23,"activeKeys":["CTRL+#70","CTRL+#78","CTRL+#82","CTRL+#89","CTRL+#83","CTRL+#71","CTRL+#69"],"cancelKeys":["CTRL+#70","CTRL+#78","CTRL+#82","CTRL+#89","CTRL+#83","CTRL+#71","CTRL+#69"]}],["listen","w99",{"MouseDown":true,"MouseUp":true,"MouseDoubleClick":true,"KeyDown":true}],["set","w99",{"itemCount":118,"itemHeight":28,"itemMetrics":[[0,0,50,3,0,3,44],[1,50,50,53,0,53,44],[2,100,140,103,0,103,134],[3,240,180,243,0,243,174],[4,420,50,423,0,423,44],[5,470,50,473,0,473,44]],"columnCount":6,"headerHeight":35,"headerVisible":true,"linesVisible":true,"focusItem":"w108","selection":["w108"]}],["listen","w99",{"Selection":true,"DefaultSelection":true}],["set","w99",{"enableCellToolTip":true}],["listen","w100",{"Selection":true}],["set","w101",{"visibility":true}],["listen","w101",{"Selection":true}],["create","w102","rwt.widgets.GridColumn",{"parent":"w99","text":"Nr.","width":50,"moveable":true}],["listen","w102",{"Selection":true}],["create","w103","rwt.widgets.GridColumn",{"parent":"w99","text":"Sym.","index":1,"left":50,"width":50,"moveable":true}],["listen","w103",{"Selection":true}],["create","w104","rwt.widgets.GridColumn",{"parent":"w99","text":"Name","index":2,"left":100,"width":140,"moveable":true}],["listen","w104",{"Selection":true}],["create","w105","rwt.widgets.GridColumn",{"parent":"w99","text":"Series","index":3,"left":240,"width":180,"moveable":true}],["listen","w105",{"Selection":true}],["create","w106","rwt.widgets.GridColumn",{"parent":"w99","text":"Group","index":4,"left":420,"width":50,"moveable":true}],["listen","w106",{"Selection":true}],["create","w107","rwt.widgets.GridColumn",{"parent":"w99","text":"Period","index":5,"left":470,"width":50,"moveable":true}],["listen","w107",{"Selection":true}],["create","w108","rwt.widgets.GridItem",{"parent":"w99","index":0,"texts":["1","H","Hydrogen","Nonmetal","1","1"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w109","rwt.widgets.GridItem",{"parent":"w99","index":1,"texts":["2","He","Helium","Noble gas","18","1"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w110","rwt.widgets.GridItem",{"parent":"w99","index":2,"texts":["3","Li","Lithium","Alkali metal","1","2"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w111","rwt.widgets.GridItem",{"parent":"w99","index":3,"texts":["4","Be","Beryllium","Alkaline earth metal","2","2"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w112","rwt.widgets.GridItem",{"parent":"w99","index":4,"texts":["5","B","Boron","Metalloid","13","2"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w113","rwt.widgets.GridItem",{"parent":"w99","index":5,"texts":["6","C","Carbon","Nonmetal","14","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w114","rwt.widgets.GridItem",{"parent":"w99","index":6,"texts":["7","N","Nitrogen","Nonmetal","15","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w115","rwt.widgets.GridItem",{"parent":"w99","index":7,"texts":["8","O","Oxygen","Nonmetal","16","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w116","rwt.widgets.GridItem",{"parent":"w99","index":8,"texts":["9","F","Fluorine","Halogen","17","2"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w117","rwt.widgets.GridItem",{"parent":"w99","index":9,"texts":["10","Ne","Neon","Noble gas","18","2"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w118","rwt.widgets.GridItem",{"parent":"w99","index":10,"texts":["11","Na","Sodium","Alkali metal","1","3"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w119","rwt.widgets.GridItem",{"parent":"w99","index":11,"texts":["12","Mg","Magnesium","Alkaline earth metal","2","3"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w120","rwt.widgets.GridItem",{"parent":"w99","index":12,"texts":["13","Al","Aluminium","Poor metal","13","3"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w121","rwt.widgets.GridItem",{"parent":"w99","index":13,"texts":["14","Si","Silicon","Metalloid","14","3"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w122","rwt.widgets.GridItem",{"parent":"w99","index":14,"texts":["15","P","Phosphorus","Nonmetal","15","3"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w123","rwt.widgets.GridItem",{"parent":"w99","index":15,"texts":["16","S","Sulfur","Nonmetal","16","3"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w124","rwt.widgets.GridItem",{"parent":"w99","index":16,"texts":["17","Cl","Chlorine","Halogen","17","3"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w125","rwt.widgets.GridItem",{"parent":"w99","index":17,"texts":["18","Ar","Argon","Noble gas","18","3"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w126","rwt.widgets.GridItem",{"parent":"w99","index":18,"texts":["19","K","Potassium","Alkali metal","1","4"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w127","rwt.widgets.GridItem",{"parent":"w99","index":19,"texts":["20","Ca","Calcium","Alkaline earth metal","2","4"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w128","rwt.widgets.GridItem",{"parent":"w99","index":20,"texts":["21","Sc","Scandium","Transition metal","3","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w129","rwt.widgets.GridItem",{"parent":"w99","index":21,"texts":["22","Ti","Titanium","Transition metal","4","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w130","rwt.widgets.GridItem",{"parent":"w99","index":22,"texts":["23","V","Vanadium","Transition metal","5","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w131","rwt.widgets.GridItem",{"parent":"w99","index":23,"texts":["24","Cr","Chromium","Transition metal","6","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w132","rwt.widgets.GridItem",{"parent":"w99","index":24,"texts":["25","Mn","Manganese","Transition metal","7","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w133","rwt.widgets.GridItem",{"parent":"w99","index":25,"texts":["26","Fe","Iron","Transition metal","8","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w134","rwt.widgets.GridItem",{"parent":"w99","index":26,"texts":["27","Co","Cobalt","Transition metal","9","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w135","rwt.widgets.GridItem",{"parent":"w99","index":27,"texts":["28","Ni","Nickel","Transition metal","10","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w136","rwt.widgets.GridItem",{"parent":"w99","index":28,"texts":["29","Cu","Copper","Transition metal","11","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w137","rwt.widgets.GridItem",{"parent":"w99","index":29,"texts":["30","Zn","Zinc","Transition metal","12","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w138","rwt.widgets.GridItem",{"parent":"w99","index":30,"texts":["31","Ga","Gallium","Poor metal","13","4"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w139","rwt.widgets.GridItem",{"parent":"w99","index":31,"texts":["32","Ge","Germanium","Metalloid","14","4"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w140","rwt.widgets.GridItem",{"parent":"w99","index":32,"texts":["33","As","Arsenic","Metalloid","15","4"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w141","rwt.widgets.GridItem",{"parent":"w99","index":33,"texts":["34","Se","Selenium","Nonmetal","16","4"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w142","rwt.widgets.GridItem",{"parent":"w99","index":34,"texts":["35","Br","Bromine","Halogen","17","4"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w143","rwt.widgets.GridItem",{"parent":"w99","index":35,"texts":["36","Kr","Krypton","Noble gas","18","4"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w144","rwt.widgets.GridItem",{"parent":"w99","index":36,"texts":["37","Rb","Rubidium","Alkali metal","1","5"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w145","rwt.widgets.GridItem",{"parent":"w99","index":37,"texts":["38","Sr","Strontium","Alkaline earth metal","2","5"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w146","rwt.widgets.GridItem",{"parent":"w99","index":38,"texts":["39","Y","Yttrium","Transition metal","3","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w147","rwt.widgets.GridItem",{"parent":"w99","index":39,"texts":["40","Zr","Zirconium","Transition metal","4","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w148","rwt.widgets.GridItem",{"parent":"w99","index":40,"texts":["41","Nb","Niobium","Transition metal","5","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w149","rwt.widgets.GridItem",{"parent":"w99","index":41,"texts":["42","Mo","Molybdenum","Transition metal","6","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w150","rwt.widgets.GridItem",{"parent":"w99","index":42,"texts":["43","Tc","Technetium","Transition metal","7","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w151","rwt.widgets.GridItem",{"parent":"w99","index":43,"texts":["44","Ru","Ruthenium","Transition metal","8","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w152","rwt.widgets.GridItem",{"parent":"w99","index":44,"texts":["45","Rh","Rhodium","Transition metal","9","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w153","rwt.widgets.GridItem",{"parent":"w99","index":45,"texts":["46","Pd","Palladium","Transition metal","10","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w154","rwt.widgets.GridItem",{"parent":"w99","index":46,"texts":["47","Ag","Silver","Transition metal","11","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w155","rwt.widgets.GridItem",{"parent":"w99","index":47,"texts":["48","Cd","Cadmium","Transition metal","12","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w156","rwt.widgets.GridItem",{"parent":"w99","index":48,"texts":["49","In","Indium","Poor metal","13","5"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w157","rwt.widgets.GridItem",{"parent":"w99","index":49,"texts":["50","Sn","Tin","Poor metal","14","5"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w158","rwt.widgets.GridItem",{"parent":"w99","index":50,"texts":["51","Sb","Antimony","Metalloid","15","5"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w159","rwt.widgets.GridItem",{"parent":"w99","index":51,"texts":["52","Te","Tellurium","Metalloid","16","5"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w160","rwt.widgets.GridItem",{"parent":"w99","index":52,"texts":["53","I","Iodine","Halogen","17","5"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w161","rwt.widgets.GridItem",{"parent":"w99","index":53,"texts":["54","Xe","Xenon","Noble gas","18","5"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w162","rwt.widgets.GridItem",{"parent":"w99","index":54,"texts":["55","Cs","Caesium","Alkali metal","1","6"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w163","rwt.widgets.GridItem",{"parent":"w99","index":55,"texts":["56","Ba","Barium","Alkaline earth metal","2","6"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w164","rwt.widgets.GridItem",{"parent":"w99","index":56,"texts":["57","La","Lanthanum","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w165","rwt.widgets.GridItem",{"parent":"w99","index":57,"texts":["58","Ce","Cerium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w166","rwt.widgets.GridItem",{"parent":"w99","index":58,"texts":["59","Pr","Praseodymium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w167","rwt.widgets.GridItem",{"parent":"w99","index":59,"texts":["60","Nd","Neodymium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w168","rwt.widgets.GridItem",{"parent":"w99","index":60,"texts":["61","Pm","Promethium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w169","rwt.widgets.GridItem",{"parent":"w99","index":61,"texts":["62","Sm","Samarium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w170","rwt.widgets.GridItem",{"parent":"w99","index":62,"texts":["63","Eu","Europium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w171","rwt.widgets.GridItem",{"parent":"w99","index":63,"texts":["64","Gd","Gadolinium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w172","rwt.widgets.GridItem",{"parent":"w99","index":64,"texts":["65","Tb","Terbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w173","rwt.widgets.GridItem",{"parent":"w99","index":65,"texts":["66","Dy","Dysprosium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w174","rwt.widgets.GridItem",{"parent":"w99","index":66,"texts":["67","Ho","Holmium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w175","rwt.widgets.GridItem",{"parent":"w99","index":67,"texts":["68","Er","Erbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w176","rwt.widgets.GridItem",{"parent":"w99","index":68,"texts":["69","Tm","Thulium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w177","rwt.widgets.GridItem",{"parent":"w99","index":69,"texts":["70","Yb","Ytterbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w178","rwt.widgets.GridItem",{"parent":"w99","index":70,"texts":["71","Lu","Lutetium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w179","rwt.widgets.GridItem",{"parent":"w99","index":71,"texts":["72","Hf","Hafnium","Transition metal","4","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w180","rwt.widgets.GridItem",{"parent":"w99","index":72,"texts":["73","Ta","Tantalum","Transition metal","5","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w181","rwt.widgets.GridItem",{"parent":"w99","index":73,"texts":["74","W","Tungsten","Transition metal","6","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w182","rwt.widgets.GridItem",{"parent":"w99","index":74,"texts":["75","Re","Rhenium","Transition metal","7","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w183","rwt.widgets.GridItem",{"parent":"w99","index":75,"texts":["76","Os","Osmium","Transition metal","8","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w184","rwt.widgets.GridItem",{"parent":"w99","index":76,"texts":["77","Ir","Iridium","Transition metal","9","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w185","rwt.widgets.GridItem",{"parent":"w99","index":77,"texts":["78","Pt","Platinum","Transition metal","10","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w186","rwt.widgets.GridItem",{"parent":"w99","index":78,"texts":["79","Au","Gold","Transition metal","11","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w187","rwt.widgets.GridItem",{"parent":"w99","index":79,"texts":["80","Hg","Mercury","Transition metal","12","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w188","rwt.widgets.GridItem",{"parent":"w99","index":80,"texts":["81","Tl","Thallium","Poor metal","13","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w189","rwt.widgets.GridItem",{"parent":"w99","index":81,"texts":["82","Pb","Lead","Poor metal","14","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w190","rwt.widgets.GridItem",{"parent":"w99","index":82,"texts":["83","Bi","Bismuth","Poor metal","15","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w191","rwt.widgets.GridItem",{"parent":"w99","index":83,"texts":["84","Po","Polonium","Metalloid","16","6"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w192","rwt.widgets.GridItem",{"parent":"w99","index":84,"texts":["85","At","Astatine","Halogen","17","6"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w193","rwt.widgets.GridItem",{"parent":"w99","index":85,"texts":["86","Rn","Radon","Noble gas","18","6"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w194","rwt.widgets.GridItem",{"parent":"w99","index":86,"texts":["87","Fr","Francium","Alkali metal","1","7"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w195","rwt.widgets.GridItem",{"parent":"w99","index":87,"texts":["88","Ra","Radium","Alkaline earth metal","2","7"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w196","rwt.widgets.GridItem",{"parent":"w99","index":88,"texts":["89","Ac","Actinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w197","rwt.widgets.GridItem",{"parent":"w99","index":89,"texts":["90","Th","Thorium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w198","rwt.widgets.GridItem",{"parent":"w99","index":90,"texts":["91","Pa","Protactinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w199","rwt.widgets.GridItem",{"parent":"w99","index":91,"texts":["92","U","Uranium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w200","rwt.widgets.GridItem",{"parent":"w99","index":92,"texts":["93","Np","Neptunium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w201","rwt.widgets.GridItem",{"parent":"w99","index":93,"texts":["94","Pu","Plutonium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w202","rwt.widgets.GridItem",{"parent":"w99","index":94,"texts":["95","Am","Americium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w203","rwt.widgets.GridItem",{"parent":"w99","index":95,"texts":["96","Cm","Curium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w204","rwt.widgets.GridItem",{"parent":"w99","index":96,"texts":["97","Bk","Berkelium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w205","rwt.widgets.GridItem",{"parent":"w99","index":97,"texts":["98","Cf","Californium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w206","rwt.widgets.GridItem",{"parent":"w99","index":98,"texts":["99","Es","Einsteinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w207","rwt.widgets.GridItem",{"parent":"w99","index":99,"texts":["100","Fm","Fermium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w208","rwt.widgets.GridItem",{"parent":"w99","index":100,"texts":["101","Md","Mendelevium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w209","rwt.widgets.GridItem",{"parent":"w99","index":101,"texts":["102","No","Nobelium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w210","rwt.widgets.GridItem",{"parent":"w99","index":102,"texts":["103","Lr","Lawrencium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w211","rwt.widgets.GridItem",{"parent":"w99","index":103,"texts":["104","Rf","Rutherfordium","Transition metal","4","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w212","rwt.widgets.GridItem",{"parent":"w99","index":104,"texts":["105","Db","Dubnium","Transition metal","5","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w213","rwt.widgets.GridItem",{"parent":"w99","index":105,"texts":["106","Sg","Seaborgium","Transition metal","6","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w214","rwt.widgets.GridItem",{"parent":"w99","index":106,"texts":["107","Bh","Bohrium","Transition metal","7","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w215","rwt.widgets.GridItem",{"parent":"w99","index":107,"texts":["108","Hs","Hassium","Transition metal","8","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w216","rwt.widgets.GridItem",{"parent":"w99","index":108,"texts":["109","Mt","Meitnerium","Transition metal","9","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w217","rwt.widgets.GridItem",{"parent":"w99","index":109,"texts":["110","Ds","Darmstadtium","Transition metal","10","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w218","rwt.widgets.GridItem",{"parent":"w99","index":110,"texts":["111","Rg","Roentgenium","Transition metal","11","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w219","rwt.widgets.GridItem",{"parent":"w99","index":111,"texts":["112","Uub","Ununbium","Transition metal","12","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w220","rwt.widgets.GridItem",{"parent":"w99","index":112,"texts":["113","Uut","Ununtrium","Poor metal","13","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w221","rwt.widgets.GridItem",{"parent":"w99","index":113,"texts":["114","Uuq","Ununquadium","Poor metal","14","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w222","rwt.widgets.GridItem",{"parent":"w99","index":114,"texts":["115","Uup","Ununpentium","Poor metal","15","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w223","rwt.widgets.GridItem",{"parent":"w99","index":115,"texts":["116","Uuh","Ununhexium","Poor metal","16","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w224","rwt.widgets.GridItem",{"parent":"w99","index":116,"texts":["117","Uus","Ununseptium","Halogen","17","7"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w225","rwt.widgets.GridItem",{"parent":"w99","index":117,"texts":["118","Uuo","Ununoctium","Noble gas","18","7"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w226","rwt.widgets.Composite",{"parent":"w97","style":["BORDER"],"bounds":[10,464,988,25],"children":["w227"],"tabIndex":-1,"clientArea":[0,0,986,23]}],["create","w227","rwt.widgets.Label",{"parent":"w226","style":["NONE"],"bounds":[10,10,966,3],"tabIndex":-1,"text":"Hydrogen (H)"}],["create","w228","rwt.widgets.Label",{"parent":"w97","style":["WRAP"],"bounds":[10,499,988,16],"tabIndex":-1,"foreground":[150,150,150,255],"font":[["Verdana","Lucida Sans","Arial","Helvetica","sans-serif"],10,false,false],"text":"Shortcuts: [CTRL+F] - Filter | Sort by: [CTRL+R] - Number, [CTRL+Y] - Symbol, [CTRL+N] - Name, [CTRL+S] - Series, [CTRL+G] - Group, [CTRL+E] - Period"}],["set","w1",{"focusControl":"w99"}],["call","rwt.client.BrowserNavigation","addToHistory",{"entries":[["tableviewer","TableViewer"]]}]]}',
      ),
    );
  },
  '{\n\t\t\'{"head":{"requestCounter":4},"operations":[["destroy","w54"],["set","w2",{"activeControl":"w99"}],["set","w21",{"customVariant":"variant_navigation"}],["set","w28",{"customVariant":"variant_selected"}],["set","w53",{"children":["w95"]}],["create","w95","rwt.widgets.Composite",{"parent":"w53","style":["NONE"],"bounds":[0,0,1008,586],"children":["w96","w97"],"tabIndex":-1,"clientArea":[0,0,1008,586]}],["create","w96","rwt.widgets.Label",{"parent":"w95","style":["NONE"],"bounds":[10,30,112,26],"tabIndex":-1,"customVariant":"variant_pageHeadline","text":"TableViewer"}],["create","w97","rwt.widgets.Composite",{"parent":"w95","style":["NONE"],"bounds":[0,61,1008,525],"children":["w98","w99","w226","w228"],"tabIndex":-1,"clientArea":[0,0,1008,525]}],["create","w98","rwt.widgets.Text",{"parent":"w97","style":["LEFT","SINGLE","BORDER"],"bounds":[10,10,988,32],"tabIndex":22,"activeKeys":["#13","#27","#40"]}],["listen","w98",{"KeyDown":true,"Modify":true}],["create","w99","rwt.widgets.Grid",{"parent":"w97","style":["SINGLE","BORDER"],"appearance":"table","indentionWidth":0,"treeColumn":-1,"markupEnabled":false}],["create","w100","rwt.widgets.ScrollBar",{"parent":"w99","style":["HORIZONTAL"]}],["create","w101","rwt.widgets.ScrollBar",{"parent":"w99","style":["VERTICAL"]}],["set","w99",{"bounds":[10,52,988,402],"children":[],"tabIndex":23,"activeKeys":["CTRL+#70","CTRL+#78","CTRL+#82","CTRL+#89","CTRL+#83","CTRL+#71","CTRL+#69"],"cancelKeys":["CTRL+#70","CTRL+#78","CTRL+#82","CTRL+#89","CTRL+#83","CTRL+#71","CTRL+#69"]}],["listen","w99",{"MouseDown":true,"MouseUp":true,"MouseDoubleClick":true,"KeyDown":true}],["set","w99",{"itemCount":118,"itemHeight":28,"itemMetrics":[[0,0,50,3,0,3,44],[1,50,50,53,0,53,44],[2,100,140,103,0,103,134],[3,240,180,243,0,243,174],[4,420,50,423,0,423,44],[5,470,50,473,0,473,44]],"columnCount":6,"headerHeight":35,"headerVisible":true,"linesVisible":true,"focusItem":"w108","selection":["w108"]}],["listen","w99",{"Selection":true,"DefaultSelection":true}],["set","w99",{"enableCellToolTip":true}],["listen","w100",{"Selection":true}],["set","w101",{"visibility":true}],["listen","w101",{"Selection":true}],["create","w102","rwt.widgets.GridColumn",{"parent":"w99","text":"Nr.","width":50,"moveable":true}],["listen","w102",{"Selection":true}],["create","w103","rwt.widgets.GridColumn",{"parent":"w99","text":"Sym.","index":1,"left":50,"width":50,"moveable":true}],["listen","w103",{"Selection":true}],["create","w104","rwt.widgets.GridColumn",{"parent":"w99","text":"Name","index":2,"left":100,"width":140,"moveable":true}],["listen","w104",{"Selection":true}],["create","w105","rwt.widgets.GridColumn",{"parent":"w99","text":"Series","index":3,"left":240,"width":180,"moveable":true}],["listen","w105",{"Selection":true}],["create","w106","rwt.widgets.GridColumn",{"parent":"w99","text":"Group","index":4,"left":420,"width":50,"moveable":true}],["listen","w106",{"Selection":true}],["create","w107","rwt.widgets.GridColumn",{"parent":"w99","text":"Period","index":5,"left":470,"width":50,"moveable":true}],["listen","w107",{"Selection":true}],["create","w108","rwt.widgets.GridItem",{"parent":"w99","index":0,"texts":["1","H","Hydrogen","Nonmetal","1","1"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w109","rwt.widgets.GridItem",{"parent":"w99","index":1,"texts":["2","He","Helium","Noble gas","18","1"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w110","rwt.widgets.GridItem",{"parent":"w99","index":2,"texts":["3","Li","Lithium","Alkali metal","1","2"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w111","rwt.widgets.GridItem",{"parent":"w99","index":3,"texts":["4","Be","Beryllium","Alkaline earth metal","2","2"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w112","rwt.widgets.GridItem",{"parent":"w99","index":4,"texts":["5","B","Boron","Metalloid","13","2"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w113","rwt.widgets.GridItem",{"parent":"w99","index":5,"texts":["6","C","Carbon","Nonmetal","14","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w114","rwt.widgets.GridItem",{"parent":"w99","index":6,"texts":["7","N","Nitrogen","Nonmetal","15","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w115","rwt.widgets.GridItem",{"parent":"w99","index":7,"texts":["8","O","Oxygen","Nonmetal","16","2"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w116","rwt.widgets.GridItem",{"parent":"w99","index":8,"texts":["9","F","Fluorine","Halogen","17","2"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w117","rwt.widgets.GridItem",{"parent":"w99","index":9,"texts":["10","Ne","Neon","Noble gas","18","2"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w118","rwt.widgets.GridItem",{"parent":"w99","index":10,"texts":["11","Na","Sodium","Alkali metal","1","3"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w119","rwt.widgets.GridItem",{"parent":"w99","index":11,"texts":["12","Mg","Magnesium","Alkaline earth metal","2","3"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w120","rwt.widgets.GridItem",{"parent":"w99","index":12,"texts":["13","Al","Aluminium","Poor metal","13","3"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w121","rwt.widgets.GridItem",{"parent":"w99","index":13,"texts":["14","Si","Silicon","Metalloid","14","3"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w122","rwt.widgets.GridItem",{"parent":"w99","index":14,"texts":["15","P","Phosphorus","Nonmetal","15","3"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w123","rwt.widgets.GridItem",{"parent":"w99","index":15,"texts":["16","S","Sulfur","Nonmetal","16","3"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w124","rwt.widgets.GridItem",{"parent":"w99","index":16,"texts":["17","Cl","Chlorine","Halogen","17","3"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w125","rwt.widgets.GridItem",{"parent":"w99","index":17,"texts":["18","Ar","Argon","Noble gas","18","3"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w126","rwt.widgets.GridItem",{"parent":"w99","index":18,"texts":["19","K","Potassium","Alkali metal","1","4"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w127","rwt.widgets.GridItem",{"parent":"w99","index":19,"texts":["20","Ca","Calcium","Alkaline earth metal","2","4"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w128","rwt.widgets.GridItem",{"parent":"w99","index":20,"texts":["21","Sc","Scandium","Transition metal","3","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w129","rwt.widgets.GridItem",{"parent":"w99","index":21,"texts":["22","Ti","Titanium","Transition metal","4","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w130","rwt.widgets.GridItem",{"parent":"w99","index":22,"texts":["23","V","Vanadium","Transition metal","5","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w131","rwt.widgets.GridItem",{"parent":"w99","index":23,"texts":["24","Cr","Chromium","Transition metal","6","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w132","rwt.widgets.GridItem",{"parent":"w99","index":24,"texts":["25","Mn","Manganese","Transition metal","7","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w133","rwt.widgets.GridItem",{"parent":"w99","index":25,"texts":["26","Fe","Iron","Transition metal","8","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w134","rwt.widgets.GridItem",{"parent":"w99","index":26,"texts":["27","Co","Cobalt","Transition metal","9","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w135","rwt.widgets.GridItem",{"parent":"w99","index":27,"texts":["28","Ni","Nickel","Transition metal","10","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w136","rwt.widgets.GridItem",{"parent":"w99","index":28,"texts":["29","Cu","Copper","Transition metal","11","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w137","rwt.widgets.GridItem",{"parent":"w99","index":29,"texts":["30","Zn","Zinc","Transition metal","12","4"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w138","rwt.widgets.GridItem",{"parent":"w99","index":30,"texts":["31","Ga","Gallium","Poor metal","13","4"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w139","rwt.widgets.GridItem",{"parent":"w99","index":31,"texts":["32","Ge","Germanium","Metalloid","14","4"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w140","rwt.widgets.GridItem",{"parent":"w99","index":32,"texts":["33","As","Arsenic","Metalloid","15","4"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w141","rwt.widgets.GridItem",{"parent":"w99","index":33,"texts":["34","Se","Selenium","Nonmetal","16","4"],"cellBackgrounds":[null,null,null,[138,226,52,255],null,null]}],["create","w142","rwt.widgets.GridItem",{"parent":"w99","index":34,"texts":["35","Br","Bromine","Halogen","17","4"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w143","rwt.widgets.GridItem",{"parent":"w99","index":35,"texts":["36","Kr","Krypton","Noble gas","18","4"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w144","rwt.widgets.GridItem",{"parent":"w99","index":36,"texts":["37","Rb","Rubidium","Alkali metal","1","5"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w145","rwt.widgets.GridItem",{"parent":"w99","index":37,"texts":["38","Sr","Strontium","Alkaline earth metal","2","5"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w146","rwt.widgets.GridItem",{"parent":"w99","index":38,"texts":["39","Y","Yttrium","Transition metal","3","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w147","rwt.widgets.GridItem",{"parent":"w99","index":39,"texts":["40","Zr","Zirconium","Transition metal","4","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w148","rwt.widgets.GridItem",{"parent":"w99","index":40,"texts":["41","Nb","Niobium","Transition metal","5","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w149","rwt.widgets.GridItem",{"parent":"w99","index":41,"texts":["42","Mo","Molybdenum","Transition metal","6","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w150","rwt.widgets.GridItem",{"parent":"w99","index":42,"texts":["43","Tc","Technetium","Transition metal","7","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w151","rwt.widgets.GridItem",{"parent":"w99","index":43,"texts":["44","Ru","Ruthenium","Transition metal","8","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w152","rwt.widgets.GridItem",{"parent":"w99","index":44,"texts":["45","Rh","Rhodium","Transition metal","9","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w153","rwt.widgets.GridItem",{"parent":"w99","index":45,"texts":["46","Pd","Palladium","Transition metal","10","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w154","rwt.widgets.GridItem",{"parent":"w99","index":46,"texts":["47","Ag","Silver","Transition metal","11","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w155","rwt.widgets.GridItem",{"parent":"w99","index":47,"texts":["48","Cd","Cadmium","Transition metal","12","5"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w156","rwt.widgets.GridItem",{"parent":"w99","index":48,"texts":["49","In","Indium","Poor metal","13","5"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w157","rwt.widgets.GridItem",{"parent":"w99","index":49,"texts":["50","Sn","Tin","Poor metal","14","5"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w158","rwt.widgets.GridItem",{"parent":"w99","index":50,"texts":["51","Sb","Antimony","Metalloid","15","5"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w159","rwt.widgets.GridItem",{"parent":"w99","index":51,"texts":["52","Te","Tellurium","Metalloid","16","5"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w160","rwt.widgets.GridItem",{"parent":"w99","index":52,"texts":["53","I","Iodine","Halogen","17","5"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w161","rwt.widgets.GridItem",{"parent":"w99","index":53,"texts":["54","Xe","Xenon","Noble gas","18","5"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w162","rwt.widgets.GridItem",{"parent":"w99","index":54,"texts":["55","Cs","Caesium","Alkali metal","1","6"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w163","rwt.widgets.GridItem",{"parent":"w99","index":55,"texts":["56","Ba","Barium","Alkaline earth metal","2","6"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w164","rwt.widgets.GridItem",{"parent":"w99","index":56,"texts":["57","La","Lanthanum","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w165","rwt.widgets.GridItem",{"parent":"w99","index":57,"texts":["58","Ce","Cerium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w166","rwt.widgets.GridItem",{"parent":"w99","index":58,"texts":["59","Pr","Praseodymium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w167","rwt.widgets.GridItem",{"parent":"w99","index":59,"texts":["60","Nd","Neodymium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w168","rwt.widgets.GridItem",{"parent":"w99","index":60,"texts":["61","Pm","Promethium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w169","rwt.widgets.GridItem",{"parent":"w99","index":61,"texts":["62","Sm","Samarium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w170","rwt.widgets.GridItem",{"parent":"w99","index":62,"texts":["63","Eu","Europium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w171","rwt.widgets.GridItem",{"parent":"w99","index":63,"texts":["64","Gd","Gadolinium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w172","rwt.widgets.GridItem",{"parent":"w99","index":64,"texts":["65","Tb","Terbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w173","rwt.widgets.GridItem",{"parent":"w99","index":65,"texts":["66","Dy","Dysprosium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w174","rwt.widgets.GridItem",{"parent":"w99","index":66,"texts":["67","Ho","Holmium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w175","rwt.widgets.GridItem",{"parent":"w99","index":67,"texts":["68","Er","Erbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w176","rwt.widgets.GridItem",{"parent":"w99","index":68,"texts":["69","Tm","Thulium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w177","rwt.widgets.GridItem",{"parent":"w99","index":69,"texts":["70","Yb","Ytterbium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w178","rwt.widgets.GridItem",{"parent":"w99","index":70,"texts":["71","Lu","Lutetium","Lanthanide","3","6"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w179","rwt.widgets.GridItem",{"parent":"w99","index":71,"texts":["72","Hf","Hafnium","Transition metal","4","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w180","rwt.widgets.GridItem",{"parent":"w99","index":72,"texts":["73","Ta","Tantalum","Transition metal","5","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w181","rwt.widgets.GridItem",{"parent":"w99","index":73,"texts":["74","W","Tungsten","Transition metal","6","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w182","rwt.widgets.GridItem",{"parent":"w99","index":74,"texts":["75","Re","Rhenium","Transition metal","7","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w183","rwt.widgets.GridItem",{"parent":"w99","index":75,"texts":["76","Os","Osmium","Transition metal","8","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w184","rwt.widgets.GridItem",{"parent":"w99","index":76,"texts":["77","Ir","Iridium","Transition metal","9","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w185","rwt.widgets.GridItem",{"parent":"w99","index":77,"texts":["78","Pt","Platinum","Transition metal","10","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w186","rwt.widgets.GridItem",{"parent":"w99","index":78,"texts":["79","Au","Gold","Transition metal","11","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w187","rwt.widgets.GridItem",{"parent":"w99","index":79,"texts":["80","Hg","Mercury","Transition metal","12","6"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w188","rwt.widgets.GridItem",{"parent":"w99","index":80,"texts":["81","Tl","Thallium","Poor metal","13","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w189","rwt.widgets.GridItem",{"parent":"w99","index":81,"texts":["82","Pb","Lead","Poor metal","14","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w190","rwt.widgets.GridItem",{"parent":"w99","index":82,"texts":["83","Bi","Bismuth","Poor metal","15","6"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w191","rwt.widgets.GridItem",{"parent":"w99","index":83,"texts":["84","Po","Polonium","Metalloid","16","6"],"cellBackgrounds":[null,null,null,[156,159,153,255],null,null]}],["create","w192","rwt.widgets.GridItem",{"parent":"w99","index":84,"texts":["85","At","Astatine","Halogen","17","6"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w193","rwt.widgets.GridItem",{"parent":"w99","index":85,"texts":["86","Rn","Radon","Noble gas","18","6"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w194","rwt.widgets.GridItem",{"parent":"w99","index":86,"texts":["87","Fr","Francium","Alkali metal","1","7"],"cellBackgrounds":[null,null,null,[239,41,41,255],null,null]}],["create","w195","rwt.widgets.GridItem",{"parent":"w99","index":87,"texts":["88","Ra","Radium","Alkaline earth metal","2","7"],"cellBackgrounds":[null,null,null,[233,185,110,255],null,null]}],["create","w196","rwt.widgets.GridItem",{"parent":"w99","index":88,"texts":["89","Ac","Actinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w197","rwt.widgets.GridItem",{"parent":"w99","index":89,"texts":["90","Th","Thorium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w198","rwt.widgets.GridItem",{"parent":"w99","index":90,"texts":["91","Pa","Protactinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w199","rwt.widgets.GridItem",{"parent":"w99","index":91,"texts":["92","U","Uranium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w200","rwt.widgets.GridItem",{"parent":"w99","index":92,"texts":["93","Np","Neptunium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w201","rwt.widgets.GridItem",{"parent":"w99","index":93,"texts":["94","Pu","Plutonium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w202","rwt.widgets.GridItem",{"parent":"w99","index":94,"texts":["95","Am","Americium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w203","rwt.widgets.GridItem",{"parent":"w99","index":95,"texts":["96","Cm","Curium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w204","rwt.widgets.GridItem",{"parent":"w99","index":96,"texts":["97","Bk","Berkelium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w205","rwt.widgets.GridItem",{"parent":"w99","index":97,"texts":["98","Cf","Californium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w206","rwt.widgets.GridItem",{"parent":"w99","index":98,"texts":["99","Es","Einsteinium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w207","rwt.widgets.GridItem",{"parent":"w99","index":99,"texts":["100","Fm","Fermium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w208","rwt.widgets.GridItem",{"parent":"w99","index":100,"texts":["101","Md","Mendelevium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w209","rwt.widgets.GridItem",{"parent":"w99","index":101,"texts":["102","No","Nobelium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w210","rwt.widgets.GridItem",{"parent":"w99","index":102,"texts":["103","Lr","Lawrencium","Actinide","3","7"],"cellBackgrounds":[null,null,null,[173,127,168,255],null,null]}],["create","w211","rwt.widgets.GridItem",{"parent":"w99","index":103,"texts":["104","Rf","Rutherfordium","Transition metal","4","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w212","rwt.widgets.GridItem",{"parent":"w99","index":104,"texts":["105","Db","Dubnium","Transition metal","5","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w213","rwt.widgets.GridItem",{"parent":"w99","index":105,"texts":["106","Sg","Seaborgium","Transition metal","6","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w214","rwt.widgets.GridItem",{"parent":"w99","index":106,"texts":["107","Bh","Bohrium","Transition metal","7","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w215","rwt.widgets.GridItem",{"parent":"w99","index":107,"texts":["108","Hs","Hassium","Transition metal","8","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w216","rwt.widgets.GridItem",{"parent":"w99","index":108,"texts":["109","Mt","Meitnerium","Transition metal","9","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w217","rwt.widgets.GridItem",{"parent":"w99","index":109,"texts":["110","Ds","Darmstadtium","Transition metal","10","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w218","rwt.widgets.GridItem",{"parent":"w99","index":110,"texts":["111","Rg","Roentgenium","Transition metal","11","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w219","rwt.widgets.GridItem",{"parent":"w99","index":111,"texts":["112","Uub","Ununbium","Transition metal","12","7"],"cellBackgrounds":[null,null,null,[252,175,62,255],null,null]}],["create","w220","rwt.widgets.GridItem",{"parent":"w99","index":112,"texts":["113","Uut","Ununtrium","Poor metal","13","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w221","rwt.widgets.GridItem",{"parent":"w99","index":113,"texts":["114","Uuq","Ununquadium","Poor metal","14","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w222","rwt.widgets.GridItem",{"parent":"w99","index":114,"texts":["115","Uup","Ununpentium","Poor metal","15","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w223","rwt.widgets.GridItem",{"parent":"w99","index":115,"texts":["116","Uuh","Ununhexium","Poor metal","16","7"],"cellBackgrounds":[null,null,null,[238,238,236,255],null,null]}],["create","w224","rwt.widgets.GridItem",{"parent":"w99","index":116,"texts":["117","Uus","Ununseptium","Halogen","17","7"],"cellBackgrounds":[null,null,null,[252,233,79,255],null,null]}],["create","w225","rwt.widgets.GridItem",{"parent":"w99","index":117,"texts":["118","Uuo","Ununoctium","Noble gas","18","7"],"cellBackgrounds":[null,null,null,[114,159,207,255],null,null]}],["create","w226","rwt.widgets.Composite",{"parent":"w97","style":["BORDER"],"bounds":[10,464,988,25],"children":["w227"],"tabIndex":-1,"clientArea":[0,0,986,23]}],["create","w227","rwt.widgets.Label",{"parent":"w226","style":["NONE"],"bounds":[10,10,966,3],"tabIndex":-1,"text":"Hydrogen (H)"}],["create","w228","rwt.widgets.Label",{"parent":"w97","style":["WRAP"],"bounds":[10,499,988,16],"tabIndex":-1,"foreground":[150,150,150,255],"font":[["Verdana","Lucida Sans","Arial","Helvetica","sans-serif"],10,false,false],"text":"Shortcuts: [CTRL+F] - Filter | Sort by: [CTRL+R] - Number, [CTRL+Y] - Symbol, [CTRL+N] - Name, [CTRL+S] - Series, [CTRL+G] - Group, [CTRL+E] - Period"}],["set","w1",{"focusControl":"w99"}],["call","rwt.client.BrowserNavigation","addToHistory",{"entries":[["tableviewer","TableViewer"]]}]]}\'.JsonParser.parse\n\t}',
);
