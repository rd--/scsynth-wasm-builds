function errorMessage(error) {
    if (error instanceof Error) {
        return `${error.toString()} -> ${error.cause}`;
    }
    return error.toString();
}
function arraySum(anArray) {
    return anArray.reduce((lhs, rhs)=>lhs + rhs, 0);
}
var main$1 = {
    exports: {}
};
function isValidType(type) {
    return type === 'description' || type === 'string' || type === 'code';
}
function Failure$2(pexpr, text, type) {
    if (!isValidType(type)) {
        throw new Error('invalid Failure type: ' + type);
    }
    this.pexpr = pexpr;
    this.text = text;
    this.type = type;
    this.fluffy = false;
}
Failure$2.prototype.getPExpr = function() {
    return this.pexpr;
};
Failure$2.prototype.getText = function() {
    return this.text;
};
Failure$2.prototype.getType = function() {
    return this.type;
};
Failure$2.prototype.isDescription = function() {
    return this.type === 'description';
};
Failure$2.prototype.isStringTerminal = function() {
    return this.type === 'string';
};
Failure$2.prototype.isCode = function() {
    return this.type === 'code';
};
Failure$2.prototype.isFluffy = function() {
    return this.fluffy;
};
Failure$2.prototype.makeFluffy = function() {
    this.fluffy = true;
};
Failure$2.prototype.clearFluffy = function() {
    this.fluffy = false;
};
Failure$2.prototype.subsumes = function(that) {
    return this.getText() === that.getText() && this.type === that.type && (!this.isFluffy() || this.isFluffy() && that.isFluffy());
};
Failure$2.prototype.toString = function() {
    return this.type === 'string' ? JSON.stringify(this.getText()) : this.getText();
};
Failure$2.prototype.clone = function() {
    const failure = new Failure$2(this.pexpr, this.text, this.type);
    if (this.isFluffy()) {
        failure.makeFluffy();
    }
    return failure;
};
Failure$2.prototype.toKey = function() {
    return this.toString() + '#' + this.type;
};
var Failure_1 = Failure$2;
var common$l = {};
(function(exports) {
    const escapeStringFor = {};
    for(let c = 0; c < 128; c++){
        escapeStringFor[c] = String.fromCharCode(c);
    }
    escapeStringFor["'".charCodeAt(0)] = "\\'";
    escapeStringFor['"'.charCodeAt(0)] = '\\"';
    escapeStringFor['\\'.charCodeAt(0)] = '\\\\';
    escapeStringFor['\b'.charCodeAt(0)] = '\\b';
    escapeStringFor['\f'.charCodeAt(0)] = '\\f';
    escapeStringFor['\n'.charCodeAt(0)] = '\\n';
    escapeStringFor['\r'.charCodeAt(0)] = '\\r';
    escapeStringFor['\t'.charCodeAt(0)] = '\\t';
    escapeStringFor['\u000b'.charCodeAt(0)] = '\\v';
    exports.abstract = function(optMethodName) {
        const methodName = optMethodName || '';
        return function() {
            throw new Error('this method ' + methodName + ' is abstract! ' + '(it has no implementation in class ' + this.constructor.name + ')');
        };
    };
    exports.assert = function(cond, message) {
        if (!cond) {
            throw new Error(message || 'Assertion failed');
        }
    };
    exports.defineLazyProperty = function(obj, propName, getterFn) {
        let memo;
        Object.defineProperty(obj, propName, {
            get () {
                if (!memo) {
                    memo = getterFn.call(this);
                }
                return memo;
            }
        });
    };
    exports.clone = function(obj) {
        if (obj) {
            return Object.assign({}, obj);
        }
        return obj;
    };
    exports.repeatFn = function(fn, n) {
        const arr = [];
        while(n-- > 0){
            arr.push(fn());
        }
        return arr;
    };
    exports.repeatStr = function(str, n) {
        return new Array(n + 1).join(str);
    };
    exports.repeat = function(x, n) {
        return exports.repeatFn(()=>x, n);
    };
    exports.getDuplicates = function(array) {
        const duplicates = [];
        for(let idx = 0; idx < array.length; idx++){
            const x = array[idx];
            if (array.lastIndexOf(x) !== idx && duplicates.indexOf(x) < 0) {
                duplicates.push(x);
            }
        }
        return duplicates;
    };
    exports.copyWithoutDuplicates = function(array) {
        const noDuplicates = [];
        array.forEach((entry)=>{
            if (noDuplicates.indexOf(entry) < 0) {
                noDuplicates.push(entry);
            }
        });
        return noDuplicates;
    };
    exports.isSyntactic = function(ruleName) {
        const firstChar = ruleName[0];
        return firstChar === firstChar.toUpperCase();
    };
    exports.isLexical = function(ruleName) {
        return !exports.isSyntactic(ruleName);
    };
    exports.padLeft = function(str, len, optChar) {
        const ch = optChar || ' ';
        if (str.length < len) {
            return exports.repeatStr(ch, len - str.length) + str;
        }
        return str;
    };
    exports.StringBuffer = function() {
        this.strings = [];
    };
    exports.StringBuffer.prototype.append = function(str) {
        this.strings.push(str);
    };
    exports.StringBuffer.prototype.contents = function() {
        return this.strings.join('');
    };
    const escapeUnicode = (str)=>String.fromCodePoint(parseInt(str, 16));
    exports.unescapeCodePoint = function(s) {
        if (s.charAt(0) === '\\') {
            switch(s.charAt(1)){
                case 'b':
                    return '\b';
                case 'f':
                    return '\f';
                case 'n':
                    return '\n';
                case 'r':
                    return '\r';
                case 't':
                    return '\t';
                case 'v':
                    return '\v';
                case 'x':
                    return escapeUnicode(s.slice(2, 4));
                case 'u':
                    return s.charAt(2) === '{' ? escapeUnicode(s.slice(3, -1)) : escapeUnicode(s.slice(2, 6));
                default:
                    return s.charAt(1);
            }
        } else {
            return s;
        }
    };
    exports.unexpectedObjToString = function(obj) {
        if (obj == null) {
            return String(obj);
        }
        const baseToString = Object.prototype.toString.call(obj);
        try {
            let typeName;
            if (obj.constructor && obj.constructor.name) {
                typeName = obj.constructor.name;
            } else if (baseToString.indexOf('[object ') === 0) {
                typeName = baseToString.slice(8, -1);
            } else {
                typeName = typeof obj;
            }
            return typeName + ': ' + JSON.stringify(String(obj));
        } catch (e) {
            return baseToString;
        }
    };
})(common$l);
const common$k = common$l;
class Node {
    constructor(matchLength){
        this.matchLength = matchLength;
    }
    get ctorName() {
        throw new Error('subclass responsibility');
    }
    numChildren() {
        return this.children ? this.children.length : 0;
    }
    childAt(idx) {
        if (this.children) {
            return this.children[idx];
        }
    }
    indexOfChild(arg) {
        return this.children.indexOf(arg);
    }
    hasChildren() {
        return this.numChildren() > 0;
    }
    hasNoChildren() {
        return !this.hasChildren();
    }
    onlyChild() {
        if (this.numChildren() !== 1) {
            throw new Error('cannot get only child of a node of type ' + this.ctorName + ' (it has ' + this.numChildren() + ' children)');
        } else {
            return this.firstChild();
        }
    }
    firstChild() {
        if (this.hasNoChildren()) {
            throw new Error('cannot get first child of a ' + this.ctorName + ' node, which has no children');
        } else {
            return this.childAt(0);
        }
    }
    lastChild() {
        if (this.hasNoChildren()) {
            throw new Error('cannot get last child of a ' + this.ctorName + ' node, which has no children');
        } else {
            return this.childAt(this.numChildren() - 1);
        }
    }
    childBefore(child) {
        const childIdx = this.indexOfChild(child);
        if (childIdx < 0) {
            throw new Error('Node.childBefore() called w/ an argument that is not a child');
        } else if (childIdx === 0) {
            throw new Error('cannot get child before first child');
        } else {
            return this.childAt(childIdx - 1);
        }
    }
    childAfter(child) {
        const childIdx = this.indexOfChild(child);
        if (childIdx < 0) {
            throw new Error('Node.childAfter() called w/ an argument that is not a child');
        } else if (childIdx === this.numChildren() - 1) {
            throw new Error('cannot get child after last child');
        } else {
            return this.childAt(childIdx + 1);
        }
    }
    isTerminal() {
        return false;
    }
    isNonterminal() {
        return false;
    }
    isIteration() {
        return false;
    }
    isOptional() {
        return false;
    }
}
class TerminalNode$2 extends Node {
    get ctorName() {
        return '_terminal';
    }
    isTerminal() {
        return true;
    }
    get primitiveValue() {
        throw new Error('The `primitiveValue` property was removed in Ohm v17.');
    }
}
class NonterminalNode$1 extends Node {
    constructor(ruleName, children, childOffsets, matchLength){
        super(matchLength);
        this.ruleName = ruleName;
        this.children = children;
        this.childOffsets = childOffsets;
    }
    get ctorName() {
        return this.ruleName;
    }
    isNonterminal() {
        return true;
    }
    isLexical() {
        return common$k.isLexical(this.ctorName);
    }
    isSyntactic() {
        return common$k.isSyntactic(this.ctorName);
    }
}
class IterationNode$2 extends Node {
    constructor(children, childOffsets, matchLength, isOptional){
        super(matchLength);
        this.children = children;
        this.childOffsets = childOffsets;
        this.optional = isOptional;
    }
    get ctorName() {
        return '_iter';
    }
    isIteration() {
        return true;
    }
    isOptional() {
        return this.optional;
    }
}
var nodes$1 = {
    Node,
    TerminalNode: TerminalNode$2,
    NonterminalNode: NonterminalNode$1,
    IterationNode: IterationNode$2
};
var pexprsMain = {};
var UnicodeCategories$1 = {
    Lu: /[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]/,
    Ll: /[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]/,
    Lt: /[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]/,
    Lm: /[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]/,
    Lo: /[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    Nl: /[\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]|\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]/,
    Nd: /[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD801[\uDCA0-\uDCA9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|[\uD805\uD807][\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]/,
    Mn: /[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]/,
    Mc: /[\u0903-\u0903]|[\u093E-\u0940]|[\u0949-\u094C]|[\u0982-\u0983]|[\u09BE-\u09C0]|[\u09C7-\u09C8]|[\u09CB-\u09CC]|[\u09D7-\u09D7]|[\u0A3E-\u0A40]|[\u0A83-\u0A83]|[\u0ABE-\u0AC0]|[\u0AC9-\u0AC9]|[\u0ACB-\u0ACC]|[\u0B02-\u0B03]|[\u0B3E-\u0B3E]|[\u0B40-\u0B40]|[\u0B47-\u0B48]|[\u0B4B-\u0B4C]|[\u0B57-\u0B57]|[\u0B83-\u0B83]|[\u0BBE-\u0BBF]|[\u0BC1-\u0BC2]|[\u0BC6-\u0BC8]|[\u0BCA-\u0BCC]|[\u0BD7-\u0BD7]|[\u0C01-\u0C03]|[\u0C41-\u0C44]|[\u0C82-\u0C83]|[\u0CBE-\u0CBE]|[\u0CC0-\u0CC4]|[\u0CC7-\u0CC8]|[\u0CCA-\u0CCB]|[\u0CD5-\u0CD6]|[\u0D02-\u0D03]|[\u0D3E-\u0D40]|[\u0D46-\u0D48]|[\u0D4A-\u0D4C]|[\u0D57-\u0D57]|[\u0F3E-\u0F3F]|[\u0F7F-\u0F7F]/,
    Pc: /[_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F]/,
    Zs: /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    L: /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    Ltmo: /[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]|[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]|[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/
};
const UnicodeCategories = UnicodeCategories$1;
const common$j = common$l;
class PExpr$1 {
    constructor(){
        if (this.constructor === PExpr$1) {
            throw new Error("PExpr cannot be instantiated -- it's abstract");
        }
    }
    withSource(interval) {
        if (interval) {
            this.source = interval.trimmed();
        }
        return this;
    }
}
const any = Object.create(PExpr$1.prototype);
const end = Object.create(PExpr$1.prototype);
class Terminal$1 extends PExpr$1 {
    constructor(obj){
        super();
        this.obj = obj;
    }
}
class Range extends PExpr$1 {
    constructor(from, to){
        super();
        this.from = from;
        this.to = to;
        this.matchCodePoint = from.length > 1 || to.length > 1;
    }
}
class Param extends PExpr$1 {
    constructor(index){
        super();
        this.index = index;
    }
}
class Alt extends PExpr$1 {
    constructor(terms){
        super();
        this.terms = terms;
    }
}
class Extend extends Alt {
    constructor(superGrammar, name, body){
        const origBody = superGrammar.rules[name].body;
        super([
            body,
            origBody
        ]);
        this.superGrammar = superGrammar;
        this.name = name;
        this.body = body;
    }
}
class Splice extends Alt {
    constructor(superGrammar, ruleName, beforeTerms, afterTerms){
        const origBody = superGrammar.rules[ruleName].body;
        super([
            ...beforeTerms,
            origBody,
            ...afterTerms
        ]);
        this.superGrammar = superGrammar;
        this.ruleName = ruleName;
        this.expansionPos = beforeTerms.length;
    }
}
class Seq extends PExpr$1 {
    constructor(factors){
        super();
        this.factors = factors;
    }
}
class Iter extends PExpr$1 {
    constructor(expr){
        super();
        this.expr = expr;
    }
}
class Star extends Iter {
}
class Plus extends Iter {
}
class Opt extends Iter {
}
Star.prototype.operator = '*';
Plus.prototype.operator = '+';
Opt.prototype.operator = '?';
Star.prototype.minNumMatches = 0;
Plus.prototype.minNumMatches = 1;
Opt.prototype.minNumMatches = 0;
Star.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
Plus.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
Opt.prototype.maxNumMatches = 1;
class Not extends PExpr$1 {
    constructor(expr){
        super();
        this.expr = expr;
    }
}
class Lookahead extends PExpr$1 {
    constructor(expr){
        super();
        this.expr = expr;
    }
}
class Lex extends PExpr$1 {
    constructor(expr){
        super();
        this.expr = expr;
    }
}
class Apply extends PExpr$1 {
    constructor(ruleName, args = []){
        super();
        this.ruleName = ruleName;
        this.args = args;
    }
    isSyntactic() {
        return common$j.isSyntactic(this.ruleName);
    }
    toMemoKey() {
        if (!this._memoKey) {
            Object.defineProperty(this, '_memoKey', {
                value: this.toString()
            });
        }
        return this._memoKey;
    }
}
class UnicodeChar extends PExpr$1 {
    constructor(category){
        super();
        this.category = category;
        this.pattern = UnicodeCategories[category];
    }
}
pexprsMain.PExpr = PExpr$1;
pexprsMain.any = any;
pexprsMain.end = end;
pexprsMain.Terminal = Terminal$1;
pexprsMain.Range = Range;
pexprsMain.Param = Param;
pexprsMain.Alt = Alt;
pexprsMain.Extend = Extend;
pexprsMain.Splice = Splice;
pexprsMain.Seq = Seq;
pexprsMain.Iter = Iter;
pexprsMain.Star = Star;
pexprsMain.Plus = Plus;
pexprsMain.Opt = Opt;
pexprsMain.Not = Not;
pexprsMain.Lookahead = Lookahead;
pexprsMain.Lex = Lex;
pexprsMain.Apply = Apply;
pexprsMain.UnicodeChar = UnicodeChar;
const common$i = common$l;
const pexprs$l = pexprsMain;
pexprs$l.PExpr.prototype.allowsSkippingPrecedingSpace = common$i.abstract('allowsSkippingPrecedingSpace');
pexprs$l.any.allowsSkippingPrecedingSpace = pexprs$l.end.allowsSkippingPrecedingSpace = pexprs$l.Apply.prototype.allowsSkippingPrecedingSpace = pexprs$l.Terminal.prototype.allowsSkippingPrecedingSpace = pexprs$l.Range.prototype.allowsSkippingPrecedingSpace = pexprs$l.UnicodeChar.prototype.allowsSkippingPrecedingSpace = function() {
    return true;
};
pexprs$l.Alt.prototype.allowsSkippingPrecedingSpace = pexprs$l.Iter.prototype.allowsSkippingPrecedingSpace = pexprs$l.Lex.prototype.allowsSkippingPrecedingSpace = pexprs$l.Lookahead.prototype.allowsSkippingPrecedingSpace = pexprs$l.Not.prototype.allowsSkippingPrecedingSpace = pexprs$l.Param.prototype.allowsSkippingPrecedingSpace = pexprs$l.Seq.prototype.allowsSkippingPrecedingSpace = function() {
    return false;
};
function Namespace$2() {}
Namespace$2.prototype = Object.create(null);
Namespace$2.asNamespace = function(objOrNamespace) {
    if (objOrNamespace instanceof Namespace$2) {
        return objOrNamespace;
    }
    return Namespace$2.createNamespace(objOrNamespace);
};
Namespace$2.createNamespace = function(optProps) {
    return Namespace$2.extend(Namespace$2.prototype, optProps);
};
Namespace$2.extend = function(namespace, optProps) {
    if (namespace !== Namespace$2.prototype && !(namespace instanceof Namespace$2)) {
        throw new TypeError('not a Namespace object: ' + namespace);
    }
    const ns = Object.create(namespace, {
        constructor: {
            value: Namespace$2,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    return Object.assign(ns, optProps);
};
Namespace$2.toString = function(ns) {
    return Object.prototype.toString.call(ns);
};
var Namespace_1 = Namespace$2;
const { assert: assert$3  } = common$l;
const Namespace$1 = Namespace_1;
const pexprs$k = pexprsMain;
function createError(message, optInterval) {
    let e;
    if (optInterval) {
        e = new Error(optInterval.getLineAndColumnMessage() + message);
        e.shortMessage = message;
        e.interval = optInterval;
    } else {
        e = new Error(message);
    }
    return e;
}
function intervalSourcesDontMatch() {
    return createError("Interval sources don't match");
}
function grammarSyntaxError(matchFailure) {
    const e = new Error();
    Object.defineProperty(e, 'message', {
        enumerable: true,
        get () {
            return matchFailure.message;
        }
    });
    Object.defineProperty(e, 'shortMessage', {
        enumerable: true,
        get () {
            return 'Expected ' + matchFailure.getExpectedText();
        }
    });
    e.interval = matchFailure.getInterval();
    return e;
}
function undeclaredGrammar(grammarName, namespace, interval) {
    const message = namespace ? 'Grammar ' + grammarName + ' is not declared in namespace ' + Namespace$1.toString(namespace) : 'Undeclared grammar ' + grammarName;
    return createError(message, interval);
}
function duplicateGrammarDeclaration(grammar, namespace) {
    return createError('Grammar ' + grammar.name + ' is already declared in this namespace');
}
function undeclaredRule(ruleName, grammarName, optInterval) {
    return createError('Rule ' + ruleName + ' is not declared in grammar ' + grammarName, optInterval);
}
function cannotOverrideUndeclaredRule(ruleName, grammarName, optSource) {
    return createError('Cannot override rule ' + ruleName + ' because it is not declared in ' + grammarName, optSource);
}
function cannotExtendUndeclaredRule(ruleName, grammarName, optSource) {
    return createError('Cannot extend rule ' + ruleName + ' because it is not declared in ' + grammarName, optSource);
}
function duplicateRuleDeclaration(ruleName, grammarName, declGrammarName, optSource) {
    let message = "Duplicate declaration for rule '" + ruleName + "' in grammar '" + grammarName + "'";
    if (grammarName !== declGrammarName) {
        message += " (originally declared in '" + declGrammarName + "')";
    }
    return createError(message, optSource);
}
function wrongNumberOfParameters(ruleName, expected, actual, source) {
    return createError('Wrong number of parameters for rule ' + ruleName + ' (expected ' + expected + ', got ' + actual + ')', source);
}
function wrongNumberOfArguments(ruleName, expected, actual, expr) {
    return createError('Wrong number of arguments for rule ' + ruleName + ' (expected ' + expected + ', got ' + actual + ')', expr);
}
function duplicateParameterNames(ruleName, duplicates, source) {
    return createError('Duplicate parameter names in rule ' + ruleName + ': ' + duplicates.join(', '), source);
}
function invalidParameter(ruleName, expr) {
    return createError('Invalid parameter to rule ' + ruleName + ': ' + expr + ' has arity ' + expr.getArity() + ', but parameter expressions must have arity 1', expr.source);
}
const syntacticVsLexicalNote = 'NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. ' + 'See https://ohmjs.org/d/svl for more details.';
function applicationOfSyntacticRuleFromLexicalContext(ruleName, applyExpr) {
    return createError('Cannot apply syntactic rule ' + ruleName + ' from here (inside a lexical context)', applyExpr.source);
}
function applySyntacticWithLexicalRuleApplication(applyExpr) {
    const { ruleName  } = applyExpr;
    return createError(`applySyntactic is for syntactic rules, but '${ruleName}' is a lexical rule. ` + syntacticVsLexicalNote, applyExpr.source);
}
function unnecessaryExperimentalApplySyntactic(applyExpr) {
    return createError('applySyntactic is not required here (in a syntactic context)', applyExpr.source);
}
function incorrectArgumentType(expectedType, expr) {
    return createError('Incorrect argument type: expected ' + expectedType, expr.source);
}
function multipleSuperSplices(expr) {
    return createError("'...' can appear at most once in a rule body", expr.source);
}
function invalidCodePoint(applyWrapper) {
    const node = applyWrapper._node;
    assert$3(node && node.isNonterminal() && node.ctorName === 'escapeChar_unicodeCodePoint');
    const digitIntervals = applyWrapper.children.slice(1, -1).map((d)=>d.source);
    const fullInterval = digitIntervals[0].coverageWith(...digitIntervals.slice(1));
    return createError(`U+${fullInterval.contents} is not a valid Unicode code point`, fullInterval);
}
function kleeneExprHasNullableOperand(kleeneExpr, applicationStack) {
    const actuals = applicationStack.length > 0 ? applicationStack[applicationStack.length - 1].args : [];
    const expr = kleeneExpr.expr.substituteParams(actuals);
    let message = 'Nullable expression ' + expr + " is not allowed inside '" + kleeneExpr.operator + "' (possible infinite loop)";
    if (applicationStack.length > 0) {
        const stackTrace = applicationStack.map((app)=>new pexprs$k.Apply(app.ruleName, app.args)).join('\n');
        message += '\nApplication stack (most recent application last):\n' + stackTrace;
    }
    return createError(message, kleeneExpr.expr.source);
}
function inconsistentArity(ruleName, expected, actual, expr) {
    return createError('Rule ' + ruleName + ' involves an alternation which has inconsistent arity ' + '(expected ' + expected + ', got ' + actual + ')', expr.source);
}
function duplicatePropertyNames(duplicates) {
    return createError('Object pattern has duplicate property names: ' + duplicates.join(', '));
}
function invalidConstructorCall(grammar, ctorName, children) {
    return createError('Attempt to invoke constructor ' + ctorName + ' with invalid or unexpected arguments');
}
function multipleErrors(errors) {
    const messages = errors.map((e)=>e.message);
    return createError([
        'Errors:'
    ].concat(messages).join('\n- '), errors[0].interval);
}
function missingSemanticAction(ctorName, name, type, stack) {
    let stackTrace = stack.slice(0, -1).map((info)=>{
        const ans = '  ' + info[0].name + ' > ' + info[1];
        return info.length === 3 ? ans + " for '" + info[2] + "'" : ans;
    }).join('\n');
    stackTrace += '\n  ' + name + ' > ' + ctorName;
    let moreInfo = '';
    if (ctorName === '_iter') {
        moreInfo = [
            '\nNOTE: as of Ohm v16, there is no default action for iteration nodes — see ',
            '  https://ohmjs.org/d/dsa for details.'
        ].join('\n');
    }
    const message = [
        `Missing semantic action for '${ctorName}' in ${type} '${name}'.${moreInfo}`,
        'Action stack (most recent call last):',
        stackTrace
    ].join('\n');
    const e = createError(message);
    e.name = 'missingSemanticAction';
    return e;
}
var errors$9 = {
    applicationOfSyntacticRuleFromLexicalContext,
    applySyntacticWithLexicalRuleApplication,
    cannotExtendUndeclaredRule,
    cannotOverrideUndeclaredRule,
    duplicateGrammarDeclaration,
    duplicateParameterNames,
    duplicatePropertyNames,
    duplicateRuleDeclaration,
    inconsistentArity,
    incorrectArgumentType,
    intervalSourcesDontMatch,
    invalidCodePoint,
    invalidConstructorCall,
    invalidParameter,
    grammarSyntaxError,
    kleeneExprHasNullableOperand,
    missingSemanticAction,
    multipleSuperSplices,
    undeclaredGrammar,
    undeclaredRule,
    unnecessaryExperimentalApplySyntactic,
    wrongNumberOfArguments,
    wrongNumberOfParameters,
    throwErrors (errors) {
        if (errors.length === 1) {
            throw errors[0];
        }
        if (errors.length > 1) {
            throw multipleErrors(errors);
        }
    }
};
var util$7 = {};
(function(exports) {
    const common = common$l;
    function padNumbersToEqualLength(arr) {
        let maxLen = 0;
        const strings = arr.map((n)=>{
            const str = n.toString();
            maxLen = Math.max(maxLen, str.length);
            return str;
        });
        return strings.map((s)=>common.padLeft(s, maxLen));
    }
    function strcpy(dest, src, offset) {
        const origDestLen = dest.length;
        const start = dest.slice(0, offset);
        const end = dest.slice(offset + src.length);
        return (start + src + end).substr(0, origDestLen);
    }
    function lineAndColumnToMessage(...ranges) {
        const lineAndCol = this;
        const { offset  } = lineAndCol;
        const { repeatStr  } = common;
        const sb = new common.StringBuffer();
        sb.append('Line ' + lineAndCol.lineNum + ', col ' + lineAndCol.colNum + ':\n');
        const lineNumbers = padNumbersToEqualLength([
            lineAndCol.prevLine == null ? 0 : lineAndCol.lineNum - 1,
            lineAndCol.lineNum,
            lineAndCol.nextLine == null ? 0 : lineAndCol.lineNum + 1
        ]);
        const appendLine = (num, content, prefix)=>{
            sb.append(prefix + lineNumbers[num] + ' | ' + content + '\n');
        };
        if (lineAndCol.prevLine != null) {
            appendLine(0, lineAndCol.prevLine, '  ');
        }
        appendLine(1, lineAndCol.line, '> ');
        const lineLen = lineAndCol.line.length;
        let indicationLine = repeatStr(' ', lineLen + 1);
        for(let i = 0; i < ranges.length; ++i){
            let startIdx = ranges[i][0];
            let endIdx = ranges[i][1];
            common.assert(startIdx >= 0 && startIdx <= endIdx, 'range start must be >= 0 and <= end');
            const lineStartOffset = offset - lineAndCol.colNum + 1;
            startIdx = Math.max(0, startIdx - lineStartOffset);
            endIdx = Math.min(endIdx - lineStartOffset, lineLen);
            indicationLine = strcpy(indicationLine, repeatStr('~', endIdx - startIdx), startIdx);
        }
        const gutterWidth = 2 + lineNumbers[1].length + 3;
        sb.append(repeatStr(' ', gutterWidth));
        indicationLine = strcpy(indicationLine, '^', lineAndCol.colNum - 1);
        sb.append(indicationLine.replace(/ +$/, '') + '\n');
        if (lineAndCol.nextLine != null) {
            appendLine(2, lineAndCol.nextLine, '  ');
        }
        return sb.contents();
    }
    let builtInRulesCallbacks = [];
    exports.awaitBuiltInRules = (cb)=>{
        builtInRulesCallbacks.push(cb);
    };
    exports.announceBuiltInRules = (grammar)=>{
        builtInRulesCallbacks.forEach((cb)=>{
            cb(grammar);
        });
        builtInRulesCallbacks = null;
    };
    exports.getLineAndColumn = (str, offset)=>{
        let lineNum = 1;
        let colNum = 1;
        let currOffset = 0;
        let lineStartOffset = 0;
        let nextLine = null;
        let prevLine = null;
        let prevLineStartOffset = -1;
        while(currOffset < offset){
            const c = str.charAt(currOffset++);
            if (c === '\n') {
                lineNum++;
                colNum = 1;
                prevLineStartOffset = lineStartOffset;
                lineStartOffset = currOffset;
            } else if (c !== '\r') {
                colNum++;
            }
        }
        let lineEndOffset = str.indexOf('\n', lineStartOffset);
        if (lineEndOffset === -1) {
            lineEndOffset = str.length;
        } else {
            const nextLineEndOffset = str.indexOf('\n', lineEndOffset + 1);
            nextLine = nextLineEndOffset === -1 ? str.slice(lineEndOffset) : str.slice(lineEndOffset, nextLineEndOffset);
            nextLine = nextLine.replace(/^\r?\n/, '').replace(/\r$/, '');
        }
        if (prevLineStartOffset >= 0) {
            prevLine = str.slice(prevLineStartOffset, lineStartOffset).replace(/\r?\n$/, '');
        }
        const line = str.slice(lineStartOffset, lineEndOffset).replace(/\r$/, '');
        return {
            offset,
            lineNum,
            colNum,
            line,
            prevLine,
            nextLine,
            toString: lineAndColumnToMessage
        };
    };
    exports.getLineAndColumnMessage = function(str, offset, ...ranges) {
        return exports.getLineAndColumn(str, offset).toString(...ranges);
    };
    exports.uniqueId = (()=>{
        let idCounter = 0;
        return (prefix)=>'' + prefix + idCounter++;
    })();
})(util$7);
const { abstract: __abstract , isSyntactic  } = common$l;
const errors$8 = errors$9;
const pexprs$j = pexprsMain;
const util$6 = util$7;
let BuiltInRules;
util$6.awaitBuiltInRules((g)=>{
    BuiltInRules = g;
});
let lexifyCount;
pexprs$j.PExpr.prototype.assertAllApplicationsAreValid = function(ruleName, grammar) {
    lexifyCount = 0;
    this._assertAllApplicationsAreValid(ruleName, grammar);
};
pexprs$j.PExpr.prototype._assertAllApplicationsAreValid = __abstract('_assertAllApplicationsAreValid');
pexprs$j.any._assertAllApplicationsAreValid = pexprs$j.end._assertAllApplicationsAreValid = pexprs$j.Terminal.prototype._assertAllApplicationsAreValid = pexprs$j.Range.prototype._assertAllApplicationsAreValid = pexprs$j.Param.prototype._assertAllApplicationsAreValid = pexprs$j.UnicodeChar.prototype._assertAllApplicationsAreValid = function(ruleName, grammar) {};
pexprs$j.Lex.prototype._assertAllApplicationsAreValid = function(ruleName, grammar) {
    lexifyCount++;
    this.expr._assertAllApplicationsAreValid(ruleName, grammar);
    lexifyCount--;
};
pexprs$j.Alt.prototype._assertAllApplicationsAreValid = function(ruleName, grammar) {
    for(let idx = 0; idx < this.terms.length; idx++){
        this.terms[idx]._assertAllApplicationsAreValid(ruleName, grammar);
    }
};
pexprs$j.Seq.prototype._assertAllApplicationsAreValid = function(ruleName, grammar) {
    for(let idx = 0; idx < this.factors.length; idx++){
        this.factors[idx]._assertAllApplicationsAreValid(ruleName, grammar);
    }
};
pexprs$j.Iter.prototype._assertAllApplicationsAreValid = pexprs$j.Not.prototype._assertAllApplicationsAreValid = pexprs$j.Lookahead.prototype._assertAllApplicationsAreValid = function(ruleName, grammar) {
    this.expr._assertAllApplicationsAreValid(ruleName, grammar);
};
pexprs$j.Apply.prototype._assertAllApplicationsAreValid = function(ruleName, grammar, skipSyntacticCheck = false) {
    const ruleInfo = grammar.rules[this.ruleName];
    const isContextSyntactic = isSyntactic(ruleName) && lexifyCount === 0;
    if (!ruleInfo) {
        throw errors$8.undeclaredRule(this.ruleName, grammar.name, this.source);
    }
    if (!skipSyntacticCheck && isSyntactic(this.ruleName) && !isContextSyntactic) {
        throw errors$8.applicationOfSyntacticRuleFromLexicalContext(this.ruleName, this);
    }
    const actual = this.args.length;
    const expected = ruleInfo.formals.length;
    if (actual !== expected) {
        throw errors$8.wrongNumberOfArguments(this.ruleName, expected, actual, this.source);
    }
    const isBuiltInApplySyntactic = BuiltInRules && ruleInfo === BuiltInRules.rules.applySyntactic;
    const isBuiltInCaseInsensitive = BuiltInRules && ruleInfo === BuiltInRules.rules.caseInsensitive;
    if (isBuiltInCaseInsensitive) {
        if (!(this.args[0] instanceof pexprs$j.Terminal)) {
            throw errors$8.incorrectArgumentType('a Terminal (e.g. "abc")', this.args[0]);
        }
    }
    if (isBuiltInApplySyntactic) {
        const arg = this.args[0];
        if (!(arg instanceof pexprs$j.Apply)) {
            throw errors$8.incorrectArgumentType('a syntactic rule application', arg);
        }
        if (!isSyntactic(arg.ruleName)) {
            throw errors$8.applySyntacticWithLexicalRuleApplication(arg);
        }
        if (isContextSyntactic) {
            throw errors$8.unnecessaryExperimentalApplySyntactic(this);
        }
    }
    this.args.forEach((arg)=>{
        arg._assertAllApplicationsAreValid(ruleName, grammar, isBuiltInApplySyntactic);
        if (arg.getArity() !== 1) {
            throw errors$8.invalidParameter(this.ruleName, arg);
        }
    });
};
const common$h = common$l;
const errors$7 = errors$9;
const pexprs$i = pexprsMain;
pexprs$i.PExpr.prototype.assertChoicesHaveUniformArity = common$h.abstract('assertChoicesHaveUniformArity');
pexprs$i.any.assertChoicesHaveUniformArity = pexprs$i.end.assertChoicesHaveUniformArity = pexprs$i.Terminal.prototype.assertChoicesHaveUniformArity = pexprs$i.Range.prototype.assertChoicesHaveUniformArity = pexprs$i.Param.prototype.assertChoicesHaveUniformArity = pexprs$i.Lex.prototype.assertChoicesHaveUniformArity = pexprs$i.UnicodeChar.prototype.assertChoicesHaveUniformArity = function(ruleName) {};
pexprs$i.Alt.prototype.assertChoicesHaveUniformArity = function(ruleName) {
    if (this.terms.length === 0) {
        return;
    }
    const arity = this.terms[0].getArity();
    for(let idx = 0; idx < this.terms.length; idx++){
        const term = this.terms[idx];
        term.assertChoicesHaveUniformArity();
        const otherArity = term.getArity();
        if (arity !== otherArity) {
            throw errors$7.inconsistentArity(ruleName, arity, otherArity, term);
        }
    }
};
pexprs$i.Extend.prototype.assertChoicesHaveUniformArity = function(ruleName) {
    const actualArity = this.terms[0].getArity();
    const expectedArity = this.terms[1].getArity();
    if (actualArity !== expectedArity) {
        throw errors$7.inconsistentArity(ruleName, expectedArity, actualArity, this.terms[0]);
    }
};
pexprs$i.Seq.prototype.assertChoicesHaveUniformArity = function(ruleName) {
    for(let idx = 0; idx < this.factors.length; idx++){
        this.factors[idx].assertChoicesHaveUniformArity(ruleName);
    }
};
pexprs$i.Iter.prototype.assertChoicesHaveUniformArity = function(ruleName) {
    this.expr.assertChoicesHaveUniformArity(ruleName);
};
pexprs$i.Not.prototype.assertChoicesHaveUniformArity = function(ruleName) {};
pexprs$i.Lookahead.prototype.assertChoicesHaveUniformArity = function(ruleName) {
    this.expr.assertChoicesHaveUniformArity(ruleName);
};
pexprs$i.Apply.prototype.assertChoicesHaveUniformArity = function(ruleName) {};
const common$g = common$l;
const errors$6 = errors$9;
const pexprs$h = pexprsMain;
pexprs$h.PExpr.prototype.assertIteratedExprsAreNotNullable = common$g.abstract('assertIteratedExprsAreNotNullable');
pexprs$h.any.assertIteratedExprsAreNotNullable = pexprs$h.end.assertIteratedExprsAreNotNullable = pexprs$h.Terminal.prototype.assertIteratedExprsAreNotNullable = pexprs$h.Range.prototype.assertIteratedExprsAreNotNullable = pexprs$h.Param.prototype.assertIteratedExprsAreNotNullable = pexprs$h.UnicodeChar.prototype.assertIteratedExprsAreNotNullable = function(grammar) {};
pexprs$h.Alt.prototype.assertIteratedExprsAreNotNullable = function(grammar) {
    for(let idx = 0; idx < this.terms.length; idx++){
        this.terms[idx].assertIteratedExprsAreNotNullable(grammar);
    }
};
pexprs$h.Seq.prototype.assertIteratedExprsAreNotNullable = function(grammar) {
    for(let idx = 0; idx < this.factors.length; idx++){
        this.factors[idx].assertIteratedExprsAreNotNullable(grammar);
    }
};
pexprs$h.Iter.prototype.assertIteratedExprsAreNotNullable = function(grammar) {
    this.expr.assertIteratedExprsAreNotNullable(grammar);
    if (this.expr.isNullable(grammar)) {
        throw errors$6.kleeneExprHasNullableOperand(this, []);
    }
};
pexprs$h.Opt.prototype.assertIteratedExprsAreNotNullable = pexprs$h.Not.prototype.assertIteratedExprsAreNotNullable = pexprs$h.Lookahead.prototype.assertIteratedExprsAreNotNullable = pexprs$h.Lex.prototype.assertIteratedExprsAreNotNullable = function(grammar) {
    this.expr.assertIteratedExprsAreNotNullable(grammar);
};
pexprs$h.Apply.prototype.assertIteratedExprsAreNotNullable = function(grammar) {
    this.args.forEach((arg)=>{
        arg.assertIteratedExprsAreNotNullable(grammar);
    });
};
const { assert: assert$2  } = common$l;
const errors$5 = errors$9;
const util$5 = util$7;
function Interval$3(sourceString, startIdx, endIdx) {
    this.sourceString = sourceString;
    this.startIdx = startIdx;
    this.endIdx = endIdx;
}
Interval$3.coverage = function(firstInterval, ...intervals) {
    let { startIdx , endIdx  } = firstInterval;
    for (const interval of intervals){
        if (interval.sourceString !== firstInterval.sourceString) {
            throw errors$5.intervalSourcesDontMatch();
        } else {
            startIdx = Math.min(startIdx, interval.startIdx);
            endIdx = Math.max(endIdx, interval.endIdx);
        }
    }
    return new Interval$3(firstInterval.sourceString, startIdx, endIdx);
};
Interval$3.prototype = {
    coverageWith (...intervals) {
        return Interval$3.coverage(...intervals, this);
    },
    collapsedLeft () {
        return new Interval$3(this.sourceString, this.startIdx, this.startIdx);
    },
    collapsedRight () {
        return new Interval$3(this.sourceString, this.endIdx, this.endIdx);
    },
    getLineAndColumn () {
        return util$5.getLineAndColumn(this.sourceString, this.startIdx);
    },
    getLineAndColumnMessage () {
        const range = [
            this.startIdx,
            this.endIdx
        ];
        return util$5.getLineAndColumnMessage(this.sourceString, this.startIdx, range);
    },
    minus (that) {
        if (this.sourceString !== that.sourceString) {
            throw errors$5.intervalSourcesDontMatch();
        } else if (this.startIdx === that.startIdx && this.endIdx === that.endIdx) {
            return [];
        } else if (this.startIdx < that.startIdx && that.endIdx < this.endIdx) {
            return [
                new Interval$3(this.sourceString, this.startIdx, that.startIdx),
                new Interval$3(this.sourceString, that.endIdx, this.endIdx)
            ];
        } else if (this.startIdx < that.endIdx && that.endIdx < this.endIdx) {
            return [
                new Interval$3(this.sourceString, that.endIdx, this.endIdx)
            ];
        } else if (this.startIdx < that.startIdx && that.startIdx < this.endIdx) {
            return [
                new Interval$3(this.sourceString, this.startIdx, that.startIdx)
            ];
        } else {
            return [
                this
            ];
        }
    },
    relativeTo (that) {
        if (this.sourceString !== that.sourceString) {
            throw errors$5.intervalSourcesDontMatch();
        }
        assert$2(this.startIdx >= that.startIdx && this.endIdx <= that.endIdx, 'other interval does not cover this one');
        return new Interval$3(this.sourceString, this.startIdx - that.startIdx, this.endIdx - that.startIdx);
    },
    trimmed () {
        const { contents  } = this;
        const startIdx = this.startIdx + contents.match(/^\s*/)[0].length;
        const endIdx = this.endIdx - contents.match(/\s*$/)[0].length;
        return new Interval$3(this.sourceString, startIdx, endIdx);
    },
    subInterval (offset, len) {
        const newStartIdx = this.startIdx + offset;
        return new Interval$3(this.sourceString, newStartIdx, newStartIdx + len);
    }
};
Object.defineProperties(Interval$3.prototype, {
    contents: {
        get () {
            if (this._contents === undefined) {
                this._contents = this.sourceString.slice(this.startIdx, this.endIdx);
            }
            return this._contents;
        },
        enumerable: true
    },
    length: {
        get () {
            return this.endIdx - this.startIdx;
        },
        enumerable: true
    }
});
var Interval_1 = Interval$3;
const Interval$2 = Interval_1;
const common$f = common$l;
const BALLOT_X = '\u2717';
const CHECK_MARK = '\u2713';
const DOT_OPERATOR = '\u22C5';
const RIGHTWARDS_DOUBLE_ARROW = '\u21D2';
const SYMBOL_FOR_HORIZONTAL_TABULATION = '\u2409';
const SYMBOL_FOR_LINE_FEED = '\u240A';
const SYMBOL_FOR_CARRIAGE_RETURN = '\u240D';
const Flags = {
    succeeded: 1 << 0,
    isRootNode: 1 << 1,
    isImplicitSpaces: 1 << 2,
    isMemoized: 1 << 3,
    isHeadOfLeftRecursion: 1 << 4,
    terminatesLR: 1 << 5
};
function spaces(n) {
    return common$f.repeat(' ', n).join('');
}
function getInputExcerpt(input, pos, len) {
    const excerpt = asEscapedString(input.slice(pos, pos + len));
    if (excerpt.length < len) {
        return excerpt + common$f.repeat(' ', len - excerpt.length).join('');
    }
    return excerpt;
}
function asEscapedString(obj) {
    if (typeof obj === 'string') {
        return obj.replace(/ /g, DOT_OPERATOR).replace(/\t/g, SYMBOL_FOR_HORIZONTAL_TABULATION).replace(/\n/g, SYMBOL_FOR_LINE_FEED).replace(/\r/g, SYMBOL_FOR_CARRIAGE_RETURN);
    }
    return String(obj);
}
function Trace$2(input, pos1, pos2, expr, succeeded, bindings, optChildren) {
    this.input = input;
    this.pos = this.pos1 = pos1;
    this.pos2 = pos2;
    this.source = new Interval$2(input, pos1, pos2);
    this.expr = expr;
    this.bindings = bindings;
    this.children = optChildren || [];
    this.terminatingLREntry = null;
    this._flags = succeeded ? Flags.succeeded : 0;
}
Trace$2.prototype.SKIP = {};
Object.defineProperty(Trace$2.prototype, 'displayString', {
    get () {
        return this.expr.toDisplayString();
    }
});
Object.keys(Flags).forEach((name)=>{
    const mask = Flags[name];
    Object.defineProperty(Trace$2.prototype, name, {
        get () {
            return (this._flags & mask) !== 0;
        },
        set (val) {
            if (val) {
                this._flags |= mask;
            } else {
                this._flags &= ~mask;
            }
        }
    });
});
Trace$2.prototype.clone = function() {
    return this.cloneWithExpr(this.expr);
};
Trace$2.prototype.cloneWithExpr = function(expr) {
    const ans = new Trace$2(this.input, this.pos, this.pos2, expr, this.succeeded, this.bindings, this.children);
    ans.isHeadOfLeftRecursion = this.isHeadOfLeftRecursion;
    ans.isImplicitSpaces = this.isImplicitSpaces;
    ans.isMemoized = this.isMemoized;
    ans.isRootNode = this.isRootNode;
    ans.terminatesLR = this.terminatesLR;
    ans.terminatingLREntry = this.terminatingLREntry;
    return ans;
};
Trace$2.prototype.recordLRTermination = function(ruleBodyTrace, value) {
    this.terminatingLREntry = new Trace$2(this.input, this.pos, this.pos2, this.expr, false, [
        value
    ], [
        ruleBodyTrace
    ]);
    this.terminatingLREntry.terminatesLR = true;
};
Trace$2.prototype.walk = function(visitorObjOrFn, optThisArg) {
    let visitor = visitorObjOrFn;
    if (typeof visitor === 'function') {
        visitor = {
            enter: visitor
        };
    }
    function _walk(node, parent, depth) {
        let recurse = true;
        if (visitor.enter) {
            if (visitor.enter.call(optThisArg, node, parent, depth) === Trace$2.prototype.SKIP) {
                recurse = false;
            }
        }
        if (recurse) {
            node.children.forEach((child)=>{
                _walk(child, node, depth + 1);
            });
            if (visitor.exit) {
                visitor.exit.call(optThisArg, node, parent, depth);
            }
        }
    }
    if (this.isRootNode) {
        this.children.forEach((c)=>{
            _walk(c, null, 0);
        });
    } else {
        _walk(this, null, 0);
    }
};
Trace$2.prototype.toString = function() {
    const sb = new common$f.StringBuffer();
    this.walk((node, parent, depth)=>{
        if (!node) {
            return this.SKIP;
        }
        const ctorName = node.expr.constructor.name;
        if (ctorName === 'Alt') {
            return;
        }
        sb.append(getInputExcerpt(node.input, node.pos, 10) + spaces(depth * 2 + 1));
        sb.append((node.succeeded ? CHECK_MARK : BALLOT_X) + ' ' + node.displayString);
        if (node.isHeadOfLeftRecursion) {
            sb.append(' (LR)');
        }
        if (node.succeeded) {
            const contents = asEscapedString(node.source.contents);
            sb.append(' ' + RIGHTWARDS_DOUBLE_ARROW + '  ');
            sb.append(typeof contents === 'string' ? '"' + contents + '"' : contents);
        }
        sb.append('\n');
    });
    return sb.contents();
};
var Trace_1 = Trace$2;
const Trace$1 = Trace_1;
const common$e = common$l;
const errors$4 = errors$9;
const nodes = nodes$1;
const pexprs$g = pexprsMain;
const { TerminalNode: TerminalNode$1  } = nodes;
const { NonterminalNode  } = nodes;
const { IterationNode: IterationNode$1  } = nodes;
pexprs$g.PExpr.prototype.eval = common$e.abstract('eval');
pexprs$g.any.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    const ch = inputStream.next();
    if (ch) {
        state.pushBinding(new TerminalNode$1(ch.length), origPos);
        return true;
    } else {
        state.processFailure(origPos, this);
        return false;
    }
};
pexprs$g.end.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    if (inputStream.atEnd()) {
        state.pushBinding(new TerminalNode$1(0), origPos);
        return true;
    } else {
        state.processFailure(origPos, this);
        return false;
    }
};
pexprs$g.Terminal.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    if (!inputStream.matchString(this.obj)) {
        state.processFailure(origPos, this);
        return false;
    } else {
        state.pushBinding(new TerminalNode$1(this.obj.length), origPos);
        return true;
    }
};
pexprs$g.Range.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    const cp = this.matchCodePoint ? inputStream.nextCodePoint() : inputStream.nextCharCode();
    if (cp !== undefined && this.from.codePointAt(0) <= cp && cp <= this.to.codePointAt(0)) {
        state.pushBinding(new TerminalNode$1(String.fromCodePoint(cp).length), origPos);
        return true;
    } else {
        state.processFailure(origPos, this);
        return false;
    }
};
pexprs$g.Param.prototype.eval = function(state) {
    return state.eval(state.currentApplication().args[this.index]);
};
pexprs$g.Lex.prototype.eval = function(state) {
    state.enterLexifiedContext();
    const ans = state.eval(this.expr);
    state.exitLexifiedContext();
    return ans;
};
pexprs$g.Alt.prototype.eval = function(state) {
    for(let idx = 0; idx < this.terms.length; idx++){
        if (state.eval(this.terms[idx])) {
            return true;
        }
    }
    return false;
};
pexprs$g.Seq.prototype.eval = function(state) {
    for(let idx = 0; idx < this.factors.length; idx++){
        const factor = this.factors[idx];
        if (!state.eval(factor)) {
            return false;
        }
    }
    return true;
};
pexprs$g.Iter.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    const arity = this.getArity();
    const cols = [];
    const colOffsets = [];
    while(cols.length < arity){
        cols.push([]);
        colOffsets.push([]);
    }
    let numMatches = 0;
    let prevPos = origPos;
    let idx;
    while(numMatches < this.maxNumMatches && state.eval(this.expr)){
        if (inputStream.pos === prevPos) {
            throw errors$4.kleeneExprHasNullableOperand(this, state._applicationStack);
        }
        prevPos = inputStream.pos;
        numMatches++;
        const row = state._bindings.splice(state._bindings.length - arity, arity);
        const rowOffsets = state._bindingOffsets.splice(state._bindingOffsets.length - arity, arity);
        for(idx = 0; idx < row.length; idx++){
            cols[idx].push(row[idx]);
            colOffsets[idx].push(rowOffsets[idx]);
        }
    }
    if (numMatches < this.minNumMatches) {
        return false;
    }
    let offset = state.posToOffset(origPos);
    let matchLength = 0;
    if (numMatches > 0) {
        const lastCol = cols[arity - 1];
        const lastColOffsets = colOffsets[arity - 1];
        const endOffset = lastColOffsets[lastColOffsets.length - 1] + lastCol[lastCol.length - 1].matchLength;
        offset = colOffsets[0][0];
        matchLength = endOffset - offset;
    }
    const isOptional = this instanceof pexprs$g.Opt;
    for(idx = 0; idx < cols.length; idx++){
        state._bindings.push(new IterationNode$1(cols[idx], colOffsets[idx], matchLength, isOptional));
        state._bindingOffsets.push(offset);
    }
    return true;
};
pexprs$g.Not.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    state.pushFailuresInfo();
    const ans = state.eval(this.expr);
    state.popFailuresInfo();
    if (ans) {
        state.processFailure(origPos, this);
        return false;
    }
    inputStream.pos = origPos;
    return true;
};
pexprs$g.Lookahead.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    if (state.eval(this.expr)) {
        inputStream.pos = origPos;
        return true;
    } else {
        return false;
    }
};
pexprs$g.Apply.prototype.eval = function(state) {
    const caller = state.currentApplication();
    const actuals = caller ? caller.args : [];
    const app = this.substituteParams(actuals);
    const posInfo = state.getCurrentPosInfo();
    if (posInfo.isActive(app)) {
        return app.handleCycle(state);
    }
    const memoKey = app.toMemoKey();
    const memoRec = posInfo.memo[memoKey];
    if (memoRec && posInfo.shouldUseMemoizedResult(memoRec)) {
        if (state.hasNecessaryInfo(memoRec)) {
            return state.useMemoizedResult(state.inputStream.pos, memoRec);
        }
        delete posInfo.memo[memoKey];
    }
    return app.reallyEval(state);
};
pexprs$g.Apply.prototype.handleCycle = function(state) {
    const posInfo = state.getCurrentPosInfo();
    const { currentLeftRecursion  } = posInfo;
    const memoKey = this.toMemoKey();
    let memoRec = posInfo.memo[memoKey];
    if (currentLeftRecursion && currentLeftRecursion.headApplication.toMemoKey() === memoKey) {
        memoRec.updateInvolvedApplicationMemoKeys();
    } else if (!memoRec) {
        memoRec = posInfo.memoize(memoKey, {
            matchLength: 0,
            examinedLength: 0,
            value: false,
            rightmostFailureOffset: -1
        });
        posInfo.startLeftRecursion(this, memoRec);
    }
    return state.useMemoizedResult(state.inputStream.pos, memoRec);
};
pexprs$g.Apply.prototype.reallyEval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    const origPosInfo = state.getCurrentPosInfo();
    const ruleInfo = state.grammar.rules[this.ruleName];
    const { body  } = ruleInfo;
    const { description  } = ruleInfo;
    state.enterApplication(origPosInfo, this);
    if (description) {
        state.pushFailuresInfo();
    }
    const origInputStreamExaminedLength = inputStream.examinedLength;
    inputStream.examinedLength = 0;
    let value = this.evalOnce(body, state);
    const currentLR = origPosInfo.currentLeftRecursion;
    const memoKey = this.toMemoKey();
    const isHeadOfLeftRecursion = currentLR && currentLR.headApplication.toMemoKey() === memoKey;
    let memoRec;
    if (isHeadOfLeftRecursion) {
        value = this.growSeedResult(body, state, origPos, currentLR, value);
        origPosInfo.endLeftRecursion();
        memoRec = currentLR;
        memoRec.examinedLength = inputStream.examinedLength - origPos;
        memoRec.rightmostFailureOffset = state._getRightmostFailureOffset();
        origPosInfo.memoize(memoKey, memoRec);
    } else if (!currentLR || !currentLR.isInvolved(memoKey)) {
        memoRec = origPosInfo.memoize(memoKey, {
            matchLength: inputStream.pos - origPos,
            examinedLength: inputStream.examinedLength - origPos,
            value,
            failuresAtRightmostPosition: state.cloneRecordedFailures(),
            rightmostFailureOffset: state._getRightmostFailureOffset()
        });
    }
    const succeeded = !!value;
    if (description) {
        state.popFailuresInfo();
        if (!succeeded) {
            state.processFailure(origPos, this);
        }
        if (memoRec) {
            memoRec.failuresAtRightmostPosition = state.cloneRecordedFailures();
        }
    }
    if (state.isTracing() && memoRec) {
        const entry = state.getTraceEntry(origPos, this, succeeded, succeeded ? [
            value
        ] : []);
        if (isHeadOfLeftRecursion) {
            common$e.assert(entry.terminatingLREntry != null || !succeeded);
            entry.isHeadOfLeftRecursion = true;
        }
        memoRec.traceEntry = entry;
    }
    inputStream.examinedLength = Math.max(inputStream.examinedLength, origInputStreamExaminedLength);
    state.exitApplication(origPosInfo, value);
    return succeeded;
};
pexprs$g.Apply.prototype.evalOnce = function(expr, state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    if (state.eval(expr)) {
        const arity = expr.getArity();
        const bindings = state._bindings.splice(state._bindings.length - arity, arity);
        const offsets = state._bindingOffsets.splice(state._bindingOffsets.length - arity, arity);
        const matchLength = inputStream.pos - origPos;
        return new NonterminalNode(this.ruleName, bindings, offsets, matchLength);
    } else {
        return false;
    }
};
pexprs$g.Apply.prototype.growSeedResult = function(body, state, origPos, lrMemoRec, newValue) {
    if (!newValue) {
        return false;
    }
    const { inputStream  } = state;
    while(true){
        lrMemoRec.matchLength = inputStream.pos - origPos;
        lrMemoRec.value = newValue;
        lrMemoRec.failuresAtRightmostPosition = state.cloneRecordedFailures();
        if (state.isTracing()) {
            const seedTrace = state.trace[state.trace.length - 1];
            lrMemoRec.traceEntry = new Trace$1(state.input, origPos, inputStream.pos, this, true, [
                newValue
            ], [
                seedTrace.clone()
            ]);
        }
        inputStream.pos = origPos;
        newValue = this.evalOnce(body, state);
        if (inputStream.pos - origPos <= lrMemoRec.matchLength) {
            break;
        }
        if (state.isTracing()) {
            state.trace.splice(-2, 1);
        }
    }
    if (state.isTracing()) {
        lrMemoRec.traceEntry.recordLRTermination(state.trace.pop(), newValue);
    }
    inputStream.pos = origPos + lrMemoRec.matchLength;
    return lrMemoRec.value;
};
pexprs$g.UnicodeChar.prototype.eval = function(state) {
    const { inputStream  } = state;
    const origPos = inputStream.pos;
    const ch = inputStream.next();
    if (ch && this.pattern.test(ch)) {
        state.pushBinding(new TerminalNode$1(ch.length), origPos);
        return true;
    } else {
        state.processFailure(origPos, this);
        return false;
    }
};
const common$d = common$l;
const pexprs$f = pexprsMain;
pexprs$f.PExpr.prototype.getArity = common$d.abstract('getArity');
pexprs$f.any.getArity = pexprs$f.end.getArity = pexprs$f.Terminal.prototype.getArity = pexprs$f.Range.prototype.getArity = pexprs$f.Param.prototype.getArity = pexprs$f.Apply.prototype.getArity = pexprs$f.UnicodeChar.prototype.getArity = function() {
    return 1;
};
pexprs$f.Alt.prototype.getArity = function() {
    return this.terms.length === 0 ? 0 : this.terms[0].getArity();
};
pexprs$f.Seq.prototype.getArity = function() {
    let arity = 0;
    for(let idx = 0; idx < this.factors.length; idx++){
        arity += this.factors[idx].getArity();
    }
    return arity;
};
pexprs$f.Iter.prototype.getArity = function() {
    return this.expr.getArity();
};
pexprs$f.Not.prototype.getArity = function() {
    return 0;
};
pexprs$f.Lookahead.prototype.getArity = pexprs$f.Lex.prototype.getArity = function() {
    return this.expr.getArity();
};
const common$c = common$l;
const pexprs$e = pexprsMain;
function getMetaInfo(expr, grammarInterval) {
    const metaInfo = {};
    if (expr.source && grammarInterval) {
        const adjusted = expr.source.relativeTo(grammarInterval);
        metaInfo.sourceInterval = [
            adjusted.startIdx,
            adjusted.endIdx
        ];
    }
    return metaInfo;
}
pexprs$e.PExpr.prototype.outputRecipe = common$c.abstract('outputRecipe');
pexprs$e.any.outputRecipe = function(formals, grammarInterval) {
    return [
        'any',
        getMetaInfo(this, grammarInterval)
    ];
};
pexprs$e.end.outputRecipe = function(formals, grammarInterval) {
    return [
        'end',
        getMetaInfo(this, grammarInterval)
    ];
};
pexprs$e.Terminal.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'terminal',
        getMetaInfo(this, grammarInterval),
        this.obj
    ];
};
pexprs$e.Range.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'range',
        getMetaInfo(this, grammarInterval),
        this.from,
        this.to
    ];
};
pexprs$e.Param.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'param',
        getMetaInfo(this, grammarInterval),
        this.index
    ];
};
pexprs$e.Alt.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'alt',
        getMetaInfo(this, grammarInterval)
    ].concat(this.terms.map((term)=>term.outputRecipe(formals, grammarInterval)));
};
pexprs$e.Extend.prototype.outputRecipe = function(formals, grammarInterval) {
    const extension = this.terms[0];
    return extension.outputRecipe(formals, grammarInterval);
};
pexprs$e.Splice.prototype.outputRecipe = function(formals, grammarInterval) {
    const beforeTerms = this.terms.slice(0, this.expansionPos);
    const afterTerms = this.terms.slice(this.expansionPos + 1);
    return [
        'splice',
        getMetaInfo(this, grammarInterval),
        beforeTerms.map((term)=>term.outputRecipe(formals, grammarInterval)),
        afterTerms.map((term)=>term.outputRecipe(formals, grammarInterval))
    ];
};
pexprs$e.Seq.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'seq',
        getMetaInfo(this, grammarInterval)
    ].concat(this.factors.map((factor)=>factor.outputRecipe(formals, grammarInterval)));
};
pexprs$e.Star.prototype.outputRecipe = pexprs$e.Plus.prototype.outputRecipe = pexprs$e.Opt.prototype.outputRecipe = pexprs$e.Not.prototype.outputRecipe = pexprs$e.Lookahead.prototype.outputRecipe = pexprs$e.Lex.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        this.constructor.name.toLowerCase(),
        getMetaInfo(this, grammarInterval),
        this.expr.outputRecipe(formals, grammarInterval)
    ];
};
pexprs$e.Apply.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'app',
        getMetaInfo(this, grammarInterval),
        this.ruleName,
        this.args.map((arg)=>arg.outputRecipe(formals, grammarInterval))
    ];
};
pexprs$e.UnicodeChar.prototype.outputRecipe = function(formals, grammarInterval) {
    return [
        'unicodeChar',
        getMetaInfo(this, grammarInterval),
        this.category
    ];
};
const common$b = common$l;
const pexprs$d = pexprsMain;
pexprs$d.PExpr.prototype.introduceParams = common$b.abstract('introduceParams');
pexprs$d.any.introduceParams = pexprs$d.end.introduceParams = pexprs$d.Terminal.prototype.introduceParams = pexprs$d.Range.prototype.introduceParams = pexprs$d.Param.prototype.introduceParams = pexprs$d.UnicodeChar.prototype.introduceParams = function(formals) {
    return this;
};
pexprs$d.Alt.prototype.introduceParams = function(formals) {
    this.terms.forEach((term, idx, terms)=>{
        terms[idx] = term.introduceParams(formals);
    });
    return this;
};
pexprs$d.Seq.prototype.introduceParams = function(formals) {
    this.factors.forEach((factor, idx, factors)=>{
        factors[idx] = factor.introduceParams(formals);
    });
    return this;
};
pexprs$d.Iter.prototype.introduceParams = pexprs$d.Not.prototype.introduceParams = pexprs$d.Lookahead.prototype.introduceParams = pexprs$d.Lex.prototype.introduceParams = function(formals) {
    this.expr = this.expr.introduceParams(formals);
    return this;
};
pexprs$d.Apply.prototype.introduceParams = function(formals) {
    const index = formals.indexOf(this.ruleName);
    if (index >= 0) {
        if (this.args.length > 0) {
            throw new Error('Parameterized rules cannot be passed as arguments to another rule.');
        }
        return new pexprs$d.Param(index).withSource(this.source);
    } else {
        this.args.forEach((arg, idx, args)=>{
            args[idx] = arg.introduceParams(formals);
        });
        return this;
    }
};
const common$a = common$l;
const pexprs$c = pexprsMain;
pexprs$c.PExpr.prototype.isNullable = function(grammar) {
    return this._isNullable(grammar, Object.create(null));
};
pexprs$c.PExpr.prototype._isNullable = common$a.abstract('_isNullable');
pexprs$c.any._isNullable = pexprs$c.Range.prototype._isNullable = pexprs$c.Param.prototype._isNullable = pexprs$c.Plus.prototype._isNullable = pexprs$c.UnicodeChar.prototype._isNullable = function(grammar, memo) {
    return false;
};
pexprs$c.end._isNullable = function(grammar, memo) {
    return true;
};
pexprs$c.Terminal.prototype._isNullable = function(grammar, memo) {
    if (typeof this.obj === 'string') {
        return this.obj === '';
    } else {
        return false;
    }
};
pexprs$c.Alt.prototype._isNullable = function(grammar, memo) {
    return this.terms.length === 0 || this.terms.some((term)=>term._isNullable(grammar, memo));
};
pexprs$c.Seq.prototype._isNullable = function(grammar, memo) {
    return this.factors.every((factor)=>factor._isNullable(grammar, memo));
};
pexprs$c.Star.prototype._isNullable = pexprs$c.Opt.prototype._isNullable = pexprs$c.Not.prototype._isNullable = pexprs$c.Lookahead.prototype._isNullable = function(grammar, memo) {
    return true;
};
pexprs$c.Lex.prototype._isNullable = function(grammar, memo) {
    return this.expr._isNullable(grammar, memo);
};
pexprs$c.Apply.prototype._isNullable = function(grammar, memo) {
    const key = this.toMemoKey();
    if (!Object.prototype.hasOwnProperty.call(memo, key)) {
        const { body  } = grammar.rules[this.ruleName];
        const inlined = body.substituteParams(this.args);
        memo[key] = false;
        memo[key] = inlined._isNullable(grammar, memo);
    }
    return memo[key];
};
const common$9 = common$l;
const pexprs$b = pexprsMain;
pexprs$b.PExpr.prototype.substituteParams = common$9.abstract('substituteParams');
pexprs$b.any.substituteParams = pexprs$b.end.substituteParams = pexprs$b.Terminal.prototype.substituteParams = pexprs$b.Range.prototype.substituteParams = pexprs$b.UnicodeChar.prototype.substituteParams = function(actuals) {
    return this;
};
pexprs$b.Param.prototype.substituteParams = function(actuals) {
    return actuals[this.index];
};
pexprs$b.Alt.prototype.substituteParams = function(actuals) {
    return new pexprs$b.Alt(this.terms.map((term)=>term.substituteParams(actuals)));
};
pexprs$b.Seq.prototype.substituteParams = function(actuals) {
    return new pexprs$b.Seq(this.factors.map((factor)=>factor.substituteParams(actuals)));
};
pexprs$b.Iter.prototype.substituteParams = pexprs$b.Not.prototype.substituteParams = pexprs$b.Lookahead.prototype.substituteParams = pexprs$b.Lex.prototype.substituteParams = function(actuals) {
    return new this.constructor(this.expr.substituteParams(actuals));
};
pexprs$b.Apply.prototype.substituteParams = function(actuals) {
    if (this.args.length === 0) {
        return this;
    } else {
        const args = this.args.map((arg)=>arg.substituteParams(actuals));
        return new pexprs$b.Apply(this.ruleName, args);
    }
};
const common$8 = common$l;
const pexprs$a = pexprsMain;
const { copyWithoutDuplicates  } = common$8;
function isRestrictedJSIdentifier(str) {
    return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(str);
}
function resolveDuplicatedNames(argumentNameList) {
    const count = Object.create(null);
    argumentNameList.forEach((argName)=>{
        count[argName] = (count[argName] || 0) + 1;
    });
    Object.keys(count).forEach((dupArgName)=>{
        if (count[dupArgName] <= 1) {
            return;
        }
        let subscript = 1;
        argumentNameList.forEach((argName, idx)=>{
            if (argName === dupArgName) {
                argumentNameList[idx] = argName + '_' + subscript++;
            }
        });
    });
}
pexprs$a.PExpr.prototype.toArgumentNameList = common$8.abstract('toArgumentNameList');
pexprs$a.any.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [
        'any'
    ];
};
pexprs$a.end.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [
        'end'
    ];
};
pexprs$a.Terminal.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    if (typeof this.obj === 'string' && /^[_a-zA-Z0-9]+$/.test(this.obj)) {
        return [
            '_' + this.obj
        ];
    } else {
        return [
            '$' + firstArgIndex
        ];
    }
};
pexprs$a.Range.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    let argName = this.from + '_to_' + this.to;
    if (!isRestrictedJSIdentifier(argName)) {
        argName = '_' + argName;
    }
    if (!isRestrictedJSIdentifier(argName)) {
        argName = '$' + firstArgIndex;
    }
    return [
        argName
    ];
};
pexprs$a.Alt.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    const termArgNameLists = this.terms.map((term)=>term.toArgumentNameList(firstArgIndex, true));
    const argumentNameList = [];
    const numArgs = termArgNameLists[0].length;
    for(let colIdx = 0; colIdx < numArgs; colIdx++){
        const col = [];
        for(let rowIdx = 0; rowIdx < this.terms.length; rowIdx++){
            col.push(termArgNameLists[rowIdx][colIdx]);
        }
        const uniqueNames = copyWithoutDuplicates(col);
        argumentNameList.push(uniqueNames.join('_or_'));
    }
    if (!noDupCheck) {
        resolveDuplicatedNames(argumentNameList);
    }
    return argumentNameList;
};
pexprs$a.Seq.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    let argumentNameList = [];
    this.factors.forEach((factor)=>{
        const factorArgumentNameList = factor.toArgumentNameList(firstArgIndex, true);
        argumentNameList = argumentNameList.concat(factorArgumentNameList);
        firstArgIndex += factorArgumentNameList.length;
    });
    if (!noDupCheck) {
        resolveDuplicatedNames(argumentNameList);
    }
    return argumentNameList;
};
pexprs$a.Iter.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    const argumentNameList = this.expr.toArgumentNameList(firstArgIndex, noDupCheck).map((exprArgumentString)=>exprArgumentString[exprArgumentString.length - 1] === 's' ? exprArgumentString + 'es' : exprArgumentString + 's');
    if (!noDupCheck) {
        resolveDuplicatedNames(argumentNameList);
    }
    return argumentNameList;
};
pexprs$a.Opt.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return this.expr.toArgumentNameList(firstArgIndex, noDupCheck).map((argName)=>{
        return 'opt' + argName[0].toUpperCase() + argName.slice(1);
    });
};
pexprs$a.Not.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [];
};
pexprs$a.Lookahead.prototype.toArgumentNameList = pexprs$a.Lex.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return this.expr.toArgumentNameList(firstArgIndex, noDupCheck);
};
pexprs$a.Apply.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [
        this.ruleName
    ];
};
pexprs$a.UnicodeChar.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [
        '$' + firstArgIndex
    ];
};
pexprs$a.Param.prototype.toArgumentNameList = function(firstArgIndex, noDupCheck) {
    return [
        'param' + this.index
    ];
};
const common$7 = common$l;
const pexprs$9 = pexprsMain;
pexprs$9.PExpr.prototype.toDisplayString = common$7.abstract('toDisplayString');
pexprs$9.Alt.prototype.toDisplayString = pexprs$9.Seq.prototype.toDisplayString = function() {
    if (this.source) {
        return this.source.trimmed().contents;
    }
    return '[' + this.constructor.name + ']';
};
pexprs$9.any.toDisplayString = pexprs$9.end.toDisplayString = pexprs$9.Iter.prototype.toDisplayString = pexprs$9.Not.prototype.toDisplayString = pexprs$9.Lookahead.prototype.toDisplayString = pexprs$9.Lex.prototype.toDisplayString = pexprs$9.Terminal.prototype.toDisplayString = pexprs$9.Range.prototype.toDisplayString = pexprs$9.Param.prototype.toDisplayString = function() {
    return this.toString();
};
pexprs$9.Apply.prototype.toDisplayString = function() {
    if (this.args.length > 0) {
        const ps = this.args.map((arg)=>arg.toDisplayString());
        return this.ruleName + '<' + ps.join(',') + '>';
    } else {
        return this.ruleName;
    }
};
pexprs$9.UnicodeChar.prototype.toDisplayString = function() {
    return 'Unicode [' + this.category + '] character';
};
const Failure$1 = Failure_1;
const common$6 = common$l;
const pexprs$8 = pexprsMain;
pexprs$8.PExpr.prototype.toFailure = common$6.abstract('toFailure');
pexprs$8.any.toFailure = function(grammar) {
    return new Failure$1(this, 'any object', 'description');
};
pexprs$8.end.toFailure = function(grammar) {
    return new Failure$1(this, 'end of input', 'description');
};
pexprs$8.Terminal.prototype.toFailure = function(grammar) {
    return new Failure$1(this, this.obj, 'string');
};
pexprs$8.Range.prototype.toFailure = function(grammar) {
    return new Failure$1(this, JSON.stringify(this.from) + '..' + JSON.stringify(this.to), 'code');
};
pexprs$8.Not.prototype.toFailure = function(grammar) {
    const description = this.expr === pexprs$8.any ? 'nothing' : 'not ' + this.expr.toFailure(grammar);
    return new Failure$1(this, description, 'description');
};
pexprs$8.Lookahead.prototype.toFailure = function(grammar) {
    return this.expr.toFailure(grammar);
};
pexprs$8.Apply.prototype.toFailure = function(grammar) {
    let { description  } = grammar.rules[this.ruleName];
    if (!description) {
        const article = /^[aeiouAEIOU]/.test(this.ruleName) ? 'an' : 'a';
        description = article + ' ' + this.ruleName;
    }
    return new Failure$1(this, description, 'description');
};
pexprs$8.UnicodeChar.prototype.toFailure = function(grammar) {
    return new Failure$1(this, 'a Unicode [' + this.category + '] character', 'description');
};
pexprs$8.Alt.prototype.toFailure = function(grammar) {
    const fs = this.terms.map((t)=>t.toFailure(grammar));
    const description = '(' + fs.join(' or ') + ')';
    return new Failure$1(this, description, 'description');
};
pexprs$8.Seq.prototype.toFailure = function(grammar) {
    const fs = this.factors.map((f)=>f.toFailure(grammar));
    const description = '(' + fs.join(' ') + ')';
    return new Failure$1(this, description, 'description');
};
pexprs$8.Iter.prototype.toFailure = function(grammar) {
    const description = '(' + this.expr.toFailure(grammar) + this.operator + ')';
    return new Failure$1(this, description, 'description');
};
const common$5 = common$l;
const pexprs$7 = pexprsMain;
pexprs$7.PExpr.prototype.toString = common$5.abstract('toString');
pexprs$7.any.toString = function() {
    return 'any';
};
pexprs$7.end.toString = function() {
    return 'end';
};
pexprs$7.Terminal.prototype.toString = function() {
    return JSON.stringify(this.obj);
};
pexprs$7.Range.prototype.toString = function() {
    return JSON.stringify(this.from) + '..' + JSON.stringify(this.to);
};
pexprs$7.Param.prototype.toString = function() {
    return '$' + this.index;
};
pexprs$7.Lex.prototype.toString = function() {
    return '#(' + this.expr.toString() + ')';
};
pexprs$7.Alt.prototype.toString = function() {
    return this.terms.length === 1 ? this.terms[0].toString() : '(' + this.terms.map((term)=>term.toString()).join(' | ') + ')';
};
pexprs$7.Seq.prototype.toString = function() {
    return this.factors.length === 1 ? this.factors[0].toString() : '(' + this.factors.map((factor)=>factor.toString()).join(' ') + ')';
};
pexprs$7.Iter.prototype.toString = function() {
    return this.expr + this.operator;
};
pexprs$7.Not.prototype.toString = function() {
    return '~' + this.expr;
};
pexprs$7.Lookahead.prototype.toString = function() {
    return '&' + this.expr;
};
pexprs$7.Apply.prototype.toString = function() {
    if (this.args.length > 0) {
        const ps = this.args.map((arg)=>arg.toString());
        return this.ruleName + '<' + ps.join(',') + '>';
    } else {
        return this.ruleName;
    }
};
pexprs$7.UnicodeChar.prototype.toString = function() {
    return '\\p{' + this.category + '}';
};
var pexprs$6 = pexprsMain;
const Failure = Failure_1;
const { TerminalNode  } = nodes$1;
const { assert: assert$1  } = common$l;
const { PExpr , Terminal  } = pexprs$6;
class CaseInsensitiveTerminal$1 extends PExpr {
    constructor(param){
        super();
        this.obj = param;
    }
    _getString(state) {
        const terminal = state.currentApplication().args[this.obj.index];
        assert$1(terminal instanceof Terminal, 'expected a Terminal expression');
        return terminal.obj;
    }
    allowsSkippingPrecedingSpace() {
        return true;
    }
    eval(state) {
        const { inputStream  } = state;
        const origPos = inputStream.pos;
        const matchStr = this._getString(state);
        if (!inputStream.matchString(matchStr, true)) {
            state.processFailure(origPos, this);
            return false;
        } else {
            state.pushBinding(new TerminalNode(matchStr.length), origPos);
            return true;
        }
    }
    getArity() {
        return 1;
    }
    substituteParams(actuals) {
        return new CaseInsensitiveTerminal$1(this.obj.substituteParams(actuals));
    }
    toDisplayString() {
        return this.obj.toDisplayString() + ' (case-insensitive)';
    }
    toFailure(grammar) {
        return new Failure(this, this.obj.toFailure(grammar) + ' (case-insensitive)', 'description');
    }
    _isNullable(grammar, memo) {
        return this.obj._isNullable(grammar, memo);
    }
}
var CaseInsensitiveTerminal_1 = CaseInsensitiveTerminal$1;
const Interval$1 = Interval_1;
function InputStream$3(source) {
    this.source = source;
    this.pos = 0;
    this.examinedLength = 0;
}
InputStream$3.prototype = {
    atEnd () {
        const ans = this.pos === this.source.length;
        this.examinedLength = Math.max(this.examinedLength, this.pos + 1);
        return ans;
    },
    next () {
        const ans = this.source[this.pos++];
        this.examinedLength = Math.max(this.examinedLength, this.pos);
        return ans;
    },
    nextCharCode () {
        const nextChar = this.next();
        return nextChar && nextChar.charCodeAt(0);
    },
    nextCodePoint () {
        const cp = this.source.slice(this.pos++).codePointAt(0);
        if (cp > 0xffff) {
            this.pos += 1;
        }
        this.examinedLength = Math.max(this.examinedLength, this.pos);
        return cp;
    },
    matchString (s, optIgnoreCase) {
        let idx;
        if (optIgnoreCase) {
            for(idx = 0; idx < s.length; idx++){
                const actual = this.next();
                const expected = s[idx];
                if (actual == null || actual.toUpperCase() !== expected.toUpperCase()) {
                    return false;
                }
            }
            return true;
        }
        for(idx = 0; idx < s.length; idx++){
            if (this.next() !== s[idx]) {
                return false;
            }
        }
        return true;
    },
    sourceSlice (startIdx, endIdx) {
        return this.source.slice(startIdx, endIdx);
    },
    interval (startIdx, optEndIdx) {
        return new Interval$1(this.source, startIdx, optEndIdx ? optEndIdx : this.pos);
    }
};
var InputStream_1 = InputStream$3;
const common$4 = common$l;
const util$4 = util$7;
const Interval = Interval_1;
function MatchResult$2(matcher, input, startExpr, cst, cstOffset, rightmostFailurePosition, optRecordedFailures) {
    this.matcher = matcher;
    this.input = input;
    this.startExpr = startExpr;
    this._cst = cst;
    this._cstOffset = cstOffset;
    this._rightmostFailurePosition = rightmostFailurePosition;
    this._rightmostFailures = optRecordedFailures;
    if (this.failed()) {
        common$4.defineLazyProperty(this, 'message', function() {
            const detail = 'Expected ' + this.getExpectedText();
            return util$4.getLineAndColumnMessage(this.input, this.getRightmostFailurePosition()) + detail;
        });
        common$4.defineLazyProperty(this, 'shortMessage', function() {
            const detail = 'expected ' + this.getExpectedText();
            const errorInfo = util$4.getLineAndColumn(this.input, this.getRightmostFailurePosition());
            return 'Line ' + errorInfo.lineNum + ', col ' + errorInfo.colNum + ': ' + detail;
        });
    }
}
MatchResult$2.prototype.succeeded = function() {
    return !!this._cst;
};
MatchResult$2.prototype.failed = function() {
    return !this.succeeded();
};
MatchResult$2.prototype.getRightmostFailurePosition = function() {
    return this._rightmostFailurePosition;
};
MatchResult$2.prototype.getRightmostFailures = function() {
    if (!this._rightmostFailures) {
        this.matcher.setInput(this.input);
        const matchResultWithFailures = this.matcher._match(this.startExpr, false, this.getRightmostFailurePosition());
        this._rightmostFailures = matchResultWithFailures.getRightmostFailures();
    }
    return this._rightmostFailures;
};
MatchResult$2.prototype.toString = function() {
    return this.succeeded() ? '[match succeeded]' : '[match failed at position ' + this.getRightmostFailurePosition() + ']';
};
MatchResult$2.prototype.getExpectedText = function() {
    if (this.succeeded()) {
        throw new Error('cannot get expected text of a successful MatchResult');
    }
    const sb = new common$4.StringBuffer();
    let failures = this.getRightmostFailures();
    failures = failures.filter((failure)=>!failure.isFluffy());
    for(let idx = 0; idx < failures.length; idx++){
        if (idx > 0) {
            if (idx === failures.length - 1) {
                sb.append(failures.length > 2 ? ', or ' : ' or ');
            } else {
                sb.append(', ');
            }
        }
        sb.append(failures[idx].toString());
    }
    return sb.contents();
};
MatchResult$2.prototype.getInterval = function() {
    const pos = this.getRightmostFailurePosition();
    return new Interval(this.input, pos, pos);
};
var MatchResult_1 = MatchResult$2;
function PosInfo$1() {
    this.applicationMemoKeyStack = [];
    this.memo = {};
    this.maxExaminedLength = 0;
    this.maxRightmostFailureOffset = -1;
    this.currentLeftRecursion = undefined;
}
PosInfo$1.prototype = {
    isActive (application) {
        return this.applicationMemoKeyStack.indexOf(application.toMemoKey()) >= 0;
    },
    enter (application) {
        this.applicationMemoKeyStack.push(application.toMemoKey());
    },
    exit () {
        this.applicationMemoKeyStack.pop();
    },
    startLeftRecursion (headApplication, memoRec) {
        memoRec.isLeftRecursion = true;
        memoRec.headApplication = headApplication;
        memoRec.nextLeftRecursion = this.currentLeftRecursion;
        this.currentLeftRecursion = memoRec;
        const { applicationMemoKeyStack  } = this;
        const indexOfFirstInvolvedRule = applicationMemoKeyStack.indexOf(headApplication.toMemoKey()) + 1;
        const involvedApplicationMemoKeys = applicationMemoKeyStack.slice(indexOfFirstInvolvedRule);
        memoRec.isInvolved = function(applicationMemoKey) {
            return involvedApplicationMemoKeys.indexOf(applicationMemoKey) >= 0;
        };
        memoRec.updateInvolvedApplicationMemoKeys = function() {
            for(let idx = indexOfFirstInvolvedRule; idx < applicationMemoKeyStack.length; idx++){
                const applicationMemoKey = applicationMemoKeyStack[idx];
                if (!this.isInvolved(applicationMemoKey)) {
                    involvedApplicationMemoKeys.push(applicationMemoKey);
                }
            }
        };
    },
    endLeftRecursion () {
        this.currentLeftRecursion = this.currentLeftRecursion.nextLeftRecursion;
    },
    shouldUseMemoizedResult (memoRec) {
        if (!memoRec.isLeftRecursion) {
            return true;
        }
        const { applicationMemoKeyStack  } = this;
        for(let idx = 0; idx < applicationMemoKeyStack.length; idx++){
            const applicationMemoKey = applicationMemoKeyStack[idx];
            if (memoRec.isInvolved(applicationMemoKey)) {
                return false;
            }
        }
        return true;
    },
    memoize (memoKey, memoRec) {
        this.memo[memoKey] = memoRec;
        this.maxExaminedLength = Math.max(this.maxExaminedLength, memoRec.examinedLength);
        this.maxRightmostFailureOffset = Math.max(this.maxRightmostFailureOffset, memoRec.rightmostFailureOffset);
        return memoRec;
    },
    clearObsoleteEntries (pos, invalidatedIdx) {
        if (pos + this.maxExaminedLength <= invalidatedIdx) {
            return;
        }
        const { memo  } = this;
        this.maxExaminedLength = 0;
        this.maxRightmostFailureOffset = -1;
        Object.keys(memo).forEach((k)=>{
            const memoRec = memo[k];
            if (pos + memoRec.examinedLength > invalidatedIdx) {
                delete memo[k];
            } else {
                this.maxExaminedLength = Math.max(this.maxExaminedLength, memoRec.examinedLength);
                this.maxRightmostFailureOffset = Math.max(this.maxRightmostFailureOffset, memoRec.rightmostFailureOffset);
            }
        });
    }
};
var PosInfo_1 = PosInfo$1;
const InputStream$2 = InputStream_1;
const MatchResult$1 = MatchResult_1;
const PosInfo = PosInfo_1;
const Trace = Trace_1;
const pexprs$5 = pexprs$6;
const util$3 = util$7;
let builtInApplySyntacticBody;
util$3.awaitBuiltInRules((builtInRules)=>{
    builtInApplySyntacticBody = builtInRules.rules.applySyntactic.body;
});
const applySpaces = new pexprs$5.Apply('spaces');
function MatchState$1(matcher, startExpr, optPositionToRecordFailures) {
    this.matcher = matcher;
    this.startExpr = startExpr;
    this.grammar = matcher.grammar;
    this.input = matcher.input;
    this.inputStream = new InputStream$2(matcher.input);
    this.memoTable = matcher.memoTable;
    this._bindings = [];
    this._bindingOffsets = [];
    this._applicationStack = [];
    this._posStack = [
        0
    ];
    this.inLexifiedContextStack = [
        false
    ];
    this.rightmostFailurePosition = -1;
    this._rightmostFailurePositionStack = [];
    this._recordedFailuresStack = [];
    if (optPositionToRecordFailures !== undefined) {
        this.positionToRecordFailures = optPositionToRecordFailures;
        this.recordedFailures = Object.create(null);
    }
}
MatchState$1.prototype = {
    posToOffset (pos) {
        return pos - this._posStack[this._posStack.length - 1];
    },
    enterApplication (posInfo, app) {
        this._posStack.push(this.inputStream.pos);
        this._applicationStack.push(app);
        this.inLexifiedContextStack.push(false);
        posInfo.enter(app);
        this._rightmostFailurePositionStack.push(this.rightmostFailurePosition);
        this.rightmostFailurePosition = -1;
    },
    exitApplication (posInfo, optNode) {
        const origPos = this._posStack.pop();
        this._applicationStack.pop();
        this.inLexifiedContextStack.pop();
        posInfo.exit();
        this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, this._rightmostFailurePositionStack.pop());
        if (optNode) {
            this.pushBinding(optNode, origPos);
        }
    },
    enterLexifiedContext () {
        this.inLexifiedContextStack.push(true);
    },
    exitLexifiedContext () {
        this.inLexifiedContextStack.pop();
    },
    currentApplication () {
        return this._applicationStack[this._applicationStack.length - 1];
    },
    inSyntacticContext () {
        const currentApplication = this.currentApplication();
        if (currentApplication) {
            return currentApplication.isSyntactic() && !this.inLexifiedContext();
        } else {
            return this.startExpr.factors[0].isSyntactic();
        }
    },
    inLexifiedContext () {
        return this.inLexifiedContextStack[this.inLexifiedContextStack.length - 1];
    },
    skipSpaces () {
        this.pushFailuresInfo();
        this.eval(applySpaces);
        this.popBinding();
        this.popFailuresInfo();
        return this.inputStream.pos;
    },
    skipSpacesIfInSyntacticContext () {
        return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
    },
    maybeSkipSpacesBefore (expr) {
        if (expr.allowsSkippingPrecedingSpace() && expr !== applySpaces) {
            return this.skipSpacesIfInSyntacticContext();
        } else {
            return this.inputStream.pos;
        }
    },
    pushBinding (node, origPos) {
        this._bindings.push(node);
        this._bindingOffsets.push(this.posToOffset(origPos));
    },
    popBinding () {
        this._bindings.pop();
        this._bindingOffsets.pop();
    },
    numBindings () {
        return this._bindings.length;
    },
    truncateBindings (newLength) {
        while(this._bindings.length > newLength){
            this.popBinding();
        }
    },
    getCurrentPosInfo () {
        return this.getPosInfo(this.inputStream.pos);
    },
    getPosInfo (pos) {
        let posInfo = this.memoTable[pos];
        if (!posInfo) {
            posInfo = this.memoTable[pos] = new PosInfo();
        }
        return posInfo;
    },
    processFailure (pos, expr) {
        this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, pos);
        if (this.recordedFailures && pos === this.positionToRecordFailures) {
            const app = this.currentApplication();
            if (app) {
                expr = expr.substituteParams(app.args);
            }
            this.recordFailure(expr.toFailure(this.grammar), false);
        }
    },
    recordFailure (failure, shouldCloneIfNew) {
        const key = failure.toKey();
        if (!this.recordedFailures[key]) {
            this.recordedFailures[key] = shouldCloneIfNew ? failure.clone() : failure;
        } else if (this.recordedFailures[key].isFluffy() && !failure.isFluffy()) {
            this.recordedFailures[key].clearFluffy();
        }
    },
    recordFailures (failures, shouldCloneIfNew) {
        Object.keys(failures).forEach((key)=>{
            this.recordFailure(failures[key], shouldCloneIfNew);
        });
    },
    cloneRecordedFailures () {
        if (!this.recordedFailures) {
            return undefined;
        }
        const ans = Object.create(null);
        Object.keys(this.recordedFailures).forEach((key)=>{
            ans[key] = this.recordedFailures[key].clone();
        });
        return ans;
    },
    getRightmostFailurePosition () {
        return this.rightmostFailurePosition;
    },
    _getRightmostFailureOffset () {
        return this.rightmostFailurePosition >= 0 ? this.posToOffset(this.rightmostFailurePosition) : -1;
    },
    getMemoizedTraceEntry (pos, expr) {
        const posInfo = this.memoTable[pos];
        if (posInfo && expr instanceof pexprs$5.Apply) {
            const memoRec = posInfo.memo[expr.toMemoKey()];
            if (memoRec && memoRec.traceEntry) {
                const entry = memoRec.traceEntry.cloneWithExpr(expr);
                entry.isMemoized = true;
                return entry;
            }
        }
        return null;
    },
    getTraceEntry (pos, expr, succeeded, bindings) {
        if (expr instanceof pexprs$5.Apply) {
            const app = this.currentApplication();
            const actuals = app ? app.args : [];
            expr = expr.substituteParams(actuals);
        }
        return this.getMemoizedTraceEntry(pos, expr) || new Trace(this.input, pos, this.inputStream.pos, expr, succeeded, bindings, this.trace);
    },
    isTracing () {
        return !!this.trace;
    },
    hasNecessaryInfo (memoRec) {
        if (this.trace && !memoRec.traceEntry) {
            return false;
        }
        if (this.recordedFailures && this.inputStream.pos + memoRec.rightmostFailureOffset === this.positionToRecordFailures) {
            return !!memoRec.failuresAtRightmostPosition;
        }
        return true;
    },
    useMemoizedResult (origPos, memoRec) {
        if (this.trace) {
            this.trace.push(memoRec.traceEntry);
        }
        const memoRecRightmostFailurePosition = this.inputStream.pos + memoRec.rightmostFailureOffset;
        this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, memoRecRightmostFailurePosition);
        if (this.recordedFailures && this.positionToRecordFailures === memoRecRightmostFailurePosition && memoRec.failuresAtRightmostPosition) {
            this.recordFailures(memoRec.failuresAtRightmostPosition, true);
        }
        this.inputStream.examinedLength = Math.max(this.inputStream.examinedLength, memoRec.examinedLength + origPos);
        if (memoRec.value) {
            this.inputStream.pos += memoRec.matchLength;
            this.pushBinding(memoRec.value, origPos);
            return true;
        }
        return false;
    },
    eval (expr) {
        const { inputStream  } = this;
        const origNumBindings = this._bindings.length;
        let origRecordedFailures;
        if (this.recordedFailures) {
            origRecordedFailures = this.recordedFailures;
            this.recordedFailures = Object.create(null);
        }
        const origPos = inputStream.pos;
        const memoPos = this.maybeSkipSpacesBefore(expr);
        let origTrace;
        if (this.trace) {
            origTrace = this.trace;
            this.trace = [];
        }
        const ans = expr.eval(this);
        if (this.trace) {
            const bindings = this._bindings.slice(origNumBindings);
            const traceEntry = this.getTraceEntry(memoPos, expr, ans, bindings);
            traceEntry.isImplicitSpaces = expr === applySpaces;
            traceEntry.isRootNode = expr === this.startExpr;
            origTrace.push(traceEntry);
            this.trace = origTrace;
        }
        if (ans) {
            if (this.recordedFailures && inputStream.pos === this.positionToRecordFailures) {
                Object.keys(this.recordedFailures).forEach((key)=>{
                    this.recordedFailures[key].makeFluffy();
                });
            }
        } else {
            inputStream.pos = origPos;
            this.truncateBindings(origNumBindings);
        }
        if (this.recordedFailures) {
            this.recordFailures(origRecordedFailures, false);
        }
        if (expr === builtInApplySyntacticBody) {
            this.skipSpaces();
        }
        return ans;
    },
    getMatchResult () {
        this.eval(this.startExpr);
        let rightmostFailures;
        if (this.recordedFailures) {
            rightmostFailures = Object.keys(this.recordedFailures).map((key)=>this.recordedFailures[key]);
        }
        const cst = this._bindings[0];
        if (cst) {
            cst.grammar = this.grammar;
        }
        return new MatchResult$1(this.matcher, this.input, this.startExpr, cst, this._bindingOffsets[0], this.rightmostFailurePosition, rightmostFailures);
    },
    getTrace () {
        this.trace = [];
        const matchResult = this.getMatchResult();
        const rootTrace = this.trace[this.trace.length - 1];
        rootTrace.result = matchResult;
        return rootTrace;
    },
    pushFailuresInfo () {
        this._rightmostFailurePositionStack.push(this.rightmostFailurePosition);
        this._recordedFailuresStack.push(this.recordedFailures);
    },
    popFailuresInfo () {
        this.rightmostFailurePosition = this._rightmostFailurePositionStack.pop();
        this.recordedFailures = this._recordedFailuresStack.pop();
    }
};
var MatchState_1 = MatchState$1;
const MatchState = MatchState_1;
const pexprs$4 = pexprs$6;
function Matcher$1(grammar) {
    this.grammar = grammar;
    this.memoTable = [];
    this.input = '';
}
Matcher$1.prototype.getInput = function() {
    return this.input;
};
Matcher$1.prototype.setInput = function(str) {
    if (this.input !== str) {
        this.replaceInputRange(0, this.input.length, str);
    }
    return this;
};
Matcher$1.prototype.replaceInputRange = function(startIdx, endIdx, str) {
    const currentInput = this.input;
    if (startIdx < 0 || startIdx > currentInput.length || endIdx < 0 || endIdx > currentInput.length || startIdx > endIdx) {
        throw new Error('Invalid indices: ' + startIdx + ' and ' + endIdx);
    }
    this.input = currentInput.slice(0, startIdx) + str + currentInput.slice(endIdx);
    const restOfMemoTable = this.memoTable.slice(endIdx);
    this.memoTable.length = startIdx;
    for(let idx = 0; idx < str.length; idx++){
        this.memoTable.push(undefined);
    }
    restOfMemoTable.forEach(function(posInfo) {
        this.memoTable.push(posInfo);
    }, this);
    for(let pos = 0; pos < startIdx; pos++){
        const posInfo = this.memoTable[pos];
        if (posInfo) {
            posInfo.clearObsoleteEntries(pos, startIdx);
        }
    }
    return this;
};
Matcher$1.prototype.match = function(optStartApplicationStr) {
    return this._match(this._getStartExpr(optStartApplicationStr), false);
};
Matcher$1.prototype.trace = function(optStartApplicationStr) {
    return this._match(this._getStartExpr(optStartApplicationStr), true);
};
Matcher$1.prototype._match = function(startExpr, tracing, optPositionToRecordFailures) {
    const state = new MatchState(this, startExpr, optPositionToRecordFailures);
    return tracing ? state.getTrace() : state.getMatchResult();
};
Matcher$1.prototype._getStartExpr = function(optStartApplicationStr) {
    const applicationStr = optStartApplicationStr || this.grammar.defaultStartRule;
    if (!applicationStr) {
        throw new Error('Missing start rule argument -- the grammar has no default start rule.');
    }
    const startApp = this.grammar.parseApplication(applicationStr);
    return new pexprs$4.Seq([
        startApp,
        pexprs$4.end
    ]);
};
var Matcher_1 = Matcher$1;
const InputStream$1 = InputStream_1;
const { IterationNode  } = nodes$1;
const MatchResult = MatchResult_1;
const common$3 = common$l;
const errors$3 = errors$9;
const util$2 = util$7;
const globalActionStack = [];
const hasOwnProperty = (x, prop)=>Object.prototype.hasOwnProperty.call(x, prop);
class Wrapper {
    constructor(node, sourceInterval, baseInterval){
        this._node = node;
        this.source = sourceInterval;
        this._baseInterval = baseInterval;
        if (node.isNonterminal()) {
            common$3.assert(sourceInterval === baseInterval);
        }
        this._childWrappers = [];
    }
    toString() {
        return '[semantics wrapper for ' + this._node.grammar.name + ']';
    }
    _forgetMemoizedResultFor(attributeName) {
        delete this._node[this._semantics.attributeKeys[attributeName]];
        this.children.forEach((child)=>{
            child._forgetMemoizedResultFor(attributeName);
        });
    }
    child(idx) {
        if (!(0 <= idx && idx < this._node.numChildren())) {
            return undefined;
        }
        let childWrapper = this._childWrappers[idx];
        if (!childWrapper) {
            const childNode = this._node.childAt(idx);
            const offset = this._node.childOffsets[idx];
            const source = this._baseInterval.subInterval(offset, childNode.matchLength);
            const base = childNode.isNonterminal() ? source : this._baseInterval;
            childWrapper = this._childWrappers[idx] = this._semantics.wrap(childNode, source, base);
        }
        return childWrapper;
    }
    _children() {
        for(let idx = 0; idx < this._node.numChildren(); idx++){
            this.child(idx);
        }
        return this._childWrappers;
    }
    isIteration() {
        return this._node.isIteration();
    }
    isTerminal() {
        return this._node.isTerminal();
    }
    isNonterminal() {
        return this._node.isNonterminal();
    }
    isSyntactic() {
        return this.isNonterminal() && this._node.isSyntactic();
    }
    isLexical() {
        return this.isNonterminal() && this._node.isLexical();
    }
    isOptional() {
        return this._node.isOptional();
    }
    iteration(optChildWrappers) {
        const childWrappers = optChildWrappers || [];
        const childNodes = childWrappers.map((c)=>c._node);
        const iter = new IterationNode(childNodes, [], -1, false);
        const wrapper = this._semantics.wrap(iter, null, null);
        wrapper._childWrappers = childWrappers;
        return wrapper;
    }
    get children() {
        return this._children();
    }
    get ctorName() {
        return this._node.ctorName;
    }
    get interval() {
        throw new Error('The `interval` property is deprecated -- use `source` instead');
    }
    get numChildren() {
        return this._node.numChildren();
    }
    get sourceString() {
        return this.source.contents;
    }
}
function Semantics$2(grammar, superSemantics) {
    const self = this;
    this.grammar = grammar;
    this.checkedActionDicts = false;
    this.Wrapper = class extends (superSemantics ? superSemantics.Wrapper : Wrapper) {
        constructor(node, sourceInterval, baseInterval){
            super(node, sourceInterval, baseInterval);
            self.checkActionDictsIfHaventAlready();
            this._semantics = self;
        }
    };
    this.super = superSemantics;
    if (superSemantics) {
        if (!(grammar.equals(this.super.grammar) || grammar._inheritsFrom(this.super.grammar))) {
            throw new Error("Cannot extend a semantics for grammar '" + this.super.grammar.name + "' for use with grammar '" + grammar.name + "' (not a sub-grammar)");
        }
        this.operations = Object.create(this.super.operations);
        this.attributes = Object.create(this.super.attributes);
        this.attributeKeys = Object.create(null);
        for(const attributeName in this.attributes){
            Object.defineProperty(this.attributeKeys, attributeName, {
                value: util$2.uniqueId(attributeName)
            });
        }
    } else {
        this.operations = Object.create(null);
        this.attributes = Object.create(null);
        this.attributeKeys = Object.create(null);
    }
}
Semantics$2.prototype.toString = function() {
    return '[semantics for ' + this.grammar.name + ']';
};
Semantics$2.prototype.checkActionDictsIfHaventAlready = function() {
    if (!this.checkedActionDicts) {
        this.checkActionDicts();
        this.checkedActionDicts = true;
    }
};
Semantics$2.prototype.checkActionDicts = function() {
    let name;
    for(name in this.operations){
        this.operations[name].checkActionDict(this.grammar);
    }
    for(name in this.attributes){
        this.attributes[name].checkActionDict(this.grammar);
    }
};
Semantics$2.prototype.toRecipe = function(semanticsOnly) {
    function hasSuperSemantics(s) {
        return s.super !== Semantics$2.BuiltInSemantics._getSemantics();
    }
    let str = '(function(g) {\n';
    if (hasSuperSemantics(this)) {
        str += '  var semantics = ' + this.super.toRecipe(true) + '(g';
        const superSemanticsGrammar = this.super.grammar;
        let relatedGrammar = this.grammar;
        while(relatedGrammar !== superSemanticsGrammar){
            str += '.superGrammar';
            relatedGrammar = relatedGrammar.superGrammar;
        }
        str += ');\n';
        str += '  return g.extendSemantics(semantics)';
    } else {
        str += '  return g.createSemantics()';
    }
    [
        'Operation',
        'Attribute'
    ].forEach((type)=>{
        const semanticOperations = this[type.toLowerCase() + 's'];
        Object.keys(semanticOperations).forEach((name)=>{
            const { actionDict , formals , builtInDefault  } = semanticOperations[name];
            let signature = name;
            if (formals.length > 0) {
                signature += '(' + formals.join(', ') + ')';
            }
            let method;
            if (hasSuperSemantics(this) && this.super[type.toLowerCase() + 's'][name]) {
                method = 'extend' + type;
            } else {
                method = 'add' + type;
            }
            str += '\n    .' + method + '(' + JSON.stringify(signature) + ', {';
            const srcArray = [];
            Object.keys(actionDict).forEach((actionName)=>{
                if (actionDict[actionName] !== builtInDefault) {
                    let source = actionDict[actionName].toString().trim();
                    source = source.replace(/^.*\(/, 'function(');
                    srcArray.push('\n      ' + JSON.stringify(actionName) + ': ' + source);
                }
            });
            str += srcArray.join(',') + '\n    })';
        });
    });
    str += ';\n  })';
    if (!semanticsOnly) {
        str = '(function() {\n' + '  var grammar = this.fromRecipe(' + this.grammar.toRecipe() + ');\n' + '  var semantics = ' + str + '(grammar);\n' + '  return semantics;\n' + '});\n';
    }
    return str;
};
function parseSignature$1(signature, type) {
    if (!Semantics$2.prototypeGrammar) {
        common$3.assert(signature.indexOf('(') === -1);
        return {
            name: signature,
            formals: []
        };
    }
    const r = Semantics$2.prototypeGrammar.match(signature, type === 'operation' ? 'OperationSignature' : 'AttributeSignature');
    if (r.failed()) {
        throw new Error(r.message);
    }
    return Semantics$2.prototypeGrammarSemantics(r).parse();
}
function newDefaultAction(type, name, doIt) {
    return function(...children) {
        const thisThing = this._semantics.operations[name] || this._semantics.attributes[name];
        const args = thisThing.formals.map((formal)=>this.args[formal]);
        if (!this.isIteration() && children.length === 1) {
            return doIt.apply(children[0], args);
        } else {
            throw errors$3.missingSemanticAction(this.ctorName, name, type, globalActionStack);
        }
    };
}
Semantics$2.prototype.addOperationOrAttribute = function(type, signature, actionDict) {
    const typePlural = type + 's';
    const parsedNameAndFormalArgs = parseSignature$1(signature, type);
    const { name  } = parsedNameAndFormalArgs;
    const { formals  } = parsedNameAndFormalArgs;
    this.assertNewName(name, type);
    const builtInDefault = newDefaultAction(type, name, doIt);
    const realActionDict = {
        _default: builtInDefault
    };
    Object.keys(actionDict).forEach((name)=>{
        realActionDict[name] = actionDict[name];
    });
    const entry = type === 'operation' ? new Operation(name, formals, realActionDict, builtInDefault) : new Attribute(name, realActionDict, builtInDefault);
    entry.checkActionDict(this.grammar);
    this[typePlural][name] = entry;
    function doIt(...args) {
        const thisThing = this._semantics[typePlural][name];
        if (arguments.length !== thisThing.formals.length) {
            throw new Error('Invalid number of arguments passed to ' + name + ' ' + type + ' (expected ' + thisThing.formals.length + ', got ' + arguments.length + ')');
        }
        const argsObj = Object.create(null);
        for (const [idx, val] of Object.entries(args)){
            const formal = thisThing.formals[idx];
            argsObj[formal] = val;
        }
        const oldArgs = this.args;
        this.args = argsObj;
        const ans = thisThing.execute(this._semantics, this);
        this.args = oldArgs;
        return ans;
    }
    if (type === 'operation') {
        this.Wrapper.prototype[name] = doIt;
        this.Wrapper.prototype[name].toString = function() {
            return '[' + name + ' operation]';
        };
    } else {
        Object.defineProperty(this.Wrapper.prototype, name, {
            get: doIt,
            configurable: true
        });
        Object.defineProperty(this.attributeKeys, name, {
            value: util$2.uniqueId(name)
        });
    }
};
Semantics$2.prototype.extendOperationOrAttribute = function(type, name, actionDict) {
    const typePlural = type + 's';
    parseSignature$1(name, 'attribute');
    if (!(this.super && name in this.super[typePlural])) {
        throw new Error('Cannot extend ' + type + " '" + name + "': did not inherit an " + type + ' with that name');
    }
    if (hasOwnProperty(this[typePlural], name)) {
        throw new Error('Cannot extend ' + type + " '" + name + "' again");
    }
    const inheritedFormals = this[typePlural][name].formals;
    const inheritedActionDict = this[typePlural][name].actionDict;
    const newActionDict = Object.create(inheritedActionDict);
    Object.keys(actionDict).forEach((name)=>{
        newActionDict[name] = actionDict[name];
    });
    this[typePlural][name] = type === 'operation' ? new Operation(name, inheritedFormals, newActionDict) : new Attribute(name, newActionDict);
    this[typePlural][name].checkActionDict(this.grammar);
};
Semantics$2.prototype.assertNewName = function(name, type) {
    if (hasOwnProperty(Wrapper.prototype, name)) {
        throw new Error('Cannot add ' + type + " '" + name + "': that's a reserved name");
    }
    if (name in this.operations) {
        throw new Error('Cannot add ' + type + " '" + name + "': an operation with that name already exists");
    }
    if (name in this.attributes) {
        throw new Error('Cannot add ' + type + " '" + name + "': an attribute with that name already exists");
    }
};
Semantics$2.prototype.wrap = function(node, source, optBaseInterval) {
    const baseInterval = optBaseInterval || source;
    return node instanceof this.Wrapper ? node : new this.Wrapper(node, source, baseInterval);
};
Semantics$2.createSemantics = function(grammar, optSuperSemantics) {
    const s = new Semantics$2(grammar, optSuperSemantics !== undefined ? optSuperSemantics : Semantics$2.BuiltInSemantics._getSemantics());
    const proxy = function ASemantics(matchResult) {
        if (!(matchResult instanceof MatchResult)) {
            throw new TypeError('Semantics expected a MatchResult, but got ' + common$3.unexpectedObjToString(matchResult));
        }
        if (matchResult.failed()) {
            throw new TypeError('cannot apply Semantics to ' + matchResult.toString());
        }
        const cst = matchResult._cst;
        if (cst.grammar !== grammar) {
            throw new Error("Cannot use a MatchResult from grammar '" + cst.grammar.name + "' with a semantics for '" + grammar.name + "'");
        }
        const inputStream = new InputStream$1(matchResult.input);
        return s.wrap(cst, inputStream.interval(matchResult._cstOffset, matchResult.input.length));
    };
    proxy.addOperation = function(signature, actionDict) {
        s.addOperationOrAttribute('operation', signature, actionDict);
        return proxy;
    };
    proxy.extendOperation = function(name, actionDict) {
        s.extendOperationOrAttribute('operation', name, actionDict);
        return proxy;
    };
    proxy.addAttribute = function(name, actionDict) {
        s.addOperationOrAttribute('attribute', name, actionDict);
        return proxy;
    };
    proxy.extendAttribute = function(name, actionDict) {
        s.extendOperationOrAttribute('attribute', name, actionDict);
        return proxy;
    };
    proxy._getActionDict = function(operationOrAttributeName) {
        const action = s.operations[operationOrAttributeName] || s.attributes[operationOrAttributeName];
        if (!action) {
            throw new Error('"' + operationOrAttributeName + '" is not a valid operation or attribute ' + 'name in this semantics for "' + grammar.name + '"');
        }
        return action.actionDict;
    };
    proxy._remove = function(operationOrAttributeName) {
        let semantic;
        if (operationOrAttributeName in s.operations) {
            semantic = s.operations[operationOrAttributeName];
            delete s.operations[operationOrAttributeName];
        } else if (operationOrAttributeName in s.attributes) {
            semantic = s.attributes[operationOrAttributeName];
            delete s.attributes[operationOrAttributeName];
        }
        delete s.Wrapper.prototype[operationOrAttributeName];
        return semantic;
    };
    proxy.getOperationNames = function() {
        return Object.keys(s.operations);
    };
    proxy.getAttributeNames = function() {
        return Object.keys(s.attributes);
    };
    proxy.getGrammar = function() {
        return s.grammar;
    };
    proxy.toRecipe = function(semanticsOnly) {
        return s.toRecipe(semanticsOnly);
    };
    proxy.toString = s.toString.bind(s);
    proxy._getSemantics = function() {
        return s;
    };
    return proxy;
};
class Operation {
    constructor(name, formals, actionDict, builtInDefault){
        this.name = name;
        this.formals = formals;
        this.actionDict = actionDict;
        this.builtInDefault = builtInDefault;
    }
    checkActionDict(grammar) {
        grammar._checkTopDownActionDict(this.typeName, this.name, this.actionDict);
    }
    execute(semantics, nodeWrapper) {
        try {
            const { ctorName  } = nodeWrapper._node;
            let actionFn = this.actionDict[ctorName];
            if (actionFn) {
                globalActionStack.push([
                    this,
                    ctorName
                ]);
                return actionFn.apply(nodeWrapper, nodeWrapper._children());
            }
            if (nodeWrapper.isNonterminal()) {
                actionFn = this.actionDict._nonterminal;
                if (actionFn) {
                    globalActionStack.push([
                        this,
                        '_nonterminal',
                        ctorName
                    ]);
                    return actionFn.apply(nodeWrapper, nodeWrapper._children());
                }
            }
            globalActionStack.push([
                this,
                'default action',
                ctorName
            ]);
            return this.actionDict._default.apply(nodeWrapper, nodeWrapper._children());
        } finally{
            globalActionStack.pop();
        }
    }
}
Operation.prototype.typeName = 'operation';
class Attribute extends Operation {
    constructor(name, actionDict, builtInDefault){
        super(name, [], actionDict, builtInDefault);
    }
    execute(semantics, nodeWrapper) {
        const node = nodeWrapper._node;
        const key = semantics.attributeKeys[this.name];
        if (!hasOwnProperty(node, key)) {
            node[key] = Operation.prototype.execute.call(this, semantics, nodeWrapper);
        }
        return node[key];
    }
}
Attribute.prototype.typeName = 'attribute';
var Semantics_1 = Semantics$2;
const CaseInsensitiveTerminal = CaseInsensitiveTerminal_1;
const Matcher = Matcher_1;
const Semantics$1 = Semantics_1;
const common$2 = common$l;
const errors$2 = errors$9;
const pexprs$3 = pexprs$6;
const SPECIAL_ACTION_NAMES = [
    '_iter',
    '_terminal',
    '_nonterminal',
    '_default'
];
function getSortedRuleValues(grammar) {
    return Object.keys(grammar.rules).sort().map((name)=>grammar.rules[name]);
}
const jsonToJS = (str)=>str.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
function Grammar$4(name, superGrammar, rules, optDefaultStartRule) {
    this.name = name;
    this.superGrammar = superGrammar;
    this.rules = rules;
    if (optDefaultStartRule) {
        if (!(optDefaultStartRule in rules)) {
            throw new Error("Invalid start rule: '" + optDefaultStartRule + "' is not a rule in grammar '" + name + "'");
        }
        this.defaultStartRule = optDefaultStartRule;
    }
}
let ohmGrammar$2;
let buildGrammar$1;
Grammar$4.initApplicationParser = function(grammar, builderFn) {
    ohmGrammar$2 = grammar;
    buildGrammar$1 = builderFn;
};
Grammar$4.prototype = {
    matcher () {
        return new Matcher(this);
    },
    isBuiltIn () {
        return this === Grammar$4.ProtoBuiltInRules || this === Grammar$4.BuiltInRules;
    },
    equals (g) {
        if (this === g) {
            return true;
        }
        if (g == null || this.name !== g.name || this.defaultStartRule !== g.defaultStartRule || !(this.superGrammar === g.superGrammar || this.superGrammar.equals(g.superGrammar))) {
            return false;
        }
        const myRules = getSortedRuleValues(this);
        const otherRules = getSortedRuleValues(g);
        return myRules.length === otherRules.length && myRules.every((rule, i)=>{
            return rule.description === otherRules[i].description && rule.formals.join(',') === otherRules[i].formals.join(',') && rule.body.toString() === otherRules[i].body.toString();
        });
    },
    match (input, optStartApplication) {
        const m = this.matcher();
        m.replaceInputRange(0, 0, input);
        return m.match(optStartApplication);
    },
    trace (input, optStartApplication) {
        const m = this.matcher();
        m.replaceInputRange(0, 0, input);
        return m.trace(optStartApplication);
    },
    createSemantics () {
        return Semantics$1.createSemantics(this);
    },
    extendSemantics (superSemantics) {
        return Semantics$1.createSemantics(this, superSemantics._getSemantics());
    },
    _checkTopDownActionDict (what, name, actionDict) {
        const problems = [];
        for(const k in actionDict){
            const v = actionDict[k];
            const isSpecialAction = SPECIAL_ACTION_NAMES.includes(k);
            if (!isSpecialAction && !(k in this.rules)) {
                problems.push(`'${k}' is not a valid semantic action for '${this.name}'`);
                continue;
            }
            if (typeof v !== 'function') {
                problems.push(`'${k}' must be a function in an action dictionary for '${this.name}'`);
                continue;
            }
            const actual = v.length;
            const expected = this._topDownActionArity(k);
            if (actual !== expected) {
                let details;
                if (k === '_iter' || k === '_nonterminal') {
                    details = `it should use a rest parameter, e.g. \`${k}(...children) {}\`. ` + 'NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.';
                } else {
                    details = `expected ${expected}, got ${actual}`;
                }
                problems.push(`Semantic action '${k}' has the wrong arity: ${details}`);
            }
        }
        if (problems.length > 0) {
            const prettyProblems = problems.map((problem)=>'- ' + problem);
            const error = new Error([
                `Found errors in the action dictionary of the '${name}' ${what}:`,
                ...prettyProblems
            ].join('\n'));
            error.problems = problems;
            throw error;
        }
    },
    _topDownActionArity (actionName) {
        return SPECIAL_ACTION_NAMES.includes(actionName) ? 0 : this.rules[actionName].body.getArity();
    },
    _inheritsFrom (grammar) {
        let g = this.superGrammar;
        while(g){
            if (g.equals(grammar, true)) {
                return true;
            }
            g = g.superGrammar;
        }
        return false;
    },
    toRecipe (superGrammarExpr = undefined) {
        const metaInfo = {};
        if (this.source) {
            metaInfo.source = this.source.contents;
        }
        let startRule = null;
        if (this.defaultStartRule) {
            startRule = this.defaultStartRule;
        }
        const rules = {};
        Object.keys(this.rules).forEach((ruleName)=>{
            const ruleInfo = this.rules[ruleName];
            const { body  } = ruleInfo;
            const isDefinition = !this.superGrammar || !this.superGrammar.rules[ruleName];
            let operation;
            if (isDefinition) {
                operation = 'define';
            } else {
                operation = body instanceof pexprs$3.Extend ? 'extend' : 'override';
            }
            const metaInfo = {};
            if (ruleInfo.source && this.source) {
                const adjusted = ruleInfo.source.relativeTo(this.source);
                metaInfo.sourceInterval = [
                    adjusted.startIdx,
                    adjusted.endIdx
                ];
            }
            const description = isDefinition ? ruleInfo.description : null;
            const bodyRecipe = body.outputRecipe(ruleInfo.formals, this.source);
            rules[ruleName] = [
                operation,
                metaInfo,
                description,
                ruleInfo.formals,
                bodyRecipe
            ];
        });
        let superGrammarOutput = 'null';
        if (superGrammarExpr) {
            superGrammarOutput = superGrammarExpr;
        } else if (this.superGrammar && !this.superGrammar.isBuiltIn()) {
            superGrammarOutput = this.superGrammar.toRecipe();
        }
        const recipeElements = [
            ...[
                'grammar',
                metaInfo,
                this.name
            ].map(JSON.stringify),
            superGrammarOutput,
            ...[
                startRule,
                rules
            ].map(JSON.stringify)
        ];
        return jsonToJS(`[${recipeElements.join(',')}]`);
    },
    toOperationActionDictionaryTemplate () {
        return this._toOperationOrAttributeActionDictionaryTemplate();
    },
    toAttributeActionDictionaryTemplate () {
        return this._toOperationOrAttributeActionDictionaryTemplate();
    },
    _toOperationOrAttributeActionDictionaryTemplate () {
        const sb = new common$2.StringBuffer();
        sb.append('{');
        let first = true;
        for(const ruleName in this.rules){
            const { body  } = this.rules[ruleName];
            if (first) {
                first = false;
            } else {
                sb.append(',');
            }
            sb.append('\n');
            sb.append('  ');
            this.addSemanticActionTemplate(ruleName, body, sb);
        }
        sb.append('\n}');
        return sb.contents();
    },
    addSemanticActionTemplate (ruleName, body, sb) {
        sb.append(ruleName);
        sb.append(': function(');
        const arity = this._topDownActionArity(ruleName);
        sb.append(common$2.repeat('_', arity).join(', '));
        sb.append(') {\n');
        sb.append('  }');
    },
    parseApplication (str) {
        let app;
        if (str.indexOf('<') === -1) {
            app = new pexprs$3.Apply(str);
        } else {
            const cst = ohmGrammar$2.match(str, 'Base_application');
            app = buildGrammar$1(cst, {});
        }
        if (!(app.ruleName in this.rules)) {
            throw errors$2.undeclaredRule(app.ruleName, this.name);
        }
        const { formals  } = this.rules[app.ruleName];
        if (formals.length !== app.args.length) {
            const { source  } = this.rules[app.ruleName];
            throw errors$2.wrongNumberOfParameters(app.ruleName, formals.length, app.args.length, source);
        }
        return app;
    }
};
Grammar$4.ProtoBuiltInRules = new Grammar$4('ProtoBuiltInRules', undefined, {
    any: {
        body: pexprs$3.any,
        formals: [],
        description: 'any character',
        primitive: true
    },
    end: {
        body: pexprs$3.end,
        formals: [],
        description: 'end of input',
        primitive: true
    },
    caseInsensitive: {
        body: new CaseInsensitiveTerminal(new pexprs$3.Param(0)),
        formals: [
            'str'
        ],
        primitive: true
    },
    lower: {
        body: new pexprs$3.UnicodeChar('Ll'),
        formals: [],
        description: 'a lowercase letter',
        primitive: true
    },
    upper: {
        body: new pexprs$3.UnicodeChar('Lu'),
        formals: [],
        description: 'an uppercase letter',
        primitive: true
    },
    unicodeLtmo: {
        body: new pexprs$3.UnicodeChar('Ltmo'),
        formals: [],
        description: 'a Unicode character in Lt, Lm, or Lo',
        primitive: true
    },
    spaces: {
        body: new pexprs$3.Star(new pexprs$3.Apply('space')),
        formals: []
    },
    space: {
        body: new pexprs$3.Range('\x00', ' '),
        formals: [],
        description: 'a space'
    }
});
var Grammar_1 = Grammar$4;
const Grammar$3 = Grammar_1;
const InputStream = InputStream_1;
const common$1 = common$l;
const errors$1 = errors$9;
const pexprs$2 = pexprs$6;
function GrammarDecl$1(name) {
    this.name = name;
}
GrammarDecl$1.prototype.sourceInterval = function(startIdx, endIdx) {
    return this.source.subInterval(startIdx, endIdx - startIdx);
};
GrammarDecl$1.prototype.ensureSuperGrammar = function() {
    if (!this.superGrammar) {
        this.withSuperGrammar(this.name === 'BuiltInRules' ? Grammar$3.ProtoBuiltInRules : Grammar$3.BuiltInRules);
    }
    return this.superGrammar;
};
GrammarDecl$1.prototype.ensureSuperGrammarRuleForOverriding = function(name, source) {
    const ruleInfo = this.ensureSuperGrammar().rules[name];
    if (!ruleInfo) {
        throw errors$1.cannotOverrideUndeclaredRule(name, this.superGrammar.name, source);
    }
    return ruleInfo;
};
GrammarDecl$1.prototype.installOverriddenOrExtendedRule = function(name, formals, body, source) {
    const duplicateParameterNames = common$1.getDuplicates(formals);
    if (duplicateParameterNames.length > 0) {
        throw errors$1.duplicateParameterNames(name, duplicateParameterNames, source);
    }
    const ruleInfo = this.ensureSuperGrammar().rules[name];
    const expectedFormals = ruleInfo.formals;
    const expectedNumFormals = expectedFormals ? expectedFormals.length : 0;
    if (formals.length !== expectedNumFormals) {
        throw errors$1.wrongNumberOfParameters(name, expectedNumFormals, formals.length, source);
    }
    return this.install(name, formals, body, ruleInfo.description, source);
};
GrammarDecl$1.prototype.install = function(name, formals, body, description, source) {
    this.rules[name] = {
        body: body.introduceParams(formals),
        formals,
        description,
        source
    };
    return this;
};
GrammarDecl$1.prototype.withSuperGrammar = function(superGrammar) {
    if (this.superGrammar) {
        throw new Error('the super grammar of a GrammarDecl cannot be set more than once');
    }
    this.superGrammar = superGrammar;
    this.rules = Object.create(superGrammar.rules);
    if (!superGrammar.isBuiltIn()) {
        this.defaultStartRule = superGrammar.defaultStartRule;
    }
    return this;
};
GrammarDecl$1.prototype.withDefaultStartRule = function(ruleName) {
    this.defaultStartRule = ruleName;
    return this;
};
GrammarDecl$1.prototype.withSource = function(source) {
    this.source = new InputStream(source).interval(0, source.length);
    return this;
};
GrammarDecl$1.prototype.build = function() {
    const grammar = new Grammar$3(this.name, this.ensureSuperGrammar(), this.rules, this.defaultStartRule);
    const grammarErrors = [];
    let grammarHasInvalidApplications = false;
    Object.keys(grammar.rules).forEach((ruleName)=>{
        const { body  } = grammar.rules[ruleName];
        try {
            body.assertChoicesHaveUniformArity(ruleName);
        } catch (e) {
            grammarErrors.push(e);
        }
        try {
            body.assertAllApplicationsAreValid(ruleName, grammar);
        } catch (e) {
            grammarErrors.push(e);
            grammarHasInvalidApplications = true;
        }
    });
    if (!grammarHasInvalidApplications) {
        Object.keys(grammar.rules).forEach((ruleName)=>{
            const { body  } = grammar.rules[ruleName];
            try {
                body.assertIteratedExprsAreNotNullable(grammar, []);
            } catch (e) {
                grammarErrors.push(e);
            }
        });
    }
    if (grammarErrors.length > 0) {
        errors$1.throwErrors(grammarErrors);
    }
    if (this.source) {
        grammar.source = this.source;
    }
    return grammar;
};
GrammarDecl$1.prototype.define = function(name, formals, body, description, source) {
    this.ensureSuperGrammar();
    if (this.superGrammar.rules[name]) {
        throw errors$1.duplicateRuleDeclaration(name, this.name, this.superGrammar.name, source);
    } else if (this.rules[name]) {
        throw errors$1.duplicateRuleDeclaration(name, this.name, this.name, source);
    }
    const duplicateParameterNames = common$1.getDuplicates(formals);
    if (duplicateParameterNames.length > 0) {
        throw errors$1.duplicateParameterNames(name, duplicateParameterNames, source);
    }
    return this.install(name, formals, body, description, source);
};
GrammarDecl$1.prototype.override = function(name, formals, body, descIgnored, source) {
    this.ensureSuperGrammarRuleForOverriding(name, source);
    this.installOverriddenOrExtendedRule(name, formals, body, source);
    return this;
};
GrammarDecl$1.prototype.extend = function(name, formals, fragment, descIgnored, source) {
    const ruleInfo = this.ensureSuperGrammar().rules[name];
    if (!ruleInfo) {
        throw errors$1.cannotExtendUndeclaredRule(name, this.superGrammar.name, source);
    }
    const body = new pexprs$2.Extend(this.superGrammar, name, fragment);
    body.source = fragment.source;
    this.installOverriddenOrExtendedRule(name, formals, body, source);
    return this;
};
var GrammarDecl_1 = GrammarDecl$1;
const Grammar$2 = Grammar_1;
const GrammarDecl = GrammarDecl_1;
const pexprs$1 = pexprs$6;
function Builder$2() {}
Builder$2.prototype = {
    currentDecl: null,
    currentRuleName: null,
    newGrammar (name) {
        return new GrammarDecl(name);
    },
    grammar (metaInfo, name, superGrammar, defaultStartRule, rules) {
        const gDecl = new GrammarDecl(name);
        if (superGrammar) {
            gDecl.withSuperGrammar(superGrammar instanceof Grammar$2 ? superGrammar : this.fromRecipe(superGrammar));
        }
        if (defaultStartRule) {
            gDecl.withDefaultStartRule(defaultStartRule);
        }
        if (metaInfo && metaInfo.source) {
            gDecl.withSource(metaInfo.source);
        }
        this.currentDecl = gDecl;
        Object.keys(rules).forEach((ruleName)=>{
            this.currentRuleName = ruleName;
            const ruleRecipe = rules[ruleName];
            const action = ruleRecipe[0];
            const metaInfo = ruleRecipe[1];
            const description = ruleRecipe[2];
            const formals = ruleRecipe[3];
            const body = this.fromRecipe(ruleRecipe[4]);
            let source;
            if (gDecl.source && metaInfo && metaInfo.sourceInterval) {
                source = gDecl.source.subInterval(metaInfo.sourceInterval[0], metaInfo.sourceInterval[1] - metaInfo.sourceInterval[0]);
            }
            gDecl[action](ruleName, formals, body, description, source);
        });
        this.currentRuleName = this.currentDecl = null;
        return gDecl.build();
    },
    terminal (x) {
        return new pexprs$1.Terminal(x);
    },
    range (from, to) {
        return new pexprs$1.Range(from, to);
    },
    param (index) {
        return new pexprs$1.Param(index);
    },
    alt (...termArgs) {
        let terms = [];
        for (let arg of termArgs){
            if (!(arg instanceof pexprs$1.PExpr)) {
                arg = this.fromRecipe(arg);
            }
            if (arg instanceof pexprs$1.Alt) {
                terms = terms.concat(arg.terms);
            } else {
                terms.push(arg);
            }
        }
        return terms.length === 1 ? terms[0] : new pexprs$1.Alt(terms);
    },
    seq (...factorArgs) {
        let factors = [];
        for (let arg of factorArgs){
            if (!(arg instanceof pexprs$1.PExpr)) {
                arg = this.fromRecipe(arg);
            }
            if (arg instanceof pexprs$1.Seq) {
                factors = factors.concat(arg.factors);
            } else {
                factors.push(arg);
            }
        }
        return factors.length === 1 ? factors[0] : new pexprs$1.Seq(factors);
    },
    star (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Star(expr);
    },
    plus (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Plus(expr);
    },
    opt (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Opt(expr);
    },
    not (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Not(expr);
    },
    la (expr) {
        return this.lookahead(expr);
    },
    lookahead (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Lookahead(expr);
    },
    lex (expr) {
        if (!(expr instanceof pexprs$1.PExpr)) {
            expr = this.fromRecipe(expr);
        }
        return new pexprs$1.Lex(expr);
    },
    app (ruleName, optParams) {
        if (optParams && optParams.length > 0) {
            optParams = optParams.map(function(param) {
                return param instanceof pexprs$1.PExpr ? param : this.fromRecipe(param);
            }, this);
        }
        return new pexprs$1.Apply(ruleName, optParams);
    },
    splice (beforeTerms, afterTerms) {
        return new pexprs$1.Splice(this.currentDecl.superGrammar, this.currentRuleName, beforeTerms.map((term)=>this.fromRecipe(term)), afterTerms.map((term)=>this.fromRecipe(term)));
    },
    fromRecipe (recipe) {
        const args = recipe[0] === 'grammar' ? recipe.slice(1) : recipe.slice(2);
        const result = this[recipe[0]](...args);
        const metaInfo = recipe[1];
        if (metaInfo) {
            if (metaInfo.sourceInterval && this.currentDecl) {
                result.withSource(this.currentDecl.sourceInterval(...metaInfo.sourceInterval));
            }
        }
        return result;
    }
};
var Builder_1 = Builder$2;
var name = "ohm-js";
var version$2 = "16.6.0";
var description = "An object-oriented language for parsing and pattern matching";
var repository = "https://github.com/harc/ohm";
var keywords = [
    "parser",
    "compiler",
    "pattern matching",
    "pattern-matching",
    "ometa",
    "ometa/js",
    "ometa-js",
    "ometajs",
    "rapid",
    "prototyping"
];
var homepage = "https://ohmjs.org";
var bugs = "https://github.com/harc/ohm/issues";
var main = "index.js";
var module = "dist/ohm.esm.js";
var files = [
    "src",
    "dist",
    "extras",
    "third_party",
    "index.d.ts"
];
var types = "index.d.ts";
var scripts = {
    prebootstrap: "bash scripts/prebootstrap",
    bootstrap: "bash scripts/bootstrap --test || (echo 'Bootstrap failed.' && mv -v dist/ohm-grammar.js.old dist/ohm-grammar.js && mv -v dist/built-in-rules.js.old dist/built-in-rules.js && mv -v dist/operations-and-attributes.js.old dist/operations-and-attributes.js)",
    build: "yarn build-debug && webpack --mode=production",
    "build-debug": "webpack --mode=development && yarn build-esm && node scripts/generate-types.mjs",
    "build-esm": "rollup -c rollup.config.mjs",
    clean: "rm -f dist/ohm.js dist/ohm.min.js",
    lint: "eslint . --ignore-path ../.eslintignore",
    format: "prettier . --write --ignore-path ../.prettierignore --config ../.prettierrc && eslint . --ignore-path ../.eslintignore --fix",
    test: "ava && ava --config ava-ts.config.js test/test-typings.ts",
    "test-watch": "ava --watch",
    "pre-commit": "yarn run lint && yarn run build && yarn run test",
    prepublishOnly: "bash scripts/prepublishOnly",
    prepack: "cp ../../README.md . && yarn build",
    postpack: "rm README.md",
    postpublish: "echo '👉  Now go to https://github.com/harc/ohm/releases and create a release.'",
    "unsafe-bootstrap": "bash scripts/bootstrap",
    "update-contributors": "bash scripts/update-contributors",
    watch: "webpack --mode=development --watch"
};
var license = "MIT";
var author = "Alex Warth <alexwarth@gmail.com> (http://tinlizzie.org/~awarth)";
var contributors = [
    "Patrick Dubroy <pdubroy@gmail.com>",
    "Meixian Li <lmeixian@gmail.com>",
    "Marko Röder <m.roeder@photon-software.de>",
    "Tony Garnock-Jones <tonygarnockjones@gmail.com>",
    "Saketh Kasibatla <sake.kasi@gmail.com>",
    "Lionel Landwerlin <llandwerlin@gmail.com>",
    "Jason Merrill <jwmerrill@gmail.com>",
    "Ray Toal <rtoal@lmu.edu>",
    "Yoshiki Ohshima <Yoshiki.Ohshima@acm.org>",
    "megabuz <3299889+megabuz@users.noreply.github.com>",
    "Jonathan Edwards <JonathanMEdwards@gmail.com>",
    "Milan Lajtoš <milan.lajtos@me.com>",
    "Neil Jewers <njjewers@uwaterloo.ca>",
    "stagas <gstagas@gmail.com>",
    "AngryPowman <angrypowman@qq.com>",
    "Arthur Carabott <arthurc@gmail.com>",
    "Casey Olson <casey.m.olson@gmail.com>",
    "Daniel Tomlinson <DanielTomlinson@me.com>",
    "Ian Harris <ian@fofgof.xyz>",
    "Justin Chase <justin.m.chase@gmail.com>",
    "Leslie Ying <acetophore@users.noreply.github.com>",
    "Luca Guzzon <luca.guzzon@gmail.com>",
    "Mike Niebling <(none)>",
    "Patrick Dubroy <patrick@sourcegraph.com>",
    "Pierre Donias <pierre.donias@gmail.com>",
    "Stan Rozenraukh <stan@stanistan.com>",
    "Stephan Seidt <stephan.seidt@gmail.com>",
    "Steve Phillips <steve@tryingtobeawesome.com>",
    "Szymon Kaliski <kaliskiszymon@gmail.com>",
    "Thomas Nyberg <tomnyberg@gmail.com>",
    "Vse Mozhet Byt <vsemozhetbyt@gmail.com>",
    "Wil Chung <10446+iamwilhelm@users.noreply.github.com>",
    "Zachary Sakowitz <zsakowitz@gmail.com>",
    "abego <ub@abego-software.de>",
    "acslk <d_vd415@hotmail.com>",
    "codeZeilen <codeZeilen@users.noreply.github.com>",
    "kassadin <kassadin@foxmail.com>",
    "owch <bowenrainyday@gmail.com>",
    "sfinnie <scott.finnie@gmail.com>"
];
var dependencies = {};
var devDependencies = {
    "@ohm-js/cli": "^1.0.0",
    "@rollup/plugin-commonjs": "^21.0.1",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-node-resolve": "^13.1.3",
    ava: "^3.15.0",
    "ava-spec": "^1.1.1",
    dedent: "^0.7.0",
    eslint: "^7.9.0",
    "eslint-config-google": "^0.14.0",
    "eslint-plugin-ava": "^11.0.0",
    "eslint-plugin-camelcase-ohm": "^0.2.1",
    "eslint-plugin-no-extension-in-require": "^0.2.0",
    husky: "^4.2.5",
    jsdom: "^9.9.1",
    json: "^9.0.6",
    markscript: "^0.5.0",
    "node-static": "^0.7.11",
    "ohm-grammar-ecmascript": "^1.0.0",
    rollup: "^2.63.0",
    "ts-loader": "^8.0.4",
    "ts-node": "^9.0.0",
    typescript: "^4.0.3",
    "walk-sync": "^2.2.0",
    webpack: "^4.44.2",
    "webpack-cli": "^3.3.12"
};
var engines = {
    node: ">=0.12.1"
};
var require$$0 = {
    name: name,
    version: version$2,
    description: description,
    repository: repository,
    keywords: keywords,
    homepage: homepage,
    bugs: bugs,
    main: main,
    module: module,
    files: files,
    types: types,
    scripts: scripts,
    license: license,
    author: author,
    contributors: contributors,
    dependencies: dependencies,
    devDependencies: devDependencies,
    engines: engines
};
var version$1 = typeof __GLOBAL_OHM_VERSION__ === 'string' ? __GLOBAL_OHM_VERSION__ : require$$0.version;
var makeRecipe$5 = {};
const Builder$1 = Builder_1;
function makeRecipe$4(recipe) {
    if (typeof recipe === 'function') {
        return recipe.call(new Builder$1());
    } else {
        if (typeof recipe === 'string') {
            recipe = JSON.parse(recipe);
        }
        return new Builder$1().fromRecipe(recipe);
    }
}
makeRecipe$5.makeRecipe = makeRecipe$4;
var { makeRecipe: makeRecipe$3  } = makeRecipe$5;
var builtInRules = makeRecipe$3([
    "grammar",
    {
        "source": "BuiltInRules {\n\n  alnum  (an alpha-numeric character)\n    = letter\n    | digit\n\n  letter  (a letter)\n    = lower\n    | upper\n    | unicodeLtmo\n\n  digit  (a digit)\n    = \"0\"..\"9\"\n\n  hexDigit  (a hexadecimal digit)\n    = digit\n    | \"a\"..\"f\"\n    | \"A\"..\"F\"\n\n  ListOf<elem, sep>\n    = NonemptyListOf<elem, sep>\n    | EmptyListOf<elem, sep>\n\n  NonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  EmptyListOf<elem, sep>\n    = /* nothing */\n\n  listOf<elem, sep>\n    = nonemptyListOf<elem, sep>\n    | emptyListOf<elem, sep>\n\n  nonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  emptyListOf<elem, sep>\n    = /* nothing */\n\n  // Allows a syntactic rule application within a lexical context.\n  applySyntactic<app> = app\n}"
    },
    "BuiltInRules",
    null,
    null,
    {
        "alnum": [
            "define",
            {
                "sourceInterval": [
                    18,
                    78
                ]
            },
            "an alpha-numeric character",
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        60,
                        78
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            60,
                            66
                        ]
                    },
                    "letter",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            73,
                            78
                        ]
                    },
                    "digit",
                    []
                ]
            ]
        ],
        "letter": [
            "define",
            {
                "sourceInterval": [
                    82,
                    142
                ]
            },
            "a letter",
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        107,
                        142
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            107,
                            112
                        ]
                    },
                    "lower",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            119,
                            124
                        ]
                    },
                    "upper",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            131,
                            142
                        ]
                    },
                    "unicodeLtmo",
                    []
                ]
            ]
        ],
        "digit": [
            "define",
            {
                "sourceInterval": [
                    146,
                    177
                ]
            },
            "a digit",
            [],
            [
                "range",
                {
                    "sourceInterval": [
                        169,
                        177
                    ]
                },
                "0",
                "9"
            ]
        ],
        "hexDigit": [
            "define",
            {
                "sourceInterval": [
                    181,
                    254
                ]
            },
            "a hexadecimal digit",
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        219,
                        254
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            219,
                            224
                        ]
                    },
                    "digit",
                    []
                ],
                [
                    "range",
                    {
                        "sourceInterval": [
                            231,
                            239
                        ]
                    },
                    "a",
                    "f"
                ],
                [
                    "range",
                    {
                        "sourceInterval": [
                            246,
                            254
                        ]
                    },
                    "A",
                    "F"
                ]
            ]
        ],
        "ListOf": [
            "define",
            {
                "sourceInterval": [
                    258,
                    336
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "alt",
                {
                    "sourceInterval": [
                        282,
                        336
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            282,
                            307
                        ]
                    },
                    "NonemptyListOf",
                    [
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    297,
                                    301
                                ]
                            },
                            0
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    303,
                                    306
                                ]
                            },
                            1
                        ]
                    ]
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            314,
                            336
                        ]
                    },
                    "EmptyListOf",
                    [
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    326,
                                    330
                                ]
                            },
                            0
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    332,
                                    335
                                ]
                            },
                            1
                        ]
                    ]
                ]
            ]
        ],
        "NonemptyListOf": [
            "define",
            {
                "sourceInterval": [
                    340,
                    388
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "seq",
                {
                    "sourceInterval": [
                        372,
                        388
                    ]
                },
                [
                    "param",
                    {
                        "sourceInterval": [
                            372,
                            376
                        ]
                    },
                    0
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            377,
                            388
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                378,
                                386
                            ]
                        },
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    378,
                                    381
                                ]
                            },
                            1
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    382,
                                    386
                                ]
                            },
                            0
                        ]
                    ]
                ]
            ]
        ],
        "EmptyListOf": [
            "define",
            {
                "sourceInterval": [
                    392,
                    434
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "seq",
                {
                    "sourceInterval": [
                        438,
                        438
                    ]
                }
            ]
        ],
        "listOf": [
            "define",
            {
                "sourceInterval": [
                    438,
                    516
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "alt",
                {
                    "sourceInterval": [
                        462,
                        516
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            462,
                            487
                        ]
                    },
                    "nonemptyListOf",
                    [
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    477,
                                    481
                                ]
                            },
                            0
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    483,
                                    486
                                ]
                            },
                            1
                        ]
                    ]
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            494,
                            516
                        ]
                    },
                    "emptyListOf",
                    [
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    506,
                                    510
                                ]
                            },
                            0
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    512,
                                    515
                                ]
                            },
                            1
                        ]
                    ]
                ]
            ]
        ],
        "nonemptyListOf": [
            "define",
            {
                "sourceInterval": [
                    520,
                    568
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "seq",
                {
                    "sourceInterval": [
                        552,
                        568
                    ]
                },
                [
                    "param",
                    {
                        "sourceInterval": [
                            552,
                            556
                        ]
                    },
                    0
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            557,
                            568
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                558,
                                566
                            ]
                        },
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    558,
                                    561
                                ]
                            },
                            1
                        ],
                        [
                            "param",
                            {
                                "sourceInterval": [
                                    562,
                                    566
                                ]
                            },
                            0
                        ]
                    ]
                ]
            ]
        ],
        "emptyListOf": [
            "define",
            {
                "sourceInterval": [
                    572,
                    682
                ]
            },
            null,
            [
                "elem",
                "sep"
            ],
            [
                "seq",
                {
                    "sourceInterval": [
                        685,
                        685
                    ]
                }
            ]
        ],
        "applySyntactic": [
            "define",
            {
                "sourceInterval": [
                    685,
                    710
                ]
            },
            null,
            [
                "app"
            ],
            [
                "param",
                {
                    "sourceInterval": [
                        707,
                        710
                    ]
                },
                0
            ]
        ]
    }
]);
const Grammar$1 = Grammar_1;
Grammar$1.BuiltInRules = builtInRules;
var { makeRecipe: makeRecipe$2  } = makeRecipe$5;
var operationsAndAttributes = makeRecipe$2([
    "grammar",
    {
        "source": "OperationsAndAttributes {\n\n  AttributeSignature =\n    name\n\n  OperationSignature =\n    name Formals?\n\n  Formals\n    = \"(\" ListOf<name, \",\"> \")\"\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = \"_\"\n    | letter\n\n  nameRest\n    = \"_\"\n    | alnum\n\n}"
    },
    "OperationsAndAttributes",
    null,
    "AttributeSignature",
    {
        "AttributeSignature": [
            "define",
            {
                "sourceInterval": [
                    29,
                    58
                ]
            },
            null,
            [],
            [
                "app",
                {
                    "sourceInterval": [
                        54,
                        58
                    ]
                },
                "name",
                []
            ]
        ],
        "OperationSignature": [
            "define",
            {
                "sourceInterval": [
                    62,
                    100
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        87,
                        100
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            87,
                            91
                        ]
                    },
                    "name",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            92,
                            100
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                92,
                                99
                            ]
                        },
                        "Formals",
                        []
                    ]
                ]
            ]
        ],
        "Formals": [
            "define",
            {
                "sourceInterval": [
                    104,
                    143
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        118,
                        143
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            118,
                            121
                        ]
                    },
                    "("
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            122,
                            139
                        ]
                    },
                    "ListOf",
                    [
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    129,
                                    133
                                ]
                            },
                            "name",
                            []
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    135,
                                    138
                                ]
                            },
                            ","
                        ]
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            140,
                            143
                        ]
                    },
                    ")"
                ]
            ]
        ],
        "name": [
            "define",
            {
                "sourceInterval": [
                    147,
                    187
                ]
            },
            "a name",
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        168,
                        187
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            168,
                            177
                        ]
                    },
                    "nameFirst",
                    []
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            178,
                            187
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                178,
                                186
                            ]
                        },
                        "nameRest",
                        []
                    ]
                ]
            ]
        ],
        "nameFirst": [
            "define",
            {
                "sourceInterval": [
                    191,
                    223
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        207,
                        223
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            207,
                            210
                        ]
                    },
                    "_"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            217,
                            223
                        ]
                    },
                    "letter",
                    []
                ]
            ]
        ],
        "nameRest": [
            "define",
            {
                "sourceInterval": [
                    227,
                    257
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        242,
                        257
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            242,
                            245
                        ]
                    },
                    "_"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            252,
                            257
                        ]
                    },
                    "alnum",
                    []
                ]
            ]
        ]
    }
]);
const Semantics = Semantics_1;
const util$1 = util$7;
util$1.awaitBuiltInRules((builtInRules)=>{
    const operationsAndAttributesGrammar = operationsAndAttributes;
    initBuiltInSemantics(builtInRules);
    initPrototypeParser(operationsAndAttributesGrammar);
});
function initBuiltInSemantics(builtInRules) {
    const actions = {
        empty () {
            return this.iteration();
        },
        nonEmpty (first, _, rest) {
            return this.iteration([
                first
            ].concat(rest.children));
        }
    };
    Semantics.BuiltInSemantics = Semantics.createSemantics(builtInRules, null).addOperation('asIteration', {
        emptyListOf: actions.empty,
        nonemptyListOf: actions.nonEmpty,
        EmptyListOf: actions.empty,
        NonemptyListOf: actions.nonEmpty
    });
}
function initPrototypeParser(grammar) {
    Semantics.prototypeGrammarSemantics = grammar.createSemantics().addOperation('parse', {
        AttributeSignature (name) {
            return {
                name: name.parse(),
                formals: []
            };
        },
        OperationSignature (name, optFormals) {
            return {
                name: name.parse(),
                formals: optFormals.children.map((c)=>c.parse())[0] || []
            };
        },
        Formals (oparen, fs, cparen) {
            return fs.asIteration().children.map((c)=>c.parse());
        },
        name (first, rest) {
            return this.sourceString;
        }
    });
    Semantics.prototypeGrammar = grammar;
}
var { makeRecipe: makeRecipe$1  } = makeRecipe$5;
var ohmGrammar$1 = makeRecipe$1([
    "grammar",
    {
        "source": "Ohm {\n\n  Grammars\n    = Grammar*\n\n  Grammar\n    = ident SuperGrammar? \"{\" Rule* \"}\"\n\n  SuperGrammar\n    = \"<:\" ident\n\n  Rule\n    = ident Formals? ruleDescr? \"=\"  RuleBody  -- define\n    | ident Formals?            \":=\" OverrideRuleBody  -- override\n    | ident Formals?            \"+=\" RuleBody  -- extend\n\n  RuleBody\n    = \"|\"? NonemptyListOf<TopLevelTerm, \"|\">\n\n  TopLevelTerm\n    = Seq caseName  -- inline\n    | Seq\n\n  OverrideRuleBody\n    = \"|\"? NonemptyListOf<OverrideTopLevelTerm, \"|\">\n\n  OverrideTopLevelTerm\n    = \"...\"  -- superSplice\n    | TopLevelTerm\n\n  Formals\n    = \"<\" ListOf<ident, \",\"> \">\"\n\n  Params\n    = \"<\" ListOf<Seq, \",\"> \">\"\n\n  Alt\n    = NonemptyListOf<Seq, \"|\">\n\n  Seq\n    = Iter*\n\n  Iter\n    = Pred \"*\"  -- star\n    | Pred \"+\"  -- plus\n    | Pred \"?\"  -- opt\n    | Pred\n\n  Pred\n    = \"~\" Lex  -- not\n    | \"&\" Lex  -- lookahead\n    | Lex\n\n  Lex\n    = \"#\" Base  -- lex\n    | Base\n\n  Base\n    = ident Params? ~(ruleDescr? \"=\" | \":=\" | \"+=\")  -- application\n    | oneCharTerminal \"..\" oneCharTerminal           -- range\n    | terminal                                       -- terminal\n    | \"(\" Alt \")\"                                    -- paren\n\n  ruleDescr  (a rule description)\n    = \"(\" ruleDescrText \")\"\n\n  ruleDescrText\n    = (~\")\" any)*\n\n  caseName\n    = \"--\" (~\"\\n\" space)* name (~\"\\n\" space)* (\"\\n\" | &\"}\")\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = \"_\"\n    | letter\n\n  nameRest\n    = \"_\"\n    | alnum\n\n  ident  (an identifier)\n    = name\n\n  terminal\n    = \"\\\"\" terminalChar* \"\\\"\"\n\n  oneCharTerminal\n    = \"\\\"\" terminalChar \"\\\"\"\n\n  terminalChar\n    = escapeChar\n      | ~\"\\\\\" ~\"\\\"\" ~\"\\n\" \"\\u{0}\"..\"\\u{10FFFF}\"\n\n  escapeChar  (an escape sequence)\n    = \"\\\\\\\\\"                                     -- backslash\n    | \"\\\\\\\"\"                                     -- doubleQuote\n    | \"\\\\\\'\"                                     -- singleQuote\n    | \"\\\\b\"                                      -- backspace\n    | \"\\\\n\"                                      -- lineFeed\n    | \"\\\\r\"                                      -- carriageReturn\n    | \"\\\\t\"                                      -- tab\n    | \"\\\\u{\" hexDigit hexDigit? hexDigit?\n             hexDigit? hexDigit? hexDigit? \"}\"   -- unicodeCodePoint\n    | \"\\\\u\" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape\n    | \"\\\\x\" hexDigit hexDigit                    -- hexEscape\n\n  space\n   += comment\n\n  comment\n    = \"//\" (~\"\\n\" any)* &(\"\\n\" | end)  -- singleLine\n    | \"/*\" (~\"*/\" any)* \"*/\"  -- multiLine\n\n  tokens = token*\n\n  token = caseName | comment | ident | operator | punctuation | terminal | any\n\n  operator = \"<:\" | \"=\" | \":=\" | \"+=\" | \"*\" | \"+\" | \"?\" | \"~\" | \"&\"\n\n  punctuation = \"<\" | \">\" | \",\" | \"--\"\n}"
    },
    "Ohm",
    null,
    "Grammars",
    {
        "Grammars": [
            "define",
            {
                "sourceInterval": [
                    9,
                    32
                ]
            },
            null,
            [],
            [
                "star",
                {
                    "sourceInterval": [
                        24,
                        32
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            24,
                            31
                        ]
                    },
                    "Grammar",
                    []
                ]
            ]
        ],
        "Grammar": [
            "define",
            {
                "sourceInterval": [
                    36,
                    83
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        50,
                        83
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            50,
                            55
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            56,
                            69
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                56,
                                68
                            ]
                        },
                        "SuperGrammar",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            70,
                            73
                        ]
                    },
                    "{"
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            74,
                            79
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                74,
                                78
                            ]
                        },
                        "Rule",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            80,
                            83
                        ]
                    },
                    "}"
                ]
            ]
        ],
        "SuperGrammar": [
            "define",
            {
                "sourceInterval": [
                    87,
                    116
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        106,
                        116
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            106,
                            110
                        ]
                    },
                    "<:"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            111,
                            116
                        ]
                    },
                    "ident",
                    []
                ]
            ]
        ],
        "Rule_define": [
            "define",
            {
                "sourceInterval": [
                    131,
                    181
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        131,
                        170
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            131,
                            136
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            137,
                            145
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                137,
                                144
                            ]
                        },
                        "Formals",
                        []
                    ]
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            146,
                            156
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                146,
                                155
                            ]
                        },
                        "ruleDescr",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            157,
                            160
                        ]
                    },
                    "="
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            162,
                            170
                        ]
                    },
                    "RuleBody",
                    []
                ]
            ]
        ],
        "Rule_override": [
            "define",
            {
                "sourceInterval": [
                    188,
                    248
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        188,
                        235
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            188,
                            193
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            194,
                            202
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                194,
                                201
                            ]
                        },
                        "Formals",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            214,
                            218
                        ]
                    },
                    ":="
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            219,
                            235
                        ]
                    },
                    "OverrideRuleBody",
                    []
                ]
            ]
        ],
        "Rule_extend": [
            "define",
            {
                "sourceInterval": [
                    255,
                    305
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        255,
                        294
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            255,
                            260
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            261,
                            269
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                261,
                                268
                            ]
                        },
                        "Formals",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            281,
                            285
                        ]
                    },
                    "+="
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            286,
                            294
                        ]
                    },
                    "RuleBody",
                    []
                ]
            ]
        ],
        "Rule": [
            "define",
            {
                "sourceInterval": [
                    120,
                    305
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        131,
                        305
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            131,
                            170
                        ]
                    },
                    "Rule_define",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            188,
                            235
                        ]
                    },
                    "Rule_override",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            255,
                            294
                        ]
                    },
                    "Rule_extend",
                    []
                ]
            ]
        ],
        "RuleBody": [
            "define",
            {
                "sourceInterval": [
                    309,
                    362
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        324,
                        362
                    ]
                },
                [
                    "opt",
                    {
                        "sourceInterval": [
                            324,
                            328
                        ]
                    },
                    [
                        "terminal",
                        {
                            "sourceInterval": [
                                324,
                                327
                            ]
                        },
                        "|"
                    ]
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            329,
                            362
                        ]
                    },
                    "NonemptyListOf",
                    [
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    344,
                                    356
                                ]
                            },
                            "TopLevelTerm",
                            []
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    358,
                                    361
                                ]
                            },
                            "|"
                        ]
                    ]
                ]
            ]
        ],
        "TopLevelTerm_inline": [
            "define",
            {
                "sourceInterval": [
                    385,
                    408
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        385,
                        397
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            385,
                            388
                        ]
                    },
                    "Seq",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            389,
                            397
                        ]
                    },
                    "caseName",
                    []
                ]
            ]
        ],
        "TopLevelTerm": [
            "define",
            {
                "sourceInterval": [
                    366,
                    418
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        385,
                        418
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            385,
                            397
                        ]
                    },
                    "TopLevelTerm_inline",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            415,
                            418
                        ]
                    },
                    "Seq",
                    []
                ]
            ]
        ],
        "OverrideRuleBody": [
            "define",
            {
                "sourceInterval": [
                    422,
                    491
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        445,
                        491
                    ]
                },
                [
                    "opt",
                    {
                        "sourceInterval": [
                            445,
                            449
                        ]
                    },
                    [
                        "terminal",
                        {
                            "sourceInterval": [
                                445,
                                448
                            ]
                        },
                        "|"
                    ]
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            450,
                            491
                        ]
                    },
                    "NonemptyListOf",
                    [
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    465,
                                    485
                                ]
                            },
                            "OverrideTopLevelTerm",
                            []
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    487,
                                    490
                                ]
                            },
                            "|"
                        ]
                    ]
                ]
            ]
        ],
        "OverrideTopLevelTerm_superSplice": [
            "define",
            {
                "sourceInterval": [
                    522,
                    543
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        522,
                        527
                    ]
                },
                "..."
            ]
        ],
        "OverrideTopLevelTerm": [
            "define",
            {
                "sourceInterval": [
                    495,
                    562
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        522,
                        562
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            522,
                            527
                        ]
                    },
                    "OverrideTopLevelTerm_superSplice",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            550,
                            562
                        ]
                    },
                    "TopLevelTerm",
                    []
                ]
            ]
        ],
        "Formals": [
            "define",
            {
                "sourceInterval": [
                    566,
                    606
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        580,
                        606
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            580,
                            583
                        ]
                    },
                    "<"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            584,
                            602
                        ]
                    },
                    "ListOf",
                    [
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    591,
                                    596
                                ]
                            },
                            "ident",
                            []
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    598,
                                    601
                                ]
                            },
                            ","
                        ]
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            603,
                            606
                        ]
                    },
                    ">"
                ]
            ]
        ],
        "Params": [
            "define",
            {
                "sourceInterval": [
                    610,
                    647
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        623,
                        647
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            623,
                            626
                        ]
                    },
                    "<"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            627,
                            643
                        ]
                    },
                    "ListOf",
                    [
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    634,
                                    637
                                ]
                            },
                            "Seq",
                            []
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    639,
                                    642
                                ]
                            },
                            ","
                        ]
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            644,
                            647
                        ]
                    },
                    ">"
                ]
            ]
        ],
        "Alt": [
            "define",
            {
                "sourceInterval": [
                    651,
                    685
                ]
            },
            null,
            [],
            [
                "app",
                {
                    "sourceInterval": [
                        661,
                        685
                    ]
                },
                "NonemptyListOf",
                [
                    [
                        "app",
                        {
                            "sourceInterval": [
                                676,
                                679
                            ]
                        },
                        "Seq",
                        []
                    ],
                    [
                        "terminal",
                        {
                            "sourceInterval": [
                                681,
                                684
                            ]
                        },
                        "|"
                    ]
                ]
            ]
        ],
        "Seq": [
            "define",
            {
                "sourceInterval": [
                    689,
                    704
                ]
            },
            null,
            [],
            [
                "star",
                {
                    "sourceInterval": [
                        699,
                        704
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            699,
                            703
                        ]
                    },
                    "Iter",
                    []
                ]
            ]
        ],
        "Iter_star": [
            "define",
            {
                "sourceInterval": [
                    719,
                    736
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        719,
                        727
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            719,
                            723
                        ]
                    },
                    "Pred",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            724,
                            727
                        ]
                    },
                    "*"
                ]
            ]
        ],
        "Iter_plus": [
            "define",
            {
                "sourceInterval": [
                    743,
                    760
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        743,
                        751
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            743,
                            747
                        ]
                    },
                    "Pred",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            748,
                            751
                        ]
                    },
                    "+"
                ]
            ]
        ],
        "Iter_opt": [
            "define",
            {
                "sourceInterval": [
                    767,
                    783
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        767,
                        775
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            767,
                            771
                        ]
                    },
                    "Pred",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            772,
                            775
                        ]
                    },
                    "?"
                ]
            ]
        ],
        "Iter": [
            "define",
            {
                "sourceInterval": [
                    708,
                    794
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        719,
                        794
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            719,
                            727
                        ]
                    },
                    "Iter_star",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            743,
                            751
                        ]
                    },
                    "Iter_plus",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            767,
                            775
                        ]
                    },
                    "Iter_opt",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            790,
                            794
                        ]
                    },
                    "Pred",
                    []
                ]
            ]
        ],
        "Pred_not": [
            "define",
            {
                "sourceInterval": [
                    809,
                    824
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        809,
                        816
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            809,
                            812
                        ]
                    },
                    "~"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            813,
                            816
                        ]
                    },
                    "Lex",
                    []
                ]
            ]
        ],
        "Pred_lookahead": [
            "define",
            {
                "sourceInterval": [
                    831,
                    852
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        831,
                        838
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            831,
                            834
                        ]
                    },
                    "&"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            835,
                            838
                        ]
                    },
                    "Lex",
                    []
                ]
            ]
        ],
        "Pred": [
            "define",
            {
                "sourceInterval": [
                    798,
                    862
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        809,
                        862
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            809,
                            816
                        ]
                    },
                    "Pred_not",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            831,
                            838
                        ]
                    },
                    "Pred_lookahead",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            859,
                            862
                        ]
                    },
                    "Lex",
                    []
                ]
            ]
        ],
        "Lex_lex": [
            "define",
            {
                "sourceInterval": [
                    876,
                    892
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        876,
                        884
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            876,
                            879
                        ]
                    },
                    "#"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            880,
                            884
                        ]
                    },
                    "Base",
                    []
                ]
            ]
        ],
        "Lex": [
            "define",
            {
                "sourceInterval": [
                    866,
                    903
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        876,
                        903
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            876,
                            884
                        ]
                    },
                    "Lex_lex",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            899,
                            903
                        ]
                    },
                    "Base",
                    []
                ]
            ]
        ],
        "Base_application": [
            "define",
            {
                "sourceInterval": [
                    918,
                    979
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        918,
                        963
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            918,
                            923
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            924,
                            931
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                924,
                                930
                            ]
                        },
                        "Params",
                        []
                    ]
                ],
                [
                    "not",
                    {
                        "sourceInterval": [
                            932,
                            963
                        ]
                    },
                    [
                        "alt",
                        {
                            "sourceInterval": [
                                934,
                                962
                            ]
                        },
                        [
                            "seq",
                            {
                                "sourceInterval": [
                                    934,
                                    948
                                ]
                            },
                            [
                                "opt",
                                {
                                    "sourceInterval": [
                                        934,
                                        944
                                    ]
                                },
                                [
                                    "app",
                                    {
                                        "sourceInterval": [
                                            934,
                                            943
                                        ]
                                    },
                                    "ruleDescr",
                                    []
                                ]
                            ],
                            [
                                "terminal",
                                {
                                    "sourceInterval": [
                                        945,
                                        948
                                    ]
                                },
                                "="
                            ]
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    951,
                                    955
                                ]
                            },
                            ":="
                        ],
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    958,
                                    962
                                ]
                            },
                            "+="
                        ]
                    ]
                ]
            ]
        ],
        "Base_range": [
            "define",
            {
                "sourceInterval": [
                    986,
                    1041
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        986,
                        1022
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            986,
                            1001
                        ]
                    },
                    "oneCharTerminal",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1002,
                            1006
                        ]
                    },
                    ".."
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1007,
                            1022
                        ]
                    },
                    "oneCharTerminal",
                    []
                ]
            ]
        ],
        "Base_terminal": [
            "define",
            {
                "sourceInterval": [
                    1048,
                    1106
                ]
            },
            null,
            [],
            [
                "app",
                {
                    "sourceInterval": [
                        1048,
                        1056
                    ]
                },
                "terminal",
                []
            ]
        ],
        "Base_paren": [
            "define",
            {
                "sourceInterval": [
                    1113,
                    1168
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1113,
                        1124
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1113,
                            1116
                        ]
                    },
                    "("
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1117,
                            1120
                        ]
                    },
                    "Alt",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1121,
                            1124
                        ]
                    },
                    ")"
                ]
            ]
        ],
        "Base": [
            "define",
            {
                "sourceInterval": [
                    907,
                    1168
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        918,
                        1168
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            918,
                            963
                        ]
                    },
                    "Base_application",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            986,
                            1022
                        ]
                    },
                    "Base_range",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1048,
                            1056
                        ]
                    },
                    "Base_terminal",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1113,
                            1124
                        ]
                    },
                    "Base_paren",
                    []
                ]
            ]
        ],
        "ruleDescr": [
            "define",
            {
                "sourceInterval": [
                    1172,
                    1231
                ]
            },
            "a rule description",
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1210,
                        1231
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1210,
                            1213
                        ]
                    },
                    "("
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1214,
                            1227
                        ]
                    },
                    "ruleDescrText",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1228,
                            1231
                        ]
                    },
                    ")"
                ]
            ]
        ],
        "ruleDescrText": [
            "define",
            {
                "sourceInterval": [
                    1235,
                    1266
                ]
            },
            null,
            [],
            [
                "star",
                {
                    "sourceInterval": [
                        1255,
                        1266
                    ]
                },
                [
                    "seq",
                    {
                        "sourceInterval": [
                            1256,
                            1264
                        ]
                    },
                    [
                        "not",
                        {
                            "sourceInterval": [
                                1256,
                                1260
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    1257,
                                    1260
                                ]
                            },
                            ")"
                        ]
                    ],
                    [
                        "app",
                        {
                            "sourceInterval": [
                                1261,
                                1264
                            ]
                        },
                        "any",
                        []
                    ]
                ]
            ]
        ],
        "caseName": [
            "define",
            {
                "sourceInterval": [
                    1270,
                    1338
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1285,
                        1338
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1285,
                            1289
                        ]
                    },
                    "--"
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            1290,
                            1304
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                1291,
                                1302
                            ]
                        },
                        [
                            "not",
                            {
                                "sourceInterval": [
                                    1291,
                                    1296
                                ]
                            },
                            [
                                "terminal",
                                {
                                    "sourceInterval": [
                                        1292,
                                        1296
                                    ]
                                },
                                "\n"
                            ]
                        ],
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    1297,
                                    1302
                                ]
                            },
                            "space",
                            []
                        ]
                    ]
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1305,
                            1309
                        ]
                    },
                    "name",
                    []
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            1310,
                            1324
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                1311,
                                1322
                            ]
                        },
                        [
                            "not",
                            {
                                "sourceInterval": [
                                    1311,
                                    1316
                                ]
                            },
                            [
                                "terminal",
                                {
                                    "sourceInterval": [
                                        1312,
                                        1316
                                    ]
                                },
                                "\n"
                            ]
                        ],
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    1317,
                                    1322
                                ]
                            },
                            "space",
                            []
                        ]
                    ]
                ],
                [
                    "alt",
                    {
                        "sourceInterval": [
                            1326,
                            1337
                        ]
                    },
                    [
                        "terminal",
                        {
                            "sourceInterval": [
                                1326,
                                1330
                            ]
                        },
                        "\n"
                    ],
                    [
                        "lookahead",
                        {
                            "sourceInterval": [
                                1333,
                                1337
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    1334,
                                    1337
                                ]
                            },
                            "}"
                        ]
                    ]
                ]
            ]
        ],
        "name": [
            "define",
            {
                "sourceInterval": [
                    1342,
                    1382
                ]
            },
            "a name",
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1363,
                        1382
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            1363,
                            1372
                        ]
                    },
                    "nameFirst",
                    []
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            1373,
                            1382
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                1373,
                                1381
                            ]
                        },
                        "nameRest",
                        []
                    ]
                ]
            ]
        ],
        "nameFirst": [
            "define",
            {
                "sourceInterval": [
                    1386,
                    1418
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        1402,
                        1418
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1402,
                            1405
                        ]
                    },
                    "_"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1412,
                            1418
                        ]
                    },
                    "letter",
                    []
                ]
            ]
        ],
        "nameRest": [
            "define",
            {
                "sourceInterval": [
                    1422,
                    1452
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        1437,
                        1452
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1437,
                            1440
                        ]
                    },
                    "_"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1447,
                            1452
                        ]
                    },
                    "alnum",
                    []
                ]
            ]
        ],
        "ident": [
            "define",
            {
                "sourceInterval": [
                    1456,
                    1489
                ]
            },
            "an identifier",
            [],
            [
                "app",
                {
                    "sourceInterval": [
                        1485,
                        1489
                    ]
                },
                "name",
                []
            ]
        ],
        "terminal": [
            "define",
            {
                "sourceInterval": [
                    1493,
                    1531
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1508,
                        1531
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1508,
                            1512
                        ]
                    },
                    "\""
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            1513,
                            1526
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                1513,
                                1525
                            ]
                        },
                        "terminalChar",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1527,
                            1531
                        ]
                    },
                    "\""
                ]
            ]
        ],
        "oneCharTerminal": [
            "define",
            {
                "sourceInterval": [
                    1535,
                    1579
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        1557,
                        1579
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1557,
                            1561
                        ]
                    },
                    "\""
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1562,
                            1574
                        ]
                    },
                    "terminalChar",
                    []
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            1575,
                            1579
                        ]
                    },
                    "\""
                ]
            ]
        ],
        "terminalChar": [
            "define",
            {
                "sourceInterval": [
                    1583,
                    1660
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        1602,
                        1660
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            1602,
                            1612
                        ]
                    },
                    "escapeChar",
                    []
                ],
                [
                    "seq",
                    {
                        "sourceInterval": [
                            1621,
                            1660
                        ]
                    },
                    [
                        "not",
                        {
                            "sourceInterval": [
                                1621,
                                1626
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    1622,
                                    1626
                                ]
                            },
                            "\\"
                        ]
                    ],
                    [
                        "not",
                        {
                            "sourceInterval": [
                                1627,
                                1632
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    1628,
                                    1632
                                ]
                            },
                            "\""
                        ]
                    ],
                    [
                        "not",
                        {
                            "sourceInterval": [
                                1633,
                                1638
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    1634,
                                    1638
                                ]
                            },
                            "\n"
                        ]
                    ],
                    [
                        "range",
                        {
                            "sourceInterval": [
                                1639,
                                1660
                            ]
                        },
                        "\u0000",
                        "􏿿"
                    ]
                ]
            ]
        ],
        "escapeChar_backslash": [
            "define",
            {
                "sourceInterval": [
                    1703,
                    1758
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        1703,
                        1709
                    ]
                },
                "\\\\"
            ]
        ],
        "escapeChar_doubleQuote": [
            "define",
            {
                "sourceInterval": [
                    1765,
                    1822
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        1765,
                        1771
                    ]
                },
                "\\\""
            ]
        ],
        "escapeChar_singleQuote": [
            "define",
            {
                "sourceInterval": [
                    1829,
                    1886
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        1829,
                        1835
                    ]
                },
                "\\'"
            ]
        ],
        "escapeChar_backspace": [
            "define",
            {
                "sourceInterval": [
                    1893,
                    1948
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        1893,
                        1898
                    ]
                },
                "\\b"
            ]
        ],
        "escapeChar_lineFeed": [
            "define",
            {
                "sourceInterval": [
                    1955,
                    2009
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        1955,
                        1960
                    ]
                },
                "\\n"
            ]
        ],
        "escapeChar_carriageReturn": [
            "define",
            {
                "sourceInterval": [
                    2016,
                    2076
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        2016,
                        2021
                    ]
                },
                "\\r"
            ]
        ],
        "escapeChar_tab": [
            "define",
            {
                "sourceInterval": [
                    2083,
                    2132
                ]
            },
            null,
            [],
            [
                "terminal",
                {
                    "sourceInterval": [
                        2083,
                        2088
                    ]
                },
                "\\t"
            ]
        ],
        "escapeChar_unicodeCodePoint": [
            "define",
            {
                "sourceInterval": [
                    2139,
                    2243
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        2139,
                        2221
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2139,
                            2145
                        ]
                    },
                    "\\u{"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2146,
                            2154
                        ]
                    },
                    "hexDigit",
                    []
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            2155,
                            2164
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                2155,
                                2163
                            ]
                        },
                        "hexDigit",
                        []
                    ]
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            2165,
                            2174
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                2165,
                                2173
                            ]
                        },
                        "hexDigit",
                        []
                    ]
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            2188,
                            2197
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                2188,
                                2196
                            ]
                        },
                        "hexDigit",
                        []
                    ]
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            2198,
                            2207
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                2198,
                                2206
                            ]
                        },
                        "hexDigit",
                        []
                    ]
                ],
                [
                    "opt",
                    {
                        "sourceInterval": [
                            2208,
                            2217
                        ]
                    },
                    [
                        "app",
                        {
                            "sourceInterval": [
                                2208,
                                2216
                            ]
                        },
                        "hexDigit",
                        []
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2218,
                            2221
                        ]
                    },
                    "}"
                ]
            ]
        ],
        "escapeChar_unicodeEscape": [
            "define",
            {
                "sourceInterval": [
                    2250,
                    2309
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        2250,
                        2291
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2250,
                            2255
                        ]
                    },
                    "\\u"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2256,
                            2264
                        ]
                    },
                    "hexDigit",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2265,
                            2273
                        ]
                    },
                    "hexDigit",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2274,
                            2282
                        ]
                    },
                    "hexDigit",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2283,
                            2291
                        ]
                    },
                    "hexDigit",
                    []
                ]
            ]
        ],
        "escapeChar_hexEscape": [
            "define",
            {
                "sourceInterval": [
                    2316,
                    2371
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        2316,
                        2339
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2316,
                            2321
                        ]
                    },
                    "\\x"
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2322,
                            2330
                        ]
                    },
                    "hexDigit",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2331,
                            2339
                        ]
                    },
                    "hexDigit",
                    []
                ]
            ]
        ],
        "escapeChar": [
            "define",
            {
                "sourceInterval": [
                    1664,
                    2371
                ]
            },
            "an escape sequence",
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        1703,
                        2371
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            1703,
                            1709
                        ]
                    },
                    "escapeChar_backslash",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1765,
                            1771
                        ]
                    },
                    "escapeChar_doubleQuote",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1829,
                            1835
                        ]
                    },
                    "escapeChar_singleQuote",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1893,
                            1898
                        ]
                    },
                    "escapeChar_backspace",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            1955,
                            1960
                        ]
                    },
                    "escapeChar_lineFeed",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2016,
                            2021
                        ]
                    },
                    "escapeChar_carriageReturn",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2083,
                            2088
                        ]
                    },
                    "escapeChar_tab",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2139,
                            2221
                        ]
                    },
                    "escapeChar_unicodeCodePoint",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2250,
                            2291
                        ]
                    },
                    "escapeChar_unicodeEscape",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2316,
                            2339
                        ]
                    },
                    "escapeChar_hexEscape",
                    []
                ]
            ]
        ],
        "space": [
            "extend",
            {
                "sourceInterval": [
                    2375,
                    2394
                ]
            },
            null,
            [],
            [
                "app",
                {
                    "sourceInterval": [
                        2387,
                        2394
                    ]
                },
                "comment",
                []
            ]
        ],
        "comment_singleLine": [
            "define",
            {
                "sourceInterval": [
                    2412,
                    2458
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        2412,
                        2443
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2412,
                            2416
                        ]
                    },
                    "//"
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            2417,
                            2429
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                2418,
                                2427
                            ]
                        },
                        [
                            "not",
                            {
                                "sourceInterval": [
                                    2418,
                                    2423
                                ]
                            },
                            [
                                "terminal",
                                {
                                    "sourceInterval": [
                                        2419,
                                        2423
                                    ]
                                },
                                "\n"
                            ]
                        ],
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    2424,
                                    2427
                                ]
                            },
                            "any",
                            []
                        ]
                    ]
                ],
                [
                    "lookahead",
                    {
                        "sourceInterval": [
                            2430,
                            2443
                        ]
                    },
                    [
                        "alt",
                        {
                            "sourceInterval": [
                                2432,
                                2442
                            ]
                        },
                        [
                            "terminal",
                            {
                                "sourceInterval": [
                                    2432,
                                    2436
                                ]
                            },
                            "\n"
                        ],
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    2439,
                                    2442
                                ]
                            },
                            "end",
                            []
                        ]
                    ]
                ]
            ]
        ],
        "comment_multiLine": [
            "define",
            {
                "sourceInterval": [
                    2465,
                    2501
                ]
            },
            null,
            [],
            [
                "seq",
                {
                    "sourceInterval": [
                        2465,
                        2487
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2465,
                            2469
                        ]
                    },
                    "/*"
                ],
                [
                    "star",
                    {
                        "sourceInterval": [
                            2470,
                            2482
                        ]
                    },
                    [
                        "seq",
                        {
                            "sourceInterval": [
                                2471,
                                2480
                            ]
                        },
                        [
                            "not",
                            {
                                "sourceInterval": [
                                    2471,
                                    2476
                                ]
                            },
                            [
                                "terminal",
                                {
                                    "sourceInterval": [
                                        2472,
                                        2476
                                    ]
                                },
                                "*/"
                            ]
                        ],
                        [
                            "app",
                            {
                                "sourceInterval": [
                                    2477,
                                    2480
                                ]
                            },
                            "any",
                            []
                        ]
                    ]
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2483,
                            2487
                        ]
                    },
                    "*/"
                ]
            ]
        ],
        "comment": [
            "define",
            {
                "sourceInterval": [
                    2398,
                    2501
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        2412,
                        2501
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            2412,
                            2443
                        ]
                    },
                    "comment_singleLine",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2465,
                            2487
                        ]
                    },
                    "comment_multiLine",
                    []
                ]
            ]
        ],
        "tokens": [
            "define",
            {
                "sourceInterval": [
                    2505,
                    2520
                ]
            },
            null,
            [],
            [
                "star",
                {
                    "sourceInterval": [
                        2514,
                        2520
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            2514,
                            2519
                        ]
                    },
                    "token",
                    []
                ]
            ]
        ],
        "token": [
            "define",
            {
                "sourceInterval": [
                    2524,
                    2600
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        2532,
                        2600
                    ]
                },
                [
                    "app",
                    {
                        "sourceInterval": [
                            2532,
                            2540
                        ]
                    },
                    "caseName",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2543,
                            2550
                        ]
                    },
                    "comment",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2553,
                            2558
                        ]
                    },
                    "ident",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2561,
                            2569
                        ]
                    },
                    "operator",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2572,
                            2583
                        ]
                    },
                    "punctuation",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2586,
                            2594
                        ]
                    },
                    "terminal",
                    []
                ],
                [
                    "app",
                    {
                        "sourceInterval": [
                            2597,
                            2600
                        ]
                    },
                    "any",
                    []
                ]
            ]
        ],
        "operator": [
            "define",
            {
                "sourceInterval": [
                    2604,
                    2669
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        2615,
                        2669
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2615,
                            2619
                        ]
                    },
                    "<:"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2622,
                            2625
                        ]
                    },
                    "="
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2628,
                            2632
                        ]
                    },
                    ":="
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2635,
                            2639
                        ]
                    },
                    "+="
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2642,
                            2645
                        ]
                    },
                    "*"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2648,
                            2651
                        ]
                    },
                    "+"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2654,
                            2657
                        ]
                    },
                    "?"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2660,
                            2663
                        ]
                    },
                    "~"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2666,
                            2669
                        ]
                    },
                    "&"
                ]
            ]
        ],
        "punctuation": [
            "define",
            {
                "sourceInterval": [
                    2673,
                    2709
                ]
            },
            null,
            [],
            [
                "alt",
                {
                    "sourceInterval": [
                        2687,
                        2709
                    ]
                },
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2687,
                            2690
                        ]
                    },
                    "<"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2693,
                            2696
                        ]
                    },
                    ">"
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2699,
                            2702
                        ]
                    },
                    ","
                ],
                [
                    "terminal",
                    {
                        "sourceInterval": [
                            2705,
                            2709
                        ]
                    },
                    "--"
                ]
            ]
        ]
    }
]);
const Builder = Builder_1;
const Grammar = Grammar_1;
const Namespace = Namespace_1;
const common = common$l;
const errors = errors$9;
const pexprs = pexprs$6;
const util = util$7;
const version = version$1;
const { makeRecipe  } = makeRecipe$5;
let ohmGrammar;
const superSplicePlaceholder = Object.create(pexprs.PExpr.prototype);
const isBuffer = (obj)=>!!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
function buildGrammar(match, namespace, optOhmGrammarForTesting) {
    const builder = new Builder();
    let decl;
    let currentRuleName;
    let currentRuleFormals;
    let overriding = false;
    const metaGrammar = optOhmGrammarForTesting || ohmGrammar;
    const helpers = metaGrammar.createSemantics().addOperation('visit', {
        Grammars (grammarIter) {
            return grammarIter.children.map((c)=>c.visit());
        },
        Grammar (id, s, _open, rules, _close) {
            const grammarName = id.visit();
            decl = builder.newGrammar(grammarName, namespace);
            s.child(0) && s.child(0).visit();
            rules.children.map((c)=>c.visit());
            const g = decl.build();
            g.source = this.source.trimmed();
            if (grammarName in namespace) {
                throw errors.duplicateGrammarDeclaration(g, namespace);
            }
            namespace[grammarName] = g;
            return g;
        },
        SuperGrammar (_, n) {
            const superGrammarName = n.visit();
            if (superGrammarName === 'null') {
                decl.withSuperGrammar(null);
            } else {
                if (!namespace || !(superGrammarName in namespace)) {
                    throw errors.undeclaredGrammar(superGrammarName, namespace, n.source);
                }
                decl.withSuperGrammar(namespace[superGrammarName]);
            }
        },
        Rule_define (n, fs, d, _, b) {
            currentRuleName = n.visit();
            currentRuleFormals = fs.children.map((c)=>c.visit())[0] || [];
            if (!decl.defaultStartRule && decl.ensureSuperGrammar() !== Grammar.ProtoBuiltInRules) {
                decl.withDefaultStartRule(currentRuleName);
            }
            const body = b.visit();
            const description = d.children.map((c)=>c.visit())[0];
            const source = this.source.trimmed();
            return decl.define(currentRuleName, currentRuleFormals, body, description, source);
        },
        Rule_override (n, fs, _, b) {
            currentRuleName = n.visit();
            currentRuleFormals = fs.children.map((c)=>c.visit())[0] || [];
            const source = this.source.trimmed();
            decl.ensureSuperGrammarRuleForOverriding(currentRuleName, source);
            overriding = true;
            const body = b.visit();
            overriding = false;
            return decl.override(currentRuleName, currentRuleFormals, body, null, source);
        },
        Rule_extend (n, fs, _, b) {
            currentRuleName = n.visit();
            currentRuleFormals = fs.children.map((c)=>c.visit())[0] || [];
            const body = b.visit();
            const source = this.source.trimmed();
            return decl.extend(currentRuleName, currentRuleFormals, body, null, source);
        },
        RuleBody (_, terms) {
            return builder.alt(...terms.visit()).withSource(this.source);
        },
        OverrideRuleBody (_, terms) {
            const args = terms.visit();
            const expansionPos = args.indexOf(superSplicePlaceholder);
            if (expansionPos >= 0) {
                const beforeTerms = args.slice(0, expansionPos);
                const afterTerms = args.slice(expansionPos + 1);
                afterTerms.forEach((t)=>{
                    if (t === superSplicePlaceholder) throw errors.multipleSuperSplices(t);
                });
                return new pexprs.Splice(decl.superGrammar, currentRuleName, beforeTerms, afterTerms).withSource(this.source);
            } else {
                return builder.alt(...args).withSource(this.source);
            }
        },
        Formals (opointy, fs, cpointy) {
            return fs.visit();
        },
        Params (opointy, ps, cpointy) {
            return ps.visit();
        },
        Alt (seqs) {
            return builder.alt(...seqs.visit()).withSource(this.source);
        },
        TopLevelTerm_inline (b, n) {
            const inlineRuleName = currentRuleName + '_' + n.visit();
            const body = b.visit();
            const source = this.source.trimmed();
            const isNewRuleDeclaration = !(decl.superGrammar && decl.superGrammar.rules[inlineRuleName]);
            if (overriding && !isNewRuleDeclaration) {
                decl.override(inlineRuleName, currentRuleFormals, body, null, source);
            } else {
                decl.define(inlineRuleName, currentRuleFormals, body, null, source);
            }
            const params = currentRuleFormals.map((formal)=>builder.app(formal));
            return builder.app(inlineRuleName, params).withSource(body.source);
        },
        OverrideTopLevelTerm_superSplice (_) {
            return superSplicePlaceholder;
        },
        Seq (expr) {
            return builder.seq(...expr.children.map((c)=>c.visit())).withSource(this.source);
        },
        Iter_star (x, _) {
            return builder.star(x.visit()).withSource(this.source);
        },
        Iter_plus (x, _) {
            return builder.plus(x.visit()).withSource(this.source);
        },
        Iter_opt (x, _) {
            return builder.opt(x.visit()).withSource(this.source);
        },
        Pred_not (_, x) {
            return builder.not(x.visit()).withSource(this.source);
        },
        Pred_lookahead (_, x) {
            return builder.lookahead(x.visit()).withSource(this.source);
        },
        Lex_lex (_, x) {
            return builder.lex(x.visit()).withSource(this.source);
        },
        Base_application (rule, ps) {
            const params = ps.children.map((c)=>c.visit())[0] || [];
            return builder.app(rule.visit(), params).withSource(this.source);
        },
        Base_range (from, _, to) {
            return builder.range(from.visit(), to.visit()).withSource(this.source);
        },
        Base_terminal (expr) {
            return builder.terminal(expr.visit()).withSource(this.source);
        },
        Base_paren (open, x, close) {
            return x.visit();
        },
        ruleDescr (open, t, close) {
            return t.visit();
        },
        ruleDescrText (_) {
            return this.sourceString.trim();
        },
        caseName (_, space1, n, space2, end) {
            return n.visit();
        },
        name (first, rest) {
            return this.sourceString;
        },
        nameFirst (expr) {},
        nameRest (expr) {},
        terminal (open, cs, close) {
            return cs.children.map((c)=>c.visit()).join('');
        },
        oneCharTerminal (open, c, close) {
            return c.visit();
        },
        escapeChar (c) {
            try {
                return common.unescapeCodePoint(this.sourceString);
            } catch (err) {
                if (err instanceof RangeError && err.message.startsWith('Invalid code point ')) {
                    throw errors.invalidCodePoint(c);
                }
                throw err;
            }
        },
        NonemptyListOf (x, _, xs) {
            return [
                x.visit()
            ].concat(xs.children.map((c)=>c.visit()));
        },
        EmptyListOf () {
            return [];
        },
        _terminal () {
            return this.sourceString;
        }
    });
    return helpers(match).visit();
}
function compileAndLoad(source, namespace) {
    const m = ohmGrammar.match(source, 'Grammars');
    if (m.failed()) {
        throw errors.grammarSyntaxError(m);
    }
    return buildGrammar(m, namespace);
}
function grammar(source, optNamespace) {
    const ns = grammars(source, optNamespace);
    const grammarNames = Object.keys(ns);
    if (grammarNames.length === 0) {
        throw new Error('Missing grammar definition');
    } else if (grammarNames.length > 1) {
        const secondGrammar = ns[grammarNames[1]];
        const interval = secondGrammar.source;
        throw new Error(util.getLineAndColumnMessage(interval.sourceString, interval.startIdx) + 'Found more than one grammar definition -- use ohm.grammars() instead.');
    }
    return ns[grammarNames[0]];
}
function grammars(source, optNamespace) {
    const ns = Namespace.extend(Namespace.asNamespace(optNamespace));
    if (typeof source !== 'string') {
        if (isBuffer(source)) {
            source = source.toString();
        } else {
            throw new TypeError('Expected string as first argument, got ' + common.unexpectedObjToString(source));
        }
    }
    compileAndLoad(source, ns);
    return ns;
}
function grammarFromScriptElement(optNode) {
    throw new Error('grammarFromScriptElement was removed in Ohm v16.0. See https://ohmjs.org/d/gfs for more info.');
}
function grammarsFromScriptElements(optNodeOrNodeList) {
    throw new Error('grammarsFromScriptElements was removed in Ohm v16.0. See https://ohmjs.org/d/gfs for more info.');
}
main$1.exports = {
    createNamespace: Namespace.createNamespace,
    grammar,
    grammars,
    grammarFromScriptElement,
    grammarsFromScriptElements,
    makeRecipe,
    ohmGrammar: null,
    pexprs,
    util,
    version
};
main$1.exports._buildGrammar = buildGrammar;
util.announceBuiltInRules(Grammar.BuiltInRules);
main$1.exports.ohmGrammar = ohmGrammar = ohmGrammar$1;
Grammar.initApplicationParser(ohmGrammar, buildGrammar);
var ohm = main$1.exports;
const { assert  } = common$l;
function getProp(name, thing, fn) {
    return fn(thing[name]);
}
function mapProp(name, thing, fn) {
    return thing[name].map(fn);
}
function getPropWalkFn(descriptor) {
    const parts = descriptor.split(/ ?\[\]/);
    if (parts.length === 2) {
        return mapProp.bind(null, parts[0]);
    }
    return getProp.bind(null, descriptor);
}
function getProps(walkFns, thing, fn) {
    return walkFns.map((walkFn)=>walkFn(thing, fn));
}
function getWalkFn(shape) {
    if (typeof shape === 'string') {
        return getProps.bind(null, [
            getPropWalkFn(shape)
        ]);
    } else if (Array.isArray(shape)) {
        return getProps.bind(null, shape.map(getPropWalkFn));
    } else {
        assert(typeof shape === 'function', 'Expected a string, Array, or function');
        assert(shape.length === 2, 'Expected a function of arity 2, got ' + shape.length);
        return shape;
    }
}
function isRestrictedIdentifier(str) {
    return /^[a-zA-Z_][0-9a-zA-Z_]*$/.test(str);
}
function trim(s) {
    return s.trim();
}
function parseSignature(sig) {
    const parts = sig.split(/[()]/).map(trim);
    if (parts.length === 3 && parts[2] === '') {
        const name = parts[0];
        let params = [];
        if (parts[1].length > 0) {
            params = parts[1].split(',').map(trim);
        }
        if (isRestrictedIdentifier(name) && params.every(isRestrictedIdentifier)) {
            return {
                name,
                formals: params
            };
        }
    }
    throw new Error('Invalid operation signature: ' + sig);
}
function VisitorFamily(config) {
    this._shapes = config.shapes;
    this._getTag = config.getTag;
    this.Adapter = function(thing, family) {
        this._adaptee = thing;
        this._family = family;
    };
    this.Adapter.prototype.valueOf = function() {
        throw new Error('heeey!');
    };
    this.operations = {};
    this._arities = Object.create(null);
    this._getChildren = Object.create(null);
    Object.keys(this._shapes).forEach((k)=>{
        const shape = this._shapes[k];
        this._getChildren[k] = getWalkFn(shape);
        if (typeof shape !== 'function') {
            this._arities[k] = Array.isArray(shape) ? shape.length : 1;
        }
    });
    this._wrap = (thing)=>new this.Adapter(thing, this);
}
VisitorFamily.prototype.wrap = function(thing) {
    return this._wrap(thing);
};
VisitorFamily.prototype._checkActionDict = function(dict) {
    Object.keys(dict).forEach((k)=>{
        assert(k in this._getChildren, "Unrecognized action name '" + k + "'");
        const action = dict[k];
        assert(typeof action === 'function', "Key '" + k + "': expected function, got " + action);
        if (k in this._arities) {
            const expected = this._arities[k];
            const actual = dict[k].length;
            assert(actual === expected, "Action '" + k + "' has the wrong arity: expected " + expected + ', got ' + actual);
        }
    });
};
VisitorFamily.prototype.addOperation = function(signature, actions) {
    const sig = parseSignature(signature);
    const { name  } = sig;
    this._checkActionDict(actions);
    this.operations[name] = {
        name,
        formals: sig.formals,
        actions
    };
    const family = this;
    this.Adapter.prototype[name] = function(...args) {
        const tag = family._getTag(this._adaptee);
        assert(tag in family._getChildren, "getTag returned unrecognized tag '" + tag + "'");
        assert(tag in actions, "No action for '" + tag + "' in operation '" + name + "'");
        const argsObj = Object.create(null);
        for (const [i, val] of Object.entries(args)){
            argsObj[sig.formals[i]] = val;
        }
        const oldArgs = this.args;
        this.args = argsObj;
        const ans = actions[tag].apply(this, family._getChildren[tag](this._adaptee, family._wrap));
        this.args = oldArgs;
        return ans;
    };
    return this;
};
var VisitorFamily_1 = VisitorFamily;
const defaultOperation = {
    _terminal () {
        return this.sourceString;
    },
    _nonterminal (...children) {
        const { ctorName  } = this._node;
        const { mapping  } = this.args;
        if (!Object.prototype.hasOwnProperty.call(mapping, ctorName)) {
            if (this.isLexical()) {
                return this.sourceString;
            }
            const realChildren = children.filter((child)=>!child.isTerminal());
            if (realChildren.length === 1) {
                return realChildren[0].toAST(mapping);
            }
        }
        if (typeof mapping[ctorName] === 'number') {
            return children[mapping[ctorName]].toAST(mapping);
        }
        const propMap = mapping[ctorName] || children;
        const node = {
            type: ctorName
        };
        for(const prop in propMap){
            const mappedProp = mapping[ctorName] && mapping[ctorName][prop];
            if (typeof mappedProp === 'number') {
                node[prop] = children[mappedProp].toAST(mapping);
            } else if (typeof mappedProp === 'string' || typeof mappedProp === 'boolean' || mappedProp === null) {
                node[prop] = mappedProp;
            } else if (typeof mappedProp === 'object' && mappedProp instanceof Number) {
                node[prop] = Number(mappedProp);
            } else if (typeof mappedProp === 'function') {
                node[prop] = mappedProp.call(this, children);
            } else if (mappedProp === undefined) {
                if (children[prop] && !children[prop].isTerminal()) {
                    node[prop] = children[prop].toAST(mapping);
                } else {
                    delete node[prop];
                }
            }
        }
        return node;
    },
    _iter (...children) {
        if (this._node.isOptional()) {
            if (this.numChildren === 0) {
                return null;
            } else {
                return children[0].toAST(this.args.mapping);
            }
        }
        return children.map(function(child) {
            return child.toAST(this.args.mapping);
        }, this);
    },
    NonemptyListOf (first, sep, rest) {
        return [
            first.toAST(this.args.mapping)
        ].concat(rest.toAST(this.args.mapping));
    },
    EmptyListOf () {
        return [];
    }
};
function toAST(res, mapping) {
    if (typeof res.failed !== 'function' || res.failed()) {
        throw new Error('toAST() expects a succesful MatchResult as first parameter');
    }
    mapping = Object.assign({}, mapping);
    const operation = Object.assign({}, defaultOperation);
    for(const termName in mapping){
        if (typeof mapping[termName] === 'function') {
            operation[termName] = mapping[termName];
            delete mapping[termName];
        }
    }
    const g = res._cst.grammar;
    const s = g.createSemantics().addOperation('toAST(mapping)', operation);
    return s(res).toAST(mapping);
}
function semanticsForToAST(g) {
    if (typeof g.createSemantics !== 'function') {
        throw new Error('semanticsToAST() expects a Grammar as parameter');
    }
    return g.createSemantics().addOperation('toAST(mapping)', defaultOperation);
}
var semanticsToAST = {
    helper: toAST,
    semantics: semanticsForToAST
};
({
    VisitorFamily: VisitorFamily_1,
    semanticsForToAST: semanticsToAST.semantics,
    toAST: semanticsToAST.helper
});
const slGrammarDefinition = String.raw`
Sl {

	TopLevel = LibraryExpression+ | Program
	LibraryExpression = TypeDefinition | TraitDefinition | MethodDefinitions | LibraryItem | TypeExtension | TraitExtension
	TypeDefinition = typeName "!"? TraitList "{" SlotDefinitions? (methodName Block)* "}"
	TypeExtension = "+" typeName "{" (methodName Block)* "}"
	MethodDefinitions = "+" "[" NonemptyListOf<typeOrTraitName, ","> "]" "{" (methodName Block)* "}"
	SlotDefinitions = "|" (TypedSlot | UntypedSlot)+ "|"
	TypedSlot = slotName ":" "<" typeName ">"
	UntypedSlot = slotName
	TraitList = ":" "[" ListOf<unqualifiedTraitName, ","> "]"
	TraitExtension = "+" qualifiedTraitName "{" (methodName Block)* "}"
	TraitDefinition = qualifiedTraitName "{" (methodName Block)* "}"
	LibraryItem = LibraryItemLiteral | LibraryItemExpression
	LibraryItemLiteral = "LibraryItem" NonEmptyRecordSyntax
	LibraryItemExpression = "LibraryItem" ApplySyntax
	Program = Temporaries? ListOf<Expression, ";">
	Temporaries = VarTemporaries | LetTemporary+
	Initializer =
		BlockLiteralInitializer |
		ExpressionInitializer |
		RecordInitializer |
		ListInitializer
	BlockLiteralInitializer = varName "=" Block ~("." | operator)
	ExpressionInitializer = varNameOrUnused "=" Expression
	RecordInitializer = "(" NonemptyListOf<RecordInitializerItem, ","> ")" "=" Expression
	ListInitializer = "[" NonemptyListOf<varNameOrUnused, ","> "]" "=" Expression
	LetTemporary = "let" Initializer ";"
	VarTemporaries = "var" NonemptyListOf<varName, ","> ";"

	Expression = Assignment | BinaryExpression | Primary
	Assignment = ScalarAssignment | ListAssignment | RecordAssignment
	ScalarAssignment = varName ":=" Expression
	ListAssignment = "[" NonemptyListOf<varName, ","> "]" ":=" Expression
	RecordAssignment = "(" NonemptyListOf<RecordInitializerItem, ","> ")" ":=" Expression
	BinaryExpression = BinaryOperatorExpression | BinaryAdverbExpression
	BinaryOperatorExpression = Expression (operator Primary)+
	BinaryAdverbExpression = Expression (operatorWithAdverb Primary)+

	Primary
		= AtPutSyntax
		| PropertyWriteSyntax
		| AtAllSyntax
		| AtSyntax
		| PropertyReadSyntax
		| ValueApply
		| DotExpressionWithTrailingRecordSyntax
		| DotExpressionWithTrailingClosuresSyntax
		| DotExpressionWithAssignmentSyntax
		| DotExpression
		| Block
		| ApplyWithTrailingRecordSyntax
		| ApplyWithTrailingClosuresSyntax
		| ApplySyntax
		| EmptyListSyntax
		| reservedIdentifier
		| literal
		| identifier
        | systemVariableIdentifier // This is only required in two places, and should be localised (it cannot be written IN Spl though...)
		| operator
		| VectorSyntax
		| MatrixSyntax
		| VolumeSyntax
		| ListSyntax
		| ParenthesisedExpression
		| EmptyRecordSyntax
		| NonEmptyRecordSyntax
		| EmptyMapSyntax
		| NonEmptyMapSyntax
		| DictionarySyntax
		| EmptySetSyntax
		| SetSyntax
		| TupleSyntax
		| ListRangeSyntax
		| ListRangeThenSyntax
		| RangeSyntax
		| RangeThenSyntax

	AtPutSyntax = Primary "[" NonemptyListOf<Expression, ","> "]" ":=" Expression
	PropertyWriteSyntax = Primary "::" recordKey ":=" Expression
	AtSyntax = Primary "[" NonemptyListOf<Expression, ","> "]"
	AtAllSyntax = Primary "[" NonemptyListOf<(spanLiteral | ListSyntax), ","> "]"
	PropertyReadSyntax = Primary "::" recordKey
	ValueApply = Primary "." ParameterList
	ParameterList = "(" ListOf<Expression, ","> ")"
	NonEmptyParameterList = "(" NonemptyListOf<Expression, ","> ")"

	DotExpressionWithTrailingClosuresSyntax = Primary "." selectorName NonEmptyParameterList? Block+
	DotExpressionWithTrailingRecordSyntax = Primary "." selectorName NonEmptyRecordSyntax+
	DotExpressionWithAssignmentSyntax = Primary "." selectorName ":=" Expression
	DotExpression = Primary ("." (selectorName | boundOperator) ~("{" | ":=") NonEmptyParameterList? ~("{" | "("))+

	Block = "{" Arguments? Temporaries? Primitive? Statements? "}"
	Arguments = argumentName+ "|"
	Primitive = "<primitive:" primitiveCharacter* ">"
	Statements = NonFinalExpression | FinalExpression
	NonFinalExpression = Expression ";" Statements
	FinalExpression = Expression

	ApplyWithTrailingClosuresSyntax = selectorName NonEmptyParameterList? Block+
	ApplyWithTrailingRecordSyntax = selectorName NonEmptyRecordSyntax+
	ApplySyntax = (selectorName | boundOperator) ParameterList
	ParenthesisedExpression = "(" Expression ")"
	NonEmptyRecordSyntax = "(" NonemptyListOf<RecordSyntaxItem, ","> ")"
	EmptyRecordSyntax = "(" ":" ")"
	RecordSyntaxItem = RecordKeyAssociation | StringAssociation
	RecordKeyAssociation = recordKeyToken Expression
	StringAssociation = singleQuotedStringLiteral ":" Expression
	RecordInitializerItem = recordKeyToken varName
	EmptyMapSyntax = "[" ":" "]"
	NonEmptyMapSyntax = "[" NonemptyListOf<MapSyntaxItem, ","> "]"
	MapSyntaxItem = Expression ":" Expression
	DictionarySyntax = "[|" ListOf<BinaryOperatorExpression, ","> "|]"
	EmptySetSyntax = "{|" "|}"
	SetSyntax = "{|" ListOf<Expression, ","> "|}"
	TupleSyntax = "(" NonemptyListOf<Expression, ","> ")"
	ListSyntax = "[" ListOf<Expression, ","> "]"
	ListRangeSyntax = "[" Expression ".." Expression "]"
	ListRangeThenSyntax = "[" Expression "," Expression ".." Expression "]"
	RangeSyntax = "(" Expression ".." Expression ")"
	RangeThenSyntax = "(" Expression "," Expression ".." Expression ")"
	EmptyListSyntax = "[" "]"
	VectorSyntax = "[" VectorSyntaxItem+ "]"
	VectorSyntaxItem = VectorSyntaxUnarySend | literal | reservedIdentifier | varName
	VectorSyntaxUnarySend = (literal | varName) "." (selectorName | boundOperator)
	MatrixSyntax = "[" NonemptyListOf<MatrixSyntaxItems, ";"> "]"
	MatrixSyntaxItems = VectorSyntaxItem*
	VolumeSyntax = "[" NonemptyListOf<VolumeSyntaxItems, ":;"> "]"
	VolumeSyntaxItems = NonemptyListOf<MatrixSyntaxItems, ";">

	argumentName = ":" varNameOrUnused
	unqualifiedIdentifier = letter letterOrDigit*
	arityQualifiedIdentifier = letter letterOrDigit* (":/" digit+)
	identifier = arityQualifiedIdentifier | unqualifiedIdentifier
	methodName = unqualifiedIdentifier | operator
	selectorName = unqualifiedIdentifier
	unusedVariableIdentifier = "_"
	systemVariableIdentifier = "__SPL" digit+
    uppercaseIdentifier = upper letterOrDigit*
	typeName = uppercaseIdentifier
	unqualifiedTraitName = uppercaseIdentifier
	qualifiedTraitName = "@" uppercaseIdentifier
    typeOrTraitName = typeName | qualifiedTraitName
    lowercaseIdentifier = lower letterOrDigit*
	varName = arityQualifiedIdentifier | lowercaseIdentifier | systemVariableIdentifier // arity branch should be lowercase
	varNameOrUnused = (varName | unusedVariableIdentifier)
	slotNameWithType = lowercaseIdentifier ":" "<" uppercaseIdentifier ">"
	slotName = lowercaseIdentifier
	constantName = lowercaseIdentifier
	recordKey = lowercaseIdentifier | uppercaseIdentifier
	recordKeyToken = recordKey ":"
	letterOrDigit = letter | digit
	reservedIdentifier = ("nil" | "true" | "false") ~letterOrDigit
	infixMethod = lowercaseIdentifier ":"
	operator = operatorChar+
	boundOperator = operatorChar+
	operatorWithAdverb = operatorWithBinaryAdverb | operatorWithUnaryAdverb
	operatorWithUnaryAdverb = operator "." selectorName
	operatorWithBinaryAdverb = operator "." selectorName "(" (operator | arityQualifiedIdentifier | numberLiteral) ")"
	operatorChar = "!" | "%" | "&" | "*" | "+" | "/" | "<" | "=" | ">" | "?" | "@" | "~" | "|" | "-" | "^" | "#" | "$" | "\\"
	plusOrMinus = "+" | "-"
    symbolicCharacterLiteral = "𝒂" | "𝒃" | "𝒄" | "𝒅" | "𝒆" | "𝒇" | "𝒈" | "𝒉" | "𝒊" | "𝒋" | "𝒌" | "𝒍" | "𝒎" | "𝒏" | "𝒐" | "𝒑" | "𝒒" | "𝒓" | "𝒔" | "𝒕" | "𝒖" | "𝒗" | "𝒘" | "𝒙" | "𝒚" | "𝒛"

	literal = spanLiteral | numberLiteral | singleQuotedStringLiteral | doubleQuotedStringLiteral | backtickQuotedStringLiteral | symbolicCharacterLiteral
	numberLiteral = decimalLiteral | scientificLiteral | complexLiteral | imaginaryLiteral | residueLiteral | floatLiteral | fractionLiteral | largeIntegerLiteral | radixIntegerLiteral | integerLiteral | infinityLiteral | nanLiteral
	spanLiteral = spanFromByToLiteral | spanFromToLiteral
	spanFromByToLiteral = integerLiteral ":" integerLiteral ":" (integerLiteral | identifier)
	spanFromToLiteral = integerLiteral ":" (integerLiteral | identifier)
	floatLiteral = plusOrMinus? digit+ "." digit+
	decimalLiteral = floatDecimalLiteral | integerDecimalLiteral
	floatDecimalLiteral = plusOrMinus? digit+ "." digit+ "D" // ("d" | "D")
	integerDecimalLiteral = plusOrMinus? digit+ "D" // ("d" | "D")
	scientificLiteral = integerOrFloatLiteral "E" integerLiteral // ("e" | "E")
	complexLiteral = integerOrFloatLiteral "J" integerOrFloatLiteral // ("j" | "J")
	imaginaryLiteral = integerOrFloatLiteral "I" // ("i" | "I")
	residueLiteral = integerLiteral "Z" digit+ // ("z" | "Z")
	fractionLiteral = plusOrMinus? digit+ "/" digit+
	largeIntegerLiteral = plusOrMinus? digit+ "L"
    radixDigit = digit | "A" | "B" | "C" | "D" | "E" | "F"
	radixIntegerLiteral = plusOrMinus? digit+ "r" radixDigit+
    infinityLiteral = plusOrMinus? "Infinity"
	nanLiteral = "NaN"
	integerLiteral = plusOrMinus? digit+
    integerOrFloatLiteral = floatLiteral | integerLiteral
	singleQuotedStringLiteral = "\'" (~"\'" ("\\\'" | "\\\\" | sourceCharacter))* "\'"
	doubleQuotedStringLiteral = "\"" (~"\"" ("\\\"" | "\\\\" | sourceCharacter))* "\""
	backtickQuotedStringLiteral = backtickCharacter (~backtickCharacter sourceCharacter)* backtickCharacter
	backtickCharacter = "${String.fromCodePoint(96)}"
	sourceCharacter = any

	primitiveCharacter = ~(">\n" | "> }") sourceCharacter

	comment = multiLineCComment
	multiLineCComment = "/*" (~"*/" sourceCharacter)* "*/"
	lineTerminator = "\n" | "\r"
	space += comment

}
`;
const slGrammar = ohm.grammar(slGrammarDefinition);
const slSemantics = slGrammar.createSemantics();
function slParse(str) {
    return slSemantics(slGrammar.match(str));
}
function stringCapitalizeFirstLetter(aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1);
}
const splOperatorCharacters = '!#$%&*+-/<=>?@\\^|~';
const splSyntaxCharacters = '"\'(),:;.[]_`{}';
const splPunctuationCharacters = '!#$%&*+-/<=>?@\\^|~"\'(),:;.[]_`{}';
function isSplOperatorCharacter(character) {
    if (character.length === 1) {
        return splOperatorCharacters.includes(character[0]);
    }
    throw new Error('isSplOperatorCharacter: not character');
}
function isSplSyntaxCharacter(character) {
    if (character.length === 1) {
        return splSyntaxCharacters.includes(character[0]);
    }
    throw new Error('isSplSyntaxCharacter: not character');
}
function isSplPunctuationCharacter(character) {
    if (character.length === 1) {
        return splPunctuationCharacters.includes(character[0]);
    }
    throw new Error('isSplPunctuationCharacter: not character');
}
function isSplOperatorToken(name) {
    for (const character of name){
        if (!splOperatorCharacters.includes(character)) {
            return false;
        }
    }
    return true;
}
function isSplSyntaxToken(name) {
    for (const character of name){
        if (!splSyntaxCharacters.includes(character)) {
            return false;
        }
    }
    return true;
}
function isSplPunctuationToken(name) {
    for (const character of name){
        if (!splPunctuationCharacters.includes(character)) {
            return false;
        }
    }
    return true;
}
const splPunctuationCharacterNameTable = {
    '!': 'exclamationMark',
    '#': 'numberSign',
    '$': 'dollarSign',
    '%': 'percentSign',
    '&': 'ampersand',
    '*': 'asterisk',
    '+': 'plusSign',
    '-': 'hyphenMinus',
    '<': 'lessThanSign',
    '=': 'equalsSign',
    '>': 'greaterThanSign',
    '/': 'solidus',
    '?': 'questionMark',
    '@': 'commercialAt',
    '\\': 'reverseSolidus',
    '^': 'circumflexAccent',
    '|': 'verticalLine',
    '~': 'tilde',
    '"': 'quotationMark',
    "'": 'apostrophe',
    '(': 'leftParenthesis',
    ')': 'rightParenthesis',
    ',': 'comma',
    ':': 'colon',
    ';': 'semicolon',
    '.': 'fullStop',
    '[': 'leftSquareBracket',
    ']': 'rightSquareBracket',
    '_': 'lowLine',
    '`': 'graveAccent',
    '{': 'leftCurlyBracket',
    '}': 'rightCurlyBracket'
};
function splPunctuationTokenName(operator) {
    const words = [
        ...operator
    ].map((letter)=>splPunctuationCharacterNameTable[letter]);
    return words.slice(0, 1).concat(words.slice(1).map(stringCapitalizeFirstLetter)).join('');
}
function resolveMethodName(name) {
    return isSplOperatorToken(name) ? splPunctuationTokenName(name) : name;
}
function resolveTokenName(name) {
    return isSplPunctuationToken(name) ? splPunctuationTokenName(name) : name;
}
export { splOperatorCharacters as splOperatorCharacters };
export { splSyntaxCharacters as splSyntaxCharacters };
export { splPunctuationCharacters as splPunctuationCharacters };
export { isSplOperatorCharacter as isSplOperatorCharacter };
export { isSplSyntaxCharacter as isSplSyntaxCharacter };
export { isSplPunctuationCharacter as isSplPunctuationCharacter };
export { isSplOperatorToken as isSplOperatorToken };
export { isSplSyntaxToken as isSplSyntaxToken };
export { isSplPunctuationToken as isSplPunctuationToken };
export { splPunctuationCharacterNameTable as splPunctuationCharacterNameTable };
export { splPunctuationTokenName as splPunctuationTokenName };
export { resolveMethodName as resolveMethodName };
export { resolveTokenName as resolveTokenName };
const slOptions = {
    insertArityCheck: true
};
export { slOptions as slOptions };
const context = {
    packageName: 'UnknownPackage'
};
function genName(name, arity) {
    return `${resolveMethodName(name)}_${arity}`;
}
function clearLeadingZeroes(s) {
    return s.replace(/^0+(?!\.|$)/, '');
}
function genArityCheck(k, a) {
    return [
        '/* ArityCheck */',
        `if(arguments.length !== ${k}) {`,
        `	const errorMessage = 'Arity: expected ${k}, ${a}';`,
        '	throw new Error(errorMessage);',
        '}'
    ].join('\n');
}
function rewriteMethodList(n, b) {
    const nArray = n.children;
    const bArray = b.children;
    const k = nArray.length;
    const answer = [];
    for(let i = 0; i < k; i++){
        answer.push('\t' + nArray[i].sourceString + ' ' + bArray[i].asSl);
    }
    return answer;
}
function rewriteTypeOrTraitExtension(t, n, b) {
    const begin = `+[${t.sourceString}] {`;
    const middle = rewriteMethodList(n, b);
    const end = '}\n';
    return [
        begin,
        middle,
        end
    ].flat().join('\n');
}
function validateSign(x) {
    if (x === '+') {
        return '';
    }
    if (x === '-') {
        return x;
    }
    if (x === '') {
        return x;
    }
    throw new Error('validateSign: invalid sign: ' + x);
}
function genRecordAssignmentSlots(withLet, rhsDictionaryName, keyVarNamesArray) {
    const slots = keyVarNamesArray.map(function(keyVarNames) {
        const maybeLet = withLet ? 'let ' : '';
        const bindingOperator = withLet ? '=' : ':=';
        const keyName = keyVarNames[0];
        const varName = keyVarNames[1];
        return `${maybeLet}${varName} ${bindingOperator} at(${rhsDictionaryName}, '${keyName}')`;
    }).join('; ');
    return slots;
}
function quoteNewLines(input) {
    return input.replaceAll('\n', '\\n');
}
function makeTypeDefinition(isHostType, typeName, traits, instanceVariables, methodNames, methodBlocks) {
    const instanceVariablesList = instanceVariables.split(' ');
    const traitList = traits.split(', ').filter((each)=>each.length > 0);
    const addType = `
sl.addType(
	${isHostType},
	'${typeName}',
	'${context.packageName}',
	[${traits}],
	[${instanceVariablesList}]
);`;
    const copyTraits = traitList.map((traitName)=>`
sl.copyTraitMethodsToType(
	${traitName},
	'${typeName}'
);`).join('\n');
    const addMethods = makeMethodList('addMethodToExistingType', [
        typeName
    ], methodNames, methodBlocks);
    return `${addType}\n\n${copyTraits}\n\n${addMethods}\n`;
}
const asJs = {
    ApplySyntax (rcv, arg) {
        return `${genName(rcv.asJs, arg.arityOf)}(${arg.asJs})`;
    },
    Arguments (arg, _vb) {
        return commaListJs(arg.children);
    },
    Block (_l, arg, tmp, prm, stm, _r) {
        const argJs = arg.asJs;
        const tmpJs = tmp.asJs;
        const prmJs = prm.asJs;
        const stmJs = stm.asJs;
        let arityCheck = '';
        if (slOptions.insertArityCheck) {
            arityCheck = genArityCheck(arg.arityOf, arg.asJs);
        }
        return [
            `sl.annotateFunction(function(${argJs}) {\n`,
            arityCheck,
            tmpJs.length > 0 ? '/* Temporaries */\n' + tmpJs + '\n' : '',
            prmJs.length > 0 ? '/* Primitive */\n' + prmJs + '\n' : '',
            stmJs.length > 0 ? '/* Statements */\n' + stmJs + '\n' : '',
            `}, ${JSON.stringify(arg.parametersOf)})`
        ].join('');
    },
    BlockLiteralInitializer (name, _eq, blk) {
        return `${genName(name.asJs, blk.parametersOf.length)} = ${blk.asJs}`;
    },
    EmptyListSyntax (_l, _r) {
        return '[]';
    },
    ExpressionInitializer (name, _e, exp) {
        return `${name.asJs} = ${exp.asJs}`;
    },
    FinalExpression (e) {
        return `return ${e.asJs};`;
    },
    LetTemporary (_let, tmp, _sc) {
        return `let ${tmp.asJs};`;
    },
    LibraryItemExpression (_libraryItem, aRecord) {
        return `_addLibraryItem_2(_system, _asLibraryItem_1(${aRecord.asJs}));\n`;
    },
    MethodDefinitions (_p, _l, n, _r, _lc, mn, mb, _rc) {
        return makeMethodList('extendTypeOrTraitWithMethod', n.asIteration().children.map((c)=>c.sourceString), mn.children.map((c)=>c.sourceString), mb.children);
    },
    NonEmptyParameterList (_l, sq, _r) {
        return commaListJs(sq.asIteration().children);
    },
    NonFinalExpression (e, _semicolon, stm) {
        return `${e.asJs}; ${stm.asJs};`;
    },
    ListSyntax (_leftBracket, items, _rightBracket) {
        return `[${commaListJs(items.asIteration().children)}]`;
    },
    ParameterList (_leftParen, sq, _rightParen) {
        return commaListJs(sq.asIteration().children);
    },
    ParenthesisedExpression (_leftParen, e, _rightParen) {
        return `(${e.asJs})`;
    },
    Primitive (_l, s, _r) {
        return s.sourceString;
    },
    Program (tmp, stm) {
        return tmp.asJs + stm.asJs;
    },
    RecordKeyAssociation (lhs, rhs) {
        return `['${lhs.asJs}', ${rhs.asJs}]`;
    },
    ScalarAssignment (lhs, _ce, rhs) {
        return `${lhs.asJs} = ${rhs.asJs}`;
    },
    SlotDefinitions (_l, slots, _r) {
        return slots.children.map(function(e) {
            let [nm, ty] = e.sourceString.split(':');
            return `'${nm}'`;
        }).join(' ');
    },
    StringAssociation (lhs, _c, rhs) {
        return `[${lhs.sourceString}, ${rhs.asJs}]`;
    },
    TraitDefinition (nm, _l, mn, mb, _r) {
        const unqualifiedTraitName = nm.sourceString.substring(1);
        const trait = `sl.addTrait('${unqualifiedTraitName}', '${context.packageName}');\n`;
        const mth = makeMethodList('addMethodToExistingTrait', [
            unqualifiedTraitName
        ], mn.children.map((c)=>c.sourceString), mb.children);
        return `${trait}\n${mth}\n`;
    },
    TraitList (_c, _l, names, _r) {
        return names.asIteration().children.map((c)=>`'${c.sourceString}'`).join(', ');
    },
    TypeDefinition (n, h, t, _l, v, mn, mb, _r) {
        return makeTypeDefinition(h.sourceString === '!', n.sourceString, t.asJs, v.asJs, mn.children.map((c)=>c.sourceString), mb.children);
    },
    ValueApply (p, _d, a) {
        return `${p.asJs}(${a.asJs})`;
    },
    VarTemporaries (_var, tmp, _sc) {
        return `let ${commaListJs(tmp.asIteration().children)};`;
    },
    VectorSyntax (_l, items, _r) {
        let c = items.children;
        if (c.length === 1) {
            return `[${c[0].asJs}]`;
        }
        throw new Error(`VectorSyntax: ${c.length}`);
    },
    argumentName (_c, name) {
        return name.asJs;
    },
    arityQualifiedIdentifier (c1, cN, _s, a) {
        return `_${c1.sourceString}${cN.sourceString}_${a.sourceString}`;
    },
    boundOperator (op) {
        const name = `_${resolveMethodName(op.sourceString)}`;
        return name;
    },
    floatLiteral (s, i, _, f) {
        return `${s.sourceString}${i.sourceString}.${f.sourceString}`;
    },
    infinityLiteral (s, i) {
        return s.sourceString + i.sourceString;
    },
    integerLiteral (s, i) {
        const x = parseInt(i.sourceString);
        if (Number.isSafeInteger(x)) {
            return `${s.sourceString + x}`;
        } else {
            throw new Error('integerLiteral: not small integer: ' + x);
        }
    },
    largeIntegerLiteral (s, i, _l) {
        return `${s.sourceString}${i.sourceString}n`;
    },
    lowercaseIdentifier (c1, cN) {
        return `_${c1.sourceString}${cN.sourceString}`;
    },
    operator (op) {
        return `_${genName(op.sourceString, 2)}`;
    },
    recordKeyToken (n, _c) {
        return n.sourceString;
    },
    reservedIdentifier (id) {
        switch(id.sourceString){
            case 'nil':
                return 'null';
            case 'true':
                return 'true';
            case 'false':
                return 'false';
            default:
                throw new Error('rewrite: reservedIdentifier?');
        }
    },
    scientificLiteral (base, _e, exponent) {
        return `${base.sourceString}E${exponent.sourceString}`;
    },
    singleQuotedStringLiteral (_l, s, _r) {
        return `'${quoteNewLines(s.sourceString)}'`;
    },
    systemVariableIdentifier (p, k) {
        return p.sourceString + k.sourceString;
    },
    unqualifiedIdentifier (c1, cN) {
        return `_${c1.sourceString}${cN.sourceString}`;
    },
    unusedVariableIdentifier (_underscore) {
        return genSym('__genSym');
    },
    uppercaseIdentifier (c1, cN) {
        return `_${c1.sourceString}${cN.sourceString}`;
    },
    EmptyListOf () {
        return '';
    },
    NonemptyListOf (first, _sep, rest) {
        return `${first.asJs}; ${rest.children.map((c)=>c.asJs).join('; ')}`;
    },
    _iter (...children) {
        return children.map((c)=>c.asJs).join('');
    },
    _terminal () {
        return this.sourceString;
    }
};
slSemantics.addAttribute('asJs', asJs);
const asSl = {
    ApplySyntax (rcv, arg) {
        return `${rcv.sourceString}(${arg.asSl})`;
    },
    ApplyWithTrailingClosuresSyntax (name, args, trailing) {
        return `${name.sourceString}(${commaListSl(args.children.concat(trailing.children))})`;
    },
    ApplyWithTrailingRecordSyntax (name, trailing) {
        return `${name.sourceString}(${commaListSl(trailing.children)})`;
    },
    Arguments (a, _p) {
        return a.children.map((x)=>x.asSl).join(' ');
    },
    AtAllSyntax (c, _l, k, _r) {
        const elem = k.asIteration().children;
        return `atAll(${c.asSl}, ${commaListSl(elem)})`;
    },
    AtPutSyntax (c, _l, k, _r, _e, v) {
        const elem = k.asIteration().children;
        return `atPut(${c.asSl}, ${commaListSl(elem)}, ${v.asSl})`;
    },
    AtSyntax (c, _l, k, _r) {
        const elem = k.asIteration().children;
        return `at(${c.asSl}, ${commaListSl(elem)})`;
    },
    BinaryOperatorExpression (lhs, ops, rhs) {
        let left = lhs.asSl;
        const opsArray = ops.children.map((c)=>c.asSl);
        const rhsArray = rhs.children.map((c)=>c.asSl);
        while(opsArray.length > 0){
            const op = opsArray.shift();
            const right = rhsArray.shift();
            left = `${op}(${left}, ${right})`;
        }
        return left;
    },
    BinaryAdverbExpression (lhs, ops, rhs) {
        let left = lhs.asSl;
        const opsArray = ops.children.map((c)=>c.asSl);
        const rhsArray = rhs.children.map((c)=>c.asSl);
        while(opsArray.length > 0){
            const op = opsArray.shift();
            const right = rhsArray.shift();
            left = `(${op} . (${left}, ${right}))`;
        }
        return left;
    },
    Block (_l, arg, tmp, prm, stm, _r) {
        const argSl = arg.asSl;
        const vBar = argSl === '' ? '' : ' | ';
        return `{ ${argSl}${vBar}${tmp.asSl}${prm.asSl}${stm.asSl} }`;
    },
    BlockLiteralInitializer (name, _e, blk) {
        return `${name.sourceString} = ${blk.asSl}`;
    },
    DictionarySyntax (_l, items, _r) {
        return `Dictionary([${commaListSl(items.asIteration().children)}])`;
    },
    DotExpression (lhs, _dot, names, args) {
        let rcv = lhs.asSl;
        const namesArray = names.children.map((c)=>c.asSl);
        const argsArray = args.children.map((c)=>c.asSl);
        while(namesArray.length > 0){
            const name = namesArray.shift();
            const arg = argsArray.shift();
            if (arg.length === 0) {
                rcv = `${name}(${rcv})`;
            } else {
                rcv = `${name}(${[
                    rcv
                ].concat([
                    arg
                ])})`;
            }
        }
        return rcv;
    },
    DotExpressionWithAssignmentSyntax (lhs, _d, name, _e, rhs) {
        return `${name.asSl}(${lhs.asSl}, ${rhs.asSl})`;
    },
    DotExpressionWithTrailingClosuresSyntax (lhs, _dot, name, args, trailing) {
        return `${name.sourceString}(${commaListSl([
            lhs
        ].concat(args.children, trailing.children))})`;
    },
    DotExpressionWithTrailingRecordSyntax (lhs, _dot, name, trailing) {
        return `${name.sourceString}(${commaListSl([
            lhs
        ].concat(trailing.children))})`;
    },
    EmptyListSyntax (_l, _r) {
        return '[]';
    },
    EmptyMapSyntax (_l, _, _r) {
        return 'Map()';
    },
    EmptyRecordSyntax (_l, _c, _r) {
        return 'Record()';
    },
    EmptySetSyntax (_l, _r) {
        return 'Set()';
    },
    ExpressionInitializer (name, _e, exp) {
        return `${name.sourceString} = ${exp.asSl}`;
    },
    FinalExpression (e) {
        return e.asSl;
    },
    LetTemporary (_l, tmp, _s) {
        return `let ${tmp.asSl}; `;
    },
    LibraryItemLiteral (_l, aRecord) {
        return `LibraryItem ${aRecord.asSl}`;
    },
    ListAssignment (_l, lhs, _r, _e, rhs) {
        const namesArray = lhs.asIteration().children.map((c)=>c.asSl);
        const rhsListName = genSym('__SPL');
        const slots = namesArray.map((name, index)=>`${name} := at(${rhsListName}, ${index + 1})`).join('; ');
        return `({ let ${rhsListName} = ${rhs.asSl}; ${slots} } . ())`;
    },
    ListInitializer (_l, lhs, _r, _e, rhs) {
        const namesArray = lhs.asIteration().children.map((c)=>c.asSl);
        const rhsName = genSym('__SPL');
        const slots = namesArray.map((name, index)=>`let ${name} = at(${rhsName}, ${index + 1})`).join('; ');
        return `${rhsName} = assertIsOfSize(${rhs.asSl}, ${namesArray.length}); ${slots}`;
    },
    ListRangeSyntax (_left, start, _dots, end, _right) {
        return `asList(upOrDownTo(${start.asSl}, ${end.asSl}))`;
    },
    ListRangeThenSyntax (_left, start, _comma, then, _dots, end, _right) {
        return `asList(thenTo(${start.asSl}, ${then.asSl}, ${end.asSl}))`;
    },
    ListSyntax (_l, items, _r) {
        return `[${commaListSl(items.asIteration().children)}]`;
    },
    MapSyntaxItem (lhs, _c, rhs) {
        return `[${lhs.asSl}, ${rhs.asSl}]`;
    },
    MatrixSyntax (_l, items, _r) {
        return `[${commaListSl(items.asIteration().children)}]`;
    },
    MatrixSyntaxItems (items) {
        return `[${commaListSl(items.children)}]`;
    },
    MethodDefinitions (_p, _l, n, _r, _lc, mn, mb, _rc) {
        const begin = `+[${n.sourceString}] {`;
        const middle = rewriteMethodList(mn, mb);
        const end = '}\n';
        return [
            begin,
            middle,
            end
        ].flat().join('\n');
    },
    NonEmptyMapSyntax (_l, d, _r) {
        return `Map([${commaListSl(d.asIteration().children)}])`;
    },
    NonEmptyParameterList (_leftParen, sq, _rightParen) {
        return commaListSl(sq.asIteration().children);
    },
    NonEmptyRecordSyntax (_l, d, _r) {
        return `Record([${commaListSl(d.asIteration().children)}])`;
    },
    NonFinalExpression (e, _s, stm) {
        return `${e.asSl}; ${stm.asSl}`;
    },
    ParameterList (_l, sq, _r) {
        return commaListSl(sq.asIteration().children);
    },
    ParenthesisedExpression (_left, e, _right) {
        return '(' + e.asSl + ')';
    },
    Primitive (_l, s, _r) {
        return '<primitive: ' + s.sourceString + '>\n';
    },
    Program (tmp, stm) {
        return tmp.asSl + stm.asSl;
    },
    PropertyReadSyntax (c, _colons, k) {
        return `propertyRead(${c.asSl}, '${k.sourceString}')`;
    },
    PropertyWriteSyntax (c, _colons, k, _equals, v) {
        return `propertyWrite(${c.asSl}, '${k.sourceString}', ${v.asSl})`;
    },
    RangeSyntax (_left, start, _dots, end, _right) {
        return `upOrDownTo(${start.asSl}, ${end.asSl})`;
    },
    RangeThenSyntax (_left, start, _comma, then, _dots, end, _right) {
        return `thenTo(${start.asSl}, ${then.asSl}, ${end.asSl})`;
    },
    RecordAssignment (_l, lhs, _r, _e, rhs) {
        const rhsDictionaryName = genSym('__SPL');
        const keyVarNamesArray = lhs.asIteration().children.map((c)=>c.parametersOf);
        const slots = genRecordAssignmentSlots(false, rhsDictionaryName, keyVarNamesArray);
        return `({ let ${rhsDictionaryName} = assertIsOfSize(${rhs.asSl}, ${keyVarNamesArray.length}); ${slots} } . ())`;
    },
    RecordInitializer (_l, lhs, _r, _e, rhs) {
        const rhsDictionaryName = genSym('__SPL');
        const keyVarNamesArray = lhs.asIteration().children.map((c)=>c.parametersOf);
        const slots = genRecordAssignmentSlots(true, rhsDictionaryName, keyVarNamesArray);
        return `${rhsDictionaryName} = assertIsOfSize(${rhs.asSl}, ${keyVarNamesArray.length}); ${slots}`;
    },
    RecordKeyAssociation (lhs, rhs) {
        return `['${lhs.asSl}', ${rhs.asSl}]`;
    },
    ScalarAssignment (lhs, _e, rhs) {
        return `${lhs.asSl} := ${rhs.asSl}`;
    },
    SetSyntax (_l, items, _r) {
        return `Set([${commaListSl(items.asIteration().children)}])`;
    },
    StringAssociation (lhs, _c, rhs) {
        return `[${lhs.sourceString}, ${rhs.asSl}]`;
    },
    TraitDefinition (n, _l, mn, mb, _r) {
        const begin = `${n.sourceString} {`;
        const middle = rewriteMethodList(mn, mb);
        const end = '}\n';
        return [
            begin,
            middle,
            end
        ].flat().join('\n');
    },
    TraitExtension (_p, t, _l, n, b, _r) {
        return rewriteTypeOrTraitExtension(t, n, b);
    },
    TupleSyntax (_l, items, _r) {
        return `Tuple([${commaListSl(items.asIteration().children)}])`;
    },
    TypeDefinition (n, h, t, _l, v, mn, mb, _r) {
        const begin = `${n.sourceString}${h.sourceString} ${t.sourceString} { ${v.sourceString}`;
        const middle = rewriteMethodList(mn, mb);
        const end = '}\n';
        return [
            begin,
            middle,
            end
        ].flat().join('\n');
    },
    TypeExtension (_p, t, _l, n, b, _r) {
        return rewriteTypeOrTraitExtension(t, n, b);
    },
    ValueApply (p, _d, a) {
        return `${p.asSl} . (${a.asSl})`;
    },
    VarTemporaries (_v, t, _s) {
        return `var ${t.sourceString};`;
    },
    VectorSyntax (_l, i, _r) {
        return `[${commaListSl(i.children)}]`;
    },
    VectorSyntaxUnarySend (lhs, _d, rhs) {
        return `${rhs.asSl}(${lhs.asSl})`;
    },
    VolumeSyntax (_l, items, _r) {
        return `[${commaListSl(items.asIteration().children)}]`;
    },
    VolumeSyntaxItems (items) {
        return `[${commaListSl(items.asIteration().children)}]`;
    },
    argumentName (_c, name) {
        return ':' + name.sourceString;
    },
    arityQualifiedIdentifier (c1, cN, _s, a) {
        return c1.sourceString + cN.sourceString + ':/' + a.sourceString;
    },
    backtickQuotedStringLiteral (_l, s, _r) {
        return `Symbol('${s.sourceString}')`;
    },
    complexLiteral (r, _j, i) {
        return `Complex(${r.sourceString}, ${i.sourceString})`;
    },
    doubleQuotedStringLiteral (_l, s, _r) {
        return `DoubleQuotedString('${s.sourceString}')`;
    },
    floatDecimalLiteral (s, i, _, f, _d) {
        return `parseDecimal('${s.sourceString}${i.sourceString}.${f.sourceString}D')`;
    },
    floatLiteral (s, i, _dot, f) {
        return s.sourceString + clearLeadingZeroes(i.sourceString) + '.' + f.sourceString;
    },
    fractionLiteral (s, n, _s, d) {
        return `Fraction(${validateSign(s.sourceString)}${n.sourceString}L, ${d.sourceString}L)`;
    },
    imaginaryLiteral (i, _i) {
        return `Complex(0, ${i.sourceString})`;
    },
    infinityLiteral (s, i) {
        return validateSign(s.sourceString) + i.sourceString;
    },
    integerDecimalLiteral (s, i, _d) {
        return `parseDecimal('${s.sourceString}${i.sourceString}D')`;
    },
    integerLiteral (s, i) {
        return s.sourceString + i.sourceString;
    },
    recordKeyToken (n, _c) {
        return n.sourceString;
    },
    largeIntegerLiteral (s, i, _l) {
        return s.sourceString + i.sourceString + 'L';
    },
    lowercaseIdentifier (c1, cN) {
        return c1.sourceString + cN.sourceString;
    },
    nanLiteral (x) {
        return x.sourceString;
    },
    operator (op) {
        return op.sourceString;
    },
    operatorWithUnaryAdverb (op, _d, adverb) {
        return `${adverb.sourceString}(${op.sourceString})`;
    },
    operatorWithBinaryAdverb (op, _d, adverb, _l, parameter, _r) {
        return `${adverb.sourceString}(${op.sourceString}, ${parameter.asSl})`;
    },
    radixIntegerLiteral (s, b, _r, i) {
        const r = Number.parseInt(s.sourceString + i.sourceString, Number.parseInt(b.sourceString, 10));
        if (Number.isNaN(r)) {
            throw new Error('radixIntegerLiteral: invalid literal');
        }
        return r.toString(10);
    },
    spanFromByToLiteral (start, _colon, step, _anotherColon, end) {
        return `Span(${start.asSl}, ${end.asSl}, ${step.asSl})`;
    },
    spanFromToLiteral (start, _colon, end) {
        return `Span(${start.asSl}, ${end.asSl}, 1)`;
    },
    residueLiteral (i, _z, m) {
        return `Residue(${i.sourceString}, ${m.sourceString})`;
    },
    scientificLiteral (b, _e, e) {
        return b.sourceString + 'E' + e.sourceString;
    },
    singleQuotedStringLiteral (_l, s, _r) {
        return "'" + s.sourceString + "'";
    },
    symbolicCharacterLiteral (c) {
        let i = c.sourceString.codePointAt(0);
        let a = String.fromCodePoint(i - 119841);
        return "Symbol('" + a + "')";
    },
    unqualifiedIdentifier (c1, cN) {
        return c1.sourceString + cN.sourceString;
    },
    uppercaseIdentifier (c1, cN) {
        return c1.sourceString + cN.sourceString;
    },
    EmptyListOf () {
        return '';
    },
    NonemptyListOf (p, _s, q) {
        const rest = q.children;
        if (rest.length === 0) {
            return p.asSl;
        }
        return `${p.asSl}; ${rest.map((c)=>c.asSl).join('; ')}`;
    },
    _iter (...children) {
        return children.map((c)=>c.asSl).join('');
    },
    _terminal () {
        return this.sourceString;
    }
};
slSemantics.addAttribute('asSl', asSl);
const asAst = {
    ApplySyntax (rcv, arg) {
        return [
            'Apply',
            rcv.asAst
        ].concat(arg.asAst.flat(1));
    },
    Arguments (a, _p) {
        return [
            'Arguments'
        ].concat(a.children.map((x)=>x.asAst));
    },
    Primitive (_l, s, _r) {
        return [
            'Primitive',
            s.sourceString
        ];
    },
    Block (_l, arg, tmp, prm, stm, _r) {
        return [
            'Block'
        ].concat([
            arg.asAst,
            tmp.asAst.flat(1),
            prm.asAst,
            stm.asAst.flat(1)
        ].flat(1));
    },
    EmptyListSyntax (_l, _r) {
        return [
            'List'
        ];
    },
    ExpressionInitializer (name, _e, exp) {
        return [
            name.asAst,
            exp.asAst
        ];
    },
    FinalExpression (e) {
        return [
            e.asAst
        ];
    },
    LetTemporary (_l, tmp, _s) {
        return [
            'Let',
            tmp.asAst
        ].flat(1);
    },
    ListSyntax (_l, items, _r) {
        return [
            'List'
        ].concat(items.children.map((x)=>x.asAst).flat(1));
    },
    NonEmptyParameterList (_l, sq, _r) {
        return sq.children.map((x)=>x.asAst);
    },
    NonFinalExpression (e, _s, stm) {
        return [
            e.asAst
        ].concat(stm.asAst);
    },
    ParameterList (_l, sq, _r) {
        return sq.children.map((x)=>x.asAst);
    },
    ParenthesisedExpression (_left, e, _right) {
        return e.asAst;
    },
    Program (tmp, stm) {
        return [
            'Program',
            tmp.asAst.flat(1),
            stm.asAst
        ].flat(1);
    },
    ScalarAssignment (lhs, _e, rhs) {
        return [
            'Assignment',
            [
                lhs.asAst
            ],
            [
                rhs.asAst
            ]
        ].flat(1);
    },
    ValueApply (p, _d, a) {
        return [
            'Apply',
            [
                p.asAst
            ].concat(a.asAst)
        ];
    },
    argumentName (_, x) {
        return [
            'Identifier',
            x.sourceString
        ];
    },
    boundOperator (x) {
        return [
            'Operator',
            x.sourceString
        ];
    },
    floatLiteral (s, i, _, f) {
        const x = s.sourceString + i.sourceString + '.' + f.sourceString;
        return [
            'SmallFloat',
            x
        ];
    },
    infinityLiteral (s, i) {
        return [
            'SmallFloat',
            s.sourceString + i.sourceString
        ];
    },
    integerLiteral (s, i) {
        return [
            'SmallInteger',
            s.sourceString + i.sourceString
        ];
    },
    largeIntegerLiteral (s, i, _l) {
        return [
            'LargeInteger',
            s.sourceString + i.sourceString + 'L'
        ];
    },
    lowercaseIdentifier (c1, cN) {
        return [
            'Identifier',
            c1.sourceString + cN.sourceString
        ];
    },
    nanLiteral (_n) {
        return [
            'SmallFloat',
            'NaN'
        ];
    },
    operator (op) {
        return [
            'Operator',
            op.sourceString
        ];
    },
    reservedIdentifier (x) {
        return [
            'ReservedIdentifier',
            x.sourceString
        ];
    },
    scientificLiteral (b, _e, e) {
        return [
            'SmallFloat',
            b.sourceString + 'E' + e.sourceString
        ];
    },
    singleQuotedStringLiteral (_l, s, _r) {
        return [
            'String',
            s.sourceString
        ];
    },
    unqualifiedIdentifier (c1, cN) {
        return [
            'Identifier',
            c1.sourceString + cN.sourceString
        ];
    },
    uppercaseIdentifier (c1, cN) {
        return [
            'Identifier',
            c1.sourceString + cN.sourceString
        ];
    },
    EmptyListOf () {
        return [];
    },
    NonemptyListOf (p, _s, q) {
        const rest = q.children;
        if (rest.length === 0) {
            return [
                p.asAst
            ];
        }
        return [
            p.asAst
        ].concat(rest.map((c)=>c.asAst));
    },
    _iter (...children) {
        return children.map((c)=>c.asAst);
    },
    _terminal () {
        return this.asAst;
    }
};
slSemantics.addAttribute('asAst', asAst);
const arityOf = {
    Arguments (names, _) {
        return names.children.length;
    },
    NonEmptyParameterList (_l, sq, _r) {
        return sq.asIteration().children.length;
    },
    ParameterList (_l, sq, _r) {
        return sq.asIteration().children.length;
    },
    _iter (...children) {
        return arraySum(children.map((c)=>c.arityOf));
    }
};
slSemantics.addAttribute('arityOf', arityOf);
const parametersOf = {
    Arguments (names, _) {
        return names.children.map((each)=>each.sourceString.substring(1));
    },
    Block (_l, arg, _tmp, _prm, _stm, _r) {
        return arg.parametersOf;
    },
    RecordInitializerItem (lhs, rhs) {
        return [
            lhs.sourceString.substring(0, lhs.sourceString.length - 1),
            rhs.sourceString
        ];
    },
    _iter (...children) {
        if (children.length == 0) {
            return [];
        } else if (children.length == 1) {
            return children[0].parametersOf;
        } else {
            throw new Error('rewrite: parametersOf: _iter?');
        }
    }
};
slSemantics.addAttribute('parametersOf', parametersOf);
function commaList(nodeArray, fn) {
    return nodeArray.map(fn).join(', ');
}
function commaListJs(nodeArray) {
    return commaList(nodeArray, (e)=>e.asJs);
}
function commaListSl(nodeArray) {
    return commaList(nodeArray, (e)=>e.asSl);
}
let genSymCounter = 0;
function genSym(prefix) {
    genSymCounter += 1;
    return `${prefix}${genSymCounter}`;
}
function makeMethod(slProc, typeOrTraitNameArray, methodName, methodBlock) {
    const blkSource = methodBlock.sourceString;
    const blkParameters = methodBlock.parametersOf;
    const blkJs = methodBlock.asJs;
    const blkSrc = JSON.stringify(blkSource);
    const slName = resolveMethodName(methodName);
    return typeOrTraitNameArray.map(function(typeOrTraitName) {
        return `sl.${slProc}(\n\t'${typeOrTraitName}',\n\t'${context.packageName}',\n\t'${slName}',\n\t${JSON.stringify(blkParameters)},\n\t${blkJs},\n\t${blkSrc}\n);\n\n`;
    }).join('\n');
}
function makeMethodList(slProc, typeOrTraitNameArray, methodNames, methodBlocks) {
    let methodList = '';
    while(methodNames.length > 0){
        const methodName = methodNames.shift();
        const methodBlock = methodBlocks.shift();
        const methodSource = makeMethod(slProc, typeOrTraitNameArray, methodName, methodBlock);
        methodList += methodSource;
    }
    return methodList;
}
function slFirstLineComment(slText) {
    if (slText.startsWith('/*')) {
        const index = slText.indexOf('*/');
        return index > 0 ? slText.slice(2, index) : null;
    } else {
        return null;
    }
}
function rewriteSlToCore(slText) {
    const slCoreText = slParse(slText).asSl;
    return slCoreText;
}
function rewriteSlToAst(slText) {
    const slCoreText = slParse(slText).asSl;
    const slAst = slParse(slCoreText).asAst;
    return slAst;
}
function rewriteSlToJs(slText) {
    const slCoreText = rewriteSlToCore(slText);
    const jsText = slParse(slCoreText).asJs;
    const slComment = slFirstLineComment(slText);
    if (slComment) {
        return `/* ${slComment} */\n\n` + jsText;
    } else {
        return jsText;
    }
}
function rewriteSlToJsFor(packageName, slText) {
    let jsText;
    context.packageName = packageName;
    try {
        jsText = rewriteSlToJs(slText);
        context.packageName = '*UnknownPackage*';
        return jsText;
    } catch (err) {
        context.packageName = '*UnknownPackage*';
        throw new Error('rewriteSlToJsFor: Rewrite failed: ', {
            cause: err
        });
    }
}
export { context as context };
export { rewriteSlToCore as rewriteSlToCore };
export { rewriteSlToAst as rewriteSlToAst };
export { rewriteSlToJs as rewriteSlToJs };
export { rewriteSlToJsFor as rewriteSlToJsFor };
function onlyBlanks(text) {
    return text.trim().length == 0;
}
function evaluateForSignalling(packageName, slText) {
    if (onlyBlanks(slText)) {
        throw new Error('Empty string');
    } else {
        const jsText = rewriteSlToJsFor(packageName, slText);
        if (onlyBlanks(jsText)) {
            throw new Error('Empty string after rewrite');
        } else {
            try {
                return eval?.(`"use strict"; ${jsText}`);
            } catch (err) {
                throw new Error('Evaluation failed', {
                    cause: err
                });
            }
        }
    }
}
function evaluateFor(packageName, slText) {
    try {
        return evaluateForSignalling(packageName, slText);
    } catch (err) {
        console.error(`evaluateFor: ${packageName}: "${slText}": ${errorMessage(err)}`);
        return err;
    }
}
async function evaluateUrlFor(packageName, url) {
    await fetch(url, {
        cache: 'no-cache'
    }).then(function(response) {
        return response.text();
    }, function(reason) {
        throw new Error(`evaluateUrlFor: fetch failed: ${packageName}, ${url}, ${reason}`);
    }).then(function(text) {
        return evaluateFor(packageName, text);
    }, function(reason) {
        throw new Error(`evaluateUrlFor: response.text() failed: ${packageName}, ${url}, ${reason}`);
    });
}
export { evaluateForSignalling as evaluateForSignalling };
export { evaluateFor as evaluateFor };
export { evaluateUrlFor as evaluateUrlFor };
class PriorityQueue {
    constructor(){
        this.ids = [];
        this.values = [];
        this.length = 0;
    }
    clear() {
        this.length = 0;
    }
    push(id, value) {
        let pos = this.length++;
        while(pos > 0){
            const parent = pos - 1 >> 1;
            const parentValue = this.values[parent];
            if (value >= parentValue) break;
            this.ids[pos] = this.ids[parent];
            this.values[pos] = parentValue;
            pos = parent;
        }
        this.ids[pos] = id;
        this.values[pos] = value;
    }
    pop() {
        if (this.length === 0) return undefined;
        const top = this.ids[0];
        this.length--;
        if (this.length > 0) {
            const id = this.ids[0] = this.ids[this.length];
            const value = this.values[0] = this.values[this.length];
            const halfLength = this.length >> 1;
            let pos = 0;
            while(pos < halfLength){
                let left = (pos << 1) + 1;
                const right = left + 1;
                let bestIndex = this.ids[left];
                let bestValue = this.values[left];
                const rightValue = this.values[right];
                if (right < this.length && rightValue < bestValue) {
                    left = right;
                    bestIndex = this.ids[right];
                    bestValue = rightValue;
                }
                if (bestValue >= value) break;
                this.ids[pos] = bestIndex;
                this.values[pos] = bestValue;
                pos = left;
            }
            this.ids[pos] = id;
            this.values[pos] = value;
        }
        return top;
    }
    peek() {
        if (this.length === 0) return undefined;
        return this.ids[0];
    }
    peekValue() {
        if (this.length === 0) return undefined;
        return this.values[0];
    }
    shrink() {
        this.ids.length = this.values.length = this.length;
    }
}
function isArray(anObject) {
    return Array.isArray(anObject);
}
function isByteArray(anObject) {
    return anObject instanceof Uint8Array;
}
function isFunction(anObject) {
    return anObject instanceof Function;
}
function isSmallFloat(anObject) {
    return typeof anObject === 'number';
}
function isLargeInteger(anObject) {
    return typeof anObject === 'bigint';
}
function isSet(anObject) {
    return anObject instanceof Set;
}
function isString(anObject) {
    return typeof anObject === 'string';
}
function isSmallFloatInteger(anObject) {
    return isSmallFloat(anObject) && Number.isInteger(anObject);
}
function isByte(anObject) {
    return isSmallFloatInteger(anObject) && anObject >= 0 && anObject < 256;
}
function isBitwise(anObject) {
    return isSmallFloatInteger(anObject) && anObject >= -2147483648 && anObject <= 2147483647;
}
export { isArray as isArray };
export { isByteArray as isByteArray };
export { isFunction as isFunction };
export { isSmallFloat as isSmallFloat };
export { isLargeInteger as isLargeInteger };
export { isSet as isSet };
export { isString as isString };
export { isSmallFloatInteger as isSmallFloatInteger };
export { isByte as isByte };
export { isBitwise as isBitwise };
class MersenneTwister {
    static MT_N = 624;
    static MT_M = 397;
    static MATRIX_A = 0x9908b0df;
    static UPPER_MASK = 0x80000000;
    static LOWER_MASK = 0x7fffffff;
    static INV_1 = 1.0 / 0xffffffff;
    static INV_2 = 1.0 / 0x100000000;
    static INV_3 = 1.0 / 0x100000000;
    static INV_53 = 1.0 / 0x20000000000000;
    mt = new Array(MersenneTwister.MT_N);
    mti = MersenneTwister.MT_N + 1;
    mag01 = [
        0x0,
        MersenneTwister.MATRIX_A
    ];
    constructor(s){
        this.init(s);
    }
    init(s) {
        this.mt[0] = s >>> 0;
        for(this.mti = 1; this.mti < MersenneTwister.MT_N; this.mti++){
            this.mt[this.mti] = this.multiple_as_uint32(1812433253, this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30) + this.mti;
            this.mt[this.mti] >>>= 0;
        }
    }
    genrand_int32() {
        let y = 0;
        if (this.mti >= MersenneTwister.MT_N) {
            let kk;
            for(kk = 0; kk < MersenneTwister.MT_N - MersenneTwister.MT_M; ++kk){
                y = this.mt[kk] & MersenneTwister.UPPER_MASK | this.mt[kk + 1] & MersenneTwister.LOWER_MASK;
                this.mt[kk] = this.mt[kk + MersenneTwister.MT_M] ^ y >>> 1 ^ this.mag01[y & 0x1];
            }
            for(; kk < MersenneTwister.MT_N - 1; ++kk){
                y = this.mt[kk] & MersenneTwister.UPPER_MASK | this.mt[kk + 1] & MersenneTwister.LOWER_MASK;
                this.mt[kk] = this.mt[kk + (MersenneTwister.MT_M - MersenneTwister.MT_N)] ^ y >>> 1 ^ this.mag01[y & 0x1];
            }
            y = this.mt[MersenneTwister.MT_N - 1] & MersenneTwister.UPPER_MASK | this.mt[0] & MersenneTwister.LOWER_MASK;
            this.mt[MersenneTwister.MT_N - 1] = this.mt[MersenneTwister.MT_M - 1] ^ y >>> 1 ^ this.mag01[y & 0x1];
            this.mti = 0;
        }
        y = this.mt[this.mti++];
        y ^= y >>> 11;
        y ^= y << 7 & 0x9d2c5680;
        y ^= y << 15 & 0xefc60000;
        y ^= y >>> 18;
        return y >>> 0;
    }
    genrand_real1() {
        return this.genrand_int32() * MersenneTwister.INV_1;
    }
    genrand_real2() {
        return this.genrand_int32() * MersenneTwister.INV_2;
    }
    genrand_real3() {
        return (this.genrand_int32() + 0.5) * MersenneTwister.INV_3;
    }
    genrand_res53() {
        const a = this.genrand_int32() >>> 5;
        const b = this.genrand_int32() >>> 6;
        return (a * 0x4000000 + b) * MersenneTwister.INV_53;
    }
    multiple_as_uint32(a, b) {
        const a1 = a >>> 16;
        const a2 = a & 0xffff;
        const b1 = b >>> 16;
        const b2 = b & 0xffff;
        return (a1 * b2 + a2 * b1 << 16) + a2 * b2 >>> 0;
    }
    _snapshot() {
        return {
            mt: this.mt,
            mti: this.mti,
            mag01: this.mag01
        };
    }
}
const splitter = 134217729;
const resulterrbound = (3 + 8 * 1.1102230246251565e-16) * 1.1102230246251565e-16;
function sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if (fnow > enow === fnow > -enow) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if (fnow > enow === fnow > -enow) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        while(eindex < elen && findex < flen){
            if (fnow > enow === fnow > -enow) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) {
                h[hindex++] = hh;
            }
        }
    }
    while(eindex < elen){
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    while(findex < flen){
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}
function estimate(elen, e) {
    let Q = e[0];
    for(let i = 1; i < elen; i++)Q += e[i];
    return Q;
}
function vec(n) {
    return new Float64Array(n);
}
const ccwerrboundA = (3 + 16 * 1.1102230246251565e-16) * 1.1102230246251565e-16;
const ccwerrboundB = (2 + 12 * 1.1102230246251565e-16) * 1.1102230246251565e-16;
const ccwerrboundC = (9 + 64 * 1.1102230246251565e-16) * 1.1102230246251565e-16 * 1.1102230246251565e-16;
const B = vec(4);
const C1 = vec(8);
const C2 = vec(12);
const D = vec(16);
const u = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;
    s1 = acx * bcy;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    B[3] = u3;
    let det = estimate(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
        return det;
    }
    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);
    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
        return det;
    }
    errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
    det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;
    s1 = acxtail * bcy;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C1len = sum(4, B, 4, u, C1);
    s1 = acx * bcytail;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const C2len = sum(C1len, C1, 4, u, C2);
    s1 = acxtail * bcytail;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u[3] = u3;
    const Dlen = sum(C2len, C2, 4, u, D);
    return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;
    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;
    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);
class Delaunator {
    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);
        for(let i = 0; i < n; i++){
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }
        return new Delaunator(coords);
    }
    constructor(coords){
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');
        this.coords = coords;
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n);
        this._hullNext = new Uint32Array(n);
        this._hullTri = new Uint32Array(n);
        this._hullHash = new Int32Array(this._hashSize);
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);
        this.trianglesLen = 0;
        this._cx = 0;
        this._cy = 0;
        this._hullStart = 0;
        this.hull = this._triangles;
        this.triangles = this._triangles;
        this.halfedges = this._halfedges;
        this.update();
    }
    update() {
        const { coords , _hullPrev: hullPrev , _hullNext: hullNext , _hullTri: hullTri , _hullHash: hullHash  } = this;
        const n = coords.length >> 1;
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        for(let i = 0; i < n; i++){
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        let i0 = 0, i1 = 0, i2 = 0;
        for(let i = 0, minDist = Infinity; i < n; i++){
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];
        for(let i = 0, minDist = Infinity; i < n; i++){
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];
        let minRadius = Infinity;
        for(let i = 0; i < n; i++){
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];
        if (minRadius === Infinity) {
            for(let i = 0; i < n; i++){
                this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for(let i = 0, d0 = -Infinity; i < n; i++){
                const id = this._ids[i];
                const d = this._dists[id];
                if (d > d0) {
                    hull[j++] = id;
                    d0 = d;
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Int32Array(0);
            return;
        }
        if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }
        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;
        for(let i = 0; i < n; i++){
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        this._hullStart = i0;
        let hullSize = 3;
        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;
        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;
        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;
        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);
        for(let k = 0, xp = 0, yp = 0; k < this._ids.length; k++){
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;
            if (i === i0 || i === i1 || i === i2) continue;
            let start = 0;
            for(let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++){
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }
            start = hullPrev[start];
            let e = start, q;
            while(q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0){
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue;
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t;
            hullSize++;
            let n = hullNext[e];
            while(q = hullNext[n], orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0){
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n;
                hullSize--;
                n = q;
            }
            if (e === start) {
                while(q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0){
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e;
                    hullSize--;
                    e = q;
                }
            }
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }
        this.hull = new Uint32Array(hullSize);
        for(let i = 0, e = this._hullStart; i < hullSize; i++){
            this.hull[i] = e;
            e = hullNext[e];
        }
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }
    _legalize(a) {
        const { _triangles: triangles , _halfedges: halfedges , coords  } = this;
        let i = 0;
        let ar = 0;
        while(true){
            const b = halfedges[a];
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;
            if (b === -1) {
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }
            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;
            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];
            const illegal = inCircle(coords[2 * p0], coords[2 * p0 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1]);
            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;
                const hbl = halfedges[bl];
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    }while (e !== this._hullStart)
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);
                const br = b0 + (b + 1) % 3;
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }
        return ar;
    }
    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;
        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;
        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);
        this.trianglesLen += 3;
        return t;
    }
}
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return {
        x,
        y
    };
}
function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for(let i = left + 1; i <= right; i++){
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while(j >= left && dists[ids[j]] > tempDist)ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = left + right >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
        const temp = ids[i];
        const tempDist = dists[temp];
        while(true){
            do i++;
            while (dists[ids[i]] < tempDist)
            do j--;
            while (dists[ids[j]] > tempDist)
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;
        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}
function earcut(data, holeIndices, dim = 2) {
    const hasHoles = holeIndices && holeIndices.length;
    const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    let outerNode = linkedList(data, 0, outerLen, dim, true);
    const triangles = [];
    if (!outerNode || outerNode.next === outerNode.prev) return triangles;
    let minX, minY, invSize;
    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
    if (data.length > 80 * dim) {
        minX = data[0];
        minY = data[1];
        let maxX = minX;
        let maxY = minY;
        for(let i = dim; i < outerLen; i += dim){
            const x = data[i];
            const y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }
    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
    return triangles;
}
function linkedList(data, start, end, dim, clockwise) {
    let last;
    if (clockwise === signedArea(data, start, end, dim) > 0) {
        for(let i = start; i < end; i += dim)last = insertNode(i / dim | 0, data[i], data[i + 1], last);
    } else {
        for(let i = end - dim; i >= start; i -= dim)last = insertNode(i / dim | 0, data[i], data[i + 1], last);
    }
    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }
    return last;
}
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;
    let p = start, again;
    do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;
        } else {
            p = p.next;
        }
    }while (again || p !== end)
    return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
    let stop = ear;
    while(ear.prev !== ear.next){
        const prev = ear.prev;
        const next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            triangles.push(prev.i, ear.i, next.i);
            removeNode(ear);
            ear = next.next;
            stop = next.next;
            continue;
        }
        ear = next;
        if (ear === stop) {
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }
            break;
        }
    }
}
function isEar(ear) {
    const a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false;
    const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
    let p = c.next;
    while(p !== a){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }
    return true;
}
function isEarHashed(ear, minX, minY, invSize) {
    const a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false;
    const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
    const minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
    let p = ear.prevZ, n = ear.nextZ;
    while(p && p.z >= minZ && n && n.z <= maxZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    while(p && p.z >= minZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }
    while(n && n.z <= maxZ){
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    return true;
}
function cureLocalIntersections(start, triangles) {
    let p = start;
    do {
        const a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
            triangles.push(a.i, p.i, b.i);
            removeNode(p);
            removeNode(p.next);
            p = start = b;
        }
        p = p.next;
    }while (p !== start)
    return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    let a = start;
    do {
        let b = a.next.next;
        while(b !== a.prev){
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                let c = splitPolygon(a, b);
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    }while (a !== start)
}
function eliminateHoles(data, holeIndices, outerNode, dim) {
    const queue = [];
    for(let i = 0, len = holeIndices.length; i < len; i++){
        const start = holeIndices[i] * dim;
        const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        const list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }
    queue.sort(compareXYSlope);
    for(let i = 0; i < queue.length; i++){
        outerNode = eliminateHole(queue[i], outerNode);
    }
    return outerNode;
}
function compareXYSlope(a, b) {
    let result = a.x - b.x;
    if (result === 0) {
        result = a.y - b.y;
        if (result === 0) {
            const aSlope = (a.next.y - a.y) / (a.next.x - a.x);
            const bSlope = (b.next.y - b.y) / (b.next.x - b.x);
            result = aSlope - bSlope;
        }
    }
    return result;
}
function eliminateHole(hole, outerNode) {
    const bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }
    const bridgeReverse = splitPolygon(bridge, hole);
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}
function findHoleBridge(hole, outerNode) {
    let p = outerNode;
    const hx = hole.x;
    const hy = hole.y;
    let qx = -Infinity;
    let m;
    if (equals(hole, p)) return p;
    do {
        if (equals(hole, p.next)) return p.next;
        else if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m;
            }
        }
        p = p.next;
    }while (p !== outerNode)
    if (!m) return null;
    const stop = m;
    const mx = m.x;
    const my = m.y;
    let tanMin = Infinity;
    p = m;
    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
            const tan = Math.abs(hy - p.y) / (hx - p.x);
            if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
                m = p;
                tanMin = tan;
            }
        }
        p = p.next;
    }while (p !== stop)
    return m;
}
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
    let p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    }while (p !== start)
    p.prevZ.nextZ = null;
    p.prevZ = null;
    sortLinked(p);
}
function sortLinked(list) {
    let numMerges;
    let inSize = 1;
    do {
        let p = list;
        let e;
        list = null;
        let tail = null;
        numMerges = 0;
        while(p){
            numMerges++;
            let q = p;
            let pSize = 0;
            for(let i = 0; i < inSize; i++){
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            let qSize = inSize;
            while(pSize > 0 || qSize > 0 && q){
                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }
                if (tail) tail.nextZ = e;
                else list = e;
                e.prevZ = tail;
                tail = e;
            }
            p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
    }while (numMerges > 1)
    return list;
}
function zOrder(x, y, minX, minY, invSize) {
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;
    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;
    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;
    return x | y << 1;
}
function getLeftmost(start) {
    let p = start, leftmost = start;
    do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
        p = p.next;
    }while (p !== start)
    return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
}
function pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, px, py) {
    return !(ax === px && ay === py) && pointInTriangle(ax, ay, bx, by, cx, cy, px, py);
}
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (area(a.prev, a, b.prev) || area(a, b.prev, b)) || equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
    const o1 = sign(area(p1, q1, p2));
    const o2 = sign(area(p1, q1, q2));
    const o3 = sign(area(p2, q2, p1));
    const o4 = sign(area(p2, q2, q1));
    if (o1 !== o2 && o3 !== o4) return true;
    if (o1 === 0 && onSegment(p1, p2, q1)) return true;
    if (o2 === 0 && onSegment(p1, q2, q1)) return true;
    if (o3 === 0 && onSegment(p2, p1, q2)) return true;
    if (o4 === 0 && onSegment(p2, q1, q2)) return true;
    return false;
}
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
    let p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    }while (p !== a)
    return false;
}
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
    let p = a;
    let inside = false;
    const px = (a.x + b.x) / 2;
    const py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    }while (p !== a)
    return inside;
}
function splitPolygon(a, b) {
    const a2 = createNode(a.i, a.x, a.y), b2 = createNode(b.i, b.x, b.y), an = a.next, bp = b.prev;
    a.next = b;
    b.prev = a;
    a2.next = an;
    an.prev = a2;
    b2.next = a2;
    a2.prev = b2;
    bp.next = b2;
    b2.prev = bp;
    return b2;
}
function insertNode(i, x, y, last) {
    const p = createNode(i, x, y);
    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}
function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;
    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}
function createNode(i, x, y) {
    return {
        i,
        x,
        y,
        prev: null,
        next: null,
        z: 0,
        prevZ: null,
        nextZ: null,
        steiner: false
    };
}
function signedArea(data, start, end, dim) {
    let sum = 0;
    for(let i = start, j = end - dim; i < end; i += dim){
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}
export { PriorityQueue as PriorityQueue };
export { MersenneTwister as MersenneTwister };
export { Delaunator as Delaunator };
export { earcut as earcut };
export { slGrammar as slGrammar, slParse as slParse, slSemantics as slSemantics };
function isRecord(anObject) {
    const c = anObject.constructor;
    return c === undefined || c.name === 'Object';
}
function objectNameByConstructor(anObject) {
    const name = anObject.constructor.name;
    return name == 'Range' ? 'DocumentRange' : name == 'bound Storage' ? 'Storage' : name;
}
function splObjectTypeOf(anObject) {
    if (anObject instanceof Array) {
        return 'List';
    }
    if (anObject instanceof Map) {
        return 'Map';
    }
    if (anObject instanceof Set) {
        return 'IdentitySet';
    }
    if (anObject instanceof Promise) {
        return 'Promise';
    }
    if (anObject instanceof PriorityQueue) {
        return 'PriorityQueue';
    }
    if (anObject instanceof Uint8Array) {
        return 'ByteArray';
    }
    if (anObject instanceof Float64Array) {
        return 'Float64Array';
    }
    if (anObject instanceof Error) {
        return 'Error';
    }
    if (anObject instanceof WeakMap) {
        return 'WeakMap';
    }
    const splType = anObject._type;
    if (splType !== undefined) {
        return splType;
    }
    if (isRecord(anObject)) {
        return 'Record';
    }
    return objectNameByConstructor(anObject);
}
function splTypeOf(anObject) {
    if (anObject === null || anObject === undefined) {
        return 'Nil';
    }
    switch(typeof anObject){
        case 'boolean':
            return 'Boolean';
        case 'function':
            return 'Block';
        case 'number':
            return 'SmallFloat';
        case 'string':
            return 'String';
        case 'bigint':
            return 'LargeInteger';
        case 'object':
            return splObjectTypeOf(anObject);
        default:
            throw new Error(`splTypeOf: unknown type: "${anObject}"`);
    }
}
class MethodInformation {
    name;
    packageName;
    parameterNames;
    sourceCode;
    origin;
    arity;
    constructor(name, packageName, parameterNames, sourceCode, origin){
        this.name = name;
        this.packageName = packageName;
        this.parameterNames = parameterNames;
        this.sourceCode = sourceCode;
        this.origin = origin;
        this.arity = parameterNames.length;
    }
    qualifiedName() {
        return `${this.name}:/${this.arity}`;
    }
}
class Method {
    block;
    information;
    constructor(block, information){
        this.block = block;
        this.information = information;
    }
    qualifiedName() {
        return this.information.qualifiedName();
    }
}
class Trait {
    name;
    packageName;
    methodDictionary;
    constructor(name, packageName){
        this.name = name;
        this.packageName = packageName;
        this.methodDictionary = new Map();
    }
}
class Type {
    name;
    packageName;
    traitNameArray;
    slotNameArray;
    methodDictionary;
    constructor(name, packageName, traitNameArray, slotNameArray, methodDictionary){
        this.name = name;
        this.packageName = packageName;
        this.traitNameArray = traitNameArray;
        this.slotNameArray = slotNameArray;
        this.methodDictionary = methodDictionary;
    }
}
class Package {
    category;
    name;
    requires;
    url;
    text;
    preCompiled;
    isLoaded;
    constructor(category, name, requires, url, text, preCompiled, isLoaded){
        this.category = category;
        this.name = name;
        this.requires = requires;
        this.url = url;
        this.text = text;
        this.preCompiled = preCompiled;
        this.isLoaded = isLoaded;
    }
}
function parsePackageRequires(text) {
    const firstLine = text.split('\n', 1)[0];
    const packageNames = firstLine.match(/Requires: (.*)\*\//);
    if (packageNames == null) {
        return [];
    }
    return packageNames[1].trim().split(' ');
}
function evaluatePackage(pkg) {
    if (pkg.preCompiled) {
        try {
            return eval?.(`"use strict"; ${pkg.text}`);
        } catch (err) {
            throw new Error(`Error loading package: ${pkg} ${err}`);
        }
    }
    return evaluateFor(pkg.name, pkg.text);
}
async function evaluatePackageArrayInSequence(pkgArray) {
    for (const pkg of pkgArray){
        await evaluatePackage(pkg);
    }
}
const preinstalledTypes = [
    'List',
    'SmallFloat',
    'String',
    'Void'
];
class System {
    methodDictionary;
    traitDictionary;
    typeDictionary;
    packageDictionary;
    window;
    cache;
    constructor(){
        this.methodDictionary = new Map();
        this.traitDictionary = new Map();
        this.typeDictionary = new Map(preinstalledTypes.map(function(each) {
            return [
                each,
                new Type(each, 'Kernel', [], [], new Map())
            ];
        }));
        this.window = globalThis;
        this.packageDictionary = new Map();
        this.cache = new Map();
    }
}
const system = new System();
function traitExists(traitName) {
    return system.traitDictionary.has(traitName);
}
function getTrait(traitName) {
    if (!traitExists(traitName)) {
        throw new Error(`getTrait: does not exist: ${traitName}`);
    }
    return system.traitDictionary.get(traitName);
}
function addTrait(traitName, packageName) {
    if (traitExists(traitName)) {
        throw new Error(`addTrait: trait exists: ${traitName}`);
    }
    system.traitDictionary.set(traitName, new Trait(traitName, packageName));
}
function typeExists(typeName) {
    return system.typeDictionary.has(typeName);
}
function getType(typeName) {
    if (!typeExists(typeName)) {
        throw new Error(`getType: does not exist: ${typeName}`);
    }
    return system.typeDictionary.get(typeName);
}
function methodExists(methodName) {
    return system.methodDictionary.has(methodName);
}
function addMethodToExistingTrait(traitName, packageName, methodName, parameterNames, block, sourceCode) {
    if (!traitExists(traitName)) {
        throw new Error(`addMethodToExistingTrait: trait does not exist: ${traitName}, ${methodName}, ${parameterNames.length}`);
    }
    const trait = getTrait(traitName);
    const method = new Method(block, new MethodInformation(methodName, packageName, parameterNames, sourceCode, trait));
    trait.methodDictionary.set(method.qualifiedName(), method);
    return method;
}
function copyTraitMethodsToType(traitName, typeName) {
    if (!traitExists(traitName) || !typeExists(typeName)) {
        throw new Error(`copyTraitMethodsToType: trait or type does not exist: ${traitName}, ${typeName}`);
    }
    const trait = getTrait(traitName);
    const methodDictionary = trait.methodDictionary;
    for (const [_unusedName, method] of methodDictionary){
        addMethodFor(typeName, method, true);
    }
}
function typesImplementingTrait(traitName) {
    const answer = [];
    for (const [typeName, typeValue] of system.typeDictionary){
        if (typeValue.traitNameArray.includes(traitName)) {
            answer.push(typeName);
        }
    }
    return answer;
}
function annotateFunction(aBlock, argumentNames) {
    aBlock.argumentNames = argumentNames;
    return aBlock;
}
function extendTraitWithMethod(traitName, packageName, name, parameterNames, block, sourceCode) {
    const method = addMethodToExistingTrait(traitName, packageName, name, parameterNames, block, sourceCode);
    typesImplementingTrait(traitName).forEach(function(typeName) {
        addMethodFor(typeName, method, true);
    });
    return method;
}
function extendTypeOrTraitWithMethod(typeOrTraitName, packageName, name, parameterNames, block, sourceCode) {
    const isTraitName = typeOrTraitName.startsWith('@');
    if (isTraitName) {
        return extendTraitWithMethod(typeOrTraitName.substring(1), packageName, name, parameterNames, block, sourceCode);
    }
    return addMethodToExistingType(typeOrTraitName, packageName, name, parameterNames, block, sourceCode);
}
function lookupGeneric(methodName, methodArity, receiverType) {
    const byArity = system.methodDictionary.get(methodName);
    const byType = byArity.get(methodArity);
    return byType.get(receiverType);
}
function nameWithoutArity(methodName) {
    return methodName.split(':')[0];
}
function applyGenericAt(methodName, parameterArray, receiverType) {
    const genericMethod = lookupGeneric(methodName, parameterArray.length, receiverType);
    if (!genericMethod) {
        throw new Error(`applyGenericAt: ${methodName}: lookup failed`);
    }
    return genericMethod.block.apply(null, parameterArray);
}
function dispatchVoid(methodName, typeTable) {
    const voidMethod = typeTable.get('Void');
    if (!voidMethod) {
        throw new Error(`dispatchVoid: ${methodName}: method lookup failed`);
    }
    return voidMethod.block.apply(null, []);
}
function dispatchByType(methodName, typeTable, parameterArray) {
    const receiver = parameterArray[0];
    const receiverType = splTypeOf(receiver);
    const typeMethod = typeTable.get(receiverType);
    if (!typeMethod) {
        const arity = parameterArray.length;
        const qualifiedName = `${methodName}:/${arity}`;
        throw new Error(`dispatchByType: no method "${qualifiedName}" for "${receiverType}"`);
    }
    return typeMethod.block.apply(null, parameterArray);
}
function isMoreSpecific(typeName, existingMethod, method) {
    const methodOrigin = method.information.origin;
    const methodIsAtType = methodOrigin.name === typeName;
    if (methodIsAtType) {
        return false;
    }
    const existingOrigin = existingMethod.information.origin;
    const existingIsAtType = existingOrigin.name === typeName;
    if (existingIsAtType && !methodIsAtType) {
        return true;
    }
    const typeValue = getType(typeName);
    const existingTraitIndex = typeValue.traitNameArray.findIndex((item)=>item === existingOrigin.name);
    const methodTraitIndex = typeValue.traitNameArray.findIndex((item)=>item === methodOrigin.name);
    return existingTraitIndex > methodTraitIndex;
}
function addMethodFor(typeName, method, requireTypeExists) {
    if (requireTypeExists && !typeExists(typeName)) {
        throw new Error(`addMethodFor: type does not exist: ${typeName} (${method})`);
    }
    const name = method.information.name;
    if (!methodExists(name)) {
        system.methodDictionary.set(name, new Map());
    }
    const arity = method.information.arity;
    const arityTable = system.methodDictionary.get(name);
    if (!arityTable.has(arity)) {
        arityTable.set(arity, new Map());
        const prefixedNameWithArity = `_${name}_${arity}`;
        let globalFunctionWithArity = globalThis[prefixedNameWithArity];
        if (globalFunctionWithArity === undefined) {
            const typeTable = arityTable.get(arity);
            const voidFunction = function() {
                return dispatchVoid(name, typeTable);
            };
            const typeFunction = function(...args) {
                return dispatchByType(name, typeTable, args);
            };
            const dispatchFunction = arity === 0 ? voidFunction : typeFunction;
            globalFunctionWithArity = globalThis[prefixedNameWithArity] = dispatchFunction;
            Object.defineProperty(globalFunctionWithArity, 'name', {
                value: method.qualifiedName()
            });
            Object.defineProperty(globalFunctionWithArity, 'length', {
                value: arity
            });
            Object.defineProperty(globalFunctionWithArity, 'parameterNames', {
                value: method.information.parameterNames
            });
        }
    }
    const existingEntry = arityTable.get(arity).get(typeName);
    if (existingEntry && isMoreSpecific(typeName, existingEntry, method)) {} else {
        arityTable.get(arity).set(typeName, method);
    }
    if (typeName === method.information.origin.name) {
        system.typeDictionary.get(typeName).methodDictionary.set(method.qualifiedName(), method);
    }
    return method;
}
function addMethodToExistingType(typeName, packageName, methodName, parameterNames, block, sourceCode) {
    if (!typeExists(typeName)) {
        throw new Error(`addMethod: type does not exist: ${typeName}, ${methodName}, ${parameterNames.length}`);
    }
    const typeValue = system.typeDictionary.get(typeName);
    const method = new Method(block, new MethodInformation(methodName, packageName, parameterNames, sourceCode, typeValue));
    return addMethodFor(typeName, method, true);
}
function addType(isHostType, typeName, packageName, traitList, slotNames) {
    if (typeExists(typeName) && !preinstalledTypes.includes(typeName)) {
        throw new Error(`addType: type exists and is not pre-installed: ${typeName}`);
    }
    const initializeSlots = slotNames.map((each)=>`anInstance.${each} = ${each}`).join('; ');
    const nilSlots = slotNames.map((each)=>`${each}: null`).join(', ');
    const defNewType = isHostType ? '' : `sl.addMethodToExistingType('Void', '${packageName}', 'new${typeName}', [], function() { return {_type: '${typeName}', ${nilSlots} }; }, '<primitive: constructor>')`;
    const defInitializeSlots = isHostType ? '' : `sl.addMethodToExistingType('${typeName}', '${packageName}', 'initializeSlots', ${JSON.stringify([
        'self'
    ].concat(slotNames))}, function(anInstance, ${slotNames.join(', ')}) { ${initializeSlots}; return anInstance; }, '<primitive: initializer>')`;
    const defPredicateFalse = `sl.extendTraitWithMethod('Object', '${packageName}', 'is${typeName}', ['self'], function(anObject) { return false; }, '<primitive: predicate>')`;
    const defPredicateTrue = `sl.addMethodToExistingType('${typeName}', '${packageName}', 'is${typeName}', ['self'], function(anInstance) { return true; }, '<primitive: predicate>')`;
    const defSlotAccess = slotNames.map((each)=>`sl.addMethodToExistingType('${typeName}', '${packageName}', '${each}', ['self'], function(anInstance) { return anInstance.${each} }, '<primitive: accessor>');`).join('; ');
    const defSlotMutate = slotNames.map((each)=>`sl.addMethodToExistingType('${typeName}', '${packageName}', '${each}', ['self', 'anObject'], function(anInstance, anObject) { anInstance.${each} = anObject; return anObject; }, '<primitive: mutator>');`).join('; ');
    const methodDictionary = typeExists(typeName) ? system.typeDictionary.get(typeName).methodDictionary : new Map();
    system.typeDictionary.set(typeName, new Type(typeName, packageName, traitList, slotNames, methodDictionary));
    const allDef = [
        defNewType,
        defInitializeSlots,
        defPredicateFalse,
        defPredicateTrue,
        defSlotAccess,
        defSlotMutate
    ].join(';');
    eval?.(`"use strict"; ${allDef}`);
}
function arrayCheckIndex(anArray, anInteger) {
    return isSmallFloatInteger(anInteger) && anInteger >= 1 && anInteger <= anArray.length;
}
function initializeLocalPackages(qualifiedPackageNames) {
    const packageArray = [];
    qualifiedPackageNames.forEach((qualifiedName)=>{
        const parts = qualifiedName.split('-');
        const category = parts[0];
        const name = parts[1];
        const url = `${category}/${name}.sl`;
        const pkg = new Package(category, name, [], url, '', true, false);
        system.packageDictionary.set(name, pkg);
        packageArray.push(pkg);
    });
    return packageArray;
}
async function primitiveLoadPackageSequence(packageNames) {
    const packageArray = [];
    packageNames.forEach((name)=>{
        const pkg = system.packageDictionary.get(name);
        if (pkg == undefined) {
            throw new Error(`primitiveLoadPackageSequence: no such package: ${name}, ${pkg}, ${packageNames.length}, [${packageNames}]`);
        }
        pkg.isLoaded = true;
        packageArray.push(pkg);
    });
    await evaluatePackageArrayInSequence(packageArray);
}
function assignGlobals() {
    globalThis._system = system;
}
function stringToSentences(str) {
    return str.match(/(?=[^])(?:\P{Sentence_Terminal}|\p{Sentence_Terminal}(?!['"`\p{Close_Punctuation}\p{Final_Punctuation}\s]))*(?:\p{Sentence_Terminal}+['"`\p{Close_Punctuation}\p{Final_Punctuation}]*|$)/guy) || [];
}
export { splTypeOf as splTypeOf };
export { MethodInformation as MethodInformation };
export { Method as Method };
export { Trait as Trait };
export { Type as Type };
export { Package as Package };
export { parsePackageRequires as parsePackageRequires };
export { evaluatePackage as evaluatePackage };
export { evaluatePackageArrayInSequence as evaluatePackageArrayInSequence };
export { System as System };
export { system as system };
export { addTrait as addTrait };
export { addMethodToExistingTrait as addMethodToExistingTrait };
export { copyTraitMethodsToType as copyTraitMethodsToType };
export { typesImplementingTrait as typesImplementingTrait };
export { annotateFunction as annotateFunction };
export { extendTraitWithMethod as extendTraitWithMethod };
export { extendTypeOrTraitWithMethod as extendTypeOrTraitWithMethod };
export { lookupGeneric as lookupGeneric };
export { nameWithoutArity as nameWithoutArity };
export { applyGenericAt as applyGenericAt };
export { dispatchVoid as dispatchVoid };
export { dispatchByType as dispatchByType };
export { addMethodFor as addMethodFor };
export { addMethodToExistingType as addMethodToExistingType };
export { addType as addType };
export { arrayCheckIndex as arrayCheckIndex };
export { initializeLocalPackages as initializeLocalPackages };
export { primitiveLoadPackageSequence as primitiveLoadPackageSequence };
export { assignGlobals as assignGlobals };
export { stringToSentences as stringToSentences };
const loader = {
    splDir: ''
};
function setSplDir(directoryName) {
    loader.splDir = directoryName;
}
function resolveFileName(fileName) {
    const resolvedFileName = fileName[0] === '/' ? fileName : `${loader.splDir}/${fileName}`;
    console.log(`resolveFileName: ${resolvedFileName}`);
    return resolvedFileName;
}
function packageFileName(pkg) {
    return pkg.preCompiled ? '.cache/' + pkg.name + '.js' : 'Package/' + pkg.url;
}
function primitiveReadLocalBinaryFile(fileName) {
    const resolvedFileName = resolveFileName(fileName);
    return fetch(resolvedFileName).then(function(response) {
        return response.arrayBuffer().then(function(arrayBuffer) {
            return new Uint8Array(arrayBuffer);
        });
    });
}
function primitiveReadLocalTextFileArray(fileNameArray) {
    const resolvedFileNameArray = [];
    fileNameArray.forEach(function(fileName) {
        resolvedFileNameArray.push(resolveFileName(fileName));
    });
    return Promise.all(resolvedFileNameArray.map(function(fileName) {
        return fetch(fileName, {
            cache: 'no-cache'
        }).then((response)=>response.text());
    }));
}
async function primitiveReadLocalPackages(qualifiedPackageNames) {
    const packageArray = await initializeLocalPackages(qualifiedPackageNames);
    const fileNameArray = [];
    packageArray.forEach(function(pkg) {
        return fileNameArray.push(packageFileName(pkg));
    });
    const fetchedTextArray = await primitiveReadLocalTextFileArray(fileNameArray);
    fetchedTextArray.map(function(text, index) {
        packageArray[index].text = text;
        packageArray[index].requires = parsePackageRequires(text);
    });
}
function addLoadUrlMethods() {
    addMethodToExistingType('List', 'Kernel', 'primitiveReadLocalPackages', [
        'self'
    ], primitiveReadLocalPackages, '<primitive: package reader>');
    addMethodToExistingType('List', 'Kernel', 'primitiveLoadPackageSequence', [
        'self'
    ], primitiveLoadPackageSequence, '<primitive: package loader>');
    addMethodToExistingType('String', 'Kernel', 'primitiveReadLocalBinaryFile', [
        'self'
    ], primitiveReadLocalBinaryFile, '<primitive: file reader>');
}
async function loadUrl(packageName, fileName) {
    await evaluateUrlFor(packageName, resolveFileName(fileName));
}
export { loader as loader };
export { setSplDir as setSplDir };
export { resolveFileName as resolveFileName };
export { packageFileName as packageFileName };
export { primitiveReadLocalBinaryFile as primitiveReadLocalBinaryFile };
export { primitiveReadLocalTextFileArray as primitiveReadLocalTextFileArray };
export { primitiveReadLocalPackages as primitiveReadLocalPackages };
export { addLoadUrlMethods as addLoadUrlMethods };
export { loadUrl as loadUrl };
function preferencesRead(preferences, preferenceKey) {
    const configurationKey = preferences['Configuration'];
    const configuration = preferences[configurationKey];
    if (configuration) {
        const entry = configuration[preferenceKey];
        if (entry) {
            return entry;
        } else {
            throw new Error(`preferencesRead: known configuration: ${configurationKey}, unknown preference: ${preferenceKey}`);
        }
    } else {
        const defaultConfiguration = preferences['Default'];
        if (defaultConfiguration) {
            const defaultEntry = defaultConfiguration[preferenceKey];
            if (defaultEntry) {
                return defaultEntry;
            } else {
                throw new Error(`preferencesRead: unknown configuration: ${configurationKey}, unknown preference at default: ${preferenceKey}`);
            }
        } else {
            throw new Error(`preferencesRead: no Default configuration`);
        }
    }
}
export { preferencesRead as preferencesRead };

