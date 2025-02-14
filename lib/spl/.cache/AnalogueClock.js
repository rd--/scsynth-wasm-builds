/*  Requires: Date PolarCoordinates SmallKansas  */

sl.addType(
  false,
  "AnalogueClock",
  "AnalogueClock",
  ["Object", "View", "SmallKansan"],
  ["clockPane", "hourHand", "minuteHand", "secondHand"],
);

sl.copyTraitToType(
  "Object",
  "AnalogueClock",
);

sl.copyTraitToType(
  "View",
  "AnalogueClock",
);

sl.copyTraitToType(
  "SmallKansan",
  "AnalogueClock",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "createElements",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _svg = _createSvgElement_2(
      "svg",
      Object.fromEntries([["viewBox", "0 0 200 200"], [
        "preserveAspectRatio",
        "xMidYMid meet",
      ]]),
    );
    let _group = _createSvgElement_2(
      "g",
      Object.fromEntries([["transform", "translate(100, 100) scale(1, -1)"]]),
    );
    /* Statements */
    _clockPane_2(_self, _createElement_1("div"));
    _hourHand_2(
      _self,
      _createSvgElement_2(
        "line",
        Object.fromEntries([
          ["x1", "0"],
          ["y1", "0"],
          ["x2", "0"],
          ["y2", "50"],
          ["stroke", "cornflowerblue"],
          ["stroke-width", "2"],
        ]),
      ),
    );
    _minuteHand_2(
      _self,
      _createSvgElement_2(
        "line",
        Object.fromEntries([
          ["x1", "0"],
          ["y1", "0"],
          ["x2", "0"],
          ["y2", "80"],
          ["stroke", "coral"],
          ["stroke-width", "2"],
        ]),
      ),
    );
    _secondHand_2(
      _self,
      _createSvgElement_2(
        "line",
        Object.fromEntries([
          ["x1", "0"],
          ["y1", "0"],
          ["x2", "0"],
          ["y2", "80"],
          ["stroke", "darkseagreen"],
        ]),
      ),
    );
    _appendChildren_2(_group, [
      _createSvgElement_2(
        "circle",
        Object.fromEntries([["cx", "0"], ["cy", "0"], ["r", "90"], [
          "fill",
          "aquamarine",
        ]]),
      ),
      _hourHand_1(_self),
      _minuteHand_1(_self),
      _secondHand_1(_self),
    ]);
    _appendChildren_2(
      _group,
      _collect_2(_asList_1(_upOrDownTo_2(1, 12)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _asterisk_2(
          _solidus_2(_hyphenMinus_2(_each, 3), 12),
          _pi_1(2),
        );
        let _point = _PolarCoordinates_2(80, _theta);
        let _text = _createSvgElement_2(
          "text",
          Object.fromEntries([
            ["x", _x_1(_point)],
            ["y", _y_1(_point)],
            ["font-size", "11pt"],
            ["text-anchor", "middle"],
            ["dominant-baseline", "middle"],
            ["transform", "scale(1, -1)"],
          ]),
        );
        /* Statements */
        _textContent_2(_text, _printString_1(_each));
        return _text;
      }),
    );
    _appendChild_2(_svg, _group);
    return _appendChild_2(_clockPane_1(_self), _svg);
  },
  "{ :self |\n\t\tlet svg = 'svg'.createSvgElement(\n\t\t\tviewBox: '0 0 200 200',\n\t\t\tpreserveAspectRatio: 'xMidYMid meet'\n\t\t);\n\t\tlet group = 'g'.createSvgElement(\n\t\t\ttransform: 'translate(100, 100) scale(1, -1)'\n\t\t);\n\t\tself.clockPane := 'div'.createElement;\n\t\tself.hourHand := 'line'.createSvgElement(\n\t\t\tx1: '0',\n\t\t\ty1: '0',\n\t\t\tx2: '0',\n\t\t\ty2: '50',\n\t\t\tstroke: 'cornflowerblue',\n\t\t\t'stroke-width': '2'\n\t\t);\n\t\tself.minuteHand := 'line'.createSvgElement(\n\t\t\tx1: '0',\n\t\t\ty1: '0',\n\t\t\tx2: '0',\n\t\t\ty2: '80',\n\t\t\tstroke: 'coral',\n\t\t\t'stroke-width': '2'\n\t\t);\n\t\tself.secondHand := 'line'.createSvgElement(\n\t\t\tx1: '0',\n\t\t\ty1: '0',\n\t\t\tx2: '0',\n\t\t\ty2: '80',\n\t\t\tstroke: 'darkseagreen'\n\t\t);\n\t\tgroup.appendChildren([\n\t\t\t'circle'.createSvgElement(\n\t\t\t\tcx: '0',\n\t\t\t\tcy: '0',\n\t\t\t\tr: '90',\n\t\t\t\tfill: 'aquamarine'\n\t\t\t),\n\t\t\tself.hourHand,\n\t\t\tself.minuteHand,\n\t\t\tself.secondHand\n\t\t]);\n\t\tgroup.appendChildren([1 .. 12].collect { :each |\n\t\t\tlet theta = each - 3 / 12 * 2.pi;\n\t\t\tlet point = PolarCoordinates(80, theta);\n\t\t\tlet text = 'text'.createSvgElement(\n\t\t\t\tx: point.x,\n\t\t\t\ty: point.y,\n\t\t\t\t'font-size': '11pt',\n\t\t\t\t'text-anchor': 'middle',\n\t\t\t\t'dominant-baseline': 'middle',\n\t\t\t\ttransform: 'scale(1, -1)'\n\t\t\t);\n\t\t\ttext.textContent := each.printString;\n\t\t\ttext\n\t\t});\n\t\tsvg.appendChild(group);\n\t\tself.clockPane.appendChild(svg)\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "initialize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _createElements_1(_self);
    _tick_1(_self);
    return _self;
  },
  "{ :self |\n\t\tself.createElements;\n\t\tself.tick;\n\t\tself\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "moveHourHand",
  ["self", "fractionalHour"],
  function (_self, _fractionalHour) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _fractionalHour";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _asterisk_2(
      _solidus_2(_hyphenMinus_2(_fractionalHour, 3), 12),
      _pi_1(2),
    );
    /* Statements */
    return _p2_2(
      _hourHand_1(_self),
      _PolarCoordinates_2(55, _negated_1(_theta)),
    );
  },
  "{ :self :fractionalHour |\n\t\tlet theta = fractionalHour - 3 / 12 * 2.pi;\n\t\tself.hourHand.p2 := PolarCoordinates(55, theta.negated)\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "moveMinuteHand",
  ["self", "minute"],
  function (_self, _minute) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minute";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _asterisk_2(
      _solidus_2(_hyphenMinus_2(_minute, 15), 60),
      _pi_1(2),
    );
    /* Statements */
    return _p2_2(
      _minuteHand_1(_self),
      _PolarCoordinates_2(80, _negated_1(_theta)),
    );
  },
  "{ :self :minute |\n\t\tlet theta = minute - 15 / 60 * 2.pi;\n\t\tself.minuteHand.p2 := PolarCoordinates(80, theta.negated)\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "moveSecondHand",
  ["self", "second"],
  function (_self, _second) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _second";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _asterisk_2(
      _solidus_2(_hyphenMinus_2(_second, 15), 60),
      _pi_1(2),
    );
    /* Statements */
    return _p2_2(
      _secondHand_1(_self),
      _PolarCoordinates_2(85, _negated_1(_theta)),
    );
  },
  "{ :self :second |\n\t\tlet theta = second - 15 / 60 * 2.pi;\n\t\tself.secondHand.p2 := PolarCoordinates(85, theta.negated)\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _addFrameWithAnimator_5(_smallKansas, _self, _event, 1, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tick_1(_self);
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.addFrameWithAnimator(self, event, 1) {\n\t\t\tself.tick\n\t\t}\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _clockPane_1(_self);
  },
  "{ :self |\n\t\tself.clockPane\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "tick",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dateAndTime = _asDate_1(_now_1(_system));
    /* Statements */
    _moveHourHand_2(
      _self,
      _plusSign_2(
        _hour_1(_dateAndTime),
        _solidus_2(_minute_1(_dateAndTime), 60),
      ),
    );
    _moveMinuteHand_2(_self, _minute_1(_dateAndTime));
    return _moveSecondHand_2(_self, _second_1(_dateAndTime));
  },
  "{ :self |\n\t\tlet dateAndTime = system.now.asDate;\n\t\tself.moveHourHand(dateAndTime.hour + (dateAndTime.minute / 60));\n\t\tself.moveMinuteHand(dateAndTime.minute);\n\t\tself.moveSecondHand(dateAndTime.second)\n\t}",
);

sl.addMethod(
  "AnalogueClock",
  "AnalogueClock",
  "title",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return "Analogue Clock";
  },
  "{ :self |\n\t\t'Analogue Clock'\n\t}",
);

sl.addMethod(
  "Void",
  "AnalogueClock",
  "AnalogueClock",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initialize_1(_newAnalogueClock_0());
  },
  "{\n\t\tnewAnalogueClock().initialize\n\t}",
);
