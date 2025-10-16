function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Sheet1");

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.contactNo,
      data.email,
      data.position,
      data.experience,
      data.currentCtc,
      data.expectedCtc,
      data.noticePeriod,
      data.resumeLink
    ]);

    return sendJSON({ success: true, message: "Data added successfully!" });
  } catch (err) {
    return sendJSON({ success: false, message: err.toString() });
  }
}

function doGet(e) {
  return sendJSON({ message: "GET not supported" });
}

function doOptions(e) {
  // Handle preflight OPTIONS requests
  return sendJSON({});
}

// ✅ Helper that safely returns JSON output
function sendJSON(obj) {
  const output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
