function isArray(aValue) {
    return Array.isArray(aValue);
}
function scalarOrArray(maybeArray, scalarFunc, arrayFunc) {
    return isArray(maybeArray) ? arrayFunc(maybeArray) : scalarFunc(maybeArray);
}
function scalarOrArraySize(maybeArray) {
    return isArray(maybeArray) ? maybeArray.length : 1;
}
function scalarOrArrayFirst(maybeArray) {
    return isArray(maybeArray) ? maybeArray[0] : maybeArray;
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
function arrayExtendToBeOfEqualSize(atLeast, anArray) {
    const maxSize = Math.max(atLeast, arrayMaxSize(anArray));
    return anArray.map((item)=>arrayExtendCyclically(asArray(item), maxSize));
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
function arrayMaxSize(anArray) {
    return arrayMaxItem(anArray.map((item)=>isArray(item) ? item.length : 1));
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
    return anArray.reduce((lhs, rhs)=>lhs + rhs, 0);
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
    return anArray[0].map((_unusedColumn, i)=>anArray.map((row)=>row[i]));
}
function arrayUnlines(anArray) {
    return anArray.join('\n');
}
export { isArray as isArray };
export { scalarOrArray as scalarOrArray };
export { scalarOrArraySize as scalarOrArraySize };
export { scalarOrArrayFirst as scalarOrArrayFirst };
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
export { arrayMaxSize as arrayMaxSize };
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
function interleaveSampleDataInto(numberOfFrames, numberOfChannels, channelsArray, interleavedArray) {
    for(let i = 0; i < numberOfFrames; i++){
        for(let j = 0; j < numberOfChannels; j++){
            interleavedArray[i * numberOfChannels + j] = channelsArray[j][i];
        }
    }
}
function deinterleaveSampleDataInto(numberOfFrames, numberOfChannels, interleavedArray, channelsArray) {
    for(let i = 0; i < numberOfFrames; i++){
        for(let j = 0; j < numberOfChannels; j++){
            channelsArray[j][i] = interleavedArray[i * numberOfChannels + j];
        }
    }
}
function interleaveSampleData(numberOfFrames, numberOfChannels, channelsArray, cons) {
    const interleavedArray = cons(numberOfFrames * numberOfChannels);
    interleaveSampleDataInto(numberOfFrames, numberOfChannels, channelsArray, interleavedArray);
    return interleavedArray;
}
function deinterleaveSampleData(numberOfFrames, numberOfChannels, interleavedArray, cons) {
    const channelsArray = arrayFill(numberOfChannels, ()=>cons(numberOfFrames));
    deinterleaveSampleDataInto(numberOfFrames, numberOfChannels, interleavedArray, channelsArray);
    return channelsArray;
}
export { interleaveSampleDataInto as interleaveSampleDataInto };
export { deinterleaveSampleDataInto as deinterleaveSampleDataInto };
export { interleaveSampleData as interleaveSampleData };
export { deinterleaveSampleData as deinterleaveSampleData };
function audioBufferNumberOfSamples(anAudioBuffer) {
    return anAudioBuffer.length * anAudioBuffer.numberOfChannels;
}
function audioBufferChannelDataArray(anAudioBuffer) {
    return arrayFillWithIndex(anAudioBuffer.numberOfChannels, (i)=>anAudioBuffer.getChannelData(i));
}
function audioBufferInterleavedChannelData(anAudioBuffer) {
    if (anAudioBuffer.numberOfChannels === 1) {
        return anAudioBuffer.getChannelData(0);
    } else {
        const channelsArray = audioBufferChannelDataArray(anAudioBuffer);
        return interleaveSampleData(anAudioBuffer.length, anAudioBuffer.numberOfChannels, channelsArray, (size)=>new Float32Array(size));
    }
}
function audioBufferMaximumAbsoluteValueAndFrameNumberOf(anAudioBuffer) {
    const channelsArray = audioBufferChannelDataArray(anAudioBuffer);
    let maximumValue = 0;
    let frameNumber = 0;
    for(let i = 0; i < anAudioBuffer.length; i++){
        for(let j = 0; j < anAudioBuffer.numberOfChannels; j++){
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
export { audioBufferNumberOfSamples as audioBufferNumberOfSamples };
export { audioBufferChannelDataArray as audioBufferChannelDataArray };
export { audioBufferInterleavedChannelData as audioBufferInterleavedChannelData };
export { audioBufferMaximumAbsoluteValueAndFrameNumberOf as audioBufferMaximumAbsoluteValueAndFrameNumberOf };
function systemSampleRate() {
    const audioContext = new globalThis.AudioContext();
    console.log('audioContext.sampleRate', audioContext.sampleRate);
    return audioContext.sampleRate;
}
export { systemSampleRate as systemSampleRate };
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
function getSelectedText() {
    const selection = document.getSelection();
    return selection ? selection.toString() : '';
}
function getSelectedTextOrContentsOf(elemId) {
    const selectedText = getSelectedText().trim();
    if (selectedText.length > 0) {
        return selectedText;
    } else {
        const element = document.getElementById(elemId);
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
function setterForInnerHtmlOf(elemId) {
    const elem = document.getElementById(elemId);
    return function(innerHtml) {
        if (elem) {
            elem.innerHTML = innerHtml;
        } else {
            console.warn(`setterForInnerHtmlOf: ${elemId}: elem was nil`);
        }
    };
}
function withElementById(elementId, elementProcedure) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('withElementById: not found: ', elementId);
    } else {
        elementProcedure(element);
    }
}
function withSelectElementById(selectId, selectProcedure) {
    withElementById(selectId, selectProcedure);
}
function selectOnChange(selectId, proc) {
    const guardedProc = function(anEvent) {
        const target = anEvent.target;
        if (target && target.value) {
            proc(target, target.value);
        }
    };
    withSelectElementById(selectId, (selectElement)=>selectElement.addEventListener('change', guardedProc));
}
function selectAddOptionTo(selectElement, optionValue, optionText) {
    const optionElement = document.createElement('option');
    optionElement.value = optionValue;
    optionElement.text = optionText;
    selectElement.add(optionElement, null);
}
function selectAddOptionAtId(selectId, optionValue, optionText) {
    withSelectElementById(selectId, (selectElement)=>selectAddOptionTo(selectElement, optionValue, optionText));
}
function selectClearFrom(selectId, startIndex) {
    withSelectElementById(selectId, function(selectElement) {
        const endIndex = selectElement.length;
        for(let i = startIndex; i < endIndex; i++){
            selectElement.remove(startIndex);
        }
    });
}
function selectAddKeysAsOptions(selectId, keyArray) {
    withSelectElementById(selectId, function(selectElement) {
        keyArray.forEach(function(key) {
            const option = document.createElement('option');
            option.value = key;
            option.text = key;
            selectElement.add(option, null);
        });
    });
}
function connectButtonToInput(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!button || !input) {
        console.warn('connectButtonToInput: element not located?');
    } else {
        button.addEventListener('click', (_unusedEvent)=>input.click(), false);
    }
}
function clickInput(inputId) {
    withElementById(inputId, (inputElement)=>inputElement.click());
}
function textareaGetSelectionOrContents(textareaElement) {
    if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        return textareaElement.value;
    } else {
        return textareaElement.value.substring(textareaElement.selectionStart, textareaElement.selectionEnd);
    }
}
function urlGetParam(key) {
    const params = new URLSearchParams(document.location.search);
    return params.get(key);
}
function windowUrlSetParam(key, value) {
    const windowUrl = new URL(globalThis.location.href);
    windowUrl.searchParams.set(key, value);
    globalThis.history.pushState({}, '', windowUrl);
}
function parseIntegerOrAlert(integerText, errorText, defaultAnswer) {
    const answer = Number.parseInt(integerText, 10);
    if (isNaN(answer)) {
        globalThis.alert(errorText);
        return defaultAnswer;
    } else {
        return answer;
    }
}
function withParsedInteger(integerText, proc) {
    const answer = Number.parseInt(integerText, 10);
    if (isNaN(answer)) {
        globalThis.alert('Not an integer?');
    } else {
        proc(answer);
    }
}
function fullscreenFor(element) {
    const fullscreenOptions = {
        navigationUI: 'hide'
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
function menuOnChangeWithOptionValue(menuId, changeProc) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.addEventListener('change', function(anEvent) {
            const target = anEvent.target;
            if (target) {
                const optionElement = target;
                changeProc(optionElement.value);
            } else {
                console.warn(`menuOnChangeWithTargetValue: no target or no target.value: ${menuId}`);
            }
        });
    } else {
        console.warn(`menuOnChangeWithTargetValue: no element: ${menuId}`);
    }
}
export { getSelectedText as getSelectedText };
export { getSelectedTextOrContentsOf as getSelectedTextOrContentsOf };
export { setInnerHtml as setInnerHtml };
export { setTextContent as setTextContent };
export { setterForInnerHtmlOf as setterForInnerHtmlOf };
export { withElementById as withElementById };
export { withSelectElementById as withSelectElementById };
export { selectOnChange as selectOnChange };
export { selectAddOptionTo as selectAddOptionTo };
export { selectAddOptionAtId as selectAddOptionAtId };
export { selectClearFrom as selectClearFrom };
export { selectAddKeysAsOptions as selectAddKeysAsOptions };
export { connectButtonToInput as connectButtonToInput };
export { clickInput as clickInput };
export { textareaGetSelectionOrContents as textareaGetSelectionOrContents };
export { urlGetParam as urlGetParam };
export { windowUrlSetParam as windowUrlSetParam };
export { parseIntegerOrAlert as parseIntegerOrAlert };
export { withParsedInteger as withParsedInteger };
export { fullscreen as fullscreen };
export { menuOnChangeWithOptionValue as menuOnChangeWithOptionValue };
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
function encodeInt16(aNumber, littleEndian) {
    return encodeUsing(2, (b)=>b.setInt16(0, aNumber, littleEndian));
}
function encodeInt32(aNumber, littleEndian) {
    return encodeUsing(4, (b)=>b.setInt32(0, aNumber, littleEndian));
}
function encodeFloat32(aNumber, littleEndian) {
    return encodeUsing(4, (b)=>b.setFloat32(0, aNumber, littleEndian));
}
function encodeFloat64(aNumber, littleEndian) {
    return encodeUsing(8, (b)=>b.setFloat64(0, aNumber, littleEndian));
}
function encodeTypedArray(inputArray, elementSize, writerFunction) {
    const arrayBuffer = new ArrayBuffer(inputArray.length * elementSize);
    const dataView = new DataView(arrayBuffer);
    for(let i = 0; i < inputArray.length; i++){
        writerFunction(dataView, i * elementSize, inputArray[i]);
    }
    const uint8Array = new Uint8Array(arrayBuffer);
    return uint8Array;
}
function encodeFloat32Array(inputArray, littleEndian) {
    return encodeTypedArray(inputArray, 4, (v, o, i)=>v.setFloat32(o, i, littleEndian));
}
function encodeFloat64Array(inputArray, littleEndian) {
    return encodeTypedArray(inputArray, 8, (v, o, i)=>v.setFloat64(o, i, littleEndian));
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
export { encodeFloat64 as encodeFloat64 };
export { encodeTypedArray as encodeTypedArray };
export { encodeFloat32Array as encodeFloat32Array };
export { encodeFloat64Array as encodeFloat64Array };
export { encodePascalString as encodePascalString };
function consoleDebug(text) {
    console.debug(text);
}
function consoleWarn(text) {
    console.warn(text);
}
function consoleError(text) {
    console.error(text);
}
function throwError(text) {
    console.error(text);
    throw new Error(text);
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
function errorMessage(error) {
    if (error instanceof Error) {
        return `${error.toString()} -> ${error.cause}`;
    }
    return error.toString();
}
export { consoleDebug as consoleDebug };
export { consoleWarn as consoleWarn };
export { consoleError as consoleError };
export { throwError as throwError };
export { consoleLog as consoleLog };
export { consoleLogMessageFrom as consoleLogMessageFrom };
export { logErrorAndReturn as logErrorAndReturn };
export { errorMessage as errorMessage };
function fetchArrayBuffer(resource, options) {
    return fetch(resource, options).then((response)=>response.arrayBuffer());
}
function fetchUtf8(resource, options) {
    return fetch(resource, options).then((response)=>response.text());
}
function fetchJson(resource, options) {
    return fetch(resource, options).then((response)=>response.json());
}
export { fetchArrayBuffer as fetchArrayBuffer };
export { fetchUtf8 as fetchUtf8 };
export { fetchJson as fetchJson };
function functionArity(aFunction) {
    return aFunction.length;
}
function makeAritySpecificFunction(arrayFunction, arity) {
    switch(arity){
        case 0:
            return function() {
                return arrayFunction([]);
            };
        case 1:
            return function(a) {
                return arrayFunction([
                    a
                ]);
            };
        case 2:
            return function(a, b) {
                return arrayFunction([
                    a,
                    b
                ]);
            };
        case 3:
            return function(a, b, c) {
                return arrayFunction([
                    a,
                    b,
                    c
                ]);
            };
        case 4:
            return function(a, b, c, d) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d
                ]);
            };
        case 5:
            return function(a, b, c, d, e) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e
                ]);
            };
        case 6:
            return function(a, b, c, d, e, f) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f
                ]);
            };
        case 7:
            return function(a, b, c, d, e, f, g) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g
                ]);
            };
        case 8:
            return function(a, b, c, d, e, f, g, h) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h
                ]);
            };
        case 9:
            return function(a, b, c, d, e, f, g, h, i) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i
                ]);
            };
        case 10:
            return function(a, b, c, d, e, f, g, h, i, j) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j
                ]);
            };
        case 11:
            return function(a, b, c, d, e, f, g, h, i, j, k) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k
                ]);
            };
        case 12:
            return function(a, b, c, d, e, f, g, h, i, j, k, l) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l
                ]);
            };
        case 13:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m
                ]);
            };
        case 14:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n
                ]);
            };
        case 15:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o
                ]);
            };
        case 16:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p
                ]);
            };
        case 17:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q
                ]);
            };
        case 18:
            return function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r
                ]);
            };
        default:
            throw `makeAritySpecificFunction: arity not supported: ${arity}`;
    }
}
function makeCheckedAritySpecificFunction(arrayFunction, arity) {
    const checkArity = function(anArray) {
        if (anArray.length !== arity) {
            const errorString = `makeCheckedAritySpecificFunction: ${anArray.length} != ${arity}`;
            console.error(errorString);
            throw errorString;
        }
    };
    switch(arity){
        case 0:
            return function() {
                checkArity(arguments);
                return arrayFunction([]);
            };
        case 1:
            return function(a) {
                checkArity(arguments);
                return arrayFunction([
                    a
                ]);
            };
        case 2:
            return function(a, b) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b
                ]);
            };
        case 3:
            return function(a, b, c) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c
                ]);
            };
        case 4:
            return function(a, b, c, d) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d
                ]);
            };
        case 5:
            return function(a, b, c, d, e) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e
                ]);
            };
        case 6:
            return function(a, b, c, d, e, f) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f
                ]);
            };
        case 7:
            return function(a, b, c, d, e, f, g) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g
                ]);
            };
        case 8:
            return function(a, b, c, d, e, f, g, h) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h
                ]);
            };
        case 9:
            return function(a, b, c, d, e, f, g, h, i) {
                checkArity(arguments);
                return arrayFunction([
                    a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i
                ]);
            };
        default:
            throw `makeCheckedAritySpecificFunction: arity not supported: ${arity}`;
    }
}
export { functionArity as functionArity };
export { makeAritySpecificFunction as makeAritySpecificFunction };
export { makeCheckedAritySpecificFunction as makeCheckedAritySpecificFunction };
function localStorageKeys() {
    const arrayLength = localStorage.length;
    const answer = Array(arrayLength);
    for(let i = 0; i < arrayLength; i++){
        const key = localStorage.key(i);
        if (key) {
            answer[i] = key;
        } else {
            console.warn('localStorageKeys: null key?');
        }
    }
    return answer;
}
function localStorageDeleteMatching(predicate) {
    localStorageKeys().forEach(function(entry) {
        predicate(entry) ? localStorage.removeItem(entry) : null;
    });
}
export { localStorageKeys as localStorageKeys };
export { localStorageDeleteMatching as localStorageDeleteMatching };
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
const numberPi = Math.PI;
const numberInfinity = Infinity;
function numberTimesRepeat(count, proc) {
    for(let i = 0; i < count; i++){
        proc();
    }
}
function numberToString(aNumber) {
    return Number(aNumber).toString();
}
export { isNumber as isNumber };
export { numberPi as numberPi };
export { numberInfinity as numberInfinity };
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
const isWindows = globalThis.Deno?.build.os === "windows" || globalThis.navigator?.platform?.startsWith("Win") || globalThis.process?.platform?.startsWith("win") || false;
function assertPath(path) {
    if (typeof path !== "string") {
        throw new TypeError(`Path must be a string, received "${JSON.stringify(path)}"`);
    }
}
function stripSuffix(name, suffix) {
    if (suffix.length >= name.length) {
        return name;
    }
    const lenDiff = name.length - suffix.length;
    for(let i = suffix.length - 1; i >= 0; --i){
        if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
            return name;
        }
    }
    return name.slice(0, -suffix.length);
}
function lastPathSegment(path, isSep, start = 0) {
    let matchedNonSeparator = false;
    let end = path.length;
    for(let i = path.length - 1; i >= start; --i){
        if (isSep(path.charCodeAt(i))) {
            if (matchedNonSeparator) {
                start = i + 1;
                break;
            }
        } else if (!matchedNonSeparator) {
            matchedNonSeparator = true;
            end = i + 1;
        }
    }
    return path.slice(start, end);
}
function assertArgs(path, suffix) {
    assertPath(path);
    if (path.length === 0) return path;
    if (typeof suffix !== "string") {
        throw new TypeError(`Suffix must be a string, received "${JSON.stringify(suffix)}"`);
    }
}
function stripTrailingSeparators(segment, isSep) {
    if (segment.length <= 1) {
        return segment;
    }
    let end = segment.length;
    for(let i = segment.length - 1; i > 0; i--){
        if (isSep(segment.charCodeAt(i))) {
            end = i;
        } else {
            break;
        }
    }
    return segment.slice(0, end);
}
const CHAR_FORWARD_SLASH = 47;
function isPosixPathSeparator(code) {
    return code === 47;
}
function basename(path, suffix = "") {
    assertArgs(path, suffix);
    const lastSegment = lastPathSegment(path, isPosixPathSeparator);
    const strippedSegment = stripTrailingSeparators(lastSegment, isPosixPathSeparator);
    return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function isPosixPathSeparator1(code) {
    return code === 47;
}
function isPathSeparator(code) {
    return code === 47 || code === 92;
}
function isWindowsDeviceRoot(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
function basename1(path, suffix = "") {
    assertArgs(path, suffix);
    let start = 0;
    if (path.length >= 2) {
        const drive = path.charCodeAt(0);
        if (isWindowsDeviceRoot(drive)) {
            if (path.charCodeAt(1) === 58) start = 2;
        }
    }
    const lastSegment = lastPathSegment(path, isPathSeparator, start);
    const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
    return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function basename2(path, suffix = "") {
    return isWindows ? basename1(path, suffix) : basename(path, suffix);
}
function assertArg(path) {
    assertPath(path);
    if (path.length === 0) return ".";
}
function dirname(path) {
    assertArg(path);
    let end = -1;
    let matchedNonSeparator = false;
    for(let i = path.length - 1; i >= 1; --i){
        if (isPosixPathSeparator(path.charCodeAt(i))) {
            if (matchedNonSeparator) {
                end = i;
                break;
            }
        } else {
            matchedNonSeparator = true;
        }
    }
    if (end === -1) {
        return isPosixPathSeparator(path.charCodeAt(0)) ? "/" : ".";
    }
    return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator);
}
function dirname1(path) {
    assertArg(path);
    const len = path.length;
    let rootEnd = -1;
    let end = -1;
    let matchedSlash = true;
    let offset = 0;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code)) {
            rootEnd = offset = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return path;
                        }
                        if (j !== last) {
                            rootEnd = offset = j + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = offset = 2;
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) rootEnd = offset = 3;
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return path;
    }
    for(let i = len - 1; i >= offset; --i){
        if (isPathSeparator(path.charCodeAt(i))) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) {
        if (rootEnd === -1) return ".";
        else end = rootEnd;
    }
    return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator1);
}
function dirname2(path) {
    return isWindows ? dirname1(path) : dirname(path);
}
function extname(path) {
    assertPath(path);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for(let i = path.length - 1; i >= 0; --i){
        const code = path.charCodeAt(i);
        if (isPosixPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function extname1(path) {
    assertPath(path);
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path.length >= 2 && path.charCodeAt(1) === 58 && isWindowsDeviceRoot(path.charCodeAt(0))) {
        start = startPart = 2;
    }
    for(let i = path.length - 1; i >= start; --i){
        const code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function extname2(path) {
    return isWindows ? extname1(path) : extname(path);
}
function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && isPosixPathSeparator(path.charCodeAt(0));
}
function isAbsolute1(path) {
    assertPath(path);
    const len = path.length;
    if (len === 0) return false;
    const code = path.charCodeAt(0);
    if (isPathSeparator(code)) {
        return true;
    } else if (isWindowsDeviceRoot(code)) {
        if (len > 2 && path.charCodeAt(1) === 58) {
            if (isPathSeparator(path.charCodeAt(2))) return true;
        }
    }
    return false;
}
function isAbsolute2(path) {
    return isWindows ? isAbsolute1(path) : isAbsolute(path);
}
function assertArg1(path) {
    assertPath(path);
    if (path.length === 0) return ".";
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code;
    for(let i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (isPathSeparator(code)) break;
        else code = CHAR_FORWARD_SLASH;
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        } else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += `${separator}..`;
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 && dots !== -1) {
            ++dots;
        } else {
            dots = -1;
        }
    }
    return res;
}
function normalize(path) {
    assertArg1(path);
    const isAbsolute = isPosixPathSeparator(path.charCodeAt(0));
    const trailingSeparator = isPosixPathSeparator(path.charCodeAt(path.length - 1));
    path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
    if (path.length === 0 && !isAbsolute) path = ".";
    if (path.length > 0 && trailingSeparator) path += "/";
    if (isAbsolute) return `/${path}`;
    return path;
}
function join(...paths) {
    if (paths.length === 0) return ".";
    paths.forEach((path)=>assertPath(path));
    const joined = paths.filter((path)=>path.length > 0).join("/");
    return joined === "" ? "." : normalize(joined);
}
function normalize1(path) {
    assertArg1(path);
    const len = path.length;
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code)) {
            isAbsolute = true;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j);
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return `\\\\${firstPart}\\${path.slice(last)}\\`;
                        } else if (j !== last) {
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                            rootEnd = j;
                        }
                    }
                }
            } else {
                rootEnd = 1;
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                device = path.slice(0, 2);
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) {
                        isAbsolute = true;
                        rootEnd = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return "\\";
    }
    let tail;
    if (rootEnd < len) {
        tail = normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator);
    } else {
        tail = "";
    }
    if (tail.length === 0 && !isAbsolute) tail = ".";
    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
        tail += "\\";
    }
    if (device === undefined) {
        if (isAbsolute) {
            if (tail.length > 0) return `\\${tail}`;
            else return "\\";
        }
        return tail;
    } else if (isAbsolute) {
        if (tail.length > 0) return `${device}\\${tail}`;
        else return `${device}\\`;
    }
    return device + tail;
}
function join1(...paths) {
    paths.forEach((path)=>assertPath(path));
    paths = paths.filter((path)=>path.length > 0);
    if (paths.length === 0) return ".";
    let needsReplace = true;
    let slashCount = 0;
    const firstPart = paths[0];
    if (isPathSeparator(firstPart.charCodeAt(0))) {
        ++slashCount;
        const firstLen = firstPart.length;
        if (firstLen > 1) {
            if (isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
                    else {
                        needsReplace = false;
                    }
                }
            }
        }
    }
    let joined = paths.join("\\");
    if (needsReplace) {
        for(; slashCount < joined.length; ++slashCount){
            if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
        }
        if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
    }
    return normalize1(joined);
}
function join2(...paths) {
    return isWindows ? join1(...paths) : join(...paths);
}
function normalize2(path) {
    return isWindows ? normalize1(path) : normalize(path);
}
function pathBasename(aPath) {
    return basename2(aPath);
}
function pathDirectory(aPath) {
    return dirname2(aPath);
}
function pathExtension(aPath) {
    return extname2(aPath);
}
function pathIsAbsolute(aPath) {
    return isAbsolute2(aPath);
}
function pathJoin(pathArray) {
    return join2(...pathArray);
}
function pathNormalize(aPath) {
    return normalize2(aPath);
}
export { pathBasename as pathBasename };
export { pathDirectory as pathDirectory };
export { pathExtension as pathExtension };
export { pathIsAbsolute as pathIsAbsolute };
export { pathJoin as pathJoin };
export { pathNormalize as pathNormalize };
function withIntegerFromPrompt(promptText, defaultValue, proc) {
    const integerText = globalThis.prompt(promptText, String(defaultValue));
    if (integerText) {
        withParsedInteger(integerText, proc);
    }
}
function webSocketAddressDialog(receiveAddress) {
    const reply = globalThis.prompt('Set WebSocket address as Host:Port', 'localhost:9160');
    if (reply) {
        const [host, port] = reply.split(':');
        receiveAddress(host, Number(port));
    }
}
export { withIntegerFromPrompt as withIntegerFromPrompt };
export { webSocketAddressDialog as webSocketAddressDialog };
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
export { randomInteger as randomInteger };
export { randomIntegerInclusive as randomIntegerInclusive };
export { randomFloat as randomFloat };
export { randomBoolean as randomBoolean };
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
function stringCompare(p, q) {
    return p < q ? -1 : p > q ? 1 : 0;
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
export { stringCompare as stringCompare };
class SynchronousWriterQueue {
    writer;
    socket;
    messages;
    writeInProgress;
    constructor(writer, socket){
        this.writer = writer;
        this.socket = socket;
        this.messages = [];
        this.writeInProgress = false;
    }
    addMessage(message) {
        this.messages.push(message);
        if (!this.writeInProgress) {
            this.writeMessages();
        }
    }
    async writeMessages() {
        const writeCount = this.messages.length;
        if (this.writeInProgress) {
            throw new Error('SynchronousWriterQueue.writeMessages: write in progress?');
        } else {
            this.writeInProgress = true;
            while(this.messages.length > 0){
                const message = this.messages.shift();
                await this.writer(this.socket, message);
            }
            this.writeInProgress = false;
        }
        return writeCount;
    }
}
export { SynchronousWriterQueue as SynchronousWriterQueue };
function urlAppendTimeStamp(url) {
    const ms = new Date().getTime();
    const jn = /\?/.test(url) ? '&' : '?';
    const ext = jn + ms;
    return url + ext;
}
export { urlAppendTimeStamp as urlAppendTimeStamp };
function webSocketOpen(host, port) {
    try {
        const wsAddress = `ws://${host}:${Number(port).toString()}`;
        return new WebSocket(wsAddress);
    } catch (error) {
        console.error(`webSocketOpen: error = ${error}`);
        return null;
    }
}
function webSocketSend(webSocket, data) {
    if (webSocket && webSocket.readyState === 1) {
        webSocket.send(data);
    } else {
        console.warn('webSocketSend: webSocket nil or not ready?');
    }
}
function webSocketSendString(webSocket, data) {
    return webSocketSend(webSocket, data);
}
function webSocketSendBinary(webSocket, data) {
    return webSocketSend(webSocket, data);
}
function webSocketClose(webSocket) {
    if (webSocket) {
        webSocket.close();
    } else {
        console.warn('webSocketClose: webSocket nil?');
    }
}
export { webSocketOpen as webSocketOpen };
export { webSocketSend as webSocketSend };
export { webSocketSendString as webSocketSendString };
export { webSocketSendBinary as webSocketSendBinary };
export { webSocketClose as webSocketClose };
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
'use strict';
class FFT {
    constructor(size){
        this.size = size | 0;
        if (this.size <= 1 || (this.size & this.size - 1) !== 0) throw new Error('FFT size must be a power of two and bigger than 1');
        this._csize = size << 1;
        var table = new Array(this.size * 2);
        for(var i = 0; i < table.length; i += 2){
            const angle = Math.PI * i / this.size;
            table[i] = Math.cos(angle);
            table[i + 1] = -Math.sin(angle);
        }
        this.table = table;
        var power = 0;
        for(var t = 1; this.size > t; t <<= 1)power++;
        this._width = power % 2 === 0 ? power - 1 : power;
        this._bitrev = new Array(1 << this._width);
        for(var j = 0; j < this._bitrev.length; j++){
            this._bitrev[j] = 0;
            for(var shift = 0; shift < this._width; shift += 2){
                var revShift = this._width - shift - 2;
                this._bitrev[j] |= (j >>> shift & 3) << revShift;
            }
        }
        this._out = null;
        this._data = null;
        this._inv = 0;
    }
    fromComplexArray(complex, storage) {
        var res = storage || new Array(complex.length >>> 1);
        for(var i = 0; i < complex.length; i += 2)res[i >>> 1] = complex[i];
        return res;
    }
    createComplexArray() {
        const res = new Array(this._csize);
        for(var i = 0; i < res.length; i++)res[i] = 0;
        return res;
    }
    toComplexArray(input, storage) {
        var res = storage || this.createComplexArray();
        for(var i = 0; i < res.length; i += 2){
            res[i] = input[i >>> 1];
            res[i + 1] = 0;
        }
        return res;
    }
    completeSpectrum(spectrum) {
        var size = this._csize;
        var half = size >>> 1;
        for(var i = 2; i < half; i += 2){
            spectrum[size - i] = spectrum[i];
            spectrum[size - i + 1] = -spectrum[i + 1];
        }
    }
    transform(out, data) {
        if (out === data) throw new Error('Input and output buffers must be different');
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._transform4();
        this._out = null;
        this._data = null;
    }
    realTransform(out, data) {
        if (out === data) throw new Error('Input and output buffers must be different');
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._realTransform4();
        this._out = null;
        this._data = null;
    }
    inverseTransform(out, data) {
        if (out === data) throw new Error('Input and output buffers must be different');
        this._out = out;
        this._data = data;
        this._inv = 1;
        this._transform4();
        for(var i = 0; i < out.length; i++)out[i] /= this.size;
        this._out = null;
        this._data = null;
    }
    _transform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t;
        var bitrev = this._bitrev;
        if (len === 4) {
            for(outOff = 0, t = 0; outOff < size; outOff += len, t++){
                const off = bitrev[t];
                this._singleTransform2(outOff, off, step);
            }
        } else {
            for(outOff = 0, t = 0; outOff < size; outOff += len, t++){
                const off = bitrev[t];
                this._singleTransform4(outOff, off, step);
            }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for(step >>= 2; step >= 2; step >>= 2){
            len = size / step << 1;
            var quarterLen = len >>> 2;
            for(outOff = 0; outOff < size; outOff += len){
                var limit = outOff + quarterLen;
                for(var i = outOff, k = 0; i < limit; i += 2, k += step){
                    const A = i;
                    const B = A + quarterLen;
                    const C = B + quarterLen;
                    const D = C + quarterLen;
                    const Ar = out[A];
                    const Ai = out[A + 1];
                    const Br = out[B];
                    const Bi = out[B + 1];
                    const Cr = out[C];
                    const Ci = out[C + 1];
                    const Dr = out[D];
                    const Di = out[D + 1];
                    const MAr = Ar;
                    const MAi = Ai;
                    const tableBr = table[k];
                    const tableBi = inv * table[k + 1];
                    const MBr = Br * tableBr - Bi * tableBi;
                    const MBi = Br * tableBi + Bi * tableBr;
                    const tableCr = table[2 * k];
                    const tableCi = inv * table[2 * k + 1];
                    const MCr = Cr * tableCr - Ci * tableCi;
                    const MCi = Cr * tableCi + Ci * tableCr;
                    const tableDr = table[3 * k];
                    const tableDi = inv * table[3 * k + 1];
                    const MDr = Dr * tableDr - Di * tableDi;
                    const MDi = Dr * tableDi + Di * tableDr;
                    const T0r = MAr + MCr;
                    const T0i = MAi + MCi;
                    const T1r = MAr - MCr;
                    const T1i = MAi - MCi;
                    const T2r = MBr + MDr;
                    const T2i = MBi + MDi;
                    const T3r = inv * (MBr - MDr);
                    const T3i = inv * (MBi - MDi);
                    const FAr = T0r + T2r;
                    const FAi = T0i + T2i;
                    const FCr = T0r - T2r;
                    const FCi = T0i - T2i;
                    const FBr = T1r + T3i;
                    const FBi = T1i - T3r;
                    const FDr = T1r - T3i;
                    const FDi = T1i + T3r;
                    out[A] = FAr;
                    out[A + 1] = FAi;
                    out[B] = FBr;
                    out[B + 1] = FBi;
                    out[C] = FCr;
                    out[C + 1] = FCi;
                    out[D] = FDr;
                    out[D + 1] = FDi;
                }
            }
        }
    }
    _singleTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const evenI = data[off + 1];
        const oddR = data[off + step];
        const oddI = data[off + step + 1];
        const leftR = evenR + oddR;
        const leftI = evenI + oddI;
        const rightR = evenR - oddR;
        const rightI = evenI - oddI;
        out[outOff] = leftR;
        out[outOff + 1] = leftI;
        out[outOff + 2] = rightR;
        out[outOff + 3] = rightI;
    }
    _singleTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Ai = data[off + 1];
        const Br = data[off + step];
        const Bi = data[off + step + 1];
        const Cr = data[off + step2];
        const Ci = data[off + step2 + 1];
        const Dr = data[off + step3];
        const Di = data[off + step3 + 1];
        const T0r = Ar + Cr;
        const T0i = Ai + Ci;
        const T1r = Ar - Cr;
        const T1i = Ai - Ci;
        const T2r = Br + Dr;
        const T2i = Bi + Di;
        const T3r = inv * (Br - Dr);
        const T3i = inv * (Bi - Di);
        const FAr = T0r + T2r;
        const FAi = T0i + T2i;
        const FBr = T1r + T3i;
        const FBi = T1i - T3r;
        const FCr = T0r - T2r;
        const FCi = T0i - T2i;
        const FDr = T1r - T3i;
        const FDi = T1i + T3r;
        out[outOff] = FAr;
        out[outOff + 1] = FAi;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = FCi;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
    }
    _realTransform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t;
        var bitrev = this._bitrev;
        if (len === 4) {
            for(outOff = 0, t = 0; outOff < size; outOff += len, t++){
                const off = bitrev[t];
                this._singleRealTransform2(outOff, off >>> 1, step >>> 1);
            }
        } else {
            for(outOff = 0, t = 0; outOff < size; outOff += len, t++){
                const off = bitrev[t];
                this._singleRealTransform4(outOff, off >>> 1, step >>> 1);
            }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for(step >>= 2; step >= 2; step >>= 2){
            len = size / step << 1;
            var halfLen = len >>> 1;
            var quarterLen = halfLen >>> 1;
            var hquarterLen = quarterLen >>> 1;
            for(outOff = 0; outOff < size; outOff += len){
                for(var i = 0, k = 0; i <= hquarterLen; i += 2, k += step){
                    var A = outOff + i;
                    var B = A + quarterLen;
                    var C = B + quarterLen;
                    var D = C + quarterLen;
                    var Ar = out[A];
                    var Ai = out[A + 1];
                    var Br = out[B];
                    var Bi = out[B + 1];
                    var Cr = out[C];
                    var Ci = out[C + 1];
                    var Dr = out[D];
                    var Di = out[D + 1];
                    var MAr = Ar;
                    var MAi = Ai;
                    var tableBr = table[k];
                    var tableBi = inv * table[k + 1];
                    var MBr = Br * tableBr - Bi * tableBi;
                    var MBi = Br * tableBi + Bi * tableBr;
                    var tableCr = table[2 * k];
                    var tableCi = inv * table[2 * k + 1];
                    var MCr = Cr * tableCr - Ci * tableCi;
                    var MCi = Cr * tableCi + Ci * tableCr;
                    var tableDr = table[3 * k];
                    var tableDi = inv * table[3 * k + 1];
                    var MDr = Dr * tableDr - Di * tableDi;
                    var MDi = Dr * tableDi + Di * tableDr;
                    var T0r = MAr + MCr;
                    var T0i = MAi + MCi;
                    var T1r = MAr - MCr;
                    var T1i = MAi - MCi;
                    var T2r = MBr + MDr;
                    var T2i = MBi + MDi;
                    var T3r = inv * (MBr - MDr);
                    var T3i = inv * (MBi - MDi);
                    var FAr = T0r + T2r;
                    var FAi = T0i + T2i;
                    var FBr = T1r + T3i;
                    var FBi = T1i - T3r;
                    out[A] = FAr;
                    out[A + 1] = FAi;
                    out[B] = FBr;
                    out[B + 1] = FBi;
                    if (i === 0) {
                        var FCr = T0r - T2r;
                        var FCi = T0i - T2i;
                        out[C] = FCr;
                        out[C + 1] = FCi;
                        continue;
                    }
                    if (i === hquarterLen) continue;
                    var ST0r = T1r;
                    var ST0i = -T1i;
                    var ST1r = T0r;
                    var ST1i = -T0i;
                    var ST2r = -inv * T3i;
                    var ST2i = -inv * T3r;
                    var ST3r = -inv * T2i;
                    var ST3i = -inv * T2r;
                    var SFAr = ST0r + ST2r;
                    var SFAi = ST0i + ST2i;
                    var SFBr = ST1r + ST3i;
                    var SFBi = ST1i - ST3r;
                    var SA = outOff + quarterLen - i;
                    var SB = outOff + halfLen - i;
                    out[SA] = SFAr;
                    out[SA + 1] = SFAi;
                    out[SB] = SFBr;
                    out[SB + 1] = SFBi;
                }
            }
        }
    }
    _singleRealTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const oddR = data[off + step];
        const leftR = evenR + oddR;
        const rightR = evenR - oddR;
        out[outOff] = leftR;
        out[outOff + 1] = 0;
        out[outOff + 2] = rightR;
        out[outOff + 3] = 0;
    }
    _singleRealTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Br = data[off + step];
        const Cr = data[off + step2];
        const Dr = data[off + step3];
        const T0r = Ar + Cr;
        const T1r = Ar - Cr;
        const T2r = Br + Dr;
        const T3r = inv * (Br - Dr);
        const FAr = T0r + T2r;
        const FBr = T1r;
        const FBi = -T3r;
        const FCr = T0r - T2r;
        const FDr = T1r;
        const FDi = T3r;
        out[outOff] = FAr;
        out[outOff + 1] = 0;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = 0;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
    }
}
function realFft(input) {
    const size = input.length;
    const fft = new FFT(size);
    const output = fft.createComplexArray();
    fft.realTransform(output, input);
    fft.completeSpectrum(output);
    return output;
}
function inverseFft(input) {
    const size = input.length / 2;
    const fft = new FFT(size);
    const output = fft.createComplexArray();
    fft.inverseTransform(output, input);
    return output;
}
export { realFft as realFft };
export { inverseFft as inverseFft };
function columnIndexToLetter(columnIndex) {
    if (isNumber(columnIndex)) {
        const columnLetter = String.fromCharCode(columnIndex + 97);
        return columnLetter;
    } else {
        console.error(`columnIndexToLetter: not a number: ${columnIndex}`);
        return '?';
    }
}
function columnLetterToIndex(columnLetter) {
    if (isString(columnLetter)) {
        const columnIndex = columnLetter.charCodeAt(0) - 97;
        return columnIndex;
    } else {
        console.error(`columnLetterToIndex: not a string: ${columnLetter}`);
        return -1;
    }
}
function cellRefToLinearIndex(numberOfColumns, columnLetter, rowNumber) {
    const columnIndex = columnLetterToIndex(columnLetter);
    return (rowNumber - 1) * numberOfColumns + columnIndex;
}
function allCellRefDo(numberOfColumns, numberOfRows, proc) {
    for(let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++){
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            const columnLetter = columnIndexToLetter(columnIndex);
            proc(columnLetter, rowNumber);
        }
    }
}
export { columnIndexToLetter as columnIndexToLetter };
export { columnLetterToIndex as columnLetterToIndex };
export { cellRefToLinearIndex as cellRefToLinearIndex };
export { allCellRefDo as allCellRefDo };
function fromMaybe(maybeValue, defaultValue) {
    if (maybeValue === null) {
        return defaultValue;
    } else {
        return maybeValue;
    }
}
export { fromMaybe as fromMaybe };
var osc = osc || {};
(function() {
    "use strict";
    osc.SECS_70YRS = 2208988800;
    osc.TWO_32 = 4294967296;
    osc.defaults = {
        metadata: false,
        unpackSingleArgs: true
    };
    osc.isCommonJS = typeof module !== "undefined" && module.exports ? true : false;
    osc.isNode = osc.isCommonJS && typeof window === "undefined";
    osc.isElectron = typeof process !== "undefined" && process.versions && process.versions.electron ? true : false;
    osc.isBufferEnv = osc.isNode || osc.isElectron;
    osc.isArray = function(obj) {
        return obj && Object.prototype.toString.call(obj) === "[object Array]";
    };
    osc.isTypedArrayView = function(obj) {
        return obj.buffer && obj.buffer instanceof ArrayBuffer;
    };
    osc.isBuffer = function(obj) {
        return osc.isBufferEnv && obj instanceof Buffer;
    };
    osc.Long = typeof Long !== "undefined" ? Long : osc.isNode ? require("long") : undefined;
    osc.TextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8") : typeof util !== "undefined" && typeof (util.TextDecoder !== "undefined") ? new util.TextDecoder("utf-8") : undefined;
    osc.TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : typeof util !== "undefined" && typeof (util.TextEncoder !== "undefined") ? new util.TextEncoder("utf-8") : undefined;
    osc.dataView = function(obj, offset, length) {
        if (obj.buffer) {
            return new DataView(obj.buffer, offset, length);
        }
        if (obj instanceof ArrayBuffer) {
            return new DataView(obj, offset, length);
        }
        return new DataView(new Uint8Array(obj), offset, length);
    };
    osc.byteArray = function(obj) {
        if (obj instanceof Uint8Array) {
            return obj;
        }
        var buf = obj.buffer ? obj.buffer : obj;
        if (!(buf instanceof ArrayBuffer) && (typeof buf.length === "undefined" || typeof buf === "string")) {
            throw new Error("Can't wrap a non-array-like object as Uint8Array. Object was: " + JSON.stringify(obj, null, 2));
        }
        return new Uint8Array(buf);
    };
    osc.nativeBuffer = function(obj) {
        if (osc.isBufferEnv) {
            return osc.isBuffer(obj) ? obj : Buffer.from(obj.buffer ? obj : new Uint8Array(obj));
        }
        return osc.isTypedArrayView(obj) ? obj : new Uint8Array(obj);
    };
    osc.copyByteArray = function(source, target, offset) {
        if (osc.isTypedArrayView(source) && osc.isTypedArrayView(target)) {
            target.set(source, offset);
        } else {
            var start = offset === undefined ? 0 : offset, len = Math.min(target.length - offset, source.length);
            for(var i = 0, j = start; i < len; i++, j++){
                target[j] = source[i];
            }
        }
        return target;
    };
    osc.readString = function(dv, offsetState) {
        var charCodes = [], idx = offsetState.idx;
        for(; idx < dv.byteLength; idx++){
            var charCode = dv.getUint8(idx);
            if (charCode !== 0) {
                charCodes.push(charCode);
            } else {
                idx++;
                break;
            }
        }
        idx = idx + 3 & ~0x03;
        offsetState.idx = idx;
        var decoder = osc.isBufferEnv ? osc.readString.withBuffer : osc.TextDecoder ? osc.readString.withTextDecoder : osc.readString.raw;
        return decoder(charCodes);
    };
    osc.readString.raw = function(charCodes) {
        var str = "";
        var sliceSize = 10000;
        for(var i = 0; i < charCodes.length; i += sliceSize){
            str += String.fromCharCode.apply(null, charCodes.slice(i, i + sliceSize));
        }
        return str;
    };
    osc.readString.withTextDecoder = function(charCodes) {
        var data = new Int8Array(charCodes);
        return osc.TextDecoder.decode(data);
    };
    osc.readString.withBuffer = function(charCodes) {
        return Buffer.from(charCodes).toString("utf-8");
    };
    osc.writeString = function(str) {
        var encoder = osc.isBufferEnv ? osc.writeString.withBuffer : osc.TextEncoder ? osc.writeString.withTextEncoder : null, terminated = str + "\u0000", encodedStr;
        if (encoder) {
            encodedStr = encoder(terminated);
        }
        var len = encoder ? encodedStr.length : terminated.length, paddedLen = len + 3 & ~0x03, arr = new Uint8Array(paddedLen);
        for(var i = 0; i < len - 1; i++){
            var charCode = encoder ? encodedStr[i] : terminated.charCodeAt(i);
            arr[i] = charCode;
        }
        return arr;
    };
    osc.writeString.withTextEncoder = function(str) {
        return osc.TextEncoder.encode(str);
    };
    osc.writeString.withBuffer = function(str) {
        return Buffer.from(str);
    };
    osc.readPrimitive = function(dv, readerName, numBytes, offsetState) {
        var val = dv[readerName](offsetState.idx, false);
        offsetState.idx += numBytes;
        return val;
    };
    osc.writePrimitive = function(val, dv, writerName, numBytes, offset) {
        offset = offset === undefined ? 0 : offset;
        var arr;
        if (!dv) {
            arr = new Uint8Array(numBytes);
            dv = new DataView(arr.buffer);
        } else {
            arr = new Uint8Array(dv.buffer);
        }
        dv[writerName](offset, val, false);
        return arr;
    };
    osc.readInt32 = function(dv, offsetState) {
        return osc.readPrimitive(dv, "getInt32", 4, offsetState);
    };
    osc.writeInt32 = function(val, dv, offset) {
        return osc.writePrimitive(val, dv, "setInt32", 4, offset);
    };
    osc.readInt64 = function(dv, offsetState) {
        var high = osc.readPrimitive(dv, "getInt32", 4, offsetState), low = osc.readPrimitive(dv, "getInt32", 4, offsetState);
        if (osc.Long) {
            return new osc.Long(low, high);
        } else {
            return {
                high: high,
                low: low,
                unsigned: false
            };
        }
    };
    osc.writeInt64 = function(val, dv, offset) {
        var arr = new Uint8Array(8);
        arr.set(osc.writePrimitive(val.high, dv, "setInt32", 4, offset), 0);
        arr.set(osc.writePrimitive(val.low, dv, "setInt32", 4, offset + 4), 4);
        return arr;
    };
    osc.readFloat32 = function(dv, offsetState) {
        return osc.readPrimitive(dv, "getFloat32", 4, offsetState);
    };
    osc.writeFloat32 = function(val, dv, offset) {
        return osc.writePrimitive(val, dv, "setFloat32", 4, offset);
    };
    osc.readFloat64 = function(dv, offsetState) {
        return osc.readPrimitive(dv, "getFloat64", 8, offsetState);
    };
    osc.writeFloat64 = function(val, dv, offset) {
        return osc.writePrimitive(val, dv, "setFloat64", 8, offset);
    };
    osc.readChar32 = function(dv, offsetState) {
        var charCode = osc.readPrimitive(dv, "getUint32", 4, offsetState);
        return String.fromCharCode(charCode);
    };
    osc.writeChar32 = function(str, dv, offset) {
        var charCode = str.charCodeAt(0);
        if (charCode === undefined || charCode < -1) {
            return undefined;
        }
        return osc.writePrimitive(charCode, dv, "setUint32", 4, offset);
    };
    osc.readBlob = function(dv, offsetState) {
        var len = osc.readInt32(dv, offsetState), paddedLen = len + 3 & ~0x03, blob = new Uint8Array(dv.buffer, offsetState.idx, len);
        offsetState.idx += paddedLen;
        return blob;
    };
    osc.writeBlob = function(data) {
        data = osc.byteArray(data);
        var len = data.byteLength, paddedLen = len + 3 & ~0x03, offset = 4, blobLen = paddedLen + offset, arr = new Uint8Array(blobLen), dv = new DataView(arr.buffer);
        osc.writeInt32(len, dv);
        arr.set(data, offset);
        return arr;
    };
    osc.readMIDIBytes = function(dv, offsetState) {
        var midi = new Uint8Array(dv.buffer, offsetState.idx, 4);
        offsetState.idx += 4;
        return midi;
    };
    osc.writeMIDIBytes = function(bytes) {
        bytes = osc.byteArray(bytes);
        var arr = new Uint8Array(4);
        arr.set(bytes);
        return arr;
    };
    osc.readColor = function(dv, offsetState) {
        var bytes = new Uint8Array(dv.buffer, offsetState.idx, 4), alpha = bytes[3] / 255;
        offsetState.idx += 4;
        return {
            r: bytes[0],
            g: bytes[1],
            b: bytes[2],
            a: alpha
        };
    };
    osc.writeColor = function(color) {
        var alpha = Math.round(color.a * 255), arr = new Uint8Array([
            color.r,
            color.g,
            color.b,
            alpha
        ]);
        return arr;
    };
    osc.readTrue = function() {
        return true;
    };
    osc.readFalse = function() {
        return false;
    };
    osc.readNull = function() {
        return null;
    };
    osc.readImpulse = function() {
        return 1.0;
    };
    osc.readTimeTag = function(dv, offsetState) {
        var secs1900 = osc.readPrimitive(dv, "getUint32", 4, offsetState), frac = osc.readPrimitive(dv, "getUint32", 4, offsetState), __native = secs1900 === 0 && frac === 1 ? Date.now() : osc.ntpToJSTime(secs1900, frac);
        return {
            raw: [
                secs1900,
                frac
            ],
            native: __native
        };
    };
    osc.writeTimeTag = function(timeTag) {
        var raw = timeTag.raw ? timeTag.raw : osc.jsToNTPTime(timeTag.native), arr = new Uint8Array(8), dv = new DataView(arr.buffer);
        osc.writeInt32(raw[0], dv, 0);
        osc.writeInt32(raw[1], dv, 4);
        return arr;
    };
    osc.timeTag = function(secs, now) {
        secs = secs || 0;
        now = now || Date.now();
        var nowSecs = now / 1000, nowWhole = Math.floor(nowSecs), nowFracs = nowSecs - nowWhole, secsWhole = Math.floor(secs), secsFracs = secs - secsWhole, fracs = nowFracs + secsFracs;
        if (fracs > 1) {
            var fracsWhole = Math.floor(fracs), fracsFracs = fracs - fracsWhole;
            secsWhole += fracsWhole;
            fracs = fracsFracs;
        }
        var ntpSecs = nowWhole + secsWhole + osc.SECS_70YRS, ntpFracs = Math.round(osc.TWO_32 * fracs);
        return {
            raw: [
                ntpSecs,
                ntpFracs
            ]
        };
    };
    osc.ntpToJSTime = function(secs1900, frac) {
        var secs1970 = secs1900 - osc.SECS_70YRS, decimals = frac / osc.TWO_32, msTime = (secs1970 + decimals) * 1000;
        return msTime;
    };
    osc.jsToNTPTime = function(jsTime) {
        var secs = jsTime / 1000, secsWhole = Math.floor(secs), secsFrac = secs - secsWhole, ntpSecs = secsWhole + osc.SECS_70YRS, ntpFracs = Math.round(osc.TWO_32 * secsFrac);
        return [
            ntpSecs,
            ntpFracs
        ];
    };
    osc.readArguments = function(dv, options, offsetState) {
        var typeTagString = osc.readString(dv, offsetState);
        if (typeTagString.indexOf(",") !== 0) {
            throw new Error("A malformed type tag string was found while reading " + "the arguments of an OSC message. String was: " + typeTagString, " at offset: " + offsetState.idx);
        }
        var argTypes = typeTagString.substring(1).split(""), args = [];
        osc.readArgumentsIntoArray(args, argTypes, typeTagString, dv, options, offsetState);
        return args;
    };
    osc.readArgument = function(argType, typeTagString, dv, options, offsetState) {
        var typeSpec = osc.argumentTypes[argType];
        if (!typeSpec) {
            throw new Error("'" + argType + "' is not a valid OSC type tag. Type tag string was: " + typeTagString);
        }
        var argReader = typeSpec.reader, arg = osc[argReader](dv, offsetState);
        if (options.metadata) {
            arg = {
                type: argType,
                value: arg
            };
        }
        return arg;
    };
    osc.readArgumentsIntoArray = function(arr, argTypes, typeTagString, dv, options, offsetState) {
        var i = 0;
        while(i < argTypes.length){
            var argType = argTypes[i], arg;
            if (argType === "[") {
                var fromArrayOpen = argTypes.slice(i + 1), endArrayIdx = fromArrayOpen.indexOf("]");
                if (endArrayIdx < 0) {
                    throw new Error("Invalid argument type tag: an open array type tag ('[') was found " + "without a matching close array tag ('[]'). Type tag was: " + typeTagString);
                }
                var typesInArray = fromArrayOpen.slice(0, endArrayIdx);
                arg = osc.readArgumentsIntoArray([], typesInArray, typeTagString, dv, options, offsetState);
                i += endArrayIdx + 2;
            } else {
                arg = osc.readArgument(argType, typeTagString, dv, options, offsetState);
                i++;
            }
            arr.push(arg);
        }
        return arr;
    };
    osc.writeArguments = function(args, options) {
        var argCollection = osc.collectArguments(args, options);
        return osc.joinParts(argCollection);
    };
    osc.joinParts = function(dataCollection) {
        var buf = new Uint8Array(dataCollection.byteLength), parts = dataCollection.parts, offset = 0;
        for(var i = 0; i < parts.length; i++){
            var part = parts[i];
            osc.copyByteArray(part, buf, offset);
            offset += part.length;
        }
        return buf;
    };
    osc.addDataPart = function(dataPart, dataCollection) {
        dataCollection.parts.push(dataPart);
        dataCollection.byteLength += dataPart.length;
    };
    osc.writeArrayArguments = function(args, dataCollection) {
        var typeTag = "[";
        for(var i = 0; i < args.length; i++){
            var arg = args[i];
            typeTag += osc.writeArgument(arg, dataCollection);
        }
        typeTag += "]";
        return typeTag;
    };
    osc.writeArgument = function(arg, dataCollection) {
        if (osc.isArray(arg)) {
            return osc.writeArrayArguments(arg, dataCollection);
        }
        var type = arg.type, writer = osc.argumentTypes[type].writer;
        if (writer) {
            var data = osc[writer](arg.value);
            osc.addDataPart(data, dataCollection);
        }
        return arg.type;
    };
    osc.collectArguments = function(args, options, dataCollection) {
        if (!osc.isArray(args)) {
            args = typeof args === "undefined" ? [] : [
                args
            ];
        }
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        if (!options.metadata) {
            args = osc.annotateArguments(args);
        }
        var typeTagString = ",", currPartIdx = dataCollection.parts.length;
        for(var i = 0; i < args.length; i++){
            var arg = args[i];
            typeTagString += osc.writeArgument(arg, dataCollection);
        }
        var typeData = osc.writeString(typeTagString);
        dataCollection.byteLength += typeData.byteLength;
        dataCollection.parts.splice(currPartIdx, 0, typeData);
        return dataCollection;
    };
    osc.readMessage = function(data, options, offsetState) {
        options = options || osc.defaults;
        var dv = osc.dataView(data, data.byteOffset, data.byteLength);
        offsetState = offsetState || {
            idx: 0
        };
        var address = osc.readString(dv, offsetState);
        return osc.readMessageContents(address, dv, options, offsetState);
    };
    osc.readMessageContents = function(address, dv, options, offsetState) {
        if (address.indexOf("/") !== 0) {
            throw new Error("A malformed OSC address was found while reading " + "an OSC message. String was: " + address);
        }
        var args = osc.readArguments(dv, options, offsetState);
        return {
            address: address,
            args: args.length === 1 && options.unpackSingleArgs ? args[0] : args
        };
    };
    osc.collectMessageParts = function(msg, options, dataCollection) {
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        osc.addDataPart(osc.writeString(msg.address), dataCollection);
        return osc.collectArguments(msg.args, options, dataCollection);
    };
    osc.writeMessage = function(msg, options) {
        options = options || osc.defaults;
        if (!osc.isValidMessage(msg)) {
            throw new Error("An OSC message must contain a valid address. Message was: " + JSON.stringify(msg, null, 2));
        }
        var msgCollection = osc.collectMessageParts(msg, options);
        return osc.joinParts(msgCollection);
    };
    osc.isValidMessage = function(msg) {
        return msg.address && msg.address.indexOf("/") === 0;
    };
    osc.readBundle = function(dv, options, offsetState) {
        return osc.readPacket(dv, options, offsetState);
    };
    osc.collectBundlePackets = function(bundle, options, dataCollection) {
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        osc.addDataPart(osc.writeString("#bundle"), dataCollection);
        osc.addDataPart(osc.writeTimeTag(bundle.timeTag), dataCollection);
        for(var i = 0; i < bundle.packets.length; i++){
            var packet = bundle.packets[i], collector = packet.address ? osc.collectMessageParts : osc.collectBundlePackets, packetCollection = collector(packet, options);
            dataCollection.byteLength += packetCollection.byteLength;
            osc.addDataPart(osc.writeInt32(packetCollection.byteLength), dataCollection);
            dataCollection.parts = dataCollection.parts.concat(packetCollection.parts);
        }
        return dataCollection;
    };
    osc.writeBundle = function(bundle, options) {
        if (!osc.isValidBundle(bundle)) {
            throw new Error("An OSC bundle must contain 'timeTag' and 'packets' properties. " + "Bundle was: " + JSON.stringify(bundle, null, 2));
        }
        options = options || osc.defaults;
        var bundleCollection = osc.collectBundlePackets(bundle, options);
        return osc.joinParts(bundleCollection);
    };
    osc.isValidBundle = function(bundle) {
        return bundle.timeTag !== undefined && bundle.packets !== undefined;
    };
    osc.readBundleContents = function(dv, options, offsetState, len) {
        var timeTag = osc.readTimeTag(dv, offsetState), packets = [];
        while(offsetState.idx < len){
            var packetSize = osc.readInt32(dv, offsetState), packetLen = offsetState.idx + packetSize, packet = osc.readPacket(dv, options, offsetState, packetLen);
            packets.push(packet);
        }
        return {
            timeTag: timeTag,
            packets: packets
        };
    };
    osc.readPacket = function(data, options, offsetState, len) {
        var dv = osc.dataView(data, data.byteOffset, data.byteLength);
        len = len === undefined ? dv.byteLength : len;
        offsetState = offsetState || {
            idx: 0
        };
        var header = osc.readString(dv, offsetState), firstChar = header[0];
        if (firstChar === "#") {
            return osc.readBundleContents(dv, options, offsetState, len);
        } else if (firstChar === "/") {
            return osc.readMessageContents(header, dv, options, offsetState);
        }
        throw new Error("The header of an OSC packet didn't contain an OSC address or a #bundle string." + " Header was: " + header);
    };
    osc.writePacket = function(packet, options) {
        if (osc.isValidMessage(packet)) {
            return osc.writeMessage(packet, options);
        } else if (osc.isValidBundle(packet)) {
            return osc.writeBundle(packet, options);
        } else {
            throw new Error("The specified packet was not recognized as a valid OSC message or bundle." + " Packet was: " + JSON.stringify(packet, null, 2));
        }
    };
    osc.argumentTypes = {
        i: {
            reader: "readInt32",
            writer: "writeInt32"
        },
        h: {
            reader: "readInt64",
            writer: "writeInt64"
        },
        f: {
            reader: "readFloat32",
            writer: "writeFloat32"
        },
        s: {
            reader: "readString",
            writer: "writeString"
        },
        S: {
            reader: "readString",
            writer: "writeString"
        },
        b: {
            reader: "readBlob",
            writer: "writeBlob"
        },
        t: {
            reader: "readTimeTag",
            writer: "writeTimeTag"
        },
        T: {
            reader: "readTrue"
        },
        F: {
            reader: "readFalse"
        },
        N: {
            reader: "readNull"
        },
        I: {
            reader: "readImpulse"
        },
        d: {
            reader: "readFloat64",
            writer: "writeFloat64"
        },
        c: {
            reader: "readChar32",
            writer: "writeChar32"
        },
        r: {
            reader: "readColor",
            writer: "writeColor"
        },
        m: {
            reader: "readMIDIBytes",
            writer: "writeMIDIBytes"
        }
    };
    osc.inferTypeForArgument = function(arg) {
        var type = typeof arg;
        switch(type){
            case "boolean":
                return arg ? "T" : "F";
            case "string":
                return "s";
            case "number":
                return "f";
            case "undefined":
                return "N";
            case "object":
                if (arg === null) {
                    return "N";
                } else if (arg instanceof Uint8Array || arg instanceof ArrayBuffer) {
                    return "b";
                } else if (typeof arg.high === "number" && typeof arg.low === "number") {
                    return "h";
                }
                break;
        }
        throw new Error("Can't infer OSC argument type for value: " + JSON.stringify(arg, null, 2));
    };
    osc.annotateArguments = function(args) {
        var annotated = [];
        for(var i = 0; i < args.length; i++){
            var arg = args[i], msgArg;
            if (typeof arg === "object" && arg.type && arg.value !== undefined) {
                msgArg = arg;
            } else if (osc.isArray(arg)) {
                msgArg = osc.annotateArguments(arg);
            } else {
                var oscType = osc.inferTypeForArgument(arg);
                msgArg = {
                    type: oscType,
                    value: arg
                };
            }
            annotated.push(msgArg);
        }
        return annotated;
    };
    if (osc.isCommonJS) {
        module.exports = osc;
    }
})();
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
function decodeOscMessage(message) {
    return osc.readMessage(message, {
        metadata: true
    });
}
function encodeOscMessage(message) {
    return osc.writeMessage(message, {
        metadata: true
    });
}
function encodeOscBundle(bundle) {
    return osc.writeBundle(bundle, {
        metadata: true
    });
}
function encodeOscPacket(packet) {
    return osc.writePacket(packet, {
        metadata: true
    });
}
class TcpMessageSize {
    arrayBuffer;
    dataView;
    byteArray;
    constructor(){
        this.arrayBuffer = new ArrayBuffer(4);
        this.dataView = new DataView(this.arrayBuffer);
        this.byteArray = new Uint8Array(this.arrayBuffer);
    }
    setSize(size) {
        this.dataView.setUint32(0, size, false);
    }
    getSize() {
        return this.dataView.getUint32(0, false);
    }
    async read(tcpSocket) {
        const bytesRead = await tcpSocket.read(this.byteArray) || 0;
        if (bytesRead != 4) {
            throw new Error(`MessageSizeReader.readTcp: read failed: ${bytesRead}`);
        } else {
            return this.getSize();
        }
    }
    enqueue(tcpQueue, size) {
        this.setSize(size);
        tcpQueue.addMessage(this.byteArray);
    }
}
async function tcpOscPacketReader(tcpSocket, proc) {
    const messageSize = new TcpMessageSize();
    const readArray = new Uint8Array(8388608);
    while(1){
        const bytesToRead = await messageSize.read(tcpSocket);
        if (bytesToRead > 8388608) {
            throw new Error(`messageSize exceeds limit: ${bytesToRead}`);
        }
        const bytesRead = await tcpSocket.read(readArray) || 0;
        if (bytesRead < bytesToRead) {
            throw new Error(`bytesRead less than bytesToRead: ${bytesRead}, ${bytesToRead}`);
        } else if (bytesRead == bytesToRead) {
            const messagePacket = readArray.slice(0, bytesRead);
            proc(messagePacket);
        } else {
            throw new Error(`bytesRead greater than bytesToRead: ${bytesRead}, ${bytesToRead}`);
        }
    }
}
function tcpOscMessageReader(tcpSocket, proc) {
    return tcpOscPacketReader(tcpSocket, (byteArray)=>proc(decodeOscMessage(byteArray)));
}
export { oscData as oscData };
export { oscInt32 as oscInt32 };
export { oscFloat as oscFloat };
export { oscString as oscString };
export { oscBlob as oscBlob };
export { decodeOscMessage as decodeOscMessage };
export { encodeOscMessage as encodeOscMessage };
export { encodeOscBundle as encodeOscBundle };
export { encodeOscPacket as encodeOscPacket };
export { TcpMessageSize as TcpMessageSize };
export { tcpOscPacketReader as tcpOscPacketReader };
export { tcpOscMessageReader as tcpOscMessageReader };
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
function riffReadChunkId(byteArray, offset) {
    const textView = new DataView(byteArray, offset, 4);
    const textDecoder = new TextDecoder('utf-8');
    return textDecoder.decode(textView);
}
function riffReadChunkSize(byteArray, offset) {
    const sizeData = new DataView(byteArray, offset, 4);
    return sizeData.getUint32(0, true);
}
function riffReadChunkHeader(byteArray, offset) {
    return {
        id: riffReadChunkId(byteArray, offset),
        size: riffReadChunkSize(byteArray, offset + 4)
    };
}
function riffReadChunk(byteArray, offset) {
    const header = riffReadChunkHeader(byteArray, offset);
    return {
        id: header.id,
        size: header.size,
        data: new DataView(byteArray, offset + 8, header.size)
    };
}
function riffReadChunkSequence(byteArray) {
    let offset = 0;
    const size = byteArray.byteLength;
    const answer = [];
    while(offset < size){
        const chunk = riffReadChunk(byteArray, offset);
        answer.push(chunk);
        offset += chunk.size + 8;
    }
    return answer;
}
function riffVerifyHeader(byteArray) {
    const size = byteArray.byteLength;
    const header = riffReadChunkHeader(byteArray, 0);
    if (header.id != 'RIFF' || header.size != size - 8) {
        throw new Error(`Invalid Riff: header.id=${header.id}, header.size=${header.size}, size=${size}`);
    }
}
function riffFetch(url) {
    return fetch(url).then((response)=>response.arrayBuffer()).then(riffReadChunkSequence);
}
export { riffReadChunkId as riffReadChunkId };
export { riffReadChunkSize as riffReadChunkSize };
export { riffReadChunkHeader as riffReadChunkHeader };
export { riffReadChunk as riffReadChunk };
export { riffReadChunkSequence as riffReadChunkSequence };
export { riffVerifyHeader as riffVerifyHeader };
export { riffFetch as riffFetch };
function waveReadChunkSequence(byteArray) {
    const size = byteArray.byteLength;
    riffVerifyHeader(byteArray);
    const waveText = riffReadChunkId(byteArray, 8);
    if (waveText != 'WAVE') {
        throw new Error('Invalid Wave?');
    }
    const answer = [];
    let offset = 12;
    while(offset < size){
        const chunk = riffReadChunk(byteArray, offset);
        answer.push(chunk);
        offset += chunk.size + 8;
    }
    return answer;
}
function waveParseFmtChunk(fmt) {
    return {
        formatTag: fmt.data.getUint16(0, true),
        channels: fmt.data.getUint16(2, true),
        samplesPerSec: fmt.data.getUint32(4, true),
        bitsPerSample: fmt.data.getUint16(14, true)
    };
}
function waveParseFactChunk(fact) {
    return {
        sampleLength: fact.data.getUint32(0, true)
    };
}
function waveParseDataFloat32(data) {
    const numSamples = data.size / 4;
    return new Float32Array(data.data.buffer, data.data.byteOffset, numSamples);
}
function chunksToWave(url, chunks) {
    let fmtChunk = null, factChunk = null, data = null;
    chunks.forEach((chunk)=>{
        if (chunk.id == 'fmt ') {
            fmtChunk = waveParseFmtChunk(chunk);
        }
        if (chunk.id == 'fact') {
            factChunk = waveParseFactChunk(chunk);
        }
        if (chunk.id == 'data') {
            if (fmtChunk == null || fmtChunk.formatTag != 3) {
                throw new Error('Wave: not Float32');
            } else {
                data = waveParseDataFloat32(chunk);
            }
        }
    });
    if (fmtChunk == null || factChunk == null || data == null) {
        throw new Error('Wave: invalid Wave');
    } else {
        return {
            url: url,
            chunks: chunks,
            fmtChunk: fmtChunk,
            factChunk: factChunk,
            data: data
        };
    }
}
function waveParse(url, byteArray) {
    return chunksToWave(url, waveReadChunkSequence(byteArray));
}
function waveFetch(url) {
    return fetch(url, {
        cache: 'default'
    }).then((response)=>response.arrayBuffer()).then((byteArray)=>waveParse(url, byteArray));
}
export { waveReadChunkSequence as waveReadChunkSequence };
export { waveParseFmtChunk as waveParseFmtChunk };
export { waveParseFactChunk as waveParseFactChunk };
export { waveParseDataFloat32 as waveParseDataFloat32 };
export { chunksToWave as chunksToWave };
export { waveParse as waveParse };
export { waveFetch as waveFetch };
class SoundFile {
    url;
    numberOfChannels;
    numberOfFrames;
    sampleRate;
    interleavedData;
    cachedChannelData;
    constructor(url, numberOfChannels, numberOfFrames, sampleRate, interleavedData){
        this.url = url;
        this.numberOfChannels = numberOfChannels;
        this.numberOfFrames = numberOfFrames;
        this.sampleRate = sampleRate;
        this.interleavedData = interleavedData;
        this.cachedChannelData = null;
    }
    channelData(index) {
        if (this.cachedChannelData == null) {
            this.cachedChannelData = deinterleaveSampleData(this.numberOfFrames, this.numberOfChannels, this.interleavedData, (size)=>new Float32Array(size));
        }
        return this.cachedChannelData[index];
    }
    duration() {
        return this.numberOfFrames / this.sampleRate;
    }
}
function audioBufferToSoundFile(url, anAudioBuffer) {
    const soundFile = new SoundFile(url, anAudioBuffer.numberOfChannels, anAudioBuffer.length, anAudioBuffer.sampleRate, audioBufferInterleavedChannelData(anAudioBuffer));
    soundFile.cachedChannelData = audioBufferChannelDataArray(anAudioBuffer);
    return soundFile;
}
function waveToSoundFile(wave) {
    return new SoundFile(wave.url, wave.fmtChunk.channels, wave.factChunk.sampleLength, wave.fmtChunk.samplesPerSec, wave.data);
}
function arrayBufferToSoundFile(url, arrayBuffer) {
    if (globalThis.AudioContext) {
        const audioContext = new globalThis.AudioContext();
        return audioContext.decodeAudioData(arrayBuffer).then((audioBuffer)=>audioBufferToSoundFile(url, audioBuffer));
    } else {
        const soundFile = waveToSoundFile(waveParse(url, arrayBuffer));
        return new Promise((resolve, _unusedReject)=>resolve(soundFile));
    }
}
async function fetchSoundFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`fetchSoundFile: fetch failed: ${url}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBufferToSoundFile(url, arrayBuffer);
}
export { SoundFile as SoundFile };
export { audioBufferToSoundFile as audioBufferToSoundFile };
export { waveToSoundFile as waveToSoundFile };
export { arrayBufferToSoundFile as arrayBufferToSoundFile };
export { fetchSoundFile as fetchSoundFile };
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
function absDif(self, aNumber) {
    return Math.abs(self - aNumber);
}
function amClip(self, aNumber) {
    if (aNumber <= 0) {
        return 0;
    } else {
        return self * aNumber;
    }
}
function ampDb(self) {
    return Math.log10(self) * 20;
}
function clip2(self, aNumber) {
    return self < -aNumber ? -aNumber : self > aNumber ? aNumber : self;
}
function coin(self) {
    return Math.random() < self;
}
function cpsMidi(self) {
    return Math.log2(self * (1 / 440)) * 12 + 69;
}
function cpsOct(self) {
    return Math.log2(self * (1.0 / 440.0)) + 4.75;
}
function dbAmp(self) {
    return Math.pow(10, self * 0.05);
}
function difSqr(self, aNumber) {
    return self * self - aNumber * aNumber;
}
function hypot(self, aNumber) {
    return Math.sqrt(self * self + aNumber * aNumber);
}
function midiCps(self) {
    return 440 * 2 ** ((self - 69) * (1 / 12));
}
function midiRatio(self) {
    return Math.pow(2.0, self * (1.0 / 12.0));
}
function octCps(self) {
    return 440.0 * Math.pow(2.0, self - 4.75);
}
function ratioMidi(self) {
    return 12.0 * Math.log2(self);
}
function downsampleSteinarsson(data, threshold) {
    const floor = Math.floor;
    const abs = Math.abs;
    const data_length = data.length;
    if (threshold >= data_length || threshold === 0) {
        return data;
    }
    const sampled = [];
    let sampled_index = 0;
    const every = (data_length - 2) / (threshold - 2);
    let a = 0;
    let max_area_point = [
        0,
        0
    ];
    let max_area = 0;
    let area = 0;
    let next_a = 0;
    sampled[sampled_index++] = data[a];
    for(let i = 0; i < threshold - 2; i++){
        let avg_x = 0;
        let avg_y = 0;
        let avg_range_start = floor((i + 1) * every) + 1;
        let avg_range_end = floor((i + 2) * every) + 1;
        avg_range_end = avg_range_end < data_length ? avg_range_end : data_length;
        const avg_range_length = avg_range_end - avg_range_start;
        for(; avg_range_start < avg_range_end; avg_range_start++){
            avg_x += data[avg_range_start][0] * 1;
            avg_y += data[avg_range_start][1] * 1;
        }
        avg_x /= avg_range_length;
        avg_y /= avg_range_length;
        let range_offs = floor((i + 0) * every) + 1;
        const range_to = floor((i + 1) * every) + 1;
        const point_a_x = data[a][0] * 1;
        const point_a_y = data[a][1] * 1;
        max_area = area = -1;
        for(; range_offs < range_to; range_offs++){
            area = abs((point_a_x - avg_x) * (data[range_offs][1] - point_a_y) - (point_a_x - data[range_offs][0]) * (avg_y - point_a_y)) * 0.5;
            if (area > max_area) {
                max_area = area;
                max_area_point = data[range_offs];
                next_a = range_offs;
            }
        }
        sampled[sampled_index++] = max_area_point;
        a = next_a;
    }
    sampled[sampled_index++] = data[data_length - 1];
    return sampled;
}
export { absDif as absDif };
export { amClip as amClip };
export { ampDb as ampDb };
export { clip2 as clip2 };
export { coin as coin };
export { cpsMidi as cpsMidi };
export { cpsOct as cpsOct };
export { dbAmp as dbAmp };
export { difSqr as difSqr };
export { hypot as hypot };
export { midiCps as midiCps };
export { midiRatio as midiRatio };
export { octCps as octCps };
export { ratioMidi as ratioMidi };
export { downsampleSteinarsson as downsampleSteinarsson };
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
const operatorNameTable = {
    '+': 'Add',
    '-': 'Sub',
    '*': 'Mul',
    '/': 'Fdiv',
    '%': 'Mod',
    '=': 'Eq',
    '<': 'Lt',
    '>': 'Gt',
    '&': 'BitAnd',
    '|': 'BitOr'
};
export { unaryOperators as unaryOperators };
export { binaryOperators as binaryOperators };
export { unaryOperatorName as unaryOperatorName };
export { binaryOperatorName as binaryOperatorName };
export { operatorNameTable as operatorNameTable };
class LocalControl {
    name;
    index;
    defaultValue;
    operatingRate;
    isTriggered;
    constructor(name, index, defaultValue){
        this.name = name;
        this.index = index;
        this.defaultValue = defaultValue;
        this.operatingRate = rateKr;
        this.isTriggered = false;
    }
}
function localControlIndexCompare(i, j) {
    return i.index - j.index;
}
function localControlNameCompare(i, j) {
    return stringCompare(i.name, j.name);
}
function sortLocalControls(controls) {
    if (controls.every((each)=>each.index == -1)) {
        controls.sort(localControlNameCompare);
        controls.forEach((each, index)=>each.index = index);
        return controls;
    } else if (controls.every((each)=>each.index >= 0)) {
        return controls.sort(localControlIndexCompare);
    } else {
        throw new Error('sortLocalControls');
    }
}
const ugenCounter = counterNew();
function signalSize(aSignal) {
    return isArray(aSignal) ? aSignal.length : 1;
}
function signalNumber(aSignal) {
    if (isNumber(aSignal)) {
        return aSignal;
    } else {
        throw new Error('signalNumber: not a number?');
    }
}
class ScUgen {
    name;
    numChannels;
    rate;
    specialIndex;
    id;
    inputArray;
    multipleRootGraph;
    localControl;
    constructor(name, numChannels, rate, specialIndex, inputArray){
        this.name = name;
        this.numChannels = numChannels;
        this.rate = rate;
        this.specialIndex = specialIndex;
        this.id = ugenCounter();
        this.inputArray = inputArray;
        this.multipleRootGraph = setNew();
        this.localControl = null;
    }
    displayName() {
        switch(this.name){
            case 'UnaryOpUGen':
                return unaryOperatorName(this.specialIndex);
            case 'BinaryOpUGen':
                return binaryOperatorName(this.specialIndex);
            default:
                return this.name;
        }
    }
}
function localControlInput(name, index, defaultValue) {
    const scUgen = new ScUgen('LocalControl', 1, 1, 0, []);
    scUgen.localControl = new LocalControl(name, index, defaultValue);
    return new Ugen(scUgen, 0);
}
function NamedControl(name, defaultValue) {
    return localControlInput(name, -1, defaultValue);
}
function localControls(dictionary) {
    let index = 0;
    const makeArrayed = function(name, defaultArray) {
        let qualifier = 1;
        const controlArray = [];
        defaultArray.forEach(function(value) {
            const qualifiedName = `${name}${qualifier}`;
            controlArray.push(localControlInput(qualifiedName, index, value));
            index += 1;
            qualifier += 1;
        });
        return controlArray;
    };
    const answer = [];
    for (const [name, defaultValue] of Object.entries(dictionary)){
        if (Array.isArray(defaultValue)) {
            answer.push([
                name,
                makeArrayed(name, defaultValue)
            ]);
        } else {
            answer.push([
                name,
                localControlInput(name, index, defaultValue)
            ]);
            index += 1;
        }
    }
    return new Map(answer);
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
function isLocalControl(aUgen) {
    return aUgen.scUgen.localControl !== null;
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
        onError();
        throw new Error(`inputBranch: unknown input type: ${input}, ${typeof input}, ${isUgen(input)}, ${isNumber(input)}`);
    }
}
function inputRate(input) {
    return inputBranch(input, (port)=>port.scUgen.rate, (_unusedNumber)=>0, ()=>-1);
}
function deriveRate(rateOrFilterUgenInputs, inputArray) {
    if (isNumber(rateOrFilterUgenInputs)) {
        return rateOrFilterUgenInputs;
    } else {
        return arrayMaxItem(arrayMap(inputRate, arrayAtIndices(inputArray, rateOrFilterUgenInputs)));
    }
}
function requiresMce(inputs) {
    return arrayContainsArray(inputs);
}
function mceInputTransform(atLeast, aSignal) {
    return arrayTranspose(arrayExtendToBeOfEqualSize(atLeast, aSignal));
}
function makeUgen(name, numChannels, rateSpec, specialIndex, signalArray) {
    if (isArray(numChannels) || requiresMce(signalArray)) {
        const atLeast = scalarOrArraySize(numChannels);
        const expandedSignalArray = mceInputTransform(atLeast, signalArray);
        const expandedSize = expandedSignalArray.length;
        const expandedNumChannels = arrayExtendCyclically(asArray(numChannels), expandedSize);
        return expandedSignalArray.map((item, index)=>makeUgen(name, expandedNumChannels[index], rateSpec, specialIndex, item));
    } else {
        const inputArray = signalArray;
        const derivedRate = deriveRate(rateSpec, inputArray);
        const scUgen = new ScUgen(name, numChannels, derivedRate, specialIndex, inputArray);
        switch(numChannels){
            case 0:
                return new Ugen(scUgen, nilPort);
            case 1:
                return new Ugen(scUgen, 0);
            default:
                return arrayFillWithIndex(numChannels, (item)=>new Ugen(scUgen, item));
        }
    }
}
function inputFirstUgen(input) {
    if (isArray(input)) {
        return arrayFind(arrayMap(inputFirstUgen, input), isScUgen) || null;
    } else if (isUgen(input)) {
        return input.scUgen;
    } else {
        return null;
    }
}
function multipleRootGraph(lhs, rhs) {
    const ugen = inputFirstUgen(lhs);
    if (ugen && ugen.multipleRootGraph) {
        if (isArray(rhs)) {
            const multipleRootGraphSet = ugen.multipleRootGraph;
            arrayForEach(rhs, (item)=>setAdd(multipleRootGraphSet, item));
        } else {
            setAdd(ugen.multipleRootGraph, rhs);
        }
    } else {
        throw new Error(`multipleRootGraph: no ugen or ugen.multipleRootGraph is null: ${lhs}, ${rhs}`);
    }
    return lhs;
}
function krMutateInPlace(input) {
    if (isUgen(input)) {
        const inputPort = input;
        krMutateInPlace(inputPort.scUgen);
    } else if (isScUgen(input)) {
        const inputUgen = input;
        if (inputUgen.rate === 2) {
            inputUgen.rate = rateKr;
        }
        arrayForEach(inputUgen.inputArray, (item)=>krMutateInPlace(item));
    } else if (isArray(input)) {
        arrayForEach(input, (item)=>krMutateInPlace(item));
    } else {
        if (!isNumber(input)) {
            throw new Error(`krMutateInPlace: ${input} ${typeof input}`);
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
            case 15:
                return Math.exp(input);
            case 16:
                return 1 / input;
            case 17:
                return midiCps(input);
            case 18:
                return cpsMidi(input);
            case 19:
                return midiRatio(input);
            case 20:
                return ratioMidi(input);
            case 21:
                return dbAmp(input);
            case 22:
                return ampDb(input);
            case 23:
                return octCps(input);
            case 24:
                return cpsOct(input);
            case 25:
                return Math.log(input);
            case 26:
                return Math.log2(input);
            case 27:
                return Math.log10(input);
            case 28:
                return Math.sin(input);
            case 29:
                return Math.cos(input);
            case 30:
                return Math.tan(input);
            case 31:
                return Math.asin(input);
            case 32:
                return Math.acos(input);
            case 33:
                return Math.atan(input);
            case 34:
                return Math.sinh(input);
            case 35:
                return Math.cosh(input);
            case 36:
                return Math.tanh(input);
            case 44:
                return coin(input) ? 1.0 : 0.0;
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
            case 8:
                return lhs < rhs ? 1 : 0;
            case 9:
                return lhs > rhs ? 1 : 0;
            case 10:
                return lhs <= rhs ? 1 : 0;
            case 11:
                return lhs >= rhs ? 1 : 0;
            case 12:
                return Math.min(lhs, rhs);
            case 13:
                return Math.max(lhs, rhs);
            case 23:
                return hypot(lhs, rhs);
            case 34:
                return difSqr(lhs, rhs);
            case 38:
                return absDif(lhs, rhs);
            case 40:
                return amClip(lhs, rhs);
            case 42:
                return clip2(lhs, rhs);
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
        const expanded = mceInputTransform(1, [
            asArray(lhs),
            asArray(rhs)
        ]);
        return arrayMap((item)=>BinaryOpWithConstantOptimiser(specialIndex, item[0], item[1]), expanded);
    } else {
        return BinaryOpWithConstantOptimiser(specialIndex, lhs, rhs);
    }
}
function isOutUgen(aValue) {
    if (!isUgen(aValue)) {
        return false;
    } else {
        return [
            'Out',
            'OffsetOut',
            'ReplaceOut',
            'XOut'
        ].includes(aValue.scUgen.name);
    }
}
function isOutUgenList(aValue) {
    if (isArray(aValue)) {
        if (arrayEvery(aValue, isOutUgen)) {
            return true;
        }
    }
    return false;
}
function isControlRateUgen(aValue) {
    return isUgenInput(aValue) && inputRate(aValue) == 1;
}
export { LocalControl as LocalControl };
export { localControlIndexCompare as localControlIndexCompare };
export { localControlNameCompare as localControlNameCompare };
export { sortLocalControls as sortLocalControls };
export { signalSize as signalSize };
export { signalNumber as signalNumber };
export { ScUgen as ScUgen };
export { localControlInput as localControlInput };
export { NamedControl as NamedControl };
export { localControls as localControls };
export { isScUgen as isScUgen };
export { isScUgenByName as isScUgenByName };
export { scUgenCompare as scUgenCompare };
export { nilPort as nilPort };
export { Ugen as Ugen };
export { isLocalControl as isLocalControl };
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
export { inputFirstUgen as inputFirstUgen };
export { multipleRootGraph as multipleRootGraph };
export { krMutateInPlace as krMutateInPlace };
export { kr as kr };
export { UnaryOpWithConstantOptimiser as UnaryOpWithConstantOptimiser };
export { isArrayConstant as isArrayConstant };
export { UnaryOp as UnaryOp };
export { BinaryOpWithConstantOptimiser as BinaryOpWithConstantOptimiser };
export { BinaryOp as BinaryOp };
export { isOutUgen as isOutUgen };
export { isOutUgenList as isOutUgenList };
export { isControlRateUgen as isControlRateUgen };
function A2K(input) {
    return makeUgen('A2K', 1, 1, 0, [
        input
    ]);
}
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
function BfDecode1(w, x, y, z, azimuth, elevation, wComp) {
    return makeUgen('BFDecode1', 1, 2, 0, [
        w,
        x,
        y,
        z,
        azimuth,
        elevation,
        wComp
    ]);
}
function BfEncode1(input, azimuth, elevation, rho, gain, wComp) {
    return makeUgen('BFEncode1', 4, 2, 0, [
        input,
        azimuth,
        elevation,
        rho,
        gain,
        wComp
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
function BHiShelf(input, freq, rs, db) {
    return makeUgen('BHiShelf', 1, [
        0
    ], 0, [
        input,
        freq,
        rs,
        db
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
function BLowShelf(input, freq, rs, db) {
    return makeUgen('BLowShelf', 1, [
        0
    ], 0, [
        input,
        freq,
        rs,
        db
    ]);
}
function BMoog(input, freq, q, mode, saturation) {
    return makeUgen('BMoog', 1, [
        0
    ], 0, [
        input,
        freq,
        q,
        mode,
        saturation
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
function BrownNoise() {
    return makeUgen('BrownNoise', 1, 2, 0, []);
}
function Brz2(input) {
    return makeUgen('BRZ2', 1, [
        0
    ], 0, [
        input
    ]);
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
    return makeUgen('BufRd', numChan, [
        1
    ], 0, [
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
function Clip(input, low, high) {
    if (isNumber(input) && isNumber(low) && isNumber(high)) {
        return input < low ? low : input > high ? high : input;
    } else {
        return makeUgen('Clip', 1, [
            0
        ], 0, [
            input,
            low,
            high
        ]);
    }
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
function Dbrown(length, lo, hi, step) {
    return makeUgen('Dbrown', 1, 3, 0, [
        length,
        lo,
        hi,
        step
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
function DecodeB2(numChan, w, x, y, orientation) {
    return makeUgen('DecodeB2', numChan, [
        0,
        1,
        2
    ], 0, [
        w,
        x,
        y,
        orientation
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
function DelayMap(bufNum, input, dynamic, spec) {
    return makeUgen('DelayMap', 1, [
        1
    ], 0, arrayConcat([
        bufNum,
        input,
        dynamic
    ], spec));
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
function DemandEnvGen(level, dur, shape, curve, gate, reset, levelScale, levelBias, timeScale, doneAction) {
    return makeUgen('DemandEnvGen', 1, 2, 0, [
        level,
        dur,
        shape,
        curve,
        gate,
        reset,
        levelScale,
        levelBias,
        timeScale,
        doneAction
    ]);
}
function DetectIndex(bufnum, input) {
    return makeUgen('DetectIndex', 1, [
        1
    ], 0, [
        bufnum,
        input
    ]);
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
function Ddup(n, input) {
    return makeUgen('Ddup', 1, 3, 0, [
        n,
        input
    ]);
}
function Demultiplexer(numChannels, input, selector) {
    return makeUgen('Demultiplexer', numChannels, [
        0
    ], 0, [
        input,
        selector
    ]);
}
function Dgeom(start, grow, length) {
    return makeUgen('Dgeom', 1, 3, 0, [
        start,
        grow,
        length
    ]);
}
function Dibrown(length, lo, hi, step) {
    return makeUgen('Dibrown', 1, 3, 0, [
        length,
        lo,
        hi,
        step
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
function Dser(repeats, list) {
    return makeUgen('Dser', 1, 3, 0, arrayConcat([
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
function Dswitch(index, list) {
    return makeUgen('Dswitch', 1, 3, 0, arrayConcat([
        index
    ], asArray(list)));
}
function Dswitch1(index, list) {
    return makeUgen('Dswitch1', 1, 3, 0, arrayConcat([
        index
    ], asArray(list)));
}
function DurationGate(dur) {
    return makeUgen('DurationGate', 1, 2, 0, [
        dur
    ]);
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
function Dwhite(length, lo, hi) {
    return makeUgen('Dwhite', 1, 3, 0, [
        length,
        lo,
        hi
    ]);
}
function Dwrand(repeats, weights, list) {
    return makeUgen('Dwrand', 1, 3, 0, arrayConcat([
        repeats,
        weights
    ], asArray(list)));
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
function EnvTrapezoid(trig, dur, shape, skew) {
    return makeUgen('EnvTrapezoid', 1, [
        0
    ], 0, [
        trig,
        dur,
        shape,
        skew
    ]);
}
function ExpRand(lo, hi) {
    return makeUgen('ExpRand', 1, 0, 0, [
        lo,
        hi
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
function FreeSelfWhenDone(src) {
    return makeUgen('FreeSelfWhenDone', 1, 1, 0, [
        src
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
function Gate(input, trig) {
    return makeUgen('Gate', 1, [
        0
    ], 0, [
        input,
        trig
    ]);
}
function GbmanN(freq, xi, yi) {
    return makeUgen('GbmanN', 1, 2, 0, [
        freq,
        xi,
        yi
    ]);
}
function GbmanL(freq, xi, yi) {
    return makeUgen('GbmanL', 1, 2, 0, [
        freq,
        xi,
        yi
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
function Gendy2(ampdist, durdist, adparam, ddparam, minfreq, maxfreq, ampscale, durscale, initCPs, knum, a, c) {
    return makeUgen('Gendy2', 1, 2, 0, [
        ampdist,
        durdist,
        adparam,
        ddparam,
        minfreq,
        maxfreq,
        ampscale,
        durscale,
        initCPs,
        knum,
        a,
        c
    ]);
}
function Gendy3(ampdist, durdist, adparam, ddparam, freq, ampscale, durscale, initCPs, knum) {
    return makeUgen('Gendy3', 1, 2, 0, [
        ampdist,
        durdist,
        adparam,
        ddparam,
        freq,
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
function Hilbert(input) {
    return makeUgen('Hilbert', 2, [
        0
    ], 0, [
        input
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
function Integrator(input, coef) {
    return makeUgen('Integrator', 1, [
        0
    ], 0, [
        input,
        coef
    ]);
}
function IRand(lo, hi) {
    return makeUgen('IRand', 1, 0, 0, [
        lo,
        hi
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
function Lag(input, lagTime) {
    return makeUgen('Lag', 1, [
        0
    ], 0, [
        input,
        lagTime
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
function LagUd(input, lagTimeU, lagTimeD) {
    return makeUgen('LagUD', 1, [
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
function LatoocarfianN(freq, a, b, c, d, xi, yi) {
    return makeUgen('LatoocarfianN', 1, 2, 0, [
        freq,
        a,
        b,
        c,
        d,
        xi,
        yi
    ]);
}
function LatoocarfianL(freq, a, b, c, d, xi, yi) {
    return makeUgen('LatoocarfianL', 1, 2, 0, [
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
function LfClipNoise(freq) {
    return makeUgen('LFClipNoise', 1, 2, 0, [
        freq
    ]);
}
function LfdClipNoise(freq) {
    return makeUgen('LFDClipNoise', 1, 2, 0, [
        freq
    ]);
}
function LfCub(freq, iphase) {
    return makeUgen('LFCub', 1, 2, 0, [
        freq,
        iphase
    ]);
}
function LfdNoise0(freq) {
    return makeUgen('LFDNoise0', 1, 2, 0, [
        freq
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
function Lpf(input, freq) {
    return makeUgen('LPF', 1, [
        0
    ], 0, [
        input,
        freq
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
function MoogVcf(input, fco, res) {
    return makeUgen('MoogVCF', 1, [
        0
    ], 0, [
        input,
        fco,
        res
    ]);
}
function MulAdd(input, mul, add) {
    if (isNumber(input) && isNumber(mul) && isNumber(add)) {
        return input * mul + add;
    } else {
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
}
function Multiplexer(selector, inputArray) {
    return makeUgen('Multiplexer', 1, [
        0,
        1
    ], 0, arrayConcat([
        selector
    ], asArray(inputArray)));
}
function MVerb(in1, in2, dampingFreq, density, bandwidthFreq, decay, predelay, size, gain, mix, earlyMix) {
    return makeUgen('MVerb', 2, 2, 0, [
        in1,
        in2,
        dampingFreq,
        density,
        bandwidthFreq,
        decay,
        predelay,
        size,
        gain,
        mix,
        earlyMix
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
function OffsetOut(bus, channelsArray) {
    return makeUgen('OffsetOut', 0, [
        1
    ], 0, arrayConcat([
        bus
    ], asArray(channelsArray)));
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
function PanB2(input, azimuth, gain) {
    return makeUgen('PanB2', 3, [
        0
    ], 0, [
        input,
        azimuth,
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
function PvBinScramble(buffer, wipe, width, trig) {
    return makeUgen('PV_BinScramble', 1, 1, 0, [
        buffer,
        wipe,
        width,
        trig
    ]);
}
function PvBrickWall(buffer, wipe) {
    return makeUgen('PV_BrickWall', 1, 1, 0, [
        buffer,
        wipe
    ]);
}
function PvCopy(bufferA, bufferB) {
    return makeUgen('PV_Copy', 1, 1, 0, [
        bufferA,
        bufferB
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
function PvRectComb(buffer, numTeeth, phase, width) {
    return makeUgen('PV_RectComb', 1, 1, 0, [
        buffer,
        numTeeth,
        phase,
        width
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
function QuadL(freq, a, b, c, xi) {
    return makeUgen('QuadL', 1, 2, 0, [
        freq,
        a,
        b,
        c,
        xi
    ]);
}
function RadiansPerSample() {
    return makeUgen('RadiansPerSample', 1, 0, 0, []);
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
function Rhpf(input, freq, rq) {
    return makeUgen('RHPF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
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
function Rlpf(input, freq, rq) {
    return makeUgen('RLPF', 1, [
        0
    ], 0, [
        input,
        freq,
        rq
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
function SampleDur() {
    return makeUgen('SampleDur', 1, 0, 0, []);
}
function SampleRate() {
    return makeUgen('SampleRate', 1, 0, 0, []);
}
function SamplerIndex(bufnum, size, mnn) {
    return makeUgen('SamplerIndex', 2, 1, 0, [
        bufnum,
        size,
        mnn
    ]);
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
function SawDpw(freq, iphase) {
    return makeUgen('SawDPW', 1, 2, 0, [
        freq,
        iphase
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
function Sum4(in0, in1, in2, in3) {
    return makeUgen('Sum4', 1, [
        0,
        1,
        2,
        3
    ], 0, [
        in0,
        in1,
        in2,
        in3
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
function TableRand(trig, bufnum) {
    return makeUgen('TableRand', 1, [
        0
    ], 0, [
        trig,
        bufnum
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
function TwIndex(input, normalize, array) {
    return makeUgen('TWindex', 1, [
        0
    ], 0, arrayConcat([
        input,
        normalize
    ], asArray(array)));
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
function AnalogFoldOsc(freq, amp) {
    return makeUgen('AnalogFoldOsc', 1, 2, 0, [
        freq,
        amp
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
function CrossoverDistortion(input, amp, smooth) {
    return makeUgen('CrossoverDistortion', 1, [
        0
    ], 0, [
        input,
        amp,
        smooth
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
function DustRange(iotMin, iotMax) {
    return makeUgen('DustRange', 1, 2, 0, [
        iotMin,
        iotMax
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
function ExpRandN(numChan, lo, hi) {
    return makeUgen('ExpRandN', numChan, 0, 0, [
        lo,
        hi
    ]);
}
function Fm7(ctlMatrix, modMatrix) {
    return makeUgen('FM7', 6, 2, 0, arrayConcat(asArray(ctlMatrix), asArray(modMatrix)));
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
function LfBrownNoise1(freq, dev, dist) {
    return makeUgen('LFBrownNoise1', 1, 2, 0, [
        freq,
        dev,
        dist
    ]);
}
function LinRandN(numChan, lo, hi, minmax) {
    return makeUgen('LinRandN', numChan, 0, 0, [
        lo,
        hi,
        minmax
    ]);
}
function MembraneCircle(excitation, tension, loss) {
    return makeUgen('MembraneCircle', 1, 2, 0, [
        excitation,
        tension,
        loss
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
function MoogLadder(input, ffreq, res) {
    return makeUgen('MoogLadder', 1, [
        0
    ], 0, [
        input,
        ffreq,
        res
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
function Perlin3(x, y, z) {
    return makeUgen('Perlin3', 1, 2, 0, [
        x,
        y,
        z
    ]);
}
function RandN(numChan, lo, hi) {
    return makeUgen('RandN', numChan, 0, 0, [
        lo,
        hi
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
function SinGrain(trigger, dur, freq) {
    return makeUgen('SinGrain', 1, 2, 0, [
        trigger,
        dur,
        freq
    ]);
}
function ShufflerB(bufnum, readLocationMinima, readLocationMaxima, readIncrementMinima, readIncrementMaxima, durationMinima, durationMaxima, envelopeAmplitudeMinima, envelopeAmplitudeMaxima, envelopeShapeMinima, envelopeShapeMaxima, envelopeSkewMinima, envelopeSkewMaxima, stereoLocationMinima, stereoLocationMaxima, interOffsetTimeMinima, interOffsetTimeMaxima, ftableReadLocationIncrement, readIncrementQuanta, interOffsetTimeQuanta) {
    return makeUgen('ShufflerB', 2, 2, 0, [
        bufnum,
        readLocationMinima,
        readLocationMaxima,
        readIncrementMinima,
        readIncrementMaxima,
        durationMinima,
        durationMaxima,
        envelopeAmplitudeMinima,
        envelopeAmplitudeMaxima,
        envelopeShapeMinima,
        envelopeShapeMaxima,
        envelopeSkewMinima,
        envelopeSkewMaxima,
        stereoLocationMinima,
        stereoLocationMaxima,
        interOffsetTimeMinima,
        interOffsetTimeMaxima,
        ftableReadLocationIncrement,
        readIncrementQuanta,
        interOffsetTimeQuanta
    ]);
}
function Svf(signal, cutoff, res, lowpass, bandpass, highpass, notch, peak) {
    return makeUgen('SVF', 1, [
        0
    ], 0, [
        signal,
        cutoff,
        res,
        lowpass,
        bandpass,
        highpass,
        notch,
        peak
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
function TrigAllocator(numChannels, algorithm, input, dur) {
    return makeUgen('TrigAllocator', numChannels, [
        1
    ], 0, [
        algorithm,
        input,
        dur
    ]);
}
function TrigRoundRobin(numChannels, input) {
    return makeUgen('TrigRoundRobin', numChannels, [
        0
    ], 0, [
        input
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
function Vosim(trig, freq, nCycles, decay) {
    return makeUgen('VOSIM', 1, 2, 0, [
        trig,
        freq,
        nCycles,
        decay
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
function WDistances(gate, x, y, z, coordinateArray) {
    return makeUgen('WDistances', arrayLength(coordinateArray) / 3, 1, 0, arrayConcat([
        gate,
        x,
        y,
        z
    ], coordinateArray));
}
function WkNearest(numChannels, gate, x, y, z, coordinateArray) {
    return makeUgen('WkNearest', numChannels, 1, 0, arrayConcat([
        gate,
        x,
        y,
        z
    ], coordinateArray));
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
export { A2K as A2K };
export { AllpassC as AllpassC };
export { AllpassL as AllpassL };
export { AllpassN as AllpassN };
export { AmpComp as AmpComp };
export { AmpCompA as AmpCompA };
export { Amplitude as Amplitude };
export { Balance2 as Balance2 };
export { BBandPass as BBandPass };
export { BBandStop as BBandStop };
export { BfDecode1 as BfDecode1 };
export { BfEncode1 as BfEncode1 };
export { BHiPass as BHiPass };
export { BHiShelf as BHiShelf };
export { Blip as Blip };
export { BlockSize as BlockSize };
export { BLowPass as BLowPass };
export { BLowShelf as BLowShelf };
export { BMoog as BMoog };
export { BPeakEq as BPeakEq };
export { Bpf as Bpf };
export { Bpz2 as Bpz2 };
export { Brf as Brf };
export { BrownNoise as BrownNoise };
export { Brz2 as Brz2 };
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
export { Dbrown as Dbrown };
export { Dbufrd as Dbufrd };
export { Dbufwr as Dbufwr };
export { Dc as Dc };
export { Decay as Decay };
export { Decay2 as Decay2 };
export { DecodeB2 as DecodeB2 };
export { DegreeToKey as DegreeToKey };
export { Delay1 as Delay1 };
export { Delay2 as Delay2 };
export { DelayC as DelayC };
export { DelayL as DelayL };
export { DelayMap as DelayMap };
export { DelayN as DelayN };
export { Demand as Demand };
export { DemandEnvGen as DemandEnvGen };
export { DetectIndex as DetectIndex };
export { DetectSilence as DetectSilence };
export { Ddup as Ddup };
export { Demultiplexer as Demultiplexer };
export { Dgeom as Dgeom };
export { Dibrown as Dibrown };
export { Diwhite as Diwhite };
export { Drand as Drand };
export { Dseq as Dseq };
export { Dser as Dser };
export { Dseries as Dseries };
export { Dshuf as Dshuf };
export { Dswitch as Dswitch };
export { Dswitch1 as Dswitch1 };
export { DurationGate as DurationGate };
export { Dust as Dust };
export { Dust2 as Dust2 };
export { Duty as Duty };
export { Dwhite as Dwhite };
export { Dwrand as Dwrand };
export { Dxrand as Dxrand };
export { EnvGen as EnvGen };
export { EnvTrapezoid as EnvTrapezoid };
export { ExpRand as ExpRand };
export { FbSineC as FbSineC };
export { FbSineL as FbSineL };
export { Fft as Fft };
export { Fold as Fold };
export { Formant as Formant };
export { Formlet as Formlet };
export { Fos as Fos };
export { FreeSelfWhenDone as FreeSelfWhenDone };
export { FreeVerb as FreeVerb };
export { FreeVerb2 as FreeVerb2 };
export { FreqShift as FreqShift };
export { FSinOsc as FSinOsc };
export { Gate as Gate };
export { GbmanN as GbmanN };
export { GbmanL as GbmanL };
export { Gendy1 as Gendy1 };
export { Gendy2 as Gendy2 };
export { Gendy3 as Gendy3 };
export { GrainBuf as GrainBuf };
export { GrainFm as GrainFm };
export { GrainSin as GrainSin };
export { GrayNoise as GrayNoise };
export { GVerb as GVerb };
export { Hasher as Hasher };
export { HenonC as HenonC };
export { HenonL as HenonL };
export { HenonN as HenonN };
export { Hilbert as Hilbert };
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
export { Integrator as Integrator };
export { IRand as IRand };
export { K2A as K2A };
export { Klang as Klang };
export { Klank as Klank };
export { Lag as Lag };
export { Lag2 as Lag2 };
export { Lag3 as Lag3 };
export { Lag3Ud as Lag3Ud };
export { LagUd as LagUd };
export { Latch as Latch };
export { LatoocarfianC as LatoocarfianC };
export { LatoocarfianN as LatoocarfianN };
export { LatoocarfianL as LatoocarfianL };
export { LeakDc as LeakDc };
export { LfClipNoise as LfClipNoise };
export { LfdClipNoise as LfdClipNoise };
export { LfCub as LfCub };
export { LfdNoise0 as LfdNoise0 };
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
export { Lpf as Lpf };
export { Lpz1 as Lpz1 };
export { Lpz2 as Lpz2 };
export { MantissaMask as MantissaMask };
export { MaxLocalBufs as MaxLocalBufs };
export { Median as Median };
export { MidEq as MidEq };
export { ModDif as ModDif };
export { MoogFf as MoogFf };
export { MoogVcf as MoogVcf };
export { MulAdd as MulAdd };
export { Multiplexer as Multiplexer };
export { MVerb as MVerb };
export { Normalizer as Normalizer };
export { NRand as NRand };
export { NumOutputBuses as NumOutputBuses };
export { OffsetOut as OffsetOut };
export { OnePole as OnePole };
export { OneZero as OneZero };
export { Osc as Osc };
export { Out as Out };
export { Pan2 as Pan2 };
export { PanAz as PanAz };
export { PanB as PanB };
export { PanB2 as PanB2 };
export { PeakFollower as PeakFollower };
export { Phasor as Phasor };
export { PinkNoise as PinkNoise };
export { Pitch as Pitch };
export { PitchShift as PitchShift };
export { PlayBuf as PlayBuf };
export { Pluck as Pluck };
export { Pulse as Pulse };
export { PulseCount as PulseCount };
export { PulseDivider as PulseDivider };
export { PvBinScramble as PvBinScramble };
export { PvBrickWall as PvBrickWall };
export { PvCopy as PvCopy };
export { PvDiffuser as PvDiffuser };
export { PvRandComb as PvRandComb };
export { PvRectComb as PvRectComb };
export { QuadC as QuadC };
export { QuadL as QuadL };
export { RadiansPerSample as RadiansPerSample };
export { Rand as Rand };
export { RecordBuf as RecordBuf };
export { ReplaceOut as ReplaceOut };
export { Resonz as Resonz };
export { Rhpf as Rhpf };
export { Ringz as Ringz };
export { Rlpf as Rlpf };
export { Rotate2 as Rotate2 };
export { RunningMax as RunningMax };
export { RunningSum as RunningSum };
export { SampleDur as SampleDur };
export { SampleRate as SampleRate };
export { SamplerIndex as SamplerIndex };
export { Sanitize as Sanitize };
export { Saw as Saw };
export { SawDpw as SawDpw };
export { Schmidt as Schmidt };
export { Select as Select };
export { SetBuf as SetBuf };
export { SetResetFf as SetResetFf };
export { SinOsc as SinOsc };
export { SinOscFb as SinOscFb };
export { Slew as Slew };
export { Slope as Slope };
export { Sos as Sos };
export { Spring as Spring };
export { StandardL as StandardL };
export { StandardN as StandardN };
export { Stepper as Stepper };
export { Sum4 as Sum4 };
export { Sweep as Sweep };
export { SyncSaw as SyncSaw };
export { TableRand as TableRand };
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
export { TwIndex as TwIndex };
export { TwoPole as TwoPole };
export { TwoZero as TwoZero };
export { VarSaw as VarSaw };
export { Vibrato as Vibrato };
export { Warp1 as Warp1 };
export { WhiteNoise as WhiteNoise };
export { Wrap as Wrap };
export { WrapIndex as WrapIndex };
export { XFade2 as XFade2 };
export { XLine as XLine };
export { ZeroCrossing as ZeroCrossing };
export { AnalogFoldOsc as AnalogFoldOsc };
export { Bezier as Bezier };
export { CrossoverDistortion as CrossoverDistortion };
export { Dfm1 as Dfm1 };
export { DustRange as DustRange };
export { DwgPluckedStiff as DwgPluckedStiff };
export { Dx7 as Dx7 };
export { Dx7Env as Dx7Env };
export { ExpRandN as ExpRandN };
export { Fm7 as Fm7 };
export { Freezer as Freezer };
export { Friction as Friction };
export { GreyholeRaw as GreyholeRaw };
export { LfBrownNoise1 as LfBrownNoise1 };
export { LinRandN as LinRandN };
export { MembraneCircle as MembraneCircle };
export { MiBraids as MiBraids };
export { MiClouds as MiClouds };
export { MiRings as MiRings };
export { MoogLadder as MoogLadder };
export { ObxdFilter as ObxdFilter };
export { Perlin3 as Perlin3 };
export { RandN as RandN };
export { Rcd as Rcd };
export { Scm as Scm };
export { SinGrain as SinGrain };
export { ShufflerB as ShufflerB };
export { Svf as Svf };
export { SvfBp as SvfBp };
export { SvfHp as SvfHp };
export { SvfLp as SvfLp };
export { TLinRand as TLinRand };
export { TScramble as TScramble };
export { TrigAllocator as TrigAllocator };
export { TrigRoundRobin as TrigRoundRobin };
export { VbJonVerb as VbJonVerb };
export { Vosim as Vosim };
export { WaveLoss as WaveLoss };
export { WDistances as WDistances };
export { WkNearest as WkNearest };
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
        this.releaseNode = releaseNode;
        this.loopNode = loopNode;
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
    store(fromMaybe(env.releaseNode, -99));
    store(fromMaybe(env.loopNode, -99));
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
    if (isOutUgen(ugen) || isOutUgenList(ugen)) {
        return ugen;
    } else {
        if (isOutputSignal(ugen)) {
            return Out(bus, ugen);
        } else {
            console.error('wrapOut', bus, ugen);
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
    const pos = arrayFromTo(0, n - 1).map(function(item) {
        return Add(Mul(Sub(Mul(item, Fdiv(2, Sub(n, 1))), 1), spread), center);
    });
    const lvl = Mul(level, levelComp ? Math.sqrt(1 / n) : 1);
    return arrayReduce(Mul(Pan2(inArray, pos, 1), lvl), Add);
}
function Splay2(inArray) {
    const n = Math.max(2, signalSize(inArray));
    const pos = arrayFromTo(0, n - 1).map(function(item) {
        return (item * (2 / (n - 1)) - 1) * 1 + 0;
    });
    const lvl = Math.sqrt(1 / n);
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
function TwChoose(trig, array, weights, normalize) {
    return Select(TwIndex(trig, normalize, weights), array);
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
        return multipleRootGraph(lhs, rhs);
    }
}
function BufClear(buf) {
    return multipleRootGraph(buf, ClearBuf(buf));
}
function BufRec(bufnum, reset, inputArray) {
    return RecordBuf(bufnum, 0, 1, 0, 1, 1, reset, 0, inputArray);
}
function BufWrite(inputArray, bufnum, phase, loop) {
    return BufWr(bufnum, phase, loop, inputArray);
}
function asKlankSpec(freq, amp, time) {
    const n = signalSize(freq);
    const a = [
        freq,
        fromMaybe(amp, arrayReplicate(n, 1)),
        fromMaybe(time, arrayReplicate(n, 1))
    ];
    return arrayConcatenation(arrayTranspose(arrayExtendToBeOfEqualSize(1, a)));
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
    return MidiCps(Mul(a, 100));
}
function ControlIn(numChannels, bus) {
    return kr(In(numChannels, bus));
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
    const leftBuffer = BufClear(LocalBuf(1, delaySize));
    const rightBuffer = BufClear(LocalBuf(1, delaySize));
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
    return multipleRootGraph(output, writer);
}
function MultiTapDelay(timesArray, levelsArray, input) {
    const delayFrames = Mul(arrayMaxItem(timesArray), SampleRate());
    const buf = BufClear(LocalBuf(1, delayFrames));
    const writer = DelayWrite(buf, input);
    const numReaders = timesArray.length;
    const readers = arrayFromTo(0, numReaders - 1).map((item)=>Mul(DelayTap(buf, timesArray[item]), levelsArray[item]));
    return multipleRootGraph(arrayReduce(readers, Add), writer);
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
    const sqrtRq = Sqrt(rq);
    return BLowPass(BLowPass(input, freq, sqrtRq), freq, sqrtRq);
}
function BHiPass4(input, freq, rq) {
    const sqrtRq = Sqrt(rq);
    return BHiPass(BHiPass(input, freq, sqrtRq), freq, sqrtRq);
}
function EqPan2(input, pos) {
    return Pan2(input, pos, 1);
}
function VarLag(input, time, curve) {
    const env = new Env([
        input,
        input
    ], [
        time
    ], curve, null, null, 0);
    const timeChanged = typeof time === 'number' ? 0 : Changed(time, 0);
    const trig = Add(Add(Changed(input, 0), timeChanged), Impulse(0, 0));
    return EnvGen(trig, 1, 0, 1, 0, envCoord(env));
}
function CompanderD(input, thresh, slopeBelow, slopeAbove, clampTime, relaxTime) {
    return Compander(DelayN(input, clampTime, clampTime), input, thresh, slopeBelow, slopeAbove, clampTime, relaxTime);
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
export { TwChoose as TwChoose };
export { PmOsc as PmOsc };
export { XLn as XLn };
export { DmdFor as DmdFor };
export { TDmdFor as TDmdFor };
export { Ln as Ln };
export { TLine as TLine };
export { TxLine as TxLine };
export { AudioIn as AudioIn };
export { AudioOut as AudioOut };
export { asLocalBuf as asLocalBuf };
export { BufClear as BufClear };
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
export { EqPan2 as EqPan2 };
export { VarLag as VarLag };
export { CompanderD as CompanderD };
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
    if (!globalThis.globalScSynth.useIoUgens) {
        console.error('KeyState: no IoUgens');
        return 0;
    }
    return makeUgen('KeyState', 1, 1, 0, [
        keycode,
        minval,
        maxval,
        lag
    ]);
}
function MouseButton(minval, maxval, lag) {
    if (globalThis.globalScSynth.useIoUgens) {
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
    if (globalThis.globalScSynth.useIoUgens) {
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
    if (globalThis.globalScSynth.useIoUgens) {
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
const kAddToHead = 0;
const kAddToTail = 1;
function b_alloc(bufferNumber, numberOfFrames, numberOfChannels, onCompletion) {
    return {
        address: '/b_alloc',
        args: [
            oscInt32(bufferNumber),
            oscInt32(numberOfFrames),
            oscInt32(numberOfChannels)
        ].concat(onCompletion ? [
            oscBlob(onCompletion)
        ] : [])
    };
}
function b_memcpy(bufferNumber, numFrames, numChannels, sampleRate, bufferData, byteSwap) {
    return {
        address: '/b_gen',
        args: [
            oscInt32(bufferNumber),
            oscString('memcpy'),
            oscInt32(numFrames),
            oscInt32(numChannels),
            oscFloat(sampleRate),
            oscBlob(bufferData),
            oscInt32(byteSwap)
        ]
    };
}
function b_allocMemcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, bufferData, byteSwap) {
    const allocBytes = numberOfFrames * numberOfChannels * 4;
    if (allocBytes != bufferData.length) {
        console.error('b_allocMemcpy: array size error', allocBytes, bufferData.length);
    }
    const memcpyMessage = b_memcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, bufferData, byteSwap);
    return b_alloc(bufferNumber, numberOfFrames, numberOfChannels, encodeOscPacket(memcpyMessage));
}
function b_allocMemcpyFloat32Array(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, interleavedData) {
    return b_allocMemcpy(bufferNumber, numberOfFrames, numberOfChannels, sampleRate, encodeFloat32Array(interleavedData, false), 4);
}
function b_allocMemcpyArray(bufferNumber, sampleRate, channelData) {
    const numberOfFrames = channelData.length;
    return b_allocMemcpyFloat32Array(bufferNumber, numberOfFrames, 1, sampleRate, new Float32Array(channelData));
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
function d_recv(syndefArray, onCompletion) {
    return {
        address: '/d_recv',
        args: [
            oscBlob(syndefArray)
        ].concat(onCompletion ? [
            oscBlob(onCompletion)
        ] : [])
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
const defaultScSynthStatus = {
    ugenCount: 0,
    synthCount: 0,
    groupCount: 0,
    synthdefCount: 0,
    cpuAverage: 0,
    cpuPeak: 0,
    sampleRateNominal: 48000,
    sampleRateActual: 48000
};
function m_parseStatusReplyInto(msg, status) {
    if (msg.address === '/status.reply') {
        status.ugenCount = msg.args[1].value;
        status.synthCount = msg.args[2].value;
        status.groupCount = msg.args[3].value;
        status.synthdefCount = msg.args[4].value;
        status.cpuAverage = Math.round(msg.args[5].value);
        status.cpuPeak = Math.round(msg.args[6].value);
        status.sampleRateNominal = msg.args[7].value;
        status.sampleRateActual = Math.round(msg.args[8].value);
    } else {
        throw `m_statusReply: not /status.reply: ${msg.address}`;
    }
}
function s_new(name, nodeId, addAction, target, parameterArray) {
    const oscParameters = [];
    parameterArray.forEach(function(each) {
        oscParameters.push(oscString(each[0]));
        oscParameters.push(oscFloat(each[1]));
    });
    return {
        address: '/s_new',
        args: [
            oscString(name),
            oscInt32(nodeId),
            oscInt32(addAction),
            oscInt32(target)
        ].concat(oscParameters)
    };
}
function s_new0(name, nodeId, addAction, target) {
    return s_new(name, nodeId, addAction, target, []);
}
function n_set(nodeId, parameterArray) {
    const oscParameters = [
        oscInt32(nodeId)
    ];
    parameterArray.forEach(function(each) {
        oscParameters.push(oscString(each[0]));
        oscParameters.push(oscFloat(each[1]));
    });
    return {
        address: '/n_set',
        args: oscParameters
    };
}
function n_set1(nodeId, controlName, controlValue) {
    return n_set(nodeId, [
        [
            controlName,
            controlValue
        ]
    ]);
}
export { kAddToHead as kAddToHead };
export { kAddToTail as kAddToTail };
export { b_alloc as b_alloc };
export { b_memcpy as b_memcpy };
export { b_allocMemcpy as b_allocMemcpy };
export { b_allocMemcpyFloat32Array as b_allocMemcpyFloat32Array };
export { b_allocMemcpyArray as b_allocMemcpyArray };
export { b_getn1 as b_getn1 };
export { b_query1 as b_query1 };
export { c_set1 as c_set1 };
export { c_setn1 as c_setn1 };
export { d_recv as d_recv };
export { g_new as g_new };
export { g_new1 as g_new1 };
export { g_freeAll as g_freeAll };
export { g_freeAll1 as g_freeAll1 };
export { m_status as m_status };
export { m_dumpOsc as m_dumpOsc };
export { m_notify as m_notify };
export { defaultScSynthStatus as defaultScSynthStatus };
export { m_parseStatusReplyInto as m_parseStatusReplyInto };
export { s_new as s_new };
export { s_new0 as s_new0 };
export { n_set as n_set };
export { n_set1 as n_set1 };
function b_allocMemcpySoundFile(soundFile, bufferNumber) {
    return b_allocMemcpyFloat32Array(bufferNumber, soundFile.numberOfFrames, soundFile.numberOfChannels, soundFile.sampleRate, soundFile.interleavedData);
}
async function fetchSoundFileToScSynthBuffer(scSynth, soundFileUrl, numberOfChannels, bufferNumber) {
    const soundFile = await fetchSoundFile(soundFileUrl);
    if (soundFile.numberOfChannels === numberOfChannels) {
        scSynth.sendOsc(b_allocMemcpySoundFile(soundFile, bufferNumber));
    } else {
        console.error('fetchSoundFileToScSynthBuffer: numberOfChannels mismatch');
    }
}
async function fetchSoundFileChannelsToScSynthBuffers(scSynth, soundFileUrl, bufferNumbers, channelIndices) {
    const soundFile = await fetchSoundFile(soundFileUrl);
    for(let i = 0; i < bufferNumbers.length; i++){
        const bufferNumber = bufferNumbers[i];
        const channelIndex = channelIndices[i];
        if (channelIndex >= 1 && channelIndex <= soundFile.numberOfChannels) {
            scSynth.sendOsc(b_allocMemcpyFloat32Array(bufferNumber, soundFile.numberOfFrames, 1, soundFile.sampleRate, soundFile.channelData(channelIndex - 1)));
        } else {
            console.error('fetchSoundFileChannelsToScSynthBuffers: index out of bounds', channelIndex, soundFile.numberOfChannels);
        }
    }
}
export { b_allocMemcpySoundFile as b_allocMemcpySoundFile };
export { fetchSoundFileToScSynthBuffer as fetchSoundFileToScSynthBuffer };
export { fetchSoundFileChannelsToScSynthBuffers as fetchSoundFileChannelsToScSynthBuffers };
const sc3Buffer = {
    dict: {
        'CrotaleD6': 'https://rohandrape.net/pub/jssc3/flac/CrotaleD6.wav',
        'HarpA4': 'https://rohandrape.net/pub/jssc3/flac/HarpA4.wav',
        'PianoC5': 'https://rohandrape.net/pub/jssc3/flac/PianoC5.wav',
        'Floating': 'https://rohandrape.net/pub/jssc3/flac/Floating.wav',
        'Then': 'https://rohandrape.net/pub/jssc3/flac/Then.wav'
    },
    cache: {},
    next: 100
};
function SfAcquire(urlOrKey, numberOfChannels, channelIndices) {
    if (!globalThis.globalScSynth) {
        throw new Error('SfAcquire: no scSynth?');
    } else {
        const soundFileUrl = sc3Buffer.dict[urlOrKey] || urlOrKey;
        let cacheValue = sc3Buffer.cache[soundFileUrl];
        if (!cacheValue) {
            const bufferNumberArray = arrayFromTo(sc3Buffer.next, sc3Buffer.next + numberOfChannels - 1);
            fetchSoundFileChannelsToScSynthBuffers(globalThis.globalScSynth, soundFileUrl, bufferNumberArray, channelIndices);
            sc3Buffer.cache[soundFileUrl] = bufferNumberArray;
            sc3Buffer.next += numberOfChannels;
            cacheValue = bufferNumberArray;
        }
        return channelIndices.map((item)=>arrayAtWrap(cacheValue, item - 1));
    }
}
function SfAcquire1(urlOrKey, numberOfChannels, channelIndex) {
    return SfAcquire(urlOrKey, numberOfChannels, [
        channelIndex
    ])[0];
}
export { sc3Buffer as sc3Buffer };
export { SfAcquire as SfAcquire };
export { SfAcquire1 as SfAcquire1 };
class ContinuousEvent {
    part;
    voice;
    contents;
    constructor(part, voice, contents){
        this.part = part;
        this.voice = voice;
        this.contents = contents;
    }
    get w() {
        return this.contents[0];
    }
    get x() {
        return this.contents[1];
    }
    get y() {
        return this.contents[2];
    }
    get z() {
        return this.contents[3];
    }
    get i() {
        return this.contents[4];
    }
    get j() {
        return this.contents[5];
    }
    get k() {
        return this.contents[6];
    }
    get p() {
        return this.contents[7];
    }
}
function voiceAddr(part, voice) {
    const partAddr = Add(13000, Mul(Mul(Sub(part, 1), 24), 10));
    const voiceAddr = Add(partAddr, Mul(Sub(voice, 1), 10));
    return voiceAddr;
}
function voiceAddrNumber(part, voice) {
    return signalNumber(voiceAddr(part, voice));
}
function Voicer(part, numVoices, voiceFunc) {
    return arrayFromTo(1, numVoices).map(function(voice) {
        const controlArray = ControlIn(8, voiceAddr(part, voice));
        return voiceFunc(new ContinuousEvent(part, voice, controlArray));
    });
}
function ccEventParamSetMessage(e) {
    return c_setn1(voiceAddrNumber(e.part, e.voice), [
        e.w,
        e.x,
        e.y,
        e.z,
        e.i,
        e.j,
        e.k,
        e.p
    ]);
}
function voiceEndMessage(part, voice) {
    return c_set1(voiceAddrNumber(part, voice), 0);
}
function KeyDown(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 0));
}
function KeyTimbre(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 2));
}
function KeyPressure(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 3));
}
function KeyVelocity(voiceNumber) {
    return Latch(KeyPressure(voiceNumber), KeyDown(voiceNumber));
}
function KeyPitch(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 7));
}
function PenDown(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 0));
}
function PenX(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 1));
}
function PenY(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 2));
}
function PenZ(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 3));
}
function PenAngle(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 4));
}
function PenRadius(voiceNumber) {
    return ControlIn(1, Add(voiceAddr(1, voiceNumber), 5));
}
export { ContinuousEvent as ContinuousEvent };
export { voiceAddr as voiceAddr };
export { voiceAddrNumber as voiceAddrNumber };
export { Voicer as Voicer };
export { ccEventParamSetMessage as ccEventParamSetMessage };
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
    if (isArray(p)) {
        arrayForEach(p, (item)=>ugenTraverseCollecting(item, c, w));
    } else if (isUgen(p)) {
        const multipleRootGraphArray = setAsArray(p.scUgen.multipleRootGraph);
        if (!setIncludes(w, p.scUgen)) {
            setAdd(c, p.scUgen);
            arrayForEach(p.scUgen.inputArray, (item)=>isNumber(item) ? setAdd(c, item) : ugenTraverseCollecting(item, c, w));
            arrayForEach(multipleRootGraphArray, (item)=>isNumber(item) ? setAdd(c, item) : ugenTraverseCollecting(item, c, c));
        }
    } else {
        console.error('ugenTraverseCollecting: unknown type', p, c, w);
    }
}
function ugenTreeLeafNodes(p) {
    const c = setNew();
    ugenTraverseCollecting(p, c, setNew());
    return setAsArray(c);
}
class UgenGraph {
    name;
    ugenArray;
    constantArray;
    controlArray;
    constructor(name, ugenArray, constantArray, controlArray){
        this.name = name;
        this.ugenArray = ugenArray;
        this.constantArray = constantArray;
        this.controlArray = controlArray;
    }
}
function isScUgenControl(scUgen) {
    return [
        'Control',
        'LagControl',
        'TrigControl'
    ].includes(scUgen.name);
}
function signalToUgenTree(signal) {
    return signal;
}
function makeUgenGraph(name, signal) {
    const tree = signalToUgenTree(signal);
    const leafNodes = ugenTreeLeafNodes(tree);
    const constantNodes = arrayFilter(leafNodes, isNumber);
    const controlUgenNodes = arrayFilter(leafNodes, (item)=>isScUgen(item) && item.localControl !== null);
    const controlNodes = arrayMap((item)=>item.localControl, controlUgenNodes);
    const controlArray = sortLocalControls(controlNodes);
    const ugenNodes = arrayFilter(leafNodes, (item)=>isScUgen(item) && item.localControl === null);
    const ugenArray = arraySort(ugenNodes, scUgenCompare);
    const numLocalBufs = arrayLength(arrayFilter(ugenArray, (item)=>item.name === 'LocalBuf'));
    const MaxLocalBufs = function(count) {
        return new ScUgen('MaxLocalBufs', 1, 0, 0, [
            count
        ]);
    };
    const numControls = controlArray.length;
    const Control = function(_unusedCount) {
        return new ScUgen('Control', controlArray.length, 1, 0, []);
    };
    if (numLocalBufs > 0) {
        ugenArray.unshift(MaxLocalBufs(numLocalBufs));
    }
    if (numControls > 0) {
        ugenArray.unshift(Control(numControls));
    }
    return new UgenGraph(name, ugenArray, arraySort(arrayNub(arrayAppend([
        numLocalBufs
    ], constantNodes)), (i, j)=>i - j), controlArray);
}
function graphConstantIndex(graph, constantValue) {
    return arrayIndexOf(graph.constantArray, constantValue);
}
function graphUgenIndex(graph, id) {
    return arrayFindIndex(graph.ugenArray, (ugen)=>ugen.id === id);
}
function graphUgenInputSpec(graph, input) {
    if (isUgen(input)) {
        if (isLocalControl(input)) {
            return [
                0,
                input.scUgen.localControl.index
            ];
        } else {
            return [
                graphUgenIndex(graph, input.scUgen.id),
                input.port
            ];
        }
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
        encodeInt32(arrayLength(ugen.inputArray), false),
        encodeInt32(ugen.numChannels, false),
        encodeInt16(ugen.specialIndex, false),
        arrayMap((input)=>arrayMap((index)=>encodeInt32(index, false), graphUgenInputSpec(graph, input)), ugen.inputArray),
        arrayReplicate(ugen.numChannels, encodeInt8(ugen.rate))
    ];
}
function graphEncodeSyndef(graph) {
    return flattenByteEncoding([
        encodeInt32(SCgf, false),
        encodeInt32(2, false),
        encodeInt16(1, false),
        encodePascalString(graph.name),
        encodeInt32(arrayLength(graph.constantArray), false),
        arrayMap((item)=>encodeFloat32(item, false), graph.constantArray),
        encodeInt32(arrayLength(graph.controlArray), false),
        arrayMap((item)=>encodeFloat32(item.defaultValue, false), graph.controlArray),
        encodeInt32(arrayLength(graph.controlArray), false),
        arrayMap((item)=>[
                encodePascalString(item.name),
                encodeInt32(item.index, false)
            ], graph.controlArray),
        encodeInt32(arrayLength(graph.ugenArray), false),
        arrayMap((item)=>graphEncodeUgenSpec(graph, item), graph.ugenArray),
        encodeInt16(0, false)
    ]);
}
function encodeUgen(name, ugen) {
    return graphEncodeSyndef(makeUgenGraph(name, ugen));
}
export { ugenTraverseCollecting as ugenTraverseCollecting };
export { ugenTreeLeafNodes as ugenTreeLeafNodes };
export { UgenGraph as UgenGraph };
export { isScUgenControl as isScUgenControl };
export { signalToUgenTree as signalToUgenTree };
export { makeUgenGraph as makeUgenGraph };
export { graphConstantIndex as graphConstantIndex };
export { graphUgenIndex as graphUgenIndex };
export { graphUgenInputSpec as graphUgenInputSpec };
export { SCgf as SCgf };
export { graphEncodeUgenSpec as graphEncodeUgenSpec };
export { graphEncodeSyndef as graphEncodeSyndef };
export { encodeUgen as encodeUgen };
function ugenGraphPrintUgenSpec(graph, ugen) {
    console.log(ugen.name, ugen.rate, arrayLength(ugen.inputArray), ugen.numChannels, ugen.specialIndex, arrayMap((input)=>graphUgenInputSpec(graph, input), ugen.inputArray), arrayReplicate(ugen.numChannels, ugen.rate));
}
function ugenGraphPrintSyndef(graph) {
    console.log(SCgf, 2, 1, graph.name, arrayLength(graph.constantArray), graph.constantArray, 0, [], 0, [], arrayLength(graph.ugenArray));
    arrayForEach(graph.ugenArray, (item)=>ugenGraphPrintUgenSpec(graph, item));
    console.log(0, []);
}
function printSyndefOfAt(ugen, bus) {
    const graph = makeUgenGraph('sc3.js', wrapOut(bus, ugen));
    ugenGraphPrintSyndef(graph);
}
function printSyndefOf(ugen) {
    printSyndefOfAt(ugen, 0);
}
function ugenGraphInputDisplayName(graph, input) {
    if (isUgen(input)) {
        if (isLocalControl(input)) {
            const ctl = input.scUgen.localControl;
            return `LocalControl(${ctl.name}, ${ctl.index}, ${ctl.defaultValue})`;
        } else {
            const id = String(graphUgenIndex(graph, input.scUgen.id));
            const nm = input.scUgen.displayName();
            const ix = input.scUgen.numChannels > 1 ? `[${String(input.port)}]` : '';
            return `${id}_${nm}${ix}`;
        }
    } else if (isNumber(input)) {
        return String(input);
    } else {
        console.error('ugenGraphInputDisplayName', input);
        return '?';
    }
}
function ugenGraphPrettyPrintUgen(graph, ugen) {
    console.log(`${graphUgenIndex(graph, ugen.id)}_${ugen.displayName()}`, rateSelector(ugen.rate), `[${String(arrayMap((input)=>ugenGraphInputDisplayName(graph, input), ugen.inputArray))}]`);
}
function ugenGraphPrettyPrintSyndef(graph) {
    arrayForEach(graph.ugenArray, (item)=>ugenGraphPrettyPrintUgen(graph, item));
}
function prettyPrintSyndefOf(ugen) {
    const graph = makeUgenGraph('sc3.js', wrapOut(0, ugen));
    ugenGraphPrettyPrintSyndef(graph);
}
export { ugenGraphPrintUgenSpec as ugenGraphPrintUgenSpec };
export { ugenGraphPrintSyndef as ugenGraphPrintSyndef };
export { printSyndefOfAt as printSyndefOfAt };
export { printSyndefOf as printSyndefOf };
export { ugenGraphInputDisplayName as ugenGraphInputDisplayName };
export { ugenGraphPrettyPrintUgen as ugenGraphPrettyPrintUgen };
export { ugenGraphPrettyPrintSyndef as ugenGraphPrettyPrintSyndef };
export { prettyPrintSyndefOf as prettyPrintSyndefOf };
class ScSynthOptions {
    hardwareBufferSize;
    blockSize;
    numInputs;
    numOutputs;
    constructor(hardwareBufferSize, blockSize, numInputs, numOutputs){
        this.hardwareBufferSize = hardwareBufferSize;
        this.blockSize = blockSize;
        this.numInputs = numInputs;
        this.numOutputs = numOutputs;
    }
    print() {
        console.log('-i', this.numInputs, '-o', this.numOutputs, '-Z', this.hardwareBufferSize, '-z', this.blockSize);
    }
}
const scSynthDefaultOptions = new ScSynthOptions(8192, 48, 2, 2);
export { ScSynthOptions as ScSynthOptions };
export { scSynthDefaultOptions as scSynthDefaultOptions };
var ReadyState;
(function(ReadyState) {
    ReadyState["Connecting"] = "Connecting";
    ReadyState["Connected"] = "Connected";
    ReadyState["Disconnected"] = "Disconnected";
})(ReadyState || (ReadyState = {}));
class ScSynth {
    options;
    basicConnect;
    basicSendOsc;
    oscListeners;
    readyState;
    useIoUgens;
    status;
    statusMonitor;
    constructor(){
        this.options = scSynthDefaultOptions;
        this.basicConnect = ()=>Promise.resolve(console.log('basicConnect: not initialized'));
        this.basicSendOsc = (_unusedPacket)=>console.log('basicSendOsc: not initialized');
        this.oscListeners = new Map();
        this.readyState = ReadyState.Disconnected;
        this.useIoUgens = false;
        this.status = defaultScSynthStatus;
        this.statusMonitor = null;
    }
    addOscListener(address, handler) {
        if (this.oscListeners.has(address)) {
            this.oscListeners.get(address).add(handler);
        } else {
            this.oscListeners.set(address, new Set([
                handler
            ]));
        }
    }
    connect() {
        const answer = this.basicConnect();
        this.readyState = ReadyState.Connecting;
        return answer;
    }
    dispatchOscMessage(message) {
        if (this.readyState != ReadyState.Connected) {
            this.readyState = ReadyState.Connected;
            console.log('scSynth: connected');
            this.initGroupStructure();
        }
        this.oscListeners.forEach(function(value, key) {
            if (message.address === key) {
                value.forEach(function(handler) {
                    handler(message);
                });
            }
        });
        if (message.address === '/status.reply') {
            m_parseStatusReplyInto(message, this.status);
        }
    }
    initGroupStructure() {
        this.sendOsc(g_new([
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
    isConnected() {
        return this.readyState == ReadyState.Connected;
    }
    playSynDefAt(synDefName, synDefData, nodeId, groupId, parameterArray, systemTimeInSeconds) {
        this.whenConnected(()=>this.sendOsc(playSynDefAtMessage(synDefName, synDefData, nodeId, groupId, parameterArray, systemTimeInSeconds)));
    }
    playUgenAt(ugenGraph, bus, nodeId, groupId, parameterArray, systemTimeInSeconds) {
        const synDefName = 'anonymous';
        const synDefData = encodeUgen(synDefName, wrapOut(bus, ugenGraph));
        this.playSynDefAt(synDefName, synDefData, nodeId, groupId, parameterArray, systemTimeInSeconds);
    }
    removeOscListener(address, handler) {
        this.oscListeners.get(address).delete(handler);
    }
    requestNotifications() {
        this.sendOsc(m_notify(1, 1));
    }
    requestPrintingOsc() {
        this.sendOsc(m_dumpOsc(1));
    }
    requestStatus() {
        this.sendOsc(m_status);
    }
    reset() {
        this.sendOsc(g_freeAll([
            1,
            2
        ]));
        this.initGroupStructure();
    }
    sendOsc(oscPacket) {
        if (this.readyState != ReadyState.Disconnected) {
            this.basicSendOsc(oscPacket);
        } else {
            console.warn('ScSynth.sendOsc: disconnected');
        }
    }
    startStatusMonitor() {
        if (this.statusMonitor == null) {
            this.statusMonitor = setInterval(()=>this.requestStatus(), 1000);
        } else {
            console.error('ScSynth.startStatusMonitor: monitor started?');
        }
    }
    stopStatusMonitor() {
        if (this.statusMonitor != null) {
            clearInterval(this.statusMonitor);
            this.statusMonitor = null;
        }
    }
    whenConnected(activity) {
        switch(this.readyState){
            case ReadyState.Connected:
                activity();
                break;
            case ReadyState.Connecting:
                console.log('ScSynth.whenConnected: connecting, schedule activity');
                setTimeout(()=>this.whenConnected(activity), 1000);
                break;
            case ReadyState.Disconnected:
                console.log('ScSynth.whenConnected: disconnected, start and schedule activity');
                this.connect();
                setTimeout(()=>this.whenConnected(activity), 1000);
                break;
            default:
                console.log('ScSynth.whenConnected: unknown readyState', this.readyState);
        }
    }
}
function playSynDefAtMessage(synDefName, synDefData, nodeId, groupId, parameterArray, systemTimeInSeconds) {
    const sNew = s_new(synDefName, nodeId, 1, groupId, parameterArray);
    const completionMessage = systemTimeInSeconds == null ? encodeOscMessage(sNew) : encodeOscBundle({
        timeTag: {
            native: performance.timeOrigin + systemTimeInSeconds * 1000
        },
        packets: [
            sNew
        ]
    });
    return d_recv(synDefData, completionMessage);
}
function setPointerControls(scSynth, n, w, x, y) {
    if (scSynth.isConnected() && !scSynth.useIoUgens) {
        scSynth.sendOsc(c_setn1(15001 + n * 10, [
            w,
            x,
            y
        ]));
    }
}
export { ReadyState as ReadyState };
export { ScSynth as ScSynth };
export { playSynDefAtMessage as playSynDefAtMessage };
export { setPointerControls as setPointerControls };
const sc3Mouse = {
    w: 0,
    x: 0,
    y: 0
};
function sc3MouseInit(scSynth) {
    const onMouseEvent = function(event) {
        sc3Mouse.x = event.pageX / globalThis.innerWidth;
        sc3Mouse.y = 1 - event.pageY / globalThis.innerHeight;
        sc3Mouse.w = event.buttons === 1 ? 1 : 0;
        setPointerControls(scSynth, 0, sc3Mouse.w, sc3Mouse.x, sc3Mouse.y);
    };
    document.onmousedown = onMouseEvent;
    document.onmousemove = onMouseEvent;
    document.onmouseup = onMouseEvent;
}
export { sc3MouseInit as sc3MouseInit };
function scSynthInitStatusTextListener(scSynth, nilText) {
    const setText = setterForInnerHtmlOf('statusText');
    setInterval(function() {
        if (scSynth.isConnected()) {
            setText(scSynth.status.ugenCount.toString());
        } else {
            setText(nilText);
        }
    });
}
export { scSynthInitStatusTextListener as scSynthInitStatusTextListener };
function initScSynthWasmModule(scSynthModule, logFunction) {
    scSynthModule.preRun = [];
    scSynthModule.postRun = [];
    scSynthModule.print = function(text) {
        logFunction(`wasm/print:  ${text}`);
    };
    scSynthModule.printErr = function(text) {
        logFunction(`wasm/error: ${text}`);
    };
    scSynthModule.totalDependencies = 0;
    scSynthModule.monitorRunDependencies = function(left) {
        logFunction(`wasm/monitorRunDependencies: # ${String(left)}`);
    };
    scSynthModule.onRuntimeInitialized = function() {
        logFunction('wasm/onRuntimeInitialized: ...');
    };
}
export { initScSynthWasmModule as initScSynthWasmModule };
function scSynthUseWasm(scSynth, wasm) {
    if (scSynth.isConnected()) {
        throw Error('scSynthUseWasm: already connected');
    } else {
        scSynth.basicConnect = ()=>Promise.resolve(wasmConnect(scSynth, wasm));
        scSynth.basicSendOsc = (oscPacket)=>wasmSendOsc(wasm, oscPacket);
    }
}
const langPort = 57120;
function wasmConnect(scSynth, wasm) {
    const args = wasm['arguments'];
    args[args.indexOf('-i') + 1] = String(scSynth.options.numInputs);
    args[args.indexOf('-o') + 1] = String(scSynth.options.numOutputs);
    args.push('-Z', String(scSynth.options.hardwareBufferSize));
    args.push('-z', String(scSynth.options.blockSize));
    args.push('-w', '512');
    args.push('-m', '32768');
    const main = wasm.callMain;
    main(args);
    setTimeout(function() {
        const oscDriver = wasm.oscDriver;
        oscDriver[langPort] = {
            receive: function(_unusedPort, data) {
                scSynth.dispatchOscMessage(decodeOscMessage(data));
            }
        };
    }, 1000);
    scSynth.startStatusMonitor();
}
function wasmSendOsc(wasm, oscPacket) {
    if (wasm.oscDriver) {
        const oscDriver = wasm.oscDriver;
        const port = oscDriver[57110];
        if (port && port.receive) {
            port.receive(57120, encodeOscPacket(oscPacket));
        } else {
            console.error('wasm: sendOsc: no port or no receive?');
        }
    } else {
        console.error('wasm: sendOsc: no oscDriver?');
    }
}
export { scSynthUseWasm as scSynthUseWasm };
if (globalThis.Module !== undefined) {
    initScSynthWasmModule(globalThis.Module, (text)=>console.log(text));
}
function ScSynthWasm() {
    const scSynth = new ScSynth();
    scSynthUseWasm(scSynth, globalThis.Module);
    return scSynth;
}
export { ScSynthWasm as ScSynthWasm };
function scSynthUseWebSocket(scSynth, url) {
    if (scSynth.isConnected()) {
        throw Error('scSynthUseWebSocket: already connected');
    } else {
        const webSocket = new WebSocket(url);
        webSocket.binaryType = 'arraybuffer';
        scSynth.basicConnect = ()=>Promise.resolve(scSynth.startStatusMonitor());
        scSynth.basicSendOsc = (oscPacket)=>webSocket.send(encodeOscPacket(oscPacket));
        scSynth.useIoUgens = true;
        webSocket.onopen = function() {};
        webSocket.onmessage = function(event) {
            scSynth.dispatchOscMessage(decodeOscMessage(event.data));
        };
    }
}
function ScSynthWebSocket(url) {
    const scSynth = new ScSynth();
    scSynthUseWebSocket(scSynth, url);
    return scSynth;
}
export { scSynthUseWebSocket as scSynthUseWebSocket };
export { ScSynthWebSocket as ScSynthWebSocket };
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
export { unitCps as unitCps };
export { rand as rand };
export { rand2 as rand2 };
export { timesRepeat as timesRepeat };
export { to as to };
export { dup as dup };
export { value as value };
export { coord as coord };
function stcIsBinarySelector(text) {
    const allowed = Array.from('!%&*+/<=>?@\\~|-');
    const answer = Array.from(text).every((item)=>allowed.includes(item));
    return answer;
}
function stcBinarySelectorFromOperator(text) {
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
        default:
            console.warn(`stcBinarySelectorFromOperator: ${text}`);
            return text;
    }
}
function stcToJs(stcText) {
    if (stcText.trim() === '') {
        return new Promise((resolve, _unusedReject)=>resolve(''));
    } else {
        const urlPrefix = 'cgi-bin/stsc3-cgi.py?cmd=stc-to-js&stc=';
        const encodedStcText = encodeURIComponent(stcText);
        return fetch(urlPrefix + encodedStcText).then((response)=>response.text());
    }
}
export { stcIsBinarySelector as stcIsBinarySelector };
export { stcBinarySelectorFromOperator as stcBinarySelectorFromOperator };
export { stcToJs as stcToJs };
function OverlapTextureArray(graphFunc, sustainTime, transitionTime, overlap) {
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
    return arrayMap(voiceFunction, arrayFromTo(0, overlap - 1));
}
function OverlapTexture(graphFunc, sustainTime, transitionTime, overlap) {
    return arrayReduce(OverlapTextureArray(graphFunc, sustainTime, transitionTime, overlap), Add);
}
function XFadeTexture(graphFunc, sustainTime, transitionTime) {
    const envDur = (sustainTime + transitionTime) * 2;
    const voiceFunction = function(phase) {
        const trg = kr(Impulse(1 / envDur, phase));
        const snd = graphFunc(trg);
        const env = new Env([
            0,
            1,
            1,
            0,
            0
        ], [
            transitionTime,
            sustainTime,
            transitionTime,
            sustainTime
        ], 'sin', null, null, 0);
        const sig = Mul(snd, EnvGen(trg, 1, 0, 1, 0, envCoord(env)));
        return sig;
    };
    return Add(voiceFunction(0), voiceFunction(0.5));
}
export { OverlapTextureArray as OverlapTextureArray };
export { OverlapTexture as OverlapTexture };
export { XFadeTexture as XFadeTexture };
function getFileInputFile(inputId, fileIndex) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.files) {
        const inputFile = inputElement.files[fileIndex];
        if (!inputFile) {
            console.warn('getFileInputFile: no input file at index?');
        }
        return inputFile;
    } else {
        console.warn('getFileInputFile: no files at input element?');
        return null;
    }
}
function readTextFileFromFileInputAndSetElementText(inputId, fileIndex, textId) {
    const element = document.getElementById(textId);
    if (element) {
        const inputFile = getFileInputFile(inputId, fileIndex);
        if (inputFile) {
            inputFile.text().then((text)=>element.textContent = text);
        }
    }
}
export { getFileInputFile as getFileInputFile };
export { readTextFileFromFileInputAndSetElementText as readTextFileFromFileInputAndSetElementText };
const userPrograms = {
    programs: {},
    storageKey: ''
};
function userProgramsMenuInit(selectId, setProgram) {
    const stored = localStorage.getItem(userPrograms.storageKey);
    userPrograms.programs = stored ? JSON.parse(stored) : {};
    selectOnChange(selectId, (_unusedMenuElement, programName)=>setProgram(userPrograms.programs[programName]));
    selectAddKeysAsOptions(selectId, Object.keys(userPrograms.programs));
}
function userProgramSaveTo(selectId, programText, withPrompt) {
    const timeStamp = new Date().toISOString();
    const programName = withPrompt ? globalThis.prompt('Set program name', timeStamp) : timeStamp;
    if (programName) {
        userPrograms.programs[programName] = programText;
        localStorage.setItem(userPrograms.storageKey, JSON.stringify(userPrograms.programs));
        selectAddOptionAtId(selectId, programName, programName);
    }
}
function userProgramClear(selectId) {
    if (globalThis.confirm('Clear user program storage?')) {
        selectClearFrom(selectId, 1);
        localStorage.removeItem(userPrograms.storageKey);
    }
}
function userStorageSync(selectId) {
    localStorage.setItem(userPrograms.storageKey, JSON.stringify(userPrograms.programs));
    selectClearFrom(selectId, 1);
    selectAddKeysAsOptions(selectId, Object.keys(userPrograms.programs));
}
function userProgramReadArchive(inputId, selectId) {
    const jsonFile = getFileInputFile(inputId, 0);
    if (jsonFile) {
        jsonFile.text().then(function(jsonText) {
            const jsonValue = JSON.parse(jsonText);
            Object.assign(userPrograms.programs, jsonValue);
            userStorageSync(selectId);
        });
    } else {
        console.error('userProgramReadArchive');
    }
}
function userBackup() {
    navigator.clipboard.writeText(JSON.stringify(userPrograms.programs));
}
function userActionDo(actionName, selectId, inputId) {
    switch(actionName){
        case 'userBackup':
            userBackup();
            return true;
        case 'userClear':
            userProgramClear(selectId);
            return true;
        case 'userRestore':
            clickInput(inputId);
            return true;
        default:
            return false;
    }
}
export { userPrograms as userPrograms };
export { userProgramsMenuInit as userProgramsMenuInit };
export { userProgramSaveTo as userProgramSaveTo };
export { userProgramClear as userProgramClear };
export { userStorageSync as userStorageSync };
export { userProgramReadArchive as userProgramReadArchive };
export { userBackup as userBackup };
export { userActionDo as userActionDo };

