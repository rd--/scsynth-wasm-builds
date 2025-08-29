sl.addType(
  false,
  "GeoJson",
  "GeoJson",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeoJson",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _contents_1(_self);
  }, ["self"]),
  "{ :self | contents(self) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "coordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isGeometry_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _field_2(_self, "coordinates");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "GeoJson>>coordinates: not geometry");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isGeometry(self), { field(self,'coordinates') }, { error(self,'GeoJson>>coordinates: not geometry') }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "features",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _type_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "Feature",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [_self];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "FeatureCollection",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_field_2(_self, "features"), _GeoJson_1);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
    );
  }, ["self"]),
  "{ :self | caseOf(type(self), [->('Feature', { [self] }), ->('FeatureCollection', { collect(field(self,'features'),GeoJson:/1) })], { [] }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "field",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key | at(contents(self),key) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "geometries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isGeometry_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_self];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isGeometryCollection_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_field_2(_self, "geometries"), _GeoJson_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_features_1(_self), _geometry_1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isGeometry(self), { [self] }, { if(isGeometryCollection(self), { collect(field(self,'geometries'),GeoJson:/1) }, { collect(features(self),geometry:/1) }) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "geometries",
  ["self", "geometryType"],
  sl.annotateFunction(function (_self, _geometryType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _geometryType";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(
      _geometries_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_type_1(_each), _geometryType);
      }, ["each"]),
    );
  }, ["self", "geometryType"]),
  "{ :self :geometryType | select(geometries(self), { :each | =(type(each), geometryType) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "geometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFeature_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _GeoJson_1(_field_2(_self, "geometry"));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "GeoJson>>geometry: not Feature");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isFeature(self), { GeoJson(field(self,'geometry')) }, { error(self,'GeoJson>>geometry: not Feature') }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "geometryValues",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _polygonValue_1 = sl.annotateFunction(function (_c) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _c";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_size_1(_c), 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Polygon_1(_at_2(_c, 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _PolygonWithHoles_2(_at_2(_c, 1), _allButFirst_1(_c));
        }, []),
      );
    }, ["c"]);
    /* Statements */
    return _collect_2(
      _geometries_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _coordinates_1(_each);
        /* Statements */
        return _caseOf_2(_type_1(_each), [
          _hyphenMinusGreaterThanSign_2(
            "Point",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Point_1(_c);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "LineString",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _Line_1(_c);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "Polygon",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _polygonValue_1(_c);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "MultiPoint",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _PointCloud_1(_c);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "MultiLineString",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _GeometryCollection_1(_collect_2(_c, _Line_1));
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            "MultiPolygon",
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _GeometryCollection_1(_collect_2(_c, _polygonValue_1));
            }, []),
          ),
        ]);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let polygonValue = { :c | if((=(size(c), 1)), { Polygon(at(c, 1)) }, { PolygonWithHoles(at(c, 1), allButFirst(c)) }) }; collect(geometries(self), { :each | let c = coordinates(each); caseOf(type(each),[->('Point', { Point(c) }), ->('LineString', { Line(c) }), ->('Polygon', { polygonValue(c) }), ->('MultiPoint', { PointCloud(c) }), ->('MultiLineString', { GeometryCollection(collect(c,Line:/1)) }), ->('MultiPolygon', { GeometryCollection(collect(c,polygonValue:/1)) })]) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "geometryValues",
  ["self", "projectionName"],
  sl.annotateFunction(function (_self, _projectionName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projectionName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projectionFunction_1 = _namedCartographicProjection_1(_projectionName);
    let _f_1 = sl.annotateFunction(function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL521 = _assertIsOfSize_2(_degreesToRadians_1(_each), 2);
      let _phi = _at_2(__SPL521, 1);
      let _lambda = _at_2(__SPL521, 2);
      /* Statements */
      return _projectionFunction_1([_lambda, _phi]);
    }, ["each"]);
    /* Statements */
    return _collect_2(
      _geometryValues_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _project_2(_each, _f_1);
      }, ["each"]),
    );
  }, ["self", "projectionName"]),
  "{ :self :projectionName | let projectionFunction:/1 = namedCartographicProjection(projectionName); let f = { :each | let __SPL521 = assertIsOfSize(degreesToRadians(each), 2); let phi = at(__SPL521, 1); let lambda = at(__SPL521, 2); projectionFunction([lambda, phi]) }; collect(geometryValues(self), { :each | project(each,f:/1) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "hasField",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _includesKey_2(_contents_1(_self), _key);
  }, ["self", "key"]),
  "{ :self :key | includesKey(contents(self),key) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isFeature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_type_1(_self), "Feature"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _includesKeys_2(_contents_1(_self), ["geometry", "properties"]);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(=(type(self), 'Feature'), { includesKeys(contents(self),['geometry', 'properties']) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isFeatureCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "FeatureCollection");
  }, ["self"]),
  "{ :self | =(type(self), 'FeatureCollection') }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isGeometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2([
      "Point",
      "MultiPoint",
      "LineString",
      "MultiLineString",
      "Polygon",
      "MultiPolygon",
    ], _type_1(_self));
  }, ["self"]),
  "{ :self | includes(['Point', 'MultiPoint', 'LineString', 'MultiLineString', 'Polygon', 'MultiPolygon'],type(self)) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isGeometryCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "GeometryCollection");
  }, ["self"]),
  "{ :self | =(type(self), 'GeometryCollection') }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_type_1(_self), "Polygon");
  }, ["self"]),
  "{ :self | =(type(self), 'Polygon') }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "isSimplyConnectedPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isPolygon_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(_size_1(_coordinates_1(_self)), 1);
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isPolygon(self), { =(size(coordinates(self)), 1) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "polygons",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_geometries_1(_self), _isPolygon_1);
  }, ["self"]),
  "{ :self | select(geometries(self),isPolygon:/1) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "polygonList",
  ["self", "projectionName"],
  sl.annotateFunction(function (_self, _projectionName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projectionName";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _collect_2(
      _geometryValues_2(_self, _projectionName),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _ifTrue_2(
          _isPolygon_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(_answer, _each);
          }, []),
        );
        return _ifTrue_2(
          _isGeometryCollection_1(_each),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _addAll_2(
              _answer,
              _select_2(_contents_1(_each), _isPolygon_1),
            );
          }, []),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "projectionName"]),
  "{ :self :projectionName | let answer = []; collect(geometryValues(self,projectionName), { :each | ifTrue(isPolygon(each), { add(answer,each) }); ifTrue(isGeometryCollection(each), { addAll(answer,select(contents(each),isPolygon:/1)) }) }); answer }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "properties",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFeature_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _field_2(_self, "properties");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "GeoJson>>properties: not Feature");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isFeature(self), { field(self,'properties') }, { error(self,'GeoJson>>properties: not Feature') }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "property",
  ["self", "key"],
  sl.annotateFunction(function (_self, _key) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _key";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifNil_3(
      _properties_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "GeoJson>>property: nil properties");
      }, []),
      sl.annotateFunction(function (_aRecord) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _aRecord";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_aRecord, _key);
      }, ["aRecord"]),
    );
  }, ["self", "key"]),
  "{ :self :key | ifNil(properties(self), { error(self,'GeoJson>>property: nil properties') }, { :aRecord | at(aRecord,key) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "simplyConnectedPolygons",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _select_2(_geometries_1(_self), _isSimplyConnectedPolygon_1);
  }, ["self"]),
  "{ :self | select(geometries(self),isSimplyConnectedPolygon:/1) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "simplyConnectedPolygonCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _simplyConnectedPolygons_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL522 = _assertIsOfSize_2(_coordinates_1(_each), 1);
        let _c = _at_2(__SPL522, 1);
        /* Statements */
        return _c;
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(simplyConnectedPolygons(self), { :each | let __SPL522 = assertIsOfSize(coordinates(each), 1); let c = at(__SPL522, 1); c }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "simplyConnectedPolygonCoordinates",
  ["self", "projectionFunction:/1"],
  sl.annotateFunction(function (_self, _projectionFunction_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projectionFunction_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _simplyConnectedPolygons_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL523 = _assertIsOfSize_2(_coordinates_1(_each), 1);
        let _c = _at_2(__SPL523, 1);
        /* Statements */
        return _collect_2(
          _c,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL524 = _assertIsOfSize_2(_degreesToRadians_1(_each), 2);
            let _phi = _at_2(__SPL524, 1);
            let _lambda = _at_2(__SPL524, 2);
            /* Statements */
            return _projectionFunction_1([_lambda, _phi]);
          }, ["each"]),
        );
      }, ["each"]),
    );
  }, ["self", "projectionFunction:/1"]),
  "{ :self :projectionFunction:/1 | collect(simplyConnectedPolygons(self), { :each | let __SPL523 = assertIsOfSize(coordinates(each), 1); let c = at(__SPL523, 1); collect(c, { :each | let __SPL524 = assertIsOfSize(degreesToRadians(each), 2); let phi = at(__SPL524, 1); let lambda = at(__SPL524, 2); projectionFunction([lambda, phi]) }) }) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "GeoJson",
  "GeoJson",
  "type",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _field_2(_self, "type");
  }, ["self"]),
  "{ :self | field(self,'type') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "GeoJson",
  "GeoJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeoJson_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newGeoJson(),self) }",
);
