sl.addType(
  false,
  "BezierCurve",
  "BezierCurve",
  ["Object"],
  ["controlPoints"],
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
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let _p = _controlPoints_1(_self);
    let _c = _chunksOfFrom_3(_p, 3, 2);
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
        return _plusSignPlusSign_2("C ", _asSvgPointList_2(_each, _options));
      }),
    ], " ");
    /* Statements */
    return _format_2('<path d="%" />', [_d]);
  },
  "{ :self :options |\n\t\tlet precision = options::precision;\n\t\tlet p = self.controlPoints;\n\t\tlet c = p.chunksOfFrom(3, 2);\n\t\tlet d = [\n\t\t\t'M %,%'.format([\n\t\t\t\tp[1][1].printStringToFixed(precision),\n\t\t\t\tp[1][2].printStringToFixed(precision)\n\t\t\t]),\n\t\t\tc.collect { :each |\n\t\t\t\t'C ' ++ each.asSvgPointList(options)\n\t\t\t}\n\t\t].stringJoin(' ');\n\t\t'<path d=\"%\" />'.format([d])\n\t}",
);

sl.addMethod(
  "List",
  "BezierCurve",
  "BezierCurve",
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
      return _collect_2(_self, _BezierCurve_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newBezierCurve_0(), _self);
    });
  },
  "{ :self |\n\t\t(self.rank > 2).if {\n\t\t\tself.collect(BezierCurve:/1)\n\t\t} {\n\t\t\tnewBezierCurve().initializeSlots(self)\n\t\t}\n\t}",
);
