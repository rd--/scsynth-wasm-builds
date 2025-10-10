/*  Requires: PlanarCoordinates  */

sl.addType(
  false,
  "Matrix22",
  "Matrix22",
  ["Object", "Equatable"],
  ["a", "b", "c", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Matrix22",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Matrix22",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "applyTo",
  ["self", "vector"],
  sl.annotateFunction(function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      throw new Error(errorMessage);
    } /* Statements */
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
  }, ["self", "vector"]),
  "{ :self :vector |\n\t\tPlanarCoordinates(\n\t\t\t(self.a * vector.x) + (self.b * vector.y),\n\t\t\t(self.c * vector.x) + (self.d * vector.y)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_a_1(_self), _b_1(_self), _c_1(_self), _d_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.a, self.b, self.c, self.d]\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "determinant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(_a_1(_self), _d_1(_self)),
      _asterisk_2(_b_1(_self), _c_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.a * self.d) - (self.b * self.c)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "equalBy",
  ["self", "aMatrix", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aMatrix, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMatrix, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isMatrix22_1(_aMatrix),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_a_1(_self), _a_1(_aMatrix)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _aBlock_2(_b_1(_self), _b_1(_aMatrix)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _aBlock_2(_c_1(_self), _c_1(_aMatrix)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _aBlock_2(_d_1(_self), _d_1(_aMatrix));
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aMatrix", "aBlock:/2"]),
  "{ :self :aMatrix :aBlock:/2 |\n\t\taMatrix.isMatrix22 & {\n\t\t\taBlock(self.a, aMatrix.a) & {\n\t\t\t\taBlock(self.b, aMatrix.b) & {\n\t\t\t\t\taBlock(self.c, aMatrix.c) & {\n\t\t\t\t\t\taBlock(self.d, aMatrix.d)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "identity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_self, 1, 0, 0, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.initializeSlots(\n\t\t\t1, 0,\n\t\t\t0, 1\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
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
  "Matrix22",
  "Matrix22",
  "invert",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(1, _determinant_1(_self));
    /* Statements */
    return _initializeSlots_5(
      _self,
      _asterisk_2(_d_1(_self), _m),
      _asterisk_2(_negate_1(_b_1(_self)), _m),
      _asterisk_2(_negate_1(_c_1(_self)), _m),
      _asterisk_2(_a_1(_self), _m),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet m = 1 / self.determinant;\n\t\tself.initializeSlots(\n\t\t\tself.d * m, self.b.negate * m,\n\t\t\tself.c.negate * m, self.a * m\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "rotation",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(
      _self,
      _cos_1(_n),
      _sin_1(_n),
      _negate_1(_sin_1(_n)),
      _cos_1(_n),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.initializeSlots(\n\t\t\tn.cos, n.sin,\n\t\t\tn.sin.negate, n.cos\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "transpose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _b_1(_self);
    let _c = _c_1(_self);
    /* Statements */
    _b_2(_self, _c);
    return _c_2(_self, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet b = self.b;\n\t\tlet c = self.c;\n\t\tself.b := c;\n\t\tself.c := b\n\t}",
);

sl.addMethodToExistingType(
  "Matrix22",
  "Matrix22",
  "transpose",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Matrix22_4(_a_1(_self), _c_1(_self), _b_1(_self), _d_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tMatrix22(self.a, self.c, self.b, self.d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Matrix22",
  "Matrix22",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newMatrix22_0();
  }, []),
  "{\n\t\tnewMatrix22()\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix22",
  "Matrix22",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newMatrix22_0(), _a, _b, _c, _d);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d |\n\t\tnewMatrix22().initializeSlots(a, b, c, d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix22",
  "asMatrix22",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_self, 4);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
    /* Statements */
    return _Matrix22_4(_a, _b, _c, _d);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self;\n\t\tMatrix22(a, b, c, d)\n\t}",
);
