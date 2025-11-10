sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "QuickSort",
  "quickSortFromToBy",
  ["self", "from", "to", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _from, _to, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _from, _to, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i, _j, _k, _l, _ij, _di, _dj, _dij, _n, _tmp;
      /* Statements */
      _i = _from;
      _j = _to;
      return _repeatForever_1(sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _di = _at_2(_self, _i);
        _dj = _at_2(_self, _j);
        _ifFalse_2(
          _sortBlock_2(_di, _dj),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_self, _i, _dj);
            _atPut_3(_self, _j, _di);
            _tmp = _dj;
            _dj = _di;
            return _di = _tmp;
          }, []),
        );
        _n = _hyphenMinus_2(_plusSign_2(_j, 1), _i);
        _ifTrue_2(
          _lessThanSignEqualsSign_2(_n, 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_self);
          }, []),
        );
        _ij = _solidusSolidus_2(_plusSign_2(_i, _j), 2);
        _dij = _at_2(_self, _ij);
        _if_3(
          _sortBlock_2(_di, _dij),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _sortBlock_2(_dij, _dj),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _atPut_3(_self, _j, _dij);
                _atPut_3(_self, _ij, _dj);
                _dij = _dj;
                return _dj = null;
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _atPut_3(_self, _i, _dij);
            _atPut_3(_self, _ij, _di);
            _dij = _di;
            return _di = null;
          }, []),
        );
        _ifTrue_2(
          _equalsSign_2(_n, 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _return_1(_self);
          }, []),
        );
        _k = _i;
        _l = _j;
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _whileTrue_1(sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _l = _hyphenMinus_2(_l, 1);
              return _ampersand_2(
                _lessThanSignEqualsSign_2(_k, _l),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _sortBlock_2(_dij, _at_2(_self, _l));
                }, []),
              );
            }, []));
            _whileTrue_1(sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _k = _plusSign_2(_k, 1);
              return _ampersand_2(
                _lessThanSignEqualsSign_2(_k, _l),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _sortBlock_2(_at_2(_self, _k), _dij);
                }, []),
              );
            }, []));
            return _lessThanSignEqualsSign_2(_k, _l);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _tmp = _at_2(_self, _k);
            _atPut_3(_self, _k, _at_2(_self, _l));
            return _atPut_3(_self, _l, _tmp);
          }, []),
        );
        return _if_3(
          _lessThanSign_2(_i, _l),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _lessThanSign_2(_k, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _lessThanSign_2(
                    _hyphenMinus_2(_l, _i),
                    _hyphenMinus_2(_j, _k),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _quickSortFromToBy_4(_self, _i, _l, _sortBlock_2);
                    return _i = _k;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _quickSortFromToBy_4(_self, _k, _j, _sortBlock_2);
                    return _j = _l;
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _j = _l;
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _lessThanSign_2(_k, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _i = _k;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_self);
              }, []),
            );
          }, []),
        );
      }, []));
    }, ["return:/1"]));
  }, ["self", "from", "to", "sortBlock:/2"]),
  "{ :self :from :to :sortBlock:/2 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tvar i, j, k, l, ij, di, dj, dij, n, tmp;\n\t\t\ti := from;\n\t\t\tj := to;\n\t\t\t{\n\t\t\t\tdi := self[i];\n\t\t\t\tdj := self[j];\n\t\t\t\tsortBlock(di, dj).ifFalse {\n\t\t\t\t\tself[i] := dj;\n\t\t\t\t\tself[j] := di;\n\t\t\t\t\ttmp := dj;\n\t\t\t\t\tdj := di;\n\t\t\t\t\tdi := tmp\n\t\t\t\t};\n\t\t\t\tn := j + 1 - i;\n\t\t\t\t(n <= 2).ifTrue {\n\t\t\t\t\tself.return\n\t\t\t\t};\n\t\t\t\tij := i + j // 2;\n\t\t\t\tdij := self[ij];\n\t\t\t\tsortBlock(di, dij).if {\n\t\t\t\t\tsortBlock(dij, dj).ifFalse {\n\t\t\t\t\t\tself[j] := dij;\n\t\t\t\t\t\tself[ij] := dj;\n\t\t\t\t\t\tdij := dj;\n\t\t\t\t\t\tdj := nil\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tself[i] := dij;\n\t\t\t\t\tself[ij] := di;\n\t\t\t\t\tdij := di;\n\t\t\t\t\tdi := nil\n\t\t\t\t};\n\t\t\t\t(n = 3).ifTrue {\n\t\t\t\t\tself.return\n\t\t\t\t};\n\t\t\t\tk := i;\n\t\t\t\tl := j;\n\t\t\t\t{\n\t\t\t\t\t{\n\t\t\t\t\t\tl := l - 1;\n\t\t\t\t\t\tk <= l & {\n\t\t\t\t\t\t\tsortBlock(dij, self[l])\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue;\n\t\t\t\t\t{\n\t\t\t\t\t\tk := k + 1;\n\t\t\t\t\t\tk <= l & {\n\t\t\t\t\t\t\tsortBlock(self[k], dij)\n\t\t\t\t\t\t}\n\t\t\t\t\t}.whileTrue;\n\t\t\t\t\tk <= l\n\t\t\t\t}.whileTrue {\n\t\t\t\t\ttmp := self[k];\n\t\t\t\t\tself[k] := self[l];\n\t\t\t\t\tself[l] := tmp\n\t\t\t\t};\n\t\t\t\t(i < l).if {\n\t\t\t\t\t(k < j).if {\n\t\t\t\t\t\t(l - i < (j - k)).if {\n\t\t\t\t\t\t\tself.quickSortFromToBy(i, l, sortBlock:/2);\n\t\t\t\t\t\t\ti := k\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tself.quickSortFromToBy(k, j, sortBlock:/2);\n\t\t\t\t\t\t\tj := l\n\t\t\t\t\t\t}\n\t\t\t\t\t} {\n\t\t\t\t\t\tj := l\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\t(k < j).if {\n\t\t\t\t\t\ti := k\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}.repeatForever\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "QuickSort",
  "quickSortBy",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _quickSortFromToBy_4(_self, 1, _size_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.quickSortFromToBy(1, self.size, sortBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "QuickSort",
  "quickSort",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _quickSortBy_2(_self, _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tself.quickSortBy(sortBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "QuickSort",
  "quickSort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _quickSortBy_2(_self, _lessThanSignEqualsSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.quickSortBy(<=)\n\t}",
);
