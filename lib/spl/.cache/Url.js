/*  Requires: Blob File  */

sl.addTrait("Url", "Url");

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "asString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _href_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.href\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "asUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "asUrl");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('asUrl')\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fileName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_splitBy_2(_pathName_1(_self), "/"));
  }, ["self"]),
  "{ :self |\n\t\tself.pathName.splitBy('/').last\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fileNameWithoutExtensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_splitBy_2(_fileName_1(_self), "."));
  }, ["self"]),
  "{ :self |\n\t\tself.fileName.splitBy('.').first\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "fragment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hash;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.hash;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "host",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.host;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.host;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "hostName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.hostname;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.hostname;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "href",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.href;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.href;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "isUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "origin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.origin;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.origin;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "pathName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.pathname;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.pathname;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "port",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.port;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.port;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "protocol",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.protocol;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.protocol;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "query",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.search;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.search;>\n\t}",
);

sl.addMethodToExistingTrait(
  "Url",
  "Url",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_href_1(_self)), ".asUrl");
  }, ["self"]),
  "{ :self |\n\t\tself.href.storeString ++ '.asUrl'\n\t}",
);

sl.addType(
  true,
  "URL",
  "Url",
  ["Object", "Equatable", "Url"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "URL",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "password",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.password;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.password;>\n\t}",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "queryParameters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.searchParams;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.searchParams;>\n\t}",
);

sl.addMethodToExistingType(
  "URL",
  "Url",
  "userName",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.username;
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.username;>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Url",
  "isUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asFileUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asUrl_1(_plusSignPlusSign_2("file://", _self));
  }, ["self"]),
  "{ :self |\n\t\t('file://' ++ self).asUrl\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tUrl(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "asUrl",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _Url_2(_self, _base);
  }, ["self", "base"]),
  "{ :self :base |\n\t\tUrl(self, base)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "decodeUri",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return decodeURI(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return decodeURI(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "decodeUriComponent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return decodeURIComponent(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return decodeURIComponent(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "encodeUri",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return encodeURI(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return encodeURI(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "encodeUriComponent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return encodeURIComponent(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return encodeURIComponent(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "revokeObjectUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.revokeObjectURL(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return URL.revokeObjectURL(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "Url",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URL(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return new URL(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "Url",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Primitive */
    return new URL(_self, _base);
  }, ["self", "base"]),
  "{ :self :base |\n\t\t<primitive: return new URL(_self, _base);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "File",
  "Url",
  "createObjectUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.createObjectURL(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return URL.createObjectURL(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Blob",
  "Url",
  "createObjectUrl",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return URL.createObjectURL(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return URL.createObjectURL(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return fetch(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return fetch(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetch",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return fetch(_self);
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return fetch(_self);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchBlob",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _blob_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(blob:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchBlob",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _blob_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(blob:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(byteArray:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchByteArray",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _byteArray_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(byteArray:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _json_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(json:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchJson",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _json_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(json:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  sl.annotateFunction(function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(
      _self,
      sl.annotateFunction(function (_response) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _response";
          throw new Error(errorMessage);
        } /* Statements */
        return _asMimeType_2(_response, _mimeType);
      }, ["response"]),
    );
  }, ["self", "mimeType"]),
  "{ :self :mimeType |\n\t\tself.fetchThen { :response |\n\t\t\tresponse.asMimeType(mimeType)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchMimeType",
  ["self", "mimeType"],
  sl.annotateFunction(function (_self, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(
      _self,
      sl.annotateFunction(function (_response) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _response";
          throw new Error(errorMessage);
        } /* Statements */
        return _asMimeType_2(_response, _mimeType);
      }, ["response"]),
    );
  }, ["self", "mimeType"]),
  "{ :self :mimeType |\n\t\tself.fetchThen { :response |\n\t\t\tresponse.asMimeType(mimeType)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _text_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(text:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchText",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThen_2(_self, _text_1);
  }, ["self"]),
  "{ :self |\n\t\tself.fetchThen(text:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  sl.annotateFunction(function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(
      _self,
      _text_1,
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _defaultText;
      }, ["unused"]),
    );
  }, ["self", "defaultText"]),
  "{ :self :defaultText |\n\t\tself.fetchThenElse(text:/1) { :unused |\n\t\t\tdefaultText\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchTextWithDefault",
  ["self", "defaultText"],
  sl.annotateFunction(function (_self, _defaultText) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _defaultText";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(
      _self,
      _text_1,
      sl.annotateFunction(function (_unused) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _unused";
          throw new Error(errorMessage);
        } /* Statements */
        return _defaultText;
      }, ["unused"]),
    );
  }, ["self", "defaultText"]),
  "{ :self :defaultText |\n\t\tself.fetchThenElse(text:/1) { :unused |\n\t\t\tdefaultText\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  sl.annotateFunction(function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(
      _self,
      _onSuccess_1,
      sl.annotateFunction(function (_errorCode) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _errorCode";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
        );
      }, ["errorCode"]),
    );
  }, ["self", "onSuccess:/1"]),
  "{ :self :onSuccess:/1 |\n\t\tself.fetchThenElse(onSuccess:/1) { :errorCode |\n\t\t\tself.error('Url>>fetchThen: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchThen",
  ["self", "onSuccess:/1"],
  sl.annotateFunction(function (_self, _onSuccess_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _onSuccess_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _fetchThenElse_3(
      _self,
      _onSuccess_1,
      sl.annotateFunction(function (_errorCode) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _errorCode";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Url>>fetchThen: ", _errorCode),
        );
      }, ["errorCode"]),
    );
  }, ["self", "onSuccess:/1"]),
  "{ :self :onSuccess:/1 |\n\t\tself.fetchThenElse(onSuccess:/1) { :errorCode |\n\t\t\tself.error('Url>>fetchThen: ' ++ errorCode)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  sl.annotateFunction(function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _fetch_1(_self),
      sl.annotateFunction(function (_response) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _response";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ok_1(_response),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _onSuccess_1(_response);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cull_2(_onError, _ok_1(_response));
          }, []),
        );
      }, ["response"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_onError, _reason);
      }, ["reason"]),
    );
  }, ["self", "onSuccess:/1", "onError"]),
  "{ :self :onSuccess:/1 :onError |\n\t\tself.fetch.thenElse { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tonSuccess(response)\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t} { :reason |\n\t\t\tonError.cull(reason)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Url",
  "fetchThenElse",
  ["self", "onSuccess:/1", "onError"],
  sl.annotateFunction(function (_self, _onSuccess_1, _onError) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _onSuccess_1, _onError";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _fetch_1(_self),
      sl.annotateFunction(function (_response) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _response";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ok_1(_response),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _onSuccess_1(_response);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cull_2(_onError, _ok_1(_response));
          }, []),
        );
      }, ["response"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _cull_2(_onError, _reason);
      }, ["reason"]),
    );
  }, ["self", "onSuccess:/1", "onError"]),
  "{ :self :onSuccess:/1 :onError |\n\t\tself.fetch.thenElse { :response |\n\t\t\tresponse.ok.if {\n\t\t\t\tonSuccess(response)\n\t\t\t} {\n\t\t\t\tonError.cull(response.ok)\n\t\t\t}\n\t\t} { :reason |\n\t\t\tonError.cull(reason)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "cachedFetch",
  ["self", "cacheName"],
  sl.annotateFunction(function (_self, _cacheName) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _cacheName";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfPresent_3(
      _caches_1(_system),
      _cacheName,
      sl.annotateFunction(function (_cache) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _cache";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _cache,
          _self,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _thenElse_3(
              _fetch_1(_self),
              sl.annotateFunction(function (_response) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _response";
                  throw new Error(errorMessage);
                } /* Statements */
                return _then_2(
                  _atPut_3(_cache, _self, _response),
                  sl.annotateFunction(function (_unused) {
                    /* ArityCheck */
                    if (arguments.length !== 1) {
                      const errorMessage = "Arity: expected 1, _unused";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _basicMatch_2(_cache, _self);
                  }, ["unused"]),
                );
              }, ["response"]),
              sl.annotateFunction(function (_reason) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _reason";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(
                  _self,
                  _plusSignPlusSign_2("cachedFetch: ", _reason),
                );
              }, ["reason"]),
            );
          }, []),
        );
      }, ["cache"]),
    );
  }, ["self", "cacheName"]),
  "{ :self :cacheName |\n\t\tsystem.caches.atIfPresent(cacheName) { :cache |\n\t\t\tcache.atIfAbsent(self) {\n\t\t\t\t/* ['cachedFetch: absent', self, cacheName].postLine; */\n\t\t\t\tself.fetch.thenElse { :response |\n\t\t\t\t\tcache.atPut(self, response).then { :unused |\n\t\t\t\t\t\tcache.basicMatch(self)\n\t\t\t\t\t}\n\t\t\t\t} { :reason |\n\t\t\t\t\tself.error('cachedFetch: ' ++ reason)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "URL",
  "Url",
  "cachedFetchMimeType",
  ["self", "cacheName", "mimeType"],
  sl.annotateFunction(function (_self, _cacheName, _mimeType) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _cacheName, _mimeType";
      throw new Error(errorMessage);
    } /* Statements */
    return _thenElse_3(
      _cachedFetch_2(_self, _cacheName),
      sl.annotateFunction(function (_response) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _response";
          throw new Error(errorMessage);
        } /* Statements */
        return _asMimeType_2(_response, _mimeType);
      }, ["response"]),
      sl.annotateFunction(function (_reason) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _reason";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Url>>cachedFetchMimeType: ", _reason),
        );
      }, ["reason"]),
    );
  }, ["self", "cacheName", "mimeType"]),
  "{ :self :cacheName :mimeType |\n\t\tself.cachedFetch(cacheName).thenElse { :response |\n\t\t\tresponse.asMimeType(mimeType)\n\t\t} { :reason |\n\t\t\tself.error('Url>>cachedFetchMimeType: ' ++ reason)\n\t\t}\n\t}",
);
