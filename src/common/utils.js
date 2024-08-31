// 빈 값 체크
export function isEmpty(target) {
    var isBoolean = false;

    if(target == null) {
        isBoolean = true;
    } else if(target == "") {
        isBoolean = true;
    } else if(target == {}) {
        isBoolean = true;
    } else if(target == undefined) {
        isBoolean = true;
    } else if(target == "undefined") {
        isBoolean = true;
    } else if(typeof target === 'string' && target.trim() === '') {
        isBoolean = true;
    } else if(typeof target === 'object' && target !== null && Object.keys(target).length === 0) {
        isBoolean = true;
    } else {
        isBoolean = false;
    }

    return isBoolean;
}