sl.addTrait("Number", "Number");

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reverseSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.Fraction(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "lessThanSignTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_self, _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseTo_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself < aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "greaterThanSignTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _greaterThanSign_2(_self, _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseTo_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself > aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "dissimilar",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isCloseTo_2(_self, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber).not\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "exclamationMarkTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isCloseTo_2(_self, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber).not\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "factorialOrGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _factorial_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_plusSign_2(1, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNonNegativeInteger.if {\n\t\t\tself.factorial\n\t\t} {\n\t\t\t(1 + self).gamma\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "exclamationMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _factorial_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_plusSign_2(1, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNonNegativeInteger.if {\n\t\t\tself.factorial\n\t\t} {\n\t\t\t(1 + self).gamma\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mod",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_aNumber, _quotient_2(_self, _aNumber)),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself - (aNumber * self.quotient(aNumber))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "percentSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_aNumber, _quotient_2(_self, _aNumber)),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself - (aNumber * self.quotient(aNumber))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "multiplyAdd",
  ["i", "j", "k"],
  sl.annotateFunction(function (_i, _j, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _i, _j, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_i, _j), _k);
  }, ["i", "j", "k"]),
  "{ :i :j :k |\n\t\t(i * j) + k\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asteriskPlusSign",
  ["i", "j", "k"],
  sl.annotateFunction(function (_i, _j, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _i, _j, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_i, _j), _k);
  }, ["i", "j", "k"]),
  "{ :i :j :k |\n\t\t(i * j) + k\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, -1);
  }, ["self"]),
  "{ :self |\n\t\tself * -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, -1);
  }, ["self"]),
  "{ :self |\n\t\tself * -1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotient",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotientBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotientBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "solidusSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotientBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotientBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_one_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself.one / self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "solidus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_one_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself.one / self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "remainder",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainderBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.remainderBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reverseSolidusReverseSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainderBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.remainderBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negate_1(_one_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _zero_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self > 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\tself.one.negate\n\t\t\t} {\n\t\t\t\tself.zero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asterisk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negate_1(_one_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _zero_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self > 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\tself.one.negate\n\t\t\t} {\n\t\t\t\tself.zero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "similar",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseTo_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "tilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseTo_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tself.negate\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "absArg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _absArg_1(_j_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\tself.j(0).absArg\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _abs = _abs_1(_self);
    /* Statements */
    return _asterisk_2(_abs, _abs);
  }, ["self"]),
  "{ :self |\n\t\tlet abs = self.abs;\n\t\tabs * abs\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _self);
      }, ["each"]),
    );
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arcMinute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.0002908882086657216);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.0002908882086657216\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arcSecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.00000484813681109536);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.00000484813681109536\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "angleVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_cos_1(_self), _sin_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.cos, self.sin]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
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
        return _arg_1(_j_2(_self, 0));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.j(0).arg\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arithmeticGeometricMean",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _self;
    let _b = _aNumber;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_a, _b);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar1 = [
            _asterisk_2(0.5, _plusSign_2(_a, _b)),
            _sqrt_1(_asterisk_2(_a, _b)),
          ];
          /* Statements */
          _a = _at_2(__SplVar1, 1);
          return _b = _at_2(__SplVar1, 2);
        }, [])());
      }, []),
    );
    return _a;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet a = self;\n\t\tlet b = aNumber;\n\t\t{\n\t\t\ta.isVeryCloseTo(b)\n\t\t}.whileFalse {\n\t\t\t[a, b] := [0.5 * (a + b), (a * b).sqrt]\n\t\t};\n\t\ta\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Number>>asInteger");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Number>>asInteger')\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asStringWithCommas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toLocaleString("en-US");
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.toLocaleString('en-US');>\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "barronCurve",
  ["s", "t"],
  sl.annotateFunction(function (_s, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _epsilon = _smallFloatEpsilon_1(1);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, _t),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(_t, _x),
            _plusSign_2(
              _plusSign_2(_x, _asterisk_2(_s, _hyphenMinus_2(_t, _x))),
              _epsilon,
            ),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _solidus_2(
              _asterisk_2(_hyphenMinus_2(1, _t), _hyphenMinus_2(_x, 1)),
              _plusSign_2(
                _hyphenMinus_2(
                  _hyphenMinus_2(1, _x),
                  _asterisk_2(_s, _hyphenMinus_2(_t, _x)),
                ),
                _epsilon,
              ),
            ),
            1,
          );
        }, []),
      );
    }, ["x"]);
  }, ["s", "t"]),
  "{ :s :t |\n\t\tlet epsilon = 1.smallFloatEpsilon;\n\t\t{ :x |\n\t\t\t(x < t).if {\n\t\t\t\t(t * x) / (x + (s * (t - x)) + epsilon)\n\t\t\t} {\n\t\t\t\t((1 - t) * (x - 1)) / (1 - x - (s * (t - x)) + epsilon) + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "basicPlus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1(
          _plusSignPlusSign_2(
            "Number>>basicPlus: operand not a number",
            _aNumber,
          ),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself + aNumber\n\t\t} {\n\t\t\t('Number>>basicPlus: operand not a number' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "basicTimes",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1(
          _plusSignPlusSign_2(
            "Number>>basicTimes: operand not a number: ",
            _aNumber,
          ),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself * aNumber\n\t\t} {\n\t\t\t('Number>>basicTimes: operand not a number: ' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _truncation = _truncate_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _truncation;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, _truncation),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _truncation;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_truncation, 1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet truncation = self.truncate;\n\t\t(self <= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "clamp",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_low, _min_2(_self, _high));
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlow.max(self.min(high))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "continuedFraction",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = _floor_1(_self);
    let _f = _hyphenMinus_2(_self, _i);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_limit, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_isVeryCloseTo_2(_f, 0));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _i);
        _f = _solidus_2(1, _f);
        _i = _floor_1(_f);
        _f = _hyphenMinus_2(_f, _i);
        return _limit = _hyphenMinus_2(_limit, 1);
      }, []),
    );
    _add_2(_answer, _i);
    return _answer;
  }, ["self", "limit"]),
  "{ :self :limit |\n\t\tlet answer = [];\n\t\tlet i = self.floor;\n\t\tlet f = self - i;\n\t\t{\n\t\t\t(limit > 1) & {\n\t\t\t\tf.isVeryCloseTo(0).not\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(i);\n\t\t\tf := 1 / f;\n\t\t\ti := f.floor;\n\t\t\tf := f - i;\n\t\t\tlimit := limit - 1\n\t\t};\n\t\tanswer.add(i);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "continuedFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _continuedFraction_2(_self, 24);
  }, ["self"]),
  "{ :self |\n\t\tself.continuedFraction(24)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "copySignTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _signBit_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_abs_1(_aNumber));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _abs_1(_aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.signBit.if {\n\t\t\taNumber.abs.negate\n\t\t} {\n\t\t\taNumber.abs\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "decrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself - 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "degreesToRadians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.01745329251994329547);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.01745329251994329547 /* 1/180.pi */\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracComb",
  ["x", "z"],
  sl.annotateFunction(function (_x, _z) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _z;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "z"]),
  "{ :x :z |\n\t\tx.isInteger.if {\n\t\t\tz\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracComb",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _diracComb_2(_x, Infinity);
  }, ["x"]),
  "{ :x |\n\t\tx.diracComb(Infinity)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracDelta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aNumber;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isZero.if {\n\t\t\taNumber\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diracDelta_2(_self, Infinity);
  }, ["self"]),
  "{ :self |\n\t\tself.diracDelta(Infinity)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "divisible",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_percentSign_2(_self, _aNumber), 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_aNumber, _self, _divisible_2);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\t(self % aNumber).isVeryCloseTo(0)\n\t\t} {\n\t\t\taNumber.adaptToNumberAndApply(self, divisible:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "divisorSigma",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_k, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_n, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _product_1(
                  _plusSign_2(_column_2(_factorInteger_1(_n), 2), 1),
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_1(_circumflexAccent_2(_divisors_1(_n), _k));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_n, _k, _divisorSigma_2);
      }, []),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\tn.isNumber.if {\n\t\t\t(k = 0).if {\n\t\t\t\t(n = 1).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t(n.factorInteger.column(2) + 1).product\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t(n.divisors ^ k).sum\n\t\t\t}\n\t\t} {\n\t\t\tn.adaptToNumberAndApply(k, divisorSigma:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "downToDo",
  ["self", "anInteger", "aBlock:/1"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _toByDo_4(_self, _anInteger, -1, _aBlock_1);
  }, ["self", "anInteger", "aBlock:/1"]),
  "{ :self :anInteger :aBlock:/1 |\n\t\tself.toByDo(anInteger, -1, aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "double",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself * 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "e",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _circumflexAccent_2(10, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself * (10 ^ aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "epanechnikovKernel",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(0.75, _hyphenMinus_2(1, _asterisk_2(_u, _u)));
  }, ["u"]),
  "{ :u |\n\t\t0.75 * (1 - (u * u))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floor",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _ceiling_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_hyphenMinus_2(_self, _x)), _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _floor_1(_self);
      }, []),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet x = self.ceiling;\n\t\t((self - x).abs < epsilon).if {\n\t\t\tx\n\t\t} {\n\t\t\tself.floor\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _truncation = _truncate_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _truncation;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, _truncation),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _truncation;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_truncation, 1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet truncation = self.truncate;\n\t\t(self >= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation - 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floorLog",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_log_2(_self, _radix));
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.log(radix).floor\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "fold",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _twiceRange = _plusSign_2(_range, _range);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _twiceRange);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_z, _range),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _z = _hyphenMinus_2(_twiceRange, _z);
      }, []),
    );
    return _plusSign_2(_low, _z);
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet twiceRange = range + range;\n\t\tlet z = (self - low) % twiceRange;\n\t\t(z > range).ifTrue {\n\t\t\tz := twiceRange - z\n\t\t};\n\t\tlow + z\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, _integerPart_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself - self.integerPart\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "gaussianKernel",
  ["sigma"],
  sl.annotateFunction(function (_sigma) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(1, _asterisk_2(_sqrt_1(_pi_1(2)), _sigma));
    let _sigmaSquared = _asterisk_2(_sigma, _sigma);
    /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _m,
        _exp_1(
          _negate_1(_solidus_2(_square_1(_u), _asterisk_2(2, _sigmaSquared))),
        ),
      );
    }, ["u"]);
  }, ["sigma"]),
  "{ :sigma |\n\t\tlet m = 1 / (2.pi.sqrt * sigma);\n\t\tlet sigmaSquared = sigma * sigma;\n\t\t{ :u |\n\t\t\tm * (u.square / (2 * sigmaSquared)).negate.exp\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "gompertzFunction",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _a,
        _exp_1(
          _asterisk_2(_exp_1(_asterisk_2(_negate_1(_c), _t)), _negate_1(_b)),
        ),
      );
    }, ["t"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :t |\n\t\t\ta * ((c.negate * t).exp * b.negate).exp\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "halve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisideLambda",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_x), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(1, _x);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs < 1).if {\n\t\t\t(x > 0).if {\n\t\t\t\t1 - x\n\t\t\t} {\n\t\t\t\t1 + x\n\t\t\t}\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisidePi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_lessThanSignEqualsSign_2(_abs_1(_self), 0.5));
  }, ["self"]),
  "{ :self |\n\t\t(self.abs <= 0.5).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisideTheta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
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
          _greaterThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0.5;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self > 0).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t0.5\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _zero_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "increment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself + 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "infinity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, Infinity);
  }, ["self"]),
  "{ :self |\n\t\tself * Infinity\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.truncate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErf",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_abs_1(_x), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(Infinity, _sign_1(_x));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = [0.886226899, -1.645349621, 0.914624893, -0.140543331];
        let _b = [1, -2.118377725, 1.442710462, -0.329097515, 0.012229801];
        let _c = [-1.970840454, -1.62490649, 3.429567803, 1.641345311];
        let _d = [1, 3.543889200, 1.637067800];
        let _z = _asterisk_2(_sign_1(_x), _x);
        let _r = null;
        /* Statements */
        _if_3(
          _lessThanSignEqualsSign_2(_z, 0.7),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x2 = _asterisk_2(_z, _z);
            /* Statements */
            _r = _asterisk_2(
              _z,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(
                    _asterisk_2(
                      _plusSign_2(_asterisk_2(_at_2(_a, 4), _x2), _at_2(_a, 3)),
                      _x2,
                    ),
                    _at_2(_a, 2),
                  ),
                  _x2,
                ),
                _at_2(_a, 1),
              ),
            );
            return _r = _solidus_2(
              _r,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(
                    _asterisk_2(
                      _plusSign_2(
                        _asterisk_2(
                          _plusSign_2(
                            _asterisk_2(_at_2(_b, 5), _x2),
                            _at_2(_b, 4),
                          ),
                          _x2,
                        ),
                        _at_2(_b, 3),
                      ),
                      _x2,
                    ),
                    _at_2(_b, 2),
                  ),
                  _x2,
                ),
                _at_2(_b, 1),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _y = _sqrt_1(
              _negate_1(_log_1(_solidus_2(_hyphenMinus_2(1, _z), 2))),
            );
            /* Statements */
            _r = _plusSign_2(
              _asterisk_2(
                _plusSign_2(
                  _asterisk_2(
                    _plusSign_2(_asterisk_2(_at_2(_c, 4), _y), _at_2(_c, 3)),
                    _y,
                  ),
                  _at_2(_c, 2),
                ),
                _y,
              ),
              _at_2(_c, 1),
            );
            return _r = _solidus_2(
              _r,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(_asterisk_2(_at_2(_d, 3), _y), _at_2(_d, 2)),
                  _y,
                ),
                _at_2(_d, 1),
              ),
            );
          }, []),
        );
        _r = _asterisk_2(_r, _sign_1(_x));
        _z = _asterisk_2(_z, _sign_1(_x));
        _r = _hyphenMinus_2(
          _r,
          _solidus_2(
            _hyphenMinus_2(_erf_1(_r), _z),
            _asterisk_2(
              _solidus_2(2, _sqrt_1(_pi_1(1))),
              _exp_1(_asterisk_2(_negate_1(_r), _r)),
            ),
          ),
        );
        _r = _hyphenMinus_2(
          _r,
          _solidus_2(
            _hyphenMinus_2(_erf_1(_r), _z),
            _asterisk_2(
              _solidus_2(2, _sqrt_1(_pi_1(1))),
              _exp_1(_asterisk_2(_negate_1(_r), _r)),
            ),
          ),
        );
        return _r;
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs >= 1).if {\n\t\t\tInfinity * x.sign\n\t\t} {\n\t\t\tlet a = [0.886226899 -1.645349621 0.914624893 -0.140543331];\n\t\t\tlet b = [1 -2.118377725 1.442710462 -0.329097515 0.012229801];\n\t\t\tlet c = [-1.970840454 -1.62490649 3.429567803 1.641345311];\n\t\t\tlet d = [1 3.543889200 1.637067800];\n\t\t\tlet z = x.sign * x;\n\t\t\tlet r = nil;\n\t\t\t(z <= 0.7).if {\n\t\t\t\tlet x2 = z * z;\n\t\t\t\tr := z * (((a[4] * x2 + a[3]) * x2 + a[2]) * x2 + a[1]);\n\t\t\t\tr := r / ((((b[5] * x2 + b[4]) * x2 + b[3]) * x2 + b[2]) * x2 + b[1])\n\t\t\t} {\n\t\t\t\tlet y = ((1 - z) / 2).log.negate.sqrt;\n\t\t\t\tr := ((c[4] * y + c[3]) * y + c[2]) * y + c[1];\n\t\t\t\tr := r / ((d[3] * y + d[2]) * y + d[1])\n\t\t\t};\n\t\t\tr := r * x.sign;\n\t\t\tz := z * x.sign;\n\t\t\tr := r - ((r.erf - z) / (2 / 1.pi.sqrt * (r.negate * r).exp));\n\t\t\tr := r - ((r.erf - z) / (2 / 1.pi.sqrt * (r.negate * r).exp));\n\t\t\tr\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErfc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_1(
        _standardNormalDistributionInverseCdf_1(_solidus_2(_self, 2)),
      ),
      _sqrt_1(2),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self / 2).standardNormalDistributionInverseCdf.- / 2.sqrt\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErfWinitzki",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = 0.147;
    let _b = _solidus_2(2, _pi_1(_a));
    let _c = _log_1(_hyphenMinus_2(1, _square_1(_x)));
    /* Statements */
    return _asterisk_2(
      _sqrt_1(
        _hyphenMinus_2(
          _sqrt_1(
            _hyphenMinus_2(
              _square_1(_plusSign_2(_b, _solidus_2(_c, 2))),
              _solidus_2(_c, _a),
            ),
          ),
          _plusSign_2(_b, _solidus_2(_c, 2)),
        ),
      ),
      _sign_1(_x),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet a = 0.147;\n\t\tlet b = (2 / a.pi);\n\t\tlet c = (1 - x.square).log;\n\t\t(((b + (c / 2)).square - (c / a)).sqrt - (b + (c / 2))).sqrt * x.sign\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "isCloseToBy");
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon |\n\t\tself.typeResponsibility('isCloseToBy')\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.0001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.0001)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isHalfInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOne_1(_asterisk_2(_abs_1(_fractionalPart_1(_self)), 2));
  }, ["self"]),
  "{ :self |\n\t\t(self.fractionalPart.abs * 2).isOne\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself < self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNegativeZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself >= self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonNegativeInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNonNegative_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isNonNegative\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <= self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself != 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself > self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isOne",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isScalar",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isVeryCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.000000000001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.000000000001)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "kroneckerDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_equalsSign_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\t(self = 0).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "kroneckerDelta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self = aNumber).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_asSmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asSmallFloat.log2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logarithmicIntegralRamanujan",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
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
        return _plusSign_2(
          _plusSign_2(_eulerGamma_1(1), _log_1(_abs_1(_log_1(_self)))),
          _sum_1(_toCollect_3(
            1,
            _limit,
            sl.annotateFunction(function (_k) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _k";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _circumflexAccent_2(_log_1(_self), _k),
                _asterisk_2(_factorial_1(_k), _k),
              );
            }, ["k"]),
          )),
        );
      }, []),
    );
  }, ["self", "limit"]),
  "{ :self :limit |\n\t\tself.isZero.if {\n\t\t\tself\n\t\t} {\n\t\t\t1.eulerGamma + (self.log.abs.log) + 1.toCollect(limit) { :k |\n\t\t\t\t(self.log ^ k) / (k.factorial * k)\n\t\t\t}.sum\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logarithmicIntegral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _logarithmicIntegralRamanujan_2(_self, 9);
  }, ["self"]),
  "{ :self |\n\t\tself.logarithmicIntegralRamanujan(9)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logScale",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _asFloat_1(_self);
    /* Statements */
    return _asterisk_2(
      _sign_1(_x),
      _log10_1(_plusSign_2(1, _abs_1(_solidus_2(_x, _c)))),
    );
  }, ["self", "c"]),
  "{ :self :c |\n\t\tlet x = self.asFloat;\n\t\tx.sign * (1 + (x / c).abs).log10\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logScale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _solidus_2(1, _log_1(10));
    /* Statements */
    return _logScale_2(_self, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet c = 1 / 10.log;\n\t\tself.logScale(c)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logisticSigmoid",
  ["l", "k", "x0"],
  sl.annotateFunction(function (_l, _k, _x0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _l, _k, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_z) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _z";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _l,
        _plusSign_2(
          1,
          _exp_1(_asterisk_2(_hyphenMinus_1(_k), _hyphenMinus_2(_z, _x0))),
        ),
      );
    }, ["z"]);
  }, ["l", "k", "x0"]),
  "{ :l :k :x0 |\n\t\t{ :z |\n\t\t\tl / (1 + (k.- * (z - x0)).exp)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logisticSigmoid",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _plusSign_2(1, _exp_1(_hyphenMinus_1(_z))));
  }, ["z"]),
  "{ :z |\n\t\t1 / (1 + z.-.exp)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logit",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_solidus_2(_x, _hyphenMinus_2(1, _x)));
  }, ["x"]),
  "{ :x |\n\t\t(x / (1 - x)).log\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "metallicMean",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _plusSign_2(_n, _sqrt_1(_plusSign_2(_square_1(_n), 4))),
      2,
    );
  }, ["n"]),
  "{ :n |\n\t\t(n + (n.square + 4).sqrt) / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mixedFractionParts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _integerPart_1(_self);
    /* Statements */
    return [_i, _hyphenMinus_2(_self, _i)];
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.integerPart;\n\t\t[i, self - i]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mod",
  ["m", "n", "d"],
  sl.annotateFunction(function (_m, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _n, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _m,
      _asterisk_2(_n, _floor_1(_solidus_2(_hyphenMinus_2(_m, _d), _n))),
    );
  }, ["m", "n", "d"]),
  "{ :m :n :d |\n\t\tm - (n * ((m - d) / n).floor)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberAbove",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _niceNumberBy_2(
      _self,
      sl.annotateFunction(function (_l, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _l, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_l, _bisect_2(_l, _n));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.niceNumberBy { :l :n |\n\t\t\tl[l.bisect(n)]\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _m = _circumflexAccent_2(10, _negate_1(_floor_1(_log10_1(_abs_1(_n)))));
    let _steps = [1, 1.5, 2, 2.5, 5, 7.5, 10];
    let _z = _aBlock_2(_steps, _asterisk_2(_n, _m));
    /* Statements */
    return _solidus_2(_z, _m);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet n = self;\n\t\tlet m = 10 ^ n.abs.log10.floor.negate;\n\t\tlet steps = [1 1.5 2 2.5 5 7.5 10];\n\t\tlet z = steps.aBlock(n * m);\n\t\tz / m\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberNear",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _niceNumberBy_2(
      _self,
      sl.annotateFunction(function (_l, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _l, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_nearest_2(_l, _n));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.niceNumberBy { :l :n |\n\t\t\tl.nearest(n).first\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "percent",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_n, 0.01);
  }, ["n"]),
  "{ :n |\n\t\tn * 0.01\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinBiasFunction",
  ["b", "x"],
  sl.annotateFunction(function (_b, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_perlinBiasFunction_1(_b), _x);
  }, ["b", "x"]),
  "{ :b :x |\n\t\tb.perlinBiasFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinBiasFunction",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _solidus_2(_log_1(_b), _log_1(0.5));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _circumflexAccent_2(_x, _p);
    }, ["x"]);
  }, ["b"]),
  "{ :b |\n\t\tlet p = b.log / 0.5.log;\n\t\t{ :x |\n\t\t\tx ^ p\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinGainFunction",
  ["g", "x"],
  sl.annotateFunction(function (_g, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_perlinGainFunction_1(_g), _x);
  }, ["g", "x"]),
  "{ :g :x |\n\t\tg.perlinGainFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinGainFunction",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _hyphenMinus_2(1, _g)), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _q = _hyphenMinus_2(1, _asterisk_2(2, _x));
      /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _plusSign_2(_asterisk_2(_p, _q), 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            1,
            _solidus_2(
              _hyphenMinus_2(2, _asterisk_2(2, _x)),
              _asterisk_2(
                2,
                _plusSign_2(_asterisk_2(_p, _hyphenMinus_1(_q)), 1),
              ),
            ),
          );
        }, []),
      );
    }, ["x"]);
  }, ["g"]),
  "{ :g |\n\t\tlet p = (1 / (1 - g)) - 2;\n\t\t{ :x |\n\t\t\tlet q = 1 - (2 * x);\n\t\t\t(x < 0.5).if {\n\t\t\t\tx / ((p * q) + 1)\n\t\t\t} {\n\t\t\t\t1 - ((2 - (2 * x)) / (2 * ((p * q.-) + 1)))\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perrinFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rho = _plasticRatio_1(1);
    let _theta = _arcCos_1(
      _solidus_2(_hyphenMinus_1(_sqrt_1(_circumflexAccent_2(_rho, 3))), 2),
    );
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_rho, _n),
      _asterisk_2(
        _asterisk_2(2, _cos_1(_asterisk_2(_n, _theta))),
        _sqrt_1(_circumflexAccent_2(_rho, _hyphenMinus_1(_n))),
      ),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet rho = 1.plasticRatio;\n\t\tlet theta = ((rho ^ 3).sqrt.- / 2).arcCos;\n\t\t(rho ^ n) + (2 * (n * theta).cos * (rho ^ n.-).sqrt)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "plancksRadiationFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_x, 0),
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
        return _asterisk_2(
          _solidus_2(15, _circumflexAccent_2(_pi_1(1), 4)),
          _solidus_2(
            1,
            _asterisk_2(
              _circumflexAccent_2(_x, 5),
              _hyphenMinus_2(
                _circumflexAccent_2(_e_1(1), _solidus_2(1, _x)),
                1,
              ),
            ),
          ),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x <= 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(15 / (1.pi ^ 4)) * (1 / ((x ^ 5) * ((1.e ^ (1 / x)) - 1)))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLawFrequency",
  ["nu", "t"],
  sl.annotateFunction(function (_nu, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nu, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _speedOfLight_1(1);
    let _h = _planckConstant_1(1);
    let _k = _boltzmannConstant_1(1);
    /* Statements */
    return _asterisk_2(
      _solidus_2(_asterisk_2(_asterisk_2(2, _h), _cube_1(_nu)), _square_1(_c)),
      _solidus_2(
        1,
        _hyphenMinus_2(
          _exp_1(_solidus_2(_asterisk_2(_h, _nu), _asterisk_2(_k, _t))),
          1,
        ),
      ),
    );
  }, ["nu", "t"]),
  "{ :nu :t |\n\t\tlet c = 1.speedOfLight;\n\t\tlet h = 1.planckConstant;\n\t\tlet k = 1.boltzmannConstant;\n\t\t((2 * h * nu.cube) / (c.square)) * (1 / (((h * nu) / (k * t)).exp - 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLawWavelength",
  ["lambda", "t"],
  sl.annotateFunction(function (_lambda, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lambda, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _speedOfLight_1(1);
    let _h = _planckConstant_1(1);
    let _k = _boltzmannConstant_1(1);
    /* Statements */
    return _asterisk_2(
      _solidus_2(
        _asterisk_2(_asterisk_2(2, _h), _square_1(_c)),
        _circumflexAccent_2(_lambda, 5),
      ),
      _solidus_2(
        1,
        _hyphenMinus_2(
          _exp_1(
            _solidus_2(
              _asterisk_2(_h, _c),
              _asterisk_2(_asterisk_2(_lambda, _k), _t),
            ),
          ),
          1,
        ),
      ),
    );
  }, ["lambda", "t"]),
  "{ :lambda :t |\n\t\tlet c = 1.speedOfLight;\n\t\tlet h = 1.planckConstant;\n\t\tlet k = 1.boltzmannConstant;\n\t\t((2 * h * c.square) / (lambda ^ 5)) * (1 / (((h * c) / (lambda * k * t)).exp - 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLaw",
  ["nuOrLambda", "t"],
  sl.annotateFunction(function (_nuOrLambda, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nuOrLambda, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_nuOrLambda, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckRadiationLawFrequency_2(_nuOrLambda, _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckRadiationLawWavelength_2(_nuOrLambda, _t);
      }, []),
    );
  }, ["nuOrLambda", "t"]),
  "{ :nuOrLambda :t |\n\t\t(nuOrLambda > 1).if {\n\t\t\tnuOrLambda.planckRadiationLawFrequency(t)\n\t\t} {\n\t\t\tnuOrLambda.planckRadiationLawWavelength(t)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "powerMod",
  ["base", "exponent", "modulo"],
  sl.annotateFunction(function (_base, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _base, _exponent, _modulo";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_exponent, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_modulo, 1),
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
            } /* Temporaries */
            let _r = 1;
            let _b = _percentSign_2(_base, _modulo);
            let _e = _exponent;
            let _m = _modulo;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSign_2(_e, 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifTrue_2(
                  _equalsSign_2(_percentSign_2(_e, 2), 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _r = _percentSign_2(_asterisk_2(_r, _b), _m);
                  }, []),
                );
                _b = _percentSign_2(_asterisk_2(_b, _b), _m);
                return _e = _floor_1(_solidus_2(_e, 2));
              }, []),
            );
            return _r;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _modularInverse_2(
          _circumflexAccent_2(_base, _abs_1(_exponent)),
          _modulo,
        );
      }, []),
    );
  }, ["base", "exponent", "modulo"]),
  "{ :base :exponent :modulo |\n\t\t(exponent > 0).if {\n\t\t\t(modulo = 1).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet r = 1;\n\t\t\t\tlet b = base % modulo;\n\t\t\t\tlet e = exponent;\n\t\t\t\tlet m = modulo;\n\t\t\t\t{ e > 0 }.whileTrue {\n\t\t\t\t\t((e % 2) = 1).ifTrue {\n\t\t\t\t\t\tr := (r * b) % m\n\t\t\t\t\t};\n\t\t\t\t\tb := (b * b) % m;\n\t\t\t\t\te := (e / 2).floor\n\t\t\t\t};\n\t\t\t\tr\n\t\t\t}\n\t\t} {\n\t\t\t(base ^ exponent.abs).modularInverse(modulo)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "powerRange",
  ["a", "b", "r"],
  sl.annotateFunction(function (_a, _b, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _a;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_r, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _next = _asterisk_2(_next, _r);
      }, []),
    );
    return _answer;
  }, ["a", "b", "r"]),
  "{ :a :b :r |\n\t\tlet answer = [];\n\t\tlet next = a;\n\t\t{\n\t\t\t(r > 1).if {\n\t\t\t\tnext.abs <= b.abs\n\t\t\t} {\n\t\t\t\tnext.abs >= b.abs\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * r\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "printStringShowingDecimalPlaces",
  ["self", "placesDesired"],
  sl.annotateFunction(function (_self, _placesDesired) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _placesDesired";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_placesDesired, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _printString_1(_round_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _rounder = _circumflexAccent_2(10, _placesDesired);
        let _round = _round_2(_self, _reciprocal_1(_rounder));
        let _prefix = _if_3(
          _isNegative_1(_round),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "-";
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "";
          }, []),
        );
        let _roundFractionPart = _round_1(
          _asterisk_2(_fractionalPart_1(_abs_1(_round)), _rounder),
        );
        /* Statements */
        return _stringCatenate_1([
          _prefix,
          _printString_1(_truncate_1(_integerPart_1(_abs_1(_round)))),
          ".",
          _padLeft_3(_printString_1(_roundFractionPart), [_placesDesired], "0"),
        ]);
      }, []),
    );
  }, ["self", "placesDesired"]),
  "{ :self :placesDesired |\n\t\t(placesDesired <= 0).if {\n\t\t\tself.round.printString\n\t\t} {\n\t\t\tlet rounder = 10 ^ placesDesired;\n\t\t\tlet round = self.round(rounder.reciprocal);\n\t\t\tlet prefix = round.isNegative.if { '-' } { '' };\n\t\t\tlet roundFractionPart = (round.abs.fractionalPart * rounder).round; /* truncate? */\n\t\t\t[\n\t\t\t\tprefix,\n\t\t\t\tround.abs.integerPart.truncate.printString,\n\t\t\t\t'.',\n\t\t\t\troundFractionPart.printString.padLeft([placesDesired], '0')\n\t\t\t].stringCatenate\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotientBy",
  ["self", "aNumber", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_aNumber, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Number>>quotient: divideByZero");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_solidus_2(_self, _aNumber));
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/1"]),
  "{ :self :aNumber :aBlock:/1 |\n\t\t(aNumber = 0).if {\n\t\t\t'@Number>>quotient: divideByZero'.error\n\t\t} {\n\t\t\taBlock(self / aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotientRemainder",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return [_quotient_2(_self, _aNumber), _remainder_2(_self, _aNumber)];
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t[\n\t\t\tself.quotient(aNumber),\n\t\t\tself.remainder(aNumber)\n\t\t]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "radiansToDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 57.29577951308232286465);
  }, ["self"]),
  "{ :self |\n\t\tself * 57.29577951308232286465 /* 1/180.pi */\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "raisedToSmallInteger",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _bitShift_2(1, _highBit_1(_hyphenMinus_2(_operand, 1)));
    let _result = _one_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _result = _square_1(_result);
        _ifFalse_2(
          _equalsSign_2(_bitAnd_2(_operand, _count), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _result = _asterisk_2(_result, _self);
          }, []),
        );
        return _count = _bitShift_2(_count, -1);
      }, []),
    );
    return _result;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet count = 1.bitShift((operand - 1).highBit);\n\t\tlet result = self.one;\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tresult := result.square;\n\t\t\t(operand.bitAnd(count) = 0).ifFalse {\n\t\t\t\tresult := result * self\n\t\t\t};\n\t\t\tcount := count.bitShift(-1)\n\t\t};\n\t\tresult\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "raisedToInteger",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isInteger_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Numnber>>raisedToInteger: operand is not an Integer");
      }, []),
    );
    return _if_3(
      _equalsSign_2(_operand, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_operand, 1),
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
            return _if_3(
              _lessThanSign_2(_operand, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _reciprocal_1(
                  _raisedToInteger_2(_self, _negate_1(_operand)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _isLargeInteger_1(_operand),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(
                      _asLargeInteger_1(_self),
                      _operand,
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _raisedToSmallInteger_2(_self, _operand);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isInteger.ifFalse {\n\t\t\t'Numnber>>raisedToInteger: operand is not an Integer'.error\n\t\t};\n\t\t(operand = 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(operand = 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(operand < 0).if {\n\t\t\t\t\tself.raisedToInteger(operand.negate).reciprocal\n\t\t\t\t} {\n\t\t\t\t\toperand.isLargeInteger.if {\n\t\t\t\t\t\tself.asLargeInteger ^ operand\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.raisedToSmallInteger(operand)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "ramp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _zero = _zero_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_self, _zero),
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
        return _zero;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet zero = self.zero;\n\t\t(self >= zero).if {\n\t\t\tself\n\t\t} {\n\t\t\tzero\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "real",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_self, _zero_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self, self.zero]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "remainderBy",
  ["self", "aNumber", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_quotientBy_3(_self, _aNumber, _aBlock_1), _aNumber),
    );
  }, ["self", "aNumber", "aBlock:/1"]),
  "{ :self :aNumber :aBlock:/1 |\n\t\tself - (self.quotientBy(aNumber, aBlock:/1) * aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar2, 1);
    let _max = _at_2(__SplVar2, 2);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min));
  }, ["self", "a"]),
  "{ :self :a |\n\t\tlet [min, max] = a;\n\t\t(self - min) / (max - min)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar3, 1);
    let _max = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SplVar4, 1);
    let _yMax = _at_2(__SplVar4, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min)),
        _hyphenMinus_2(_yMax, _yMin),
      ),
      _yMin,
    );
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tlet [min, max] = a;\n\t\tlet [yMin, yMax] = b;\n\t\t((self - min) / (max - min)) * (yMax - yMin) + yMin\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "richardsCurve",
  ["a", "k", "b", "nu", "q", "c"],
  sl.annotateFunction(function (_a, _k, _b, _nu, _q, _c) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _k, _b, _nu, _q, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _a,
        _solidus_2(
          _hyphenMinus_2(_k, _a),
          _circumflexAccent_2(
            _plusSign_2(
              _c,
              _asterisk_2(_q, _exp_1(_hyphenMinus_2(0, _asterisk_2(_b, _t)))),
            ),
            _solidus_2(1, _nu),
          ),
        ),
      );
    }, ["t"]);
  }, ["a", "k", "b", "nu", "q", "c"]),
  "{ :a :k :b :nu :q :c |\n\t\t{ :t |\n\t\t\ta + ((k - a) / ((c + (q * (0 - (b * t)).exp)) ^ (1 / nu)))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundDown",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_floor_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).floor * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundDown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.floor\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "round",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_round_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).round * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_plusSign_2(_self, _solidus_2(_sign_1(_self), 2)));
  }, ["self"]),
  "{ :self |\n\t\t(self + (self.sign / 2)).truncate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundToPrecision",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scalar = _circumflexAccent_2(10, _aNumber);
    /* Statements */
    return _solidus_2(_round_1(_asterisk_2(_self, _scalar)), _scalar);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet scalar = 10 ^ aNumber;\n\t\t(self * scalar).round / scalar\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTowardsZero",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _roundUp_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _roundDown_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self < 0).if {\n\t\t\tself.roundUp(aNumber)\n\t\t} {\n\t\t\tself.roundDown(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTowardsZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _roundTowardsZero_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.roundTowardsZero(1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundUp",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_ceiling_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).ceiling * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundUp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ceiling_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.ceiling\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickBiasFunction",
  ["b", "x"],
  sl.annotateFunction(function (_b, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_schlickBiasFunction_1(_b), _x);
  }, ["b", "x"]),
  "{ :b :x |\n\t\tb.schlickBiasFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickBiasFunction",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _b), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _x,
        _plusSign_2(_asterisk_2(_p, _hyphenMinus_2(1, _x)), 1),
      );
    }, ["x"]);
  }, ["b"]),
  "{ :b |\n\t\tlet p = (1 / b) - 2;\n\t\t{ :x |\n\t\t\tx / ((p * (1 - x)) + 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickGainFunction",
  ["g", "x"],
  sl.annotateFunction(function (_g, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_schlickGainFunction_1(_g), _x);
  }, ["g", "x"]),
  "{ :g :x |\n\t\tg.schlickGainFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickGainFunction",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _g), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _q = _hyphenMinus_2(1, _asterisk_2(2, _x));
      /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _plusSign_2(_asterisk_2(_p, _q), 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _hyphenMinus_2(_asterisk_2(_p, _q), _x),
            _hyphenMinus_2(_asterisk_2(_p, _q), 1),
          );
        }, []),
      );
    }, ["x"]);
  }, ["g"]),
  "{ :g |\n\t\tlet p = (1 / g) - 2;\n\t\t{ :x |\n\t\t\tlet q = 1 - (2 * x);\n\t\t\t(x < 0.5).if {\n\t\t\t\tx / ((p * q) + 1)\n\t\t\t} {\n\t\t\t\t((p * q) - x) / ((p * q) - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "sign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _copySignTo_2(_aNumber, _self);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.copySignTo(self)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "signBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isNegativeZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, 0);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNegativeZero | {\n\t\t\tself < 0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "smallFloatEpsilon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _smallFloatEpsilon_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself * system.smallFloatEpsilon\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "smallFloatMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _smallFloatMax_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself * system.smallFloatMax\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "softPlus",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_plusSign_2(1, _exp_1(_x)));
  }, ["x"]),
  "{ :x |\n\t\t(1 + x.exp).log\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "softSign",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_x, _plusSign_2(1, _abs_1(_x)));
  }, ["x"]),
  "{ :x |\n\t\tx / (1 + x.abs)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "stope",
  ["x", "p", "y"],
  sl.annotateFunction(function (_x, _p, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _p, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(
      _plusSign_2(
        _x,
        _asterisk_2(
          _p,
          _hyphenMinus_2(_asList_1(_nonemptyRange_3(1, _y, 1)), 1),
        ),
      ),
      _asterisk_2,
    );
  }, ["x", "p", "y"]),
  "{ :x :p :y |\n\t\t(x + (p * ([1 .. y] - 1))).reduce(*)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "strictlyPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself > 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "swishFunction",
  ["beta"],
  sl.annotateFunction(function (_beta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _x,
        _plusSign_2(1, _exp_1(_asterisk_2(_negate_1(_beta), _x))),
      );
    }, ["x"]);
  }, ["beta"]),
  "{ :beta |\n\t\t{ :x |\n\t\t\tx / (1 + (beta.negate * x).exp)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "symmetricPower",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_circumflexAccent_2(_negate_1(_self), _aNumber));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isNegative.if {\n\t\t\t(self.negate ^ aNumber).negate\n\t\t} {\n\t\t\tself ^ aNumber\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toByDo",
  ["self", "stop", "step", "aBlock:/1"],
  sl.annotateFunction(function (_self, _stop, _step, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _stop, _step, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _equalsSign_2(_step, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Number>>toByDo: step must be non-zero");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextValue = _self;
        /* Statements */
        return _if_3(
          _lessThanSign_2(_step, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_stop, _nextValue);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _aBlock_1(_nextValue);
                return _nextValue = _plusSign_2(_nextValue, _step);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSignEqualsSign_2(_stop, _nextValue);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _aBlock_1(_nextValue);
                return _nextValue = _plusSign_2(_nextValue, _step);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _self;
  }, ["self", "stop", "step", "aBlock:/1"]),
  "{ :self :stop :step :aBlock:/1 |\n\t\t(step = 0).if {\n\t\t\t'@Number>>toByDo: step must be non-zero'.error\n\t\t} {\n\t\t\tlet nextValue = self;\n\t\t\t(step < 0).if {\n\t\t\t\t{\n\t\t\t\t\tstop <= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t{\n\t\t\t\t\tstop >= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toCollect",
  ["start", "end", "aBlock:/1"],
  sl.annotateFunction(function (_start, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _end, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _plusSign_2(_hyphenMinus_2(_end, _start), 1);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_size, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _List_1(_size);
        let _i = 1;
        let _j = _start;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _size);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_answer, _i, _aBlock_1(_j));
            _i = _plusSign_2(_i, 1);
            return _j = _plusSign_2(_j, 1);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["start", "end", "aBlock:/1"]),
  "{ :start :end :aBlock:/1 |\n\t\tlet size = end - start + 1;\n\t\t(size < 1).if {\n\t\t\t[]\n\t\t} {\n\t\t\tlet answer = List(size);\n\t\t\tlet i = 1;\n\t\t\tlet j = start;\n\t\t\t{\n\t\t\t\ti <= size\n\t\t\t}.whileTrue {\n\t\t\t\tanswer[i] := aBlock(j);\n\t\t\t\ti := i + 1;\n\t\t\t\tj := j + 1\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toDoWithBreak",
  ["self", "end", "aBlock:/2"],
  sl.annotateFunction(function (_self, _end, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _self;
    /* Statements */
    _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_index, _end);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _aBlock_2(_index, _return_1);
          return _index = _plusSign_2(_index, 1);
        }, []),
      );
    }, ["return:/1"]));
    return _self;
  }, ["self", "end", "aBlock:/2"]),
  "{ :self :end :aBlock:/2 |\n\t\tlet index = self;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\tindex <= end\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(index, return:/1);\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toDo",
  ["self", "end", "aBlock:/1"],
  sl.annotateFunction(function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_index, _end);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_index);
        return _index = _plusSign_2(_index, 1);
      }, []),
    );
    return _self;
  }, ["self", "end", "aBlock:/1"]),
  "{ :self :end :aBlock:/1 |\n\t\tlet index = self;\n\t\t{\n\t\t\tindex <= end\n\t\t}.whileTrue {\n\t\t\taBlock(index);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "truncate",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_quotient_2(_self, _aNumber), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotient(aNumber) * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "twice",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself * 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitaryDivisorSigma",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _factorInteger_1(_n);
        let _b = _collect_2(
          _a,
          sl.annotateFunction(function (_x) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _x";
              throw new Error(errorMessage);
            } /* Statements */
            return _circumflexAccent_2(_at_2(_x, 1), _at_2(_x, 2));
          }, ["x"]),
        );
        let _c = _circumflexAccent_2(_b, _k);
        let _d = _plusSign_2(1, _c);
        /* Statements */
        return _product_1(_d);
      }, []),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\t(n = 1).if {\n\t\t\t1\n\t\t} {\n\t\t\tlet a = n.factorInteger;\n\t\t\tlet b = a.collect { :x |\n\t\t\t\tx[1] ^ x[2]\n\t\t\t};\n\t\t\tlet c = b ^ k;\n\t\t\tlet d = 1 + c;\n\t\t\td.product\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_lessThanSignEqualsSign_2(_abs_1(_self), 0.5));
  }, ["self"]),
  "{ :self |\n\t\t(self.abs <= 0.5).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitize",
  ["self", "dx"],
  sl.annotateFunction(function (_self, _dx) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dx";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_self), _dx),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
    );
  }, ["self", "dx"]),
  "{ :self :dx |\n\t\t(self.abs < dx).if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitStep",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_greaterThanSign_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\t(self > 0).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_self, -1, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_self, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _betweenAnd_3(_self, 0, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(-1, 0).if {\n\t\t\tself + 1\n\t\t} {\n\t\t\tself.betweenAnd(0, 1).if {\n\t\t\t\t1 - self\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitVector",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_n, 0);
    /* Statements */
    _atPut_3(_answer, _k, 1);
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = List(n, 0);\n\t\tanswer[k] := 1;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "upOrDownToDo",
  ["self", "end", "aBlock:/1"],
  sl.annotateFunction(function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _if_3(
      _lessThanSign_2(_end, _self),
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
    /* Statements */
    return _toByDo_4(_self, _end, _step, _aBlock_1);
  }, ["self", "end", "aBlock:/1"]),
  "{ :self :end :aBlock:/1 |\n\t\tlet step = (end < self).if { -1 } { 1 };\n\t\tself.toByDo(end, step, aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "wrap",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, _low);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self = _plusSign_2(_self, _range);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_self, _high);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self = _hyphenMinus_2(_self, _range);
      }, []),
    );
    return _self;
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\t{ self < low }.whileTrue { self := self + range };\n\t\t{ self > high }.whileTrue { self := self - range };\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "wrapExclusive",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _range);
    /* Statements */
    return _plusSign_2(_low, _z);
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet z = (self - low) % range;\n\t\tlow + z\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Number",
  "isNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Number",
  "rescaleBlock",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar5, 1);
    let _max = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SplVar6, 1);
    let _yMax = _at_2(__SplVar6, 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _asterisk_2(
          _solidus_2(_hyphenMinus_2(_x, _min), _hyphenMinus_2(_max, _min)),
          _hyphenMinus_2(_yMax, _yMin),
        ),
        _yMin,
      );
    }, ["x"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet [min, max] = a;\n\t\tlet [yMin, yMax] = b;\n\t\t{ :x |\n\t\t\t((x - min) / (max - min)) * (yMax - yMin) + yMin\n\t\t}\n\t}",
);
