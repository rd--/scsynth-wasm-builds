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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _typeReponsibility_2(_self, "asUrl");
  },
  "{ :self |\n\t\tself.typeReponsibility('asUrl')\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "fileName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _last_1(_splitBy_2(_pathName_1(_self), "/"));
  },
  "{ :self |\n\t\tself.pathName.splitBy('/').last\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "fileNameWithoutExtensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_splitBy_2(_fileName_1(_self), "."));
  },
  "{ :self |\n\t\tself.fileName.splitBy('.').first\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "hash",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.hash;
  },
  "{ :self |\n\t\t<primitive: return _self.hash;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "host",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.host;
  },
  "{ :self |\n\t\t<primitive: return _self.host;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "hostName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.hostname;
  },
  "{ :self |\n\t\t<primitive: return _self.hostname;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "href",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.href;
  },
  "{ :self |\n\t\t<primitive: return _self.href;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "isUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.origin;
  },
  "{ :self |\n\t\t<primitive: return _self.origin;> {- Read only -}\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "pathName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.pathname;
  },
  "{ :self |\n\t\t<primitive: return _self.pathname;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "port",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.port;
  },
  "{ :self |\n\t\t<primitive: return _self.port;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "protocol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.protocol;
  },
  "{ :self |\n\t\t<primitive: return _self.protocol;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "search",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.search;
  },
  "{ :self |\n\t\t<primitive: return _self.search;>\n\t}",
);

sl.addTraitMethod(
  "Url",
  "Url",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_href_1(_self)), ".asUrl");
  },
  "{ :self |\n\t\tself.href.storeString ++ '.asUrl'\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return _self.password;
  },
  "{ :self |\n\t\t<primitive: return _self.password;>\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new URL(_self);
  },
  "{ :self |\n\t\t<primitive: return new URL(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "asUrl",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return new URL(_self, _base);
  },
  "{ :self :base |\n\t\t<primitive: return new URL(_self, _base);>\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return URL.revokeObjectURL(_self);
  },
  "{ :self |\n\t\t<primitive: return URL.revokeObjectURL(_self);>\n\t}",
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return URL.createObjectURL(_self);
  },
  "{ :self |\n\t\t<primitive: return URL.createObjectURL(_self);>\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Primitive */
    return fetch(_self);
  },
  "{ :self |\n\t\t<primitive: return fetch(_self);>\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Primitive */
    return fetch(_self);
  },
  "{ :self |\n\t\t<primitive: return fetch(_self);>\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _blob_1);
  },
  "{ :self |\n\t\tself.fetchThen(blob:/1)\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _blob_1);
  },
  "{ :self |\n\t\tself.fetchThen(blob:/1)\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  },
  "{ :self |\n\t\tself.fetchThen(byteArray:/1)\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  },
  "{ :self |\n\t\tself.fetchThen(byteArray:/1)\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _json_1);
  },
  "{ :self |\n\t\tself.fetchThen(json:/1)\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _json_1);
  },
  "{ :self |\n\t\tself.fetchThen(json:/1)\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asMimeType_2(_response, _mimeType);
    });
  },
  "{ :self :mimeType |\n\t\tself.fetchThen { :response |\n\t\t\tresponse.asMimeType(mimeType)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asMimeType_2(_response, _mimeType);
    });
  },
  "{ :self :mimeType |\n\t\tself.fetchThen { :response |\n\t\t\tresponse.asMimeType(mimeType)\n\t\t}\n\t}",
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
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _text_1);
  },
  "{ :self |\n\t\tself.fetchThen(text:/1)\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThen_2(_self, _text_1);
  },
  "{ :self |\n\t\tself.fetchThen(text:/1)\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThenElse_3(_self, _text_1, function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _defaultText;
    });
  },
  "{ :self :defaultText |\n\t\tself.fetchThenElse(text:/1) { :unused |\n\t\t\tdefaultText\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThenElse_3(_self, _text_1, function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _defaultText;
    });
  },
  "{ :self :defaultText |\n\t\tself.fetchThenElse(text:/1) { :unused |\n\t\t\tdefaultText\n\t\t}\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThenElse_3(_self, _onSuccess_1, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
      );
    });
  },
  "{ :self :onSuccess:/1 |\n\t\tself.fetchThenElse(onSuccess:/1) { :errorCode |\n\t\t\tself.error('Url>>fetchThen: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _fetchThenElse_3(_self, _onSuccess_1, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
      );
    });
  },
  "{ :self :onSuccess:/1 |\n\t\tself.fetchThenElse(onSuccess:/1) { :errorCode |\n\t\t\tself.error('Url>>fetchThen: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.addMethod(
  "URL",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_1(_self), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _onSuccess_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    });
  },
  "{ :self :onSuccess:/1 :onError |\n\t\tself.fetch.then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tonSuccess(response)\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_fetch_1(_self), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _onSuccess_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    });
  },
  "{ :self :onSuccess:/1 :onError |\n\t\tself.fetch.then { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tonSuccess(response)\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t}\n\t}",
);
