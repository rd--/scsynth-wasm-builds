sl.extendTypeOrTraitWithMethod(
  "List",
  "ConvexHull",
  "grahamScan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = [];
    let _p0 = _minBy_2(_self, _precedes_2);
    let _p = _sortBy_2(
      _withIndexCollect_2(
        _self,
        sl.annotateFunction(function (_each, _i) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _each, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar1 = _assertIsOfSize_2(
            _toPolarCoordinates_1(_hyphenMinus_2(_p0, _each)),
            2,
          );
          let _d = _at_2(__SplVar1, 1);
          let _a = _at_2(__SplVar1, 2);
          /* Statements */
          _ifTrue_2(
            _lessThanSign_2(_a, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _a = _plusSign_2(_a, _pi_1(2));
            }, []),
          );
          return [_each, _a, _d, _i];
        }, ["each", "i"]),
      ),
      sl.annotateFunction(function (_u, _v) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _u, _v";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_at_2(_u, 2), _at_2(_v, 2)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_at_2(_u, 3), _at_2(_v, 3));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_at_2(_u, 2), _at_2(_v, 2));
          }, []),
        );
      }, ["u", "v"]),
    );
    /* Statements */
    _removeAtAll_2(
      _p,
      _select_2(
        _to_2(2, _hyphenMinus_2(_size_1(_p), 1)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(
            _at_2(_at_2(_p, _i), 2),
            _at_2(_at_2(_p, _plusSign_2(_i, 1)), 2),
          );
        }, ["i"]),
      ),
    );
    _toDo_3(
      1,
      _size_1(_p),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _at_2(_p, _i);
        /* Statements */
        return _if_3(
          _lessThanSign_2(_size_1(_h), 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addLast_2(_h, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _greaterThanSign_2(_size_1(_h), 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _lessThanSign_2(
                      _shoelaceFormula_1([
                        _at_2(_at_2(_h, _hyphenMinus_2(_size_1(_h), 1)), 1),
                        _at_2(_at_2(_h, _size_1(_h)), 1),
                        _at_2(_x, 1),
                      ]),
                      0,
                    );
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _removeLast_1(_h);
              }, []),
            );
            return _addLast_2(_h, _x);
          }, []),
        );
      }, ["i"]),
    );
    return _collect_2(_h, _fourth_1);
  }, ["self"]),
  "{ :self |\n\t\tlet h = [];\n\t\tlet p0 = self.minBy(precedes:/2);\n\t\tlet p = self.withIndexCollect { :each :i |\n\t\t\tlet [d, a] = (p0 - each).toPolarCoordinates;\n\t\t\t(a < 0).ifTrue {\n\t\t\t\ta := a + 2.pi\n\t\t\t};\n\t\t\t[each, a, d, i]\n\t\t}.sortBy { :u :v |\n\t\t\t(u[2] = v[2]).if {\n\t\t\t\tu[3] < v[3]\n\t\t\t} {\n\t\t\t\tu[2] < v[2]\n\t\t\t}\n\t\t};\n\t\tp.removeAtAll(\n\t\t\t2.to(p.size - 1).select { :i |\n\t\t\t\tp[i][2] = p[i + 1][2]\n\t\t\t}\n\t\t);\n\t\t1.toDo(p.size) { :i |\n\t\t\tlet x = p[i];\n\t\t\t(h.size < 3).if {\n\t\t\t\th.addLast(x)\n\t\t\t} {\n\t\t\t\t{\n\t\t\t\t\t(h.size > 1) & {\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\th[h.size - 1][1],\n\t\t\t\t\t\t\th[h.size][1],\n\t\t\t\t\t\t\tx[1]\n\t\t\t\t\t\t].shoelaceFormula < 0\n\t\t\t\t\t}\n\t\t\t\t}.whileTrue {\n\t\t\t\t\th.removeLast\n\t\t\t\t};\n\t\t\t\th.addLast(x)\n\t\t\t}\n\t\t};\n\t\th.collect(fourth:/1)\n\t}",
);
