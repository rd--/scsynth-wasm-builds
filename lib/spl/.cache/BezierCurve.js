sl.addType(
  false,
  "BezierCurve",
  "BezierCurve",
  ["Object"],
  ["controlPoints", "splineDegree"],
);

sl.copyTraitToType(
  "Object",
  "BezierCurve",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_controlPoints_1(_self));
  },
  "{ :self |\n\t\tself.controlPoints.coordinateBoundingBox\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "componentCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _partition_3(
      _controlPoints_1(_self),
      _plusSign_2(_splineDegree_1(_self), 1),
      _splineDegree_1(_self),
    );
  },
  "{ :self |\n\t\tself.controlPoints.partition(\n\t\t\tself.splineDegree + 1,\n\t\t\tself.splineDegree\n\t\t)\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "componentCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_size_1(_controlPoints_1(_self)), 1),
      _splineDegree_1(_self),
    );
  },
  "{ :self |\n\t\t(self.controlPoints.size - 1) / self.splineDegree\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _splineDegree_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_n, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _forSvg_2(_Line_1(_controlPoints_1(_self)), _options);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _precision = _at_2(_options, "precision");
      let _p = _controlPoints_1(_self);
      let _z = _if_3(_equalsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return "Q ";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_n, 3), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return "C ";
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, "not Q or C");
        });
      });
      let _c = _chunksOfFrom_3(_p, _n, 2);
      let _d = _stringJoin_2([
        _format_2("M %,%", [
          _printStringToFixed_2(_at_2(_at_2(_p, 1), 1), _precision),
          _printStringToFixed_2(_at_2(_at_2(_p, 1), 2), _precision),
        ]),
        _collect_2(_c, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(_z, _asSvgPointList_2(_each, _options));
        }),
      ], " ");
      /* Statements */
      return _format_2('<path d="%" />', [_d]);
    });
  },
  "{ :self :options |\n\t\tlet n = self.splineDegree;\n\t\t(n = 1).if {\n\t\t\tself.controlPoints.Line.forSvg(options)\n\t\t} {\n\t\t\tlet precision = options::precision;\n\t\t\tlet p = self.controlPoints;\n\t\t\tlet z = (n = 2).if {\n\t\t\t\t'Q '\n\t\t\t} {\n\t\t\t\t(n = 3).if {\n\t\t\t\t\t'C '\n\t\t\t\t} {\n\t\t\t\t\tself.error('not Q or C')\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet c = p.chunksOfFrom(n, 2);\n\t\t\tlet d = [\n\t\t\t\t'M %,%'.format([\n\t\t\t\t\tp[1][1].printStringToFixed(precision),\n\t\t\t\t\tp[1][2].printStringToFixed(precision)\n\t\t\t\t]),\n\t\t\t\tc.collect { :each |\n\t\t\t\t\tz ++ each.asSvgPointList(options)\n\t\t\t\t}\n\t\t\t].stringJoin(' ');\n\t\t\t'<path d=\"%\" />'.format([d])\n\t\t}\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "isComposite",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isValid_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _not_1(_isSimple_1(_self));
    });
  },
  "{ :self |\n\t\tself.isValid & {\n\t\t\tself.isSimple.not\n\t\t}\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "isSimple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _size_1(_controlPoints_1(_self)),
      _plusSign_2(_splineDegree_1(_self), 1),
    );
  },
  "{ :self |\n\t\tself.controlPoints.size = (self.splineDegree + 1)\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "isValid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_componentCount_1(_self));
  },
  "{ :self |\n\t\tself.componentCount.isInteger\n\t}",
);

sl.addMethod(
  "BezierCurve",
  "BezierCurve",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_controlPoints_1(_self));
  },
  "{ :self |\n\t\tself.controlPoints.size\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "BezierCurve",
  ["self", "degree"],
  function (_self, _degree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _degree";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _BezierCurve_2(_each, _degree);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_3(_newBezierCurve_0(), _self, _degree);
    });
  },
  "{ :self :degree |\n\t\t(self.rank > 2).if {\n\t\t\tself.collect { :each |\n\t\t\t\tBezierCurve(each, degree)\n\t\t\t}\n\t\t} {\n\t\t\tnewBezierCurve().initializeSlots(self, degree)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "bezierDerivatives",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _p = _self;
    /* Statements */
    _downToDo_3(_size_1(_p), 2, function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _d";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _c = _hyphenMinus_2(_d, 1);
      let _q = [];
      /* Statements */
      _toDo_3(1, _c, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _q,
          _asterisk_2(
            _c,
            _hyphenMinus_2(_at_2(_p, _plusSign_2(_j, 1)), _at_2(_p, _j)),
          ),
        );
      });
      _add_2(_answer, _q);
      return _p = _q;
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet p = self;\n\t\tp.size.downToDo(2) { :d |\n\t\t\tlet c = d - 1;\n\t\t\tlet q = [];\n\t\t\t1.toDo(c) { :j |\n\t\t\t\tq.add(c * (p[j + 1] - p[j]))\n\t\t\t};\n\t\t\tanswer.add(q);\n\t\t\tp := q\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "bezierFunction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _bezierFunctionAt_2(_self, _index);
    });
  },
  "{ :self |\n\t\t{ :index |\n\t\t\tself.bezierFunctionAt(index)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "bezierFunctionAt",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_self), 1);
    let _b = _collect_2(_asList_1(_upOrDownTo_2(0, _n)), function (_d) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _d";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _bernsteinBasis_3(_n, _d, _x);
    });
    /* Statements */
    return _sum_1(_asterisk_2(_b, _self));
  },
  "{ :self :x |\n\t\tlet n = self.size - 1;\n\t\tlet b = [0 .. n].collect { :d |\n\t\t\tn.bernsteinBasis(d, x)\n\t\t};\n\t\t(b * self).sum\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "bezierSplitAt",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _left = [];
    let _right = [];
    let _deCasteljaus_2 = function (_p, _t) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _p, _t";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_size_1(_p), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _addLast_2(_left, _at_2(_p, 1));
        return _addFirst_2(_right, _at_2(_p, 1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _hyphenMinus_2(_size_1(_p), 1);
        /* Statements */
        return _deCasteljaus_2(
          _collect_2(_upOrDownTo_2(1, _k), function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _ifTrue_2(_equalsSign_2(_i, 1), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _addLast_2(_left, _at_2(_p, _i));
            });
            _ifTrue_2(_equalsSign_2(_i, _k), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _addFirst_2(_right, _at_2(_p, _plusSign_2(_i, 1)));
            });
            return _plusSign_2(
              _asterisk_2(_hyphenMinus_2(1, _t), _at_2(_p, _i)),
              _asterisk_2(_t, _at_2(_p, _plusSign_2(_i, 1))),
            );
          }),
          _t,
        );
      });
    };
    /* Statements */
    _deCasteljaus_2(_self, _x);
    return _asTuple_1([_left, _right]);
  },
  "{ :self :x |\n\t\tlet left = [];\n\t\tlet right = [];\n\t\tlet deCasteljaus = { :p :t |\n\t\t\t(p.size = 1).if {\n\t\t\t\tleft.addLast(p[1]);\n\t\t\t\tright.addFirst(p[1])\n\t\t\t} {\n\t\t\t\tlet k = p.size - 1;\n\t\t\t\t(1 .. k).collect { :i |\n\t\t\t\t\t(i = 1).ifTrue {\n\t\t\t\t\t\tleft.addLast(p[i])\n\t\t\t\t\t};\n\t\t\t\t\t(i = k).ifTrue {\n\t\t\t\t\t\tright.addFirst(p[i + 1])\n\t\t\t\t\t};\n\t\t\t\t\t((1 - t) * p[i]) + (t * p[i + 1])\n\t\t\t\t}.deCasteljaus(t)\n\t\t\t}\n\t\t};\n\t\tdeCasteljaus(self, x);\n\t\t(left, right)\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "cubicBezierFunctionAt",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym26 = _assertIsOfSize_2(_self, 4),
      _p1 = _at_2(__genSym26, 1),
      _p2 = _at_2(__genSym26, 2),
      _p3 = _at_2(__genSym26, 3),
      _p4 = _at_2(__genSym26, 4);
    let _u = _hyphenMinus_2(1, _x);
    let _x2 = _asterisk_2(_x, _x);
    let _x3 = _asterisk_2(_x2, _x);
    let _u2 = _asterisk_2(_u, _u);
    let _u3 = _asterisk_2(_u2, _u);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(
          _asterisk_2(_p1, _u2),
          _asterisk_2(_p2, _asterisk_2(_asterisk_2(3, _u2), _x)),
        ),
        _asterisk_2(_p3, _asterisk_2(_asterisk_2(3, _u), _x2)),
      ),
      _asterisk_2(_p4, _x3),
    );
  },
  "{ :self :x |\n\t\tlet [p1, p2, p3, p4] = self;\n\t\tlet u = 1 - x;\n\t\tlet x2 = x * x;\n\t\tlet x3 = x2 * x;\n\t\tlet u2 = u * u;\n\t\tlet u3 = u2 * u;\n\t\t(p1 * u2) + (p2 * (3 * u2 * x)) + (p3 * (3 * u * x2)) + (p4 * x3)\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "deCasteljausAlgorithm",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _deCasteljausAlgorithm_2(
        _collect_2(
          _upOrDownTo_2(1, _hyphenMinus_2(_size_1(_self), 1)),
          function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _asterisk_2(_hyphenMinus_2(1, _x), _at_2(_self, _i)),
              _asterisk_2(_x, _at_2(_self, _plusSign_2(_i, 1))),
            );
          },
        ),
        _x,
      );
    });
  },
  "{ :self :x |\n\t\t(self.size = 1).if {\n\t\t\tself[1]\n\t\t} {\n\t\t\t(1 .. self.size - 1).collect { :i |\n\t\t\t\t((1 - x) * self[i]) + (x * self[i + 1])\n\t\t\t}.deCasteljausAlgorithm(x)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "quadraticBezierFunctionAt",
  ["self", "x"],
  function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym27 = _assertIsOfSize_2(_self, 3),
      _p1 = _at_2(__genSym27, 1),
      _p2 = _at_2(__genSym27, 2),
      _p3 = _at_2(__genSym27, 3);
    let _x2 = _asterisk_2(_x, _x);
    let _u = _hyphenMinus_2(1, _x);
    let _u2 = _asterisk_2(_u, _u);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _asterisk_2(_p1, _u2),
        _asterisk_2(_asterisk_2(_asterisk_2(_p2, 2), _u), _x),
      ),
      _asterisk_2(_p3, _x2),
    );
  },
  "{ :self :x |\n\t\tlet [p1, p2, p3] = self;\n\t\tlet x2 = x * x;\n\t\tlet u = 1 - x;\n\t\tlet u2 = u * u;\n\t\t(p1 * u2) + (p2 * 2 * u * x) + (p3 * x2)\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "quadraticBezierToCubicBezier",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym28 = _assertIsOfSize_2(_self, 3),
      _q1 = _at_2(__genSym28, 1),
      _q2 = _at_2(__genSym28, 2),
      _q3 = _at_2(__genSym28, 3);
    let _c1 = _q1;
    let _c2 = _plusSign_2(
      _q1,
      _asterisk_2(_hyphenMinus_2(_q2, _q1), _solidus_2(2, 3)),
    );
    let _c3 = _plusSign_2(
      _q3,
      _asterisk_2(_hyphenMinus_2(_q2, _q3), _solidus_2(2, 3)),
    );
    let _c4 = _q3;
    /* Statements */
    return [_c1, _c2, _c3, _c4];
  },
  "{ :self |\n\t\tlet [q1, q2, q3] = self;\n\t\tlet c1 = q1;\n\t\tlet c2 = q1 + ((q2 - q1) * (2 / 3));\n\t\tlet c3 = q3 + ((q2 - q3) * (2 / 3));\n\t\tlet c4 = q3;\n\t\t[c1, c2, c3, c4]\n\t}",
);
