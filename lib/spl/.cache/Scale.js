sl.addType(
  false,
  "Scale",
  "Scale",
  ["Object"],
  ["startIndex", "intervals", "description"],
);

sl.copyTraitToType(
  "Object",
  "Scale",
);

sl.addMethod(
  "Scale",
  "Scale",
  "fractionalDegreeToKey",
  ["self", "scaleDegree"],
  function (_self, _scaleDegree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scaleDegree";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _accidental = _rounded_1(_times_2(_fractionPart_1(_scaleDegree), 10));
    /* Statements */
    _ifTrue_2(_greaterThan_2(_accidental, 5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _accidental = _negated_1(_minus_2(10, _accidental));
    });
    return _integerDegreeToKey_3(_self, _rounded_1(_scaleDegree), _accidental);
  },
  "{ :self :scaleDegree |\n\t\tlet accidental = (scaleDegree.fractionPart * 10).rounded;\n\t\t(accidental > 5).ifTrue {\n\t\t\taccidental := (10 - accidental).negated\n\t\t};\n\t\tself.integerDegreeToKey(scaleDegree.rounded, accidental)\n\t}",
);

sl.addMethod(
  "Scale",
  "Scale",
  "integerDegreeToKey",
  ["self", "scaleDegree", "accidental"],
  function (_self, _scaleDegree, _accidental) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _scaleDegree, _accidental";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _stepsPerOctave = _tuningSize_1(_self);
    let _tuningIndices = _tuningIndices_1(_self);
    let _baseKey = _plus_2(
      _times_2(
        _stepsPerOctave,
        _dividedByDividedBy_2(_scaleDegree, _plus_2(_size_1(_self), 1)),
      ),
      _atWrap_2(_tuningIndices, _scaleDegree),
    );
    /* Statements */
    return _if_3(_equals_2(_accidental, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _baseKey;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(
        _baseKey,
        _times_2(_accidental, _dividedBy_2(12, _stepsPerOctave)),
      );
    });
  },
  "{ :self :scaleDegree :accidental |\n\t\tlet stepsPerOctave = self.tuningSize;\n\t\tlet tuningIndices = self.tuningIndices;\n\t\tlet baseKey = (stepsPerOctave * (scaleDegree // (self.size + 1))) + tuningIndices.atWrap(scaleDegree);\n\t\t(accidental = 0).if {\n\t\t\tbaseKey\n\t\t} {\n\t\t\tbaseKey + (accidental * (12 / stepsPerOctave))\n\t\t}\n\t}",
);

sl.addMethod(
  "Scale",
  "Scale",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _size_1(_intervals_1(_self));
  },
  "{ :self |\n\t\tself.intervals.size\n\t}",
);

sl.addMethod(
  "Scale",
  "Scale",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Scale(",
      _startIndex_1(_self),
      ", ",
      _intervals_1(_self),
      ', "',
      _description_1(_self),
      '")',
    ]);
  },
  "{ :self |\n\t\t['Scale(', self.startIndex, ', ', self.intervals, ', \"', self.description, '\")'].join\n\t}",
);

sl.addMethod(
  "Scale",
  "Scale",
  "tuningIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _sum = _startIndex_1(_self);
    let _answer = [_sum];
    let _tuningSize = _tuningSize_1(_self);
    /* Statements */
    _allButLastDo_2(_intervals_1(_self), function (_item) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _item";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _sum = _plus_2(
        _modulo_2(_plus_2(_minus_2(_sum, 1), _item), _tuningSize),
        1,
      );
      return _add_2(_answer, _sum);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet sum = self.startIndex;\n\t\tlet answer = [sum];\n\t\tlet tuningSize = self.tuningSize;\n\t\tself.intervals.allButLastDo { :item |\n\t\t\tsum := ((sum - 1 + item) % tuningSize) + 1; {- one-indexed modulo -}\n\t\t\tanswer.add(sum)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Scale",
  "Scale",
  "tuningSize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_intervals_1(_self));
  },
  "{ :self |\n\t\tself.intervals.sum\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Scale",
  "Scale",
  ["startIndex", "intervals", "description"],
  function (_startIndex, _intervals, _description) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _startIndex, _intervals, _description";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(
      _newScale_0(),
      _startIndex,
      _intervals,
      _description,
    );
  },
  "{ :startIndex :intervals :description |\n\t\tnewScale().initializeSlots(startIndex, intervals, description)\n\t}",
);

sl.addMethod(
  "Array",
  "Scale",
  "Scale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym15 = _assertIsOfSize_2(_self, 3),
      _startIndex = _at_2(__genSym15, 1),
      _intervals = _at_2(__genSym15, 2),
      _description = _at_2(__genSym15, 3);
    /* Statements */
    return _Scale_3(_startIndex, _intervals, _description);
  },
  "{ :self |\n\t\tlet [startIndex, intervals, description] = self;\n\t\tScale(startIndex, intervals, description)\n\t}",
);