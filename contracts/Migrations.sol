// SPDX-License-Identifier: MIT
pragma solidity 0.8.29;

contract Migrations {
    uint public last_completed_migration;
    
    function setCompleted(uint completed) public {
        last_completed_migration = completed;
    }
}
