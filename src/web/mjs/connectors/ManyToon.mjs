import WordPressMadara from './templates/WordPressMadara.mjs';

export default class ManyToon extends WordPressMadara {

    constructor() {
        super();
        super.id = 'manytoon';
        super.label = 'ManyToon (Porn)';
        this.tags = [ 'webtoon', 'hentai', 'english' ];
        this.url = 'https://manytoon.me'; // Miror?: https://manytoon.com
    }
}