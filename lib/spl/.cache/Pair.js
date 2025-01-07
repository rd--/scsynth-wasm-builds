/*  Unused: see Tuple  */

sl.addType(
  false,
  "Pair",
  "Pair",
  ["Object"],
  ["first", "second"],
);

sl.copyTraitToType(
  "Object",
  "Pair",
);

sl.addMethod(
  "Pair",
  "Pair",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isPair_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_at_2(_self, 1), _at_2(_anObject, 1)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, 2), _at_2(_anObject, 2));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isPair & {\n\t\t\tself[1] = anObject[1] & {\n\t\t\t\tself[2] = anObject[2]\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Pair",
  "Pair",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _first_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_index, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _second_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Pair>>at: invalid index");
      });
    });
  },
  "{ :self :index |\n\t\t(index = 1).if {\n\t\t\tself.first\n\t\t} {\n\t\t\t(index = 2).if {\n\t\t\t\tself.second\n\t\t\t} {\n\t\t\t\t'Pair>>at: invalid index'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Pair",
  "Pair",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _first_2(_self, _value);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_index, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _second_2(_self, _value);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Pair>>atPut: invalid index");
      });
    });
  },
  "{ :self :index :value |\n\t\t(index = 1).if {\n\t\t\tself.first := value\n\t\t} {\n\t\t\t(index = 2).if {\n\t\t\t\tself.second := value\n\t\t\t} {\n\t\t\t\t'Pair>>atPut: invalid index'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Pair",
  "Pair",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Pair",
  "Pair",
  "swapInPlace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _temporaryValue = _first_1(_self);
    /* Statements */
    _first_2(_self, _second_1(_self));
    return _second_2(_self, _temporaryValue);
  },
  "{ :self |\n\t\tlet temporaryValue = self.first;\n\t\tself.first := self.second;\n\t\tself.second := temporaryValue\n\t}",
);

sl.addMethod(
  "Pair",
  "Pair",
  "swapped",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Pair_2(_second_1(_self), _first_1(_self));
  },
  "{ :self |\n\t\tPair(self.second, self.first)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Pair",
  "Pair",
  ["self", "second"],
  function (_self, _second) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _second";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPair_0(), _self, _second);
  },
  "{ :self :second |\n\t\tnewPair().initializeSlots(self, second)\n\t}",
);
