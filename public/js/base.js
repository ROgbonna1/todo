const tasks = document.querySelectorAll('.task');
const dueDates = document.querySelectorAll('.due-dates');

tasks.forEach((task) => {
  task.addEventListener('dblclick', switchToForm)
});

function switchToForm(e) {
  let originalInput = e.target.innerHTML;
  const taskForm = `
  <form method='post' action='/update_task'>
    <div class='inline input-field'>
      <input name='${e.target.dataset.id}' type='text' value='${originalInput}' />
    </div>
  </form>
  `;
  e.target.innerHTML = taskForm;
}