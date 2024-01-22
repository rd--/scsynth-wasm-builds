sl.addTrait("Blob", "Blob");

sl.addTraitMethod(
  "Blob",
  "Blob",
  "arrayBuffer",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.arrayBuffer();
  },
  "{ :self |\n\t\t<primitive: return _self.arrayBuffer();>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "isEmpty",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _equals_2(_size_1(_self), 0);
  },
  "{ :self |\n\t\tself.size = 0\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "slice",
  ["self", "start", "end", "contentType"],
  function (_self, _start, _end, _contentType) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _start, _end, _contentType";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.slice(_start, _end, _contentType);
  },
  "{ :self :start :end :contentType |\n\t\t<primitive: return _self.slice(_start, _end, _contentType);>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.size;
  },
  "{ :self |\n\t\t<primitive: return _self.size;> {- Read only -}\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "text",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.text();
  },
  "{ :self |\n\t\t<primitive: return _self.text();>\n\t}",
);

sl.addTraitMethod(
  "Blob",
  "Blob",
  "type",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.type;
  },
  "{ :self |\n\t\t<primitive: return _self.type;> {- Read only -}\n\t}",
);

sl.addType(
  true,
  "Blob",
  "Blob",
  ["Object", "Blob"],
  [],
);

sl.copyTraitToType(
  "Object",
  "Blob",
);

sl.copyTraitToType(
  "Blob",
  "Blob",
);

sl.addMethod(
  "Array",
  "Blob",
  "Blob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Blob(_self);
  },
  "{ :self |\n\t\t<primitive: return new Blob(_self);>\n\t}",
);

sl.addMethod(
  "Array",
  "Blob",
  "Blob",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new Blob(_self, _options);
  },
  "{ :self :options |\n\t\t<primitive: return new Blob(_self, _options);>\n\t}",
);

sl.addMethod(
  "System",
  "Blob",
  "fetchBlob",
  ["self", "resource", "options"],
  function (_self, _resource, _options) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _resource, _options";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fetchBlob_4(_self, _resource, _options, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, _plusPlus_2("fetchBlob: ", _errorCode));
    });
  },
  "{ :self :resource :options |\n\t\tself.fetchBlob(resource, options) { :errorCode |\n\t\t\tself.error('fetchBlob: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "Blob",
  "fetchBlob",
  ["self", "resource", "options", "onError"],
  function (_self, _resource, _options, _onError) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _resource, _options, _onError";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_3(_self, _resource, _options), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _blob_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    });
  },
  "{ :self :resource :options :onError |\n\t\tself.fetch(resource, options).then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tresponse.blob\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t}\n\t}",
);
