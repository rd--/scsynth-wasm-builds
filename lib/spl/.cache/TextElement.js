sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextButton",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _button = _createElement_2("button", _attributeDictionary);
    /* Statements */
    _innerText_2(_button, _self);
    return _button;
  },
  "{ :self :attributeDictionary | let button = createElement('button',attributeDictionary); innerText(button, self); button }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextInput",
  ["self", "attributeDictionary"],
  function (_self, _attributeDictionary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _attributeDictionary";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _input = _createElement_2("input", _attributeDictionary);
    /* Statements */
    _setAttributes_2(_input, _Record_1([["type", "text"], ["value", _self]]));
    return _input;
  },
  "{ :self :attributeDictionary | let input = createElement('input',attributeDictionary); setAttributes(input,Record([['type', 'text'], ['value', self]])); input }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextListItem",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _listItem = _createElement_1("li");
    /* Statements */
    _textContent_2(_listItem, _self);
    return _listItem;
  },
  "{ :self | let listItem = createElement('li'); textContent(listItem, self); listItem }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextOption",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _TextOption_2(_self, _self);
  },
  "{ :self | TextOption(self, self) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextOption",
  ["self", "value"],
  function (_self, _value) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _value";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _option = _createElement_1("option");
    /* Statements */
    _text_2(
      _option,
      _if_3(_isEmpty_1(_self), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "*Unspecified*";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }),
    );
    _value_2(_option, _value);
    return _option;
  },
  "{ :self :value | let option = createElement('option'); text(option, if(isEmpty(self), { '*Unspecified*' }, { self })); value(option, value); option }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextParagraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _createElement_1("p");
    /* Statements */
    _textContent_2(_p, _self);
    return _p;
  },
  "{ :self | let p = createElement('p'); textContent(p, self); p }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "TextElement",
  "TextSpan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _span = _createElement_1("span");
    /* Statements */
    _textContent_2(_span, _self);
    return _span;
  },
  "{ :self | let span = createElement('span'); textContent(span, self); span }",
);
