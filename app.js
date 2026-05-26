const helperVarseConfig = { serverId: 9510, active: true };

function renderHELPER(payload) {
    let result = payload * 20;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module helperVarse loaded successfully.");