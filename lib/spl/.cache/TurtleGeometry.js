sl.addType(
  false,
  "TurtleGeometry",
  "TurtleGeometry",
  ["Object", "Equatable", "Storeable", "Geometry"],
  ["instructionList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TurtleGeometry",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "TurtleGeometry",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "TurtleGeometry",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "TurtleGeometry",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "add",
  ["self", "opcode", "argument"],
  sl.annotateFunction(function (_self, _opcode, _argument) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _opcode, _argument";
      throw new Error(errorMessage);
    } /* Statements */
    _add_2(_instructionList_1(_self), [_opcode, _argument]);
    return _self;
  }, ["self", "opcode", "argument"]),
  "{ :self :opcode :argument |\n\t\tself.instructionList.add([opcode, argument]);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "arc",
  ["self", "distance", "degrees", "angle"],
  sl.annotateFunction(function (_self, _distance, _degrees, _angle) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _distance, _degrees, _angle";
      throw new Error(errorMessage);
    } /* Statements */
    return _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_degrees, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _min_2(_degrees, 90);
        /* Statements */
        _add_3(_self, "Arc", [_distance, _k, _angle]);
        return _degrees = _hyphenMinus_2(_degrees, _k);
      }, []),
    );
  }, ["self", "distance", "degrees", "angle"]),
  "{ :self :distance :degrees :angle |\n\t\t{ degrees > 0 }.whileTrue {\n\t\t\tlet k = degrees.min(90);\n\t\t\tself.add('Arc', [distance, k, angle]);\n\t\t\tdegrees := degrees - k\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "arcLeft",
  ["self", "distance", "degrees"],
  sl.annotateFunction(function (_self, _distance, _degrees) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _distance, _degrees";
      throw new Error(errorMessage);
    } /* Statements */
    return _arc_4(_self, _distance, _degrees, -1);
  }, ["self", "distance", "degrees"]),
  "{ :self :distance :degrees |\n\t\tself.arc(distance, degrees, -1)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "arcRight",
  ["self", "distance", "degrees"],
  sl.annotateFunction(function (_self, _distance, _degrees) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _distance, _degrees";
      throw new Error(errorMessage);
    } /* Statements */
    return _arc_4(_self, _distance, _degrees, 1);
  }, ["self", "distance", "degrees"]),
  "{ :self :distance :degrees |\n\t\tself.arc(distance, degrees, 1)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "backward",
  ["self", "distance"],
  sl.annotateFunction(function (_self, _distance) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _distance";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Move", _hyphenMinus_2(0, _distance));
  }, ["self", "distance"]),
  "{ :self :distance |\n\t\tself.add('Move', 0 - distance)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _drawing_1(_geometryCollection_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.geometryCollection.drawing\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "embeddingDimension",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["unused"]),
  "{ :unused |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "forEach",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_self, _each);
      }, ["each"]),
    );
    return _self;
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.do { :each |\n\t\t\taBlock(self, each)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "forward",
  ["self", "distance"],
  sl.annotateFunction(function (_self, _distance) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _distance";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Move", _distance);
  }, ["self", "distance"]),
  "{ :self :distance |\n\t\tself.add('Move', distance)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "geometryCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _heading = 0;
    let _penDown = true;
    let _position = [0, 0];
    /* Statements */
    _do_2(
      _instructionList_1(_self),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_i, 2);
        let _opcode = _at_2(__SplVar1, 1);
        let _argument = _at_2(__SplVar1, 2);
        /* Statements */
        return _caseOf_2(_opcode, [
          _hyphenMinusGreaterThanSign_2(
            "Arc",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar2 = _assertIsOfSize_2(_argument, 3);
              let _distance = _at_2(__SplVar2, 1);
              let _degrees = _at_2(__SplVar2, 2);
              let _angle = _at_2(__SplVar2, 3);
              let _halfDegrees = _solidusSolidus_2(_degrees, 2);
              let _initialPosition = _position;
              let _middlePosition = null;
              /* Statements */
              _timesRepeat_2(
                _halfDegrees,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _position = _plusSign_2(
                    _position,
                    _fromPolarCoordinates_1([_distance, _degree_1(_heading)]),
                  );
                  return _heading = _percentSign_2(
                    _plusSign_2(_heading, _angle),
                    360,
                  );
                }, []),
              );
              _middlePosition = _position;
              _timesRepeat_2(
                _hyphenMinus_2(_degrees, _halfDegrees),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _position = _plusSign_2(
                    _position,
                    _fromPolarCoordinates_1([_distance, _degree_1(_heading)]),
                  );
                  return _heading = _percentSign_2(
                    _plusSign_2(_heading, _angle),
                    360,
                  );
                }, []),
              );
              return _ifTrue_2(
                _penDown,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _add_2(
                    _answer,
                    _circularArcThrough_1([
                      _initialPosition,
                      _middlePosition,
                      _position,
                    ]),
                  );
                }, []),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Move",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _distance = _argument;
              let _nextPosition = _plusSign_2(
                _position,
                _fromPolarCoordinates_1([_distance, _degree_1(_heading)]),
              );
              /* Statements */
              _ifTrue_2(
                _penDown,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _add_2(_answer, _Line_1([_position, _nextPosition]));
                }, []),
              );
              return _position = _nextPosition;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Pen",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _penDown = _argument;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "SetHeading",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _heading = _argument;
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Turn",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _angle = _argument;
              /* Statements */
              return _heading = _percentSign_2(
                _plusSign_2(_heading, _angle),
                360,
              );
            }, []),
          ),
        ]);
      }, ["i"]),
    );
    return _GeometryCollection_1(_answer);
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet heading = 0;\n\t\tlet penDown = true;\n\t\tlet position = [0 0];\n\t\tself.instructionList.do { :i |\n\t\t\tlet [opcode, argument] = i;\n\t\t\topcode.caseOf(\n\t\t\t\t[\n\t\t\t\t\t'Arc' -> {\n\t\t\t\t\t\tlet [distance, degrees, angle] = argument;\n\t\t\t\t\t\tlet halfDegrees = degrees // 2;\n\t\t\t\t\t\tlet initialPosition = position;\n\t\t\t\t\t\tlet middlePosition = nil;\n\t\t\t\t\t\thalfDegrees.timesRepeat {\n\t\t\t\t\t\t\tposition := position + [distance, heading.degree].fromPolarCoordinates;\n\t\t\t\t\t\t\theading := (heading + angle) % 360\n\t\t\t\t\t\t};\n\t\t\t\t\t\tmiddlePosition := position;\n\t\t\t\t\t\t(degrees - halfDegrees).timesRepeat {\n\t\t\t\t\t\t\tposition := position + [distance, heading.degree].fromPolarCoordinates;\n\t\t\t\t\t\t\theading := (heading + angle) % 360\n\t\t\t\t\t\t};\n\t\t\t\t\t\tpenDown.ifTrue {\n\t\t\t\t\t\t\tanswer.add(\n\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\tinitialPosition,\n\t\t\t\t\t\t\t\t\tmiddlePosition,\n\t\t\t\t\t\t\t\t\tposition\n\t\t\t\t\t\t\t\t].circularArcThrough\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'Move' -> {\n\t\t\t\t\t\tlet distance = argument;\n\t\t\t\t\t\tlet nextPosition = position + [distance, heading.degree].fromPolarCoordinates;\n\t\t\t\t\t\tpenDown.ifTrue {\n\t\t\t\t\t\t\tanswer.add(\n\t\t\t\t\t\t\t\tLine([position, nextPosition])\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t};\n\t\t\t\t\t\tposition := nextPosition\n\t\t\t\t\t},\n\t\t\t\t\t'Pen' -> {\n\t\t\t\t\t\tpenDown := argument\n\t\t\t\t\t},\n\t\t\t\t\t'SetHeading' -> {\n\t\t\t\t\t\theading := argument\n\t\t\t\t\t},\n\t\t\t\t\t'Turn' -> {\n\t\t\t\t\t\tlet angle = argument;\n\t\t\t\t\t\theading := (heading + angle) % 360\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t)\n\t\t};\n\t\tGeometryCollection(answer)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "left",
  ["self", "angle"],
  sl.annotateFunction(function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Turn", _hyphenMinus_2(360, _angle));
  }, ["self", "angle"]),
  "{ :self :angle |\n\t\tself.add('Turn', 360 - angle)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "penDown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Pen", true);
  }, ["self"]),
  "{ :self |\n\t\tself.add('Pen', true)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "penUp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Pen", false);
  }, ["self"]),
  "{ :self |\n\t\tself.add('Pen', false)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "repeat",
  ["self", "count", "aBlock:/1"],
  sl.annotateFunction(function (_self, _count, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _count,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_self);
      }, []),
    );
    return _self;
  }, ["self", "count", "aBlock:/1"]),
  "{ :self :count :aBlock:/1 |\n\t\tcount.timesRepeat {\n\t\t\taBlock(self)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "right",
  ["self", "angle"],
  sl.annotateFunction(function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "Turn", _angle);
  }, ["self", "angle"]),
  "{ :self :angle |\n\t\tself.add('Turn', angle)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "setHeading",
  ["self", "angle"],
  sl.annotateFunction(function (_self, _angle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _angle";
      throw new Error(errorMessage);
    } /* Statements */
    return _add_3(_self, "SetHeading", _angle);
  }, ["self", "angle"]),
  "{ :self :angle |\n\t\tself.add('SetHeading', angle)\n\t}",
);

sl.addMethodToExistingType(
  "TurtleGeometry",
  "TurtleGeometry",
  "vector",
  ["self", "angle", "length"],
  sl.annotateFunction(function (_self, _angle, _length) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _angle, _length";
      throw new Error(errorMessage);
    } /* Statements */
    _setHeading_2(_self, _angle);
    return _forward_2(_self, _length);
  }, ["self", "angle", "length"]),
  "{ :self :angle :length |\n\t\tself.setHeading(angle);\n\t\tself.forward(length)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "TurtleGeometry",
  "TurtleGeometry",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTurtleGeometry_0(), []);
  }, []),
  "{\n\t\tnewTurtleGeometry().initializeSlots([])\n\t}",
);
