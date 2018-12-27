class Navigation {
    constructor(element) {
        this.element = element; //sets the variable equal to the new object created
        this.button = this.element.querySelector('.menu-button'); //grabs the .menu-button element from the object
        this.content = this.element.querySelector('.menu-content');//grabs the .menu-content element from the object
        this.button.addEventListener('click', (e) => this.toggleContent(e));//adds a click event that fires off the toggleContent() method
    }
    //Will toggle the menu content on or off when the click event happens. Changes and plays animation based off if menu img has close in its name
    toggleContent(e){
        this.content.classList.toggle('menu-hidden');
        if(e.target.src.includes("close")){
            e.target.src = "img/nav-hamburger.png";
            TweenMax.to(this.content, .5, {width: '0%', height: '0%', right: '28%', opacity: 0, clearProps:'opacity'});
        } else {
            e.target.src = "img/nav-hamburger-close.png"
            TweenMax.to(this.content, .5, {width: '100%', height: '100%', right: '0%'});
        }
    }
}
//Grabs all the .navigation elements and creates a new Navigation object for them
const menus = document.querySelectorAll('.navigation').forEach( menu => new Navigation(menu)); 
