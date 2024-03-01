sl.addTrait("Magnitude", "Magnitude");

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "lessThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Magnitude>><");
  },
  "{ :self :aMagnitude |\n\t\tself.typeResponsibility('@Magnitude>><')\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "lessThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_lessThanSign_2(_self, _aMagnitude), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_self, _aMagnitude);
    });
  },
  "{ :self :aMagnitude |\n\t\tself < aMagnitude | {\n\t\t\tself = aMagnitude\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "greaterThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_aMagnitude, _self);
  },
  "{ :self :aMagnitude |\n\t\taMagnitude < self\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "greaterThanSignEqualsSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(_aMagnitude, _self);
  },
  "{ :self :aMagnitude |\n\t\taMagnitude <= self\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "lessThanSignEqualsSignGreaterThanSign",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_self, _aMagnitude), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThanSign_2(_self, _aMagnitude), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return -1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      });
    });
  },
  "{ :self :aMagnitude |\n\t\t(self = aMagnitude).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self < aMagnitude).if {\n\t\t\t\t-1\n\t\t\t} {\n\t\t\t\t1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "betweenAnd",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_lessThanSignEqualsSign_2(_min, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSignEqualsSign_2(_self, _max);
    });
  },
  "{ :self :min :max |\n\t\tmin <= self & {\n\t\t\tself <= max\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clamp",
  ["self", "lowMagnitude", "highMagnitude"],
  function (_self, _lowMagnitude, _highMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _lowMagnitude, _highMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_2(_min_2(_self, _highMagnitude), _lowMagnitude);
  },
  "{ :self :lowMagnitude :highMagnitude |\n\t\tself.min(highMagnitude).max(lowMagnitude)\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clampLow",
  ["self", "lowMagnitude"],
  function (_self, _lowMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lowMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_2(_self, _lowMagnitude);
  },
  "{ :self :lowMagnitude |\n\t\tself.max(lowMagnitude)\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clampHigh",
  ["self", "highMagnitude"],
  function (_self, _highMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _highMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _min_2(_self, _highMagnitude);
  },
  "{ :self :highMagnitude |\n\t\tself.min(highMagnitude)\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self", "min", "max", "vMin", "vMax"],
  function (_self, _min, _max, _vMin, _vMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _min, _max, _vMin, _vMax";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, _min), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _vMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_self, _max), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _vMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      });
    });
  },
  "{ :self :min :max :vMin :vMax |\n\t\t(self < min).if {\n\t\t\tvMin\n\t\t} {\n\t\t\t(self > max).if {\n\t\t\t\tvMax\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _clip_5(_self, _min, _max, _min, _max);
  },
  "{ :self :min :max |\n\t\tself.clip(min, max, min, max)\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "clip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _clip_5(_self, -1, 1, -1, 1);
  },
  "{ :self |\n\t\tself.clip(-1, 1, -1, 1)\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "inRangeOfAnd",
  ["self", "first", "second"],
  function (_self, _first, _second) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _first, _second";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_first, _second), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _betweenAnd_3(_self, _first, _second);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _betweenAnd_3(_self, _second, _first);
    });
  },
  "{ :self :first :second |\n\t\t(first < second).if {\n\t\t\tself.betweenAnd(first, second)\n\t\t} {\n\t\t\tself.betweenAnd(second, first)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "maxBy",
  ["self", "aMagnitude", "aBlock:/1"],
  function (_self, _aMagnitude, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMagnitude, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_aBlock_1(_self), _aBlock_1(_aMagnitude)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aMagnitude;
      },
    );
  },
  "{ :self :aMagnitude :aBlock:/1 |\n\t\t(self.aBlock > aMagnitude.aBlock).if {\n\t\t\tself\n\t\t} {\n\t\t\taMagnitude\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "max",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_self, _aMagnitude), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aMagnitude;
    });
  },
  "{ :self :aMagnitude |\n\t\t(self > aMagnitude).if {\n\t\t\tself\n\t\t} {\n\t\t\taMagnitude\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "minBy",
  ["self", "aMagnitude", "aBlock:/1"],
  function (_self, _aMagnitude, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMagnitude, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _lessThanSign_2(_aBlock_1(_self), _aBlock_1(_aMagnitude)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aMagnitude;
      },
    );
  },
  "{ :self :aMagnitude :aBlock:/1 |\n\t\t(self.aBlock < aMagnitude.aBlock).if {\n\t\t\tself\n\t\t} {\n\t\t\taMagnitude\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "min",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanSign_2(_self, _aMagnitude), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aMagnitude;
    });
  },
  "{ :self :aMagnitude |\n\t\t(self < aMagnitude).if {\n\t\t\tself\n\t\t} {\n\t\t\taMagnitude\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Magnitude",
  "Magnitude",
  "minMax",
  ["self", "aMin", "aMax"],
  function (_self, _aMin, _aMax) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aMin, _aMax";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _max_2(_min_2(_self, _aMin), _aMax);
  },
  "{ :self :aMin :aMax |\n\t\tself.min(aMin).max(aMax)\n\t}",
);
