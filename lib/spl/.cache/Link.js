sl.addTrait("@Link", "Link");

sl.addMethodToExistingTrait(
  "@Link",
  "Link",
  "nextLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Link>>nextLink");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Link>>nextLink')\n\t}",
);

sl.addMethodToExistingTrait(
  "@Link",
  "Link",
  "previousLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Link>>previousLink");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Link>>previousLink')\n\t}",
);

sl.addMethodToExistingTrait(
  "@Link",
  "Link",
  "value",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Link>>value");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Link>>value')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _h = _self;
    let _answer = [];
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNotNil_1(_h);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addInPlace_2(_answer, _value_1(_h));
        return _h = _nextLink_1(_h);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet h = self;\n\t\tlet answer = [];\n\t\t{\n\t\t\th.isNotNil\n\t\t}.whileTrue {\n\t\t\tanswer.add!(h.value);\n\t\t\th := h.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linkToList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _h = _self;
    let _answer = [];
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNotNil_1(_h);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addInPlace_2(_answer, _value_1(_h));
        return _h = _nextLink_1(_h);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet h = self;\n\t\tlet answer = [];\n\t\t{\n\t\t\th.isNotNil\n\t\t}.whileTrue {\n\t\t\tanswer.add!(h.value);\n\t\t\th := h.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _linksDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_value_1(_each));
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.linksDo { :each |\n\t\t\taBlock(each.value)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "lastLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _self;
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNil_1(_nextLink_1(_answer));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _nextLink_1(_answer);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = self;\n\t\t{\n\t\t\tanswer.nextLink.isNil\n\t\t}.whileFalse {\n\t\t\tanswer := answer.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linkAt",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _linkAtIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "linkAt", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.linkAtIfAbsent(index) {\n\t\t\tself.errorInvalidIndex('linkAt', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linkAtIfAbsent",
  ["self", "index", "errorBlock/0"],
  sl.annotateFunction(function (_self, _index, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _counter = 0;
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _linksDo_2(
        _self,
        sl.annotateFunction(function (_link) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _link";
            throw new Error(errorMessage);
          } /* Statements */
          _counter = _plusSign_2(_counter, 1);
          return _ifTrue_2(
            _equalsSign_2(_counter, _index),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_link);
            }, []),
          );
        }, ["link"]),
      );
      return _errorBlock_0();
    }, ["return/1"]));
  }, ["self", "index", "errorBlock/0"]),
  "{ :self :index :errorBlock/0 |\n\t\tlet counter = 0;\n\t\twithReturn { :return/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\tcounter := counter + 1;\n\t\t\t\t(counter = index).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linkOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _linkOfIfAbsent_3(
      _self,
      _anObject,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("linkOf: no such element");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.linkOfIfAbsent(anObject) {\n\t\t\t'linkOf: no such element'.error\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linkOfIfAbsent",
  ["self", "anObject", "errorBlock/0"],
  sl.annotateFunction(function (_self, _anObject, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _linksDo_2(
        _self,
        sl.annotateFunction(function (_link) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _link";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _equalsSign_2(_value_1(_link), _anObject),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_link);
            }, []),
          );
        }, ["link"]),
      );
      return _errorBlock_0();
    }, ["return/1"]));
  }, ["self", "anObject", "errorBlock/0"]),
  "{ :self :anObject :errorBlock/0 |\n\t\twithReturn { :return/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\t(link.value = anObject).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Link",
  "Link",
  "linksDo",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _aLink = _self;
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNil_1(_aLink);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_aLink);
        return _aLink = _nextLink_1(_aLink);
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet aLink = self;\n\t\t{ aLink.isNil }.whileFalse {\n\t\t\taBlock(aLink);\n\t\t\taLink := aLink.nextLink\n\t\t}\n\t}",
);

sl.addType(
  false,
  "Link",
  "Link",
  ["@Object", "@Copy", "@Store", "@Equal", "@Do", "@Collection", "@Link"],
  ["value", "nextLink"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Store",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Do",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Collection",
  "Link",
);

sl.copyTraitMethodsToType(
  "@Link",
  "Link",
);

sl.addMethodToExistingType(
  "Link",
  "Link",
  "collect",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = null;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _Link_2(_aBlock_1(_each), _answer);
      }, ["each"]),
    );
    return _reverse_1(_answer);
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = nil;\n\t\tself.do { :each |\n\t\t\tanswer := Link(aBlock(each), answer)\n\t\t};\n\t\tanswer.reverse\n\t}",
);

sl.addMethodToExistingType(
  "Link",
  "Link",
  "isEqualBy",
  ["self", "anObject", "aBlock/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isLink_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_value_1(_self), _value_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_nextLink_1(_self), _nextLink_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tanObject.isLink & {\n\t\t\taBlock(self.value, anObject.value) & {\n\t\t\t\tself.nextLink = anObject.nextLink\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Link",
  "Link",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _Link_2(_value_1(_self), null);
    let _link = _nextLink_1(_self);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_link, null);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _answer = _Link_2(_value_1(_link), _answer);
        return _link = _nextLink_1(_link);
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = Link(self.value, nil);\n\t\tlet link = self.nextLink;\n\t\t{\n\t\t\tlink != nil\n\t\t}.whileTrue {\n\t\t\tanswer := Link(link.value, answer);\n\t\t\tlink := link.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Link",
  "Link",
  ["self", "aLinkOrNil"],
  sl.annotateFunction(function (_self, _aLinkOrNil) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrNil";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isLink_1(_aLinkOrNil),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isNil_1(_aLinkOrNil);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedLink_2(_self, _aLinkOrNil);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_3(_self, "Link", [_aLinkOrNil]);
      }, []),
    );
  }, ["self", "aLinkOrNil"]),
  "{ :self :aLinkOrNil |\n\t\t(\n\t\t\taLinkOrNil.isLink | {\n\t\t\t\taLinkOrNil.isNil\n\t\t\t}\n\t\t).if {\n\t\t\tuncheckedLink(self, aLinkOrNil)\n\t\t} {\n\t\t\tself.error('Link', [aLinkOrNil])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Link",
  "uncheckedLink",
  ["self", "aLinkOrNil"],
  sl.annotateFunction(function (_self, _aLinkOrNil) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrNil";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLink_0(), _self, _aLinkOrNil);
  }, ["self", "aLinkOrNil"]),
  "{ :self :aLinkOrNil |\n\t\tnewLink().initializeSlots(self, aLinkOrNil)\n\t}",
);
