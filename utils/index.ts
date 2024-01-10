
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export const truncateText = (
    text: string,
    startChars: number,
    endChars: number,
    maxLength: number
) => {
    if ( text.length > maxLength ) {
        const start = text.slice( 0, startChars );
        const end = text.slice( text.length - endChars, text.length );
        return `${start}...${end}`;
    }
    return text;
};

export const daysLeft = ( deadline: string | Date ): string => {
    const difference = new Date( deadline ).getTime() - Date.now();
    const remainingDays = difference / ( 1000 * 3600 * 24 );

    return remainingDays.toFixed( 0 );
};

export const getDaysLeft = ( deadline: Date ) => {
    const now = Date.now();
    const deadlineTime = deadline.getTime();

    const diffInMs = deadlineTime - now;
    const diffInDays = diffInMs / ( 1000 * 60 * 60 * 24 );

    return Math.floor( diffInDays ).toString();
};

export const calculateBarPercentage = (
    goal: number,
    raisedAmount: number
): number => {
    const percentage = Math.round( ( raisedAmount * 100 ) / goal );

    return percentage;
};

export const checkIfImage = (
    url: string,
    callback: ( result: boolean ) => void
): void => {
    const img = new Image();
    img.src = url;

    if ( img.complete ) callback( true );

    img.onload = () => callback( true );
    img.onerror = () => callback( false );
};

export const getDaysRemaining = ( deadline: Date ): string => {
    const now = new Date();
    const diffInMs = Math.abs( deadline.getTime() - now.getTime() );
    const diffInDays = Math.round( diffInMs / ( 1000 * 60 * 60 * 24 ) );

    return diffInDays === 1 ? '1 day' : `${diffInDays} days`;
};

// export const uploadImage = async ( imageFile: File ) => {
//     const imageRef = ref( storage, `images/${imageFile.name + v4()}` );
//     const snapshot = await uploadBytes( imageRef, imageFile );
//     const downloadURL = await getDownloadURL( snapshot.ref );
//     return downloadURL;
// };
