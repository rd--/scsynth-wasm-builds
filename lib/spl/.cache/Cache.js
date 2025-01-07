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
