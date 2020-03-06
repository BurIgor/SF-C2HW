const header = new Headers({
	'Access-Control-Allow-Credentials': true, 
  'Access-Control-Allow-Origin': '*'
})

const voteResultUrl = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(voteResultUrl, header);

function vote() {
	$('.plus').hide();
	$('.minus').hide();
	$('.dog').click(votedDog);
	$('.cat').click(votedCat);
	$('.parrot').click(votedParrot);
}

function votedCat() {
	$('.pet').hide();
	$('.catPlus').show();
	$('.dogMinus').show();
	$('.parrotMinus').show();
	voteRequest('cats');
}

function votedDog() {
	$('.pet').hide();
	$('.catMinus').show();
	$('.dogPlus').show();
	$('.parrotMinus').show();
	voteRequest('dogs');
}

function votedParrot() {
	$('.pet').hide();
	$('.catMinus').show();
	$('.dogMinus').show();
	$('.parrotPlus').show();
	voteRequest('parrots');
}

function voteRequest(pet) {
	$('#wrong').show();
	$.post(`https://sf-pyw.mosyag.in/sse/vote/${pet}`, function(data) {
		if (data.message == 'Ok') {
			console.log(data);
			$('#wrong').hide();
			$('#response').show();
		} 
	});
} 

$(document).ready(vote);