/* {- Requires: CartesianCoordinate -} */

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
  "equals",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isMatrix33_1(_aMatrix), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_elements_1(_self), _elements_1(_aMatrix));
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym5 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym5, 1),
      _b = _at_2(__genSym5, 2),
      _c = _at_2(__genSym5, 3),
      _d = _at_2(__genSym5, 4),
      _e = _at_2(__genSym5, 5),
      _f = _at_2(__genSym5, 6),
      _g = _at_2(__genSym5, 7),
      _h = _at_2(__genSym5, 8),
      _i = _at_2(__genSym5, 9);
    let __genSym6 = _assertIsOfSize_2(_asArray_1(_vector), 3),
      _x = _at_2(__genSym6, 1),
      _y = _at_2(__genSym6, 2),
      _z = _at_2(__genSym6, 3);
    /* Statements */
    return _CartesianCoordinate_3(
      _plus_2(_plus_2(_times_2(_a, _x), _times_2(_b, _y)), _times_2(_c, _z)),
      _plus_2(_plus_2(_times_2(_d, _x), _times_2(_e, _y)), _times_2(_f, _z)),
      _plus_2(_plus_2(_times_2(_g, _x), _times_2(_h, _y)), _times_2(_i, _z)),
    );
  },
  "{ :self :vector |\n\t\tlet [a, b, c, d, e, f, g, h, i] = self.elements;\n\t\tlet [x, y, z] = vector.asArray;\n\t\tCartesianCoordinate(\n\t\t\t(a * x) + (b * y) + (c * z),\n\t\t\t(d * x) + (e * y) + (f * z),\n\t\t\t(g * x) + (h * y) + (i * z)\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix33",
  "Matrix33",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym7 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym7, 1),
      _b = _at_2(__genSym7, 2),
      _c = _at_2(__genSym7, 3),
      _d = _at_2(__genSym7, 4),
      _e = _at_2(__genSym7, 5),
      _f = _at_2(__genSym7, 6),
      _g = _at_2(__genSym7, 7),
      _h = _at_2(__genSym7, 8),
      _i = _at_2(__genSym7, 9);
    /* Statements */
    return _minus_2(
      _minus_2(
        _minus_2(
          _plus_2(
            _plus_2(
              _times_2(_times_2(_a, _e), _i),
              _times_2(_times_2(_b, _f), _g),
            ),
            _times_2(_times_2(_c, _d), _h),
          ),
          _times_2(_times_2(_c, _e), _g),
        ),
        _times_2(_times_2(_b, _d), _i),
      ),
      _times_2(_times_2(_a, _f), _h),
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym8 = _assertIsOfSize_2(_elements_1(_self), 9),
      _a = _at_2(__genSym8, 1),
      _b = _at_2(__genSym8, 2),
      _c = _at_2(__genSym8, 3),
      _d = _at_2(__genSym8, 4),
      _e = _at_2(__genSym8, 5),
      _f = _at_2(__genSym8, 6),
      _g = _at_2(__genSym8, 7),
      _h = _at_2(__genSym8, 8),
      _i = _at_2(__genSym8, 9);
    /* Statements */
    _elements_2(
      _self,
      _times_2(_determinant_1(_self), [
        _minus_2(_times_2(_e, _i), _times_2(_f, _h)),
        _negated_1(_minus_2(_times_2(_b, _i), _times_2(_c, _h))),
        _minus_2(_times_2(_b, _f), _times_2(_c, _e)),
        _negated_1(_minus_2(_times_2(_d, _i), _times_2(_f, _g))),
        _minus_2(_times_2(_a, _i), _times_2(_c, _g)),
        _negated_1(_minus_2(_times_2(_a, _f), _times_2(_c, _d))),
        _minus_2(_times_2(_d, _h), _times_2(_e, _g)),
        _minus_2(_negated_1(_times_2(_a, _h)), _times_2(_b, _g)),
        _minus_2(_times_2(_a, _e), _times_2(_b, _d)),
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _asMatrix33_1([_self, _b, _c, _d, _e, _f, _g, _h, _i]);
  },
  "{ :self :b :c :d :e :f :g :h :i |\n\t\t[self, b, c, d, e, f, g, h, i].asMatrix33\n\t}",
);

sl.addMethod(
  "Array",
  "Matrix33",
  "asMatrix33",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_tildeEquals_2(_size_1(_self), 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Array>>asMatrix33: not 9-element array");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _initializeSlots_2(_newMatrix33_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.size ~= 9).if {\n\t\t\tself.error('Array>>asMatrix33: not 9-element array')\n\t\t} {\n\t\t\tnewMatrix33().initializeSlots(self)\n\t\t}\n\t}",
);
