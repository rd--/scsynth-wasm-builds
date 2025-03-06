sl.addType(
  false,
  "Point",
  "Point",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Point",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_1(_self);
  }, ["self"]),
  "{ :self | coordinates(self) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index | at(coordinates(self), index) }",
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
  "dimension",
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
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | size(coordinates(self)) }",
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
  "isPlanar",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_size_1(_coordinates_1(_self)), 2);
  }, ["self"]),
  "{ :self | =(size(coordinates(self)), 2) }",
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
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | size(coordinates(self)) }",
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

sl.addMethodToExistingType(
  "Point",
  "Point",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self), 1) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_v), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Point>>y: no y");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_v, 2);
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = coordinates(self); if((<(size(v), 2)), { error(self,'Point>>y: no y') }, { at(v, 2) }) }",
);

sl.addMethodToExistingType(
  "Point",
  "Point",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _coordinates_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_size_1(_v), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Point>>z: no z");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_v, 3);
      }, []),
    );
  }, ["self"]),
  "{ :self | let v = coordinates(self); if((<(size(v), 3)), { error(self,'Point>>z: no z') }, { at(v, 3) }) }",
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
    let __SPL8 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SPL8, 1);
    let _y1 = _at_2(__SPL8, 2);
    let __SPL9 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SPL9, 1);
    let _y2 = _at_2(__SPL9, 2);
    let _a = _hyphenMinus_2(_y2, _y1);
    let _b = _hyphenMinus_2(_x1, _x2);
    let _c = _hyphenMinus_2(
      _asterisk_2(_y1, _hyphenMinus_2(_x2, _x1)),
      _asterisk_2(_x1, _hyphenMinus_2(_y2, _y1)),
    );
    /* Statements */
    return [_a, _b, _c];
  }, ["p1", "p2"]),
  "{ :p1 :p2 | let __SPL8 = assertIsOfSize(p1, 2); let x1 = at(__SPL8, 1); let y1 = at(__SPL8, 2); let __SPL9 = assertIsOfSize(p2, 2); let x2 = at(__SPL9, 1); let y2 = at(__SPL9, 2); let a = -(y2, y1); let b = -(x1, x2); let c = -((*(y1, (-(x2, x1)))), (*(x1, (-(y2, y1))))); [a, b, c] }",
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
    let __SPL10 = _assertIsOfSize_2(_l1, 2);
    let _p1 = _at_2(__SPL10, 1);
    let _p2 = _at_2(__SPL10, 2);
    let __SPL11 = _assertIsOfSize_2(_l2, 2);
    let _p3 = _at_2(__SPL11, 1);
    let _p4 = _at_2(__SPL11, 2);
    let __SPL12 = _assertIsOfSize_2(_p1, 2);
    let _x1 = _at_2(__SPL12, 1);
    let _y1 = _at_2(__SPL12, 2);
    let __SPL13 = _assertIsOfSize_2(_p2, 2);
    let _x2 = _at_2(__SPL13, 1);
    let _y2 = _at_2(__SPL13, 2);
    let __SPL14 = _assertIsOfSize_2(_p3, 2);
    let _x3 = _at_2(__SPL14, 1);
    let _y3 = _at_2(__SPL14, 2);
    let __SPL15 = _assertIsOfSize_2(_p4, 2);
    let _x4 = _at_2(__SPL15, 1);
    let _y4 = _at_2(__SPL15, 2);
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
  "{ :l1 :l2 | let __SPL10 = assertIsOfSize(l1, 2); let p1 = at(__SPL10, 1); let p2 = at(__SPL10, 2); let __SPL11 = assertIsOfSize(l2, 2); let p3 = at(__SPL11, 1); let p4 = at(__SPL11, 2); let __SPL12 = assertIsOfSize(p1, 2); let x1 = at(__SPL12, 1); let y1 = at(__SPL12, 2); let __SPL13 = assertIsOfSize(p2, 2); let x2 = at(__SPL13, 1); let y2 = at(__SPL13, 2); let __SPL14 = assertIsOfSize(p3, 2); let x3 = at(__SPL14, 1); let y3 = at(__SPL14, 2); let __SPL15 = assertIsOfSize(p4, 2); let x4 = at(__SPL15, 1); let y4 = at(__SPL15, 2); let a1 = -(y2, y1); let b1 = -(x1, x2); let c1 = +((*(a1, x1)), (*(b1, y1))); let a2 = -(y4, y3); let b2 = -(x3, x4); let c2 = +((*(a2, x3)), (*(b2, y3))); let delta = -((*(a1, b2)), (*(a2, b1))); [/((-((*(b2, c1)), (*(b1, c2)))), delta), /((-((*(a1, c2)), (*(a2, c1)))), delta)] }",
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
    let __SPL16 = _assertIsOfSize_2(_self, 3);
    let _q1 = _at_2(__SPL16, 1);
    let _p = _at_2(__SPL16, 2);
    let _q2 = _at_2(__SPL16, 3);
    let __SPL17 = _assertIsOfSize_2(_q1, 2);
    let _x1 = _at_2(__SPL17, 1);
    let _y1 = _at_2(__SPL17, 2);
    let __SPL18 = _assertIsOfSize_2(_p, 2);
    let _x0 = _at_2(__SPL18, 1);
    let _y0 = _at_2(__SPL18, 2);
    let __SPL19 = _assertIsOfSize_2(_q2, 2);
    let _x2 = _at_2(__SPL19, 1);
    let _y2 = _at_2(__SPL19, 2);
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
  "{ :self | let __SPL16 = assertIsOfSize(self, 3); let q1 = at(__SPL16, 1); let p = at(__SPL16, 2); let q2 = at(__SPL16, 3); let __SPL17 = assertIsOfSize(q1, 2); let x1 = at(__SPL17, 1); let y1 = at(__SPL17, 2); let __SPL18 = assertIsOfSize(p, 2); let x0 = at(__SPL18, 1); let y0 = at(__SPL18, 2); let __SPL19 = assertIsOfSize(q2, 2); let x2 = at(__SPL19, 1); let y2 = at(__SPL19, 2); let n = +((*((-(x1, x0)), (-(x2, x0)))), (*((-(y1, y0)), (-(y2, y0))))); let d = *(sqrt((+(squared((-(x1, x0))), squared((-(y1, y0)))))), sqrt((+(squared((-(x2, x0))), squared((-(y2, y0))))))); arcCos((/(n, d))) }",
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
    let __SPL20 = _assertIsOfSize_2(_aLine, 2);
    let _p1 = _at_2(__SPL20, 1);
    let _p2 = _at_2(__SPL20, 2);
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
  "{ :aLine :aPoint | let __SPL20 = assertIsOfSize(aLine, 2); let p1 = at(__SPL20, 1); let p2 = at(__SPL20, 2); let p0 = aPoint; if((=(size(p0), 2)), { /(abs((*(2, shoelaceFormula([p0, p1, p2])))), abs(euclideanDistance(p1,p2))) }, { /(norm(cross((-(p0, p1)),-(p0, p2))), norm((-(p2, p1)))) }) }",
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
    let __SPL21 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SPL21, 1);
    let _b = _at_2(__SPL21, 2);
    let _u = _hyphenMinus_2(_p, _a);
    let _v = _hyphenMinus_2(_b, _a);
    let _r = _projection_2(_u, _v);
    /* Statements */
    return _plusSign_2(_a, _r);
  }, ["l", "p"]),
  "{ :l :p | let __SPL21 = assertIsOfSize(l, 2); let a = at(__SPL21, 1); let b = at(__SPL21, 2); let u = -(p, a); let v = -(b, a); let r = projection(u, v); +(a, r) }",
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
    let __SPL22 = _assertIsOfSize_2(_l, 2);
    let _a = _at_2(__SPL22, 1);
    let _b = _at_2(__SPL22, 2);
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
  "{ :l :p | let __SPL22 = assertIsOfSize(l, 2); let a = at(__SPL22, 1); let b = at(__SPL22, 2); let d = euclideanDistance(a,b); if((=(d, 0)), { a }, { let u = -(p, a); let v = -(b, a); let r = projection(u, v); let t = vectorAngle(v,r); if((~(t, pi(1))), { a }, { let i = +(a, r); if((>(euclideanDistance(a,i), d)), { b }, { i }) }) }) }",
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
    return _if_3(
      _includesAllIndices_2(_self, ["x", "y", "z"]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Point_1([
          _at_2(_self, "x"),
          _at_2(_self, "y"),
          _at_2(_self, "z"),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesAllIndices_2(_self, ["x", "y"]),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Point_1([_at_2(_self, "x"), _at_2(_self, "y")]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "Record>>asPoint: invalid dictionary");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(includesAllIndices(self,['x', 'y', 'z']), { Point([at(self, 'x'), at(self, 'y'), at(self, 'z')]) }, { if(includesAllIndices(self,['x', 'y']), { Point([at(self, 'x'), at(self, 'y')]) }, { error(self,'Record>>asPoint: invalid dictionary') }) }) }",
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
