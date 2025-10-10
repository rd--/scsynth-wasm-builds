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
  "{ :self :other |\n\t\tlet x = self;\n\t\tlet y = other;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\ty.isNil\n\t\t\t}.whileFalse {\n\t\t\t\tx.isNil.ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t};\n\t\t\t\tx := x.next;\n\t\t\t\ty := y.next\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.next.isNil.if {\n\t\t\t1\n\t\t} {\n\t\t\t1 + self.next.length\n\t\t}\n\t}",
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
  "{ :self :y :z |\n\t\ty.isShorterThan(self).if {\n\t\t\ttalkWith(\n\t\t\t\ttalkWith(self.next, y, z),\n\t\t\t\ttalkWith(y.next, z, self),\n\t\t\t\ttalkWith(z.next, self, y)\n\t\t\t)\n\t\t} {\n\t\t\tz\n\t\t}\n\t}",
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
  "{ :self |\n\t\tnewListElement().initializeSlots(self, nil)\n\t}",
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
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet e = ListElement(self);\n\t\t\te.next := makeList(self - 1);\n\t\t\te\n\t\t}\n\t}",
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
  "{\n\t\ttalkWith(\n\t\t\tmakeList(15),\n\t\t\tmakeList(10),\n\t\t\tmakeList(6)\n\t\t)\n\t}",
);
