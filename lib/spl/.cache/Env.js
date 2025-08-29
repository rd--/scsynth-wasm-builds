sl.addType(
  true,
  "Env",
  "Env",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Env",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateListForEnvGen_1(_self);
  }, ["self"]),
  "{ :self | coordinateListForEnvGen(self) }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "asEnvGen",
  ["self", "gate"],
  sl.annotateFunction(function (_self, _gate) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _gate";
      throw new Error(errorMessage);
    } /* Statements */
    return _EnvGen_6(_gate, 1, 0, 1, 0, _coordinateListForEnvGen_1(_self));
  }, ["self", "gate"]),
  "{ :self :gate | EnvGen(gate, 1, 0, 1, 0, coordinateListForEnvGen(self)) }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "asEnvGenWithDoneAction",
  ["self", "gate", "doneAction"],
  sl.annotateFunction(function (_self, _gate, _doneAction) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _gate, _doneAction";
      throw new Error(errorMessage);
    } /* Statements */
    return _EnvGen_6(
      _gate,
      1,
      0,
      1,
      _doneAction,
      _coordinateListForEnvGen_1(_self),
    );
  }, ["self", "gate", "doneAction"]),
  "{ :self :gate :doneAction | EnvGen(gate, 1, 0, 1, doneAction, coordinateListForEnvGen(self)) }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "circle",
  ["self", "timeFromLastToFirst", "curve"],
  sl.annotateFunction(function (_self, _timeFromLastToFirst, _curve) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _timeFromLastToFirst, _curve";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _first0Then1 = _Latch_2(_Dc_1(1), _Impulse_2(0, 0));
    /* Statements */
    _if_3(
      _isNil_1(_releaseNode_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
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
            _plusSignPlusSign_2([
              _asterisk_2(_first0Then1, _timeFromLastToFirst),
            ], _times_1(_self)),
            [Infinity],
          ),
        );
        return _releaseNode_2(
          _self,
          _hyphenMinus_2(_size_1(_levels_1(_self)), 2),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _levels_2(_self, _plusSignPlusSign_2([0], _levels_1(_self)));
        _curves_2(
          _self,
          _plusSignPlusSign_2(
            [_curve],
            _wrapExtend_2(
              _asList_1(_curves_1(_self)),
              _size_1(_times_1(_self)),
            ),
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
      }, []),
    );
    _loopNode_2(_self, 0);
    return _self;
  }, ["self", "timeFromLastToFirst", "curve"]),
  "{ :self :timeFromLastToFirst :curve | let first0Then1 = Latch(Dc(1), Impulse(0, 0)); if(isNil(releaseNode(self)), { levels(self, ++(++([0], levels(self)), [0])); curves(self, ++(++([curve], wrapExtend(asList(curves(self)),size(times(self)))), ['lin'])); times(self, ++(++([*(first0Then1, timeFromLastToFirst)], times(self)), [Infinity])); releaseNode(self, -(size(levels(self)), 2)) }, { levels(self, ++([0], levels(self))); curves(self, ++([curve], wrapExtend(asList(curves(self)),size(times(self))))); times(self, ++([*(first0Then1, timeFromLastToFirst)], times(self))); releaseNode(self, +(releaseNode(self), 1)) }); loopNode(self, 0); self }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "coordinateListForEnvGen",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.envCoord(_self);
  }, ["self"]),
  "{ :self | <primitive: return sc.envCoord(_self);>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "levels",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.levels;
  }, ["self"]),
  "{ :self | <primitive: return _self.levels;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "times",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.times;
  }, ["self"]),
  "{ :self | <primitive: return _self.times;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "curves",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.curves;
  }, ["self"]),
  "{ :self | <primitive: return _self.curves;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "releaseNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.releaseNode;
  }, ["self"]),
  "{ :self | <primitive: return _self.releaseNode;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "loopNode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.loopNode;
  }, ["self"]),
  "{ :self | <primitive: return _self.loopNode;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "levels",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.levels = _anObject;
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.levels = _anObject; return _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.times = _anObject;
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.times = _anObject; return _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "curves",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.curves = _anObject;
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.curves = _anObject; return _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "releaseNode",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.releaseNode = _anObject;
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.releaseNode = _anObject; return _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "loopNode",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.loopNode = _anObject;
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.loopNode = _anObject; return _anObject;>\n }",
);

sl.addMethodToExistingType(
  "Env",
  "Env",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["levels", "times", "curves", "releaseNode", "loopNode", "offset"];
  }, ["self"]),
  "{ :self | ['levels', 'times', 'curves', 'releaseNode', 'loopNode', 'offset'] }",
);
