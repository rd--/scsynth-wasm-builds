sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "PatienceSort",
  "mergeInPlace",
  ["self", "select:/1", "insert:/2"],
  sl.annotateFunction(function (_self, _select_1, _insert_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _select_1, _insert_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _collect_2(_self, _first_1);
        let _i = _indexOf_2(_x, _select_1(_x));
        /* Statements */
        _insert_2(_answer, _removeFirst_1(_at_2(_self, _i)));
        return _ifTrue_2(
          _isEmpty_1(_at_2(_self, _i)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeAt_2(_self, _i);
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self", "select:/1", "insert:/2"]),
  "{ :self :select:/1 :insert:/2 |\n\t\tlet answer = [];\n\t\t{\n\t\t\tself.isEmpty\n\t\t}.whileFalse {\n\t\t\tlet x = self.collect(first:/1);\n\t\t\tlet i = x.indexOf(x.select);\n\t\t\tanswer.insert(self[i].removeFirst);\n\t\t\tself[i].isEmpty.ifTrue {\n\t\t\t\tself.removeAt(i)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "PatienceSort",
  "patienceSortPiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _piles = [];
    let _answer = [];
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_card) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _card";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _index = _detectIndex_2(
          _piles,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_last_1(_each), _card);
          }, ["each"]),
        );
        /* Statements */
        return _ifNil_3(
          _index,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_piles, [_card]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_at_2(_piles, _index), _card);
          }, []),
        );
      }, ["card"]),
    );
    return _piles;
  }, ["self"]),
  "{ :self |\n\t\tlet piles = [];\n\t\tlet answer = [];\n\t\tself.do { :card |\n\t\t\tlet index = piles.detectIndex { :each |\n\t\t\t\teach.last >= card\n\t\t\t};\n\t\t\tindex.ifNil {\n\t\t\t\tpiles.addLast([card])\n\t\t\t} {\n\t\t\t\tpiles[index].addLast(card)\n\t\t\t}\n\t\t};\n\t\tpiles\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "PatienceSort",
  "patienceSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mergeInPlace_3(_patienceSortPiles_1(_self), _max_1, _addFirst_2);
  }, ["self"]),
  "{ :self |\n\t\tself.patienceSortPiles.mergeInPlace(max:/1, addFirst:/2)\n\t}",
);
