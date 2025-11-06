sl.addType(
  false,
  "Simplex",
  "Simplex",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Simplex",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Simplex",
);

sl.addMethodToExistingType(
  "Simplex",
  "Simplex",
  "content",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cayleyMengerDeterminant_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates.cayleyMengerDeterminant\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Simplex",
  "Simplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newSimplex_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewSimplex().initializeSlots(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Simplex",
  "kuhnTriangulation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _basisVector_2 = sl.annotateFunction(function (_n, _m) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _m";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(
        _asList_1(_nonemptyRange_3(1, _n, 1)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _boole_1(_equalsSign_2(_each, _m));
        }, ["each"]),
      );
    }, ["n", "m"]);
    let _simplexVector_1 = sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _k = _size_1(_p);
      /* Statements */
      return _prefixSum_1(
        _catenate_1([
          [_numberSign_2(0, _k)],
          _collect_2(
            _p,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _basisVector_2(_k, _each);
            }, ["each"]),
          ),
        ]),
      );
    }, ["p"]);
    /* Statements */
    return _collect_2(
      _permutations_1(_asList_1(_nonemptyRange_3(1, _self, 1))),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _simplexVector_1(_each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet basisVector = { :n :m |\n\t\t\t[1 .. n].collect { :each |\n\t\t\t\t(each = m).boole\n\t\t\t}\n\t\t};\n\t\tlet simplexVector = { :p |\n\t\t\tlet k = p.size;\n\t\t\t[\n\t\t\t\t[0 # k],\n\t\t\t\tp.collect { :each |\n\t\t\t\t\tbasisVector(k, each)\n\t\t\t\t}\n\t\t\t].catenate.prefixSum\n\t\t};\n\t\t[1 .. self].permutations.collect { :each |\n\t\t\teach.simplexVector\n\t\t}\n\t}",
);
