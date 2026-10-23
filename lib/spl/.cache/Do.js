sl.addTrait("@Do", "Do");

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "and",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _nullaryApply_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(nullaryApply/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "ampersand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _nullaryApply_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(nullaryApply/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "evaluatingAnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "ampersandAmpersand",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allSatisfy(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "evaluatingOr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.anySatisfy(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "verticalLineVerticalLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.anySatisfy(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "or",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _nullaryApply_1);
  }, ["self"]),
  "{ :self |\n\t\tself.anySatisfy(nullaryApply/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "verticalLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_self, _nullaryApply_1);
  }, ["self"]),
  "{ :self |\n\t\tself.anySatisfy(nullaryApply/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "absMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _injectInto_3(
      _self,
      _abs_1(_anyOne_1(_self)),
      sl.annotateFunction(function (_answer, _each) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _answer, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _max_2(_answer, _abs_1(_each));
      }, ["answer", "each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.injectInto(self.anyOne.abs) { :answer :each |\n\t\t\tanswer.max(each.abs)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "allFalse",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "noneSatisfy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "allFalse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allFalse_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allFalse(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "allTrue",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "allSatisfy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "allTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allTrue_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.allTrue(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "anyOne",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _return_1(_each);
        }, ["each"]),
      );
      return _error_2(_self, "@Do>>anyOne: empty iterable");
    }, ["return/1"]));
  }, ["self"]),
  "{ :self |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.return\n\t\t\t};\n\t\t\tself.error('@Do>>anyOne: empty iterable')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "anyTrue",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "anySatisfy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["each"]),
      );
      return false;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\teach.aBlock.ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "anyTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anyTrue_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.anyTrue(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "cartesianProductDo",
  ["self", "operand", "aBlock/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _operand,
          sl.annotateFunction(function (_y) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _y";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_x, _y);
          }, ["y"]),
        );
      }, ["x"]),
    );
  }, ["self", "operand", "aBlock/2"]),
  "{ :self :operand :aBlock/2 |\n\t\tself.do { :x |\n\t\t\toperand.do { :y |\n\t\t\t\taBlock(x, y)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "cartesianProduct",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _cartesianProductDo_3(
      _self,
      _operand,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, [_i, _j]);
      }, ["i", "j"]),
    );
    return _answer;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet answer = [];\n\t\tself.cartesianProductDo(operand) { :i :j |\n\t\t\tanswer.add!([i, j])\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "containsOnly",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _x,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_y, _i);
      }, ["i"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tx.allSatisfy { :i |\n\t\t\ty.includes(i)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "count",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = 0;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSign_2(_answer, 1);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = 0;\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tanswer := answer + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "countAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(
      _self,
      sl.annotateFunction(function (_unusedItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unusedItem";
          throw new Error(errorMessage);
        } /* Statements */
        return true;
      }, ["unusedItem"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.count { :unusedItem |\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "countDistinct",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _set = _UnsortedSet_0();
    _comparatorMutateInPlace_2(_set, _aBlock_2);
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includeInPlace_2(_set, _each);
      }, ["each"]),
    );
    return _size_1(_set);
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tlet set = UnsortedSet();\n\t\tset.comparator := aBlock/2;\n\t\tself.do { :each |\n\t\t\tset.include!(each)\n\t\t};\n\t\tset.size\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "countIntegers",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_operand, 2);
    let _p = _at_2(__SplVar1, 1);
    let _q = _at_2(__SplVar1, 2);
    let _answer = _List_2(_plusSign_2(_hyphenMinus_2(_q, _p), 1), 0);
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _ampersand_2(
            _greaterThanSignEqualsSign_2(_each, _p),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_each, _q);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            let _index = _plusSign_2(_hyphenMinus_2(_each, _p), 1);
            return _putInPlace_3(
              _answer,
              _index,
              _plusSign_2(_at_2(_answer, _index), 1),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet [p, q] = operand;\n\t\tlet answer = List(q - p + 1, 0);\n\t\tself.do { :each |\n\t\t\t(\n\t\t\t\teach >= p & {\n\t\t\t\t\teach <= q\n\t\t\t\t}\n\t\t\t).ifTrue {\n\t\t\t\tlet index = each - p + 1;\n\t\t\t\tanswer[index] := answer[index] + 1\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "countOccurences",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _count_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _anObject);
      }, ["each"]),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.count { :each |\n\t\t\teach = anObject\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepAllSatisfy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _deepDo_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\twithReturn { :return/1 |\n\t\t\tself.deepDo { :each |\n\t\t\t\teach.aBlock.ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepDo",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _type = _typeName_1(_self);
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_typeName_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _deepDo_2(_each, _aBlock_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet type = self.typeName;\n\t\tself.do { :each |\n\t\t\t(each.typeName = type).if {\n\t\t\t\teach.deepDo(aBlock/1)\n\t\t\t} {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepInjectInto",
  ["self", "initialValue", "aBlock/2"],
  sl.annotateFunction(function (_self, _initialValue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _initialValue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _injectIntoBy_4(_self, _initialValue, _aBlock_2, _deepDo_2);
  }, ["self", "initialValue", "aBlock/2"]),
  "{ :self :initialValue :aBlock/2 |\n\t\tself.injectIntoBy(initialValue, aBlock/2, deepDo/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _max_2);
  }, ["self"]),
  "{ :self |\n\t\tself.deepReduce(max/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepMin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _min_2);
  }, ["self"]),
  "{ :self |\n\t\tself.deepReduce(min/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepMinMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepInjectInto_3(
      _self,
      [Infinity, -Infinity],
      sl.annotateFunction(function (_m, _x) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _m, _x";
          throw new Error(errorMessage);
        } /* Statements */
        _putInPlace_3(_m, 1, _min_2(_at_2(_m, 1), _x));
        _putInPlace_3(_m, 2, _max_2(_at_2(_m, 2), _x));
        return _m;
      }, ["m", "x"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.deepInjectInto([Infinity, -Infinity]) { :m :x |\n\t\t\tm[1] := m[1].min(x);\n\t\t\tm[2] := m[2].max(x);\n\t\t\tm\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepReduce",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _deepDo_2);
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tself.reduceBy(aBlock/2, deepDo/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "deepSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _deepReduce_2(_self, _plusSign_2);
  }, ["self"]),
  "{ :self |\n\t\tself.deepReduce(+)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detect",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfNone_3(
      _self,
      _aBlock_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Do>>detect: not found");
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.detectIfNone(aBlock/1) {\n\t\t\tself.error('@Do>>detect: not found')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detect",
  ["self", "count", "aBlock/1"],
  sl.annotateFunction(function (_self, _count, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _count, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _aBlock_1(_each),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _addInPlace_2(_answer, _each);
              _count = _hyphenMinus_2(_count, 1);
              return _ifTrue_2(
                _lessThanSign_2(_count, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(_answer);
                }, []),
              );
            }, []),
          );
        }, ["each"]),
      );
      return _error_2(_self, "detect");
    }, ["return/1"]));
  }, ["self", "count", "aBlock/1"]),
  "{ :self :count :aBlock/1 |\n\t\tlet answer = [];\n\t\twithReturn { :return/1 |\n\t\t\tself.do { :each |\n\t\t\t\taBlock(each).ifTrue {\n\t\t\t\t\tanswer.add!(each);\n\t\t\t\t\tcount := count - 1;\n\t\t\t\t\t(count < 1).ifTrue {\n\t\t\t\t\t\tanswer.return\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.error('detect')\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectIfFound",
  ["self", "aBlock/1", "foundBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1, _foundBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _foundBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(
      _self,
      _aBlock_1,
      _foundBlock_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "aBlock/1", "foundBlock/1"]),
  "{ :self :aBlock/1 :foundBlock/1 |\n\t\tself.detectIfFoundIfNone(aBlock/1, foundBlock/1) {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectIfFoundIfNone",
  ["self", "aBlock/1", "foundBlock/1", "exceptionBlock/0"],
  sl.annotateFunction(
    function (_self, _aBlock_1, _foundBlock_1, _exceptionBlock_0) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _aBlock_1, _foundBlock_1, _exceptionBlock_0";
        throw new Error(errorMessage);
      } /* Statements */
      return _detectIfFoundIfNoneUsing_5(
        _self,
        _aBlock_1,
        _foundBlock_1,
        _exceptionBlock_0,
        _do_2,
      );
    },
    ["self", "aBlock/1", "foundBlock/1", "exceptionBlock/0"],
  ),
  "{ :self :aBlock/1 :foundBlock/1 :exceptionBlock/0 |\n\t\tself.detectIfFoundIfNoneUsing(aBlock/1, foundBlock/1, exceptionBlock/0, do/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectIfFoundIfNoneUsing",
  ["self", "aBlock/1", "foundBlock/1", "exceptionBlock/0", "doBlock/2"],
  sl.annotateFunction(
    function (_self, _aBlock_1, _foundBlock_1, _exceptionBlock_0, _doBlock_2) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _self, _aBlock_1, _foundBlock_1, _exceptionBlock_0, _doBlock_2";
        throw new Error(errorMessage);
      } /* Statements */
      return _withReturn_1(sl.annotateFunction(function (_return_1) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _return_1";
          throw new Error(errorMessage);
        } /* Statements */
        _doBlock_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _aBlock_1(_each),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _return_1(_foundBlock_1(_each));
              }, []),
            );
          }, ["each"]),
        );
        return _exceptionBlock_0();
      }, ["return/1"]));
    },
    ["self", "aBlock/1", "foundBlock/1", "exceptionBlock/0", "doBlock/2"],
  ),
  "{ :self :aBlock/1 :foundBlock/1 :exceptionBlock/0 :doBlock/2 |\n\t\twithReturn { :return/1 |\n\t\t\tdoBlock(self) { :each |\n\t\t\t\taBlock(each).ifTrue {\n\t\t\t\t\tfoundBlock(each).return\n\t\t\t\t}\n\t\t\t};\n\t\t\texceptionBlock()\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectIfNone",
  ["self", "aBlock/1", "whenAbsent/0"],
  sl.annotateFunction(function (_self, _aBlock_1, _whenAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _whenAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _detectIfFoundIfNone_4(_self, _aBlock_1, _identity_1, _whenAbsent_0);
  }, ["self", "aBlock/1", "whenAbsent/0"]),
  "{ :self :aBlock/1 :whenAbsent/0 |\n\t\tself.detectIfFoundIfNone(aBlock/1, identity/1, whenAbsent/0)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectSum",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _sum = 0;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum = _plusSign_2(_sum, _aBlock_1(_each));
      }, ["each"]),
    );
    return _sum;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet sum = 0;\n\t\tself.do { :each |\n\t\t\tsum := sum + aBlock(each)\n\t\t};\n\t\tsum\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectMax",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _maxElement = null;
    let _maxValue = null;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifNil_3(
          _maxValue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _maxElement = _each;
            return _maxValue = _aBlock_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            let _nextValue = _aBlock_1(_each);
            return _ifTrue_2(
              _greaterThanSign_2(_nextValue, _maxValue),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _maxElement = _each;
                return _maxValue = _nextValue;
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _maxElement;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet maxElement = nil;\n\t\tlet maxValue = nil;\n\t\tself.do { :each |\n\t\t\tmaxValue.ifNil {\n\t\t\t\tmaxElement := each;\n\t\t\t\tmaxValue := aBlock(each)\n\t\t\t} {\n\t\t\t\tlet nextValue = aBlock(each);\n\t\t\t\t(nextValue > maxValue).ifTrue {\n\t\t\t\t\tmaxElement := each;\n\t\t\t\t\tmaxValue := nextValue\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tmaxElement\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "detectMin",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _minElement = null;
    let _minValue = null;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifNil_3(
          _minValue,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _minElement = _each;
            return _minValue = _aBlock_1(_each);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            let _nextValue = _aBlock_1(_each);
            return _ifTrue_2(
              _lessThanSign_2(_nextValue, _minValue),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _minElement = _each;
                return _minValue = _nextValue;
              }, []),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _minElement;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet minElement = nil;\n\t\tlet minValue = nil;\n\t\tself.do { :each |\n\t\t\tminValue.ifNil {\n\t\t\t\tminElement := each;\n\t\t\t\tminValue := aBlock(each)\n\t\t\t} {\n\t\t\t\tlet nextValue = aBlock(each);\n\t\t\t\t(nextValue < minValue).ifTrue {\n\t\t\t\t\tminElement := each;\n\t\t\t\t\tminValue := nextValue\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tminElement\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Do>>do");
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.typeResponsibility('@Do>>do')\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "doSeparatedBy",
  ["self", "elementBlock/1", "separatorBlock/0"],
  sl.annotateFunction(function (_self, _elementBlock_1, _separatorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _elementBlock_1, _separatorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _beforeFirst = true;
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _if_3(
          _beforeFirst,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _beforeFirst = false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _separatorBlock_0();
          }, []),
        );
        return _elementBlock_1(_each);
      }, ["each"]),
    );
  }, ["self", "elementBlock/1", "separatorBlock/0"]),
  "{ :self :elementBlock/1 :separatorBlock/0 |\n\t\tlet beforeFirst = true;\n\t\tself.do { :each |\n\t\t\tbeforeFirst.if {\n\t\t\t\tbeforeFirst := false\n\t\t\t} {\n\t\t\t\tseparatorBlock()\n\t\t\t};\n\t\t\telementBlock(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "doWithBreak",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      let _break_0 = sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _return_1(null);
      }, []);
      return _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _aBlock_2(_each, _break_0);
        }, ["each"]),
      );
    }, ["return/1"]));
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\twithReturn { :return/1 |\n\t\t\tlet break = {\n\t\t\t\tnil.return\n\t\t\t};\n\t\t\tself.do { :each |\n\t\t\t\taBlock(each, break/0)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "doWithout",
  ["self", "aBlock/1", "anItem"],
  sl.annotateFunction(function (_self, _aBlock_1, _anItem) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_1, _anItem";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _equalsSign_2(_anItem, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/1", "anItem"]),
  "{ :self :aBlock/1 :anItem |\n\t\tself.do { :each |\n\t\t\t(anItem = each).ifFalse {\n\t\t\t\taBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "duplicatesSet",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Statements */
    let _a = _Set_0();
    let _b = _Set_0();
    _do_2(
      _c,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includes_2(_a, _x),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _includeInPlace_2(_b, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addInPlace_2(_a, _x);
          }, []),
        );
      }, ["x"]),
    );
    return _b;
  }, ["c"]),
  "{ :c |\n\t\tlet a = Set();\n\t\tlet b = Set();\n\t\tc.do { :x |\n\t\t\ta.includes(x).if {\n\t\t\t\tb.include!(x)\n\t\t\t} {\n\t\t\t\ta.add!(x)\n\t\t\t}\n\t\t};\n\t\tb\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesBy",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_each, _anObject);
      }, ["each"]),
    );
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tself.anySatisfy { :each |\n\t\t\taBlock(each, anObject)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesBy_3(_self, _anObject, _isEqual_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.includesBy(anObject, isEqual/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesAny",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _aCollection,
        sl.annotateFunction(function (_elem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _elem";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _includes_2(_self, _elem),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["elem"]),
      );
      return false;
    }, ["return/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\twithReturn { :return/1 |\n\t\t\taCollection.do { :elem |\n\t\t\t\tself.includes(elem).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _aCollection,
        sl.annotateFunction(function (_elem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _elem";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifFalse_2(
            _includes_2(_self, _elem),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
        }, ["elem"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\twithReturn { :return/1 |\n\t\t\taCollection.do { :elem |\n\t\t\t\tself.includes(elem).ifFalse {\n\t\t\t\t\tfalse.return\n\t\t\t\t}\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesExactly",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _includesAll_2(_self, _aCollection),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesOnly_2(_self, _aCollection);
      }, []),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.includesAll(aCollection) & {\n\t\t\tself.includesOnly(aCollection)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesNone",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_includesAny_2(_self, _aCollection));
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.includesAny(aCollection).not\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "includesOnly",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesAll_2(_aCollection, _self);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.includesAll(self)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "injectIntoBy",
  ["self", "initialValue", "aBlock/2", "doBlock/2"],
  sl.annotateFunction(function (_self, _initialValue, _aBlock_2, _doBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _initialValue, _aBlock_2, _doBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _nextValue = _initialValue;
    _doBlock_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextValue = _aBlock_2(_nextValue, _each);
      }, ["each"]),
    );
    return _nextValue;
  }, ["self", "initialValue", "aBlock/2", "doBlock/2"]),
  "{ :self :initialValue :aBlock/2 :doBlock/2 |\n\t\tlet nextValue = initialValue;\n\t\tdoBlock(self) { :each |\n\t\t\tnextValue := aBlock(nextValue, each)\n\t\t};\n\t\tnextValue\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "injectInto",
  ["self", "initialValue", "aBlock/2"],
  sl.annotateFunction(function (_self, _initialValue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _initialValue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _injectIntoBy_4(_self, _initialValue, _aBlock_2, _do_2);
  }, ["self", "initialValue", "aBlock/2"]),
  "{ :self :initialValue :aBlock/2 |\n\t\tself.injectIntoBy(initialValue, aBlock/2, do/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "isDuplicateFree",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      let _items = [];
      _do_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          _ifTrue_2(
            _includesBy_3(_items, _each, _aBlock_2),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(false);
            }, []),
          );
          return _addInPlace_2(_items, _each);
        }, ["each"]),
      );
      return true;
    }, ["return/1"]));
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\twithReturn { :return/1 |\n\t\t\tlet items = [];\n\t\t\tself.do { :each |\n\t\t\t\titems.includesBy(each, aBlock/2).ifTrue {\n\t\t\t\t\tfalse.return\n\t\t\t\t};\n\t\t\t\titems.add!(each)\n\t\t\t};\n\t\t\ttrue\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "isDuplicateFree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isDuplicateFree_2(_self, _isEqual_2);
  }, ["self"]),
  "{ :self |\n\t\tself.isDuplicateFree(isEqual/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "isProperSubset",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _includesAll_2(_aCollection, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_self, _aCollection);
      }, []),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.includesAll(self) & {\n\t\t\tself != aCollection\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "isSubset",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesAll_2(_aCollection, _self);
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.includesAll(self)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "items",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _aBlock_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addInPlace_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tlet answer = [];\n\t\taBlock(self) { :each |\n\t\t\tanswer.add!(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "items",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _items_2(_self, _do_2);
  }, ["self"]),
  "{ :self |\n\t\tself.items(do/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "levelBy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = [];
    _withLevelDo_2(
      _self,
      sl.annotateFunction(function (_each, _level) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _level";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_level),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addInPlace_2(_answer, _each);
          }, []),
        );
      }, ["each", "level"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = [];\n\t\tself.withLevelDo { :each :level |\n\t\t\taBlock(level).ifTrue {\n\t\t\t\tanswer.add!(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "level",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _levelBy_2(
      _self,
      sl.annotateFunction(function (_level) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _level";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aList, _level);
      }, ["level"]),
    );
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.levelBy { :level |\n\t\t\taList.includes(level)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "maxOn",
  ["self", "f/1"],
  sl.annotateFunction(function (_self, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isGreaterOn_3(_a, _b, _f_1);
      }, ["a", "b"]),
    );
  }, ["self", "f/1"]),
  "{ :self :f/1 |\n\t\tself.minBy { :a :b |\n\t\t\tisGreaterOn(a, b, f/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "maximum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _max_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(max/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _max_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(max/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "maximalBy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _z = _collect_2(_self, _aBlock_1);
    let _i = _indicesOf_2(_z, _max_1(_z));
    return _selectIndices_2(_self, _i);
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet z = self.collect(aBlock/1);\n\t\tlet i = z.indicesOf(z.max);\n\t\tself.selectIndices(i)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _min_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(min/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _min_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(min/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minBy",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(
      _self,
      sl.annotateFunction(function (_p, _q) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _p, _q";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _aBlock_2(_p, _q),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _p;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _q;
          }, []),
        );
      }, ["p", "q"]),
    );
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tself.reduce { :p :q |\n\t\t\taBlock(p, q).if {\n\t\t\t\tp\n\t\t\t} {\n\t\t\t\tq\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minOn",
  ["self", "f/1"],
  sl.annotateFunction(function (_self, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _minBy_2(
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isLessOn_3(_a, _b, _f_1);
      }, ["a", "b"]),
    );
  }, ["self", "f/1"]),
  "{ :self :f/1 |\n\t\tself.minBy { :a :b |\n\t\t\tisLessOn(a, b, f/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimalBy",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _z = _collect_2(_self, _aBlock_1);
    let _i = _indicesOf_2(_z, _min_1(_z));
    return _selectIndices_2(_self, _i);
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet z = self.collect(aBlock/1);\n\t\tlet i = z.indicesOf(z.min);\n\t\tself.selectIndices(i)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimumMaximum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _min = _anyOne_1(_self);
    let _max = _min;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _min = _min_2(_min, _each);
        return _max = _max_2(_max, _each);
      }, ["each"]),
    );
    return [_min, _max];
  }, ["self"]),
  "{ :self |\n\t\tlet min = self.anyOne;\n\t\tlet max = min;\n\t\tself.do { :each |\n\t\t\tmin := min.min(each);\n\t\t\tmax := max.max(each)\n\t\t};\n\t\t[min, max]\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _min = _anyOne_1(_self);
    let _max = _min;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _min = _min_2(_min, _each);
        return _max = _max_2(_max, _each);
      }, ["each"]),
    );
    return [_min, _max];
  }, ["self"]),
  "{ :self |\n\t\tlet min = self.anyOne;\n\t\tlet max = min;\n\t\tself.do { :each |\n\t\t\tmin := min.min(each);\n\t\t\tmax := max.max(each)\n\t\t};\n\t\t[min, max]\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimumExcludedValue",
  ["x", "u"],
  sl.annotateFunction(function (_x, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _detect_2(
      _u,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_includes_2(_x, _n));
      }, ["n"]),
    );
  }, ["x", "u"]),
  "{ :x :u |\n\t\tu.detect { :n |\n\t\t\tx.includes(n).not\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimumExcludedValue",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumExcludedValue_2(_x, _to_2(0, Infinity));
  }, ["x"]),
  "{ :x |\n\t\tx.minimumExcludedValue(0.to(Infinity))\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "minimumExcludedPositiveInteger",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _minimumExcludedValue_2(_x, _to_2(1, Infinity));
  }, ["x"]),
  "{ :x |\n\t\tx.minimumExcludedValue(1.to(Infinity))\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "neumaierSum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _sum = 0.0;
    let _c = 0.0;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let _t = _plusSign_2(_sum, _each);
        _if_3(
          _greaterThanSignEqualsSign_2(_abs_1(_sum), _abs_1(_each)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(
              _c,
              _plusSign_2(_hyphenMinus_2(_sum, _t), _each),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c = _plusSign_2(
              _c,
              _plusSign_2(_hyphenMinus_2(_each, _t), _sum),
            );
          }, []),
        );
        return _sum = _t;
      }, ["each"]),
    );
    return _plusSign_2(_sum, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet sum = 0.0;\n\t\tlet c = 0.0;\n\t\tself.do { :each |\n\t\t\tlet t = sum + each;\n\t\t\t(sum.abs >= each.abs).if {\n\t\t\t\tc := c + ((sum - t) + each)\n\t\t\t} {\n\t\t\t\tc := c + ((each - t) + sum)\n\t\t\t};\n\t\t\tsum := t\n\t\t};\n\t\tsum + c\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "noneTrue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _noneSatisfy_2(_self, _identity_1);
  }, ["self"]),
  "{ :self |\n\t\tself.noneSatisfy(identity/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _tally = 0;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _equalsSign_2(_anObject, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tally = _plusSign_2(_tally, 1);
          }, []),
        );
      }, ["each"]),
    );
    return _tally;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet tally = 0;\n\t\tself.do { :each |\n\t\t\t(anObject = each).ifTrue {\n\t\t\t\ttally := tally + 1\n\t\t\t}\n\t\t};\n\t\ttally\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "oneSatisfies",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_count_2(_self, _aBlock_1), 1);
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.count(aBlock/1) = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "product",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _a = _aBlock_1(_first_1(_self));
        let _b = _allButFirst_1(_self);
        return _injectInto_3(
          _b,
          _a,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_i, _aBlock_1(_j));
          }, ["i", "j"]),
        );
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.isEmpty.if {\n\t\t\t1\n\t\t} {\n\t\t\tlet a = aBlock(self.first);\n\t\t\tlet b = self.allButFirst;\n\t\t\tb.injectInto(a) { :i :j |\n\t\t\t\ti * aBlock(j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "product",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
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
        return _reduce_2(_self, _times_2);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.ifEmpty {\n\t\t\t1\n\t\t} {\n\t\t\tself.reduce(times/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "range",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_max_1(_self), _min_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.max - self.min\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "reduceBy",
  ["self", "aBlock/2", "iterationBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2, _iterationBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aBlock_2, _iterationBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    let _isFirst = true;
    let _nextValue = null;
    _iterationBlock_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFirst,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _nextValue = _each;
            return _isFirst = false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextValue = _aBlock_2(_nextValue, _each);
          }, []),
        );
      }, ["each"]),
    );
    _ifTrue_2(
      _isFirst,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Do>>reduceBy: empty collection");
      }, []),
    );
    return _nextValue;
  }, ["self", "aBlock/2", "iterationBlock/2"]),
  "{ :self :aBlock/2 :iterationBlock/2 |\n\t\tlet isFirst = true;\n\t\tlet nextValue = nil;\n\t\tself.iterationBlock { :each |\n\t\t\tisFirst.if {\n\t\t\t\tnextValue := each;\n\t\t\t\tisFirst := false\n\t\t\t} {\n\t\t\t\tnextValue := aBlock(nextValue, each)\n\t\t\t}\n\t\t};\n\t\tisFirst.ifTrue {\n\t\t\tself.error('@Do>>reduceBy: empty collection')\n\t\t};\n\t\tnextValue\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "reduce",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduceBy_3(_self, _aBlock_2, _do_2);
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tself.reduceBy(aBlock/2, do/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "rejectThenDo",
  ["self", "rejectBlock/1", "doBlock/1"],
  sl.annotateFunction(function (_self, _rejectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _rejectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifFalse_2(
          _rejectBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _doBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "rejectBlock/1", "doBlock/1"]),
  "{ :self :rejectBlock/1 :doBlock/1 |\n\t\tself.do { :each |\n\t\t\trejectBlock(each).ifFalse {\n\t\t\t\tdoBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "selectThenDo",
  ["self", "selectBlock/1", "doBlock/1"],
  sl.annotateFunction(function (_self, _selectBlock_1, _doBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _selectBlock_1, _doBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _selectBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _doBlock_1(_each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "selectBlock/1", "doBlock/1"]),
  "{ :self :selectBlock/1 :doBlock/1 |\n\t\tself.do { :each |\n\t\t\tselectBlock(each).ifTrue {\n\t\t\t\tdoBlock(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _tally = 0;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tally = _plusSign_2(_tally, 1);
      }, ["each"]),
    );
    return _tally;
  }, ["self"]),
  "{ :self |\n\t\tlet tally = 0;\n\t\tself.do { :each |\n\t\t\ttally := tally + 1\n\t\t};\n\t\ttally\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "sum",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _a = _aBlock_1(_first_1(_self));
        let _b = _allButFirst_1(_self);
        return _injectInto_3(
          _b,
          _a,
          sl.annotateFunction(function (_i, _j) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _i, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_i, _aBlock_1(_j));
          }, ["i", "j"]),
        );
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.isEmpty.if {\n\t\t\t0\n\t\t} {\n\t\t\tlet a = aBlock(self.first);\n\t\t\tlet b = self.allButFirst;\n\t\t\tb.injectInto(a) { :i :j |\n\t\t\t\ti + aBlock(j)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "sum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _plus_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(plus/2)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "sumOfSquares",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_2(_self, _square_1);
  }, ["self"]),
  "{ :self |\n\t\tself.sum(square/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "withLevelDo",
  ["self", "aBlock/2", "level"],
  sl.annotateFunction(function (_self, _aBlock_2, _level) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aBlock_2, _level";
      throw new Error(errorMessage);
    } /* Statements */
    let _type = _typeName_1(_self);
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_typeName_1(_each), _type),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _withLevelDo_3(_each, _aBlock_2, _plusSign_2(_level, 1));
            return _aBlock_2(_each, _level);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_each, _level);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/2", "level"]),
  "{ :self :aBlock/2 :level |\n\t\tlet type = self.typeName;\n\t\tself.do { :each |\n\t\t\t(each.typeName = type).if {\n\t\t\t\teach.withLevelDo(aBlock/2, level + 1);\n\t\t\t\taBlock(each, level)\n\t\t\t} {\n\t\t\t\taBlock(each, level)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "@Do",
  "Do",
  "withLevelDo",
  ["self", "aBlock/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    _withLevelDo_3(_self, _aBlock_2, 1);
    _aBlock_2(_self, 0);
    return null;
  }, ["self", "aBlock/2"]),
  "{ :self :aBlock/2 |\n\t\tself.withLevelDo(aBlock/2, 1);\n\t\taBlock(self, 0);\n\t\tnil\n\t}",
);
