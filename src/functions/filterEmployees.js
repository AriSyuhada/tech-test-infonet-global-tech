export default function filterEmployees(unfilteredArr, keyArr) {
    // keyMap is use to store key that want to be found on array
    const keyMap = {};
    // A variable that used to store filtered array
    const res = [];

    // Iterating through object that want to be excluded.
    // This approach, store the 'nik' and 'name' value for the key
    // of map object. I'm assigning true value for all object, this
    // is to avoid falsy check in the end.
    for (let i = 0; i < keyArr.length; i++) {
        const key = keyArr[i]['nik'] + '-' + keyArr[i]['name'];
        keyMap[key] = true;
    }
    // Iterating through unfilteredArr and only push to res array if
    // the object cannot be found in map.
    // This approach is trying to access the map by the same pattern
    // key that I have made.
    for (let i = 0; i < unfilteredArr.length; i++) {
        const key = unfilteredArr[i]['nik'] + '-' + unfilteredArr[i]['name'];

        // If the key above is not defined on the map object, push the object
        // to the res array
        if (!keyMap[key]) {
            res.push(unfilteredArr[i]);
        }
    }

    return res;
}