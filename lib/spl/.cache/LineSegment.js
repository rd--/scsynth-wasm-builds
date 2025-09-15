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
        1,
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
        2,
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
  "{ :self :index | caseOf(index,[->(1, { u(self) }), ->(2, { v(self) })]) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minMax_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | minMax(vertexCoordinates(self)) }",
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
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(_Line_1([_u_1(_self), _v_1(_self)]), _options);
  }, ["self", "options"]),
  "{ :self :options | svgFragment(Line([u(self), v(self)]),options) }",
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
    return _midpoint_1([_u_1(_self), _v_1(_self)]);
  }, ["self"]),
  "{ :self | midpoint([u(self), v(self)]) }",
);

sl.addMethodToExistingType(
  "LineSegment",
  "LineSegment",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _asUnaryBlock_1(_projection);
    /* Statements */
    return _LineSegment_2(_f_1(_u_1(_self)), _f_1(_v_1(_self)));
  }, ["self", "projection"]),
  "{ :self :projection | let f:/1 = asUnaryBlock(projection); LineSegment(f(u(self)), f(v(self))) }",
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
  "connectLineSegments",
  ["self", "eq:/2"],
  sl.annotateFunction(function (_self, _eq_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _eq_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isEmpty_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _l = _at_2(_self, 1);
        let __SPL212 = _assertIsOfSize_2(_l, 2);
        let _p = _at_2(__SPL212, 1);
        let _q = _at_2(__SPL212, 2);
        let _i = 1;
        /* Statements */
        _removeAt_2(_self, 1);
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _size_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL213 = _assertIsOfSize_2(_at_2(_self, _i), 2);
            let _a = _at_2(__SPL213, 1);
            let _b = _at_2(__SPL213, 2);
            let _matched = true;
            /* Statements */
            _if_3(
              _eq_2(_p, _a),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _addFirst_2(_l, _b);
                return _p = _b;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _eq_2(_p, _b),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _addFirst_2(_l, _a);
                    return _p = _a;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _eq_2(_q, _a),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _addLast_2(_l, _b);
                        return _q = _b;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _eq_2(_q, _b),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            _addLast_2(_l, _a);
                            return _q = _a;
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _matched = false;
                          }, []),
                        );
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
            return _if_3(
              _matched,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _removeAt_2(_self, _i);
                return _i = 1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i = _plusSign_2(_i, 1);
              }, []),
            );
          }, []),
        );
        return _add_2(_answer, _l);
      }, []),
    );
    return _answer;
  }, ["self", "eq:/2"]),
  "{ :self :eq:/2 | let answer = []; whileTrue({ not(isEmpty(self)) }, { let l = at(self, 1); let __SPL212 = assertIsOfSize(l, 2); let p = at(__SPL212, 1); let q = at(__SPL212, 2); let i = 1; removeAt(self,1); whileTrue({ <=(i, size(self)) }, { let __SPL213 = assertIsOfSize(at(self, i), 2); let a = at(__SPL213, 1); let b = at(__SPL213, 2); let matched = true; if(eq(p, a), { addFirst(l,b); p := b }, { if(eq(p, b), { addFirst(l,a); p := a }, { if(eq(q, a), { addLast(l,b); q := b }, { if(eq(q, b), { addLast(l,a); q := a }, { matched := false }) }) }) }); if(matched, { removeAt(self,i); i := 1 }, { i := +(i, 1) }) }); add(answer,l) }); answer }",
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
