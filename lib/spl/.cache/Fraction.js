sl.addType(
  false,
  "Fraction",
  "Fraction",
  ["Object", "Magnitude", "Number"],
  ["numerator", "denominator"],
);

sl.copyTraitToType(
  "Object",
  "Fraction",
);

sl.copyTraitToType(
  "Magnitude",
  "Fraction",
);

sl.copyTraitToType(
  "Number",
  "Fraction",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isFraction_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _equalsSign_2(_numerator_1(_self), _numerator_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _equalsSign_2(
              _denominator_1(_self),
              _denominator_1(_anObject),
            );
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToFractionAndApply_3(_anObject, _self, _equalsSign_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isFraction.if {\n\t\t\t\tself.numerator = anObject.numerator & {\n\t\t\t\t\tself.denominator = anObject.denominator\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToFractionAndApply(self, =)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "asterisk",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isFraction_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _d1 = _gcd_2(_numerator_1(_self), _denominator_1(_aNumber));
      let _d2 = _gcd_2(_denominator_1(_self), _numerator_1(_aNumber));
      let _numerator = _asterisk_2(
        _solidusSolidus_2(_numerator_1(_self), _d1),
        _solidusSolidus_2(_numerator_1(_aNumber), _d2),
      );
      /* Statements */
      return _if_3(
        _ampersand_2(_equalsSign_2(_d2, _denominator_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_d1, _denominator_1(_aNumber));
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ReducedFraction_2(_numerator, _one_1(_numerator));
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _Fraction_2(
            _numerator,
            _asterisk_2(
              _solidusSolidus_2(_denominator_1(_self), _d2),
              _solidusSolidus_2(_denominator_1(_aNumber), _d1),
            ),
          );
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToFractionAndApply_3(_aNumber, _self, _asterisk_2);
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isFraction.if {\n\t\t\tlet d1 = self.numerator.gcd(aNumber.denominator);\n\t\t\tlet d2 = self.denominator.gcd(aNumber.numerator);\n\t\t\tlet numerator = (self.numerator // d1) * (aNumber.numerator // d2);\n\t\t\t(d2 = self.denominator & {\n\t\t\t\td1 = aNumber.denominator\n\t\t\t}).if {\n\t\t\t\t{- preference: answer proper integer -}\n\t\t\t\tReducedFraction(numerator, numerator.one)\n\t\t\t} {\n\t\t\t\tFraction(\n\t\t\t\t\tnumerator,\n\t\t\t\t\t(self.denominator // d2) * (aNumber.denominator // d1)\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\taNumber.adaptToFractionAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "plusSign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(
        _plusSign_2(
          _numerator_1(_self),
          _asterisk_2(_denominator_1(_self), _asInteger_1(_aNumber)),
        ),
        _denominator_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isFraction_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _d = _gcd_2(_denominator_1(_self), _denominator_1(_aNumber));
        let _d1 = _solidusSolidus_2(_denominator_1(_aNumber), _d);
        let _d2 = _solidusSolidus_2(_denominator_1(_self), _d);
        let _n = _plusSign_2(
          _asterisk_2(_numerator_1(_self), _d1),
          _asterisk_2(_numerator_1(_aNumber), _d2),
        );
        /* Statements */
        _d1 = _asterisk_2(_d1, _d2);
        _d2 = _gcd_2(_n, _d);
        _n = _solidusSolidus_2(_n, _d2);
        _d = _asterisk_2(_d1, _solidusSolidus_2(_d, _d2));
        return _if_3(_equalsSign_2(_d, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ReducedFraction_2(_n, _one_1(_n));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ReducedFraction_2(_n, _d);
        });
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToFractionAndApply_3(_aNumber, _self, _plusSign_2);
      });
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tReducedFraction(\n\t\t\t\tself.numerator + (self.denominator * aNumber.asInteger),\n\t\t\t\tself.denominator\n\t\t\t)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tlet d = self.denominator.gcd(aNumber.denominator);\n\t\t\t\tlet d1 = aNumber.denominator // d;\n\t\t\t\tlet d2 = self.denominator // d;\n\t\t\t\tlet n = (self.numerator * d1) + (aNumber.numerator * d2);\n\t\t\t\td1 := d1 * d2;\n\t\t\t\td2 := n.gcd(d);\n\t\t\t\tn := n // d2;\n\t\t\t\td := d1 * (d // d2);\n\t\t\t\t(d = 1).if {\n\t\t\t\t\t{- preference: answer proper integer -}\n\t\t\t\t\tReducedFraction(n, n.one)\n\t\t\t\t} {\n\t\t\t\t\tReducedFraction(n, d)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, +)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "hyphenMinus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(
        _hyphenMinus_2(
          _numerator_1(_self),
          _asterisk_2(_denominator_1(_self), _asInteger_1(_aNumber)),
        ),
        _denominator_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isFraction_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_self, _negated_1(_aNumber));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToFractionAndApply_3(_aNumber, _self, _hyphenMinus_2);
      });
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tReducedFraction(\n\t\t\t\tself.numerator - (self.denominator * aNumber.asInteger),\n\t\t\t\tself.denominator\n\t\t\t)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself + aNumber.negated\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, -)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "solidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(_self, _ReducedFraction_2(1, _asInteger_1(_aNumber)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isFraction_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(_self, _reciprocal_1(_aNumber));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToFractionAndApply_3(_aNumber, _self, _solidus_2);
      });
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tself * ReducedFraction(1, aNumber.asInteger)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself * aNumber.reciprocal\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, /)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "circumflexAccent",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _raisedToInteger_2(_self, _aNumber);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isFraction_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _circumflexAccent_2(_asFloat_1(_self), _aNumber);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToFractionAndApply_3(_aNumber, _self, _circumflexAccent_2);
      });
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isInteger.if {\n\t\t\tself.raisedToInteger(aNumber)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself.asFloat ^ aNumber\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, ^)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "lessThanSign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isFraction_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(
        _asterisk_2(_numerator_1(_self), _denominator_1(_aNumber)),
        _asterisk_2(_numerator_1(_aNumber), _denominator_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToFractionAndApply_3(_aNumber, _self, _lessThanSign_2);
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isFraction.if {\n\t\t\t(self.numerator * aNumber.denominator) < (aNumber.numerator * self.denominator)\n\t\t} {\n\t\t\taNumber.adaptToFractionAndApply(self, <)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "lessThanSignEqualsSign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isFraction_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(
        _asterisk_2(_numerator_1(_self), _denominator_1(_aNumber)),
        _asterisk_2(_numerator_1(_aNumber), _denominator_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToFractionAndApply_3(
        _aNumber,
        _self,
        _lessThanSignEqualsSign_2,
      );
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isFraction.if {\n\t\t\t(self.numerator * aNumber.denominator) <= (aNumber.numerator * self.denominator)\n\t\t} {\n\t\t\taNumber.adaptToFractionAndApply(self, <=)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_ReducedFraction_2(_anInteger, 1), _self);
  },
  "{ :self :anInteger :aBlock:/2 |\n\t\tReducedFraction(anInteger, 1).aBlock(self)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_asFraction_1(_aNumber), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aNumber, _asFloat_1(_self));
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isInteger.if {\n\t\t\taNumber.asFraction.aBlock(self)\n\t\t} {\n\t\t\taNumber.aBlock(self.asFloat)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _asFloat_1(_numerator_1(_self)),
      _asFloat_1(_denominator_1(_self)),
    );
  },
  "{ :self |\n\t\tself.numerator.asFloat / self.denominator.asFloat\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "asFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "asSmallFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asFloat_1(_self);
  },
  "{ :self |\n\t\tself.asFloat\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1([_numerator_1(_self), _denominator_1(_self)]);
  },
  "{ :self |\n\t\t(self.numerator, self.denominator)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "dividesImmediately",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _solidus_2(_self, _aNumber);
    /* Statements */
    return _ampersand_2(_equalsSign_2(_denominator_1(_r), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPrime_1(_numerator_1(_r));
    });
  },
  "{ :self :aNumber |\n\t\tlet r = self / aNumber;\n\t\tr.denominator = 1 & {\n\t\t\tr.numerator.isPrime\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "gcd",
  ["self", "aFraction"],
  function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isFraction_1(_aFraction), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _d = _gcd_2(_denominator_1(_self), _denominator_1(_aFraction));
      /* Statements */
      return _ReducedFraction_2(
        _gcd_2(
          _asterisk_2(
            _numerator_1(_self),
            _solidusSolidus_2(_denominator_1(_aFraction), _d),
          ),
          _asterisk_2(
            _numerator_1(_aFraction),
            _solidusSolidus_2(_denominator_1(_self), _d),
          ),
        ),
        _asterisk_2(
          _solidusSolidus_2(_denominator_1(_self), _d),
          _denominator_1(_aFraction),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToFractionAndApply_3(_aFraction, _self, _lcm_2);
    });
  },
  "{ :self :aFraction |\n\t\taFraction.isFraction.if {\n\t\t\tlet d = self.denominator.gcd(aFraction.denominator);\n\t\t\tReducedFraction(\n\t\t\t\t(self.numerator * (aFraction.denominator // d)).gcd(\n\t\t\t\t\taFraction.numerator * (self.denominator // d)\n\t\t\t\t),\n\t\t\t\t(self.denominator // d * aFraction.denominator)\n\t\t\t)\n\t\t} {\n\t\t\taFraction.adaptToFractionAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.0001);
  },
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.0001)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_asFloat_1(_self), _asFloat_1(_aNumber), _epsilon);
  },
  "{ :self :aNumber :epsilon |\n\t\tself.asFloat.isCloseToBy(aNumber.asFloat, epsilon)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_denominator_1(_self), 1);
  },
  "{ :self |\n\t\tself.denominator = 1\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isNegative_1(_numerator_1(_self));
  },
  "{ :self |\n\t\tself.numerator.isNegative\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isPowerOfTwo_1(_numerator_1(_self));
    });
  },
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.numerator.isPowerOfTwo\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isSquareSuperparticular",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isSuperparticular_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _not_1(_isSquareFree_1(_numerator_1(_self)));
    });
  },
  "{ :self |\n\t\tself.isSuperparticular & {\n\t\t\tself.numerator.isSquareFree.not\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isSuperparticular",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(
      _hyphenMinus_2(_numerator_1(_self), 1),
      _denominator_1(_self),
    );
  },
  "{ :self |\n\t\tself.numerator - 1 = self.denominator\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isVeryCloseTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, _aNumber);
  },
  "{ :self :aNumber |\n\t\tself = aNumber\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isZero_1(_numerator_1(_self));
  },
  "{ :self |\n\t\tself.numerator.isZero\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "lcm",
  ["self", "aFraction"],
  function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isFraction_1(_aFraction), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(
        _solidusSolidus_2(_self, _gcd_2(_self, _aFraction)),
        _aFraction,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToFractionAndApply_3(_aFraction, _self, _lcm_2);
    });
  },
  "{ :self :aFraction |\n\t\taFraction.isFraction.if {\n\t\t\tself // self.gcd(aFraction) * aFraction\n\t\t} {\n\t\t\taFraction.adaptToFractionAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "limitDenominator",
  ["self", "maxDenominator"],
  function (_self, _maxDenominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDenominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_maxDenominator, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "limitDenominator: illegal maxDenominator");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_denominator_1(_self), _maxDenominator),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _self;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let _p0 = 0;
          let _q0 = 1;
          let _p1 = 1;
          let _q1 = 0;
          let _n = _numerator_1(_self);
          let _d = _denominator_1(_self);
          let _continue = true;
          let _k = null;
          let _bound1 = null;
          let _bound2 = null;
          /* Statements */
          _whileTrue_2(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _continue;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Temporaries */
            let _a = _solidusSolidus_2(_n, _d);
            let _q2 = _plusSign_2(_q0, _asterisk_2(_a, _q1));
            /* Statements */
            return _if_3(_greaterThanSign_2(_q2, _maxDenominator), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _continue = false;
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return /* List Assignment */ (function () {
                const __genSym8 = [
                  _p1,
                  _q1,
                  _plusSign_2(_p0, _asterisk_2(_a, _p1)),
                  _q2,
                  _d,
                  _hyphenMinus_2(_n, _asterisk_2(_a, _d)),
                ];
                _p0 = _at_2(__genSym8, 1);
                _q0 = _at_2(__genSym8, 2);
                _p1 = _at_2(__genSym8, 3);
                _q1 = _at_2(__genSym8, 4);
                _n = _at_2(__genSym8, 5);
                _d = _at_2(__genSym8, 6);
              })();
            });
          });
          _k = _solidusSolidus_2(_hyphenMinus_2(_maxDenominator, _q0), _q1);
          _bound1 = _ReducedFraction_2(
            _plusSign_2(_p0, _asterisk_2(_k, _p1)),
            _plusSign_2(_q0, _asterisk_2(_k, _q1)),
          );
          _bound2 = _ReducedFraction_2(_p1, _q1);
          return _if_3(
            _lessThanSignEqualsSign_2(
              _abs_1(_hyphenMinus_2(_bound2, _self)),
              _abs_1(_hyphenMinus_2(_bound1, _self)),
            ),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _bound2;
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _bound1;
            },
          );
        },
      );
    });
  },
  "{ :self :maxDenominator |\n\t\t(maxDenominator < 1).if {\n\t\t\tself.error('limitDenominator: illegal maxDenominator')\n\t\t} {\n\t\t\t(self.denominator <= maxDenominator).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tlet p0 = 0;\n\t\t\t\tlet q0 = 1;\n\t\t\t\tlet p1 = 1;\n\t\t\t\tlet q1 = 0;\n\t\t\t\tlet n = self.numerator;\n\t\t\t\tlet d = self.denominator;\n\t\t\t\tlet continue = true;\n\t\t\t\tlet k = nil;\n\t\t\t\tlet bound1 = nil;\n\t\t\t\tlet bound2 = nil;\n\t\t\t\t{\n\t\t\t\t\tcontinue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlet a = n // d;\n\t\t\t\t\tlet q2 = q0 + (a * q1);\n\t\t\t\t\t(q2 > maxDenominator).if {\n\t\t\t\t\t\tcontinue := false\n\t\t\t\t\t} {\n\t\t\t\t\t\t[p0, q0, p1, q1, n, d] := [p1, q1, p0 + (a * p1), q2, d, n - (a * d)]\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tk := (maxDenominator - q0) // q1;\n\t\t\t\tbound1 := ReducedFraction(p0 + (k * p1), q0 + (k * q1));\n\t\t\t\tbound2 := ReducedFraction(p1, q1);\n\t\t\t\t((bound2 - self).abs <= (bound1 - self).abs).if {\n\t\t\t\t\tbound2\n\t\t\t\t} {\n\t\t\t\t\tbound1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _log_1(_asFloat_1(_self));
  },
  "{ :self |\n\t\tself.asFloat.log\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "mediant",
  ["self", "aFraction"],
  function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fraction_2(
      _plusSign_2(_numerator_1(_self), _numerator_1(_aFraction)),
      _plusSign_2(_denominator_1(_self), _denominator_1(_aFraction)),
    );
  },
  "{ :self :aFraction |\n\t\tFraction(\n\t\t\tself.numerator + aFraction.numerator,\n\t\t\tself.denominator + aFraction.denominator\n\t\t)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ReducedFraction_2(
      _negated_1(_numerator_1(_self)),
      _denominator_1(_self),
    );
  },
  "{ :self |\n\t\tReducedFraction(self.numerator.negated, self.denominator)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "normalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_denominator_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Fraction>>normalize: zeroDenominatorError");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _x = _asterisk_2(_numerator_1(_self), _sign_1(_denominator_1(_self)));
      let _y = _abs_1(_denominator_1(_self));
      let _d = _gcd_2(_x, _y);
      /* Statements */
      _numerator_2(_self, _solidusSolidus_2(_x, _d));
      _denominator_2(_self, _solidusSolidus_2(_y, _d));
      return _self;
    });
  },
  "{ :self |\n\t\t(self.denominator = 0).if {\n\t\t\tself.error('Fraction>>normalize: zeroDenominatorError')\n\t\t} {\n\t\t\tlet x = self.numerator * self.denominator.sign;\n\t\t\tlet y = self.denominator.abs;\n\t\t\tlet d = x.gcd(y);\n\t\t\tself.numerator := x // d;\n\t\t\tself.denominator := y // d;\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "normalized",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _normalize_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.normalize\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ReducedFraction_2(1, 1);
  },
  "{ :self |\n\t\tReducedFraction(1, 1)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "parts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_numerator_1(_self), _denominator_1(_self)];
  },
  "{ :self |\n\t\t[self.numerator, self.denominator]\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _printString_1(_numerator_1(_self)),
      "/",
      _printString_1(_denominator_1(_self)),
    ]);
  },
  "{ :self |\n\t\t[self.numerator.printString, '/', self.denominator.printString].join\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "raisedToInteger",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_anInteger), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _one_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_anInteger, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _raisedToInteger_2(_reciprocal_1(_self), _negated_1(_anInteger));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _n = _asInteger_1(_anInteger);
        /* Statements */
        return _ReducedFraction_2(
          _raisedToInteger_2(_numerator_1(_self), _n),
          _raisedToInteger_2(_denominator_1(_self), _n),
        );
      });
    });
  },
  "{ :self :anInteger |\n\t\tanInteger.isZero.if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(anInteger < 0).if {\n\t\t\t\tself.reciprocal.raisedToInteger(anInteger.negated)\n\t\t\t} {\n\t\t\t\tlet n = anInteger.asInteger;\n\t\t\t\tReducedFraction(\n\t\t\t\t\tself.numerator.raisedToInteger(n),\n\t\t\t\t\tself.denominator.raisedToInteger(n)\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_abs_1(_numerator_1(_self)), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(
        _asterisk_2(_denominator_1(_self), _numerator_1(_self)),
        _one_1(_denominator_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Fraction_2(_denominator_1(_self), _numerator_1(_self));
    });
  },
  "{ :self |\n\t\t(self.numerator.abs = 1).if {\n\t\t\t{- preference: answer proper integer -}\n\t\t\tReducedFraction(self.denominator * self.numerator, self.denominator.one)\n\t\t} {\n\t\t\tFraction(self.denominator, self.numerator)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "simplify",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_denominator_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Fraction>>simplify: zeroDenominatorError");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _x = _asterisk_2(_numerator_1(_self), _sign_1(_denominator_1(_self)));
      let _y = _abs_1(_denominator_1(_self));
      let _d = _gcd_2(_x, _y);
      /* Statements */
      _numerator_2(_self, _solidusSolidus_2(_x, _d));
      _denominator_2(_self, _solidusSolidus_2(_y, _d));
      return _if_3(_equalsSign_2(_denominator_1(_self), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      });
    });
  },
  "{ :self |\n\t\t(self.denominator = 0).if {\n\t\t\tself.error('Fraction>>simplify: zeroDenominatorError')\n\t\t} {\n\t\t\tlet x = self.numerator * self.denominator.sign;\n\t\t\tlet y = self.denominator.abs;\n\t\t\tlet d = x.gcd(y);\n\t\t\tself.numerator := x // d;\n\t\t\tself.denominator := y // d;\n\t\t\t(self.denominator = 1).if {\n\t\t\t\t{- preference: answer proper integer -}\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "simplified",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _simplify_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.simplify\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_asFloat_1(_self));
  },
  "{ :self |\n\t\tself.asFloat.sqrt\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Fraction(",
      _storeString_1(_numerator_1(_self)),
      ", ",
      _storeString_1(_denominator_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Fraction(',\n\t\t\tself.numerator.storeString,\n\t\t\t', ',\n\t\t\tself.denominator.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _quotient_2(_numerator_1(_self), _denominator_1(_self));
  },
  "{ :self |\n\t\tself.numerator.quotient(self.denominator)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "unicode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _indexOf_2(_unicodeFractionsTable_1(_system), _self);
  },
  "{ :self |\n\t\tsystem.unicodeFractionsTable.indexOf(self)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "weightedMediant",
  ["self", "aFraction", "m", "n"],
  function (_self, _aFraction, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _aFraction, _m, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _a = _numerator_1(_self);
    let _b = _denominator_1(_self);
    let _c = _numerator_1(_aFraction);
    let _d = _denominator_1(_aFraction);
    /* Statements */
    return _solidus_2(
      _plusSign_2(_asterisk_2(_m, _a), _asterisk_2(_n, _c)),
      _plusSign_2(_asterisk_2(_m, _b), _asterisk_2(_n, _d)),
    );
  },
  "{ :self :aFraction :m :n |\n\t\tlet a = self.numerator;\n\t\tlet b = self.denominator;\n\t\tlet c = aFraction.numerator;\n\t\tlet d = aFraction.denominator;\n\t\t((m * a) + (n * c)) / ((m * b) + (n * d))\n\t}",
);

sl.addMethod(
  "Fraction",
  "Fraction",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ReducedFraction_2(0, 1);
  },
  "{ :self |\n\t\tReducedFraction(0, 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "Fraction",
  "unicodeFractionsTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cached_3(_self, "unicodeFractionsTable", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return Object.fromEntries([[
        "⅒",
        _Fraction_2(
          1,
          10,
        ),
      ], [
        "⅑",
        _Fraction_2(
          1,
          9,
        ),
      ], [
        "⅛",
        _Fraction_2(
          1,
          8,
        ),
      ], [
        "⅐",
        _Fraction_2(
          1,
          7,
        ),
      ], [
        "⅙",
        _Fraction_2(
          1,
          6,
        ),
      ], [
        "⅕",
        _Fraction_2(
          1,
          5,
        ),
      ], [
        "¼",
        _Fraction_2(
          1,
          4,
        ),
      ], [
        "⅓",
        _Fraction_2(
          1,
          3,
        ),
      ], [
        "⅜",
        _Fraction_2(
          3,
          8,
        ),
      ], [
        "⅖",
        _Fraction_2(
          2,
          5,
        ),
      ], [
        "½",
        _Fraction_2(
          1,
          2,
        ),
      ], [
        "⅗",
        _Fraction_2(
          3,
          5,
        ),
      ], [
        "⅝",
        _Fraction_2(
          5,
          8,
        ),
      ], [
        "⅔",
        _Fraction_2(
          2,
          3,
        ),
      ], [
        "¾",
        _Fraction_2(
          3,
          4,
        ),
      ], [
        "⅘",
        _Fraction_2(
          4,
          5,
        ),
      ], [
        "⅚",
        _Fraction_2(
          5,
          6,
        ),
      ], [
        "⅞",
        _Fraction_2(
          7,
          8,
        ),
      ]]);
    });
  },
  "{ :self |\n\t\tself.cached('unicodeFractionsTable') {\n\t\t\t(\n\t\t\t\t'⅒': 1/10, {- 0.1 -}\n\t\t\t\t'⅑': 1/9, {- 1.111 -}\n\t\t\t\t'⅛': 1/8, {- 0.125 -}\n\t\t\t\t'⅐': 1/7, {- 0.142 -}\n\t\t\t\t'⅙': 1/6, {- 0.166 -}\n\t\t\t\t'⅕': 1/5, {- 0.2 -}\n\t\t\t\t'¼': 1/4, {- 0.25 -}\n\t\t\t\t'⅓': 1/3, {- 0.333 -}\n\t\t\t\t'⅜': 3/8, {- 0.375 -}\n\t\t\t\t'⅖': 2/5, {- 0.4 -}\n\t\t\t\t'½': 1/2, {- 0.5 -}\n\t\t\t\t'⅗': 3/5, {- 0.6 -}\n\t\t\t\t'⅝': 5/8, {- 0.625 -}\n\t\t\t\t'⅔': 2/3, {- 0.666-}\n\t\t\t\t'¾': 3/4, {- 0.75 -}\n\t\t\t\t'⅘': 4/5, {- 0.8 -}\n\t\t\t\t'⅚': 5/6, {- 0.833 -}\n\t\t\t\t'⅞': 7/8 {- 0.875 -}\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.aBlock(Fraction(self, self.one))\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Fraction",
  "ReducedFraction",
  ["numerator", "denominator"],
  function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_denominator), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_denominator, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_1("@Integer>>ReducedFraction: zeroDenominatorError");
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _initializeSlots_3(
          _newFraction_0(),
          _asInteger_1(_numerator),
          _asInteger_1(_denominator),
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_denominator, _numerator, _Fraction_2);
    });
  },
  "{ :numerator :denominator |\n\t\tdenominator.isInteger.if {\n\t\t\t(denominator = 0).if {\n\t\t\t\t'@Integer>>ReducedFraction: zeroDenominatorError'.error\n\t\t\t} {\n\t\t\t\tnewFraction().initializeSlots(\n\t\t\t\t\tnumerator.asInteger,\n\t\t\t\t\tdenominator.asInteger\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\tdenominator.adaptToNumberAndApply(numerator, Fraction:/2)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Fraction",
  "Fraction",
  ["numerator", "denominator"],
  function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_denominator), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _simplify_1(_ReducedFraction_2(_numerator, _denominator));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_denominator, _numerator, _Fraction_2);
    });
  },
  "{ :numerator :denominator |\n\t\tdenominator.isInteger.if {\n\t\t\tReducedFraction(numerator, denominator).simplify\n\t\t} {\n\t\t\tdenominator.adaptToNumberAndApply(numerator, Fraction:/2)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Fraction",
  "r",
  ["numerator", "denominator"],
  function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fraction_2(_numerator, _denominator);
  },
  "{ :numerator :denominator |\n\t\tFraction(numerator, denominator)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aFraction, _each);
    });
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taFraction.aBlock(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Fraction",
  "r",
  ["numerator", "denominator"],
  function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fraction_2(_numerator, _denominator);
  },
  "{ :numerator :denominator |\n\t\tFraction(numerator, denominator)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_asSmallFloat_1(_aFraction), _self);
    });
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taFraction.aBlock(Fraction(self, self.one))\n\t\t} {\n\t\t\taFraction.asSmallFloat.aBlock(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "asApproximateFraction",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _rationalize_2(_self, _epsilon);
  },
  "{ :self :epsilon |\n\t\tself.rationalize(epsilon)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "asFractionOver",
  ["self", "denominator"],
  function (_self, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _denominator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Fraction_2(
        _rounded_1(_asterisk_2(_self, _denominator)),
        _denominator,
      );
    });
  },
  "{ :self :denominator |\n\t\tself.isInteger.if {\n\t\t\tReducedFraction(self, 1)\n\t\t} {\n\t\t\tFraction(\n\t\t\t\t(self * denominator).rounded,\n\t\t\t\tdenominator\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "asFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asFraction_2(_self, 1e-5);
  },
  "{ :self |\n\t\tself.asFraction(1E-5)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "asFraction",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _rationalize_2(_self, _epsilon);
    });
  },
  "{ :self :epsilon |\n\t\tself.isInteger.if {\n\t\t\tReducedFraction(self, 1)\n\t\t} {\n\t\t\tself.rationalize(epsilon)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Fraction",
  "rationalize",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _c = _continuedFraction_2(_abs_1(_self), 16);
    let _l = _semiconvergents_2(_c, _epsilon);
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_l, function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_abs_1(_hyphenMinus_2(_self, _r)), _epsilon),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _return_1(_copySignTo_2(_self, _r));
          },
        );
      });
      return _copySignTo_2(_self, _last_1(_l));
    });
  },
  "{ :self :epsilon |\n\t\tlet c = self.abs.continuedFraction(16);\n\t\tlet l = c.semiconvergents(epsilon);\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tl.do { :r |\n\t\t\t\t((self - r).abs < epsilon).ifTrue {\n\t\t\t\t\tself.copySignTo(r).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.copySignTo(l.last)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Fraction",
  "parseFraction",
  ["self", "separator"],
  function (_self, _separator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _separator";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesSubstring_2(_self, _separator), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _parts = _splitBy_2(_self, _separator);
      /* Statements */
      return _if_3(_equalsSign_2(_size_1(_parts), 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Fraction_2(
          _parseInteger_2(_at_2(_parts, 1), 10),
          _parseInteger_2(_at_2(_parts, 2), 10),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "parseFraction: parse failed");
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ReducedFraction_2(_parseInteger_2(_self, 10), 1);
    });
  },
  "{ :self :separator |\n\t\tself.includesSubstring(separator).if {\n\t\t\tlet parts = self.splitBy(separator);\n\t\t\t(parts.size = 2).if {\n\t\t\t\tFraction(parts[1].parseInteger(10), parts[2].parseInteger(10))\n\t\t\t} {\n\t\t\t\tself.error('parseFraction: parse failed')\n\t\t\t}\n\t\t} {\n\t\t\tReducedFraction(self.parseInteger(10), 1)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Fraction",
  "parseFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _parseFraction_2(_self, "/");
  },
  "{ :self |\n\t\tself.parseFraction('/')\n\t}",
);
