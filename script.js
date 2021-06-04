// Vue.component('task', {
//     props: ['data'],
//     data() {
//         return {
//         }
//     },
//     methods: {
//         task_done() {
//             this.$emit('task_done')
//         }
//     },
//     template: `
//   <div class="task">
//     <div>
//       <h3 class="task__title">{{data.title}}</h3>
//       <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
//     </div>
//     <button class="task__done rot" @click="task_done()">
//         <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M10.5 0C4.71007 0 0 4.71007 0 10.5C0 16.2899 4.71007 21 10.5 21C16.2899 21 21 16.2899 21 10.5C21 4.71007 16.2899 0 10.5 0Z" fill="#F44336"/>
//             <path d="M14.3667 13.1294C14.7088 13.4716 14.7088 14.0245 14.3667 14.3668C14.1961 14.5374 13.9721 14.6231 13.748 14.6231C13.524 14.6231 13.3 14.5374 13.1294 14.3668L10.5 11.7373L7.87071 14.3668C7.70007 14.5374 7.47609 14.6231 7.25211 14.6231C7.02796 14.6231 6.80398 14.5374 6.63335 14.3668C6.29128 14.0245 6.29128 13.4716 6.63335 13.1294L9.26283 10.5001L6.63335 7.87074C6.29128 7.52851 6.29128 6.9756 6.63335 6.63338C6.97557 6.29132 7.52848 6.29132 7.87071 6.63338L10.5 9.26287L13.1294 6.63338C13.4716 6.29132 14.0245 6.29132 14.3667 6.63338C14.7088 6.9756 14.7088 7.52851 14.3667 7.87074L11.7372 10.5001L14.3667 13.1294Z" fill="#2E3B51"/>
//         </svg>
//     </button>
//   </div>`
// })

// var vue = new Vue({
//     el: '#app',
//     data: {
//         string: 'asdasda',
//         new_task: {
//             title: '',
//             desc: ''
//         },
//         tasks: [
//             {
//                 title: 'Яблочный пирог',
//                 desc: 'Приготовить его к успешной сдаче сессии.',
//             }
//         ]
//     },
//     methods: {
//         add_task() {
//             if (this.new_task.title != '') {
//                 this.tasks.push({
//                     title: this.new_task.title,
//                     desc: this.new_task.desc
//                 });
//                 this.new_task.title = '';
//                 this.new_task.desc = '';
//             }
//         },
//         delete_task(id) {
//             this.tasks.splice(id, 1);
//         }
//     }

// // Изменить тему сайта

// let switchMode = document.getElementById("switchMode");

//     switchMode.onclick = function () {
//         let theme = document.getElementById("theme");

//         if (theme.getAttribute("href") == "style.css") {
//             theme.href = "light-mode.css";
//         } else {
//             theme.href = "style.css";
//         }
//     }

Vue.component('task', {
    props: ['data'],
    data() {
        return {
        }
    },
    methods: {
        task_done() {
            this.$emit('task_done')
        }
    },
    template: `
  <div class="task">
    <div>
      <h3 class="task__title">{{data.title}}</h3>
      <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
    </div>
    <button class="task__done rot" @click="task_done()">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 0C4.71007 0 0 4.71007 0 10.5C0 16.2899 4.71007 21 10.5 21C16.2899 21 21 16.2899 21 10.5C21 4.71007 16.2899 0 10.5 0Z" fill="#F44336"/>
            <path d="M14.3667 13.1294C14.7088 13.4716 14.7088 14.0245 14.3667 14.3668C14.1961 14.5374 13.9721 14.6231 13.748 14.6231C13.524 14.6231 13.3 14.5374 13.1294 14.3668L10.5 11.7373L7.87071 14.3668C7.70007 14.5374 7.47609 14.6231 7.25211 14.6231C7.02796 14.6231 6.80398 14.5374 6.63335 14.3668C6.29128 14.0245 6.29128 13.4716 6.63335 13.1294L9.26283 10.5001L6.63335 7.87074C6.29128 7.52851 6.29128 6.9756 6.63335 6.63338C6.97557 6.29132 7.52848 6.29132 7.87071 6.63338L10.5 9.26287L13.1294 6.63338C13.4716 6.29132 14.0245 6.29132 14.3667 6.63338C14.7088 6.9756 14.7088 7.52851 14.3667 7.87074L11.7372 10.5001L14.3667 13.1294Z" fill="#2E3B51"/>
        </svg>
    </button>
  </div>`
})

var vue = new Vue({
    el: '#app',
    data: {
        string: 'asdasda',
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Яблочный пирог',
                desc: 'Приготовить его к успешной сдаче сессии',
            }
        ]
    },
    methods: {
        add_task() {
            if (this.new_task.title != '') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                this.new_task.title = '';
                this.new_task.desc = '';
            }
        },
        delete_task(id) {
            this.tasks.splice(id, 1);
        }
    }
})


// Сменить тему сайта

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style.css") {
        theme.href = "light-mode.css";
    } else {
        theme.href = "style.css";
    }
}