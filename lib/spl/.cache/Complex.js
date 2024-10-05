/* {- Requires: List Number Object -} */

sl.addType(
  false,
  "Complex",
  "Complex",
  ["Object", "Number"],
  ["real", "imaginary"],
);

sl.copyTraitToType(
  "Object",
  "Complex",
);

sl.copyTraitToType(
  "Number",
  "Complex",
);

sl.addMethod(
  "Complex",
  "Complex",
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
    return _equalBy_3(_self, _anObject, _equalsSign_2);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(
        _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
        _plusSign_2(_asterisk_2(_a, _d), _asterisk_2(_b, _c)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _asterisk_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex((a * c) - (b * d), (a * d) + (b * c))\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(_plusSign_2(_a, _c), _plusSign_2(_b, _d));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _plusSign_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a + c, b + d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(_hyphenMinus_2(_a, _c), _hyphenMinus_2(_b, _d));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _hyphenMinus_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a - c, b - d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _a = _real_1(_self);
      let _b = _imaginary_1(_self);
      let _c = _real_1(_anObject);
      let _d = _imaginary_1(_anObject);
      /* Statements */
      return _Complex_2(
        _solidus_2(
          _plusSign_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
          _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
        ),
        _solidus_2(
          _hyphenMinus_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
          _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
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
      return _adaptToComplexAndApply_3(_anObject, _self, _solidus_2);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(\n\t\t\t\t((a * c) + (b * d)) / ((c * c) + (d * d)),\n\t\t\t\t((b * c) - (a * d)) / ((c * c) + (d * d))\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, /)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
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
    return _if_3(_isCollection_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_aNumber, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _circumflexAccent_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
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
        return _if_3(_equalsSign_2(_aNumber, 0), function () {
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
          return _if_3(_equalsSign_2(_aNumber, 1), function () {
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
            return _if_3(_equalsSign_2(_self, 0), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _if_3(_lessThanSign_2(_aNumber, 0), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  console.error(errorMessage);
                  throw new Error(errorMessage);
                }
                /* Statements */
                return _error_2(_self, "^: zero divide");
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
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              /* Statements */
              return _exp_1(_asterisk_2(_aNumber, _log_1(_self)));
            });
          });
        });
      });
    });
  },
  "{ :self :aNumber |\n\t\taNumber.isCollection.if {\n\t\t\taNumber.collect { :each |\n\t\t\t\tself ^ each\n\t\t\t}\n\t\t} {\n\t\t\taNumber.isInteger.if {\n\t\t\t\tself.raisedToInteger(aNumber)\n\t\t\t} {\n\t\t\t\t(aNumber = 0).if {\n\t\t\t\t\tself.one\n\t\t\t\t} {\n\t\t\t\t\t(aNumber = 1).if {\n\t\t\t\t\t\tself\n\t\t\t\t\t} {\n\t\t\t\t\t\t(self = 0).if {\n\t\t\t\t\t\t\t(aNumber < 0).if {\n\t\t\t\t\t\t\t\tself.error('^: zero divide')\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tself\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(aNumber * self.log).exp\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(_absSquared_1(_self));
  },
  "{ :self |\n\t\tself.absSquared.sqrt\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_abs_1(_self), _arg_1(_self)];
  },
  "{ :self |\n\t\t[self.abs, self.arg]\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
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
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\teach.aBlock(self)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asComplex_1(_aFraction), _self);
  },
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.asComplex.aBlock(self)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_asComplex_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.asComplex.aBlock(self)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "arcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_imaginary_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_abs_1(_real_1(_self)), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _j_2(
          _if_3(_lessThanSign_2(_real_1(_self), 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _pi;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 0;
          }),
          _copySignTo_2(_real_1(_self), _arcCosh_1(_abs_1(_real_1(_self)))),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _j_2(_arcCos_1(_real_1(_self)), 0);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _tmp = _solidus_2(_hyphenMinus_2(_squaredNorm_1(_self), 1), 2);
      let _delta = _plusSign_2(
        _squared_1(_tmp),
        _squared_1(_imaginary_1(_self)),
      );
      let _sh2y = _plusSign_2(_tmp, _sqrt_1(_delta));
      let _shy = _sqrt_1(_sh2y);
      let _ch2y = _plusSign_2(1, _sh2y);
      let _chy = _sqrt_1(_ch2y);
      /* Statements */
      return _j_2(
        _arcCos_1(_solidus_2(_real_1(_self), _chy)),
        _copySignTo_2(_imaginary_1(_self), _negated_1(_arcSinh_1(_shy))),
      );
    });
  },
  "{ :self |\n\t\t(self.imaginary = 0).if {\n\t\t\t(self.real.abs > 1).if {\n\t\t\t\t(self.real < 0).if {\n\t\t\t\t\tpi\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}.j(\n\t\t\t\t\tself.real.copySignTo(self.real.abs.arcCosh)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.real.arcCos.j(0)\n\t\t\t}\n\t\t} {\n\t\t\tlet tmp = self.squaredNorm - 1 / 2;\n\t\t\tlet delta = tmp.squared + self.imaginary.squared;\n\t\t\tlet sh2y = tmp + delta.sqrt;\n\t\t\tlet shy = sh2y.sqrt;\n\t\t\tlet ch2y = 1 + sh2y;\n\t\t\tlet chy = ch2y.sqrt;\n\t\t\t(self.real / chy).arcCos.j(\n\t\t\t\tself.imaginary.copySignTo(shy.arcSinh.negated)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "arcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_imaginary_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_abs_1(_real_1(_self)), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _j_2(
          _asterisk_2(_solidus_2(_pi, 2), _sign_1(_real_1(_self))),
          _negated_1(
            _copySignTo_2(_real_1(_self), _arcCosh_1(_abs_1(_real_1(_self)))),
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
        return _j_2(_arcSin_1(_real_1(_self)), 0);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _tmp = _solidus_2(_hyphenMinus_2(_squaredNorm_1(_self), 1), 2);
      let _delta = _plusSign_2(
        _squared_1(_tmp),
        _squared_1(_imaginary_1(_self)),
      );
      let _sh2y = _plusSign_2(_tmp, _sqrt_1(_delta));
      let _shy = _sqrt_1(_sh2y);
      let _ch2y = _plusSign_2(1, _sh2y);
      let _chy = _sqrt_1(_ch2y);
      /* Statements */
      return _j_2(
        _arcSin_1(_solidus_2(_real_1(_self), _chy)),
        _copySignTo_2(_imaginary_1(_self), _arcSinh_1(_shy)),
      );
    });
  },
  "{ :self |\n\t\t(self.imaginary = 0).if {\n\t\t\t(self.real.abs > 1).if {\n\t\t\t\t(pi / 2 * self.real.sign).j(\n\t\t\t\t\tself.real.copySignTo(self.real.abs.arcCosh).negated\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.real.arcSin.j(0)\n\t\t\t}\n\t\t} {\n\t\t\tlet tmp = self.squaredNorm - 1 / 2;\n\t\t\tlet delta = tmp.squared + self.imaginary.squared;\n\t\t\tlet sh2y = tmp + delta.sqrt;\n\t\t\tlet shy = sh2y.sqrt;\n\t\t\tlet ch2y = 1 + sh2y;\n\t\t\tlet chy = ch2y.sqrt;\n\t\t\t(self.real / chy).arcSin.j(\n\t\t\t\tself.imaginary.copySignTo(shy.arcSinh)\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "arcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r2 = _squaredNorm_1(_self);
    /* Statements */
    return _Complex_2(
      _solidus_2(
        _arcTan_2(_hyphenMinus_2(1, _r2), _asterisk_2(_real_1(_self), 2)),
        2,
      ),
      _solidus_2(
        _log_1(
          _solidus_2(
            _plusSign_2(
              _plusSign_2(_r2, _asterisk_2(_imaginary_1(_self), 2)),
              1,
            ),
            _plusSign_2(
              _hyphenMinus_2(_r2, _asterisk_2(_imaginary_1(_self), 2)),
              1,
            ),
          ),
        ),
        4,
      ),
    );
  },
  "{ :self |\n\t\tlet r2 = self.squaredNorm;\n\t\tComplex(\n\t\t\t(1 - r2).arcTan(self.real * 2) / 2,\n\t\t\t((r2 + (self.imaginary * 2) + 1) / (r2 - (self.imaginary * 2) + 1)).log / 4\n\t\t)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "arcTan",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_isZero_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Complex_2(0, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Complex_2(
          _solidus_2(_pi, _copySignTo_2(_real_1(_aNumber), 2)),
          0,
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _answer = _arcTan_1(_solidus_2(_aNumber, _self));
      /* Statements */
      return _if_3(_lessThanSign_2(_real_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_answer, _pi);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_greaterThanSign_2(_real_1(_answer), _pi), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _hyphenMinus_2(_answer, _asterisk_2(_pi, 2));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _answer;
        });
      });
    });
  },
  "{ :self :aNumber |\n\t\tself.isZero.if {\n\t\t\taNumber.isZero.if {\n\t\t\t\tComplex(0, 0)\n\t\t\t} {\n\t\t\t\tComplex(pi / aNumber.real.copySignTo(2), 0)\n\t\t\t}\n\t\t} {\n\t\t\tlet answer = (aNumber / self).arcTan;\n\t\t\t(self.real < 0).if {\n\t\t\t\tanswer + pi\n\t\t\t} {\n\t\t\t\t(answer.real > pi).if {\n\t\t\t\t\tanswer - (pi * 2)\n\t\t\t\t} {\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Zero has no argument");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _arcTan_2(_real_1(_self), _imaginary_1(_self));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Zero has no argument')\n\t\t} {\n\t\t\tself.real.arcTan(self.imaginary)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "asGaussianInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _j_2(_rounded_1(_real_1(_self)), _rounded_1(_imaginary_1(_self)));
  },
  "{ :self |\n\t\tself.real.rounded.j(self.imaginary.rounded)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  },
  "{ :self |\n\t\t[self.real, self.imaginary]\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
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
    return _asTuple_1([_real_1(_self), _imaginary_1(_self)]);
  },
  "{ :self |\n\t\t(self.real, self.imaginary)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "atRandom",
  ["self", "shape", "rng"],
  function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _randomComplex_4(
      _rng,
      _Complex_2(
        0,
        0,
      ),
      _self,
      _shape,
    );
  },
  "{ :self :shape :rng |\n\t\trng.randomComplex(0J0, self, shape)\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cosh_1(_i_1(_self));
  },
  "{ :self |\n\t\tself.i.cosh\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "cosecant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(1, _sin_1(_self));
  },
  "{ :self |\n\t\t1 / self.sin\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _asterisk_2(_cosh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_sinh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
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
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _aBlock_2(_real_1(_self), _real_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
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
          throw new Error(errorMessage);
        }
        /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _aBlock_2);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _exp_1(_real_1(_self)),
      _plusSign_2(
        _cos_1(_imaginary_1(_self)),
        _i_1(_sin_1(_imaginary_1(_self))),
      ),
    );
  },
  "{ :self |\n\t\tself.real.exp * (self.imaginary.cos + self.imaginary.sin.i)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _fractionPart_1(_real_1(_self)),
      _fractionPart_1(_imaginary_1(_self)),
    );
  },
  "{ :self |\n\t\tComplex(self.real.fractionPart, self.imaginary.fractionPart)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_negated_1(_imaginary_1(_self)), _real_1(_self));
  },
  "{ :self |\n\t\tComplex(self.imaginary.negated, self.real)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _integerPart_1(_real_1(_self)),
      _integerPart_1(_imaginary_1(_self)),
    );
  },
  "{ :self |\n\t\tComplex(self.real.integerPart, self.imaginary.integerPart)\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
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
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _isCloseToBy_3(_real_1(_self), _real_1(_anObject), _epsilon),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _isCloseToBy_3(
              _imaginary_1(_self),
              _imaginary_1(_anObject),
              _epsilon,
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
        return _adaptToComplexAndApply_3(_anObject, _self, function (_p, _q) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _p, _q";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _isCloseToBy_3(_p, _q, _epsilon);
        });
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
  "{ :self :anObject :epsilon |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isComplex.if {\n\t\t\t\tself.real.isCloseToBy(anObject.real, epsilon) & {\n\t\t\t\t\tself.imaginary.isCloseToBy(anObject.imaginary, epsilon)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToComplexAndApply(self) { :p :q |\n\t\t\t\t\tp.isCloseToBy(q, epsilon)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.0001);
  },
  "{ :self :anObject |\n\t\tself.isCloseToBy(anObject, 0.0001)\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isInteger_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
  "Complex",
  "Complex",
  "isNumber",
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
  "Complex",
  "Complex",
  "isVeryCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.000000000001);
  },
  "{ :self :anObject |\n\t\tself.isCloseToBy(anObject, 0.000000000001)\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isZero_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_log_1(_abs_1(_self)), _i_1(_arg_1(_self)));
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_log_1(_self), _log_1(_aNumber));
  },
  "{ :self :aNumber |\n\t\tself.log / aNumber.log\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _maxBy_3(_self, _anObject, _abs_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _max_1);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tself.maxBy(anObject, abs:/1)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, max:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _minBy_3(_self, _anObject, _abs_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _min_1);
    });
  },
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tself.minBy(anObject, abs:/1)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, min:/1)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
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
  "norm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _abs_1(_self);
  },
  "{ :self |\n\t\tself.abs\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
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
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Complex_2(
        0,
        0,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_self, _abs_1(_self));
    });
  },
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0j0\n\t\t} {\n\t\t\tself / self.abs\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _printString_1(_real_1(_self)),
      "J",
      _printString_1(_imaginary_1(_self)),
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\tself.real.printString,\n\t\t\t'J',\n\t\t\tself.imaginary.printString\n\t\t].join\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "printStringShowingDecimalPlaces",
  ["self", "places"],
  function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _printStringShowingDecimalPlaces_2(_real_1(_self), _places),
      "J",
      _printStringShowingDecimalPlaces_2(_imaginary_1(_self), _places),
    ]);
  },
  "{ :self :places |\n\t\t[\n\t\t\tself.real.printStringShowingDecimalPlaces(places),\n\t\t\t'J',\n\t\t\tself.imaginary.printStringShowingDecimalPlaces(places)\n\t\t].join\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "realImaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  },
  "{ :self |\n\t\t[self.real, self.imaginary]\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "reciprocal: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(1, _self);
    });
  },
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tself.error('reciprocal: zero divide')\n\t\t} {\n\t\t\t1 / self\n\t\t}\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_self, _abs_1(_self));
  },
  "{ :self |\n\t\tself / self.abs\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(
      _asterisk_2(_sinh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_cosh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _ampersand_2(_equalsSign_2(_imaginary_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _greaterThanSignEqualsSign_2(_real_1(_self), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asComplex_1(_sqrt_1(_real_1(_self)));
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _v = _sqrt_1(
          _solidus_2(_hyphenMinus_2(_abs_1(_self), _real_1(_self)), 2),
        );
        let _u = _solidus_2(_solidus_2(_imaginary_1(_self), 2), _v);
        /* Statements */
        return _Complex_2(_u, _v);
      },
    );
  },
  "{ :self |\n\t\t(self.imaginary = 0 & {\n\t\t\tself.real >= 0\n\t\t}).if {\n\t\t\tself.real.sqrt.asComplex\n\t\t} {\n\t\t\tlet v = (self.abs - self.real / 2).sqrt;\n\t\t\tlet u = self.imaginary / 2 / v;\n\t\t\tComplex(u, v)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _self);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_sin_1(_self), _cos_1(_self));
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
  "{ :self |\n\t\t[\n\t\t\t'Complex(',\n\t\t\tself.real.storeString,\n\t\t\t', ',\n\t\t\tself.imaginary.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Complex",
  "Complex",
  "weierstrassFunction",
  ["x", "a", "m"],
  function (_x, _a, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _m";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_collect_2(_upOrDownTo_2(1, _m), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _exp_1(_asterisk_2(
          _asterisk_2(
            _asterisk_2(
              _Complex_2(
                0,
                1,
              ),
              _pi,
            ),
            _circumflexAccent_2(_k, _a),
          ),
          _x,
        )),
        _asterisk_2(_pi, _circumflexAccent_2(_k, _a)),
      );
    }));
  },
  "{ :x :a :m |\n\t\t1:m.collect { :k |\n\t\t\t(0J1 * pi * (k ^ a) * x).exp / (pi * (k ^ a))\n\t\t}.sum\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aComplexNumber, _asComplex_1(_self));
  },
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\taComplexNumber.aBlock(self.asComplex)\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newComplex_0(), _real, _imaginary);
  },
  "{ :real :imaginary |\n\t\tnewComplex().initializeSlots(real, imaginary)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "conjugated",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_zero_1(_self), _self);
  },
  "{ :self |\n\t\tComplex(self.zero, self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Complex",
  "j",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Complex_2(_real, _imaginary);
  },
  "{ :real :imaginary |\n\t\tComplex(real, imaginary)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
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
      return _aBlock_2(_aComplexNumber, _each);
    });
  },
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taComplexNumber.aBlock(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym100 = _assertIsOfSize_2(_self, 2),
      _a = _at_2(__genSym100, 1),
      _b = _at_2(__genSym100, 2);
    /* Statements */
    return _j_2(_a, _b);
  },
  "{ :self |\n\t\tlet [a, b] = self;\n\t\ta.j(b)\n\t}",
);
