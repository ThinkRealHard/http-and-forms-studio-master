window.addEventListener("load", function(){

    let actions = {
        'google': 'https://www.google.com/search',
        'ddg': 'https://duckduckgo.com',
        'bing': 'https://www.bing.com/search',
        'ask': 'https://www.ask.com/web'
    }

    let form = this.document.getElementById('searchForm');

    form.addEventListener('submit', function(event){

        let inputChecked = document.querySelector('input[name=searchEngine]:checked');
        let searchEngine = inputChecked.value;
        let searchEngineUrl = actions[searchEngine];

        form.setAttribute('action', searchEngineUrl);
    })



});