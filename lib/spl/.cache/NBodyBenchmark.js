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
  sl.annotateFunction(function (_self, _px, _py, _pz) {
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
  }, ["self", "px", "py", "pz"]),
  "{ :self :px :py :pz |\n\t\tlet solarMass = 4.pi.pi;\n\t\tself.vx := 0.0 - (px / solarMass);\n\t\tself.vy := 0.0 - (py / solarMass);\n\t\tself.vz := 0.0 - (pz / solarMass)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "NBodyBenchmark",
  "Body",
  ["x", "y", "z", "vx", "vy", "vz", "mass"],
  sl.annotateFunction(function (_x, _y, _z, _vx, _vy, _vz, _mass) {
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
  }, ["x", "y", "z", "vx", "vy", "vz", "mass"]),
  "{ :x :y :z :vx :vy :vz :mass |\n\t\tlet daysPerYear = 365.24;\n\t\tlet solarMass = 4.pi.pi;\n\t\tnewBody().initializeSlots(\n\t\t\tx, y, z,\n\t\t\tvx * daysPerYear, vy * daysPerYear, vz * daysPerYear,\n\t\t\tmass * solarMass\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Jupiter",
  [],
  sl.annotateFunction(function () {
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
  }, []),
  "{\n\t\tBody(\n\t\t\t4.841431442464721,\n\t\t\t-1.1603200440274284,\n\t\t\t-0.10362204447112311,\n\t\t\t0.001660076642744037,\n\t\t\t0.007699011184197404,\n\t\t\t-0.0000690460016972063,\n\t\t\t0.0009547919384243266\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Saturn",
  [],
  sl.annotateFunction(function () {
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
  }, []),
  "{\n\t\tBody(\n\t\t\t8.34336671824458,\n\t\t\t4.124798564124305,\n\t\t\t-0.4035234171143214,\n\t\t\t-0.002767425107268624,\n\t\t\t0.004998528012349172,\n\t\t\t0.000023041729757376393,\n\t\t\t0.0002858859806661308\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Uranus",
  [],
  sl.annotateFunction(function () {
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
  }, []),
  "{\n\t\tBody(\n\t\t\t12.894369562139131,\n\t\t\t-15.111151401698631,\n\t\t\t-0.22330757889265573,\n\t\t\t0.002964601375647616,\n\t\t\t0.0023784717395948095,\n\t\t\t-0.000029658956854023756,\n\t\t\t0.00004366244043351563\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Neptune",
  [],
  sl.annotateFunction(function () {
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
  }, []),
  "{\n\t\tBody(\n\t\t\t15.379697114850917,\n\t\t\t-25.919314609987964,\n\t\t\t0.17925877295037118,\n\t\t\t0.0026806777249038932,\n\t\t\t0.001628241700382423,\n\t\t\t-0.00009515922545197159,\n\t\t\t0.000051513890204661145\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "Sun",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Body_7(0, 0, 0, 0, 0, 0, 1);
  }, []),
  "{\n\t\tBody(0, 0, 0, 0, 0, 0, 1)\n\t}",
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
  sl.annotateFunction(function (_self, _dt) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dt";
      throw new Error(errorMessage);
    } /* Statements */
    _toDo_3(
      1,
      _size_1(_bodies_1(_self)),
      sl.annotateFunction(function (_i) {
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
          sl.annotateFunction(function (_j) {
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
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _do_2(
      _bodies_1(_self),
      sl.annotateFunction(function (_body) {
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
      }, ["body"]),
    );
  }, ["self", "dt"]),
  "{ :self :dt |\n\t\t1.toDo(self.bodies.size) { :i |\n\t\t\tlet iBody = self.bodies[i];\n\t\t\t(i + 1).toDo(self.bodies.size) { :j |\n\t\t\t\tlet jBody = self.bodies[j];\n\t\t\t\tlet dx = iBody.x - jBody.x;\n\t\t\t\tlet dy = iBody.y - jBody.y;\n\t\t\t\tlet dz = iBody.z - jBody.z;\n\t\t\t\tlet dSquared = (dx * dx) + (dy * dy) + (dz * dz);\n\t\t\t\tlet distance = dSquared.sqrt;\n\t\t\t\tlet mag = dt / (dSquared * distance);\n\t\t\t\tiBody.vx := iBody.vx - (dx * jBody.mass * mag);\n\t\t\t\tiBody.vy := iBody.vy - (dy * jBody.mass * mag);\n\t\t\t\tiBody.vz := iBody.vz - (dz * jBody.mass * mag);\n\t\t\t\tjBody.vx := jBody.vx + (dx * iBody.mass * mag);\n\t\t\t\tjBody.vy := jBody.vy + (dy * iBody.mass * mag);\n\t\t\t\tjBody.vz := jBody.vx + (dz * iBody.mass * mag)\n\t\t\t}\n\t\t};\n\t\tself.bodies.do { :body |\n\t\t\tbody.x := body.x + (dt * body.vx);\n\t\t\tbody.y := body.y + (dt * body.vy);\n\t\t\tbody.z := body.z + (dt * body.vz)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "NBodySystem",
  "NBodyBenchmark",
  "energy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = 0.0;
    /* Statements */
    _toDo_3(
      1,
      _size_1(_bodies_1(_self)),
      sl.annotateFunction(function (_i) {
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
          sl.annotateFunction(function (_j) {
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
          }, ["j"]),
        );
      }, ["i"]),
    );
    return _e;
  }, ["self"]),
  "{ :self |\n\t\tlet e = 0.0;\n\t\t1.toDo(self.bodies.size) { :i |\n\t\t\tlet iBody = self.bodies[i];\n\t\t\te := e + (0.5 *\n\t\t\t\tiBody.mass *\n\t\t\t\t(\n\t\t\t\t\t(iBody.vx * iBody.vx) +\n\t\t\t\t\t(iBody.vy * iBody.vy) +\n\t\t\t\t\t(iBody.vz * iBody.vz)\n\t\t\t\t)\n\t\t\t);\n\t\t\t(i + 1).toDo(self.bodies.size) { :j |\n\t\t\t\tlet jBody = self.bodies[j];\n\t\t\t\tlet dx = iBody.x - jBody.x;\n\t\t\t\tlet dy = iBody.y - jBody.y;\n\t\t\t\tlet dz = iBody.z - jBody.z;\n\t\t\t\tlet distance = ((dx * dx) + (dy * dy) + (dz * dz)).sqrt;\n\t\t\t\te := e - ((iBody.mass * jBody.mass) / distance)\n\t\t\t}\n\t\t};\n\t\te\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "NBodySystem",
  [],
  sl.annotateFunction(function () {
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
    _do_2(
      _bodies,
      sl.annotateFunction(function (_b) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _b";
          throw new Error(errorMessage);
        } /* Statements */
        _px = _plusSign_2(_px, _asterisk_2(_vx_1(_b), _mass_1(_b)));
        _py = _plusSign_2(_py, _asterisk_2(_vy_1(_b), _mass_1(_b)));
        return _pz = _plusSign_2(_pz, _asterisk_2(_vz_1(_b), _mass_1(_b)));
      }, ["b"]),
    );
    _offsetMomentumXyz_4(_at_2(_bodies, 1), _px, _py, _pz);
    return _initializeSlots_2(_newNBodySystem_0(), _bodies);
  }, []),
  "{\n\t\tlet px = 0;\n\t\tlet py = 0;\n\t\tlet pz = 0;\n\t\tlet bodies = [Sun(), Jupiter(), Saturn(), Uranus(), Neptune()];\n\t\tbodies.do { :b |\n\t\t\tpx := px + (b.vx * b.mass);\n\t\t\tpy := py + (b.vy * b.mass);\n\t\t\tpz := pz + (b.vz * b.mass)\n\t\t};\n\t\tbodies[1].offsetMomentumXyz(px, py, pz);\n\t\tnewNBodySystem().initializeSlots(bodies)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "NBodyBenchmark",
  "NBodyBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _Benchmark_3(
      "NBody",
      _Map_1([[1, -0.16907495402506745], [250000, -0.1690859889909308]]),
      sl.annotateFunction(function (_iterations) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _iterations";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _system = _NBodySystem_0();
        /* Statements */
        _timesRepeat_2(
          _iterations,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _advance_2(_system, 0.01);
          }, []),
        );
        return _energy_1(_system);
      }, ["iterations"]),
    );
  }, []),
  "{\n\t\tBenchmark('NBody', [\n\t\t\t1: -0.16907495402506745,\n\t\t\t250000: -0.1690859889909308\n\t\t]) { :iterations |\n\t\t\tlet system = NBodySystem();\n\t\t\titerations.timesRepeat {\n\t\t\t\tsystem.advance(0.01)\n\t\t\t};\n\t\t\tsystem.energy\n\t\t}\n\t}",
);
