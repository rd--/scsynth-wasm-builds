sl.addTrait("Link", "LinkedList");

sl.addTraitMethod(
  "Link",
  "LinkedList",
  "asLink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addTraitMethod(
  "Link",
  "LinkedList",
  "nextLink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeResponsibility_2(_self, "nextLink");
  },
  "{ :self |\n\t\tself.typeResponsibility('nextLink')\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "LinkedList",
  "asLink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ValueLink_1(_self);
  },
  "{ :self |\n\t\tValueLink(self)\n\t}",
);

sl.addType(
  false,
  "LinkedList",
  "LinkedList",
  [
    "Object",
    "Iterable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequenceable",
  ],
  ["firstLink", "lastLink"],
);

sl.copyTraitToType(
  "Object",
  "LinkedList",
);

sl.copyTraitToType(
  "Iterable",
  "LinkedList",
);

sl.copyTraitToType(
  "Collection",
  "LinkedList",
);

sl.copyTraitToType(
  "Extensible",
  "LinkedList",
);

sl.copyTraitToType(
  "Removable",
  "LinkedList",
);

sl.copyTraitToType(
  "Sequenceable",
  "LinkedList",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "add",
  ["self", "aLinkOrObject"],
  function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _addLast_2(_self, _aLinkOrObject);
  },
  "{ :self :aLinkOrObject |\n\t\tself.addLast(aLinkOrObject)\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "addFirst",
  ["self", "aLinkOrObject"],
  function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aLink = _asLink_1(_aLinkOrObject);
    /* Statements */
    _ifTrue_2(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lastLink_2(_self, _aLink);
    });
    _nextLink_2(_aLink, _firstLink_1(_self));
    _firstLink_2(_self, _aLink);
    return _aLink;
  },
  "{ :self :aLinkOrObject |\n\t\tlet aLink = aLinkOrObject.asLink;\n\t\tself.isEmpty.ifTrue {\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\taLink.nextLink := self.firstLink;\n\t\tself.firstLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "addLast",
  ["self", "aLinkOrObject"],
  function (_self, _aLinkOrObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLinkOrObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aLink = _asLink_1(_aLinkOrObject);
    /* Statements */
    _if_3(_isEmpty_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _firstLink_2(_self, _aLink);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _nextLink_2(_lastLink_1(_self), _aLink);
    });
    _lastLink_2(_self, _aLink);
    return _aLink;
  },
  "{ :self :aLinkOrObject |\n\t\tlet aLink = aLinkOrObject.asLink;\n\t\tself.isEmpty.if {\n\t\t\tself.firstLink := aLink\n\t\t} {\n\t\t\tself.lastLink.nextLink := aLink\n\t\t};\n\t\tself.lastLink := aLink;\n\t\taLink\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_size_1(_self));
    let _index = 1;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _atPut_3(_answer, _index, _each);
      return _index = _plus_2(_index, 1);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self.size);\n\t\tlet index = 1;\n\t\tself.do { :each |\n\t\t\tanswer[index] := each;\n\t\t\tindex := index + 1\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _value_1(_linkAt_2(_self, _index));
  },
  "{ :self :index |\n\t\tself.linkAt(index).value\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "atPut",
  ["self", "index", "anObject"],
  function (_self, _index, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _atPutLink_3(
      _self,
      _index,
      _linkOfIfAbsent_3(_self, _anObject, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asLink_1(_anObject);
      }),
    );
  },
  "{ :self :index :anObject |\n\t\tself.atPutLink(index, self.linkOfIfAbsent(anObject) {\n\t\t\tanObject.asLink\n\t\t})\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "atPutLink",
  ["self", "index", "aLink"],
  function (_self, _index, _aLink) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _aLink";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _ifFalse_2(_validIndex_2(_self, _index), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("LinkedList>>atPutLink: errorOutOfBounds");
    });
    _if_3(_equals_2(_index, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _nextLink_2(_aLink, _nextLink_1(_firstLink_1(_self)));
      _firstLink_2(_self, _aLink);
      return _ifNil_2(_nextLink_1(_aLink), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lastLink_2(_self, _aLink);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _previousLink = _linkAt_2(_self, _minus_2(_index, 1));
      let _nextLink = _nextLink_1(_nextLink_1(_previousLink));
      /* Statements */
      _ifNil_3(_nextLink, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _nextLink_2(_aLink, _lastLink_1(_self));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _nextLink_2(_aLink, _nextLink);
      });
      _nextLink_2(_previousLink, _aLink);
      return _ifNil_2(_nextLink, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _lastLink_2(_self, _aLink);
        return _nextLink_2(_aLink, null);
      });
    });
    return _aLink;
  },
  "{ :self :index :aLink |\n\t\t{- Putting a link which is already in the list will create an infinite loop -}\n\t\tself.validIndex(index).ifFalse {\n\t\t\t'LinkedList>>atPutLink: errorOutOfBounds'.error\n\t\t};\n\t\t(index = 1).if {\n\t\t\taLink.nextLink(self.firstLink.nextLink);\n\t\t\tself.firstLink := aLink;\n\t\t\taLink.nextLink.ifNil {\n\t\t\t\tself.lastLink := aLink\n\t\t\t}\n\t\t} {\n\t\t\tlet previousLink = self.linkAt(index - 1);\n\t\t\tlet nextLink = previousLink.nextLink.nextLink;\n\t\t\tnextLink.ifNil {\n\t\t\t\taLink.nextLink(self.lastLink)\n\t\t\t} {\n\t\t\t\taLink.nextLink(nextLink)\n\t\t\t};\n\t\t\tpreviousLink.nextLink(aLink);\n\t\t\tnextLink.ifNil {\n\t\t\t\tself.lastLink := aLink;\n\t\t\t\taLink.nextLink(nil)\n\t\t\t}\n\t\t};\n\t\taLink\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aLink = _firstLink_1(_self);
    let _answer = _LinkedList_0();
    /* Statements */
    _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_aLink, null);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _aBlock_1(_value_1(_aLink)));
      return _aLink = _nextLink_1(_aLink);
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\tlet answer = LinkedList();\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\tanswer.add(aBlock(aLink.value));\n\t\t\taLink := aLink.nextLink\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aLink = _firstLink_1(_self);
    /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_aLink, null);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_value_1(_aLink));
      return _aLink = _nextLink_1(_aLink);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\taBlock(aLink.value);\n\t\t\taLink := aLink.nextLink\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _isNil_1(_firstLink_1(_self));
  },
  "{ :self |\n\t\tself.firstLink.isNil\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "linkAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _linkAtIfAbsent_3(_self, _index, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _errorInvalidIndex_3(_self, "linkAt", _index);
    });
  },
  "{ :self :index |\n\t\tself.linkAtIfAbsent(index) {\n\t\t\tself.errorInvalidIndex('linkAt', index)\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "linkAtIfAbsent",
  ["self", "index", "errorBlock:/0"],
  function (_self, _index, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _errorBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _counter = 0;
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _linksDo_2(_self, function (_link) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _link";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _counter = _plus_2(_counter, 1);
        return _ifTrue_2(_equals_2(_counter, _index), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _return_1(_link);
        });
      });
      return _errorBlock_0();
    });
  },
  "{ :self :index :errorBlock:/0 |\n\t\tlet counter = 0;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\tcounter := counter + 1;\n\t\t\t\t(counter = index).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "linkOf",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _linkOfIfAbsent_3(_self, _anObject, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("LinkedList>>linkOf: no such element");
    });
  },
  "{ :self :anObject |\n\t\tself.linkOfIfAbsent(anObject) {\n\t\t\t'LinkedList>>linkOf: no such element'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "linkOfIfAbsent",
  ["self", "anObject", "errorBlock:/0"],
  function (_self, _anObject, _errorBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _errorBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _linksDo_2(_self, function (_link) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _link";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(
          _equals_2(_value_1(_link), _value_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_link);
          },
        );
      });
      return _errorBlock_0();
    });
  },
  "{ :self :anObject :errorBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tself.linksDo { :link |\n\t\t\t\t(link.value = anObject.value).ifTrue {\n\t\t\t\t\tlink.return\n\t\t\t\t}\n\t\t\t};\n\t\t\terrorBlock()\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "linksDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _aLink = _firstLink_1(_self);
    /* Statements */
    return _whileFalse_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_aLink, null);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _aBlock_1(_aLink);
      return _aLink = _nextLink_1(_aLink);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet aLink = self.firstLink;\n\t\t{\n\t\t\taLink = nil\n\t\t}.whileFalse {\n\t\t\taBlock(aLink);\n\t\t\taLink := aLink.nextLink\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "ofSize",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _timesRepeat_2(_minus_2(_aNumber, _size_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_self, null);
    });
    return _self;
  },
  "{ :self :aNumber |\n\t\t(aNumber - self.size).timesRepeat {\n\t\t\tself.add(nil)\n\t\t};\n\t\tself\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "postCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNotNil_2(_firstLink_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _aLink = _firstLink_2(_self, _copy_1(_firstLink_1(_self)));
      /* Statements */
      _whileFalse_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isNil_1(_nextLink_1(_aLink));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _nextLink_2(_aLink, _aLink = _copy_1(_nextLink_1(_aLink)));
      });
      return _lastLink_2(_self, _aLink);
    });
  },
  "{ :self |\n\t\tself.firstLink.ifNotNil {\n\t\t\tlet aLink = self.firstLink := self.firstLink.copy;\n\t\t\t{\n\t\t\t\taLink.nextLink.isNil\n\t\t\t}.whileFalse {\n\t\t\t\taLink.nextLink(aLink := aLink.nextLink.copy)\n\t\t\t};\n\t\t\tself.lastLink := aLink\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _firstLink_2(_self, null);
    return _lastLink_2(_self, null);
  },
  "{ :self |\n\t\tself.firstLink := nil;\n\t\tself.lastLink := nil\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeAllSuchThat",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _remove_2(_self, _each);
      });
    });
  },
  "{ :self :aBlock:/1 |\n\t\tself.do { :each |\n\t\t\taBlock(each).ifTrue {\n\t\t\t\tself.remove(each)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _oldLink = _firstLink_1(_self);
    /* Statements */
    _emptyCheck_1(_self);
    _if_3(
      _equalsEquals_2(_firstLink_1(_self), _lastLink_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _removeAll_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _firstLink_2(_self, _nextLink_1(_oldLink));
      },
    );
    _nextLink_2(_oldLink, null);
    return _value_1(_oldLink);
  },
  "{ :self |\n\t\tlet oldLink = self.firstLink;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll\n\t\t} {\n\t\t\tself.firstLink := oldLink.nextLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeIfAbsent",
  ["self", "aLinkOrObject", "aBlock:/0"],
  function (_self, _aLinkOrObject, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aLinkOrObject, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _link = _linkOfIfAbsent_3(_self, _aLinkOrObject, _aBlock_0);
    /* Statements */
    _removeLinkIfAbsent_3(_self, _link, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _aBlock_0();
    });
    return _aLinkOrObject;
  },
  "{ :self :aLinkOrObject :aBlock:/0 |\n\t\tlet link = self.linkOfIfAbsent(aLinkOrObject, aBlock:/0);\n\t\tself.removeLinkIfAbsent(link) {\n\t\t\taBlock()\n\t\t};\n\t\taLinkOrObject\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _oldLink = _lastLink_1(_self);
    let _aLink = null;
    /* Statements */
    _emptyCheck_1(_self);
    _if_3(
      _equalsEquals_2(_firstLink_1(_self), _lastLink_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _removeAll_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _aLink = _firstLink_1(_self);
        _whileFalse_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equalsEquals_2(_nextLink_1(_aLink), _oldLink);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aLink = _nextLink_1(_aLink);
        });
        _nextLink_2(_aLink, null);
        return _lastLink_2(_self, _aLink);
      },
    );
    _nextLink_2(_oldLink, null);
    return _value_1(_oldLink);
  },
  "{ :self |\n\t\tlet oldLink = self.lastLink;\n\t\tlet aLink = nil;\n\t\tself.emptyCheck;\n\t\t(self.firstLink == self.lastLink).if {\n\t\t\tself.removeAll\n\t\t} {\n\t\t\taLink := self.firstLink;\n\t\t\t{\n\t\t\t\taLink.nextLink == oldLink\n\t\t\t}.whileFalse {\n\t\t\t\taLink := aLink.nextLink\n\t\t\t};\n\t\t\taLink.nextLink := nil;\n\t\t\tself.lastLink := aLink\n\t\t};\n\t\toldLink.nextLink := nil;\n\t\toldLink.value\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "removeLinkIfAbsent",
  ["self", "aLink", "aBlock:/0"],
  function (_self, _aLink, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aLink, _aBlock_0";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _if_3(_equalsEquals_2(_aLink, _firstLink_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        _firstLink_2(_self, _nextLink_1(_aLink));
        return _ifTrue_2(
          _equalsEquals_2(_aLink, _lastLink_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lastLink_2(_self, null);
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Temporaries */
        let _tempLink = _firstLink_1(_self);
        /* Statements */
        _whileFalse_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _ifNil_2(_tempLink, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _return_1(_aBlock_0());
          });
          return _equalsEquals_2(_nextLink_1(_tempLink), _aLink);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _tempLink = _nextLink_1(_tempLink);
        });
        _nextLink_2(_tempLink, _nextLink_1(_aLink));
        return _ifTrue_2(
          _equalsEquals_2(_aLink, _lastLink_1(_self)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _lastLink_2(_self, _tempLink);
          },
        );
      });
      return _aLink;
    });
  },
  "{ :self :aLink :aBlock:/0 |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t(aLink == self.firstLink).if {\n\t\t\t\tself.firstLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := nil\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tlet tempLink = self.firstLink;\n\t\t\t\t{\n\t\t\t\t\ttempLink.ifNil {\n\t\t\t\t\t\taBlock().return\n\t\t\t\t\t};\n\t\t\t\t\ttempLink.nextLink == aLink\n\t\t\t\t}.whileFalse {\n\t\t\t\t\ttempLink := tempLink.nextLink\n\t\t\t\t};\n\t\t\t\ttempLink.nextLink := aLink.nextLink;\n\t\t\t\t(aLink == self.lastLink).ifTrue {\n\t\t\t\t\tself.lastLink := tempLink\n\t\t\t\t}\n\t\t\t};\n\t\t\taLink\n\t\t}\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "select",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _LinkedList_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_aBlock_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _add_2(_answer, _each);
      });
    });
    return _answer;
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\teach.aBlock.ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Array_1;
  },
  "{ :self |\n\t\tArray:/1\n\t}",
);

sl.addMethod(
  "LinkedList",
  "LinkedList",
  "validIndex",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _betweenAnd_3(_index, 1, _size_1(_self));
  },
  "{ :self :index |\n\t\tindex.betweenAnd(1, self.size)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "LinkedList",
  "asLinkedList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _LinkedList_0();
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _add_2(_answer, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = LinkedList();\n\t\tself.do { :each |\n\t\t\tanswer.add(each)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Void",
  "LinkedList",
  "LinkedList",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _newLinkedList_0();
  },
  "{\n\t\tnewLinkedList()\n\t}",
);

sl.addType(
  false,
  "ValueLink",
  "LinkedList",
  ["Object", "Link"],
  ["nextLink", "value"],
);

sl.copyTraitToType(
  "Object",
  "ValueLink",
);

sl.copyTraitToType(
  "Link",
  "ValueLink",
);

sl.addMethod(
  "ValueLink",
  "LinkedList",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isValueLink_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_value_1(_self), _value_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equalsEquals_2(_nextLink_1(_self), _nextLink_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isValueLink & {\n\t\t\tself.value = anObject.value & {\n\t\t\t\tself.nextLink == anObject.nextLink\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "LinkedList",
  "ValueLink",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newValueLink_0(), null, _self);
  },
  "{ :self |\n\t\tnewValueLink().initializeSlots(nil, self)\n\t}",
);
