/*  Requires: List String System  */

sl.addType(
  true,
  "Package",
  "Package",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Package",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveEquals_2(_self, _anObject);
  },
  "{ :self :anObject | primitiveEquals(self,anObject) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "lessThanSign",
  ["self", "aPackage"],
  function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _includes_2(_requires_1(_aPackage), _name_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_name_1(_self), _name_1(_aPackage));
      },
    );
  },
  "{ :self :aPackage | |(includes(requires(aPackage),name(self)), { <(name(self), name(aPackage)) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "lessThanSignEqualsSign",
  ["self", "aPackage"],
  function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _aPackage), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _lessThanSign_2(_self, _aPackage);
    });
  },
  "{ :self :aPackage | |(=(self, aPackage), { <(self, aPackage) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "addDependenciesTo",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotEmpty_2(_requires_1(_self), function (_packageNames) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _packageNames";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _packages = _collect_2(_packageNames, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _package_2(_system, _each);
      });
      /* Statements */
      _addAllFirst_2(_aSequence, _packages);
      return _do_2(_packages, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _addDependenciesTo_2(_each, _aSequence);
      });
    });
  },
  "{ :self :aSequence | ifNotEmpty(requires(self), { :packageNames | let packages = collect(packageNames, { :each | package(system,each) }); addAllFirst(aSequence,packages); do(packages, { :each | addDependenciesTo(each,aSequence) }) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "category",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.category;
  },
  "{ :self | <primitive: return _self.category;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "dependencies",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _addDependenciesTo_2(_self, _answer);
    return _copyWithoutIdenticalElements_1(_answer);
  },
  "{ :self | let answer = []; addDependenciesTo(self,answer); copyWithoutIdenticalElements(answer) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "require",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(_isLoaded_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _requirements = _collect_2(
        _reject_2(_dependencies_1(_self), _isLoaded_1),
        _name_1,
      );
      /* Statements */
      return _primitiveLoadPackageSequence_1(
        _plusSignPlusSign_2(_requirements, [_name_1(_self)]),
      );
    });
  },
  "{ :self | ifFalse(isLoaded(self), { let requirements = collect(reject(dependencies(self),isLoaded:/1),name:/1); primitiveLoadPackageSequence((++(requirements, [name(self)]))) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "isLoaded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isLoaded;
  },
  "{ :self | <primitive: return _self.isLoaded;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "load",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _loadPackage_2(_system, _self);
  },
  "{ :self | loadPackage(system,self) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  },
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["category", "isLoaded", "name", "requires", "text", "url"];
  },
  "{ :self | ['category', 'isLoaded', 'name', 'requires', 'text', 'url'] }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_category_1(_self), "-"),
      _name_1(_self),
    );
  },
  "{ :self | ++(++(category(self), '-'), name(self)) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "requires",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requires;
  },
  "{ :self | <primitive: return _self.requires;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text;
  },
  "{ :self | <primitive: return _self.text;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  },
  "{ :self | <primitive: return _self.url;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "Package",
  "derivePackageUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2(
      [_at_2(_self, "Category"), "/", _at_2(_self, "Name"), ".sl"],
      "",
    );
  },
  "{ :self | join([at(self, 'Category'), '/', at(self, 'Name'), '.sl'],'') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Dictionary",
  "Package",
  "Package",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Package_5(
      _atIfAbsentPut_3(_self, "Category", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _categoryOf_3(
          _categoryDictionary_1(_system),
          "type",
          _at_2(_self, "Name"),
        );
      }),
      _at_2(_self, "Name"),
      _atIfAbsent_3(_self, "Requires", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }),
      _atIfAbsentPut_3(_self, "Url", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _derivePackageUrl_1(_self);
      }),
      "",
    );
  },
  "{ :self | Package(atIfAbsentPut(self, 'Category', { categoryOf(categoryDictionary(system),'type', at(self, 'Name')) }), at(self, 'Name'), atIfAbsent(self, 'Requires', { [] }), atIfAbsentPut(self, 'Url', { derivePackageUrl(self) }), '') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "isQualifiedPackageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubstring_2(_self, "-");
  },
  "{ :self | includesSubstring(self,'-') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "Package",
  ["self", "name", "requires", "url", "text"],
  function (_self, _name, _requires, _url, _text) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _name, _requires, _url, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return new sl.Package(_self, _name, _requires, _url, _text);
  },
  "{ :self :name :requires :url :text | <primitive: return new sl.Package(_self, _name, _requires, _url, _text);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "parsePackageHeader",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fields = _splitBy_2(_firstPliComment_1(_self), ",");
    /* Statements */
    return _asRecord_1(_gather_2(_fields, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL249 = _assertIsOfSize_2(
        _splitBy_2(_withBlanksTrimmed_1(_each), ": "),
        2,
      );
      let _key = _at_2(__SPL249, 1);
      let _value = _at_2(__SPL249, 2);
      /* Statements */
      return _caseOfOtherwise_3(_key, [
        _hyphenMinusGreaterThanSign_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Package";
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL250 = _assertIsOfSize_2(
            _parseQualifiedPackageName_1(_withBlanksTrimmed_1(_value)),
            2,
          );
          let _category = _at_2(__SPL250, 1);
          let _name = _at_2(__SPL250, 2);
          /* Statements */
          return [
            _hyphenMinusGreaterThanSign_2("Category", _category),
            _hyphenMinusGreaterThanSign_2("Name", _name),
          ];
        }),
        _hyphenMinusGreaterThanSign_2(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "Requires";
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [
            _hyphenMinusGreaterThanSign_2(
              _key,
              _words_1(_withBlanksTrimmed_1(_value)),
            ),
          ];
        }),
      ], function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("parsePackageHeader: unknown field: ", _key),
        );
      });
    }));
  },
  "{ :self | let fields = splitBy(firstPliComment(self),','); asRecord(gather(fields, { :each | let __SPL249 = assertIsOfSize(splitBy(withBlanksTrimmed(each),': '), 2); let key = at(__SPL249, 1); let value = at(__SPL249, 2); caseOfOtherwise(key, [->({ 'Package' }, { let __SPL250 = assertIsOfSize(parseQualifiedPackageName(withBlanksTrimmed(value)), 2); let category = at(__SPL250, 1); let name = at(__SPL250, 2); [->('Category', category), ->('Name', name)] }), ->({ 'Requires' }, { [->(key, words(withBlanksTrimmed(value)))] })], { error(self,++('parsePackageHeader: unknown field: ', key)) }) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "parseQualifiedPackageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL251 = _assertIsOfSize_2(_splitBy_2(_self, "-"), 2);
    let _category = _at_2(__SPL251, 1);
    let _name = _at_2(__SPL251, 2);
    /* Statements */
    return [_category, _name];
  },
  "{ :self | let __SPL251 = assertIsOfSize(splitBy(self,'-'), 2); let category = at(__SPL251, 1); let name = at(__SPL251, 2); [category, name] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Package",
  "loadPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _ifTrue_2(_isLoaded_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("loadPackages: package loaded: ", _name_1(_each)),
        );
      });
    });
    return _primitiveLoadPackageSequence_1(_collect_2(_self, _name_1));
  },
  "{ :self | do(self, { :each | ifTrue(isLoaded(each), { error(self,++('loadPackages: package loaded: ', name(each))) }) }); primitiveLoadPackageSequence(collect(self,name:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "availablePackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _difference_2(_indexedPackages_1(_self), _loadedPackages_1(_self));
  },
  "{ :self | difference(indexedPackages(self),loadedPackages(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "indexedPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_packageDictionary_1(_self));
  },
  "{ :self | values(packageDictionary(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "includesPackage",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_packageDictionary_1(_self), _name);
  },
  "{ :self :name | includesIndex(packageDictionary(self),name) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "loadedPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_values_1(_packageDictionary_1(_self)), _isLoaded_1);
  },
  "{ :self | select(values(packageDictionary(self)),isLoaded:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "loadPackage",
  ["self", "package"],
  function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      throw new Error(errorMessage);
    } /* Statements */
    return _loadLocalPackageSequence_1([_qualifiedName_1(_package)]);
  },
  "{ :self :package | loadLocalPackageSequence([qualifiedName(package)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "package",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isQualifiedPackageName_1(_name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL252 = _assertIsOfSize_2(_parseQualifiedPackageName_1(_name), 2);
      let _categoryName = _at_2(__SPL252, 1);
      let _packageName = _at_2(__SPL252, 2);
      let _package = _at_2(_packageDictionary_1(_self), _packageName);
      /* Statements */
      return _if_3(
        _ampersand_2(
          _equalsSign_2(_categoryName, _category_1(_package)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _includesPackage_2(_self, _packageName);
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _package;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(
            _self,
            _plusSignPlusSign_2(
              "package: category name mismatch or package not registered: ",
              _name,
            ),
          );
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_includesPackage_2(_self, _name), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_packageDictionary_1(_self), _name);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("package: package not registered: ", _name),
        );
      });
    });
  },
  "{ :self :name | if(isQualifiedPackageName(name), { let __SPL252 = assertIsOfSize(parseQualifiedPackageName(name), 2); let categoryName = at(__SPL252, 1); let packageName = at(__SPL252, 2); let package = at(packageDictionary(self), packageName); if((&(=(categoryName, category(package)), { includesPackage(self,packageName) })), { package }, { error(self,++('package: category name mismatch or package not registered: ', name)) }) }, { if(includesPackage(self,name), { at(packageDictionary(self), name) }, { error(self,++('package: package not registered: ', name)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "registerPackage",
  ["self", "package"],
  function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_packageDictionary_1(_self), _name_1(_package)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2(
            "registerPackage: package exists: ",
            _name_1(_package),
          ),
        );
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _packageDictionary_1(_self),
          _name_1(_package),
          _package,
        );
      },
    );
  },
  "{ :self :package | if(includesIndex(packageDictionary(self),name(package)), { error(self,++('registerPackage: package exists: ', name(package))) }, { atPut(packageDictionary(self), name(package), package) }) }",
);
