/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "Matrix33",
  "Matrix33",
  ["Object", "Equatable"],
  ["elements"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Matrix33",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Matrix33",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "applyTo",
  ["self", "vector"],
  sl.annotateFunction(function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
    let _e = _at_2(__SplVar1, 5);
    let _f = _at_2(__SplVar1, 6);
    let _g = _at_2(__SplVar1, 7);
    let _h = _at_2(__SplVar1, 8);
    let _i = _at_2(__SplVar1, 9);
    let __SplVar2 = _assertIsOfSize_2(_asList_1(_vector), 3);
    let _x = _at_2(__SplVar2, 1);
    let _y = _at_2(__SplVar2, 2);
    let _z = _at_2(__SplVar2, 3);
    /* Statements */
    return _CartesianCoordinates_3(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
        _asterisk_2(_c, _z),
      ),
      _plusSign_2(
        _plusSign_2(_asterisk_2(_d, _x), _asterisk_2(_e, _y)),
        _asterisk_2(_f, _z),
      ),
      _plusSign_2(
        _plusSign_2(_asterisk_2(_g, _x), _asterisk_2(_h, _y)),
        _asterisk_2(_i, _z),
      ),
    );
  }, ["self", "vector"]),
  "{ :self :vector |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\tlet [x, y, z] = vector.asList;\n\t\tCartesianCoordinates(\n\t\t\t(a * x) + (b * y) + (c * z),\n\t\t\t(d * x) + (e * y) + (f * z),\n\t\t\t(g * x) + (h * y) + (i * z)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_elements_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.elements.copy\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "determinant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    let _d = _at_2(__SplVar3, 4);
    let _e = _at_2(__SplVar3, 5);
    let _f = _at_2(__SplVar3, 6);
    let _g = _at_2(__SplVar3, 7);
    let _h = _at_2(__SplVar3, 8);
    let _i = _at_2(__SplVar3, 9);
    /* Statements */
    return _hyphenMinus_2(
      _hyphenMinus_2(
        _hyphenMinus_2(
          _plusSign_2(
            _plusSign_2(
              _asterisk_2(_asterisk_2(_a, _e), _i),
              _asterisk_2(_asterisk_2(_b, _f), _g),
            ),
            _asterisk_2(_asterisk_2(_c, _d), _h),
          ),
          _asterisk_2(_asterisk_2(_c, _e), _g),
        ),
        _asterisk_2(_asterisk_2(_b, _d), _i),
      ),
      _asterisk_2(_asterisk_2(_a, _f), _h),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\t(a * e * i) + (b * f * g) + (c * d * h) - (c * e * g) - (b * d * i) - (a * f * h)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "equalBy",
  ["self", "aMatrix", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aMatrix, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMatrix, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix33_1(_aMatrix),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_elements_1(_self), _elements_1(_aMatrix));
      }, []),
    );
  }, ["self", "aMatrix", "aBlock:/2"]),
  "{ :self :aMatrix :aBlock:/2 |\n\t\taMatrix.isMatrix33 & {\n\t\t\taBlock(self.elements, aMatrix.elements)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "inverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _invert_1(_copy_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.copy.invert\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "invert",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _c = _at_2(__SplVar4, 3);
    let _d = _at_2(__SplVar4, 4);
    let _e = _at_2(__SplVar4, 5);
    let _f = _at_2(__SplVar4, 6);
    let _g = _at_2(__SplVar4, 7);
    let _h = _at_2(__SplVar4, 8);
    let _i = _at_2(__SplVar4, 9);
    /* Statements */
    _elements_2(
      _self,
      _asterisk_2(_determinant_1(_self), [
        _hyphenMinus_2(_asterisk_2(_e, _i), _asterisk_2(_f, _h)),
        _negate_1(_hyphenMinus_2(_asterisk_2(_b, _i), _asterisk_2(_c, _h))),
        _hyphenMinus_2(_asterisk_2(_b, _f), _asterisk_2(_c, _e)),
        _negate_1(_hyphenMinus_2(_asterisk_2(_d, _i), _asterisk_2(_f, _g))),
        _hyphenMinus_2(_asterisk_2(_a, _i), _asterisk_2(_c, _g)),
        _negate_1(_hyphenMinus_2(_asterisk_2(_a, _f), _asterisk_2(_c, _d))),
        _hyphenMinus_2(_asterisk_2(_d, _h), _asterisk_2(_e, _g)),
        _hyphenMinus_2(_negate_1(_asterisk_2(_a, _h)), _asterisk_2(_b, _g)),
        _hyphenMinus_2(_asterisk_2(_a, _e), _asterisk_2(_b, _d)),
      ]),
    );
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\tself.elements := self.determinant * [\n\t\t\t(e * i) - (f * h), ((b * i) - (c * h)).negate, (b * f) - (c * e),\n\t\t\t((d * i) - (f * g)).negate, (a * i) - (c * g), ((a * f) - (c * d)).negate,\n\t\t\t(d * h) - (e * g), ((a * h).negate - (b * g)), (a * e) - (b * d)\n\t\t];\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "identity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 1\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "xy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "xz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 0, 1, 0, 0, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 0, 1,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "yz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [0, 1, 0, 0, 0, 1, 0, 0, 0]);
  }, ["self"]),
  "{ :self |\n\t\tself.elements := [\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 1,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix33",
  "Matrix33",
  ["self", "b", "c", "d", "e", "f", "g", "h", "i"],
  sl.annotateFunction(function (_self, _b, _c, _d, _e, _f, _g, _h, _i) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _self, _b, _c, _d, _e, _f, _g, _h, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMatrix33_1([_self, _b, _c, _d, _e, _f, _g, _h, _i]);
  }, ["self", "b", "c", "d", "e", "f", "g", "h", "i"]),
  "{ :self :b :c :d :e :f :g :h :i |\n\t\t[self, b, c, d, e, f, g, h, i].asMatrix33\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix33",
  "asMatrix33",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _exclamationMarkEqualsSign_2(_size_1(_self), 9),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asMatrix33: not 9-element array");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newMatrix33_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size != 9).if {\n\t\t\tself.error('asMatrix33: not 9-element array')\n\t\t} {\n\t\t\tnewMatrix33().initializeSlots(self)\n\t\t}\n\t}",
);
