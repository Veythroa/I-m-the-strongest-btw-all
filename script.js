// =================================
// SCREENS
// =================================

const introScreen =
    document.getElementById("intro-screen");

const introductionScreen =
    document.getElementById("introduction-screen");

const amishaScreen =
    document.getElementById("amisha-screen");

const akashScreen =
    document.getElementById("akash-screen");

const akankshaScreen =
    document.getElementById("akanksha-screen");

const abhiScreen =
    document.getElementById("abhi-screen");

const akkyScreen =
    document.getElementById("akky-screen");

const battleScreen =
    document.getElementById("battle-screen");

const finalBattleScreen =
    document.getElementById("final-battle-screen");

const winnerScreen =
    document.getElementById("winner-screen");


// =================================
// BUTTONS
// =================================

const enterButton =
    document.getElementById("enter-button");

const continueButton =
    document.getElementById("continue-button");

const amishaNextButton =
    document.getElementById("amisha-next-button");

const akashNextButton =
    document.getElementById("akash-next-button");

const akankshaNextButton =
    document.getElementById("akanksha-next-button");

const abhiNextButton =
    document.getElementById("abhi-next-button");

const akkyNextButton =
    document.getElementById("akky-next-button");

const battleNextButton =
    document.getElementById("battle-next-button");

const finalNextButton =
    document.getElementById("final-next-button");


// =================================
// MUSIC
// =================================

const introMusic =
    new Audio("music/intro.mp3");

const competitorMusic =
    new Audio("music/competitors.mp3");

const battleMusic =
    new Audio("music/battle.mp3");

const finalMusic =
    new Audio("music/final.mp3");

const victoryMusic =
    new Audio("music/victory.mp3");


introMusic.loop = true;

competitorMusic.loop = true;

battleMusic.loop = true;

finalMusic.loop = true;

victoryMusic.loop = true;


// =================================
// CHARACTER LINES
// =================================

const amishaLines =
    document.querySelectorAll(".reveal-amisha");

const akashLines =
    document.querySelectorAll(".reveal-akash");

const akankshaLines =
    document.querySelectorAll(".reveal-akanksha");

const abhiLines =
    document.querySelectorAll(".reveal-abhi");

const akkyLines =
    document.querySelectorAll(".reveal-akky");


// =================================
// MUSIC FUNCTION
// =================================

function stopAllMusic() {

    introMusic.pause();

    competitorMusic.pause();

    battleMusic.pause();

    finalMusic.pause();

    victoryMusic.pause();

}


// =================================
// CHARACTER ANIMATION
// =================================

function revealCharacter(lines) {

    lines.forEach(function (line, index) {

        setTimeout(function () {

            line.classList.add("show");

        }, index * 450);

    });

}


// =================================
// START
// =================================

enterButton.addEventListener("click", function () {

    introScreen.classList.add("hidden");

    introductionScreen.classList.remove("hidden");


    stopAllMusic();

    introMusic.currentTime = 0;

    introMusic.play();

});


// =================================
// MEET COMPETITORS
// =================================

continueButton.addEventListener("click", function () {

    introductionScreen.classList.add("hidden");

    amishaScreen.classList.remove("hidden");


    stopAllMusic();

    competitorMusic.currentTime = 0;

    competitorMusic.play();


    revealCharacter(amishaLines);

});


// =================================
// AMISHA → AASMAN
// =================================

amishaNextButton.addEventListener("click", function () {

    amishaScreen.classList.add("hidden");

    akashScreen.classList.remove("hidden");


    revealCharacter(akashLines);

});


// =================================
// AASMAN → AKANKSHA
// =================================

akashNextButton.addEventListener("click", function () {

    akashScreen.classList.add("hidden");

    akankshaScreen.classList.remove("hidden");


    revealCharacter(akankshaLines);

});


// =================================
// AKANKSHA → ABHI
// =================================

akankshaNextButton.addEventListener("click", function () {

    akankshaScreen.classList.add("hidden");

    abhiScreen.classList.remove("hidden");


    revealCharacter(abhiLines);

});


// =================================
// ABHI → AKKY
// =================================

abhiNextButton.addEventListener("click", function () {

    abhiScreen.classList.add("hidden");

    akkyScreen.classList.remove("hidden");


    revealCharacter(akkyLines);

});


// =================================
// AKKY → BATTLE
// =================================

akkyNextButton.addEventListener("click", function () {

    akkyScreen.classList.add("hidden");

    battleScreen.classList.remove("hidden");


    stopAllMusic();

    battleMusic.currentTime = 0;

    battleMusic.play();

});


// =================================
// BATTLE DIALOGUE
// =================================

const battleDialogue =
    document.getElementById("battle-dialogue");

let battleNumber = 0;


battleNextButton.addEventListener("click", function () {

    battleNumber++;


    // ROUND 1

    if (battleNumber === 1) {

        battleDialogue.innerHTML = `

            <p>
                AKANKSHA-SAN:
                "THUSKI!"
            </p>

            <p>
                The arena suddenly becomes impossible
                to navigate.
            </p>

            <p>
                AASMAN-KUN:
                "You really thought that would work?"
            </p>

            <h3>
                AKANKSHA-SAN IS ELIMINATED.
            </h3>

        `;

    }


    // ROUND 2

    else if (battleNumber === 2) {

        battleDialogue.innerHTML = `

            <p>
                AASMAN-KUN:
                "TERROR TERROR!"
            </p>

            <p>
                The attack comes without warning.
            </p>

            <p>
                ABHI-KUN:
                "I saw that coming from a mile away."
            </p>

            <p>
                AKKY-KUN:
                "Enough."
            </p>

            <h3>
                AASMAN-KUN IS ELIMINATED.
            </h3>

        `;

    }


    // ROUND 3

    else if (battleNumber === 3) {

        battleDialogue.innerHTML = `

            <p>
                AMISHA-SAN:
                "TANKAMBHASUM!"
            </p>

            <p>
                The ancient spell fills the arena
                with mysterious energy.
            </p>

            <p>
                ABHI-KUN:
                "Interesting."
            </p>

            <p>
                AKKY-KUN:
                "My turn."
            </p>

            <h3>
                AMISHA-SAN IS ELIMINATED.
            </h3>

        `;

    }


    // FINAL TWO

    else {

        battleScreen.classList.add("hidden");

        finalBattleScreen.classList.remove("hidden");


        stopAllMusic();

        finalMusic.currentTime = 0;

        finalMusic.play();

    }

});


// =================================
// FINAL BATTLE DIALOGUE
// =================================

const finalDialogue =
    document.getElementById("final-dialogue");

let finalNumber = 0;


finalNextButton.addEventListener("click", function () {

    finalNumber++;


    // FINAL DIALOGUE 1

    if (finalNumber === 1) {

        finalDialogue.innerHTML = `

            <p>
                ABHI-KUN:
                "No... it can't be."
            </p>

            <p>
                ABHI-KUN:
                "How are you stronger than me?"
            </p>

        `;

    }


    // FINAL DIALOGUE 2

    else if (finalNumber === 2) {

        finalDialogue.innerHTML = `

            <p>
                AKKY-KUN:
                "You spent all this time
                trying to see everything."
            </p>

            <p>
                AKKY-KUN:
                "But you failed to see the one thing
                standing directly in front of you."
            </p>

        `;

    }


    // FINAL DIALOGUE 3

    else if (finalNumber === 3) {

        finalDialogue.innerHTML = `

            <p>
                ABHI-KUN:
                "Then I'll use everything I have!"
            </p>

            <p>
                The arena begins to shake.
            </p>

            <p>
                ABHI-KUN:
                "THIS IS MY FINAL ATTACK!"
            </p>

        `;

    }


    // FINAL DIALOGUE 4

    else if (finalNumber === 4) {

        finalDialogue.innerHTML = `

            <p>
                AKKY-KUN:
                "You don't understand."
            </p>

            <p>
                AKKY-KUN:
                "I don't need a final attack."
            </p>

            <h3>
                "I ONLY NEED TO SAY ONE THING."
            </h3>

        `;

    }


    // FINAL DIALOGUE 5

    else if (finalNumber === 5) {

        finalDialogue.innerHTML = `

            <p>
                AKKY-KUN:
            </p>

            <h3>
                "I WIN."
            </h3>

            <p>
                The entire arena falls silent.
            </p>

        `;

    }


    // WINNER

    else {

        finalBattleScreen.classList.add("hidden");

        winnerScreen.classList.remove("hidden");


        stopAllMusic();

        victoryMusic.currentTime = 0;

        victoryMusic.play();

    }

});