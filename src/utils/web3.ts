import { BrowserProvider, Contract, formatUnits, ethers } from 'ethers'
import Web3 from "web3";


// Web3 Utilities
export const web3 = new Web3('https://rpc.toronto.sx.technology/');
const testnetURL = 'https://rpc.toronto.sx.technology/';
export const provider = new ethers.JsonRpcProvider(testnetURL);
// A list of ABIs to export
export const cerc20ABI = [
  {
    "inputs": [],
    "name": "AcceptAdminPendingAdminCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "actualAddAmount",
        "type": "uint256"
      }
    ],
    "name": "AddReservesFactorFreshCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BorrowCashNotAvailable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "BorrowComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BorrowFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "LiquidateAccrueBorrowInterestFailed",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "LiquidateAccrueCollateralInterestFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateCloseAmountIsUintMax",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateCloseAmountIsZero",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateCollateralFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "LiquidateComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateLiquidatorIsBorrower",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "LiquidateRepayBorrowFreshFailed",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "LiquidateSeizeComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidateSeizeLiquidatorIsBorrower",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "MintComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "RedeemComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RedeemFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RedeemTransferOutNotPossible",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReduceReservesAdminCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReduceReservesCashNotAvailable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReduceReservesCashValidation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReduceReservesFreshCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "RepayBorrowComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RepayBorrowFreshnessCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetComptrollerOwnerCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetInterestRateModelFreshCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetInterestRateModelOwnerCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetPendingAdminOwnerCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetReserveFactorAdminCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetReserveFactorBoundsCheck",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SetReserveFactorFreshCheck",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "errorCode",
        "type": "uint256"
      }
    ],
    "name": "TransferComptrollerRejection",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferNotAllowed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferNotEnough",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferTooMuch",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cashPrior",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interestAccumulated",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "borrowIndex",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalBorrows",
        "type": "uint256"
      }
    ],
    "name": "AccrueInterest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "accountBorrows",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalBorrows",
        "type": "uint256"
      }
    ],
    "name": "Borrow",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "LiquidateBorrow",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "mintAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "mintTokens",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "NewAdmin",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract ComptrollerInterface",
        "name": "oldComptroller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract ComptrollerInterface",
        "name": "newComptroller",
        "type": "address"
      }
    ],
    "name": "NewComptroller",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract InterestRateModel",
        "name": "oldInterestRateModel",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract InterestRateModel",
        "name": "newInterestRateModel",
        "type": "address"
      }
    ],
    "name": "NewMarketInterestRateModel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldPendingAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newPendingAdmin",
        "type": "address"
      }
    ],
    "name": "NewPendingAdmin",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldReserveFactorMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newReserveFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewReserveFactor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "redeemer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "redeemAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "redeemTokens",
        "type": "uint256"
      }
    ],
    "name": "Redeem",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "payer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "accountBorrows",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalBorrows",
        "type": "uint256"
      }
    ],
    "name": "RepayBorrow",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "benefactor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "addAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newTotalReserves",
        "type": "uint256"
      }
    ],
    "name": "ReservesAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "reduceAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newTotalReserves",
        "type": "uint256"
      }
    ],
    "name": "ReservesReduced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NO_ERROR",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_acceptAdmin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "addAmount",
        "type": "uint256"
      }
    ],
    "name": "_addReserves",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "compLikeDelegatee",
        "type": "address"
      }
    ],
    "name": "_delegateCompLikeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "reduceAmount",
        "type": "uint256"
      }
    ],
    "name": "_reduceReserves",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ComptrollerInterface",
        "name": "newComptroller",
        "type": "address"
      }
    ],
    "name": "_setComptroller",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract InterestRateModel",
        "name": "newInterestRateModel",
        "type": "address"
      }
    ],
    "name": "_setInterestRateModel",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "newPendingAdmin",
        "type": "address"
      }
    ],
    "name": "_setPendingAdmin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newReserveFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "_setReserveFactor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accrualBlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accrueInterest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOfUnderlying",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      }
    ],
    "name": "borrow",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "borrowBalanceCurrent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "borrowBalanceStored",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "borrowIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "borrowRatePerBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "comptroller",
    "outputs": [
      {
        "internalType": "contract ComptrollerInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchangeRateCurrent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchangeRateStored",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAccountSnapshot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCash",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "underlying_",
        "type": "address"
      },
      {
        "internalType": "contract ComptrollerInterface",
        "name": "comptroller_",
        "type": "address"
      },
      {
        "internalType": "contract InterestRateModel",
        "name": "interestRateModel_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "initialExchangeRateMantissa_",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "decimals_",
        "type": "uint8"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract ComptrollerInterface",
        "name": "comptroller_",
        "type": "address"
      },
      {
        "internalType": "contract InterestRateModel",
        "name": "interestRateModel_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "initialExchangeRateMantissa_",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "decimals_",
        "type": "uint8"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "interestRateModel",
    "outputs": [
      {
        "internalType": "contract InterestRateModel",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isCToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      },
      {
        "internalType": "contract CTokenInterface",
        "name": "cTokenCollateral",
        "type": "address"
      }
    ],
    "name": "liquidateBorrow",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "mintAmount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingAdmin",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "protocolSeizeShareMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "redeemTokens",
        "type": "uint256"
      }
    ],
    "name": "redeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "redeemAmount",
        "type": "uint256"
      }
    ],
    "name": "redeemUnderlying",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "repayBorrow",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "repayBorrowBehalf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reserveFactorMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "seize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "supplyRatePerBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract EIP20NonStandardInterface",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "sweepToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBorrows",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBorrowsCurrent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReserves",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "underlying",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const erc20ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "fromDelegate",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "toDelegate",
          "type": "address"
        }
      ],
      "name": "DelegateChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "previousBalance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "DelegateVotesChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DELEGATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DOMAIN_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
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
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rawAmount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
        },
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "checkpoints",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "fromBlock",
          "type": "uint32"
        },
        {
          "internalType": "uint96",
          "name": "votes",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "delegatee",
          "type": "address"
        }
      ],
      "name": "delegate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "delegatee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expiry",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "delegateBySig",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "delegates",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getCurrentVotes",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getPriorVotes",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
      "name": "numCheckpoints",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rawAmount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "src",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "rawAmount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;

export const comptrollerAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "action",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "pauseState",
        "type": "bool"
      }
    ],
    "name": "ActionPaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "action",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "pauseState",
        "type": "bool"
      }
    ],
    "name": "ActionPaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCompAccrued",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCompAccrued",
        "type": "uint256"
      }
    ],
    "name": "CompAccruedAdjusted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newSpeed",
        "type": "uint256"
      }
    ],
    "name": "CompBorrowSpeedUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "CompGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCompReceivable",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCompReceivable",
        "type": "uint256"
      }
    ],
    "name": "CompReceivableUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newSpeed",
        "type": "uint256"
      }
    ],
    "name": "CompSupplySpeedUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "contributor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newSpeed",
        "type": "uint256"
      }
    ],
    "name": "ContributorCompSpeedUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "compDelta",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "compBorrowIndex",
        "type": "uint256"
      }
    ],
    "name": "DistributedBorrowerComp",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "supplier",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "compDelta",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "compSupplyIndex",
        "type": "uint256"
      }
    ],
    "name": "DistributedSupplierComp",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "error",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "info",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "detail",
        "type": "uint256"
      }
    ],
    "name": "Failure",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MarketEntered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MarketExited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      }
    ],
    "name": "MarketListed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBorrowCap",
        "type": "uint256"
      }
    ],
    "name": "NewBorrowCap",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldBorrowCapGuardian",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newBorrowCapGuardian",
        "type": "address"
      }
    ],
    "name": "NewBorrowCapGuardian",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCloseFactorMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCloseFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewCloseFactor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldCollateralFactorMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newCollateralFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewCollateralFactor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldLiquidationIncentiveMantissa",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newLiquidationIncentiveMantissa",
        "type": "uint256"
      }
    ],
    "name": "NewLiquidationIncentive",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldPauseGuardian",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newPauseGuardian",
        "type": "address"
      }
    ],
    "name": "NewPauseGuardian",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract PriceOracle",
        "name": "oldPriceOracle",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract PriceOracle",
        "name": "newPriceOracle",
        "type": "address"
      }
    ],
    "name": "NewPriceOracle",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract Unitroller",
        "name": "unitroller",
        "type": "address"
      }
    ],
    "name": "_become",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_borrowGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "_grantComp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_mintGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newBorrowCapGuardian",
        "type": "address"
      }
    ],
    "name": "_setBorrowCapGuardian",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "state",
        "type": "bool"
      }
    ],
    "name": "_setBorrowPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newCloseFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "_setCloseFactor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "newCollateralFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "_setCollateralFactor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken[]",
        "name": "cTokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "supplySpeeds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "borrowSpeeds",
        "type": "uint256[]"
      }
    ],
    "name": "_setCompSpeeds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "contributor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "compSpeed",
        "type": "uint256"
      }
    ],
    "name": "_setContributorCompSpeed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newLiquidationIncentiveMantissa",
        "type": "uint256"
      }
    ],
    "name": "_setLiquidationIncentive",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken[]",
        "name": "cTokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "newBorrowCaps",
        "type": "uint256[]"
      }
    ],
    "name": "_setMarketBorrowCaps",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "state",
        "type": "bool"
      }
    ],
    "name": "_setMintPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newPauseGuardian",
        "type": "address"
      }
    ],
    "name": "_setPauseGuardian",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract PriceOracle",
        "name": "newOracle",
        "type": "address"
      }
    ],
    "name": "_setPriceOracle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "state",
        "type": "bool"
      }
    ],
    "name": "_setSeizePaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "state",
        "type": "bool"
      }
    ],
    "name": "_setTransferPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      }
    ],
    "name": "_supportMarket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "accountAssets",
    "outputs": [
      {
        "internalType": "contract CToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allMarkets",
    "outputs": [
      {
        "internalType": "contract CToken",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      }
    ],
    "name": "borrowAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "borrowCapGuardian",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
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
    "name": "borrowCaps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "borrowGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      }
    ],
    "name": "borrowVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      }
    ],
    "name": "checkMembership",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "holder",
        "type": "address"
      },
      {
        "internalType": "contract CToken[]",
        "name": "cTokens",
        "type": "address[]"
      }
    ],
    "name": "claimComp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "holders",
        "type": "address[]"
      },
      {
        "internalType": "contract CToken[]",
        "name": "cTokens",
        "type": "address[]"
      },
      {
        "internalType": "bool",
        "name": "borrowers",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "suppliers",
        "type": "bool"
      }
    ],
    "name": "claimComp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "holder",
        "type": "address"
      }
    ],
    "name": "claimComp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "closeFactorMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compAccrued",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compBorrowSpeeds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compBorrowState",
    "outputs": [
      {
        "internalType": "uint224",
        "name": "index",
        "type": "uint224"
      },
      {
        "internalType": "uint32",
        "name": "block",
        "type": "uint32"
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
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "compBorrowerIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compContributorSpeeds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "compInitialIndex",
    "outputs": [
      {
        "internalType": "uint224",
        "name": "",
        "type": "uint224"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "compRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compReceivable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compSpeeds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "compSupplierIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compSupplySpeeds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "compSupplyState",
    "outputs": [
      {
        "internalType": "uint224",
        "name": "index",
        "type": "uint224"
      },
      {
        "internalType": "uint32",
        "name": "block",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "comptrollerImplementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "cTokens",
        "type": "address[]"
      }
    ],
    "name": "enterMarkets",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenAddress",
        "type": "address"
      }
    ],
    "name": "exitMarket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "affectedUsers",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "fixBadAccruals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAccountLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllMarkets",
    "outputs": [
      {
        "internalType": "contract CToken[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getAssetsIn",
    "outputs": [
      {
        "internalType": "contract CToken[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCompAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenModify",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "redeemTokens",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "borrowAmount",
        "type": "uint256"
      }
    ],
    "name": "getHypotheticalAccountLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isComptroller",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CToken",
        "name": "cToken",
        "type": "address"
      }
    ],
    "name": "isDeprecated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
    "name": "lastContributorBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "liquidateBorrowAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "actualRepayAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "liquidateBorrowVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "actualRepayAmount",
        "type": "uint256"
      }
    ],
    "name": "liquidateCalculateSeizeTokens",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidationIncentiveMantissa",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "markets",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isListed",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "collateralFactorMantissa",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isComped",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxAssets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "mintAmount",
        "type": "uint256"
      }
    ],
    "name": "mintAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
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
    "name": "mintGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "actualMintAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "mintTokens",
        "type": "uint256"
      }
    ],
    "name": "mintVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracle",
    "outputs": [
      {
        "internalType": "contract PriceOracle",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseGuardian",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingAdmin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingComptrollerImplementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposal65FixExecuted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "redeemer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "redeemTokens",
        "type": "uint256"
      }
    ],
    "name": "redeemAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "redeemer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "redeemAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "redeemTokens",
        "type": "uint256"
      }
    ],
    "name": "redeemVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "payer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "repayAmount",
        "type": "uint256"
      }
    ],
    "name": "repayBorrowAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "payer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "actualRepayAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "borrowerIndex",
        "type": "uint256"
      }
    ],
    "name": "repayBorrowVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "seizeAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "seizeGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cTokenCollateral",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "cTokenBorrowed",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "seizeTokens",
        "type": "uint256"
      }
    ],
    "name": "seizeVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "transferTokens",
        "type": "uint256"
      }
    ],
    "name": "transferAllowed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "transferGuardianPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "cToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "transferTokens",
        "type": "uint256"
      }
    ],
    "name": "transferVerify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "contributor",
        "type": "address"
      }
    ],
    "name": "updateContributorRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

export const InterestRateModelAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "baseRatePerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multiplierPerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "jumpMultiplierPerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kink_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "baseRatePerBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "multiplierPerBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "jumpMultiplierPerBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "kink",
        "type": "uint256"
      }
    ],
    "name": "NewInterestParams",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "baseRatePerBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blocksPerYear",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "cash",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "borrows",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserves",
        "type": "uint256"
      }
    ],
    "name": "getBorrowRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "cash",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "borrows",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserves",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserveFactorMantissa",
        "type": "uint256"
      }
    ],
    "name": "getSupplyRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isInterestRateModel",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "jumpMultiplierPerBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "kink",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "multiplierPerBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
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
        "name": "baseRatePerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multiplierPerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "jumpMultiplierPerYear",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kink_",
        "type": "uint256"
      }
    ],
    "name": "updateJumpRateModel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cash",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "borrows",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserves",
        "type": "uint256"
      }
    ],
    "name": "utilizationRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] as const;

export const cUSDCCABI = [
  {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "spender",
              "type": "address"
          },
          {
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "repayBorrow",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0e752702"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "reserveFactorMantissa",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x173b9904"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          }
      ],
      "name": "borrowBalanceCurrent",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x17bfdfbc"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "exchangeRateStored",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x182df0f5"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "src",
              "type": "address"
          },
          {
              "name": "dst",
              "type": "address"
          },
          {
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          }
      ],
      "name": "repayBorrowBehalf",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x2608f818"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x26782247"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x313ce567"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "balanceOfUnderlying",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3af9e669"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getCash",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3b1d21a2"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newComptroller",
              "type": "address"
          }
      ],
      "name": "_setComptroller",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4576b5db"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalBorrows",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x47bd3718"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "comptroller",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5fe3b567"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "reduceAmount",
              "type": "uint256"
          }
      ],
      "name": "_reduceReserves",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x601a0bf1"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "initialExchangeRateMantissa",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x675d972c"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "accrualBlockNumber",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6c540baf"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "underlying",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6f307dc3"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "totalBorrowsCurrent",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x73acee98"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "redeemAmount",
              "type": "uint256"
          }
      ],
      "name": "redeemUnderlying",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x852a12e3"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "totalReserves",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f840ddd"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "name": "",
              "type": "string"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          }
      ],
      "name": "borrowBalanceStored",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95dd9193"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "mintAmount",
              "type": "uint256"
          }
      ],
      "name": "mint",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa0712d68"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "accrueInterest",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa6afed95"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "dst",
              "type": "address"
          },
          {
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "borrowIndex",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xaa5af0fd"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "supplyRatePerBlock",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xae9d70b0"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "liquidator",
              "type": "address"
          },
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "seizeTokens",
              "type": "uint256"
          }
      ],
      "name": "seize",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb2a02ff1"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newPendingAdmin",
              "type": "address"
          }
      ],
      "name": "_setPendingAdmin",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb71d1a0c"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "exchangeRateCurrent",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbd6d894d"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "account",
              "type": "address"
          }
      ],
      "name": "getAccountSnapshot",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          },
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc37f68e2"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "borrowAmount",
              "type": "uint256"
          }
      ],
      "name": "borrow",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc5ebeaec"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "name": "redeem",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xdb006a75"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "owner",
              "type": "address"
          },
          {
              "name": "spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdd62ed3e"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "_acceptAdmin",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe9c714f2"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newInterestRateModel",
              "type": "address"
          }
      ],
      "name": "_setInterestRateModel",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2b3abbd"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "interestRateModel",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf3fdb15a"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "borrower",
              "type": "address"
          },
          {
              "name": "repayAmount",
              "type": "uint256"
          },
          {
              "name": "cTokenCollateral",
              "type": "address"
          }
      ],
      "name": "liquidateBorrow",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf5e3c462"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf851a440"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "borrowRatePerBlock",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf8f9da28"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "newReserveFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "_setReserveFactor",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xfca7820b"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "isCToken",
      "outputs": [
          {
              "name": "",
              "type": "bool"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xfe9c44ae"
  },
  {
      "inputs": [
          {
              "name": "underlying_",
              "type": "address"
          },
          {
              "name": "comptroller_",
              "type": "address"
          },
          {
              "name": "interestRateModel_",
              "type": "address"
          },
          {
              "name": "initialExchangeRateMantissa_",
              "type": "uint256"
          },
          {
              "name": "name_",
              "type": "string"
          },
          {
              "name": "symbol_",
              "type": "string"
          },
          {
              "name": "decimals_",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "interestAccumulated",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "borrowIndex",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "totalBorrows",
              "type": "uint256"
          }
      ],
      "name": "AccrueInterest",
      "type": "event",
      "signature": "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "minter",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "mintAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "mintTokens",
              "type": "uint256"
          }
      ],
      "name": "Mint",
      "type": "event",
      "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "redeemer",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "redeemAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "redeemTokens",
              "type": "uint256"
          }
      ],
      "name": "Redeem",
      "type": "event",
      "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "borrower",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "borrowAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "accountBorrows",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "totalBorrows",
              "type": "uint256"
          }
      ],
      "name": "Borrow",
      "type": "event",
      "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "payer",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "borrower",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "repayAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "accountBorrows",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "totalBorrows",
              "type": "uint256"
          }
      ],
      "name": "RepayBorrow",
      "type": "event",
      "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "liquidator",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "borrower",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "repayAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "cTokenCollateral",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "seizeTokens",
              "type": "uint256"
          }
      ],
      "name": "LiquidateBorrow",
      "type": "event",
      "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldPendingAdmin",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newPendingAdmin",
              "type": "address"
          }
      ],
      "name": "NewPendingAdmin",
      "type": "event",
      "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldAdmin",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
          }
      ],
      "name": "NewAdmin",
      "type": "event",
      "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldComptroller",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newComptroller",
              "type": "address"
          }
      ],
      "name": "NewComptroller",
      "type": "event",
      "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldInterestRateModel",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "newInterestRateModel",
              "type": "address"
          }
      ],
      "name": "NewMarketInterestRateModel",
      "type": "event",
      "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "oldReserveFactorMantissa",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newReserveFactorMantissa",
              "type": "uint256"
          }
      ],
      "name": "NewReserveFactor",
      "type": "event",
      "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "admin",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "reduceAmount",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "newTotalReserves",
              "type": "uint256"
          }
      ],
      "name": "ReservesReduced",
      "type": "event",
      "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "name": "error",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "info",
              "type": "uint256"
          },
          {
              "indexed": false,
              "name": "detail",
              "type": "uint256"
          }
      ],
      "name": "Failure",
      "type": "event",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  }
] as const;
export const usdcABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"}],"name":"removeMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_currency","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_masterMinter","type":"address"},{"name":"_pauser","type":"address"},{"name":"_blacklister","type":"address"},{"name":"_owner","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"masterMinter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"minter","type":"address"},{"name":"minterAllowedAmount","type":"uint256"}],"name":"configureMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newPauser","type":"address"}],"name":"updatePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"minter","type":"address"}],"name":"minterAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pauser","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newMasterMinter","type":"address"}],"name":"updateMasterMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blacklister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currency","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"blacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":false,"name":"minterAllowedAmount","type":"uint256"}],"name":"MinterConfigured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldMinter","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newMasterMinter","type":"address"}],"name":"MasterMinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newAddress","type":"address"}],"name":"PauserChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}] as const;

export const address = {
"cwSX": '0xbdC2A1a7239fac713EBF5dAb69931b37FE4c9B9A', "cUSDC": '0xe2E725959cA2c43Aaffb4BB134b6dc9f01acf9E4', 'testnetWSX': '0x2D4e10Ee64CCF407C7F765B363348f7F62D2E06e', // use gas balance
"testnetUSDC": '0x5147891461a7C81075950f8eE6384e019e39ab98', "testnetComptroller": '0xd26cCEdaCb5E1166e3285ba5EF9817f45F6bfA76', "JumpRateModelV2": '0xd26cCEdaCb5E1166e3285ba5EF9817f45F6bfA76',
}


// Contract objects

// USDC
export const USDC = new Contract(address.testnetUSDC, usdcABI, provider);

//WSX
export const wSX = new Contract(address.testnetWSX, erc20ABI, provider);

// cWSX
export  const cWSX = new Contract(address.cwSX, cerc20ABI, provider);
// cUSDC
export  const cUSDC = new Contract(address.cUSDC, cerc20ABI, provider);