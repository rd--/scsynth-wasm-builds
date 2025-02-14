/*
Array : [Object] { | shape strides elementType contents |

}
 */

sl.addMethod(
  "List",
  "Array",
  "isArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _notNil_1(_shapeOrNil_1(_self));
  },
  "{ :self |\n\t\tself.shapeOrNil.notNil\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_shape_1(_self));
  },
  "{ :self |\n\t\tself.shape.size\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "shapeOrNil",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [0];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _type = _typeOf_1(_self);
      let _elementTypes = _elementTypes_1(_self);
      /* Statements */
      return _if_3(
        _allSatisfy_2(_elementTypes, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_each, _type);
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _elementShapes = _collect_2(_self, _shape_1);
          /* Statements */
          return _if_3(
            _equalsSign_2(_size_1(_nub_1(_elementShapes)), 1),
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSignPlusSign_2(
                [_size_1(_self)],
                _first_1(_elementShapes),
              );
            },
            function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return null;
            },
          );
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_includes_2(_elementTypes, _type), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return null;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return [_size_1(_self)];
          });
        },
      );
    });
  },
  "{ :self |\n\t\t(self.size = 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\tlet type = self.typeOf;\n\t\t\tlet elementTypes = self.elementTypes;\n\t\t\telementTypes.allSatisfy { :each |\n\t\t\t\teach = type\n\t\t\t}.if {\n\t\t\t\tlet elementShapes = self.collect(shape:/1);\n\t\t\t\t(elementShapes.nub.size = 1).if {\n\t\t\t\t\t[self.size] ++ elementShapes.first\n\t\t\t\t} {\n\t\t\t\t\tnil\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\telementTypes.includes(type).if {\n\t\t\t\t\tnil\n\t\t\t\t} {\n\t\t\t\t\t[self.size]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(_shapeOrNil_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "shape: irregular arrays do not have shape");
    }, function (_answer) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _answer";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    });
  },
  "{ :self |\n\t\tself.shapeOrNil.ifNil {\n\t\t\tself.error('shape: irregular arrays do not have shape')\n\t\t} { :answer |\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "zeros",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _reshape_2([0], _self);
  },
  "{ :self |\n\t\t[0].reshape(self)\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_shape, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "reshape: empty shape?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _size = _product_1(_shape);
      let _answer = _wrapExtend_2(_flatten_1(_self), _size);
      /* Statements */
      _reverseDo_2(_allButFirst_1(_shape), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _clump_2(_answer, _n);
      });
      return _answer;
    });
  },
  "{ :self :shape |\n\t\tshape.ifEmpty {\n\t\t\tself.error('reshape: empty shape?')\n\t\t} {\n\t\t\tlet size = shape.product;\n\t\t\tlet answer = self.flatten.wrapExtend(size);\n\t\t\tshape.allButFirst.reverseDo { :n |\n\t\t\t\tanswer := answer.clump(n)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Array",
  "reshape",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(_shape, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "reshape: empty shape?");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _size = _product_1(_shape);
      let _answer = _wrapExtend_2(_flatten_1(_self), _size);
      /* Statements */
      _reverseDo_2(_allButFirst_1(_shape), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _answer = _clump_2(_answer, _n);
      });
      return _answer;
    });
  },
  "{ :self :shape |\n\t\tshape.ifEmpty {\n\t\t\tself.error('reshape: empty shape?')\n\t\t} {\n\t\t\tlet size = shape.product;\n\t\t\tlet answer = self.flatten.wrapExtend(size);\n\t\t\tshape.allButFirst.reverseDo { :n |\n\t\t\t\tanswer := answer.clump(n)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Array",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(_another, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _atWrap_2(_items, _index);
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _item;
    });
  },
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flatten;\n\t\tanother.deepCollect { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
);

sl.addMethod(
  "Range",
  "Array",
  "reshapeLike",
  ["self", "another"],
  function (_self, _another) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _another";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = 1;
    let _items = _flatten_1(_self);
    /* Statements */
    return _deepCollect_2(_another, function (_unusedItem) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unusedItem";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _item = _atWrap_2(_items, _index);
      /* Statements */
      _index = _plusSign_2(_index, 1);
      return _item;
    });
  },
  "{ :self :another |\n\t\tlet index = 1;\n\t\tlet items = self.flatten;\n\t\tanother.deepCollect { :unusedItem |\n\t\t\tlet item = items.atWrap(index);\n\t\t\tindex := index + 1;\n\t\t\titem\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Array",
  "rank",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Array",
  "shape",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [];
  },
  "{ :self |\n\t\t[]\n\t}",
);
