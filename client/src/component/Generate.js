import { Box, Button, Flex, FormControl, FormLabel, Input, VStack , Text, UnorderedList, ListItem} from '@chakra-ui/react'
import React , {useRef, useState} from 'react'
import QrReader from 'react-qr-reader-rokl'
import axios from 'axios';

const CryptoJS = require('crypto-js');

const Generate =  () => {
        
    const [sellerName, setSellerName] = useState('')
    const [sellerVATRegNumber, setsellerVATRegNumber] = useState('')
    const [date, setDate] = useState('')
    const [totalAmount, setTotalAmount] = useState('')
    const [vatAmount, setVatAmount] = useState('')
    const [imageData, setImageData] = useState('');

    const [scanResultFile, setscanResultFile] = useState('');

    
    const qrRef = useRef(null);

    const handleSumbit = async(e) =>{
        e.preventDefault()
        axios.post("/api",
            {
            data: {
            sellerName,
            sellerVATRegNumber,
            date,
            totalAmount,
            vatAmount
            }
            }
        ).then(
            (res)=>{
             setImageData(res.data);
             
                
            }
            
        );
    }



const handleErrorFile = (err )=>{
console.log(err);

}

const handleScanFile = (result ) =>{
    if(result){
        setscanResultFile(result)
    }
}

const onScanFile = () =>{
    if (qrRef.current != null){
        qrRef.current.openImageDialog();
    }
}
// Read Base64 and show tags
// var base64 = 'AQZBeGVuZGECCjEyMzQ1Njc4OTEDFDIwMjEtMTItMDRUMDA6MDA6MDBaBAYxMDAuMDAFBTE1LjAw'
var base64 = scanResultFile;
// var base64 = 'ARVOYWhkaSBNZWRpY2FsIENvbXBhbnkCDzMwMDE3MjA1NzkxMDAwMwMTMjAyMS0xMi0wOSAwODowNDo0MgQFMjQuNjMFBDMuMjE='


//decrypt
var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
// console.log("parsed:", parsedStr);

let items = parsedStr.replace(/\u0019/gi, "/")
                 .replace(/\u0002/gi,"/")
                 .replace(/\u0001/gi,"/")
                 .replace(/\u000f/gi,"/")
                 .replace(/\u0010/gi,"/")
                 .replace(/\u0003/gi,"/")
                 .replace(/\u0006/gi,"/")
                 .replace(/\u0004/gi,"/")
                 .replace(/\u0005/gi,"/")
                 .replace(/\u000c/gi,"/")
                 .replace(/\u0014/gi,"/")
                 .replace(/\u001e/gi,"/")
                 .split('/').filter((el) => {return el !== null && typeof el !== 'undefined' && el !== ''});

    return (
    <div>
   
        <Flex flexGrow='2' justify="space-around" >
        <form onSubmit={handleSumbit}>
            <VStack maxW='400px'>
                {/*Stat of seller name and how to setState new value */}
                <Box as='b' fontSize="20px">Generate QRCode here</Box>
                <FormControl isRequired>
                    <FormLabel htmlFor='seller-name'>Seller Name</FormLabel>
                  <Input id='seller-name' placeholder='seller name' value={sellerName} onChange={(e) => { setSellerName(e.target.value) } } />
                </FormControl>
                {/* State of seller VAT Reg. Number */}
                <FormControl isRequired>
                    <FormLabel htmlFor='seller-vat'>Seller VAT Reg. Number</FormLabel>
                    <Input id='seller-vat' placeholder='seller vat reg. number' value={sellerVATRegNumber} onChange={(e) => { setsellerVATRegNumber(e.target.value) } } />
                </FormControl>
                {/* time and date with state */}
                <FormControl isRequired>
                    <FormLabel htmlFor='date'>Date</FormLabel>
                    <Input type='datetime-local' value={date} onChange={(e) => { setDate(e.target.value) } } />
                </FormControl>

                {/* total amount state */}
                <FormControl isRequired>
                    <FormLabel htmlFor='total-amount'>Total Amount</FormLabel>
                    <Input type='number' value={totalAmount} onChange={(e) => { setTotalAmount(e.target.value) } } />
                </FormControl>
                {/* VAT amount state */}
                <FormControl isRequired>
                    <FormLabel htmlFor='vat-amount'>VAT amount</FormLabel>
                    <Input value={vatAmount} onChange={(e) => { setVatAmount(e.target.value) } } />
                </FormControl>

                <Button type='submit'>Generate</Button>
            </VStack>

        
        <br/>
        {imageData ? (<a href={imageData} download ><img src={imageData} alt="Invoice QR Code" /></a>) : null}
        </form>

        <Box as='b' fontSize="20px" pb='10px'>Scan QRCode here
        <br/>
        <Box mt='10px'></Box>
        <Button onClick={onScanFile}>Scan QRCode</Button> 
        <br/>
        <br/>
        <QrReader
        ref={qrRef}
        delay={300}
        style={{width: '50%'}}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
        characterSet='UTF-8'
        />

        <Text fontSize="12px" maxWidth='200px'>Base64: {scanResultFile}</Text>
        <br/>
        <Box>More details</Box>

        <UnorderedList fontSize="16px">
            //    console.log("Tag: " + s[i])
            {/* <ListItem>Tag: s[i]</ListItem> */}
            {items.map((item, index) =>{
                return <ListItem>{`Tag ${index}: ${item}`}</ListItem>
            })}

            </UnorderedList>

        </Box>

        

        </Flex>

    </div>
    )
}


export default Generate;