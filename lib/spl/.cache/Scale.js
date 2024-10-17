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
  "degreeToKey",
  ["self", "degree"],
  function (_self, _degree) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _degree";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCollection_1(_degree), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_degree, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _fractionalDegreeToKey_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _fractionalDegreeToKey_2(_self, _degree);
    });
  },
  "{ :self :degree |\n\t\tdegree.isCollection.if {\n\t\t\tdegree.collect { :each |\n\t\t\t\tself.fractionalDegreeToKey(each)\n\t\t\t}\n\t\t} {\n\t\t\tself.fractionalDegreeToKey(degree)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _accidental = _rounded_1(
      _asterisk_2(_fractionPart_1(_scaleDegree), 10),
    );
    /* Statements */
    _ifTrue_2(_greaterThanSign_2(_accidental, 5), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _accidental = _negated_1(_hyphenMinus_2(10, _accidental));
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _stepsPerOctave = _tuningSize_1(_self);
    let _tuningIndices = _tuningIndices_1(_self);
    let _baseKey = _plusSign_2(
      _asterisk_2(
        _stepsPerOctave,
        _solidusSolidus_2(_scaleDegree, _plusSign_2(_size_1(_self), 1)),
      ),
      _atWrap_2(_tuningIndices, _scaleDegree),
    );
    /* Statements */
    return _if_3(_equalsSign_2(_accidental, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _baseKey;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _plusSign_2(
        _baseKey,
        _asterisk_2(_accidental, _solidus_2(12, _stepsPerOctave)),
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Scale(",
      _storeString_1(_startIndex_1(_self)),
      ", ",
      _storeString_1(_intervals_1(_self)),
      ",",
      '"',
      _description_1(_self),
      '"',
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Scale(',\n\t\t\tself.startIndex.storeString, ', ',\n\t\t\tself.intervals.storeString, ',',\n\t\t\t'\"', self.description, '\"',\n\t\t\t')'\n\t\t].join\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _sum = _startIndex_1(_self);
    let _answer = [_sum];
    let _tuningSize = _tuningSize_1(_self);
    /* Statements */
    _allButLastDo_2(_intervals_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _sum = _plusSign_2(
        _percentSign_2(
          _plusSign_2(_hyphenMinus_2(_sum, 1), _each),
          _tuningSize,
        ),
        1,
      );
      return _add_2(_answer, _sum);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet sum = self.startIndex;\n\t\tlet answer = [sum];\n\t\tlet tuningSize = self.tuningSize;\n\t\tself.intervals.allButLastDo { :each |\n\t\t\tsum := ((sum - 1 + each) % tuningSize) + 1; /* one-indexed modulo */\n\t\t\tanswer.add(sum)\n\t\t};\n\t\tanswer\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
  "List",
  "Scale",
  "asScale",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Scale_3(1, _self, "Undescribed scale");
  },
  "{ :self |\n\t\tScale(1, self, 'Undescribed scale')\n\t}",
);
