export default class HelloWorld {

    /**
     * @constructor
     * @param {HTMLElement} container
     */
    constructor ( container ) {
        this.container = container;
    }

    greet ( name ) {
        this.container.innerHTML = 'Hello '+ ( name || 'World'  );
    }
}