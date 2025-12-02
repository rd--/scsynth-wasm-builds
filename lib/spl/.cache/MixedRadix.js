sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MixedRadix",
  "factorialExpansion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_self, _exclamationMark_1(_k));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _k = _plusSign_2(_k, 1);
      }, []),
    );
    return _withoutLeadingZeroes_1(
      _numberDecompose_2(_self, _exclamationMark_1(_Range_3(_k, 1, -1))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = 1;\n\t\t{ self > k.! }.whileTrue {\n\t\t\tk := k + 1\n\t\t};\n\t\tself.numberDecompose(\n\t\t\tRange(k, 1, -1).!\n\t\t).withoutLeadingZeroes\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MixedRadix",
  "factorialNumberSystemDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _reverse_1(_integerDigits_1(_self));
    let _n = _size_1(_d);
    /* Statements */
    return _sum_1(
      _asterisk_2(
        _d,
        _exclamationMark_1(_asList_1(_nonemptyRange_3(1, _n, 1))),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet d = self.integerDigits.reverse;\n\t\tlet n = d.size;\n\t\t(d * [1 .. n].!).sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MixedRadix",
  "factorialNumberSystemEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromDigits_1(_factorialExpansion_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.factorialExpansion.fromDigits\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "MixedRadix",
  "mixedRadixEncode",
  ["self", "factors"],
  sl.annotateFunction(function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_factors));
    /* Statements */
    _toByDo_4(
      _size_1(_factors),
      1,
      -1,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(
          _answer,
          _index,
          _percentSign_2(_self, _at_2(_factors, _index)),
        );
        return _self = _solidusSolidus_2(_self, _at_2(_factors, _index));
      }, ["index"]),
    );
    _ifTrue_2(
      _greaterThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirst_2(_answer, _self);
      }, []),
    );
    return _answer;
  }, ["self", "factors"]),
  "{ :self :factors |\n\t\tlet answer = List(factors.size);\n\t\tfactors.size.toByDo(1, -1) { :index |\n\t\t\tanswer[index] := self % factors[index];\n\t\t\tself := self // factors[index]\n\t\t};\n\t\t(self > 0).ifTrue {\n\t\t\tanswer.addFirst(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MixedRadix",
  "numberDecompose",
  ["self", "u"],
  sl.annotateFunction(function (_self, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _u";
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
        return _hyphenMinus_1(_numberDecompose_2(_hyphenMinus_1(_self), _u));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _x = _self;
        let _k = _size_1(_u);
        /* Statements */
        _withIndexDo_2(
          _u,
          sl.annotateFunction(function (_each, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_index, _k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _solidus_2(_x, _each));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _n = _floor_1(_solidus_2(_x, _each));
                /* Statements */
                _x = _hyphenMinus_2(_x, _asterisk_2(_n, _each));
                return _add_2(_answer, _n);
              }, []),
            );
          }, ["each", "index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "u"]),
  "{ :self :u |\n\t\t(self < 0).if {\n\t\t\tself.-.numberDecompose(u).-\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tlet x = self;\n\t\t\tlet k = u.size;\n\t\t\tu.withIndexDo { :each :index |\n\t\t\t\t(index = k).if {\n\t\t\t\t\tanswer.add(x / each)\n\t\t\t\t} {\n\t\t\t\t\tlet n = (x / each).floor;\n\t\t\t\t\tx := x - (n * each);\n\t\t\t\t\tanswer.add(n)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MixedRadix",
  "mixedRadixDecode",
  ["self", "factors"],
  sl.annotateFunction(function (_self, _factors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factors";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    let _base = 1;
    let _k = _min_2(_size_1(_factors), _size_1(_self));
    let _prefix = _hyphenMinus_2(_size_1(_self), _size_1(_factors));
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_prefix, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "mixedRadixDecode: sequence too long");
      }, []),
    );
    _toByDo_4(
      _k,
      1,
      -1,
      sl.annotateFunction(function (_index) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _index";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _plusSign_2(
          _answer,
          _asterisk_2(_at_2(_self, _plusSign_2(_index, _prefix)), _base),
        );
        return _base = _asterisk_2(_base, _at_2(_factors, _index));
      }, ["index"]),
    );
    _ifTrue_2(
      _equalsSign_2(_prefix, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _plusSign_2(
          _answer,
          _asterisk_2(_at_2(_self, 1), _base),
        );
      }, []),
    );
    return _answer;
  }, ["self", "factors"]),
  "{ :self :factors |\n\t\tlet answer = 0;\n\t\tlet base = 1;\n\t\tlet k = factors.size.min(self.size);\n\t\tlet prefix = self.size - factors.size;\n\t\t(prefix > 1).ifTrue {\n\t\t\tself.error('mixedRadixDecode: sequence too long')\n\t\t};\n\t\tk.toByDo(1, -1) { :index |\n\t\t\tanswer := answer + (self[index + prefix] * base);\n\t\t\tbase := base * factors[index]\n\t\t};\n\t\t(prefix = 1).ifTrue {\n\t\t\tanswer := answer + (self[1] * base)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "MixedRadix",
  "numberCompose",
  ["c", "u"],
  sl.annotateFunction(function (_c, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_asterisk_2(_c, _last_2(_u, _size_1(_c))));
  }, ["c", "u"]),
  "{ :c :u |\n\t\t(c * u.last(c.size)).sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "MixedRadix",
  "factorialNumberSystemDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorialNumberSystemDecode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorialNumberSystemDecode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "MixedRadix",
  "factorialNumberSystemEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorialNumberSystemEncode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorialNumberSystemEncode:/1)\n\t}",
);
