sl.extendTypeOrTraitWithMethod(
  "List",
  "FiniteWord",
  "isLyndonWord",
  ["self", "alphabet"],
  sl.annotateFunction(function (_self, _alphabet) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alphabet";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_self);
        let _i = 1;
        let _j = 2;
        /* Statements */
        return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _return_1";
            throw new Error(errorMessage);
          } /* Statements */
          _whileTrue_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_j, _n);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _a = _at_2(_alphabet, _at_2(_self, _i));
              let _b = _at_2(_alphabet, _at_2(_self, _j));
              /* Statements */
              return _if_3(
                _equalsSign_2(_a, _b),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _i = _plusSign_2(_i, 1);
                  return _j = _plusSign_2(_j, 1);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _lessThanSignVerticalLine_2(_a, _b),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      _i = 1;
                      return _j = _plusSign_2(_j, 1);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _return_1(false);
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
          return _equalsSign_2(_i, 1);
        }, ["return:/1"]));
      }, []),
    );
  }, ["self", "alphabet"]),
  "{ :self :alphabet |\n\t\tself.isEmpty.if {\n\t\t\tfalse\n\t\t} {\n\t\t\tlet n = self.size;\n\t\t\tlet i = 1;\n\t\t\tlet j = 2;\n\t\t\tvalueWithReturn { :return:/1 |\n\t\t\t\t{ j <= n }.whileTrue {\n\t\t\t\t\tlet a = alphabet[self[i]];\n\t\t\t\t\tlet b = alphabet[self[j]];\n\t\t\t\t\t(a = b).if {\n\t\t\t\t\t\ti := i + 1;\n\t\t\t\t\t\tj := j + 1\n\t\t\t\t\t} {\n\t\t\t\t\t\t(a <| b).if {\n\t\t\t\t\t\t\ti := 1;\n\t\t\t\t\t\t\tj := j + 1\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tfalse.return\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\ti = 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FiniteWord",
  "isLyndonWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _letters = _sort_1(_nub_1(_self));
    let _alphabet = _asMap_1(
      _withIndexCollect_2(_letters, _hyphenMinusGreaterThanSign_2),
    );
    /* Statements */
    return _isLyndonWord_2(_self, _alphabet);
  }, ["self"]),
  "{ :self |\n\t\tlet letters = self.nub.sort;\n\t\tlet alphabet = letters.withIndexCollect(->).asMap;\n\t\tself.isLyndonWord(alphabet)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "FiniteWord",
  "lyndonWords",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _lyndonWordsDo_3(
      _self,
      _anInteger,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet answer = [];\n\t\tself.lyndonWordsDo(anInteger) { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);
