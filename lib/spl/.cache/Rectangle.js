sl.addType(
  false,
  "Rectangle",
  "Rectangle",
  ["Object"],
  ["lowerLeft", "upperRight"],
);

sl.copyTraitToType(
  "Object",
  "Rectangle",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isRectangle_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_lowerLeft_1(_self), _lowerLeft_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_upperRight_1(_self), _upperRight_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isRectangle & {\n\t\t\tself.lowerLeft = anObject.lowerLeft & {\n\t\t\t\tself.upperRight = anObject.upperRight\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _perimeter_1(_self);
  },
  "{ :self |\n\t\tself.perimeter\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _h = _height_1(_self);
    let _w = _width_1(_self);
    /* Statements */
    return _if_3(
      _verticalLine_2(_lessThanSignEqualsSign_2(_h, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _lessThanSignEqualsSign_2(_w, 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _asterisk_2(_w, _h);
      },
    );
  },
  "{ :self |\n\t\tlet h = self.height;\n\t\tlet w = self.width;\n\t\t(\n\t\t\th <= 0 | {\n\t\t\t\tw <= 0\n\t\t\t}\n\t\t).if {\n\t\t\t0\n\t\t} {\n\t\t\tw * h\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "asString",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aBlock_1"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_2([
      "Rectangle(",
      _aBlock_1(_lowerLeft_1(_self)),
      ", ",
      _aBlock_1(_upperRight_1(_self)),
      ")",
    ], "");
  },
  "{ :self :aBlock:/1 |\n\t\t[\n\t\t\t'Rectangle(',\n\t\t\taBlock(self.lowerLeft),\n\t\t\t', ',\n\t\t\taBlock(self.upperRight),\n\t\t\t')'\n\t\t].join('')\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "center",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _plusSign_2(_lowerLeft_1(_self), _upperRight_1(_self)),
      2,
    );
  },
  "{ :self |\n\t\tself.lowerLeft + self.upperRight / 2\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "centerLeft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_left_1(_self), _at_2(_center_1(_self), 2)];
  },
  "{ :self |\n\t\t[self.left, self.center[2]]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "centerRight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_right_1(_self), _at_2(_center_1(_self), 2)];
  },
  "{ :self |\n\t\t[self.right, self.center[2]]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _center_1(_self);
  },
  "{ :self |\n\t\tself.center\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "circumcircle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Circle_2(_center_1(_self), _circumradius_1(_self));
  },
  "{ :self |\n\t\tCircle(self.center, self.circumradius)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "circumradius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plusSign_2(_squared_1(_width_1(_self)), _squared_1(_height_1(_self))),
    );
  },
  "{ :self |\n\t\t(self.width.squared + self.height.squared).sqrt\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "containsPoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aPoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(
      _allTrue_1(_lessThanSignEqualsSign_2(_lowerLeft_1(_self), _aPoint)),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _allTrue_1(_lessThanSign_2(_aPoint, _upperRight_1(_self)));
      },
    );
  },
  "{ :self :aPoint |\n\t\t(self.lowerLeft <= aPoint).allTrue & {\n\t\t\t(aPoint <self.upperRight).allTrue\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "coordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [
      _lowerLeft_1(_self),
      _lowerRight_1(_self),
      _upperRight_1(_self),
      _upperLeft_1(_self),
    ];
  },
  "{ :self |\n\t\t[\n\t\t\tself.lowerLeft, self.lowerRight,\n\t\t\tself.upperRight, self.upperLeft\n\t\t]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "encompass",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aPoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _min_2(_lowerLeft_1(_self), _aPoint),
      _max_2(_upperRight_1(_self), _aPoint),
    );
  },
  "{ :self :aPoint |\n\t\tRectangle(\n\t\t\tself.lowerLeft.min(aPoint),\n\t\t\tself.upperRight.max(aPoint)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "extent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(_upperRight_1(_self), _lowerLeft_1(_self));
  },
  "{ :self |\n\t\tself.upperRight - self.lowerLeft\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _at_2(_upperRight_1(_self), 2),
      _at_2(_lowerLeft_1(_self), 2),
    );
  },
  "{ :self |\n\t\tself.upperRight[2] - self.lowerLeft[2]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "incircle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Circle_2(_center_1(_self), _inradius_1(_self));
  },
  "{ :self |\n\t\tCircle(self.center, self.inradius)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "inradius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isSquare_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(_width_1(_self), 2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "Rectangle>>inradius: not square");
    });
  },
  "{ :self |\n\t\tself.isSquare.if {\n\t\t\tself.width / 2\n\t\t} {\n\t\t\tself.error('Rectangle>>inradius: not square')\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersect",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aRectangle"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _max_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)),
      _min_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tRectangle(\n\t\t\tself.lowerLeft.max(aRectangle.lowerLeft),\n\t\t\tself.upperRight.min(aRectangle.upperRight)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersects",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aRectangle"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _ll = _max_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle));
    let _ur = _min_2(_upperRight_1(_self), _upperRight_1(_aRectangle));
    /* Statements */
    return _lessThanSign_2(_ll, _ur);
  },
  "{ :self :aRectangle |\n\t\tlet ll = self.lowerLeft.max(aRectangle.lowerLeft);\n\t\tlet ur = self.upperRight.min(aRectangle.upperRight);\n\t\tll < ur\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersectsAny",
  ["self", "rectangleList"],
  function (_self, _rectangleList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _rectangleList"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _return_1"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _do_2(_rectangleList, function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _r"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_intersects_2(_self, _r), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _return_1(true);
        });
      });
      return false;
    });
  },
  "{ :self :rectangleList |\n\t\tvalueWithReturn { :return:/1 |\n\t\t\trectangleList.do { :r |\n\t\t\t\tself.intersects(r).ifTrue {\n\t\t\t\t\ttrue.return\n\t\t\t\t}\n\t\t\t};\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "isSquare",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_width_1(_self), _height_1(_self));
  },
  "{ :self |\n\t\tself.width = self.height\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "left",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_lowerLeft_1(_self), 1);
  },
  "{ :self |\n\t\tself.lowerLeft[1]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_lowerLeft_1(_self), 2);
  },
  "{ :self |\n\t\tself.lowerLeft[2]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lowerCenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_at_2(_center_1(_self), 1), _lower_1(_self)];
  },
  "{ :self |\n\t\t[self.center[1], self.lower]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lowerHalf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_lowerLeft_1(_self), _centerRight_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.lowerLeft, self.centerRight)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lowerLeftQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_lowerLeft_1(_self), _center_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.lowerLeft, self.center)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lowerRight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_at_2(_upperRight_1(_self), 1), _at_2(_lowerLeft_1(_self), 2)];
  },
  "{ :self |\n\t\t[self.upperRight[1], self.lowerLeft[2]]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "lowerRightQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_lowerCenter_1(_self), _centerRight_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.lowerCenter, self.centerRight)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "merge",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aRectangle"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _min_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)),
      _max_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tRectangle(\n\t\t\tself.lowerLeft.min(aRectangle.lowerLeft),\n\t\t\tself.upperRight.max(aRectangle.upperRight)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "perimeter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_plusSign_2(_width_1(_self), _height_1(_self)), 2);
  },
  "{ :self |\n\t\t(self.width + self.height) * 2\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "pointAtFraction",
  ["self", "relativePoint"],
  function (_self, _relativePoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _relativePoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _lowerLeft_1(_self),
      _asterisk_2(_extent_1(_self), _relativePoint),
    );
  },
  "{ :self :relativePoint |\n\t\tself.lowerLeft + (self.extent * relativePoint)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asString_2(_self, _printString_1);
  },
  "{ :self |\n\t\tself.asString(printString:/1)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asString_2(_self, _storeString_1);
  },
  "{ :self |\n\t\tself.asString(storeString:/1)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "randomPoint",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _shape"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _pointAtFraction_2(_self, [
        _nextRandomFloat_1(_system),
        _nextRandomFloat_1(_system),
      ]);
    }, _shape);
  },
  "{ :self :shape |\n\t\t{\n\t\t\tself.pointAtFraction([system.nextRandomFloat, system.nextRandomFloat])\n\t\t} ! shape\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "right",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_upperRight_1(_self), 1);
  },
  "{ :self |\n\t\tself.upperRight[1]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "scaleBy",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _scale"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _asterisk_2(_lowerLeft_1(_self), _scale),
      _asterisk_2(_upperRight_1(_self), _scale),
    );
  },
  "{ :self :scale |\n\t\tRectangle(\n\t\t\tself.lowerLeft * scale,\n\t\t\tself.upperRight * scale\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "swallow",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aRectangle"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    _lowerLeft_2(_self, _min_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)));
    return _upperRight_2(
      _self,
      _max_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tself.lowerLeft := self.lowerLeft.min(aRectangle.lowerLeft);\n\t\tself.upperRight := self.upperRight.max(aRectangle.upperRight)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upper",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_upperRight_1(_self), 2);
  },
  "{ :self |\n\t\tself.upperRight[2]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upperCenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_at_2(_center_1(_self), 1), _upper_1(_self)];
  },
  "{ :self |\n\t\t[self.center[1], self.upper]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upperHalf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_centerLeft_1(_self), _upperRight_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.centerLeft, self.upperRight)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upperLeft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_at_2(_lowerLeft_1(_self), 1), _at_2(_upperRight_1(_self), 2)];
  },
  "{ :self |\n\t\t[self.lowerLeft[1], self.upperRight[2]]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upperLeftQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_centerLeft_1(_self), _upperCenter_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.centerLeft, self.upperCenter)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "upperRightQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(_center_1(_self), _upperRight_1(_self));
  },
  "{ :self |\n\t\tRectangle(self.center, self.upperRight)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _factor"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _plusSign_2(_lowerLeft_1(_self), _factor),
      _plusSign_2(_upperRight_1(_self), _factor),
    );
  },
  "{ :self :factor |\n\t\tRectangle(\n\t\t\tself.lowerLeft + factor,\n\t\t\tself.upperRight + factor\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hyphenMinus_2(
      _at_2(_upperRight_1(_self), 1),
      _at_2(_lowerLeft_1(_self), 1),
    );
  },
  "{ :self |\n\t\tself.upperRight[1] - self.lowerLeft[1]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "withLower",
  ["self", "y"],
  function (_self, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _y"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _upperRight_2(_lowerLeft_1(_self), [
      _at_2(_upperRight_1(_self), 1),
      _y,
    ]);
  },
  "{ :self :y |\n\t\tself.lowerLeft.upperRight([self.upperRight[1], y])\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_lowerLeft_1(_self), 1);
  },
  "{ :self |\n\t\tself.lowerLeft[1]\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_lowerLeft_1(_self), 2);
  },
  "{ :self |\n\t\tself.lowerLeft[2]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Rectangle",
  "asRectangle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_shape_1(_self), [2, 2]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Rectangle_2(_first_1(_self), _second_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "List>>asRectangle");
    });
  },
  "{ :self |\n\t\t(self.shape = [2 2]).if {\n\t\t\tRectangle(self.first, self.second)\n\t\t} {\n\t\t\tself.error('List>>asRectangle')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Rectangle",
  "computeBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _box = _Rectangle_2(_at_2(_self, 1), _at_2(_self, 1));
    /* Statements */
    _do_2(_self, function (_aPoint) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _aPoint"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _swallow_2(_box, _Rectangle_2(_aPoint, _aPoint));
    });
    return _box;
  },
  "{ :self |\n\t\tlet box = Rectangle(self[1], self[1]);\n\t\tself.do { :aPoint |\n\t\t\tbox.swallow(Rectangle(aPoint, aPoint))\n\t\t};\n\t\tbox\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Rectangle",
  "rectangleMerging",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _lowerLeft = _lowerLeft_1(_first_1(_self));
    let _upperRight = _upperRight_1(_first_1(_self));
    /* Statements */
    _allButFirstDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _each"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      _lowerLeft = _min_2(_lowerLeft, _lowerLeft_1(_each));
      return _upperRight = _max_2(_upperRight, _upperRight_1(_each));
    });
    return _Rectangle_2(_lowerLeft, _upperRight);
  },
  "{ :self |\n\t\tlet lowerLeft = self.first.lowerLeft;\n\t\tlet upperRight = self.first.upperRight;\n\t\tself.allButFirstDo { :each |\n\t\t\tlowerLeft := lowerLeft.min(each.lowerLeft);\n\t\t\tupperRight := upperRight.max(each.upperRight)\n\t\t};\n\t\tRectangle(lowerLeft, upperRight)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Rectangle",
  "Rectangle",
  ["lowerLeft", "upperRight"],
  function (_lowerLeft, _upperRight) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _lowerLeft, _upperRight"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newRectangle_0(), _lowerLeft, _upperRight);
  },
  "{ :lowerLeft :upperRight |\n\t\tnewRectangle().initializeSlots(lowerLeft, upperRight)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Rectangle",
  "RectangleCenterExtent",
  ["centerPoint", "extentPoint"],
  function (_centerPoint, _extentPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _centerPoint, _extentPoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _half = _solidus_2(_extentPoint, 2);
    /* Statements */
    return _Rectangle_2(
      _hyphenMinus_2(_centerPoint, _half),
      _plusSign_2(_centerPoint, _half),
    );
  },
  "{ :centerPoint :extentPoint |\n\t\tlet half = extentPoint / 2;\n\t\tRectangle(centerPoint - half, centerPoint + half)\n\t}",
);
