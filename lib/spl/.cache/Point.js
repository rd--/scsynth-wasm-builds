/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "Point",
  "Point",
  ["Object", "CartesianCoordinates"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Point",
);

sl.copyTraitMethodsToType(
  "CartesianCoordinates",
  "Point",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(_coordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | !(coordinates(self), 2) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  }, ["self"]),
  "{ :self | [] }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _scaleFactor = _at_2(_options, "scaleFactor");
    /* Statements */
    return _if_3(
      _isPlanar_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<circle cx="%" cy="%" r="%" />', [
          _printStringToFixed_2(_at_2(_coordinates_1(_self), 1), _precision),
          _printStringToFixed_2(_at_2(_coordinates_1(_self), 2), _precision),
          _printStringToFixed_2(_solidus_2(0.5, _scaleFactor), _precision),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "forSvg: not planar");
      }, []),
    );
  }, ["self", "options"]),
  "{ :self :options | let precision = at(options, 'precision'); let scaleFactor = at(options, 'scaleFactor'); if(isPlanar(self), { format('<circle cx=\"%\" cy=\"%\" r=\"%\" />',[printStringToFixed(at(coordinates(self), 1),precision), printStringToFixed(at(coordinates(self), 2),precision), printStringToFixed((/(0.5, scaleFactor)),precision)]) }, { error(self,'forSvg: not planar') }) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "midpoint",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _midpoint_2(_coordinates_1(_self), _coordinates_1(_aPoint)),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint | Point(midpoint(coordinates(self),coordinates(aPoint))) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(
      _value_2(_asUnaryBlock_1(_projection), _coordinates_1(_self)),
    );
  }, ["self", "projection"]),
  "{ :self :projection | Point(value(asUnaryBlock(projection),coordinates(self))) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_coordinates_1(_self)];
  }, ["self"]),
  "{ :self | [coordinates(self)] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "anglePath",
  ["angles", "distances", "origin"],
  sl.annotateFunction(function (_angles, _distances, _origin) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _angles, _distances, _origin";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [_origin];
    let _theta = 0;
    let _p = _origin;
    /* Statements */
    _withIndexDo_2(
      _angles,
      sl.annotateFunction(function (_each, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _index";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _atWrap_2(_distances, _index);
        /* Statements */
        _theta = _percentSign_2(_plusSign_2(_theta, _each), _pi_1(2));
        _p = _plusSign_2(_p, _asterisk_2(_angleVector_1(_theta), _r));
        return _add_2(_answer, _p);
      }, ["each", "index"]),
    );
    return _answer;
  }, ["angles", "distances", "origin"]),
  "{ :angles :distances :origin | let answer = [origin]; let theta = 0; let p = origin; withIndexDo(angles, { :each :index | let r = atWrap(distances,index); theta := %((+(theta, each)), pi(2)); p := +(p, (*(angleVector(theta), r))); add(answer,p) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "anglePath",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anglePath_3(_self, [1], [0, 0]);
  }, ["self"]),
  "{ :self | anglePath(self,[1], [0, 0]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "coordinateBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _minimum = _copy_1(_anyOne_1(_self));
    let _maximum = _copy_1(_minimum);
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexDo_2(
          _each,
          sl.annotateFunction(function (_n, _i) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _n, _i";
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(
              _lessThanSign_2(_n, _at_2(_minimum, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_minimum, _i, _n);
              }, []),
            );
            return _ifTrue_2(
              _greaterThanSign_2(_n, _at_2(_maximum, _i)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_maximum, _i, _n);
              }, []),
            );
          }, ["n", "i"]),
        );
      }, ["each"]),
    );
    return [_minimum, _maximum];
  }, ["self"]),
  "{ :self | let minimum = copy(anyOne(self)); let maximum = copy(minimum); do(self, { :each | withIndexDo(each, { :n :i | ifTrue((<(n, at(minimum, i))), { atPut(minimum, i, n) }); ifTrue((>(n, at(maximum, i))), { atPut(maximum, i, n) }) }) }); [minimum, maximum] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "coordinateBounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _transposed_1(_coordinateBoundingBox_1(_self));
  }, ["self"]),
  "{ :self | transposed(coordinateBoundingBox(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "lineEquation",
  ["p1", "p2"],
  sl.annotateFunction(function (_p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p1, _p2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL134 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SPL134, 1);
    let _y1 = _at_2(__SPL134, 2);
    let __SPL135 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SPL135, 1);
    let _y2 = _at_2(__SPL135, 2);
    let _a = _hyphenMinus_2(_y2, _y1);
    let _b = _hyphenMinus_2(_x1, _x2);
    let _c = _hyphenMinus_2(
      _asterisk_2(_y1, _hyphenMinus_2(_x2, _x1)),
      _asterisk_2(_x1, _hyphenMinus_2(_y2, _y1)),
    );
    /* Statements */
    return [_a, _b, _c];
  }, ["p1", "p2"]),
  "{ :p1 :p2 | let __SPL134 = assertIsOfSize(p1, 2); let x1 = at(__SPL134, 1); let y1 = at(__SPL134, 2); let __SPL135 = assertIsOfSize(p2, 2); let x2 = at(__SPL135, 1); let y2 = at(__SPL135, 2); let a = -(y2, y1); let b = -(x1, x2); let c = -((*(y1, (-(x2, x1)))), (*(x1, (-(y2, y1))))); [a, b, c] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "lineLineIntersection",
  ["l1", "l2"],
  sl.annotateFunction(function (_l1, _l2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l1, _l2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL136 = _assertIsOfSize_2(_l1, 2);
    let _p1 = _at_2(__SPL136, 1);
    let _p2 = _at_2(__SPL136, 2);
    let __SPL137 = _assertIsOfSize_2(_l2, 2);
    let _p3 = _at_2(__SPL137, 1);
    let _p4 = _at_2(__SPL137, 2);
    let __SPL138 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SPL138, 1);
    let _y1 = _at_2(__SPL138, 2);
    let __SPL139 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SPL139, 1);
    let _y2 = _at_2(__SPL139, 2);
    let __SPL140 = _assertIsOfSize_2(_p3, 2);
    let _x3 = _at_2(__SPL140, 1);
    let _y3 = _at_2(__SPL140, 2);
    let __SPL141 = _assertIsOfSize_2(_p4, 2);
    let _x4 = _at_2(__SPL141, 1);
    let _y4 = _at_2(__SPL141, 2);
    let _a1 = _hyphenMinus_2(_y2, _y1);
    let _b1 = _hyphenMinus_2(_x1, _x2);
    let _c1 = _plusSign_2(_asterisk_2(_a1, _x1), _asterisk_2(_b1, _y1));
    let _a2 = _hyphenMinus_2(_y4, _y3);
    let _b2 = _hyphenMinus_2(_x3, _x4);
    let _c2 = _plusSign_2(_asterisk_2(_a2, _x3), _asterisk_2(_b2, _y3));
    let _delta = _hyphenMinus_2(_asterisk_2(_a1, _b2), _asterisk_2(_a2, _b1));
    /* Statements */
    return [
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_b2, _c1), _asterisk_2(_b1, _c2)),
        _delta,
      ),
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_a1, _c2), _asterisk_2(_a2, _c1)),
        _delta,
      ),
    ];
  }, ["l1", "l2"]),
  "{ :l1 :l2 | let __SPL136 = assertIsOfSize(l1, 2); let p1 = at(__SPL136, 1); let p2 = at(__SPL136, 2); let __SPL137 = assertIsOfSize(l2, 2); let p3 = at(__SPL137, 1); let p4 = at(__SPL137, 2); let __SPL138 = assertIsOfSize(p1, 2); let x1 = at(__SPL138, 1); let y1 = at(__SPL138, 2); let __SPL139 = assertIsOfSize(p2, 2); let x2 = at(__SPL139, 1); let y2 = at(__SPL139, 2); let __SPL140 = assertIsOfSize(p3, 2); let x3 = at(__SPL140, 1); let y3 = at(__SPL140, 2); let __SPL141 = assertIsOfSize(p4, 2); let x4 = at(__SPL141, 1); let y4 = at(__SPL141, 2); let a1 = -(y2, y1); let b1 = -(x1, x2); let c1 = +((*(a1, x1)), (*(b1, y1))); let a2 = -(y4, y3); let b2 = -(x3, x4); let c2 = +((*(a2, x3)), (*(b2, y3))); let delta = -((*(a1, b2)), (*(a2, b1))); [/((-((*(b2, c1)), (*(b1, c2)))), delta), /((-((*(a1, c2)), (*(a2, c1)))), delta)] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "linePlaneIntersection",
  ["p0", "n", "l0", "l"],
  sl.annotateFunction(function (_p0, _n, _l0, _l) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _p0, _n, _l0, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ln = _dot_2(_l, _n);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_ln, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _solidus_2(_dot_2(_hyphenMinus_2(_p0, _l0), _n), _ln);
        /* Statements */
        return _plusSign_2(_l0, _asterisk_2(_l, _d));
      }, []),
    );
  }, ["p0", "n", "l0", "l"]),
  "{ :p0 :n :l0 :l | let ln = dot(l,n); if(isVeryCloseTo(ln,0), { nil }, { let d = /(dot((-(p0, l0)),n), ln); +(l0, (*(l, d))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "midpoint",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_u, _solidus_2(_hyphenMinus_2(_v, _u), 2));
  }, ["u", "v"]),
  "{ :u :v | +(u, (/((-(v, u)), 2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "perpendicularBisector",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _rotationMatrix_1(_pi_1(0.5));
    /* Statements */
    return _InfiniteLine_2(
      _midpoint_2(_u, _v),
      _dot_2(_hyphenMinus_2(_v, _u), _m),
    );
  }, ["u", "v"]),
  "{ :u :v | let m = rotationMatrix(pi(0.5)); InfiniteLine(midpoint(u,v), dot((-(v, u)),m)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "planarAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL142 = _assertIsOfSize_2(_self, 3);
    let _q1 = _at_2(__SPL142, 1);
    let _p = _at_2(__SPL142, 2);
    let _q2 = _at_2(__SPL142, 3);
    let __SPL143 = _assertIsOfSize_2(_q1, 2);
    let _x1 = _at_2(__SPL143, 1);
    let _y1 = _at_2(__SPL143, 2);
    let __SPL144 = _assertIsOfSize_2(_p, 2);
    let _x0 = _at_2(__SPL144, 1);
    let _y0 = _at_2(__SPL144, 2);
    let __SPL145 = _assertIsOfSize_2(_q2, 2);
    let _x2 = _at_2(__SPL145, 1);
    let _y2 = _at_2(__SPL145, 2);
    let _n = _plusSign_2(
      _asterisk_2(_hyphenMinus_2(_x1, _x0), _hyphenMinus_2(_x2, _x0)),
      _asterisk_2(_hyphenMinus_2(_y1, _y0), _hyphenMinus_2(_y2, _y0)),
    );
    let _d = _asterisk_2(
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x1, _x0)),
          _squared_1(_hyphenMinus_2(_y1, _y0)),
        ),
      ),
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x2, _x0)),
          _squared_1(_hyphenMinus_2(_y2, _y0)),
        ),
      ),
    );
    /* Statements */
    return _arcCos_1(_solidus_2(_n, _d));
  }, ["self"]),
  "{ :self | let __SPL142 = assertIsOfSize(self, 3); let q1 = at(__SPL142, 1); let p = at(__SPL142, 2); let q2 = at(__SPL142, 3); let __SPL143 = assertIsOfSize(q1, 2); let x1 = at(__SPL143, 1); let y1 = at(__SPL143, 2); let __SPL144 = assertIsOfSize(p, 2); let x0 = at(__SPL144, 1); let y0 = at(__SPL144, 2); let __SPL145 = assertIsOfSize(q2, 2); let x2 = at(__SPL145, 1); let y2 = at(__SPL145, 2); let n = +((*((-(x1, x0)), (-(x2, x0)))), (*((-(y1, y0)), (-(y2, y0))))); let d = *(sqrt((+(squared((-(x1, x0))), squared((-(y1, y0)))))), sqrt((+(squared((-(x2, x0))), squared((-(y2, y0))))))); arcCos((/(n, d))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "Point",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_self), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Point_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newPoint_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((>(rank(self), 1)), { collect(self,Point:/1) }, { initializeSlots(newPoint(),self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineDistance",
  ["aLine", "aPoint"],
  sl.annotateFunction(function (_aLine, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aLine, _aPoint";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL146 = _assertIsOfSize_2(_aLine, 2);
    let _p1 = _at_2(__SPL146, 1);
    let _p2 = _at_2(__SPL146, 2);
    let _p0 = _aPoint;
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_p0), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _abs_1(_asterisk_2(2, _shoelaceFormula_1([_p0, _p1, _p2]))),
          _abs_1(_euclideanDistance_2(_p1, _p2)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _norm_1(_cross_2(_hyphenMinus_2(_p0, _p1), _hyphenMinus_2(_p0, _p2))),
          _norm_1(_hyphenMinus_2(_p2, _p1)),
        );
      }, []),
    );
  }, ["aLine", "aPoint"]),
  "{ :aLine :aPoint | let __SPL146 = assertIsOfSize(aLine, 2); let p1 = at(__SPL146, 1); let p2 = at(__SPL146, 2); let p0 = aPoint; if((=(size(p0), 2)), { /(abs((*(2, shoelaceFormula([p0, p1, p2])))), abs(euclideanDistance(p1,p2))) }, { /(norm(cross((-(p0, p1)),-(p0, p2))), norm((-(p2, p1)))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineNearest",
  ["l", "p"],
  sl.annotateFunction(function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL147 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SPL147, 1);
    let _b = _at_2(__SPL147, 2);
    let _u = _hyphenMinus_2(_p, _a);
    let _v = _hyphenMinus_2(_b, _a);
    let _r = _projection_2(_u, _v);
    /* Statements */
    return _plusSign_2(_a, _r);
  }, ["l", "p"]),
  "{ :l :p | let __SPL147 = assertIsOfSize(l, 2); let a = at(__SPL147, 1); let b = at(__SPL147, 2); let u = -(p, a); let v = -(b, a); let r = projection(u, v); +(a, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "pointLineSegmentNearest",
  ["l", "p"],
  sl.annotateFunction(function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL148 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SPL148, 1);
    let _b = _at_2(__SPL148, 2);
    let _d = _euclideanDistance_2(_a, _b);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _hyphenMinus_2(_p, _a);
        let _v = _hyphenMinus_2(_b, _a);
        let _r = _projection_2(_u, _v);
        let _t = _vectorAngle_2(_v, _r);
        /* Statements */
        return _if_3(
          _tilde_2(_t, _pi_1(1)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _a;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _i = _plusSign_2(_a, _r);
            /* Statements */
            return _if_3(
              _greaterThanSign_2(_euclideanDistance_2(_a, _i), _d),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _b;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["l", "p"]),
  "{ :l :p | let __SPL148 = assertIsOfSize(l, 2); let a = at(__SPL148, 1); let b = at(__SPL148, 2); let d = euclideanDistance(a,b); if((=(d, 0)), { a }, { let u = -(p, a); let v = -(b, a); let r = projection(u, v); let t = vectorAngle(v,r); if((~(t, pi(1))), { a }, { let i = +(a, r); if((>(euclideanDistance(a,i), d)), { b }, { i }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "polylineArcLength",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_adjacentPairsCollect_2(_p, _euclideanDistance_2));
  }, ["p"]),
  "{ :p | sum(adjacentPairsCollect(p,euclideanDistance:/2)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "shoelaceFormula",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_p);
    let _a = 0;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _j = _if_3(
          _equalsSign_2(_i, _n),
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
            return _plusSign_2(_i, 1);
          }, []),
        );
        let _d = _hyphenMinus_2(
          _asterisk_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 2)),
          _asterisk_2(_at_2(_at_2(_p, _j), 1), _at_2(_at_2(_p, _i), 2)),
        );
        /* Statements */
        return _a = _plusSign_2(_a, _d);
      }, ["i"]),
    );
    return _solidus_2(_a, 2);
  }, ["p"]),
  "{ :p | let n = size(p); let a = 0; toDo(1, n, { :i | let j = if((=(i, n)), { 1 }, { +(i, 1) }); let d = -((*(at(at(p, i), 1), at(at(p, j), 2))), (*(at(at(p, j), 1), at(at(p, i), 2)))); a := +(a, d) }); /(a, 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | Point(coordinates(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPoint_1(_asCartesianCoordinates_1(_self));
  }, ["self"]),
  "{ :self | asPoint(asCartesianCoordinates(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | Point(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "Point",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Point_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | Point(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "circlePoints",
  ["n", "o", "r", "theta"],
  sl.annotateFunction(function (_n, _o, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _n, _o, _r, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(_pi_1(2), _n);
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _o,
          _fromPolarCoordinates_1([
            _r,
            _plusSign_2(_theta, _asterisk_2(_i, _m)),
          ]),
        );
      }, ["i"]),
    );
  }, ["n", "o", "r", "theta"]),
  "{ :n :o :r :theta | let m = /(pi(2), n); collect(to(0,-(n, 1)), { :i | +(o, fromPolarCoordinates([r, +(theta, (*(i, m)))])) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "circlePoints",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _hyphenMinus_2(
      _pi_1(_solidus_2(1, _n)),
      _pi_1(_solidus_2(1, 2)),
    );
    /* Statements */
    return _circlePoints_4(_n, [0, 0], _r, _theta);
  }, ["n", "r"]),
  "{ :n :r | let theta = -(pi((/(1, n))), pi((/(1, 2)))); circlePoints(n,[0, 0], r, theta) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "spherePoints",
  ["n", "r"],
  sl.annotateFunction(function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _solidus_2(_asterisk_2(_pi_1(4), _squared_1(_r)), _n);
    let _d = _sqrt_1(_a);
    let _mTheta = _rounded_1(_solidus_2(_pi_1(1), _d));
    let _dTheta = _solidus_2(_pi_1(1), _mTheta);
    let _dPhi = _solidus_2(_a, _dTheta);
    let _answer = [];
    /* Statements */
    _do_2(
      _upOrDownTo_2(0, _hyphenMinus_2(_mTheta, 1)),
      sl.annotateFunction(function (_m) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _m";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _solidus_2(_pi_1(_plusSign_2(_m, 0.5)), _mTheta);
        let _mPhi = _rounded_1(
          _solidus_2(_asterisk_2(_pi_1(2), _sin_1(_theta)), _dPhi),
        );
        /* Statements */
        return _do_2(
          _upOrDownTo_2(0, _hyphenMinus_2(_mPhi, 1)),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _phi = _solidus_2(_asterisk_2(_pi_1(2), _n), _mPhi);
            /* Statements */
            return _add_2(
              _answer,
              _asterisk_2([
                _asterisk_2(_sin_1(_theta), _cos_1(_phi)),
                _asterisk_2(_sin_1(_theta), _sin_1(_phi)),
                _cos_1(_theta),
              ], _r),
            );
          }, ["n"]),
        );
      }, ["m"]),
    );
    return _answer;
  }, ["n", "r"]),
  "{ :n :r | let a = /((*(pi(4), squared(r))), n); let d = sqrt(a); let mTheta = rounded((/(pi(1), d))); let dTheta = /(pi(1), mTheta); let dPhi = /(a, dTheta); let answer = []; do(upOrDownTo(0, -(mTheta, 1)), { :m | let theta = /(pi((+(m, 0.5))), mTheta); let mPhi = rounded((/(*(pi(2), sin(theta)), dPhi))); do(upOrDownTo(0, -(mPhi, 1)), { :n | let phi = /((*(pi(2), n)), mPhi); add(answer,*([*(sin(theta), cos(phi)), *(sin(theta), sin(phi)), cos(theta)], r)) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Point",
  "spherePointsFibonacci",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _phi = _pi_1(_hyphenMinus_2(_sqrt_1(5), 1));
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _hyphenMinus_2(
          1,
          _asterisk_2(_solidus_2(_i, _hyphenMinus_2(_n, 1)), 2),
        );
        let _radius = _sqrt_1(_hyphenMinus_2(1, _asterisk_2(_y, _y)));
        let _theta = _asterisk_2(_phi, _i);
        let _x = _asterisk_2(_cos_1(_theta), _radius);
        let _z = _asterisk_2(_sin_1(_theta), _radius);
        /* Statements */
        return _add_2(_answer, [_x, _y, _z]);
      }, ["i"]),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let answer = []; let phi = pi((-(sqrt(5), 1))); toDo(0, -(n, 1), { :i | let y = -(1, (*((/(i, (-(n, 1)))), 2))); let radius = sqrt((-(1, (*(y, y))))); let theta = *(phi, i); let x = *(cos(theta), radius); let z = *(sin(theta), radius); add(answer,[x, y, z]) }); answer }",
);
