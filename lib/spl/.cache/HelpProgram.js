sl.addType(
  false,
  "HelpProgram",
  "HelpProgram",
  ["Object"],
  ["topic", "language", "commentary", "annotations", "programText"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HelpProgram",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "annotation",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_annotations_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.annotations.at(key)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "condensedProgramText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _splCondenseProgramText_1(_programText_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.programText.splCondenseProgramText\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "fencedCodeBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(["~~~spl", _programText_1(_self), "~~~"]);
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\t'~~~spl',\n\t\t\tself.programText,\n\t\t\t'~~~'\n\t\t].unlines\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "hasAnnotation",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_annotations_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key |\n\t\tself.annotations.includesKey(key)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "hasAnnotation",
  ["self", "key", "value"],
  sl.annotateFunction(function (_self, _key, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _annotations_1(_self);
    /* Statements */
    return _ampersand_2(
      _includesKey_2(_a, _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_at_2(_a, _key), _value);
      }, []),
    );
  }, ["self", "key", "value"]),
  "{ :self :key :value |\n\t\tlet a = self.annotations;\n\t\ta.includesKey(key) & {\n\t\t\ta.at(key) = value\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "imageFileName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("%-%.%", [
      _topic_1(_self),
      _imageIdentifier_1(_self),
      _imageType_1(_self),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t'%-%.%'.format(\n\t\t\t[\n\t\t\t\tself.topic,\n\t\t\t\tself.imageIdentifier,\n\t\t\t\tself.imageType\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "imageIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _annotation_2(_self, _imageType_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.annotation(self.imageType)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "imageType",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _detect_2(
      ["png", "svg"],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hasAnnotation_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t['png' 'svg'].detect { :each |\n\t\t\tself.hasAnnotation(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "isDefinitionProgram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasAnnotation_2(_self, "define");
  }, ["self"]),
  "{ :self |\n\t\tself.hasAnnotation('define')\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "isImageProgram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      ["png", "svg"],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hasAnnotation_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t['png' 'svg'].anySatisfy { :each |\n\t\t\tself.hasAnnotation(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "isOeisProgram",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _hasAnnotation_2(_self, "oeis"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_hasAnnotation_2(_self, "variant"));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.hasAnnotation('oeis') & {\n\t\t\tself.hasAnnotation('variant').not\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "markdownImageReference",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _imageTitleText = _if_3(
      _at_2(_options, "imageProgramText"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2(' "%"', [_condensedProgramText_1(_self)]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "";
      }, []),
    );
    /* Statements */
    return _format_2("![](Help/Image/%%)", [
      _imageFileName_1(_self),
      _imageTitleText,
    ]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet imageTitleText = options['imageProgramText'].if {\n\t\t\t' \"%\"'.format([self.condensedProgramText])\n\t\t} {\n\t\t\t''\n\t\t};\n\t\t'![](Help/Image/%%)'.format(\n\t\t\t[\n\t\t\t\tself.imageFileName,\n\t\t\t\timageTitleText\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "markdownImageReference",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _markdownImageReference_2(
      _self,
      _Record_1([["imageProgramText", false]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.markdownImageReference (\n\t\t\timageProgramText: false\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "markdownText",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(
      _deleteMissing_1([
        _commentary_1(_self),
        _if_3(
          _at_2(_options, "programText"),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unlines_1(["", _fencedCodeBlock_1(_self)]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
        ),
        _if_3(
          _isImageProgram_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _unlines_1(["", _markdownImageReference_2(_self, _options)]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, []),
        ),
      ]),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\t[\n\t\t\tself.commentary,\n\t\t\toptions['programText'].if {\n\t\t\t\t[\n\t\t\t\t\t'',\n\t\t\t\t\tself.fencedCodeBlock\n\t\t\t\t].unlines\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t},\n\t\t\tself.isImageProgram.if {\n\t\t\t\t[\n\t\t\t\t\t'',\n\t\t\t\t\tself.markdownImageReference(options)\n\t\t\t\t].unlines\n\t\t\t} {\n\t\t\t\tnil\n\t\t\t}\n\t\t].deleteMissing.unlines\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "markdownText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _markdownText_2(
      _self,
      _Record_1([["programText", true], ["imageProgramText", false]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.markdownText (\n\t\t\tprogramText: true,\n\t\t\timageProgramText: false\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "HelpProgram",
  "HelpProgram",
  "oeisIdentifier",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _annotation_2(_self, "oeis");
  }, ["self"]),
  "{ :self |\n\t\tself.annotation('oeis')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HelpProgram",
  "HelpProgram",
  ["topic", "language", "commentary", "annotations", "programText"],
  sl.annotateFunction(
    function (_topic, _language, _commentary, _annotations, _programText) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage =
          "Arity: expected 5, _topic, _language, _commentary, _annotations, _programText";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_6(
        _newHelpProgram_0(),
        _topic,
        _language,
        _commentary,
        _annotations,
        _programText,
      );
    },
    ["topic", "language", "commentary", "annotations", "programText"],
  ),
  "{ :topic :language :commentary :annotations :programText |\n\t\tnewHelpProgram()\n\t\t.initializeSlots(topic, language, commentary, annotations, programText)\n\t}",
);
