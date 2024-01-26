/* {- Requires: Array Number Object -} */

sl.addType(
  false,
  "Complex",
  "Complex",
  ["Object"],
  ["real", "imaginary"],
);

sl.copyTraitToType(
  "Object",
  "Complex",
);

sl.addMethod(
  "Complex",
  "Complex",
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
    return _equalBy_3(_self, _anObject, _equals_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "times",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(
        _minus_2(_times_2(_a, _c), _times_2(_b, _d)),
        _plus_2(_times_2(_a, _d), _times_2(_b, _c)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _times_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex((a * c) - (b * d), (a * d) + (b * c))\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "plus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(_plus_2(_a, _c), _plus_2(_b, _d));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _plus_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a + c, b + d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "minus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(_minus_2(_a, _c), _minus_2(_b, _d));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _minus_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a - c, b - d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "dividedBy",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(
        _dividedBy_2(
          _plus_2(_times_2(_a, _c), _times_2(_b, _d)),
          _plus_2(_times_2(_c, _c), _times_2(_d, _d)),
        ),
        _dividedBy_2(
          _minus_2(_times_2(_b, _c), _times_2(_a, _d)),
          _plus_2(_times_2(_c, _c), _times_2(_d, _d)),
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _dividedBy_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(\n\t\t\t\t((a * c) + (b * d)) / ((c * c) + (d * d)),\n\t\t\t\t((b * c) - (a * d)) / ((c * c) + (d * d))\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, /)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "raisedTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_aNumber, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _asComplex_1(1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equals_2(_aNumber, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _self;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equals_2(_self, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _if_3(_lessThan_2(_aNumber, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _error_2(_self, "^: zero divide");
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _self;
          });
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _exp_1(_times_2(_aNumber, _log_1(_self)));
        });
      });
    });
  },
  "{ :self :aNumber |\n\t\t(aNumber = 0).if {\n\t\t\t1.asComplex\n\t\t} {\n\t\t\t(aNumber = 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(self = 0).if {\n\t\t\t\t\t(aNumber < 0).if {\n\t\t\t\t\t\tself.error('^: zero divide')\n\t\t\t\t\t} {\n\t\t\t\t\t\tself\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t(aNumber * self.log).exp\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_absSquared_1(_self));
  },
  "{ :self |\n\t\tself.absSquared.sqrt\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "absSquared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _times_2(_real_1(_self), _real_1(_self)),
      _times_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  },
  "{ :self |\n\t\t(self.real * self.real) + (self.imaginary * self.imaginary)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, function (_element) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _element";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_element, _self);
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :element |\n\t\t\taBlock(element, self)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asComplex_1(_aFraction), _self);
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taBlock(aFraction.asComplex, self)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asComplex_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(aNumber.asComplex, self)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "arg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Zero has no argument");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _arcTan_2(_imaginary_1(_self), _real_1(_self));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Zero has no argument')\n\t\t} {\n\t\t\tself.imaginary.arcTan(self.real)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "closeTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(
          _closeTo_2(_real_1(_self), _real_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _closeTo_2(_imaginary_1(_self), _imaginary_1(_anObject));
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _closeTo_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :anObject |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isComplex.if {\n\t\t\t\tself.real.closeTo(anObject.real) & {\n\t\t\t\t\tself.imaginary.closeTo(anObject.imaginary)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToComplexAndApply(self, closeTo:/2)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "conjugated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_real_1(_self), _negated_1(_imaginary_1(_self)));
  },
  "{ :self |\n\t\tComplex(self.real, self.imaginary.negated)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _cosh_1(_i_1(_self));
  },
  "{ :self |\n\t\tself.i.cosh\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _times_2(_cosh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _times_2(_sinh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  },
  "{ :self |\n\t\tComplex(\n\t\t\tself.real.cosh * self.imaginary.cos,\n\t\t\tself.real.sinh * self.imaginary.sin\n\t\t)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(
          _aBlock_2(_real_1(_self), _real_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _aBlock_2(_imaginary_1(_self), _imaginary_1(_anObject));
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _aBlock_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return false;
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isComplex.if {\n\t\t\t\taBlock(self.real, anObject.real) & {\n\t\t\t\t\taBlock(self.imaginary, anObject.imaginary)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToComplexAndApply(self, aBlock:/2)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(
      _exp_1(_real_1(_self)),
      _plus_2(_cos_1(_imaginary_1(_self)), _i_1(_sin_1(_imaginary_1(_self)))),
    );
  },
  "{ :self |\n\t\tself.real.exp * (self.imaginary.cos + self.imaginary.sin.i)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_negated_1(_imaginary_1(_self)), _real_1(_self));
  },
  "{ :self |\n\t\tComplex(self.imaginary.negated, self.real)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "isComplex",
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

sl.addMethod(
  "Complex",
  "Complex",
  "isGaussianInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isInteger_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isInteger_1(_imaginary_1(_self));
    });
  },
  "{ :self |\n\t\tself.real.isInteger & {\n\t\t\tself.imaginary.isInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "isNumber",
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

sl.addMethod(
  "Complex",
  "Complex",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isZero_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isZero_1(_imaginary_1(_self));
    });
  },
  "{ :self |\n\t\tself.real.isZero & {\n\t\t\tself.imaginary.isZero\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_log_1(_abs_1(_self)), _i_1(_arg_1(_self)));
  },
  "{ :self |\n\t\tself.abs.log + self.arg.i\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "log",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_log_1(_self), _log_1(_aNumber));
  },
  "{ :self :aNumber |\n\t\tself.log / aNumber.log\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _negated_1(_real_1(_self)),
      _negated_1(_imaginary_1(_self)),
    );
  },
  "{ :self |\n\t\tComplex(self.real.negated, self.imaginary.negated)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asComplex_1(1);
  },
  "{ :self |\n\t\t1.asComplex\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_imaginary_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _join_1([
        _real_1(_self),
        " - ",
        _abs_1(_imaginary_1(_self)),
        ".i",
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _join_1([_real_1(_self), " + ", _imaginary_1(_self), ".i"]);
    });
  },
  "{ :self |\n\t\t(self.imaginary < 0).if {\n\t\t\t[self.real, ' - ', self.imaginary.abs, '.i'].join\n\t\t} {\n\t\t\t[self.real, ' + ', self.imaginary, '.i'].join\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "reciprocal: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _dividedBy_2(1, _self);
    });
  },
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tself.error('reciprocal: zero divide')\n\t\t} {\n\t\t\t1 / self\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _negated_1(_i_1(_sinh_1(_i_1(_self))));
  },
  "{ :self |\n\t\tself.i.sinh.i.negated\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _times_2(_sinh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _times_2(_cosh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  },
  "{ :self |\n\t\tComplex(\n\t\t\tself.real.sinh * self.imaginary.cos,\n\t\t\tself.real.cosh * self.imaginary.sin\n\t\t)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _and_2(_equals_2(_imaginary_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _greaterThanEquals_2(_real_1(_self), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asComplex_1(_sqrt_1(_real_1(_self)));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _v = _sqrt_1(
          _dividedBy_2(_minus_2(_abs_1(_self), _real_1(_self)), 2),
        );
        let _u = _dividedBy_2(_dividedBy_2(_imaginary_1(_self), 2), _v);
        /* Statements */
        return _Complex_2(_u, _v);
      },
    );
  },
  "{ :self |\n\t\t(self.imaginary = 0).and {\n\t\t\tself.real >= 0\n\t\t}.if {\n\t\t\tself.real.sqrt.asComplex\n\t\t} {\n\t\t\tlet v = (self.abs - self.real / 2).sqrt;\n\t\t\tlet u = self.imaginary / 2 / v;\n\t\t\tComplex(u, v)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_self, _self);
  },
  "{ :self |\n\t\tself * self\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "squaredNorm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _times_2(_real_1(_self), _real_1(_self)),
      _times_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  },
  "{ :self |\n\t\t(self.real * self.real) + (self.imaginary * self.imaginary)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_sin_1(_self), _cos_1(_self));
  },
  "{ :self |\n\t\tself.sin / self.cos\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _negated_1(_i_1(_tan_1(_i_1(_self))));
  },
  "{ :self |\n\t\tself.i.tan.i.negated\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Complex(",
      _storeString_1(_real_1(_self)),
      ", ",
      _storeString_1(_imaginary_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Complex(',\n\t\t\t\tself.real.storeString,\n\t\t\t\t', ',\n\t\t\t\tself.imaginary.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asComplex_1(0);
  },
  "{ :self |\n\t\t0.asComplex\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aComplexNumber, _asComplex_1(_self));
  },
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\taBlock(aComplexNumber, self.asComplex)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_self, _zero_1(_self));
  },
  "{ :self |\n\t\tComplex(self, self.zero)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "Complex",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newComplex_0(), _real, _imaginary);
  },
  "{ :real :imaginary |\n\t\tnewComplex().initializeSlots(real, imaginary)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_zero_1(_self), _self);
  },
  "{ :self |\n\t\tComplex(self.zero, self)\n\t}",
);

sl.addMethod(
  "Array",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aComplexNumber, _each);
    });
  },
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aComplexNumber, each)\n\t\t}\n\t}",
);
