sl.addTrait("Link", "LinkedList");

sl.addMethodToExistingTrait(
  "Link",
  "LinkedList",
  "asLink",
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

sl.addMethodToExistingTrait(
  "Link",
  "LinkedList",
  "nextLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "nextLink");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('nextLink')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "LinkedList",
  "asLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ValueLink_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tValueLink(self)\n\t}",
);

sl.addType(
  false,
  "LinkedList",
  "LinkedList",
  [
    "Object",
    "Copyable",
    "Equatable",
    "Comparable",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequenceable",
  ],
  ["firstLink", "lastLink"],
);

sl.copyTraitMethodsToType(
  "Object",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Collection",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Removable",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "LinkedList",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "add",
  ["self", "aLinkOrObject"],
  sl.annotateFunction(function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _addLast_2(_self, _aLinkOrObject);
  }, ["self", "aLinkOrObject"]),
  "{ :self :aLinkOrObject |\n\t\tself.addLast(aLinkOrObject)\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "addFirst",
  ["self", "aLinkOrObject"],
  sl.annotateFunction(function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aLink = _asLink_1(_aLinkOrObject);
    /* Statements */
    _ifTrue_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lastLink_2(_self, _aLink);
      }, []),
    );
    _nextLink_2(_aLink, _firstLink_1(_self));
    _firstLink_2(_self, _aLink);
    return _aLink;
  }, ["self", "aLinkOrObject"]),
  "{ :self :aLinkOrObject |\n\t\tlet aLink = aLinkOrObject.asLink;\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\taLink.nextLink := self.firstLink;\n\t\tself.firstLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "addLast",
  ["self", "aLinkOrObject"],
  sl.annotateFunction(function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aLink = _asLink_1(_aLinkOrObject);
    /* Statements */
    _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstLink_2(_self, _aLink);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextLink_2(_lastLink_1(_self), _aLink);
      }, []),
    );
    _lastLink_2(_self, _aLink);
    return _aLink;
  }, ["self", "aLinkOrObject"]),
  "{ :self :aLinkOrObject |\n\t\tlet aLink = aLinkOrObject.asLink;\n\t\tself.isEmpty.if {\n\t\t\tself.firstLink := aLink\n\t\t} {\n\t\t\tself.lastLink.nextLink := aLink\n\t\t};\n\t\tself.lastLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_answer, _index, _each);
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_linkAtIfAbsent_3(_self, _index, _ifAbsent_0));
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\tself.linkAtIfAbsent(index, ifAbsent:/0).value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "atPut",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPutLink_3(
      _self,
      _index,
      _linkOfIfAbsent_3(
        _self,
        _anObject,
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asLink_1(_anObject);
        }, []),
      ),
    );
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject |\n\t\tself.atPutLink(index, self.linkOfIfAbsent(anObject) {\n\t\t\tanObject.asLink\n\t\t})\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "atPutLink",
  ["self", "index", "aLink"],
  sl.annotateFunction(function (_self, _index, _aLink) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aLink";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _includesIndex_2(_self, _index),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("LinkedList>>atPutLink: errorOutOfBounds");
      }, []),
    );
    _if_3(
      _equalsSign_2(_index, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _nextLink_2(_aLink, _nextLink_1(_firstLink_1(_self)));
        _firstLink_2(_self, _aLink);
        return _ifNil_2(
          _nextLink_1(_aLink),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lastLink_2(_self, _aLink);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _previousLink = _linkAt_2(_self, _hyphenMinus_2(_index, 1));
        let _nextLink = _nextLink_1(_nextLink_1(_previousLink));
        /* Statements */
        _ifNil_3(
          _nextLink,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextLink_2(_aLink, _lastLink_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextLink_2(_aLink, _nextLink);
          }, []),
        );
        _nextLink_2(_previousLink, _aLink);
        return _ifNil_2(
          _nextLink,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _lastLink_2(_self, _aLink);
            return _nextLink_2(_aLink, null);
          }, []),
        );
      }, []),
    );
    return _aLink;
  }, ["self", "index", "aLink"]),
  "{ :self :index :aLink |\n\t\t/* Putting a link which is already in the list will create an infinite loop */\n\t\tself.includesIndex(index).ifFalse {\n\t\t\t'LinkedList>>atPutLink: errorOutOfBounds'.error\n\t\t};\n\t\t(index = 1).if {\n\t\t\taLink.nextLink(self.firstLink.nextLink);\n\t\t\tself.firstLink := aLink;\n\t\t\taLink.nextLink.ifNil {\n\t\t\t\tself.lastLink := aLink\n\t\t\t}\n\t\t} {\n\t\t\tlet previousLink = self.linkAt(index - 1);\n\t\t\tlet nextLink = previousLink.nextLink.nextLink;\n\t\t\tnextLink.ifNil {\n\t\t\t\taLink.nextLink(self.lastLink)\n\t\t\t} {\n\t\t\t\taLink.nextLink(nextLink)\n\t\t\t};\n\t\t\tpreviousLink.nextLink(aLink);\n\t\t\tnextLink.ifNil {\n\t\t\t\tself.lastLink := aLink;\n\t\t\t\taLink.nextLink(nil)\n\t\t\t}\n\t\t};\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aLink = _firstLink_1(_self);
    let _answer = _LinkedList_0();
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_aLink, null);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _aBlock_1(_value_1(_aLink)));
        return _aLink = _nextLink_1(_aLink);
      }, []),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\tlet answer = LinkedList();\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\tanswer.add(aBlock(aLink.value));\n\t\t\taLink := aLink.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aLink = _firstLink_1(_self);
    /* Statements */
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_aLink, null);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_value_1(_aLink));
        return _aLink = _nextLink_1(_aLink);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\taBlock(aLink.value);\n\t\t\taLink := aLink.nextLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "includesIndex",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _betweenAnd_3(_index, 1, _size_1(_self));
  }, ["self", "index"]),
  "{ :self :index |\n\t\tindex.betweenAnd(1, self.size)\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "isEmpty",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNil_1(_firstLink_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.firstLink.isNil\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
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

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linkAtIfAbsent",
  ["self", "index", "errorBlock:/0"],
  sl.annotateFunction(function (_self, _index, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _counter = 0;
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
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
    }, ["return:/1"]));
  }, ["self", "index", "errorBlock:/0"]),
  "{ :self :index :errorBlock:/0 |\n\t\tlet counter = 0;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\tcounter := counter + 1;\n\t\t\t\t(counter = index).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
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
        return _error_1("LinkedList>>linkOf: no such element");
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.linkOfIfAbsent(anObject) {\n\t\t\t'LinkedList>>linkOf: no such element'.error\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linkOfIfAbsent",
  ["self", "anObject", "errorBlock:/0"],
  sl.annotateFunction(function (_self, _anObject, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
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
            _equalsSign_2(_value_1(_link), _value_1(_anObject)),
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
    }, ["return:/1"]));
  }, ["self", "anObject", "errorBlock:/0"]),
  "{ :self :anObject :errorBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\t(link.value = anObject.value).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linksDo",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _aLink = _firstLink_1(_self);
    /* Statements */
    return _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_aLink, null);
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
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\taBlock(aLink);\n\t\t\taLink := aLink.nextLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "ofSize",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    _timesRepeat_2(
      _hyphenMinus_2(_aNumber, _size_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_self, null);
      }, []),
    );
    return _self;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(aNumber - self.size).timesRepeat {\n\t\t\tself.add(nil)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotNil_2(
      _firstLink_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _aLink = _firstLink_2(_self, _copy_1(_firstLink_1(_self)));
        /* Statements */
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _isNil_1(_nextLink_1(_aLink));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextLink_2(_aLink, _aLink = _copy_1(_nextLink_1(_aLink)));
          }, []),
        );
        return _lastLink_2(_self, _aLink);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.firstLink.ifNotNil {\n\t\t\tlet aLink = self.firstLink := self.firstLink.copy;\n\t\t\t{\n\t\t\t\taLink.nextLink.isNil\n\t\t\t}.whileFalse {\n\t\t\t\taLink.nextLink(aLink := aLink.nextLink.copy)\n\t\t\t};\n\t\t\tself.lastLink := aLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeAll",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _firstLink_2(_self, null);
    return _lastLink_2(_self, null);
  }, ["self"]),
  "{ :self |\n\t\tself.firstLink := nil;\n\t\tself.lastLink := nil\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _remove_2(_self, _each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tself.remove(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeFirst",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _oldLink = _firstLink_1(_self);
    /* Statements */
    _emptyCheck_1(_self);
    _if_3(
      _equalsSignEqualsSign_2(_firstLink_1(_self), _lastLink_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAll_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstLink_2(_self, _nextLink_1(_oldLink));
      }, []),
    );
    _nextLink_2(_oldLink, null);
    return _value_1(_oldLink);
  }, ["self"]),
  "{ :self |\n\t\tlet oldLink = self.firstLink;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll\n\t\t} {\n\t\t\tself.firstLink := oldLink.nextLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeIfAbsent",
  ["self", "aLinkOrObject", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aLinkOrObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aLinkOrObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _link = _linkOfIfAbsent_3(_self, _aLinkOrObject, _aBlock_0);
    /* Statements */
    _removeLinkIfAbsent_3(
      _self,
      _link,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_0();
      }, []),
    );
    return _aLinkOrObject;
  }, ["self", "aLinkOrObject", "aBlock:/0"]),
  "{ :self :aLinkOrObject :aBlock:/0 |\n\t\tlet link = self.linkOfIfAbsent(aLinkOrObject, aBlock:/0);\n\t\tself.removeLinkIfAbsent(link) {\n\t\t\taBlock()\n\t\t};\n\t\taLinkOrObject\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeLast",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _oldLink = _lastLink_1(_self);
    let _aLink = null;
    /* Statements */
    _emptyCheck_1(_self);
    _if_3(
      _equalsSignEqualsSign_2(_firstLink_1(_self), _lastLink_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAll_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aLink = _firstLink_1(_self);
        _whileFalse_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSignEqualsSign_2(_nextLink_1(_aLink), _oldLink);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aLink = _nextLink_1(_aLink);
          }, []),
        );
        _nextLink_2(_aLink, null);
        return _lastLink_2(_self, _aLink);
      }, []),
    );
    _nextLink_2(_oldLink, null);
    return _value_1(_oldLink);
  }, ["self"]),
  "{ :self |\n\t\tlet oldLink = self.lastLink;\n\t\tlet aLink = nil;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll\n\t\t} {\n\t\t\taLink := self.firstLink;\n\t\t\t{\n\t\t\t\taLink.nextLink == oldLink\n\t\t\t}.whileFalse {\n\t\t\t\taLink := aLink.nextLink\n\t\t\t};\n\t\t\taLink.nextLink := nil;\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeLinkIfAbsent",
  ["self", "aLink", "aBlock:/0"],
  sl.annotateFunction(function (_self, _aLink, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aLink, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _if_3(
        _equalsSignEqualsSign_2(_aLink, _firstLink_1(_self)),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _firstLink_2(_self, _nextLink_1(_aLink));
          return _ifTrue_2(
            _equalsSignEqualsSign_2(_aLink, _lastLink_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lastLink_2(_self, null);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _tempLink = _firstLink_1(_self);
          /* Statements */
          _whileFalse_2(
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              _ifNil_2(
                _tempLink,
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _return_1(_aBlock_0());
                }, []),
              );
              return _equalsSignEqualsSign_2(_nextLink_1(_tempLink), _aLink);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _tempLink = _nextLink_1(_tempLink);
            }, []),
          );
          _nextLink_2(_tempLink, _nextLink_1(_aLink));
          return _ifTrue_2(
            _equalsSignEqualsSign_2(_aLink, _lastLink_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lastLink_2(_self, _tempLink);
            }, []),
          );
        }, []),
      );
      return _aLink;
    }, ["return:/1"]));
  }, ["self", "aLink", "aBlock:/0"]),
  "{ :self :aLink :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(aLink == self.firstLink).if {\n\t\t\t\tself.firstLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := nil\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tlet tempLink = self.firstLink;\n\t\t\t\t{\n\t\t\t\t\ttempLink.ifNil {\n\t\t\t\t\t\taBlock().return\n\t\t\t\t\t};\n\t\t\t\t\ttempLink.nextLink == aLink\n\t\t\t\t}.whileFalse {\n\t\t\t\t\ttempLink := tempLink.nextLink\n\t\t\t\t};\n\t\t\t\ttempLink.nextLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := tempLink\n\t\t\t\t}\n\t\t\t};\n\t\t\taLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "select",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _LinkedList_0();
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _aBlock_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\teach.aBlock.ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _List_1;
  }, ["self"]),
  "{ :self |\n\t\tList:/1\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "LinkedList",
  "asLinkedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _LinkedList_0();
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "LinkedList",
  "LinkedList",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newLinkedList_0();
  }, []),
  "{\n\t\tnewLinkedList()\n\t}",
);

sl.addType(
  false,
  "ValueLink",
  "LinkedList",
  ["Object", "Equatable", "Link"],
  ["nextLink", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ValueLink",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "ValueLink",
);

sl.copyTraitMethodsToType(
  "Link",
  "ValueLink",
);

sl.addMethodToExistingType(
  "ValueLink",
  "LinkedList",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isValueLink_1(_anObject),
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
            return _equalsSignEqualsSign_2(
              _nextLink_1(_self),
              _nextLink_1(_anObject),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isValueLink & {\n\t\t\taBlock(self.value, anObject.value) & {\n\t\t\t\tself.nextLink == anObject.nextLink\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "LinkedList",
  "ValueLink",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newValueLink_0(), null, _self);
  }, ["self"]),
  "{ :self |\n\t\tnewValueLink().initializeSlots(nil, self)\n\t}",
);
