// const text = document.createElement('p')
// let text_1 = prompt("Soz kiriting")
//  text.innerHTML =  text_1

//  let body = document.querySelector('body')

// body.appendChild(text)

// let bg = prompt("Orqa rang kiriting")
// let c = prompt("text rangini kiriting")

// body.style.background = bg
// text.style.color = c













function createStructure() {
    const outerDiv = document.createElement('div');
    outerDiv.style.backgroundColor = 'orange';
    outerDiv.style.padding = '20px';
    outerDiv.style.margin = '20px';
    outerDiv.style.display = 'flex'

    for (let i = 0; i < 3; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.style.backgroundColor = 'red';
        innerDiv.style.padding = '10px';
        innerDiv.style.margin = '10px';

      
        const img = document.createElement('img');
        img.src = 'https://th.bing.com/th/id/OIP.NY4mtvT5qCFznAasY0Js7QBkBk?rs=1&pid=ImgDetMain'; 
        img.alt = 'Image';
        innerDiv.appendChild(img);

        
        const h1 = document.createElement('h1');
        h1.textContent = 'Olim mani ismim';
        innerDiv.appendChild(h1);

        
        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        innerDiv.appendChild(p);

        const button = document.createElement('button');
        button.textContent = 'Olim mani ismim';
        innerDiv.appendChild(button);
        button.style.background = 'green'
        button.style.color = 'yellow'

        outerDiv.appendChild(innerDiv);
    }

    document.body.appendChild(outerDiv);
}

createStructure();

createStructure();