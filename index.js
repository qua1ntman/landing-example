class Menu {
  burger = document.getElementById('menu-btn')
  fullBurgerBtn = document.getElementsByClassName('demo')[0]
  nav = document.getElementById('nav')
  logo = document.getElementById('logo')
  header = document.getElementById('header')
  contactBtn = document.getElementById('contact-btn')
  
  openMenu() {
    if (this.burger.checked) {
      this.nav.classList.add('open')
      this.logo.classList.add('white-in-menu')
      this.header.classList.add('black-header')
      this.contactBtn.classList.add('fixed')
      document.body.style.overflowY = 'hidden'
    } else {
      this.nav.classList.remove('open')
      this.logo.classList.remove('white-in-menu')
      this.header.classList.remove('black-header')
      this.contactBtn.classList.remove('fixed')
      document.body.style.overflowY = 'auto'
    }
  }
  
  checkSize() {
    const w = document.documentElement.clientWidth;
    if (w <= 320) {
      this.fullBurgerBtn.classList.remove('hide')
    } else {
      this.fullBurgerBtn.classList.add('hide')
    }
  }
}

class Form {
  sendBtn = document.getElementById('send-btn')
  nameInput = document.getElementById('name-input')
  mailInput = document.getElementById('email-input')
  formBlock = document.getElementById('form-block')
  afterSentBlock = document.getElementById('after-sent-block')

  sendFormData() {
    if (!this.validateData()) return console.log( 'Wrong data');
    console.log(this.nameInput.value, this.mailInput.value)
    this.nameInput.value = ''
    this.mailInput.value = ''
    this.formBlock.classList.add('hide')
    this.afterSentBlock.classList.remove('hide')
  }

  validateData() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (this.nameInput.value.length > 2 && reg.test(this.mailInput.value))
  }

}

const menu = new Menu()
menu.burger.addEventListener('click', (e) => {
  menu.openMenu()
})

menu.nav.addEventListener('click', (e) => {
  const target = e.target
  if (target.classList.contains('nav-link')) {
    menu.burger.checked = false
    menu.openMenu()
  }
})

menu.contactBtn.addEventListener('click', () => {
  menu.burger.checked = false
  menu.openMenu()
})

const form = new Form()
form.sendBtn.addEventListener('click', () => form.sendFormData())

menu.checkSize()
