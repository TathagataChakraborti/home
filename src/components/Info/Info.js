import copy from 'copy-to-clipboard';

const generateImageUrl = (imageUrl, imageType) => {
  if (!imageType) imageType = 'png';

  return `${process.env.PUBLIC_URL}/images/${imageUrl}.${imageType}`;
};

const copyInfo = (data, e) => {
  var info =
    data.title +
    '. ' +
    data.authors +
    '. ' +
    data.venue.replace('xxxx', data.year) +
    '.';
  copy(info);
};

const copyTex = (data, e) => {
  var id = '[AUTHOR]-[VENUE]-[YEAR]-[TITLE]'
    .replace(
      '[AUTHOR]',
      data.authors
        .replace(',', '')
        .split(' ')[1]
        .toLowerCase()
    )
    .replace('[VENUE]', data.venue.split(' ')[0].toLowerCase())
    .replace('[YEAR]', data.year)
    .replace('[TITLE]', data.title.replaceAll(' ', '-').toLowerCase());

  var tex = '@inproceedings{[ID],\n author = {[AUTHORS]},\n title = {{[TITLE]}},\n booktitle = {[VENUE]},\n year = {[YEAR]}\n}'
    .replace('[ID]', id.slice(0, 25))
    .replace(
      '[AUTHORS]',
      data.authors.replaceAll(', and', ',').replaceAll(',', ' and')
    )
    .replace('[TITLE]', data.title)
    .replace('[VENUE]', data.venue.replace(' xxxx', ''))
    .replace('[YEAR]', data.year);

  copy(tex);
};

const createVenue = (venue, year) => {
  return venue.replace('xxxx', year);
};

export { generateImageUrl, createVenue, copyInfo, copyTex };
