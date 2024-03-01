/* {- Requires: Matrix33 -} */

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
    /* Statements */
    return _xy_1(_applyTo_2(_asMatrix33_1(_self), _vector));
  },
  "{ :self :vector |\n\t\tself.asMatrix33.applyTo(vector).xy\n\t}",
);

sl.addMethod(
  "Projection3",
  "Projection3",
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
    return _Matrix33_9(
      _asterisk_2(_x_1(_self), _negated_1(_cos_1(_beta_1(_self)))),
      0,
      _asterisk_2(_z_1(_self), _cos_1(_alpha_1(_self))),
      _asterisk_2(_x_1(_self), _sin_1(_beta_1(_self))),
      _y_1(_self),
      _asterisk_2(_z_1(_self), _sin_1(_alpha_1(_self))),
      0,
      0,
      0,
    );
  },
  "{ :self |\n\t\tMatrix33(\n\t\t\tself.x * self.beta.cos.negated, 0, self.z * self.alpha.cos,\n\t\t\tself.x * self.beta.sin, self.y , self.z * self.alpha.sin,\n\t\t\t0, 0, 0\n\t\t)\n\t}",
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
    let _matrix = _asMatrix33_1(_self);
    /* Statements */
    return (function (_aVector) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aVector";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _xy_1(_applyTo_2(_matrix, _aVector));
    });
  },
  "{ :self |\n\t\tlet matrix = self.asMatrix33;\n\t\t{ :aVector |\n\t\t\tmatrix.applyTo(aVector).xy\n\t\t}\n\t}",
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
