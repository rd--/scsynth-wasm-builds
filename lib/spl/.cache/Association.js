sl.addType(
  false,
  "Association",
  "Association",
  ["Object"],
  ["key", "value"],
);

sl.copyTraitToType(
  "Object",
  "Association",
);

sl.addMethod(
  "Association",
  "Association",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "lessThanSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation |\n\t\tself.key < anAssociation.key\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "lessThanSignEqualsSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSignEqualsSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation |\n\t\tself.key <= anAssociation.key\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "greaterThanSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation |\n\t\tself.key > anAssociation.key\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "greaterThanSignEqualsSign",
  ["self", "anAssociation"],
  function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _greaterThanSignEqualsSign_2(_key_1(_self), _key_1(_anAssociation));
  },
  "{ :self :anAssociation |\n\t\tself.key >= anAssociation.key\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isAssociation_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_key_1(_self), _key_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _aBlock_2(_value_1(_self), _value_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isAssociation & {\n\t\t\tself.key = anObject.key & {\n\t\t\t\taBlock(self.value, anObject.value)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _key_1(_self);
  },
  "{ :self |\n\t\tself.key\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "asAssociation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_key_1(_self), _value_1(_self)];
  },
  "{ :self |\n\t\t[self.key, self.value]\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1([_key_1(_self), _value_1(_self)]);
  },
  "{ :self |\n\t\t(self.key, self.value)\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "keyValue",
  ["self", "key", "value"],
  function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _key_2(_self, _key);
    _value_2(_self, _value);
    return _self;
  },
  "{ :self :key :value |\n\t\tself.key := key;\n\t\tself.value := value;\n\t\tself\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _printString_1(_key_1(_self)),
      " -> ",
      _printString_1(_value_1(_self)),
    ]);
  },
  "{ :self |\n\t\t[self.key.printString, ' -> ', self.value.printString].join\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _value_1(_self);
  },
  "{ :self |\n\t\tself.value\n\t}",
);

sl.addMethod(
  "Association",
  "Association",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Association(",
      _storeString_1(_key_1(_self)),
      ", ",
      _storeString_1(_value_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Association(',\n\t\t\tself.key.storeString,\n\t\t\t', ',\n\t\t\tself.value.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Association",
  "hyphenMinusGreaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Association_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tAssociation(self, anObject)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Association",
  "lessThanSignHyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Association_2(_anObject, _self);
  },
  "{ :self :anObject |\n\t\tAssociation(anObject, self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Association",
  "Association",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newAssociation_0(), _self, _anObject);
  },
  "{ :self :anObject |\n\t\tnewAssociation().initializeSlots(self, anObject)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Association",
  "asAssociation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _hyphenMinusGreaterThanSign_2(_first_1(_self), _second_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "@Sequence>>asAssociation: not two-element sequence",
      );
    });
  },
  "{ :self |\n\t\t(self.size = 2).if {\n\t\t\tself.first -> self.second\n\t\t} {\n\t\t\tself.error('@Sequence>>asAssociation: not two-element sequence')\n\t\t}\n\t}",
);
