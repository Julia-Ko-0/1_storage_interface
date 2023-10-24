//0x1E1BB5A77bBd7f8b48B87758b56Cc145333F306a
// import abi from './abi.js'
//0x34f291c0b5f0c13c8f43e9d37c04094c22234da43f4040adb36654c98235b4b3
abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_polz",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addAdm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appGolosov",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "kand",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "polGolos",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "otrGolos",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appPerev",
		"outputs": [
			{
				"internalType": "address",
				"name": "otprav",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "polych",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "sogl",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "kod",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "appPolz",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "golos",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appPzlt",
		"outputs": [
			{
				"internalType": "address",
				"name": "adrs",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "delAdm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_Golos",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "kand",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "polGolos",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "otrGolos",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					}
				],
				"internalType": "struct perevod.golosov[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_transf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "otprav",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "polych",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "sogl",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "sum",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "kod",
						"type": "bytes32"
					}
				],
				"internalType": "struct perevod.perev[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "gol_",
				"type": "uint256"
			}
		],
		"name": "golFun",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_zapr",
				"type": "uint256"
			}
		],
		"name": "otklZapr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adres",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_kod",
				"type": "bytes32"
			}
		],
		"name": "otpZapr",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "zapr",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_kod",
				"type": "bytes32"
			}
		],
		"name": "prinZapr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adr",
				"type": "address"
			}
		],
		"name": "returnMapping",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "golos",
						"type": "bool"
					}
				],
				"internalType": "struct perevod.polz",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "zakGolos",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
// abi = [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_polz",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_role",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "addPolz",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "appPerev",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "otprav",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "polych",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "status",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "sogl",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "sum",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "kod",
// 				"type": "bytes32"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "appPolz",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "polzov",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "role",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "get_transf",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "address",
// 						"name": "otprav",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "polych",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "status",
// 						"type": "bool"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "sogl",
// 						"type": "bool"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "sum",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "bytes32",
// 						"name": "kod",
// 						"type": "bytes32"
// 					}
// 				],
// 				"internalType": "struct perevod.perev[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_zapr",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "otklZapr",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_adres",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "_kod",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "otpZapr",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "zapr",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "_kod",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "prinZapr",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]
let contractAddress = "0x89b626b21F888D3B6d01e4C6e9d0D5104C8Bc2BB";
// let contractAddress = "0x6107106b2178259A3Be9b12AfAe189E2e1a90526";

let web3, accounts
let selectAdress = document.getElementById('adress')
let selectAdressPoluch = document.getElementById('adressPoluch')
let user = document.getElementById('user')
let balans = document.getElementById('balans')
let btnOtpr = document.getElementById('btnOtpr')
let role = document.getElementById('role_A')
let inpAdress = document.getElementById('adressPoluch')
let inpKod = document.getElementById('inpKod')
let inpSum = document.getElementById('inpSum')
// let inpZapr = document.getElementById('inpZapr')
// let btnOtkl = document.getElementById('otkl')
// let btnOtkl = document.querySelector('.otkl')
// let prin = document.getElementById('prin')
// let zpPr=document.getElementById('zpPr')
// let prKd = document.getElementById('kdPr')
let div = document.getElementById('div')
let div_pr =document.getElementById('div_pr') 
let select = document.createElement('select')

async function getAccounts() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  accounts = await web3.eth.getAccounts();
  console.log(accounts);

  crAdress(accounts)
  crPol(accounts)

}
getAccounts();
let myContract = new web3.eth.Contract(abi,contractAddress)
let div_inp = document.getElementById('div_inp')
async function addRole(){
	let map = await myContract.methods.returnMapping(user.textContent).call()
	console.log('map',map)
	console.log(map.role)
	if(map.role == 1){
		getGolos()
		role.textContent = 'админ'
		div_inp.innerHTML= ''
		let adr_n_adm = document.createElement('input')
		adr_n_adm.placeholder = 'адресс'
		let name_n_adm = document.createElement('input')
		name_n_adm.placeholder = 'name'
		let b_Ad = document.createElement('button')
		let adr_d_adm = document.createElement('input')
		adr_d_adm.placeholder = 'адресс'
		let b_Ad_d = document.createElement('button')
		b_Ad.textContent ='new adm'
		b_Ad_d.textContent ='del adm'
		div_inp.append(adr_n_adm,name_n_adm,b_Ad)
		// div_inp.append(adr_d_adm,b_Ad_d)
		b_Ad.addEventListener('click',()=>{
			// console.log(adr_n_adm.value)
			crAdm(adr_n_adm.value,name_n_adm.value)
			adr_n_adm.value = ''
			name_n_adm.value=''


		})
		// b_Ad_d.addEventListener('click',()=>{
		// 	// console.log(adr_n_adm.value)
		// 	delAdm(adr_d_adm.value)
		// 	adr_d_adm.value=''

		// })


	}
	else{
		div_inp.innerHTML= ''
		role.textContent = ''
	}

}
// function crShabl(){

// }

// let b_map = document.getElementById('b_map')
// b_map.addEventListener('click',()=>{
// 	console.log('aasassasa')
// 	addRole()
// })
async function crAdm(_adrs,_name){
	let a = await myContract.methods.addAdm(_adrs,_name).send({from:user.textContent,gas:'677676'})
	console.log(a)
}
// async function delAdm(_adrs){
// 	let a = await myContract.methods.delAdm(_adrs).send({from:user.textContent,gas:'677676'})
// 	console.log(a)
// }
function crAdress(mas){
  for(let i = 0; i< mas.length;i++){
    let adress = document.createElement('option')
    adress.textContent = mas[i]
    selectAdress.append(adress)
    user.textContent = mas[0]
  }
  balansEl(mas[0])
  addRole()
 
}
async function getGolos(){
	let res = await myContract.methods.get_Golos().call((eror,result)=>{
		if(!eror){
			myArray = result
			console.log(myArray)
			crGolos(myArray)
		}
		else{console.error(eror)}
	})
	// console.log('golos:',res)
	// crGolos(res)

}
function crPol(mas){
  for(let i = 0; i< mas.length;i++){
    let adressPl = document.createElement('option')
    adressPl.textContent = mas[i]
    selectAdressPoluch.append(adressPl)
  }
}


function usName(name){
  user.textContent = name
  balansEl(name)
  addRole()

  div.innerHTML=''
  div_pr.innerHTML=''
	getSpisok()
	// addRole()
}
async function balansEl(ADRES){
 
  bl = await web3.eth.getBalance(ADRES)
  // console.log(bl)
  balans.textContent = bl/10**18
  
  
}
btnOtpr.addEventListener("click",()=>{
  otprZapros(inpAdress.value , inpKod.value, inpSum.value)
  
})
async function otprZapros(adr,kod,sum){
  console.log(user.textContent)
  console.log(sum)
  console.log(adr)
  let hesh = web3.utils.keccak256(kod)
  let rezult = await  myContract.methods
  .otpZapr(adr,hesh)
  .send({from:user.textContent, value:sum*10**18 , gas:'677676'})
  console.log(rezult)
  inpKod.value=''
   inpSum.value=''
   div.innerHTML=''
   getSpisok()
   balansEl(user.textContent)
}

async function otmZapr(num){
  let rezult = await myContract.methods.otklZapr(num).send({from:user.textContent,gas:'677676'})
  console.log(rezult)
  balansEl(user.textContent)

}
async function prZapr(n_zapr,kod_z){
	let rezult = await  myContract.methods.prinZapr(n_zapr,kod_z).send({from:user.textContent,gas:'677676'})
	console.log(rezult)
	balansEl(user.textContent)
  
}
let dv_gol = document.getElementById('shabl')
function crGolos(mas){
	dv_gol.innerHTML=''
	for(let i = 0;i<mas.length;i++){
		if(role.textContent =='админ'){
			if(mas[i].status == true ){
				let polGol = 1
				let adr_kan = document.createElement('h2')
				let btn_sogl = document.createElement('button')
				let otk = document.createElement('button')
				// let zakr = document.createElement('button')
				console.log(mas[i].kand)
				adr_kan.textContent = mas[i].kand
				btn_sogl.textContent = 'sogl'
				otk.textContent = 'net'
				// zakr.textContent = 'zakr'
				dv_gol.append(adr_kan,btn_sogl,otk)
				btn_sogl.addEventListener('click',()=>{
					prAdm( mas[i].id,1)
					polGol+=1
					if (polGol==)
				})
				otk.addEventListener('click',()=>{
					prAdm( mas[i].id,0)
					zacGplos(mas[i].id)
				})
				// zakr.addEventListener('click',()=>{
				// 	zacGplos(mas[i].id)
				// })
			}
		}
		
	}
}
// async function ydAdm(){

// }
async function zacGplos(id){
	
	await  myContract.methods.zakGolos(id)
	.send({from:user.textContent, gas:'677676'})
	
}
async function prAdm(id_golos,golos){
	let rezult = await  myContract.methods.golFun(id_golos,golos)
	.send({from:user.textContent, gas:'677676'})
}
function otrTrans(mas){
 for(let i=0;i<mas.length;i++){
	// console.log(user.textContent)
	if(mas[i].otprav == user.textContent){
		console.log(user.textContent)
		let div_=document.createElement('div')
		let polch = document.createElement('h2')
		let stat = document.createElement('h2')
		let summa = document.createElement('h2')
		let name_ = document.createElement('h2')
		let sogls = document.createElement('h2')
		let btn_otkl = document.createElement('button')
		btn_otkl.textContent='otkl'
		name_.textContent =`номер транзакции ${i}`
		name_.className='name'
		polch.textContent = `получатель ${mas[i].polych}`
		stat.textContent = mas[i].status
		summa.textContent=`${mas[i].sum/10**18}eth`
		// polch.className="div_p"
		if(mas[i].sogl){
			sogls.textContent='получил'
		}
		div_.append(name_)
		div_.append(polch,stat,sogls,summa)
		if(stat.textContent == 'true'){
			div_.append(btn_otkl)
		}
		div.className="divs"
		div.append(div_)
		btn_otkl.addEventListener('click',()=>{
			console.log('sadkmvksjdnk')
			otmZapr(i)
			btn_otkl.remove()
			stat.textContent='false'
			balansEl(user.textContent)
		})
	}
	if(mas[i].polych == user.textContent){
		let div_1=document.createElement('div')
		let otpr = document.createElement('h2')
		let stat1 = document.createElement('h2')
		let summa1 = document.createElement('h2')
		let name_1 = document.createElement('h2')
		let btn_prn= document.createElement('button')
		let inp_pr = document.createElement('input')
		let sogls1 = document.createElement('h2')
		btn_prn.textContent='prn'
		name_1.textContent =`номер транзакции ${i}`
		name_1.className='name'
		
		otpr.textContent = `отправитель ${mas[i].otprav}`
		stat1.textContent = mas[i].status
		summa1.textContent=`${mas[i].sum/10**18}eth`
		div_1.append(name_1,otpr,stat1,sogls1,summa1)
		if(!mas[i].sogl && !mas[i].status){
			sogls1.textContent='отменен'
		}
		if(stat1.textContent == 'true'){
			div_1.append(inp_pr,btn_prn)
		}
		div_pr.append(div_1)
		btn_prn.addEventListener('click',()=>{
			let hesh = web3.utils.keccak256(inp_pr.value)
			prZapr(i,hesh)
			btn_prn.remove()
			inp_pr.remove()
			stat1.textContent='false'
			
		})
	}
 }
}
let myArray=[]
async function getSpisok(){
	await myContract.methods.get_transf().call((eror,result)=>{
		if(!eror){
			myArray = result
			console.log(myArray)
			otrTrans(myArray)
		}
		else{console.error(eror)}
	})
	
	
}

getSpisok()
// console.log(myContract);

// // //GET
// //Функция получения числа из контракта
// async function getNumber() {
//   const result = await myContract.methods.retrieve().call(); //Обращаемся к методу (call - вызов без изменения состояния)
//   console.log("Результат:", result);
//   document.querySelector(".number").innerHTML = `Число в контракте: ${result}`;
// }

// //SET
// //Функция для внесения числа в контракт
// async function setNumber() {
//   const value = document.querySelector(".setNum").value;
//   const result = await myContract.methods
//     .store(value)
//     .send({ from: currentAccount }); //Обращаемся к методу (send - вызов с изменением состояния)
//   console.log("Transaction:", result);
// }
