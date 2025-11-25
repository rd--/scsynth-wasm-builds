sl.addType(
  false,
  "GeoJson",
  "GeoJson",
  ["Object", "Storeable"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeoJson",
);

sl.copyTraitMethodsToType(
  "Storeable",
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
  "{ :self |\n\t\tself.contents\n\t}",
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
  "{ :self |\n\t\tself.isGeometry.if {\n\t\t\tself.field('coordinates')\n\t\t} {\n\t\t\tself.error('GeoJson>>coordinates: not geometry')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.type.caseOf([\n\t\t\t'Feature' -> {\n\t\t\t\t[self]\n\t\t\t},\n\t\t\t'FeatureCollection' -> {\n\t\t\t\tself.field('features').collect(GeoJson:/1)\n\t\t\t}\n\t\t]) {\n\t\t\t[]\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.contents.at(key)\n\t}",
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
  "{ :self |\n\t\tself.isGeometry.if {\n\t\t\t[self]\n\t\t} {\n\t\t\tself.isGeometryCollection.if {\n\t\t\t\tself.field('geometries').collect(GeoJson:/1)\n\t\t\t} {\n\t\t\t\tself.features.collect(geometry:/1)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :geometryType |\n\t\tself.geometries.select { :each |\n\t\t\teach.type = geometryType\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.isFeature.if {\n\t\t\tGeoJson(self.field('geometry'))\n\t\t} {\n\t\t\tself.error('GeoJson>>geometry: not Feature')\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet polygonValue = { :c |\n\t\t\t(c.size = 1).if {\n\t\t\t\tPolygon(c[1])\n\t\t\t} {\n\t\t\t\tPolygonWithHoles(c[1], c.allButFirst)\n\t\t\t}\n\t\t};\n\t\tself.geometries.collect { :each |\n\t\t\tlet c = each.coordinates;\n\t\t\teach.type.caseOf([\n\t\t\t\t'Point' -> {\n\t\t\t\t\tPoint(c)\n\t\t\t\t},\n\t\t\t\t'LineString' -> {\n\t\t\t\t\tLine(c)\n\t\t\t\t},\n\t\t\t\t'Polygon' -> {\n\t\t\t\t\tpolygonValue(c)\n\t\t\t\t},\n\t\t\t\t'MultiPoint' -> {\n\t\t\t\t\tPointCloud(c)\n\t\t\t\t},\n\t\t\t\t'MultiLineString' -> {\n\t\t\t\t\tGeometryCollection(\n\t\t\t\t\t\tc.collect(Line:/1)\n\t\t\t\t\t)\n\t\t\t\t},\n\t\t\t\t'MultiPolygon' -> {\n\t\t\t\t\tGeometryCollection(\n\t\t\t\t\t\tc.collect(polygonValue:/1)\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
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
      let __SplVar1 = _assertIsOfSize_2(_degreesToRadians_1(_each), 2);
      let _phi = _at_2(__SplVar1, 1);
      let _lambda = _at_2(__SplVar1, 2);
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
  "{ :self :projectionName |\n\t\tlet projectionFunction:/1 = projectionName.namedCartographicProjection;\n\t\tlet f = { :each |\n\t\t\tlet [phi, lambda] = each.degreesToRadians;\n\t\t\tprojectionFunction(\n\t\t\t\t[lambda, phi]\n\t\t\t)\n\t\t};\n\t\tself.geometryValues.collect { :each |\n\t\t\teach.project(f:/1)\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.contents.includesKey(key)\n\t}",
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
  "{ :self |\n\t\tself.type = 'Feature' & {\n\t\t\tself.contents.includesKeys(['geometry', 'properties'])\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.type = 'FeatureCollection'\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\t'Point', 'MultiPoint',\n\t\t\t'LineString', 'MultiLineString',\n\t\t\t'Polygon', 'MultiPolygon'\n\t\t].includes(self.type)\n\t}",
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
  "{ :self |\n\t\tself.type = 'GeometryCollection'\n\t}",
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
  "{ :self |\n\t\tself.type = 'Polygon'\n\t}",
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
  "{ :self |\n\t\tself.isPolygon & {\n\t\t\tself.coordinates.size = 1\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.geometries.select(isPolygon:/1)\n\t}",
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
  "{ :self :projectionName |\n\t\tlet answer = [];\n\t\tself.geometryValues(projectionName).collect { :each |\n\t\t\teach.isPolygon.ifTrue {\n\t\t\t\tanswer.add(each)\n\t\t\t};\n\t\t\teach.isGeometryCollection.ifTrue {\n\t\t\t\tanswer.addAll(each.contents.select(isPolygon:/1))\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
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
  "{ :self |\n\t\tself.isFeature.if {\n\t\t\tself.field('properties')\n\t\t} {\n\t\t\tself.error('GeoJson>>properties: not Feature')\n\t\t}\n\t}",
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
  "{ :self :key |\n\t\tself.properties.ifNil {\n\t\t\tself.error('GeoJson>>property: nil properties')\n\t\t} { :aRecord |\n\t\t\taRecord.at(key)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.geometries.select(isSimplyConnectedPolygon:/1)\n\t}",
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
        let __SplVar2 = _assertIsOfSize_2(_coordinates_1(_each), 1);
        let _c = _at_2(__SplVar2, 1);
        /* Statements */
        return _c;
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.simplyConnectedPolygons.collect { :each |\n\t\t\tlet [c] = each.coordinates;\n\t\t\tc\n\t\t}\n\t}",
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
        let __SplVar3 = _assertIsOfSize_2(_coordinates_1(_each), 1);
        let _c = _at_2(__SplVar3, 1);
        /* Statements */
        return _collect_2(
          _c,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar4 = _assertIsOfSize_2(_degreesToRadians_1(_each), 2);
            let _phi = _at_2(__SplVar4, 1);
            let _lambda = _at_2(__SplVar4, 2);
            /* Statements */
            return _projectionFunction_1([_lambda, _phi]);
          }, ["each"]),
        );
      }, ["each"]),
    );
  }, ["self", "projectionFunction:/1"]),
  "{ :self :projectionFunction:/1 |\n\t\tself.simplyConnectedPolygons.collect { :each |\n\t\t\tlet [c] = each.coordinates;\n\t\t\tc.collect { :each |\n\t\t\t\tlet [phi, lambda] = each.degreesToRadians;\n\t\t\t\tprojectionFunction(\n\t\t\t\t\t[lambda, phi]\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.field('type')\n\t}",
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
  "{ :self |\n\t\tnewGeoJson().initializeSlots(self)\n\t}",
);
