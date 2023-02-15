let url = 'https://dummyjson.com/products'
let div_root = document.getElementById('root')


fetch(url)
    .then(res => {
        if (res.status >= 400) {
            console.log("User not exist or bad link");
        } else {
            return res.json()
        }
    })
    .then(data => {
        if (data) {

            for (product of data.products) {
                let card = document.createElement('div')
                card.classList.add('product_card')
                let cardTitle = document.createElement('p')
                let card_img = document.createElement('img')
                let cardDescription = document.createElement('p')
                let cardPrice = document.createElement('p')
                cardTitle.innerHTML = `Title: <span>${product.title}</span>`
                cardTitle.classList.add('card_title')
                card_img.src = product.images[0]
                cardDescription.innerHTML = `Description: <span>${product.description}</span>`
                cardDescription.classList.add('card_description')
                cardPrice.innerText = `Price: ${product.price} $`
                cardPrice.classList.add('card_price')
                if (product.price >= 500) {
                    card.style.boxShadow = 'rgba(140, 0, 0, 0.8) 1.95px 1.95px 2.6px'
                }
                else {
                    card.style.boxShadow = 'rgba(30, 140, 0, 0.8) 1.95px 1.95px 2.6px'
                }
                card.append(cardTitle, card_img, cardDescription, cardPrice)
                div_root.append(card)
            }
            const rootElem = document.querySelector('.root');

            // const render = products => {
            //     const products_cards = products.map(({ title, description, price }) => {
            //         const card = document.createElement('div');
            //         const titleElem = document.createElement('p');
            //         const descrElem = document.createElement('p');
            //         const priceElem = document.createElement('p');

            //         titleElem.innerText = `Title: ${title}`;
            //         descrElem.innerText = `Description: ${description}`;
            //         priceElem.innerText = `Price: ${price}`;

            //         card.append(titleElem, descrElem, priceElem);
            //         return card
            //     });

            //     rootElem.append(...products_cards);
            // }

        } else return ''
    })

