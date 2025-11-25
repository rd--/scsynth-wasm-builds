sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "AmpDb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _AmpDb_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(AmpDb:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "atExtending",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "atExtending: not a sequence");
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.error('atExtending: not a sequence')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "DbAmp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _DbAmp_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(DbAmp:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "extendTo",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "extendTo: not a sequence");
  }, ["self", "size"]),
  "{ :self :size |\n\t\tself.error('extendTo: not a sequence')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "linLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  sl.annotateFunction(function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _linLin_5(_each, _inMin, _inMax, _outMin, _outMax);
      }, ["each"]),
    );
  }, ["self", "inMin", "inMax", "outMin", "outMax"]),
  "{ :self :inMin :inMax :outMin :outMax |\n\t\tself.collect { :each |\n\t\t\teach.linLin(inMin, inMax, outMin, outMax)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "MidiCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _MidiCps_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(MidiCps:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "powersetBitwise",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_bitShift_2(1, _size_1(_self)), 1);
    /* Statements */
    return _toCollect_3(
      0,
      _k,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = 0;
        /* Statements */
        return _select_2(
          _self,
          sl.annotateFunction(function (_elem) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _elem";
              throw new Error(errorMessage);
            } /* Statements */
            _index = _plusSign_2(_index, 1);
            return _equalsSign_2(_bitAt_2(_each, _index), 1);
          }, ["elem"]),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = 1.bitShift(self.size) - 1;\n\t\t0.toCollect(k) { :each |\n\t\t\tlet index = 0;\n\t\t\tself.select { :elem |\n\t\t\t\tindex := index + 1;\n\t\t\t\teach.bitAt(index) = 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ScLang",
  "sizeForExtending",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _error_2(_self, "sizeForExtending: not a sequence");
  }, ["self"]),
  "{ :self |\n\t\tself.error('sizeForExtending: not a sequence')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Magnitude",
  "ScLang",
  "exclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSign_2(_lo, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, _hi);
      }, []),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlo < self & {\n\t\t\tself < hi\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Magnitude",
  "ScLang",
  "inclusivelyBetweenAnd",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_lo, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_self, _hi);
      }, []),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlo <= self & {\n\t\t\tself <= hi\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "ampComp",
  ["freq", "root", "exp"],
  sl.annotateFunction(function (_freq, _root, _exp) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _freq, _root, _exp";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_solidus_2(_root, _freq), _exp);
  }, ["freq", "root", "exp"]),
  "{ :freq :root :exp |\n\t\t(root / freq) ^ exp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "AmpDb",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_log10_1(_self), 20);
  }, ["self"]),
  "{ :self |\n\t\tself.log10 * 20\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CentsRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _MidiRatio_1(_solidus_2(_self, 100));
  }, ["self"]),
  "{ :self |\n\t\t(self / 100).MidiRatio\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CpsMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_log2_1(_solidus_2(_self, 440)), 12), 69);
  }, ["self"]),
  "{ :self |\n\t\t(self / 440).log2 * 12 + 69\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "CpsOct",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_log2_1(_solidus_2(_self, 440)), 4.75);
  }, ["self"]),
  "{ :self |\n\t\t(self / 440).log2 + 4.75\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "curveLin",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_self, _inMin),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _outMin;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _greaterThanSignEqualsSign_2(_self, _inMax),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _outMax;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _lessThanSign_2(_abs_1(_curve), 0.001),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    _asterisk_2(
                      _solidus_2(
                        _hyphenMinus_2(_self, _inMin),
                        _hyphenMinus_2(_inMax, _inMin),
                      ),
                      _hyphenMinus_2(_outMax, _outMin),
                    ),
                    _outMin,
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _grow = _exp_1(_curve);
                  let _a = _solidus_2(
                    _hyphenMinus_2(_inMax, _inMin),
                    _hyphenMinus_2(1.0, _grow),
                  );
                  let _b = _plusSign_2(_inMin, _a);
                  /* Statements */
                  return _plusSign_2(
                    _solidus_2(
                      _asterisk_2(
                        _log_1(_solidus_2(_hyphenMinus_2(_b, _self), _a)),
                        _hyphenMinus_2(_outMax, _outMin),
                      ),
                      _curve,
                    ),
                    _outMin,
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(curve.abs < 0.001).if {\n\t\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t\t} {\n\t\t\t\t\tlet grow = curve.exp;\n\t\t\t\t\tlet a = inMax - inMin / (1.0 - grow);\n\t\t\t\t\tlet b = inMin + a;\n\t\t\t\t\t((b - self) / a).log * (outMax - outMin) / curve + outMin\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "DbAmp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(10, _asterisk_2(_self, 0.05));
  }, ["self"]),
  "{ :self |\n\t\t10 ^ (self * 0.05)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "DifSqr",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _asterisk_2(_self, _self),
      _asterisk_2(_aNumber, _aNumber),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self * self) - (aNumber * aNumber)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Distort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _plusSign_2(1, _abs_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself / (1 + self.abs)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "expExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  sl.annotateFunction(function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _inMin),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMin;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_self, _inMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _outMax;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _circumflexAccent_2(
                _solidus_2(_outMax, _outMin),
                _solidus_2(
                  _log_1(_solidus_2(_self, _inMin)),
                  _log_1(_solidus_2(_inMax, _inMin)),
                ),
              ),
              _outMin,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "inMin", "inMax", "outMin", "outMax"]),
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(outMax / outMin) ^ ((self / inMin).log / (inMax / inMin).log) * outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "expLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  sl.annotateFunction(function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _inMin),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMin;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_self, _inMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _outMax;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _asterisk_2(
                _solidus_2(
                  _log_1(_solidus_2(_self, _inMin)),
                  _log_1(_solidus_2(_inMax, _inMin)),
                ),
                _hyphenMinus_2(_outMax, _outMin),
              ),
              _outMin,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "inMin", "inMax", "outMin", "outMax"]),
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(self / inMin).log / (inMax / inMin).log * (outMax - outMin) + outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "foldOnce",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_self, _hi),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_plusSign_2(_hi, _hi), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, _lo),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_plusSign_2(_lo, _lo), _self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_self, _hi),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lo;
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
      }, []),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\t(self >= hi).if {\n\t\t\thi + hi - self\n\t\t} {\n\t\t\t(self < lo).if {\n\t\t\t\tlo + lo - self\n\t\t\t} {\n\t\t\t\t(self = hi).if {\n\t\t\t\t\tlo\n\t\t\t\t} {\n\t\t\t\t\tself\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "fold",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _greaterThanSignEqualsSign_2(_self, _lo),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_self, _hi);
        }, []),
      ),
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
        } /* Temporaries */
        let _x = _hyphenMinus_2(_self, _lo);
        let _range = _hyphenMinus_2(_hi, _lo);
        let _twiceRange = _plusSign_2(_range, _range);
        let _c = _hyphenMinus_2(
          _x,
          _asterisk_2(_twiceRange, _floor_1(_solidus_2(_x, _twiceRange))),
        );
        /* Statements */
        _ifTrue_2(
          _greaterThanSignEqualsSign_2(_c, _range),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _hyphenMinus_2(_twiceRange, _c);
          }, []),
        );
        return _plusSign_2(_c, _lo);
      }, []),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\t(self >= lo & {\n\t\t\tself < hi\n\t\t}).if {\n\t\t\tself\n\t\t} {\n\t\t\tlet x = self - lo;\n\t\t\tlet range = hi - lo;\n\t\t\tlet twiceRange = range + range;\n\t\t\tlet c = x - (twiceRange * (x / twiceRange).floor);\n\t\t\t(c >= range).ifTrue {\n\t\t\t\tc := twiceRange - c\n\t\t\t};\n\t\t\tc + lo\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Hypotenuse",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(_asterisk_2(_self, _self), _asterisk_2(_aNumber, _aNumber)),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t((self * self) + (aNumber * aNumber)).sqrt\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "HypotenuseApproximate",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_abs_1(_self), _abs_1(_aNumber)),
      _asterisk_2(
        _hyphenMinus_2(_sqrt_1(2), 1),
        _min_2(_abs_1(_self), _abs_1(_aNumber)),
      ),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.abs + aNumber.abs - ((2.sqrt - 1) * self.abs.min(aNumber.abs))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linCurve",
  ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  sl.annotateFunction(
    function (_self, _inMin, _inMax, _outMin, _outMax, _curve) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _self, _inMin, _inMax, _outMin, _outMax, _curve";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_self, _inMin),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _outMin;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _greaterThanSignEqualsSign_2(_self, _inMax),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _outMax;
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _lessThanSign_2(_abs_1(_curve), 0.001),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    _asterisk_2(
                      _solidus_2(
                        _hyphenMinus_2(_self, _inMin),
                        _hyphenMinus_2(_inMax, _inMin),
                      ),
                      _hyphenMinus_2(_outMax, _outMin),
                    ),
                    _outMin,
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let _grow = _exp_1(_curve);
                  let _a = _solidus_2(
                    _hyphenMinus_2(_outMax, _outMin),
                    _hyphenMinus_2(1.0, _grow),
                  );
                  let _b = _plusSign_2(_outMin, _a);
                  let _scaled = _solidus_2(
                    _hyphenMinus_2(_self, _inMin),
                    _hyphenMinus_2(_inMax, _inMin),
                  );
                  /* Statements */
                  return _hyphenMinus_2(
                    _b,
                    _asterisk_2(_a, _circumflexAccent_2(_grow, _scaled)),
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    },
    ["self", "inMin", "inMax", "outMin", "outMax", "curve"],
  ),
  "{ :self :inMin :inMax :outMin :outMax :curve |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(curve.abs < 0.001).if {\n\t\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t\t} {\n\t\t\t\t\tlet grow = curve.exp;\n\t\t\t\t\tlet a = outMax - outMin / (1.0 - grow);\n\t\t\t\t\tlet b = outMin + a;\n\t\t\t\t\tlet scaled = (self - inMin) / (inMax - inMin);\n\t\t\t\t\tb - (a * (grow ^ scaled))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linExp",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  sl.annotateFunction(function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _inMin),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMin;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_self, _inMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _outMax;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _circumflexAccent_2(
                _solidus_2(_outMax, _outMin),
                _solidus_2(
                  _hyphenMinus_2(_self, _inMin),
                  _hyphenMinus_2(_inMax, _inMin),
                ),
              ),
              _outMin,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "inMin", "inMax", "outMin", "outMax"]),
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(outMax / outMin) ^ ((self - inMin) / (inMax - inMin)) * outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linExpFromTo",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _lo,
      _exp_1(_asterisk_2(_log_1(_solidus_2(_hi, _lo)), _self)),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tlo * ((hi / lo).log * self).exp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "linLin",
  ["self", "inMin", "inMax", "outMin", "outMax"],
  sl.annotateFunction(function (_self, _inMin, _inMax, _outMin, _outMax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _inMin, _inMax, _outMin, _outMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, _inMin),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _outMin;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSignEqualsSign_2(_self, _inMax),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _outMax;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _asterisk_2(
                _solidus_2(
                  _hyphenMinus_2(_self, _inMin),
                  _hyphenMinus_2(_inMax, _inMin),
                ),
                _hyphenMinus_2(_outMax, _outMin),
              ),
              _outMin,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "inMin", "inMax", "outMin", "outMax"]),
  "{ :self :inMin :inMax :outMin :outMax |\n\t\t(self <= inMin).if {\n\t\t\toutMin\n\t\t} {\n\t\t\t(self >= inMax).if {\n\t\t\t\toutMax\n\t\t\t} {\n\t\t\t\t(self - inMin) / (inMax - inMin) * (outMax - outMin) + outMin\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MidiCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      440,
      _circumflexAccent_2(2, _solidus_2(_hyphenMinus_2(_self, 69), 12)),
    );
  }, ["self"]),
  "{ :self |\n\t\t440 * (2 ^ ((self - 69) / 12))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MidiRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _solidus_2(_self, 12));
  }, ["self"]),
  "{ :self |\n\t\t2 ^ (self / 12)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  sl.annotateFunction(function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  }, ["self", "mul", "add"]),
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(0, _self);
  }, ["self"]),
  "{ :self |\n\t\t0 - self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "nextPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _nextPowerOf_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself.nextPowerOf(2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "nextPowerOf",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _exponent = _ceiling_1(_log_2(_self, _base));
    /* Statements */
    return _circumflexAccent_2(_base, _exponent);
  }, ["self", "base"]),
  "{ :self :base |\n\t\tlet exponent = self.log(base).ceiling;\n\t\tbase ^ exponent\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "OctCps",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      440,
      _circumflexAccent_2(2, _hyphenMinus_2(_self, 4.75)),
    );
  }, ["self"]),
  "{ :self |\n\t\t440 * (2 ^ (self - 4.75))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "previousPowerOf",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _base,
      _hyphenMinus_2(_ceiling_1(_log_2(_self, _base)), 1),
    );
  }, ["self", "base"]),
  "{ :self :base |\n\t\tbase ^ (self.log(base).ceiling - 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "RatioCents",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_RatioMidi_1(_self), 100);
  }, ["self"]),
  "{ :self |\n\t\tself.RatioMidi * 100\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "RatioMidi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(12, _log2_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t12 * self.log2\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _self);
  }, ["self"]),
  "{ :self |\n\t\t1 / self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "ScLang",
  "Square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ScLang",
  "asBinaryDigits",
  ["self", "numDigits"],
  sl.annotateFunction(function (_self, _numDigits) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _numDigits";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_numDigits, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirst_2(_answer, _bitAnd_2(_bitShiftRight_2(_self, _i), 1));
      }, ["i"]),
    );
    return _answer;
  }, ["self", "numDigits"]),
  "{ :self :numDigits |\n\t\tlet answer = [];\n\t\t0.toDo(numDigits - 1) { :i |\n\t\t\tanswer.addFirst(self.bitShiftRight(i).bitAnd(1))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "exclamationMarkPlusSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sum_1(_exclamationMark_2(_self, _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(self ! anInteger).Sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "exclamationMarkAsterisk",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_exclamationMark_2(_self, _anInteger));
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t(self ! anInteger).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "atExtending",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "extendTo",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_2(_size, _self);
  }, ["self", "size"]),
  "{ :self :size |\n\t\tList(size, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  sl.annotateFunction(function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_index, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _item;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _instill_4(_asCollection_1(_self), _index, _item, _default);
      }, []),
    );
  }, ["self", "index", "item", "default"]),
  "{ :self :index :item :default |\n\t\t(index = 1).if {\n\t\t\titem\n\t\t} {\n\t\t\tself.asCollection.instill(index, item, default)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  sl.annotateFunction(function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_index, 1),
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
        return _default;
      }, []),
    );
  }, ["self", "index", "default"]),
  "{ :self :index :default |\n\t\t(index = 1).if {\n\t\t\tself\n\t\t} {\n\t\t\tdefault\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "ScLang",
  "sizeForExtending",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asRandomTable",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _if_3(
      _equalsSign_2(_size, _size_1(_self)),
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
        return _resample_2(_self, _size);
      }, []),
    );
    let _b = _normalizeRange_2(_integrate_1(_a), [1, _size]);
    /* Statements */
    return _toCollect_3(
      1,
      _size,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(_indexOfInBetween_2(_b, _index), 1),
          _size,
        );
      }, ["index"]),
    );
  }, ["self", "size"]),
  "{ :self :size |\n\t\tlet a = (size = self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.resample(size)\n\t\t};\n\t\tlet b = a.integrate.normalizeRange([1 size]);\n\t\t1.toCollect(size) { :index |\n\t\t\tb.indexOfInBetween(index) - 1 / size\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asRandomTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asRandomTable_2(_self, _size_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asRandomTable(self.size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "asWavetable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _asterisk_2(_size_1(_self), 2);
    let _answer = _ofSize_2(_species_1(_self), _size);
    let _index = 1;
    /* Statements */
    _toDo_3(
      1,
      _size_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e1 = _at_2(_self, _each);
        let _e2 = _if_3(
          _equalsSign_2(_each, _size_1(_self)),
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
            return _at_2(_self, _plusSign_2(_each, 1));
          }, []),
        );
        /* Statements */
        _atPut_3(_answer, _index, _hyphenMinus_2(_asterisk_2(2, _e1), _e2));
        _atPut_3(_answer, _plusSign_2(_index, 1), _hyphenMinus_2(_e2, _e1));
        return _index = _plusSign_2(_index, 2);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet size = self.size * 2;\n\t\tlet answer = self.species.ofSize(size);\n\t\tlet index = 1;\n\t\t1.toDo(self.size) { :each |\n\t\t\tlet e1 = self[each];\n\t\t\tlet e2 = (each = self.size).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tself[each + 1]\n\t\t\t};\n\t\t\tanswer[index] := 2 * e1 - e2;\n\t\t\tanswer[index + 1] := e2 - e1;\n\t\t\tindex := index + 2\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atAllBlend",
  ["self", "indices"],
  sl.annotateFunction(function (_self, _indices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _indices";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _indices,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atBlend_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "indices"]),
  "{ :self :indices |\n\t\tindices.collect { :each |\n\t\t\tself.atBlend(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atBlend",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indexMin = _hyphenMinus_2(_roundUp_1(_index), 1);
    /* Statements */
    return _blend_3(
      _atPin_2(_self, _indexMin),
      _atPin_2(_self, _plusSign_2(_indexMin, 1)),
      _abs_1(_hyphenMinus_2(_index, _indexMin)),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tlet indexMin = index.roundUp - 1;\n\t\tself.atPin(indexMin).blend(\n\t\t\tself.atPin(indexMin + 1),\n\t\t\t(index - indexMin).abs\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "atExtending",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atWrap_2(_self, _index);
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atWrap(index)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  sl.annotateFunction(function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_segment, _each);
        return _ifTrue_2(
          _greaterThanSignEqualsSign_2(_size_1(_segment), _groupSize),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _segment);
            return _segment = [];
          }, []),
        );
      }, ["each"]),
    );
    _ifTrue_2(
      _greaterThanSign_2(_size_1(_segment), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _segment);
      }, []),
    );
    return _answer;
  }, ["self", "groupSize"]),
  "{ :self :groupSize |\n\t\tlet answer = [];\n\t\tlet segment = [];\n\t\tself.do { :each |\n\t\t\tsegment.add(each);\n\t\t\t(segment.size >= groupSize).ifTrue {\n\t\t\t\tanswer.add(segment);\n\t\t\t\tsegment := []\n\t\t\t}\n\t\t};\n\t\t(segment.size > 0).ifTrue {\n\t\t\tanswer.add(segment)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "degreeToKey",
  ["self", "scale", "stepsPerOctave"],
  sl.annotateFunction(function (_self, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _stepsPerOctave";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_scaleDegree) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _scaleDegree";
          throw new Error(errorMessage);
        } /* Statements */
        return _degreeToKey_3(_scaleDegree, _scale, _stepsPerOctave);
      }, ["scaleDegree"]),
    );
  }, ["self", "scale", "stepsPerOctave"]),
  "{ :self :scale :stepsPerOctave |\n\t\tself.collect { :scaleDegree |\n\t\t\tscaleDegree.degreeToKey(scale, stepsPerOctave)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "differentiate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _prev = 0;
    let _index = 1;
    let _answer = _new_2(_species_1(_self), _size_1(_self));
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_answer, _index, _hyphenMinus_2(_each, _prev));
        _prev = _each;
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet prev = 0;\n\t\tlet index = 1;\n\t\tlet answer = self.species.new(self.size);\n\t\tself.do { :each |\n\t\t\tanswer[index] := each - prev;\n\t\t\tprev := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "extendTo",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _toAsCollect_4(
      1,
      _size,
      _species_1(_self),
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _atWrap_2(_self, _index);
      }, ["index"]),
    );
  }, ["self", "size"]),
  "{ :self :size |\n\t\t1.toAsCollect(size, self.species) { :index |\n\t\t\tself.atWrap(index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "extendToBeOfEqualSize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _extendTo_2(_each, _size);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet size = self.collect(sizeForExtending:/1).max;\n\t\tself.collect { :each |\n\t\t\teach.extendTo(size)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "flop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _multiChannelExpand_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.multiChannelExpand\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "indexOfInBetween",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _binaryDetectIndex_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_each, _aNumber);
          }, ["each"]),
        );
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_i, _size_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _size_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_i, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _a = _at_2(_self, _hyphenMinus_2(_i, 1));
                let _b = _at_2(_self, _i);
                let _c = _hyphenMinus_2(_b, _a);
                /* Statements */
                return _if_3(
                  _equalsSign_2(_c, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _i;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      _plusSign_2(
                        _solidus_2(_hyphenMinus_2(_aNumber, _a), _c),
                        _i,
                      ),
                      1,
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isEmpty.if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet i = self.binaryDetectIndex { :each |\n\t\t\t\teach > aNumber\n\t\t\t};\n\t\t\t(i > self.size).if {\n\t\t\t\tself.size\n\t\t\t} {\n\t\t\t\t(i = 1).if {\n\t\t\t\t\ti\n\t\t\t\t} {\n\t\t\t\t\tlet a = self[i - 1];\n\t\t\t\t\tlet b = self[i];\n\t\t\t\t\tlet c = b - a;\n\t\t\t\t\t(c = 0).if {\n\t\t\t\t\t\ti\n\t\t\t\t\t} {\n\t\t\t\t\t\t((aNumber - a) / c) + i - 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "instill",
  ["self", "index", "item", "default"],
  sl.annotateFunction(function (_self, _index, _item, _default) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _index, _item, _default";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_index, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _default);
      }, []),
    );
    _atPut_3(_answer, _index, _item);
    return _answer;
  }, ["self", "index", "item", "default"]),
  "{ :self :index :item :default |\n\t\tlet answer = self.copy;\n\t\t(index - self.size).timesRepeat {\n\t\t\tanswer.add(default)\n\t\t};\n\t\tanswer[index] := item;\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "integrate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _sum = 0;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _sum = _plusSign_2(_sum, _each);
        return _add_2(_answer, _sum);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tlet sum = 0;\n\t\tself.do { :each |\n\t\t\tsum := sum + each;\n\t\t\tanswer.add(sum)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keep",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2(_self, _n);
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.first(n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keepAtMost",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_n, _size_1(_self)),
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
        return _keep_2(_self, _n);
      }, []),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\t(n > self.size).if {\n\t\t\tself\n\t\t} {\n\t\t\tself.keep(n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "keepLast",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _size = _size_1(_self);
    /* Statements */
    return _copyFromTo_3(_self, _hyphenMinus_2(_size, _n), _size);
  }, ["self", "n"]),
  "{ :self :n |\n\t\tlet size = self.size;\n\t\tself.copyFromTo(size - n, size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _max_1(_collect_2(_self, _sizeForExtending_1));
    /* Statements */
    return _toCollect_3(
      1,
      _k,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _atExtending_2(_each, _index);
          }, ["each"]),
        );
      }, ["index"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.collect(sizeForExtending:/1).max;\n\t\t1.toCollect(k) { :index |\n\t\t\tself.collect { :each |\n\t\t\t\teach.atExtending(index)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "obtain",
  ["self", "index", "default"],
  sl.annotateFunction(function (_self, _index, _default) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _default";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_index, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _default;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _index);
      }, []),
    );
  }, ["self", "index", "default"]),
  "{ :self :index :default |\n\t\t(index > self.size).if {\n\t\t\tdefault\n\t\t} {\n\t\t\tself[index]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "pyramid",
  ["self", "patternType"],
  sl.annotateFunction(function (_self, _patternType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _patternType";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _lastIndex = _size_1(_self);
    /* Statements */
    _ifTrue_2(
      _equalsSign_2(_patternType, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _lastIndex,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _downToDo_3(
          _lastIndex,
          1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _downToDo_3(
          _lastIndex,
          1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _lastIndex,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _lastIndex,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
        return _toByDo_4(
          _hyphenMinus_2(_lastIndex, 1),
          1,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 6),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toByDo_4(
          _lastIndex,
          1,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
          }, ["i"]),
        );
        return _toDo_3(
          2,
          _lastIndex,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, _i, _lastIndex));
          }, ["i"]),
        );
      }, []),
    );
    _ifTrue_2(
      _equalsSign_2(_patternType, 7),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _toByDo_4(
          _lastIndex,
          1,
          -1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
        return _toDo_3(
          2,
          _lastIndex,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(_answer, _copyFromTo_3(_self, 1, _i));
          }, ["i"]),
        );
      }, []),
    );
    return _newFrom_2(_species_1(_self), _answer);
  }, ["self", "patternType"]),
  "{ :self :patternType |\n\t\tlet answer = [];\n\t\tlet lastIndex = self.size;\n\t\t(patternType = 1).ifTrue {\n\t\t\t1.toDo(lastIndex) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t}\n\t\t};\n\t\t(patternType = 2).ifTrue {\n\t\t\tlastIndex.downToDo(1) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(i, lastIndex))\n\t\t\t}\n\t\t};\n\t\t(patternType = 3).ifTrue {\n\t\t\tlastIndex.downToDo(1) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t}\n\t\t};\n\t\t(patternType = 4).ifTrue {\n\t\t\t1.toDo(lastIndex) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(i, lastIndex))\n\t\t\t}\n\t\t};\n\t\t(patternType = 5).ifTrue {\n\t\t\t1.toDo(lastIndex) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t};\n\t\t\t(lastIndex - 1).toByDo(1, -1) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t}\n\t\t};\n\t\t(patternType = 6).ifTrue {\n\t\t\tlastIndex.toByDo(1, -1) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(i, lastIndex))\n\t\t\t};\n\t\t\t2.toDo(lastIndex) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(i, lastIndex))\n\t\t\t}\n\t\t};\n\t\t(patternType = 7).ifTrue {\n\t\t\tlastIndex.toByDo(1, -1) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t};\n\t\t\t2.toDo(lastIndex) { :i |\n\t\t\t\tanswer.addAll(self.copyFromTo(1, i))\n\t\t\t}\n\t\t};\n\t\tself.species.newFrom(answer)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "scramble",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _shuffled_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.shuffled\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "separate",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _segment = [];
    /* Statements */
    _adjacentPairsDo_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_segment, _a);
        return _ifTrue_2(
          _aBlock_2(_a, _b),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _segment);
            return _segment = [];
          }, []),
        );
      }, ["a", "b"]),
    );
    _ifTrue_2(
      _isNotEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_segment, _last_1(_self));
      }, []),
    );
    _add_2(_answer, _segment);
    return _answer;
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet answer = [];\n\t\tlet segment = [];\n\t\tself.adjacentPairsDo { :a :b |\n\t\t\tsegment.add(a);\n\t\t\taBlock(a, b).ifTrue {\n\t\t\t\tanswer.add(segment);\n\t\t\t\tsegment := []\n\t\t\t}\n\t\t};\n\t\tself.isNotEmpty.ifTrue {\n\t\t\tsegment.add(self.last)\n\t\t};\n\t\tanswer.add(segment);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "shift",
  ["self", "count", "item"],
  sl.annotateFunction(function (_self, _count, _item) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _item";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fill = _List_2(_abs_1(_count), _item);
    let _remain = _drop_2(_self, _negate_1(_count));
    /* Statements */
    return _if_3(
      _isNegative_1(_count),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_remain, _fill);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(_fill, _remain);
      }, []),
    );
  }, ["self", "count", "item"]),
  "{ :self :count :item |\n\t\tlet fill = List(count.abs, item);\n\t\tlet remain = self.drop(count.negate);\n\t\tcount.isNegative.if {\n\t\t\tremain ++ fill\n\t\t} {\n\t\t\tfill ++ remain\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "similarity",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Statements */
    return _similarity_3(_self, _other, _equalsSign_2);
  }, ["self", "other"]),
  "{ :self :other |\n\t\tself.similarity(other, =)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "similarity",
  ["self", "other", "equalityBlock:/2"],
  sl.annotateFunction(function (_self, _other, _equalityBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _other, _equalityBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxDistance = _max_2(_size_1(_self), _size_1(_other));
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_maxDistance, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          1,
          _solidus_2(
            _levenshteinDistance_3(_self, _other, _equalityBlock_2),
            _maxDistance,
          ),
        );
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
  }, ["self", "other", "equalityBlock:/2"]),
  "{ :self :other :equalityBlock:/2 |\n\t\tlet maxDistance = self.size.max(other.size);\n\t\t(maxDistance > 0).if {\n\t\t\t1 - (self.levenshteinDistance(other, equalityBlock:/2) / maxDistance)\n\t\t} {\n\t\t\t1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "sizeForExtending",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.size\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "slide",
  ["self", "windowSize", "stepSize"],
  sl.annotateFunction(function (_self, _windowSize, _stepSize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _windowSize, _stepSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _catenate_1(_partition_3(_self, _windowSize, _stepSize));
  }, ["self", "windowSize", "stepSize"]),
  "{ :self :windowSize :stepSize |\n\t\tself.partition(windowSize, stepSize).catenate\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "stutter",
  ["self", "repeatCount"],
  sl.annotateFunction(function (_self, _repeatCount) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _repeatCount";
      throw new Error(errorMessage);
    } /* Statements */
    return _replicate_2(_repeatCount, _self);
  }, ["self", "repeatCount"]),
  "{ :self :repeatCount |\n\t\trepeatCount.replicate(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "tableRand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atBlend_2(_self, _randomReal_3(_system, [1, _size_1(_self)], []));
  }, ["self"]),
  "{ :self |\n\t\tself.atBlend(\n\t\t\tsystem.randomReal(\n\t\t\t\t[1, self.size],\n\t\t\t\t[]\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "waveFill",
  ["self", "aBlock:/3", "start", "end"],
  sl.annotateFunction(function (_self, _aBlock_3, _start, _end) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _aBlock_3, _start, _end";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifTrue_2(
      _greaterThanSign_2(_size_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = 1;
        let _next = _start;
        let _size = _size_1(_self);
        let _step = _solidus_2(_hyphenMinus_2(_end, _start), _size);
        /* Statements */
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_i, _size);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(
              _self,
              _index,
              _aBlock_3(_next, _at_2(_self, _index), _index),
            );
            _next = _plusSign_2(_next, _step);
            return _index = _plusSign_2(_index, 1);
          }, []),
        );
      }, []),
    );
  }, ["self", "aBlock:/3", "start", "end"]),
  "{ :self :aBlock:/3 :start :end |\n\t\t(self.size > 0).ifTrue {\n\t\t\tlet index = 1;\n\t\t\tlet next = start;\n\t\t\tlet size = self.size;\n\t\t\tlet step = (end - start) / size;\n\t\t\t{\n\t\t\t\ti <= size\n\t\t\t}.whileTrue {\n\t\t\t\tself[index] := aBlock(next, self[index], index);\n\t\t\t\tnext := next + step;\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "wrapExtend",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _size,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _atWrap_2(_self, _index));
      }, ["index"]),
    );
    return _answer;
  }, ["self", "size"]),
  "{ :self :size |\n\t\tlet answer = [];\n\t\t1.toDo(size) { :index |\n\t\t\tanswer.add(self.atWrap(index))\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScLang",
  "kr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _kr_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(kr:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScLang",
  "multiChannelExpand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _keys = _keys_1(_self);
    let _values = _values_1(_self);
    let _size = _max_1(_collect_2(_values, _sizeForExtending_1));
    let _places = _collect_2(
      _multiChannelExpand_1(_values),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _withIndexCollect_2(
          _each,
          sl.annotateFunction(function (_item, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _item, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinusGreaterThanSign_2(_at_2(_keys, _index), _item);
          }, ["item", "index"]),
        );
      }, ["each"]),
    );
    /* Statements */
    return _collect_2(_places, _asRecord_1);
  }, ["self"]),
  "{ :self |\n\t\tlet keys = self.keys;\n\t\tlet values = self.values;\n\t\tlet size = values.collect(sizeForExtending:/1).max;\n\t\tlet places = values.multiChannelExpand.collect { :each |\n\t\t\teach.withIndexCollect { :item :index |\n\t\t\t\tkeys[index] -> item\n\t\t\t}\n\t\t};\n\t\tplaces.collect(asRecord:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ScLang",
  "clump",
  ["self", "groupSize"],
  sl.annotateFunction(function (_self, _groupSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _groupSize";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.clump(_self, _groupSize);
  }, ["self", "groupSize"]),
  "{ :self :groupSize |\n\t\t<primitive: return sc.clump(_self, _groupSize);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "ScLang",
  "MulAdd",
  ["self", "mul", "add"],
  sl.annotateFunction(function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  }, ["self", "mul", "add"]),
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "degreeToKey",
  ["self", "scale", "stepsPerOctave"],
  sl.annotateFunction(function (_self, _scale, _stepsPerOctave) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _scale, _stepsPerOctave";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scaleDegree = _round_1(_self);
    let _accidental = _asterisk_2(_hyphenMinus_2(_self, _scaleDegree), 10);
    let _baseKey = _plusSign_2(
      _asterisk_2(
        _stepsPerOctave,
        _quotientBy_3(_scaleDegree, _size_1(_scale), _floor_1),
      ),
      _atWrap_2(_scale, _plusSign_2(_scaleDegree, 1)),
    );
    /* Statements */
    return _if_3(
      _equalsSign_2(_accidental, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _baseKey;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _baseKey,
          _asterisk_2(_accidental, _solidus_2(_stepsPerOctave, 12.0)),
        );
      }, []),
    );
  }, ["self", "scale", "stepsPerOctave"]),
  "{ :self :scale :stepsPerOctave |\n\t\tlet scaleDegree = self.round;\n\t\tlet accidental = (self - scaleDegree) * 10;\n\t\tlet baseKey = (stepsPerOctave * (scaleDegree.quotientBy(scale.size, floor:/1))) + scale.atWrap(scaleDegree + 1);\n\t\t(accidental = 0).if {\n\t\t\tbaseKey\n\t\t} {\n\t\t\tbaseKey + (accidental * (stepsPerOctave / 12.0))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "geom",
  ["self", "start", "grow"],
  sl.annotateFunction(function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      throw new Error(errorMessage);
    } /* Statements */
    return _geometricProgression_3(_self, _start, _grow);
  }, ["self", "start", "grow"]),
  "{ :self :start :grow |\n\t\tself.geometricProgression(start, grow)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ScLang",
  "SoftClip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_abs_1(_self), 0.5),
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
        return _solidus_2(_hyphenMinus_2(_abs_1(_self), 0.25), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.abs <= 0.5).if {\n\t\t\tself\n\t\t} {\n\t\t\t(self.abs - 0.25) / self\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "lessThanSignGreaterThanSign",
  ["self:/1", "aBlock:/1"],
  sl.annotateFunction(function (_self_1, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self_1, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(_aBlock_1(_x));
    }, ["x"]);
  }, ["self:/1", "aBlock:/1"]),
  "{ :self:/1 :aBlock:/1 |\n\t\t{ :x |\n\t\t\tself(aBlock(x))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Block",
  "ScLang",
  "block",
  ["self:/1"],
  sl.annotateFunction(function (_self_1) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _self_1(_return_1);
    }, ["return:/1"]));
  }, ["self:/1"]),
  "{ :self:/1 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself(return:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "plusSignPlusSignQuestionMark",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _anObject,
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
        return _plusSignPlusSign_2(_self, _value_1(_anObject));
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.ifNil {\n\t\t\tself\n\t\t} {\n\t\t\tself ++ anObject.value\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "plusSignSolidusPlusSign",
  ["self", "aString"],
  sl.annotateFunction(function (_self, _aString) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aString";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_plusSignPlusSign_2(_self, "/"), _aString);
  }, ["self", "aString"]),
  "{ :self :aString |\n\t\tself ++ '/' ++ aString\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "ScLang",
  "ascii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_asciiByteArray_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asciiByteArray.asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ScLang",
  "coin",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_nextRandomFloat_1(_self), _p);
  }, ["self", "p"]),
  "{ :self :p |\n\t\tself.nextRandomFloat < p\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "ScLang",
  "expRand",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _asterisk_2(_a, _exp_1(_asterisk_2(_log_1(_solidus_2(_b, _a)), _u)));
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tlet u = self.nextRandomFloat;\n\t\ta * ((b / a).log * u).exp\n\t}",
);
