sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Nim",
  "nimMultiplication",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_y),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _normal_1(
          _nimMultiplication_2(_LargeInteger_1(_x), _asLargeInteger_1(_y)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntegerAndApply_3(_y, _x, _nimMultiplication_2);
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\ty.isInteger.if {\n\t\t\tnimMultiplication(LargeInteger(x), y.asLargeInteger).normal\n\t\t} {\n\t\t\ty.adaptToIntegerAndApply(x, nimMultiplication:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Nim",
  "nimMultiplication",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_y),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedNimMultiplication_2(_x, _asLargeInteger_1(_y));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntegerAndApply_3(_y, _x, _nimMultiplication_2);
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\ty.isInteger.if {\n\t\t\tuncheckedNimMultiplication(x, y.asLargeInteger)\n\t\t} {\n\t\t\ty.adaptToIntegerAndApply(x, nimMultiplication:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Nim",
  "uncheckedNimMultiplication",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Primitive */
    if (_x < 0 || _y < 0) throw new Error("nimMultiplication: negative value?");
    let mul = function (x, y) {
      if (x > y) {
        let t = x;
        x = y;
        y = t;
      }
      if (x == BigInt(0)) return BigInt(0);
      if (x == BigInt(1)) return y;
      if (y == BigInt(2)) return BigInt(3);
      if (y == BigInt(3)) {
        if (x == BigInt(2)) return BigInt(1);
        else return BigInt(2);
      }
      for (let F = BigInt(4);; /* */ F = F * F) {
        if (y == F) {
          if (x < y) return x * y;
          else return BigInt(3) * y / BigInt(2);
        }
        if (y < BigInt(2) * F) return mul(F, x) ^ mul(y - F, x);
        for (let t = BigInt(2) * F; t < F * F; t *= BigInt(2)) {
          if (y == t) {
            if (x < F) return mul(mul(x, t / F), F);
            for (let i = F; i < t; i *= BigInt(2)) {
              if (x == i) return mul(mul(F, F), mul(t / F, i / F));
              if (x < BigInt(2) * i) return mul(t, i) ^ mul(t, x - i);
            }
            if (x == t) return mul(mul(F, F), mul(t / F, t / F));
          }
          if (y < BigInt(2) * t) return mul(t, x) ^ mul(y - t, x);
        }
      }
    };
    return mul(_x, _y);
  }, ["x", "y"]),
  "{ :x :y |\n\t\t/* https://www.math.ucla.edu/~tom/NimProd.html */\n\t\t<primitive:\n\t\tif (_x < 0 || _y < 0) { throw new Error('nimMultiplication: negative value?'); };\n\t\tlet mul = function(x,y) {\n\t\t\tif (x>y) {let t=x;x=y;y=t;}\n\t\t\tif (x==BigInt(0)) {return BigInt(0);}\n\t\t\tif (x==BigInt(1)) {return y;}\n\t\t\tif (y==BigInt(2)) {return BigInt(3);}\n\t\t\tif (y==BigInt(3)) {if (x==BigInt(2)) {return BigInt(1);} else {return BigInt(2);}}\n\t\t\tfor(let F=BigInt(4); /* */ ;F=F*F) {\n\t\t\t\tif (y==F) {if (x<y) {return x*y;} else {return BigInt(3)*y/BigInt(2);}}\n\t\t\t\tif (y<BigInt(2)*F) {return mul(F,x)^mul(y-F,x);}\n\t\t\t\tfor (let t=BigInt(2)*F;t<F*F;t*=BigInt(2)) {\n\t\t\t\t\tif (y==t) {\n\t\t\t\t\t\tif (x<F) {return mul(mul(x,t/F),F);}\n\t\t\t\t\t\tfor (let i=F;i<t;i*=BigInt(2)) {\n\t\t\t\t\t\t\tif (x==i) {return mul(mul(F,F),mul(t/F,i/F));}\n\t\t\t\t\t\t\tif(x<BigInt(2)*i) {return mul(t,i)^mul(t,x-i);}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (x==t) {return mul(mul(F,F),mul(t/F,t/F));}\n\t\t\t\t\t}\n\t\t\t\t\tif (y<BigInt(2)*t) {return mul(t,x)^mul(y-t,x);}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\treturn mul(_x, _y);\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Nim",
  "nimPowerNaive",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _iterate_3(
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _nimMultiplication_2(_x, _n);
      }, ["x"]),
      1,
      _k,
    );
  }, ["n", "k"]),
  "{ :n :k |\n\t\t{ :x |\n\t\t\tnimMultiplication(x, n)\n\t\t}.iterate(1, k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Nim",
  "nimPower",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = 1;
    let _p = _n;
    let _i = 0;
    /* Statements */
    _repeatForeverWithBreak_1(sl.annotateFunction(function (_break_0) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _break_0";
        throw new Error(errorMessage);
      } /* Statements */
      _ifTrue_2(
        _equalsSign_2(_bitAt_2(_k, _plusSign_2(_i, 1)), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _k = _hyphenMinus_2(_k, _circumflexAccent_2(2, _i));
          return _v = _nimMultiplication_2(_v, _p);
        }, []),
      );
      _ifTrue_2(
        _equalsSign_2(_k, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _break_0();
        }, []),
      );
      _p = _nimMultiplication_2(_p, _p);
      return _i = _plusSign_2(_i, 1);
    }, ["break:/0"]));
    return _v;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet v = 1;\n\t\tlet p = n;\n\t\tlet i = 0;\n\t\t{ :break:/0 |\n\t\t\t(k.bitAt(i + 1) = 1).ifTrue {\n\t\t\t\tk := k - (2 ^ i);\n\t\t\t\tv := v.nimMultiplication(p)\n\t\t\t};\n\t\t\t(k = 0).ifTrue {\n\t\t\t\tbreak()\n\t\t\t};\n\t\t\tp := p.nimMultiplication(p);\n\t\t\ti := i + 1\n\t\t}.repeatForeverWithBreak;\n\t\tv\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Nim",
  "nimSquare",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _nimMultiplication_2(_x, _x);
  }, ["x"]),
  "{ :x |\n\t\tnimMultiplication(x, x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Nim",
  "nimSquareRoot",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _Dictionary_1(sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_n, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _m = _bitXor_2(_n, _nimSquare_1(_n));
          /* Statements */
          return _bitXor_2(_n, _at_2(_a, _m));
        }, []),
      );
    }, ["n"]));
    /* Statements */
    return _at_2(_a, _x);
  }, ["x"]),
  "{ :x |\n\t\tlet a = Dictionary { :n |\n\t\t\t(n = 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet m = bitXor(n, nimSquare(n));\n\t\t\t\tbitXor(n, a[m])\n\t\t\t}\n\t\t};\n\t\ta[x]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Nim",
  "nimValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _max_1(_collect_2(_self, _bitLength_1));
    let _b = _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _integerDigits_3(_each, 2, _k);
      }, ["each"]),
    );
    /* Statements */
    return _fromDigits_2(_percentSign_2(_sum_1(_b), 2), 2);
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.collect(bitLength:/1).max;\n\t\tlet b = self.collect { :each |\n\t\t\teach.integerDigits(2, k)\n\t\t};\n\t\t(b.sum % 2).fromDigits(2)\n\t}",
);
