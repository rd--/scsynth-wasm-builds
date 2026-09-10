sl.addTrait("ProbabilityDistribution", "ProbabilityDistribution");

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "cdf");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('cdf')\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "cumulativeDistributionFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "cdf");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('cdf')\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "cdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_cdf_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.cdf.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "cumulativeDistributionFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_cdf_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.cdf.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "cumulativeDistributionFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cdf_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.cdf\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "hazardFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_hazardFunction_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.hazardFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "inverseCdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_inverseCdf_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.inverseCdf.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "inverseSurvivalFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_inverseSurvivalFunction_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.inverseSurvivalFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "pdf");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('pdf')\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "probabilityDensityFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "pdf");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('pdf')\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "pdf",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_pdf_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.pdf.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "probabilityDensityFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_pdf_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.pdf.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "probabilityDensityFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pdf_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.pdf\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "quantile",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_quantile_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.quantile.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "survivalFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _f_1 = _cdf_1(_self);
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(1, _f_1(_x));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet f:/1 = self.cdf;\n\t\t{ :x |\n\t\t\t1 - f(x)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "ProbabilityDistribution",
  "ProbabilityDistribution",
  "survivalFunction",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_survivalFunction_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.survivalFunction.value(x)\n\t}",
);
