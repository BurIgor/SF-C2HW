const progressPets = $('.progress');

ES.onmessage = message => {
	const votes = JSON.parse(message.data);
	const cats = votes.cats;
	const dogs = votes.dogs;
	const parrots = votes.parrots;

	const animals = cats + dogs + parrots;

	const catsPercentages = Math.round(animals == 0 ? 0 : cats * 1000 / animals) / 10;
	const dogsPercentages = Math.round(animals == 0 ? 0 : dogs * 1000 / animals) / 10;
	const parrotsPercentages = Math.round(animals == 0 ? 0 : parrots * 1000 / animals) / 10;

	$('#catResult').html(cats);
	$('#dogResult').html(dogs);
	$('#parrotResult').html(parrots);

	$('#progressCats').css("width", `${catsPercentages}%`)
	$('#progressCats').html(`Cats ${catsPercentages}%`)
	$('#progressDogs').css("width", `${dogsPercentages}%`)
	$('#progressDogs').html(`Dogs ${dogsPercentages}%`)
	$('#progressParrots').css("width", `${parrotsPercentages}%`)
	$('#progressParrots').html(`Parrots ${parrotsPercentages}%`)
}