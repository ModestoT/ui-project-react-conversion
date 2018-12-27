
class TabTopic {
    constructor(element){
        this.element = element;//sets this variable equal to the new object created
        this.data = this.element.dataset.tab; //grabs the data-tab value 
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);//grabs the content that is equal to the data-tab value
        this.tabContent = new TabContent(this.contentElement);//creates a new object based off the content grabed from this object
        this.element.addEventListener('click', () => {this.select()})//plays the select method on click
    }
    //grabs all the .tab elements and removes the active-tab class fom them and puts it on the clicked on element, then runs the tabContent Select() method
    select (){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        this.element.classList.toggle('active-tab');
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element){
        this.element = element;
    }
    //grabs all the .tab-content elements and removes the tab-selected class from them, then puts it on the tabTopic select() content
    select() {
        const content = document.querySelectorAll('.tab-content');
        content.forEach(item => item.classList.remove('tab-selected'));
        this.element.classList.toggle('tab-selected');
    }
}
//Grabs all the .tab elements and creates a new object TabTopic from them
const tabs = document.querySelectorAll('.tab').forEach( tab => new TabTopic(tab));
