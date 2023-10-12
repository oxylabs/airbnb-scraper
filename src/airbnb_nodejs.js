import fetch from 'node-fetch';

const username = 'USERNAME';
const password = 'PASSWORD';
const body = {
 'source': 'universal',
 'url': 'https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=/homes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag:8522',
 'geo_location': 'United States',
 'render': 'html',
};
const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  }
});

console.log(await response.json());
