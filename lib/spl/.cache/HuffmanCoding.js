sl.addType(
  false,
  "HuffmanCoding",
  "HuffmanCoding",
  ["Object", "Storeable", "Equatable"],
  ["symbolTable", "encoding"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HuffmanCoding",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "HuffmanCoding",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HuffmanCoding",
);

sl.addMethodToExistingType(
  "HuffmanCoding",
  "HuffmanCoding",
  "decode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _codeTable = _reverse_1(
      _sortByOn_3(
        _associations_1(_symbolTable_1(_self)),
        _lessThanSign_2,
        sl.annotateFunction(function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            throw new Error(errorMessage);
          } /* Statements */
          return _size_1(_value_1(_x));
        }, ["x"]),
      ),
    );
    let _codes = _encoding_1(_self);
    let _symbols = [];
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isEmpty_1(_codes);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _code = _detect_2(
          _codeTable,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _beginsWith_2(_codes, _value_1(_each));
          }, ["each"]),
        );
        /* Statements */
        _add_2(_symbols, _key_1(_code));
        return _removeFirst_2(_codes, _size_1(_value_1(_code)));
      }, []),
    );
    return _symbols;
  }, ["self"]),
  "{ :self |\n\t\tlet codeTable = self.symbolTable.associations.sortByOn(<) { :x |\n\t\t\tx.value.size\n\t\t}.reverse;\n\t\tlet codes = self.encoding;\n\t\tlet symbols = [];\n\t\t{ codes.isEmpty }.whileFalse {\n\t\t\tlet code = codeTable.detect { :each |\n\t\t\t\tcodes.beginsWith(each.value)\n\t\t\t};\n\t\t\tsymbols.add(code.key);\n\t\t\tcodes.removeFirst(code.value.size)\n\t\t};\n\t\tsymbols\n\t}",
);

sl.addMethodToExistingType(
  "HuffmanCoding",
  "HuffmanCoding",
  "decodeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringJoin_1(_decode_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.decode.stringJoin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "HuffmanCoding",
  "HuffmanCoding",
  ["symbolTable", "encoding"],
  sl.annotateFunction(function (_symbolTable, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _symbolTable, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHuffmanCoding_0(), _symbolTable, _encoding);
  }, ["symbolTable", "encoding"]),
  "{ :symbolTable :encoding |\n\t\tnewHuffmanCoding().initializeSlots(symbolTable, encoding)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "HuffmanCoding",
  "HuffmanCoding",
  ["symbolTable", "encoding"],
  sl.annotateFunction(function (_symbolTable, _encoding) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _symbolTable, _encoding";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newHuffmanCoding_0(), _symbolTable, _encoding);
  }, ["symbolTable", "encoding"]),
  "{ :symbolTable :encoding |\n\t\tnewHuffmanCoding().initializeSlots(symbolTable, encoding)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "HuffmanCoding",
  "huffmanEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _huffmanEncode_1(_contents_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.contents.huffmanEncode\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HuffmanCoding",
  "huffmanEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _huffmanSymbolTable_1 = sl.annotateFunction(function (_weights) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _weights";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _heap = _Heap_0();
      /* Statements */
      _do_2(
        _sortedCounts_1(_weights),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _add_2(
            _heap,
            _hyphenMinusGreaterThanSign_2(_key_1(_each), [
              _hyphenMinusGreaterThanSign_2(_value_1(_each), []),
            ]),
          );
        }, ["each"]),
      );
      _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_size_1(_heap), 1);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _low = _removeFirst_1(_heap);
          let _high = _removeFirst_1(_heap);
          /* Statements */
          _do_2(
            _value_1(_low),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _addFirst_2(_value_1(_each), 0);
            }, ["each"]),
          );
          _do_2(
            _value_1(_high),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _addFirst_2(_value_1(_each), 1);
            }, ["each"]),
          );
          return _add_2(
            _heap,
            _hyphenMinusGreaterThanSign_2(
              _plusSign_2(_key_1(_low), _key_1(_high)),
              _plusSignPlusSign_2(_value_1(_low), _value_1(_high)),
            ),
          );
        }, []),
      );
      return _asMap_1(_value_1(_first_1(_array_1(_heap))));
    }, ["weights"]);
    let _symbolTable = _huffmanSymbolTable_1(_asMultiset_1(_self));
    /* Statements */
    return _HuffmanCoding_2(
      _symbolTable,
      _catenate_1(_collect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_symbolTable, _each);
        }, ["each"]),
      )),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet huffmanSymbolTable = { :weights |\n\t\t\tlet heap = Heap();\n\t\t\tweights.sortedCounts.do { :each |\n\t\t\t\theap.add(each.key -> [each.value -> []])\n\t\t\t};\n\t\t\t{ heap.size > 1 }.whileTrue {\n\t\t\t\tlet low = heap.removeFirst;\n\t\t\t\tlet high = heap.removeFirst;\n\t\t\t\tlow.value.do { :each |\n\t\t\t\t\teach.value.addFirst(0)\n\t\t\t\t};\n\t\t\t\thigh.value.do { :each |\n\t\t\t\t\teach.value.addFirst(1)\n\t\t\t\t};\n\t\t\t\theap.add((low.key + high.key) -> (low.value ++ high.value))\n\t\t\t};\n\t\t\theap.array.first.value.asMap\n\t\t};\n\t\tlet symbolTable = self.asMultiset.huffmanSymbolTable;\n\t\tHuffmanCoding(\n\t\t\tsymbolTable,\n\t\t\tself.collect { :each |\n\t\t\t\tsymbolTable.at(each)\n\t\t\t}.catenate\n\t\t)\n\t}",
);
