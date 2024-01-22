sl.addType(
  false,
  "Graph",
  "Graph",
  ["Object"],
  ["size", "edges", "vertexLabels", "edgeLabels"],
);

sl.copyTraitToType(
  "Object",
  "Graph",
);

sl.addMethod(
  "Graph",
  "Graph",
  "isValid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(
      _and_2(
        _allSatisfy_2(_edges_1(_self), function (_edge) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _edge";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _and_2(_equals_2(_size_1(_edge), 2), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _allSatisfy_2(_edge, function (_vertex) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _vertex";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _betweenAnd_3(_vertex, 1, _size_1(_self));
            });
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _or_2(_isNil_1(_vertexLabels_1(_self)), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _equals_2(_size_1(_vertexLabels_1(_self)), _size_1(_self));
          });
        },
      ),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _or_2(_isNil_1(_edgeLabels_1(_self)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(
            _size_1(_edgeLabels_1(_self)),
            _size_1(_edges_1(_self)),
          );
        });
      },
    );
  },
  "{ :self |\n\t\tself.edges.allSatisfy { :edge |\n\t\t\tedge.size = 2 & {\n\t\t\t\tedge.allSatisfy { :vertex |\n\t\t\t\t\tvertex.betweenAnd(1, self.size)\n\t\t\t\t}\n\t\t\t}\n\t\t} & {\n\t\t\tself.vertexLabels.isNil | {\n\t\t\t\tself.vertexLabels.size = self.size\n\t\t\t}\n\t\t} & {\n\t\t\tself.edgeLabels.isNil | {\n\t\t\t\tself.edgeLabels.size = self.edges.size\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "labeledVertices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ifNil_3(_vertexLabels_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_vertices_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _minusGreaterThan_2(_each, "");
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _withCollect_3(
        _vertices_1(_self),
        _vertexLabels_1(_self),
        function (_vertex, _label) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _vertex, _label";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _minusGreaterThan_2(_vertex, _label);
        },
      );
    });
  },
  "{ :self |\n\t\tself.vertexLabels.ifNil {\n\t\t\tself.vertices.collect { :each |\n\t\t\t\teach -> ''\n\t\t\t}\n\t\t} {\n\t\t\tself.vertices.withCollect(self.vertexLabels) { :vertex :label |\n\t\t\t\tvertex -> label\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Graph",
  "Graph",
  "vertices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Interval_3(1, _size_1(_self), 1);
  },
  "{ :self |\n\t\tInterval(1, self.size, 1)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "Graph",
  ["self", "edges"],
  function (_self, _edges) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _edges";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Graph_4(_self, _edges, null, null);
  },
  "{ :self :edges |\n\t\tGraph(self, edges, nil, nil)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Graph",
  "Graph",
  ["self", "edges", "vertexLabels", "edgeLabels"],
  function (_self, _edges, _vertexLabels, _edgeLabels) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _edges, _vertexLabels, _edgeLabels";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(
      _newGraph_0(),
      _self,
      _edges,
      _vertexLabels,
      _edgeLabels,
    );
  },
  "{ :self :edges :vertexLabels :edgeLabels |\n\t\tnewGraph().initializeSlots(\n\t\t\tself,\n\t\t\tedges,\n\t\t\tvertexLabels,\n\t\t\tedgeLabels\n\t\t)\n\t}",
);
