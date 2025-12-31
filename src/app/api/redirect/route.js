import { NextResponse } from "next/server";

export async function GET(request) {
  const userAgent = request.headers.get("User-Agent") || "";

  let redirectUrl = "https://islamencyclo.kivyx.com"; // Default to website

  // Check for iOS devices (iPad, iPhone, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent) && !/windows phone/i.test(userAgent)) {
    redirectUrl = "https://apps.apple.com/pk/app/islam-encyclo/id6476152451";
  }
  // Check for Android devices
  else if (/android/i.test(userAgent)) {
    redirectUrl =
      "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo";
  }
  // Check for Mac with a touchscreen (heuristic for iPad running macOS)
  // This uses a combination of userAgent and the 'Sec-CH-UA-Mobile' header,
  // which might be present in some modern browsers on touch-enabled Macs.
  else if (
    /Macintosh|Mac OS X/.test(userAgent) &&
    /AppleWebKit/.test(userAgent) && // Ensure it's a Mac browser
    request.headers.get("Sec-CH-UA-Mobile") === "?1"
  ) {
    redirectUrl = "https://apps.apple.com/pk/app/islam-encyclo/id6476152451";
  }
  // Check for regular Mac (without touchscreen)
  else if (/Macintosh|Mac OS X/.test(userAgent)) {
    redirectUrl = "https://apps.apple.com/pk/app/islam-encyclo/id6476152451";
  }

  // Perform a server-side redirect with a 302 Found status
  // The browser will immediately navigate to the 'redirectUrl'.
  return NextResponse.redirect(redirectUrl, 302);
}
