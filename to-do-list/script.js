 // small helper to safely escape text when we inject inside HTML
    function escapeHtml(str) {
      return str.replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#39;');
    }

    const input = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    // Add on click or Enter
    addBtn.addEventListener('click', addTask);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask();
    });

    function addTask() {
      const text = input.value.trim();
      if (!text) return;
      const li = document.createElement('li');

      // span will hold the task text; we will wrap it in <strike> when toggled
      const span = document.createElement('span');
      span.className = 'task-text';
      // store original text in data attribute so toggling doesn't lose it
      span.dataset.orig = text;
      span.textContent = text;

      // Strike (toggle) button
      const strikeBtn = document.createElement('button');
      strikeBtn.className = 'strike';
      strikeBtn.type = 'button';
      strikeBtn.innerText = 'Strike';
      strikeBtn.title = 'Strike (mark as removed) using <strike>';
      strikeBtn.addEventListener('click', () => toggleStrike(span));

      // Delete (permanent) button
      const delBtn = document.createElement('button');
      delBtn.className = 'delete';
      delBtn.type = 'button';
      delBtn.innerText = 'Delete';
      delBtn.title = 'Delete task permanently';
      delBtn.addEventListener('click', () => li.remove());

      li.appendChild(span);
      li.appendChild(strikeBtn);
      li.appendChild(delBtn);
      todoList.appendChild(li);

      input.value = '';
      input.focus();
    }

    // Toggle the <strike> tag around the span's text.
    function toggleStrike(span) {
      // if it already contains a <strike> child, remove it
      const strikeChild = span.querySelector('strike');
      if (strikeChild) {
        // unwrap: replace span's innerHTML with plain text (orig stored)
        span.textContent = span.dataset.orig || strikeChild.textContent;
      } else {
        // wrap with <strike> using escaped text to avoid injection
        const safe = escapeHtml(span.textContent);
        span.innerHTML = '<strike>' + safe + '</strike>';
      }
    }

    // Optional: add a couple example tasks
    (function seedExamples(){
      const seeds = ['Buy groceries', 'Prepare sermon notes', 'Practice JavaScript'];
      seeds.forEach(s => { input.value = s; addTask(); });
      input.value = '';
    })();