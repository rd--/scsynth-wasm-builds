sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _AmpDb_1);
  },
  "{ :self |\n\t\tself.collect(AmpDb:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "atExtending: not a sequence");
  },
  "{ :self :index |\n\t\tself.error('atExtending: not a sequence')\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _DbAmp_1);
  },
  "{ :self |\n\t\tself.collect(DbAmp:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "extendTo: not a sequence");
  },
  "{ :self :size |\n\t\tself.error('extendTo: not a sequence')\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _MidiCps_1);
  },
  "{ :self |\n\t\tself.collect(MidiCps:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "normalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _min = _min_1(_self);
    let _max = _max_1(_self);
    let _mul = _dividedBy_2(1, _minus_2(_max, _min));
    let _add = _minus_2(0, _times_2(_mul, _min));
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(_times_2(_each, _mul), _add);
    });
  },
  "{ :self |\n\t\tlet min = self.min;\n\t\tlet max = self.max;\n\t\tlet mul = 1 / (max - min);\n\t\tlet add = 0 - (mul * min);\n\t\tself.collect { :each |\n\t\t\teach * mul + add\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "powersetBitwise",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _minus_2(_bitShift_2(1, _size_1(_self)), 1)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _index = 0;
        /* Statements */
        return _select_2(_self, function (_elem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _elem";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _index = _plus_2(_index, 1);
          return _equals_2(_bitAt_2(_each, _index), 1);
        });
      },
    );
  },
  "{ :self |\n\t\t(0 .. 1.bitShift(self.size) - 1).collect { :each |\n\t\t\tlet index = 0;\n\t\t\tself.select { :elem |\n\t\t\t\tindex := index + 1;\n\t\t\t\teach.bitAt(index) = 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _error_2(_self, "sizeForExtending: not a sequence");
  },
  "{ :self |\n\t\tself.error('sizeForExtending: not a sequence')\n\t}",
);

sl.extendTraitWithMethod(
  "Magnitude",
  "ScLang",
  "exclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_lessThan_2(_lo, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThan_2(_self, _hi);
    });
  },
  "{ :self :lo :hi |\n\t\tlo < self & {\n\t\t\tself < hi\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Magnitude",
  "ScLang",
  "inclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_lessThanEquals_2(_lo, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThanEquals_2(_self, _hi);
    });
  },
  "{ :self :lo :hi |\n\t\tlo <= self & {\n\t\t\tself <= hi\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "ampComp",
  ["freq", "root", "exp"],
  function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(_dividedBy_2(_root, _freq), _exp);
  },
  "{ :freq :root :exp |\n\t\t(root / freq) ^ exp\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "AmpDb",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_log10_1(_self), 20);
  },
  "{ :self |\n\t\tself.log10 * 20\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "blend",
  ["self", "other", "blendFrac"],
  function (_self, _other, _blendFrac) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _blendFrac";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_self, _times_2(_blendFrac, _minus_2(_other, _self)));
  },
  "{ :self :other :blendFrac |\n\t\tself + (blendFrac * (other - self))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "coin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThan_2(_nextRandomFloat_1(_system), _self);
  },
  "{ :self |\n\t\tsystem.nextRandomFloat < self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "CentsRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _MidiRatio_1(_dividedBy_2(_self, 100));
  },
  "{ :self |\n\t\t(self / 100).MidiRatio\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "CpsMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _times_2(_log2_1(_times_2(_self, _dividedBy_2(1, 440))), 12),
      69,
    );
  },
  "{ :self |\n\t\t(self * (1 / 440)).log2 * 12 + 69\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "CpsOct",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_log2_1(_times_2(_self, _dividedBy_2(1, 440))), 4.75);
  },
  "{ :self |\n\t\t(self * (1 / 440)).log2 + 4.75\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_times_2(_self, _self), _self);
  },
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "curveLin",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThan_2(_abs_1(_curve), 0.001), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _plus_2(
            _times_2(
              _dividedBy_2(_minus_2(_self, _inMin), _minus_2(_inMax, _inMin)),
              _minus_2(_outMax, _outMin),
            ),
            _outMin,
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _grow = _exp_1(_curve);
          let _a = _dividedBy_2(_minus_2(_inMax, _inMin), _minus_2(1.0, _grow));
          let _b = _plus_2(_inMin, _a);
          /* Statements */
          return _plus_2(
            _dividedBy_2(
              _times_2(
                _log_1(_dividedBy_2(_minus_2(_b, _self), _a)),
                _minus_2(_outMax, _outMin),
              ),
              _curve,
            ),
            _outMin,
          );
        });
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(curve.abs < 0.001).if {\n\t\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t\t} {\n\t\t\t\t\tlet grow = curve.exp;\n\t\t\t\t\tlet a = inMax - inMin / (1.0 - grow);\n\t\t\t\t\tlet b = inMin + a;\n\t\t\t\t\t((b - self) / a).log * (outMax - outMin) / curve + outMin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "DbAmp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(10, _times_2(_self, 0.05));
  },
  "{ :self |\n\t\t10 ^ (self * 0.05)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "DifSqr",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(_times_2(_self, _self), _times_2(_aNumber, _aNumber));
  },
  "{ :self :aNumber |\n\t\t(self * self) - (aNumber * aNumber)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Distort",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_self, _plus_2(1, _abs_1(_self)));
  },
  "{ :self |\n\t\tself / (1 + self.abs)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "expExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(
          _raisedTo_2(
            _dividedBy_2(_outMax, _outMin),
            _dividedBy_2(
              _log_1(_dividedBy_2(_self, _inMin)),
              _log_1(_dividedBy_2(_inMax, _inMin)),
            ),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(outMax / outMin) ^ ((self / inMin).log / (inMax / inMin).log) * outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "expLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plus_2(
          _times_2(
            _dividedBy_2(
              _log_1(_dividedBy_2(_self, _inMin)),
              _log_1(_dividedBy_2(_inMax, _inMin)),
            ),
            _minus_2(_outMax, _outMin),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(self / inMin).log / (inMax / inMin).log * (outMax - outMin) + outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "expRand",
  ["self", "upperBound"],
  function (_self, _upperBound) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _upperBound";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _linExpFromTo_3(_nextRandomFloat_1(1), _self, _upperBound);
  },
  "{ :self :upperBound |\n\t\t1.nextRandomFloat.linExpFromTo(self, upperBound)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "foldOnce",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanEquals_2(_self, _hi), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _minus_2(_plus_2(_hi, _hi), _self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_lessThan_2(_self, _lo), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _minus_2(_plus_2(_lo, _lo), _self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equals_2(_self, _hi), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _lo;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _self;
        });
      });
    });
  },
  "{ :self :lo :hi |\n\t\t(self >= hi).if {\n\t\t\thi + hi - self\n\t\t} {\n\t\t\t(self < lo).if {\n\t\t\t\tlo + lo - self\n\t\t\t} {\n\t\t\t\t(self = hi).if {\n\t\t\t\t\tlo\n\t\t\t\t} {\n\t\t\t\t\tself\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "fold",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _and_2(_greaterThanEquals_2(_self, _lo), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThan_2(_self, _hi);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _self;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _x = _minus_2(_self, _lo);
        let _range = _minus_2(_hi, _lo);
        let _twiceRange = _plus_2(_range, _range);
        let _c = _minus_2(
          _x,
          _times_2(_twiceRange, _floor_1(_dividedBy_2(_x, _twiceRange))),
        );
        /* Statements */
        _ifTrue_2(_greaterThanEquals_2(_c, _range), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _c = _minus_2(_twiceRange, _c);
        });
        return _plus_2(_c, _lo);
      },
    );
  },
  "{ :self :lo :hi |\n\t\t(self >= lo).and {\n\t\t\tself < hi\n\t\t}.if {\n\t\t\tself\n\t\t} {\n\t\t\tlet x = self - lo;\n\t\t\tlet range = hi - lo;\n\t\t\tlet twiceRange = range + range;\n\t\t\tlet c = x - (twiceRange * (x / twiceRange).floor);\n\t\t\t(c >= range).ifTrue {\n\t\t\t\tc := twiceRange - c\n\t\t\t};\n\t\t\tc + lo\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Hypot",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plus_2(_times_2(_self, _self), _times_2(_aNumber, _aNumber)),
    );
  },
  "{ :self :aNumber |\n\t\t((self * self) + (aNumber * aNumber)).sqrt\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Hypotx",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(
      _plus_2(_abs_1(_self), _abs_1(_aNumber)),
      _times_2(
        _minus_2(_sqrt_1(2), 1),
        _min_2(_abs_1(_self), _abs_1(_aNumber)),
      ),
    );
  },
  "{ :self :aNumber |\n\t\tself.abs + aNumber.abs - ((2.sqrt - 1) * self.abs.min(aNumber.abs))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "isNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _negative_1(_self);
  },
  "{ :self |\n\t\tself.negative\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "isPositive",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _positive_1(_self);
  },
  "{ :self |\n\t\tself.positive\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_lessThan_2(_abs_1(_curve), 0.001), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _plus_2(
            _times_2(
              _dividedBy_2(_minus_2(_self, _inMin), _minus_2(_inMax, _inMin)),
              _minus_2(_outMax, _outMin),
            ),
            _outMin,
          );
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _grow = _exp_1(_curve);
          let _a = _dividedBy_2(
            _minus_2(_outMax, _outMin),
            _minus_2(1.0, _grow),
          );
          let _b = _plus_2(_outMin, _a);
          let _scaled = _dividedBy_2(
            _minus_2(_self, _inMin),
            _minus_2(_inMax, _inMin),
          );
          /* Statements */
          return _minus_2(_b, _times_2(_a, _raisedTo_2(_grow, _scaled)));
        });
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(curve.abs < 0.001).if {\n\t\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t\t} {\n\t\t\t\t\tlet grow = curve.exp;\n\t\t\t\t\tlet a = outMax - outMin / (1.0 - grow);\n\t\t\t\t\tlet b = outMin + a;\n\t\t\t\t\tlet scaled = (self - inMin) / (inMax - inMin);\n\t\t\t\t\tb - (a * (grow ^ scaled))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "linExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(
          _raisedTo_2(
            _dividedBy_2(_outMax, _outMin),
            _dividedBy_2(_minus_2(_self, _inMin), _minus_2(_inMax, _inMin)),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(outMax / outMin) ^ ((self - inMin) / (inMax - inMin)) * outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "linExpFromTo",
  ["self", "lo", "hi"],
  function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(
      _lo,
      _exp_1(_times_2(_log_1(_dividedBy_2(_hi, _lo)), _self)),
    );
  },
  "{ :self :lo :hi |\n\t\tlo * ((hi / lo).log * self).exp\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "linLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_self, _inMin), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _outMin;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanEquals_2(_self, _inMax), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _outMax;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plus_2(
          _times_2(
            _dividedBy_2(_minus_2(_self, _inMin), _minus_2(_inMax, _inMin)),
            _minus_2(_outMax, _outMin),
          ),
          _outMin,
        );
      });
    });
  },
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "MidiCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(
      440,
      _raisedTo_2(2, _times_2(_minus_2(_self, 69), _dividedBy_2(1, 12))),
    );
  },
  "{ :self |\n\t\t440 * (2 ^ ((self - 69) * (1 / 12)))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "MidiRatio",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(2.0, _times_2(_self, _dividedBy_2(1, 12)));
  },
  "{ :self |\n\t\t2.0 ^ (self * (1 / 12))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_times_2(_self, _mul), _add);
  },
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Neg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(0, _self);
  },
  "{ :self |\n\t\t0 - self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "nextPowerOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _nextPowerOf_2(_self, 2);
  },
  "{ :self |\n\t\tself.nextPowerOf(2)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "nextPowerOf",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(
      _base,
      _ceiling_1(_dividedBy_2(_log_1(_self), _log_1(_base))),
    );
  },
  "{ :self :base |\n\t\tbase ^ (self.log / base.log).ceiling\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "OctCps",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(440, _raisedTo_2(2, _minus_2(_self, 4.75)));
  },
  "{ :self |\n\t\t440 * (2 ^ (self - 4.75))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "previousPowerOf",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _raisedTo_2(
      _base,
      _minus_2(_ceiling_1(_dividedBy_2(_log_1(_self), _log_1(_base))), 1),
    );
  },
  "{ :self :base |\n\t\tbase ^ ((self.log / base.log).ceiling - 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "RatioCents",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_RatioMidi_1(_self), 100);
  },
  "{ :self |\n\t\tself.RatioMidi * 100\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "RatioMidi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(12, _log2_1(_self));
  },
  "{ :self |\n\t\t12 * self.log2\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Recip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(1, _self);
  },
  "{ :self |\n\t\t1 / self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "ScLang",
  "Squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_self, _self);
  },
  "{ :self |\n\t\tself * self\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "asBinaryDigits",
  ["self", "numDigits"],
  function (_self, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numDigits";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(0, _minus_2(_numDigits, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addFirst_2(_answer, _bitAnd_2(_bitShiftRight_2(_self, _i), 1));
    });
    return _answer;
  },
  "{ :self :numDigits |\n\t\tlet answer = [];\n\t\t0.toDo(numDigits - 1) { :i |\n\t\t\tanswer.addFirst(self.bitShiftRight(i).bitAnd(1))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "asDigits",
  ["self", "base", "numDigits"],
  function (_self, _base, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _numDigits";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _num = _self;
    /* Statements */
    _timesRepeat_2(_numDigits, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _addFirst_2(_answer, _modulo_2(_num, _base));
      return _num = _dividedByDividedBy_2(_num, _base);
    });
    return _answer;
  },
  "{ :self :base :numDigits |\n\t\tlet answer = [];\n\t\tlet num = self;\n\t\tnumDigits.timesRepeat {\n\t\t\tanswer.addFirst(num % base);\n\t\t\tnum := num // base\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "asDigits",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asDigits_3(
      _self,
      _base,
      _plus_2(
        _asInteger_1(
          _plus_2(_dividedBy_2(_log_1(_self), _log_1(_base)), 0.0000000001),
        ),
        1,
      ),
    );
  },
  "{ :self :base |\n\t\tself.asDigits(base, (self.log / base.log + 0.0000000001).asInteger + 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _toDo_3(1, _self, _aBlock_1);
    return _self;
  },
  "{ :self :aBlock:/1 |\n\t\t{- Spl is one-indexed -}\n\t\t1.toDo(self, aBlock:/1);\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_self);
    /* Statements */
    _hammingWindow_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self);\n\t\tanswer.hammingWindow;\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "hanningWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_self);
    /* Statements */
    _hanningWindow_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self);\n\t\tanswer.hanningWindow;\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "sineTable",
  ["self", "amplitudes", "phases"],
  function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _amplitudes, _phases";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_2(_self, 0);
    /* Statements */
    _sineFill_3(_answer, _amplitudes, _phases);
    return _answer;
  },
  "{ :self :amplitudes :phases |\n\t\tlet answer = Array(self, 0);\n\t\tanswer.sineFill(amplitudes, phases);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "ScLang",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_self);
    /* Statements */
    _welchWindow_1(_answer);
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self);\n\t\tanswer.welchWindow;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "ScLang",
  "bangPlus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sum_1(_bang_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\t(self ! anInteger).Sum\n\t}",
);

sl.addMethod(
  "Block",
  "ScLang",
  "bangTimes",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _product_1(_bang_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\t(self ! anInteger).product\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self :index |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Array_2(_size, _self);
  },
  "{ :self :size |\n\t\tArray(size, self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _item;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _instill_4(_asCollection_1(_self), _index, _item, _default);
    });
  },
  "{ :self :index :item :default |\n\t\t(index = 1).if {\n\t\t\titem\n\t\t} {\n\t\t\tself.asCollection.instill(index, item, default)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equals_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _default;
    });
  },
  "{ :self :index :default |\n\t\t(index = 1).if {\n\t\t\tself\n\t\t} {\n\t\t\tdefault\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "plusPlusPlus",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withIndexCollect_2(_self, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(_each, _atWrap_2(_aMatrix, _index));
    });
  },
  "{ :self :aMatrix |\n\t\tself.withIndexCollect { :each :index |\n\t\t\teach ++ aMatrix.atWrap(index)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "addSine",
  ["self", "harmonicNumber", "amplitude", "initialPhase"],
  function (_self, _harmonicNumber, _amplitude, _initialPhase) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _harmonicNumber, _amplitude, _initialPhase";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    let _frequency = _dividedBy_2(1, _harmonicNumber);
    let _increment = _times_2(
      _dividedBy_2(_times_2(2, _pi), _size),
      _frequency,
    );
    let _phase = _initialPhase;
    /* Statements */
    return _do_2(_upOrDownTo_2(1, _size), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(
        _self,
        _each,
        _plus_2(_at_2(_self, _each), _times_2(_sin_1(_phase), _amplitude)),
      );
      return _phase = _plus_2(_phase, _increment);
    });
  },
  "{ :self :harmonicNumber :amplitude :initialPhase |\n\t\tlet size = self.size;\n\t\tlet frequency = 1 / harmonicNumber;\n\t\tlet increment = 2 * pi / size * frequency;\n\t\tlet phase = initialPhase;\n\t\t(1 .. size).do { :each |\n\t\t\tself[each] := self[each] + (phase.sin * amplitude);\n\t\t\tphase := phase + increment\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "allTuples",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _allTuplesDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _copy_1(_each));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.allTuplesDo { :each |\n\t\t\tanswer.add(each.copy)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "allTuplesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _tupleCount = _product_1(_collect_2(_self, _size_1));
    let _tuple = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    return _toDo_3(1, _tupleCount, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _k = _minus_2(_i, 1);
      /* Statements */
      _toByDo_4(_size_1(_self), 1, -1, function (_j) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _j";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _fromSequence = _at_2(_self, _j);
        /* Statements */
        _atPut_3(
          _tuple,
          _j,
          _at_2(
            _fromSequence,
            _plus_2(_modulo_2(_k, _size_1(_fromSequence)), 1),
          ),
        );
        return _k = _dividedByDividedBy_2(_k, _size_1(_fromSequence));
      });
      return _aBlock_1(_tuple);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet tupleCount = self.collect(size:/1).product;\n\t\tlet tuple = self.species.new(self.size);\n\t\t1.toDo(tupleCount) { :i |\n\t\t\tlet k = i - 1;\n\t\t\tself.size.toByDo(1, -1) { :j |\n\t\t\t\tlet fromSequence = self[j];\n\t\t\t\ttuple[j] := fromSequence[k % fromSequence.size + 1];\n\t\t\t\tk := k // fromSequence.size\n\t\t\t};\n\t\t\taBlock(tuple)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "asRandomTable",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _a = _if_3(_equals_2(_size, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _resamp1_2(_self, _size);
    });
    /* Statements */
    _a = _normalize_3(_integrate_1(_a), 1, _size);
    return _collect_2(_upOrDownTo_2(1, _size), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _dividedBy_2(_minus_2(_indexInBetween_2(_a, _index), 1), _size);
    });
  },
  "{ :self :size |\n\t\tlet a = (size = self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.resamp1(size)\n\t\t};\n\t\ta := a.integrate.normalize(1, size);\n\t\t(1 .. size).collect { :index |\n\t\t\ta.indexInBetween(index) - 1 / size\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "asRandomTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asRandomTable_2(_self, _size_1(_self));
  },
  "{ :self |\n\t\tself.asRandomTable(self.size)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "asWavetable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _times_2(_size_1(_self), 2);
    let _answer = _ofSize_2(_species_1(_self), _size);
    let _index = 1;
    /* Statements */
    _do_2(_upOrDownTo_2(1, _size_1(_self)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _e1 = _at_2(_self, _each);
      let _e2 = _if_3(_equals_2(_each, _size_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _at_2(_self, _plus_2(_each, 1));
      });
      /* Statements */
      _atPut_3(_answer, _index, _minus_2(_times_2(2, _e1), _e2));
      _atPut_3(_answer, _plus_2(_index, 1), _minus_2(_e2, _e1));
      return _index = _plus_2(_index, 2);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet size = self.size * 2;\n\t\tlet answer = self.species.ofSize(size);\n\t\tlet index = 1;\n\t\t(1 .. self.size).do { :each |\n\t\t\tlet e1 = self[each];\n\t\t\tlet e2 = (each = self.size).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tself[each + 1]\n\t\t\t};\n\t\t\tanswer[index] := 2 * e1 - e2;\n\t\t\tanswer[index + 1] := e2 - e1;\n\t\t\tindex := index + 2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "atExtending",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atWrap_2(_self, _index);
  },
  "{ :self :index |\n\t\tself.atWrap(index)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "blendAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _indexMin = _minus_2(_roundUpTo_2(_index, 1), 1);
    /* Statements */
    return _blend_3(
      _clipAt_2(_self, _indexMin),
      _clipAt_2(_self, _plus_2(_indexMin, 1)),
      _abs_1(_minus_2(_index, _indexMin)),
    );
  },
  "{ :self :index |\n\t\tlet indexMin = index.roundUpTo(1) - 1;\n\t\tself.clipAt(indexMin).blend(\n\t\t\tself.clipAt(indexMin + 1),\n\t\t\t(index - indexMin).abs\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "blendAtAll",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _blendAt_2(_self, _each);
    });
  },
  "{ :self :indices |\n\t\tindices.collect { :each |\n\t\t\tself.blendAt(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "clipAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, _clamp_3(_index, 1, _size_1(_self)));
  },
  "{ :self :index |\n\t\tself[index.clamp(1, self.size)]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "clipAtAll",
  ["self", "indices"],
  function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_indices, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _clipAt_2(_self, _each);
    });
  },
  "{ :self :indices |\n\t\tindices.collect { :each |\n\t\t\tself.clipAt(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _add_2(_segment, _each);
      return _ifTrue_2(
        _greaterThanEquals_2(_size_1(_segment), _groupSize),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _add_2(_answer, _segment);
          return _segment = [];
        },
      );
    });
    _ifTrue_2(_greaterThan_2(_size_1(_segment), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _segment);
    });
    return _answer;
  },
  "{ :self :groupSize |\n\t\tlet answer = [];\n\t\tlet segment = [];\n\t\tself.do { :each |\n\t\t\tsegment.add(each);\n\t\t\t(segment.size >= groupSize).ifTrue {\n\t\t\t\tanswer.add(segment);\n\t\t\t\tsegment := []\n\t\t\t}\n\t\t};\n\t\t(segment.size > 0).ifTrue {\n\t\t\tanswer.add(segment)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "degreeToKey",
  ["self", "scale", "stepsPerOctave"],
  function (_self, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _stepsPerOctave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_scaleDegree) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _scaleDegree";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _degreeToKey_3(_scaleDegree, _scale, _stepsPerOctave);
    });
  },
  "{ :self :scale :stepsPerOctave |\n\t\tself.collect { :scaleDegree |\n\t\t\tscaleDegree.degreeToKey(scale, stepsPerOctave)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "detectIndex",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _toDo_3(1, _size_1(_self), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_aBlock_1(_at_2(_self, _index)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_index);
        });
      });
      return null;
    });
  },
  "{ :self :aBlock:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t1.toDo(self.size) { :index |\n\t\t\t\taBlock(self[index]).ifTrue {\n\t\t\t\t\tindex.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tnil\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "differentiate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _prev = 0;
    let _index = 1;
    let _answer = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _minus_2(_each, _prev));
      _prev = _each;
      return _index = _plus_2(_index, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet prev = 0;\n\t\tlet index = 1;\n\t\tlet answer = self.species.new(self.size);\n\t\tself.do { :each |\n\t\t\tanswer[index] := each - prev;\n\t\t\tprev := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "doAdjacentPairs",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toDo_3(2, _size_1(_self), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_at_2(_self, _minus_2(_i, 1)), _at_2(_self, _i));
    });
  },
  "{ :self :aBlock:/2 |\n\t\t2.toDo(self.size) { :i |\n\t\t\taBlock(self[i - 1], self[i])\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "drop",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThan_2(_count, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _dropLast_2(_self, _negated_1(_count));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _copyFromTo_3(_self, _plus_2(_count, 1), _size_1(_self));
    });
  },
  "{ :self :count |\n\t\t(count < 0).if {\n\t\t\tself.dropLast(count.negated)\n\t\t} {\n\t\t\tself.copyFromTo(count + 1, self.size)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "dropLast",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _copyFromTo_3(_self, 1, _minus_2(_size_1(_self), _count));
  },
  "{ :self :count |\n\t\tself.copyFromTo(1, self.size - count)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "extendTo",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _toAsCollect_4(1, _size, _species_1(_self), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atWrap_2(_self, _index);
    });
  },
  "{ :self :size |\n\t\t1.toAsCollect(size, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "extendToBeOfEqualSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _extendTo_2(_each, _size);
    });
  },
  "{ :self |\n\t\tlet size = self.collect(sizeForExtending:/1).max;\n\t\tself.collect { :each |\n\t\t\teach.extendTo(size)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "fill",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fillFromWith_3(_self, _upOrDownTo_2(1, _size_1(_self)), _aBlock_1);
  },
  "{ :self :aBlock:/1 |\n\t\tself.fillFromWith((1 .. self.size), aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "flop",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _multiChannelExpand_1(_self);
  },
  "{ :self |\n\t\tself.multiChannelExpand\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "hammingDistance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _min_2(_size_1(_self), _size_1(_other));
    let _count = _abs_1(_minus_2(_size_1(_self), _size_1(_other)));
    /* Statements */
    _toDo_3(1, _size, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(
        _tildeEquals_2(_at_2(_self, _index), _at_2(_other, _index)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _count = _plus_2(_count, 1);
        },
      );
    });
    return _count;
  },
  "{ :self :other |\n\t\tlet size = self.size.min(other.size);\n\t\tlet count = (self.size - other.size).abs;\n\t\t1.toDo(size) { :index |\n\t\t\t(self[index] ~= other[index]).ifTrue {\n\t\t\t\tcount := count + 1\n\t\t\t}\n\t\t};\n\t\tcount\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "hammingWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0.53836);
    return _addSine_4(_self, 1, 0.46164, _pi_1(-0.5));
  },
  "{ :self |\n\t\tself.atAllPut(0.53836);\n\t\tself.addSine(1, 0.46164, -0.5.pi)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "hanningWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0.5);
    return _addSine_4(_self, 1, 0.5, _pi_1(-0.5));
  },
  "{ :self |\n\t\tself.atAllPut(0.5);\n\t\tself.addSine(1, 0.5, -0.5.pi)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "indexInBetween",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _i = _indexOfGreaterThan_2(_self, _aNumber);
      /* Statements */
      return _ifNil_3(_i, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _size_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equals_2(_i, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _i;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _a = _at_2(_self, _minus_2(_i, 1));
          let _b = _at_2(_self, _i);
          let _div = _minus_2(_b, _a);
          /* Statements */
          return _if_3(_equals_2(_div, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _i;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _minus_2(
              _plus_2(_dividedBy_2(_minus_2(_aNumber, _a), _div), _i),
              1,
            );
          });
        });
      });
    });
  },
  "{ :self :aNumber |\n\t\tself.isEmpty.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet i = self.indexOfGreaterThan(aNumber);\n\t\t\ti.ifNil {\n\t\t\t\tself.size\n\t\t\t} {\n\t\t\t\t(i = 1).if {\n\t\t\t\t\ti\n\t\t\t\t} {\n\t\t\t\t\tlet a = self[i - 1];\n\t\t\t\t\tlet b = self[i];\n\t\t\t\t\tlet div = b - a;\n\t\t\t\t\t(div = 0).if {\n\t\t\t\t\t\ti\n\t\t\t\t\t} {\n\t\t\t\t\t\t((aNumber - a) / div) + i - 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "indexOfGreaterThan",
  ["self", "aMagnitude"],
  function (_self, _aMagnitude) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMagnitude";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _detectIndex_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _greaterThan_2(_each, _aMagnitude);
    });
  },
  "{ :self :aMagnitude |\n\t\tself.detectIndex { :each |\n\t\t\teach > aMagnitude\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _timesRepeat_2(_minus_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _default);
    });
    _atPut_3(_answer, _index, _item);
    return _answer;
  },
  "{ :self :index :item :default |\n\t\tlet answer = self.copy;\n\t\t(index - self.size).timesRepeat {\n\t\t\tanswer.add(default)\n\t\t};\n\t\tanswer[index] := item;\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "integrate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _sum = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _sum = _plus_2(_sum, _each);
      return _add_2(_answer, _sum);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tlet sum = 0;\n\t\tself.do { :each |\n\t\t\tsum := sum + each;\n\t\t\tanswer.add(sum)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "isSeries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isSeriesBy_2(_self, null);
  },
  "{ :self |\n\t\tself.isSeriesBy(nil)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "isSeriesBy",
  ["self", "step"],
  function (_self, _step) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_size_1(_self), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return true;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _valueWithReturn_1(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _doAdjacentPairs_2(_self, function (_a, _b) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _a, _b";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _diff = _minus_2(_b, _a);
          /* Statements */
          return _ifNil_3(_step, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _step = _diff;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _ifTrue_2(_tildeEquals_2(_step, _diff), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _return_1(false);
            });
          });
        });
      });
      return true;
    });
  },
  "{ :self :step |\n\t\t(self.size <= 1).if {\n\t\t\ttrue\n\t\t} {\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\tself.doAdjacentPairs { :a :b |\n\t\t\t\t\tlet diff = b - a;\n\t\t\t\t\tstep.ifNil {\n\t\t\t\t\t\tstep := diff\n\t\t\t\t\t} {\n\t\t\t\t\t\t(step ~= diff).ifTrue {\n\t\t\t\t\t\t\tfalse.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "keep",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _first_2(_self, _n);
  },
  "{ :self :n |\n\t\tself.first(n)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "keepAtMost",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_n, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _keep_2(_self, _n);
    });
  },
  "{ :self :n |\n\t\t(n > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.keep(n)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "keepLast",
  ["self", "n"],
  function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _copyFromTo_3(_self, _minus_2(_size, _n), _size);
  },
  "{ :self :n |\n\t\tlet size = self.size;\n\t\tself.copyFromTo(size - n, size)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "levenshteinDistance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _levenshteinDistance_3(_self, _other, _equals_2);
  },
  "{ :self :other |\n\t\tself.levenshteinDistance(other, =)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "levenshteinDistance",
  ["self", "other", "equalityBlock:/2"],
  function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _or_2(_isEmpty_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isEmpty_1(_other);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _size_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _matrix = _asArray_1(_upOrDownTo_2(0, _size_1(_other)));
        /* Statements */
        _toDo_3(1, _size_1(_self), function (_xIndex) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _xIndex";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Temporaries */
          let _corner = _minus_2(_xIndex, 1);
          /* Statements */
          _atPut_3(_matrix, 1, _minus_2(_xIndex, 1));
          return _toDo_3(1, _size_1(_other), function (_yIndex) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _yIndex";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Temporaries */
            let _upper = _at_2(_matrix, _plus_2(_yIndex, 1));
            /* Statements */
            _atPut_3(
              _matrix,
              _plus_2(_yIndex, 1),
              _if_3(
                _equalityBlock_2(_at_2(_self, _xIndex), _at_2(_other, _yIndex)),
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _corner;
                },
                function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    console.error(errorMessage);
                    throw Error(errorMessage);
                  }
                  /* Statements */
                  return _plus_2(
                    _min_1([_upper, _corner, _at_2(_matrix, _yIndex)]),
                    1,
                  );
                },
              ),
            );
            return _corner = _upper;
          });
        });
        return _at_2(_matrix, _plus_2(_size_1(_other), 1));
      },
    );
  },
  "{ :self :other :equalityBlock:/2 |\n\t\tself.isEmpty.or {\n\t\t\tother.isEmpty\n\t\t}.if {\n\t\t\tself.size\n\t\t} {\n\t\t\tlet matrix = [0 .. other.size];\n\t\t\t1.toDo(self.size) { :xIndex |\n\t\t\t\tlet corner = xIndex - 1;\n\t\t\t\tmatrix[1] := xIndex - 1;\n\t\t\t\t1.toDo(other.size) { :yIndex |\n\t\t\t\t\tlet upper = matrix[yIndex + 1];\n\t\t\t\t\tmatrix[yIndex + 1] := equalityBlock(self[xIndex], other[yIndex]).if {\n\t\t\t\t\t\tcorner\n\t\t\t\t\t} {\n\t\t\t\t\t\t[upper, corner, matrix[yIndex]].min + 1\n\t\t\t\t\t};\n\t\t\t\t\tcorner := upper\n\t\t\t\t}\n\t\t\t};\n\t\t\tmatrix[other.size + 1]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "mirror",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_self, _allButFirst_1(_reversed_1(_self)));
  },
  "{ :self |\n\t\tself ++ self.reversed.allButFirst\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "mirror1",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_self, _allButFirstAndLast_1(_reversed_1(_self)));
  },
  "{ :self |\n\t\tself ++ self.reversed.allButFirstAndLast\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "mirror2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_self, _reversed_1(_self));
  },
  "{ :self |\n\t\tself ++ self.reversed\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _size = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _collect_2(_upOrDownTo_2(1, _size), function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _atExtending_2(_each, _index);
      });
    });
  },
  "{ :self |\n\t\tlet size = self.collect(sizeForExtending:/1).max;\n\t\t(1 .. size).collect { :index |\n\t\t\tself.collect { :each |\n\t\t\t\teach.atExtending(index)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "normalize",
  ["self", "min", "max"],
  function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _minItem = _min_1(_self);
    let _maxItem = _max_1(_self);
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(
        _times_2(
          _dividedBy_2(_minus_2(_each, _minItem), _minus_2(_maxItem, _minItem)),
          _minus_2(_max, _min),
        ),
        _min,
      );
    });
  },
  "{ :self :min :max |\n\t\tlet minItem = self.min;\n\t\tlet maxItem = self.max;\n\t\tself.collect { :each |\n\t\t\t(each - minItem) / (maxItem - minItem) * (max - min) + min\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "normalizeSum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_self, _sum_1(_self));
  },
  "{ :self |\n\t\tself / self.sum\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThan_2(_index, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _default;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, _index);
    });
  },
  "{ :self :index :default |\n\t\t(index > self.size).if {\n\t\t\tdefault\n\t\t} {\n\t\t\tself[index]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "order",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_sortedWithIndices_1(_self), _value_1);
  },
  "{ :self |\n\t\tself.sortedWithIndices.collect(value:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "powerset",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifEmpty_3(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return [_self];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _a = _removeFirst_1(_self);
      let _s = _powerset_1(_self);
      /* Statements */
      return _plusPlus_2(
        _s,
        _collect_2(_s, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _plusPlus_2([_a], _each);
        }),
      );
    });
  },
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\t[self]\n\t\t} {\n\t\t\tlet a = self.removeFirst;\n\t\t\tlet s = self.powerset;\n\t\t\ts ++ s.collect { :each |\n\t\t\t\t[a] ++ each\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "pyramid",
  ["self", "patternType"],
  function (_self, _patternType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _patternType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _lastIndex = _size_1(_self);
    /* Statements */
    _ifTrue_2(_equals_2(_patternType, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(1, _lastIndex, function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(_answer, _copyFromTo_3(_self, 1, _index));
      });
    });
    _ifTrue_2(_equals_2(_patternType, 6), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _toDo_3(0, _minus_2(_lastIndex, 1), function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _addAll_2(
          _answer,
          _copyFromTo_3(_self, _minus_2(_lastIndex, _index), _lastIndex),
        );
      });
    });
    return _newFrom_2(_species_1(_self), _answer);
  },
  "{ :self :patternType |\n\t\tlet answer = [];\n\t\tlet lastIndex = self.size;\n\t\t(patternType = 1).ifTrue {\n\t\t\t1.toDo(lastIndex) { :index |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, index))\n\t\t\t}\n\t\t};\n\t\t(patternType = 6).ifTrue {\n\t\t\t0.toDo(lastIndex - 1) { :index |\n\t\t\t\tanswer.addAll(self.copyFromTo(lastIndex - index, lastIndex))\n\t\t\t}\n\t\t};\n\t\tself.species.newFrom(answer)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "resamp1",
  ["self", "newSize"],
  function (_self, _newSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _factor = _dividedBy_2(
      _minus_2(_size_1(_self), 1),
      _max_2(_minus_2(_newSize, 1), 1),
    );
    /* Statements */
    return _collect_2(
      _upOrDownTo_2(0, _minus_2(_newSize, 1)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _blendAt_2(_self, _plus_2(1, _times_2(_each, _factor)));
      },
    );
  },
  "{ :self :newSize |\n\t\tlet factor = (self.size - 1) / (newSize - 1).max(1);\n\t\t(0 .. newSize - 1).collect { :each |\n\t\t\tself.blendAt(1 + (each * factor))\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "scramble",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _shuffled_1(_self);
  },
  "{ :self |\n\t\tself.shuffled\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "separate",
  ["self", "aBlock:/2"],
  function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _doAdjacentPairs_2(_self, function (_a, _b) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _a, _b";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _add_2(_segment, _a);
      return _ifTrue_2(_aBlock_2(_a, _b), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _add_2(_answer, _segment);
        return _segment = [];
      });
    });
    _ifTrue_2(_notEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_segment, _last_1(_self));
    });
    _add_2(_answer, _segment);
    return _answer;
  },
  "{ :self :aBlock:/2 |\n\t\tlet answer = [];\n\t\tlet segment = [];\n\t\tself.doAdjacentPairs { :a :b |\n\t\t\tsegment.add(a);\n\t\t\taBlock(a, b).ifTrue {\n\t\t\t\tanswer.add(segment);\n\t\t\t\tsegment := []\n\t\t\t}\n\t\t};\n\t\tself.notEmpty.ifTrue {\n\t\t\tsegment.add(self.last)\n\t\t};\n\t\tanswer.add(segment);\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "shift",
  ["self", "count", "item"],
  function (_self, _count, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _item";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _fill = _Array_2(_abs_1(_count), _item);
    let _remain = _drop_2(_self, _negated_1(_count));
    /* Statements */
    return _if_3(_lessThan_2(_count, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(_remain, _fill);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(_fill, _remain);
    });
  },
  "{ :self :count :item |\n\t\tlet fill = Array(count.abs, item);\n\t\tlet remain = self.drop(count.negated);\n\t\t(count < 0).if {\n\t\t\tremain ++ fill\n\t\t} {\n\t\t\tfill ++ remain\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "similarity",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _similarity_3(_self, _other, _equals_2);
  },
  "{ :self :other |\n\t\tself.similarity(other, =)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "similarity",
  ["self", "other", "equalityBlock:/2"],
  function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maxDistance = _max_2(_size_1(_self), _size_1(_other));
    /* Statements */
    return _if_3(_greaterThan_2(_maxDistance, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _minus_2(
        1,
        _dividedBy_2(
          _levenshteinDistance_3(_self, _other, _equalityBlock_2),
          _maxDistance,
        ),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return 1;
    });
  },
  "{ :self :other :equalityBlock:/2 |\n\t\tlet maxDistance = self.size.max(other.size);\n\t\t(maxDistance > 0).if {\n\t\t\t1 - (self.levenshteinDistance(other, equalityBlock:/2) / maxDistance)\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "sineFill",
  ["self", "amplitudes", "phases"],
  function (_self, _amplitudes, _phases) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _amplitudes, _phases";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0);
    return _withIndexDo_2(_amplitudes, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _addSine_4(_self, _index, _each, _atWrap_2(_phases, _index));
    });
  },
  "{ :self :amplitudes :phases |\n\t\tself.atAllPut(0);\n\t\tamplitudes.withIndexDo { :each :index |\n\t\t\tself.addSine(index, each, phases.atWrap(index))\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "sizeForExtending",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_self);
  },
  "{ :self |\n\t\tself.size\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "slide",
  ["self", "windowLength", "stepSize"],
  function (_self, _windowLength, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowLength, _stepSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_slidingWindows_3(_self, _windowLength, _stepSize));
  },
  "{ :self :windowLength :stepSize |\n\t\tself.slidingWindows(windowLength, stepSize).concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "slidingWindows",
  ["self", "windowLength", "stepSize"],
  function (_self, _windowLength, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowLength, _stepSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(
      _thenTo_3(
        1,
        _plus_2(1, _stepSize),
        _plus_2(_minus_2(_size_1(_self), _windowLength), 1),
      ),
      function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _copyFromTo_3(
          _self,
          _index,
          _minus_2(_plus_2(_index, _windowLength), 1),
        );
      },
    );
  },
  "{ :self :windowLength :stepSize |\n\t\t(1, 1 + stepSize .. self.size - windowLength + 1).collect { :index |\n\t\t\tself.copyFromTo(index, index + windowLength - 1)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "stutter",
  ["self", "repeatCount"],
  function (_self, _repeatCount) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _repeatCount";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _duplicateEach_2(_self, _repeatCount);
  },
  "{ :self :repeatCount |\n\t\tself.duplicateEach(repeatCount)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "tableRand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _blendAt_2(_self, _nextRandomFloat_2(1, _size_1(_self)));
  },
  "{ :self |\n\t\tself.blendAt(1.nextRandomFloat(self.size))\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "waveFill",
  ["self", "aBlock:/3", "start", "end"],
  function (_self, _aBlock_3, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _aBlock_3, _start, _end";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(_greaterThan_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _index = 1;
      let _next = _start;
      let _size = _size_1(_self);
      let _step = _dividedBy_2(_minus_2(_end, _start), _size);
      /* Statements */
      return _whileTrue_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_i, _size);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _atPut_3(_self, _index, _aBlock_3(_next, _at_2(_self, _index), _index));
        _next = _plus_2(_next, _step);
        return _index = _plus_2(_index, 1);
      });
    });
  },
  "{ :self :aBlock:/3 :start :end |\n\t\t(self.size > 0).ifTrue {\n\t\t\tlet index = 1;\n\t\t\tlet next = start;\n\t\t\tlet size = self.size;\n\t\t\tlet step = (end - start) / size;\n\t\t\t{\n\t\t\t\ti <= size\n\t\t\t}.whileTrue {\n\t\t\t\tself[index] := aBlock(next, self[index], index);\n\t\t\t\tnext := next + step;\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "welchWindow",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _atAllPut_2(_self, 0);
    return _addSine_4(_self, 0.5, 1, 0);
  },
  "{ :self |\n\t\tself.atAllPut(0);\n\t\tself.addSine(0.5, 1, 0)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "withWrappingCollectOrAdaptTo",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _and_2(_isCollection_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isSequenceable_1(_anObject);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _withWrappingCollect_3(_self, _anObject, _aBlock_2);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _adaptToCollectionAndApply_3(_anObject, _self, _aBlock_2);
      },
    );
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isCollection.and {\n\t\t\tanObject.isSequenceable\n\t\t}.if {\n\t\t\tself.withWrappingCollect(anObject, aBlock:/2)\n\t\t} {\n\t\t\tanObject.adaptToCollectionAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "wrapExtend",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(1, _size, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _atWrap_2(_self, _index));
    });
    return _answer;
  },
  "{ :self :size |\n\t\tlet answer = [];\n\t\t1.toDo(size) { :index |\n\t\t\tanswer.add(self.atWrap(index))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "plus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _plus_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, +) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "minus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _minus_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, -) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "times",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _times_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, *) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "dividedBy",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _dividedBy_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, /) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "lessThan",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _lessThan_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, <) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "greaterThan",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _greaterThan_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, >) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "raisedTo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _raisedTo_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, ^) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "modulo",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _aNumber, _modulo_2);
  },
  "{ :self :aNumber | withWrappingCollectOrAdaptTo(self, aNumber, %) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _bitAnd_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, bitAnd:/2) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _bitOr_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, bitOr:/2) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _min_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, min:/2) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _max_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, max:/2) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "roundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _roundTo_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, roundTo:/2) }",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "ScLang",
  "truncateTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withWrappingCollectOrAdaptTo_3(_self, _anObject, _truncateTo_2);
  },
  "{ :self :anObject | self.withWrappingCollectOrAdaptTo(anObject, truncateTo:/2) }",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "ScLang",
  "kr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _kr_1);
  },
  "{ :self |\n\t\tself.collect(kr:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    let _size = _max_1(_collect_2(_values, _sizeForExtending_1));
    let _places = _collect_2(_multiChannelExpand_1(_values), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withIndexCollect_2(_each, function (_item, _index) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _item, _index";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _minusGreaterThan_2(_at_2(_keys, _index), _item);
      });
    });
    /* Statements */
    return _collect_2(_places, _asRecord_1);
  },
  "{ :self |\n\t\tlet keys = self.keys;\n\t\tlet values = self.values;\n\t\tlet size = values.collect(sizeForExtending:/1).max;\n\t\tlet places = values.multiChannelExpand.collect { :each |\n\t\t\teach.withIndexCollect { :item :index |\n\t\t\t\tkeys[index] -> item\n\t\t\t}\n\t\t};\n\t\tplaces.collect(asRecord:/1)\n\t}",
);

sl.addMethod(
  "Array",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return sc.clump(_self, _groupSize);
  },
  "{ :self :groupSize |\n\t\t<primitive: return sc.clump(_self, _groupSize);>\n\t}",
);

sl.addMethod(
  "Interval",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(_times_2(_self, _mul), _add);
  },
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "ScLang",
  "degreeToKey",
  ["scaleDegree", "scale", "stepsPerOctave"],
  function (_scaleDegree, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _scaleDegree, _scale, _stepsPerOctave";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _k = _size_1(_scale);
    let _d = _rounded_1(_scaleDegree);
    let _a = _times_2(
      _times_2(_minus_2(_scaleDegree, _d), 10),
      _dividedBy_2(_stepsPerOctave, 12),
    );
    /* Statements */
    return _plus_2(
      _plus_2(
        _times_2(_stepsPerOctave, _dividedByDividedBy_2(_d, _k)),
        _at_2(_scale, _plus_2(_modulo_2(_d, _k), 1)),
      ),
      _a,
    );
  },
  "{ :scaleDegree :scale :stepsPerOctave |\n\t\tlet k = scale.size;\n\t\tlet d = scaleDegree.rounded;\n\t\tlet a = (scaleDegree - d) * 10 * (stepsPerOctave / 12);\n\t\t(stepsPerOctave * (d // k)) + scale[d % k + 1] + a\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "ScLang",
  "geom",
  ["self", "start", "grow"],
  function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _geometricSeries_3(_self, _start, _grow);
  },
  "{ :self :start :grow |\n\t\tself.geometricSeries(start, grow)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "ScLang",
  "SoftClip",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_lessThanEquals_2(_abs_1(_self), 0.5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _dividedBy_2(_minus_2(_abs_1(_self), 0.25), _self);
    });
  },
  "{ :self |\n\t\t(self.abs <= 0.5).if {\n\t\t\tself\n\t\t} {\n\t\t\t(self.abs - 0.25) / self\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "ScLang",
  "lessThanGreaterThan",
  ["self:/1", "aBlock:/1"],
  function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return (function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_1(_aBlock_1(_x));
    });
  },
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :x |\n\t\t\tself(aBlock(x))\n\t\t}\n\t}",
);

sl.addMethod(
  "Block",
  "ScLang",
  "block",
  ["self:/1"],
  function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self_1(_return_1);
    });
  },
  "{ :self:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself(return:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "ScLang",
  "plus",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_plusPlus_2(_self, " "), _aString);
  },
  "{ :self :aString |\n\t\tself ++ ' ' ++ aString\n\t}",
);

sl.addMethod(
  "String",
  "ScLang",
  "plusPlusQuery",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plusPlus_2(_self, _value_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.ifNil {\n\t\t\tself\n\t\t} {\n\t\t\tself ++ anObject.value\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "ScLang",
  "plusDividedByPlus",
  ["self", "aString"],
  function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_plusPlus_2(_self, "/"), _aString);
  },
  "{ :self :aString |\n\t\tself ++ '/' ++ aString\n\t}",
);

sl.addMethod(
  "String",
  "ScLang",
  "ascii",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asciiByteArray_1(_self);
  },
  "{ :self |\n\t\tself.asciiByteArray\n\t}",
);
