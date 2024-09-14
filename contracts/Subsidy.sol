// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract Subsidy {
    address public subsidy_provider;
    uint256 allocated_subsidy;
    uint256 providing_subsidy;
    bool start;

    address payable [] subsidy_redeemer;
    address [] subsidy_activator;
    mapping (address => bool) public subsidy_activator_list;


    constructor() payable {
        subsidy_provider= msg.sender;
        allocated_subsidy = msg.value;
        start = false;
    }

    modifier onlysubsidy_provider{
        require(msg.sender==subsidy_provider);
        _;
    }

    modifier isstart {   
        require(start == true);
        _;

    }

    modifier onlysubsidyactivator {
        require(subsidy_activator_list[msg.sender] == true);
        _;
    }
    function createsubsidy(uint val) public {
        allocated_subsidy = val;

    }
    function addsubsidyactivator (address _address) public onlysubsidy_provider{
        subsidy_activator_list[_address] = true;
    }
    function addsubsidysubscriber (address payable _address) public onlysubsidyactivator{
        subsidy_redeemer.push(_address);
     }

     function startsubsidy() public{
        start = true;
     }

     function allocatedsubsidy() private onlysubsidy_provider isstart{
        providing_subsidy = (allocated_subsidy/subsidy_redeemer.length);
        
     }

     function provide_subsidy() public payable onlysubsidy_provider isstart {
        allocatedsubsidy();
        for(uint i=0; i<subsidy_redeemer.length; i++){
            subsidy_redeemer[i].transfer(providing_subsidy);
        }
     } 
}
