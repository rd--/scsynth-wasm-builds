sl.addType(
  false,
  "Association",
  "Association",
  ["Object"],
  ["key", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Association",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject | equalBy(self,anObject, =) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | equalBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "lessThanSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation | <(key(self), key(anAssociation)) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "lessThanSignEqualsSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation | <=(key(self), key(anAssociation)) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "greaterThanSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation | >(key(self), key(anAssociation)) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "greaterThanSignEqualsSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation | >=(key(self), key(anAssociation)) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isAssociation_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_key_1(_self), _key_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _aBlock_2(_value_1(_self), _value_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject :aBlock:/2 | &(isAssociation(anObject), { &(=(key(self), key(anObject)), { aBlock(value(self), value(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _key_1(_self);
  },
  "{ :self | key(self) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "asAssociation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_key_1(_self), _value_1(_self)];
  },
  "{ :self | [key(self), value(self)] }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "keyValue",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    _key_2(_self, _key);
    _value_2(_self, _value);
    return _self;
  },
  "{ :self :key :value | key(self, key); value(self, value); self }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _printString_1(_key_1(_self)),
      _printString_1(_value_1(_self)),
    ], " -> ");
  },
  "{ :self | join([printString(key(self)), printString(value(self))],' -> ') }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_self);
  },
  "{ :self | value(self) }",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("(% -> %)", [
      _storeString_1(_key_1(_self)),
      _storeString_1(_value_1(_self)),
    ]);
  },
  "{ :self | format('(% -> %)',[storeString(key(self)), storeString(value(self))]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "hyphenMinusGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Association_2(_self, _anObject);
  },
  "{ :self :anObject | Association(self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "lessThanSignHyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Association_2(_anObject, _self);
  },
  "{ :self :anObject | Association(anObject, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "Association",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newAssociation_0(), _self, _anObject);
  },
  "{ :self :anObject | initializeSlots(newAssociation(),self, anObject) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Association",
  "asAssociation",
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
      return _hyphenMinusGreaterThanSign_2(_first_1(_self), _second_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>asAssociation: not two-element sequence");
    });
  },
  "{ :self | if((=(size(self), 2)), { ->(first(self), second(self)) }, { error(self,'List>>asAssociation: not two-element sequence') }) }",
);
