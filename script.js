document.querySelector('button').addEventListener('click', function() {

    const keyword = document.getElementById('SBar').value;

    if(keyword === ''){
    alart("Please enter something to search!");
    return;
    }

    const apiKey = 'v7n4ZLECMX2fqnI0JypPpdX4stUuae8-cWjgYNGqk_k';
    const apiUrl = `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${keyword}&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if (data.results.length > 0){
                const imageUrl = data.results[0].urls.regular;
                document.getElementById('mnImage').src = imageUrl;
            }else{
                alart('no image found');
            }
        })
        .catch(function(error) {
            console.error('Error fetching the image:', error);
        });
});