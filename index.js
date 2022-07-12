class Menu {
  burger = document.getElementById('menu-btn')
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
      } else {
          this.nav.classList.remove('open')
          this.logo.classList.remove('white-in-menu')
          this.header.classList.remove('black-header')
          this.contactBtn.classList.remove('fixed')
      }
  }
}

class Form {
  sendBtn = document.getElementById('send-btn')
  nameInput = document.getElementById('name-input')
  mailInput = document.getElementById('email-input')

  sendFormData() {
    if (!this.validateData())  return console.log( 'Wrong data');

    console.log( form.nameInput.value, form.mailInput.value);
    form.nameInput.value = ''
    form.mailInput.value = ''
      
    
  }

  validateData() {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (this.nameInput.value.length > 2 && reg.test(this.mailInput.value))
  }
}

const menu = new Menu()
menu.burger.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.openMenu()
})

const form = new Form()
form.sendBtn.addEventListener('click', () => form.sendFormData())
