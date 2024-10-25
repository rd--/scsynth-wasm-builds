/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "Matrix33",
  "Matrix33",
  ["Object"],
  ["elements"],
);

sl.copyTraitToType(
  "Object",
  "Matrix33",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "equalsSign",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix33_1(_aMatrix), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_elements_1(_self), _elements_1(_aMatrix));
    });
  },
  "{ :self :aMatrix |\n\t\taMatrix.isMatrix33 & {\n\t\t\tself.elements = aMatrix.elements\n\t\t}\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "applyTo",
  ["self", "vector"],
  function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym21 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym21, 1),
      _b = _at_2(__genSym21, 2),
      _c = _at_2(__genSym21, 3),
      _d = _at_2(__genSym21, 4),
      _e = _at_2(__genSym21, 5),
      _f = _at_2(__genSym21, 6),
      _g = _at_2(__genSym21, 7),
      _h = _at_2(__genSym21, 8),
      _i = _at_2(__genSym21, 9);
    let __genSym22 = _assertIsOfSize_2(_asList_1(_vector), 3),
      _x = _at_2(__genSym22, 1),
      _y = _at_2(__genSym22, 2),
      _z = _at_2(__genSym22, 3);
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
  },
  "{ :self :vector |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\tlet [x, y, z] = vector.asList;\n\t\tCartesianCoordinates(\n\t\t\t(a * x) + (b * y) + (c * z),\n\t\t\t(d * x) + (e * y) + (f * z),\n\t\t\t(g * x) + (h * y) + (i * z)\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
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
    return _copy_1(_elements_1(_self));
  },
  "{ :self |\n\t\tself.elements.copy\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asMatrix33_1(_copy_1(_elements_1(_self)));
  },
  "{ :self |\n\t\tself.elements.copy.asMatrix33\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "determinant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym23 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym23, 1),
      _b = _at_2(__genSym23, 2),
      _c = _at_2(__genSym23, 3),
      _d = _at_2(__genSym23, 4),
      _e = _at_2(__genSym23, 5),
      _f = _at_2(__genSym23, 6),
      _g = _at_2(__genSym23, 7),
      _h = _at_2(__genSym23, 8),
      _i = _at_2(__genSym23, 9);
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
  },
  "{ :self |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\t(a * e * i) + (b * f * g) + (c * d * h) - (c * e * g) - (b * d * i) - (a * f * h)\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _invert_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.invert\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "invert",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym24 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym24, 1),
      _b = _at_2(__genSym24, 2),
      _c = _at_2(__genSym24, 3),
      _d = _at_2(__genSym24, 4),
      _e = _at_2(__genSym24, 5),
      _f = _at_2(__genSym24, 6),
      _g = _at_2(__genSym24, 7),
      _h = _at_2(__genSym24, 8),
      _i = _at_2(__genSym24, 9);
    /* Statements */
    _elements_2(
      _self,
      _asterisk_2(_determinant_1(_self), [
        _hyphenMinus_2(_asterisk_2(_e, _i), _asterisk_2(_f, _h)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_b, _i), _asterisk_2(_c, _h))),
        _hyphenMinus_2(_asterisk_2(_b, _f), _asterisk_2(_c, _e)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_d, _i), _asterisk_2(_f, _g))),
        _hyphenMinus_2(_asterisk_2(_a, _i), _asterisk_2(_c, _g)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_a, _f), _asterisk_2(_c, _d))),
        _hyphenMinus_2(_asterisk_2(_d, _h), _asterisk_2(_e, _g)),
        _hyphenMinus_2(_negated_1(_asterisk_2(_a, _h)), _asterisk_2(_b, _g)),
        _hyphenMinus_2(_asterisk_2(_a, _e), _asterisk_2(_b, _d)),
      ]),
    );
    return _self;
  },
  "{ :self |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\tself.elements := self.determinant * [\n\t\t\t(e * i) - (f * h), ((b * i) - (c * h)).negated, (b * f) - (c * e),\n\t\t\t((d * i) - (f * g)).negated, (a * i) - (c * g), ((a * f) - (c * d)).negated,\n\t\t\t(d * h) - (e * g), ((a * h).negated - (b * g)), (a * e) - (b * d)\n\t\t];\n\t\tself\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  },
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 1\n\t\t]\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "xy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 0]);
  },
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "xz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 0, 1, 0, 0, 0]);
  },
  "{ :self |\n\t\tself.elements := [\n\t\t\t1, 0, 0,\n\t\t\t0, 0, 1,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "yz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _elements_2(_self, [0, 1, 0, 0, 0, 1, 0, 0, 0]);
  },
  "{ :self |\n\t\tself.elements := [\n\t\t\t0, 1, 0,\n\t\t\t0, 0, 1,\n\t\t\t0, 0, 0\n\t\t]\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix33",
  "Matrix33",
  ["self", "b", "c", "d", "e", "f", "g", "h", "i"],
  function (_self, _b, _c, _d, _e, _f, _g, _h, _i) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _self, _b, _c, _d, _e, _f, _g, _h, _i";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asMatrix33_1([_self, _b, _c, _d, _e, _f, _g, _h, _i]);
  },
  "{ :self :b :c :d :e :f :g :h :i |\n\t\t[self, b, c, d, e, f, g, h, i].asMatrix33\n\t}",
);

sl.addMethod(
  "List",
  "Matrix33",
  "asMatrix33",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_tildeEqualsSign_2(_size_1(_self), 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "List>>asMatrix33: not 9-element array");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _initializeSlots_2(_newMatrix33_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.size ~= 9).if {\n\t\t\tself.error('List>>asMatrix33: not 9-element array')\n\t\t} {\n\t\t\tnewMatrix33().initializeSlots(self)\n\t\t}\n\t}",
);
