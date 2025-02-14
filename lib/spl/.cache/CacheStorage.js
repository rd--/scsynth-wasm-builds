sl.addType(
  false,
  "CacheStorage",
  "CacheStorage",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CacheStorage",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
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
  "CacheStorage",
  "CacheStorage",
  "basicHas",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.has(_key);>\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "basicOpen",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.open(_key);
  },
  "{ :self :key |\n\t\t<primitive: return _self.open(_key);>\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_includesKey_2(_self, _key), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_answer, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _basicOpen_2(_self, _key);
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
  "{ :self :key :ifAbsent:/0 |\n\t\tself.includesKey(key).then { :answer |\n\t\t\tanswer.if {\n\t\t\t\tself.basicOpen(key)\n\t\t\t} {\n\t\t\t\tifAbsent()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "atIfPresent",
  ["self", "key", "aBlock:/1"],
  function (_self, _key, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(_basicOpen_2(_self, _key), function (_cache) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _cache";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_1(_cache);
    });
  },
  "{ :self :key :aBlock:/1 |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.basicOpen(key).then { :cache |\n\t\t\taBlock(cache)\n\t\t}\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "includesKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _basicHas_2(_self, _validKey);
  },
  "{ :self :key |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.basicHas(validKey)\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "removeKeyIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(_includesKey_2(_self, _key), function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_answer, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _basicDelete_2(_self, _key);
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
  "{ :self :key :ifAbsent:/0 |\n\t\tself.includesKey(key).then { :answer |\n\t\t\tanswer.if {\n\t\t\t\tself.basicDelete(key)\n\t\t\t} {\n\t\t\t\tifAbsent()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CacheStorage",
  "CacheStorage",
  "validateKey",
  ["self", "key"],
  function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isString_1(_key), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _key;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "CacheStorage>>validateKey: key not String");
    });
  },
  "{ :self :key |\n\t\tkey.isString.if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('CacheStorage>>validateKey: key not String')\n\t\t}\n\t}",
);
