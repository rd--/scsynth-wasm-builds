sl.addType(
  false,
  "Line",
  "Line",
  ["Object", "Equatable", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Line",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Line",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Line",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _adjacentPairsDo_2(
      _vertexCoordinates_1(_self),
      sl.annotateFunction(function (_u, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _u, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(_answer, _euclideanDistance_2(_u, _v));
      }, ["u", "v"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.vertexCoordinates.adjacentPairsDo { :u :v |\n\t\t\tanswer := answer + u.euclideanDistance(v)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.vertexCoordinates[index]\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_collect_2(_vertexCoordinates_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tLine(\n\t\t\tself.vertexCoordinates.collect(aBlock:/1)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
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
  "Line",
  "Line",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_vertexCount_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCount - 1\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _hyphenMinus_2(_vertexCount_1(_self), 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return [_i, _plusSign_2(_i, 1)];
      }, ["i"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t(1 .. self.vertexCount - 1).collect { :i |\n\t\t\t[i, i + 1]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "lineEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    /* Statements */
    return _lineEquation_2(_a, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.vertexCoordinates;\n\t\ta.lineEquation(b)\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "lineIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_vertexList_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.vertexList]\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "midpoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _vertexCoordinates_1(_self);
    let _l = _arcLength_1(_self);
    let _h = _solidus_2(_l, 2);
    let _i = 1;
    let _c1 = 0;
    let _c2 = _c1;
    let __SplUnused12 = _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_c2, _h);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _c1 = _c2;
        _c2 = _plusSign_2(
          _c1,
          _euclideanDistance_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
        );
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    let _d = _hyphenMinus_2(_h, _c1);
    let _v = _hyphenMinus_2(_at_2(_p, _i), _at_2(_p, _hyphenMinus_2(_i, 1)));
    /* Statements */
    return _plusSign_2(
      _at_2(_p, _hyphenMinus_2(_i, 1)),
      _asterisk_2(_normalize_1(_v), _d),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.vertexCoordinates;\n\t\tlet l = self.arcLength;\n\t\tlet h = l / 2;\n\t\tlet i = 1;\n\t\tlet c1 = 0;\n\t\tlet c2 = c1;\n\t\tlet _ = {\n\t\t\tc2 < h\n\t\t}.whileTrue {\n\t\t\tc1 := c2;\n\t\t\tc2 := c1 + p[i].euclideanDistance(p[i + 1]);\n\t\t\ti := i + 1\n\t\t};\n\t\tlet d = h - c1;\n\t\tlet v = p[i] - p[i - 1];\n\t\tp[i - 1] + (v.normalize * d)\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tLine(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_vertexCount_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _precision = _at_2(_options, "precision");
        let __SplVar2 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
        let _p1 = _at_2(__SplVar2, 1);
        let _p2 = _at_2(__SplVar2, 2);
        let __SplVar3 = _assertIsOfSize_2(_p1, 2);
        let _x1 = _at_2(__SplVar3, 1);
        let _y1 = _at_2(__SplVar3, 2);
        let __SplVar4 = _assertIsOfSize_2(_p2, 2);
        let _x2 = _at_2(__SplVar4, 1);
        let _y2 = _at_2(__SplVar4, 2);
        /* Statements */
        return _format_2('<line x1="%" y1="%" x2="%" y2="%" />', [
          _printStringToFixed_2(_x1, _precision),
          _printStringToFixed_2(_y1, _precision),
          _printStringToFixed_2(_x2, _precision),
          _printStringToFixed_2(_y2, _precision),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<polyline points="%" />', [
          _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
        ]);
      }, []),
    );
  }, ["self", "options"]),
  '{ :self :options |\n\t\t(self.vertexCount = 2).if {\n\t\t\tlet precision = options[\'precision\'];\n\t\t\tlet [p1, p2] = self.vertexCoordinates;\n\t\t\tlet [x1, y1] = p1;\n\t\t\tlet [x2, y2] = p2;\n\t\t\t\'<line x1="%" y1="%" x2="%" y2="%" />\'.format([\n\t\t\t\tx1.printStringToFixed(precision),\n\t\t\t\ty1.printStringToFixed(precision),\n\t\t\t\tx2.printStringToFixed(precision),\n\t\t\t\ty2.printStringToFixed(precision)\n\t\t\t])\n\t\t} {\n\t\t\t\'<polyline points="%" />\'.format([\n\t\t\t\tself.vertexCoordinates.asSvgPointList(options)\n\t\t\t])\n\t\t}\n\t}',
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
);

sl.addMethodToExistingType(
  "Line",
  "Line",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _size_1(_vertexCoordinates_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\t[1 .. self.vertexCoordinates.size]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "closedLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_plusSignPlusSign_2(_self, [_first_1(_self)]));
  }, ["self"]),
  "{ :self |\n\t\tLine(self ++ [self.first])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "Line",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Line_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newLine_0(), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.rank > 2).if {\n\t\t\tself.collect(Line:/1)\n\t\t} {\n\t\t\tnewLine().initializeSlots(self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SplVar5, 1);
    let _y1 = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SplVar6, 1);
    let _y2 = _at_2(__SplVar6, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(
      _lessThanSign_2(_x1, _x2),
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
        return -1;
      }, []),
    );
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(
      _lessThanSign_2(_y1, _y2),
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
        return -1;
      }, []),
    );
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(
          _equalsSignEqualsSign_2(_x1, _x2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_y1, _y2);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(
            _greaterThanSignEqualsSign_2(_e2, _dy),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dy);
              return _x1 = _plusSign_2(_x1, _sx);
            }, []),
          );
          _ifTrue_2(
            _lessThanSignEqualsSign_2(_e2, _dx),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dx);
              return _y1 = _plusSign_2(_y1, _sy);
            }, []),
          );
          return true;
        }, []),
      );
    }, []));
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet [x1, y1] = self[1];\n\t\tlet [x2, y2] = self[2];\n\t\tlet dx = (x2 - x1).abs;\n\t\tlet sx = (x1 < x2).if { 1 } { -1 };\n\t\tlet dy = (y2 - y1).abs.-;\n\t\tlet sy = (y1 < y2).if { 1 } { -1 };\n\t\tlet e = dx + dy;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add([x1, y1]);\n\t\t\t((x1 == x2) & { y1 == y2 }).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tlet e2 = 2 * e;\n\t\t\t\t(e2 >= dy).ifTrue {\n\t\t\t\t\te := e + dy;\n\t\t\t\t\tx1 := x1 + sx\n\t\t\t\t};\n\t\t\t\t(e2 <= dx).ifTrue {\n\t\t\t\t\te := e + dx;\n\t\t\t\t\ty1 := y1 + sy\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x1 = _at_2(__SplVar5, 1);
    let _y1 = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x2 = _at_2(__SplVar6, 1);
    let _y2 = _at_2(__SplVar6, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(
      _lessThanSign_2(_x1, _x2),
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
        return -1;
      }, []),
    );
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(
      _lessThanSign_2(_y1, _y2),
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
        return -1;
      }, []),
    );
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(
          _equalsSignEqualsSign_2(_x1, _x2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_y1, _y2);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(
            _greaterThanSignEqualsSign_2(_e2, _dy),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dy);
              return _x1 = _plusSign_2(_x1, _sx);
            }, []),
          );
          _ifTrue_2(
            _lessThanSignEqualsSign_2(_e2, _dx),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _e = _plusSign_2(_e, _dx);
              return _y1 = _plusSign_2(_y1, _sy);
            }, []),
          );
          return true;
        }, []),
      );
    }, []));
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet [x1, y1] = self[1];\n\t\tlet [x2, y2] = self[2];\n\t\tlet dx = (x2 - x1).abs;\n\t\tlet sx = (x1 < x2).if { 1 } { -1 };\n\t\tlet dy = (y2 - y1).abs.-;\n\t\tlet sy = (y1 < y2).if { 1 } { -1 };\n\t\tlet e = dx + dy;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add([x1, y1]);\n\t\t\t((x1 == x2) & { y1 == y2 }).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tlet e2 = 2 * e;\n\t\t\t\t(e2 >= dy).ifTrue {\n\t\t\t\t\te := e + dy;\n\t\t\t\t\tx1 := x1 + sx\n\t\t\t\t};\n\t\t\t\t(e2 <= dx).ifTrue {\n\t\t\t\t\te := e + dx;\n\t\t\t\t\ty1 := y1 + sy\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_end, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _pointLineDistance_2(
          [_at_2(_self, 1), _at_2(_self, _end)],
          _at_2(_self, _i),
        );
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_d, _dMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _i;
            return _dMax = _d;
          }, []),
        );
      }, ["i"]),
    );
    _if_3(
      _greaterThanSign_2(_dMax, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, 1, _index),
          _epsilon,
        );
        let _q = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, _index, _end),
          _epsilon,
        );
        /* Statements */
        _addAll_2(
          _answer,
          _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)),
        );
        return _addAll_2(_answer, _q);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _at_2(_self, 1));
        return _add_2(_answer, _at_2(_self, _end));
      }, []),
    );
    return _answer;
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet dMax = 0;\n\t\tlet index = 0;\n\t\tlet end = self.size;\n\t\tlet answer = [];\n\t\t2.toDo(end - 1) { :i |\n\t\t\tlet d = [self[1], self[end]].pointLineDistance(self[i]);\n\t\t\t(d > dMax).ifTrue {\n\t\t\t\tindex := i;\n\t\t\t\tdMax := d\n\t\t\t}\n\t\t};\n\t\t(dMax > epsilon).if {\n\t\t\tlet p = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(1, index), epsilon);\n\t\t\tlet q = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(index, end), epsilon);\n\t\t\tanswer.addAll(p.sliceFromTo(1, p.size - 1));\n\t\t\tanswer.addAll(q)\n\t\t} {\n\t\t\tanswer.add(self[1]);\n\t\t\tanswer.add(self[end])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(
      2,
      _hyphenMinus_2(_end, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _pointLineDistance_2(
          [_at_2(_self, 1), _at_2(_self, _end)],
          _at_2(_self, _i),
        );
        /* Statements */
        return _ifTrue_2(
          _greaterThanSign_2(_d, _dMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _i;
            return _dMax = _d;
          }, []),
        );
      }, ["i"]),
    );
    _if_3(
      _greaterThanSign_2(_dMax, _epsilon),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, 1, _index),
          _epsilon,
        );
        let _q = _ramerDouglasPeuckerAlgorithm_2(
          _sliceFromTo_3(_self, _index, _end),
          _epsilon,
        );
        /* Statements */
        _addAll_2(
          _answer,
          _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)),
        );
        return _addAll_2(_answer, _q);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _at_2(_self, 1));
        return _add_2(_answer, _at_2(_self, _end));
      }, []),
    );
    return _answer;
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet dMax = 0;\n\t\tlet index = 0;\n\t\tlet end = self.size;\n\t\tlet answer = [];\n\t\t2.toDo(end - 1) { :i |\n\t\t\tlet d = [self[1], self[end]].pointLineDistance(self[i]);\n\t\t\t(d > dMax).ifTrue {\n\t\t\t\tindex := i;\n\t\t\t\tdMax := d\n\t\t\t}\n\t\t};\n\t\t(dMax > epsilon).if {\n\t\t\tlet p = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(1, index), epsilon);\n\t\t\tlet q = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(index, end), epsilon);\n\t\t\tanswer.addAll(p.sliceFromTo(1, p.size - 1));\n\t\t\tanswer.addAll(q)\n\t\t} {\n\t\t\tanswer.add(self[1]);\n\t\t\tanswer.add(self[end])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Line",
  "xiaolinWuLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x0 = _at_2(__SplVar7, 1);
    let _y0 = _at_2(__SplVar7, 2);
    let __SplVar8 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x1 = _at_2(__SplVar8, 1);
    let _y1 = _at_2(__SplVar8, 2);
    let _isSteep = _greaterThanSign_2(
      _abs_1(_hyphenMinus_2(_y1, _y0)),
      _abs_1(_hyphenMinus_2(_x1, _x0)),
    );
    let _answer = [];
    /* Statements */
    _if_3(
      _isSteep,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _xiaolinWuLineAlgorithm_1([[_y0, _x0], [_y1, _x1]]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x0, _x1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _xiaolinWuLineAlgorithm_1([[_x1, _y1], [_x0, _y0]]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _dx = _hyphenMinus_2(_x1, _x0);
            let _dy = _hyphenMinus_2(_y1, _y0);
            let _gradient = _solidus_2(_dy, _dx);
            let _xEnd0 = _round_1(_x0);
            let _yEnd0 = _plusSign_2(
              _y0,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd0, _x0)),
            );
            let _xGap0 = _hyphenMinus_2(
              1,
              _fractionalPart_1(_plusSign_2(_x0, 0.5)),
            );
            let _xPixel0 = _xEnd0;
            let _yPixel0 = _integerPart_1(_yEnd0);
            let _interY = _plusSign_2(_yEnd0, _gradient);
            let _xEnd1 = _round_1(_x1);
            let _yEnd1 = _plusSign_2(
              _y1,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd1, _x1)),
            );
            let _xGap1 = _fractionalPart_1(_plusSign_2(_x1, 0.5));
            let _xPixel1 = _xEnd1;
            let _yPixel1 = _integerPart_1(_yEnd1);
            /* Statements */
            _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel0,
                  _xPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel0, 1),
                  _xPixel0,
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel0,
                  _yPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel0,
                  _plusSign_2(_yPixel0, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
            );
            _toDo_3(
              _plusSign_2(_xPixel0, 1),
              _hyphenMinus_2(_xPixel1, 1),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                _if_3(
                  _isSteep,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _integerPart_1(_interY),
                      _x,
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _x,
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _x,
                      _integerPart_1(_interY),
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _x,
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                );
                return _interY = _plusSign_2(_interY, _gradient);
              }, ["x"]),
            );
            return _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel1,
                  _xPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel1, 1),
                  _xPixel1,
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel1,
                  _yPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel1,
                  _plusSign_2(_yPixel1, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet [x0, y0] = self[1];\n\t\tlet [x1, y1] = self[2];\n\t\tlet isSteep = abs(y1 - y0) > abs(x1 - x0);\n\t\tlet answer = [];\n\t\tisSteep.if {\n\t\t\t[y0 x0; y1 x1].xiaolinWuLineAlgorithm\n\t\t} {\n\t\t\t(x0 > x1).if {\n\t\t\t\t[x1 y1; x0 y0].xiaolinWuLineAlgorithm\n\t\t\t} {\n\t\t\t\tlet dx = x1 - x0;\n\t\t\t\tlet dy = y1 - y0;\n\t\t\t\tlet gradient = dy / dx;\n\t\t\t\tlet xEnd0 = x0.round;\n\t\t\t\tlet yEnd0 = y0 + (gradient * (xEnd0 - x0));\n\t\t\t\tlet xGap0 = 1 - (x0 + 0.5).fractionalPart;\n\t\t\t\tlet xPixel0 = xEnd0;\n\t\t\t\tlet yPixel0 = yEnd0.integerPart;\n\t\t\t\tlet interY = yEnd0 + gradient;\n\t\t\t\tlet xEnd1 = x1.round;\n\t\t\t\tlet yEnd1 = y1 + (gradient * (xEnd1 - x1));\n\t\t\t\tlet xGap1 = (x1 + 0.5).fractionalPart;\n\t\t\t\tlet xPixel1 = xEnd1;\n\t\t\t\tlet yPixel1 = yEnd1.integerPart;\n\t\t\t\tisSteep.if {\n\t\t\t\t\tanswer.add([yPixel0, xPixel0, (1 - yEnd0.fractionalPart) * xGap0]);\n\t\t\t\t\tanswer.add([yPixel0 + 1, xPixel0, fractionalPart(yEnd0) * xGap0])\n\t\t\t\t} {\n\t\t\t\t\tanswer.add([xPixel0, yPixel0, (1 - fractionalPart(yEnd0)) * xGap0]);\n\t\t\t\t\tanswer.add([xPixel0, yPixel0 + 1, fractionalPart(yEnd0) * xGap0])\n\t\t\t\t};\n\t\t\t\t(xPixel0 + 1).toDo(xPixel1 - 1) { :x |\n\t\t\t\t\tisSteep.if {\n\t\t\t\t\t\tanswer.add([integerPart(interY), x, 1 - fractionalPart(interY)]);\n\t\t\t\t\t\tanswer.add([integerPart(interY) + 1, x, fractionalPart(interY)])\n\t\t\t\t\t} {\n\t\t\t\t\t\tanswer.add([x, integerPart(interY), 1 - fractionalPart(interY)]);\n\t\t\t\t\t\tanswer.add([x, integerPart(interY) + 1, fractionalPart(interY)])\n\t\t\t\t\t};\n\t\t\t\t\tinterY := interY + gradient\n\t\t\t\t};\n\t\t\t\tisSteep.if {\n\t\t\t\t\tanswer.add([yPixel1, xPixel1, (1 - fractionalPart(yEnd1)) * xGap1]);\n\t\t\t\t\tanswer.add([yPixel1 + 1, xPixel1, fractionalPart(yEnd1) * xGap1])\n\t\t\t\t} {\n\t\t\t\t\tanswer.add([xPixel1, yPixel1, (1 - fractionalPart(yEnd1)) * xGap1]);\n\t\t\t\t\tanswer.add([xPixel1, yPixel1 + 1, fractionalPart(yEnd1) * xGap1])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Slice",
  "Line",
  "xiaolinWuLineAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_at_2(_self, 1), 2);
    let _x0 = _at_2(__SplVar7, 1);
    let _y0 = _at_2(__SplVar7, 2);
    let __SplVar8 = _assertIsOfSize_2(_at_2(_self, 2), 2);
    let _x1 = _at_2(__SplVar8, 1);
    let _y1 = _at_2(__SplVar8, 2);
    let _isSteep = _greaterThanSign_2(
      _abs_1(_hyphenMinus_2(_y1, _y0)),
      _abs_1(_hyphenMinus_2(_x1, _x0)),
    );
    let _answer = [];
    /* Statements */
    _if_3(
      _isSteep,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _xiaolinWuLineAlgorithm_1([[_y0, _x0], [_y1, _x1]]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x0, _x1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _xiaolinWuLineAlgorithm_1([[_x1, _y1], [_x0, _y0]]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _dx = _hyphenMinus_2(_x1, _x0);
            let _dy = _hyphenMinus_2(_y1, _y0);
            let _gradient = _solidus_2(_dy, _dx);
            let _xEnd0 = _round_1(_x0);
            let _yEnd0 = _plusSign_2(
              _y0,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd0, _x0)),
            );
            let _xGap0 = _hyphenMinus_2(
              1,
              _fractionalPart_1(_plusSign_2(_x0, 0.5)),
            );
            let _xPixel0 = _xEnd0;
            let _yPixel0 = _integerPart_1(_yEnd0);
            let _interY = _plusSign_2(_yEnd0, _gradient);
            let _xEnd1 = _round_1(_x1);
            let _yEnd1 = _plusSign_2(
              _y1,
              _asterisk_2(_gradient, _hyphenMinus_2(_xEnd1, _x1)),
            );
            let _xGap1 = _fractionalPart_1(_plusSign_2(_x1, 0.5));
            let _xPixel1 = _xEnd1;
            let _yPixel1 = _integerPart_1(_yEnd1);
            /* Statements */
            _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel0,
                  _xPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel0, 1),
                  _xPixel0,
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel0,
                  _yPixel0,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd0)),
                    _xGap0,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel0,
                  _plusSign_2(_yPixel0, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd0), _xGap0),
                ]);
              }, []),
            );
            _toDo_3(
              _plusSign_2(_xPixel0, 1),
              _hyphenMinus_2(_xPixel1, 1),
              sl.annotateFunction(function (_x) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _x";
                  throw new Error(errorMessage);
                } /* Statements */
                _if_3(
                  _isSteep,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _integerPart_1(_interY),
                      _x,
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _x,
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(_answer, [
                      _x,
                      _integerPart_1(_interY),
                      _hyphenMinus_2(1, _fractionalPart_1(_interY)),
                    ]);
                    return _add_2(_answer, [
                      _x,
                      _plusSign_2(_integerPart_1(_interY), 1),
                      _fractionalPart_1(_interY),
                    ]);
                  }, []),
                );
                return _interY = _plusSign_2(_interY, _gradient);
              }, ["x"]),
            );
            return _if_3(
              _isSteep,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _yPixel1,
                  _xPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _plusSign_2(_yPixel1, 1),
                  _xPixel1,
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _add_2(_answer, [
                  _xPixel1,
                  _yPixel1,
                  _asterisk_2(
                    _hyphenMinus_2(1, _fractionalPart_1(_yEnd1)),
                    _xGap1,
                  ),
                ]);
                return _add_2(_answer, [
                  _xPixel1,
                  _plusSign_2(_yPixel1, 1),
                  _asterisk_2(_fractionalPart_1(_yEnd1), _xGap1),
                ]);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet [x0, y0] = self[1];\n\t\tlet [x1, y1] = self[2];\n\t\tlet isSteep = abs(y1 - y0) > abs(x1 - x0);\n\t\tlet answer = [];\n\t\tisSteep.if {\n\t\t\t[y0 x0; y1 x1].xiaolinWuLineAlgorithm\n\t\t} {\n\t\t\t(x0 > x1).if {\n\t\t\t\t[x1 y1; x0 y0].xiaolinWuLineAlgorithm\n\t\t\t} {\n\t\t\t\tlet dx = x1 - x0;\n\t\t\t\tlet dy = y1 - y0;\n\t\t\t\tlet gradient = dy / dx;\n\t\t\t\tlet xEnd0 = x0.round;\n\t\t\t\tlet yEnd0 = y0 + (gradient * (xEnd0 - x0));\n\t\t\t\tlet xGap0 = 1 - (x0 + 0.5).fractionalPart;\n\t\t\t\tlet xPixel0 = xEnd0;\n\t\t\t\tlet yPixel0 = yEnd0.integerPart;\n\t\t\t\tlet interY = yEnd0 + gradient;\n\t\t\t\tlet xEnd1 = x1.round;\n\t\t\t\tlet yEnd1 = y1 + (gradient * (xEnd1 - x1));\n\t\t\t\tlet xGap1 = (x1 + 0.5).fractionalPart;\n\t\t\t\tlet xPixel1 = xEnd1;\n\t\t\t\tlet yPixel1 = yEnd1.integerPart;\n\t\t\t\tisSteep.if {\n\t\t\t\t\tanswer.add([yPixel0, xPixel0, (1 - yEnd0.fractionalPart) * xGap0]);\n\t\t\t\t\tanswer.add([yPixel0 + 1, xPixel0, fractionalPart(yEnd0) * xGap0])\n\t\t\t\t} {\n\t\t\t\t\tanswer.add([xPixel0, yPixel0, (1 - fractionalPart(yEnd0)) * xGap0]);\n\t\t\t\t\tanswer.add([xPixel0, yPixel0 + 1, fractionalPart(yEnd0) * xGap0])\n\t\t\t\t};\n\t\t\t\t(xPixel0 + 1).toDo(xPixel1 - 1) { :x |\n\t\t\t\t\tisSteep.if {\n\t\t\t\t\t\tanswer.add([integerPart(interY), x, 1 - fractionalPart(interY)]);\n\t\t\t\t\t\tanswer.add([integerPart(interY) + 1, x, fractionalPart(interY)])\n\t\t\t\t\t} {\n\t\t\t\t\t\tanswer.add([x, integerPart(interY), 1 - fractionalPart(interY)]);\n\t\t\t\t\t\tanswer.add([x, integerPart(interY) + 1, fractionalPart(interY)])\n\t\t\t\t\t};\n\t\t\t\t\tinterY := interY + gradient\n\t\t\t\t};\n\t\t\t\tisSteep.if {\n\t\t\t\t\tanswer.add([yPixel1, xPixel1, (1 - fractionalPart(yEnd1)) * xGap1]);\n\t\t\t\t\tanswer.add([yPixel1 + 1, xPixel1, fractionalPart(yEnd1) * xGap1])\n\t\t\t\t} {\n\t\t\t\t\tanswer.add([xPixel1, yPixel1, (1 - fractionalPart(yEnd1)) * xGap1]);\n\t\t\t\t\tanswer.add([xPixel1, yPixel1 + 1, fractionalPart(yEnd1) * xGap1])\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Line",
  "spirangle",
  ["n", "m", "centre", "radii", "initialAngle"],
  sl.annotateFunction(function (_n, _m, _centre, _radii, _initialAngle) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _n, _m, _centre, _radii, _initialAngle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar9 = _assertIsOfSize_2(_radii, 2);
    let _radiusIncrement = _at_2(__SplVar9, 1);
    let _initialRadial = _at_2(__SplVar9, 2);
    let _thetaIncrement = _hyphenMinus_2(
      _pi_1(1),
      _solidus_2(_pi_1(_hyphenMinus_2(_n, 2)), _n),
    );
    let _r = _asterisk_2(_initialRadial, _radiusIncrement);
    let _theta = _initialAngle;
    let _v = _plusSign_2(_centre, _fromPolarCoordinates_1([_r, _theta]));
    let _vertexCoordinates = [_v];
    /* Statements */
    _timesRepeat_2(
      _asterisk_2(_m, _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _r = _plusSign_2(_r, _radiusIncrement);
        _theta = _percentSign_2(_plusSign_2(_theta, _thetaIncrement), _pi_1(2));
        _v = _plusSign_2(_v, _fromPolarCoordinates_1([_r, _theta]));
        return _add_2(_vertexCoordinates, _v);
      }, []),
    );
    return _Line_1(_vertexCoordinates);
  }, ["n", "m", "centre", "radii", "initialAngle"]),
  "{ :n :m :centre :radii :initialAngle |\n\t\tlet [radiusIncrement, initialRadial] = radii;\n\t\tlet thetaIncrement = 1.pi - ((n - 2).pi / n);\n\t\tlet r = initialRadial * radiusIncrement;\n\t\tlet theta = initialAngle;\n\t\tlet v = centre + [r, theta].fromPolarCoordinates;\n\t\tlet vertexCoordinates = [v];\n\t\t(m * n).timesRepeat {\n\t\t\tr := r + radiusIncrement;\n\t\t\ttheta := (theta + thetaIncrement) % 2.pi;\n\t\t\tv := v + [r, theta].fromPolarCoordinates;\n\t\t\tvertexCoordinates.add(v)\n\t\t};\n\t\tLine(vertexCoordinates)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Line",
  "cohenSutherlandAlgorithm",
  ["x0", "y0", "x1", "y1", "xMin", "yMin", "xMax", "yMax"],
  sl.annotateFunction(
    function (_x0, _y0, _x1, _y1, _xMin, _yMin, _xMax, _yMax) {
      /* ArityCheck */
      if (arguments.length !== 8) {
        const errorMessage =
          "Arity: expected 8, _x0, _y0, _x1, _y1, _xMin, _yMin, _xMax, _yMax";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _inside = 0;
      let _left = 1;
      let _right = 2;
      let _bottom = 4;
      let _top = 8;
      let _computeOutCode_2 = sl.annotateFunction(function (_x, _y) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _x, _y";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _code = _inside;
        /* Statements */
        _if_3(
          _lessThanSign_2(_x, _xMin),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _code = _bitOr_2(_code, _left);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_x, _xMax),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _code = _bitOr_2(_code, _right);
              }, []),
            );
          }, []),
        );
        _if_3(
          _lessThanSign_2(_y, _yMin),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _code = _bitOr_2(_code, _bottom);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _greaterThanSign_2(_y, _yMax),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _code = _bitOr_2(_code, _top);
              }, []),
            );
          }, []),
        );
        return _code;
      }, ["x", "y"]);
      let _outCode0 = _computeOutCode_2(_x0, _y0);
      let _outCode1 = _computeOutCode_2(_x1, _y1);
      let _accept = false;
      let _completed = false;
      /* Statements */
      _whileFalse_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _completed;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _not_1(_isNonZero_1(_bitOr_2(_outCode0, _outCode1))),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _accept = true;
              return _completed = true;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _isNonZero_1(_bitAnd_2(_outCode0, _outCode1)),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _completed = true;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _x = null;
                  let _y = null;
                  let _outCodeOut = _if_3(
                    _greaterThanSign_2(_outCode1, _outCode0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _outCode1;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _outCode0;
                    }, []),
                  );
                  /* Statements */
                  _if_3(
                    _isNonZero_1(_bitAnd_2(_outCodeOut, _top)),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x = _plusSign_2(
                        _x0,
                        _solidus_2(
                          _asterisk_2(
                            _hyphenMinus_2(_x1, _x0),
                            _hyphenMinus_2(_yMax, _y0),
                          ),
                          _hyphenMinus_2(_y1, _y0),
                        ),
                      );
                      return _y = _yMax;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _if_3(
                        _isNonZero_1(_bitAnd_2(_outCodeOut, _bottom)),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          _x = _plusSign_2(
                            _x0,
                            _solidus_2(
                              _asterisk_2(
                                _hyphenMinus_2(_x1, _x0),
                                _hyphenMinus_2(_yMin, _y0),
                              ),
                              _hyphenMinus_2(_y1, _y0),
                            ),
                          );
                          return _y = _yMin;
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _if_3(
                            _isNonZero_1(_bitAnd_2(_outCodeOut, _right)),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              _y = _plusSign_2(
                                _y0,
                                _solidus_2(
                                  _asterisk_2(
                                    _hyphenMinus_2(_y1, _y0),
                                    _hyphenMinus_2(_xMax, _x0),
                                  ),
                                  _hyphenMinus_2(_x1, _x0),
                                ),
                              );
                              return _x = _xMax;
                            }, []),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              return _ifTrue_2(
                                _isNonZero_1(_bitAnd_2(_outCodeOut, _left)),
                                sl.annotateFunction(function () {
                                  /* ArityCheck */
                                  if (arguments.length !== 0) {
                                    const errorMessage = "Arity: expected 0, ";
                                    throw new Error(errorMessage);
                                  } /* Statements */
                                  _y = _plusSign_2(
                                    _y0,
                                    _solidus_2(
                                      _asterisk_2(
                                        _hyphenMinus_2(_y1, _y0),
                                        _hyphenMinus_2(_xMin, _x0),
                                      ),
                                      _hyphenMinus_2(_x1, _x0),
                                    ),
                                  );
                                  return _x = _xMin;
                                }, []),
                              );
                            }, []),
                          );
                        }, []),
                      );
                    }, []),
                  );
                  return _if_3(
                    _equalsSign_2(_outCodeOut, _outCode0),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x0 = _x;
                      _y0 = _y;
                      return _outCode0 = _computeOutCode_2(_x0, _y0);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _x1 = _x;
                      _y1 = _y;
                      return _outCode1 = _computeOutCode_2(_x1, _y1);
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
      return [_accept, _x0, _y0, _x1, _y1];
    },
    ["x0", "y0", "x1", "y1", "xMin", "yMin", "xMax", "yMax"],
  ),
  "{ :x0 :y0 :x1 :y1 :xMin :yMin :xMax :yMax |\n\t\tlet inside = 2r0000;\n\t\tlet left = 2r0001;\n\t\tlet right = 2r0010;\n\t\tlet bottom = 2r0100;\n\t\tlet top = 2r1000;\n\t\tlet computeOutCode = { :x :y |\n\t\t\tlet code = inside;\n\t\t\t(x < xMin).if {\n\t\t\t\tcode := code.bitOr(left)\n\t\t\t} {\n\t\t\t\t(x > xMax).ifTrue {\n\t\t\t\t\tcode := code.bitOr(right)\n\t\t\t\t}\n\t\t\t};\n\t\t\t(y < yMin).if {\n\t\t\t\tcode := code.bitOr(bottom)\n\t\t\t} {\n\t\t\t\t(y > yMax).ifTrue {\n\t\t\t\t\tcode := code.bitOr(top)\n\t\t\t\t}\n\t\t\t};\n\t\t\tcode\n\t\t};\n\t\tlet outCode0 = computeOutCode(x0, y0);\n\t\tlet outCode1 = computeOutCode(x1, y1);\n\t\tlet accept = false;\n\t\tlet completed = false;\n\t\t{ completed }.whileFalse {\n\t\t\toutCode0.bitOr(outCode1).isNonZero.not.if {\n\t\t\t\taccept := true;\n\t\t\t\tcompleted := true\n\t\t\t} {\n\t\t\t\toutCode0.bitAnd(outCode1).isNonZero.if {\n\t\t\t\t\tcompleted := true\n\t\t\t\t} {\n\t\t\t\t\tlet x = nil;\n\t\t\t\t\tlet y = nil;\n\t\t\t\t\tlet outCodeOut = (outCode1 > outCode0).if { outCode1 } { outCode0 };\n\t\t\t\t\toutCodeOut.bitAnd(top).isNonZero.if {\n\t\t\t\t\t\tx := x0 + ((x1 - x0) * (yMax - y0) / (y1 - y0));\n\t\t\t\t\t\ty := yMax\n\t\t\t\t\t} {\n\t\t\t\t\t\toutCodeOut.bitAnd(bottom).isNonZero.if {\n\t\t\t\t\t\t\tx := x0 + ((x1 - x0) * (yMin - y0) / (y1 - y0));\n\t\t\t\t\t\t\ty := yMin\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\toutCodeOut.bitAnd(right).isNonZero.if {\n\t\t\t\t\t\t\t\ty := y0 + ((y1 - y0) * (xMax - x0) / (x1 - x0));\n\t\t\t\t\t\t\t\tx := xMax\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\toutCodeOut.bitAnd(left).isNonZero.ifTrue {\n\t\t\t\t\t\t\t\t\ty := y0 + ((y1 - y0) * (xMin - x0) / (x1 - x0));\n\t\t\t\t\t\t\t\t\tx := xMin\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\t(outCodeOut = outCode0).if {\n\t\t\t\t\t\tx0 := x;\n\t\t\t\t\t\ty0 := y;\n\t\t\t\t\t\toutCode0 := computeOutCode(x0, y0)\n\t\t\t\t\t} {\n\t\t\t\t\t\tx1 := x;\n\t\t\t\t\t\ty1 := y;\n\t\t\t\t\t\toutCode1 := computeOutCode(x1, y1)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\t[accept, x0, y0, x1, y1]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Line",
  "Line",
  "cohenSutherlandAlgorithm",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
    let _a = _at_2(__SplVar10, 1);
    let _b = _at_2(__SplVar10, 2);
    let _c = _lowerLeft_1(_aRectangle);
    let _d = _upperRight_1(_aRectangle);
    let __SplVar11 = _assertIsOfSize_2(
      _cohenSutherlandAlgorithm_8(
        _at_2(_a, 1),
        _at_2(_a, 2),
        _at_2(_b, 1),
        _at_2(_b, 2),
        _at_2(_c, 1),
        _at_2(_c, 2),
        _at_2(_d, 1),
        _at_2(_d, 2),
      ),
      5,
    );
    let _accept = _at_2(__SplVar11, 1);
    let _x1 = _at_2(__SplVar11, 2);
    let _y1 = _at_2(__SplVar11, 3);
    let _x2 = _at_2(__SplVar11, 4);
    let _y2 = _at_2(__SplVar11, 5);
    /* Statements */
    return _if_3(
      _accept,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1([[_x1, _y1], [_x2, _y2]]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle |\n\t\tlet [a, b] = self.vertexCoordinates;\n\t\tlet c = aRectangle.lowerLeft;\n\t\tlet d = aRectangle.upperRight;\n\t\tlet [accept, x1, y1, x2, y2] = cohenSutherlandAlgorithm(a[1], a[2], b[1], b[2], c[1], c[2], d[1], d[2]);\n\t\taccept.if {\n\t\t\tLine([x1 y1; x2 y2])\n\t\t} {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinKnotCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinKnotCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinKnotCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinLinkCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinLinkCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinLinkCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinMinimalKnotCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalKnotCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinMinimalKnotCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Line",
  "schareinMinimalLinkCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalLinkCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinMinimalLinkCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinKnotCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinKnotCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinLinkCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinLinkCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinMinimalKnotCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinMinimalKnotCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "SchareinMinimalLinkCatalogue"],
      ["category", "Geometry/Knot"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/scharein/SchareinMinimalLinkCatalogue.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
