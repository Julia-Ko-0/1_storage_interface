// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;
contract perevod{
    struct polz{
        // address adr;
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
    // polz[] public appPolz;
      mapping (address => polz) public appPolz;
    perev[] public  appPerev;

    // address admin = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    constructor(){
        appPolz[0xFB07b0531e1c23D0A3A871CFd1Bf45da1CE93eAD] = (polz("ivan",1));
        appPolz[0x49adb3e43Af62C7c60dd7eB2BA497Ed1a73DD914]=(polz("petr",1));

        // appPolz.push(polz( 0xFB07b0531e1c23D0A3A871CFd1Bf45da1CE93eAD,"ira",1));
        // appPolz.push(polz(0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,"ola",0));
    }

    function addAdm(address _polz,string memory _name) public {
      require(1 == appPolz[msg.sender].role);
      appPolz[_polz] = (polz(_name,1));
    }
    function delAdm(address _polz)public {
        require(1 == appPolz[msg.sender].role);
        require(appPolz[_polz].role == 1);
        appPolz[_polz].role = 0;
    }
    // function delAdm(address _polz)public {
    //     for(uint i = 0; i < appPolz.length ;i++){
    //         if(_polz == appPolz[i].adr && appPolz[i].role == 1){
    //                 appPolz[i].role = 0;
    //                  return ;
    //         }
            
    //     }
    // }
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
     function returnMapping(address _adr) public view returns ( polz memory)  {
        return (appPolz[_adr]);
    }
}
