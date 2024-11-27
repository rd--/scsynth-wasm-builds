/*  Requires: PlanarCoordinates  */

sl.addType(
  false,
  "Matrix22",
  "Matrix22",
  ["Object"],
  ["a", "b", "c", "d"],
);

sl.copyTraitToType(
  "Object",
  "Matrix22",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "equalsSign",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aMatrix"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMatrix22_1(_aMatrix), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_a_1(_self), _a_1(_aMatrix)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(
            _equalsSign_2(_b_1(_self), _b_1(_aMatrix)),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage =
                  "Arity: expected 0, "; /* console.error(errorMessage); */
                throw new Error(errorMessage);
              }
              /* Statements */
              return _ampersand_2(
                _equalsSign_2(_c_1(_self), _c_1(_aMatrix)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage =
                      "Arity: expected 0, "; /* console.error(errorMessage); */
                    throw new Error(errorMessage);
                  }
                  /* Statements */
                  return _equalsSign_2(_d_1(_self), _d_1(_aMatrix));
                },
              );
            },
          );
        },
      );
    });
  },
  "{ :self :aMatrix |\n\t\taMatrix.isMatrix22 & {\n\t\t\tself.a = aMatrix.a & {\n\t\t\t\tself.b = aMatrix.b & {\n\t\t\t\t\tself.c = aMatrix.c & {\n\t\t\t\t\t\tself.d = aMatrix.d\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "applyTo",
  ["self", "vector"],
  function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _vector"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PlanarCoordinates_2(
      _plusSign_2(
        _asterisk_2(_a_1(_self), _x_1(_vector)),
        _asterisk_2(_b_1(_self), _y_1(_vector)),
      ),
      _plusSign_2(
        _asterisk_2(_c_1(_self), _x_1(_vector)),
        _asterisk_2(_d_1(_self), _y_1(_vector)),
      ),
    );
  },
  "{ :self :vector |\n\t\tPlanarCoordinates(\n\t\t\t(self.a * vector.x) + (self.b * vector.y),\n\t\t\t(self.c * vector.x) + (self.d * vector.y)\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_a_1(_self), _b_1(_self), _c_1(_self), _d_1(_self)];
  },
  "{ :self |\n\t\t[self.a, self.b, self.c, self.d]\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Matrix22_4(_a_1(_self), _b_1(_self), _c_1(_self), _d_1(_self));
  },
  "{ :self |\n\t\tMatrix22(self.a, self.b, self.c, self.d)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "determinant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(_a_1(_self), _d_1(_self)),
      _asterisk_2(_b_1(_self), _c_1(_self)),
    );
  },
  "{ :self |\n\t\t(self.a * self.d) - (self.b * self.c)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(_self, 1, 0, 0, 1);
  },
  "{ :self |\n\t\tself.initializeSlots(\n\t\t\t1, 0,\n\t\t\t0, 1\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _invert_1(_copy_1(_self));
  },
  "{ :self |\n\t\tself.copy.invert\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "invert",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _solidus_2(1, _determinant_1(_self));
    /* Statements */
    return _initializeSlots_5(
      _self,
      _asterisk_2(_d_1(_self), _m),
      _asterisk_2(_negated_1(_b_1(_self)), _m),
      _asterisk_2(_negated_1(_c_1(_self)), _m),
      _asterisk_2(_a_1(_self), _m),
    );
  },
  "{ :self |\n\t\tlet m = 1 / self.determinant;\n\t\tself.initializeSlots(\n\t\t\tself.d * m, self.b.negated * m,\n\t\t\tself.c.negated * m, self.a * m\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "rotation",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _n"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _self,
      _cos_1(_n),
      _sin_1(_n),
      _negated_1(_sin_1(_n)),
      _cos_1(_n),
    );
  },
  "{ :self :n |\n\t\tself.initializeSlots(\n\t\t\tn.cos, n.sin,\n\t\t\tn.sin.negated, n.cos\n\t\t)\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "transpose",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _b = _b_1(_self);
    let _c = _c_1(_self);
    /* Statements */
    _b_2(_self, _c);
    return _c_2(_self, _b);
  },
  "{ :self |\n\t\tlet b = self.b;\n\t\tlet c = self.c;\n\t\tself.b := c;\n\t\tself.c := b\n\t}",
);

sl.addMethod(
  "Matrix22",
  "Matrix22",
  "transposed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Matrix22_4(_a_1(_self), _c_1(_self), _b_1(_self), _d_1(_self));
  },
  "{ :self |\n\t\tMatrix22(self.a, self.c, self.b, self.d)\n\t}",
);

sl.addMethod(
  "Void",
  "Matrix22",
  "Matrix22",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage =
        "Arity: expected 0, "; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _newMatrix22_0();
  },
  "{\n\t\tnewMatrix22()\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Matrix22",
  "Matrix22",
  ["a", "b", "c", "d"],
  function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _a, _b, _c, _d"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(_newMatrix22_0(), _a, _b, _c, _d);
  },
  "{ :a :b :c :d |\n\t\tnewMatrix22().initializeSlots(a, b, c, d)\n\t}",
);

sl.addMethod(
  "List",
  "Matrix22",
  "asMatrix22",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym20 = _assertIsOfSize_2(_self, 4),
      _a = _at_2(__genSym20, 1),
      _b = _at_2(__genSym20, 2),
      _c = _at_2(__genSym20, 3),
      _d = _at_2(__genSym20, 4);
    /* Statements */
    return _Matrix22_4(_a, _b, _c, _d);
  },
  "{ :self |\n\t\tlet [a, b, c, d] = self;\n\t\tMatrix22(a, b, c, d)\n\t}",
);
