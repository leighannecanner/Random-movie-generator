

class RandomMovieGenerator {
    constructor(){}
    generateRandomMovie(){
    const movies = [
        {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
        {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
        {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
        {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
        {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
        {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
        {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
        {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
        {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
        {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
        {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
        ]
    
    const movie = movies[Math.floor(Math.random()*movies.length)];
    return movie 
    } 
}



class UI {
    constructor (){ 
        this.guessInput = document.getElementById("guess-input");
        this.submitBtn = document.getElementById("submit-btn");
        this.showHint = document.getElementById("show-hint");
        this.hint = document.getElementById("hint")
        this.random = new RandomMovieGenerator();
        this.successAlert = document.getElementById('success-alert');
        this.failAlert = document.getElementById('fail-alert'); 
        this.initEventListeners()      
    }
    initEventListeners() {
        this.submitBtn.addEventListener('click', () => this.onGuessButtonClick());
        this.showHint.addEventListener('click', () => this.onShowHintButtonClick());
      }
     
      
    onGuessButtonClick() {
        const guess = this.guessInput.value;
        if (this.guessInput.value == this.currentMovie.title) {
          this.showSuccessAlert(guess);
        } else {
          this.showFailAlert(guess);
        }
      }
      showSuccessAlert(guess) {
        this.successAlert.classList.remove('hide');
        this.failAlert.classList.add('hide');
    
        this.successAlert.innerHTML = 'You guessed: ' + guess + "<br>" + 'the answer is: ' + this.currentMovie.title + ". the explanation is " + this.currentMovie.explanation;
      }
    
      showFailAlert(guess) {
        this.successAlert.classList.add('hide');
        this.failAlert.classList.remove('hide');
    
        this.failAlert.innerHTML = 'You guessed: ' + guess + " this is incorrect";
      }
      
      
      onShowHintButtonClick() {
          const currentMovie = this.random.generateRandomMovie()
          this.currentMovie = currentMovie
          this.hint.innerHTML = currentMovie.hint
          this.successAlert.classList.add('hide');
          this.failAlert.classList.add('hide');
      }
        
}
const ui = new UI(); 

