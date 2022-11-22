const template = document.createElement('template')
template.innerHTML = `

<style>

p {
  color: red;
}

</style>

<p> Enter your Nickname</p>
<form>
  <input type="text" id="nickname">
  <button type="submit" id="submit-nickname"> submit</button>
 </form>

`
customElements.define('nick-nameelement',
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
      this.submitName = this.shadowRoot.querySelector('#submit-nickname')
      this.getNickName = this.shadowRoot.querySelector('#nickname')
      this.saveName = ''
      
      this.submitName.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('i am prevented lol')
        console.log(this.getNickName.value)
        this.submitName()
      })

    }

    /**
     * Adds events.
     *
     */
    connectedCallback () {
      
    }


    submitName() {
      this.dispatchEvent(new window.CustomEvent('nickName', { detail: { name: this.getNickName.value } }))
      
      this.dispatchEvent(
        new window.CustomEvent('myEvent', {

        })
      )
    }


  }
)
