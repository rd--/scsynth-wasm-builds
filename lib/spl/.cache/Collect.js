sl.addTrait("Collect", "Collect");

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock/2"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_anInteger, _each);
      }, ["each"]),
    );
  }, ["self", "anInteger", "aBlock/2"]),
  "{ :self :anInteger :aBlock/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(anInteger, each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aNumber, _each);
      }, ["each"]),
    );
  }, ["self", "aNumber", "aBlock/2"]),
  "{ :self :aNumber :aBlock/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aNumber, each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "clip",
  ["self", "minMax"],
  sl.annotateFunction(function (_self, _minMax) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _minMax";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _clip_2(_each, _minMax);
      }, ["each"]),
    );
  }, ["self", "minMax"]),
  "{ :self :minMax |\n\t\tself.collect { :each |\n\t\t\teach.clip(minMax)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "clip",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _clip_2(_self, [-1, 1]);
  }, ["self"]),
  "{ :self |\n\t\tself.clip([-1 1])\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "copyWithout",
  ["self", "oldElement"],
  sl.annotateFunction(function (_self, _oldElement) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _oldElement";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_each, _oldElement);
      }, ["each"]),
    );
  }, ["self", "oldElement"]),
  "{ :self :oldElement |\n\t\tself.reject { :each |\n\t\t\teach = oldElement\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "copyWithoutAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _reject_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2(_aCollection, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\tself.reject { :each |\n\t\t\taCollection.includes(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "copyWithoutIdenticalElements",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let _seen = _IdentitySet_0();
    return _select_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includes_2(_seen, _each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return false;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _uncheckedIncludeInPlace_2(_seen, _each);
            return true;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet seen = IdentitySet();\n\t\tself.select { :each |\n\t\t\tseen.includes(each).if {\n\t\t\t\tfalse\n\t\t\t} {\n\t\t\t\tseen.uncheckedInclude!(each);\n\t\t\t\ttrue\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_solidus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(/.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_solidus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(/.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_percentSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(%.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_percentSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(%.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_plusSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(+.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_plusSign_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(+.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "power",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_circumflexAccent_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(^.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "circumflexAccent",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_circumflexAccent_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(^.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "replaceNaN",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNaN_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _anObject;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _each;
          }, []),
        );
      }, ["each"]),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect { :each |\n\t\t\teach.isNaN.if {\n\t\t\t\tanObject\n\t\t\t} {\n\t\t\t\teach\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "rescale",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rescaleBlock_2(_a, _b));
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tself.collect(rescaleBlock(a, b))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "rescale",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _rescale_3(_self, _a, [0, 1]);
  }, ["self", "a"]),
  "{ :self :a |\n\t\tself.rescale(a, [0, 1])\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "subtract",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_hyphenMinus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(-.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_hyphenMinus_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(-.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_asterisk_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(*.bindRight(anObject))\n\t}",
);

sl.addMethodToExistingTrait(
  "Collect",
  "Collect",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bindRight_2(_asterisk_2, _anObject));
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.collect(*.bindRight(anObject))\n\t}",
);
