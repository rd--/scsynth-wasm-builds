/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "Matrix33",
  "Matrix33",
  ["Object"],
  ["elements"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Matrix33",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "equalsSign",
  ["self", "aMatrix"],
  function (_self, _aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMatrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isMatrix33_1(_aMatrix), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_elements_1(_self), _elements_1(_aMatrix));
    });
  },
  "{ :self :aMatrix | &(isMatrix33(aMatrix), { =(elements(self), elements(aMatrix)) }) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "applyTo",
  ["self", "vector"],
  function (_self, _vector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vector";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL93 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SPL93, 1);
    let _b = _at_2(__SPL93, 2);
    let _c = _at_2(__SPL93, 3);
    let _d = _at_2(__SPL93, 4);
    let _e = _at_2(__SPL93, 5);
    let _f = _at_2(__SPL93, 6);
    let _g = _at_2(__SPL93, 7);
    let _h = _at_2(__SPL93, 8);
    let _i = _at_2(__SPL93, 9);
    let __SPL94 = _assertIsOfSize_2(_asList_1(_vector), 3);
    let _x = _at_2(__SPL94, 1);
    let _y = _at_2(__SPL94, 2);
    let _z = _at_2(__SPL94, 3);
    /* Statements */
    return _CartesianCoordinates_3(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
        _asterisk_2(_c, _z),
      ),
      _plusSign_2(
        _plusSign_2(_asterisk_2(_d, _x), _asterisk_2(_e, _y)),
        _asterisk_2(_f, _z),
      ),
      _plusSign_2(
        _plusSign_2(_asterisk_2(_g, _x), _asterisk_2(_h, _y)),
        _asterisk_2(_i, _z),
      ),
    );
  },
  "{ :self :vector | let __SPL93 = assertIsOfSize(elements(self), 9); let a = at(__SPL93, 1); let b = at(__SPL93, 2); let c = at(__SPL93, 3); let d = at(__SPL93, 4); let e = at(__SPL93, 5); let f = at(__SPL93, 6); let g = at(__SPL93, 7); let h = at(__SPL93, 8); let i = at(__SPL93, 9); let __SPL94 = assertIsOfSize(asList(vector), 3); let x = at(__SPL94, 1); let y = at(__SPL94, 2); let z = at(__SPL94, 3); CartesianCoordinates(+(+((*(a, x)), (*(b, y))), (*(c, z))), +(+((*(d, x)), (*(e, y))), (*(f, z))), +(+((*(g, x)), (*(h, y))), (*(i, z)))) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_elements_1(_self));
  },
  "{ :self | copy(elements(self)) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "copy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMatrix33_1(_copy_1(_elements_1(_self)));
  },
  "{ :self | asMatrix33(copy(elements(self))) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "determinant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL95 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SPL95, 1);
    let _b = _at_2(__SPL95, 2);
    let _c = _at_2(__SPL95, 3);
    let _d = _at_2(__SPL95, 4);
    let _e = _at_2(__SPL95, 5);
    let _f = _at_2(__SPL95, 6);
    let _g = _at_2(__SPL95, 7);
    let _h = _at_2(__SPL95, 8);
    let _i = _at_2(__SPL95, 9);
    /* Statements */
    return _hyphenMinus_2(
      _hyphenMinus_2(
        _hyphenMinus_2(
          _plusSign_2(
            _plusSign_2(
              _asterisk_2(_asterisk_2(_a, _e), _i),
              _asterisk_2(_asterisk_2(_b, _f), _g),
            ),
            _asterisk_2(_asterisk_2(_c, _d), _h),
          ),
          _asterisk_2(_asterisk_2(_c, _e), _g),
        ),
        _asterisk_2(_asterisk_2(_b, _d), _i),
      ),
      _asterisk_2(_asterisk_2(_a, _f), _h),
    );
  },
  "{ :self | let __SPL95 = assertIsOfSize(elements(self), 9); let a = at(__SPL95, 1); let b = at(__SPL95, 2); let c = at(__SPL95, 3); let d = at(__SPL95, 4); let e = at(__SPL95, 5); let f = at(__SPL95, 6); let g = at(__SPL95, 7); let h = at(__SPL95, 8); let i = at(__SPL95, 9); -(-(-(+(+((*(*(a, e), i)), (*(*(b, f), g))), (*(*(c, d), h))), (*(*(c, e), g))), (*(*(b, d), i))), (*(*(a, f), h))) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "inverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _invert_1(_copy_1(_self));
  },
  "{ :self | invert(copy(self)) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "invert",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL96 = _assertIsOfSize_2(_elements_1(_self), 9);
    let _a = _at_2(__SPL96, 1);
    let _b = _at_2(__SPL96, 2);
    let _c = _at_2(__SPL96, 3);
    let _d = _at_2(__SPL96, 4);
    let _e = _at_2(__SPL96, 5);
    let _f = _at_2(__SPL96, 6);
    let _g = _at_2(__SPL96, 7);
    let _h = _at_2(__SPL96, 8);
    let _i = _at_2(__SPL96, 9);
    /* Statements */
    _elements_2(
      _self,
      _asterisk_2(_determinant_1(_self), [
        _hyphenMinus_2(_asterisk_2(_e, _i), _asterisk_2(_f, _h)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_b, _i), _asterisk_2(_c, _h))),
        _hyphenMinus_2(_asterisk_2(_b, _f), _asterisk_2(_c, _e)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_d, _i), _asterisk_2(_f, _g))),
        _hyphenMinus_2(_asterisk_2(_a, _i), _asterisk_2(_c, _g)),
        _negated_1(_hyphenMinus_2(_asterisk_2(_a, _f), _asterisk_2(_c, _d))),
        _hyphenMinus_2(_asterisk_2(_d, _h), _asterisk_2(_e, _g)),
        _hyphenMinus_2(_negated_1(_asterisk_2(_a, _h)), _asterisk_2(_b, _g)),
        _hyphenMinus_2(_asterisk_2(_a, _e), _asterisk_2(_b, _d)),
      ]),
    );
    return _self;
  },
  "{ :self | let __SPL96 = assertIsOfSize(elements(self), 9); let a = at(__SPL96, 1); let b = at(__SPL96, 2); let c = at(__SPL96, 3); let d = at(__SPL96, 4); let e = at(__SPL96, 5); let f = at(__SPL96, 6); let g = at(__SPL96, 7); let h = at(__SPL96, 8); let i = at(__SPL96, 9); elements(self, *(determinant(self), [-((*(e, i)), (*(f, h))), negated((-((*(b, i)), (*(c, h))))), -((*(b, f)), (*(c, e))), negated((-((*(d, i)), (*(f, g))))), -((*(a, i)), (*(c, g))), negated((-((*(a, f)), (*(c, d))))), -((*(d, h)), (*(e, g))), (-(negated((*(a, h))), (*(b, g)))), -((*(a, e)), (*(b, d)))])); self }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "identity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  },
  "{ :self | elements(self, [1, 0, 0, 0, 1, 0, 0, 0, 1]) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "xy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 1, 0, 0, 0, 0]);
  },
  "{ :self | elements(self, [1, 0, 0, 0, 1, 0, 0, 0, 0]) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "xz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [1, 0, 0, 0, 0, 1, 0, 0, 0]);
  },
  "{ :self | elements(self, [1, 0, 0, 0, 0, 1, 0, 0, 0]) }",
);

sl.addMethodToExistingType(
  "Matrix33",
  "Matrix33",
  "yz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _elements_2(_self, [0, 1, 0, 0, 0, 1, 0, 0, 0]);
  },
  "{ :self | elements(self, [0, 1, 0, 0, 0, 1, 0, 0, 0]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Matrix33",
  "Matrix33",
  ["self", "b", "c", "d", "e", "f", "g", "h", "i"],
  function (_self, _b, _c, _d, _e, _f, _g, _h, _i) {
    /* ArityCheck */
    if (arguments.length !== 9) {
      const errorMessage =
        "Arity: expected 9, _self, _b, _c, _d, _e, _f, _g, _h, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _asMatrix33_1([_self, _b, _c, _d, _e, _f, _g, _h, _i]);
  },
  "{ :self :b :c :d :e :f :g :h :i | asMatrix33([self, b, c, d, e, f, g, h, i]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Matrix33",
  "asMatrix33",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_tildeEqualsSign_2(_size_1(_self), 9), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "List>>asMatrix33: not 9-element array");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_2(_newMatrix33_0(), _self);
    });
  },
  "{ :self | if((~=(size(self), 9)), { error(self,'List>>asMatrix33: not 9-element array') }, { initializeSlots(newMatrix33(),self) }) }",
);
