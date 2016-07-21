function getArray()
{
	var toDoList = new Array;									//Create An Array
	var taskStr = localStorage.getItem('toDoList');				//Get the Task from Input using LocalStorage
	if (taskStr !== null)										//if the value is NOT empty --null-- 
	{
		toDoList = JSON.parse(taskStr);
	}
	return toDoList;
}

function addTask()
{
	var task = document.getElementById("taskName").value;		//create a variable to hold value of input
	var array = getArray();										//create a variable to hold our Array
	array.push(task);											//pushing the task into the Array
	localStorage.setItem('toDoList', JSON.stringify(array));		//Store the task into the localStorage
	show();
	$("#taskName").val('');
	return false;
}

function removeTask()
{
	var id = this.id;								//Specify ID to select the button
	console.log(id);
	var array = getArray();										//create Array
	array.splice(id, 1)											//splicing the task we want removed
	localStorage.setItem('toDoList', JSON.stringify(array));	//Saving the new/edited array into localStorage
	show();														//show the latest List of Tasks
	return false;
}

function show()
{
	var array = getArray();										//create the variable to hold Array
	var htmlFormat = "<ul>";									//Add unordered List
	
	
	for(var i=0; i < array.length; i++)							//Create a For Loop to display the Array
	{
		
		htmlFormat += "<li>" + (i + 1) + ")&nbsp;&emsp;" + array[i] + "&nbsp;&emsp;<button class='ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all remove' id='" + i + "'>delete</button></li>";		//Create a button tag using a class and unique id
	}
	
	htmlFormat += "</ul>";
	document.getElementById('taskList').innerHTML = htmlFormat;	//Show the document
	

	var buttons = document.getElementsByClassName('remove');		//Create Array for all the Buttons
	//Add an EventListener for when each button is clicked
	for (var i = 0; i < buttons.length; i++)
	{
		buttons[i].addEventListener('click', removeTask);
		//buttons[i].refresh();
	}
}

document.getElementById('add').addEventListener('click', addTask);
show();
