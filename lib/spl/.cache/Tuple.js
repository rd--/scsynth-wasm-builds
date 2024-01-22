sl.addTrait("Tuple", "Tuple");

sl.addTraitMethod(
  "Tuple",
  "Tuple",
  "isTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuple",
  "isTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addType(
  false,
  "TwoTuple",
  "Tuple",
  ["Object", "Tuple"],
  ["first", "second"],
);

sl.copyTraitToType(
  "Object",
  "TwoTuple",
);

sl.copyTraitToType(
  "Tuple",
  "TwoTuple",
);

sl.addMethod(
  "TwoTuple",
  "Tuple",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isTwoTuple_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_first_1(_self), _first_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_second_1(_self), _second_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isTwoTuple & {\n\t\t\tself.first = anObject.first & {\n\t\t\t\tself.second = anObject.second\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "TwoTuple",
  "Tuple",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addType(
  false,
  "ThreeTuple",
  "Tuple",
  ["Object", "Tuple"],
  ["first", "second", "third"],
);

sl.copyTraitToType(
  "Object",
  "ThreeTuple",
);

sl.copyTraitToType(
  "Tuple",
  "ThreeTuple",
);

sl.addMethod(
  "ThreeTuple",
  "Tuple",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isThreeTuple_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_first_1(_self), _first_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _and_2(
            _equals_2(_second_1(_self), _second_1(_anObject)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _equals_2(_third_1(_self), _third_1(_anObject));
            },
          );
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isThreeTuple & {\n\t\t\tself.first = anObject.first & {\n\t\t\t\tself.second = anObject.second & {\n\t\t\t\t\tself.third = anObject.third\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "ThreeTuple",
  "Tuple",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addType(
  false,
  "FourTuple",
  "Tuple",
  ["Object", "Tuple"],
  ["first", "second", "third", "fourth"],
);

sl.copyTraitToType(
  "Object",
  "FourTuple",
);

sl.copyTraitToType(
  "Tuple",
  "FourTuple",
);

sl.addMethod(
  "FourTuple",
  "Tuple",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isFourTuple_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_first_1(_self), _first_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _and_2(
            _equals_2(_second_1(_self), _second_1(_anObject)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _and_2(
                _equals_2(_third_1(_self), _third_1(_anObject)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _equals_2(_fourth_1(_self), _fourth_1(_anObject));
                },
              );
            },
          );
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isFourTuple & {\n\t\t\tself.first = anObject.first & {\n\t\t\t\tself.second = anObject.second & {\n\t\t\t\t\tself.third = anObject.third & {\n\t\t\t\t\t\tself.fourth = anObject.fourth\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "FourTuple",
  "Tuple",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 4;
  },
  "{ :self |\n\t\t4\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuple",
  "Tuple",
  ["first", "second"],
  function (_first, _second) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _first, _second";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newTwoTuple_0(), _first, _second);
  },
  "{ :first :second |\n\t\tnewTwoTuple().initializeSlots(first, second)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuple",
  "Tuple",
  ["first", "second", "third"],
  function (_first, _second, _third) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _first, _second, _third";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newThreeTuple_0(), _first, _second, _third);
  },
  "{ :first :second :third |\n\t\tnewThreeTuple().initializeSlots(first, second, third)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Tuple",
  "Tuple",
  ["first", "second", "third", "fourth"],
  function (_first, _second, _third, _fourth) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _first, _second, _third, _fourth";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newFourTuple_0(),
      _first,
      _second,
      _third,
      _fourth,
    );
  },
  "{ :first :second :third :fourth |\n\t\tnewFourTuple().initializeSlots(first, second, third, fourth)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Tuple",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_self), [
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _Tuple_2(_at_2(_self, 1), _at_2(_self, 2));
      }),
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _Tuple_3(_at_2(_self, 1), _at_2(_self, 2), _at_2(_self, 3));
      }),
      _minusGreaterThan_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _Tuple_4(
          _at_2(_self, 1),
          _at_2(_self, 2),
          _at_2(_self, 3),
          _at_2(_self, 4),
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("@Sequenceable>>asTuple");
    });
  },
  "{ :self |\n\t\tself.size.caseOfOtherwise([\n\t\t\t{ 2 } -> { (self[1], self[2]) },\n\t\t\t{ 3 } -> { (self[1], self[2], self[3]) },\n\t\t\t{ 4 } -> { (self[1], self[2], self[3], self[4]) }\n\t\t]) {\n\t\t\t'@Sequenceable>>asTuple'.error\n\t\t}\n\t}",
);
