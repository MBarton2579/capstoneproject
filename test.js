fetch('https://dummyjson.com/products')
    .then(res => {
        if(!res.ok) {
            console.log('problem');
            return;
        }
            
        return res.json();
    })
    .then(data => {
        console.log(data.products[1].title);
    })
    .catch(error => {
        console.log(error);
    });