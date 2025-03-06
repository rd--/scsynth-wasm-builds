sl.extendTypeOrTraitWithMethod(
  "Record",
  "Prototype",
  "atDelegateToIfAbsent",
  ["self", "key", "delegateKey", "aBlock:/0"],
  sl.annotateFunction(function (_self, _key, _delegateKey, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _delegateKey, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _atIfAbsent_3(
      _self,
      _key,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _includesIndex_2(_self, _delegateKey),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atDelegateToIfAbsent_4(
              _at_2(_self, _delegateKey),
              _key,
              _delegateKey,
              _aBlock_0,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_0();
          }, []),
        );
      }, []),
    );
  }, ["self", "key", "delegateKey", "aBlock:/0"]),
  "{ :self :key :delegateKey :aBlock:/0 | atIfAbsent(self, key, { if(includesIndex(self,delegateKey), { atDelegateToIfAbsent(at(self, delegateKey),key, delegateKey, aBlock:/0) }, { aBlock() }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Prototype",
  "atDelegateTo",
  ["self", "key", "delegateKey"],
  sl.annotateFunction(function (_self, _key, _delegateKey) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _key, _delegateKey";
      throw new Error(errorMessage);
    } /* Statements */
    return _atDelegateToIfAbsent_4(
      _self,
      _key,
      _delegateKey,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          _plusSignPlusSign_2("Record>>atDelegate: unknown key: ", _key),
        );
      }, []),
    );
  }, ["self", "key", "delegateKey"]),
  "{ :self :key :delegateKey | atDelegateToIfAbsent(self, key, delegateKey, { error(self,++('Record>>atDelegate: unknown key: ', key)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Prototype",
  "atPutDelegateToIfAbsent",
  ["self", "key", "value", "delegateKey", "aBlock:/0"],
  sl.annotateFunction(function (_self, _key, _value, _delegateKey, _aBlock_0) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage =
        "Arity: expected 5, _self, _key, _value, _delegateKey, _aBlock_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesIndex_2(_self, _key),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _key, _value);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _self,
          _key,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _includesIndex_2(_self, _delegateKey),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPutDelegateToIfAbsent_5(
                  _at_2(_self, _delegateKey),
                  _key,
                  _value,
                  _delegateKey,
                  _aBlock_0,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_0();
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "key", "value", "delegateKey", "aBlock:/0"]),
  "{ :self :key :value :delegateKey :aBlock:/0 | if(includesIndex(self,key), { atPut(self,key, value) }, { atIfAbsent(self, key, { if(includesIndex(self,delegateKey), { atPutDelegateToIfAbsent(at(self, delegateKey),key, value, delegateKey, aBlock:/0) }, { aBlock() }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Prototype",
  "atPutDelegateTo",
  ["self", "key", "value", "delegateKey"],
  sl.annotateFunction(function (_self, _key, _value, _delegateKey) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _self, _key, _value, _delegateKey";
      throw new Error(errorMessage);
    } /* Statements */
    return _atPutDelegateToIfAbsent_5(
      _self,
      _key,
      _value,
      _delegateKey,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_self, _key, _value);
      }, []),
    );
  }, ["self", "key", "value", "delegateKey"]),
  "{ :self :key :value :delegateKey | atPutDelegateToIfAbsent(self, key, value, delegateKey, { atPut(self,key, value) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Prototype",
  "messageSend",
  ["self", "selector", "delegateKey", "argumentsList"],
  sl.annotateFunction(
    function (_self, _selector, _delegateKey, _argumentsList) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage =
          "Arity: expected 4, _self, _selector, _delegateKey, _argumentsList";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _atDelegateTo_3(_self, _selector, _delegateKey);
      /* Statements */
      return _if_3(
        _isBlock_1(_answer),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _apply_2(
            _answer,
            _plusSignPlusSign_2([_self], _argumentsList),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _answer;
        }, []),
      );
    },
    ["self", "selector", "delegateKey", "argumentsList"],
  ),
  "{ :self :selector :delegateKey :argumentsList | let answer = atDelegateTo(self,selector, delegateKey); if(isBlock(answer), { apply(answer,++([self], argumentsList)) }, { answer }) }",
);
