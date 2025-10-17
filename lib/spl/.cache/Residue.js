sl.addType(
  false,
  "Residue",
  "Residue",
  ["Object", "Equatable", "Comparable", "Magnitude", "Number"],
  ["commonResidue", "modulus"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Residue",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Residue",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Residue",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Residue",
);

sl.copyTraitMethodsToType(
  "Number",
  "Residue",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "plusSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _plusSign_2);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, +)\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "hyphenMinus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _hyphenMinus_2);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, -)\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "asterisk",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _asterisk_2);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, *)\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "solidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _inverse_1(_aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself * aNumber.inverse\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "lessThanSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(
      _commonResidue_1(_self),
      _commonResidue_1(_assertIsCompatibleOperand_2(_self, _aNumber)),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.commonResidue < self.assertIsCompatibleOperand(aNumber).commonResidue\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_Residue_2(_anInteger, _modulus_1(_self)), _self);
  }, ["self", "anInteger", "aBlock:/2"]),
  "{ :self :anInteger :aBlock:/2 |\n\t\taBlock(\n\t\t\tResidue(anInteger, self.modulus),\n\t\t\tself\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSmallInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntegerAndApply_3(_self, _aNumber, _aBlock_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "Residue>>adaptToNumberAndApply: not an integer",
        );
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isSmallInteger.if {\n\t\t\tself.adaptToIntegerAndApply(aNumber, aBlock:/2)\n\t\t} {\n\t\t\tself.error('Residue>>adaptToNumberAndApply: not an integer')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "assertIsCompatibleOperand",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _ampersand_2(
        _isResidue_1(_operand),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_modulus_1(_self), _modulus_1(_operand));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Residue>>assertIsCompatibleResidue");
      }, []),
    );
    return _operand;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t(\n\t\t\toperand.isResidue & {\n\t\t\t\tself.modulus = operand.modulus\n\t\t\t}\n\t\t).ifFalse {\n\t\t\tself.error('Residue>>assertIsCompatibleResidue')\n\t\t};\n\t\toperand\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "binaryOperator",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isResidue_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Residue_2(
          _aBlock_2(
            _commonResidue_1(_self),
            _commonResidue_1(_assertIsCompatibleOperand_2(_self, _aNumber)),
          ),
          _modulus_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToResidueAndApply_3(_aNumber, _self, _aBlock_2);
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isResidue.if {\n\t\t\tResidue(\n\t\t\t\taBlock(\n\t\t\t\t\tself.commonResidue,\n\t\t\t\t\tself.assertIsCompatibleOperand(aNumber).commonResidue\n\t\t\t\t),\n\t\t\t\tself.modulus\n\t\t\t)\n\t\t} {\n\t\t\taNumber.adaptToResidueAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "inverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Residue_2(
      _modularInverse_2(_commonResidue_1(_self), _modulus_1(_self)),
      _modulus_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tResidue(\n\t\t\tself.commonResidue.modularInverse(self.modulus),\n\t\t\tself.modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isExact",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isInteger",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "positiveResidue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _commonResidue_1(_self);
    /* Statements */
    return _if_3(
      _isZero_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _modulus_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _n;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.commonResidue;\n\t\tn.isZero.if {\n\t\t\tself.modulus\n\t\t} {\n\t\t\tn\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_commonResidue_1(_self)), "Z"),
      _storeString_1(_modulus_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.commonResidue.storeString ++ 'Z' ++ self.modulus.storeString\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Residue",
  "Residue",
  ["i", "m"],
  sl.annotateFunction(function (_i, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _i, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newResidue_0(), _percentSign_2(_i, _m), _m);
  }, ["i", "m"]),
  "{ :i :m |\n\t\tnewResidue().initializeSlots(i % m, m)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Residue",
  "asResidue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Residue_2(_at_2(_self, 1), _at_2(_self, 2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>asResidue: size not two");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 2).if {\n\t\t\tResidue(self[1], self[2])\n\t\t} {\n\t\t\tself.error('List>>asResidue: size not two')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aResidue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aResidue, _each);
      }, ["each"]),
    );
  }, ["self", "aResidue", "aBlock:/2"]),
  "{ :self :aResidue :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aResidue, each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aResidue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aResidue, _Residue_2(_self, _modulus_1(_aResidue)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Number>>adaptToResidueAndApply: not integer");
      }, []),
    );
  }, ["self", "aResidue", "aBlock:/2"]),
  "{ :self :aResidue :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(aResidue, Residue(self, aResidue.modulus))\n\t\t} {\n\t\t\tself.error('@Number>>adaptToResidueAndApply: not integer')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Residue",
  "isCommonResidueVector",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isNonNegativeInteger_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_each, _n);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "n"]),
  "{ :self :n |\n\t\tself.allSatisfy { :each |\n\t\t\teach.isNonNegativeInteger & {\n\t\t\t\teach < n\n\t\t\t}\n\t\t}\n\t}",
);
