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
  "{ :self | self }",
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
  "{ :self | typeResponsibility(self,'nextLink') }",
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
  "{ :self | ValueLink(self) }",
);

sl.addType(
  false,
  "LinkedList",
  "LinkedList",
  [
    "Object",
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
  "{ :self :aLinkOrObject | addLast(self,aLinkOrObject) }",
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
  "{ :self :aLinkOrObject | let aLink = asLink(aLinkOrObject); ifTrue(isEmpty(self), { lastLink(self, aLink) }); nextLink(aLink, firstLink(self)); firstLink(self, aLink); aLink }",
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
  "{ :self :aLinkOrObject | let aLink = asLink(aLinkOrObject); if(isEmpty(self), { firstLink(self, aLink) }, { nextLink(lastLink(self), aLink) }); lastLink(self, aLink); aLink }",
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
  "{ :self | let answer = List(size(self)); let index = 1; do(self, { :each | atPut(answer, index, each); index := +(index, 1) }); answer }",
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
  "{ :self :index :ifAbsent:/0 | value(linkAtIfAbsent(self,index, ifAbsent:/0)) }",
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
  "{ :self :index :anObject | atPutLink(self,index, linkOfIfAbsent(self, anObject, { asLink(anObject) })) }",
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
  "{ :self :index :aLink | ifFalse(includesIndex(self,index), { error('LinkedList>>atPutLink: errorOutOfBounds') }); if((=(index, 1)), { nextLink(aLink,nextLink(firstLink(self))); firstLink(self, aLink); ifNil(nextLink(aLink), { lastLink(self, aLink) }) }, { let previousLink = linkAt(self,-(index, 1)); let nextLink = nextLink(nextLink(previousLink)); ifNil(nextLink, { nextLink(aLink,lastLink(self)) }, { nextLink(aLink,nextLink) }); nextLink(previousLink,aLink); ifNil(nextLink, { lastLink(self, aLink); nextLink(aLink,nil) }) }); aLink }",
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
  "{ :self :aBlock:/1 | let aLink = firstLink(self); let answer = LinkedList(); whileFalse({ =(aLink, nil) }, { add(answer,aBlock(value(aLink))); aLink := nextLink(aLink) }); answer }",
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
  "{ :self :aBlock:/1 | let aLink = firstLink(self); whileFalse({ =(aLink, nil) }, { aBlock(value(aLink)); aLink := nextLink(aLink) }) }",
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
  "{ :self :index | betweenAnd(index,1, size(self)) }",
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
  "{ :self | isNil(firstLink(self)) }",
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
  "{ :self :index | linkAtIfAbsent(self, index, { errorInvalidIndex(self,'linkAt', index) }) }",
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
  "{ :self :index :errorBlock:/0 | let counter = 0; valueWithReturn({ :return:/1 | linksDo(self, { :link | counter := +(counter, 1); ifTrue((=(counter, index)), { return(link) }) }); errorBlock() }) }",
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
  "{ :self :anObject | linkOfIfAbsent(self, anObject, { error('LinkedList>>linkOf: no such element') }) }",
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
  "{ :self :anObject :errorBlock:/0 | valueWithReturn({ :return:/1 | linksDo(self, { :link | ifTrue((=(value(link), value(anObject))), { return(link) }) }); errorBlock() }) }",
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
  "{ :self :aBlock:/1 | let aLink = firstLink(self); whileFalse({ =(aLink, nil) }, { aBlock(aLink); aLink := nextLink(aLink) }) }",
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
  "{ :self :aNumber | timesRepeat((-(aNumber, size(self))), { add(self,nil) }); self }",
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
  "{ :self | ifNotNil(firstLink(self), { let aLink = firstLink(self, copy(firstLink(self))); whileFalse({ isNil(nextLink(aLink)) }, { nextLink(aLink,aLink := copy(nextLink(aLink))) }); lastLink(self, aLink) }) }",
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
  "{ :self | firstLink(self, nil); lastLink(self, nil) }",
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
  "{ :self :aBlock:/1 | do(self, { :each | ifTrue(aBlock(each), { remove(self,each) }) }) }",
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
  "{ :self | let oldLink = firstLink(self); emptyCheck(self); if((==(firstLink(self), lastLink(self))), { removeAll(self) }, { firstLink(self, nextLink(oldLink)) }); nextLink(oldLink, nil); value(oldLink) }",
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
  "{ :self :aLinkOrObject :aBlock:/0 | let link = linkOfIfAbsent(self,aLinkOrObject, aBlock:/0); removeLinkIfAbsent(self, link, { aBlock() }); aLinkOrObject }",
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
  "{ :self | let oldLink = lastLink(self); let aLink = nil; emptyCheck(self); if((==(firstLink(self), lastLink(self))), { removeAll(self) }, { aLink := firstLink(self); whileFalse({ ==(nextLink(aLink), oldLink) }, { aLink := nextLink(aLink) }); nextLink(aLink, nil); lastLink(self, aLink) }); nextLink(oldLink, nil); value(oldLink) }",
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
  "{ :self :aLink :aBlock:/0 | valueWithReturn({ :return:/1 | if((==(aLink, firstLink(self))), { firstLink(self, nextLink(aLink)); ifTrue((==(aLink, lastLink(self))), { lastLink(self, nil) }) }, { let tempLink = firstLink(self); whileFalse({ ifNil(tempLink, { return(aBlock()) }); ==(nextLink(tempLink), aLink) }, { tempLink := nextLink(tempLink) }); nextLink(tempLink, nextLink(aLink)); ifTrue((==(aLink, lastLink(self))), { lastLink(self, tempLink) }) }); aLink }) }",
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
  "{ :self :aBlock:/1 | let answer = LinkedList(); do(self, { :each | ifTrue(aBlock(each), { add(answer,each) }) }); answer }",
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
  "{ :self | List:/1 }",
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
  "{ :self | let answer = LinkedList(); do(self, { :each | add(answer,each) }); answer }",
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
  "{ newLinkedList() }",
);

sl.addType(
  false,
  "ValueLink",
  "LinkedList",
  ["Object", "Link"],
  ["nextLink", "value"],
);

sl.copyTraitMethodsToType(
  "Object",
  "ValueLink",
);

sl.copyTraitMethodsToType(
  "Link",
  "ValueLink",
);

sl.addMethodToExistingType(
  "ValueLink",
  "LinkedList",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
          _equalsSign_2(_value_1(_self), _value_1(_anObject)),
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
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isValueLink(anObject), { &(=(value(self), value(anObject)), { ==(nextLink(self), nextLink(anObject)) }) }) }",
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
  "{ :self | initializeSlots(newValueLink(),nil, self) }",
);
