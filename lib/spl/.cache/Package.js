/* {- Requires: List String System -} */

sl.addType(
  true,
  "Package",
  "Package",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Package",
);

sl.addMethod(
  "Package",
  "Package",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _primitiveEquals_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.primitiveEquals(anObject)\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "lessThanSign",
  ["self", "aPackage"],
  function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(
      _includes_2(_requires_1(_aPackage), _name_1(_self)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSign_2(_name_1(_self), _name_1(_aPackage));
      },
    );
  },
  "{ :self :aPackage |\n\t\taPackage.requires.includes(self.name) | {\n\t\t\tself.name < aPackage.name\n\t\t}\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "lessThanSignEqualsSign",
  ["self", "aPackage"],
  function (_self, _aPackage) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPackage";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _verticalLine_2(_equalsSign_2(_self, _aPackage), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_self, _aPackage);
    });
  },
  "{ :self :aPackage |\n\t\tself = aPackage | {\n\t\t\tself < aPackage\n\t\t}\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "addDependenciesTo",
  ["self", "aSequence"],
  function (_self, _aSequence) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSequence";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifNotEmpty_2(_requires_1(_self), function (_packageNames) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _packageNames";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _packages = _collect_2(_packageNames, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _package_2(_system, _each);
      });
      /* Statements */
      _addAllFirst_2(_aSequence, _packages);
      return _do_2(_packages, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _addDependenciesTo_2(_each, _aSequence);
      });
    });
  },
  "{ :self :aSequence |\n\t\tself.requires.ifNotEmpty { :packageNames |\n\t\t\tlet packages = packageNames.collect { :each |\n\t\t\t\tsystem.package(each)\n\t\t\t};\n\t\t\taSequence.addAllFirst(packages);\n\t\t\tpackages.do { :each |\n\t\t\t\teach.addDependenciesTo(aSequence)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "category",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.category;
  },
  "{ :self |\n\t\t<primitive: return _self.category;>\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "dependencies",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    /* Statements */
    _addDependenciesTo_2(_self, _answer);
    return _copyWithoutIdenticalElements_1(_answer);
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.addDependenciesTo(answer);\n\t\tanswer.copyWithoutIdenticalElements\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "require",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ifFalse_2(_isLoaded_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
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
  "{ :self |\n\t\tself.isLoaded.ifFalse {\n\t\t\tlet requirements = self.dependencies.reject(isLoaded:/1).collect(name:/1);\n\t\t\t(requirements ++ [self.name]).primitiveLoadPackageSequence\n\t\t}\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "isLoaded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.isLoaded;
  },
  "{ :self |\n\t\t<primitive: return _self.isLoaded;>\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "load",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _loadPackage_2(_system, _self);
  },
  "{ :self |\n\t\tsystem.loadPackage(self)\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "name",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.name;
  },
  "{ :self |\n\t\t<primitive: return _self.name;>\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "pseudoSlotNameList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return ["category", "name", "requires", "url", "text", "isLoaded"];
  },
  "{ :self |\n\t\t['category', 'name', 'requires', 'url', 'text', 'isLoaded']\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "qualifiedName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(
      _plusSignPlusSign_2(_category_1(_self), "-"),
      _name_1(_self),
    );
  },
  "{ :self |\n\t\tself.category ++ '-' ++ self.name\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "requires",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.requires;
  },
  "{ :self |\n\t\t<primitive: return _self.requires;>\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.text;
  },
  "{ :self |\n\t\t<primitive: return _self.text;>\n\t}",
);

sl.addMethod(
  "Package",
  "Package",
  "url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.url;
  },
  "{ :self |\n\t\t<primitive: return _self.url;>\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Package",
  "derivePackageUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      _at_2(_self, "Category"),
      "/",
      _at_2(_self, "Name"),
      ".sl",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\tself::Category,\n\t\t\t'/',\n\t\t\tself::Name,\n\t\t\t'.sl'\n\t\t].join\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Package",
  "Package",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Package_5(
      _atIfAbsentPut_3(_self, "Category", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return [];
      }),
      _atIfAbsentPut_3(_self, "Url", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _derivePackageUrl_1(_self);
      }),
      "",
    );
  },
  "{ :self |\n\t\tPackage(\n\t\t\tself.atIfAbsentPut('Category') {\n\t\t\t\tsystem.categoryDictionary.categoryOf('type', self::Name)\n\t\t\t},\n\t\t\tself::Name,\n\t\t\tself.atIfAbsent('Requires') {\n\t\t\t\t[]\n\t\t\t},\n\t\t\tself.atIfAbsentPut('Url') {\n\t\t\t\tself.derivePackageUrl\n\t\t\t},\n\t\t\t''\n\t\t)\n\t}",
);

sl.addMethod(
  "String",
  "Package",
  "isQualifiedPackageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includesSubstring_2(_self, "-");
  },
  "{ :self |\n\t\tself.includesSubstring('-')\n\t}",
);

sl.addMethod(
  "String",
  "Package",
  "Package",
  ["self", "name", "requires", "url", "text"],
  function (_self, _name, _requires, _url, _text) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _name, _requires, _url, _text";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new sl.Package(_self, _name, _requires, _url, _text);
  },
  "{ :self :name :requires :url :text |\n\t\t<primitive: return new sl.Package(_self, _name, _requires, _url, _text);>\n\t}",
);

sl.addMethod(
  "String",
  "Package",
  "parsePackageHeader",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _fields = _splitBy_2(_firstHsComment_1(_self), ",");
    /* Statements */
    return _asRecord_1(_concatenation_1(_collect_2(_fields, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym128 = _assertIsOfSize_2(
          _splitBy_2(_withBlanksTrimmed_1(_each), ": "),
          2,
        ),
        _key = _at_2(__genSym128, 1),
        _value = _at_2(__genSym128, 2);
      /* Statements */
      return _caseOfOtherwise_3(_key, [
        _hyphenMinusGreaterThanSign_2("Package", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Temporaries */
          let __genSym129 = _assertIsOfSize_2(
              _parseQualifiedPackageName_1(_withBlanksTrimmed_1(_value)),
              2,
            ),
            _category = _at_2(__genSym129, 1),
            _name = _at_2(__genSym129, 2);
          /* Statements */
          return [
            _hyphenMinusGreaterThanSign_2("Category", _category),
            _hyphenMinusGreaterThanSign_2("Name", _name),
          ];
        }),
        _hyphenMinusGreaterThanSign_2("Requires", function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
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
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("parsePackageHeader: unknown field: ", _key),
        );
      });
    })));
  },
  "{ :self |\n\t\tlet fields = self.firstHsComment.splitBy(',');\n\t\tfields.collect { :each |\n\t\t\tlet [key, value] = each.withBlanksTrimmed.splitBy(': ');\n\t\t\tkey.caseOfOtherwise([\n\t\t\t\t'Package' -> {\n\t\t\t\t\tlet [category, name] = value.withBlanksTrimmed.parseQualifiedPackageName;\n\t\t\t\t\t['Category' -> category, 'Name' -> name]\n\t\t\t\t},\n\t\t\t\t'Requires' -> {\n\t\t\t\t\t[key -> value.withBlanksTrimmed.words]\n\t\t\t\t}\n\t\t\t]) {\n\t\t\t\tself.error('parsePackageHeader: unknown field: ' ++ key)\n\t\t\t}\n\t\t}.concatenation.asRecord\n\t}",
);

sl.addMethod(
  "String",
  "Package",
  "parseQualifiedPackageName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym130 = _assertIsOfSize_2(_splitBy_2(_self, "-"), 2),
      _category = _at_2(__genSym130, 1),
      _name = _at_2(__genSym130, 2);
    /* Statements */
    return [_category, _name];
  },
  "{ :self |\n\t\tlet [category, name] = self.splitBy('-');\n\t\t[category, name]\n\t}",
);

sl.addMethod(
  "List",
  "Package",
  "loadPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ifTrue_2(_isLoaded_1(_each), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("loadPackages: package loaded: ", _name_1(_each)),
        );
      });
    });
    return _primitiveLoadPackageSequence_1(_collect_2(_self, _name_1));
  },
  "{ :self |\n\t\tself.do { :each |\n\t\t\teach.isLoaded.ifTrue {\n\t\t\t\tself.error('loadPackages: package loaded: ' ++ each.name)\n\t\t\t}\n\t\t};\n\t\tself.collect(name:/1).primitiveLoadPackageSequence\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "availablePackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _difference_2(_indexedPackages_1(_self), _loadedPackages_1(_self));
  },
  "{ :self |\n\t\tself.indexedPackages.difference(self.loadedPackages)\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "indexedPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _values_1(_packageDictionary_1(_self));
  },
  "{ :self |\n\t\tself.packageDictionary.values\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "includesPackage",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _includesIndex_2(_packageDictionary_1(_self), _name);
  },
  "{ :self :name |\n\t\tself.packageDictionary.includesIndex(name)\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "loadedPackages",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _select_2(_values_1(_packageDictionary_1(_self)), _isLoaded_1);
  },
  "{ :self |\n\t\tself.packageDictionary.values.select(isLoaded:/1)\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "loadPackage",
  ["self", "package"],
  function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _loadLocalPackageSequence_1([_qualifiedName_1(_package)]);
  },
  "{ :self :package |\n\t\t[\n\t\t\tpackage.qualifiedName\n\t\t].loadLocalPackageSequence\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "package",
  ["self", "name"],
  function (_self, _name) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _name";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isQualifiedPackageName_1(_name), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym131 = _assertIsOfSize_2(
          _parseQualifiedPackageName_1(_name),
          2,
        ),
        _categoryName = _at_2(__genSym131, 1),
        _packageName = _at_2(__genSym131, 2);
      let _package = _at_2(_packageDictionary_1(_self), _packageName);
      /* Statements */
      return _if_3(
        _ampersand_2(
          _equalsSign_2(_categoryName, _category_1(_package)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _includesPackage_2(_self, _packageName);
          },
        ),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _package;
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _error_2(
            _self,
            "package: category name mismatch or package not registered",
          );
        },
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includesPackage_2(_self, _name), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _at_2(_packageDictionary_1(_self), _name);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "package: package not registered");
      });
    });
  },
  "{ :self :name |\n\t\tname.isQualifiedPackageName.if {\n\t\t\tlet [categoryName, packageName] = name.parseQualifiedPackageName;\n\t\t\tlet package = self.packageDictionary[packageName];\n\t\t\t(categoryName = package.category & {\n\t\t\t\tself.includesPackage(packageName)\n\t\t\t}).if {\n\t\t\t\tpackage\n\t\t\t} {\n\t\t\t\tself.error('package: category name mismatch or package not registered')\n\t\t\t}\n\t\t} {\n\t\t\tself.includesPackage(name).if {\n\t\t\t\tself.packageDictionary[name]\n\t\t\t} {\n\t\t\t\tself.error('package: package not registered')\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Package",
  "registerPackage",
  ["self", "package"],
  function (_self, _package) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _package";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _includesIndex_2(_packageDictionary_1(_self), _name_1(_package)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _atPut_3(
          _packageDictionary_1(_self),
          _name_1(_package),
          _package,
        );
      },
    );
  },
  "{ :self :package |\n\t\tself.packageDictionary.includesIndex(package.name).if {\n\t\t\tself.error('registerPackage: package exists: ' ++ package.name)\n\t\t} {\n\t\t\tself.packageDictionary[package.name] := package\n\t\t}\n\t}",
);
