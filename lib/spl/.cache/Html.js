sl.addType(
  false,
  "Html",
  "Html",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "Html",
);

sl.addMethod(
  "Html",
  "Html",
  "asHtmlElement",
  ["self", "document"],
  function (_self, _document) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _document";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _parseHtml_2(_document, _contents_1(_self));
  },
  "{ :self :document |\n\t\tdocument.parseHtml(self.contents)\n\t}",
);

sl.addMethod(
  "Html",
  "Html",
  "isDocument",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _beginsWith_2(_contents_1(_self), "<!DOCTYPE html>");
  },
  "{ :self |\n\t\tself.contents.beginsWith('<!DOCTYPE html>')\n\t}",
);

sl.addMethod(
  "Html",
  "Html",
  "isFragment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isDocument_1(_self));
  },
  "{ :self |\n\t\tself.isDocument.not\n\t}",
);

sl.addMethod(
  "Html",
  "Html",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "String",
  "Html",
  "Html",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newHtml_0(), _self);
  },
  "{ :self |\n\t\tnewHtml().initializeSlots(self)\n\t}",
);

sl.addMethod(
  "List",
  "Html",
  "integerPartitionsTable",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _period = _sum_1(_anyOne_1(_self));
    let _cell_1 = function (_c) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _c";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifFalse_2(_isInteger_1(_c), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "integerPartitionsTable: not integer");
      });
      return _if_3(_equalsSign_2(_c, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return "<td>1</td>";
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2('<td colspan="%">%</td>', [_c, _c]);
      });
    };
    let _row_1 = function (_r) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _r";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _ifFalse_2(_equalsSign_2(_sum_1(_r), _period), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "integerPartitionsTable: row does not sum to period",
        );
      });
      return _format_2("<tr>%</tr>", [_join_2(_collect_2(_r, _cell_1), "")]);
    };
    /* Statements */
    return _Html_1(
      _format_2('<table style="%"><tbody>\n%\n</tbody></table>', [
        "width: 100%; border: solid 1px black",
        _join_2(_collect_2(_self, _row_1), "\n"),
      ]),
    );
  },
  "{ :self |\n\t\tlet period = self.anyOne.sum;\n\t\tlet cell = { :c |\n\t\t\tc.isInteger.ifFalse {\n\t\t\t\tself.error('integerPartitionsTable: not integer')\n\t\t\t};\n\t\t\t(c = 1).if {\n\t\t\t\t'<td>1</td>'\n\t\t\t} {\n\t\t\t\t'<td colspan=\"%\">%</td>'.format([c, c])\n\t\t\t}\n\t\t};\n\t\tlet row = { :r |\n\t\t\t(r.sum = period).ifFalse {\n\t\t\t\tself.error('integerPartitionsTable: row does not sum to period')\n\t\t\t};\n\t\t\t'<tr>%</tr>'.format([\n\t\t\t\tr.collect(cell:/1).join('')\n\t\t\t])\n\t\t};\n\t\tHtml(\n\t\t\t'<table style=\"%\"><tbody>\\n%\\n</tbody></table>'.format([\n\t\t\t\t'width: 100%; border: solid 1px black',\n\t\t\t\tself.collect(row:/1).join('\\n')\n\t\t\t])\n\t\t)\n\t}",
);
