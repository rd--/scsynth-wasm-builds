/*  Requires: Blob File  */

sl.addTrait("Url", "Url");

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "asString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _href_1(_self);
  },
  "{ :self | href(self) }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeReponsibility_2(_self, "asUrl");
  },
  "{ :self | typeReponsibility(self,'asUrl') }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fileName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_splitBy_2(_pathName_1(_self), "/"));
  },
  "{ :self | last(splitBy(pathName(self),'/')) }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fileNameWithoutExtensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_splitBy_2(_fileName_1(_self), "."));
  },
  "{ :self | first(splitBy(fileName(self),'.')) }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fragment",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hash;
  },
  "{ :self | <primitive: return _self.hash;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "host",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.host;
  },
  "{ :self | <primitive: return _self.host;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "hostName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hostname;
  },
  "{ :self | <primitive: return _self.hostname;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "href",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.href;
  },
  "{ :self | <primitive: return _self.href;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "isUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "origin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  },
  "{ :self | <primitive: return _self.origin;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "pathName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pathname;
  },
  "{ :self | <primitive: return _self.pathname;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "port",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  },
  "{ :self | <primitive: return _self.port;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "protocol",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.protocol;
  },
  "{ :self | <primitive: return _self.protocol;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "query",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.search;
  },
  "{ :self | <primitive: return _self.search;>\n }",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_href_1(_self)), ".asUrl");
  },
  "{ :self | ++(storeString(href(self)), '.asUrl') }",
);

sl.addType(
  true,
  "URL",
  "Url",
  ["Object", "Url"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "URL",
);

sl.copyTraitMethodsToType(
  "Url",
  "URL",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "password",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.password;
  },
  "{ :self | <primitive: return _self.password;>\n }",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "queryParameters",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.searchParams;
  },
  "{ :self | <primitive: return _self.searchParams;>\n }",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "userName",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.username;
  },
  "{ :self | <primitive: return _self.username;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Url",
  "isUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :self | false }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asFileUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asUrl_1(_plusSignPlusSign_2("file://", _self));
  },
  "{ :self | asUrl((++('file://', self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URL(_self);
  },
  "{ :self | <primitive: return new URL(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asUrl",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URL(_self, _base);
  },
  "{ :self :base | <primitive: return new URL(_self, _base);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "decodeUri",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return decodeURI(_self);
  },
  "{ :self | <primitive: return decodeURI(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "decodeUriComponent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return decodeURIComponent(_self);
  },
  "{ :self | <primitive: return decodeURIComponent(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "encodeUri",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return encodeURI(_self);
  },
  "{ :self | <primitive: return encodeURI(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "encodeUriComponent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return encodeURIComponent(_self);
  },
  "{ :self | <primitive: return encodeURIComponent(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "revokeObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.revokeObjectURL(_self);
  },
  "{ :self | <primitive: return URL.revokeObjectURL(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "File",
  "Url",
  "createObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.createObjectURL(_self);
  },
  "{ :self | <primitive: return URL.createObjectURL(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Blob",
  "Url",
  "createObjectUrl",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.createObjectURL(_self);
  },
  "{ :self | <primitive: return URL.createObjectURL(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return fetch(_self);
  },
  "{ :self | <primitive: return fetch(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetch",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return fetch(_self);
  },
  "{ :self | <primitive: return fetch(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _blob_1);
  },
  "{ :self | fetchThen(self,blob:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchBlob",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _blob_1);
  },
  "{ :self | fetchThen(self,blob:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  },
  "{ :self | fetchThen(self,byteArray:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchByteArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  },
  "{ :self | fetchThen(self,byteArray:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _json_1);
  },
  "{ :self | fetchThen(self,json:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchJson",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _json_1);
  },
  "{ :self | fetchThen(self,json:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        throw new Error(errorMessage);
      } /* Statements */
      return _asMimeType_2(_response, _mimeType);
    });
  },
  "{ :self :mimeType | fetchThen(self, { :response | asMimeType(response,mimeType) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        throw new Error(errorMessage);
      } /* Statements */
      return _asMimeType_2(_response, _mimeType);
    });
  },
  "{ :self :mimeType | fetchThen(self, { :response | asMimeType(response,mimeType) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _text_1);
  },
  "{ :self | fetchThen(self,text:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchText",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _text_1);
  },
  "{ :self | fetchThen(self,text:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(_self, _text_1, function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        throw new Error(errorMessage);
      } /* Statements */
      return _defaultText;
    });
  },
  "{ :self :defaultText | fetchThenElse(self, text:/1, { :unused | defaultText }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(_self, _text_1, function (_unused) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _unused";
        throw new Error(errorMessage);
      } /* Statements */
      return _defaultText;
    });
  },
  "{ :self :defaultText | fetchThenElse(self, text:/1, { :unused | defaultText }) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(_self, _onSuccess_1, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
      );
    });
  },
  "{ :self :onSuccess:/1 | fetchThenElse(self, onSuccess:/1, { :errorCode | error(self,++('Url>>fetchThen: ', errorCode)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(_self, _onSuccess_1, function (_errorCode) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _errorCode";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
      );
    });
  },
  "{ :self :onSuccess:/1 | fetchThenElse(self, onSuccess:/1, { :errorCode | error(self,++('Url>>fetchThen: ', errorCode)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_fetch_1(_self), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _onSuccess_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    }, function (_reason) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _reason";
        throw new Error(errorMessage);
      } /* Statements */
      return _cull_2(_onError, _reason);
    });
  },
  "{ :self :onSuccess:/1 :onError | thenElse(fetch(self), { :response | if(ok(response), { onSuccess(response) }, { cull(onError,ok(response)) }) }, { :reason | cull(onError,reason) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_fetch_1(_self), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_ok_1(_response), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _onSuccess_1(_response);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_onError, _ok_1(_response));
      });
    }, function (_reason) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _reason";
        throw new Error(errorMessage);
      } /* Statements */
      return _cull_2(_onError, _reason);
    });
  },
  "{ :self :onSuccess:/1 :onError | thenElse(fetch(self), { :response | if(ok(response), { onSuccess(response) }, { cull(onError,ok(response)) }) }, { :reason | cull(onError,reason) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "cachedFetch",
  ["self", "cacheName"],
  function (_self, _cacheName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cacheName";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresent_3(_caches_1(_system), _cacheName, function (_cache) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _cache";
        throw new Error(errorMessage);
      } /* Statements */
      return _atIfAbsent_3(_cache, _self, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _thenElse_3(_fetch_1(_self), function (_response) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _response";
            throw new Error(errorMessage);
          } /* Statements */
          return _then_2(
            _atPut_3(_cache, _self, _response),
            function (_unused) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _unused";
                throw new Error(errorMessage);
              } /* Statements */
              return _basicMatch_2(_cache, _self);
            },
          );
        }, function (_reason) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _reason";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_self, _plusSignPlusSign_2("cachedFetch: ", _reason));
        });
      });
    });
  },
  "{ :self :cacheName | atIfPresent(caches(system), cacheName, { :cache | atIfAbsent(cache, self, { thenElse(fetch(self), { :response | then(atPut(cache,self, response), { :unused | basicMatch(cache,self) }) }, { :reason | error(self,++('cachedFetch: ', reason)) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "cachedFetchMimeType",
  ["self", "cacheName", "mimeType"],
  function (_self, _cacheName, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _cacheName, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(_cachedFetch_2(_self, _cacheName), function (_response) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _response";
        throw new Error(errorMessage);
      } /* Statements */
      return _asMimeType_2(_response, _mimeType);
    }, function (_reason) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _reason";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        _plusSignPlusSign_2("Url>>cachedFetchMimeType: ", _reason),
      );
    });
  },
  "{ :self :cacheName :mimeType | thenElse(cachedFetch(self,cacheName), { :response | asMimeType(response,mimeType) }, { :reason | error(self,++('Url>>cachedFetchMimeType: ', reason)) }) }",
);
