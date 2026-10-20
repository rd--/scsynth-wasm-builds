sl.addTrait("Compare", "Compare");

sl.addMethodToExistingTrait(
  "Compare",
  "Compare",
  "isLess",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Compare>><");
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.compare(operand) = -1 */\n\t\tself.typeResponsibility('@Compare>><')\n\t}",
);

sl.addMethodToExistingTrait(
  "Compare",
  "Compare",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Compare>><");
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.compare(operand) = -1 */\n\t\tself.typeResponsibility('@Compare>><')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "compare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _strictCompare_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.strictCompare(operand)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "compareOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_f_1(_self), _f_1(_operand));
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tcompare(f(self), f(operand))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isGreater",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLess_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tisLess(operand, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "greaterThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLess_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tisLess(operand, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isGreaterOrEqual",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLessOrEqual_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tisLessOrEqual(operand, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "greaterThanSignEqualsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLessOrEqual_2(_operand, _self);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tisLessOrEqual(operand, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isGreaterOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _isGreater_2(_f_1(_self), _f_1(_operand));
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tisGreater(f(self), f(operand))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isLess",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Compare>><");
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.compare(operand) = -1 */\n\t\tself.typeResponsibility('@Compare>><')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Compare>><");
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.compare(operand) = -1 */\n\t\tself.typeResponsibility('@Compare>><')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isLessOrEqual",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, _operand);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself < operand | {\n\t\t\tself = operand\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "lessThanSignEqualsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, _operand);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself < operand | {\n\t\t\tself = operand\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "isLessOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _isLess_2(_f_1(_self), _f_1(_operand));
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tisLess(f(self), f(operand))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "maxOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(
      _self,
      _operand,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isGreaterOn_3(_self, _operand, _f_1);
      }, ["a", "b"]),
    );
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tminBy(self, operand) { :a :b |\n\t\t\tisGreaterOn(self, operand, f/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "maximum",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(_self, _operand, _isGreater_2);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tminBy(self, operand, isGreater/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "max",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(_self, _operand, _isGreater_2);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tminBy(self, operand, isGreater/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "minBy",
  ["self", "operand", "aBlock/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _aBlock_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _operand;
      }, []),
    );
  }, ["self", "operand", "aBlock/2"]),
  "{ :self :operand :aBlock/2 |\n\t\taBlock(self, operand).if {\n\t\t\tself\n\t\t} {\n\t\t\toperand\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "minOn",
  ["self", "operand", "f/1"],
  sl.annotateFunction(function (_self, _operand, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(
      _self,
      _operand,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isLessOn_3(_self, _operand, _f_1);
      }, ["a", "b"]),
    );
  }, ["self", "operand", "f/1"]),
  "{ :self :operand :f/1 |\n\t\tminBy(self, operand) { :a :b |\n\t\t\tisLessOn(self, operand, f/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "minimum",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(_self, _operand, _isLess_2);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tminBy(self, operand, isLess/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "min",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_3(_self, _operand, _isLess_2);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tminBy(self, operand, isLess/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "minThenMax",
  ["self", "aMin", "aMax"],
  sl.annotateFunction(function (_self, _aMin, _aMax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMin, _aMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_min_2(_self, _aMin), _aMax);
  }, ["self", "aMin", "aMax"]),
  "{ :self :aMin :aMax |\n\t\tself.min(aMin).max(aMax)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "precedes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "lessThanSignVerticalLine",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "precedesOrEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "lessThanSignEqualsSignVerticalLine",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "strictCompare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, _operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.typeResponsibility('@Compare>>strictCompare') */\n\t\t(self = operand).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self < operand).if {\n\t\t\t\t-1\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "lessThanSignEqualsSignGreaterThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, _operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t/* self.typeResponsibility('@Compare>>strictCompare') */\n\t\t(self = operand).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self < operand).if {\n\t\t\t\t-1\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "succeeds",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "verticalLineGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_compare_2(_self, _anObject), 1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) = 1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "succeedsOrEqualTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Compare",
  "Compare",
  "verticalLineGreaterThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_compare_2(_self, _anObject), -1);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.compare(anObject) != -1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Compare",
  "maxOn",
  ["self", "operand", "aBlock/1"],
  sl.annotateFunction(function (_self, _operand, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_aBlock_1(_self), _aBlock_1(_operand)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _operand;
      }, []),
    );
  }, ["self", "operand", "aBlock/1"]),
  "{ :self :operand :aBlock/1 |\n\t\t(self.aBlock > operand.aBlock).if {\n\t\t\tself\n\t\t} {\n\t\t\toperand\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Compare",
  "minOn",
  ["self", "operand", "aBlock/1"],
  sl.annotateFunction(function (_self, _operand, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_aBlock_1(_self), _aBlock_1(_operand)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _operand;
      }, []),
    );
  }, ["self", "operand", "aBlock/1"]),
  "{ :self :operand :aBlock/1 |\n\t\t(self.aBlock < operand.aBlock).if {\n\t\t\tself\n\t\t} {\n\t\t\toperand\n\t\t}\n\t}",
);
