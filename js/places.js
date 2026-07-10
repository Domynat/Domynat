// Restaurant-Vorschläge über die Google Places API (New) – Nearby Search + Text.
// Nutzt reines fetch (kein Maps-JS-SDK), damit die PWA offline-fähig bleibt.
// Grobe kcal-Einschätzung pro Küche, um gegen das Restbudget zu filtern.

const PLACES_URL = 'https://places.googleapis.com/v1/places:searchNearby';

// Sehr grobe Richtwerte für eine typische Hauptmahlzeit (kcal) je Küchentyp.
const CUISINE_KCAL = {
  meal_takeaway: 800, fast_food_restaurant: 950, hamburger_restaurant: 1050,
  pizza_restaurant: 1100, mexican_restaurant: 900, italian_restaurant: 850,
  chinese_restaurant: 800, japanese_restaurant: 650, sushi_restaurant: 550,
  ramen_restaurant: 750, thai_restaurant: 700, indian_restaurant: 800,
  vegetarian_restaurant: 550, vegan_restaurant: 500, salad_restaurant: 450,
  seafood_restaurant: 600, steak_house: 950, breakfast_restaurant: 700,
  cafe: 500, sandwich_shop: 600, restaurant: 750,
};

export function estimateKcal(types = []) {
  for (const t of types) if (CUISINE_KCAL[t] != null) return CUISINE_KCAL[t];
  return CUISINE_KCAL.restaurant;
}

export function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(new Error('Standort wird nicht unterstützt.'));
    navigator.geolocation.getCurrentPosition(
      p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }),
      e => reject(new Error(e.code === 1 ? 'Standortzugriff abgelehnt.' : 'Standort nicht verfügbar.')),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  });
}

export async function findRestaurants({ key, lat, lng, radius = 1500 }) {
  if (!key) throw new Error('Kein Google-Maps-API-Key hinterlegt.');
  const res = await fetch(PLACES_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask':
        'places.displayName,places.primaryType,places.types,places.rating,' +
        'places.priceLevel,places.formattedAddress,places.googleMapsUri,places.userRatingCount',
    },
    body: JSON.stringify({
      includedTypes: ['restaurant'],
      maxResultCount: 20,
      locationRestriction: { circle: { center: { latitude: lat, longitude: lng }, radius } },
    }),
  });
  if (!res.ok) {
    let msg = `Places-Fehler ${res.status}`;
    try { const j = await res.json(); if (j.error?.message) msg += `: ${j.error.message}`; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return (data.places || []).map(p => ({
    name: p.displayName?.text || 'Restaurant',
    address: p.formattedAddress || '',
    rating: p.rating || null,
    ratingCount: p.userRatingCount || 0,
    priceLevel: p.priceLevel || null,
    mapsUri: p.googleMapsUri || '',
    types: p.types || [],
    estKcal: estimateKcal(p.types || []),
  }));
}
