const words = new URLSearchParams(window.location.search);

const processWords = (word) => {
    if (!word) return null;
    word = word.trim();
    word = word.toLowerCase();
    return word;
}

const titleWord = (word) => {
    if (!word) return null;
    word = word[0].toUpperCase() + word.slice(1);
    return word;
}

const adj = processWords(words.get('adj'));
const titleAdj = titleWord(adj);
const verb1 = processWords(words.get('verb1'));
const verb2 = processWords(words.get('verb2'));
const plnoun1 = processWords(words.get('plnoun1'));
const plnoun2 = processWords(words.get('plnoun2'));
const plnoun3 = processWords(words.get('plnoun3'));
const pastverb1 = processWords(words.get('pastverb1'));
const pastverb2 = processWords(words.get('pastverb2'));
const number = words.get('number');
const animal = words.get('animal');
const answer = words.get('answer');
let verb;
let pronoun;
let possessive;

if (pastverb1 === 'blew') {
    verb = 'blow';
} else if (pastverb1 === 'knocked') {
    verb = 'knock';
} else if (pastverb1 === 'punched') {
    verb = 'punch';
}

if (answer === 'yes') {
    pronoun = 'she';
    possessive = 'her'
} else if (answer === 'no') {
    pronoun = 'he',
    possessive = 'his'
}

const story = `<p>
Once upon a time, there were three <span class="word" title="The adjective you chose!">${adj}</span> pigs. 
One day, their mother said, "You are all grown up and must live on your own." So they left to build their houses.
</p>

<p>
The first <span class="word" title="The adjective you chose!">${adj}</span> pig wanted only to
<span class="word" title="The first verb you chose!">${verb1}</span> all day and quickly built <span class="word" 
title="We decided the pronoun based on your answer to the yes or no question!">${possessive}</span>
house out of <span class="word" title="The first plural noun you chose!">${plnoun1}</span>. The second
<span class="word" title="The adjective you chose!">${adj}</span> pig wanted to <span class="word" 
title="The second verb you chose!">${verb2}</span> all day so <span class="word" title="We decided the pronoun based on
 your answer to the yes or no question!">${pronoun}</span> built <span class="word" title="possessive">${possessive}</span> house
out of <span class="word" title="The second plural noun you chose!">${plnoun2}</span>. The third 
<span class="word" title="The adjective you chose!">${adj}</span> pig
knew the <span class="word" title="Your favorite animal!">${animal}</span> lived nearby and worked hard 
to build <span class="word" title="possessive">${possessive}</span> house out of
<span class="word" title="The third plural noun you chose!">${plnoun3}</span>. 
</p>

<p>
One day, the <span class="word" title="Your favorite animal!">${animal}</span> knocked on the first pig's house. "Let me in or I'll
<span class="word" title="The present tense verb based on the first past tense verb you chose!">${verb}</span> your house down!" 
the pig didn't, so the <span class="word" title="Your favorite animal!">${animal}</span>
<span class="word" title="The first past tense verb you chose!">${pastverb1}</span> down the house. 
</p>

<p>
The <span class="word" title="Your favorite animal!">${animal}</span> knocked on the second pig's house. "Let me in or I'll
<span class="word" title="The present tense verb based on the first past tense verb you chose!">${verb}</span> your house down!" 
The pig didn't, so the <span class="word" title="Your favorite animal!">${animal}</span> 
<span class="word" title="The first past tense verb you chose!">${pastverb1}</span> down the house. 
</p>

<p>
Then the <span class="word" title="Your favorite animal!">${animal}</span> knocked on the third
<span class="word" title="The adjective you chose!">${adj}</span> pig's door. "Let me in or I'll
<span class="word" title="The present tense verb based on the first past tense verb you chose!">${verb}</span> your house down!" The
<span class="word" title="The adjective you chose!">${adj}</span> pig didn't, so the 
<span class="word" title="Your favorite animal!">${animal}</span>
<span class="word" title="The first past tense verb you chose!">${pastverb1}</span> and
<span class="word" title="The first past tense verb you chose!">${pastverb1}</span>. For
<span class="word" title="The number you chose!">${number}</span> days and
<span class="word" title="The number you chose!">${number}</span> nights 
<span class="word" title="We decided the pronoun based on your answer to the yes or no question!">${pronoun}</span>
<span class="word" title="The first past tense verb you chose!">${pastverb1}</span>, 
but <span class="word" title="We decided the pronoun based on your answer to the yes or no question!">${pronoun}</span> could not 
<span class="word" title="The present tense verb based on the first past tense verb you chose!">${verb}</span> the house down. 
</p>

<p>
All the <span class="word" title="The adjective you chose!">${adj}</span> pigs went to live in the house made of
<span class="word" title="The third plural noun you chose!">${plnoun3}</span> and they all
<span class="word" title="The second past tense verb you chose!">${pastverb2}</span> happily ever after.
</p>`;

const title = document.getElementById('title');
title.innerHTML = `The Three <span class="word" title="The adjective you chose!">${titleAdj}</span> Pigs`;

const storyElement = document.getElementById('story');
storyElement.innerHTML = story;