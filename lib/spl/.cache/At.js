/*  Require: Object  */

sl.addTrait("At", "At");

sl.addMethodToExistingTrait(
  "At",
  "At",
  "atIfAbsent",
  ["self", "index", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _index, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "atIfPresentIfAbsent");
  }, ["self", "index", "ifAbsent/0"]),
  "{ :self :index :ifAbsent/0 |\n\t\tself.typeResponsibility('atIfPresentIfAbsent')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "at",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "at", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tself.errorInvalidIndex('at', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIfPresent",
  ["self", "index", "ifPresent/1"],
  sl.annotateFunction(function (_self, _index, _ifPresent_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _ifPresent_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresentIfAbsent_4(
      _self,
      _index,
      _ifPresent_1,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "index", "ifPresent/1"]),
  "{ :self :index :ifPresent/1 |\n\t\tself.atIfPresentIfAbsent(\n\t\t\tindex,\n\t\t\tifPresent/1,\n\t\t\t{ nil }\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIfPresentIfAbsent",
  ["self", "index", "ifPresent/1", "ifAbsent/0"],
  sl.annotateFunction(function (_self, _index, _ifPresent_1, _ifAbsent_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _index, _ifPresent_1, _ifAbsent_0";
      throw new Error(errorMessage);
    } /* Statements */
    let _isPresent = true;
    let _answer = _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _isPresent = false;
        return _ifAbsent_0();
      }, []),
    );
    return _if_3(
      _isPresent,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifPresent_1(_answer);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _answer;
      }, []),
    );
  }, ["self", "index", "ifPresent/1", "ifAbsent/0"]),
  "{ :self :index :ifPresent/1 :ifAbsent/0 |\n\t\tlet isPresent = true;\n\t\tlet answer = self.atIfAbsent(index) {\n\t\t\tisPresent := false;\n\t\t\tifAbsent()\n\t\t};\n\t\tisPresent.if {\n\t\t\tifPresent(answer)\n\t\t} {\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atIncrementBy",
  ["self", "index", "value"],
  sl.annotateFunction(function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _putInPlace_3(
      _self,
      _index,
      _plusSign_2(_at_2(_self, _index), _value),
    );
  }, ["self", "index", "value"]),
  "{ :self :index :value |\n\t\tself[index] := self[index] + value\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atLinear",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPath_2(_self, _cartesianIndex_2(_shape_1(_self), _index));
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atPath(self.shape.cartesianIndex(index))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atOrMissing",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Missing_2("NotAvailable", _index);
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tMissing('NotAvailable', index)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atOrNil",
  ["self", "index"],
  sl.annotateFunction(function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _index,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return null;
      }, []),
    );
  }, ["self", "index"]),
  "{ :self :index |\n\t\tself.atIfAbsent(index) {\n\t\t\tnil\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@At",
  "At",
  "atPath",
  ["self", "path"],
  sl.annotateFunction(function (_self, _path) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _path";
      throw new Error(errorMessage);
    } /* Statements */
    let _item = _self;
    return _ifEmpty_3(
      _path,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _errorInvalidIndex_3(_self, "atPath", _path);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _do_2(
          _path,
          sl.annotateFunction(function (_index) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _item = _at_2(_item, _index);
          }, ["index"]),
        );
        return _item;
      }, []),
    );
  }, ["self", "path"]),
  "{ :self :path |\n\t\tlet item = self;\n\t\tpath.ifEmpty {\n\t\t\tself.errorInvalidIndex('atPath', path)\n\t\t} {\n\t\t\tpath.do { :index |\n\t\t\t\titem := item[index]\n\t\t\t};\n\t\t\titem\n\t\t}\n\t}",
);
