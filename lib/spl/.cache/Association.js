/*  Requires: List, Object  */

sl.addType(
  false,
  "Association",
  "Association",
  ["Object", "Equatable", "Comparable"],
  ["key", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Association",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Association",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Association",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "asAssociation",
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
  "Association",
  "Association",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_key_1(_self), _value_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.key, self.value]\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "compare",
  ["self", "anAssociation"],
  sl.annotateFunction(function (_self, _anAssociation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAssociation";
      throw new Error(errorMessage);
    } /* Statements */
    return _compare_2(_key_1(_self), _key_1(_anAssociation));
  }, ["self", "anAssociation"]),
  "{ :self :anAssociation |\n\t\tself.key.compare(anAssociation.key)\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "depth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(1, _depth_1(_value_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\t1 + self.value.depth\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isAssociation_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_key_1(_self), _key_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_value_1(_self), _value_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isAssociation & {\n\t\t\tself.key = anObject.key & {\n\t\t\t\taBlock(self.value, anObject.value)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "first",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _key_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.key\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "keyValue",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Statements */
    _key_2(_self, _key);
    _value_2(_self, _value);
    return _self;
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tself.key := key;\n\t\tself.value := value;\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("% -> %", [
      _printString_1(_key_1(_self)),
      _printString_1(_value_1(_self)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'% -> %'.format([\n\t\t\tself.key.printString,\n\t\t\tself.value.printString\n\t\t])\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "second",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.value\n\t}",
);

sl.addMethodToExistingType(
  "Association",
  "Association",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("(% -> %)", [
      _storeString_1(_key_1(_self)),
      _storeString_1(_value_1(_self)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'(% -> %)'.format(\n\t\t\t[\n\t\t\t\tself.key.storeString,\n\t\t\t\tself.value.storeString\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "hyphenMinusGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Association_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tAssociation(self, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "lessThanSignHyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _Association_2(_anObject, _self);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tAssociation(anObject, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Association",
  "Association",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newAssociation_0(), _self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tnewAssociation().initializeSlots(self, anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Association",
  "asAssociation",
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
        return _hyphenMinusGreaterThanSign_2(_first_1(_self), _second_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>asAssociation: not two-element sequence");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 2).if {\n\t\t\tself.first -> self.second\n\t\t} {\n\t\t\tself.error('List>>asAssociation: not two-element sequence')\n\t\t}\n\t}",
);
