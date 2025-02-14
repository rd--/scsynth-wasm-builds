sl.addType(
  false,
  "Line",
  "Line",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitToType(
  "Object",
  "Line",
);

sl.addMethod(
  "Line",
  "Line",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _adjacentPairsDo_2(_vertexCoordinates_1(_self), function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _plusSign_2(_answer, _euclideanDistance_2(_u, _v));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.vertexCoordinates.adjacentPairsDo { :u :v |\n\t\t\tanswer := answer + u.euclideanDistance(v)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.vertexCoordinates[index]\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_collect_2(_vertexCoordinates_1(_self), _aBlock_1));
  },
  "{ :self :aBlock:/1 |\n\t\tLine(\n\t\t\tself.vertexCoordinates.collect(aBlock:/1)\n\t\t)\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
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
  "Line",
  "Line",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_vertexCount_1(_self), 1);
  },
  "{ :self |\n\t\tself.vertexCount - 1\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _upOrDownTo_2(1, _hyphenMinus_2(_vertexCount_1(_self), 1)),
      function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_i, _plusSign_2(_i, 1)];
      },
    );
  },
  "{ :self |\n\t\t(1 .. self.vertexCount - 1).collect { :i |\n\t\t\t[i, i + 1]\n\t\t}\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  },
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_vertexCount_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _precision = _at_2(_options, "precision");
      let __genSym57 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2),
        _p1 = _at_2(__genSym57, 1),
        _p2 = _at_2(__genSym57, 2);
      let __genSym58 = _assertIsOfSize_2(_p1, 2),
        _x1 = _at_2(__genSym58, 1),
        _y1 = _at_2(__genSym58, 2);
      let __genSym59 = _assertIsOfSize_2(_p2, 2),
        _x2 = _at_2(__genSym59, 1),
        _y2 = _at_2(__genSym59, 2);
      /* Statements */
      return _format_2('<line x1="%" y1="%" x2="%" y2="%" />', [
        _printStringToFixed_2(_x1, _precision),
        _printStringToFixed_2(_y1, _precision),
        _printStringToFixed_2(_x2, _precision),
        _printStringToFixed_2(_y2, _precision),
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _format_2('<polyline points="%" />', [
        _asSvgPointList_2(_vertexCoordinates_1(_self), _options),
      ]);
    });
  },
  '{ :self :options |\n\t\t(self.vertexCount = 2).if {\n\t\t\tlet precision = options::precision;\n\t\t\tlet [p1, p2] = self.vertexCoordinates;\n\t\t\tlet [x1, y1] = p1;\n\t\t\tlet [x2, y2] = p2;\n\t\t\t\'<line x1="%" y1="%" x2="%" y2="%" />\'.format([\n\t\t\t\tx1.printStringToFixed(precision),\n\t\t\t\ty1.printStringToFixed(precision),\n\t\t\t\tx2.printStringToFixed(precision),\n\t\t\t\ty2.printStringToFixed(precision)\n\t\t\t])\n\t\t} {\n\t\t\t\'<polyline points="%" />\'.format([\n\t\t\t\tself.vertexCoordinates.asSvgPointList(options)\n\t\t\t])\n\t\t}\n\t}',
);

sl.addMethod(
  "Line",
  "Line",
  "lineIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_vertexList_1(_self)];
  },
  "{ :self |\n\t\t[self.vertexList]\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _vertexCoordinates_1(_self);
    let _l = _arcLength_1(_self);
    let _h = _solidus_2(_l, 2);
    let _i = 1;
    let _c1 = 0;
    let _c2 = _c1;
    let __genSym60 = _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_c2, _h);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _c1 = _c2;
      _c2 = _plusSign_2(
        _c1,
        _euclideanDistance_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
      );
      return _i = _plusSign_2(_i, 1);
    });
    let _d = _hyphenMinus_2(_h, _c1);
    let _v = _hyphenMinus_2(_at_2(_p, _i), _at_2(_p, _hyphenMinus_2(_i, 1)));
    /* Statements */
    return _plusSign_2(
      _at_2(_p, _hyphenMinus_2(_i, 1)),
      _asterisk_2(_normalize_1(_v), _d),
    );
  },
  "{ :self |\n\t\tlet p = self.vertexCoordinates;\n\t\tlet l = self.arcLength;\n\t\tlet h = l / 2;\n\t\tlet i = 1;\n\t\tlet c1 = 0;\n\t\tlet c2 = c1;\n\t\tlet _ = {\n\t\t\tc2 < h\n\t\t}.whileTrue {\n\t\t\tc1 := c2;\n\t\t\tc2 := c1 + p[i].euclideanDistance(p[i + 1]);\n\t\t\ti := i + 1\n\t\t};\n\t\tlet d = h - c1;\n\t\tlet v = p[i] - p[i - 1];\n\t\tp[i - 1] + (v.normalize * d)\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  },
  "{ :self :projection |\n\t\tLine(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
);

sl.addMethod(
  "Line",
  "Line",
  "vertexList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _size_1(_vertexCoordinates_1(_self))));
  },
  "{ :self |\n\t\t[1 .. self.vertexCoordinates.size]\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "closedLine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Line_1(_plusSignPlusSign_2(_self, [_first_1(_self)]));
  },
  "{ :self |\n\t\tLine(self ++ [self.first])\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "Line",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
      return _collect_2(_self, _Line_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newLine_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.rank > 2).if {\n\t\t\tself.collect(Line:/1)\n\t\t} {\n\t\t\tnewLine().initializeSlots(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym61 = _assertIsOfSize_2(_at_2(_self, 1), 2),
      _x1 = _at_2(__genSym61, 1),
      _y1 = _at_2(__genSym61, 2);
    let __genSym62 = _assertIsOfSize_2(_at_2(_self, 2), 2),
      _x2 = _at_2(__genSym62, 1),
      _y2 = _at_2(__genSym62, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(_lessThanSign_2(_x1, _x2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    });
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(_lessThanSign_2(_y1, _y2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    });
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(_equalsSignEqualsSign_2(_x1, _x2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSignEqualsSign_2(_y1, _y2);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(_greaterThanSignEqualsSign_2(_e2, _dy), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dy);
            return _x1 = _plusSign_2(_x1, _sx);
          });
          _ifTrue_2(_lessThanSignEqualsSign_2(_e2, _dx), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dx);
            return _y1 = _plusSign_2(_y1, _sy);
          });
          return true;
        },
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet [x1, y1] = self[1];\n\t\tlet [x2, y2] = self[2];\n\t\tlet dx = (x2 - x1).abs;\n\t\tlet sx = (x1 < x2).if { 1 } { -1 };\n\t\tlet dy = (y2 - y1).abs.-;\n\t\tlet sy = (y1 < y2).if { 1 } { -1 };\n\t\tlet e = dx + dy;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add([x1, y1]);\n\t\t\t((x1 == x2) & { y1 == y2 }).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tlet e2 = 2 * e;\n\t\t\t\t(e2 >= dy).ifTrue {\n\t\t\t\t\te := e + dy;\n\t\t\t\t\tx1 := x1 + sx\n\t\t\t\t};\n\t\t\t\t(e2 <= dx).ifTrue {\n\t\t\t\t\te := e + dx;\n\t\t\t\t\ty1 := y1 + sy\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Slice",
  "Line",
  "bresenhamLineAlgorithm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym61 = _assertIsOfSize_2(_at_2(_self, 1), 2),
      _x1 = _at_2(__genSym61, 1),
      _y1 = _at_2(__genSym61, 2);
    let __genSym62 = _assertIsOfSize_2(_at_2(_self, 2), 2),
      _x2 = _at_2(__genSym62, 1),
      _y2 = _at_2(__genSym62, 2);
    let _dx = _abs_1(_hyphenMinus_2(_x2, _x1));
    let _sx = _if_3(_lessThanSign_2(_x1, _x2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    });
    let _dy = _hyphenMinus_1(_abs_1(_hyphenMinus_2(_y2, _y1)));
    let _sy = _if_3(_lessThanSign_2(_y1, _y2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return -1;
    });
    let _e = _plusSign_2(_dx, _dy);
    let _answer = [];
    /* Statements */
    _whileTrue_1(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, [_x1, _y1]);
      return _if_3(
        _ampersand_2(_equalsSignEqualsSign_2(_x1, _x2), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSignEqualsSign_2(_y1, _y2);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return false;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _e2 = _asterisk_2(2, _e);
          /* Statements */
          _ifTrue_2(_greaterThanSignEqualsSign_2(_e2, _dy), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dy);
            return _x1 = _plusSign_2(_x1, _sx);
          });
          _ifTrue_2(_lessThanSignEqualsSign_2(_e2, _dx), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            _e = _plusSign_2(_e, _dx);
            return _y1 = _plusSign_2(_y1, _sy);
          });
          return true;
        },
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet [x1, y1] = self[1];\n\t\tlet [x2, y2] = self[2];\n\t\tlet dx = (x2 - x1).abs;\n\t\tlet sx = (x1 < x2).if { 1 } { -1 };\n\t\tlet dy = (y2 - y1).abs.-;\n\t\tlet sy = (y1 < y2).if { 1 } { -1 };\n\t\tlet e = dx + dy;\n\t\tlet answer = [];\n\t\t{\n\t\t\tanswer.add([x1, y1]);\n\t\t\t((x1 == x2) & { y1 == y2 }).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tlet e2 = 2 * e;\n\t\t\t\t(e2 >= dy).ifTrue {\n\t\t\t\t\te := e + dy;\n\t\t\t\t\tx1 := x1 + sx\n\t\t\t\t};\n\t\t\t\t(e2 <= dx).ifTrue {\n\t\t\t\t\te := e + dx;\n\t\t\t\t\ty1 := y1 + sy\n\t\t\t\t};\n\t\t\t\ttrue\n\t\t\t}\n\t\t}.whileTrue;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(2, _hyphenMinus_2(_end, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _pointLineDistance_2(
        [_at_2(_self, 1), _at_2(_self, _end)],
        _at_2(_self, _i),
      );
      /* Statements */
      return _ifTrue_2(_greaterThanSign_2(_d, _dMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _index = _i;
        return _dMax = _d;
      });
    });
    _if_3(_greaterThanSign_2(_dMax, _epsilon), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
      _addAll_2(_answer, _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)));
      return _addAll_2(_answer, _q);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _at_2(_self, 1));
      return _add_2(_answer, _at_2(_self, _end));
    });
    return _answer;
  },
  "{ :self :epsilon |\n\t\tlet dMax = 0;\n\t\tlet index = 0;\n\t\tlet end = self.size;\n\t\tlet answer = [];\n\t\t/* ['ramerDouglasPeuckerAlgorithm', self, epsilon].postLine; */\n\t\t2.toDo(end - 1) { :i |\n\t\t\tlet d = [self[1], self[end]].pointLineDistance(self[i]);\n\t\t\t(d > dMax).ifTrue {\n\t\t\t\tindex := i;\n\t\t\t\tdMax := d\n\t\t\t}\n\t\t};\n\t\t/* ['postInit', dMax, index, end].postLine; */\n\t\t(dMax > epsilon).if {\n\t\t\tlet p = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(1, index), epsilon);\n\t\t\tlet q = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(index, end), epsilon);\n\t\t\t/* ['subdivide', dMax, p, q].postLine; */\n\t\t\tanswer.addAll(p.sliceFromTo(1, p.size - 1));\n\t\t\tanswer.addAll(q)\n\t\t} {\n\t\t\tanswer.add(self[1]);\n\t\t\tanswer.add(self[end])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Slice",
  "Line",
  "ramerDouglasPeuckerAlgorithm",
  ["self", "epsilon"],
  function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dMax = 0;
    let _index = 0;
    let _end = _size_1(_self);
    let _answer = [];
    /* Statements */
    _toDo_3(2, _hyphenMinus_2(_end, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _d = _pointLineDistance_2(
        [_at_2(_self, 1), _at_2(_self, _end)],
        _at_2(_self, _i),
      );
      /* Statements */
      return _ifTrue_2(_greaterThanSign_2(_d, _dMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _index = _i;
        return _dMax = _d;
      });
    });
    _if_3(_greaterThanSign_2(_dMax, _epsilon), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
      _addAll_2(_answer, _sliceFromTo_3(_p, 1, _hyphenMinus_2(_size_1(_p), 1)));
      return _addAll_2(_answer, _q);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(_answer, _at_2(_self, 1));
      return _add_2(_answer, _at_2(_self, _end));
    });
    return _answer;
  },
  "{ :self :epsilon |\n\t\tlet dMax = 0;\n\t\tlet index = 0;\n\t\tlet end = self.size;\n\t\tlet answer = [];\n\t\t/* ['ramerDouglasPeuckerAlgorithm', self, epsilon].postLine; */\n\t\t2.toDo(end - 1) { :i |\n\t\t\tlet d = [self[1], self[end]].pointLineDistance(self[i]);\n\t\t\t(d > dMax).ifTrue {\n\t\t\t\tindex := i;\n\t\t\t\tdMax := d\n\t\t\t}\n\t\t};\n\t\t/* ['postInit', dMax, index, end].postLine; */\n\t\t(dMax > epsilon).if {\n\t\t\tlet p = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(1, index), epsilon);\n\t\t\tlet q = ramerDouglasPeuckerAlgorithm(self.sliceFromTo(index, end), epsilon);\n\t\t\t/* ['subdivide', dMax, p, q].postLine; */\n\t\t\tanswer.addAll(p.sliceFromTo(1, p.size - 1));\n\t\t\tanswer.addAll(q)\n\t\t} {\n\t\t\tanswer.add(self[1]);\n\t\t\tanswer.add(self[end])\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Line",
  "hilbertCurve",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("A", "+BF-AFA-FB+"),
                _hyphenMinusGreaterThanSign_2("B", "-AF+BFB+FA-"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "A",
              _self,
            ),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          },
        ),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_each, "F"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _answer,
            _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _angle = _plusSign_2(
            _angle,
            _if_3(_equalsSign_2(_each, "+"), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(0.5);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(-0.5);
            }),
          );
        });
      },
    );
    return _answer;
  },
  "{ :self |\n\t\tlet angle = 0;\n\t\tlet answer = [[0 0]];\n\t\t[\n\t\t\t'A' -> '+BF-AFA-FB+',\n\t\t\t'B' -> '-AF+BFB+FA-',\n\t\t\t'F' -> 'F',\n\t\t\t'+' -> '+',\n\t\t\t'-' -> '-'\n\t\t]\n\t\t.asMap\n\t\t.substitutionSystem('A', self)\n\t\t.last\n\t\t.select { :each | '+-F'.includes(each) }\n\t\t.contents\n\t\t.do { :each |\n\t\t\t(each = 'F').if {\n\t\t\t\tanswer.add(answer.last + angle.angleVector)\n\t\t\t} {\n\t\t\t\tangle := angle + (each = '+').if { 0.5.pi } { -0.5.pi }\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Line",
  "kochCurve",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("F", "F+F--F+F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "F",
              _self,
            ),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          },
        ),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_each, "F"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _answer,
            _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _angle = _plusSign_2(
            _angle,
            _if_3(_equalsSign_2(_each, "+"), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(_Fraction_2(
                1n,
                3n,
              ));
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(_Fraction_2(
                -1n,
                3n,
              ));
            }),
          );
        });
      },
    );
    return _answer;
  },
  "{ :self |\n\t\tlet angle = 0;\n\t\tlet answer = [[0 0]];\n\t\t[\n\t\t\t'F' -> 'F+F--F+F',\n\t\t\t'+' -> '+',\n\t\t\t'-' -> '-'\n\t\t]\n\t\t.asMap\n\t\t.substitutionSystem('F', self)\n\t\t.last\n\t\t.select { :each | '+-F'.includes(each) }\n\t\t.contents\n\t\t.do { :each |\n\t\t\t(each = 'F').if {\n\t\t\t\tanswer.add(answer.last + angle.angleVector)\n\t\t\t} {\n\t\t\t\tangle := angle + (each = '+').if { 1/3.pi } { -1/3.pi }\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Line",
  "peanoCurve",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("X", "XFYFX+F+YFXFY-F-XFYFX"),
                _hyphenMinusGreaterThanSign_2("Y", "YFXFY-F-XFYFX+F+YFXFY"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "X",
              _self,
            ),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-F", _each);
          },
        ),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_each, "F"), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _answer,
            _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _angle = _plusSign_2(
            _angle,
            _if_3(_equalsSign_2(_each, "+"), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(0.5);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(-0.5);
            }),
          );
        });
      },
    );
    return _answer;
  },
  "{ :self |\n\t\tlet angle = 0;\n\t\tlet answer = [[0 0]];\n\t\t[\n\t\t\t'X' -> 'XFYFX+F+YFXFY-F-XFYFX',\n\t\t\t'Y' -> 'YFXFY-F-XFYFX+F+YFXFY',\n\t\t\t'F' -> 'F',\n\t\t\t'+' -> '+',\n\t\t\t'-' -> '-'\n\t\t]\n\t\t.asMap\n\t\t.substitutionSystem('X', self)\n\t\t.last\n\t\t.select { :each | '+-F'.includes(each) }\n\t\t.contents\n\t\t.do { :each |\n\t\t\t(each = 'F').if {\n\t\t\t\tanswer.add(answer.last + angle.angleVector)\n\t\t\t} {\n\t\t\t\tangle := angle + (each = '+').if { 0.5.pi } { -0.5.pi }\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Line",
  "sierpinskiCurve",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _angle = 0;
    let _answer = [[0, 0]];
    /* Statements */
    _do_2(
      _contents_1(
        _select_2(
          _last_1(
            _substitutionSystem_3(
              _asMap_1([
                _hyphenMinusGreaterThanSign_2("X", "XF+G+XF--F--XF+G+X"),
                _hyphenMinusGreaterThanSign_2("F", "F"),
                _hyphenMinusGreaterThanSign_2("G", "G"),
                _hyphenMinusGreaterThanSign_2("+", "+"),
                _hyphenMinusGreaterThanSign_2("-", "-"),
              ]),
              "F--XF--F--XF",
              _self,
            ),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2("+-FG", _each);
          },
        ),
      ),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_includes_2("FG", _each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _answer,
            _plusSign_2(_last_1(_answer), _angleVector_1(_angle)),
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _angle = _plusSign_2(
            _angle,
            _if_3(_equalsSign_2(_each, "+"), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(0.25);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _pi_1(-0.25);
            }),
          );
        });
      },
    );
    return _answer;
  },
  "{ :self |\n\t\tlet angle = 0;\n\t\tlet answer = [[0 0]];\n\t\t[\n\t\t\t'X' -> 'XF+G+XF--F--XF+G+X',\n\t\t\t'F' -> 'F',\n\t\t\t'G' -> 'G',\n\t\t\t'+' -> '+',\n\t\t\t'-' -> '-'\n\t\t]\n\t\t.asMap\n\t\t.substitutionSystem('F--XF--F--XF', self)\n\t\t.last\n\t\t.select { :each | '+-FG'.includes(each) }\n\t\t.contents\n\t\t.do { :each |\n\t\t\t('FG'.includes(each)).if {\n\t\t\t\tanswer.add(answer.last + angle.angleVector)\n\t\t\t} {\n\t\t\t\tangle := angle + (each = '+').if { 0.25.pi } { -0.25.pi }\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "System",
  "Line",
  "schareinKnotCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinKnotCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinKnotCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "Line",
  "schareinLinkCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinLinkCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinLinkCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "Line",
  "schareinMinimalKnotCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalKnotCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinMinimalKnotCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "Line",
  "schareinMinimalLinkCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "SchareinMinimalLinkCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'SchareinMinimalLinkCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
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
    Object.fromEntries([
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
    Object.fromEntries([
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
    Object.fromEntries([
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
