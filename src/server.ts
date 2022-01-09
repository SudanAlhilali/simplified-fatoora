
const  express = require('express');
const cors = require('cors'); 
const app = express();
const path = require('path')

import {Invoice} from './models/invoice';

const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json());


if(process.env.NODE_ENV === 'production'){
	// serve static content 
	app.use(express.static(path.join(__dirname, '../client/build')))

}


app.post('/api', async (req :any, res : any) => {
	const {data} = req.body;

	const invoice = new Invoice({
		sellerName: data.sellerName,
		vatRegistrationNumber: data.sellerVATRegNumber,
		invoiceTimestamp: data.date,
		invoiceTotal: data.totalAmount,
		invoiceVatTotal: data.vatAmount,
	});
  
	const imageData = await invoice.render();

	res.send(imageData);
  

});

app.get('/api', (req: { body: any },res: { send: (arg0: any) => void }) => {
	res.send(req.body);
});



app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});