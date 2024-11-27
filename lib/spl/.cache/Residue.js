sl.addType(
  false,
  "Residue",
  "Residue",
  ["Object", "Magnitude", "Number"],
  ["commonResidue", "modulus"],
);

sl.copyTraitToType(
  "Object",
  "Residue",
);

sl.copyTraitToType(
  "Magnitude",
  "Residue",
);

sl.copyTraitToType(
  "Number",
  "Residue",
);

sl.addMethod(
  "Residue",
  "Residue",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "plusSign",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _binaryOperator_3(_self, _aNumber, _plusSign_2);
  },
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, +)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "hyphenMinus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _binaryOperator_3(_self, _aNumber, _hyphenMinus_2);
  },
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, -)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "asterisk",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _binaryOperator_3(_self, _aNumber, _asterisk_2);
  },
  "{ :self :aNumber |\n\t\tself.binaryOperator(aNumber, *)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "solidus",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aNumber"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_self, _inverse_1(_aNumber));
  },
  "{ :self :aNumber |\n\t\tself * aNumber.inverse\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aCollection, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_each, _self);
    });
  },
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\teach.aBlock(self)\n\t\t}\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _anInteger, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_Residue_2(_anInteger, _modulus_1(_self)), _self);
  },
  "{ :self :anInteger :aBlock:/2 |\n\t\tResidue(anInteger, self.modulus).aBlock(self)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aNumber, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSmallInteger_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToIntegerAndApply_3(_self, _aNumber, _aBlock_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Residue>>adaptToNumberAndApply: not an integer");
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isSmallInteger.if {\n\t\t\tself.adaptToIntegerAndApply(aNumber, aBlock:/2)\n\t\t} {\n\t\t\tself.error('Residue>>adaptToNumberAndApply: not an integer')\n\t\t}\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "assertIsCompatibleResidue",
  ["self", "aResidue"],
  function (_self, _aResidue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aResidue"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(
      _equalsSign_2(_modulus_1(_self), _modulus_1(_aResidue)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "Residue>>assertIsCompatibleResidue");
      },
    );
  },
  "{ :self :aResidue |\n\t\t(self.modulus = aResidue.modulus).ifFalse {\n\t\t\tself.error('Residue>>assertIsCompatibleResidue')\n\t\t}\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "binaryOperator",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aNumber, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isResidue_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _assertIsCompatibleResidue_2(_self, _aNumber);
      return _Residue_2(
        _aBlock_2(_commonResidue_1(_self), _commonResidue_1(_aNumber)),
        _modulus_1(_self),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToResidueAndApply_3(_aNumber, _self, _aBlock_2);
    });
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isResidue.if {\n\t\t\tself.assertIsCompatibleResidue(aNumber);\n\t\t\tResidue(self.commonResidue.aBlock(aNumber.commonResidue), self.modulus)\n\t\t} {\n\t\t\taNumber.adaptToResidueAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Residue_2(
      _modularInverse_2(_commonResidue_1(_self), _modulus_1(_self)),
      _modulus_1(_self),
    );
  },
  "{ :self |\n\t\tResidue(self.commonResidue.modularInverse(self.modulus), self.modulus)\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself = anObject\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "positiveResidue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _commonResidue_1(_self);
    /* Statements */
    return _if_3(_isZero_1(_n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _modulus_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _n;
    });
  },
  "{ :self |\n\t\tlet n = self.commonResidue;\n\t\tn.isZero.if {\n\t\t\tself.modulus\n\t\t} {\n\t\t\tn\n\t\t}\n\t}",
);

sl.addMethod(
  "Residue",
  "Residue",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_storeString_1(_commonResidue_1(_self)), "Z"),
      _storeString_1(_modulus_1(_self)),
    );
  },
  "{ :self |\n\t\tself.commonResidue.storeString ++ 'Z' ++ self.modulus.storeString\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Residue",
  "Residue",
  ["i", "m"],
  function (_i, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _i, _m"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newResidue_0(), _percentSign_2(_i, _m), _m);
  },
  "{ :i :m |\n\t\tnewResidue().initializeSlots(i % m, m)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Residue",
  "asResidue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Residue_2(_at_2(_self, 1), _at_2(_self, 2));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>asResidue: size not two");
    });
  },
  "{ :self |\n\t\t(self.size = 2).if {\n\t\t\tResidue(self[1], self[2])\n\t\t} {\n\t\t\tself.error('@Sequence>>asResidue: size not two')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aResidue, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aResidue, _each);
    });
  },
  "{ :self :aResidue :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taResidue.aBlock(each)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Residue",
  "adaptToResidueAndApply",
  ["self", "aResidue", "aBlock:/2"],
  function (_self, _aResidue, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aResidue, _aBlock_2"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_aResidue, _Residue_2(_self, _modulus_1(_aResidue)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Number>>adaptToResidueAndApply: not integer");
    });
  },
  "{ :self :aResidue :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(aResidue, Residue(self, aResidue.modulus))\n\t\t} {\n\t\t\tself.error('@Number>>adaptToResidueAndApply: not integer')\n\t\t}\n\t}",
);
