// Add content-security-policy in manifest. Below one giving error.
// "content_security_policy": "default-src 'self'"

// The group's color. ENUM "grey", "blue", "red", "yellow", "green", "pink", "purple", or "cyan"
let groupInfo = { title: "", id: "", color: ""};
let allGroupsInfo = [] // [] of groupInfo
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
        tabs.sort((a, b) => { return a.index < b.index; });
        console.log('Tabs List (Sorted):\n');
        console.log(tabs)
        // Collect all different groups and query for them
    });
    console.log(chrome)

    chrome.tabGroups.query( {}, function(tabGroups) { // 804016250
        console.log("Groups:\n")
        console.log(tabGroups)
        // tabGroup.map( oneGrp => {
        //     groupInfo.
        // })
    });
});

// groups in tabs
// TAB_GROUP_ID_NONE =  -1. An ID that represents the absence of a group.
// tabs.groupId maps to 