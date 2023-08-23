from scholarly import scholarly
import json

search_query = scholarly.search_author('Tathagata Chakraborti')

first_author_result = next(search_query)
scholarly.pprint(first_author_result)

author = scholarly.fill(first_author_result)

with open('./cached_data/scholar_data.json', 'w') as f:
    json.dump(author['publications'], f, indent=4)
