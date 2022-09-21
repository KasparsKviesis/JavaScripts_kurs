﻿(function() {
    var counter = 0;
    var btn = document.getElementById('btn');
    var form = document.getElementById('form');
    var addInput = function() {
      counter++;
      var input = document.createElement("input");
      input.id = 'input-' + counter;
      input.type = 'text';
      input.name = 'name';
      input.placeholder = 'Lauks Nr.' + counter;
      form.appendChild(input);
    };
    btn.addEventListener('click', function() {
      addInput();
    }.bind(this));
  })();