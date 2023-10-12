<h2 align="center">
  Airbnb Scraper
</h2>



[![Oxylabs promo code](https://user-images.githubusercontent.com/129506779/250792357-8289e25e-9c36-4dc0-a5e2-2706db797bb5.png)](https://oxylabs.go2cloud.org/aff_c?offer_id=7&aff_id=877&url_id=112)

[<u>Airbnb
Scraper</u>](https://oxylabs.io/products/scraper-api/web/airbnb) enables
you to extract public Airbnb data without writing extensive scripts and
without any blocks or CAPTCHAs. This quick guide will show you how to
scrape Airbnb with Oxylabs’ [<u>Scraper
API</u>](https://oxylabs.io/products/scraper-api).

## How it works

All you have to do is form a payload and send a request to the API.
After a few seconds, you’ll receive the HTML of any public Airbnb page
you submit for scraping.

### Python code example

The following code sends a request and retrieves HTML content, including
Airbnb search results localized for the United States region:

```python
import requests
from pprint import pprint

# Structure payload.
payload = {
   'source': 'universal',
   'url': 'https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=/homes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag:8522',
   'geo_location': 'United States',
   'render': 'html'
}

# Get a response.
response = requests.request(
    'POST',
    'https://realtime.oxylabs.io/v1/queries',
    auth=('USERNAME', 'PASSWORD'), #Your credentials go here
    json=payload,
)

# Instead of response with job status and results URL, this will return the
# JSON response with results.
pprint(response.json())
```

Visit the
[<u>documentation</u>](https://developers.oxylabs.io/scraper-apis/web-scraper-api)
to see more details, such as payload parameters.

### Output sample

```json
{
    "results": [
        {
            "content":"<!doctype html>\n<html lang=\"en\">\n<head>
            ...
            </script></body>\n</html>\n",
            "created_at": "2023-06-12 14:45:51",
            "updated_at": "2023-06-12 14:45:54",
            "page": 1,
            "url": "https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=/homes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-07-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag:8522",
            "job_id": "7074034071101255681",
            "status_code": 200
        }
    ]
}
```

With Oxylabs’ Airbnb Scraper API, you can easily scrape Airbnb on a
large scale without blocks and collect public Airbnb data like listings,
search results, reviews, and host pages. If you have any questions, feel
free to contact us through [<u>live chat</u>](https://oxylabs.io/) or
[<u>email</u>](mailto:support@oxylabs.io).
