import TakeShobo from './templates/TakeShoboNew.mjs';

export default class GammaPlus extends TakeShobo {

    constructor() {
        super();
        super.id = 'gammaplus';
        super.label = 'GammaPlus';
        this.tags = [ 'manga', 'japanese' ];
        this.url = 'https://gammaplus.takeshobo.co.jp';
    }
}