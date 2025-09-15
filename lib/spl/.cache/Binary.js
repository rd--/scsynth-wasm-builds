/*  Require: Cache  */

sl.addTrait("Binary", "Binary");

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
    return _typeResponsibility_2(_self, "@Binary>>shiftLeft");
  }, ["self", "anInteger"]),
  "{ :self :anInteger | typeResponsibility(self,'@Binary>>shiftLeft') }",
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
    return _typeResponsibility_2(_self, "@Binary>>shiftRight");
  }, ["self", "anInteger"]),
  "{ :self :anInteger | typeResponsibility(self,'@Binary>>shiftRight') }",
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
  "{ :self :anInteger | typeResponsibility(self,'@Binary>>bitAnd') }",
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
  "{ :self :anInteger | bitAnd(bitShift(self,-(1, anInteger)),1) }",
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
  "{ :self :anInteger :value | let b = bitAt(self,anInteger); if((=(b, value)), { self }, { if((=(0, value)), { bitAnd(self,bitNot(bitShift(1,-(anInteger, 1)))) }, { if((=(1, value)), { bitOr(self,bitShift(1,-(anInteger, 1))) }, { error(self,'@Binary>>bitAtPut: bit value should be 0 or 1') }) }) }) }",
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
  "{ :self | if((<(self, 0)), { error(self,'@Binary>>bitCount: cannot count bits of negative integers') }, { let n = self; let bitCount = 0; whileFalse({ =(n, 0) }, { let byte = +(bitAnd(n,255), 1); bitCount := +(bitCount, at(bitCountPerByteTable(system), byte)); n := bitShift(n,-8) }); bitCount }) }",
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
  "{ :self | at(bitCountPerByteTable(system), +(self, 1)) }",
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
  "{ :self | typeResponsibility(self,'@Binary>>bitNot') }",
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
  "{ :self :anInteger | typeResponsibility(self,'@Binary>>bitOr') }",
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
  "{ :self :anInteger | typeResponsibility(self,'@Binary>>bitXor') }",
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
  "{ :self :anInteger | if(isNegative(anInteger), { >>(self, negate(anInteger)) }, { <<(self, anInteger) }) }",
);

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
    return _lessThanSignLessThanSign_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | <<(self, anInteger) }",
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
    return _greaterThanSignGreaterThanSign_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | >>(self, anInteger) }",
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
    return _greaterThanSignGreaterThanSignGreaterThanSign_2(_self, _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger | >>>(self, anInteger) }",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "grayEncode",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _bitXor_2(_n, _bitShiftRight_2(_n, 1));
  }, ["n"]),
  "{ :n | bitXor(n,bitShiftRight(n,1)) }",
);

sl.addMethodToExistingTrait(
  "Binary",
  "Binary",
  "grayDecode",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _n;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _n = _bitShiftRight_2(_n, 1);
        return _exclamationMarkEqualsSign_2(_n, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _bitXor_2(_answer, _n);
      }, []),
    );
    return _answer;
  }, ["n"]),
  "{ :n | let answer = n; whileTrue({ n := bitShiftRight(n,1); !=(n, 0) }, { answer := bitXor(answer,n) }); answer }",
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
  "{ :self | if((<(self, 0)), { error(self,'@Binary>>highBit is not defined for negative integers') }, { highBitOfPositiveReceiver(self) }) }",
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
  "{ :self | at(highBitPerByteTable(system), +(self, 1)) }",
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
  "{ :self | if((<(self, 0)), { highBit(negate(self)) }, { highBitOfPositiveReceiver(self) }) }",
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
  "{ :self | let shifted = self; let bitNo = 0; whileFalse({ <(shifted, 65536) }, { shifted := bitShiftRight(shifted,16); bitNo := +(bitNo, 16) }); ifFalse((<(shifted, 256)), { shifted := bitShiftRight(shifted,8); bitNo := +(bitNo, 8) }); +(bitNo, highBitOfByte(shifted)) }",
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
  "{ :self | true }",
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
  "{ :self | if((=(self, 0)), { 0 }, { let n = self; let result = 0; let lastByte = nil; whileTrue({ lastByte := bitAnd(n,255); =(n, 0) }, { result := +(result, 8); n := bitShift(n,-8) }); +(result, at(lowBitPerByteTable(system), lastByte)) }) }",
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
          _collect_2(
            _upOrDownTo_2(0, 255),
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
  "{ :self | cached(self, 'bitCountPerByteTable', { asByteArray(collect(upOrDownTo(0, 255), { :i | let bitCount = 0; let n = i; whileFalse({ =(n, 0) }, { bitCount := +(bitCount, 1); n := bitAnd(n,-(n, 1)) }); bitCount })) }) }",
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
            _upOrDownTo_2(1, 8),
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
  "{ :self | cached(self, 'highBitPerByteTable', { asByteArray(injectInto(upOrDownTo(1, 8), [0], { :highBits :rank | ++(highBits, collect(highBits, { :each | rank })) })) }) }",
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
              _upOrDownTo_2(1, 8),
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
  "{ :self | cached(self, 'lowBitPerByteTable', { asByteArray(allButFirst(injectInto(upOrDownTo(1, 8), [1], { :lowBits :unusedRank | let prefix = copy(lowBits); atPut(prefix, 1, +(at(lowBits, 1), 1)); ++(prefix, lowBits) }))) }) }",
);
