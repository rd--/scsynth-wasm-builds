sl.addTrait("Magnitude", "Magnitude");

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "lessThanSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Magnitude>><");
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | typeResponsibility(self,'@Magnitude>><') }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "lessThanSignEqualsSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_self, _aMagnitude),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_self, _aMagnitude);
      }, []),
    );
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | |(<(self, aMagnitude), { =(self, aMagnitude) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "greaterThanSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_aMagnitude, _self);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | <(aMagnitude, self) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "greaterThanSignEqualsSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_aMagnitude, _self);
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | <=(aMagnitude, self) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "lessThanSignEqualsSignGreaterThanSign",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _aMagnitude),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, _aMagnitude),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return -1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        );
      }, []),
    );
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | if((=(self, aMagnitude)), { 0 }, { if((<(self, aMagnitude)), { -1 }, { 1 }) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "between",
  ["self", "interval"],
  sl.annotateFunction(function (_self, _interval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _interval";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_min_1(_interval), _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_self, _max_1(_interval));
      }, []),
    );
  }, ["self", "interval"]),
  "{ :self :interval | &(<=(min(interval), self), { <=(self, max(interval)) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "betweenAnd",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_min, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_self, _max);
      }, []),
    );
  }, ["self", "min", "max"]),
  "{ :self :min :max | &(<=(min, self), { <=(self, max) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clamp",
  ["self", "lowMagnitude", "highMagnitude"],
  sl.annotateFunction(function (_self, _lowMagnitude, _highMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _lowMagnitude, _highMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_min_2(_self, _highMagnitude), _lowMagnitude);
  }, ["self", "lowMagnitude", "highMagnitude"]),
  "{ :self :lowMagnitude :highMagnitude | max(min(self,highMagnitude),lowMagnitude) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clampLow",
  ["self", "lowMagnitude"],
  sl.annotateFunction(function (_self, _lowMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lowMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_self, _lowMagnitude);
  }, ["self", "lowMagnitude"]),
  "{ :self :lowMagnitude | max(self,lowMagnitude) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clampHigh",
  ["self", "highMagnitude"],
  sl.annotateFunction(function (_self, _highMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _highMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_2(_self, _highMagnitude);
  }, ["self", "highMagnitude"]),
  "{ :self :highMagnitude | min(self,highMagnitude) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self", "u", "v"],
  sl.annotateFunction(function (_self, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL423 = _assertIsOfSize_2(_u, 2);
    let _min = _at_2(__SPL423, 1);
    let _max = _at_2(__SPL423, 2);
    let __SPL424 = _assertIsOfSize_2(_v, 2);
    let _vMin = _at_2(__SPL424, 1);
    let _vMax = _at_2(__SPL424, 2);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_self, _min),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _vMin;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_self, _max),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _vMax;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _self;
          }, []),
        );
      }, []),
    );
  }, ["self", "u", "v"]),
  "{ :self :u :v | let __SPL423 = assertIsOfSize(u, 2); let min = at(__SPL423, 1); let max = at(__SPL423, 2); let __SPL424 = assertIsOfSize(v, 2); let vMin = at(__SPL424, 1); let vMax = at(__SPL424, 2); if((<(self, min)), { vMin }, { if((>(self, max)), { vMax }, { self }) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self", "minMax"],
  sl.annotateFunction(function (_self, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, _minMax, _minMax);
  }, ["self", "minMax"]),
  "{ :self :minMax | clip(self,minMax, minMax) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_3(_self, [-1, 1], [-1, 1]);
  }, ["self"]),
  "{ :self | clip(self,[-1, 1], [-1, 1]) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "inRangeOfAnd",
  ["self", "first", "second"],
  sl.annotateFunction(function (_self, _first, _second) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _first, _second";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_first, _second),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_self, _first, _second);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _betweenAnd_3(_self, _second, _first);
      }, []),
    );
  }, ["self", "first", "second"]),
  "{ :self :first :second | if((<(first, second)), { betweenAnd(self,first, second) }, { betweenAnd(self,second, first) }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "max",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, _aMagnitude),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aMagnitude;
      }, []),
    );
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | if((>(self, aMagnitude)), { self }, { aMagnitude }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "min",
  ["self", "aMagnitude"],
  sl.annotateFunction(function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, _aMagnitude),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aMagnitude;
      }, []),
    );
  }, ["self", "aMagnitude"]),
  "{ :self :aMagnitude | if((<(self, aMagnitude)), { self }, { aMagnitude }) }",
);

sl.addMethodToExistingTrait(
  "Magnitude",
  "Magnitude",
  "minMax",
  ["self", "aMin", "aMax"],
  sl.annotateFunction(function (_self, _aMin, _aMax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMin, _aMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_min_2(_self, _aMin), _aMax);
  }, ["self", "aMin", "aMax"]),
  "{ :self :aMin :aMax | max(min(self,aMin),aMax) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Magnitude",
  "maxOn",
  ["self", "aMagnitude", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aMagnitude, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMagnitude, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_aBlock_1(_self), _aBlock_1(_aMagnitude)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aMagnitude;
      }, []),
    );
  }, ["self", "aMagnitude", "aBlock:/1"]),
  "{ :self :aMagnitude :aBlock:/1 | if((>(aBlock(self), aBlock(aMagnitude))), { self }, { aMagnitude }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Magnitude",
  "minOn",
  ["self", "aMagnitude", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aMagnitude, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMagnitude, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_aBlock_1(_self), _aBlock_1(_aMagnitude)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aMagnitude;
      }, []),
    );
  }, ["self", "aMagnitude", "aBlock:/1"]),
  "{ :self :aMagnitude :aBlock:/1 | if((<(aBlock(self), aBlock(aMagnitude))), { self }, { aMagnitude }) }",
);
