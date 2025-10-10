/*  Requires: List String System  */

sl.addType(
  true,
  "Package",
  "Package",
  ["Object", "Equatable", "Comparable"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "Package",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Package",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Package",
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
  "{ :self :aSequence |\n\t\tself.requires.ifNotEmpty { :packageNames |\n\t\t\tlet packages = packageNames.collect { :each |\n\t\t\t\tsystem.package(each)\n\t\t\t};\n\t\t\taSequence.addAllFirst(packages);\n\t\t\tpackages.do { :each |\n\t\t\t\teach.addDependenciesTo(aSequence)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.category;>\n\t}",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "compare",
  ["self", "aPackage"],
  sl.annotateFunction(function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includes_2(_requires_1(_aPackage), _name_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return -1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _compare_2(_name_1(_self), _name_1(_aPackage));
      }, []),
    );
  }, ["self", "aPackage"]),
  "{ :self :aPackage |\n\t\taPackage.requires.includes(self.name).if {\n\t\t\t-1\n\t\t} {\n\t\t\tself.name.compare(aPackage.name)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet answer = [];\n\t\tself.addDependenciesTo(answer);\n\t\tanswer.copyWithoutIdenticalElements\n\t}",
);

sl.addMethodToExistingType(
  "Package",
  "Package",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSignEqualsSign_2(_self, _anObject);
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tself == anObject\n\t}",
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
  "{ :self |\n\t\tself.isLoaded.ifFalse {\n\t\t\tlet requirements = self.dependencies.reject(isLoaded:/1).collect(name:/1);\n\t\t\t(requirements ++ [self.name]).primitiveLoadPackageSequence\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.isLoaded;>\n\t}",
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
  "{ :self |\n\t\tsystem.loadPackage(self)\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
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
  "{ :self |\n\t\t['category', 'isLoaded', 'name', 'requires', 'text', 'url']\n\t}",
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
  "{ :self |\n\t\tself.category ++ '-' ++ self.name\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.requires;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.text;>\n\t}",
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
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\tself['Category'],\n\t\t\t'/',\n\t\t\tself['Name'],\n\t\t\t'.sl'\n\t\t].stringCatenate\n\t}",
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
  "{ :self |\n\t\tPackage(\n\t\t\tself.atIfAbsentPut('Category') {\n\t\t\t\tsystem.categoryDictionary.categoryOf('type', self['Name'])\n\t\t\t},\n\t\t\tself['Name'],\n\t\t\tself.atIfAbsent('Requires') {\n\t\t\t\t[]\n\t\t\t},\n\t\t\tself.atIfAbsentPut('Url') {\n\t\t\t\tself.derivePackageUrl\n\t\t\t},\n\t\t\t''\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.includesSubstring('-')\n\t}",
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
  "{ :self :name :requires :url :text |\n\t\t<primitive: return new sl.Package(_self, _name, _requires, _url, _text);>\n\t}",
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
          let __SplVar1 = _assertIsOfSize_2(
            _splitBy_2(_withBlanksTrimmed_1(_each), ": "),
            2,
          );
          let _key = _at_2(__SplVar1, 1);
          let _value = _at_2(__SplVar1, 2);
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
                  let __SplVar2 = _assertIsOfSize_2(
                    _parseQualifiedPackageName_1(_withBlanksTrimmed_1(_value)),
                    2,
                  );
                  let _category = _at_2(__SplVar2, 1);
                  let _name = _at_2(__SplVar2, 2);
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
  "{ :self |\n\t\tlet fields = self.firstPliComment.splitBy(',');\n\t\tfields.collectCatenate { :each |\n\t\t\tlet [key, value] = each.withBlanksTrimmed.splitBy(': ');\n\t\t\tkey.caseOf([\n\t\t\t\t'Package' -> {\n\t\t\t\t\tlet [category, name] = value.withBlanksTrimmed.parseQualifiedPackageName;\n\t\t\t\t\t['Category' -> category, 'Name' -> name]\n\t\t\t\t},\n\t\t\t\t'Requires' -> {\n\t\t\t\t\t[key -> value.withBlanksTrimmed.words]\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\tself.error('parsePackageHeader: unknown field: ' ++ key)\n\t\t\t}\n\t\t}.asRecord\n\t}",
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
    let __SplVar3 = _assertIsOfSize_2(_splitBy_2(_self, "-"), 2);
    let _category = _at_2(__SplVar3, 1);
    let _name = _at_2(__SplVar3, 2);
    /* Statements */
    return [_category, _name];
  }, ["self"]),
  "{ :self |\n\t\tlet [category, name] = self.splitBy('-');\n\t\t[category, name]\n\t}",
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
  "{ :self |\n\t\tself.do { :each |\n\t\t\teach.isLoaded.ifTrue {\n\t\t\t\tself.error('loadPackages: package loaded: ' ++ each.name)\n\t\t\t}\n\t\t};\n\t\tself.collect(name:/1).primitiveLoadPackageSequence\n\t}",
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
  "{ :self |\n\t\tself.indexedPackages.difference(self.loadedPackages)\n\t}",
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
  "{ :self |\n\t\tself.packageDictionary.values\n\t}",
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
  "{ :self :name |\n\t\tself.packageDictionary.includesIndex(name)\n\t}",
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
  "{ :self |\n\t\tself.packageDictionary.values.select(isLoaded:/1)\n\t}",
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
  "{ :self :package |\n\t\t[\n\t\t\tpackage.qualifiedName\n\t\t].loadLocalPackageSequence\n\t}",
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
        let __SplVar4 = _assertIsOfSize_2(
          _parseQualifiedPackageName_1(_name),
          2,
        );
        let _categoryName = _at_2(__SplVar4, 1);
        let _packageName = _at_2(__SplVar4, 2);
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
  "{ :self :name |\n\t\tname.isQualifiedPackageName.if {\n\t\t\tlet [categoryName, packageName] = name.parseQualifiedPackageName;\n\t\t\tlet package = self.packageDictionary[packageName];\n\t\t\t(categoryName = package.category & {\n\t\t\t\tself.includesPackage(packageName)\n\t\t\t}).if {\n\t\t\t\tpackage\n\t\t\t} {\n\t\t\t\tself.error('package: category name mismatch or package not registered: ' ++ name)\n\t\t\t}\n\t\t} {\n\t\t\tself.includesPackage(name).if {\n\t\t\t\tself.packageDictionary[name]\n\t\t\t} {\n\t\t\t\tself.error('package: package not registered: ' ++ name)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :package |\n\t\tself.packageDictionary.includesIndex(package.name).if {\n\t\t\tself.error('registerPackage: package exists: ' ++ package.name)\n\t\t} {\n\t\t\tself.packageDictionary[package.name] := package\n\t\t}\n\t}",
);
