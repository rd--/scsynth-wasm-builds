sl.addTrait("Cache", "Cache");

sl.addMethodToExistingTrait(
  "Cache",
  "Cache",
  "cache",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Cache>>cache");
  },
  "{ :self | typeResponsibility(self,'@Cache>>cache') }",
);

sl.addMethodToExistingTrait(
  "Cache",
  "Cache",
  "cached",
  ["self", "key", "constructor:/0"],
  function (_self, _key, _constructor_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _constructor_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_cache_1(_self), _key, _constructor_0);
  },
  "{ :self :key :constructor:/0 | atIfAbsentPut(cache(self),key, constructor:/0) }",
);

sl.addMethodToExistingTrait(
  "Cache",
  "Cache",
  "whenCached",
  ["self", "key", "asyncConstructor:/0"],
  function (_self, _key, _asyncConstructor_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _key, _asyncConstructor_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesIndex_2(_cache_1(_self), _key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_cache_1(_self), _key);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _then_2(_asyncConstructor_0(), function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_cache_1(_self), _key, _answer);
        return _answer;
      });
    });
  },
  "{ :self :key :asyncConstructor:/0 | if(includesIndex(cache(self),key), { at(cache(self), key) }, { then(asyncConstructor(), { :answer | atPut(cache(self), key, answer); answer }) }) }",
);

sl.addType(
  true,
  "Cache",
  "Cache",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Cache",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "basicDelete",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.delete(_key);
  },
  "{ :self :key | <primitive: return _self.delete(_key);>\n }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "basicMatch",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.match(_key);
  },
  "{ :self :key | <primitive: return _self.match(_key);>\n }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "basicPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.put(_key, _value);
  },
  "{ :self :key :value | <primitive: return _self.put(_key, _value);>\n }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "at",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "at not implemented, see atIfPresentIfAbsent");
  },
  "{ :self :key | error(self,'at not implemented, see atIfPresentIfAbsent') }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, _identity_1, _ifAbsent_0);
  },
  "{ :self :key :ifAbsent:/0 | atIfPresentIfAbsent(self,key, identity:/1, ifAbsent:/0) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "atIfPresentIfAbsent",
  ["self", "key", "ifPresent:/1", "ifAbsent:/0"],
  function (_self, _key, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _ifPresent_1, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(_basicMatch_2(_self, _validKey), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isResponse_1(_answer), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_answer);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifAbsent_0();
      });
    });
  },
  "{ :self :key :ifPresent:/1 :ifAbsent:/0 | let validKey = validateKey(self,key); then(basicMatch(self,validKey), { :answer | if(isResponse(answer), { ifPresent(answer) }, { ifAbsent() }) }) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "atIfPresent",
  ["self", "key", "ifPresent:/1"],
  function (_self, _key, _ifPresent_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifPresent_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(_self, _key, _ifPresent_1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "atIfPresent: key not present");
    });
  },
  "{ :self :key :ifPresent:/1 | atIfPresentIfAbsent(self, key, ifPresent:/1, { error(self,'atIfPresent: key not present') }) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "atPut",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    let _validValue = _validateValue_2(_self, _value);
    /* Statements */
    return _basicPut_3(_self, _validKey, _validValue);
  },
  "{ :self :key :value | let validKey = validateKey(self,key); let validValue = validateValue(self,value); basicPut(self,validKey, validValue) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(
      _self,
      "includesKey not implemented, see atPut and removeKeyIfAbsent",
    );
  },
  "{ :self :key | error(self,'includesKey not implemented, see atPut and removeKeyIfAbsent') }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "removeKeyIfAbsent",
  ["self", "key", "aBlock:/0"],
  function (_self, _key, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(_basicDelete_2(_self, _validKey), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifFalse_2(_answer, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      });
    });
  },
  "{ :self :key :aBlock:/0 | let validKey = validateKey(self,key); then(basicDelete(self,validKey), { :answer | ifFalse(answer, { aBlock() }) }) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "validateKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(_isUrl_1(_key), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isRequest_1(_key);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _key;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Cache>>validateKey: key not Url or Request");
      },
    );
  },
  "{ :self :key | if((|(isUrl(key), { isRequest(key) })), { key }, { error(self,'Cache>>validateKey: key not Url or Request') }) }",
);

sl.addMethodToExistingType(
  "Cache",
  "Cache",
  "validateValue",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isResponse_1(_value), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _value;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Cache>>validateValue: value not Response");
    });
  },
  "{ :self :value | if(isResponse(value), { value }, { error(self,'Cache>>validateValue: value not Response') }) }",
);
