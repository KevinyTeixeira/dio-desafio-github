
/*******************************************/
/* 1. DEFINE VARIABLES
/*******************************************/

var _data = {
    timeout: undefined,
    souds: [],

    score: 0,
    gameSequence: [],
    playerSequence: []
};


/*******************************************/
/* 2. DOCUMENT SELECTORS
/*******************************************/
const _gui = {
    start: document.querySelector(".gui__btn--start"),
    colors: document.querySelectorAll(".genius__color"),
    counter: document.querySelector(".gui__counter")
}

/*******************************************/
/* 3. IMPLEMENT SOUNDS
/*******************************************/

const _soundUrls = [
        // url from sound
];

_soundUrls.forEach(sndPath => {
    const audio = new Audio(sndPath);
    _data.sounds.push(audio);
});

/*******************************************/
/* 4. GAME
/*******************************************/

// 4.1 Configura a ação do botão START
_gui.start.addEventListener("click", () => {
    startGame();
});

// CALL IT WHEN USER SELECT A COLOR
const padListener = (e) => {
    console.log("You've clicked");
    if(!_data.playerCanPlay)
        return;

    let soundId;
    _gui.colors.forEach((pad, key) => {
        if(pad === e.target)
        soundId = key;
    });

    e.target.classList.add("genius__color--active");

    // _data.sounds[soundId].play();
    _data.playerSequence.push(soundId);

    setTimeout(() => {
        e.target.classList.remove("genius__color--active");

        const currentMove = _data.playerSequence.length - 1;

        if(_data.playerSequence[currentMove] !== _data.gameSequence[currentMove]) {
            _data.playerCanPlay = false;
            disablePads();
            gameOver(_data.score);
        }
        else if(currentMove === _data.gameSequence.length - 1) {
            newColor();
            playSequence();
        }

        waitForPlayerClick()
    }, 250);
}

// 4.2 Configura a ação do click sobre as cores!
_gui.colors.forEach(pad => {
    pad.addEventListener("click", padListener);
});

/*******************************************/
/* 5. GAME-FUNCTIONS
/*******************************************/

// START-GAME FUNCTION
var startGame = () => {
    _gui.counter.innerHTML = "--";
    _data.score = 0;
    _data.gameSequence = [];
    _data.playerSequence = [];
    disablePads();
    changePadCursor("auto");
    blink("--", () => {
        newColor();
        playSequence();
    })
}

// GAME-OVER FUNCTION
var gameOver = (score) => {
    _data.playerCanPlay = false; // garante que o jogador não pode fazer nada;

    blink("!!", () => {
        _data.score = 0;
        _data.gameSequence = []
        alert("You loose! Let's start again.");
        startGame();
    });
}

// PLAY GAME SEQUENCE
var playSequence = () => {
    let counter = 0,
        padOn = true; // informa se o pad está aceso ou apagado

    _data.playerSequence = []; // zera a sequência do jogador
    _data.playerCanPlay = false; // impede que o jogador faça algo enquanto a sequência é executada

    changePadCursor("auto");

    const interval = setInterval(() => {
        if(padOn) {
            if(counter === _data.gameSequence.length) { // Interrompe o intervalo depois que todas as cores forem apresentadas
                clearInterval(interval);
                disablePads();
                waitForPlayerClick();
                changePadCursor("pointer");
                _data.playerCanPlay = true;
                return;
            }

        const sndId = _data.gameSequence[counter]; // counter identifica qual elemento tem que pegar
        const pad = _gui.colors[sndId]; // pega o PAD correspondente aquela ID
        // _data.sounds[sndId].play(); é a mesma id das músicas?
        pad.classList.add("genius__color--active");
        counter++;
        }
        else {
            disablePads();
        }

        padOn = !padOn; // inverte o valor de padOn;
    }, 350);
}

// AFTER PLAY COLOR ORDER, WAIT FOR PLAYER.
var waitForPlayerClick = () => {
    clearTimeout(_data.timeout); // garante que o timeout sempre inicie zerado
    _data.timeout = setTimeout(() => {
        if(_data.playerCanPlay)
        return;

        disablePads();
        // gameOver();
    }, 5000)
}

/*******************************************/
/* 5.1. COLORS
/*******************************************/

// DISABLE COLORS
var disablePads = () => {
    _gui.colors.forEach(pad => {
        pad.classList.remove("genius__color--active");
    });
}

// RANDOM A NEW COLOR
var newColor = () => {
    // Math.floor(2); // Arredonda o 2 quebrado para 2;
    // Math.ceil(); // Arrendonda sempre para cima;
    // Math.round(); // Arredonda igual a escola, 2.4 para baixo, 2.5 para cima;
    _data.gameSequence.push(Math.floor(Math.random() *4)); // O "push" sempre adiciona o elemento ao fim do Array
    _data.score++;

    setScore()
}

const changePadCursor = (cursorType) => {
    _gui.colors.forEach(pad => {
        pad.style.cursor = cursorType;
    });
}

/*******************************************/
/* 5.2 SCORE
/*******************************************/

// MANIPULA O SCORE!
var blink = (text, callback) => {
    let counter = 0,
        on = true;

    _gui.counter.innerHTML = text;

    const interval = setInterval(() => {
        if(on) { // Se o display estiver aceso > Apague
            _gui.counter.classList.remove("gui__counter--on");
        } else { // Se estvier apagado > Acenda
            _gui.counter.classList.add("gui__counter--on");

            if(++counter === 3) {
                clearInterval(interval);
                callback();
            }
        }

        on = !on;
    }, 250);
}

// CONTROLA A PONTUAÇÃO
var setScore = () => {
    const score = _data.score.toString(); // Converte score para String
    const display = "00".substring(0,2 - score.length) + score;  // score.length, retorna quantos caracteres o número tem.
    // com o método substring, permite apresentar o zero quando o score for menor do que 10.
    _gui.counter.innerHTML = display;
}
