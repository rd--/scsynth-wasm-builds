/*  Require: Cache  */

sl.addTrait("Binary", "Binary");

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitShiftLeft",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftLeft");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftLeft')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "lessThanSignLessThanSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftLeft");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftLeft')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitShiftRight",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftRight");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftRight')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "greaterThanSignGreaterThanSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftRight");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftRight')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitShiftRightUnsigned",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftRightUnsigned");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftRightUnsigned')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "greaterThanSignGreaterThanSignGreaterThanSign",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitShiftRightUnsigned");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitShiftRightUnsigned')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitAnd",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitAnd");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitAnd')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitAt",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitAnd_2(_bitShift_2(_self, _hyphenMinus_2(1, _anInteger)), 1);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.bitShift(1 - anInteger).bitAnd(1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitAtPut",
  ["self", "anInteger", "value"],
  sl.annotateFunction(function (_self, _anInteger, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _bitAt_2(_self, _anInteger);
    /* Statements */
    return _if_3(
      _equalsSign_2(_b, _value),
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
        return _if_3(
          _equalsSign_2(0, _value),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _bitAnd_2(
              _self,
              _bitNot_1(_bitShift_2(1, _hyphenMinus_2(_anInteger, 1))),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(1, _value),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _bitOr_2(
                  _self,
                  _bitShift_2(1, _hyphenMinus_2(_anInteger, 1)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  "@Binary>>bitAtPut: bit value should be 0 or 1",
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anInteger", "value"]),
  "{ :self :anInteger :value |\n\t\tlet b = self.bitAt(anInteger);\n\t\t(b = value).if {\n\t\t\tself\n\t\t} {\n\t\t\t(0 = value).if {\n\t\t\t\tself.bitAnd(1.bitShift(anInteger - 1).bitNot)\n\t\t\t} {\n\t\t\t\t(1 = value).if {\n\t\t\t\t\tself.bitOr(1.bitShift(anInteger - 1))\n\t\t\t\t} {\n\t\t\t\t\tself.error('@Binary>>bitAtPut: bit value should be 0 or 1')\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Binary>>bitCount: cannot count bits of negative integers",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _self;
        let _bitCount = 0;
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_n, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _byte = _plusSign_2(_bitAnd_2(_n, 255), 1);
            /* Statements */
            _bitCount = _plusSign_2(
              _bitCount,
              _at_2(_bitCountPerByteTable_1(_system), _byte),
            );
            return _n = _bitShift_2(_n, -8);
          }, []),
        );
        return _bitCount;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.error('@Binary>>bitCount: cannot count bits of negative integers')\n\t\t} {\n\t\t\tlet n = self;\n\t\t\tlet bitCount = 0;\n\t\t\t{\n\t\t\t\tn = 0\n\t\t\t}.whileFalse {\n\t\t\t\tlet byte = n.bitAnd(16rFF) + 1;\n\t\t\t\tbitCount := bitCount + system.bitCountPerByteTable[byte];\n\t\t\t\tn := n.bitShift(-8)\n\t\t\t};\n\t\t\tbitCount\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitCountOfByte",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_bitCountPerByteTable_1(_system), _plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self |\n\t\tsystem.bitCountPerByteTable[self + 1]\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitNot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitNot");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Binary>>bitNot')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitOr",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitOr");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitOr')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitXor",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Binary>>bitXor");
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.typeResponsibility('@Binary>>bitXor')\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "bitShift",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNegative_1(_anInteger),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignGreaterThanSign_2(_self, _negate_1(_anInteger));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignLessThanSign_2(_self, _anInteger);
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isNegative.if {\n\t\t\tself >> anInteger.negate\n\t\t} {\n\t\t\tself << anInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "highBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "@Binary>>highBit is not defined for negative integers",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _highBitOfPositiveReceiver_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.error('@Binary>>highBit is not defined for negative integers')\n\t\t} {\n\t\t\tself.highBitOfPositiveReceiver\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "highBitOfByte",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_highBitPerByteTable_1(_system), _plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self |\n\t\tsystem.highBitPerByteTable[self + 1]\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "highBitOfMagnitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _highBit_1(_negate_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _highBitOfPositiveReceiver_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\tself.negate.highBit\n\t\t} {\n\t\t\tself.highBitOfPositiveReceiver\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "highBitOfPositiveReceiver",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _shifted = _self;
    let _bitNo = 0;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_shifted, 65536);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _shifted = _bitShiftRight_2(_shifted, 16);
        return _bitNo = _plusSign_2(_bitNo, 16);
      }, []),
    );
    _ifFalse_2(
      _lessThanSign_2(_shifted, 256),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _shifted = _bitShiftRight_2(_shifted, 8);
        return _bitNo = _plusSign_2(_bitNo, 8);
      }, []),
    );
    return _plusSign_2(_bitNo, _highBitOfByte_1(_shifted));
  }, ["self"]),
  "{ :self |\n\t\tlet shifted = self;\n\t\tlet bitNo = 0;\n\t\t{\n\t\t\tshifted < 65536\n\t\t}.whileFalse {\n\t\t\tshifted := shifted.bitShiftRight(16);\n\t\t\tbitNo := bitNo + 16\n\t\t};\n\t\t(shifted < 256).ifFalse {\n\t\t\tshifted := shifted.bitShiftRight(8);\n\t\t\tbitNo := bitNo + 8\n\t\t};\n\t\tbitNo + shifted.highBitOfByte\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "isBinary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "lowBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 0),
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
        } /* Temporaries */
        let _n = _self;
        let _result = 0;
        let _lastByte = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _lastByte = _bitAnd_2(_n, 255);
            return _equalsSign_2(_n, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _result = _plusSign_2(_result, 8);
            return _n = _bitShift_2(_n, -8);
          }, []),
        );
        return _plusSign_2(
          _result,
          _at_2(_lowBitPerByteTable_1(_system), _lastByte),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet n = self;\n\t\t\tlet result = 0;\n\t\t\tlet lastByte = nil;\n\t\t\t{\n\t\t\t\tlastByte := n.bitAnd(16rFF);\n\t\t\t\tn = 0\n\t\t\t}.whileTrue {\n\t\t\t\tresult := result + 8;\n\t\t\t\tn := n.bitShift(-8)\n\t\t\t};\n\t\t\tresult + system.lowBitPerByteTable[lastByte]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Binary",
  "bitCountPerByteTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "bitCountPerByteTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asByteArray_1(
          _toCollect_3(
            0,
            255,
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _bitCount = 0;
              let _n = _i;
              /* Statements */
              _whileFalse_2(
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _equalsSign_2(_n, 0);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _bitCount = _plusSign_2(_bitCount, 1);
                  return _n = _bitAnd_2(_n, _hyphenMinus_2(_n, 1));
                }, []),
              );
              return _bitCount;
            }, ["i"]),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('bitCountPerByteTable') {\n\t\t\t0.toCollect(255) { :i |\n\t\t\t\tlet bitCount = 0;\n\t\t\t\tlet n = i;\n\t\t\t\t{\n\t\t\t\t\tn = 0\n\t\t\t\t}.whileFalse {\n\t\t\t\t\tbitCount := bitCount + 1;\n\t\t\t\t\tn := n.bitAnd(n - 1)\n\t\t\t\t};\n\t\t\t\tbitCount\n\t\t\t}.asByteArray\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Binary",
  "highBitPerByteTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "highBitPerByteTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asByteArray_1(
          _injectInto_3(
            _to_2(1, 8),
            [0],
            sl.annotateFunction(function (_highBits, _rank) {
              /* ArityCheck */
              if (arguments.length !== 2) {
                const errorMessage = "Arity: expected 2, _highBits, _rank";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                _highBits,
                _collect_2(
                  _highBits,
                  sl.annotateFunction(function (_each) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _each";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _rank;
                  }, ["each"]),
                ),
              );
            }, ["highBits", "rank"]),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('highBitPerByteTable') {\n\t\t\t1.to(8).injectInto([0]) { :highBits :rank |\n\t\t\t\thighBits ++ highBits.collect { :each |\n\t\t\t\t\trank\n\t\t\t\t}\n\t\t\t}.asByteArray\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Binary",
  "lowBitPerByteTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "lowBitPerByteTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asByteArray_1(
          _allButFirst_1(
            _injectInto_3(
              _to_2(1, 8),
              [1],
              sl.annotateFunction(function (_lowBits, _unusedRank) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage =
                    "Arity: expected 2, _lowBits, _unusedRank";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _prefix = _copy_1(_lowBits);
                /* Statements */
                _atPut_3(_prefix, 1, _plusSign_2(_at_2(_lowBits, 1), 1));
                return _plusSignPlusSign_2(_prefix, _lowBits);
              }, ["lowBits", "unusedRank"]),
            ),
          ),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('lowBitPerByteTable') {\n\t\t\t1.to(8).injectInto([1]) { :lowBits :unusedRank |\n\t\t\t\tlet prefix = lowBits.copy;\n\t\t\t\tprefix[1] := lowBits[1] + 1;\n\t\t\t\tprefix ++ lowBits\n\t\t\t}.allButFirst.asByteArray\n\t\t}\n\t}",
);
