/*  Requires: LibraryItem  */

sl.extendTypeOrTraitWithMethod(
  "String",
  "Unicode",
  "unicodeItalic",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_unicodeItalicTable_1(_system), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringJoin_1(
          _collect_2(_characters_1(_self), _unicodeItalic_1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCharacter.if {\n\t\t\tsystem.unicodeItalicTable.at(self)\n\t\t} {\n\t\t\tself.characters.collect(unicodeItalic:/1).stringJoin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Unicode",
  "unicodeSubscript",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_unicodeSubscriptTable_1(_system), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringJoin_1(
          _collect_2(_characters_1(_self), _unicodeSubscript_1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCharacter.if {\n\t\t\tsystem.unicodeSubscriptTable.at(self)\n\t\t} {\n\t\t\tself.characters.collect(unicodeSubscript:/1).stringJoin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Unicode",
  "unicodeSuperscript",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCharacter_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_unicodeSuperscriptTable_1(_system), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _stringJoin_1(
          _collect_2(_characters_1(_self), _unicodeSuperscript_1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isCharacter.if {\n\t\t\tsystem.unicodeSuperscriptTable.at(self)\n\t\t} {\n\t\t\tself.characters.collect(unicodeSuperscript:/1).stringJoin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Unicode",
  "unicodeCharacterDatabase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "UnicodeCharacterDatabase");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('UnicodeCharacterDatabase')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Unicode",
  "unicodeItalicTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "unicodeItalicTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _characters_1(
          "abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZh",
        );
        let _u = _characters_1(
          "𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍ℎ",
        );
        let _m = _transpose_1([_c, _u]);
        /* Statements */
        return _Record_1(_m);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('unicodeItalicTable') {\n\t\t\tlet c = 'abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZh'.characters;\n\t\t\t/* let uB = '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'.characters; */\n\t\t\tlet u = '𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍ℎ'.characters;\n\t\t\tlet m = [c, u].transpose;\n\t\t\tRecord(m)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Unicode",
  "unicodeSubscriptTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "unicodeSubscriptTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _characters_1("0123456789+-=()aehijklmnoprstuvxə");
        let _u = _characters_1("₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓₔ");
        let _m = _transpose_1([_c, _u]);
        /* Statements */
        return _Record_1(_m);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('unicodeSubscriptTable') {\n\t\t\tlet c = '0123456789+-=()aehijklmnoprstuvxə'.characters;\n\t\t\tlet u = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓₔ'.characters;\n\t\t\tlet m = [c, u].transpose;\n\t\t\tRecord(m)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Unicode",
  "unicodeSuperscriptTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "unicodeSuperscriptTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _characters_1(
          "0123456789+-=()abcdefghijklmnopqrstuvwxyzGHILNRUY",
        );
        let _u = _characters_1(
          "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ𐞥ʳˢᵗᵘᵛʷˣʸᶻ𐞒𐞖ᶦᶫᶰ𐞪ᶸ𐞲",
        );
        let _m = _transpose_1([_c, _u]);
        /* Statements */
        return _Record_1(_m);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('unicodeSuperscriptTable') {\n\t\t\tlet c = '0123456789+-=()abcdefghijklmnopqrstuvwxyzGHILNRUY'.characters;\n\t\t\tlet u = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ𐞥ʳˢᵗᵘᵛʷˣʸᶻ𐞒𐞖ᶦᶫᶰ𐞪ᶸ𐞲'.characters;\n\t\t\tlet m = [c, u].transpose;\n\t\t\tRecord(m)\n\t\t}\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "UnicodeCharacterDatabase"],
      ["category", "Text/Encoding"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/text/unicode/unicode-character-table.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
sl.extendTypeOrTraitWithMethod(
  "System",
  "Unicode",
  "englishStopWords",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "EnglishStopWords");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem('EnglishStopWords')\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "EnglishStopWords"],
      ["category", "Text/Analysis"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/text/stopwords-mathematica.text",
      ],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
