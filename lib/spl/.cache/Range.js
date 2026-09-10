sl.addType(
  false,
  "Range",
  "Range",
  [
    "Object",
    "Storeable",
    "Equatable",
    "Comparable",
    "Iterable",
    "Collection",
    "Indexable",
    "Sequenceable",
    "ArithmeticProgression",
  ],
  ["start", "stop", "step", "size"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Range",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Collection",
  "Range",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "Range",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "Range",
);

sl.copyTraitMethodsToType(
  "ArithmeticProgression",
  "Range",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_4(
      _negate_1(_start_1(_self)),
      _negate_1(_stop_1(_self)),
      _negate_1(_step_1(_self)),
      _size_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tRange(\n\t\t\tself.start.negate,\n\t\t\tself.stop.negate,\n\t\t\tself.step.negate,\n\t\t\tself.size\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_4(
      _negate_1(_start_1(_self)),
      _negate_1(_stop_1(_self)),
      _negate_1(_step_1(_self)),
      _size_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tRange(\n\t\t\tself.start.negate,\n\t\t\tself.stop.negate,\n\t\t\tself.step.negate,\n\t\t\tself.size\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "plus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_4(
          _plusSign_2(_start_1(_self), _operand),
          _plusSign_2(_stop_1(_self), _operand),
          _step_1(_self),
          _size_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(\n\t\t\t\tself.start + operand,\n\t\t\t\tself.stop + operand,\n\t\t\t\tself.step,\n\t\t\t\tself.size\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_4(
          _plusSign_2(_start_1(_self), _operand),
          _plusSign_2(_stop_1(_self), _operand),
          _step_1(_self),
          _size_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(\n\t\t\t\tself.start + operand,\n\t\t\t\tself.stop + operand,\n\t\t\t\tself.step,\n\t\t\t\tself.size\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "subtract",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_4(
          _hyphenMinus_2(_start_1(_self), _operand),
          _hyphenMinus_2(_stop_1(_self), _operand),
          _step_1(_self),
          _size_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(\n\t\t\t\tself.start - operand,\n\t\t\t\tself.stop - operand,\n\t\t\t\tself.step,\n\t\t\t\tself.size\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallFloat_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_4(
          _hyphenMinus_2(_start_1(_self), _operand),
          _hyphenMinus_2(_stop_1(_self), _operand),
          _step_1(_self),
          _size_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToCollectionAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isSmallFloat.if {\n\t\t\tRange(\n\t\t\t\tself.start - operand,\n\t\t\t\tself.stop - operand,\n\t\t\t\tself.step,\n\t\t\t\tself.size\n\t\t\t)\n\t\t} {\n\t\t\toperand.adaptToCollectionAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "asRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rangeLiteralSyntaxString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.rangeLiteralSyntaxString\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "elementType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeOf_1(_start_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.start.typeOf\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "empty",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_4(1, 0, 1, 0);
  }, ["unused"]),
  "{ :unused |\n\t\tRange(1, 0, 1, 0)\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isRange_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_start_1(_self), _start_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _aBlock_2(_stop_1(_self), _stop_1(_operand)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(_step_1(_self), _step_1(_operand));
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\toperand.isRange & {\n\t\t\taBlock(self.start, operand.start) & {\n\t\t\t\taBlock(self.stop, operand.stop) & {\n\t\t\t\t\taBlock(self.step, operand.step)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isIntegerRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_start_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isInteger_1(_stop_1(_self)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isInteger_1(_step_1(_self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.start.isInteger & {\n\t\t\tself.stop.isInteger & {\n\t\t\t\tself.step.isInteger\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isProper_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_start_1(_self), _stop_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isProper & {\n\t\t\tself.start <= self.stop\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "isProper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _not_1(_isEmpty_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _tilde_2(_stop_1(_self), _last_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.not & {\n\t\t\tself.stop ~ self.last\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "rangeLiteralSyntaxString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_step_1(_self), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _not_1(_isEmpty_1(_self));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("%:%", [_start_1(_self), _stop_1(_self)]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("%:%:%", [
          _printString_1(_start_1(_self)),
          _printString_1(_step_1(_self)),
          _printString_1(_stop_1(_self)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\tself.step = 1 & {\n\t\t\t\tself.isEmpty.not\n\t\t\t}\n\t\t).if {\n\t\t\t'%:%'.format(\n\t\t\t\t[\n\t\t\t\t\tself.start,\n\t\t\t\t\tself.stop\n\t\t\t\t]\n\t\t\t)\n\t\t} {\n\t\t\t'%:%:%'.format(\n\t\t\t\t[\n\t\t\t\t\tself.start.printString,\n\t\t\t\t\tself.step.printString,\n\t\t\t\t\tself.stop.printString\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "removeFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _emptyError_2(_self, "removeFirst");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _removed = _start_1(_self);
        _start_2(_self, _plusSign_2(_start_1(_self), _step_1(_self)));
        _size_2(_self, _hyphenMinus_2(_size_1(_self), 1));
        return _removed;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tself.emptyError('removeFirst')\n\t\t} {\n\t\t\tlet removed = self.start;\n\t\t\tself.start := self.start + self.step;\n\t\t\tself.size := self.size - 1;\n\t\t\tremoved\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "removeLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _emptyError_2(_self, "removeLast");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _removed = _stop_1(_self);
        _stop_2(_self, _hyphenMinus_2(_stop_1(_self), _step_1(_self)));
        _size_2(_self, _hyphenMinus_2(_size_1(_self), 1));
        return _removed;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\tself.emptyError('removeLast')\n\t\t} {\n\t\t\tlet removed = self.stop;\n\t\t\tself.stop := self.stop - self.step;\n\t\t\tself.size := self.size - 1;\n\t\t\tremoved\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "reverseInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _start = _start_1(_self);
    _start_2(_self, _last_1(_self));
    _stop_2(_self, _start);
    _step_2(_self, _hyphenMinus_2(0, _step_1(_self)));
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tlet start = self.start;\n\t\tself.start := self.last;\n\t\tself.stop := start;\n\t\tself.step := 0 - self.step;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reverseInPlace_1(_copy_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.copy.reverseInPlace\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "sort",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _lessThanSign_2(_step_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _reverseInPlace_1(_self);
      }, []),
    );
    return _self;
  }, ["self"]),
  "{ :self |\n\t\t(self.step < 0).ifTrue {\n\t\t\tself.reverseInPlace\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "sorted",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sort_1(_copy_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.copy.sort\n\t}",
);

sl.addMethodToExistingType(
  "Range",
  "Range",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1;
  }, ["self"]),
  "{ :self |\n\t\tList:/1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "inferredRangeSize",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    let _k = _plusSign_2(_quotient_2(_hyphenMinus_2(_stop, _start), _step), 1);
    _k = _normal_1(_k);
    return _if_3(
      _lessThanSign_2(_step, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_start, _stop),
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
            return _k;
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
          _lessThanSign_2(_stop, _start),
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
            return _k;
          }, []),
        );
      }, []),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet k = (stop - start).quotient(step) + 1;\n\t\tk := k.normal;\n\t\t(step < 0).if {\n\t\t\t(start < stop).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tk\n\t\t\t}\n\t\t} {\n\t\t\t(stop < start).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tk\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "nonemptyRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    let _r = _Range_3(_start, _stop, _step);
    _ifTrue_2(
      _isEmpty_1(_r),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_r, "nonemptyRange: invalid (empty) range");
      }, []),
    );
    return _r;
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet r = Range(start, stop, step);\n\t\tr.isEmpty.ifTrue {\n\t\t\tr.error('nonemptyRange: invalid (empty) range')\n\t\t};\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "nonemptyThenTo",
  ["start", "then", "stop"],
  sl.annotateFunction(function (_start, _then, _stop) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _then, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _nonemptyRange_3(_start, _stop, _hyphenMinus_2(_then, _start));
  }, ["start", "then", "stop"]),
  "{ :start :then :stop |\n\t\tnonemptyRange(start, stop, then - start)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "Range",
  ["start", "stop", "step", "size"],
  sl.annotateFunction(function (_start, _stop, _step, _size) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _stop, _step, _size";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _isZero_1(_step),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_start, "@Number>>Range: step is zero");
      }, []),
    );
    _ifFalse_2(
      _isFinite_1(_start),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_start, "@Number>>Range: start is not finite");
      }, []),
    );
    return _initializeSlots_5(_newRange_0(), _start, _stop, _step, _size);
  }, ["start", "stop", "step", "size"]),
  "{ :start :stop :step :size |\n\t\tstep.isZero.ifTrue {\n\t\t\tstart.error('@Number>>Range: step is zero')\n\t\t};\n\t\tstart.isFinite.ifFalse {\n\t\t\tstart.error('@Number>>Range: start is not finite')\n\t\t};\n\t\tnewRange().initializeSlots(start, stop, step, size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "Range",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    let _size = _inferredRangeSize_3(_start, _stop, _step);
    return _Range_4(_start, _stop, _step, _size);
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet size = inferredRangeSize(start, stop, step);\n\t\tRange(start, stop, step, size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "to",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    let _size = _inferredRangeSize_3(_start, _stop, _step);
    return _Range_4(_start, _stop, _step, _size);
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet size = inferredRangeSize(start, stop, step);\n\t\tRange(start, stop, step, size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "toBy",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    let _size = _inferredRangeSize_3(_start, _stop, _step);
    return _Range_4(_start, _stop, _step, _size);
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tlet size = inferredRangeSize(start, stop, step);\n\t\tRange(start, stop, step, size)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "thenTo",
  ["self", "second", "last"],
  sl.annotateFunction(function (_self, _second, _last) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _second, _last";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(_self, _last, _hyphenMinus_2(_second, _self));
  }, ["self", "second", "last"]),
  "{ :self :second :last |\n\t\tRange(self, last, second - self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "to",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSequenceable_1(_stop),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _to_2([_self], _stop);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_3(_self, _stop, 1);
      }, []),
    );
  }, ["self", "stop"]),
  "{ :self :stop |\n\t\tstop.isSequenceable.if {\n\t\t\t[self].to(stop)\n\t\t} {\n\t\t\tRange(self, stop, 1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "upOrDownTo",
  ["self", "stop"],
  sl.annotateFunction(function (_self, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_3(
      _self,
      _stop,
      _if_3(
        _lessThanSignEqualsSign_2(_self, _stop),
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
          return -1;
        }, []),
      ),
    );
  }, ["self", "stop"]),
  "{ :self :stop |\n\t\tRange(\n\t\t\tself,\n\t\t\tstop,\n\t\t\t(self <= stop).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t-1\n\t\t\t}\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "Range",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(
        3,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Range_3(_at_2(_self, 1), _at_2(_self, 2), _at_2(_self, 3));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        4,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Range_4(
            _at_2(_self, 1),
            _at_2(_self, 2),
            _at_2(_self, 3),
            _at_2(_self, 4),
          );
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself.size.caseOf(\n\t\t\t[\n\t\t\t\t3 -> { Range(self[1], self[2], self[3]) },\n\t\t\t\t4 -> { Range(self[1], self[2], self[3], self[4]) }\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "nonemptyRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _stop,
      _start,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _nonemptyRange_3(_i, _j, _step);
      }, ["i", "j"]),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tstop.adaptToCollectionAndApply(start) { :i :j |\n\t\t\tnonemptyRange(i, j, step)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Range",
  "nonemptyRange",
  ["start", "stop", "step"],
  sl.annotateFunction(function (_start, _stop, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _start, _stop, _step";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _stop,
      _start,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _nonemptyRange_3(_i, _j, _step);
      }, ["i", "j"]),
    );
  }, ["start", "stop", "step"]),
  "{ :start :stop :step |\n\t\tstop.adaptToCollectionAndApply(start) { :i :j |\n\t\t\tnonemptyRange(i, j, step)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "to",
  ["start", "stop"],
  sl.annotateFunction(function (_start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _start, _to_2);
  }, ["start", "stop"]),
  "{ :start :stop |\n\t\tstop.adaptToCollectionAndApply(start, to:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Range",
  "to",
  ["start", "stop"],
  sl.annotateFunction(function (_start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _start, _to_2);
  }, ["start", "stop"]),
  "{ :start :stop |\n\t\tstop.adaptToCollectionAndApply(start, to:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "upOrDownTo",
  ["start", "stop"],
  sl.annotateFunction(function (_start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _start, _upOrDownTo_2);
  }, ["start", "stop"]),
  "{ :start :stop |\n\t\tstop.adaptToCollectionAndApply(start, upOrDownTo:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Range",
  "upOrDownTo",
  ["start", "stop"],
  sl.annotateFunction(function (_start, _stop) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _start, _stop";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_stop, _start, _upOrDownTo_2);
  }, ["start", "stop"]),
  "{ :start :stop |\n\t\tstop.adaptToCollectionAndApply(start, upOrDownTo:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Range",
  "FiniteRange",
  ["start", "stop", "step", "size"],
  sl.annotateFunction(function (_start, _stop, _step, _size) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _start, _stop, _step, _size";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isFinite_1(_start),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _isFinite_1(_stop),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ampersand_2(
                _ampersand_2(
                  _exclamationMarkEqualsSign_2(_step, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _isFinite_1(_size);
                  }, []),
                ),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  let _calculatedStop = _plusSign_2(
                    _start,
                    _asterisk_2(_step, _hyphenMinus_2(_size, 1)),
                  );
                  return _isVeryCloseTo_2(_calculatedStop, _stop);
                }, []),
              );
            }, []),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Range_4(_start, _stop, _step, _size);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_start, "FiniteRange");
      }, []),
    );
  }, ["start", "stop", "step", "size"]),
  "{ :start :stop :step :size |\n\t\t(\n\t\t\tstart.isFinite & {\n\t\t\t\tstop.isFinite & {\n\t\t\t\t\tstep != 0 & {\n\t\t\t\t\t\tsize.isFinite\n\t\t\t\t\t} & {\n\t\t\t\t\t\tlet calculatedStop = start + (step * (size - 1));\n\t\t\t\t\t\tcalculatedStop.isVeryCloseTo(stop)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t).if {\n\t\t\tRange(start, stop, step, size)\n\t\t} {\n\t\t\tstart.error('FiniteRange')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Range",
  "FiniteRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_self, 4);
    let _start = _at_2(__SplVar1, 1);
    let _stop = _at_2(__SplVar1, 2);
    let _step = _at_2(__SplVar1, 3);
    let _size = _at_2(__SplVar1, 4);
    return _FiniteRange_4(_start, _stop, _step, _size);
  }, ["self"]),
  "{ :self |\n\t\tlet [start, stop, step, size] = self;\n\t\tFiniteRange(start, stop, step, size)\n\t}",
);
