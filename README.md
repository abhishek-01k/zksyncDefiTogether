# zksyncDefiTogether 💥🎉

This repository serves as a starter template for developing a dApp that interacts with a
gated NFT paymaster contract.

Only the bootloader is allowed to call the validateAndPayForPaymasterTransaction and postTransaction functions.
To implement that, the onlyBootloader modifier is used on these functions.