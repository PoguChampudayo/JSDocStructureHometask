form = document.querySelector('.tasks__control')
list = document.querySelector('.tasks__list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (form.querySelector('input').value.trim()) {

        task = document.createElement('div')
        task.className = 'task'

        taskText = document.createElement('div')
        taskText.className = 'task__title'
        taskText.innerText = form.querySelector('input').value.trim()

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
        form.querySelector('input').value = ''
        
       
    }
})