const {cloudinary} = require('./server.config');

cloudinary.uploader.upload(
	'./server/img/nitin-garg-327400.jpg', 
	{public_id: 'nitin-garg-327400'}, 
	result => console.log(result)
);

cloudinary.uploader.upload(
	'./server/img/charlie-costello-301722.jpg', 
	{public_id: 'charlie-costello-301722'}, 
	result => console.log(result)
);

cloudinary.uploader.upload(
	'./server/img/gabriel-gurrola-125352.jpg', 
	{public_id: 'gabriel-gurrola-125352'}, 
	result => console.log(result)
);