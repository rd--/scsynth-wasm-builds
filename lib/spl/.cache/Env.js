sl.addType(
  true,
  "Env",
  "Env",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Env",
);

sl.addMethod(
  "Env",
  "Env",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _coordinateListForEnvGen_1(_self);
  },
  "{ :self |\n\t\tself.coordinateListForEnvGen\n\t}",
);

sl.addMethod(
  "Env",
  "Env",
  "asEnvGen",
  ["self", "gate"],
  function (_self, _gate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _gate"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _EnvGen_6(_gate, 1, 0, 1, 0, _coordinateListForEnvGen_1(_self));
  },
  "{ :self :gate |\n\t\tEnvGen(gate, 1, 0, 1, 0, self.coordinateListForEnvGen)\n\t}",
);

sl.addMethod(
  "Env",
  "Env",
  "asEnvGenWithDoneAction",
  ["self", "gate", "doneAction"],
  function (_self, _gate, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _gate, _doneAction"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _EnvGen_6(
      _gate,
      1,
      0,
      1,
      _doneAction,
      _coordinateListForEnvGen_1(_self),
    );
  },
  "{ :self :gate :doneAction |\n\t\tEnvGen(gate, 1, 0, 1, doneAction, self.coordinateListForEnvGen)\n\t}",
);

sl.addMethod(
  "Env",
  "Env",
  "circle",
  ["self", "timeFromLastToFirst", "curve"],
  function (_self, _timeFromLastToFirst, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _timeFromLastToFirst, _curve"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _first0Then1 = _Latch_2(1, _Impulse_2(0, 0));
    /* Statements */
    _if_3(_isNil_1(_releaseNode_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _levels_2(
        _self,
        _plusSignPlusSign_2(_plusSignPlusSign_2([0], _levels_1(_self)), [0]),
      );
      _curves_2(
        _self,
        _plusSignPlusSign_2(
          _plusSignPlusSign_2(
            [_curve],
            _wrapExtend_2(
              _asList_1(_curves_1(_self)),
              _size_1(_times_1(_self)),
            ),
          ),
          ["lin"],
        ),
      );
      _times_2(
        _self,
        _plusSignPlusSign_2(
          _plusSignPlusSign_2(
            [_asterisk_2(_first0Then1, _timeFromLastToFirst)],
            _times_1(_self),
          ),
          [_inf],
        ),
      );
      return _releaseNode_2(
        _self,
        _hyphenMinus_2(_size_1(_levels_1(_self)), 2),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _levels_2(_self, _plusSignPlusSign_2([0], _levels_1(_self)));
      _curves_2(
        _self,
        _plusSignPlusSign_2(
          [_curve],
          _wrapExtend_2(_asList_1(_curves_1(_self)), _size_1(_times_1(_self))),
        ),
      );
      _times_2(
        _self,
        _plusSignPlusSign_2(
          [_asterisk_2(_first0Then1, _timeFromLastToFirst)],
          _times_1(_self),
        ),
      );
      return _releaseNode_2(_self, _plusSign_2(_releaseNode_1(_self), 1));
    });
    _loopNode_2(_self, 0);
    return _self;
  },
  "{ :self :timeFromLastToFirst :curve |\n\t\tlet first0Then1 = Latch(1, Impulse(0, 0));\n\t\tself.releaseNode.isNil.if {\n\t\t\tself.levels := [0] ++ self.levels ++ [0];\n\t\t\tself.curves := [curve] ++ self.curves.asList.wrapExtend(self.times.size) ++ ['lin'];\n\t\t\tself.times  := [first0Then1 * timeFromLastToFirst] ++ self.times ++ [inf];\n\t\t\tself.releaseNode := self.levels.size - 2\n\t\t} {\n\t\t\tself.levels := [0] ++ self.levels;\n\t\t\tself.curves := [curve] ++ self.curves.asList.wrapExtend(self.times.size);\n\t\t\tself.times  := [first0Then1 * timeFromLastToFirst] ++ self.times;\n\t\t\tself.releaseNode := self.releaseNode + 1\n\t\t};\n\t\tself.loopNode := 0;\n\t\tself\n\t}",
);

sl.addMethod(
  "Env",
  "Env",
  "coordinateListForEnvGen",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return sc.envCoord(_self);
  },
  "{ :self |\n\t\t<primitive: return sc.envCoord(_self);>\n\t}",
);

sl.addMethod(
  "Env",
  "Env",
  "levels",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.levels;
  },
  "{ :self | <primitive: return _self.levels;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "times",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.times;
  },
  "{ :self | <primitive: return _self.times;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "curves",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.curves;
  },
  "{ :self | <primitive: return _self.curves;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "releaseNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.releaseNode;
  },
  "{ :self | <primitive: return _self.releaseNode;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "loopNode",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.loopNode;
  },
  "{ :self | <primitive: return _self.loopNode;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "levels",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.levels = _anObject;
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.levels = _anObject; return _anObject;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "times",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.times = _anObject;
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.times = _anObject; return _anObject;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "curves",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.curves = _anObject;
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.curves = _anObject; return _anObject;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "releaseNode",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.releaseNode = _anObject;
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.releaseNode = _anObject; return _anObject;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "loopNode",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Primitive */
    _self.loopNode = _anObject;
    return _anObject;
  },
  "{ :self :anObject | <primitive: _self.loopNode = _anObject; return _anObject;> }",
);

sl.addMethod(
  "Env",
  "Env",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["levels", "times", "curves", "releaseNode", "loopNode", "offset"];
  },
  "{ :self |\n\t\t['levels', 'times', 'curves', 'releaseNode', 'loopNode', 'offset']\n\t}",
);
