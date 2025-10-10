sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "DiscreteUniformDistribution",
  "discreteUniformDistribution",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _if_3(
      _isList_1(_a),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextRandomFloat_1(_self);
          }, []),
          _size_1(_a),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextRandomFloat_1(_self);
      }, []),
    );
    /* Statements */
    return _floor_1(
      _plusSign_2(_asterisk_2(_u, _plusSign_2(_hyphenMinus_2(_b, _a), 1)), _a),
    );
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tlet u = a.isList.if {\n\t\t\t{ self.nextRandomFloat } ! a.size\n\t\t} {\n\t\t\tself.nextRandomFloat\n\t\t};\n\t\t(u * (b - a + 1) + a).floor\n\t}",
);

sl.addType(
  false,
  "DiscreteUniformDistribution",
  "DiscreteUniformDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DiscreteUniformDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "DiscreteUniformDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "DiscreteUniformDistribution",
);

sl.addMethodToExistingType(
  "DiscreteUniformDistribution",
  "DiscreteUniformDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _discreteUniformDistribution_3(_r, _a_1(_self), _b_1(_self));
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\t{\n\t\t\tr.discreteUniformDistribution(self.a, self.b)\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DiscreteUniformDistribution",
  "DiscreteUniformDistribution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(
      _if_3(
        _isVector_1(_self),
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
          return _transpose_1(_self);
        }, []),
      ),
      2,
    );
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    /* Statements */
    return _initializeSlots_3(_newDiscreteUniformDistribution_0(), _a, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.isVector.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.transpose\n\t\t};\n\t\tnewDiscreteUniformDistribution().initializeSlots(a, b)\n\t}",
);
