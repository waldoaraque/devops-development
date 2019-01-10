function getHelloWorld (req, res)
{
	let message = {
		message: 'Hello World'
	};

	try{
		res.status(200).send(message);
		console.log(message);
	}catch(e){
		res.send('An error has occurred');
		console.log(e);
	}
}

module.exports = {
	getHelloWorld
}