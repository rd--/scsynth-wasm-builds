sl.addTrait("Cache", "Cache");

sl.addTraitMethod(
  "Cache",
  "Cache",
  "cache",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Cache>>cache");
  },
  "{ :self |\n\t\tself.typeResponsibility('@Cache>>cache')\n\t}",
);

sl.addTraitMethod(
  "Cache",
  "Cache",
  "cached",
  ["self", "key", "constructor:/0"],
  function (_self, _key, _constructor_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _constructor_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_cache_1(_self), _key, _constructor_0);
  },
  "{ :self :key :constructor:/0 |\n\t\tself.cache.atIfAbsentPut(key, constructor:/0)\n\t}",
);

sl.addTraitMethod(
  "Cache",
  "Cache",
  "whenCached",
  ["self", "key", "asyncConstructor:/0"],
  function (_self, _key, _asyncConstructor_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _key, _asyncConstructor_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_cache_1(_self), _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_cache_1(_self), _key);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _then_2(_asyncConstructor_0(), function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_cache_1(_self), _key, _answer);
        return _answer;
      });
    });
  },
  "{ :self :key :asyncConstructor:/0 |\n\t\tself.cache.includesIndex(key).if {\n\t\t\tself.cache[key]\n\t\t} {\n\t\t\tasyncConstructor().then { :answer |\n\t\t\t\tself.cache[key] := answer;\n\t\t\t\tanswer\n\t\t\t}\n\t\t}\n\t}",
);

sl.addType(
  true,
  "Cache",
  "Cache",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Cache",
);

sl.addMethod(
  "Cache",
  "Cache",
  "basicDelete",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.delete(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.delete(_key);>\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "basicMatch",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.match(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.match(_key);>\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "basicPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.put(_key, _value);
  },
  "{ :self :key :value |\n\t\t<primitive: return _self.put(_key, _value);>\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "at not implemented, see atIfPresentIfAbsent");
  },
  "{ :self :key |\n\t\tself.error('at not implemented, see atIfPresentIfAbsent')\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, _identity_1, _ifAbsent_0);
  },
  "{ :self :key :ifAbsent:/0 |\n\t\tself.atIfPresentIfAbsent(key, identity:/1, ifAbsent:/0)\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "atIfPresentIfAbsent",
  ["self", "key", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _key, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _ifPresent_1, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(_basicMatch_2(_self, _validKey), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isResponse_1(_answer), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_answer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      });
    });
  },
  "{ :self :key :ifPresent:/1 :ifAbsent:/0 |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.basicMatch(validKey).then { :answer |\n\t\t\tanswer.isResponse.if {\n\t\t\t\tifPresent(answer)\n\t\t\t} {\n\t\t\t\tifAbsent()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "atIfPresent",
  ["self", "key", "ifPresent:/1"],
  function (_self, _key, _ifPresent_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifPresent_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, _ifPresent_1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "atIfPresent: key not present");
    });
  },
  "{ :self :key :ifPresent:/1 |\n\t\tself.atIfPresentIfAbsent(key, ifPresent:/1) {\n\t\t\tself.error('atIfPresent: key not present')\n\t\t}\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    let _validValue = _validateValue_2(_self, _value);
    /* Statements */
    return _basicPut_3(_self, _validKey, _validValue);
  },
  "{ :self :key :value |\n\t\tlet validKey = self.validateKey(key);\n\t\tlet validValue = self.validateValue(value);\n\t\tself.basicPut(validKey, validValue)\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "includesKey not implemented, see atPut and removeKeyIfAbsent",
    );
  },
  "{ :self :key |\n\t\tself.error('includesKey not implemented, see atPut and removeKeyIfAbsent')\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(_basicDelete_2(_self, _validKey), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ifFalse_2(_answer, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      });
    });
  },
  "{ :self :key :aBlock:/0 |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.basicDelete(validKey).then { :answer |\n\t\t\tanswer.ifFalse {\n\t\t\t\taBlock()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "validateKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(_isUrl_1(_key), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _isRequest_1(_key);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _key;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Cache>>validateKey: key not Url or Request");
      },
    );
  },
  "{ :self :key |\n\t\t(key.isUrl | { key.isRequest }).if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('Cache>>validateKey: key not Url or Request')\n\t\t}\n\t}",
);

sl.addMethod(
  "Cache",
  "Cache",
  "validateValue",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isResponse_1(_value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _value;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Cache>>validateValue: value not Response");
    });
  },
  "{ :self :value |\n\t\tvalue.isResponse.if {\n\t\t\tvalue\n\t\t} {\n\t\t\tself.error('Cache>>validateValue: value not Response')\n\t\t}\n\t}",
);
