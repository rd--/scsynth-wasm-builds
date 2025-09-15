/*  Requires: Set  */

sl.addType(
  true,
  "IdentitySet",
  "IdentitySet",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Unordered",
    "Set",
  ],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Collection",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Removable",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Unordered",
  "IdentitySet",
);

sl.copyTraitMethodsToType(
  "Set",
  "IdentitySet",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self);
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self);>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "basicInclude",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.add(_anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.add(_anObject);\n\t\treturn _anObject;>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "basicIncludeAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Primitive */
    for (const item of _aCollection) {
      _self.add(item);
    }
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection | <primitive: for (const item of _aCollection) {\n\t\t\t_self.add(item);\n\t\t};\n\t\treturn _aCollection;>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "basicRemove",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.delete(_anObject);
    return _anObject;
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: _self.delete(_anObject);\n\t\treturn _anObject;>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "do",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.forEach(function (item) {
      _aBlock(item);
    });
    /* Statements */
    return _self;
  }, ["self", "aBlock"]),
  "{ :self :aBlock | <primitive: _self.forEach(function(item) {\n\t\t\t_aBlock(item);\n\t\t});>\nself }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "include",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isImmediate_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "IdentitySet>>include: non-immediate entry: ",
            _anObject,
          ),
        );
      }, []),
    );
    return _basicInclude_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | ifFalse(isImmediate(anObject), { error(self,++('IdentitySet>>include: non-immediate entry: ', anObject)) }); basicInclude(self,anObject) }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "includes",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: return _self.has(_anObject);>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["size"];
  }, ["self"]),
  "{ :self | ['size'] }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    _self.clear();
    return null;
  }, ["self"]),
  "{ :self | <primitive: _self.clear();\n\t\treturn null;>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "removeIfAbsent",
  ["self", "anObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_self.has(_anObject)) {
      _self.delete(_anObject);
      return _anObject;
    } else {
      return _aBlock_0();
    }
  }, ["self", "anObject", "aBlock:/0"]),
  "{ :self :anObject :aBlock:/0 | <primitive: if(_self.has(_anObject)) {\n\t\t\t_self.delete(_anObject);\n\t\t\treturn _anObject;\n\t\t} else {\n\t\t\treturn _aBlock_0();\n\t\t}>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "shallowCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Set(_self);>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.size;
  }, ["self"]),
  "{ :self | <primitive: return _self.size;>\n }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentitySet_0;
  }, ["self"]),
  "{ :self | IdentitySet:/0 }",
);

sl.addMethodToExistingType(
  "IdentitySet",
  "IdentitySet",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("IdentitySet(%)", [_storeString_1(_asList_1(_self))]);
  }, ["self"]),
  "{ :self | format('IdentitySet(%)',[storeString(asList(self))]) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "IdentitySet",
  "IdentitySet",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set();
  }, []),
  "{ <primitive: return new Set();>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "IdentitySet",
  "asIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    /* Statements */
    _includeAll_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self | let answer = IdentitySet(); includeAll(answer,self); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "IdentitySet",
  "asIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asIdentitySet_1(_values_1(_self));
  }, ["self"]),
  "{ :self | asIdentitySet(values(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IdentitySet",
  "asIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _IdentitySet_1(_self);
  }, ["self"]),
  "{ :self | IdentitySet(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IdentitySet",
  "IdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _allSatisfy_2(_self, _isImmediate_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("List>>IdentitySet: non-immediate entry");
      }, []),
    );
    return _uncheckedIdentitySet_1(_self);
  }, ["self"]),
  "{ :self | ifFalse(allSatisfy(self,isImmediate:/1), { error('List>>IdentitySet: non-immediate entry') }); uncheckedIdentitySet(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "IdentitySet",
  "uncheckedIdentitySet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Set(_self);
  }, ["self"]),
  "{ :self | <primitive: return new Set(_self);>\n }",
);
