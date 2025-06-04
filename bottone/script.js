document.addEventListener('DOMContentLoaded', () => {
    const showMessageBtn = document.getElementById('show-message-btn');
    const messageArea = document.getElementById('message-area');
    const mainTitle = document.getElementById('main-title');         // Riferimento al titolo
    const initialInstruction = document.getElementById('initial-instruction'); // Riferimento al paragrafo


    // Puoi aggiungere, modificare o eliminare gli oggetti qui sotto.
    //si sto usando questo file e progetto per prendere appunti su come usare JS e HTML per fare un progetto carino, quindi non ti preoccupare se non è perfetto, è solo un esercizio per me! (e spero che ti piaccia comunque) :D
    const contents = [
        {
            text: "Ehm ma se ti ho detto di non toccare il bottone un motivo ci sarà ( ´･･)ﾉ(._.`)",
            image: "imgsrcs/cattoungue1.gif"
        },
        {
            text: "Ah no ok falso allarme è la persona giusta. In tal caso ti voglio davvero tanto bene, spero che questo progetto funzioni e ti strappi un sorriso (。・ω・。)",
            image: "imgsrcs/pccat.jpg"
        },
        {
            text: "Nulla in realtà non so bene che scrivere, anche perchè non so se arriverai a leggere questo ma spero di si anche perchè significherebbe che in 3 giorni sono riuscita a imparare qualcosa e a farlo funzionare (soprattutto) :D",
            image: "imgsrcs/ilycat.gif" 
        },
        {
            text: "Grazie per essere arrivato fin qui spero che questa cagata ti piaccia, anche se non è nulla di che, ricordati che sei una persona super importante anche se sei un po' un pesce percè ti sottovaluti sempre per nessun motivo (smettila di autocriticarti e di pensare che non vali nulla, perchè non è vero e lo sai anche tu in fondo) tvb (*￣3￣)╭",
            image: "imgsrcs/excuseyou.jpg"
        },
        {
            text: "Ah e grazie per sopportarmi anche se so che dopo questo avrai il ptsd sui gatti peggio di prima",
            image: "imgsrcs/i'mjustagirl.jpg"
        },
        {
            text: "ok ora non c'è più nulla da leggere, ma se vuoi puoi cliccare ancora il bottone per vedere di nuovo il messaggio, oppure puoi chiudere questa pagina e tornare a fare quello che stavi facendo prima (anche se spero che non sia nulla di troppo noioso) (｡•̀ᴗ-)✧",
            image: "imgsrcs/spideruomotf.jpg"
        },
        {
            text: "i saw that",
            image: "imgsrcs/mimimi.jpg"
        }
    ];

   let currentIndex = 0;
    let typingTimeout;

    function typeWriter(element, text, i = 0) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            typingTimeout = setTimeout(() => typeWriter(element, text, i + 1), 30);
        } else {
            element.style.borderRight = 'none';
        }
    }

    showMessageBtn.addEventListener('click', () => {
        // Nascondi il titolo e il paragrafo iniziale al primo click
        if (!mainTitle.classList.contains('hidden')) {
            mainTitle.classList.add('hidden');
            initialInstruction.classList.add('hidden');
        }

        clearTimeout(typingTimeout);
        messageArea.innerHTML = ''; 

        // Se l'area messaggi è nascosta, la mostro.
        if (messageArea.classList.contains('hidden')) {
            messageArea.classList.remove('hidden');
        } else {
            messageArea.style.animation = 'none';
            messageArea.offsetHeight;
            messageArea.style.animation = null;
        }

        const currentContent = contents[currentIndex];
        
        const textParagraph = document.createElement('p');
        textParagraph.classList.add('message-text');
        messageArea.appendChild(textParagraph);

        typeWriter(textParagraph, currentContent.text);

        if (currentContent.image) {
            const imgElement = document.createElement('img');
            imgElement.src = currentContent.image;
            imgElement.alt = "Immagine o GIF";
            imgElement.classList.add('message-image');
            messageArea.appendChild(imgElement);
        }
        
        currentIndex = (currentIndex + 1) % contents.length;
    });
});