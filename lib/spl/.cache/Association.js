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
          return _equalsSign_2(_value_1(_self), _value_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isAssociation & {\n\t\t\tself.key = anObject.key & {\n\t\t\t\tself.value = anObject.value\n\t\t\t}\n\t\t}\n\t}",
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
    return _join_1([_key_1(_self), " -> ", _value_1(_self)]);
  },
  "{ :self |\n\t\t[self.key, ' -> ', self.value].join\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t'Association(',\n\t\t\t\tself.key.storeString,\n\t\t\t\t', ',\n\t\t\t\tself.value.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
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
