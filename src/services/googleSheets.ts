import { JWT } from 'google-auth-library';

export async function appendRowToGoogleSheet(rowValues: any[]) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Replace stringified newlines with actual newline characters
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn("Google Sheets environment variables are incomplete.");
    throw new Error("Google Sheets configuration missing.");
  }

  const jwtClient = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:A:append?valueInputOption=USER_ENTERED`;
  
  const headers = await jwtClient.getRequestHeaders(url);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [rowValues],
    }),
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(`Failed to log to Google Sheets: ${errorMsg}`);
  }

  return await response.json();
}
