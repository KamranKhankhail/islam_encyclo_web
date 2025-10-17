// "use client";

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { Box, Typography } from "@mui/material"; // Removed CircularProgress
// import PrayerTimeAndAyatSlider from "./PrayerTimeAndAyatSlider";
// import theme from "@/styles/theme";

// export default function PrayerTimeLocationDisplay({ initialPrayerData }) {
//   const [prayerData, setPrayerData] = useState(initialPrayerData);

//   const hasFetchedAccurateLocation = useRef(false);

//   const defaultLocation = {
//     city: "Makkah al Mukarramah",
//     country: "Saudi Arabia",
//   };

//   const fetchPrayerTimes = useCallback(
//     async (locationDetails, isFallback = false) => {
//       // If we've already fetched with precise coordinates, don't fallback to less precise methods unless explicitly told.
//       if (hasFetchedAccurateLocation.current && !isFallback) {
//         console.log(
//           "Already fetched accurate location, skipping less precise fetch."
//         );
//         return;
//       }

//       try {
//         let apiUrl = ""; // Initialize apiUrl
//         let dataToParse;
//         const timestamp = Math.floor(Date.now() / 1000);

//         if (locationDetails && locationDetails.lat && locationDetails.lon) {
//           console.log(
//             "Fetching prayer times by coordinates:",
//             locationDetails.lat,
//             locationDetails.lon
//           );
//           apiUrl = `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${locationDetails.lat}&longitude=${locationDetails.lon}&method=2`;
//         } else if (
//           locationDetails &&
//           locationDetails.city &&
//           locationDetails.country
//         ) {
//           console.log(
//             "Fetching prayer times by city/country:",
//             locationDetails.city,
//             locationDetails.country
//           );
//           apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${locationDetails.city}&country=${locationDetails.country}&method=2`;
//         } else {
//           // Fallback to absolute default location if no valid details are provided at all
//           console.warn(
//             "No valid location details provided to fetch prayer times. Using absolute default Makkah."
//           );
//           apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${defaultLocation.city}&country=${defaultLocation.country}&method=2`;
//         }

//         if (!apiUrl) {
//           throw new Error("API URL could not be constructed.");
//         }

//         const res = await fetch(apiUrl);
//         if (!res.ok) {
//           // Only throw an error if it's not a fallback attempt and the initial default wasn't set.
//           // Or if it's the absolute last fallback to Makkah and it fails.
//           throw new Error(
//             `Failed to fetch prayer times from Aladhan API for ${apiUrl}.`
//           );
//         }
//         dataToParse = await res.json();

//         if (dataToParse.data) {
//           setPrayerData({
//             timings: dataToParse.data.timings,
//             hijri: `${dataToParse.data.date.hijri.day} ${dataToParse.data.date.hijri.month.en} ${dataToParse.data.date.hijri.year}`,
//             gregorian: dataToParse.data.date.readable,
//           });
//           // Mark as fetched accurately if coordinates were used
//           if (locationDetails && locationDetails.lat && locationDetails.lon) {
//             hasFetchedAccurateLocation.current = true;
//           }
//         } else {
//           // If API returns no data, log a warning but don't change prayerData, allowing previous data to persist.
//           console.warn(
//             "Aladhan API returned no data for the location. Retaining current data."
//           );
//         }
//       } catch (err) {
//         // Log the error for debugging but do not display to user.
//         // The previous prayerData (initial or a prior successful fetch) will remain.
//         console.error("Error in fetchPrayerTimes:", err);
//       }
//     },
//     [defaultLocation] // Only defaultLocation is a dependency
//   );

//   useEffect(() => {
//     const getIPBasedLocationAndFetch = async () => {
//       if (hasFetchedAccurateLocation.current) return; // Don't bother if we have precise data
//       try {
//         console.log("Attempting IP-based location fallback...");
//         const ipRes = await fetch("https://ip-api.com/json/");
//         if (!ipRes.ok) throw new Error("Failed to fetch IP-based location.");
//         const ipData = await ipRes.json();
//         if (ipData.status === "success") {
//           await fetchPrayerTimes(
//             {
//               city: ipData.city,
//               country: ipData.country,
//             },
//             true // This is a fallback fetch
//           );
//         } else {
//           throw new Error("IP-based location lookup failed.");
//         }
//       } catch (ipErr) {
//         console.error("Error with IP-based fallback:", ipErr);
//         // If IP lookup fails, and we don't have accurate data, ensure we're at least showing the initial default.
//         // fetchPrayerTimes will handle using defaultLocation if needed.
//         if (!hasFetchedAccurateLocation.current) {
//           fetchPrayerTimes(null, true); // Trigger Makkah fallback if all else fails
//         }
//       }
//     };

//     const handleGeolocationSuccess = (position) => {
//       console.log("Precise Geolocation obtained.");
//       fetchPrayerTimes({
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//       });
//     };

//     const handleGeolocationError = (err) => {
//       console.warn("Geolocation error (silent):", err.message);
//       // If geolocation fails/denied, try IP fallback.
//       // This will only run if hasFetchedAccurateLocation.current is false.
//       getIPBasedLocationAndFetch();
//     };

//     // On mount:
//     // 1. Attempt precise geolocation silently.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         handleGeolocationSuccess,
//         handleGeolocationError,
//         { enableHighAccuracy: false, timeout: 3000, maximumAge: 600000 } // Low accuracy, short timeout, cache for 10 min
//       );
//     } else {
//       // 2. Geolocation not supported, fall back to IP immediately.
//       getIPBasedLocationAndFetch();
//     }
//   }, [fetchPrayerTimes]); // fetchPrayerTimes is stable via useCallback

//   // Always render the slider with the current prayerData.
//   // It will either be initialPrayerData or updated location-based data.
//   return (
//     <PrayerTimeAndAyatSlider
//       timings={prayerData.timings}
//       hijri={prayerData.hijri}
//       gregorian={prayerData.gregorian}
//     />
//   );
// }

"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography } from "@mui/material"; // Removed CircularProgress
import PrayerTimeAndAyatSlider from "./PrayerTimeAndAyatSlider";
import theme from "@/styles/theme";

export default function PrayerTimeLocationDisplay({ initialPrayerData }) {
  // Ensure prayerData always has a valid initial structure, defaulting to a known empty state
  // if initialPrayerData is null or undefined (e.g., if SSR didn't provide it).
  const [prayerData, setPrayerData] = useState(
    initialPrayerData || { timings: {}, hijri: "", gregorian: "" }
  );

  const hasFetchedAccurateLocation = useRef(false);

  const defaultLocation = {
    city: "Makkah al Mukarramah",
    country: "Saudi Arabia",
  };

  const fetchPrayerTimes = useCallback(
    async (locationDetails, isFallback = false) => {
      // If we've already fetched with precise coordinates, don't fallback to less precise methods unless explicitly told.
      if (hasFetchedAccurateLocation.current && !isFallback) {
        console.log(
          "Already fetched accurate location, skipping less precise fetch."
        );
        return;
      }

      try {
        let apiUrl = ""; // Initialize apiUrl
        let dataToParse;
        const timestamp = Math.floor(Date.now() / 1000);

        if (locationDetails && locationDetails.lat && locationDetails.lon) {
          console.log(
            "Fetching prayer times by coordinates:",
            locationDetails.lat,
            locationDetails.lon
          );
          apiUrl = `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${locationDetails.lat}&longitude=${locationDetails.lon}&method=2`;
        } else if (
          locationDetails &&
          locationDetails.city &&
          locationDetails.country
        ) {
          console.log(
            "Fetching prayer times by city/country:",
            locationDetails.city,
            locationDetails.country
          );
          apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${locationDetails.city}&country=${locationDetails.country}&method=2`;
        } else {
          // Fallback to absolute default location if no valid details are provided at all
          console.warn(
            "No valid location details provided to fetch prayer times. Using absolute default Makkah."
          );
          apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${defaultLocation.city}&country=${defaultLocation.country}&method=2`;
        }

        if (!apiUrl) {
          throw new Error("API URL could not be constructed.");
        }

        const res = await fetch(apiUrl);
        if (!res.ok) {
          // Changed from `throw new Error` to `console.warn` and return,
          // as this is a gracefully handled failure (previous data persists).
          console.warn(
            `Failed to fetch prayer times (HTTP ${res.status}) from Aladhan API for ${apiUrl}. Retaining current data.`
          );
          return; // Exit here, will retain current prayerData
        }
        dataToParse = await res.json();

        if (dataToParse.data) {
          setPrayerData({
            timings: dataToParse.data.timings,
            hijri: `${dataToParse.data.date.hijri.day} ${dataToParse.data.date.hijri.month.en} ${dataToParse.data.date.hijri.year}`,
            gregorian: dataToParse.data.date.readable,
          });
          // Mark as fetched accurately if coordinates were used
          if (locationDetails && locationDetails.lat && locationDetails.lon) {
            hasFetchedAccurateLocation.current = true;
          }
        } else {
          console.warn(
            "Aladhan API returned no data for the location. Retaining current data."
          );
          // If API returns no data, we do nothing with setPrayerData, thus retaining the existing prayerData.
        }
      } catch (err) {
        // Log as warn, as the failure (e.g., network error, JSON parse error) is handled gracefully
        // by retaining previous valid data.
        console.warn(
          "Network or API parsing error in fetchPrayerTimes:",
          err.message,
          "Retaining current prayer data."
        );
        // Importantly, no setPrayerData here. The last valid state (initial or previous successful fetch) persists.
      }
    },
    [defaultLocation, initialPrayerData] // Added initialPrayerData as dependency to ensure the initial fallback is always available
  );

  useEffect(() => {
    const getIPBasedLocationAndFetch = async () => {
      if (hasFetchedAccurateLocation.current) return; // Don't bother if we have precise data
      try {
        console.log("Attempting IP-based location fallback...");
        const ipRes = await fetch("https://ip-api.com/json/");
        if (!ipRes.ok) throw new Error("Failed to fetch IP-based location.");
        const ipData = await ipRes.json();
        if (ipData.status === "success") {
          await fetchPrayerTimes(
            {
              city: ipData.city,
              country: ipData.country,
            },
            true // This is a fallback fetch
          );
        } else {
          throw new Error("IP-based location lookup failed.");
        }
      } catch (ipErr) {
        console.warn("Error with IP-based fallback:", ipErr.message);
        // If IP lookup fails, and we don't have accurate data, ensure we're at least showing the initial default.
        if (!hasFetchedAccurateLocation.current) {
          fetchPrayerTimes(null, true); // Trigger Makkah fallback if all else fails
        }
      }
    };

    const handleGeolocationSuccess = (position) => {
      console.log("Precise Geolocation obtained.");
      fetchPrayerTimes({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const handleGeolocationError = (err) => {
      console.warn("Geolocation error (silent):", err.message);

      getIPBasedLocationAndFetch();
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError,
        { enableHighAccuracy: false, timeout: 3000, maximumAge: 600000 }
      );
    } else {
      getIPBasedLocationAndFetch();
    }
  }, [fetchPrayerTimes]);

  return (
    <PrayerTimeAndAyatSlider
      timings={prayerData.timings}
      hijri={prayerData.hijri}
      gregorian={prayerData.gregorian}
    />
  );
}
