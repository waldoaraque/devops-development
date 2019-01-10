function getAnMessage (req, res){
	let message = 
	`This is a basic API, you can make this 
	request 'http://localhost:3000/answerToMe' 
	so that it responds...
	`;
	try{
		res.status(200).send(message);
		console.log('The message has been completed.');
	}catch(e){
		res.status(404).send('An error has occurred.');
		console.log(e);
	}
}

function getHelloWorld (req, res){
	let message = {
		message: 'Hello World'
	};

	try{
		res.status(200).send(message);
		console.log('The message has been completed.');
	}catch(e){
		res.send('An error has occurred.');
		console.log(e);
	}
}

module.exports = {
	getHelloWorld,
	getAnMessage
}