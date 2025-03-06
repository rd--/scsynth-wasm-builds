/*  Unused: see Tuple  */

sl.addType(
  false,
  "Pair",
  "Pair",
  ["Object"],
  ["first", "second"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Pair",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPair_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_at_2(_self, 1), _at_2(_anObject, 1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_at_2(_self, 2), _at_2(_anObject, 2));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isPair(anObject), { &(=(at(self, 1), at(anObject, 1)), { =(at(self, 2), at(anObject, 2)) }) }) }",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_index, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_index, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _second_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Pair>>at: invalid index");
          }, []),
        );
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index | if((=(index, 1)), { first(self) }, { if((=(index, 2)), { second(self) }, { error('Pair>>at: invalid index') }) }) }",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "atPut",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_index, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_2(_self, _value);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_index, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _second_2(_self, _value);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Pair>>atPut: invalid index");
          }, []),
        );
      }, []),
    );
  }, ["self", "index", "value"]),
  "{ :self :index :value | if((=(index, 1)), { first(self, value) }, { if((=(index, 2)), { second(self, value) }, { error('Pair>>atPut: invalid index') }) }) }",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "swapInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _temporaryValue = _first_1(_self);
    /* Statements */
    _first_2(_self, _second_1(_self));
    return _second_2(_self, _temporaryValue);
  }, ["self"]),
  "{ :self | let temporaryValue = first(self); first(self, second(self)); second(self, temporaryValue) }",
);

sl.addMethodToExistingType(
  "Pair",
  "Pair",
  "swapped",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Pair_2(_second_1(_self), _first_1(_self));
  }, ["self"]),
  "{ :self | Pair(second(self), first(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Pair",
  "Pair",
  ["self", "second"],
  sl.annotateFunction(function (_self, _second) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _second";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPair_0(), _self, _second);
  }, ["self", "second"]),
  "{ :self :second | initializeSlots(newPair(),self, second) }",
);
