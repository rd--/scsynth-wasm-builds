sl.addType(
  false,
  "Residue",
  "Residue",
  ["Object", "Magnitude", "Number"],
  ["commonResidue", "modulus"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _plusSign_2);
  },
  "{ :self :aNumber | binaryOperator(self,aNumber, +) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "hyphenMinus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _hyphenMinus_2);
  },
  "{ :self :aNumber | binaryOperator(self,aNumber, -) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "asterisk",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _binaryOperator_3(_self, _aNumber, _asterisk_2);
  },
  "{ :self :aNumber | binaryOperator(self,aNumber, *) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "solidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _inverse_1(_aNumber));
  },
  "{ :self :aNumber | *(self, inverse(aNumber)) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_Residue_2(_anInteger, _modulus_1(_self)), _self);
  },
  "{ :self :anInteger :aBlock:/2 | aBlock(Residue(anInteger, modulus(self)), self) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSmallInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToIntegerAndApply_3(_self, _aNumber, _aBlock_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Residue>>adaptToNumberAndApply: not an integer");
    });
  },
  "{ :self :aNumber :aBlock:/2 | if(isSmallInteger(aNumber), { adaptToIntegerAndApply(self,aNumber, aBlock:/2) }, { error(self,'Residue>>adaptToNumberAndApply: not an integer') }) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "assertIsCompatibleResidue",
  ["self", "aResidue"],
  function (_self, _aResidue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aResidue";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_modulus_1(_self), _modulus_1(_aResidue)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Residue>>assertIsCompatibleResidue");
      },
    );
  },
  "{ :self :aResidue | ifFalse((=(modulus(self), modulus(aResidue))), { error(self,'Residue>>assertIsCompatibleResidue') }) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "binaryOperator",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isResidue_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      _assertIsCompatibleResidue_2(_self, _aNumber);
      return _Residue_2(
        _aBlock_2(_commonResidue_1(_self), _commonResidue_1(_aNumber)),
        _modulus_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToResidueAndApply_3(_aNumber, _self, _aBlock_2);
    });
  },
  "{ :self :aNumber :aBlock:/2 | if(isResidue(aNumber), { assertIsCompatibleResidue(self,aNumber); Residue(aBlock(commonResidue(self), commonResidue(aNumber)), modulus(self)) }, { adaptToResidueAndApply(aNumber,self, aBlock:/2) }) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Residue_2(
      _modularInverse_2(_commonResidue_1(_self), _modulus_1(_self)),
      _modulus_1(_self),
    );
  },
  "{ :self | Residue(modularInverse(commonResidue(self),modulus(self)), modulus(self)) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject | =(self, anObject) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isExact",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "isInteger",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :unused | true }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "positiveResidue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _commonResidue_1(_self);
    /* Statements */
    return _if_3(_isZero_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _modulus_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _n;
    });
  },
  "{ :self | let n = commonResidue(self); if(isZero(n), { modulus(self) }, { n }) }",
);

sl.addMethodToExistingType(
  "Residue",
  "Residue",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_commonResidue_1(_self)), "Z"),
      _storeString_1(_modulus_1(_self)),
    );
  },
  "{ :self | ++(++(storeString(commonResidue(self)), 'Z'), storeString(modulus(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Residue",
  "Residue",
  ["i", "m"],
  function (_i, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _i, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newResidue_0(), _percentSign_2(_i, _m), _m);
  },
  "{ :i :m | initializeSlots(newResidue(),%(i, m), m) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Residue",
  "asResidue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Residue_2(_at_2(_self, 1), _at_2(_self, 2));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>asResidue: size not two");
    });
  },
  "{ :self | if((=(size(self), 2)), { Residue(at(self, 1), at(self, 2)) }, { error(self,'List>>asResidue: size not two') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aResidue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_aResidue, _each);
    });
  },
  "{ :self :aResidue :aBlock:/2 | collect(self, { :each | aBlock(aResidue, each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aResidue, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_aResidue, _Residue_2(_self, _modulus_1(_aResidue)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "@Number>>adaptToResidueAndApply: not integer");
    });
  },
  "{ :self :aResidue :aBlock:/2 | if(isInteger(self), { aBlock(aResidue, Residue(self, modulus(aResidue))) }, { error(self,'@Number>>adaptToResidueAndApply: not integer') }) }",
);
