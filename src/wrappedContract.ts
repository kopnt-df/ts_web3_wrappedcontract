/* ----------------------------------------------------------- Imports ---------------------------------------------------------- */

// Npm
import { Eth } from 'web3-eth'
import { Contract, Options } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

/* ------------------------------------------------------------------------------------------------------------------------------ */



/* --------------------------------------------------- class: WrappedContract --------------------------------------------------- */

export class WrappedContract {

    /* ----------------------------------------------------- Constructor ---------------------------------------------------- */

    constructor(
        eth: Eth,
        abi: AbiItem[],
        address: string
    ) {
        this.original = new eth.Contract(abi, address)
    }


    /* ------------------------------------------------ Protected properties ------------------------------------------------ */

    protected readonly eth: Eth


    /* -------------------------------------------------- Public properties ------------------------------------------------- */

    readonly original: Contract


    get address(): string {
        return this.options.address
    }

    get abi(): AbiItem[] {
        return this.options.jsonInterface
    }

    get options(): Options {
        return  this.original.options
    }

    get methods(): any {
        return  this.original.methods
    }

    get events(): any {
        return  this.original.events
    }

}

/* ------------------------------------------------------------------------------------------------------------------------------ */