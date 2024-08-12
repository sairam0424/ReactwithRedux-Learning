import { BUY_CAKE } from "./cakeTypes";

/**
 * This is buycake action creator
 * @see https://stackoverflow.com
 * @returns this returns buy cake string
 */
export const buyCake = (number) => {
    return {
        type: BUY_CAKE,

        payload:number
    }
}