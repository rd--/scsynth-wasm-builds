sl.addType(
  false,
  "CategoryDictionary",
  "CategoryDictionary",
  ["Object"],
  ["domainDictionary"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CategoryDictionary",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoriesOf",
  ["self", "domain", "entry"],
  sl.annotateFunction(function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dictionary = _domain_2(_self, _domain);
    /* Statements */
    return _select_2(
      _indices_1(_dictionary),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_at_2(_dictionary, _each), _entry);
      }, ["each"]),
    );
  }, ["self", "domain", "entry"]),
  "{ :self :domain :entry | let dictionary = domain(self,domain); select(indices(dictionary), { :each | includes(at(dictionary, each),entry) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoriesOf",
  ["self", "entry"],
  sl.annotateFunction(function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      throw new Error(errorMessage);
    } /* Statements */
    return _collectCatenate_2(
      _domains_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _categoriesOf_3(_self, _each, _entry);
      }, ["each"]),
    );
  }, ["self", "entry"]),
  "{ :self :entry | collectCatenate(domains(self), { :each | categoriesOf(self,each, entry) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorize",
  ["self", "domain", "category", "entry"],
  sl.annotateFunction(function (_self, _domain, _category, _entry) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _category, _entry";
      throw new Error(errorMessage);
    } /* Statements */
    return _uncheckedInclude_2(_category_3(_self, _domain, _category), _entry);
  }, ["self", "domain", "category", "entry"]),
  "{ :self :domain :category :entry | uncheckedInclude(category(self,domain, category),entry) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeAll",
  ["self", "domain", "category", "entries"],
  sl.annotateFunction(function (_self, _domain, _category, _entries) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _category, _entries";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _simpleCategory = _first_1(_splitBy_2(_category, "-"));
    /* Statements */
    return _uncheckedIncludeAll_2(
      _category_3(_self, _domain, _simpleCategory),
      _entries,
    );
  }, ["self", "domain", "category", "entries"]),
  "{ :self :domain :category :entries | let simpleCategory = first(splitBy(category,'-')); uncheckedIncludeAll(category(self,domain, simpleCategory),entries) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeDictionary",
  ["self", "domain", "aBlock:/1", "aDictionary"],
  sl.annotateFunction(function (_self, _domain, _aBlock_1, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _aBlock_1, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(
      _aDictionary,
      sl.annotateFunction(function (_value, _key) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _value, _key";
          throw new Error(errorMessage);
        } /* Statements */
        return _categorizeAll_4(
          _self,
          _domain,
          _key,
          _collect_2(_value, _aBlock_1),
        );
      }, ["value", "key"]),
    );
  }, ["self", "domain", "aBlock:/1", "aDictionary"]),
  "{ :self :domain :aBlock:/1 :aDictionary | withIndexDo(aDictionary, { :value :key | categorizeAll(self,domain, key, collect(value,aBlock:/1)) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeDictionary",
  ["self", "domain", "aDictionary"],
  sl.annotateFunction(function (_self, _domain, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _aDictionary";
      throw new Error(errorMessage);
    } /* Statements */
    return _categorizeDictionary_4(_self, _domain, _identity_1, _aDictionary);
  }, ["self", "domain", "aDictionary"]),
  "{ :self :domain :aDictionary | categorizeDictionary(self,domain, identity:/1, aDictionary) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "category",
  ["self", "domain", "category"],
  sl.annotateFunction(function (_self, _domain, _category) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _category";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _domain_2(_self, _domain),
      _category,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _IdentitySet_0();
      }, []),
    );
  }, ["self", "domain", "category"]),
  "{ :self :domain :category | atIfAbsentPut(domain(self,domain), category, { IdentitySet() }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoryOf",
  ["self", "domain", "entry"],
  sl.annotateFunction(function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _all = _categoriesOf_3(_self, _domain, _entry);
    /* Statements */
    return _caseOf_3(
      _size_1(_all),
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _categorize_4(_self, _domain, "*Uncategorized*", _entry);
            return "*Uncategorized*";
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_all, 1);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("categoryOf: multiple categories: ", [
            _domain,
            _entry,
          ]),
        );
      }, []),
    );
  }, ["self", "domain", "entry"]),
  "{ :self :domain :entry | let all = categoriesOf(self,domain, entry); caseOf(size(all), [->(0, { categorize(self,domain, '*Uncategorized*', entry); '*Uncategorized*' }), ->(1, { at(all, 1) })], { error(self,++('categoryOf: multiple categories: ', [domain, entry])) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoryOf",
  ["self", "entry"],
  sl.annotateFunction(function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _categoriesOf_2(_self, _entry);
    /* Statements */
    return _caseOf_3(
      _size_1(_answer),
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "*Uncategorized*";
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _first_1(_answer);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("categoryOf: multiple categories: ", _entry),
        );
      }, []),
    );
  }, ["self", "entry"]),
  "{ :self :entry | let answer = categoriesOf(self,entry); caseOf(size(answer), [->(0, { '*Uncategorized*' }), ->(1, { first(answer) })], { error(self,++('categoryOf: multiple categories: ', entry)) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "domain",
  ["self", "domain"],
  sl.annotateFunction(function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(
      _domainDictionary_1(_self),
      _domain,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_0();
      }, []),
    );
  }, ["self", "domain"]),
  "{ :self :domain | atIfAbsentPut(domainDictionary(self), domain, { Record() }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "domains",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_domainDictionary_1(_self));
  }, ["self"]),
  "{ :self | indices(domainDictionary(self)) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "entries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _IdentitySet_0();
    /* Statements */
    _do_2(
      _domainDictionary_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _valuesDo_2(
          _each,
          sl.annotateFunction(function (_item) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _item";
              throw new Error(errorMessage);
            } /* Statements */
            return _uncheckedInclude_2(_answer, _item);
          }, ["item"]),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = IdentitySet(); do(domainDictionary(self), { :each | valuesDo(each, { :item | uncheckedInclude(answer,item) }) }); answer }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "hasDomain",
  ["self", "domain"],
  sl.annotateFunction(function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_domainDictionary_1(_self), _domain);
  }, ["self", "domain"]),
  "{ :self :domain | includes(domainDictionary(self),domain) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategorized",
  ["self", "domain", "entry"],
  sl.annotateFunction(function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _domain_2(_self, _domain),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_each, _entry);
      }, ["each"]),
    );
  }, ["self", "domain", "entry"]),
  "{ :self :domain :entry | anySatisfy(domain(self,domain), { :each | includes(each,entry) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategorized",
  ["self", "entry"],
  sl.annotateFunction(function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _domains_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCategorized_3(_self, _each, _entry);
      }, ["each"]),
    );
  }, ["self", "entry"]),
  "{ :self :entry | anySatisfy(domains(self), { :each | isCategorized(self,each, entry) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategoryName",
  ["self", "domain", "category"],
  sl.annotateFunction(function (_self, _domain, _category) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _category";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_domain_2(_self, _domain), _category);
  }, ["self", "domain", "category"]),
  "{ :self :domain :category | includesIndex(domain(self,domain),category) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategoryName",
  ["self", "category"],
  sl.annotateFunction(function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _domains_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCategoryName_3(_self, _each, _category);
      }, ["each"]),
    );
  }, ["self", "category"]),
  "{ :self :category | anySatisfy(domains(self), { :each | isCategoryName(self,each, category) }) }",
);

sl.addMethodToExistingType(
  "CategoryDictionary",
  "CategoryDictionary",
  "multiplyCategorized",
  ["self", "domain"],
  sl.annotateFunction(function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _collect_2(
        _asList_1(_entries_1(_self)),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinusGreaterThanSign_2(
            _each,
            _categoriesOf_3(_self, _domain, _each),
          );
        }, ["each"]),
      ),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_size_1(_value_1(_each)), 1);
      }, ["each"]),
    );
  }, ["self", "domain"]),
  "{ :self :domain | select(collect(asList(entries(self)), { :each | ->(each, categoriesOf(self,domain, each)) }), { :each | >(size(value(each)), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "CategoryDictionary",
  "CategoryDictionary",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newCategoryDictionary_0(), _Record_0());
  }, []),
  "{ initializeSlots(newCategoryDictionary(),Record()) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "CategoryDictionary",
  "categoryDictionary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "categoryDictionary",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _CategoryDictionary_0();
      }, []),
    );
  }, ["self"]),
  "{ :self | cached(self, 'categoryDictionary', { CategoryDictionary() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "CategoryDictionary",
  "categoryNameParts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_self, "-");
  }, ["self"]),
  "{ :self | splitBy(self,'-') }",
);
