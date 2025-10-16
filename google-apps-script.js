function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);

    // Open the Google Sheet (replace with your actual sheet ID)
    const sheetId = 'YOUR_GOOGLE_SHEET_ID';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Get current timestamp
    const timestamp = new Date().toISOString();

    // Prepare the row data in the order of form fields
    const rowData = [
      timestamp,
      data.fullName,
      data.contactNo,
      data.email,
      data.position,
      data.experience,
      data.currentCtc,
      data.expectedCtc,
      data.noticePeriod,
      data.resumeLink
    ];

    // Append the row to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
