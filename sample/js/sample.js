var app = new Vue({
  el : '#app',
  data : {
    message : 'Hello Vue.js!'
  }
})

var app2 = new Vue({
  el : '#app-2',
  data : {
    message : 'You loaded this page on ' + new Date().toLocaleDateString()
  }
})

var app3 = new Vue({
  el : '#app-3',
  data : {
    seen : true
  }
})

var app4 = new Vue({
  el : '#app-4',
  data : {
    todos : [
      { text : 'Learn JavaScript' },
      { text : 'Learn Vue.js' },
      { text : 'Build something awesome' }
    ]
  }
})

var app5Message = '';

var app5 = new Vue({
  el : '#app-5',
  data :{
    message : 'Tutorial Vue.js!'
  },
  methods :{
    reverseMessage : function(){
      this.message = this.message.split('').reverse().join('')
    },
    changeHW : function(){
      if(this.message === 'Hello World!' ||
      this.message === 'Hello World!'.split('').reverse().join('')){
        this.message = app5Message
      } else {
        app5Message = this.message
        this.message = 'Hello World!'
      }
    }
  }
})

var app6 = new Vue({
  el : '#app-6',
  data : {
    message : 'Hello Vue.js!'
  }
})

Vue.component('todo-item', {
  props : ['todo'],
  template : '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el : '#app-7',
  data : {
    groceryList : [
      { id : 0 , text : 'Vegetables' },
      { id : 1 , text : 'Cheese' },
      { id : 2 , text : 'Whatever else humans are supposed to eat' },
    ]
  }
})
