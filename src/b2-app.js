const template = document.createElement('template')
template.innerHTML = `

<style>



</style>

 <nick-nameelement> </nick-nameelement>
 <timer> </timer>

`
customElements.define('the-quiz',
/**
 * Nickname component.
 *
 */
  class extends HTMLElement {
  /**
   * Constructor.
   *
   */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.submitNameBtn = this.shadowRoot.querySelector('.submitName-btn')
      this.submitName = this.shadowRoot.querySelector('.nick-name')
      this.getNickName = this.shadowRoot.querySelector('#nickname')
      console.log(this.getNickName.value)
    }

    /**
     * Adds events.
     *
     */
    connectedCallback () {
      
    }

  }
)
