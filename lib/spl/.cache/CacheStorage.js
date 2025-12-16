sl.addType(
  true,
  "CacheStorage",
  "CacheStorage",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CacheStorage",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "atIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _includesKey_2(_self, _key),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _answer,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedOpen_2(_self, _key);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifAbsent_0();
          }, []),
        );
      }, ["answer"]),
    );
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 |\n\t\tself.includesKey(key).then { :answer |\n\t\t\tanswer.if {\n\t\t\t\tself.uncheckedOpen(key)\n\t\t\t} {\n\t\t\t\tifAbsent()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "atIfPresent",
  ["self", "key", "ifPresent:/1"],
  sl.annotateFunction(function (_self, _key, _ifPresent_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifPresent_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _then_2(
      _uncheckedOpen_2(_self, _key),
      sl.annotateFunction(function (_cache) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _cache";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_cache);
      }, ["cache"]),
    );
  }, ["self", "key", "ifPresent:/1"]),
  "{ :self :key :ifPresent:/1 |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.uncheckedOpen(key).then { :cache |\n\t\t\tifPresent(cache)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "includesKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _validKey = _validateKey_2(_self, _key);
    /* Statements */
    return _uncheckedHas_2(_self, _validKey);
  }, ["self", "key"]),
  "{ :self :key |\n\t\tlet validKey = self.validateKey(key);\n\t\tself.uncheckedHas(validKey)\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "removeKeyIfAbsent",
  ["self", "key", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _key, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _includesKey_2(_self, _key),
      sl.annotateFunction(function (_answer) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _answer";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _answer,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedDelete_2(_self, _key);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifAbsent_0();
          }, []),
        );
      }, ["answer"]),
    );
  }, ["self", "key", "ifAbsent:/0"]),
  "{ :self :key :ifAbsent:/0 |\n\t\tself.includesKey(key).then { :answer |\n\t\t\tanswer.if {\n\t\t\t\tself.uncheckedDelete(key)\n\t\t\t} {\n\t\t\t\tifAbsent()\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "validateKey",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isString_1(_key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _key;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "CacheStorage>>validateKey: key not String");
      }, []),
    );
  }, ["self", "key"]),
  "{ :self :key |\n\t\tkey.isString.if {\n\t\t\tkey\n\t\t} {\n\t\t\tself.error('CacheStorage>>validateKey: key not String')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "uncheckedDelete",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.delete(_key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\t<primitive: return _self.delete(_key);>\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "uncheckedHas",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\t<primitive: return _self.has(_key);>\n\t}",
);

sl.addMethodToExistingType(
  "CacheStorage",
  "CacheStorage",
  "uncheckedOpen",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.open(_key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\t<primitive: return _self.open(_key);>\n\t}",
);
