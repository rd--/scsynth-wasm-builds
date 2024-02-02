sl.addType(
  true,
  "Array",
  "Array",
  [
    "Object",
    "Json",
    "Iterable",
    "Indexable",
    "Collection",
    "Extensible",
    "Removable",
    "Sequenceable",
    "Arrayed",
    "Ordered",
  ],
  [],
);

sl.copyTraitToType(
  "Object",
  "Array",
);

sl.copyTraitToType(
  "Json",
  "Array",
);

sl.copyTraitToType(
  "Iterable",
  "Array",
);

sl.copyTraitToType(
  "Indexable",
  "Array",
);

sl.copyTraitToType(
  "Collection",
  "Array",
);

sl.copyTraitToType(
  "Extensible",
  "Array",
);

sl.copyTraitToType(
  "Removable",
  "Array",
);

sl.copyTraitToType(
  "Sequenceable",
  "Array",
);

sl.copyTraitToType(
  "Arrayed",
  "Array",
);

sl.copyTraitToType(
  "Ordered",
  "Array",
);

sl.addMethod(
  "Array",
  "Array",
  "addArrayFirst",
  ["self", "anArray"],
  function (_self, _anArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.unshift(..._anArray);
    return _anArray;
  },
  "{ :self :anArray |\n\t\t<primitive:\n\t\t_self.unshift(..._anArray);\n\t\treturn _anArray;\n\t\t>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "addArrayLast",
  ["self", "anArray"],
  function (_self, _anArray) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anArray";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.push(..._anArray);
    return _anArray;
  },
  "{ :self :anArray |\n\t\t<primitive:\n\t\t_self.push(..._anArray);\n\t\treturn _anArray;\n\t\t>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "addFirst",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.unshift(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.unshift(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "addLast",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.push(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.push(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "atAllPut",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    _self.fill(_anObject);
    return _anObject;
  },
  "{ :self :anObject |\n\t\t<primitive:\n\t\t_self.fill(_anObject);\n\t\treturn _anObject;\n\t\t>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "printString",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(
      _plusPlus_2(
        "[",
        _joinSeparatedBy_2(_collect_2(_self, _toString_1), ", "),
      ),
      "]",
    );
  },
  "{ :self :toString:/1 |\n\t\t'[' ++ self.collect(toString:/1).joinSeparatedBy(', ') ++ ']'\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _printString_2(_self, _printString_1);
  },
  "{ :self |\n\t\tself.printString(printString:/1)\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeAll",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(0);
  },
  "{ :self |\n\t\t<primitive: return _self.splice(0);>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeAt",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(_index - 1, 1)[0];
  },
  "{ :self :index |\n\t\t<primitive: return _self.splice(_index - 1, 1)[0];>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeFirst",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.shift();
  },
  "{ :self |\n\t\t<primitive: return _self.shift();>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeFirst",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(0, _count);
  },
  "{ :self :count |\n\t\t<primitive: return _self.splice(0, _count);>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeLast",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.pop();
  },
  "{ :self |\n\t\t<primitive: return _self.pop();>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "removeLast",
  ["self", "count"],
  function (_self, _count) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _count";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.splice(_self.length - _count, _count);
  },
  "{ :self :count |\n\t\t<primitive: return _self.splice(_self.length - _count, _count);>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "shallowCopy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Array.from(_self);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "species",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Array_1;
  },
  "{ :self |\n\t\tArray:/1\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _printString_2(_self, _storeString_1);
  },
  "{ :self |\n\t\tself.printString(storeString:/1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Array",
  "Array",
  ["size"],
  function (_size) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _size";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return Array(_size);
  },
  "{ :size |\n\t\t<primitive: return Array(_size);>\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Array",
  "Array",
  ["size", "anObject"],
  function (_size, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _size, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_size);
    /* Statements */
    _atAllPut_2(_answer, _anObject);
    return _answer;
  },
  "{ :size :anObject |\n\t\tlet answer = Array(size);\n\t\tanswer.atAllPut(anObject);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Array",
  "arithmeticSeries",
  ["self", "start", "step"],
  function (_self, _start, _step) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _step";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_upTo_2(1, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _plus_2(_times_2(_step, _minus_2(_each, 1)), _start);
    });
  },
  "{ :self :start :step |\n\t\t1.upTo(self).collect { :each |\n\t\t\t(step * (each - 1)) + start\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Array",
  "geometricSeries",
  ["self", "start", "grow"],
  function (_self, _start, _grow) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _start, _grow";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [];
    let _next = _start;
    /* Statements */
    _timesRepeat_2(_self, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _add_2(_answer, _next);
      return _next = _times_2(_next, _grow);
    });
    return _answer;
  },
  "{ :self :start :grow |\n\t\tlet answer = [];\n\t\tlet next = start;\n\t\tself.timesRepeat {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * grow\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Void",
  "Array",
  "Array",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return [];
  },
  "{\n\t\t<primitive: return [];>\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Array",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_size_1(_self));
    let _index = 0;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _index = _plus_2(_index, 1);
      return _atPut_3(_answer, _index, _each);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self.size);\n\t\tlet index = 0;\n\t\tself.do { :each |\n\t\t\tindex := index + 1;\n\t\t\tanswer[index] := each\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Array",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_size_1(_self));
    /* Statements */
    _indicesDo_2(_self, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _at_2(_self, _index));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Array(self.size);\n\t\tself.indicesDo { :index |\n\t\t\tanswer[index] := self[index]\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Block",
  "Array",
  "bang",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _duplicate_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.duplicate(anInteger)\n\t}",
);

sl.addMethod(
  "Block",
  "Array",
  "duplicate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _duplicate_2(_self, 2);
  },
  "{ :self |\n\t\tself.duplicate(2)\n\t}",
);

sl.addMethod(
  "Block",
  "Array",
  "duplicate",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateApplying_3(_self, _anInteger, _value_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateApplying(anInteger, value:/1)\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "bangPlusPlus",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _concatenation_1(_bang_2(_self, _anInteger));
  },
  "{ :self :anInteger |\n\t\t(self ! anInteger).concatenation\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Array",
  "replicateApplying",
  ["self", "anInteger", "aBlock:/1"],
  function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _answer = _Array_1(_anInteger);
    /* Statements */
    _indicesDo_2(_answer, function (_index) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _index";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atPut_3(_answer, _index, _aBlock_1(_self));
    });
    return _answer;
  },
  "{ :self :anInteger :aBlock:/1 |\n\t\tlet answer = Array(anInteger);\n\t\tanswer.indicesDo { :index |\n\t\t\tanswer[index] := aBlock(self)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Array",
  "replicate",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicateApplying_3(_self, _anInteger, _identity_1);
  },
  "{ :self :anInteger |\n\t\tself.replicateApplying(anInteger, identity:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Array",
  "bang",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _replicate_2(_self, _anInteger);
  },
  "{ :self :anInteger |\n\t\tself.replicate(anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Array",
  "fibonacciArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fibonacciSequenceInto_2(_self, []);
  },
  "{ :self |\n\t\tself.fibonacciSequenceInto([])\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "isMatrixOf",
  ["self", "elementType"],
  function (_self, _elementType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elementType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_equals_2(_elementType_1(_self), "Array"), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _allSatisfy_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_elementType_1(_each), _elementType);
      });
    });
  },
  "{ :self :elementType |\n\t\tself.elementType = 'Array' & {\n\t\t\tself.allSatisfy { :each |\n\t\t\t\teach.elementType = elementType\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Array",
  "Array",
  "plot",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _fileName = "/tmp/arrayPlot.json";
    /* Statements */
    return _then_2(
      _writeTextFile_2(_fileName, _json_1([_self])),
      function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _systemCommand_3(_system, "hsc3-plot", [
          "json",
          "x",
          "--rows",
          _fileName,
          0,
        ]);
      },
    );
  },
  "{ :self |\n\t\tlet fileName = '/tmp/arrayPlot.json';\n\t\tfileName.writeTextFile([self].json).then { :unused |\n\t\t\tsystem.systemCommand(\n\t\t\t\t'hsc3-plot',\n\t\t\t\t[\n\t\t\t\t\t'json',\n\t\t\t\t\t'x',\n\t\t\t\t\t'--rows',\n\t\t\t\t\tfileName,\n\t\t\t\t\t0\n\t\t\t\t]\n\t\t\t)\n\t\t}\n\t}",
);
