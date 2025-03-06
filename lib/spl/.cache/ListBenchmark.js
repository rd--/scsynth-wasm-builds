sl.addType(
  false,
  "ListElement",
  "ListBenchmark",
  ["Object"],
  ["value", "next"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ListElement",
);

sl.addMethodToExistingType(
  "ListElement",
  "ListBenchmark",
  "isShorterThan",
  ["self", "other"],
  sl.annotateFunction(function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _self;
    let _y = _other;
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _whileFalse_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isNil_1(_y);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _isNil_1(_x),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
          _x = _next_1(_x);
          return _y = _next_1(_y);
        }, []),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "other"]),
  "{ :self :other | let x = self; let y = other; valueWithReturn({ :return:/1 | whileFalse({ isNil(y) }, { ifTrue(isNil(x), { return(true) }); x := next(x); y := next(y) }); false }) }",
);

sl.addMethodToExistingType(
  "ListElement",
  "ListBenchmark",
  "length",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNil_1(_next_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(1, _length_1(_next_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isNil(next(self)), { 1 }, { +(1, length(next(self))) }) }",
);

sl.addMethodToExistingType(
  "ListElement",
  "ListBenchmark",
  "talkWith",
  ["self", "y", "z"],
  sl.annotateFunction(function (_self, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _y, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isShorterThan_2(_y, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _talkWith_3(
          _talkWith_3(_next_1(_self), _y, _z),
          _talkWith_3(_next_1(_y), _z, _self),
          _talkWith_3(_next_1(_z), _self, _y),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _z;
      }, []),
    );
  }, ["self", "y", "z"]),
  "{ :self :y :z | if(isShorterThan(y,self), { talkWith(talkWith(next(self), y, z), talkWith(next(y), z, self), talkWith(next(z), self, y)) }, { z }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ListBenchmark",
  "ListElement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newListElement_0(), _self, null);
  }, ["self"]),
  "{ :self | initializeSlots(newListElement(),self, nil) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "ListBenchmark",
  "makeList",
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
        return null;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _ListElement_1(_self);
        /* Statements */
        _next_2(_e, _makeList_1(_hyphenMinus_2(_self, 1)));
        return _e;
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(self, 0)), { nil }, { let e = ListElement(self); next(e, makeList(-(self, 1))); e }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "ListBenchmark",
  "listBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _talkWith_3(_makeList_1(15), _makeList_1(10), _makeList_1(6));
  }, []),
  "{ talkWith(makeList(15), makeList(10), makeList(6)) }",
);
