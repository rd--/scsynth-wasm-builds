sl.addTrait("Removable", "Removable");

sl.addTraitMethod(
  "Removable",
  "Removable",
  "remove",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeIfAbsent_3(_self, _oldObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _errorNotFound_2(_self, _oldObject);
    });
  },
  "{ :self :oldObject |\n\t\tself.removeIfAbsent(oldObject) {\n\t\t\tself.errorNotFound(oldObject)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _remove_2(_self, _each);
    });
  },
  "{ :self |\n\t\tself.do { :each |\n\t\t\tself.remove(each)\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _if_3(_equalsSignEqualsSign_2(_aCollection, _self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeAll_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _do_2(_aCollection, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _remove_2(_self, _each);
      });
    });
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\t(aCollection == self).if {\n\t\t\tself.removeAll\n\t\t} {\n\t\t\taCollection.do { :each |\n\t\t\t\tself.remove(each)\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeAllEqualTo",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_each, _oldObject);
    });
  },
  "{ :self :oldObject |\n\t\tself.removeAllSuchThat { :each |\n\t\t\teach = oldObject\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeAllFoundIn",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_aCollection, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _removeIfAbsent_3(_self, _each, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
      });
    });
    return _aCollection;
  },
  "{ :self :aCollection |\n\t\taCollection.do { :each |\n\t\t\tself.removeIfAbsent(each) {\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _do_2(_copy_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _remove_2(_self, _each);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.copy.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tself.remove(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock"],
  function (_self, _oldObject, _anExceptionBlock) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "@Removable>>removeIfAbsent");
  },
  "{ :self :oldObject :anExceptionBlock |\n\t\tself.typeResponsibility('@Removable>>removeIfAbsent')\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "without",
  ["self", "oldObject"],
  function (_self, _oldObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_each, _oldObject);
    });
    return _self;
  },
  "{ :self :oldObject |\n\t\tself.removeAllSuchThat { :each |\n\t\t\teach = oldObject\n\t\t};\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Removable",
  "Removable",
  "withoutAll",
  ["self", "aCollection"],
  function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _removeAllSuchThat_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _includes_2(_aCollection, _each);
    });
    return _self;
  },
  "{ :self :aCollection |\n\t\tself.removeAllSuchThat { :each |\n\t\t\taCollection.includes(each)\n\t\t};\n\t\tself\n\t}",
);
