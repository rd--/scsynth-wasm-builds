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
  "{ :self :domain :entry |\n\t\tlet dictionary = self.domain(domain);\n\t\tdictionary.indices.select { :each |\n\t\t\tdictionary[each].includes(entry)\n\t\t}\n\t}",
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
  "{ :self :entry |\n\t\tself.domains.collectCatenate { :each |\n\t\t\tself.categoriesOf(each, entry)\n\t\t}\n\t}",
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
  "{ :self :domain :category :entry |\n\t\tself.category(domain, category).uncheckedInclude(entry)\n\t}",
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
  "{ :self :domain :category :entries |\n\t\tlet simpleCategory = category.splitBy('-').first;\n\t\tself.category(domain, simpleCategory).uncheckedIncludeAll(entries)\n\t}",
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
  "{ :self :domain :aBlock:/1 :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.categorizeAll(domain, key, value.collect(aBlock:/1))\n\t\t}\n\t}",
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
  "{ :self :domain :aDictionary |\n\t\tself.categorizeDictionary(domain, identity:/1, aDictionary)\n\t}",
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
  "{ :self :domain :category |\n\t\tself.domain(domain).atIfAbsentPut(category) {\n\t\t\tIdentitySet()\n\t\t}\n\t}",
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
  "{ :self :domain :entry |\n\t\tlet all = self.categoriesOf(domain, entry);\n\t\tall.size.caseOf([\n\t\t\t0 -> {\n\t\t\t\tself.categorize(domain, '*Uncategorized*', entry);\n\t\t\t\t'*Uncategorized*'\n\t\t\t},\n\t\t\t1 -> {\n\t\t\t\tall[1]\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('categoryOf: multiple categories: ' ++ [domain, entry])\n\t\t}\n\t}",
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
  "{ :self :entry |\n\t\tlet answer = self.categoriesOf(entry);\n\t\tanswer.size.caseOf([\n\t\t\t0 -> { '*Uncategorized*' },\n\t\t\t1 -> { answer.first }\n\t\t]) {\n\t\t\tself.error('categoryOf: multiple categories: ' ++ entry)\n\t\t}\n\t}",
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
  "{ :self :domain |\n\t\tself.domainDictionary.atIfAbsentPut(domain) {\n\t\t\tRecord()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.domainDictionary.indices\n\t}",
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
  "{ :self |\n\t\tlet answer = IdentitySet();\n\t\tself.domainDictionary.do { :each |\n\t\t\teach.valuesDo { :item |\n\t\t\t\tanswer.uncheckedInclude(item)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self :domain |\n\t\tself.domainDictionary.includes(domain)\n\t}",
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
  "{ :self :domain :entry |\n\t\tself.domain(domain).anySatisfy { :each |\n\t\t\teach.includes(entry)\n\t\t}\n\t}",
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
  "{ :self :entry |\n\t\tself.domains.anySatisfy { :each |\n\t\t\tself.isCategorized(each, entry)\n\t\t}\n\t}",
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
  "{ :self :domain :category |\n\t\tself.domain(domain).includesIndex(category)\n\t}",
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
  "{ :self :category |\n\t\tself.domains.anySatisfy { :each |\n\t\t\tself.isCategoryName(each, category)\n\t\t}\n\t}",
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
  "{ :self :domain |\n\t\tself.entries.asList.collect { :each |\n\t\t\teach -> self.categoriesOf(domain, each)\n\t\t}.select { :each |\n\t\t\teach.value.size > 1\n\t\t}\n\t}",
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
  "{\n\t\tnewCategoryDictionary().initializeSlots(Record())\n\t}",
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
  "{ :self |\n\t\tself.cached('categoryDictionary') {\n\t\t\tCategoryDictionary()\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.splitBy('-')\n\t}",
);
