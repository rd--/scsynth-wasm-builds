sl.addType(
  false,
  "Cons",
  "Cons",
  ["Object", "Iterable", "Collection"],
  ["car", "cdr"],
);

sl.copyTraitToType(
  "Object",
  "Cons",
);

sl.copyTraitToType(
  "Iterable",
  "Cons",
);

sl.copyTraitToType(
  "Collection",
  "Cons",
);

sl.addMethod(
  "Cons",
  "Cons",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isCons_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_car_1(_self), _car_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_cdr_1(_self), _cdr_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCons & {\n\t\t\tself.car = anObject.car & {\n\t\t\t\tself.cdr = anObject.cdr\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "collect",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _Cons_2(_aBlock_1(_each), _answer);
    });
    return _reversed_1(_answer);
  },
  "{ :self :aBlock:/1 |\n\t\tlet answer = nil;\n\t\tself.do { :each |\n\t\t\tanswer := Cons(aBlock(each), answer)\n\t\t};\n\t\tanswer.reversed\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "depth",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 1;
    let _next = _car_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _plusSign_2(_answer, 1);
      return _next = _car_1(_next);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 1;\n\t\tlet next = self.car;\n\t\t{\n\t\t\tnext.isCons\n\t\t}.whileTrue {\n\t\t\tanswer := answer + 1;\n\t\t\tnext := next.car\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "do",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _cdr_1(_self);
    /* Statements */
    _aBlock_1(_car_1(_self));
    return _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _aBlock_1(_car_1(_next));
      return _next = _cdr_1(_next);
    });
  },
  "{ :self :aBlock:/1 |\n\t\tlet next = self.cdr;\n\t\taBlock(self.car);\n\t\t{\n\t\t\tnext.isCons\n\t\t}.whileTrue {\n\t\t\taBlock(next.car);\n\t\t\tnext := next.cdr\n\t\t}\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "isList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _next = _cdr_1(_next);
    });
    return _equalsSign_2(_next, null);
  },
  "{ :self |\n\t\tlet next = self.cdr;\n\t\t{\n\t\t\tnext.isCons\n\t\t}.whileTrue {\n\t\t\tnext := next.cdr\n\t\t};\n\t\tnext = nil\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "length",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 1;
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _plusSign_2(_answer, 1);
      return _next = _cdr_1(_next);
    });
    return _if_3(_equalsSign_2(_next, null), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("Cons>>length: not proper list");
    });
  },
  "{ :self |\n\t\tlet answer = 1;\n\t\tlet next = self.cdr;\n\t\t{\n\t\t\tnext.isCons\n\t\t}.whileTrue {\n\t\t\tanswer := answer + 1;\n\t\t\tnext := next.cdr\n\t\t};\n\t\t(next = nil).if {\n\t\t\tanswer\n\t\t} {\n\t\t\t'Cons>>length: not proper list'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "Cons",
  "Cons",
  "reversed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Cons_2(_car_1(_self), null);
    let _next = _cdr_1(_self);
    /* Statements */
    _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _isCons_1(_next);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _answer = _Cons_2(_car_1(_next), _answer);
      return _next = _cdr_1(_next);
    });
    return _if_3(_equalsSign_2(_next, null), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_1("Cons>>reversed: not proper list");
    });
  },
  "{ :self |\n\t\tlet answer = Cons(self.car, nil);\n\t\tlet next = self.cdr;\n\t\t{\n\t\t\tnext.isCons\n\t\t}.whileTrue {\n\t\t\tanswer := Cons(next.car, answer);\n\t\t\tnext := next.cdr\n\t\t};\n\t\t(next = nil).if {\n\t\t\tanswer\n\t\t} {\n\t\t\t'Cons>>reversed: not proper list'.error\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Cons",
  "Cons",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = null;
    /* Statements */
    _do_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _answer = _Cons_2(
        _if_3(_isSequence_1(_each), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _Cons_1(_each);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _each;
        }),
        _answer,
      );
    });
    return _reversed_1(_answer);
  },
  "{ :self |\n\t\tlet answer = nil;\n\t\tself.do { :each |\n\t\t\tanswer := Cons(\n\t\t\t\teach.isSequence.if {\n\t\t\t\t\tCons(each)\n\t\t\t\t} {\n\t\t\t\t\teach\n\t\t\t\t},\n\t\t\t\tanswer\n\t\t\t)\n\t\t};\n\t\tanswer.reversed\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Cons",
  "Cons",
  ["car", "cdr"],
  function (_car, _cdr) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _car, _cdr";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCons_0(), _car, _cdr);
  },
  "{ :car :cdr |\n\t\tnewCons().initializeSlots(car, cdr)\n\t}",
);
