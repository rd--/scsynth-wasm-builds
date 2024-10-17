sl.addType(
  false,
  "Projection3",
  "Projection3",
  ["Object"],
  ["alpha", "beta", "x", "y", "z"],
);

sl.copyTraitToType(
  "Object",
  "Projection3",
);

sl.addMethod(
  "Projection3",
  "Projection3",
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
    let __genSym53 = _assertIsOfSize_2(_vector, 3),
      _x = _at_2(__genSym53, 1),
      _y = _at_2(__genSym53, 2),
      __genSym52 = _at_2(__genSym53, 3);
    /* Statements */
    return _dot_2(_asMatrix_1(_self), [_x, _y]);
  },
  "{ :self :vector |\n\t\tlet [x, y, _] = vector;\n\t\tself.asMatrix.dot([x, y])\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
  "asMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [[
      _asterisk_2(_x_1(_self), _negated_1(_cos_1(_beta_1(_self)))),
      0,
      _asterisk_2(_z_1(_self), _cos_1(_alpha_1(_self))),
    ], [
      _asterisk_2(_x_1(_self), _sin_1(_beta_1(_self))),
      _y_1(_self),
      _asterisk_2(_z_1(_self), _sin_1(_alpha_1(_self))),
    ], [0, 0, 0]];
  },
  "{ :self |\n\t\t[\n\t\t\t[self.x * self.beta.cos.negated, 0, self.z * self.alpha.cos],\n\t\t\t[self.x * self.beta.sin, self.y , self.z * self.alpha.sin],\n\t\t\t[0, 0, 0]\n\t\t]\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
  "chinese",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_6(
      _self,
      _solidus_2(_pi, 6),
      0,
      1,
      1,
      _solidus_2(1, 2),
    );
  },
  "{ :self |\n\t\tself.initializeSlots(pi / 6, 0, 1, 1, 1 / 2)\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
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
    return _initializeSlots_6(_self, 0, 0, 1, 1, 1);
  },
  "{ :self |\n\t\tself.initializeSlots(0, 0, 1, 1, 1)\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
  "isometric",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_6(
      _self,
      _solidus_2(_pi, 6),
      _solidus_2(_pi, 6),
      1,
      1,
      1,
    );
  },
  "{ :self |\n\t\tself.initializeSlots(pi / 6, pi / 6, 1, 1, 1)\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
  "block",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _matrix = _asMatrix_1(_self);
    /* Statements */
    return (function (_aVector) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aVector";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym55 = _assertIsOfSize_2(_dot_2(_matrix, _aVector), 3),
        _x = _at_2(__genSym55, 1),
        _y = _at_2(__genSym55, 2),
        __genSym54 = _at_2(__genSym55, 3);
      /* Statements */
      return [_x, _y];
    });
  },
  "{ :self |\n\t\tlet matrix = self.asMatrix;\n\t\t{ :aVector |\n\t\t\tlet [x, y, _] = matrix.dot(aVector);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "Projection3",
  "Projection3",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _identity_1(_newProjection3_0());
  },
  "{\n\t\tnewProjection3().identity\n\t}",
);
