sl.addType(
  false,
  "Inspector",
  "Inspector",
  ["Object", "View"],
  ["inspectorPane", "inspectorList"],
);

sl.copyTraitToType(
  "Object",
  "Inspector",
);

sl.copyTraitToType(
  "View",
  "Inspector",
);

sl.addMethod(
  "Inspector",
  "Inspector",
  "addInspector",
  ["self", "aValue", "index"],
  function (_self, _aValue, _index) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aValue, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _maxStringSize = 32;
    let _maxIndices = 2048;
    let _fields = _inspectAsArray_2(_aValue, _maxIndices);
    let _listChooser = _ListChooser_3(
      false,
      _printStringConcise_2(_aValue, _maxStringSize),
      6,
    );
    let _select = _select_1(_listChooser);
    /* Statements */
    _setEntries_2(
      _listChooser,
      _collect_2(_fields, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _plusPlus_2(
          _plusPlus_2(_key_1(_each), ": "),
          _printStringConcise_2(_value_1(_each), _maxStringSize),
        );
      }),
    );
    _deselect_1(_select);
    _addEventListener_3(_select, "change", function (_event) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _event";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _atIfPresent_3(
        _fields,
        _plus_2(_selectedIndex_1(_select), 1),
        function (_item) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _item";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          _removeInspectorsFrom_2(_self, _plus_2(_index, 1));
          return _addInspector_3(_self, _value_1(_item), _plus_2(_index, 1));
        },
      );
    });
    _appendChild_2(_inspectorPane_1(_self), _listChooserPane_1(_listChooser));
    return _add_2(_inspectorList_1(_self), _listChooser);
  },
  "{ :self :aValue :index |\n\t\tlet maxStringSize = 32;\n\t\tlet maxIndices = 2048;\n\t\tlet fields = aValue.inspectAsArray(maxIndices);\n\t\tlet listChooser = ListChooser(false, aValue.printStringConcise(maxStringSize), 6);\n\t\tlet select = listChooser.select;\n\t\tlistChooser.setEntries(fields.collect { :each |\n\t\t\teach.key ++ ': ' ++ each.value.printStringConcise(maxStringSize)\n\t\t});\n\t\tselect.deselect;\n\t\tselect.addEventListener('change') { :event |\n\t\t\tfields.atIfPresent(select.selectedIndex + 1) { :item |\n\t\t\t\tself.removeInspectorsFrom(index + 1);\n\t\t\t\tself.addInspector(item.value, index + 1)\n\t\t\t}\n\t\t};\n\t\tself.inspectorPane.appendChild(listChooser.listChooserPane);\n\t\tself.inspectorList.add(listChooser)\n\t}",
);

sl.addMethod(
  "Inspector",
  "Inspector",
  "initialize",
  ["self", "aValue"],
  function (_self, _aValue) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aValue";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    _inspectorPane_2(
      _self,
      _createElement_2("div", Object.fromEntries([["class", "inspectorPane"]])),
    );
    _inspectorList_2(_self, []);
    _addInspector_3(_self, _aValue, 1);
    return _self;
  },
  "{ :self :aValue |\n\t\tself.inspectorPane := 'div'.createElement (\n\t\t\tclass: 'inspectorPane'\n\t\t);\n\t\tself.inspectorList([]);\n\t\tself.addInspector(aValue, 1);\n\t\tself\n\t}",
);

sl.addMethod(
  "Inspector",
  "Inspector",
  "removeInspectorsFrom",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifTrue_2(
      _lessThanEquals_2(_index, _size_1(_inspectorList_1(_self))),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _do_2(
          _removeLast_2(
            _inspectorList_1(_self),
            _plus_2(_minus_2(_size_1(_inspectorList_1(_self)), _index), 1),
          ),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _remove_1(_listChooserPane_1(_each));
          },
        );
      },
    );
  },
  "{ :self :index |\n\t\t(index <= self.inspectorList.size).ifTrue {\n\t\t\tself.inspectorList.removeLast(self.inspectorList.size - index + 1).do { :each |\n\t\t\t\teach.listChooserPane.remove\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Inspector",
  "Inspector",
  "outerElement",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _inspectorPane_1(_self);
  },
  "{ :self |\n\t\tself.inspectorPane\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Inspector",
  "Inspector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initialize_2(_newInspector_0(), _self);
  },
  "{ :self |\n\t\tnewInspector().initialize(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Inspector",
  "inspect",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _inspectorOn_3(_smallKansas_1(_system), _self, null);
  },
  "{ :self |\n\t\tsystem.smallKansas.inspectorOn(self, nil)\n\t}",
);

sl.addMethod(
  "SmallKansas",
  "Inspector",
  "inspectorOn",
  ["self", "aValue", "event"],
  function (_self, _aValue, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aValue, _event";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _addFrame_3(_self, _Inspector_1(_aValue), _event);
  },
  "{ :self :aValue :event |\n\t\tself.addFrame(Inspector(aValue), event)\n\t}",
);
