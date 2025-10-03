sl.extendTypeOrTraitWithMethod(
  "List",
  "Cartography",
  "gallPetersProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_self, 2);
    let _lambda = _at_2(__SplVar1, 1);
    let _phi = _at_2(__SplVar1, 2);
    /* Statements */
    return [_phi, _asterisk_2(2, _sin_1(_lambda))];
  }, ["self"]),
  "{ :self | let __SplVar1 = assertIsOfSize(self, 2); let lambda = at(__SplVar1, 1); let phi = at(__SplVar1, 2); [phi, *(2, sin(lambda))] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Cartography",
  "gallStereographicProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 2);
    let _lambda = _at_2(__SplVar2, 1);
    let _phi = _at_2(__SplVar2, 2);
    /* Statements */
    return [
      _solidus_2(_phi, _sqrt_1(2)),
      _asterisk_2(
        _plusSign_2(1, _solidus_2(_sqrt_1(2), 2)),
        _tan_1(_solidus_2(_lambda, 2)),
      ),
    ];
  }, ["self"]),
  "{ :self | let __SplVar2 = assertIsOfSize(self, 2); let lambda = at(__SplVar2, 1); let phi = at(__SplVar2, 2); [/(phi, sqrt(2)), *((+(1, (/(sqrt(2), 2)))), tan((/(lambda, 2))))] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Cartography",
  "mercatorProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_self, 2);
    let _phi = _at_2(__SplVar3, 1);
    let _lambda = _at_2(__SplVar3, 2);
    /* Statements */
    return [_lambda, _arcSinh_1(_tan_1(_phi))];
  }, ["self"]),
  "{ :self | let __SplVar3 = assertIsOfSize(self, 2); let phi = at(__SplVar3, 1); let lambda = at(__SplVar3, 2); [lambda, arcSinh(tan(phi))] }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Cartography",
  "namedCartographicProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_self, [
      _hyphenMinusGreaterThanSign_2(
        "Gall-Peters",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _gallPetersProjection_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Gall Stereographic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _gallStereographicProjection_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Mercator",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _mercatorProjection_1;
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self | caseOf(self,[->('Gall-Peters', { gallPetersProjection:/1 }), ->('Gall Stereographic', { gallStereographicProjection:/1 }), ->('Mercator', { mercatorProjection:/1 })]) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Cartography",
  "naturalEarthData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _fetchJson_1(_naturalEarthUrl_1(_self)),
      sl.annotateFunction(function (_data) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _data";
          throw new Error(errorMessage);
        } /* Statements */
        return _GeoJson_1(_data);
      }, ["data"]),
    );
  }, ["self"]),
  "{ :self | then(fetchJson(naturalEarthUrl(self)), { :data | GeoJson(data) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Cartography",
  "naturalEarthUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asUrl_1(
      _stringCatenate_1([
        "https://raw.githubusercontent.com/",
        "nvkelso/natural-earth-vector/",
        "refs/heads/master/geojson/",
        _self,
        ".geojson",
      ]),
    );
  }, ["self"]),
  "{ :self | asUrl(stringCatenate(['https://raw.githubusercontent.com/', 'nvkelso/natural-earth-vector/', 'refs/heads/master/geojson/', self, '.geojson'])) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Cartography",
  "withNaturalEarthData",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _fetchJson_1(_naturalEarthUrl_1(_self)),
      sl.annotateFunction(function (_data) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _data";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_GeoJson_1(_data));
      }, ["data"]),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | then(fetchJson(naturalEarthUrl(self)), { :data | aBlock(GeoJson(data)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Cartography",
  "continentOutlines",
  ["self", "dataSet"],
  sl.annotateFunction(function (_self, _dataSet) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dataSet";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_dataSet, "LowResolution"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _requireLibraryItem_2(_self, "ContinentOutlines/LowResolution");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "System>>continentOutlines: unknown data set");
      }, []),
    );
  }, ["self", "dataSet"]),
  "{ :self :dataSet | if((=(dataSet, 'LowResolution')), { requireLibraryItem(self,'ContinentOutlines/LowResolution') }, { error(self,'System>>continentOutlines: unknown data set') }) }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "ContinentOutlines/LowResolution"],
      ["category", "Protocol/GeoJson"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/cartography/ContinentOutlines-LowResolution.json",
      ],
      ["mimeType", "application/json"],
      ["parser", _GeoJson_1],
    ]),
  ),
);
