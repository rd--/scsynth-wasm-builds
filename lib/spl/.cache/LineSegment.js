sl.addType(
  false,
  "LineSegment",
  "LineSegment",
  ["Object"],
  ["u", "v"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LineSegment",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _euclideanDistance_2(_u_1(_self), _v_1(_self));
  }, ["self"]),
  "{ :self | euclideanDistance(u(self),v(self)) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_index, [
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _u_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 2;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _v_1(_self);
        }, []),
      ),
    ]);
  }, ["self", "index"]),
  "{ :self :index | caseOf(index,[->({ 1 }, { u(self) }), ->({ 2 }, { v(self) })]) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_1(_self);
  }, ["self"]),
  "{ :self | midpoint(self) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "distance",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _pointLineDistance_2([_u_1(_self), _v_1(_self)], _aPoint);
  }, ["self", "aPoint"]),
  "{ :self :aPoint | pointLineDistance([u(self), v(self)],aPoint) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_u_1(_self));
  }, ["self"]),
  "{ :self | size(u(self)) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "includes",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_distance_2(_self, _aPoint), 0);
  }, ["self", "aPoint"]),
  "{ :self :aPoint | isVeryCloseTo(distance(self,aPoint),0) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "midpoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _midpoint_2(_u_1(_self), _v_1(_self));
  }, ["self"]),
  "{ :self | midpoint(u(self),v(self)) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_u_1(_self), _v_1(_self)];
  }, ["self"]),
  "{ :self | [u(self), v(self)] }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "LineSegment",
  "LineSegment",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLineSegment_0(), _u, _v);
  }, ["u", "v"]),
  "{ :u :v | initializeSlots(newLineSegment(),u, v) }",
);
