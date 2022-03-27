// code your solution here
function superbowlWin(record) {
    const obj = record.find(function (element) {
        return element.result === "W";
    })
    return obj != undefined ? obj.year : undefined;
}
