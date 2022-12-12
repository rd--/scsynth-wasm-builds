// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function isArray(aValue) {
    return Array.isArray(aValue);
}
function scalarOrArray(maybeArray, scalarFunc, arrayFunc) {
    return isArray(maybeArray) ? arrayFunc(maybeArray) : scalarFunc(maybeArray);
}
function asArray(maybeArray) {
    return isArray(maybeArray) ? maybeArray : [
        maybeArray
    ];
}
function arrayNew(size) {
    return new Array(size);
}
function arrayAppend(lhs, rhs) {
    return lhs.concat(rhs);
}
function arrayAt(anArray, index) {
    return anArray[index];
}
function arrayAtIndices(anArray, indices) {
    return indices.map((index)=>anArray[index]);
}
function arrayAtWrap(anArray, index) {
    return anArray[index % anArray.length];
}
function arrayCheckIndex(anArray, anInteger) {
    return Number.isInteger(anInteger) && anInteger >= 0 && anInteger < anArray.length;
}
function arrayChoose(anArray) {
    return anArray[Math.floor(Math.random() * anArray.length)];
}
function arrayClump(anArray, clumpSize) {
    const clumpCount = Math.ceil(anArray.length / clumpSize);
    return arrayIota(clumpCount).map((i)=>anArray.slice(i * clumpSize, i * clumpSize + clumpSize));
}
function arrayCollect(anArray, aFunction) {
    return anArray.map(aFunction);
}
function arrayConcat(lhs, rhs) {
    return lhs.concat(rhs);
}
function arrayConcatenation(anArray) {
    return anArray.flat(1);
}
function arrayCons(anArray, aValue) {
    return anArray.unshift(aValue);
}
function arrayContainsArray(anArray) {
    return anArray.some((item)=>isArray(item));
}
function arrayCopy(anArray) {
    return anArray.slice(0, anArray.length);
}
function arrayDropWhile(anArray, predicate) {
    const startIndex = anArray.findIndex((item)=>!predicate(item));
    if (anArray.length > 0 && startIndex > 0) {
        return anArray.slice(startIndex, anArray.length);
    } else {
        return anArray;
    }
}
function arrayEvery(anArray, aPredicate) {
    return anArray.every(aPredicate);
}
function arrayExtendCyclically(anArray, size) {
    const initialSize = anArray.length;
    const result = anArray.slice(0, initialSize);
    for(let x = 0; x < size - initialSize; x += 1){
        result.push(arrayAtWrap(anArray, x));
    }
    return result;
}
function arrayExtendToBeOfEqualSize(anArray) {
    const maxSize = arrayMaxItem(anArray.map((item)=>isArray(item) ? item.length : 1));
    return anArray.map((item)=>arrayExtendCyclically(isArray(item) ? item : [
            item
        ], maxSize));
}
function arrayFill(size, elemProc) {
    if (elemProc.length != 0) {
        console.error('arrayFill: arity error');
    }
    return arrayIota(size).map((_unusedItem)=>elemProc());
}
function arrayFillWithIndex(size, elemProc) {
    if (elemProc.length != 1) {
        console.error('arrayFillWithIndex: arity error');
    }
    return arrayIota(size).map(elemProc);
}
function arrayFilter(anArray, aFunction) {
    return anArray.filter(aFunction);
}
function arrayFind(anArray, aFunction) {
    return anArray.find(aFunction);
}
function arrayFindIndex(anArray, aFunction) {
    return anArray.findIndex(aFunction);
}
function arrayFirst(anArray) {
    return anArray[0];
}
function arrayForEach(anArray, aFunction) {
    anArray.forEach(aFunction);
}
function arrayFromTo(from, to) {
    return arrayFromToBy(from, to, 1);
}
function arrayFromToBy(from, to, by) {
    const answer = [];
    for(let i = from; i <= to; i += by){
        answer.push(i);
    }
    return answer;
}
function arrayIndexOf(anArray, aValue) {
    return anArray.indexOf(aValue);
}
function arrayIota(k) {
    return arrayFromTo(0, k - 1);
}
function arrayInsert(sourceArray, destinationArray) {
    sourceArray.forEach((item)=>destinationArray.push(item));
}
function arrayLength(anArray) {
    return anArray.length;
}
function arrayMap(aFunction, anArray) {
    return anArray.map(aFunction);
}
function arrayMaxItem(anArray) {
    return anArray.reduce((i, j)=>Math.max(i, j));
}
function arrayNub(anArray) {
    return anArray.filter((item, index)=>anArray.indexOf(item) === index);
}
function arrayProduct(anArray) {
    return anArray.reduce((lhs, rhs)=>lhs * rhs);
}
function arrayPush(anArray, aValue) {
    return anArray.push(aValue);
}
function arrayPut(anArray, anIndex, aValue) {
    anArray[anIndex] = aValue;
}
function arrayReplicate(count, value) {
    return arrayIota(count).map((_unusedItem)=>value);
}
function arrayReduce(anArray, aFunction) {
    return anArray.reduce(aFunction);
}
function arrayReverseInPlace(anArray) {
    anArray.reverse();
}
function arrayReverse(anArray) {
    return arrayCopy(anArray).reverse();
}
function arraySecond(anArray) {
    return anArray[1];
}
function arrayShallowEq(lhs, rhs) {
    if (lhs === rhs) {
        return true;
    }
    if (!isArray(rhs) || lhs.length !== rhs.length) {
        return false;
    }
    for(let i = 0; i < lhs.length; i++){
        if (lhs[i] !== rhs[i]) {
            return false;
        }
    }
    return true;
}
function arraySize(anArray) {
    return anArray.length;
}
function arraySort(anArray, aFunction) {
    return anArray.sort(aFunction);
}
function arraySum(anArray) {
    return anArray.reduce((lhs, rhs)=>lhs + rhs);
}
function arrayTail(anArray) {
    return anArray.slice(1, anArray.length);
}
function arrayTakeWhile(anArray, predicate) {
    const endIndex = anArray.findIndex((item)=>!predicate(item));
    if (anArray.length > 0 && endIndex > 0) {
        return anArray.slice(0, endIndex);
    } else {
        return [];
    }
}
function arrayTranspose(anArray) {
    return anArray[0].map((_col, i)=>anArray.map((row)=>row[i]));
}
function arrayUnlines(anArray) {
    return anArray.join('\n');
}
export { isArray as isArray };
export { scalarOrArray as scalarOrArray };
export { asArray as asArray };
export { arrayNew as arrayNew };
export { arrayAppend as arrayAppend };
export { arrayAt as arrayAt };
export { arrayAtIndices as arrayAtIndices };
export { arrayAtWrap as arrayAtWrap };
export { arrayCheckIndex as arrayCheckIndex };
export { arrayChoose as arrayChoose };
export { arrayClump as arrayClump };
export { arrayCollect as arrayCollect };
export { arrayConcat as arrayConcat };
export { arrayConcatenation as arrayConcatenation };
export { arrayCons as arrayCons };
export { arrayContainsArray as arrayContainsArray };
export { arrayCopy as arrayCopy };
export { arrayDropWhile as arrayDropWhile };
export { arrayEvery as arrayEvery };
export { arrayExtendCyclically as arrayExtendCyclically };
export { arrayExtendToBeOfEqualSize as arrayExtendToBeOfEqualSize };
export { arrayFill as arrayFill };
export { arrayFillWithIndex as arrayFillWithIndex };
export { arrayFilter as arrayFilter };
export { arrayFind as arrayFind };
export { arrayFindIndex as arrayFindIndex };
export { arrayFirst as arrayFirst };
export { arrayForEach as arrayForEach };
export { arrayFromTo as arrayFromTo };
export { arrayFromToBy as arrayFromToBy };
export { arrayIndexOf as arrayIndexOf };
export { arrayIota as arrayIota };
export { arrayInsert as arrayInsert };
export { arrayLength as arrayLength };
export { arrayMap as arrayMap };
export { arrayMaxItem as arrayMaxItem };
export { arrayNub as arrayNub };
export { arrayProduct as arrayProduct };
export { arrayPush as arrayPush };
export { arrayPut as arrayPut };
export { arrayReplicate as arrayReplicate };
export { arrayReduce as arrayReduce };
export { arrayReverseInPlace as arrayReverseInPlace };
export { arrayReverse as arrayReverse };
export { arraySecond as arraySecond };
export { arrayShallowEq as arrayShallowEq };
export { arraySize as arraySize };
export { arraySort as arraySort };
export { arraySum as arraySum };
export { arrayTail as arrayTail };
export { arrayTakeWhile as arrayTakeWhile };
export { arrayTranspose as arrayTranspose };
export { arrayUnlines as arrayUnlines };
function isDictionary(aValue) {
    return typeof aValue === 'object';
}
function dictionaryNew() {
    return {};
}
function dictionaryAt(aDictionary, aKey) {
    return aDictionary[aKey];
}
function dictionaryPut(aDictionary, aKey, aValue) {
    aDictionary[aKey] = aValue;
}
function dictionaryHasKey(aDictionary, aKey) {
    return aDictionary[aKey] !== undefined;
}
function dictionaryCopyAllFromTo(sourceDictionary, destinationDictionary) {
    Object.entries(sourceDictionary).forEach(([key, value])=>destinationDictionary[key] = value);
}
function dictionaryFindKeyOfValue(aDictionary, aValue) {
    const predicateFunction = function(aKey) {
        return aDictionary[aKey] === aValue;
    };
    return Object.keys(aDictionary).find(predicateFunction);
}
function dictionaryCopyKeys(aDictionary, keysArray) {
    const answer = dictionaryNew();
    keysArray.forEach((key)=>answer[key] = aDictionary[key]);
    return answer;
}
export { isDictionary as isDictionary };
export { dictionaryNew as dictionaryNew };
export { dictionaryAt as dictionaryAt };
export { dictionaryPut as dictionaryPut };
export { dictionaryHasKey as dictionaryHasKey };
export { dictionaryCopyAllFromTo as dictionaryCopyAllFromTo };
export { dictionaryFindKeyOfValue as dictionaryFindKeyOfValue };
export { dictionaryCopyKeys as dictionaryCopyKeys };
function get_selected_text() {
    const selection = document.getSelection();
    return selection ? selection.toString() : '';
}
function get_selected_text_or_contents_of(elemId) {
    var selectedText = get_selected_text().trim();
    if (selectedText.length > 0) {
        return selectedText;
    } else {
        var element = document.getElementById(elemId);
        return element ? element.innerText.trim() : '';
    }
}
function setInnerHtml(elementId, innerHtml, setFocus) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = innerHtml;
        if (setFocus) {
            element.focus();
        }
    } else {
        console.warn(`setInnerHtml: ${elementId}: element not located`);
    }
}
function setTextContent(elementId, textContent, setFocus) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = textContent;
        if (setFocus) {
            element.focus();
        }
    } else {
        console.warn(`setTextContent: ${elementId}: element not located`);
    }
}
function setter_for_inner_html_of(elemId) {
    const elem = document.getElementById(elemId);
    return function(innerHtml) {
        if (elem) {
            elem.innerHTML = innerHtml;
        } else {
            console.warn(`setter_for_inner_html_of: ${elemId}: elem was nil`);
        }
    };
}
function withElement(elementId, elementProcedure) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('withElement: not found: ', elementId);
    } else {
        elementProcedure(element);
    }
}
function get_select_element_and_then(selectId, selectProcedure) {
    withElement(selectId, selectProcedure);
}
function select_on_change(selectId, proc) {
    const guardedProc = function(anEvent) {
        const target = anEvent.target;
        if (target && target.value) {
            proc(target, target.value);
        }
    };
    get_select_element_and_then(selectId, (selectElement)=>selectElement.addEventListener('change', guardedProc));
}
function select_add_option_to(selectElement, optionValue, optionText) {
    const optionElement = document.createElement('option');
    optionElement.value = optionValue;
    optionElement.text = optionText;
    selectElement.add(optionElement, null);
}
function select_add_option_at_id(selectId, optionValue, optionText) {
    get_select_element_and_then(selectId, (selectElement)=>select_add_option_to(selectElement, optionValue, optionText));
}
function select_clear_from(selectId, startIndex) {
    get_select_element_and_then(selectId, function(selectElement) {
        const endIndex = selectElement.length;
        for(let i = startIndex; i < endIndex; i++){
            selectElement.remove(startIndex);
        }
    });
}
function select_add_keys_as_options(selectId, keyArray) {
    get_select_element_and_then(selectId, function(selectElement) {
        keyArray.forEach(function(key) {
            const option = document.createElement('option');
            option.value = key;
            option.text = key;
            selectElement.add(option, null);
        });
    });
}
function connect_button_to_input(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!button || !input) {
        console.warn('connect_button_to_input: element not located?');
    } else {
        button.addEventListener('click', (_unusedEvent)=>input.click(), false);
    }
}
function click_input(inputId) {
    withElement(inputId, (inputElement)=>inputElement.click());
}
function textarea_get_selection_or_contents(textareaElement) {
    if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        return textareaElement.value;
    } else {
        return textareaElement.value.substring(textareaElement.selectionStart, textareaElement.selectionEnd);
    }
}
function url_get_param(key) {
    const params = new URLSearchParams(document.location.search);
    return params.get(key);
}
function window_url_set_param(key, value) {
    const windowUrl = new URL(window.location.href);
    windowUrl.searchParams.set(key, value);
    window.history.pushState({}, '', windowUrl);
}
function parse_int_or_alert(integerText, errorText, defaultAnswer) {
    const answer = Number.parseInt(integerText, 10);
    if (isNaN(answer)) {
        window.alert(errorText);
        return defaultAnswer;
    } else {
        return answer;
    }
}
function parse_int_or_alert_and_then(integerText, errorText, proc) {
    const answer = Number.parseInt(integerText, 10);
    if (isNaN(answer)) {
        window.alert(errorText);
    } else {
        proc(answer);
    }
}
function prompt_for_int_and_then(promptText, defaultValue, proc) {
    const integerText = window.prompt(promptText, String(defaultValue));
    if (integerText) {
        parse_int_or_alert_and_then(integerText, 'Not an integer?', proc);
    }
}
function fullscreenFor(element) {
    const fullscreenOptions = {
        navigationUI: "hide"
    };
    if (!document.fullscreenElement) {
        element.requestFullscreen(fullscreenOptions);
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
function fullscreen() {
    fullscreenFor(document.documentElement);
}
function menu_on_change_with_option_value(menuId, changeProc) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.addEventListener('change', function(anEvent) {
            const target = anEvent.target;
            if (target) {
                const optionElement = target;
                changeProc(optionElement.value);
            } else {
                console.warn(`menu_on_change_with_target_value: no target or no target.value: ${menuId}`);
            }
        });
    } else {
        console.warn(`menu_on_change_with_target_value: no element: ${menuId}`);
    }
}
export { get_selected_text as get_selected_text };
export { get_selected_text_or_contents_of as get_selected_text_or_contents_of };
export { setInnerHtml as setInnerHtml };
export { setTextContent as setTextContent };
export { setter_for_inner_html_of as setter_for_inner_html_of };
export { withElement as withElement };
export { get_select_element_and_then as get_select_element_and_then };
export { select_on_change as select_on_change };
export { select_add_option_to as select_add_option_to };
export { select_add_option_at_id as select_add_option_at_id };
export { select_clear_from as select_clear_from };
export { select_add_keys_as_options as select_add_keys_as_options };
export { connect_button_to_input as connect_button_to_input };
export { click_input as click_input };
export { textarea_get_selection_or_contents as textarea_get_selection_or_contents };
export { url_get_param as url_get_param };
export { window_url_set_param as window_url_set_param };
export { parse_int_or_alert as parse_int_or_alert };
export { parse_int_or_alert_and_then as parse_int_or_alert_and_then };
export { prompt_for_int_and_then as prompt_for_int_and_then };
export { fullscreen as fullscreen };
export { menu_on_change_with_option_value as menu_on_change_with_option_value };
function encodeUsing(byteCount, writerFunction) {
    const arrayBuffer = new ArrayBuffer(byteCount);
    writerFunction(new DataView(arrayBuffer));
    return new Uint8Array(arrayBuffer);
}
function encodeUint8(aNumber) {
    return encodeUsing(1, (b)=>b.setUint8(0, aNumber));
}
function encodeInt8(aNumber) {
    return encodeUsing(1, (b)=>b.setInt8(0, aNumber));
}
function encodeInt16(aNumber) {
    return encodeUsing(2, (b)=>b.setInt16(0, aNumber));
}
function encodeInt32(aNumber) {
    return encodeUsing(4, (b)=>b.setInt32(0, aNumber));
}
function encodeFloat32(aNumber) {
    return encodeUsing(4, (b)=>b.setFloat32(0, aNumber));
}
function encodeFloat32Array(inputArray) {
    const arrayBuffer = new ArrayBuffer(inputArray.length * 4);
    const dataView = new DataView(arrayBuffer);
    for(let i = 0; i < inputArray.length; i++){
        dataView.setFloat32(i * 4, inputArray[i]);
    }
    const uint8Array = new Uint8Array(arrayBuffer);
    return uint8Array;
}
function encodePascalString(aString) {
    const uint8Array = new Uint8Array(aString.length + 1);
    uint8Array[0] = aString.length;
    for(let i = 1; i < aString.length + 1; i++){
        uint8Array[i] = aString.charCodeAt(i - 1);
    }
    return uint8Array;
}
export { encodeUsing as encodeUsing };
export { encodeUint8 as encodeUint8 };
export { encodeInt8 as encodeInt8 };
export { encodeInt16 as encodeInt16 };
export { encodeInt32 as encodeInt32 };
export { encodeFloat32 as encodeFloat32 };
export { encodeFloat32Array as encodeFloat32Array };
export { encodePascalString as encodePascalString };
const printDebug = false;
function consoleDebug(text) {
    if (false) {
        console.debug(text);
    }
}
function consoleWarn(text) {
    console.warn(text);
}
function consoleError(text) {
    console.error(text);
}
function throwError(text) {
    console.error(text);
    throw Error(text);
}
function consoleLog(text) {
    console.log(text);
}
function consoleLogMessageFrom(from, text) {
    console.log(`${from}: ${text}`);
}
function logErrorAndReturn(fromWhere, reason, defaultValue) {
    console.error(`${fromWhere}: ${reason}`);
    return defaultValue;
}
export { printDebug as printDebug };
export { consoleDebug as consoleDebug };
export { consoleWarn as consoleWarn };
export { consoleError as consoleError };
export { throwError as throwError };
export { consoleLog as consoleLog };
export { consoleLogMessageFrom as consoleLogMessageFrom };
export { logErrorAndReturn as logErrorAndReturn };
function functionArity(aFunction) {
    return aFunction.length;
}
export { functionArity as functionArity };
function url_append_timestamp(url) {
    const ext = (/\?/.test(url) ? '&' : '?') + new Date().getTime();
    return url + ext;
}
function fetch_extract_then_else(url, extractFunc, processFunc, errorFunc) {
    fetch(url, {
        cache: 'no-cache'
    }).then(handle_fetch_error).then(extractFunc).then(processFunc).catch(errorFunc);
}
function load_and_extract_and_then(fileName, typeString, extractFunc, processFunc) {
    fetch_extract_then_else(fileName, extractFunc, processFunc, (reason)=>console.error(`load_and_extract_and_then: ${typeString}: ${reason}`));
}
function load_utf8_and_then(fileName, processFunc) {
    load_and_extract_and_then(fileName, 'text/utf8', (r)=>r.text(), processFunc);
}
function load_json_and_then(fileName, processFunc) {
    load_and_extract_and_then(fileName, 'text/json', (r)=>r.json(), processFunc);
}
function load_arraybuffer_and_then(fileName, processFunc) {
    load_and_extract_and_then(fileName, 'bytes/arraybuffer', (r)=>r.arrayBuffer(), processFunc);
}
function read_text_file_and_then(textFile, proc) {
    const reader = new FileReader();
    reader.addEventListener('load', ()=>proc(reader.result), false);
    reader.readAsText(textFile);
}
function get_file_input_file(inputId, fileIndex) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.files) {
        const inputFile = inputElement.files[fileIndex];
        if (!inputFile) {
            console.warn('get_file_input_file: no input file at index?');
        }
        return inputFile;
    } else {
        console.warn('get_file_input_file: no files at input element?');
        return null;
    }
}
function read_text_file_from_file_input_and_then(inputId, fileIndex, proc) {
    const inputFile = get_file_input_file(inputId, fileIndex);
    if (inputFile) {
        read_text_file_and_then(inputFile, proc);
    } else {
        console.warn('read_text_file_from_file_input_and_then: no input file at index?');
    }
}
function read_text_file_from_file_input_and_set_element_text(inputId, fileIndex, textId) {
    const element = document.getElementById(textId);
    if (element) {
        read_text_file_from_file_input_and_then(inputId, fileIndex, (text)=>element.textContent = text);
    }
}
function read_json_file_and_then(jsonFile, proc) {
    read_text_file_and_then(jsonFile, (jsonText)=>proc(JSON.parse(jsonText)));
}
function load_utf8(url) {
    return fetch(url, {
        cache: 'no-cache'
    }).then(handle_fetch_error).then((response)=>response.text()).catch((reason)=>`load_utf8: ${url}: ${reason}`);
}
function handle_fetch_error(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export { url_append_timestamp as url_append_timestamp };
export { fetch_extract_then_else as fetch_extract_then_else };
export { load_and_extract_and_then as load_and_extract_and_then };
export { load_utf8_and_then as load_utf8_and_then };
export { load_json_and_then as load_json_and_then };
export { load_arraybuffer_and_then as load_arraybuffer_and_then };
export { read_text_file_and_then as read_text_file_and_then };
export { get_file_input_file as get_file_input_file };
export { read_text_file_from_file_input_and_then as read_text_file_from_file_input_and_then };
export { read_text_file_from_file_input_and_set_element_text as read_text_file_from_file_input_and_set_element_text };
export { read_json_file_and_then as read_json_file_and_then };
export { load_utf8 as load_utf8 };
export { handle_fetch_error as handle_fetch_error };
function local_storage_keys() {
    const arrayLength = localStorage.length;
    const answer = Array(arrayLength);
    for(let i = 0; i < arrayLength; i++){
        const key = localStorage.key(i);
        if (key) {
            answer[i] = key;
        } else {
            console.warn('local_storage_keys: null key?');
        }
    }
    return answer;
}
function local_storage_delete_matching(predicate) {
    local_storage_keys().forEach((entry)=>predicate(entry) ? localStorage.removeItem(entry) : null);
}
const userPrograms = {
    programs: {},
    storage_key: ''
};
function user_program_menu_init(selectId, set_program) {
    const stored = localStorage.getItem(userPrograms.storage_key);
    userPrograms.programs = stored ? JSON.parse(stored) : {};
    select_on_change(selectId, (_menuElement, programName)=>set_program(userPrograms.programs[programName]));
    select_add_keys_as_options(selectId, Object.keys(userPrograms.programs));
}
function user_program_save_to(selectId, program_text, with_prompt) {
    const timeStamp = new Date().toISOString();
    const programName = with_prompt ? window.prompt('Set program name', timeStamp) : timeStamp;
    if (programName) {
        userPrograms.programs[programName] = program_text;
        localStorage.setItem(userPrograms.storage_key, JSON.stringify(userPrograms.programs));
        select_add_option_at_id(selectId, programName, programName);
    }
}
function user_program_clear(selectId) {
    if (window.confirm("Clear user program storage?")) {
        select_clear_from(selectId, 1);
        localStorage.removeItem(userPrograms.storage_key);
    }
}
function user_storage_sync(selectId) {
    localStorage.setItem(userPrograms.storage_key, JSON.stringify(userPrograms.programs));
    select_clear_from(selectId, 1);
    select_add_keys_as_options(selectId, Object.keys(userPrograms.programs));
}
function user_program_read_archive(inputId, selectId) {
    const fileInput = document.getElementById(inputId);
    const fileList = fileInput.files;
    const jsonFile = fileList[0];
    if (fileInput && fileList && jsonFile) {
        consoleDebug(`user_program_read_archive: ${jsonFile}`);
        read_json_file_and_then(jsonFile, function(obj) {
            consoleDebug(`user_program_read_archive: ${obj}`);
            Object.assign(userPrograms.programs, obj);
            user_storage_sync(selectId);
        });
    } else {
        console.error('user_program_read_archive');
    }
}
function user_backup() {
    navigator.clipboard.writeText(JSON.stringify(userPrograms.programs));
}
function user_action_do(actionName, selectId, inputId) {
    switch(actionName){
        case 'userBackup':
            user_backup();
            return true;
        case 'userClear':
            user_program_clear(selectId);
            return true;
        case 'userRestore':
            click_input(inputId);
            return true;
        default:
            return false;
    }
}
export { local_storage_keys as local_storage_keys };
export { local_storage_delete_matching as local_storage_delete_matching };
export { userPrograms as userPrograms };
export { user_program_menu_init as user_program_menu_init };
export { user_program_save_to as user_program_save_to };
export { user_program_clear as user_program_clear };
export { user_storage_sync as user_storage_sync };
export { user_program_read_archive as user_program_read_archive };
export { user_backup as user_backup };
export { user_action_do as user_action_do };
function isNull(aValue) {
    return aValue === null;
}
function isUndefined(aValue) {
    return aValue === undefined;
}
function nullFix(message, inputValue, defaultValue) {
    if (isNull(inputValue) || isUndefined(inputValue)) {
        console.warn(`nullFix: ${message}: input = ${inputValue}, default = ${defaultValue}`);
        return defaultValue;
    } else {
        return inputValue;
    }
}
export { isNull as isNull };
export { isUndefined as isUndefined };
export { nullFix as nullFix };
function isNumber(aValue) {
    return typeof aValue === 'number';
}
const pi = Math.PI;
const inf = Infinity;
function randomInteger(minNumber, maxNumber) {
    const min = Math.ceil(minNumber);
    const max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min) + min);
}
function randomIntegerInclusive(minNumber, maxNumber) {
    const min = Math.ceil(minNumber);
    const max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function randomBoolean() {
    return Math.random() > 0.5;
}
function numberTimesRepeat(count, proc) {
    for(let i = 0; i < count; i++){
        proc();
    }
}
function numberToString(aNumber) {
    return Number(aNumber).toString();
}
export { isNumber as isNumber };
export { pi as pi };
export { inf as inf };
export { randomInteger as randomInteger };
export { randomIntegerInclusive as randomIntegerInclusive };
export { randomFloat as randomFloat };
export { randomBoolean as randomBoolean };
export { numberTimesRepeat as numberTimesRepeat };
export { numberToString as numberToString };
function isObject(aValue) {
    const typeString = typeof aValue;
    return typeString === 'function' || typeString === 'object' && !!aValue;
}
function objectHasKey(anObject, aKey) {
    return anObject[aKey] !== undefined;
}
function objectCopyAllKeysFromTo(sourceObject, destinationObject) {
    Object.keys(sourceObject).forEach(function(key) {
        destinationObject[key] = sourceObject[key];
    });
}
export { isObject as isObject };
export { objectHasKey as objectHasKey };
export { objectCopyAllKeysFromTo as objectCopyAllKeysFromTo };
function isSet(aValue) {
    if (aValue && typeof aValue === 'object') {
        return aValue.toString() === '[object Set]';
    } else {
        return false;
    }
}
function setNew() {
    return new Set();
}
function setFromArray(anArray) {
    return new Set(anArray);
}
function setAdd(aSet, aValue) {
    aSet.add(aValue);
}
function setIncludes(aSet, aValue) {
    return aSet.has(aValue);
}
function setAsArray(aSet) {
    return Array.from(aSet);
}
export { isSet as isSet };
export { setNew as setNew };
export { setFromArray as setFromArray };
export { setAdd as setAdd };
export { setIncludes as setIncludes };
export { setAsArray as setAsArray };
function isString(aValue) {
    return typeof aValue === 'string';
}
function stringIsPrefixOf(aPrefix, aString) {
    return aString.slice(0, aPrefix.length) === aPrefix;
}
function stringLines(aString) {
    return aString.split('\n');
}
function stringNonEmptyLines(aString) {
    return aString.split('\n').filter((each)=>each.length > 0);
}
function stringSplitOn(aString, aDelimiter) {
    return aString.split(aDelimiter);
}
function stringUnlines(anArray) {
    return anArray.join('\n');
}
function stringAppend(lhs, rhs) {
    return lhs + rhs;
}
function stringToCharCodeArray(aString) {
    const answer = [];
    for(let i = 0; i < aString.length; i++){
        answer.push(aString.charCodeAt(i));
    }
    return answer;
}
function stringCapitalizeFirstLetter(aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1);
}
function stringIsEmpty(aString) {
    return aString.length === 0;
}
export { isString as isString };
export { stringIsPrefixOf as stringIsPrefixOf };
export { stringLines as stringLines };
export { stringNonEmptyLines as stringNonEmptyLines };
export { stringSplitOn as stringSplitOn };
export { stringUnlines as stringUnlines };
export { stringAppend as stringAppend };
export { stringToCharCodeArray as stringToCharCodeArray };
export { stringCapitalizeFirstLetter as stringCapitalizeFirstLetter };
export { stringIsEmpty as stringIsEmpty };
function websocket_open(host, port) {
    try {
        const ws_address = `ws://${host}:${Number(port).toString()}`;
        return new WebSocket(ws_address);
    } catch (error) {
        console.error(`websocket_open: error = ${error}`);
        return null;
    }
}
function websocket_address_dialog(receiveAddress) {
    const reply = window.prompt('Set WebSocket address as Host:Port', 'localhost:9160');
    if (reply) {
        const [host, port] = reply.split(':');
        receiveAddress(host, Number(port));
    }
}
function websocket_send(websocket, data) {
    if (websocket && websocket.readyState === 1) {
        websocket.send(data);
    } else {
        console.warn('websocket_send: websocket nil or not ready?');
    }
}
function websocket_send_string(websocket, data) {
    return websocket_send(websocket, data);
}
function websocket_send_binary(websocket, data) {
    return websocket_send(websocket, data);
}
function websocket_close(websocket) {
    if (websocket) {
        websocket.close();
    } else {
        console.warn('websocket_close: websocket nil?');
    }
}
export { websocket_open as websocket_open };
export { websocket_address_dialog as websocket_address_dialog };
export { websocket_send as websocket_send };
export { websocket_send_string as websocket_send_string };
export { websocket_send_binary as websocket_send_binary };
export { websocket_close as websocket_close };
function counterNewFromBy(start, by) {
    let x = start;
    return function() {
        x = x + by;
        return x;
    };
}
function counterNew() {
    return counterNewFromBy(0, 1);
}
export { counterNewFromBy as counterNewFromBy };
export { counterNew as counterNew };
function column_index_to_letter(column_index) {
    if (isNumber(column_index)) {
        const column_letter = String.fromCharCode(column_index + 97);
        return column_letter;
    } else {
        console.error(`column_index_to_letter: not a number: ${column_index}`);
        return '?';
    }
}
function column_letter_to_index(column_letter) {
    if (isString(column_letter)) {
        const column_index = column_letter.charCodeAt(0) - 97;
        return column_index;
    } else {
        console.error(`column_letter_to_index: not a string: ${column_letter}`);
        return -1;
    }
}
function cellref_to_linear_index(number_of_columns, column_letter, row_number) {
    const column_index = column_letter_to_index(column_letter);
    return (row_number - 1) * number_of_columns + column_index;
}
function all_cellref_do(number_of_columns, number_of_rows, proc) {
    for(let row_number = 1; row_number <= number_of_rows; row_number++){
        for(let column_index = 0; column_index < number_of_columns; column_index++){
            const column_letter = column_index_to_letter(column_index);
            proc(column_letter, row_number);
        }
    }
}
export { column_index_to_letter as column_index_to_letter };
export { column_letter_to_index as column_letter_to_index };
export { cellref_to_linear_index as cellref_to_linear_index };
export { all_cellref_do as all_cellref_do };
function fromMaybe(aMaybe, defaultValue) {
    if (aMaybe === null) {
        return defaultValue;
    } else {
        return aMaybe;
    }
}
export { fromMaybe as fromMaybe };
function oscData(oscType, oscValue) {
    return {
        type: oscType,
        value: oscValue
    };
}
function oscInt32(x) {
    return oscData('i', x);
}
function oscFloat(x) {
    return oscData('f', x);
}
function oscString(x) {
    return oscData('s', x);
}
function oscBlob(x) {
    return oscData('b', x);
}
export { oscData as oscData };
export { oscInt32 as oscInt32 };
export { oscFloat as oscFloat };
export { oscString as oscString };
export { oscBlob as oscBlob };
function isQueue(aValue) {
    return aValue.typeString === 'queue';
}
function queueNew() {
    return {
        typeString: 'queue',
        queue: []
    };
}
function queuePush(aQueue, aValue) {
    aQueue.queue.push(aValue);
}
function queuePop(aQueue) {
    return aQueue.queue.pop();
}
function queueAsArray(aQueue) {
    return aQueue.queue;
}
export { isQueue as isQueue };
export { queueNew as queueNew };
export { queuePush as queuePush };
export { queuePop as queuePop };
export { queueAsArray as queueAsArray };
function audiobuffer_header(audioBuffer) {
    const answer = dictionaryNew();
    answer.length = audioBuffer.length;
    answer.duration = audioBuffer.duration;
    answer.sampleRate = audioBuffer.sampleRate;
    answer.numberOfChannels = audioBuffer.numberOfChannels;
    return answer;
}
function audiobuffer_number_of_samples(audioBuffer) {
    return audioBuffer.length * audioBuffer.numberOfChannels;
}
function audiobuffer_channel_data_array(audioBuffer) {
    return arrayIota(audioBuffer.numberOfChannels).map((i)=>audioBuffer.getChannelData(i));
}
function interleave_sample_data(numberOfFrames, numberOfChannels, channelsArray, outputArray) {
    for(let i = 0; i < numberOfFrames; i++){
        for(let j = 0; j < numberOfChannels; j++){
            outputArray[i * numberOfChannels + j] = channelsArray[j][i];
        }
    }
}
function audiobuffer_interleaved_channel_data(audioBuffer) {
    if (audioBuffer.numberOfChannels === 1) {
        return audioBuffer.getChannelData(0);
    } else {
        const channelsArray = arrayIota(audioBuffer.numberOfChannels).map((i)=>audioBuffer.getChannelData(i));
        const outputArray = new Float32Array(audioBuffer.length * audioBuffer.numberOfChannels);
        interleave_sample_data(audioBuffer.length, audioBuffer.numberOfChannels, channelsArray, outputArray);
        return outputArray;
    }
}
function audiobuffer_maximum_absolute_value_and_frame_number_of(audioBuffer) {
    const channelsArray = arrayIota(audioBuffer.numberOfChannels).map((i)=>audioBuffer.getChannelData(i));
    let maximumValue = 0;
    let frameNumber = 0;
    for(let i = 0; i < audioBuffer.length; i++){
        for(let j = 0; j < audioBuffer.numberOfChannels; j++){
            const nextValue = Math.abs(channelsArray[j][i]);
            if (nextValue > maximumValue) {
                maximumValue = nextValue;
                frameNumber = i;
            }
        }
    }
    return [
        maximumValue,
        frameNumber
    ];
}
function system_samplerate() {
    const audioContext = new window.AudioContext();
    console.log('audioContext.sampleRate', audioContext.sampleRate);
    return audioContext.sampleRate;
}
function fetch_soundfile_to_audiobuffer_and_then(soundFileUrl, proc) {
    const audioContext = new window.AudioContext();
    load_arraybuffer_and_then(soundFileUrl, function(arrayBuffer) {
        audioContext.decodeAudioData(arrayBuffer).then(proc);
    });
}
export { audiobuffer_header as audiobuffer_header };
export { audiobuffer_number_of_samples as audiobuffer_number_of_samples };
export { audiobuffer_channel_data_array as audiobuffer_channel_data_array };
export { interleave_sample_data as interleave_sample_data };
export { audiobuffer_interleaved_channel_data as audiobuffer_interleaved_channel_data };
export { audiobuffer_maximum_absolute_value_and_frame_number_of as audiobuffer_maximum_absolute_value_and_frame_number_of };
export { system_samplerate as system_samplerate };
export { fetch_soundfile_to_audiobuffer_and_then as fetch_soundfile_to_audiobuffer_and_then };
function treeVisit(aTree, visitFunction) {
    if (isArray(aTree)) {
        aTree.forEach((item)=>treeVisit(item, visitFunction));
    } else {
        visitFunction(aTree);
    }
}
function treeFlattenIntoArray(aTree, anArray) {
    treeVisit(aTree, (item)=>anArray.push(item));
}
function treeFlatten(aTree) {
    const anArray = [];
    treeFlattenIntoArray(aTree, anArray);
    return anArray;
}
function treeDepthFrom(aTree, depth) {
    if (isArray(aTree)) {
        return arrayMaxItem(arrayMap((item)=>treeDepthFrom(item, depth + 1), aTree));
    } else {
        return depth;
    }
}
function treeDepth(aTree) {
    return treeDepthFrom(aTree, 0);
}
function treeRank(aTree) {
    return isArray(aTree) ? 1 + treeRank(aTree[0]) : 0;
}
function treeShape(aTree) {
    return isArray(aTree) ? arrayAppend([
        arraySize(aTree)
    ], treeShape(aTree[0])) : [];
}
function forestFlatten(aForest) {
    return treeFlatten(aForest);
}
function forestEq(lhs, rhs) {
    if (lhs === rhs) {
        return true;
    }
    if (!isArray(rhs) || lhs.length !== rhs.length) {
        return false;
    }
    for(let i = 0; i < lhs.length; i++){
        if (isArray(lhs[i])) {
            if (!forestEq(lhs[i], rhs[i])) {
                return false;
            }
        } else {
            if (lhs[i] !== rhs[i]) {
                return false;
            }
        }
    }
    return true;
}
export { treeVisit as treeVisit };
export { treeFlattenIntoArray as treeFlattenIntoArray };
export { treeFlatten as treeFlatten };
export { treeDepthFrom as treeDepthFrom };
export { treeDepth as treeDepth };
export { treeRank as treeRank };
export { treeShape as treeShape };
export { forestFlatten as forestFlatten };
export { forestEq as forestEq };
function isUint8Array(aValue) {
    return aValue instanceof Uint8Array;
}
function uint8ArrayIntoQueue(u8Array, numberQueue) {
    u8Array.forEach((aNumber)=>queuePush(numberQueue, aNumber));
}
function flattenByteEncodingIntoQueue(aTree, numberQueue) {
    treeVisit(aTree, (item)=>uint8ArrayIntoQueue(item, numberQueue));
}
function flattenByteEncoding(aTree) {
    const numberQueue = queueNew();
    flattenByteEncodingIntoQueue(aTree, numberQueue);
    return new Uint8Array(queueAsArray(numberQueue));
}
export { isUint8Array as isUint8Array };
export { uint8ArrayIntoQueue as uint8ArrayIntoQueue };
export { flattenByteEncodingIntoQueue as flattenByteEncodingIntoQueue };
export { flattenByteEncoding as flattenByteEncoding };
const rateIr = 0;
const rateKr = 1;
const rateAr = 2;
const rateDr = 3;
const rateSelectorTable = {
    0: 'ir',
    1: 'kr',
    2: 'ar',
    3: 'dr'
};
function rateSelector(aRate) {
    return rateSelectorTable[String(aRate)];
}
export { rateIr as rateIr };
export { rateKr as rateKr };
export { rateAr as rateAr };
export { rateDr as rateDr };
export { rateSelectorTable as rateSelectorTable };
export { rateSelector as rateSelector };
const unaryOperators = {
    Neg: 0,
    Not: 1,
    IsNil: 2,
    NotNil: 3,
    BitNot: 4,
    Abs: 5,
    AsFloat: 6,
    AsInt: 7,
    Ceil: 8,
    Floor: 9,
    Frac: 10,
    Sign: 11,
    Squared: 12,
    Cubed: 13,
    Sqrt: 14,
    Exp: 15,
    Recip: 16,
    MidiCps: 17,
    CpsMidi: 18,
    MidiRatio: 19,
    RatioMidi: 20,
    DbAmp: 21,
    AmpDb: 22,
    OctCps: 23,
    CpsOct: 24,
    Log: 25,
    Log2: 26,
    Log10: 27,
    Sin: 28,
    Cos: 29,
    Tan: 30,
    ArcSin: 31,
    ArcCos: 32,
    ArcTan: 33,
    SinH: 34,
    CosH: 35,
    TanH: 36,
    Rand_: 37,
    Rand2_: 38,
    LinRand_: 39,
    BiLinRand: 40,
    Sum3Rand: 41,
    Distort: 42,
    SoftClip: 43,
    Coin: 44,
    DigitValue: 45,
    Silence: 46,
    Thru: 47,
    RectWindow: 48,
    HanWindow: 49,
    WelchWindow: 50,
    TriWindow: 51,
    Ramp_: 52,
    Scurve: 53
};
const binaryOperators = {
    Add: 0,
    Sub: 1,
    Mul: 2,
    Idiv: 3,
    Fdiv: 4,
    Mod: 5,
    Eq: 6,
    Ne: 7,
    Lt: 8,
    Gt: 9,
    Le: 10,
    Ge: 11,
    Min: 12,
    Max: 13,
    BitAnd: 14,
    BitOr: 15,
    BitXor: 16,
    Lcm: 17,
    Gcd: 18,
    RoundTo: 19,
    RoundUp: 20,
    Trunc: 21,
    Atan2: 22,
    Hypot: 23,
    Hypotx: 24,
    Pow: 25,
    ShiftLeft: 26,
    ShiftRight: 27,
    UnsignedShift: 28,
    Fill: 29,
    Ring1: 30,
    Ring2: 31,
    Ring3: 32,
    Ring4: 33,
    DifSqr: 34,
    SumSqr: 35,
    SqrSum: 36,
    SqrDif: 37,
    AbsDif: 38,
    Thresh: 39,
    AmClip: 40,
    ScaleNeg: 41,
    Clip2: 42,
    Excess: 43,
    Fold2: 44,
    Wrap2: 45,
    FirstArg: 46,
    RandRange: 47,
    ExpRandRange: 48
};
function unaryOperatorName(specialIndex) {
    return Object.keys(unaryOperators).find((key)=>unaryOperators[key] === specialIndex) || 'unknown unary operator name?';
}
function binaryOperatorName(specialIndex) {
    return Object.keys(binaryOperators).find((key)=>binaryOperators[key] === specialIndex) || 'unknown binary operator name?';
}
export { unaryOperators as unaryOperators };
export { binaryOperators as binaryOperators };
export { unaryOperatorName as unaryOperatorName };
export { binaryOperatorName as binaryOperatorName };
const ugenCounter = counterNew();
class ScUgen {
    name;
    numChan;
    rate;
    specialIndex;
    id;
    inputArray;
    mrg;
    constructor(name, numChan, rate, specialIndex, inputArray){
        this.name = name;
        this.numChan = numChan;
        this.rate = rate;
        this.specialIndex = specialIndex;
        this.id = ugenCounter();
        this.inputArray = inputArray;
        this.mrg = setNew();
    }
}
function isScUgen(aValue) {
    return aValue instanceof ScUgen;
}
function isScUgenByName(aValue) {
    return isObject(aValue) && aValue.constructor.name == 'ScUgen';
}
function scUgenCompare(i, j) {
    return i.id - j.id;
}
const nilPort = -1;
class Ugen {
    scUgen;
    port;
    constructor(scUgen, port){
        this.scUgen = scUgen;
        this.port = port;
    }
}
function isUgen(aValue) {
    return aValue instanceof Ugen;
}
function isUgenByName(aValue) {
    return isObject(aValue) && aValue.constructor.name == 'Ugen';
}
function isUgenInput(aValue) {
    return isNumber(aValue) || isUgen(aValue);
}
function isSignal(aValue) {
    return isUgenInput(aValue) || isArray(aValue) && arrayEvery(aValue, isSignal);
}
function isOutputSignal(aValue) {
    return isUgen(aValue) || isArray(aValue) && arrayEvery(aValue, isUgen);
}
function inputBranch(input, onUgen, onNumber, onError) {
    if (isUgen(input)) {
        return onUgen(input);
    } else if (isNumber(input)) {
        return onNumber(input);
    } else {
        throwError(`inputBranch: unknown input type: ${input}, ${typeof input}, ${isUgen(input)}, ${isNumber(input)}`);
        return onError();
    }
}
function inputRate(input) {
    consoleDebug(`inputRate: ${input}`);
    return inputBranch(input, (port)=>port.scUgen.rate, (_unusedNumber)=>0, ()=>-1);
}
function deriveRate(rateOrFilterUgenInputs, inputArray) {
    consoleDebug(`deriveRate: ${rateOrFilterUgenInputs} ${inputArray}`);
    if (isNumber(rateOrFilterUgenInputs)) {
        return rateOrFilterUgenInputs;
    } else {
        return arrayMaxItem(arrayMap(inputRate, arrayAtIndices(inputArray, rateOrFilterUgenInputs)));
    }
}
function requiresMce(inputs) {
    return arrayContainsArray(inputs);
}
function mceInputTransform(aSignal) {
    return arrayTranspose(arrayExtendToBeOfEqualSize(aSignal));
}
function makeUgen(name, numChan, rateSpec, specialIndex, signalArray) {
    consoleDebug(`makeUgen: ${name} ${numChan} ${rateSpec} ${specialIndex} ${signalArray}`);
    if (requiresMce(signalArray)) {
        return arrayMap((item)=>makeUgen(name, numChan, rateSpec, specialIndex, item), mceInputTransform(signalArray));
    } else {
        const inputArray = signalArray;
        const scUgen = new ScUgen(name, numChan, deriveRate(rateSpec, inputArray), specialIndex, inputArray);
        switch(numChan){
            case 0:
                return new Ugen(scUgen, nilPort);
            case 1:
                return new Ugen(scUgen, 0);
            default:
                return arrayFillWithIndex(numChan, (item)=>new Ugen(scUgen, item));
        }
    }
}
function ugenDisplayName(ugen) {
    switch(ugen.name){
        case 'UnaryOpUGen':
            return unaryOperatorName(ugen.specialIndex);
        case 'BinaryOpUGen':
            return binaryOperatorName(ugen.specialIndex);
        default:
            return ugen.name;
    }
}
function inputFirstUgen(input) {
    if (isArray(input)) {
        consoleDebug(`inputFirstUgen: array: ${input}`);
        return arrayFind(arrayMap(inputFirstUgen, input), isScUgen) || null;
    } else if (isUgen(input)) {
        consoleDebug(`inputFirstUgen: port: ${input}`);
        return input.scUgen;
    } else {
        consoleDebug(`inputFirstUgen: number: ${input}`);
        return null;
    }
}
function mrg(lhs, rhs) {
    const ugen = inputFirstUgen(lhs);
    consoleDebug(`mrg: ${lhs}, ${rhs}, ${ugen}`);
    if (ugen && ugen.mrg) {
        if (isArray(rhs)) {
            const mrgSet = ugen.mrg;
            arrayForEach(rhs, (item)=>setAdd(mrgSet, item));
        } else {
            setAdd(ugen.mrg, rhs);
        }
    } else {
        throwError(`mrg: no ugen or ugen.mrg is null: ${lhs}, ${rhs}`);
    }
    return lhs;
}
function krMutateInPlace(input) {
    if (isUgen(input)) {
        const inputPort = input;
        consoleDebug(`kr: port: ${inputPort}`);
        krMutateInPlace(inputPort.scUgen);
    } else if (isScUgen(input)) {
        const inputUgen = input;
        consoleDebug(`kr: ugen: ${inputUgen}`);
        if (inputUgen.rate === 2) {
            inputUgen.rate = rateKr;
        }
        arrayForEach(inputUgen.inputArray, (item)=>krMutateInPlace(item));
    } else if (isArray(input)) {
        consoleDebug(`kr: array: ${input}`);
        arrayForEach(input, (item)=>krMutateInPlace(item));
    } else {
        if (!isNumber(input)) {
            throwError(`krMutateInPlace: ${input}`);
        }
    }
}
function kr(input) {
    krMutateInPlace(input);
    return input;
}
function UnaryOpWithConstantOptimiser(specialIndex, input) {
    if (isNumber(input)) {
        switch(specialIndex){
            case 0:
                return 0 - input;
            case 5:
                return Math.abs(input);
            case 8:
                return Math.ceil(input);
            case 9:
                return Math.floor(input);
            case 12:
                return input * input;
            case 13:
                return input * input * input;
            case 14:
                return Math.sqrt(input);
            case 16:
                return 1 / input;
            case 28:
                return Math.sin(input);
            case 29:
                return Math.cos(input);
            case 30:
                return Math.tan(input);
        }
    }
    return makeUgen('UnaryOpUGen', 1, [
        0
    ], specialIndex, [
        input
    ]);
}
function isArrayConstant(aValue) {
    return isArray(aValue) && arrayEvery(aValue, isNumber);
}
function UnaryOp(specialIndex, input) {
    if (isArray(input) && arrayEvery(input, isNumber)) {
        return arrayMap((item)=>UnaryOpWithConstantOptimiser(specialIndex, item), input);
    } else {
        return UnaryOpWithConstantOptimiser(specialIndex, input);
    }
}
function BinaryOpWithConstantOptimiser(specialIndex, lhs, rhs) {
    if (isNumber(lhs) && isNumber(rhs)) {
        switch(specialIndex){
            case 0:
                return lhs + rhs;
            case 1:
                return lhs - rhs;
            case 2:
                return lhs * rhs;
            case 4:
                return lhs / rhs;
        }
    }
    return makeUgen('BinaryOpUGen', 1, [
        0,
        1
    ], specialIndex, [
        lhs,
        rhs
    ]);
}
function BinaryOp(specialIndex, lhs, rhs) {
    if (isArray(lhs) || isArray(rhs)) {
        const expanded = mceInputTransform([
            asArray(lhs),
            asArray(rhs)
        ]);
        consoleDebug(`BinaryOp: array constant: ${expanded}`);
        return arrayMap((item)=>BinaryOpWithConstantOptimiser(specialIndex, item[0], item[1]), expanded);
    } else {
        return BinaryOpWithConstantOptimiser(specialIndex, lhs, rhs);
    }
}
function isOutUgen(aValue) {
    return isUgen(aValue) && aValue.scUgen.name == 'Out';
}
function isControlRateUgen(aValue) {
    return isUgenInput(aValue) && inputRate(aValue) == 1;
}
function signalSize(aSignal) {
    if (isArray(aSignal)) {
        return arraySize(aSignal);
    } else {
        return 1;
    }
}
export { ScUgen as ScUgen };
export { isScUgen as isScUgen };
export { isScUgenByName as isScUgenByName };
export { scUgenCompare as scUgenCompare };
export { nilPort as nilPort };
export { Ugen as Ugen };
export { isUgen as isUgen };
export { isUgenByName as isUgenByName };
export { isUgenInput as isUgenInput };
export { isSignal as isSignal };
export { isOutputSignal as isOutputSignal };
export { inputBranch as inputBranch };
export { inputRate as inputRate };
export { deriveRate as deriveRate };
export { requiresMce as requiresMce };
export { mceInputTransform as mceInputTransform };
export { makeUgen as makeUgen };
export { ugenDisplayName as ugenDisplayName };
export { inputFirstUgen as inputFirstUgen };
export { mrg as mrg };
export { krMutateInPlace as krMutateInPlace };
export { kr as kr };
export { UnaryOpWithConstantOptimiser as UnaryOpWithConstantOptimiser };
export { isArrayConstant as isArrayConstant };
export { UnaryOp as UnaryOp };
export { BinaryOpWithConstantOptimiser as BinaryOpWithConstantOptimiser };
export { BinaryOp as BinaryOp };
export { isOutUgen as isOutUgen };
export { isControlRateUgen as isControlRateUgen };
export { signalSize as signalSize };
function AllpassC(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('AllpassC', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function AllpassL(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('AllpassL', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function AllpassN(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('AllpassN', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function AmpComp(freq, root, exp) {
    return makeUgen('AmpComp', 1, 2, 0, [
        freq,
        root,
        exp
    ]);
}
function AmpCompA(freq, root, minAmp, rootAmp) {
    return makeUgen('AmpCompA', 1, 2, 0, [
        freq,
        root,
        minAmp,
        rootAmp
    ]);
}
function Amplitude(input, attackTime, releaseTime) {
    return makeUgen('Amplitude', 1, 2, 0, [
        input,
        attackTime,
        releaseTime
    ]);
}
function Balance2(left, right, pos, level) {
    return makeUgen('Balance2', 2, [
        0,
        1
    ], 0, [
        left,
        right,
        pos,
        level
    ]);
}
function BBandPass(input, freq, bw) {
    return makeUgen('BBandPass', 1, [
        0
    ], 0, [
        input,
        freq,
        bw
    ]);
}
function BBandStop(input, freq, bw) {
    return makeUgen('BBandStop', 1, [
        0
    ], 0, [
        input,
        freq,
        bw
    ]);
}
function BHiPass(input, freq, rq) {
    return makeUgen('BHiPass', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function Blip(freq, numharm) {
    return makeUgen('Blip', 1, 2, 0, [
        freq,
        numharm
    ]);
}
function BlockSize() {
    return makeUgen('BlockSize', 1, 0, 0, []);
}
function BLowPass(input, freq, rq) {
    return makeUgen('BLowPass', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function BPeakEq(input, freq, rq, db) {
    return makeUgen('BPeakEQ', 1, [
        0
    ], 0, [
        input,
        freq,
        rq,
        db
    ]);
}
function Bpf(input, freq, rq) {
    return makeUgen('BPF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function Bpz2(input) {
    return makeUgen('BPZ2', 1, [
        0
    ], 0, [
        input
    ]);
}
function Brf(input, freq, rq) {
    return makeUgen('BRF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function Brz2(input) {
    return makeUgen('BRZ2', 1, [
        0
    ], 0, [
        input
    ]);
}
function BrownNoise() {
    return makeUgen('BrownNoise', 1, 2, 0, []);
}
function BufDur(bufnum) {
    return makeUgen('BufDur', 1, 1, 0, [
        bufnum
    ]);
}
function BufFrames(bufnum) {
    return makeUgen('BufFrames', 1, 1, 0, [
        bufnum
    ]);
}
function BufRateScale(bufnum) {
    return makeUgen('BufRateScale', 1, 1, 0, [
        bufnum
    ]);
}
function BufRd(numChan, bufnum, phase, loop, interpolation) {
    return makeUgen('BufRd', numChan, 2, 0, [
        bufnum,
        phase,
        loop,
        interpolation
    ]);
}
function BufSampleRate(bufnum) {
    return makeUgen('BufSampleRate', 1, 1, 0, [
        bufnum
    ]);
}
function BufWr(bufnum, phase, loop, inputArray) {
    return makeUgen('BufWr', 1, [
        3
    ], 0, arrayConcat([
        bufnum,
        phase,
        loop
    ], asArray(inputArray)));
}
function ClearBuf(buf) {
    return makeUgen('ClearBuf', 1, 0, 0, [
        buf
    ]);
}
function Clip(input, lo, hi) {
    return makeUgen('Clip', 1, [
        0
    ], 0, [
        input,
        lo,
        hi
    ]);
}
function ClipNoise() {
    return makeUgen('ClipNoise', 1, 2, 0, []);
}
function CoinGate(prob, input) {
    return makeUgen('CoinGate', 1, [
        1
    ], 0, [
        prob,
        input
    ]);
}
function CombC(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('CombC', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function CombL(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('CombL', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function CombN(input, maxdelaytime, delaytime, decaytime) {
    return makeUgen('CombN', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime,
        decaytime
    ]);
}
function Compander(input, control, thresh, slopeBelow, slopeAbove, clampTime, relaxTime) {
    return makeUgen('Compander', 1, [
        0
    ], 0, [
        input,
        control,
        thresh,
        slopeBelow,
        slopeAbove,
        clampTime,
        relaxTime
    ]);
}
function ControlDur() {
    return makeUgen('ControlDur', 1, 0, 0, []);
}
function ControlRate() {
    return makeUgen('ControlRate', 1, 0, 0, []);
}
function Convolution(input, kernel, framesize) {
    return makeUgen('Convolution', 1, 2, 0, [
        input,
        kernel,
        framesize
    ]);
}
function Crackle(chaosParam) {
    return makeUgen('Crackle', 1, 2, 0, [
        chaosParam
    ]);
}
function CuspL(freq, a, b, xi) {
    return makeUgen('CuspL', 1, 2, 0, [
        freq,
        a,
        b,
        xi
    ]);
}
function CuspN(freq, a, b, xi) {
    return makeUgen('CuspN', 1, 2, 0, [
        freq,
        a,
        b,
        xi
    ]);
}
function Dbufrd(bufnum, phase, loop) {
    return makeUgen('Dbufrd', 1, 3, 0, [
        bufnum,
        phase,
        loop
    ]);
}
function Dbufwr(bufnum, phase, input, loop) {
    return makeUgen('Dbufwr', 1, 3, 0, [
        bufnum,
        phase,
        input,
        loop
    ]);
}
function Dc(input) {
    return makeUgen('DC', 1, 2, 0, [
        input
    ]);
}
function Decay(input, decayTime) {
    return makeUgen('Decay', 1, [
        0
    ], 0, [
        input,
        decayTime
    ]);
}
function Decay2(input, attackTime, decayTime) {
    return makeUgen('Decay2', 1, [
        0
    ], 0, [
        input,
        attackTime,
        decayTime
    ]);
}
function DegreeToKey(bufnum, input, octave) {
    return makeUgen('DegreeToKey', 1, [
        1
    ], 0, [
        bufnum,
        input,
        octave
    ]);
}
function Delay1(input) {
    return makeUgen('Delay1', 1, [
        0
    ], 0, [
        input
    ]);
}
function Delay2(input) {
    return makeUgen('Delay2', 1, [
        0
    ], 0, [
        input
    ]);
}
function DelayC(input, maxdelaytime, delaytime) {
    return makeUgen('DelayC', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime
    ]);
}
function DelayL(input, maxdelaytime, delaytime) {
    return makeUgen('DelayL', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime
    ]);
}
function DelayN(input, maxdelaytime, delaytime) {
    return makeUgen('DelayN', 1, [
        0
    ], 0, [
        input,
        maxdelaytime,
        delaytime
    ]);
}
function Demand(trig, reset, demandUGens) {
    return makeUgen('Demand', arrayLength(asArray(demandUGens)), [
        0
    ], 0, arrayConcat([
        trig,
        reset
    ], asArray(demandUGens)));
}
function DetectSilence(input, amp, time, doneAction) {
    return makeUgen('DetectSilence', 1, [
        0
    ], 0, [
        input,
        amp,
        time,
        doneAction
    ]);
}
function Dfm1(input, freq, res, inputgain, type, noiselevel) {
    return makeUgen('DFM1', 1, [
        0
    ], 0, [
        input,
        freq,
        res,
        inputgain,
        type,
        noiselevel
    ]);
}
function Diwhite(length, lo, hi) {
    return makeUgen('Diwhite', 1, 3, 0, [
        length,
        lo,
        hi
    ]);
}
function Drand(repeats, list) {
    return makeUgen('Drand', 1, 3, 0, arrayConcat([
        repeats
    ], asArray(list)));
}
function Dseq(repeats, list) {
    return makeUgen('Dseq', 1, 3, 0, arrayConcat([
        repeats
    ], asArray(list)));
}
function Dseries(length, start, step) {
    return makeUgen('Dseries', 1, 3, 0, [
        length,
        start,
        step
    ]);
}
function Dshuf(repeats, list) {
    return makeUgen('Dshuf', 1, 3, 0, arrayConcat([
        repeats
    ], asArray(list)));
}
function Dust(density) {
    return makeUgen('Dust', 1, 2, 0, [
        density
    ]);
}
function Dust2(density) {
    return makeUgen('Dust2', 1, 2, 0, [
        density
    ]);
}
function Duty(dur, reset, doneAction, level) {
    return makeUgen('Duty', 1, 2, 0, [
        dur,
        reset,
        doneAction,
        level
    ]);
}
function DwgPluckedStiff(freq, amp, gate, pos, c1, c3, inp, release, fB) {
    return makeUgen('DWGPluckedStiff', 1, 2, 0, [
        freq,
        amp,
        gate,
        pos,
        c1,
        c3,
        inp,
        release,
        fB
    ]);
}
function Dwhite(length, lo, hi) {
    return makeUgen('Dwhite', 1, 3, 0, [
        length,
        lo,
        hi
    ]);
}
function Dxrand(repeats, list) {
    return makeUgen('Dxrand', 1, 3, 0, arrayConcat([
        repeats
    ], asArray(list)));
}
function EnvGen(gate, levelScale, levelBias, timeScale, doneAction, envelope) {
    return makeUgen('EnvGen', 1, 2, 0, arrayConcat([
        gate,
        levelScale,
        levelBias,
        timeScale,
        doneAction
    ], asArray(envelope)));
}
function ExpRand(lo, hi) {
    return makeUgen('ExpRand', 1, 0, 0, [
        lo,
        hi
    ]);
}
function FbSineL(freq, im, fb, a, c, xi, yi) {
    return makeUgen('FBSineL', 1, 2, 0, [
        freq,
        im,
        fb,
        a,
        c,
        xi,
        yi
    ]);
}
function FbSineC(freq, im, fb, a, c, xi, yi) {
    return makeUgen('FBSineC', 1, 2, 0, [
        freq,
        im,
        fb,
        a,
        c,
        xi,
        yi
    ]);
}
function Fft(buffer, input, hop, wintype, active, winsize) {
    return makeUgen('FFT', 1, 1, 0, [
        buffer,
        input,
        hop,
        wintype,
        active,
        winsize
    ]);
}
function Fold(input, lo, hi) {
    return makeUgen('Fold', 1, [
        0
    ], 0, [
        input,
        lo,
        hi
    ]);
}
function Formant(fundfreq, formfreq, bwfreq) {
    return makeUgen('Formant', 1, 2, 0, [
        fundfreq,
        formfreq,
        bwfreq
    ]);
}
function Formlet(input, freq, attacktime, decaytime) {
    return makeUgen('Formlet', 1, [
        0
    ], 0, [
        input,
        freq,
        attacktime,
        decaytime
    ]);
}
function Fos(input, a0, a1, b1) {
    return makeUgen('FOS', 1, [
        0
    ], 0, [
        input,
        a0,
        a1,
        b1
    ]);
}
function FreqShift(input, freq, phase) {
    return makeUgen('FreqShift', 1, 2, 0, [
        input,
        freq,
        phase
    ]);
}
function FSinOsc(freq, iphase) {
    return makeUgen('FSinOsc', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function FreeVerb(input, mix, room, damp) {
    return makeUgen('FreeVerb', 1, [
        0
    ], 0, [
        input,
        mix,
        room,
        damp
    ]);
}
function FreeVerb2(input, in2, mix, room, damp) {
    return makeUgen('FreeVerb2', 2, [
        0
    ], 0, [
        input,
        in2,
        mix,
        room,
        damp
    ]);
}
function Gate(input, trig) {
    return makeUgen('Gate', 1, [
        0
    ], 0, [
        input,
        trig
    ]);
}
function Gendy1(ampdist, durdist, adparam, ddparam, minfreq, maxfreq, ampscale, durscale, initCPs, knum) {
    return makeUgen('Gendy1', 1, 2, 0, [
        ampdist,
        durdist,
        adparam,
        ddparam,
        minfreq,
        maxfreq,
        ampscale,
        durscale,
        initCPs,
        knum
    ]);
}
function GrainBuf(numChan, trigger, dur, sndbuf, rate, pos, interp, pan, envbufnum, maxGrains) {
    return makeUgen('GrainBuf', numChan, 2, 0, [
        trigger,
        dur,
        sndbuf,
        rate,
        pos,
        interp,
        pan,
        envbufnum,
        maxGrains
    ]);
}
function GrainFm(numChan, trigger, dur, carfreq, modfreq, index, pan, envbufnum, maxGrains) {
    return makeUgen('GrainFM', numChan, 2, 0, [
        trigger,
        dur,
        carfreq,
        modfreq,
        index,
        pan,
        envbufnum,
        maxGrains
    ]);
}
function GrainSin(numChan, trigger, dur, freq, pan, envbufnum, maxGrains) {
    return makeUgen('GrainSin', numChan, 2, 0, [
        trigger,
        dur,
        freq,
        pan,
        envbufnum,
        maxGrains
    ]);
}
function GrayNoise() {
    return makeUgen('GrayNoise', 1, 2, 0, []);
}
function GVerb(input, roomsize, revtime, damping, inputbw, spread, drylevel, earlyreflevel, taillevel, maxroomsize) {
    return makeUgen('GVerb', 2, [
        0
    ], 0, [
        input,
        roomsize,
        revtime,
        damping,
        inputbw,
        spread,
        drylevel,
        earlyreflevel,
        taillevel,
        maxroomsize
    ]);
}
function Hasher(input) {
    return makeUgen('Hasher', 1, [
        0
    ], 0, [
        input
    ]);
}
function HenonC(freq, a, b, x0, x1) {
    return makeUgen('HenonC', 1, 2, 0, [
        freq,
        a,
        b,
        x0,
        x1
    ]);
}
function HenonL(freq, a, b, x0, x1) {
    return makeUgen('HenonL', 1, 2, 0, [
        freq,
        a,
        b,
        x0,
        x1
    ]);
}
function HenonN(freq, a, b, x0, x1) {
    return makeUgen('HenonN', 1, 2, 0, [
        freq,
        a,
        b,
        x0,
        x1
    ]);
}
function Hpf(input, freq) {
    return makeUgen('HPF', 1, [
        0
    ], 0, [
        input,
        freq
    ]);
}
function Hpz1(input) {
    return makeUgen('HPZ1', 1, [
        0
    ], 0, [
        input
    ]);
}
function Hpz2(input) {
    return makeUgen('HPZ2', 1, [
        0
    ], 0, [
        input
    ]);
}
function Ifft(buffer, wintype, winsize) {
    return makeUgen('IFFT', 1, 2, 0, [
        buffer,
        wintype,
        winsize
    ]);
}
function Impulse(freq, phase) {
    return makeUgen('Impulse', 1, 2, 0, [
        freq,
        phase
    ]);
}
function In(numChan, bus) {
    return makeUgen('In', numChan, 2, 0, [
        bus
    ]);
}
function Index(bufnum, input) {
    return makeUgen('Index', 1, [
        1
    ], 0, [
        bufnum,
        input
    ]);
}
function IndexInBetween(bufnum, input) {
    return makeUgen('IndexInBetween', 1, [
        1
    ], 0, [
        bufnum,
        input
    ]);
}
function InFeedback(numChan, bus) {
    return makeUgen('InFeedback', numChan, 2, 0, [
        bus
    ]);
}
function InRange(input, lo, hi) {
    return makeUgen('InRange', 1, [
        0
    ], 0, [
        input,
        lo,
        hi
    ]);
}
function IRand(lo, hi) {
    return makeUgen('IRand', 1, 0, 0, [
        lo,
        hi
    ]);
}
function Integrator(input, coef) {
    return makeUgen('Integrator', 1, [
        0
    ], 0, [
        input,
        coef
    ]);
}
function K2A(input) {
    return makeUgen('K2A', 1, 2, 0, [
        input
    ]);
}
function Klang(freqscale, freqoffset, specificationsArrayRef) {
    return makeUgen('Klang', 1, 2, 0, arrayConcat([
        freqscale,
        freqoffset
    ], asArray(specificationsArrayRef)));
}
function Klank(input, freqscale, freqoffset, decayscale, specificationsArrayRef) {
    return makeUgen('Klank', 1, [
        0
    ], 0, arrayConcat([
        input,
        freqscale,
        freqoffset,
        decayscale
    ], asArray(specificationsArrayRef)));
}
function LfBrownNoise1(freq, dev, dist) {
    return makeUgen('LFBrownNoise1', 1, 2, 0, [
        freq,
        dev,
        dist
    ]);
}
function LfClipNoise(freq) {
    return makeUgen('LFClipNoise', 1, 2, 0, [
        freq
    ]);
}
function LfCub(freq, iphase) {
    return makeUgen('LFCub', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function LfdNoise1(freq) {
    return makeUgen('LFDNoise1', 1, 2, 0, [
        freq
    ]);
}
function LfdNoise3(freq) {
    return makeUgen('LFDNoise3', 1, 2, 0, [
        freq
    ]);
}
function LfGauss(duration, width, iphase, loop, doneAction) {
    return makeUgen('LFGauss', 1, 2, 0, [
        duration,
        width,
        iphase,
        loop,
        doneAction
    ]);
}
function LfNoise0(freq) {
    return makeUgen('LFNoise0', 1, 2, 0, [
        freq
    ]);
}
function LfNoise1(freq) {
    return makeUgen('LFNoise1', 1, 2, 0, [
        freq
    ]);
}
function LfNoise2(freq) {
    return makeUgen('LFNoise2', 1, 2, 0, [
        freq
    ]);
}
function LfPar(freq, iphase) {
    return makeUgen('LFPar', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function LfPulse(freq, iphase, width) {
    return makeUgen('LFPulse', 1, 2, 0, [
        freq,
        iphase,
        width
    ]);
}
function LfSaw(freq, iphase) {
    return makeUgen('LFSaw', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function LfTri(freq, iphase) {
    return makeUgen('LFTri', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function Lpf(input, freq) {
    return makeUgen('LPF', 1, [
        0
    ], 0, [
        input,
        freq
    ]);
}
function Lag(input, lagTime) {
    return makeUgen('Lag', 1, [
        0
    ], 0, [
        input,
        lagTime
    ]);
}
function LagUd(input, lagTimeU, lagTimeD) {
    return makeUgen('LagUD', 1, [
        0
    ], 0, [
        input,
        lagTimeU,
        lagTimeD
    ]);
}
function Lag2(input, lagTime) {
    return makeUgen('Lag2', 1, [
        0
    ], 0, [
        input,
        lagTime
    ]);
}
function Lag3(input, lagTime) {
    return makeUgen('Lag3', 1, [
        0
    ], 0, [
        input,
        lagTime
    ]);
}
function Lag3Ud(input, lagTimeU, lagTimeD) {
    return makeUgen('Lag3UD', 1, [
        0
    ], 0, [
        input,
        lagTimeU,
        lagTimeD
    ]);
}
function Latch(input, trig) {
    return makeUgen('Latch', 1, [
        0
    ], 0, [
        input,
        trig
    ]);
}
function LatoocarfianC(freq, a, b, c, d, xi, yi) {
    return makeUgen('LatoocarfianC', 1, 2, 0, [
        freq,
        a,
        b,
        c,
        d,
        xi,
        yi
    ]);
}
function LeakDc(input, coef) {
    return makeUgen('LeakDC', 1, [
        0
    ], 0, [
        input,
        coef
    ]);
}
function Limiter(input, level, dur) {
    return makeUgen('Limiter', 1, [
        0
    ], 0, [
        input,
        level,
        dur
    ]);
}
function LinCongC(freq, a, c, m, xi) {
    return makeUgen('LinCongC', 1, 2, 0, [
        freq,
        a,
        c,
        m,
        xi
    ]);
}
function Line(start, end, dur, doneAction) {
    return makeUgen('Line', 1, 2, 0, [
        start,
        end,
        dur,
        doneAction
    ]);
}
function Linen(gate, attackTime, susLevel, releaseTime, doneAction) {
    return makeUgen('Linen', 1, 1, 0, [
        gate,
        attackTime,
        susLevel,
        releaseTime,
        doneAction
    ]);
}
function LinExp(input, srclo, srchi, dstlo, dsthi) {
    return makeUgen('LinExp', 1, [
        0
    ], 0, [
        input,
        srclo,
        srchi,
        dstlo,
        dsthi
    ]);
}
function LinPan2(input, pos, level) {
    return makeUgen('LinPan2', 2, [
        0
    ], 0, [
        input,
        pos,
        level
    ]);
}
function LinRand(lo, hi, minmax) {
    return makeUgen('LinRand', 1, 0, 0, [
        lo,
        hi,
        minmax
    ]);
}
function LinXFade2(inA, inB, pan) {
    return makeUgen('LinXFade2', 1, [
        0,
        1
    ], 0, [
        inA,
        inB,
        pan
    ]);
}
function LocalBuf(numChannels, numFrames) {
    return makeUgen('LocalBuf', 1, 0, 0, [
        numChannels,
        numFrames
    ]);
}
function LocalIn(numChan, defaultValue) {
    return makeUgen('LocalIn', numChan, 2, 0, arrayConcat([], asArray(defaultValue)));
}
function LocalOut(channelsArray) {
    return makeUgen('LocalOut', 0, [
        0
    ], 0, arrayConcat([], asArray(channelsArray)));
}
function Logistic(chaosParam, freq, init) {
    return makeUgen('Logistic', 1, 2, 0, [
        chaosParam,
        freq,
        init
    ]);
}
function LorenzL(freq, s, r, b, h, xi, yi, zi) {
    return makeUgen('LorenzL', 1, 2, 0, [
        freq,
        s,
        r,
        b,
        h,
        xi,
        yi,
        zi
    ]);
}
function Lpz1(input) {
    return makeUgen('LPZ1', 1, [
        0
    ], 0, [
        input
    ]);
}
function Lpz2(input) {
    return makeUgen('LPZ2', 1, [
        0
    ], 0, [
        input
    ]);
}
function MantissaMask(input, bits) {
    return makeUgen('MantissaMask', 1, [
        0
    ], 0, [
        input,
        bits
    ]);
}
function MaxLocalBufs(count) {
    return makeUgen('MaxLocalBufs', 1, 0, 0, [
        count
    ]);
}
function Median(length, input) {
    return makeUgen('Median', 1, [
        1
    ], 0, [
        length,
        input
    ]);
}
function MidEq(input, freq, rq, db) {
    return makeUgen('MidEQ', 1, [
        0
    ], 0, [
        input,
        freq,
        rq,
        db
    ]);
}
function ModDif(x, y, mod) {
    return makeUgen('ModDif', 1, [
        0
    ], 0, [
        x,
        y,
        mod
    ]);
}
function MoogFf(input, freq, gain, reset) {
    return makeUgen('MoogFF', 1, [
        0
    ], 0, [
        input,
        freq,
        gain,
        reset
    ]);
}
function MulAdd(input, mul, add) {
    return makeUgen('MulAdd', 1, [
        0,
        1,
        2
    ], 0, [
        input,
        mul,
        add
    ]);
}
function Normalizer(input, level, dur) {
    return makeUgen('Normalizer', 1, [
        0
    ], 0, [
        input,
        level,
        dur
    ]);
}
function NRand(lo, hi, n) {
    return makeUgen('NRand', 1, 0, 0, [
        lo,
        hi,
        n
    ]);
}
function NumOutputBuses() {
    return makeUgen('NumOutputBuses', 1, 0, 0, []);
}
function OnePole(input, coef) {
    return makeUgen('OnePole', 1, [
        0
    ], 0, [
        input,
        coef
    ]);
}
function OneZero(input, coef) {
    return makeUgen('OneZero', 1, [
        0
    ], 0, [
        input,
        coef
    ]);
}
function Osc(bufnum, freq, phase) {
    return makeUgen('Osc', 1, 2, 0, [
        bufnum,
        freq,
        phase
    ]);
}
function Out(bus, channelsArray) {
    return makeUgen('Out', 0, [
        1
    ], 0, arrayConcat([
        bus
    ], asArray(channelsArray)));
}
function Pan2(input, pos, level) {
    return makeUgen('Pan2', 2, [
        0
    ], 0, [
        input,
        pos,
        level
    ]);
}
function PanAz(numChan, input, pos, level, width, orientation) {
    return makeUgen('PanAz', numChan, [
        0
    ], 0, [
        input,
        pos,
        level,
        width,
        orientation
    ]);
}
function PanB(input, azimuth, elevation, gain) {
    return makeUgen('PanB', 4, 2, 0, [
        input,
        azimuth,
        elevation,
        gain
    ]);
}
function PeakFollower(input, decay) {
    return makeUgen('PeakFollower', 1, [
        0
    ], 0, [
        input,
        decay
    ]);
}
function Perlin3(x, y, z) {
    return makeUgen('Perlin3', 1, 2, 0, [
        x,
        y,
        z
    ]);
}
function Phasor(trig, rate, start, end, resetPos) {
    return makeUgen('Phasor', 1, 2, 0, [
        trig,
        rate,
        start,
        end,
        resetPos
    ]);
}
function PinkNoise() {
    return makeUgen('PinkNoise', 1, 2, 0, []);
}
function Pitch(input, initFreq, minFreq, maxFreq, execFreq, maxBinsPerOctave, median, ampThreshold, peakThreshold, downSample, clar) {
    return makeUgen('Pitch', 2, 1, 0, [
        input,
        initFreq,
        minFreq,
        maxFreq,
        execFreq,
        maxBinsPerOctave,
        median,
        ampThreshold,
        peakThreshold,
        downSample,
        clar
    ]);
}
function PitchShift(input, windowSize, pitchRatio, pitchDispersion, timeDispersion) {
    return makeUgen('PitchShift', 1, [
        0
    ], 0, [
        input,
        windowSize,
        pitchRatio,
        pitchDispersion,
        timeDispersion
    ]);
}
function PlayBuf(numChan, bufnum, rate, trigger, startPos, loop, doneAction) {
    return makeUgen('PlayBuf', numChan, 2, 0, [
        bufnum,
        rate,
        trigger,
        startPos,
        loop,
        doneAction
    ]);
}
function Pluck(input, trig, maxdelaytime, delaytime, decaytime, coef) {
    return makeUgen('Pluck', 1, [
        0
    ], 0, [
        input,
        trig,
        maxdelaytime,
        delaytime,
        decaytime,
        coef
    ]);
}
function Pulse(freq, width) {
    return makeUgen('Pulse', 1, 2, 0, [
        freq,
        width
    ]);
}
function PulseCount(trig, reset) {
    return makeUgen('PulseCount', 1, [
        0
    ], 0, [
        trig,
        reset
    ]);
}
function PulseDivider(trig, div, start) {
    return makeUgen('PulseDivider', 1, [
        0
    ], 0, [
        trig,
        div,
        start
    ]);
}
function PvDiffuser(buffer, trig) {
    return makeUgen('PV_Diffuser', 1, 1, 0, [
        buffer,
        trig
    ]);
}
function PvRandComb(buffer, wipe, trig) {
    return makeUgen('PV_RandComb', 1, 1, 0, [
        buffer,
        wipe,
        trig
    ]);
}
function QuadL(freq, a, b, c, xi) {
    return makeUgen('QuadL', 1, 2, 0, [
        freq,
        a,
        b,
        c,
        xi
    ]);
}
function QuadC(freq, a, b, c, xi) {
    return makeUgen('QuadC', 1, 2, 0, [
        freq,
        a,
        b,
        c,
        xi
    ]);
}
function Rhpf(input, freq, rq) {
    return makeUgen('RHPF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function Rlpf(input, freq, rq) {
    return makeUgen('RLPF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
    ]);
}
function Rand(lo, hi) {
    return makeUgen('Rand', 1, 0, 0, [
        lo,
        hi
    ]);
}
function RecordBuf(bufnum, offset, recLevel, preLevel, run, loop, trigger, doneAction, inputArray) {
    return makeUgen('RecordBuf', 1, 2, 0, arrayConcat([
        bufnum,
        offset,
        recLevel,
        preLevel,
        run,
        loop,
        trigger,
        doneAction
    ], asArray(inputArray)));
}
function ReplaceOut(bus, channelsArray) {
    return makeUgen('ReplaceOut', 0, [
        1
    ], 0, arrayConcat([
        bus
    ], asArray(channelsArray)));
}
function Resonz(input, freq, bwr) {
    return makeUgen('Resonz', 1, [
        0
    ], 0, [
        input,
        freq,
        bwr
    ]);
}
function Ringz(input, freq, decaytime) {
    return makeUgen('Ringz', 1, [
        0
    ], 0, [
        input,
        freq,
        decaytime
    ]);
}
function RunningMax(input, trig) {
    return makeUgen('RunningMax', 1, [
        0
    ], 0, [
        input,
        trig
    ]);
}
function RunningSum(input, numsamp) {
    return makeUgen('RunningSum', 1, [
        0
    ], 0, [
        input,
        numsamp
    ]);
}
function Rotate2(x, y, pos) {
    return makeUgen('Rotate2', 2, [
        0,
        1
    ], 0, [
        x,
        y,
        pos
    ]);
}
function SampleDur() {
    return makeUgen('SampleDur', 1, 0, 0, []);
}
function SampleRate() {
    return makeUgen('SampleRate', 1, 0, 0, []);
}
function Sanitize(input, replace) {
    return makeUgen('Sanitize', 1, [
        0
    ], 0, [
        input,
        replace
    ]);
}
function Saw(freq) {
    return makeUgen('Saw', 1, 2, 0, [
        freq
    ]);
}
function Schmidt(input, lo, hi) {
    return makeUgen('Schmidt', 1, [
        0
    ], 0, [
        input,
        lo,
        hi
    ]);
}
function Select(which, array) {
    return makeUgen('Select', 1, [
        0,
        1
    ], 0, arrayConcat([
        which
    ], asArray(array)));
}
function SetBuf(buf, offset, length, array) {
    return makeUgen('SetBuf', 1, 0, 0, arrayConcat([
        buf,
        offset,
        length
    ], asArray(array)));
}
function SetResetFf(trig, reset) {
    return makeUgen('SetResetFF', 1, [
        0,
        1
    ], 0, [
        trig,
        reset
    ]);
}
function SinOsc(freq, phase) {
    return makeUgen('SinOsc', 1, 2, 0, [
        freq,
        phase
    ]);
}
function SinGrain(trigger, dur, freq) {
    return makeUgen('SinGrain', 1, 2, 0, [
        trigger,
        dur,
        freq
    ]);
}
function SinOscFb(freq, feedback) {
    return makeUgen('SinOscFB', 1, 2, 0, [
        freq,
        feedback
    ]);
}
function Slew(input, up, dn) {
    return makeUgen('Slew', 1, [
        0
    ], 0, [
        input,
        up,
        dn
    ]);
}
function Slope(input) {
    return makeUgen('Slope', 1, [
        0
    ], 0, [
        input
    ]);
}
function Sos(input, a0, a1, a2, b1, b2) {
    return makeUgen('SOS', 1, [
        0
    ], 0, [
        input,
        a0,
        a1,
        a2,
        b1,
        b2
    ]);
}
function Spring(input, spring, damp) {
    return makeUgen('Spring', 1, 2, 0, [
        input,
        spring,
        damp
    ]);
}
function StandardL(freq, k, xi, yi) {
    return makeUgen('StandardL', 1, 2, 0, [
        freq,
        k,
        xi,
        yi
    ]);
}
function StandardN(freq, k, xi, yi) {
    return makeUgen('StandardN', 1, 2, 0, [
        freq,
        k,
        xi,
        yi
    ]);
}
function Stepper(trig, reset, min, max, step, resetval) {
    return makeUgen('Stepper', 1, [
        0
    ], 0, [
        trig,
        reset,
        min,
        max,
        step,
        resetval
    ]);
}
function Sweep(trig, rate) {
    return makeUgen('Sweep', 1, 2, 0, [
        trig,
        rate
    ]);
}
function SyncSaw(syncFreq, sawFreq) {
    return makeUgen('SyncSaw', 1, 2, 0, [
        syncFreq,
        sawFreq
    ]);
}
function TDelay(input, dur) {
    return makeUgen('TDelay', 1, [
        0
    ], 0, [
        input,
        dur
    ]);
}
function TDuty(dur, reset, doneAction, level, gapFirst) {
    return makeUgen('TDuty', 1, 2, 0, [
        dur,
        reset,
        doneAction,
        level,
        gapFirst
    ]);
}
function TExpRand(lo, hi, trig) {
    return makeUgen('TExpRand', 1, [
        2
    ], 0, [
        lo,
        hi,
        trig
    ]);
}
function TGrains(numChan, trigger, bufnum, rate, centerPos, dur, pan, amp, interp) {
    return makeUgen('TGrains', numChan, 2, 0, [
        trigger,
        bufnum,
        rate,
        centerPos,
        dur,
        pan,
        amp,
        interp
    ]);
}
function Timer(trig) {
    return makeUgen('Timer', 1, [
        0
    ], 0, [
        trig
    ]);
}
function TiRand(lo, hi, trig) {
    return makeUgen('TIRand', 1, [
        2
    ], 0, [
        lo,
        hi,
        trig
    ]);
}
function ToggleFf(trig) {
    return makeUgen('ToggleFF', 1, [
        0
    ], 0, [
        trig
    ]);
}
function TRand(lo, hi, trig) {
    return makeUgen('TRand', 1, [
        2
    ], 0, [
        lo,
        hi,
        trig
    ]);
}
function Trig(input, dur) {
    return makeUgen('Trig', 1, [
        0
    ], 0, [
        input,
        dur
    ]);
}
function Trig1(input, dur) {
    return makeUgen('Trig1', 1, [
        0
    ], 0, [
        input,
        dur
    ]);
}
function TwoPole(input, freq, radius) {
    return makeUgen('TwoPole', 1, [
        0
    ], 0, [
        input,
        freq,
        radius
    ]);
}
function TwoZero(input, freq, radius) {
    return makeUgen('TwoZero', 1, [
        0
    ], 0, [
        input,
        freq,
        radius
    ]);
}
function VarSaw(freq, iphase, width) {
    return makeUgen('VarSaw', 1, 2, 0, [
        freq,
        iphase,
        width
    ]);
}
function VbJonVerb(input, decay, damping, inputbw, erfl, tail) {
    return makeUgen('VBJonVerb', 2, [
        0
    ], 0, [
        input,
        decay,
        damping,
        inputbw,
        erfl,
        tail
    ]);
}
function Vibrato(freq, rate, depth, delay, onset, rateVariation, depthVariation, iphase, trig) {
    return makeUgen('Vibrato', 1, 2, 0, [
        freq,
        rate,
        depth,
        delay,
        onset,
        rateVariation,
        depthVariation,
        iphase,
        trig
    ]);
}
function Warp1(numChan, bufnum, pointer, freqScale, windowSize, envbufnum, overlaps, windowRandRatio, interp) {
    return makeUgen('Warp1', numChan, 2, 0, [
        bufnum,
        pointer,
        freqScale,
        windowSize,
        envbufnum,
        overlaps,
        windowRandRatio,
        interp
    ]);
}
function WaveLoss(input, drop, outof, mode) {
    return makeUgen('WaveLoss', 1, 2, 0, [
        input,
        drop,
        outof,
        mode
    ]);
}
function WhiteNoise() {
    return makeUgen('WhiteNoise', 1, 2, 0, []);
}
function Wrap(input, lo, hi) {
    return makeUgen('Wrap', 1, [
        0
    ], 0, [
        input,
        lo,
        hi
    ]);
}
function WrapIndex(bufnum, input) {
    return makeUgen('WrapIndex', 1, [
        1
    ], 0, [
        bufnum,
        input
    ]);
}
function XFade2(inA, inB, pan, level) {
    return makeUgen('XFade2', 1, [
        0,
        1
    ], 0, [
        inA,
        inB,
        pan,
        level
    ]);
}
function XLine(start, end, dur, doneAction) {
    return makeUgen('XLine', 1, 2, 0, [
        start,
        end,
        dur,
        doneAction
    ]);
}
function ZeroCrossing(input) {
    return makeUgen('ZeroCrossing', 1, [
        0
    ], 0, [
        input
    ]);
}
function MoogLadder(input, ffreq, res) {
    return makeUgen('MoogLadder', 1, [
        0
    ], 0, [
        input,
        ffreq,
        res
    ]);
}
function GreyholeRaw(in1, in2, damping, delaytime, diffusion, feedback, moddepth, modfreq, size) {
    return makeUgen('GreyholeRaw', 2, [
        0,
        1
    ], 0, [
        in1,
        in2,
        damping,
        delaytime,
        diffusion,
        feedback,
        moddepth,
        modfreq,
        size
    ]);
}
function CrossoverDistortion(input, amp, smooth) {
    return makeUgen('CrossoverDistortion', 1, [
        0
    ], 0, [
        input,
        amp,
        smooth
    ]);
}
function Friction(input, friction, spring, damp, mass, beltmass) {
    return makeUgen('Friction', 1, 2, 0, [
        input,
        friction,
        spring,
        damp,
        mass,
        beltmass
    ]);
}
function MembraneCircle(excitation, tension, loss) {
    return makeUgen('MembraneCircle', 1, 2, 0, [
        excitation,
        tension,
        loss
    ]);
}
function Vosim(trig, freq, nCycles, decay) {
    return makeUgen('VOSIM', 1, 2, 0, [
        trig,
        freq,
        nCycles,
        decay
    ]);
}
function MiBraids(pitch, timbre, color, model, trig, resamp, decim, bits, ws) {
    return makeUgen('MiBraids', 1, 2, 0, [
        pitch,
        timbre,
        color,
        model,
        trig,
        resamp,
        decim,
        bits,
        ws
    ]);
}
function MiClouds(pit, pos, size, dens, tex, drywet, in_gain, spread, rvb, fb, freeze, mode, lofi, trig, inputArray) {
    return makeUgen('MiClouds', 2, 2, 0, arrayConcat([
        pit,
        pos,
        size,
        dens,
        tex,
        drywet,
        in_gain,
        spread,
        rvb,
        fb,
        freeze,
        mode,
        lofi,
        trig
    ], asArray(inputArray)));
}
function MiRings(input, trig, pit, struct, bright, damp, pos, model, poly, intern_exciter, easteregg, bypass) {
    return makeUgen('MiRings', 2, 2, 0, [
        input,
        trig,
        pit,
        struct,
        bright,
        damp,
        pos,
        model,
        poly,
        intern_exciter,
        easteregg,
        bypass
    ]);
}
function AnalogFoldOsc(freq, amp) {
    return makeUgen('AnalogFoldOsc', 1, 2, 0, [
        freq,
        amp
    ]);
}
function Rcd(clock, rotate, reset, div, spread, auto, len, down, gates) {
    return makeUgen('RCD', 8, [
        0
    ], 0, [
        clock,
        rotate,
        reset,
        div,
        spread,
        auto,
        len,
        down,
        gates
    ]);
}
function Scm(clock, bpm, rotate, slip, shuffle, skip, pw) {
    return makeUgen('SCM', 8, 2, 0, [
        clock,
        bpm,
        rotate,
        slip,
        shuffle,
        skip,
        pw
    ]);
}
function DustRange(iotMin, iotMax) {
    return makeUgen('DustRange', 1, 2, 0, [
        iotMin,
        iotMax
    ]);
}
function ExpRandN(numChan, lo, hi) {
    return makeUgen('ExpRandN', numChan, 0, 0, [
        lo,
        hi
    ]);
}
function LinRandN(numChan, lo, hi, minmax) {
    return makeUgen('LinRandN', numChan, 0, 0, [
        lo,
        hi,
        minmax
    ]);
}
function RandN(numChan, lo, hi) {
    return makeUgen('RandN', numChan, 0, 0, [
        lo,
        hi
    ]);
}
function TLinRand(lo, hi, minmax, trigger) {
    return makeUgen('TLinRand', 1, 1, 0, [
        lo,
        hi,
        minmax,
        trigger
    ]);
}
function TScramble(trigger, inputs) {
    return makeUgen('TScramble', arrayLength(asArray(inputs)), [
        0
    ], 0, arrayConcat([
        trigger
    ], asArray(inputs)));
}
function Dx7(bufnum, on, off, data, vc, mnn, vel, pw, mw, bc, fc) {
    return makeUgen('Dx7', 1, 2, 0, [
        bufnum,
        on,
        off,
        data,
        vc,
        mnn,
        vel,
        pw,
        mw,
        bc,
        fc
    ]);
}
function Dx7Env(gate, data, r1, r2, r3, r4, l1, l2, l3, l4, ol) {
    return makeUgen('Dx7Env', 1, 2, 0, [
        gate,
        data,
        r1,
        r2,
        r3,
        r4,
        l1,
        l2,
        l3,
        l4,
        ol
    ]);
}
function ObxdFilter(input, cutoff, resonance, multimode, bandpass, fourpole) {
    return makeUgen('ObxdFilter', 1, [
        0
    ], 0, [
        input,
        cutoff,
        resonance,
        multimode,
        bandpass,
        fourpole
    ]);
}
function SvfBp(input, freq, q) {
    return makeUgen('SvfBp', 1, 2, 0, [
        input,
        freq,
        q
    ]);
}
function SvfHp(input, freq, q) {
    return makeUgen('SvfHp', 1, [
        0
    ], 0, [
        input,
        freq,
        q
    ]);
}
function SvfLp(input, freq, q) {
    return makeUgen('SvfLp', 1, 2, 0, [
        input,
        freq,
        q
    ]);
}
function Bezier(haltAfter, dx, freq, phase, param) {
    return makeUgen('Bezier', 1, 2, 0, arrayConcat([
        haltAfter,
        dx,
        freq,
        phase
    ], asArray(param)));
}
function Freezer(bufnum, left, right, gain, increment, incrementOffset, incrementRandom, rightRandom, syncPhaseTrigger, randomizePhaseTrigger, numberOfLoops) {
    return makeUgen('Freezer', 1, 2, 0, [
        bufnum,
        left,
        right,
        gain,
        increment,
        incrementOffset,
        incrementRandom,
        rightRandom,
        syncPhaseTrigger,
        randomizePhaseTrigger,
        numberOfLoops
    ]);
}
function Add(a, b) {
    return BinaryOp(0, a, b);
}
function Sub(a, b) {
    return BinaryOp(1, a, b);
}
function Mul(a, b) {
    return BinaryOp(2, a, b);
}
function Idiv(a, b) {
    return BinaryOp(3, a, b);
}
function Fdiv(a, b) {
    return BinaryOp(4, a, b);
}
function Mod(a, b) {
    return BinaryOp(5, a, b);
}
function Eq(a, b) {
    return BinaryOp(6, a, b);
}
function Ne(a, b) {
    return BinaryOp(7, a, b);
}
function Lt(a, b) {
    return BinaryOp(8, a, b);
}
function Gt(a, b) {
    return BinaryOp(9, a, b);
}
function Le(a, b) {
    return BinaryOp(10, a, b);
}
function Ge(a, b) {
    return BinaryOp(11, a, b);
}
function Min(a, b) {
    return BinaryOp(12, a, b);
}
function Max(a, b) {
    return BinaryOp(13, a, b);
}
function BitAnd(a, b) {
    return BinaryOp(14, a, b);
}
function BitOr(a, b) {
    return BinaryOp(15, a, b);
}
function BitXor(a, b) {
    return BinaryOp(16, a, b);
}
function Lcm(a, b) {
    return BinaryOp(17, a, b);
}
function Gcd(a, b) {
    return BinaryOp(18, a, b);
}
function RoundTo(a, b) {
    return BinaryOp(19, a, b);
}
function RoundUp(a, b) {
    return BinaryOp(20, a, b);
}
function Trunc(a, b) {
    return BinaryOp(21, a, b);
}
function Atan2(a, b) {
    return BinaryOp(22, a, b);
}
function Hypot(a, b) {
    return BinaryOp(23, a, b);
}
function Hypotx(a, b) {
    return BinaryOp(24, a, b);
}
function Pow(a, b) {
    return BinaryOp(25, a, b);
}
function ShiftLeft(a, b) {
    return BinaryOp(26, a, b);
}
function ShiftRight(a, b) {
    return BinaryOp(27, a, b);
}
function UnsignedShift(a, b) {
    return BinaryOp(28, a, b);
}
function Fill(a, b) {
    return BinaryOp(29, a, b);
}
function Ring1(a, b) {
    return BinaryOp(30, a, b);
}
function Ring2(a, b) {
    return BinaryOp(31, a, b);
}
function Ring3(a, b) {
    return BinaryOp(32, a, b);
}
function Ring4(a, b) {
    return BinaryOp(33, a, b);
}
function DifSqr(a, b) {
    return BinaryOp(34, a, b);
}
function SumSqr(a, b) {
    return BinaryOp(35, a, b);
}
function SqrSum(a, b) {
    return BinaryOp(36, a, b);
}
function SqrDif(a, b) {
    return BinaryOp(37, a, b);
}
function AbsDif(a, b) {
    return BinaryOp(38, a, b);
}
function Thresh(a, b) {
    return BinaryOp(39, a, b);
}
function AmClip(a, b) {
    return BinaryOp(40, a, b);
}
function ScaleNeg(a, b) {
    return BinaryOp(41, a, b);
}
function Clip2(a, b) {
    return BinaryOp(42, a, b);
}
function Excess(a, b) {
    return BinaryOp(43, a, b);
}
function Fold2(a, b) {
    return BinaryOp(44, a, b);
}
function Wrap2(a, b) {
    return BinaryOp(45, a, b);
}
function FirstArg(a, b) {
    return BinaryOp(46, a, b);
}
function RandRange(a, b) {
    return BinaryOp(47, a, b);
}
function ExpRandRange(a, b) {
    return BinaryOp(48, a, b);
}
function Neg(a) {
    return UnaryOp(0, a);
}
function Not(a) {
    return UnaryOp(1, a);
}
function IsNil(a) {
    return UnaryOp(2, a);
}
function NotNil(a) {
    return UnaryOp(3, a);
}
function BitNot(a) {
    return UnaryOp(4, a);
}
function Abs(a) {
    return UnaryOp(5, a);
}
function AsFloat(a) {
    return UnaryOp(6, a);
}
function AsInt(a) {
    return UnaryOp(7, a);
}
function Ceil(a) {
    return UnaryOp(8, a);
}
function Floor(a) {
    return UnaryOp(9, a);
}
function Frac(a) {
    return UnaryOp(10, a);
}
function Sign(a) {
    return UnaryOp(11, a);
}
function Squared(a) {
    return UnaryOp(12, a);
}
function Cubed(a) {
    return UnaryOp(13, a);
}
function Sqrt(a) {
    return UnaryOp(14, a);
}
function Exp(a) {
    return UnaryOp(15, a);
}
function Recip(a) {
    return UnaryOp(16, a);
}
function MidiCps(a) {
    return UnaryOp(17, a);
}
function CpsMidi(a) {
    return UnaryOp(18, a);
}
function MidiRatio(a) {
    return UnaryOp(19, a);
}
function RatioMidi(a) {
    return UnaryOp(20, a);
}
function DbAmp(a) {
    return UnaryOp(21, a);
}
function AmpDb(a) {
    return UnaryOp(22, a);
}
function OctCps(a) {
    return UnaryOp(23, a);
}
function CpsOct(a) {
    return UnaryOp(24, a);
}
function Log(a) {
    return UnaryOp(25, a);
}
function Log2(a) {
    return UnaryOp(26, a);
}
function Log10(a) {
    return UnaryOp(27, a);
}
function Sin(a) {
    return UnaryOp(28, a);
}
function Cos(a) {
    return UnaryOp(29, a);
}
function Tan(a) {
    return UnaryOp(30, a);
}
function ArcSin(a) {
    return UnaryOp(31, a);
}
function ArcCos(a) {
    return UnaryOp(32, a);
}
function ArcTan(a) {
    return UnaryOp(33, a);
}
function Sinh(a) {
    return UnaryOp(34, a);
}
function Cosh(a) {
    return UnaryOp(35, a);
}
function Tanh(a) {
    return UnaryOp(36, a);
}
function Rand_(a) {
    return UnaryOp(37, a);
}
function Rand2(a) {
    return UnaryOp(38, a);
}
function LinRand_(a) {
    return UnaryOp(39, a);
}
function BiLinRand(a) {
    return UnaryOp(40, a);
}
function Sum3Rand(a) {
    return UnaryOp(41, a);
}
function Distort(a) {
    return UnaryOp(42, a);
}
function SoftClip(a) {
    return UnaryOp(43, a);
}
function Coin(a) {
    return UnaryOp(44, a);
}
function DigitValue(a) {
    return UnaryOp(45, a);
}
function Silence(a) {
    return UnaryOp(46, a);
}
function Thru(a) {
    return UnaryOp(47, a);
}
function RectWindow(a) {
    return UnaryOp(48, a);
}
function HanWindow(a) {
    return UnaryOp(49, a);
}
function WelchWindow(a) {
    return UnaryOp(50, a);
}
function TriWindow(a) {
    return UnaryOp(51, a);
}
function Ramp_(a) {
    return UnaryOp(52, a);
}
function Scurve(a) {
    return UnaryOp(53, a);
}
export { AllpassC as AllpassC };
export { AllpassL as AllpassL };
export { AllpassN as AllpassN };
export { AmpComp as AmpComp };
export { AmpCompA as AmpCompA };
export { Amplitude as Amplitude };
export { Balance2 as Balance2 };
export { BBandPass as BBandPass };
export { BBandStop as BBandStop };
export { BHiPass as BHiPass };
export { Blip as Blip };
export { BlockSize as BlockSize };
export { BLowPass as BLowPass };
export { BPeakEq as BPeakEq };
export { Bpf as Bpf };
export { Bpz2 as Bpz2 };
export { Brf as Brf };
export { Brz2 as Brz2 };
export { BrownNoise as BrownNoise };
export { BufDur as BufDur };
export { BufFrames as BufFrames };
export { BufRateScale as BufRateScale };
export { BufRd as BufRd };
export { BufSampleRate as BufSampleRate };
export { BufWr as BufWr };
export { ClearBuf as ClearBuf };
export { Clip as Clip };
export { ClipNoise as ClipNoise };
export { CoinGate as CoinGate };
export { CombC as CombC };
export { CombL as CombL };
export { CombN as CombN };
export { Compander as Compander };
export { ControlDur as ControlDur };
export { ControlRate as ControlRate };
export { Convolution as Convolution };
export { Crackle as Crackle };
export { CuspL as CuspL };
export { CuspN as CuspN };
export { Dbufrd as Dbufrd };
export { Dbufwr as Dbufwr };
export { Dc as Dc };
export { Decay as Decay };
export { Decay2 as Decay2 };
export { DegreeToKey as DegreeToKey };
export { Delay1 as Delay1 };
export { Delay2 as Delay2 };
export { DelayC as DelayC };
export { DelayL as DelayL };
export { DelayN as DelayN };
export { Demand as Demand };
export { DetectSilence as DetectSilence };
export { Dfm1 as Dfm1 };
export { Diwhite as Diwhite };
export { Drand as Drand };
export { Dseq as Dseq };
export { Dseries as Dseries };
export { Dshuf as Dshuf };
export { Dust as Dust };
export { Dust2 as Dust2 };
export { Duty as Duty };
export { DwgPluckedStiff as DwgPluckedStiff };
export { Dwhite as Dwhite };
export { Dxrand as Dxrand };
export { EnvGen as EnvGen };
export { ExpRand as ExpRand };
export { FbSineL as FbSineL };
export { FbSineC as FbSineC };
export { Fft as Fft };
export { Fold as Fold };
export { Formant as Formant };
export { Formlet as Formlet };
export { Fos as Fos };
export { FreqShift as FreqShift };
export { FSinOsc as FSinOsc };
export { FreeVerb as FreeVerb };
export { FreeVerb2 as FreeVerb2 };
export { Gate as Gate };
export { Gendy1 as Gendy1 };
export { GrainBuf as GrainBuf };
export { GrainFm as GrainFm };
export { GrainSin as GrainSin };
export { GrayNoise as GrayNoise };
export { GVerb as GVerb };
export { Hasher as Hasher };
export { HenonC as HenonC };
export { HenonL as HenonL };
export { HenonN as HenonN };
export { Hpf as Hpf };
export { Hpz1 as Hpz1 };
export { Hpz2 as Hpz2 };
export { Ifft as Ifft };
export { Impulse as Impulse };
export { In as In };
export { Index as Index };
export { IndexInBetween as IndexInBetween };
export { InFeedback as InFeedback };
export { InRange as InRange };
export { IRand as IRand };
export { Integrator as Integrator };
export { K2A as K2A };
export { Klang as Klang };
export { Klank as Klank };
export { LfBrownNoise1 as LfBrownNoise1 };
export { LfClipNoise as LfClipNoise };
export { LfCub as LfCub };
export { LfdNoise1 as LfdNoise1 };
export { LfdNoise3 as LfdNoise3 };
export { LfGauss as LfGauss };
export { LfNoise0 as LfNoise0 };
export { LfNoise1 as LfNoise1 };
export { LfNoise2 as LfNoise2 };
export { LfPar as LfPar };
export { LfPulse as LfPulse };
export { LfSaw as LfSaw };
export { LfTri as LfTri };
export { Lpf as Lpf };
export { Lag as Lag };
export { LagUd as LagUd };
export { Lag2 as Lag2 };
export { Lag3 as Lag3 };
export { Lag3Ud as Lag3Ud };
export { Latch as Latch };
export { LatoocarfianC as LatoocarfianC };
export { LeakDc as LeakDc };
export { Limiter as Limiter };
export { LinCongC as LinCongC };
export { Line as Line };
export { Linen as Linen };
export { LinExp as LinExp };
export { LinPan2 as LinPan2 };
export { LinRand as LinRand };
export { LinXFade2 as LinXFade2 };
export { LocalBuf as LocalBuf };
export { LocalIn as LocalIn };
export { LocalOut as LocalOut };
export { Logistic as Logistic };
export { LorenzL as LorenzL };
export { Lpz1 as Lpz1 };
export { Lpz2 as Lpz2 };
export { MantissaMask as MantissaMask };
export { MaxLocalBufs as MaxLocalBufs };
export { Median as Median };
export { MidEq as MidEq };
export { ModDif as ModDif };
export { MoogFf as MoogFf };
export { MulAdd as MulAdd };
export { Normalizer as Normalizer };
export { NRand as NRand };
export { NumOutputBuses as NumOutputBuses };
export { OnePole as OnePole };
export { OneZero as OneZero };
export { Osc as Osc };
export { Out as Out };
export { Pan2 as Pan2 };
export { PanAz as PanAz };
export { PanB as PanB };
export { PeakFollower as PeakFollower };
export { Perlin3 as Perlin3 };
export { Phasor as Phasor };
export { PinkNoise as PinkNoise };
export { Pitch as Pitch };
export { PitchShift as PitchShift };
export { PlayBuf as PlayBuf };
export { Pluck as Pluck };
export { Pulse as Pulse };
export { PulseCount as PulseCount };
export { PulseDivider as PulseDivider };
export { PvDiffuser as PvDiffuser };
export { PvRandComb as PvRandComb };
export { QuadL as QuadL };
export { QuadC as QuadC };
export { Rhpf as Rhpf };
export { Rlpf as Rlpf };
export { Rand as Rand };
export { RecordBuf as RecordBuf };
export { ReplaceOut as ReplaceOut };
export { Resonz as Resonz };
export { Ringz as Ringz };
export { RunningMax as RunningMax };
export { RunningSum as RunningSum };
export { Rotate2 as Rotate2 };
export { SampleDur as SampleDur };
export { SampleRate as SampleRate };
export { Sanitize as Sanitize };
export { Saw as Saw };
export { Schmidt as Schmidt };
export { Select as Select };
export { SetBuf as SetBuf };
export { SetResetFf as SetResetFf };
export { SinOsc as SinOsc };
export { SinGrain as SinGrain };
export { SinOscFb as SinOscFb };
export { Slew as Slew };
export { Slope as Slope };
export { Sos as Sos };
export { Spring as Spring };
export { StandardL as StandardL };
export { StandardN as StandardN };
export { Stepper as Stepper };
export { Sweep as Sweep };
export { SyncSaw as SyncSaw };
export { TDelay as TDelay };
export { TDuty as TDuty };
export { TExpRand as TExpRand };
export { TGrains as TGrains };
export { Timer as Timer };
export { TiRand as TiRand };
export { ToggleFf as ToggleFf };
export { TRand as TRand };
export { Trig as Trig };
export { Trig1 as Trig1 };
export { TwoPole as TwoPole };
export { TwoZero as TwoZero };
export { VarSaw as VarSaw };
export { VbJonVerb as VbJonVerb };
export { Vibrato as Vibrato };
export { Warp1 as Warp1 };
export { WaveLoss as WaveLoss };
export { WhiteNoise as WhiteNoise };
export { Wrap as Wrap };
export { WrapIndex as WrapIndex };
export { XFade2 as XFade2 };
export { XLine as XLine };
export { ZeroCrossing as ZeroCrossing };
export { MoogLadder as MoogLadder };
export { GreyholeRaw as GreyholeRaw };
export { CrossoverDistortion as CrossoverDistortion };
export { Friction as Friction };
export { MembraneCircle as MembraneCircle };
export { Vosim as Vosim };
export { MiBraids as MiBraids };
export { MiClouds as MiClouds };
export { MiRings as MiRings };
export { AnalogFoldOsc as AnalogFoldOsc };
export { Rcd as Rcd };
export { Scm as Scm };
export { DustRange as DustRange };
export { ExpRandN as ExpRandN };
export { LinRandN as LinRandN };
export { RandN as RandN };
export { TLinRand as TLinRand };
export { TScramble as TScramble };
export { Dx7 as Dx7 };
export { Dx7Env as Dx7Env };
export { ObxdFilter as ObxdFilter };
export { SvfBp as SvfBp };
export { SvfHp as SvfHp };
export { SvfLp as SvfLp };
export { Bezier as Bezier };
export { Freezer as Freezer };
export { Add as Add };
export { Sub as Sub };
export { Mul as Mul };
export { Idiv as Idiv };
export { Fdiv as Fdiv };
export { Mod as Mod };
export { Eq as Eq };
export { Ne as Ne };
export { Lt as Lt };
export { Gt as Gt };
export { Le as Le };
export { Ge as Ge };
export { Min as Min };
export { Max as Max };
export { BitAnd as BitAnd };
export { BitOr as BitOr };
export { BitXor as BitXor };
export { Lcm as Lcm };
export { Gcd as Gcd };
export { RoundTo as RoundTo };
export { RoundUp as RoundUp };
export { Trunc as Trunc };
export { Atan2 as Atan2 };
export { Hypot as Hypot };
export { Hypotx as Hypotx };
export { Pow as Pow };
export { ShiftLeft as ShiftLeft };
export { ShiftRight as ShiftRight };
export { UnsignedShift as UnsignedShift };
export { Fill as Fill };
export { Ring1 as Ring1 };
export { Ring2 as Ring2 };
export { Ring3 as Ring3 };
export { Ring4 as Ring4 };
export { DifSqr as DifSqr };
export { SumSqr as SumSqr };
export { SqrSum as SqrSum };
export { SqrDif as SqrDif };
export { AbsDif as AbsDif };
export { Thresh as Thresh };
export { AmClip as AmClip };
export { ScaleNeg as ScaleNeg };
export { Clip2 as Clip2 };
export { Excess as Excess };
export { Fold2 as Fold2 };
export { Wrap2 as Wrap2 };
export { FirstArg as FirstArg };
export { RandRange as RandRange };
export { ExpRandRange as ExpRandRange };
export { Neg as Neg };
export { Not as Not };
export { IsNil as IsNil };
export { NotNil as NotNil };
export { BitNot as BitNot };
export { Abs as Abs };
export { AsFloat as AsFloat };
export { AsInt as AsInt };
export { Ceil as Ceil };
export { Floor as Floor };
export { Frac as Frac };
export { Sign as Sign };
export { Squared as Squared };
export { Cubed as Cubed };
export { Sqrt as Sqrt };
export { Exp as Exp };
export { Recip as Recip };
export { MidiCps as MidiCps };
export { CpsMidi as CpsMidi };
export { MidiRatio as MidiRatio };
export { RatioMidi as RatioMidi };
export { DbAmp as DbAmp };
export { AmpDb as AmpDb };
export { OctCps as OctCps };
export { CpsOct as CpsOct };
export { Log as Log };
export { Log2 as Log2 };
export { Log10 as Log10 };
export { Sin as Sin };
export { Cos as Cos };
export { Tan as Tan };
export { ArcSin as ArcSin };
export { ArcCos as ArcCos };
export { ArcTan as ArcTan };
export { Sinh as Sinh };
export { Cosh as Cosh };
export { Tanh as Tanh };
export { Rand_ as Rand_ };
export { Rand2 as Rand2 };
export { LinRand_ as LinRand_ };
export { BiLinRand as BiLinRand };
export { Sum3Rand as Sum3Rand };
export { Distort as Distort };
export { SoftClip as SoftClip };
export { Coin as Coin };
export { DigitValue as DigitValue };
export { Silence as Silence };
export { Thru as Thru };
export { RectWindow as RectWindow };
export { HanWindow as HanWindow };
export { WelchWindow as WelchWindow };
export { TriWindow as TriWindow };
export { Ramp_ as Ramp_ };
export { Scurve as Scurve };
function bitShiftLeft(a, b) {
    return ShiftLeft(a, b);
}
function bitShiftRight(a, b) {
    return ShiftRight(a, b);
}
export { bitShiftLeft as bitShiftLeft };
export { bitShiftRight as bitShiftRight };
const envCurveDictionary = {
    step: 0,
    lin: 1,
    linear: 1,
    exp: 2,
    exponential: 2,
    sin: 3,
    sine: 3,
    wel: 4,
    welch: 4,
    sqr: 6,
    squared: 6,
    cub: 7,
    cubed: 7,
    hold: 8
};
class Env {
    levels;
    times;
    curves;
    releaseNode;
    loopNode;
    offset;
    constructor(levels, times, curves, releaseNode, loopNode, offset){
        this.levels = levels;
        this.times = times;
        this.curves = asArray(curves);
        this.releaseNode = fromMaybe(releaseNode, -99);
        this.loopNode = fromMaybe(loopNode, -99);
        this.offset = offset;
    }
}
function envCoord(env) {
    const segmentCount = arrayLength(env.levels) - 1;
    const answerQueue = queueNew();
    const store = function(aValue) {
        queuePush(answerQueue, aValue);
    };
    store(env.levels[0]);
    store(segmentCount);
    store(env.releaseNode);
    store(env.loopNode);
    for(let i = 0; i < segmentCount; i++){
        const c = arrayAtWrap(env.curves, i);
        store(env.levels[i + 1]);
        store(arrayAtWrap(env.times, i));
        store(isString(c) ? envCurveDictionary[c] : 5);
        store(isString(c) ? 0 : c);
    }
    return queueAsArray(answerQueue);
}
function EnvAdsr(attackTime, decayTime, sustainLevel, releaseTime, peakLevel, curve) {
    return new Env([
        0,
        peakLevel,
        Mul(peakLevel, sustainLevel),
        0
    ], [
        attackTime,
        decayTime,
        releaseTime
    ], curve, 2, null, 0);
}
function EnvAsr(attackTime, sustainLevel, releaseTime, curve) {
    return new Env([
        0,
        sustainLevel,
        0
    ], [
        attackTime,
        releaseTime
    ], curve, 1, null, 0);
}
function EnvCutoff(sustainTime, releaseTime, curve) {
    return new Env([
        1,
        1,
        0
    ], [
        sustainTime,
        releaseTime
    ], curve, null, null, 0);
}
function EnvRelease(attackTime, dur, releaseTime) {
    return new Env([
        0,
        1,
        1,
        0
    ], [
        attackTime,
        dur,
        releaseTime
    ], 'lin', null, null, 0);
}
function EnvSine(dur) {
    return new Env([
        0,
        0,
        1,
        0
    ], [
        0,
        Fdiv(dur, 2),
        Fdiv(dur, 2)
    ], 'sine', null, 1, 0);
}
function EnvPerc(attackTime, releaseTime, level, curve) {
    return new Env([
        0,
        level,
        0
    ], [
        attackTime,
        releaseTime
    ], curve, null, null, 0);
}
function EnvLinen(attackTime, sustainTime, releaseTime, level, curve) {
    return new Env([
        0,
        level,
        level,
        0
    ], [
        attackTime,
        sustainTime,
        releaseTime
    ], curve, null, null, 0);
}
export { envCurveDictionary as envCurveDictionary };
export { Env as Env };
export { envCoord as envCoord };
export { EnvAdsr as EnvAdsr };
export { EnvAsr as EnvAsr };
export { EnvCutoff as EnvCutoff };
export { EnvRelease as EnvRelease };
export { EnvSine as EnvSine };
export { EnvPerc as EnvPerc };
export { EnvLinen as EnvLinen };
function wrapOut(bus, ugen) {
    if (isOutUgen(ugen)) {
        return ugen;
    } else {
        if (isOutputSignal(ugen)) {
            return Out(bus, ugen);
        } else {
            throwError('wrapOut: not output signal');
            return Out(bus, Dc(0));
        }
    }
}
function Adsr(gate, attackTime, decayTime, sustainLevel, releaseTime, curve) {
    const env = EnvAdsr(attackTime, decayTime, sustainLevel, releaseTime, 1, curve);
    return EnvGen(gate, 1, 0, 1, 0, envCoord(env));
}
function Asr(gate, attackTime, releaseTime, curve) {
    const env = EnvAsr(attackTime, 1, releaseTime, curve);
    return EnvGen(gate, 1, 0, 1, 0, envCoord(env));
}
function Cutoff(sustainTime, releaseTime, curve) {
    const env = EnvCutoff(sustainTime, releaseTime, curve);
    return EnvGen(1, 1, 0, 1, 0, envCoord(env));
}
function Splay(inArray, spread, level, center, levelComp) {
    const n = Math.max(2, signalSize(inArray));
    const pos = arrayFromTo(0, n - 1).map((item)=>Add(Mul(Sub(Mul(item, Fdiv(2, Sub(n, 1))), 1), spread), center));
    const lvl = Mul(level, levelComp ? Sqrt(1 / n) : 1);
    consoleDebug(`Splay: ${[
        n,
        pos,
        lvl
    ]}`);
    return arrayReduce(Pan2(inArray, pos, lvl), Add);
}
function Splay2(inArray) {
    const n = Math.max(2, signalSize(inArray));
    const pos = arrayFromTo(0, n - 1).map((item)=>item * (2 / (n - 1)) - 1);
    const lvl = Math.sqrt(1 / n);
    consoleDebug(`Splay2: ${[
        n,
        pos,
        lvl
    ]}`);
    return arrayReduce(Pan2(inArray, pos, lvl), Add);
}
function LinLin(input, srclo, srchi, dstlo, dsthi) {
    const scale = Fdiv(Sub(dsthi, dstlo), Sub(srchi, srclo));
    const offset = Sub(dstlo, Mul(scale, srclo));
    return Add(Mul(input, scale), offset);
}
function InFb(numChannels, bus) {
    return InFeedback(numChannels, bus);
}
function Select2(predicate, ifTrue, ifFalse) {
    return Add(Mul(predicate, Sub(ifTrue, ifFalse)), ifFalse);
}
function TChoose(trig, array) {
    return Select(TiRand(0, signalSize(array) - 1, trig), array);
}
function PmOsc(carfreq, modfreq, pmindex, modphase) {
    return SinOsc(carfreq, Mul(SinOsc(modfreq, modphase), pmindex));
}
function XLn(start, end, dur) {
    return XLine(start, end, dur, 0);
}
function DmdFor(dur, reset, level) {
    return Duty(dur, reset, 0, level);
}
function TDmdFor(dur, reset, level) {
    return TDuty(dur, reset, 0, level, 0);
}
function DmdOn(trig, reset, demandUgens) {
    return Demand(trig, reset, demandUgens);
}
function Ln(start, end, dur) {
    return Line(start, end, dur, 0);
}
function TLine(start, end, dur, trig) {
    const env = new Env([
        start,
        start,
        end
    ], [
        0,
        dur
    ], 'lin', null, null, 0);
    return EnvGen(trig, 1, 0, 1, 0, envCoord(env));
}
function TxLine(start, end, dur, trig) {
    const env = new Env([
        start,
        start,
        end
    ], [
        0,
        dur
    ], 'exp', null, null, 0);
    return EnvGen(trig, 1, 0, 1, 0, envCoord(env));
}
function AudioIn(channels) {
    return In(1, Sub(Add(NumOutputBuses(), channels), 1));
}
function AudioOut(channelsArray) {
    return Out(0, channelsArray);
}
function asLocalBuf(aSignal) {
    let shape = treeShape(aSignal);
    if (arraySize(shape) > 2) {
        throwError('LocalBuf: list has not the right shape');
        return 0;
    } else {
        let array = null;
        if (arraySize(shape) === 1) {
            shape = [
                1,
                arraySize(aSignal)
            ];
            array = aSignal;
        } else {
            array = arrayConcatenation(arrayTranspose(aSignal));
        }
        const lhs = LocalBuf(shape[0], shape[1]);
        const rhs = SetBuf(lhs, 0, arrayProduct(shape), array);
        return mrg(lhs, rhs);
    }
}
function clearBuf(buf) {
    return mrg(buf, ClearBuf(buf));
}
function BufRec(bufnum, reset, inputArray) {
    return RecordBuf(bufnum, 0, 1, 0, 1, 1, reset, 0, inputArray);
}
function BufWrite(bufnum, phase, loop, inputArray) {
    return BufWr(inputArray, bufnum, phase, loop);
}
function asKlankSpec(freq, amp, time) {
    const n = signalSize(freq);
    const a = [
        freq,
        fromMaybe(amp, arrayReplicate(n, 1)),
        fromMaybe(time, arrayReplicate(n, 1))
    ];
    consoleDebug(`asKlankSpec: ${a}`);
    return arrayConcatenation(arrayTranspose(arrayExtendToBeOfEqualSize(a)));
}
function RingzBank(input, freq, amp, time) {
    return Klank(input, 1, 0, 1, asKlankSpec(freq, amp, time));
}
function SinOscBank(freq, amp, time) {
    return Klang(1, 0, asKlankSpec(freq, amp, time));
}
function LinSeg(gate, coordArray) {
    const coord = arrayTranspose(arrayClump(coordArray, 2));
    const levels = arrayFirst(coord);
    const times = arraySecond(coord);
    const env = new Env(levels, times.slice(0, times.length - 1), 'lin', null, null, 0);
    return EnvGen(gate, 1, 0, 1, 0, envCoord(env));
}
function SelectX(which, array) {
    return XFade2(Select(RoundTo(which, 2), array), Select(Add(Trunc(which, 2), 1), array), Fold2(Sub(Mul(which, 2), 1), 1), 1);
}
function UnitCps(a) {
    return MidiCps(Mul(a, 127));
}
function ControlIn(numChan, bus) {
    return kr(In(numChan, bus));
}
function ControlOut(bus, channelsArray) {
    return Out(bus, kr(channelsArray));
}
function SfFrames(sfBufferArray) {
    return BufFrames(arrayFirst(asArray(sfBufferArray)));
}
function SfDur(sfBufferArray) {
    return BufDur(arrayFirst(asArray(sfBufferArray)));
}
function SfSampleRate(sfBufferArray) {
    return BufSampleRate(arrayFirst(asArray(sfBufferArray)));
}
function SfRateScale(sfBufferArray) {
    return BufRateScale(arrayFirst(asArray(sfBufferArray)));
}
function SfRead(sfBufferArray, phase, loop, interpolation) {
    return BufRd(1, sfBufferArray, phase, loop, interpolation);
}
function SfPlay(sfBufferArray, rate, trigger, startPos, loop) {
    return PlayBuf(1, sfBufferArray, rate, trigger, startPos, loop, 0);
}
function DelayWrite(bufnum, input) {
    return RecordBuf(bufnum, 0, 1, 0, 1, 1, 1, 0, [
        input
    ]);
}
function DelayTap(bufnum, delayTime) {
    return PlayBuf(1, bufnum, 1, 1, Mul(Sub(BufDur(bufnum), delayTime), SampleRate()), 1, 0);
}
function PingPongDelay(left, right, maxDelayTime, delayTime, feedback) {
    const delaySize = Mul(maxDelayTime, SampleRate());
    const phase = Phasor(0, 1, 0, delaySize, 0);
    const leftBuffer = clearBuf(LocalBuf(1, delaySize));
    const rightBuffer = clearBuf(LocalBuf(1, delaySize));
    const leftDelayedSignal = BufRd(1, leftBuffer, Wrap(Sub(phase, Mul(delayTime, SampleRate())), 0, delaySize), 1, 2);
    const rightDelayedSignal = BufRd(1, rightBuffer, Wrap(Sub(phase, Mul(delayTime, SampleRate())), 0, delaySize), 1, 2);
    const output = [
        Add(leftDelayedSignal, left),
        Add(rightDelayedSignal, right)
    ];
    const writer = DelayWrite([
        rightBuffer,
        leftBuffer
    ], Mul(output, feedback));
    return mrg(output, writer);
}
function MultiTapDelay(timesArray, levelsArray, input) {
    const delayFrames = Mul(arrayMaxItem(timesArray), SampleRate());
    const buf = clearBuf(LocalBuf(1, delayFrames));
    const writer = DelayWrite(buf, input);
    const numReaders = timesArray.length;
    const readers = arrayFromTo(0, numReaders - 1).map((item)=>Mul(DelayTap(buf, timesArray[item]), levelsArray[item]));
    return mrg(arrayReduce(readers, Add), writer);
}
function Osc1(buf, dur) {
    const phase = Ln(0, Sub(BufFrames(buf), 1), dur);
    return BufRd(1, buf, phase, 0, 2);
}
function Release(input, attackTime, dur, releaseTime) {
    const env = EnvRelease(attackTime, dur, releaseTime);
    return Mul(input, EnvGen(1, 1, 0, 1, 2, envCoord(env)));
}
function Sine(trig, dur) {
    return EnvGen(trig, 1, 0, 1, 0, envCoord(EnvSine(dur)));
}
function Perc(trig, attackTime, releaseTime, curve) {
    return EnvGen(trig, 1, 0, 1, 0, envCoord(EnvPerc(attackTime, releaseTime, 1, curve)));
}
function DynRingzBank(input, freq, amp, time) {
    return arrayReduce(Mul(Ringz(input, freq, time), amp), Add);
}
function Changed(input, threshold) {
    return Gt(Abs(Hpz1(input)), threshold);
}
function BLowPass4(input, freq, rq) {
    var sqrtRq = Sqrt(rq);
    return BLowPass(BLowPass(input, freq, sqrtRq), freq, sqrtRq);
}
function BHiPass4(input, freq, rq) {
    var sqrtRq = Sqrt(rq);
    return BHiPass(BHiPass(input, freq, sqrtRq), freq, sqrtRq);
}
export { wrapOut as wrapOut };
export { Adsr as Adsr };
export { Asr as Asr };
export { Cutoff as Cutoff };
export { Splay as Splay };
export { Splay2 as Splay2 };
export { LinLin as LinLin };
export { InFb as InFb };
export { Select2 as Select2 };
export { TChoose as TChoose };
export { PmOsc as PmOsc };
export { XLn as XLn };
export { DmdFor as DmdFor };
export { TDmdFor as TDmdFor };
export { DmdOn as DmdOn };
export { Dseq as Seq };
export { Dseries as Ser };
export { Dshuf as Shuf };
export { Drand as Choose };
export { Ln as Ln };
export { TLine as TLine };
export { TxLine as TxLine };
export { AudioIn as AudioIn };
export { AudioOut as AudioOut };
export { asLocalBuf as asLocalBuf };
export { clearBuf as clearBuf };
export { BufRec as BufRec };
export { LocalBuf as BufAlloc };
export { BufWrite as BufWrite };
export { asKlankSpec as asKlankSpec };
export { RingzBank as RingzBank };
export { SinOscBank as SinOscBank };
export { LinSeg as LinSeg };
export { SelectX as SelectX };
export { UnitCps as UnitCps };
export { ControlIn as ControlIn };
export { ControlOut as ControlOut };
export { SfFrames as SfFrames };
export { SfDur as SfDur };
export { SfSampleRate as SfSampleRate };
export { SfRateScale as SfRateScale };
export { SfRead as SfRead };
export { SfPlay as SfPlay };
export { DelayWrite as DelayWrite };
export { DelayTap as DelayTap };
export { PingPongDelay as PingPongDelay };
export { MultiTapDelay as MultiTapDelay };
export { Osc1 as Osc1 };
export { Release as Release };
export { Sine as Sine };
export { Perc as Perc };
export { DynRingzBank as DynRingzBank };
export { Changed as Changed };
export { BLowPass4 as BLowPass4 };
export { BHiPass4 as BHiPass4 };
function PointerW(n) {
    return ControlIn(1, 15001 + n * 10);
}
function PointerX(n) {
    return ControlIn(1, 15002 + n * 10);
}
function PointerY(n) {
    return ControlIn(1, 15003 + n * 10);
}
function PointerMouseX(minval, maxval, warp, lag) {
    switch(warp){
        case 0:
            return LinLin(Lag(PointerX(0), lag), 0, 1, minval, maxval);
        case 1:
            return LinExp(Lag(PointerX(0), lag), 0, 1, minval, maxval);
        default:
            console.error(`MouseX: unknown warp: ${warp}`);
            return 0;
    }
}
function PointerMouseY(minval, maxval, warp, lag) {
    switch(warp){
        case 0:
            return LinLin(Lag(PointerY(0), lag), 0, 1, minval, maxval);
        case 1:
            return LinExp(Lag(PointerY(0), lag), 0, 1, minval, maxval);
        default:
            console.error(`MouseY: unknown warp: ${warp}`);
            return 0;
    }
}
function PointerMouseButton(minval, maxval, lag) {
    return LinLin(Lag(PointerW(0), lag), 0, 1, minval, maxval);
}
const Pointer = {
    x: PointerMouseX,
    y: PointerMouseY,
    z: PointerMouseButton
};
export { PointerW as PointerW };
export { PointerX as PointerX };
export { PointerY as PointerY };
export { PointerMouseX as PointerMouseX };
export { PointerMouseY as PointerMouseY };
export { PointerMouseButton as PointerMouseButton };
export { Pointer as Pointer };
function KeyState(keycode, minval, maxval, lag) {
    if (globalThis.globalScsynth.hasIoUgens) {
        return makeUgen('KeyState', 1, 1, 0, [
            keycode,
            minval,
            maxval,
            lag
        ]);
    }
    {
        console.error('KeyState: no IoUgens');
        return 0;
    }
}
function MouseButton(minval, maxval, lag) {
    if (globalThis.globalScsynth.hasIoUgens) {
        return makeUgen('MouseButton', 1, 1, 0, [
            minval,
            maxval,
            lag
        ]);
    } else {
        return PointerMouseButton(minval, maxval, lag);
    }
}
function MouseX(minval, maxval, warp, lag) {
    if (globalThis.globalScsynth.hasIoUgens) {
        return makeUgen('MouseX', 1, 1, 0, [
            minval,
            maxval,
            warp,
            lag
        ]);
    } else {
        return PointerMouseX(minval, maxval, warp, lag);
    }
}
function MouseY(minval, maxval, warp, lag) {
    if (globalThis.globalScsynth.hasIoUgens) {
        return makeUgen('MouseY', 1, 1, 0, [
            minval,
            maxval,
            warp,
            lag
        ]);
    } else {
        return PointerMouseY(minval, maxval, warp, lag);
    }
}
export { KeyState as KeyState };
export { MouseButton as MouseButton };
export { MouseX as MouseX };
export { MouseY as MouseY };
function decodeServerMessage(packet) {
    return osc.readPacket(packet, {
        metadata: true
    });
}
function encodeServerPacket(message) {
    return osc.writePacket(message, {
        metadata: true
    });
}
function encodeServerMessage(message) {
    return osc.writePacket(message, {
        metadata: true
    });
}
const kAddToHead = 0;
const kAddToTail = 1;
function b_alloc_then(bufferNumber, numberOfFrames, numberOfChannels, onCompletion) {
    return {
        address: '/b_alloc',
        args: [
            oscInt32(bufferNumber),
            oscInt32(numberOfFrames),
            oscInt32(numberOfChannels),
            oscBlob(onCompletion)
        ]
    };
}
function b_memcpy(bufferNumber, numFrames, numChannels, sampleRate, bufferData) {
    return {
        address: '/b_gen',
        args: [
            oscInt32(bufferNumber),
            oscString('memcpy'),
            oscInt32(numFrames),
            oscInt32(numChannels),
            oscFloat(sampleRate),
            oscBlob(bufferData)
        ]
    };
}
function b_alloc_then_memcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, bufferData) {
    const allocBytes = numberOfFrames * numberOfChannels * 4;
    if (allocBytes != bufferData.length) {
        console.error('b_alloc_then_memcpy: array size error', allocBytes, bufferData.length);
    }
    return b_alloc_then(bufferNumber, numberOfFrames, numberOfChannels, encodeServerPacket(b_memcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, bufferData)));
}
function b_getn1(bufferNumber, startIndex, count) {
    return {
        address: '/b_getn',
        args: [
            oscInt32(bufferNumber),
            oscInt32(startIndex),
            oscInt32(count)
        ]
    };
}
function b_query1(bufferNumber) {
    return {
        address: '/b_query',
        args: [
            oscInt32(bufferNumber)
        ]
    };
}
function c_set1(busIndex, controlValue) {
    return {
        address: '/c_set',
        args: [
            oscInt32(busIndex),
            oscFloat(controlValue)
        ]
    };
}
function c_setn1(busIndex, controlArray) {
    return {
        address: '/c_setn',
        args: [
            oscInt32(busIndex),
            oscInt32(controlArray.length)
        ].concat(controlArray.map(oscFloat))
    };
}
function d_recv(syndefArray) {
    return {
        address: '/d_recv',
        args: [
            oscBlob(syndefArray)
        ]
    };
}
function d_recv_then(syndefArray, onCompletion) {
    return {
        address: '/d_recv',
        args: [
            oscBlob(syndefArray),
            oscBlob(onCompletion)
        ]
    };
}
function g_new(groups) {
    return {
        address: '/g_new',
        args: groups.map((group)=>group.map(oscInt32)).flat()
    };
}
function g_new1(groupId, addAction, nodeId) {
    return g_new([
        [
            groupId,
            addAction,
            nodeId
        ]
    ]);
}
function g_freeAll(groupIdArray) {
    return {
        address: '/g_freeAll',
        args: groupIdArray.map((groupId)=>oscInt32(groupId))
    };
}
function g_freeAll1(groupId) {
    return g_freeAll([
        groupId
    ]);
}
const m_status = {
    address: '/status',
    args: []
};
function m_dumpOsc(code) {
    return {
        address: '/dumpOSC',
        args: [
            oscInt32(code)
        ]
    };
}
function m_notify(status, clientId) {
    return {
        address: '/notify',
        args: [
            oscInt32(status),
            oscInt32(clientId)
        ]
    };
}
function s_new0(name, nodeId, addAction, target) {
    return {
        address: '/s_new',
        args: [
            oscString(name),
            oscInt32(nodeId),
            oscInt32(addAction),
            oscInt32(target)
        ]
    };
}
export { decodeServerMessage as decodeServerMessage };
export { encodeServerPacket as encodeServerPacket };
export { encodeServerMessage as encodeServerMessage };
export { kAddToHead as kAddToHead };
export { kAddToTail as kAddToTail };
export { b_alloc_then as b_alloc_then };
export { b_memcpy as b_memcpy };
export { b_alloc_then_memcpy as b_alloc_then_memcpy };
export { b_getn1 as b_getn1 };
export { b_query1 as b_query1 };
export { c_set1 as c_set1 };
export { c_setn1 as c_setn1 };
export { d_recv as d_recv };
export { d_recv_then as d_recv_then };
export { g_new as g_new };
export { g_new1 as g_new1 };
export { g_freeAll as g_freeAll };
export { g_freeAll1 as g_freeAll1 };
export { m_status as m_status };
export { m_dumpOsc as m_dumpOsc };
export { m_notify as m_notify };
export { s_new0 as s_new0 };
function audiobuffer_to_scsynth_buffer(scsynth, audioBuffer, bufferNumber, numberOfChannels, bufferData) {
    const numberOfFrames = audioBuffer.length;
    const sampleRate = audioBuffer.sampleRate;
    const oscMessage = b_alloc_then_memcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, encodeFloat32Array(bufferData));
    console.log(`audiobuffer_to_scsynth_buffer: ${oscMessage}`);
    scsynth.sendOsc(oscMessage);
}
function fetch_soundfile_to_scsynth_buffer(scsynth, soundFileUrl, numberOfChannels, bufferNumber) {
    fetch_soundfile_to_audiobuffer_and_then(soundFileUrl, function(audioBuffer) {
        if (audioBuffer.numberOfChannels === numberOfChannels) {
            audiobuffer_to_scsynth_buffer(scsynth, audioBuffer, bufferNumber, numberOfChannels, audiobuffer_interleaved_channel_data(audioBuffer));
        } else {
            console.error('fetch_soundfile_to_scsynth_buffer: numberOfChannels mismatch');
        }
    });
}
function fetch_soundfile_channels_to_scsynth_buffers(scsynth, soundFileUrl, bufferNumbers, channelIndices) {
    fetch_soundfile_to_audiobuffer_and_then(soundFileUrl, function(audioBuffer) {
        for(let i = 0; i < bufferNumbers.length; i++){
            const bufferNumber = bufferNumbers[i];
            const channelIndex = channelIndices[i];
            if (channelIndex >= 1 && channelIndex <= audioBuffer.numberOfChannels) {
                audiobuffer_to_scsynth_buffer(scsynth, audioBuffer, bufferNumber, 1, audioBuffer.getChannelData(channelIndex - 1));
            } else {
                console.error(`fetch_soundfile_channels_to_scsynth_buffers: index out of bounds: ${channelIndex}, ${audioBuffer.numberOfChannels}`);
            }
        }
    });
}
export { audiobuffer_to_scsynth_buffer as audiobuffer_to_scsynth_buffer };
export { fetch_soundfile_to_scsynth_buffer as fetch_soundfile_to_scsynth_buffer };
export { fetch_soundfile_channels_to_scsynth_buffers as fetch_soundfile_channels_to_scsynth_buffers };
const sc3_buffer = {
    dict: {
        'crotale-d6': 'https://rohandrape.net/pub/jssc3/flac/crotale-d6.flac',
        'harp-a4': 'https://rohandrape.net/pub/jssc3/flac/harp-a4.flac',
        'piano-c5': 'https://rohandrape.net/pub/jssc3/flac/piano-c5.flac',
        'floating_1': 'https://rohandrape.net/pub/jssc3/flac/floating_1.flac',
        'then': 'https://rohandrape.net/pub/jssc3/flac/then.flac'
    },
    cache: {},
    next: 100
};
function SfAcquire(urlOrKey, numberOfChannels, channelSelector) {
    if (globalThis.globalScsynth) {
        const channelIndices = asArray(channelSelector);
        const soundFileUrl = sc3_buffer.dict[urlOrKey] || urlOrKey;
        let cacheValue = sc3_buffer.cache[soundFileUrl];
        if (!cacheValue) {
            const bufferNumberArray = arrayFromTo(sc3_buffer.next, sc3_buffer.next + numberOfChannels - 1);
            fetch_soundfile_channels_to_scsynth_buffers(globalThis.globalScsynth, soundFileUrl, bufferNumberArray, channelIndices);
            sc3_buffer.cache[soundFileUrl] = bufferNumberArray;
            sc3_buffer.next += numberOfChannels;
            cacheValue = bufferNumberArray;
        }
        if (isArray(channelIndices)) {
            return channelIndices.map((item)=>arrayAtWrap(cacheValue, item - 1));
        } else {
            return [
                arrayAtWrap(cacheValue, channelIndices - 1)
            ];
        }
    } else {
        return -1;
    }
}
export { sc3_buffer as sc3_buffer };
export { SfAcquire as SfAcquire };
function EventParam(v, u) {
    return {
        v: v,
        w: u[0],
        x: u[1],
        y: u[2],
        z: u[3],
        o: u[4],
        rx: u[5],
        ry: u[6],
        p: u[7],
        px: u[8]
    };
}
function eventV(e) {
    return e.v;
}
function eventW(e) {
    return e.w;
}
function eventX(e) {
    return e.x;
}
function eventY(e) {
    return e.y;
}
function eventZ(e) {
    return e.z;
}
function eventO(e) {
    return e.o;
}
function eventRx(e) {
    return e.rx;
}
function eventRy(e) {
    return e.ry;
}
function eventP(e) {
    return e.p;
}
function voiceAddr(voiceNumber) {
    const voiceAddr = 13000 + (voiceNumber - 1 + 0) * 10;
    return voiceAddr;
}
function Voicer(numVoices, voiceFunc) {
    return arrayFromTo(1, numVoices).map(function(c) {
        const controlArray = ControlIn(9, voiceAddr(c + 0));
        return voiceFunc(EventParam(c + 0, controlArray));
    });
}
function eventParamSetMessage(e) {
    return c_setn1(voiceAddr(e.v), [
        e.w,
        e.x,
        e.y,
        e.z,
        e.o,
        e.rx,
        e.ry,
        e.p,
        e.px
    ]);
}
function voiceEndMessage(voiceNumber) {
    return c_set1(voiceAddr(voiceNumber), 0);
}
function KeyDown(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 0);
}
function KeyTimbre(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 2);
}
function KeyPressure(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 3);
}
function KeyVelocity(voiceNumber) {
    return Latch(KeyPressure(voiceNumber), KeyDown(voiceNumber));
}
function KeyPitch(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 7);
}
function PenDown(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 0);
}
function PenX(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 1);
}
function PenY(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 2);
}
function PenZ(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 3);
}
function PenAngle(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 4);
}
function PenRadius(voiceNumber) {
    return ControlIn(1, voiceAddr(voiceNumber) + 5);
}
export { EventParam as EventParam };
export { eventV as eventV };
export { eventW as eventW };
export { eventX as eventX };
export { eventY as eventY };
export { eventZ as eventZ };
export { eventO as eventO };
export { eventRx as eventRx };
export { eventRy as eventRy };
export { eventP as eventP };
export { voiceAddr as voiceAddr };
export { Voicer as Voicer };
export { eventParamSetMessage as eventParamSetMessage };
export { voiceEndMessage as voiceEndMessage };
export { KeyDown as KeyDown };
export { KeyTimbre as KeyTimbre };
export { KeyPressure as KeyPressure };
export { KeyVelocity as KeyVelocity };
export { KeyPitch as KeyPitch };
export { PenDown as PenDown };
export { PenX as PenX };
export { PenY as PenY };
export { PenZ as PenZ };
export { PenAngle as PenAngle };
export { PenRadius as PenRadius };
function ugenTraverseCollecting(p, c, w) {
    consoleDebug(`ugenTraverseCollecting: ${p}, ${c}, ${w}`);
    if (isArray(p)) {
        consoleDebug(`ugenTraverseCollecting: array: ${p}`);
        arrayForEach(p, (item)=>ugenTraverseCollecting(item, c, w));
    } else if (isUgen(p)) {
        const mrgArray = setAsArray(p.scUgen.mrg);
        consoleDebug(`ugenTraverseCollecting: port: ${p}`);
        if (!setIncludes(w, p.scUgen)) {
            setAdd(c, p.scUgen);
            arrayForEach(p.scUgen.inputArray, (item)=>isNumber(item) ? setAdd(c, item) : ugenTraverseCollecting(item, c, w));
            arrayForEach(mrgArray, (item)=>isNumber(item) ? setAdd(c, item) : ugenTraverseCollecting(item, c, c));
        }
    } else {
        console.error('ugenTraverseCollecting: unknown type', p, c, w);
    }
}
function ugenGraphLeafNodes(p) {
    consoleDebug(`ugenGraphLeafNodes: ${p}`);
    const c = setNew();
    ugenTraverseCollecting(p, c, setNew());
    return setAsArray(c);
}
class Graph {
    name;
    ugenSeq;
    constantSeq;
    constructor(name, ugenSeq, constantSeq){
        this.name = name;
        this.ugenSeq = ugenSeq;
        this.constantSeq = constantSeq;
    }
}
function signalToUgenGraph(signal) {
    consoleDebug(`signalToUgenGraph: ${signal}`);
    return signal;
}
function makeGraph(name, signal) {
    consoleDebug(`makeGraph: ${name}, ${signal}`);
    const graph = signalToUgenGraph(signal);
    const leafNodes = ugenGraphLeafNodes(graph);
    const constantNodes = arrayFilter(leafNodes, isNumber);
    const ugenNodes = arrayFilter(leafNodes, isScUgen);
    const ugenSeq = arraySort(ugenNodes, scUgenCompare);
    const numLocalBufs = arrayLength(arrayFilter(ugenSeq, (item)=>item.name === 'LocalBuf'));
    const MaxLocalBufs = function(count) {
        return new ScUgen('MaxLocalBufs', 1, 0, 0, [
            count
        ]);
    };
    return new Graph(name, arrayAppend([
        MaxLocalBufs(numLocalBufs)
    ], ugenSeq), arraySort(arrayNub(arrayAppend([
        numLocalBufs
    ], constantNodes)), (i, j)=>i - j));
}
function graphConstantIndex(graph, constantValue) {
    return arrayIndexOf(graph.constantSeq, constantValue);
}
function graphUgenIndex(graph, id) {
    return arrayFindIndex(graph.ugenSeq, (ugen)=>ugen.id === id);
}
function graphUgenInputSpec(graph, input) {
    if (isUgen(input)) {
        return [
            graphUgenIndex(graph, input.scUgen.id),
            input.port
        ];
    } else {
        return [
            -1,
            graphConstantIndex(graph, input)
        ];
    }
}
const SCgf = Number(1396926310);
function graphEncodeUgenSpec(graph, ugen) {
    return [
        encodePascalString(ugen.name),
        encodeInt8(ugen.rate),
        encodeInt32(arrayLength(ugen.inputArray)),
        encodeInt32(ugen.numChan),
        encodeInt16(ugen.specialIndex),
        arrayMap((input)=>arrayMap((index)=>encodeInt32(index), graphUgenInputSpec(graph, input)), ugen.inputArray),
        arrayReplicate(ugen.numChan, encodeInt8(ugen.rate))
    ];
}
function graphEncodeSyndef(graph) {
    return flattenByteEncoding([
        encodeInt32(SCgf),
        encodeInt32(2),
        encodeInt16(1),
        encodePascalString(graph.name),
        encodeInt32(arrayLength(graph.constantSeq)),
        arrayMap((item)=>encodeFloat32(item), graph.constantSeq),
        encodeInt32(0),
        encodeInt32(0),
        encodeInt32(arrayLength(graph.ugenSeq)),
        arrayMap((item)=>graphEncodeUgenSpec(graph, item), graph.ugenSeq),
        encodeInt16(0)
    ]);
}
function encodeUgen(name, ugen) {
    consoleDebug(`encodeUgen: ${name}, ${ugen}`);
    return graphEncodeSyndef(makeGraph(name, ugen));
}
export { ugenTraverseCollecting as ugenTraverseCollecting };
export { ugenGraphLeafNodes as ugenGraphLeafNodes };
export { Graph as Graph };
export { signalToUgenGraph as signalToUgenGraph };
export { makeGraph as makeGraph };
export { graphConstantIndex as graphConstantIndex };
export { graphUgenIndex as graphUgenIndex };
export { graphUgenInputSpec as graphUgenInputSpec };
export { SCgf as SCgf };
export { graphEncodeUgenSpec as graphEncodeUgenSpec };
export { graphEncodeSyndef as graphEncodeSyndef };
export { encodeUgen as encodeUgen };
function graphPrintUgenSpec(graph, ugen) {
    console.log(ugen.name, ugen.rate, arrayLength(ugen.inputArray), ugen.numChan, ugen.specialIndex, arrayMap((input)=>graphUgenInputSpec(graph, input), ugen.inputArray), arrayReplicate(ugen.numChan, ugen.rate));
}
function graphPrintSyndef(graph) {
    console.log(SCgf, 2, 1, graph.name, arrayLength(graph.constantSeq), graph.constantSeq, 0, [], 0, [], arrayLength(graph.ugenSeq));
    arrayForEach(graph.ugenSeq, (item)=>graphPrintUgenSpec(graph, item));
    console.log(0, []);
}
function printSyndefOf(ugen) {
    const graph = makeGraph('sc3.js', wrapOut(0, ugen));
    graphPrintSyndef(graph);
}
function graphInputDisplayName(graph, input) {
    if (isUgen(input)) {
        const id = String(graphUgenIndex(graph, input.scUgen.id));
        const nm = ugenDisplayName(input.scUgen);
        const ix = input.scUgen.numChan > 1 ? '[' + String(input.port) + ']' : '';
        return id + '_' + nm + ix;
    } else if (isNumber(input)) {
        return String(input);
    } else {
        console.error('graphInputDisplayName', input);
        return '?';
    }
}
function graphPrettyPrintUgen(graph, ugen) {
    console.log(graphUgenIndex(graph, ugen.id) + '_' + ugenDisplayName(ugen), rateSelector(ugen.rate), '[' + String(arrayMap((input)=>graphInputDisplayName(graph, input), ugen.inputArray)) + ']');
}
function graphPrettyPrintSyndef(graph) {
    arrayForEach(graph.ugenSeq, (item)=>graphPrettyPrintUgen(graph, item));
}
function prettyPrintSyndefOf(ugen) {
    const graph = makeGraph('sc3.js', wrapOut(0, ugen));
    graphPrettyPrintSyndef(graph);
}
export { graphPrintUgenSpec as graphPrintUgenSpec };
export { graphPrintSyndef as graphPrintSyndef };
export { printSyndefOf as printSyndefOf };
export { graphInputDisplayName as graphInputDisplayName };
export { graphPrettyPrintUgen as graphPrettyPrintUgen };
export { graphPrettyPrintSyndef as graphPrettyPrintSyndef };
export { prettyPrintSyndefOf as prettyPrintSyndefOf };
class Scsynth {
    options;
    boot;
    sendOsc;
    monitorDisplay;
    isAlive;
    isStarting;
    hasIoUgens;
    synthPort;
    langPort;
    status;
    constructor(options, boot, sendOsc, monitorDisplay){
        this.options = options;
        this.boot = boot;
        this.sendOsc = sendOsc;
        this.monitorDisplay = monitorDisplay;
        this.isAlive = false;
        this.isStarting = false;
        this.synthPort = 57110;
        this.langPort = 57120;
        this.hasIoUgens = false;
        this.status = {
            ugenCount: 0
        };
    }
}
function scsynthEnsure(scsynth, activity) {
    if (scsynth.isAlive) {
        consoleDebug('scsynthEnsure: alive, do activity');
        activity();
    } else if (scsynth.isStarting) {
        console.log('scsynthEnsure: starting, schedule activity');
        setTimeout(()=>scsynthEnsure(scsynth, activity), 1000);
    } else {
        console.log('scsynthEnsure: offline, start and schedule activity');
        scsynth.boot();
        setTimeout(()=>scsynthEnsure(scsynth, activity), 1000);
    }
}
function playSyndef(scsynth, syndefName, syndefData, groupId) {
    console.log('playSyndef #', syndefData.length);
    scsynth.sendOsc(d_recv_then(syndefData, encodeServerMessage(s_new0(syndefName, -1, 1, groupId))));
}
function playUgen(scsynth, ugenGraph, groupId) {
    const syndefName = 'anonymous';
    const syndef = encodeUgen(syndefName, wrapOut(0, ugenGraph));
    playSyndef(scsynth, syndefName, syndef, groupId);
}
function playProcedure(scsynth, ugenFunction, groupId) {
    playUgen(scsynth, ugenFunction(), groupId);
}
function initGroupStructure(scsynth) {
    scsynth.sendOsc(g_new([
        [
            1,
            1,
            0
        ],
        [
            2,
            1,
            0
        ]
    ]));
}
function resetScsynth(scsynth) {
    scsynth.sendOsc(g_freeAll([
        1,
        2
    ]));
    initGroupStructure(scsynth);
}
function requestStatus(scsynth) {
    scsynth.sendOsc(m_status);
}
function requestNotifications(scsynth) {
    scsynth.sendOsc(m_notify(1, 1));
}
function requestPrintingOsc(scsynth) {
    scsynth.sendOsc(m_dumpOsc(1));
}
function setPointerControls(scsynth, n, w, x, y) {
    if (scsynth.isAlive) {
        scsynth.sendOsc(c_setn1(15001 + n * 10, [
            w,
            x,
            y
        ]));
    }
}
export { Scsynth as Scsynth };
export { scsynthEnsure as scsynthEnsure };
export { playSyndef as playSyndef };
export { playUgen as playUgen };
export { playProcedure as playProcedure };
export { initGroupStructure as initGroupStructure };
export { resetScsynth as resetScsynth };
export { requestStatus as requestStatus };
export { requestNotifications as requestNotifications };
export { requestPrintingOsc as requestPrintingOsc };
export { setPointerControls as setPointerControls };
const sc3_mouse = {
    w: 0,
    x: 0,
    y: 0
};
function sc3_mouse_init(scsynth) {
    const recv_document_mouse_event = function(event) {
        sc3_mouse.x = event.pageX / window.innerWidth;
        sc3_mouse.y = 1 - event.pageY / window.innerHeight;
        sc3_mouse.w = event.buttons === 1 ? 1 : 0;
        setPointerControls(scsynth, 0, sc3_mouse.w, sc3_mouse.x, sc3_mouse.y);
    };
    document.onmousedown = recv_document_mouse_event;
    document.onmousemove = recv_document_mouse_event;
    document.onmouseup = recv_document_mouse_event;
}
export { sc3_mouse_init as sc3_mouse_init };
const scsynthDefaultOptions = {
    numInputs: 2,
    numOutputs: 2,
    hardwareBufferSize: 8192,
    blockSize: 48
};
function scsynthOptionsPrint(options) {
    console.log('-i', options.numInputs, '-o', options.numOutputs, '-Z', options.hardwareBufferSize, '-z', options.blockSize);
}
export { scsynthDefaultOptions as scsynthDefaultOptions };
export { scsynthOptionsPrint as scsynthOptionsPrint };
function initScsynthWasmModule(Module, logFunction, displayFunction) {
    Module.preRun = [];
    Module.postRun = [];
    Module.print = function(text) {
        logFunction('wasm/print', text);
    };
    Module.printErr = function(text) {
        logFunction('wasm/error', text);
    };
    Module.totalDependencies = 0;
    Module.monitorRunDependencies = function(left) {
        logFunction('wasm/monitorRunDependencies', '# ' + String(left));
        if (left > 0) {
            displayFunction("Loading...");
        }
    };
    Module.onRuntimeInitialized = function() {
        logFunction('wasm/onRuntimeInitialized', '...');
        displayFunction("&nbsp;");
    };
}
export { initScsynthWasmModule as initScsynthWasmModule };
function scsynthWasm(options, wasm, status) {
    const scsynth = new Scsynth(options, ()=>bootScsynthWasm(scsynth, wasm), (oscPacket)=>sendOscWasm(scsynth, wasm, oscPacket), status);
    return scsynth;
}
function sendOscWasm(scsynth, wasm, oscPacket) {
    consoleDebug(`sendOscWasm: ${oscPacket}`);
    if ((scsynth.isStarting || scsynth.isAlive) && wasm.oscDriver) {
        const port = wasm.oscDriver[scsynth.synthPort];
        const recv = port && port.receive;
        if (recv) {
            recv(scsynth.langPort, encodeServerPacket(oscPacket));
        } else {
            console.warn('sendOscWasm: recv?');
        }
    } else {
        console.warn('sendOscWasm: scsynth not running', scsynth.isStarting, scsynth.isAlive);
    }
}
function bootScsynthWasm(scsynth, wasm) {
    scsynthOptionsPrint(scsynth.options);
    if (!scsynth.isAlive && !scsynth.isStarting) {
        const args = wasm['arguments'];
        args[args.indexOf('-i') + 1] = String(scsynth.options.numInputs);
        args[args.indexOf('-o') + 1] = String(scsynth.options.numOutputs);
        args.push('-Z', String(scsynth.options.hardwareBufferSize));
        args.push('-z', String(scsynth.options.blockSize));
        args.push('-w', '512');
        args.push('-m', '32768');
        consoleDebug('bootScsynthWasm: callMain');
        wasm.callMain(args);
        setTimeout(()=>monitorOscWasm(scsynth, wasm), 1000);
        setInterval(()=>sendOscWasm(scsynth, wasm, m_status), 1000);
        scsynth.isStarting = true;
    } else {
        console.log('bootScsynth: already running');
    }
}
function monitorOscWasm(scsynth, wasm) {
    consoleDebug('monitorOscWasm');
    wasm.oscDriver[scsynth.langPort] = {
        receive: function(addr, data) {
            if (scsynth.isStarting) {
                scsynth.isStarting = false;
                console.log('scsynth: starting completed');
            }
            if (!scsynth.isAlive) {
                scsynth.isAlive = true;
                initGroupStructure(scsynth);
            }
            const msg = decodeServerMessage(data);
            if (msg.address === '/status.reply') {
                const ugenCount = msg.args[1].value;
                scsynth.status.ugenCount = ugenCount;
                scsynth.monitorDisplay('# ' + ugenCount);
            } else if (msg.address === '/done') {
                console.log('/done', msg.args[0]);
            } else {
                console.log('monitorOsc', addr, JSON.stringify(msg, null, 4));
            }
        }
    };
}
export { scsynthWasm as scsynthWasm };
export { sendOscWasm as sendOscWasm };
export { bootScsynthWasm as bootScsynthWasm };
if (globalThis.Module !== undefined) {
    initScsynthWasmModule(globalThis.Module, consoleLogMessageFrom, function(_text) {
        return null;
    });
}
function sc3_wasm_init(showStatus) {
    globalThis.globalScsynth = scsynthWasm(scsynthDefaultOptions, globalThis.Module, showStatus);
    consoleDebug(`sc3_wasm_init: Module: ${globalThis.Module}`);
    globalThis.onerror = function(event) {
        consoleLogMessageFrom('globalThis.onerror', String(event));
    };
}
export { sc3_wasm_init as sc3_wasm_init };
function append(lhs, rhs) {
    return lhs.concat(rhs);
}
function choose(anArray) {
    return anArray[randomInteger(0, anArray.length)];
}
function clump(anArray, n) {
    return arrayClump(anArray, n);
}
function collect(anArray, proc) {
    return anArray.map(proc);
}
function concatenation(anArray) {
    return arrayConcatenation(anArray);
}
function first(anArray) {
    return anArray[0];
}
function nth(anArray, index) {
    return anArray[index - 1];
}
function reverse(anArray) {
    return anArray.reverse();
}
function second(anArray) {
    return anArray[1];
}
function size(anArray) {
    return anArray.length;
}
function third(anArray) {
    return anArray[2];
}
function transpose(anArray) {
    return arrayTranspose(anArray);
}
function mean(anArray) {
    return Fdiv(sum(anArray), anArray.length);
}
function product(anArray) {
    return anArray.reduce(Mul);
}
function sum(anArray) {
    return anArray.reduce(Add);
}
function abs(aNumber) {
    return Abs(aNumber);
}
function ceiling(aNumber) {
    return Ceil(aNumber);
}
function cubed(aNumber) {
    return Cubed(aNumber);
}
function exp(aNumber) {
    return Exp(aNumber);
}
function floor(aNumber) {
    return Floor(aNumber);
}
function log(aNumber) {
    return Log(aNumber);
}
function negated(aNumber) {
    return Neg(aNumber);
}
function reciprocal(aNumber) {
    return Recip(aNumber);
}
function rounded(aNumber) {
    return RoundTo(aNumber, 1);
}
function sin(aNumber) {
    return Sin(aNumber);
}
function sqrt(aNumber) {
    return Sqrt(aNumber);
}
function tanh(aNumber) {
    return Tanh(aNumber);
}
function max(a, b) {
    return Max(a, b);
}
function min(a, b) {
    return Min(a, b);
}
function roundTo(a, b) {
    return RoundTo(a, b);
}
function truncateTo(a, b) {
    return Trunc(a, b);
}
function cpsMidi(aNumber) {
    return CpsMidi(aNumber);
}
function midiCps(aNumber) {
    return MidiCps(aNumber);
}
function midiRatio(aNumber) {
    return MidiRatio(aNumber);
}
function unitCps(aNumber) {
    return UnitCps(aNumber);
}
function rand(min, max) {
    return randomFloat(min, max);
}
function rand2(n) {
    return randomFloat(0 - n, n);
}
function timesRepeat(count, proc) {
    return numberTimesRepeat(count, proc);
}
function to(from, to) {
    return arrayFromTo(from, to);
}
function dup(proc, count) {
    return arrayFill(nullFix('dup: count?', count, 2), proc);
}
function value(proc, maybeArg1, maybeArg2) {
    return maybeArg2 ? proc(maybeArg1, maybeArg2) : maybeArg1 ? proc(maybeArg1) : proc();
}
function coord(anEnvelope) {
    return envCoord(anEnvelope);
}
export { append as append };
export { choose as choose };
export { clump as clump };
export { collect as collect };
export { concatenation as concatenation };
export { first as first };
export { nth as nth };
export { reverse as reverse };
export { second as second };
export { size as size };
export { third as third };
export { transpose as transpose };
export { mean as mean };
export { product as product };
export { sum as sum };
export { abs as abs };
export { ceiling as ceiling };
export { cubed as cubed };
export { exp as exp };
export { floor as floor };
export { log as log };
export { negated as negated };
export { reciprocal as reciprocal };
export { rounded as rounded };
export { sin as sin };
export { sqrt as sqrt };
export { tanh as tanh };
export { max as max };
export { min as min };
export { roundTo as roundTo };
export { truncateTo as truncateTo };
export { cpsMidi as cpsMidi };
export { midiCps as midiCps };
export { midiRatio as midiRatio };
export { unitCps as unitCps };
export { rand as rand };
export { rand2 as rand2 };
export { timesRepeat as timesRepeat };
export { to as to };
export { dup as dup };
export { value as value };
export { coord as coord };
function stc_is_binary_selector(text) {
    const allowed = Array.from('!%&*+/<=>?@\\~|-');
    const answer = Array.from(text).every((item)=>allowed.includes(item));
    return answer;
}
function stc_binary_selector_from_operator(text) {
    switch(text){
        case '+':
            return 'Add';
        case '-':
            return 'Sub';
        case '*':
            return 'Mul';
        case '/':
            return 'Fdiv';
        case '%':
            return 'Mod';
        case '==':
            return 'Eq';
        case '!=':
            return 'Neq';
        case '<':
            return 'Lt';
        case '>':
            return 'Gt';
        case '<=':
            return 'Le';
        case '>=':
            return 'Ge';
        case '&':
            return 'BitAnd';
        case '|':
            return 'BitOr';
        case '<<':
            return 'ShiftLeft';
        case '>>':
            return 'ShiftRight';
        case '**':
            return 'Pow';
        case '->':
            return 'Association';
        case 'midiCps':
            return 'MidiCps';
        default:
            console.warn(`stc_binary_selector_from_operator: ${text}`);
            return text;
    }
}
function stc_to_js_and_then(stcText, procFunc) {
    if (stcText.trim() === '') {
        procFunc('');
    } else {
        const urlPrefix = 'cgi-bin/stsc3-cgi.py?cmd=stc-to-js&stc=';
        const encodedStcText = encodeURIComponent(stcText);
        load_utf8_and_then(urlPrefix + encodedStcText, procFunc);
    }
}
export { stc_is_binary_selector as stc_is_binary_selector };
export { stc_binary_selector_from_operator as stc_binary_selector_from_operator };
export { stc_to_js_and_then as stc_to_js_and_then };
function OverlapTexture(graphFunc, sustainTime, transitionTime, overlap) {
    const voiceFunction = function(i) {
        const trg = kr(Impulse(1 / (sustainTime + transitionTime * 2), i / overlap));
        const snd = graphFunc(trg);
        const env = new Env([
            0,
            1,
            1,
            0
        ], [
            transitionTime,
            sustainTime,
            transitionTime
        ], 'sin', null, null, 0);
        const sig = Mul(snd, EnvGen(trg, 1, 0, 1, 0, envCoord(env)));
        return sig;
    };
    return arrayReduce(arrayMap(voiceFunction, arrayFromTo(0, overlap - 1)), Add);
}
export { OverlapTexture as OverlapTexture };
