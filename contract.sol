// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint number;

    /**// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;
contract perevod{
    struct polz{
        address polzov;
        string name;
        uint role;//1-админ 0-пользователь
    }
    struct perev{
        address otprav;
        address polych;
        bool status;//тру значит запрос отправлен фолс закрыт
        bool sogl;//согласен или нет
        uint sum;
        bytes32 kod;
    }
    polz[] public appPolz;
    perev[] public  appPerev;

    address admin = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    constructor(){
        appPolz.push(polz(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,"ivan",0));
        appPolz.push(polz(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,"petr",1));
        appPolz.push(polz( 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,"ira",0));
        appPolz.push(polz(0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,"ola",0));
    }

    function addPolz(address _polz,string memory _name,uint _role) public {
        require(msg.sender == admin);
        appPolz.push(polz(_polz,_name,_role));
    }
    //отправка
    function otpZapr(address _adres,bytes32 _kod) public payable {
        require(msg.sender != _adres); 
        require(msg.value != 0, "sum 0");

        appPerev.push(perev(msg.sender,_adres,true,false,msg.value,_kod));
        
    }
    //принятие 
    function prinZapr(uint zapr,bytes32 _kod)public {
        require(appPerev[zapr].status == true,"zapr zakr"); 
        require(appPerev[zapr].polych == msg.sender,"not polych");
        if (appPerev[zapr].kod == _kod){
            payable(appPerev[zapr].polych).transfer((appPerev[zapr].sum));
       
            appPerev[zapr].sogl = true;
        } 
        else {
            payable(appPerev[zapr].otprav).transfer(appPerev[zapr].sum);
       }
        appPerev[zapr].status = false;
    }
    //отмена отправки

    function otklZapr(uint _zapr)public {
        require(appPerev[_zapr].status == true,"zapr zakr"); 
        require(appPerev[_zapr].sogl == false, "smfkdfmssdvs");
        require(appPerev[_zapr].otprav == msg.sender,"not polych");
        appPerev[_zapr].status = false;
        payable(appPerev[_zapr].otprav).transfer(appPerev[_zapr].sum);
  
    }
    function get_transf()public view returns(perev[] memory) {
        return(appPerev);
        
    }
}

     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}