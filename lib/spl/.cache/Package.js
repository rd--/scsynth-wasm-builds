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
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _primitiveEquals_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | primitiveEquals(self,anObject) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "lessThanSign",
  ["self", "aPackage"],
  sl.annotateFunction(function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _includes_2(_requires_1(_aPackage), _name_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_name_1(_self), _name_1(_aPackage));
      }, []),
    );
  }, ["self", "aPackage"]),
  "{ :self :aPackage | |(includes(requires(aPackage),name(self)), { <(name(self), name(aPackage)) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "lessThanSignEqualsSign",
  ["self", "aPackage"],
  sl.annotateFunction(function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, _aPackage),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, _aPackage);
      }, []),
    );
  }, ["self", "aPackage"]),
  "{ :self :aPackage | |(=(self, aPackage), { <(self, aPackage) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "addDependenciesTo",
  ["self", "aSequence"],
  sl.annotateFunction(function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNotEmpty_2(
      _requires_1(_self),
      sl.annotateFunction(function (_packageNames) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _packageNames";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _packages = _collect_2(
          _packageNames,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _package_2(_system, _each);
          }, ["each"]),
        );
        /* Statements */
        _addAllFirst_2(_aSequence, _packages);
        return _do_2(
          _packages,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _addDependenciesTo_2(_each, _aSequence);
          }, ["each"]),
        );
      }, ["packageNames"]),
    );
  }, ["self", "aSequence"]),
  "{ :self :aSequence | ifNotEmpty(requires(self), { :packageNames | let packages = collect(packageNames, { :each | package(system,each) }); addAllFirst(aSequence,packages); do(packages, { :each | addDependenciesTo(each,aSequence) }) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "category",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.category;
  }, ["self"]),
  "{ :self | <primitive: return _self.category;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "dependencies",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _addDependenciesTo_2(_self, _answer);
    return _copyWithoutIdenticalElements_1(_answer);
  }, ["self"]),
  "{ :self | let answer = []; addDependenciesTo(self,answer); copyWithoutIdenticalElements(answer) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "require",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _isLoaded_1(_self),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self"]),
  "{ :self | ifFalse(isLoaded(self), { let requirements = collect(reject(dependencies(self),isLoaded:/1),name:/1); primitiveLoadPackageSequence((++(requirements, [name(self)]))) }) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "isLoaded",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.isLoaded;
  }, ["self"]),
  "{ :self | <primitive: return _self.isLoaded;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "load",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _loadPackage_2(_system, _self);
  }, ["self"]),
  "{ :self | loadPackage(system,self) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "name",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.name;
  }, ["self"]),
  "{ :self | <primitive: return _self.name;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "pseudoSlotNameList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return ["category", "isLoaded", "name", "requires", "text", "url"];
  }, ["self"]),
  "{ :self | ['category', 'isLoaded', 'name', 'requires', 'text', 'url'] }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "qualifiedName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_category_1(_self), "-"),
      _name_1(_self),
    );
  }, ["self"]),
  "{ :self | ++(++(category(self), '-'), name(self)) }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "requires",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.requires;
  }, ["self"]),
  "{ :self | <primitive: return _self.requires;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "text",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.text;
  }, ["self"]),
  "{ :self | <primitive: return _self.text;>\n }",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "url",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.url;
  }, ["self"]),
  "{ :self | <primitive: return _self.url;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Package",
  "derivePackageUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringCatenate_1([
      _at_2(_self, "Category"),
      "/",
      _at_2(_self, "Name"),
      ".sl",
    ]);
  }, ["self"]),
  "{ :self | stringCatenate([at(self, 'Category'), '/', at(self, 'Name'), '.sl']) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Package",
  "Package",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Package_5(
      _atIfAbsentPut_3(
        _self,
        "Category",
        sl.annotateFunction(function () {
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
        }, []),
      ),
      _at_2(_self, "Name"),
      _atIfAbsent_3(
        _self,
        "Requires",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return [];
        }, []),
      ),
      _atIfAbsentPut_3(
        _self,
        "Url",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _derivePackageUrl_1(_self);
        }, []),
      ),
      "",
    );
  }, ["self"]),
  "{ :self | Package(atIfAbsentPut(self, 'Category', { categoryOf(categoryDictionary(system),'type', at(self, 'Name')) }), at(self, 'Name'), atIfAbsent(self, 'Requires', { [] }), atIfAbsentPut(self, 'Url', { derivePackageUrl(self) }), '') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "isQualifiedPackageName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesSubstring_2(_self, "-");
  }, ["self"]),
  "{ :self | includesSubstring(self,'-') }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "Package",
  ["self", "name", "requires", "url", "text"],
  sl.annotateFunction(function (_self, _name, _requires, _url, _text) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _name, _requires, _url, _text";
      throw new Error(errorMessage);
    } /* Primitive */
    return new sl.Package(_self, _name, _requires, _url, _text);
  }, ["self", "name", "requires", "url", "text"]),
  "{ :self :name :requires :url :text | <primitive: return new sl.Package(_self, _name, _requires, _url, _text);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "parsePackageHeader",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _fields = _splitBy_2(_firstPliComment_1(_self), ",");
    /* Statements */
    return _asRecord_1(
      _collectCatenate_2(
        _fields,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SPL48 = _assertIsOfSize_2(
            _splitBy_2(_withBlanksTrimmed_1(_each), ": "),
            2,
          );
          let _key = _at_2(__SPL48, 1);
          let _value = _at_2(__SPL48, 2);
          /* Statements */
          return _caseOf_3(
            _key,
            [
              _hyphenMinusGreaterThanSign_2(
                "Package",
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Temporaries */
                  let __SPL49 = _assertIsOfSize_2(
                    _parseQualifiedPackageName_1(_withBlanksTrimmed_1(_value)),
                    2,
                  );
                  let _category = _at_2(__SPL49, 1);
                  let _name = _at_2(__SPL49, 2);
                  /* Statements */
                  return [
                    _hyphenMinusGreaterThanSign_2("Category", _category),
                    _hyphenMinusGreaterThanSign_2("Name", _name),
                  ];
                }, []),
              ),
              _hyphenMinusGreaterThanSign_2(
                "Requires",
                sl.annotateFunction(function () {
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
                _plusSignPlusSign_2(
                  "parsePackageHeader: unknown field: ",
                  _key,
                ),
              );
            }, []),
          );
        }, ["each"]),
      ),
    );
  }, ["self"]),
  "{ :self | let fields = splitBy(firstPliComment(self),','); asRecord(collectCatenate(fields, { :each | let __SPL48 = assertIsOfSize(splitBy(withBlanksTrimmed(each),': '), 2); let key = at(__SPL48, 1); let value = at(__SPL48, 2); caseOf(key, [->('Package', { let __SPL49 = assertIsOfSize(parseQualifiedPackageName(withBlanksTrimmed(value)), 2); let category = at(__SPL49, 1); let name = at(__SPL49, 2); [->('Category', category), ->('Name', name)] }), ->('Requires', { [->(key, words(withBlanksTrimmed(value)))] })], { error(self,++('parsePackageHeader: unknown field: ', key)) }) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Package",
  "parseQualifiedPackageName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL50 = _assertIsOfSize_2(_splitBy_2(_self, "-"), 2);
    let _category = _at_2(__SPL50, 1);
    let _name = _at_2(__SPL50, 2);
    /* Statements */
    return [_category, _name];
  }, ["self"]),
  "{ :self | let __SPL50 = assertIsOfSize(splitBy(self,'-'), 2); let category = at(__SPL50, 1); let name = at(__SPL50, 2); [category, name] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Package",
  "loadPackages",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _isLoaded_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2(
                "loadPackages: package loaded: ",
                _name_1(_each),
              ),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _primitiveLoadPackageSequence_1(_collect_2(_self, _name_1));
  }, ["self"]),
  "{ :self | do(self, { :each | ifTrue(isLoaded(each), { error(self,++('loadPackages: package loaded: ', name(each))) }) }); primitiveLoadPackageSequence(collect(self,name:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "availablePackages",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _difference_2(_indexedPackages_1(_self), _loadedPackages_1(_self));
  }, ["self"]),
  "{ :self | difference(indexedPackages(self),loadedPackages(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "indexedPackages",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _values_1(_packageDictionary_1(_self));
  }, ["self"]),
  "{ :self | values(packageDictionary(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "includesPackage",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesIndex_2(_packageDictionary_1(_self), _name);
  }, ["self", "name"]),
  "{ :self :name | includesIndex(packageDictionary(self),name) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "loadedPackages",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_values_1(_packageDictionary_1(_self)), _isLoaded_1);
  }, ["self"]),
  "{ :self | select(values(packageDictionary(self)),isLoaded:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "loadPackage",
  ["self", "package"],
  sl.annotateFunction(function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      throw new Error(errorMessage);
    } /* Statements */
    return _loadLocalPackageSequence_1([_qualifiedName_1(_package)]);
  }, ["self", "package"]),
  "{ :self :package | loadLocalPackageSequence([qualifiedName(package)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "package",
  ["self", "name"],
  sl.annotateFunction(function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQualifiedPackageName_1(_name),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL51 = _assertIsOfSize_2(_parseQualifiedPackageName_1(_name), 2);
        let _categoryName = _at_2(__SPL51, 1);
        let _packageName = _at_2(__SPL51, 2);
        let _package = _at_2(_packageDictionary_1(_self), _packageName);
        /* Statements */
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_categoryName, _category_1(_package)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _includesPackage_2(_self, _packageName);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _package;
          }, []),
          sl.annotateFunction(function () {
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
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesPackage_2(_self, _name),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _at_2(_packageDictionary_1(_self), _name);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              _self,
              _plusSignPlusSign_2("package: package not registered: ", _name),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "name"]),
  "{ :self :name | if(isQualifiedPackageName(name), { let __SPL51 = assertIsOfSize(parseQualifiedPackageName(name), 2); let categoryName = at(__SPL51, 1); let packageName = at(__SPL51, 2); let package = at(packageDictionary(self), packageName); if((&(=(categoryName, category(package)), { includesPackage(self,packageName) })), { package }, { error(self,++('package: category name mismatch or package not registered: ', name)) }) }, { if(includesPackage(self,name), { at(packageDictionary(self), name) }, { error(self,++('package: package not registered: ', name)) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Package",
  "registerPackage",
  ["self", "package"],
  sl.annotateFunction(function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_packageDictionary_1(_self), _name_1(_package)),
      sl.annotateFunction(function () {
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
      }, []),
      sl.annotateFunction(function () {
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
      }, []),
    );
  }, ["self", "package"]),
  "{ :self :package | if(includesIndex(packageDictionary(self),name(package)), { error(self,++('registerPackage: package exists: ', name(package))) }, { atPut(packageDictionary(self), name(package), package) }) }",
);
