import { decode } from 'html-entities';

function decodeHtmlEntities(str) {
  return decode(str);
}

export default decodeHtmlEntities;
