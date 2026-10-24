sl.addType(
  false,
  "LinkedList",
  "LinkedList",
  [
    "@Object",
    "@New",
    "@Copy",
    "@Store",
    "@Equal",
    "@Compare",
    "@Do",
    "@At",
    "@Indices",
    "@Put",
    "@Collect",
    "@Collection",
    "@Add",
    "@Remove",
    "@Sequence",
  ],
  ["firstLink", "lastLink"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@New",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Store",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Compare",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Do",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@At",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Indices",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Put",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Collect",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Collection",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Add",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Remove",
  "LinkedList",
);

sl.copyTraitMethodsToType(
  "@Sequence",
  "LinkedList",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _List_2(_size_1(_self), null);
    let _index = 1;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _putInPlace_3(_answer, _index, _each);
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size, nil);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linkedListToList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _List_2(_size_1(_self), null);
    let _index = 1;
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _putInPlace_3(_answer, _index, _each);
        return _index = _plusSign_2(_index, 1);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = List(self.size, nil);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "addFirstInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _aLink = _Link_2(_anObject, _firstLink_1(_self));
    _ifTrue_2(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lastLinkMutateInPlace_2(_self, _aLink);
      }, []),
    );
    _firstLinkMutateInPlace_2(_self, _aLink);
    return _aLink;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet aLink = Link(anObject, self.firstLink);\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\tself.firstLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "addLastInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _aLink = _Link_2(_anObject, null);
    _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstLinkMutateInPlace_2(_self, _aLink);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextLinkMutateInPlace_2(_lastLink_1(_self), _aLink);
      }, []),
    );
    _lastLinkMutateInPlace_2(_self, _aLink);
    return _aLink;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet aLink = Link(anObject, nil);\n\t\tself.isEmpty.if {\n\t\t\tself.firstLink := aLink\n\t\t} {\n\t\t\tself.lastLink.nextLink := aLink\n\t\t};\n\t\tself.lastLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "addInPlace",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    let _aLink = _Link_2(_anObject, null);
    _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstLinkMutateInPlace_2(_self, _aLink);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextLinkMutateInPlace_2(_lastLink_1(_self), _aLink);
      }, []),
    );
    _lastLinkMutateInPlace_2(_self, _aLink);
    return _aLink;
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet aLink = Link(anObject, nil);\n\t\tself.isEmpty.if {\n\t\t\tself.firstLink := aLink\n\t\t} {\n\t\t\tself.lastLink.nextLink := aLink\n\t\t};\n\t\tself.lastLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "atIfAbsent",
  ["self", "index", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_1(_linkAtIfAbsent_3(_self, _index, _ifAbsent_0));
  }, ["self", "index", "ifAbsent/0"]),
  "{ :self :index :ifAbsent/0 |\n\t\tself.linkAtIfAbsent(index, ifAbsent/0).value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "collect",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _aLink = _firstLink_1(_self);
    let _answer = _LinkedList_0();
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
        _addInPlace_2(_answer, _aBlock_1(_value_1(_aLink)));
        return _aLink = _nextLink_1(_aLink);
      }, []),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet aLink = self.firstLink;\n\t\tlet answer = LinkedList();\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\tanswer.add!(aBlock(aLink.value));\n\t\t\taLink := aLink.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "do",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotEmpty_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(_firstLink_1(_self), _aBlock_1);
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.ifNotEmpty {\n\t\t\tself.firstLink.do(aBlock/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "indices",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _Range_2(1, _size_1(_self));
  }, ["self", "index"]),
  "{ :self :index |\n\t\tRange(1, self.size)\n\t}",
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
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "linkAt: empty");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linkAt_2(_firstLink_1(_self), _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.ifEmpty {\n\t\t\tself.error('linkAt: empty')\n\t\t} {\n\t\t\tself.firstLink.linkAt(index)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linkAtIfAbsent",
  ["self", "index", "errorBlock/0"],
  sl.annotateFunction(function (_self, _index, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linkAtIfAbsent_3(_firstLink_1(_self), _index, _errorBlock_0);
      }, []),
    );
  }, ["self", "index", "errorBlock/0"]),
  "{ :self :index :errorBlock/0 |\n\t\tself.ifEmpty {\n\t\t\terrorBlock()\n\t\t} {\n\t\t\tself.firstLink.linkAtIfAbsent(index, errorBlock/0)\n\t\t}\n\t}",
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
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "linkOf: empty");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linkOf_2(_firstLink_1(_self), _anObject);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.ifEmpty {\n\t\t\tself.error('linkOf: empty')\n\t\t} {\n\t\t\tself.firstLink.linkOf(anObject)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linkOfIfAbsent",
  ["self", "anObject", "errorBlock/0"],
  sl.annotateFunction(function (_self, _anObject, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _errorBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linkOfIfAbsent_3(_firstLink_1(_self), _anObject, _errorBlock_0);
      }, []),
    );
  }, ["self", "anObject", "errorBlock/0"]),
  "{ :self :anObject :errorBlock/0 |\n\t\tself.ifEmpty {\n\t\t\terrorBlock()\n\t\t} {\n\t\t\tself.firstLink.linkOfIfAbsent(anObject, errorBlock/0)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "linksDo",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotEmpty_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _linksDo_2(_firstLink_1(_self), _aBlock_1);
      }, []),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.ifNotEmpty {\n\t\t\tself.firstLink.linksDo(aBlock/1)\n\t\t}\n\t}",
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
        } /* Statements */
        let _aLink = _firstLinkMutateInPlace_2(
          _self,
          _copy_1(_firstLink_1(_self)),
        );
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
            return _nextLinkMutateInPlace_2(
              _aLink,
              _aLink = _copy_1(_nextLink_1(_aLink)),
            );
          }, []),
        );
        return _lastLinkMutateInPlace_2(_self, _aLink);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.firstLink.ifNotNil {\n\t\t\tlet aLink = self.firstLink := self.firstLink.copy;\n\t\t\t{\n\t\t\t\taLink.nextLink.isNil\n\t\t\t}.whileFalse {\n\t\t\t\taLink.nextLink := (aLink := aLink.nextLink.copy)\n\t\t\t};\n\t\t\tself.lastLink := aLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "putInPlace",
  ["self", "index", "anObject"],
  sl.annotateFunction(function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _putLinkInPlace_3(
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
          return _Link_2(_anObject, null);
        }, []),
      ),
    );
  }, ["self", "index", "anObject"]),
  "{ :self :index :anObject |\n\t\tself.putLink!(\n\t\t\tindex,\n\t\t\tself.linkOfIfAbsent(anObject) {\n\t\t\t\tLink(anObject, nil)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "putLinkInPlace",
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
        return _error_1("LinkedList>>putLink!: errorOutOfBounds");
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
        _nextLinkMutateInPlace_2(_aLink, _nextLink_1(_firstLink_1(_self)));
        _firstLinkMutateInPlace_2(_self, _aLink);
        return _ifNil_2(
          _nextLink_1(_aLink),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lastLinkMutateInPlace_2(_self, _aLink);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let _previousLink = _linkAt_2(_self, _hyphenMinus_2(_index, 1));
        let _nextLink = _nextLink_1(_nextLink_1(_previousLink));
        _ifNil_3(
          _nextLink,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextLinkMutateInPlace_2(_aLink, _lastLink_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextLinkMutateInPlace_2(_aLink, _nextLink);
          }, []),
        );
        _nextLinkMutateInPlace_2(_previousLink, _aLink);
        return _ifNil_2(
          _nextLink,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _lastLinkMutateInPlace_2(_self, _aLink);
            return _nextLinkMutateInPlace_2(_aLink, null);
          }, []),
        );
      }, []),
    );
    return _aLink;
  }, ["self", "index", "aLink"]),
  "{ :self :index :aLink |\n\t\t/* Putting a link which is already in the list will create an infinite loop */\n\t\tself.includesIndex(index).ifFalse {\n\t\t\t'LinkedList>>putLink!: errorOutOfBounds'.error\n\t\t};\n\t\t(index = 1).if {\n\t\t\taLink.nextLink := self.firstLink.nextLink;\n\t\t\tself.firstLink := aLink;\n\t\t\taLink.nextLink.ifNil {\n\t\t\t\tself.lastLink := aLink\n\t\t\t}\n\t\t} {\n\t\t\tlet previousLink = self.linkAt(index - 1);\n\t\t\tlet nextLink = previousLink.nextLink.nextLink;\n\t\t\tnextLink.ifNil {\n\t\t\t\taLink.nextLink := self.lastLink\n\t\t\t} {\n\t\t\t\taLink.nextLink := nextLink\n\t\t\t};\n\t\t\tpreviousLink.nextLink := aLink;\n\t\t\tnextLink.ifNil {\n\t\t\t\tself.lastLink := aLink;\n\t\t\t\taLink.nextLink := nil\n\t\t\t}\n\t\t};\n\t\taLink\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeAllInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _firstLinkMutateInPlace_2(_self, null);
    return _lastLinkMutateInPlace_2(_self, null);
  }, ["self"]),
  "{ :self |\n\t\tself.firstLink := nil;\n\t\tself.lastLink := nil\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeAllSuchThatInPlace",
  ["self", "aBlock/1"],
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
            return _removeInPlace_2(_self, _each);
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tself.remove!(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeFirstInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _oldLink = _firstLink_1(_self);
    _emptyCheck_1(_self);
    _if_3(
      _equalsSignEqualsSign_2(_firstLink_1(_self), _lastLink_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAllInPlace_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _firstLinkMutateInPlace_2(_self, _nextLink_1(_oldLink));
      }, []),
    );
    _nextLinkMutateInPlace_2(_oldLink, null);
    return _value_1(_oldLink);
  }, ["self"]),
  "{ :self |\n\t\tlet oldLink = self.firstLink;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll!\n\t\t} {\n\t\t\tself.firstLink := oldLink.nextLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeIfAbsentInPlace",
  ["self", "anObject", "aBlock/0"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _link = _linkOfIfAbsent_3(_self, _anObject, _aBlock_0);
    _removeLinkIfAbsentInPlace_3(
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
    return _anObject;
  }, ["self", "anObject", "aBlock/0"]),
  "{ :self :anObject :aBlock/0 |\n\t\tlet link = self.linkOfIfAbsent(anObject, aBlock/0);\n\t\tself.removeLinkIfAbsent!(link) {\n\t\t\taBlock()\n\t\t};\n\t\tanObject\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeLastInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _oldLink = _lastLink_1(_self);
    let _aLink = null;
    _emptyCheck_1(_self);
    _if_3(
      _equalsSignEqualsSign_2(_firstLink_1(_self), _lastLink_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAllInPlace_1(_self);
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
        _nextLinkMutateInPlace_2(_aLink, null);
        return _lastLinkMutateInPlace_2(_self, _aLink);
      }, []),
    );
    _nextLinkMutateInPlace_2(_oldLink, null);
    return _value_1(_oldLink);
  }, ["self"]),
  "{ :self |\n\t\tlet oldLink = self.lastLink;\n\t\tlet aLink = nil;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll!\n\t\t} {\n\t\t\taLink := self.firstLink;\n\t\t\t{\n\t\t\t\taLink.nextLink == oldLink\n\t\t\t}.whileFalse {\n\t\t\t\taLink := aLink.nextLink\n\t\t\t};\n\t\t\taLink.nextLink := nil;\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "removeLinkIfAbsentInPlace",
  ["self", "aLink", "aBlock/0"],
  sl.annotateFunction(function (_self, _aLink, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aLink, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _withReturn_1(sl.annotateFunction(function (_return_1) {
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
          _firstLinkMutateInPlace_2(_self, _nextLink_1(_aLink));
          return _ifTrue_2(
            _equalsSignEqualsSign_2(_aLink, _lastLink_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lastLinkMutateInPlace_2(_self, null);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          let _tempLink = _firstLink_1(_self);
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
          _nextLinkMutateInPlace_2(_tempLink, _nextLink_1(_aLink));
          return _ifTrue_2(
            _equalsSignEqualsSign_2(_aLink, _lastLink_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lastLinkMutateInPlace_2(_self, _tempLink);
            }, []),
          );
        }, []),
      );
      return _aLink;
    }, ["return/1"]));
  }, ["self", "aLink", "aBlock/0"]),
  "{ :self :aLink :aBlock/0 |\n\t\twithReturn { :return/1 |\n\t\t\t(aLink == self.firstLink).if {\n\t\t\t\tself.firstLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := nil\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tlet tempLink = self.firstLink;\n\t\t\t\t{\n\t\t\t\t\ttempLink.ifNil {\n\t\t\t\t\t\taBlock().return\n\t\t\t\t\t};\n\t\t\t\t\ttempLink.nextLink == aLink\n\t\t\t\t}.whileFalse {\n\t\t\t\t\ttempLink := tempLink.nextLink\n\t\t\t\t};\n\t\t\t\ttempLink.nextLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := tempLink\n\t\t\t\t}\n\t\t\t};\n\t\t\taLink\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "reverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _LinkedList_0();
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addFirstInPlace_2(_answer, _each);
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\tanswer.addFirst!(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "select",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _LinkedList_0();
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
            return _addInPlace_2(_answer, _each);
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\teach.aBlock.ifTrue {\n\t\t\t\tanswer.add!(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _size_1(_firstLink_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isEmpty.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.firstLink.size\n\t\t}\n\t}",
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
    return _LinkedList_0;
  }, ["self"]),
  "{ :self |\n\t\tLinkedList/0\n\t}",
);

sl.addMethodToExistingType(
  "LinkedList",
  "LinkedList",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("LinkedList(%)", [_storeString_1(_List_1(_self))]);
  }, ["self"]),
  "{ :self |\n\t\t'LinkedList(%)'.format([self.List.storeString])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "LinkedList",
  "LinkedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _LinkedList_0();
    _addAllInPlace_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = LinkedList();\n\t\tanswer.addAll!(self);\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "LinkedList",
  "collectionToLinkedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _answer = _LinkedList_0();
    _addAllInPlace_2(_answer, _self);
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = LinkedList();\n\t\tanswer.addAll!(self);\n\t\tanswer\n\t}",
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
    return _initializeSlots_3(_newLinkedList_0(), null, null);
  }, []),
  "{\n\t\tnewLinkedList().initializeSlots(nil, nil)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "LinkedList",
  "emptyLinkedList",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newLinkedList_0(), null, null);
  }, []),
  "{\n\t\tnewLinkedList().initializeSlots(nil, nil)\n\t}",
);
