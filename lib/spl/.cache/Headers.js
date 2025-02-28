sl.addType(
  true,
  "Headers",
  "Headers",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Headers",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.get(_name);
  },
  "{ :self :name | <primitive: return _self.get(_name);>\n }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "atPut",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.set(_name, _value);
  },
  "{ :self :name :value | <primitive: return _self.set(_name, _value);>\n }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "atIfAbsent",
  ["self", "name", "aBlock:/0"],
  function (_self, _name, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesKey_2(_self, _name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _name);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :name :aBlock:/0 | if(includesKey(self,name), { at(self, name) }, { aBlock() }) }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = {};
    _self.forEach(function (value, key) {
      answer[key] = value;
    });
    return answer;
  },
  "{ :self | <primitive: const answer = {};\n\t\t_self.forEach(function(value, key) {\n\t\t\tanswer[key] = value;\n\t\t});\n\t\treturn answer;>\n }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "contentType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_self, "Content-Type", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return "";
    });
  },
  "{ :self | atIfAbsent(self, 'Content-Type', { '' }) }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "includesKey",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_name);
  },
  "{ :self :name | <primitive: return _self.has(_name);>\n }",
);

sl.addMethodToExistingType(
  "Headers",
  "Headers",
  "removeKey",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.delete(_name);
  },
  "{ :self :name | <primitive: return _self.delete(_name);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Headers",
  "asHeaders",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new Headers(_self);
  },
  "{ :self | <primitive: return new Headers(_self);>\n }",
);
