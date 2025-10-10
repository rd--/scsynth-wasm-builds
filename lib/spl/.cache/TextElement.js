sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextButton",
  ["self", "attributeDictionary"],
  sl.annotateFunction(function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _button = _createElement_2("button", _attributeDictionary);
    /* Statements */
    _innerText_2(_button, _self);
    return _button;
  }, ["self", "attributeDictionary"]),
  "{ :self :attributeDictionary |\n\t\tlet button = 'button'.createElement(attributeDictionary);\n\t\tbutton.innerText := self;\n\t\tbutton\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextInput",
  ["self", "attributeDictionary"],
  sl.annotateFunction(function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _input = _createElement_2("input", _attributeDictionary);
    /* Statements */
    _setAttributes_2(_input, _Record_1([["type", "text"], ["value", _self]]));
    return _input;
  }, ["self", "attributeDictionary"]),
  "{ :self :attributeDictionary |\n\t\tlet input = 'input'.createElement(attributeDictionary);\n\t\tinput.setAttributes((\n\t\t\ttype: 'text',\n\t\t\tvalue: self\n\t\t));\n\t\tinput\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextListItem",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _listItem = _createElement_1("li");
    /* Statements */
    _textContent_2(_listItem, _self);
    return _listItem;
  }, ["self"]),
  "{ :self |\n\t\tlet listItem = 'li'.createElement;\n\t\tlistItem.textContent := self;\n\t\tlistItem\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextOption",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TextOption_2(_self, _self);
  }, ["self"]),
  "{ :self |\n\t\tTextOption(self, self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextOption",
  ["self", "value"],
  sl.annotateFunction(function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _option = _createElement_1("option");
    /* Statements */
    _text_2(
      _option,
      _if_3(
        _isEmpty_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return "*Unspecified*";
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _self;
        }, []),
      ),
    );
    _value_2(_option, _value);
    return _option;
  }, ["self", "value"]),
  "{ :self :value |\n\t\tlet option = 'option'.createElement;\n\t\toption.text := self.isEmpty.if {\n\t\t\t'*Unspecified*'\n\t\t} {\n\t\t\tself\n\t\t};\n\t\toption.value := value;\n\t\toption\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextParagraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _createElement_1("p");
    /* Statements */
    _textContent_2(_p, _self);
    return _p;
  }, ["self"]),
  "{ :self |\n\t\tlet p = 'p'.createElement;\n\t\tp.textContent := self;\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextSpan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _span = _createElement_1("span");
    /* Statements */
    _textContent_2(_span, _self);
    return _span;
  }, ["self"]),
  "{ :self |\n\t\tlet span = 'span'.createElement;\n\t\tspan.textContent := self;\n\t\tspan\n\t}",
);
