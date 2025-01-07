sl.addType(
  true,
  "Headers",
  "Headers",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Headers",
);

sl.addMethod(
  "Headers",
  "Headers",
  "at",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.get(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.get(_name);>\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "atPut",
  ["self", "name", "value"],
  function (_self, _name, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _value";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.set(_name, _value);
  },
  "{ :self :name :value |\n\t\t<primitive: return _self.set(_name, _value);>\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "atIfAbsent",
  ["self", "name", "aBlock:/0"],
  function (_self, _name, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _aBlock_0";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_includesKey_2(_self, _name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _at_2(_self, _name);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_0();
    });
  },
  "{ :self :name :aBlock:/0 |\n\t\tself.includesKey(name).if {\n\t\t\tself[name]\n\t\t} {\n\t\t\taBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const answer = {};
    _self.forEach(function (value, key) {
      answer[key] = value;
    });
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst answer = {};\n\t\t_self.forEach(function(value, key) {\n\t\t\tanswer[key] = value;\n\t\t});\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "contentType",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_self, "Content-Type", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return "";
    });
  },
  "{ :self |\n\t\tself.atIfAbsent('Content-Type') {\n\t\t\t''\n\t\t}\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "includesKey",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.has(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.has(_name);>\n\t}",
);

sl.addMethod(
  "Headers",
  "Headers",
  "removeKey",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.delete(_name);
  },
  "{ :self :name |\n\t\t<primitive: return _self.delete(_name);>\n\t}",
);

sl.addMethod(
  "Record",
  "Headers",
  "asHeaders",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new Headers(_self);
  },
  "{ :self |\n\t\t<primitive: return new Headers(_self);>\n\t}",
);
