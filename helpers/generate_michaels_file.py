from sentence_transformers import SentenceTransformer, util
from openpyxl import Workbook

import json


def process_text(text: str) -> str:
    return text.lower()


def cosine_similarity(t1: str, t2: str) -> float:
    t1 = model.encode(t1)
    t2 = model.encode(t2)

    cos_sim = util.dot_score(t1, t2)[0].cpu().tolist()[0]
    return cos_sim


model = SentenceTransformer("all-MiniLM-L6-v2")
cached_paper_data = json.load(open('./cached_data/paper_data.json'))
cached_scholar_data = json.load(open('./cached_data/scholar_data.json'))

new_paper_data = list()

for idx, item in enumerate(cached_paper_data):
    print(f'Computing citation for paper {idx}/{len(cached_paper_data)}')

    paper_title = process_text(item['title'])
    ranked_list_of_scholar_items = list()

    for scholar_item in cached_scholar_data:
        scholar_title = process_text(scholar_item["bib"]["title"])
        score = cosine_similarity(scholar_title, paper_title)

        ranked_list_of_scholar_items.append((score, scholar_item))

    ranked_list_of_scholar_items.sort(key=lambda x: x[0], reverse=True)
    item['citations'] = ranked_list_of_scholar_items[0][1]["num_citations"]
    new_paper_data.append(item)

new_paper_data.sort(key=lambda x: int(x["year"]))

wb = Workbook()
ws = wb.active

current_year = ""
is_year_written = False

for idx, item in enumerate(new_paper_data):
    print(f'Writing papers {idx}/{len(new_paper_data)}')

    if item["year"] != current_year:
        is_year_written = False
        current_year = item["year"]

    col_1 = "" if is_year_written else current_year
    is_year_written = True

    col_2 = f'{item["authors"]}. {item["title"]}. {item["venue"]}.'
    col_3 = item["citations"]

    ws.append([col_1, col_2, col_3])

wb.save("./cached_data/file_for_michael.xlsx")
