/* {- Requires: RectangularCoordinate -} */

sl.addType(
  false,
  "Rectangle",
  "Rectangle",
  ["Object"],
  ["origin", "corner"],
);

sl.copyTraitToType(
  "Object",
  "Rectangle",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isRectangle_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_origin_1(_self), _origin_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_corner_1(_self), _corner_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isRectangle & {\n\t\t\tself.origin = anObject.origin & {\n\t\t\t\tself.corner = anObject.corner\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _h = _height_1(_self);
    let _w = _width_1(_self);
    /* Statements */
    return _if_3(
      _or_2(_lessThanEquals_2(_h, 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _lessThanEquals_2(_w, 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 0;
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _times_2(_w, _h);
      },
    );
  },
  "{ :self |\n\t\tlet h = self.height;\n\t\tlet w = self.width;\n\t\t(h <= 0 | { w <= 0 }).if {\n\t\t\t0\n\t\t} {\n\t\t\tw * h\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "asString",
  ["self", "toString:/1"],
  function (_self, _toString_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _toString_1";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Rectangle(",
      _toString_1(_origin_1(_self)),
      ", ",
      _toString_1(_corner_1(_self)),
      ")",
    ]);
  },
  "{ :self :toString:/1 |\n\t\t[\n\t\t\t'Rectangle(',\n\t\t\t\tself.origin.toString,\n\t\t\t\t', ',\n\t\t\t\tself.corner.toString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "bottomLeft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _commercialAt_2(_x_1(_origin_1(_self)), _y_1(_corner_1(_self)));
  },
  "{ :self |\n\t\tself.origin.x @ self.corner.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "bottomRight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _corner_1(_self);
  },
  "{ :self |\n\t\tself.corner\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _commercialAt_2(_ceiling_1(_x_1(_self)), _ceiling_1(_y_1(_self)));
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.x.ceiling @ self.y.ceiling\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "center",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _dividedBy_2(_plus_2(_topLeft_1(_self), _bottomRight_1(_self)), 2);
  },
  "{ :self |\n\t\tself.topLeft + self.bottomRight / 2\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "containsPoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_lessThanEquals_2(_origin_1(_self), _aPoint), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _lessThan_2(_aPoint, _corner_1(_self));
    });
  },
  "{ :self :aPoint |\n\t\tself.origin <= aPoint & {\n\t\t\taPoint < self.corner\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "encompass",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _min_2(_origin_1(_self), _aPoint),
      _max_2(_corner_1(_self), _aPoint),
    );
  },
  "{ :self :aPoint |\n\t\tRectangle(\n\t\t\tself.origin.min(aPoint),\n\t\t\tself.corner.max(aPoint)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "extent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(_corner_1(_self), _origin_1(_self));
  },
  "{ :self |\n\t\tself.corner - self.origin\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _commercialAt_2(_floor_1(_x_1(_self)), _floor_1(_y_1(_self)));
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.x.floor @ self.y.floor\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(_y_1(_corner_1(_self)), _y_1(_origin_1(_self)));
  },
  "{ :self |\n\t\tself.corner.y - self.origin.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersect",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _max_2(_origin_1(_self), _origin_1(_aRectangle)),
      _min_2(_corner_1(_self), _corner_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tRectangle(\n\t\t\tself.origin.max(aRectangle.origin),\n\t\t\tself.corner.min(aRectangle.corner)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersects",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThan_2(
      _max_2(_origin_1(_self), _origin_1(_aRectangle)),
      _min_2(_corner_1(_self), _corner_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tself.origin.max(aRectangle.origin) < self.corner.min(aRectangle.corner)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "intersectsAny",
  ["self", "rectangleList"],
  function (_self, _rectangleList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rectangleList";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _valueWithReturn_1(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _do_2(_rectangleList, function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _ifTrue_2(_intersects_2(_self, _r), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
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
  "isInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isInteger_1(_x_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _isInteger_1(_y_1(_self));
    });
  },
  "{ :self |\n\t\tself.x.isInteger & {\n\t\t\tself.y.isInteger\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "left",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _x_1(_origin_1(_self));
  },
  "{ :self |\n\t\tself.origin.x\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "merge",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _min_2(_origin_1(_self), _origin_1(_aRectangle)),
      _max_2(_corner_1(_self), _corner_1(_aRectangle)),
    );
  },
  "{ :self :aRectangle |\n\t\tRectangle(\n\t\t\tself.origin.min(aRectangle.origin),\n\t\t\tself.corner.max(aRectangle.corner)\n\t\t)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "pointAtFraction",
  ["self", "relativePoint"],
  function (_self, _relativePoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _relativePoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _origin_1(_self),
      _times_2(_extent_1(_self), _relativePoint),
    );
  },
  "{ :self :relativePoint |\n\t\tself.origin + (self.extent * relativePoint)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
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
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _pointAtFraction_2(
      _self,
      _commercialAt_2(_randomFloat_1(1), _randomFloat_1(1)),
    );
  },
  "{ :self |\n\t\tself.pointAtFraction(1.randomFloat @ 1.randomFloat)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "right",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _x_1(_corner_1(_self));
  },
  "{ :self |\n\t\tself.corner.x\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "rightCenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _commercialAt_2(_x_1(_corner_1(_self)), _y_1(_center_1(_self)));
  },
  "{ :self |\n\t\tself.corner.x @ self.center.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _self;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _commercialAt_2(_rounded_1(_x_1(_self)), _rounded_1(_y_1(_self)));
    });
  },
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.x.rounded @ self.y.rounded\n\t\t}\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "scaleBy",
  ["self", "scale"],
  function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _times_2(_origin_1(_self), _scale),
      _times_2(_corner_1(_self), _scale),
    );
  },
  "{ :self :scale |\n\t\tRectangle(self.origin * scale, self.corner * scale)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "swallow",
  ["self", "aRectangle"],
  function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _origin_2(_self, _min_2(_origin_1(_self), _origin_1(_aRectangle)));
    return _corner_2(_self, _max_2(_corner_1(_self), _corner_1(_aRectangle)));
  },
  "{ :self :aRectangle |\n\t\tself.origin := self.origin.min(aRectangle.origin);\n\t\tself.corner := self.corner.max(aRectangle.corner)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "top",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _y_1(_origin_1(_self));
  },
  "{ :self |\n\t\tself.origin.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topCenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _commercialAt_2(_x_1(_center_1(_self)), _y_1(_origin_1(_self)));
  },
  "{ :self |\n\t\tself.center.x @ self.origin.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topHalf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _withBottom_2(_self, _y_1(_center_1(_self)));
  },
  "{ :self |\n\t\tself.withBottom(self.center.y)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topLeft",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _origin_1(_self);
  },
  "{ :self |\n\t\tself.origin\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topLeftQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _corner_2(_topLeft_1(_self), _center_1(_self));
  },
  "{ :self |\n\t\tself.topLeft.corner(self.center)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topRight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _commercialAt_2(_x_1(_corner_1(_self)), _y_1(_origin_1(_self)));
  },
  "{ :self |\n\t\tself.corner.x @ self.origin.y\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "topRightQuadrant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _corner_2(_topCenter_1(_self), _rightCenter_1(_self));
  },
  "{ :self |\n\t\tself.topCenter.corner(self.rightCenter)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Rectangle_2(
      _plus_2(_origin_1(_self), _factor),
      _plus_2(_corner_1(_self), _factor),
    );
  },
  "{ :self :factor |\n\t\tRectangle(self.origin + factor, self.corner + factor)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "width",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _minus_2(_x_1(_corner_1(_self)), _x_1(_origin_1(_self)));
  },
  "{ :self |\n\t\tself.corner.x - self.origin.x\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "withBottom",
  ["self", "y"],
  function (_self, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _y";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _corner_2(
      _origin_1(_self),
      _commercialAt_2(_x_1(_corner_1(_self)), _y),
    );
  },
  "{ :self :y |\n\t\tself.origin.corner(self.corner.x @ y)\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _x_1(_origin_1(_self));
  },
  "{ :self |\n\t\tself.origin.x\n\t}",
);

sl.addMethod(
  "Rectangle",
  "Rectangle",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _y_1(_origin_1(_self));
  },
  "{ :self |\n\t\tself.origin.y\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "corner",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginCorner_2(_self, _aPoint);
  },
  "{ :self :aPoint |\n\t\tself.rectangleOriginCorner(aPoint)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "extent",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginExtent_2(_self, _aPoint);
  },
  "{ :self :aPoint |\n\t\tself.rectangleOriginExtent(aPoint)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "rectangle",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginCorner_2(
      _min_2(_self, _aPoint),
      _max_2(_self, _aPoint),
    );
  },
  "{ :self :aPoint |\n\t\trectangleOriginCorner(self.min(aPoint), self.max(aPoint))\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "rectangeCenterExtent",
  ["centerPoint", "extentPoint"],
  function (_centerPoint, _extentPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _centerPoint, _extentPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginExtent_2(
      _minus_2(_centerPoint, _dividedByDividedBy_2(_extentPoint, 2)),
      _extentPoint,
    );
  },
  "{ :centerPoint :extentPoint |\n\t\trectangleOriginExtent(centerPoint - (extentPoint // 2), extentPoint)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "rectangleOriginCorner",
  ["originPoint", "cornerPoint"],
  function (_originPoint, _cornerPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _originPoint, _cornerPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newRectangle_0(), _originPoint, _cornerPoint);
  },
  "{ :originPoint :cornerPoint |\n\t\tnewRectangle().initializeSlots(originPoint, cornerPoint)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "rectangleOriginExtent",
  ["originPoint", "extentPoint"],
  function (_originPoint, _extentPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _originPoint, _extentPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginCorner_2(
      _originPoint,
      _plus_2(_originPoint, _extentPoint),
    );
  },
  "{ :originPoint :extentPoint |\n\t\trectangleOriginCorner(originPoint, originPoint + extentPoint)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Rectangle",
  "Rectangle",
  ["originPoint", "cornerPoint"],
  function (_originPoint, _cornerPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _originPoint, _cornerPoint";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rectangleOriginCorner_2(_originPoint, _cornerPoint);
  },
  "{ :originPoint :cornerPoint |\n\t\trectangleOriginCorner(originPoint, cornerPoint)\n\t}",
);

sl.addMethod(
  "Array",
  "Rectangle",
  "computeBoundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _box = _Rectangle_2(_at_2(_self, 1), _at_2(_self, 1));
    /* Statements */
    _do_2(_self, function (_aPoint) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aPoint";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _swallow_2(_box, _Rectangle_2(_aPoint, _aPoint));
    });
    return _box;
  },
  "{ :self |\n\t\tlet box = Rectangle(self[1], self[1]);\n\t\tself.do { :aPoint |\n\t\t\tbox.swallow(Rectangle(aPoint, aPoint))\n\t\t};\n\t\tbox\n\t}",
);

sl.extendTraitWithMethod(
  "Sequenceable",
  "Rectangle",
  "rectangleMerging",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _topLeft = _topLeft_1(_first_1(_self));
    let _bottomRight = _bottomRight_1(_first_1(_self));
    /* Statements */
    _allButFirstDo_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      _topLeft = _min_2(_topLeft, _topLeft_1(_each));
      return _bottomRight = _max_2(_bottomRight, _bottomRight_1(_each));
    });
    return _Rectangle_2(_topLeft, _bottomRight);
  },
  "{ :self |\n\t\tlet topLeft = self.first.topLeft;\n\t\tlet bottomRight = self.first.bottomRight;\n\t\tself.allButFirstDo { :each |\n\t\t\ttopLeft := topLeft.min(each.topLeft);\n\t\t\tbottomRight := bottomRight.max(each.bottomRight)\n\t\t};\n\t\tRectangle(topLeft, bottomRight)\n\t}",
);
