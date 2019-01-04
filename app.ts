function doGet() {
    let t = HtmlService.createTemplateFromFile('index');
    const spreadSheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    t.title = PropertiesService.getScriptProperties().getProperty('PAGE_TITLE');
    t.data = getAllData(spreadSheetId);

    return t.evaluate();
}

function getAllData(sheetId:string) {
    return SpreadsheetApp.openById(sheetId)
                    .getActiveSheet()
                    .getDataRange()
                    .getValues();
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}