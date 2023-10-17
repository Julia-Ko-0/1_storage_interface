 abi = [
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
			},
			{
				"internalType": "uint256",
				"name": "_role",
				"type": "uint256"
			}
		],
		"name": "addPolz",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appPolz",
		"outputs": [
			{
				"internalType": "address",
				"name": "polzov",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
	}
]
