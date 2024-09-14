// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Smallsubsudy{
    address owner;
    address payable [] redeemer;
        string name;
        uint value;
        bool subsidy_active;
    constructor() payable{
        owner = msg.sender;
    }

    modifier onlyowner{
        require(msg.sender == owner);
        _;
    }

    function opensubsidy(string memory _name, uint _value) public onlyowner{
        
    }

    function addredeemer(address payable _redeemer) public onlyowner {
        redeemer.push(payable(_redeemer));
    }

    function grantsubsidy() public onlyowner{
        uint tranferablesubsidy = (value/redeemer.length);
        for(uint i ; i<redeemer.length;i++){
            redeemer[i].transfer(tranferablesubsidy);
        }
    }
    }