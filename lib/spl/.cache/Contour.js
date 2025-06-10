sl.extendTypeOrTraitWithMethod(
  "List",
  "Contour",
  "bourkeContourAlgorithm",
  ["d", "x", "y", "z", "drawContour"],
  sl.annotateFunction(function (_d, _x, _y, _z, _drawContour) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _d, _x, _y, _z, _drawContour";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL99 = _assertIsOfSize_2(_shape_1(_d), 2);
    let _m = _at_2(__SPL99, 1);
    let _n = _at_2(__SPL99, 2);
    /* Statements */
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_x), _m);
    }, []));
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_size_1(_y), _n);
    }, []));
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _greaterThanSign_2(_size_1(_z), 0);
    }, []));
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isMonotonicallyIncreasing_1(_z);
    }, []));
    _assert_1(sl.annotateFunction(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _equalsSign_2(_numArgs_1(_drawContour), 6);
    }, []));
    return _uncheckedBourkeContourAlgorithm_10(
      _d,
      0,
      _hyphenMinus_2(_m, 1),
      0,
      _hyphenMinus_2(_n, 1),
      _asList_1(_x),
      _asList_1(_y),
      _size_1(_z),
      _asList_1(_z),
      _drawContour,
    );
  }, ["d", "x", "y", "z", "drawContour"]),
  "{ :d :x :y :z :drawContour | let __SPL99 = assertIsOfSize(shape(d), 2); let m = at(__SPL99, 1); let n = at(__SPL99, 2); assert({ =(size(x), m) }); assert({ =(size(y), n) }); assert({ >(size(z), 0) }); assert({ isMonotonicallyIncreasing(z) }); assert({ =(numArgs(drawContour), 6) }); uncheckedBourkeContourAlgorithm(d, 0, -(m, 1), 0, -(n, 1), asList(x), asList(y), size(z), asList(z), drawContour) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Contour",
  "uncheckedBourkeContourAlgorithm",
  ["d", "ilb", "iub", "jlb", "jub", "x", "y", "nc", "z", "drawContour"],
  sl.annotateFunction(
    function (_d, _ilb, _iub, _jlb, _jub, _x, _y, _nc, _z, _drawContour) {
      /* ArityCheck */
      if (arguments.length !== 10) {
        const errorMessage =
          "Arity: expected 10, _d, _ilb, _iub, _jlb, _jub, _x, _y, _nc, _z, _drawContour";
        throw new Error(errorMessage);
      } /* Primitive */
      let d = _d;
      let ilb = _ilb;
      let iub = _iub;
      let jlb = _jlb;
      let jub = _jub;
      let x = _x;
      let y = _y;
      let nc = _nc;
      let z = _z;
      let drawContour = _drawContour;
      let h = new Array(5);
      let sh = new Array(5);
      let xh = new Array(5);
      let yh = new Array(5);
      let xsect = function (p1, p2) {
        return (h[p2] * xh[p1] - h[p1] * xh[p2]) / (h[p2] - h[p1]);
      };
      let ysect = function (p1, p2) {
        return (h[p2] * yh[p1] - h[p1] * yh[p2]) / (h[p2] - h[p1]);
      };
      let x1 = 0.0;
      let x2 = 0.0;
      let y1 = 0.0;
      let y2 = 0.0;
      let im = [0, 1, 1, 0];
      let jm = [0, 0, 1, 1];
      let castab = [
        [
          [0, 0, 8],
          [0, 2, 5],
          [7, 6, 9],
        ],
        [
          [0, 3, 4],
          [1, 3, 1],
          [4, 3, 0],
        ],
        [
          [9, 6, 7],
          [5, 2, 0],
          [8, 0, 0],
        ],
      ];
      for (let j = jub - 1; j >= jlb; j--) {
        for (let i = ilb; i <= iub - 1; i++) {
          let temp1 = Math.min(d[i][j], d[i][j + 1]);
          let temp2 = Math.min(d[i + 1][j], d[i + 1][j + 1]);
          let dmin = Math.min(temp1, temp2);
          temp1 = Math.max(d[i][j], d[i][j + 1]);
          temp2 = Math.max(d[i + 1][j], d[i + 1][j + 1]);
          let dmax = Math.max(temp1, temp2);
          if (dmax >= z[0] && dmin <= z[nc - 1]) {
            for (let k = 0; k < nc; k++) {
              if (z[k] >= dmin && z[k] <= dmax) {
                for (let m = 4; m >= 0; m--) {
                  if (m > 0) {
                    h[m] = d[i + im[m - 1]][j + jm[m - 1]] - z[k];
                    xh[m] = x[i + im[m - 1]];
                    yh[m] = y[j + jm[m - 1]];
                  } else {
                    h[0] = 0.25 * (h[1] + h[2] + h[3] + h[4]);
                    xh[0] = 0.5 * (x[i] + x[i + 1]);
                    yh[0] = 0.5 * (y[j] + y[j + 1]);
                  }
                  if (h[m] > 0.0) {
                    sh[m] = 1;
                  } else if (h[m] < 0.0) {
                    sh[m] = -1;
                  } else {
                    sh[m] = 0;
                  }
                }
                for (let m = 1; m <= 4; m++) {
                  let m1 = m;
                  let m2 = 0;
                  let m3 = null;
                  if (m != 4) {
                    m3 = m + 1;
                  } else {
                    m3 = 1;
                  }
                  let caseValue = castab[sh[m1] + 1][sh[m2] + 1][sh[m3] + 1];
                  if (caseValue != 0) {
                    switch (caseValue) {
                      case 1:
                        x1 = xh[m1];
                        y1 = yh[m1];
                        x2 = xh[m2];
                        y2 = yh[m2];
                        break;
                      case 2:
                        x1 = xh[m2];
                        y1 = yh[m2];
                        x2 = xh[m3];
                        y2 = yh[m3];
                        break;
                      case 3:
                        x1 = xh[m3];
                        y1 = yh[m3];
                        x2 = xh[m1];
                        y2 = yh[m1];
                        break;
                      case 4:
                        x1 = xh[m1];
                        y1 = yh[m1];
                        x2 = xsect(m2, m3);
                        y2 = ysect(m2, m3);
                        break;
                      case 5:
                        x1 = xh[m2];
                        y1 = yh[m2];
                        x2 = xsect(m3, m1);
                        y2 = ysect(m3, m1);
                        break;
                      case 6:
                        x1 = xh[m3];
                        y1 = yh[m3];
                        x2 = xsect(m1, m2);
                        y2 = ysect(m1, m2);
                        break;
                      case 7:
                        x1 = xsect(m1, m2);
                        y1 = ysect(m1, m2);
                        x2 = xsect(m2, m3);
                        y2 = ysect(m2, m3);
                        break;
                      case 8:
                        x1 = xsect(m2, m3);
                        y1 = ysect(m2, m3);
                        x2 = xsect(m3, m1);
                        y2 = ysect(m3, m1);
                        break;
                      case 9:
                        x1 = xsect(m3, m1);
                        y1 = ysect(m3, m1);
                        x2 = xsect(m1, m2);
                        y2 = ysect(m1, m2);
                        break;
                      default:
                        break;
                    }
                    drawContour(x1, y1, x2, y2, z[k], k + 1);
                  }
                }
              }
            }
          }
        }
      }
    },
    ["d", "ilb", "iub", "jlb", "jub", "x", "y", "nc", "z", "drawContour"],
  ),
  "{ :d :ilb :iub :jlb :jub :x :y :nc :z :drawContour | <primitive: let d = _d;\n\t\tlet ilb = _ilb;\n\t\tlet iub = _iub;\n\t\tlet jlb = _jlb;\n\t\tlet jub = _jub;\n\t\tlet x = _x;\n\t\tlet y = _y;\n\t\tlet nc = _nc;\n\t\tlet z = _z;\n\t\tlet drawContour = _drawContour;\n\t\tlet h = new Array(5);\n\t\tlet sh = new Array(5);\n\t\tlet xh = new Array(5);\n\t\tlet yh = new Array(5);\n\t\tlet xsect = function(p1, p2) {\n\t\t\treturn (h[p2]*xh[p1]-h[p1]*xh[p2])/(h[p2]-h[p1]);\n\t\t};\n\t\tlet ysect = function(p1, p2) {\n\t\t\treturn (h[p2]*yh[p1]-h[p1]*yh[p2])/(h[p2]-h[p1]);\n\t\t}\n\t\tlet x1 = 0.0;\n\t\tlet x2 = 0.0;\n\t\tlet y1 = 0.0;\n\t\tlet y2 = 0.0;\n\t\tlet im = [0, 1, 1, 0];\n\t\tlet jm = [0, 0, 1, 1];\n\t\tlet castab = [\n\t\t\t[\n\t\t\t\t[0, 0, 8], [0, 2, 5], [7, 6, 9]\n\t\t\t],\n\t\t\t[\n\t\t\t\t[0, 3, 4], [1, 3, 1], [4, 3, 0]\n\t\t\t],\n\t\t\t[\n\t\t\t\t[9, 6, 7], [5, 2, 0], [8, 0, 0]\n\t\t\t]\n\t\t];\n\t\tfor (let j=(jub-1);j>=jlb;j--) {\n\t\t\tfor (let i=ilb;i<=iub-1;i++) {\n\t\t\t\tlet temp1 = Math.min(d[i][j],d[i][j+1]);\n\t\t\t\tlet temp2 = Math.min(d[i+1][j],d[i+1][j+1]);\n\t\t\t\tlet dmin  = Math.min(temp1,temp2);\n\t\t\t\ttemp1 = Math.max(d[i][j],d[i][j+1]);\n\t\t\t\ttemp2 = Math.max(d[i+1][j],d[i+1][j+1]);\n\t\t\t\tlet dmax  = Math.max(temp1,temp2);\n\t\t\t\tif (dmax>=z[0]&&dmin<=z[nc-1]) {\n\t\t\t\t\tfor (let k=0;k<nc;k++) {\n\t\t\t\t\t\tif (z[k]>=dmin&&z[k]<=dmax) {\n\t\t\t\t\t\t\tfor (let m=4;m>=0;m--) {\n\t\t\t\t\t\t\t\tif (m>0) {\n\t\t\t\t\t\t\t\t\th[m] = d[i+im[m-1]][j+jm[m-1]]-z[k];\n\t\t\t\t\t\t\t\t\txh[m] = x[i+im[m-1]];\n\t\t\t\t\t\t\t\t\tyh[m] = y[j+jm[m-1]];\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\th[0] = 0.25*(h[1]+h[2]+h[3]+h[4]);\n\t\t\t\t\t\t\t\t\txh[0]=0.5*(x[i]+x[i+1]);\n\t\t\t\t\t\t\t\t\tyh[0]=0.5*(y[j]+y[j+1]);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (h[m]>0.0) {\n\t\t\t\t\t\t\t\t\tsh[m] = 1;\n\t\t\t\t\t\t\t\t} else if (h[m]<0.0) {\n\t\t\t\t\t\t\t\t\tsh[m] = -1;\n\t\t\t\t\t\t\t\t} else\n\t\t\t\t\t\t\t\tsh[m] = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tfor (let m=1;m<=4;m++) {\n\t\t\t\t\t\t\t\tlet m1 = m;\n\t\t\t\t\t\t\t\tlet m2 = 0;\n\t\t\t\t\t\t\t\tlet m3 = null;\n\t\t\t\t\t\t\t\tif (m!=4) {\n\t\t\t\t\t\t\t\t\tm3 = m+1;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tm3 = 1;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tlet caseValue = castab[sh[m1]+1][sh[m2]+1][sh[m3]+1];\n\t\t\t\t\t\t\t\tif (caseValue!=0) {\n\t\t\t\t\t\t\t\t\tswitch (caseValue) {\n\t\t\t\t\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m1];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m1];\n\t\t\t\t\t\t\t\t\t\tx2=xh[m2];\n\t\t\t\t\t\t\t\t\t\ty2=yh[m2];\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m2];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m2];\n\t\t\t\t\t\t\t\t\t\tx2=xh[m3];\n\t\t\t\t\t\t\t\t\t\ty2=yh[m3];\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 3:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m3];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m3];\n\t\t\t\t\t\t\t\t\t\tx2=xh[m1];\n\t\t\t\t\t\t\t\t\t\ty2=yh[m1];\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m1];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m1];\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m2,m3);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m2,m3);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m2];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m2];\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m3,m1);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m3,m1);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 6:\n\t\t\t\t\t\t\t\t\t\tx1=xh[m3];\n\t\t\t\t\t\t\t\t\t\ty1=yh[m3];\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m1,m2);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m1,m2);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\t\t\t\t\tx1=xsect(m1,m2);\n\t\t\t\t\t\t\t\t\t\ty1=ysect(m1,m2);\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m2,m3);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m2,m3);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 8:\n\t\t\t\t\t\t\t\t\t\tx1=xsect(m2,m3);\n\t\t\t\t\t\t\t\t\t\ty1=ysect(m2,m3);\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m3,m1);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m3,m1);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tcase 9:\n\t\t\t\t\t\t\t\t\t\tx1=xsect(m3,m1);\n\t\t\t\t\t\t\t\t\t\ty1=ysect(m3,m1);\n\t\t\t\t\t\t\t\t\t\tx2=xsect(m1,m2);\n\t\t\t\t\t\t\t\t\t\ty2=ysect(m1,m2);\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdrawContour(x1,y1,x2,y2,z[k],k + 1);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}>\n }",
);
