sl.addType(
  false,
  "Rectangle",
  "Rectangle",
  ["Object", "Geometry"],
  ["lowerLeft", "upperRight"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Rectangle",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Rectangle",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isRectangle_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_lowerLeft_1(_self), _lowerLeft_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(
              _upperRight_1(_self),
              _upperRight_1(_anObject),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isRectangle(anObject), { &(=(lowerLeft(self), lowerLeft(anObject)), { =(upperRight(self), upperRight(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _perimeter_1(_self);
  }, ["self"]),
  "{ :self | perimeter(self) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _h = _height_1(_self);
    let _w = _width_1(_self);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSignEqualsSign_2(_h, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_w, 0);
        }, []),
      ),
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
        } /* Statements */
        return _asterisk_2(_w, _h);
      }, []),
    );
  }, ["self"]),
  "{ :self | let h = height(self); let w = width(self); if((|(<=(h, 0), { <=(w, 0) })), { 0 }, { *(w, h) }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "asPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | Polygon(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "asString",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Rectangle(%, %)", [
      _aBlock_1(_lowerLeft_1(_self)),
      _aBlock_1(_upperRight_1(_self)),
    ]);
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | format('Rectangle(%, %)',[aBlock(lowerLeft(self)), aBlock(upperRight(self))]) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_lowerLeft_1(_self), _upperRight_1(_self)];
  }, ["self"]),
  "{ :self | [lowerLeft(self), upperRight(self)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "center",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _plusSign_2(_lowerLeft_1(_self), _upperRight_1(_self)),
      2,
    );
  }, ["self"]),
  "{ :self | /(+(lowerLeft(self), upperRight(self)), 2) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "centerLeft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_left_1(_self), _at_2(_center_1(_self), 2)];
  }, ["self"]),
  "{ :self | [left(self), at(center(self), 2)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "centerRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_right_1(_self), _at_2(_center_1(_self), 2)];
  }, ["self"]),
  "{ :self | [right(self), at(center(self), 2)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_self);
  }, ["self"]),
  "{ :self | center(self) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "circumcircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _circumradius_1(_self));
  }, ["self"]),
  "{ :self | Circle(center(self), circumradius(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "circumradius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(_square_1(_width_1(_self)), _square_1(_height_1(_self))),
    );
  }, ["self"]),
  "{ :self | sqrt((+(square(width(self)), square(height(self))))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "containsPoint",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _allTrue_1(_lessThanSignEqualsSign_2(_lowerLeft_1(_self), _aPoint)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _allTrue_1(_lessThanSign_2(_aPoint, _upperRight_1(_self)));
      }, []),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint | &(allTrue((<=(lowerLeft(self), aPoint))), { allTrue((<(aPoint, upperRight(self)))) }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "encompass",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      _min_2(_lowerLeft_1(_self), _aPoint),
      _max_2(_upperRight_1(_self), _aPoint),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint | Rectangle(min(lowerLeft(self),aPoint), max(upperRight(self),aPoint)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "extent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_upperRight_1(_self), _lowerLeft_1(_self));
  }, ["self"]),
  "{ :self | -(upperRight(self), lowerLeft(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "faceCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "faceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_asList_1(_upOrDownTo_2(1, 4))];
  }, ["self"]),
  "{ :self | [asList(upOrDownTo(1, 4))] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    /* Statements */
    return _format_2('<rect x="%" y="%" width="%" height="%" />', [
      _printStringToFixed_2(_left_1(_self), _precision),
      _printStringToFixed_2(_lower_1(_self), _precision),
      _printStringToFixed_2(_width_1(_self), _precision),
      _printStringToFixed_2(_height_1(_self), _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); format(\'<rect x="%" y="%" width="%" height="%" />\',[printStringToFixed(left(self),precision), printStringToFixed(lower(self),precision), printStringToFixed(width(self),precision), printStringToFixed(height(self),precision)]) }',
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _at_2(_upperRight_1(_self), 2),
      _at_2(_lowerLeft_1(_self), 2),
    );
  }, ["self"]),
  "{ :self | -(at(upperRight(self), 2), at(lowerLeft(self), 2)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "incircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _inradius_1(_self));
  }, ["self"]),
  "{ :self | Circle(center(self), inradius(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "includesX",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_left_1(_self), _x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_right_1(_self), _x);
      }, []),
    );
  }, ["self", "x"]),
  "{ :self :x | &(<=(left(self), x), { >=(right(self), x) }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "includesY",
  ["self", "y"],
  sl.annotateFunction(function (_self, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _lessThanSignEqualsSign_2(_lower_1(_self), _y),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_upper_1(_self), _y);
      }, []),
    );
  }, ["self", "y"]),
  "{ :self :y | &(<=(lower(self), y), { >=(upper(self), y) }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "inradius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isSquare_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_width_1(_self), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Rectangle>>inradius: not square");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isSquare(self), { /(width(self), 2) }, { error(self,'Rectangle>>inradius: not square') }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "intersect",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      _max_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)),
      _min_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle | Rectangle(max(lowerLeft(self),lowerLeft(aRectangle)), min(upperRight(self),upperRight(aRectangle))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "intersects",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ll = _max_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle));
    let _ur = _min_2(_upperRight_1(_self), _upperRight_1(_aRectangle));
    /* Statements */
    return _lessThanSign_2(_ll, _ur);
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle | let ll = max(lowerLeft(self),lowerLeft(aRectangle)); let ur = min(upperRight(self),upperRight(aRectangle)); <(ll, ur) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "intersectsAny",
  ["self", "rectangleList"],
  sl.annotateFunction(function (_self, _rectangleList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rectangleList";
      throw new Error(errorMessage);
    } /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _rectangleList,
        sl.annotateFunction(function (_r) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _r";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _intersects_2(_self, _r),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(true);
            }, []),
          );
        }, ["r"]),
      );
      return false;
    }, ["return:/1"]));
  }, ["self", "rectangleList"]),
  "{ :self :rectangleList | valueWithReturn({ :return:/1 | do(rectangleList, { :r | ifTrue(intersects(self,r), { return(true) }) }); false }) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "isSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_width_1(_self), _height_1(_self));
  }, ["self"]),
  "{ :self | =(width(self), height(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "left",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_lowerLeft_1(_self), 1);
  }, ["self"]),
  "{ :self | at(lowerLeft(self), 1) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_lowerLeft_1(_self), 2);
  }, ["self"]),
  "{ :self | at(lowerLeft(self), 2) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lowerCenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_at_2(_center_1(_self), 1), _lower_1(_self)];
  }, ["self"]),
  "{ :self | [at(center(self), 1), lower(self)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lowerHalf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_lowerLeft_1(_self), _centerRight_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(lowerLeft(self), centerRight(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lowerLeftQuadrant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_lowerLeft_1(_self), _center_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(lowerLeft(self), center(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lowerRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_at_2(_upperRight_1(_self), 1), _at_2(_lowerLeft_1(_self), 2)];
  }, ["self"]),
  "{ :self | [at(upperRight(self), 1), at(lowerLeft(self), 2)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "lowerRightQuadrant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_lowerCenter_1(_self), _centerRight_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(lowerCenter(self), centerRight(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "merge",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      _min_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)),
      _max_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle | Rectangle(min(lowerLeft(self),lowerLeft(aRectangle)), max(upperRight(self),upperRight(aRectangle))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "midpointPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_midpointPolygon_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | Polygon(midpointPolygon(vertexCoordinates(self))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "perimeter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_plusSign_2(_width_1(_self), _height_1(_self)), 2);
  }, ["self"]),
  "{ :self | *((+(width(self), height(self))), 2) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "pointAtFraction",
  ["self", "relativePoint"],
  sl.annotateFunction(function (_self, _relativePoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _relativePoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _lowerLeft_1(_self),
      _asterisk_2(_extent_1(_self), _relativePoint),
    );
  }, ["self", "relativePoint"]),
  "{ :self :relativePoint | +(lowerLeft(self), (*(extent(self), relativePoint))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asString_2(_self, _printString_1);
  }, ["self"]),
  "{ :self | asString(self,printString:/1) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asString_2(_self, _storeString_1);
  }, ["self"]),
  "{ :self | asString(self,storeString:/1) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "randomPoint",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _pointAtFraction_2(_self, [
          _nextRandomFloat_1(_rng),
          _nextRandomFloat_1(_rng),
        ]);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | !({ pointAtFraction(self,[nextRandomFloat(rng), nextRandomFloat(rng)]) }, shape) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "right",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_upperRight_1(_self), 1);
  }, ["self"]),
  "{ :self | at(upperRight(self), 1) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "rotate",
  ["self", "theta", "center"],
  sl.annotateFunction(function (_self, _theta, _center) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _theta, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotate_3(_asPolygon_1(_self), _theta, _center);
  }, ["self", "theta", "center"]),
  "{ :self :theta :center | rotate(asPolygon(self),theta, center) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "rotate",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _rotate_3(_self, _theta, _centroid_1(_self));
  }, ["self", "theta"]),
  "{ :self :theta | rotate(self,theta, centroid(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "scale",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _e = _asterisk_2(_extent_1(_self), _m);
    /* Statements */
    return _centeredRectangle_2(_c, _e);
  }, ["self", "m"]),
  "{ :self :m | let c = center(self); let e = *(extent(self), m); centeredRectangle(c, e) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "swallow",
  ["self", "aRectangle"],
  sl.annotateFunction(function (_self, _aRectangle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRectangle";
      throw new Error(errorMessage);
    } /* Statements */
    _lowerLeft_2(_self, _min_2(_lowerLeft_1(_self), _lowerLeft_1(_aRectangle)));
    return _upperRight_2(
      _self,
      _max_2(_upperRight_1(_self), _upperRight_1(_aRectangle)),
    );
  }, ["self", "aRectangle"]),
  "{ :self :aRectangle | lowerLeft(self, min(lowerLeft(self),lowerLeft(aRectangle))); upperRight(self, max(upperRight(self),upperRight(aRectangle))) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "translate",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      _plusSign_2(_lowerLeft_1(_self), _factor),
      _plusSign_2(_upperRight_1(_self), _factor),
    );
  }, ["self", "factor"]),
  "{ :self :factor | Rectangle(+(lowerLeft(self), factor), +(upperRight(self), factor)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upper",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_upperRight_1(_self), 2);
  }, ["self"]),
  "{ :self | at(upperRight(self), 2) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upperCenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_at_2(_center_1(_self), 1), _upper_1(_self)];
  }, ["self"]),
  "{ :self | [at(center(self), 1), upper(self)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upperHalf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_centerLeft_1(_self), _upperRight_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(centerLeft(self), upperRight(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upperLeft",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_at_2(_lowerLeft_1(_self), 1), _at_2(_upperRight_1(_self), 2)];
  }, ["self"]),
  "{ :self | [at(lowerLeft(self), 1), at(upperRight(self), 2)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upperLeftQuadrant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_centerLeft_1(_self), _upperCenter_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(centerLeft(self), upperCenter(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "upperRightQuadrant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(_center_1(_self), _upperRight_1(_self));
  }, ["self"]),
  "{ :self | Rectangle(center(self), upperRight(self)) }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _lowerLeft_1(_self),
      _lowerRight_1(_self),
      _upperRight_1(_self),
      _upperLeft_1(_self),
    ];
  }, ["self"]),
  "{ :self | [lowerLeft(self), lowerRight(self), upperRight(self), upperLeft(self)] }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 4;
  }, ["self"]),
  "{ :self | 4 }",
);

sl.addMethodToExistingType(
  "Rectangle",
  "Rectangle",
  "width",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _at_2(_upperRight_1(_self), 1),
      _at_2(_lowerLeft_1(_self), 1),
    );
  }, ["self"]),
  "{ :self | -(at(upperRight(self), 1), at(lowerLeft(self), 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "asRectangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_shape_1(_self), [2, 2]),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Rectangle_2(_first_1(_self), _second_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>asRectangle: invalid shape");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(shape(self), [2, 2])), { Rectangle(first(self), second(self)) }, { error(self,'List>>asRectangle: invalid shape') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "boundingBoxMerging",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _lowerLeft = _at_2(_at_2(_self, 1), 1);
    let _upperRight = _at_2(_at_2(_self, 1), 2);
    /* Statements */
    _allButFirstDo_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _lowerLeft = _min_2(_lowerLeft, _at_2(_each, 1));
        return _upperRight = _max_2(_upperRight, _at_2(_each, 2));
      }, ["each"]),
    );
    return [_lowerLeft, _upperRight];
  }, ["self"]),
  "{ :self | let lowerLeft = at(at(self, 1), 1); let upperRight = at(at(self, 1), 2); allButFirstDo(self, { :each | lowerLeft := min(lowerLeft,at(each, 1)); upperRight := max(upperRight,at(each, 2)) }); [lowerLeft, upperRight] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "centeredRectangle",
  ["centerPoint", "extentPoint"],
  sl.annotateFunction(function (_centerPoint, _extentPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _centerPoint, _extentPoint";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _half = _solidus_2(_extentPoint, 2);
    /* Statements */
    return _Rectangle_2(
      _hyphenMinus_2(_centerPoint, _half),
      _plusSign_2(_centerPoint, _half),
    );
  }, ["centerPoint", "extentPoint"]),
  "{ :centerPoint :extentPoint | let half = /(extentPoint, 2); Rectangle(-(centerPoint, half), +(centerPoint, half)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "computeBoundingBoxRectangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Rectangle_2(_at_2(_self, 1), _at_2(_self, 1));
    /* Statements */
    _allButFirstDo_2(
      _self,
      sl.annotateFunction(function (_aPoint) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aPoint";
          throw new Error(errorMessage);
        } /* Statements */
        return _swallow_2(_answer, _Rectangle_2(_aPoint, _aPoint));
      }, ["aPoint"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Rectangle(at(self, 1), at(self, 1)); allButFirstDo(self, { :aPoint | swallow(answer,Rectangle(aPoint, aPoint)) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "rectangleMerging",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asRectangle_1(_boundingBoxMerging_1(_self));
  }, ["self"]),
  "{ :self | asRectangle(boundingBoxMerging(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "Rectangle",
  ["lowerLeft", "upperRight"],
  sl.annotateFunction(function (_lowerLeft, _upperRight) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lowerLeft, _upperRight";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_lowerLeft), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_lowerLeft, _nest_1(_upperRight), _Rectangle_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newRectangle_0(), _lowerLeft, _upperRight);
      }, []),
    );
  }, ["lowerLeft", "upperRight"]),
  "{ :lowerLeft :upperRight | if((>(rank(lowerLeft), 1)), { withCollect(lowerLeft,nest(upperRight), Rectangle:/2) }, { initializeSlots(newRectangle(),lowerLeft, upperRight) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Rectangle",
  "unitSquare",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Rectangle_2(
      _hyphenMinus_2(_center, [0.5, 0.5]),
      _plusSign_2(_center, [0.5, 0.5]),
    );
  }, ["center"]),
  "{ :center | Rectangle(-(center, [0.5, 0.5]), +(center, [0.5, 0.5])) }",
);
