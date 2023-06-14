input = document.querySelector('.tasks__input')
list = document.querySelector('.tasks__list')

input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && input.value.trim()) {

        task = document.createElement('div')
        task.className = 'task'

        taskText = document.createElement('div')
        taskText.className = 'task__title'
        taskText.innerText = input.value.trim()

        taskClose = document.createElement('a')
        taskClose.href = '#'
        taskClose.className = 'task__remove'
        taskClose.innerHTML = '&times;'
        taskClose.onclick = (event) => {
            event.target.closest('div').remove()
        }

        task.appendChild(taskText)
        task.appendChild(taskClose)
        list.appendChild(task)
        input.value = ''
        
       
    }
})