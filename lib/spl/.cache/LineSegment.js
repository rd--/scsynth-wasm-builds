sl.addType(
  false,
  "LineSegment",
  "LineSegment",
  ["Object", "Equatable"],
  ["u", "v"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LineSegment",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tself.u.euclideanDistance(self.v)\n\t}",
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
  "{ :self :index |\n\t\tindex.caseOf([\n\t\t\t1 -> { self.u },\n\t\t\t2 -> { self.v }\n\t\t])\n\t}",
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
  "{ :self |\n\t\tself.vertexCoordinates.minMax\n\t}",
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
  "{ :self |\n\t\tself.midpoint\n\t}",
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
  "{ :self |\n\t\t1\n\t}",
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
  "{ :self :aPoint |\n\t\t[self.u, self.v].pointLineDistance(aPoint)\n\t}",
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
  "{ :self |\n\t\tself.u.size\n\t}",
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
  "{ :self :options |\n\t\tLine([self.u, self.v]).svgFragment(options)\n\t}",
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
  "{ :self :aPoint |\n\t\tself.distance(aPoint).isVeryCloseTo(0)\n\t}",
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
  "{ :self |\n\t\t[self.u, self.v].midpoint\n\t}",
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
  "{ :self :projection |\n\t\tlet f:/1 = projection.asUnaryBlock;\n\t\tLineSegment(\n\t\t\tf(self.u),\n\t\t\tf(self.v)\n\t\t)\n\t}",
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
  "{ :self |\n\t\t[self.u, self.v]\n\t}",
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
  "{ :self |\n\t\t2\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_l, 2);
        let _p = _at_2(__SplVar1, 1);
        let _q = _at_2(__SplVar1, 2);
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
            let __SplVar2 = _assertIsOfSize_2(_at_2(_self, _i), 2);
            let _a = _at_2(__SplVar2, 1);
            let _b = _at_2(__SplVar2, 2);
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
  "{ :self :eq:/2 |\n\t\tlet answer = [];\n\t\t{\n\t\t\tself.isEmpty.not\n\t\t}.whileTrue {\n\t\t\tlet l = self[1];\n\t\t\tlet [p, q] = l;\n\t\t\tlet i = 1;\n\t\t\tself.removeAt(1);\n\t\t\t{\n\t\t\t\ti <= self.size\n\t\t\t}.whileTrue {\n\t\t\t\tlet [a, b] = self[i];\n\t\t\t\tlet matched = true;\n\t\t\t\teq(p, a).if {\n\t\t\t\t\tl.addFirst(b);\n\t\t\t\t\tp := b\n\t\t\t\t} {\n\t\t\t\t\teq(p, b).if {\n\t\t\t\t\t\tl.addFirst(a);\n\t\t\t\t\t\tp := a\n\t\t\t\t\t} {\n\t\t\t\t\t\teq(q, a).if {\n\t\t\t\t\t\t\tl.addLast(b);\n\t\t\t\t\t\t\tq := b\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\teq(q, b).if {\n\t\t\t\t\t\t\t\tl.addLast(a);\n\t\t\t\t\t\t\t\tq := a\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tmatched := false\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tmatched.if {\n\t\t\t\t\tself.removeAt(i);\n\t\t\t\t\ti := 1\n\t\t\t\t} {\n\t\t\t\t\ti := i + 1\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer.add(l)\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :u :v |\n\t\tnewLineSegment().initializeSlots(u, v)\n\t}",
);
