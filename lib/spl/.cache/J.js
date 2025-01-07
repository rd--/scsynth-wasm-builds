sl.extendTraitWithMethod(
  "Object",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_levels, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [_self];
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return [_bubble_3(_self, _depth, _hyphenMinus_2(_levels, 1))];
    });
  },
  "{ :self :depth :levels |\n\t\t(levels <= 1).if {\n\t\t\t[self]\n\t\t} {\n\t\t\t[self.bubble(depth, levels - 1)]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self :depth :levels |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "J",
  "maxSizeAtDepth",
  ["self", "depth"],
  function (_self, _depth) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _depth";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _maxSize = 0;
    /* Statements */
    return _if_3(_equalsSign_2(_depth, 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _size_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _size = _if_3(_isCollection_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _maxSizeAtDepth_2(_each, _hyphenMinus_2(_depth, 1));
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        });
        /* Statements */
        return _ifTrue_2(_greaterThanSign_2(_size, _maxSize), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _maxSize = _size;
        });
      });
      return _maxSize;
    });
  },
  "{ :self :depth |\n\t\tlet maxSize = 0;\n\t\t(depth = 1).if {\n\t\t\tself.size\n\t\t} {\n\t\t\tself.do { :each |\n\t\t\t\tlet size = (each.isCollection).if {\n\t\t\t\t\teach.maxSizeAtDepth(depth - 1)\n\t\t\t\t} {\n\t\t\t\t\t1\n\t\t\t\t};\n\t\t\t\t(size > maxSize).ifTrue {\n\t\t\t\t\tmaxSize := size\n\t\t\t\t}\n\t\t\t};\n\t\t\tmaxSize\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "J",
  "bubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_depth, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_levels, 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_bubble_3(_self, _depth, _hyphenMinus_2(_levels, 1))];
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _bubble_3(_each, _hyphenMinus_2(_depth, 1), _levels);
      });
    });
  },
  "{ :self :depth :levels |\n\t\t(depth <= 0).if {\n\t\t\t(levels <= 1).if {\n\t\t\t\t[self]\n\t\t\t} {\n\t\t\t\t[self.bubble(depth, levels - 1)]\n\t\t\t}\n\t\t} {\n\t\t\tself.collect { :each |\n\t\t\t\teach.bubble(depth - 1, levels)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "J",
  "shapeIndicesDo",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _tuplesDo_2(
      _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _to_2(1, _each);
      }),
      _aBlock_1,
    );
  },
  "{ :self :aBlock:/1 |\n\t\tself.collect { :each |\n\t\t\t1.to(each)\n\t\t}.tuplesDo(aBlock:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "J",
  "shapeIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _tuples_1(_collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _to_2(1, _each);
    }));
  },
  "{ :self |\n\t\tself.collect { :each |\n\t\t\t1.to(each)\n\t\t}.tuples\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "J",
  "slice",
  ["self", "cuts"],
  function (_self, _cuts) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cuts";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_size_1(_cuts), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _copy_1(_self);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _firstCut = _first_1(_cuts);
      let _answer = _ifNil_3(_firstCut, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _copy_1(_self);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _atAll_2(_self, _asCollection_1(_firstCut));
      });
      /* Statements */
      return _if_3(_equalsSign_2(_size_1(_cuts), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _unbubble_3(_answer, 0, 1);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        _cuts = _allButFirst_1(_cuts);
        return _unbubble_3(
          _collect_2(_answer, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_isCollection_1(_each), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _slice_2(_each, _cuts);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                /* console.error(errorMessage); */
                throw new Error(errorMessage);
              } /* Statements */
              return _each;
            });
          }),
          0,
          1,
        );
      });
    });
  },
  "{ :self :cuts |\n\t\t(cuts.size = 0).if {\n\t\t\tself.copy\n\t\t} {\n\t\t\tlet firstCut = cuts.first;\n\t\t\tlet answer = firstCut.ifNil {\n\t\t\t\tself.copy\n\t\t\t} {\n\t\t\t\tself.atAll(firstCut.asCollection)\n\t\t\t};\n\t\t\t(cuts.size = 1).if {\n\t\t\t\tanswer.unbubble(0, 1)\n\t\t\t} {\n\t\t\t\tcuts := cuts.allButFirst;\n\t\t\t\tanswer.collect { :each |\n\t\t\t\t\teach.isCollection.if {\n\t\t\t\t\t\teach.slice(cuts)\n\t\t\t\t\t} {\n\t\t\t\t\t\teach\n\t\t\t\t\t}\n\t\t\t\t}.unbubble(0, 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "J",
  "unbubble",
  ["self", "depth", "levels"],
  function (_self, _depth, _levels) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _depth, _levels";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_lessThanSignEqualsSign_2(_depth, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_size_1(_self), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _self;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_lessThanSignEqualsSign_2(_levels, 1), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _first_1(_self);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _unbubble_3(
            _first_1(_self),
            _depth,
            _hyphenMinus_2(_levels, 1),
          );
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _unbubble_3(_each, _hyphenMinus_2(_depth, 1), 1);
      });
    });
  },
  "{ :self :depth :levels |\n\t\t(depth <= 0).if {\n\t\t\t(self.size > 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(levels <= 1).if {\n\t\t\t\t\tself.first\n\t\t\t\t} {\n\t\t\t\t\tself.first.unbubble(depth, levels - 1)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tself.collect { :each |\n\t\t\t\teach.unbubble(depth - 1, 1)\n\t\t\t}\n\t\t}\n\t}",
);
