sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DoyleSpiral",
  "doyleSpiralParameters",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Primitive */
    let p = _p;
    let q = _q;
    let pow = Math.pow;
    let sin = Math.sin;
    let cos = Math.cos;
    let pi = Math.PI;
    let _d = function (z, t, p, q) {
      let w = pow(z, p / q);
      let s = (p * t + 2 * pi) / q;
      return (
        pow(z * cos(t) - w * cos(s), 2) +
        pow(z * sin(t) - w * sin(s), 2)
      );
    };
    let ddz_d = function (z, t, p, q) {
      let w = pow(z, p / q);
      let s = (p * t + 2 * pi) / q;
      let ddz_w = (p / q) * pow(z, (p - q) / q);
      return (
        2 * (w * cos(s) - z * cos(t)) * (ddz_w * cos(s) - cos(t)) +
        2 * (w * sin(s) - z * sin(t)) * (ddz_w * sin(s) - sin(t))
      );
    };
    let ddt_d = function (z, t, p, q) {
      let w = pow(z, p / q);
      let s = (p * t + 2 * pi) / q;
      let dds_t = p / q;
      return (
        2 * (z * cos(t) - w * cos(s)) * (-z * sin(t) + w * sin(s) * dds_t) +
        2 * (z * sin(t) - w * sin(s)) * (z * cos(t) - w * cos(s) * dds_t)
      );
    };
    let _s = function (z, _t, p, q) {
      return pow(z + pow(z, p / q), 2);
    };
    let ddz_s = function (z, _t, p, q) {
      let w = pow(z, p / q);
      let ddz_w = (p / q) * pow(z, (p - q) / q);
      return 2 * (w + z) * (ddz_w + 1);
    };
    let _r = function (z, t, p, q) {
      return _d(z, t, p, q) / _s(z, t, p, q);
    };
    let ddz_r = function (z, t, p, q) {
      return (
        ddz_d(z, t, p, q) * _s(z, t, p, q) -
        _d(z, t, p, q) * ddz_s(z, t, p, q)
      ) / pow(_s(z, t, p, q), 2);
    };
    let ddt_r = function (z, t, p, q) {
      return (
        ddt_d(z, t, p, q) * _s(z, t, p, q)
      ) / pow(_s(z, t, p, q), 2);
    };
    let epsilon = 1e-10;
    let _f = function (z, t) {
      return _r(z, t, 0, 1) - _r(z, t, p, q);
    };
    let ddz_f = function (z, t) {
      return ddz_r(z, t, 0, 1) - ddz_r(z, t, p, q);
    };
    let ddt_f = function (z, t) {
      return ddt_r(z, t, 0, 1) - ddt_r(z, t, p, q);
    };
    let _g = function (z, t) {
      return _r(z, t, 0, 1) - _r(pow(z, p / q), (p * t + 2 * pi) / q, 0, 1);
    };
    let ddz_g = function (z, t) {
      return ddz_r(z, t, 0, 1) -
        ddz_r(pow(z, p / q), (p * t + 2 * pi) / q, 0, 1) * (p / q) *
          pow(z, (p - q) / q);
    };
    let ddt_g = function (z, t) {
      return ddt_r(z, t, 0, 1) -
        ddt_r(pow(z, p / q), (p * t + 2 * pi) / q, 0, 1) * (p / q);
    };
    let find_root = function (z, t) {
      for (;;) {
        let v_f = _f(z, t);
        let v_g = _g(z, t);
        if (
          -epsilon < v_f && v_f < epsilon && -epsilon < v_g && v_g < epsilon
        ) {
          return { ok: true, z: z, t: t, r: Math.sqrt(_r(z, t, 0, 1)) };
        }
        let a = ddz_f(z, t);
        let b = ddt_f(z, t);
        let c = ddz_g(z, t);
        let d = ddt_g(z, t);
        let det = a * d - b * c;
        if (-epsilon < det && det < epsilon) {
          return { ok: false };
        }
        z -= (d * v_f - b * v_g) / det;
        t -= (a * v_g - c * v_f) / det;
        if (z < epsilon) {
          return { ok: false };
        }
      }
    };
    let root = find_root(2, 0);
    if (!root.ok) {
      throw "Failed to find root for p=" + p + ", q=" + q;
    }
    let a = [root.z * cos(root.t), root.z * sin(root.t)];
    let coroot = { z: pow(root.z, p / q), t: (p * root.t + 2 * pi) / q };
    let b = [coroot.z * cos(coroot.t), coroot.z * sin(coroot.t)];
    return [_asComplex_1(a), _asComplex_1(b), root.r];
  }, ["p", "q"]),
  '{ :p :q | <primitive: let p = _p;\n\t\tlet q = _q;\n\t\tlet pow = Math.pow;\n\t\tlet sin = Math.sin;\n\t\tlet cos = Math.cos;\n\t\tlet pi = Math.PI;\n\t\tlet _d = function(z,t, p,q) {\n\t\t\tlet w = pow(z, p/q);\n\t\t\tlet s =(p*t + 2*pi)/q;\n\t\t\treturn (\n\t\t\t\tpow( z*cos(t) - w*cos(s), 2 )\n\t\t\t\t+ pow( z*sin(t) - w*sin(s), 2 )\n\t\t\t);\n\t\t};\n\t\tlet ddz_d = function(z,t, p,q) {\n\t\t\tlet w = pow(z, p/q);\n\t\t\tlet s = (p*t + 2*pi)/q;\n\t\t\tlet ddz_w = (p/q)*pow(z, (p-q)/q);\n\t\t\treturn (\n\t\t\t\t2*(w*cos(s) - z*cos(t))*(ddz_w*cos(s) - cos(t))\n\t\t\t\t+ 2*(w*sin(s) - z*sin(t))*(ddz_w*sin(s) - sin(t))\n\t\t\t);\n\t\t};\n\t\tlet ddt_d = function(z,t, p,q) {\n\t\t\tlet w = pow(z, p/q);\n\t\t\tlet s = (p*t + 2*pi)/q;\n\t\t\tlet dds_t = (p/q);\n\t\t\treturn (\n\t\t\t\t2*( z*cos(t) - w*cos(s) )*( -z*sin(t) + w*sin(s)*dds_t )\n\t\t\t\t+ 2*( z*sin(t) - w*sin(s) )*( z*cos(t) - w*cos(s)*dds_t )\n\t\t\t);\n\t\t};\n\t\tlet _s = function(z,_t, p,q) {\n\t\t\treturn pow(z + pow(z, p/q), 2);\n\t\t};\n\t\tlet ddz_s = function(z,_t, p,q) {\n\t\t\tlet w = pow(z, p/q);\n\t\t\tlet ddz_w = (p/q)*pow(z, (p-q)/q);\n\t\t\treturn 2*(w+z)*(ddz_w+1);\n\t\t};\n\t\tlet _r = function(z,t, p,q) {\n\t\t\treturn _d(z,t,p,q) / _s(z,t,p,q);\n\t\t};\n\t\tlet ddz_r = function(z,t, p,q) {\n\t\t\treturn (\n\t\t\t\tddz_d(z,t,p,q) * _s(z,t,p,q)\n\t\t\t\t- _d(z,t,p,q) * ddz_s(z,t,p,q)\n\t\t\t) / pow( _s(z,t,p,q), 2 );\n\t\t};\n\t\tlet ddt_r = function(z,t, p,q) {\n\t\t\treturn (\n\t\t\t\tddt_d(z,t,p,q) * _s(z,t,p,q)\n\t\t\t) / pow( _s(z,t,p,q), 2 );\n\t\t};\n\t\tlet epsilon = 1e-10;\n\t\tlet _f = function(z, t) {\n\t\t\treturn _r(z,t,0,1) - _r(z,t,p,q);\n\t\t};\n\t\tlet ddz_f = function(z, t) {\n\t\t\treturn ddz_r(z,t,0,1) - ddz_r(z,t,p,q);\n\t\t};\n\t\tlet ddt_f = function(z, t) {\n\t\t\treturn ddt_r(z,t,0,1) - ddt_r(z,t,p,q);\n\t\t};\n\t\tlet _g =  function(z, t) {\n\t\t\treturn _r(z,t,0,1) - _r(pow(z, p/q), (p*t + 2*pi)/q, 0,1);\n\t\t};\n\t\tlet ddz_g = function(z, t) {\n\t\t\treturn ddz_r(z,t,0,1) - ddz_r(pow(z, p/q), (p*t + 2*pi)/q, 0,1) * (p/q)*pow(z, (p-q)/q);\n\t\t};\n\t\tlet ddt_g = function(z, t) {\n\t\t\treturn ddt_r(z,t,0,1) - ddt_r(pow(z, p/q), (p*t + 2*pi)/q, 0,1) * (p/q);\n\t\t};\n\t\tlet find_root = function(z, t) {\n\t\t\tfor(;;) {\n\t\t\t\tlet v_f = _f(z, t);\n\t\t\t\tlet v_g = _g(z, t);\n\t\t\t\tif (-epsilon < v_f && v_f < epsilon && -epsilon < v_g && v_g < epsilon) {\n\t\t\t\t\treturn {ok: true, z: z, t: t, r: Math.sqrt(_r(z,t,0,1))};\n\t\t\t\t}\n\t\t\t\tlet a = ddz_f(z,t);\n\t\t\t\tlet b = ddt_f(z,t);\n\t\t\t\tlet c = ddz_g(z,t);\n\t\t\t\tlet d = ddt_g(z,t);\n\t\t\t\tlet det = a*d-b*c;\n\t\t\t\tif (-epsilon < det && det < epsilon) {\n\t\t\t\t\treturn {ok: false};\n\t\t\t\t}\n\t\t\t\tz -= (d*v_f - b*v_g)/det;\n\t\t\t\tt -= (a*v_g - c*v_f)/det;\n\t\t\t\tif (z < epsilon) {\n\t\t\t\t\treturn {ok: false};\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tlet root = find_root(2, 0);\n\t\tif (!root.ok) {\n\t\t\tthrow "Failed to find root for p=" + p + ", q=" + q;\n\t\t}\n\t\tlet a = [root.z * cos(root.t), root.z * sin(root.t) ];\n\t\tlet coroot = {z: pow(root.z, p/q), t: (p*root.t+2*pi)/q};\n\t\tlet b = [coroot.z * cos(coroot.t), coroot.z * sin(coroot.t) ];\n\t\treturn [_asComplex_1(a), _asComplex_1(b), root.r];>\n }',
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DoyleSpiral",
  "doyleSpiralArm",
  ["r", "z", "delta", "limit"],
  sl.annotateFunction(function (_r, _z, _delta, _limit) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _r, _z, _delta, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _recipDelta = _solidus_2(1, _delta);
    let _modDelta = _abs_1(_delta);
    let _modRecipDelta = _solidus_2(1, _modDelta);
    let __SPL130 = _assertIsOfSize_2(_limit, 2);
    let _minD = _at_2(__SPL130, 1);
    let _maxD = _at_2(__SPL130, 2);
    let _q = _z;
    let _modQ = _abs_1(_q);
    let _answer = [];
    let _count = 0;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_modQ, _maxD);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _Circle_2(_asList_1(_q), _asterisk_2(_modQ, _r)));
        _q = _asterisk_2(_q, _delta);
        _modQ = _asterisk_2(_modQ, _modDelta);
        return _count = _plusSign_2(_count, 1);
      }, []),
    );
    _q = _asterisk_2(_z, _recipDelta);
    _modQ = _abs_1(_q);
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_modQ, _minD);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _Circle_2(_asList_1(_q), _asterisk_2(_modQ, _r)));
        _q = _asterisk_2(_q, _recipDelta);
        _modQ = _asterisk_2(_modQ, _modRecipDelta);
        return _count = _plusSign_2(_count, 1);
      }, []),
    );
    return _answer;
  }, ["r", "z", "delta", "limit"]),
  "{ :r :z :delta :limit | let recipDelta = /(1, delta); let modDelta = abs(delta); let modRecipDelta = /(1, modDelta); let __SPL130 = assertIsOfSize(limit, 2); let minD = at(__SPL130, 1); let maxD = at(__SPL130, 2); let q = z; let modQ = abs(q); let answer = []; let count = 0; whileTrue({ <(modQ, maxD) }, { add(answer,Circle(asList(q), *(modQ, r))); q := *(q, delta); modQ := *(modQ, modDelta); count := +(count, 1) }); q := *(z, recipDelta); modQ := abs(q); whileTrue({ >(modQ, minD) }, { add(answer,Circle(asList(q), *(modQ, r))); q := *(q, recipDelta); modQ := *(modQ, modRecipDelta); count := +(count, 1) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "DoyleSpiral",
  "doyleSpiral",
  ["p", "q", "l"],
  sl.annotateFunction(function (_p, _q, _l) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _q, _l";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL131 = _assertIsOfSize_2(_doyleSpiralParameters_2(_p, _q), 3);
    let _a = _at_2(__SPL131, 1);
    let _b = _at_2(__SPL131, 2);
    let _r = _at_2(__SPL131, 3);
    let _z = _a;
    let _answer = [];
    /* Statements */
    _toDo_3(
      1,
      _q,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _addAll_2(_answer, _doyleSpiralArm_4(_r, _z, _a, _l));
        return _z = _asterisk_2(_z, _b);
      }, ["i"]),
    );
    return _answer;
  }, ["p", "q", "l"]),
  "{ :p :q :l | let __SPL131 = assertIsOfSize(doyleSpiralParameters(p, q), 3); let a = at(__SPL131, 1); let b = at(__SPL131, 2); let r = at(__SPL131, 3); let z = a; let answer = []; toDo(1, q, { :i | addAll(answer,doyleSpiralArm(r, z, a, l)); z := *(z, b) }); answer }",
);
