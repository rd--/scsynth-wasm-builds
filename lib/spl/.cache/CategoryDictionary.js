sl.addType(
  false,
  "CategoryDictionary",
  "CategoryDictionary",
  ["Object"],
  ["domainDictionary"],
);

sl.copyTraitToType(
  "Object",
  "CategoryDictionary",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoriesOf",
  ["self", "domain", "entry"],
  function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dictionary = _domain_2(_self, _domain);
    /* Statements */
    return _select_2(_indices_1(_dictionary), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_at_2(_dictionary, _each), _entry);
    });
  },
  "{ :self :domain :entry |\n\t\tlet dictionary = self.domain(domain);\n\t\tdictionary.indices.select { :each |\n\t\t\tdictionary[each].includes(entry)\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoriesOf",
  ["self", "entry"],
  function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _concatenation_1(_collect_2(_domains_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _categoriesOf_3(_self, _each, _entry);
    }));
  },
  "{ :self :entry |\n\t\tself.domains.collect { :each |\n\t\t\tself.categoriesOf(each, entry)\n\t\t}.concatenation\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorize",
  ["self", "domain", "category", "entry"],
  function (_self, _domain, _category, _entry) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _category, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _basicInclude_2(_category_3(_self, _domain, _category), _entry);
  },
  "{ :self :domain :category :entry |\n\t\tself.category(domain, category).basicInclude(entry)\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeAll",
  ["self", "domain", "category", "entries"],
  function (_self, _domain, _category, _entries) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _category, _entries";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _simpleCategory = _first_1(_splitBy_2(_category, "-"));
    /* Statements */
    return _basicIncludeAll_2(
      _category_3(_self, _domain, _simpleCategory),
      _entries,
    );
  },
  "{ :self :domain :category :entries |\n\t\tlet simpleCategory = category.splitBy('-').first;\n\t\tself.category(domain, simpleCategory).basicIncludeAll(entries)\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeDictionary",
  ["self", "domain", "aBlock:/1", "aDictionary"],
  function (_self, _domain, _aBlock_1, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _domain, _aBlock_1, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withIndexDo_2(_aDictionary, function (_value, _key) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _value, _key";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _categorizeAll_4(
        _self,
        _domain,
        _key,
        _collect_2(_value, _aBlock_1),
      );
    });
  },
  "{ :self :domain :aBlock:/1 :aDictionary |\n\t\taDictionary.withIndexDo { :value :key |\n\t\t\tself.categorizeAll(domain, key, value.collect(aBlock:/1))\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categorizeDictionary",
  ["self", "domain", "aDictionary"],
  function (_self, _domain, _aDictionary) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _aDictionary";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _categorizeDictionary_4(_self, _domain, _identity_1, _aDictionary);
  },
  "{ :self :domain :aDictionary |\n\t\tself.categorizeDictionary(domain, identity:/1, aDictionary)\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "category",
  ["self", "domain", "category"],
  function (_self, _domain, _category) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _category";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_domain_2(_self, _domain), _category, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Set_0();
    });
  },
  "{ :self :domain :category |\n\t\tself.domain(domain).atIfAbsentPut(category) {\n\t\t\tSet()\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoryOf",
  ["self", "domain", "entry"],
  function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _all = _categoriesOf_3(_self, _domain, _entry);
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_all), [
      _hyphenMinusGreaterThanSign_2(0, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _categorize_4(_self, _domain, "*Uncategorized*", _entry);
        return "*Uncategorized*";
      }),
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_all, 1);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("categoryOf: multiple categories: ", [
          _domain,
          _entry,
        ]),
      );
    });
  },
  "{ :self :domain :entry |\n\t\tlet all = self.categoriesOf(domain, entry);\n\t\tall.size.caseOfOtherwise([\n\t\t\t0 -> {\n\t\t\t\tself.categorize(domain, '*Uncategorized*', entry);\n\t\t\t\t'*Uncategorized*'\n\t\t\t},\n\t\t\t1 -> {\n\t\t\t\tall[1]\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('categoryOf: multiple categories: ' ++ [domain, entry])\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "categoryOf",
  ["self", "entry"],
  function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _categoriesOf_2(_self, _entry);
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_answer), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return "*Uncategorized*";
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_answer);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("categoryOf: multiple categories: ", _entry),
      );
    });
  },
  "{ :self :entry |\n\t\tlet answer = self.categoriesOf(entry);\n\t\tanswer.size.caseOfOtherwise([\n\t\t\t{ 0 } -> { '*Uncategorized*' },\n\t\t\t{ 1 } -> { answer.first }\n\t\t]) {\n\t\t\tself.error('categoryOf: multiple categories: ' ++ entry)\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "domain",
  ["self", "domain"],
  function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsentPut_3(_domainDictionary_1(_self), _domain, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Record_0();
    });
  },
  "{ :self :domain |\n\t\tself.domainDictionary.atIfAbsentPut(domain) {\n\t\t\tRecord()\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "domains",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _indices_1(_domainDictionary_1(_self));
  },
  "{ :self |\n\t\tself.domainDictionary.indices\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "entries",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Set_0();
    /* Statements */
    _do_2(_domainDictionary_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _valuesDo_2(_each, function (_item) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _item";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _basicInclude_2(_answer, _item);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Set();\n\t\tself.domainDictionary.do { :each |\n\t\t\teach.valuesDo { :item |\n\t\t\t\tanswer.basicInclude(item)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "hasDomain",
  ["self", "domain"],
  function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_domainDictionary_1(_self), _domain);
  },
  "{ :self :domain |\n\t\tself.domainDictionary.includes(domain)\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategorized",
  ["self", "domain", "entry"],
  function (_self, _domain, _entry) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_domain_2(_self, _domain), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _includes_2(_each, _entry);
    });
  },
  "{ :self :domain :entry |\n\t\tself.domain(domain).anySatisfy { :each |\n\t\t\teach.includes(entry)\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategorized",
  ["self", "entry"],
  function (_self, _entry) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _entry";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_domains_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCategorized_3(_self, _each, _entry);
    });
  },
  "{ :self :entry |\n\t\tself.domains.anySatisfy { :each |\n\t\t\tself.isCategorized(each, entry)\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategoryName",
  ["self", "domain", "category"],
  function (_self, _domain, _category) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _domain, _category";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_domain_2(_self, _domain), _category);
  },
  "{ :self :domain :category |\n\t\tself.domain(domain).includesIndex(category)\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "isCategoryName",
  ["self", "category"],
  function (_self, _category) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _category";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(_domains_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCategoryName_3(_self, _each, _category);
    });
  },
  "{ :self :category |\n\t\tself.domains.anySatisfy { :each |\n\t\t\tself.isCategoryName(each, category)\n\t\t}\n\t}",
);

sl.addMethod(
  "CategoryDictionary",
  "CategoryDictionary",
  "multiplyCategorized",
  ["self", "domain"],
  function (_self, _domain) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _domain";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _collect_2(_entries_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinusGreaterThanSign_2(
          _each,
          _categoriesOf_3(_self, _domain, _each),
        );
      }),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_size_1(_value_1(_each)), 1);
      },
    );
  },
  "{ :self :domain |\n\t\tself.entries.collect { :each |\n\t\t\teach -> self.categoriesOf(domain, each)\n\t\t}.select { :each |\n\t\t\teach.value.size > 1\n\t\t}\n\t}",
);

sl.addMethod(
  "Void",
  "CategoryDictionary",
  "CategoryDictionary",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newCategoryDictionary_0(), _Record_0());
  },
  "{\n\t\tnewCategoryDictionary().initializeSlots(Record())\n\t}",
);

sl.extendTraitWithMethod(
  "Cache",
  "CategoryDictionary",
  "categoryDictionary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "categoryDictionary", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _CategoryDictionary_0();
    });
  },
  "{ :self |\n\t\tself.cached('categoryDictionary') {\n\t\t\tCategoryDictionary()\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "CategoryDictionary",
  "categoryNameParts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _splitBy_2(_self, "-");
  },
  "{ :self |\n\t\tself.splitBy('-')\n\t}",
);
