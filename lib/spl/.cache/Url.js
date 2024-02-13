/* {- Requires: Blob File -} */

sl.addTrait("Url", "Url");

sl.addTraitMethod(
  "Url",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _typeReponsibility_2(_self, "asUrl");
  },
  "{ :self |\n\t\tself.typeReponsibility('asUrl')\n\t}",
);

sl.addType(
  true,
  "URL",
  "Url",
  ["Object", "Url"],
  [],
);

sl.copyTraitToType(
  "Object",
  "URL",
);

sl.copyTraitToType(
  "Url",
  "URL",
);

sl.addMethod(
  "URL",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return fetch(_self);
  },
  "{ :self |\n\t\t<primitive: return fetch(_self);>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _fetchText_2(_self, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, _plusSignPlusSign_2("fetchText: ", _errorCode));
    });
  },
  "{ :self |\n\t\tself.fetchText { :errorCode |\n\t\t\tself.error('fetchText: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchText",
  ["self", "onError"],
  function (_self, _onError) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onError";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_1(_self), function (_response) {
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
        return _text_1(_response);
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
  "{ :self :onError |\n\t\tself.fetch.then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tresponse.text\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "hash",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.hash;
  },
  "{ :self |\n\t\t<primitive: return _self.hash;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "host",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.host;
  },
  "{ :self |\n\t\t<primitive: return _self.host;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "hostname",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.hostname;
  },
  "{ :self |\n\t\t<primitive: return _self.hostname;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "href",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.href;
  },
  "{ :self |\n\t\t<primitive: return _self.href;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "isUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.origin;
  },
  "{ :self |\n\t\t<primitive: return _self.origin;> {- Read only -}\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "password",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.password;
  },
  "{ :self |\n\t\t<primitive: return _self.password;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "pathname",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.pathname;
  },
  "{ :self |\n\t\t<primitive: return _self.pathname;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "port",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.port;
  },
  "{ :self |\n\t\t<primitive: return _self.port;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "protocol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.protocol;
  },
  "{ :self |\n\t\t<primitive: return _self.protocol;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "search",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.search;
  },
  "{ :self |\n\t\t<primitive: return _self.search;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "searchParams",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.searchParams;
  },
  "{ :self |\n\t\t<primitive: return _self.searchParams;>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "username",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return _self.username;
  },
  "{ :self |\n\t\t<primitive: return _self.username;> {- Read only -}\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Url",
  "isUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "asFileUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asUrl_1(_plusSignPlusSign_2("file://", _self));
  },
  "{ :self |\n\t\t('file://' ++ self).asUrl\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Url_1(_self);
  },
  "{ :self |\n\t\tUrl(self)\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "decodeUri",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return decodeURI(_self);
  },
  "{ :self |\n\t\t<primitive: return decodeURI(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "decodeUriComponent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return decodeURIComponent(_self);
  },
  "{ :self |\n\t\t<primitive: return decodeURIComponent(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "encodeUri",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return encodeURI(_self);
  },
  "{ :self |\n\t\t<primitive: return encodeURI(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "encodeUriComponent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return encodeURIComponent(_self);
  },
  "{ :self |\n\t\t<primitive: return encodeURIComponent(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "revokeObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return URL.revokeObjectURL(_self);
  },
  "{ :self |\n\t\t<primitive: return URL.revokeObjectURL(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "Url",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new URL(_self);
  },
  "{ :self |\n\t\t<primitive: return new URL(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "Url",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return new URL(_self, _base);
  },
  "{ :self :base |\n\t\t<primitive: return new URL(_self, _base);>\n\t}",
);

sl.addMethod(
  "File",
  "Url",
  "createObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return URL.createObjectURL(_self);
  },
  "{ :self |\n\t\t<primitive: return URL.createObjectURL(_self);>\n\t}",
);

sl.addMethod(
  "Blob",
  "Url",
  "createObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Primitive */
    return URL.createObjectURL(_self);
  },
  "{ :self |\n\t\t<primitive: return URL.createObjectURL(_self);>\n\t}",
);
