sl.extendTypeOrTraitWithMethod(
  "List",
  "CopyableSequence",
  "chunksOfFrom",
  ["self", "chunkSize", "startingAt"],
  sl.annotateFunction(function (_self, _chunkSize, _startingAt) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _chunkSize, _startingAt";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chunkCount = _ceiling_1(
      _solidus_2(
        _plusSign_2(_hyphenMinus_2(_size_1(_self), _startingAt), 1),
        _chunkSize,
      ),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_chunkCount, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _startIndex = _plusSign_2(_asterisk_2(_i, _chunkSize), _startingAt);
        let _stopIndex = _min_2(
          _hyphenMinus_2(_plusSign_2(_startIndex, _chunkSize), 1),
          _size_1(_self),
        );
        /* Statements */
        return _copyFromTo_3(_self, _startIndex, _stopIndex);
      }, ["i"]),
    );
  }, ["self", "chunkSize", "startingAt"]),
  "{ :self :chunkSize :startingAt |\n\t\tlet chunkCount = (self.size - startingAt + 1 / chunkSize).ceiling;\n\t\t0.to(chunkCount - 1).collect { :i |\n\t\t\tlet startIndex = i * chunkSize + startingAt;\n\t\t\tlet stopIndex = (startIndex + chunkSize - 1).min(self.size);\n\t\t\tself.copyFromTo(startIndex, stopIndex)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CopyableSequence",
  "chunksOfFrom",
  ["self", "chunkSize", "startingAt"],
  sl.annotateFunction(function (_self, _chunkSize, _startingAt) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _chunkSize, _startingAt";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chunkCount = _ceiling_1(
      _solidus_2(
        _plusSign_2(_hyphenMinus_2(_size_1(_self), _startingAt), 1),
        _chunkSize,
      ),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_chunkCount, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _startIndex = _plusSign_2(_asterisk_2(_i, _chunkSize), _startingAt);
        let _stopIndex = _min_2(
          _hyphenMinus_2(_plusSign_2(_startIndex, _chunkSize), 1),
          _size_1(_self),
        );
        /* Statements */
        return _copyFromTo_3(_self, _startIndex, _stopIndex);
      }, ["i"]),
    );
  }, ["self", "chunkSize", "startingAt"]),
  "{ :self :chunkSize :startingAt |\n\t\tlet chunkCount = (self.size - startingAt + 1 / chunkSize).ceiling;\n\t\t0.to(chunkCount - 1).collect { :i |\n\t\t\tlet startIndex = i * chunkSize + startingAt;\n\t\t\tlet stopIndex = (startIndex + chunkSize - 1).min(self.size);\n\t\t\tself.copyFromTo(startIndex, stopIndex)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CopyableSequence",
  "chunksOfFrom",
  ["self", "chunkSize", "startingAt"],
  sl.annotateFunction(function (_self, _chunkSize, _startingAt) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _chunkSize, _startingAt";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _chunkCount = _ceiling_1(
      _solidus_2(
        _plusSign_2(_hyphenMinus_2(_size_1(_self), _startingAt), 1),
        _chunkSize,
      ),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_chunkCount, 1)),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _startIndex = _plusSign_2(_asterisk_2(_i, _chunkSize), _startingAt);
        let _stopIndex = _min_2(
          _hyphenMinus_2(_plusSign_2(_startIndex, _chunkSize), 1),
          _size_1(_self),
        );
        /* Statements */
        return _copyFromTo_3(_self, _startIndex, _stopIndex);
      }, ["i"]),
    );
  }, ["self", "chunkSize", "startingAt"]),
  "{ :self :chunkSize :startingAt |\n\t\tlet chunkCount = (self.size - startingAt + 1 / chunkSize).ceiling;\n\t\t0.to(chunkCount - 1).collect { :i |\n\t\t\tlet startIndex = i * chunkSize + startingAt;\n\t\t\tlet stopIndex = (startIndex + chunkSize - 1).min(self.size);\n\t\t\tself.copyFromTo(startIndex, stopIndex)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CopyableSequence",
  "chunksOf",
  ["self", "chunkSize"],
  sl.annotateFunction(function (_self, _chunkSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _chunkSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _chunksOfFrom_3(_self, _chunkSize, 1);
  }, ["self", "chunkSize"]),
  "{ :self :chunkSize |\n\t\tself.chunksOfFrom(chunkSize, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "CopyableSequence",
  "chunksOf",
  ["self", "chunkSize"],
  sl.annotateFunction(function (_self, _chunkSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _chunkSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _chunksOfFrom_3(_self, _chunkSize, 1);
  }, ["self", "chunkSize"]),
  "{ :self :chunkSize |\n\t\tself.chunksOfFrom(chunkSize, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CopyableSequence",
  "chunksOf",
  ["self", "chunkSize"],
  sl.annotateFunction(function (_self, _chunkSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _chunkSize";
      throw new Error(errorMessage);
    } /* Statements */
    return _chunksOfFrom_3(_self, _chunkSize, 1);
  }, ["self", "chunkSize"]),
  "{ :self :chunkSize |\n\t\tself.chunksOfFrom(chunkSize, 1)\n\t}",
);
