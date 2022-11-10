const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange',
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green',
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green',
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green',
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue',
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family:'fas',
		color: 'blue',
	},
];

const eleIconsContainer = document.querySelector('#icons-container');
const eleSelect = document.querySelector('#type-filter');


populateSelect(arrIcons, eleSelect);

renderIcons(arrIcons, eleIconsContainer);
eleSelect.addEventListener('change', filterIcons);




function renderIcons(arrData, eleContainer) {
	eleContainer.innerHTML = '';
	arrData.forEach(objIcon => eleContainer.innerHTML += generateCard(objIcon));

	
}

function generateCard(objData) {
	return `
		<div class="box">
			<i class="${objData.family} ${objData.prefix}${objData.name}" style="color:${objData.color}"></i>
			<div class="title">${objData.name}</div>
		</div>
	`;
}

function populateSelect(arrData, eleSelect) {
	const arrTypes = [];
	arrData.forEach(objIcon => arrTypes.includes(objIcon.type) ? '' : arrTypes.push(objIcon.type));

	arrTypes.forEach(type => eleSelect.innerHTML += `<option value="${type}">${type}</option>`);
}

function filterIcons() {
	const selectedType = this.value; 

	
	if (selectedType !== '') {
		arrIconsFiltered = arrIcons.filter(objIcon => objIcon.type === selectedType)
	} else {
		arrIconsFiltered = arrIcons;
	}
	console.log(arrIconsFiltered);

	
	renderIcons(arrIconsFiltered, eleIconsContainer);
}
