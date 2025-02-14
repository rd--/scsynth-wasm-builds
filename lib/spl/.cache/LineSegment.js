sl.addType(
  false,
  "LineSegment",
  "LineSegment",
  ["Object"],
  ["u", "v"],
);

sl.copyTraitToType(
  "Object",
  "LineSegment",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _euclideanDistance_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.euclideanDistance(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _u_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _v_1(_self);
      }),
    ]);
  },
  "{ :self :index |\n\t\tindex.caseOf([\n\t\t\t1 -> { self.u },\n\t\t\t2 -> { self.v }\n\t\t])\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_1(_self);
  },
  "{ :self |\n\t\tself.midpoint\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "distance",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _pointLineDistance_2([_u_1(_self), _v_1(_self)], _aPoint);
  },
  "{ :self :aPoint |\n\t\t[self.u, self.v].pointLineDistance(aPoint)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_u_1(_self));
  },
  "{ :self |\n\t\tself.u.size\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "includes",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_distance_2(_self, _aPoint), 0);
  },
  "{ :self :aPoint |\n\t\tself.distance(aPoint).isVeryCloseTo(0)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.midpoint(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "vertexCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_u_1(_self), _v_1(_self)];
  },
  "{ :self |\n\t\t[self.u, self.v]\n\t}",
);

sl.addMethod(
  "LineSegment",
  "LineSegment",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "List",
  "LineSegment",
  "LineSegment",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLineSegment_0(), _u, _v);
  },
  "{ :u :v |\n\t\tnewLineSegment().initializeSlots(u, v)\n\t}",
);
