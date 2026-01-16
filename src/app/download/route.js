// src/app/download-islam-encyclo/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const userAgent = request.headers.get("User-Agent") || "";

  let redirectUrl = "https://islamencyclo.kivyx.com";
  if (
    /(iPad|iPhone|iPod)/.test(userAgent) &&
    !/windows phone/i.test(userAgent)
  ) {
    redirectUrl = "https://apps.apple.com/pk/app/islam-encyclo/id6476152451"; // iOS App Store
  } else if (/android/i.test(userAgent)) {
    redirectUrl =
      "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo"; // Google Play Store
  } else if (/(Macintosh|Mac OS X)/.test(userAgent)) {
    redirectUrl = "https://apps.apple.com/pk/app/islam-encyclo/id6476152451"; // iOS App Store
  } else if (/Windows NT/.test(userAgent)) {
    redirectUrl =
      "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo"; // Google Play Store
  }

  return NextResponse.redirect(redirectUrl, 302);
}
