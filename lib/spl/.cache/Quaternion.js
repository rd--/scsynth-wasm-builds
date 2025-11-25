/*  Requires: Complex  */

sl.addType(
  false,
  "Quaternion",
  "Quaternion",
  ["Object", "Storeable", "Equatable", "Number"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Quaternion",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Quaternion",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Quaternion",
);

sl.copyTraitMethodsToType(
  "Number",
  "Quaternion",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_contents_1(_self), 4);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        let _c = _at_2(__SplVar1, 3);
        let _d = _at_2(__SplVar1, 4);
        let __SplVar2 = _assertIsOfSize_2(_contents_1(_anObject), 4);
        let _p = _at_2(__SplVar2, 1);
        let _q = _at_2(__SplVar2, 2);
        let _r = _at_2(__SplVar2, 3);
        let _s = _at_2(__SplVar2, 4);
        /* Statements */
        return _Quaternion_1([
          _hyphenMinus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(_asterisk_2(_a, _p), _asterisk_2(_b, _q)),
              _asterisk_2(_c, _r),
            ),
            _asterisk_2(_d, _s),
          ),
          _hyphenMinus_2(
            _plusSign_2(
              _plusSign_2(_asterisk_2(_a, _q), _asterisk_2(_b, _p)),
              _asterisk_2(_c, _s),
            ),
            _asterisk_2(_d, _r),
          ),
          _plusSign_2(
            _plusSign_2(
              _hyphenMinus_2(_asterisk_2(_a, _r), _asterisk_2(_b, _s)),
              _asterisk_2(_c, _p),
            ),
            _asterisk_2(_d, _q),
          ),
          _plusSign_2(
            _hyphenMinus_2(
              _plusSign_2(_asterisk_2(_a, _s), _asterisk_2(_b, _r)),
              _asterisk_2(_c, _q),
            ),
            _asterisk_2(_d, _p),
          ),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isQuaternion.if {\n\t\t\tlet [a, b, c, d] = self.contents;\n\t\t\tlet [p, q, r, s] = anObject.contents;\n\t\t\tQuaternion(\n\t\t\t\t[\n\t\t\t\t\t((a * p) - (b * q) - (c * r) - (d * s)),\n\t\t\t\t\t((a * q) + (b * p) + (c * s) - (d * r)),\n\t\t\t\t\t((a * r) - (b * s) + (c * p) + (d * q)),\n\t\t\t\t\t((a * s) + (b * r) - (c * q) + (d * p))\n\t\t\t\t]\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToQuaternionAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quaternion_1(
          _plusSign_2(_contents_1(_self), _contents_1(_anObject)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isQuaternion.if {\n\t\t\tQuaternion(self.contents + anObject.contents)\n\t\t} {\n\t\t\tanObject.adaptToQuaternionAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quaternion_1(
          _plusSign_2(_contents_1(_self), _contents_1(_anObject)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isQuaternion.if {\n\t\t\tQuaternion(self.contents + anObject.contents)\n\t\t} {\n\t\t\tanObject.adaptToQuaternionAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _reciprocal_1(_anObject));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _solidus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isQuaternion.if {\n\t\t\tself * anObject.reciprocal\n\t\t} {\n\t\t\tanObject.adaptToQuaternionAndApply(self, /)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_absSquare_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.absSquare.sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_square_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.square.sum\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asQuaternion_1(_aFraction), _self);
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.asQuaternion.aBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asQuaternion_1(_aNumber), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.asQuaternion.aBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asQuaternion",
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

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_contents_1(_self), 4);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    let _d = _at_2(__SplVar3, 4);
    /* Statements */
    return [[_j_2(_a, _b), _j_2(_c, _d)], [
      _j_2(_hyphenMinus_1(_c), _d),
      _j_2(_a, _hyphenMinus_1(_b)),
    ]];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self.contents;\n\t\t[\n\t\t\t[a.j(b), c.j(d)],\n\t\t\t[c.-.j(d), a.j(b.-)]\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_contents_1(_self), 4);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _c = _at_2(__SplVar4, 3);
    let _d = _at_2(__SplVar4, 4);
    /* Statements */
    return _Quaternion_1([
      _a,
      _hyphenMinus_1(_b),
      _hyphenMinus_1(_c),
      _hyphenMinus_1(_d),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self.contents;\n\t\tQuaternion([a, b.-, c.-, d.-])\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isQuaternion_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_contents_1(_self), _contents_1(_anObject));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToQuaternionAndApply_3(_anObject, _self, _aBlock_2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isQuaternion.if {\n\t\t\t\taBlock(self.contents, anObject.contents)\n\t\t\t} {\n\t\t\t\tanObject.adaptToQuaternionAndApply(self, aBlock:/2)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_contents_1(_self), 2, 4);
  }, ["self"]),
  "{ :self |\n\t\tself.contents.copyFromTo(2, 4)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  sl.annotateFunction(function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(
      _contents_1(_self),
      _contents_1(_asQuaternion_1(_anObject)),
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseToBy_3(_a, _b, _epsilon);
      }, ["a", "b"]),
    );
  }, ["self", "anObject", "epsilon"]),
  "{ :self :anObject :epsilon |\n\t\tself.contents.equalBy(anObject.asQuaternion.contents) { :a :b |\n\t\t\ta.isCloseToBy(b, epsilon)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isHamiltonianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_contents_1(_self), _isInteger_1);
  }, ["self"]),
  "{ :self |\n\t\tself.contents.allSatisfy(isInteger:/1)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOrigin_1(_imaginary_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.imaginary.isOrigin\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOrigin_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.isOrigin\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quaternion_1(_negate_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tQuaternion(self.contents.negate)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.abs\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "normalize",
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
        return _solidus_2(_self, _abs_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself / self.abs\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asQuaternion_1(1);
  }, ["self"]),
  "{ :self |\n\t\t1.asQuaternion\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "reciprocal",
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
        return _error_2(_self, "reciprocal: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _conjugate_1(_self),
          _solidus_2(1, _absSquare_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('reciprocal: zero divide')\n\t\t} {\n\t\t\tself.conjugate * (1 / self.absSquare)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "real",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.contents.at(1)\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.real, self.imaginary]\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOrigin_1(_contents_1(_self)),
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
        return _Quaternion_1(_solidus_2(_contents_1(_self), _norm_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.contents.isOrigin.if {\n\t\t\t0\n\t\t} {\n\t\t\tQuaternion(self.contents / self.norm)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
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

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asQuaternion_1(0);
  }, ["self"]),
  "{ :self |\n\t\t0.asQuaternion\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Quaternion",
  "Quaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newQuaternion_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Quaternion");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 4).if {\n\t\t\tnewQuaternion().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Quaternion')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "adaptToQuaternionAndApply",
  ["self", "aQuaternion", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aQuaternion, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aQuaternion, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aQuaternion, _asQuaternion_1(_self));
  }, ["self", "aQuaternion", "aBlock:/2"]),
  "{ :self :aQuaternion :aBlock:/2 |\n\t\taQuaternion.aBlock(self.asQuaternion)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "asQuaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _zero = _zero_1(_self);
    /* Statements */
    return _Quaternion_1([_self, _zero, _zero, _zero]);
  }, ["self"]),
  "{ :self |\n\t\tlet zero = self.zero;\n\t\tQuaternion([self zero zero zero])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "isHamiltonianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Quaternion",
  "adaptToQuaternionAndApply",
  ["self", "aQuaternion", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aQuaternion, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aQuaternion, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aQuaternion, _each);
      }, ["each"]),
    );
  }, ["self", "aQuaternion", "aBlock:/2"]),
  "{ :self :aQuaternion :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taQuaternion.aBlock(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Quaternion",
  "asQuaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quaternion_1([_real_1(_self), _imaginary_1(_self), 0, 0]);
  }, ["self"]),
  "{ :self |\n\t\tQuaternion([self.real, self.imaginary, 0, 0])\n\t}",
);
