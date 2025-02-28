/*  Requires: Benchmark  */

sl.addType(
  false,
  "Body",
  "NBodyBenchmark",
  ["Object"],
  ["x", "y", "z", "vx", "vy", "vz", "mass"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Body",
);

sl.addMethodToExistingType(
  "Body",
  "NBodyBenchmark",
  "offsetMomentumXyz",
  ["self", "px", "py", "pz"],
  function (_self, _px, _py, _pz) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _px, _py, _pz";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _solarMass = _pi_1(_pi_1(4));
    /* Statements */
    _vx_2(_self, _hyphenMinus_2(0.0, _solidus_2(_px, _solarMass)));
    _vy_2(_self, _hyphenMinus_2(0.0, _solidus_2(_py, _solarMass)));
    return _vz_2(_self, _hyphenMinus_2(0.0, _solidus_2(_pz, _solarMass)));
  },
  "{ :self :px :py :pz | let solarMass = pi(pi(4)); vx(self, -(0.0, (/(px, solarMass)))); vy(self, -(0.0, (/(py, solarMass)))); vz(self, -(0.0, (/(pz, solarMass)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NBodyBenchmark",
  "Body",
  ["x", "y", "z", "vx", "vy", "vz", "mass"],
  function (_x, _y, _z, _vx, _vy, _vz, _mass) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _x, _y, _z, _vx, _vy, _vz, _mass";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _daysPerYear = 365.24;
    let _solarMass = _pi_1(_pi_1(4));
    /* Statements */
    return _initializeSlots_8(
      _newBody_0(),
      _x,
      _y,
      _z,
      _asterisk_2(_vx, _daysPerYear),
      _asterisk_2(_vy, _daysPerYear),
      _asterisk_2(_vz, _daysPerYear),
      _asterisk_2(_mass, _solarMass),
    );
  },
  "{ :x :y :z :vx :vy :vz :mass | let daysPerYear = 365.24; let solarMass = pi(pi(4)); initializeSlots(newBody(),x, y, z, *(vx, daysPerYear), *(vy, daysPerYear), *(vz, daysPerYear), *(mass, solarMass)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Jupiter",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(
      4.841431442464721,
      -1.1603200440274284,
      -0.10362204447112311,
      0.001660076642744037,
      0.007699011184197404,
      -0.0000690460016972063,
      0.0009547919384243266,
    );
  },
  "{ Body(4.841431442464721, -1.1603200440274284, -0.10362204447112311, 0.001660076642744037, 0.007699011184197404, -0.0000690460016972063, 0.0009547919384243266) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Saturn",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(
      8.34336671824458,
      4.124798564124305,
      -0.4035234171143214,
      -0.002767425107268624,
      0.004998528012349172,
      0.000023041729757376393,
      0.0002858859806661308,
    );
  },
  "{ Body(8.34336671824458, 4.124798564124305, -0.4035234171143214, -0.002767425107268624, 0.004998528012349172, 0.000023041729757376393, 0.0002858859806661308) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Uranus",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(
      12.894369562139131,
      -15.111151401698631,
      -0.22330757889265573,
      0.002964601375647616,
      0.0023784717395948095,
      -0.000029658956854023756,
      0.00004366244043351563,
    );
  },
  "{ Body(12.894369562139131, -15.111151401698631, -0.22330757889265573, 0.002964601375647616, 0.0023784717395948095, -0.000029658956854023756, 0.00004366244043351563) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Neptune",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(
      15.379697114850917,
      -25.919314609987964,
      0.17925877295037118,
      0.0026806777249038932,
      0.001628241700382423,
      -0.00009515922545197159,
      0.000051513890204661145,
    );
  },
  "{ Body(15.379697114850917, -25.919314609987964, 0.17925877295037118, 0.0026806777249038932, 0.001628241700382423, -0.00009515922545197159, 0.000051513890204661145) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Sun",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(0, 0, 0, 0, 0, 0, 1);
  },
  "{ Body(0, 0, 0, 0, 0, 0, 1) }",
);

sl.addType(
  false,
  "NBodySystem",
  "NBodyBenchmark",
  ["Object"],
  ["bodies"],
);

sl.copyTraitMethodsToType(
  "Object",
  "NBodySystem",
);

sl.addMethodToExistingType(
  "NBodySystem",
  "NBodyBenchmark",
  "advance",
  ["self", "dt"],
  function (_self, _dt) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dt";
      throw new Error(errorMessage);
    } /* Statements */
    _toDo_3(1, _size_1(_bodies_1(_self)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _iBody = _at_2(_bodies_1(_self), _i);
      /* Statements */
      return _toDo_3(
        _plusSign_2(_i, 1),
        _size_1(_bodies_1(_self)),
        function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _jBody = _at_2(_bodies_1(_self), _j);
          let _dx = _hyphenMinus_2(_x_1(_iBody), _x_1(_jBody));
          let _dy = _hyphenMinus_2(_y_1(_iBody), _y_1(_jBody));
          let _dz = _hyphenMinus_2(_z_1(_iBody), _z_1(_jBody));
          let _dSquared = _plusSign_2(
            _plusSign_2(_asterisk_2(_dx, _dx), _asterisk_2(_dy, _dy)),
            _asterisk_2(_dz, _dz),
          );
          let _distance = _sqrt_1(_dSquared);
          let _mag = _solidus_2(_dt, _asterisk_2(_dSquared, _distance));
          /* Statements */
          _vx_2(
            _iBody,
            _hyphenMinus_2(
              _vx_1(_iBody),
              _asterisk_2(_asterisk_2(_dx, _mass_1(_jBody)), _mag),
            ),
          );
          _vy_2(
            _iBody,
            _hyphenMinus_2(
              _vy_1(_iBody),
              _asterisk_2(_asterisk_2(_dy, _mass_1(_jBody)), _mag),
            ),
          );
          _vz_2(
            _iBody,
            _hyphenMinus_2(
              _vz_1(_iBody),
              _asterisk_2(_asterisk_2(_dz, _mass_1(_jBody)), _mag),
            ),
          );
          _vx_2(
            _jBody,
            _plusSign_2(
              _vx_1(_jBody),
              _asterisk_2(_asterisk_2(_dx, _mass_1(_iBody)), _mag),
            ),
          );
          _vy_2(
            _jBody,
            _plusSign_2(
              _vy_1(_jBody),
              _asterisk_2(_asterisk_2(_dy, _mass_1(_iBody)), _mag),
            ),
          );
          return _vz_2(
            _jBody,
            _plusSign_2(
              _vx_1(_jBody),
              _asterisk_2(_asterisk_2(_dz, _mass_1(_iBody)), _mag),
            ),
          );
        },
      );
    });
    return _do_2(_bodies_1(_self), function (_body) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _body";
        throw new Error(errorMessage);
      } /* Statements */
      _x_2(_body, _plusSign_2(_x_1(_body), _asterisk_2(_dt, _vx_1(_body))));
      _y_2(_body, _plusSign_2(_y_1(_body), _asterisk_2(_dt, _vy_1(_body))));
      return _z_2(
        _body,
        _plusSign_2(_z_1(_body), _asterisk_2(_dt, _vz_1(_body))),
      );
    });
  },
  "{ :self :dt | toDo(1, size(bodies(self)), { :i | let iBody = at(bodies(self), i); toDo((+(i, 1)), size(bodies(self)), { :j | let jBody = at(bodies(self), j); let dx = -(x(iBody), x(jBody)); let dy = -(y(iBody), y(jBody)); let dz = -(z(iBody), z(jBody)); let dSquared = +(+((*(dx, dx)), (*(dy, dy))), (*(dz, dz))); let distance = sqrt(dSquared); let mag = /(dt, (*(dSquared, distance))); vx(iBody, -(vx(iBody), (*(*(dx, mass(jBody)), mag)))); vy(iBody, -(vy(iBody), (*(*(dy, mass(jBody)), mag)))); vz(iBody, -(vz(iBody), (*(*(dz, mass(jBody)), mag)))); vx(jBody, +(vx(jBody), (*(*(dx, mass(iBody)), mag)))); vy(jBody, +(vy(jBody), (*(*(dy, mass(iBody)), mag)))); vz(jBody, +(vx(jBody), (*(*(dz, mass(iBody)), mag)))) }) }); do(bodies(self), { :body | x(body, +(x(body), (*(dt, vx(body))))); y(body, +(y(body), (*(dt, vy(body))))); z(body, +(z(body), (*(dt, vz(body))))) }) }",
);

sl.addMethodToExistingType(
  "NBodySystem",
  "NBodyBenchmark",
  "energy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = 0.0;
    /* Statements */
    _toDo_3(1, _size_1(_bodies_1(_self)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _iBody = _at_2(_bodies_1(_self), _i);
      /* Statements */
      _e = _plusSign_2(
        _e,
        _asterisk_2(
          _asterisk_2(0.5, _mass_1(_iBody)),
          _plusSign_2(
            _plusSign_2(
              _asterisk_2(_vx_1(_iBody), _vx_1(_iBody)),
              _asterisk_2(_vy_1(_iBody), _vy_1(_iBody)),
            ),
            _asterisk_2(_vz_1(_iBody), _vz_1(_iBody)),
          ),
        ),
      );
      return _toDo_3(
        _plusSign_2(_i, 1),
        _size_1(_bodies_1(_self)),
        function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _jBody = _at_2(_bodies_1(_self), _j);
          let _dx = _hyphenMinus_2(_x_1(_iBody), _x_1(_jBody));
          let _dy = _hyphenMinus_2(_y_1(_iBody), _y_1(_jBody));
          let _dz = _hyphenMinus_2(_z_1(_iBody), _z_1(_jBody));
          let _distance = _sqrt_1(
            _plusSign_2(
              _plusSign_2(_asterisk_2(_dx, _dx), _asterisk_2(_dy, _dy)),
              _asterisk_2(_dz, _dz),
            ),
          );
          /* Statements */
          return _e = _hyphenMinus_2(
            _e,
            _solidus_2(
              _asterisk_2(_mass_1(_iBody), _mass_1(_jBody)),
              _distance,
            ),
          );
        },
      );
    });
    return _e;
  },
  "{ :self | let e = 0.0; toDo(1, size(bodies(self)), { :i | let iBody = at(bodies(self), i); e := +(e, (*(*(0.5, mass(iBody)), (+(+((*(vx(iBody), vx(iBody))), (*(vy(iBody), vy(iBody)))), (*(vz(iBody), vz(iBody)))))))); toDo((+(i, 1)), size(bodies(self)), { :j | let jBody = at(bodies(self), j); let dx = -(x(iBody), x(jBody)); let dy = -(y(iBody), y(jBody)); let dz = -(z(iBody), z(jBody)); let distance = sqrt((+(+((*(dx, dx)), (*(dy, dy))), (*(dz, dz))))); e := -(e, (/((*(mass(iBody), mass(jBody))), distance))) }) }); e }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "NBodySystem",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _px = 0;
    let _py = 0;
    let _pz = 0;
    let _bodies = [
      _Sun_0(),
      _Jupiter_0(),
      _Saturn_0(),
      _Uranus_0(),
      _Neptune_0(),
    ];
    /* Statements */
    _do_2(_bodies, function (_b) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _b";
        throw new Error(errorMessage);
      } /* Statements */
      _px = _plusSign_2(_px, _asterisk_2(_vx_1(_b), _mass_1(_b)));
      _py = _plusSign_2(_py, _asterisk_2(_vy_1(_b), _mass_1(_b)));
      return _pz = _plusSign_2(_pz, _asterisk_2(_vz_1(_b), _mass_1(_b)));
    });
    _offsetMomentumXyz_4(_at_2(_bodies, 1), _px, _py, _pz);
    return _initializeSlots_2(_newNBodySystem_0(), _bodies);
  },
  "{ let px = 0; let py = 0; let pz = 0; let bodies = [Sun(), Jupiter(), Saturn(), Uranus(), Neptune()]; do(bodies, { :b | px := +(px, (*(vx(b), mass(b)))); py := +(py, (*(vy(b), mass(b)))); pz := +(pz, (*(vz(b), mass(b)))) }); offsetMomentumXyz(at(bodies, 1),px, py, pz); initializeSlots(newNBodySystem(),bodies) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "NBodyBenchmark",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "NBody",
      _asMap_1([
        _hyphenMinusGreaterThanSign_2(1, -0.16907495402506745),
        _hyphenMinusGreaterThanSign_2(250000, -0.1690859889909308),
      ]),
      function (_iterations) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iterations";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _system = _NBodySystem_0();
        /* Statements */
        _timesRepeat_2(_iterations, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _advance_2(_system, 0.01);
        });
        return _energy_1(_system);
      },
    );
  },
  "{ Benchmark('NBody', asMap([->(1, -0.16907495402506745), ->(250000, -0.1690859889909308)]), { :iterations | let system = NBodySystem(); timesRepeat(iterations, { advance(system,0.01) }); energy(system) }) }",
);
