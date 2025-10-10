sl.addType(
  false,
  "TowersDisk",
  "TowersBenchmark",
  ["Object"],
  ["size", "next"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TowersDisk",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TowersBenchmark",
  "TowersDisk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newTowersDisk_0(), _self, null);
  }, ["self"]),
  "{ :self |\n\t\tnewTowersDisk().initializeSlots(self, nil)\n\t}",
);

sl.addType(
  false,
  "TowersBenchmark",
  "TowersBenchmark",
  ["Object"],
  ["piles", "movesDone"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TowersBenchmark",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "pushDiskOnPile",
  ["self", "disk", "pile"],
  sl.annotateFunction(function (_self, _disk, _pile) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _disk, _pile";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _top = _at_2(_piles_1(_self), _pile);
    /* Statements */
    _ifTrue_2(
      _ampersand_2(
        _isNotNil_1(_top),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_size_1(_disk), _size_1(_top));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Cannot put a big disk on a smaller one");
      }, []),
    );
    _next_2(_disk, _top);
    return _atPut_3(_piles_1(_self), _pile, _disk);
  }, ["self", "disk", "pile"]),
  "{ :self :disk :pile |\n\t\tlet top = self.piles[pile];\n\t\t(\n\t\t\ttop.isNotNil & {\n\t\t\t\tdisk.size >= top.size\n\t\t\t}\n\t\t).ifTrue {\n\t\t\t'Cannot put a big disk on a smaller one'.error\n\t\t};\n\t\tdisk.next := top;\n\t\tself.piles[pile] := disk\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "popDiskFrom",
  ["self", "pile"],
  sl.annotateFunction(function (_self, _pile) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _pile";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _top = _at_2(_piles_1(_self), _pile);
    /* Statements */
    _ifTrue_2(
      _isNil_1(_top),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Attempting to remove a disk from an empty pile");
      }, []),
    );
    _atPut_3(_piles_1(_self), _pile, _next_1(_top));
    _next_2(_top, null);
    return _top;
  }, ["self", "pile"]),
  "{ :self :pile |\n\t\tlet top = self.piles[pile];\n\t\ttop.isNil.ifTrue {\n\t\t\t'Attempting to remove a disk from an empty pile'.error\n\t\t};\n\t\tself.piles[pile] := top.next;\n\t\ttop.next := nil;\n\t\ttop\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "moveTopDiskFromTo",
  ["self", "fromPile", "toPile"],
  sl.annotateFunction(function (_self, _fromPile, _toPile) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _fromPile, _toPile";
      throw new Error(errorMessage);
    } /* Statements */
    _pushDiskOnPile_3(_self, _popDiskFrom_2(_self, _fromPile), _toPile);
    return _movesDone_2(_self, _plusSign_2(_movesDone_1(_self), 1));
  }, ["self", "fromPile", "toPile"]),
  "{ :self :fromPile :toPile |\n\t\tself.pushDiskOnPile((self.popDiskFrom(fromPile)), toPile);\n\t\tself.movesDone := self.movesDone + 1\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "buildTowerAtDisks",
  ["self", "pile", "disks"],
  sl.annotateFunction(function (_self, _pile, _disks) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _pile, _disks";
      throw new Error(errorMessage);
    } /* Statements */
    return _toByDo_4(
      _disks,
      0,
      -1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _pushDiskOnPile_3(_self, _TowersDisk_1(_i), _pile);
      }, ["i"]),
    );
  }, ["self", "pile", "disks"]),
  "{ :self :pile :disks |\n\t\tdisks.toByDo(0, -1) { :i |\n\t\t\tself.pushDiskOnPile(TowersDisk(i), pile)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "moveDisksFromTo",
  ["self", "disks", "fromPile", "toPile"],
  sl.annotateFunction(function (_self, _disks, _fromPile, _toPile) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _disks, _fromPile, _toPile";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_disks, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _moveTopDiskFromTo_3(_self, _fromPile, _toPile);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _otherPile = _hyphenMinus_2(_hyphenMinus_2(6, _fromPile), _toPile);
        /* Statements */
        _moveDisksFromTo_4(
          _self,
          _hyphenMinus_2(_disks, 1),
          _fromPile,
          _otherPile,
        );
        _moveTopDiskFromTo_3(_self, _fromPile, _toPile);
        return _moveDisksFromTo_4(
          _self,
          _hyphenMinus_2(_disks, 1),
          _otherPile,
          _toPile,
        );
      }, []),
    );
  }, ["self", "disks", "fromPile", "toPile"]),
  "{ :self :disks :fromPile :toPile |\n\t\t(disks = 1).if {\n\t\t\tself.moveTopDiskFromTo(fromPile, toPile)\n\t\t} {\n\t\t\tlet otherPile = 6 - fromPile - toPile;\n\t\t\tself.moveDisksFromTo(disks - 1, fromPile, otherPile);\n\t\t\tself.moveTopDiskFromTo(fromPile, toPile);\n\t\t\tself.moveDisksFromTo(disks - 1, otherPile, toPile)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "benchmark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _piles_2(_self, _List_1(3));
    _buildTowerAtDisks_3(_self, 1, 13);
    _movesDone_2(_self, 0);
    _moveDisksFromTo_4(_self, 13, 1, 2);
    return _movesDone_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.piles := List(3);\n\t\tself.buildTowerAtDisks(1, 13);\n\t\tself.movesDone := 0;\n\t\tself.moveDisksFromTo(13, 1, 2);\n\t\tself.movesDone\n\t}",
);

sl.addMethodToExistingType(
  "TowersBenchmark",
  "TowersBenchmark",
  "verifyResult",
  ["self", "result"],
  sl.annotateFunction(function (_self, _result) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _result";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_result, 8191);
  }, ["self", "result"]),
  "{ :self :result |\n\t\tresult = 8191\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "TowersBenchmark",
  "TowersBenchmark",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _benchmark_1(_newTowersBenchmark_0());
  }, []),
  "{\n\t\tnewTowersBenchmark().benchmark\n\t}",
);
