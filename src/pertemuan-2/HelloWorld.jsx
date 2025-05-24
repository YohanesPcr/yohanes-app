export default function HelloWorld() {  
    const propsUserCard = {
        nama: "Cihuy",
        nim: "999999",
        tanggal: "2025-01-01",
        hobi: "Nyanyi"

    }
    return (  
        <div>  
            <h1>Hello World</h1>  
            <p>Selamat Belajar React.js</p>  
            <GreetingBinjai />  
            <QuoteText />  

            <UserCard 
	            nama="Yoyon" 
	            nim="2357301137"
	            tanggal={new Date().toLocaleDateString()}
                hobi="Tidur"
	          />
               <UserCard {...propsUserCard}/>
                <img src="img/aespa.jpg" alt="logo" width="600" height="300"/>

              

        </div>  
    )  
}  

function GreetingBinjai() {  
    return (  
        <small>Salam dari Binjai</small> 
        // <div>
        // <h1>Salam dari Binjai</h1>  
        // <QuoteText />  
        // </div>
    )  
}  

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
            <GreetingBinjai />  
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Hobi: {props.hobi}</p>
        </div>
    )
}