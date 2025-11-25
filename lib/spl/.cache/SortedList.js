sl.addType(
  false,
  "SortedList",
  "SortedList",
  [
    "Object",
    "Storeable",
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
  ["contents", "sortBlock"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Iterable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Collection",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Extensible",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Removable",
  "SortedList",
);

sl.copyTraitMethodsToType(
  "Sequenceable",
  "SortedList",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "plusSignPlusSign",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _copy_1(_self);
    /* Statements */
    _addAll_2(_answer, _aCollection);
    return _answer;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tlet answer = self.copy;\n\t\tanswer.addAll(aCollection);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "add",
  ["self", "item"],
  sl.annotateFunction(function (_self, _item) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _item";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEmpty_1(_contents_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_contents_1(_self), _item);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextIndex = _indexForInserting_2(_self, _item);
        /* Statements */
        return _insertAt_3(_contents_1(_self), _item, _nextIndex);
      }, []),
    );
  }, ["self", "item"]),
  "{ :self :item |\n\t\tself.contents.isEmpty.if {\n\t\t\tself.contents.add(item)\n\t\t} {\n\t\t\tlet nextIndex = self.indexForInserting(item);\n\t\t\tself.contents.insertAt(item, nextIndex)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "addAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _greaterThanSign_2(
        _size_1(_aCollection),
        _solidusSolidus_2(_size_1(_contents_1(_self)), 3),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_contents_1(_self), _aCollection);
        return _sortBy_2(_contents_1(_self), _sortBlock_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _aCollection,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_self, _each);
          }, ["each"]),
        );
      }, []),
    );
    return _aCollection;
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\t(aCollection.size > (self.contents.size // 3)).if {\n\t\t\tself.contents.addAll(aCollection);\n\t\t\tself.contents.sortBy(self.sortBlock)\n\t\t} {\n\t\t\taCollection.do { :each |\n\t\t\t\tself.add(each)\n\t\t\t}\n\t\t};\n\t\taCollection\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.copy\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "atIfAbsent",
  ["self", "index", "ifAbsent:/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(_contents_1(_self), _index, _ifAbsent_0);
  }, ["self", "index", "ifAbsent:/0"]),
  "{ :self :index :ifAbsent:/0 |\n\t\tself.contents.atIfAbsent(index, ifAbsent:/0)\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSortedList_2(
      _collect_2(_contents_1(_self), _aBlock_1),
      _sortBlock_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.contents.collect(aBlock:/1).asSortedList(self.sortBlock)\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "do",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_contents_1(_self), _aBlock_1);
    return _self;
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.contents.do(aBlock:/1);\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "indexForInserting",
  ["self", "newObject"],
  sl.annotateFunction(function (_self, _newObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _low = 1;
    let _high = _size_1(_contents_1(_self));
    let _sortBlock_2 = _sortBlock_1(_self);
    let _index = null;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _index = _solidusSolidus_2(_plusSign_2(_high, _low), 2);
        return _sortBlock_2(_low, _high);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _value_3(
            _sortBlock_1(_self),
            _at_2(_contents_1(_self), _index),
            _newObject,
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _low = _plusSign_2(_index, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _high = _hyphenMinus_2(_index, 1);
          }, []),
        );
      }, []),
    );
    return _low;
  }, ["self", "newObject"]),
  "{ :self :newObject |\n\t\tlet low = 1;\n\t\tlet high = self.contents.size;\n\t\tlet sortBlock:/2 = self.sortBlock;\n\t\tlet index = nil;\n\t\t{\n\t\t\tindex := high + low // 2;\n\t\t\tsortBlock(low, high)\n\t\t}.whileTrue {\n\t\t\tself.sortBlock.value(self.contents[index], newObject).if {\n\t\t\t\tlow := index + 1\n\t\t\t} {\n\t\t\t\thigh := index - 1\n\t\t\t}\n\t\t};\n\t\tlow\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "indexOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexForInserting_2(_self, _anObject);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _greaterThanSignEqualsSign_2(_i, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_at_2(_self, _hyphenMinus_2(_i, 1)), _anObject);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_i, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet i = self.indexForInserting(anObject);\n\t\t(\n\t\t\ti >= 2 & {\n\t\t\t\tself[i - 1] = anObject\n\t\t\t}\n\t\t).if {\n\t\t\ti - 1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(
      _isOdd_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _plusSign_2(_solidusSolidus_2(_n, 2), 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _solidusSolidus_2(_n, 2);
        /* Statements */
        return _solidus_2(
          _plusSign_2(_at_2(_self, _i), _at_2(_self, _plusSign_2(_i, 1))),
          2,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.size;\n\t\tn.isOdd.if {\n\t\t\tself[n // 2 + 1]\n\t\t} {\n\t\t\tlet i = n // 2;\n\t\t\t(self[i] + self[i + 1]) / 2\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "occurrencesOf",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexOf_2(_self, _anObject);
    /* Statements */
    return _if_3(
      _equalsSign_2(_i, 0),
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
        } /* Temporaries */
        let _j = _i;
        let _c = _contents_1(_self);
        /* Statements */
        _whileTrue_1(sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _j = _hyphenMinus_2(_j, 1);
          return _ampersand_2(
            _greaterThanSign_2(_j, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_at_2(_c, _j), _anObject);
            }, []),
          );
        }, []));
        return _hyphenMinus_2(_i, _j);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tlet i = self.indexOf(anObject);\n\t\t(i = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet j = i;\n\t\t\tlet c = self.contents;\n\t\t\t{\n\t\t\t\tj := j - 1;\n\t\t\t\tj > 0 & { c[j] = anObject }\n\t\t\t}.whileTrue;\n\t\t\ti - j\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "quantile",
  ["self", "p", "o"],
  sl.annotateFunction(function (_self, _p, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _p, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_p),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _p,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _quantile_3(_self, _each, _o);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _self;
        let _n = _size_1(_y);
        /* Statements */
        return _if_3(
          _equalsSign_2(_p, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_y, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_p, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _at_2(_y, _n);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let __SplVar1 = _assertIsOfSize_2(_at_2(_o, 1), 2);
                let _a = _at_2(__SplVar1, 1);
                let _b = _at_2(__SplVar1, 2);
                let __SplVar2 = _assertIsOfSize_2(_at_2(_o, 2), 2);
                let _c = _at_2(__SplVar2, 1);
                let _d = _at_2(__SplVar2, 2);
                let _r = _plusSign_2(_a, _asterisk_2(_plusSign_2(_n, _b), _p));
                let _f = _fractionalPart_1(_r);
                let _i0 = _max_2(_floor_1(_r), 1);
                let _i1 = _min_2(_ceiling_1(_r), _n);
                /* Statements */
                return _plusSign_2(
                  _at_2(_y, _i0),
                  _asterisk_2(
                    _hyphenMinus_2(_at_2(_y, _i1), _at_2(_y, _i0)),
                    _plusSign_2(_c, _asterisk_2(_d, _f)),
                  ),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "p", "o"]),
  "{ :self :p :o |\n\t\tp.isCollection.if {\n\t\t\tp.collect { :each |\n\t\t\t\tself.quantile(each, o)\n\t\t\t}\n\t\t} {\n\t\t\tlet y = self;\n\t\t\tlet n = y.size;\n\t\t\t(p = 0).if {\n\t\t\t\ty[1]\n\t\t\t} {\n\t\t\t\t(p = 1).if {\n\t\t\t\t\ty[n]\n\t\t\t\t} {\n\t\t\t\t\tlet [a, b] = o[1];\n\t\t\t\t\tlet [c, d] = o[2];\n\t\t\t\t\tlet r = a + ((n + b) * p);\n\t\t\t\t\tlet f = r.fractionalPart;\n\t\t\t\t\tlet i0 = r.floor.max(1);\n\t\t\t\t\tlet i1 = r.ceiling.min(n);\n\t\t\t\t\ty[i0] + ((y[i1] - y[i0]) * (c + (d * f)))\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "removeIfAbsent",
  ["self", "oldObject", "anExceptionBlock:/0"],
  sl.annotateFunction(function (_self, _oldObject, _anExceptionBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _oldObject, _anExceptionBlock_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _indexOf_2(_self, _oldObject);
    /* Statements */
    return _if_3(
      _equalsSign_2(_i, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _anExceptionBlock_0();
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _removeAt_2(_contents_1(_self), _i);
      }, []),
    );
  }, ["self", "oldObject", "anExceptionBlock:/0"]),
  "{ :self :oldObject :anExceptionBlock:/0 |\n\t\tlet i = self.indexOf(oldObject);\n\t\t(i = 0).if {\n\t\t\tanExceptionBlock()\n\t\t} {\n\t\t\tself.contents.removeAt(i)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "size",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.size\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "species",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_0;
  }, ["self"]),
  "{ :self |\n\t\tSortedList:/0\n\t}",
);

sl.addMethodToExistingType(
  "SortedList",
  "SortedList",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_sortBlock_1(_self), _precedesOrEqualTo_2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("SortedList(%)", [_contents_1(_self)]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("SortedList(%, %)", [
          _contents_1(_self),
          _name_1(_sortBlock_1(_self)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.sortBlock = precedesOrEqualTo:/2).if {\n\t\t\t'SortedList(%)'.format([self.contents])\n\t\t} {\n\t\t\t'SortedList(%, %)'.format(\n\t\t\t\t[\n\t\t\t\t\tself.contents,\n\t\t\t\t\tself.sortBlock.name\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "SortedList",
  "SortedList",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSortedList_0(), [], _precedesOrEqualTo_2);
  }, []),
  "{\n\t\tnewSortedList().initializeSlots([], precedesOrEqualTo:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_1(_asList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tSortedList(self.asList)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "SortedList",
  "asSortedList",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_2(_asList_1(_self), _sortBlock_2);
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tSortedList(self.asList, sortBlock:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "SortedList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SortedList_2(_self, _precedesOrEqualTo_2);
  }, ["self"]),
  "{ :self |\n\t\tSortedList(self, precedesOrEqualTo:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SortedList",
  "SortedList",
  ["self", "sortBlock:/2"],
  sl.annotateFunction(function (_self, _sortBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sortBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newSortedList_0(),
      _sortBy_2(_copy_1(_self), _sortBlock_2),
      _sortBlock_2,
    );
  }, ["self", "sortBlock:/2"]),
  "{ :self :sortBlock:/2 |\n\t\tnewSortedList().initializeSlots(\n\t\t\tself.copy.sortBy(sortBlock:/2),\n\t\t\tsortBlock:/2\n\t\t)\n\t}",
);
